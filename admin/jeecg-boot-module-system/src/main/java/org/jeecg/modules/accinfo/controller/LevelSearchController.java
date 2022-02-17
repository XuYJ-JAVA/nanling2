package org.jeecg.modules.accinfo.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import io.swagger.models.auth.In;
import lombok.extern.slf4j.Slf4j;
import org.jeecg.common.api.vo.Result;
import org.jeecg.modules.accinfo.pojo.Acckinds;
import org.jeecg.modules.accinfo.mapper.AcckindsMapper;
import org.springframework.web.bind.annotation.RestController;
import org.testng.annotations.AfterTest;
import org.testng.annotations.Test;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.function.Consumer;

/**
 * @Description: TODO
 * @author: XuYJ
 * @date: 2022年01月23日 1:48
 */
@Slf4j
@RestController
public class LevelSearchController {
    private List<String> unit;
    private String startTime;
    private String endTime;
    private String check;
    private String routes;
    private String accidents;
    private String results;
    private String relatedRoute;
    private String belong;
    private AcckindsMapper acckindsMapper;

    public LevelSearchController() {
    }

    public LevelSearchController(String[] unit, String startTime, String endTime, String check, String routes, String accidents, String results, String relatedRoute, String belong, AcckindsMapper acckindsMapper) {
        this.unit = Arrays.asList(unit);
        this.startTime = startTime;
        this.endTime = endTime;
        this.check = check;
        this.routes = routes;
        this.accidents = accidents;
        this.results = results;
        this.relatedRoute = relatedRoute;
        this.belong = belong;
        this.acckindsMapper = acckindsMapper;
    }

