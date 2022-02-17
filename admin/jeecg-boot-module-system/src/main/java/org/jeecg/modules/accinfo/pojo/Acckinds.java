package org.jeecg.modules.accinfo.pojo;


import com.alibaba.fastjson.JSONArray;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.models.auth.In;
import jdk.nashorn.internal.ir.annotations.Ignore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * @Description: TODO
 * @author: XuYJ
 * @date: 2022年01月11日 1:06
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Acckinds {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String routes;
    private String accidents;
    private String results;
    private String realpath;
    private String relatedRoute;
    private String time;
    private String miniTime;
    private String remark;
    private String picpaths;
    private String longitude;
    private String latitude;
    private String belong;//中队信息
    private String weather;
}
