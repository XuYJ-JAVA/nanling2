package org.jeecg.modules.accinfo.controller;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.extern.slf4j.Slf4j;
import org.jeecg.common.api.vo.Result;
import org.jeecg.modules.accinfo.pojo.Acckinds;
import org.jeecg.modules.accinfo.mapper.AcckindsMapper;
import org.jeecg.modules.system.entity.SysUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.function.Consumer;

import org.jeecg.modules.accinfo.controller.LevelSearchController;

/**
 * @Description: TODO
 * @author: XuYJ
 * @date: 2022年01月11日 13:56
 */
@RequestMapping("/acc/info")
@Slf4j
@RestController
public class AcckindsController {
    @Autowired
    private AcckindsMapper acckindsMapper;
    private volatile boolean flag = true;
    private Acckinds acckinds;
    private byte[] file;


    /**
    * @ClassName: AcckindsController
    * @Description: 查询全部信息
    * @author: XuYJ
    * @date: 2022/1/18 14:10
    */
    @RequestMapping("/queryAll")
    public Result<?> queryListAll() {
        List<Acckinds> accInfos = acckindsMapper.selectList(null);
        return Result.OK(accInfos);
    }

    /**
    * @ClassName: AcckindsController
    * @Description: 根据条件查询事故信息显示在地图上
    * @author: XuYJ
    * @date: 2022/1/18 14:11
    */
    @GetMapping("/queryBySimpleConditions")
    public Result<?> queryBySimpleConditions(@RequestParam(name="startTime", defaultValue="") String startTime,
                                             @RequestParam(name="endTime", defaultValue="") String endTime,
                                             @RequestParam(name="routes", defaultValue="") String routes,
                                             @RequestParam(name="accidents", defaultValue="") String accidents,
                                             @RequestParam(name="results", defaultValue="") String results,
                                             @RequestParam(name="relatedRoute", defaultValue="") String relatedRoute,
                                             @RequestParam(name="belong", defaultValue="") String belong,
                                             @RequestParam(name="weather", defaultValue="") String weather) throws ParseException {
        QueryWrapper<Acckinds> wrapper  = new QueryWrapper<>();
        if (!startTime.equals("")) {
            wrapper.ge("time", startTime);
        }

        if (!endTime.equals("")) {
            wrapper.le("time", endTime);
        }

        if (!routes.equals("")) {
            String[] routesArr = routes.split(",");
            Consumer<QueryWrapper<Acckinds>> consumer = acckindsQueryWrapper -> {
                for (String s : routesArr) {
                    acckindsQueryWrapper.like("routes", s).or();
                }
            };
            wrapper.and(consumer);
        }

        if (!accidents.equals("")) {
            String[] accidentsArr = accidents.split(",");
            Consumer<QueryWrapper<Acckinds>> consumer = acckindsQueryWrapper -> {
                for (String s : accidentsArr) {
                    acckindsQueryWrapper.like("accidents", s).or();
                }
            };
            wrapper.and(consumer);
        }

        if (!results.equals("")) {
            String[] resultsArr = results.split(",");
            Consumer<QueryWrapper<Acckinds>> consumer = acckindsQueryWrapper -> {
                for (String s : resultsArr) {
                    acckindsQueryWrapper.like("results", s).or();
                }
            };
            wrapper.and(consumer);
        }

        if (!relatedRoute.equals("")) {
            wrapper.like("related_route", relatedRoute);
        }

        if (!belong.equals("")) {
            String[] belongArr = belong.split(",");
            Consumer<QueryWrapper<Acckinds>> consumer = acckindsQueryWrapper -> {
                for (String s : belongArr) {
                    acckindsQueryWrapper.like("belong", s).or();
                }
            };
            wrapper.and(consumer);
        }

        if (!weather.equals("")) {
            String[] weatherArr = weather.split(",");
            Consumer<QueryWrapper<Acckinds>> consumer = acckindsQueryWrapper -> {
                for (String s : weatherArr) {
                    acckindsQueryWrapper.like("weather", s).or();
                }
            };
            wrapper.and(consumer);
        }

        List<Acckinds> accInfos = acckindsMapper.selectList(wrapper);

        return Result.OK(accInfos);
    }