    /**
    * @ClassName: LevelSearchController
    * @Description: 一级查询，根据优先级最高的单位进行分类查询
    * @author: XuYJ
    * @date: 2022/1/25 15:39
    */
    public ArrayList oneLevelSearch() {
        Map<String, Integer> map = new HashMap<>();
        List<Acckinds> list = new ArrayList<>();
        ArrayList arrayList = new ArrayList();
        if (unit.get(0).equals("天")) {
            String startTimeCopy = startTime.equals("") ? getStartTime() : startTime;
            String endTimeCopy = endTime.equals("") ? getEndTime() : endTime;
            Date startDate = convertToDate(startTimeCopy);
            Date endDate = convertToDate(endTimeCopy);
            while (startDate.compareTo(endDate) < 0) {
                QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                setWrapper(wrapper, unit);
                startTimeCopy = convertToString(startDate);
                startDate.setDate(startDate.getDate() + 1);
                if (startDate.compareTo(endDate) > 0) {
                    startDate = endDate;
                }
                endTimeCopy = convertToString(startDate);
                wrapper.ge("time", startTimeCopy);
                wrapper.le("time", endTimeCopy);
                List<Acckinds> result = acckindsMapper.selectList(wrapper);
                Integer num = result.size();
                if (num != 0) {
                    list.addAll(result);
                    map.put(startTimeCopy + "~" + endTimeCopy, num);
                }
            }
        } else if (unit.get(0).equals("月")) {
            String startTimeCopy = startTime.equals("") ? getStartTime() : startTime;
            String endTimeCopy = endTime.equals("") ? getEndTime() : endTime;
            Date startDate = convertToDate(startTimeCopy);
            Date endDate = convertToDate(endTimeCopy);
            while (startDate.compareTo(endDate) < 0) {
                QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                setWrapper(wrapper, unit);
                startTimeCopy = convertToString(startDate);
                startDate.setMonth(startDate.getMonth() + 1);
                if (startDate.compareTo(endDate) > 0) {
                    startDate = endDate;
                }
                endTimeCopy = convertToString(startDate);
                wrapper.ge("time", startTimeCopy);
                wrapper.le("time", endTimeCopy);
                List<Acckinds> result = acckindsMapper.selectList(wrapper);
                Integer num = result.size();
                if (num != 0) {
                    list.addAll(result);
                    map.put(startTimeCopy + "~" + endTimeCopy, num);
                }
            }
        } else if (unit.get(0).equals("季度")) {
            String startTimeCopy = startTime.equals("") ? getStartTime() : startTime;
            String endTimeCopy = endTime.equals("") ? getEndTime() : endTime;
            Date startDate = convertToDate(startTimeCopy);
            Date endDate = convertToDate(endTimeCopy);
            while (startDate.compareTo(endDate) < 0) {
                QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                setWrapper(wrapper, unit);
                startTimeCopy = convertToString(startDate);
                startDate.setMonth(startDate.getMonth() + 3);
                if (startDate.compareTo(endDate) > 0) {
                    startDate = endDate;
                }
                endTimeCopy = convertToString(startDate);
                wrapper.ge("time", startTimeCopy);
                wrapper.le("time", endTimeCopy);
                List<Acckinds> result = acckindsMapper.selectList(wrapper);
                Integer num = result.size();
                if (num != 0) {
                    list.addAll(result);
                    map.put(startTimeCopy + "~" + endTimeCopy, num);
                }
            }
        } else if (unit.get(0).equals("半年")) {
            String startTimeCopy = startTime.equals("") ? getStartTime() : startTime;
            String endTimeCopy = endTime.equals("") ? getEndTime() : endTime;
            Date startDate = convertToDate(startTimeCopy);
            Date endDate = convertToDate(endTimeCopy);
            while (startDate.compareTo(endDate) < 0) {
                QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                setWrapper(wrapper, unit);
                startTimeCopy = convertToString(startDate);
                startDate.setMonth(startDate.getMonth() + 6);
                if (startDate.compareTo(endDate) > 0) {
                    startDate = endDate;
                }
                endTimeCopy = convertToString(startDate);
                wrapper.ge("time", startTimeCopy);
                wrapper.le("time", endTimeCopy);
                List<Acckinds> result = acckindsMapper.selectList(wrapper);
                Integer num = result.size();
                if (num != 0) {
                    list.addAll(result);
                    map.put(startTimeCopy + "~" + endTimeCopy, num);
                }
            }
        } else if (unit.get(0).equals("年")) {
            String startTimeCopy = startTime.equals("") ? getStartTime() : startTime;
            String endTimeCopy = endTime.equals("") ? getEndTime() : endTime;
            Date startDate = convertToDate(startTimeCopy);
            Date endDate = convertToDate(endTimeCopy);
            while (startDate.compareTo(endDate) < 0) {
                QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                setWrapper(wrapper, unit);
                startTimeCopy = convertToString(startDate);
                startDate.setYear(startDate.getYear() + 1);
                if (startDate.compareTo(endDate) > 0) {
                    startDate = endDate;
                }
                endTimeCopy = convertToString(startDate);
                wrapper.ge("time", startTimeCopy);
                wrapper.le("time", endTimeCopy);
                List<Acckinds> result = acckindsMapper.selectList(wrapper);
                Integer num = result.size();
                if (num != 0) {
                    list.addAll(result);
                    map.put(startTimeCopy + "~" + endTimeCopy, num);
                }
            }
        } else if (unit.get(0).equals("道路情况")) {
            if (!routes.equals("")) {
                for (String s : routes.split(",")) {
                    QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                    setWrapper(wrapper, unit);
                    wrapper.like("routes", s);
                    List<Acckinds> result = acckindsMapper.selectList(wrapper);
                    Integer num = result.size();
                    list.addAll(result);
                    map.put(s, num);
                }
            } else {
                String[] allRoutes = new String[]{"国道", "省道", "城市", "县乡", "其他"};
                for (String s : allRoutes) {
                    QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                    setWrapper(wrapper, unit);
                    wrapper.like("routes", s).or();
                    List<Acckinds> result = acckindsMapper.selectList(wrapper);
                    Integer num = result.size();
                    list.addAll(result);
                    map.put(s, num);
                }
            }
        } else if (unit.get(0).equals("事故形态")) {
            if (!accidents.equals("")) {
                for(String s : accidents.split(",")) {
                    QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                    setWrapper(wrapper, unit);
                    wrapper.like("accidents", s);
                    List<Acckinds> result = acckindsMapper.selectList(wrapper);
                    Integer num = result.size();
                    list.addAll(result);
                    map.put(s, num);
                }
            } else {
                String[] allAccidents = new String[]{"机机", "机非", "非非", "多车", "其他"};
                for (String s : allAccidents) {
                    QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                    setWrapper(wrapper, unit);
                    wrapper.like("accidents", s);
                    List<Acckinds> result = acckindsMapper.selectList(wrapper);
                    Integer num = result.size();
                    list.addAll(result);
                    map.put(s, num);
                }
            }
        } else if (unit.get(0).equals("事故后果")) {
            if (!results.equals("")) {
                for(String s : results.split(",")) {
                    QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                    setWrapper(wrapper, unit);
                    wrapper.like("results", s);
                    List<Acckinds> result = acckindsMapper.selectList(wrapper);
                    Integer num = result.size();
                    list.addAll(result);
                    map.put(s, num);
                }
            } else {
                String[] allResults = new String[]{"财损", "人伤", "亡人", "其他"};
                for (String s : allResults) {
                    QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                    setWrapper(wrapper, unit);
                    wrapper.like("results", s);
                    List<Acckinds> result = acckindsMapper.selectList(wrapper);
                    Integer num = result.size();
                    list.addAll(result);
                    map.put(s, num);
                }
            }
        } else if (unit.get(0).equals("涉路施工")) {
            if (!relatedRoute.equals("")) {
                for(String s : relatedRoute.split(",")) {
                    QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                    setWrapper(wrapper, unit);
                    wrapper.like("related_route", s);
                    List<Acckinds> result = acckindsMapper.selectList(wrapper);
                    Integer num = result.size();
                    list.addAll(result);
                    map.put(s, num);
                }
            } else {
                String[] allRelatedRoute = new String[]{"是", "否"};
                for (String s : allRelatedRoute) {
                    QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                    setWrapper(wrapper, unit);
                    wrapper.like("related_route", s);
                    List<Acckinds> result = acckindsMapper.selectList(wrapper);
                    Integer num = result.size();
                    list.addAll(result);
                    map.put(s, num);
                }
            }
        } else if (unit.get(0).equals("所属中队")) {
            if (!belong.equals("")) {
                for(String s : belong.split(",")) {
                    QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                    setWrapper(wrapper, unit);
                    wrapper.like("belong", s);
                    List<Acckinds> result = acckindsMapper.selectList(wrapper);
                    Integer num = result.size();
                    list.addAll(result);
                    map.put(s, num);
                }
            } else {
                String[] allBelong = new String[]{"一中队", "二中队", "三中队", "四中队", "五中队", "事故中队"};
                for (String s : allBelong) {
                    QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                    setWrapper(wrapper, unit);
                    wrapper.like("belong", s);
                    List<Acckinds> result = acckindsMapper.selectList(wrapper);
                    Integer num = result.size();
                    list.addAll(result);
                    map.put(s, num);
                }
            }
        }
        arrayList.add(map);
        arrayList.add(list);
        return arrayList;
    }

    /**
    * @ClassName: LevelSearchController
    * @Description: 二级查询，第一优先级为时间（单位为每5分钟），第二优先级为事故后果
    * @author: XuYJ
    * @date: 2022/1/28 3:02
    */
    public ArrayList twoLevelSearch() {
        Map<String, Map<String, Integer>> mapMap = new HashMap<>();
        List<Acckinds> list = new ArrayList<>();
        ArrayList arrayList = new ArrayList();
        String[] allResults = new String[]{"财损", "人伤", "亡人", "其他"};
        String startTime = this.startTime.equals("") ? getStartTime() : this.startTime;
        String endTime = this.endTime.equals("") ? getEndTime() : this.endTime;
        Date startDate = convertToDate(startTime);
        Date endDate = convertToDate(endTime);
        while (startDate.compareTo(endDate) < 0) {
            int tag = 0;
            boolean flag = false;
            startTime = convertToString(startDate);
            startDate.setMinutes(startDate.getMinutes() + 5);
            if (startDate.compareTo(endDate) > 0) {
                startDate = endDate;
            }
            endTime = convertToString(startDate);
            Map<String, Integer> map = new HashMap<>();
            if (!results.equals("")) {
                for (String s : results.split(",")) {
                    QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                    setWrapper(wrapper, unit);
                    wrapper.ge("time", startTime).le("time", endTime);
                    wrapper.like("results", s);
                    List<Acckinds> result = acckindsMapper.selectList(wrapper);
                    Integer num = result.size();
                    if (num == 0) tag++;
                    if (tag == results.split(",").length) {
                        flag = true;
                    }
                    list.addAll(result);
                    map.put(s, num);

                }
            } else {
                for (String s : allResults) {
                    QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
                    setWrapper(wrapper, unit);
                    wrapper.ge("time", startTime).le("time", endTime);
                    wrapper.like("results", s);
                    List<Acckinds> result = acckindsMapper.selectList(wrapper);
                    Integer num = result.size();
                    if (num == 0) tag++;
                    if (tag == allResults.length) {
                        flag = true;
                    }
                    list.addAll(result);
                    map.put(s, num);
                }
            }
            if (!flag) {
                mapMap.put(startTime + "~" + endTime, map);
            }
        }
        arrayList.add(mapMap);
        arrayList.add(list);
        return arrayList;
    }