    /**
    * @ClassName: AcckindsController
    * @Description: 分级查询，并将查询数据作为前端图表的数据
    * @author: XuYJ
    * @date: 2022/1/27 17:13
    */
    @GetMapping("/getChartData")
    public Result<?> getChartData(@RequestParam(name="startTime", defaultValue="") String startTime,
                                  @RequestParam(name="endTime", defaultValue="") String endTime,
                                  @RequestParam(name="check", defaultValue="关闭时段") String check,
                                  @RequestParam(name="routes", defaultValue="") String routes,
                                  @RequestParam(name="accidents", defaultValue="") String accidents,
                                  @RequestParam(name="results", defaultValue="") String results,
                                  @RequestParam(name="relatedRoute", defaultValue="") String relatedRoute,
                                  @RequestParam(name="belong", defaultValue="") String belong,
                                  @RequestParam(name="unit", defaultValue="道路情况") String unit) {

        String[] unitArr = unit.split(",");
        LevelSearchController levelSearch = new LevelSearchController(unitArr,startTime, endTime, check, routes, accidents, results, relatedRoute, belong, acckindsMapper);
        ArrayList arrayList = new ArrayList();

        if (unitArr.length == 1) {
            arrayList = levelSearch.oneLevelSearch();
        } else if (unitArr.length == 2) {
            arrayList = levelSearch.twoLevelSearch();
        }
        return Result.OK(arrayList);
    }

    /**
    * @ClassName: AcckindsController
    * @Description: 查询各个道路的交通事故数
    * @author: XuYJ
    * @date: 2022/1/18 14:15
    */
    @GetMapping("/queryByRoads")
    public Result<?> queryByRoads() {
        List<Integer> list = new ArrayList<>();
        String[] roads = new String[]{"国道", "省道", "县乡", "城市", "其他"};

        for (int i = 0; i < roads.length; i++) {
            QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
            wrapper.like("routes", roads[i]);
            Integer num = acckindsMapper.selectCount(wrapper);
            list.add(num);
        }
        return Result.OK(list);
    }

    /**
    * @ClassName: AcckindsController
    * @Description: 根据id查询指定事故信息
    * @author: XuYJ
    * @date: 2022/1/18 14:15
    */
    @RequestMapping("/queryById")
    public Result<?> queryById(@RequestParam(name="id") String id) {
        Acckinds accInfo = acckindsMapper.selectById(id);
        return Result.OK(accInfo);
    }

    /**
    * @ClassName: AcckindsController
    * @Description: 根据地点查询指定事故信息
    * @author: XuYJ
    * @date: 2022/1/18 14:16
    */
    @RequestMapping("/queryByLocation")
    public Result<?> queryByLocation(@RequestParam(name="location") String location) {
        Acckinds accInfo = acckindsMapper.selectById(location);
        return Result.OK(accInfo);
    }

    /**
    * @ClassName: AcckindsController
    * @Description: 根据页码查询事故信息
    * @author: XuYJ
    * @date: 2022/1/18 14:16
    */
    @RequestMapping("/queryByPage")
    public Result<?> queryPage(@RequestParam(name="pageNo", defaultValue = "1") Integer pageNo, @RequestParam(name="pageSize", defaultValue = "10") Integer pageSize) {
        Page<Acckinds> page = new Page<>(pageNo, pageSize);
        acckindsMapper.selectPage(page, null);
        return Result.OK(page);
    }

    /**
    * @ClassName: AcckindsController
    * @Description: 查询大于创建时间的所有事故信息
    * @author: XuYJ
    * @date: 2022/1/18 14:16
    */
    @RequestMapping("/queryByCreateTime")
    public Result<?> queryByCreateTime(@RequestParam(name="createTime", required = true) Date createTime) {
        QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
        wrapper.isNotNull("createTime").ge("createTime", createTime);
        List<Acckinds> accInfos = acckindsMapper.selectList(wrapper);
        return Result.OK(accInfos);
    }

    /**
    * @ClassName: AcckindsController
    * @Description: 查询小于创建时间的所有事故信息
    * @author: XuYJ
    * @date: 2022/1/18 14:18
    */
    @RequestMapping("/queryByUpdateTime")
    public Result<?> queryByUpdateTime(@RequestParam(name="updateTime", required = true) Date updateTime) {
        QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
        wrapper.isNotNull("updateTime").le("updateTime", updateTime);
        List<Acckinds> accInfos = acckindsMapper.selectList(wrapper);
        return Result.OK(accInfos);
    }