    /**
    * @ClassName: LevelSearchController
    * @Description: 初始化mybatis-plus构造器
    * @author: XuYJ
    * @date: 2022/1/25 15:38
    */
    private void setWrapper(QueryWrapper<Acckinds> wrapper, List<String> unit) {
        if (!unit.contains("年") && !unit.contains("半年") && !unit.contains("季度") && !unit.contains("月") && !unit.contains("天") &&!unit.contains("分钟")) {
            if (!startTime.equals("")) {
                wrapper.ge("time", startTime);
            }

            if (!endTime.equals("")) {
                wrapper.le("time", endTime);
            }
        }

        if (check.equals("开启时段")) {
            wrapper.ge("mini_time", getStartMiniTime());
            wrapper.le("mini_time", getEndMiniTime());
        }

        if (!unit.contains("道路情况")) {
            if (!routes.equals("")) {
                String[] routesArr = routes.split(",");
                Consumer<QueryWrapper<Acckinds>> consumer = acckindsQueryWrapper -> {
                    for (String s : routesArr) {
                        acckindsQueryWrapper.like("routes", s).or();
                    }
                };
                wrapper.and(consumer);
            }
        }

        if (!unit.contains("事故形态")) {
            if (!accidents.equals("")) {
                String[] accidentsArr = accidents.split(",");
                Consumer<QueryWrapper<Acckinds>> consumer = acckindsQueryWrapper -> {
                    for (String s : accidentsArr) {
                        acckindsQueryWrapper.like("accidents", s).or();
                    }
                };
                wrapper.and(consumer);
            }
        }

        if (!unit.contains("事故后果")) {
            if (!results.equals("")) {
                String[] resultsArr = results.split(",");
                Consumer<QueryWrapper<Acckinds>> consumer = acckindsQueryWrapper -> {
                    for (String s : resultsArr) {
                        acckindsQueryWrapper.like("results", s).or();
                    }
                };
                wrapper.and(consumer);
            }
        }

        if (!unit.contains("涉路施工")) {
            if (!relatedRoute.equals("")) {
                wrapper.like("related_route", relatedRoute);
            }
        }

        if (!unit.contains("所属中队")) {
            if (!belong.equals("")) {
                String[] belongArr = belong.split(",");
                Consumer<QueryWrapper<Acckinds>> consumer = acckindsQueryWrapper -> {
                    for (String s : belongArr) {
                        acckindsQueryWrapper.like("belong", s).or();
                    }
                };
                wrapper.and(consumer);
            }
        }
    }

    /**
    * @ClassName: LevelSearchController
    * @Description: 将String格式的时间参数--"xxxx.xx.xx_xx.xx.xx"转化为Date
    * @author: XuYJ
    * @date: 2022/1/25 17:09
    */
    private Date convertToDate(String time) {
        // 传来的是String格式的时间参数--"xxxx.xx.xx_xx.xx.xx"，将其转化为Date类型的时间参数
        try {
            DateFormat sdf = new SimpleDateFormat("yyyy.MM.dd_HH.mm.ss");
            return sdf.parse(time);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
    * @ClassName: LevelSearchController
    * @Description: 将Date格式的时间参数转化为String--"xxxx.xx.xx_xx.xx.xx"
    * @author: XuYJ
    * @date: 2022/1/25 17:10
    */
    private String convertToString(Date time) {
        // 传来的是Date类型的时间参数，将其转化为String格式的时间参数--"xxxx.xx.xx_xx.xx.xx"
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd_HH.mm.ss");
            return sdf.format(time);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
    * @ClassName: LevelSearchController
    * @Description: 获得数据库中最晚的时间
    * @author: XuYJ
    * @date: 2022/1/25 17:33
    */
    private String getEndTime() {
        QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
        // Desc倒序
        wrapper.orderByDesc("time");
        List<Acckinds> acckinds = acckindsMapper.selectList(wrapper);
        return acckinds.get(0).getTime();
    }
    /**
    * @ClassName: LevelSearchController
    * @Description: 获得数据库中最早的时间
    * @author: XuYJ
    * @date: 2022/1/25 17:36
    */
    private String getStartTime() {
        QueryWrapper<Acckinds> wrapper = new QueryWrapper<>();
        // Asc顺序
        wrapper.orderByAsc("time");
        List<Acckinds> acckinds = acckindsMapper.selectList(wrapper);
        return acckinds.get(0).getTime();
    }

    /**
     * @ClassName: LevelSearchController
     * @Description: 获取开始时间的时分秒
     * @author: XuYJ
     * @date: 2022/1/27 18:10
     */
    private String getStartMiniTime() {
        Date startDate = convertToDate(startTime);
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("HH.mm.ss");
            return sdf.format(startDate);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
    * @ClassName: LevelSearchController
    * @Description: 获取结束时间的时分秒
    * @author: XuYJ
    * @date: 2022/1/27 18:10
    */
    private String getEndMiniTime() {
        Date endDate = convertToDate(endTime);
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("HH.mm.ss");
            return sdf.format(endDate);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