    /**
    * @ClassName: AcckindsController
    * @Description: 查询某个时间范围的事故信息
    * @author: XuYJ
    * @date: 2022/1/18 14:17
    */
    @RequestMapping("/queryByPeriodTime")
    public Result<?> queryByPeriodTime(@RequestParam(name="startTime", defaultValue="") String startTime,
                                       @RequestParam(name="endTime", defaultValue="") String endTime) {
        QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
        if (!startTime.equals("")) {
            wrapper.ge("time", startTime);
        }
        if (!endTime.equals("")) {
            wrapper.le("time", endTime);
        }
        List<Acckinds> accInfos = acckindsMapper.selectList(wrapper);
        return Result.OK(accInfos);
    }

    /**
    * @ClassName: AcckindsController
    * @Description: 保存前端传过来的图片数据（暂时不上传）
    * @author: XuYJ
    * @date: 2022/1/19 2:51
    */
    @RequestMapping(value = "/upload", method =RequestMethod.POST)
    public Result<SysUser> upload(HttpServletRequest request, HttpServletResponse response) {
        Result<SysUser> result = new Result<>();
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
        MultipartFile mf = multipartRequest.getFile("file");
        try {
            byte[] file = mf.getBytes();
            this.file = file;
        } catch (IOException e) {
            e.printStackTrace();
        }

        result.setMessage("/5/5");
        result.setSuccess(true);
        return result;

    }

    /**
    * @ClassName: AcckindsController
    * @Description: 录入事故信息
    * @author: XuYJ
    * @date: 2022/1/19 3:51
    */
    @RequestMapping(value = "/submit", method = RequestMethod.POST)
    public Result<?> submit(@RequestBody JSONObject jsonObject) {
        Acckinds acckinds = new Acckinds();
        acckinds.setRoutes(jsonObject.get("routes").toString());
        acckinds.setAccidents(jsonObject.get("accidents").toString());
        acckinds.setResults(jsonObject.get("results").toString());
        acckinds.setRealpath((String) jsonObject.get("realpath"));
        acckinds.setRelatedRoute((String) jsonObject.get("relatedRoute"));
        acckinds.setTime((String) jsonObject.get("time"));
        acckinds.setMiniTime(((String) jsonObject.get("time")).split("_")[1]);
        acckinds.setRemark((String) jsonObject.get("remark"));
        acckinds.setLongitude((String) jsonObject.get("longitude"));
        acckinds.setLatitude((String) jsonObject.get("latitude"));
        acckinds.setBelong((String) jsonObject.get("belong"));
        acckinds.setWeather((String) jsonObject.get("weather"));
        String picName = acckinds.getTime() + ".jpg";
        acckinds.setPicpaths("img/" + picName);
        upload(acckinds.getPicpaths());
        acckindsMapper.insert(acckinds);

        return Result.OK(acckinds);
    }

    /**
    * @ClassName: AcckindsController
    * @Description: 修改数据库指定记录（事故信息）
    * @author: XuYJ
    * @date: 2022/2/10 1:09
    */
    @PostMapping(value="/modifyAccInfo")
    public Result<?> modifyAccInfo(@RequestBody JSONObject jsonObject) {
        Integer id = jsonObject.getIntValue("id");
        String routes = jsonObject.getString("routes");
        String accidents = jsonObject.getString("accidents");
        String results = jsonObject.getString("results");
        String realpath = jsonObject.getString("realpath");
        String relatedRoute = jsonObject.getString("relatedRoute");
        String time = jsonObject.getString("time");
        String miniTime = jsonObject.getString("miniTime");
        String remark = jsonObject.getString("remark");
        String picpaths = jsonObject.getString("picpaths");
        String longitude = jsonObject.getString("longitude");
        String latitude = jsonObject.getString("latitude");
        String belong = jsonObject.getString("belong");
        String weather = jsonObject.getString("weather");
        Acckinds acckinds = new Acckinds(id, routes, accidents, results, realpath, relatedRoute, time, miniTime, remark, picpaths, longitude, latitude, belong, weather);
        acckindsMapper.updateById(acckinds);
        return Result.OK();
    }

    /**
    * @ClassName: AcckindsController
    * @Description: 将图片上传到指定的服务器路径
    * @author: XuYJ
    * @date: 2022/1/30 2:40
    */
    private void upload(String picpaths) {
        try {
            File saveFile = new File(picpaths);
            FileCopyUtils.copy(this.file, saveFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
