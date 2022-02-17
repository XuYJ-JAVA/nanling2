<template>
  <div>
    <p>
      <a-radio-group button-style="solid"
                     size="small"
                     style="border:0;width:100%"
                     @change="onChange">
        <a-row type="flex"
               align="middle">
          <a-col class="title"
                 :span="2">
            时间
          </a-col>
          <template v-for="time in Time">
            <a-col :key="time"
                   :span="2">
              <a-radio-button style="border:0"
                              :value="time">
                {{ time }}
              </a-radio-button>
            </a-col>
          </template>
          <a-col :span="7">
            <a-range-picker :ranges="{ 今天: [moment(), moment()], 本月: [moment(), moment().endOf('month')] }"
                            format="YYYY-MM-DD HH:mm:ss"
                            :show-time="{
                              hideDisabledOptions: true,
                              defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
                            }"
                            @change="handlePickerChange"
                            :locale="locale"
                            v-if="visible" />
          </a-col>
          <a-col :span="3">
            <a-switch checked-children="开启时段"
                      un-checked-children="关闭时段"
                      @change="handlePeriodSwitchChange"
                      v-if="visible" />
          </a-col>
        </a-row>
      </a-radio-group>
    </p>

    <p>
      <a-row>
        <a-col class="title"
               :span="2">
          道路情况
        </a-col>
        <template v-for="route in Routes">
          <a-col :key="route"
                 :span="2">
            <a-checkable-tag :key="route"
                             :checked="queryParam['routes'].indexOf(route) > -1"
                             @change="checked => handleChange(route, checked, 'routes')"
                             style="font-size: 14px;">
              {{ route }}
            </a-checkable-tag>
          </a-col>
        </template>
      </a-row>
    </p>

    <p>
      <a-row>
        <a-col class="title"
               :span="2">
          事故形态
        </a-col>
        <template v-for="accident in Accidents">
          <a-col :key="accident"
                 :span="2">
            <a-checkable-tag :key="accident"
                             :checked="queryParam.accidents.indexOf(accident) > -1"
                             @change="checked => handleChange(accident, checked, 'accidents')"
                             style="font-size: 14px;">
              {{ accident }}
            </a-checkable-tag>
          </a-col>
        </template>
      </a-row>
    </p>

    <p>
      <a-row>
        <a-col class="title"
               :span="2">
          事故后果
        </a-col>
        <template v-for="result in Results">
          <a-col :key="result"
                 :span="2">
            <a-checkable-tag :key="result"
                             :checked="queryParam.results.indexOf(result) > -1"
                             @change="checked => handleChange(result, checked, 'results')"
                             style="font-size: 14px;">
              {{ result }}
            </a-checkable-tag>
          </a-col>
        </template>
      </a-row>
    </p>

    <p>
      <a-radio-group button-style="solid"
                     size="small"
                     style="border:0;width:100%"
                     @change="handleRelatedRouteChange">
        <a-row>
          <a-col class="title"
                 :span="2">
            是否涉路施工
          </a-col>
          <template v-for="relatedRoute in RelatedRoute">
            <a-col :key="relatedRoute"
                   :span="2">
              <a-radio-button style="border:0"
                              :value="relatedRoute">
                {{ relatedRoute }}
              </a-radio-button>
            </a-col>
          </template>
        </a-row>
      </a-radio-group>
    </p>

    <p>
      <a-row>
        <a-col class="title"
               :span="2">
          所属中队
        </a-col>
        <template v-for="belong in Belong">
          <a-col :key="belong"
                 :span="2">
            <a-checkable-tag :key="belong"
                             :checked="queryParam.belong.indexOf(belong) > -1"
                             @change="checked => handleChange(belong, checked, 'belong')"
                             style="font-size: 14px;">
              {{ belong }}
            </a-checkable-tag>
          </a-col>
        </template>
      </a-row>
    </p>

    <p>
      <a-row>
        <a-col class="title"
               :span="2">
          参考单位
        </a-col>
        <template v-for="unit in Units">
          <a-col :key="unit"
                 :span="2">
            <a-checkable-tag :key="unit"
                             :checked="queryParam.unit.indexOf(unit) > -1"
                             @change="checked => handleChange(unit, checked, 'unit')"
                             style="font-size: 14px;">
              {{ unit }}
            </a-checkable-tag>
          </a-col>
        </template>
        <a-col :span="7">
          <template v-for="timeUnit in TimeUnits">
            <a-checkable-tag :key="timeUnit"
                             :checked="queryParam.unit.indexOf(timeUnit) > -1"
                             @change="checked => handleChange(timeUnit, checked, 'unit')"
                             style="font-size: 14px;">
              {{ timeUnit }}
            </a-checkable-tag>
          </template>
        </a-col>
        <a-col :span="5">
          <template v-for="u in queryParam.unit">
            <span style="color:skyblue"
                  :key="u">{{ u }}-></span>
          </template>
        </a-col>
      </a-row>
    </p>

    <p>
      <a-radio-group button-style="solid"
                     size="small"
                     style="border:0;width:100%"
                     @change="handleChartChange">
        <a-row>
          <a-col class="title"
                 :span="2">
            图表类型
          </a-col>
          <template v-for="chart in Chart">
            <a-col :key="chart"
                   :span="2">
              <a-radio-button style="border:0"
                              :value="chart">
                {{ chart }}
              </a-radio-button>
            </a-col>
          </template>
        </a-row>
      </a-radio-group>
    </p>

  </div>
</template>

<script>
import moment from 'moment'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'

let date = new Date()
let currentTime = date.getFullYear()
const TimeUnits = ['年', '半年', '季度', '月', '天', '分钟']
const Units = ['道路情况', '事故形态', '事故后果', '涉路施工', '所属中队']
const Time = [
  '时间不限',
  currentTime + '年以来',
  currentTime - 1 + '年以来',
  currentTime - 4 + '年以来',
  '自定义范围...'
]
const Routes = ['国道', '省道', '县乡', '城市', '集镇', '非道路', '其他']
const Accidents = ['机机', '机非', '非非', '多车', '人机', '人非', '单机', '单非', '其他']
const Results = ['财损', '人伤', '亡人', '其他']
const RelatedRoute = ['不限', '是', '否']
const Belong = ['一中队', '二中队', '三中队', '四中队', '五中队', '事故中队']
const Chart = ['饼图', '直方图', '折线图']
export default {
  name: 'SearchView',

  data() {
    return {
      Chart,
      TimeUnits,
      Units,
      Routes,
      Accidents,
      Results,
      RelatedRoute,
      Belong,
      Time,
      queryParam: {
        // queryParam所有的属性值都将被处理为字符串
        startTime: '',
        endTime: '',
        time: '',
        routes: [],
        accidents: [],
        results: [],
        relatedRoute: '',
        belong: [],
        unit: [],
        check: '关闭时段',
        chart: ''
      },
      visible: false,
      locale
    }
  },

  methods: {
    moment,

    handleChange(tag, checked, index) {
      const { routes, accidents, results, belong, unit } = this.queryParam
      if (index === 'routes') {
        const nextSelectedTags = checked ? [...routes, tag] : routes.filter(t => t !== tag)
        this.queryParam['routes'] = nextSelectedTags
      } else if (index === 'accidents') {
        const nextSelectedTags = checked ? [...accidents, tag] : accidents.filter(t => t !== tag)
        this.queryParam['accidents'] = nextSelectedTags
      } else if (index === 'results') {
        const nextSelectedTags = checked ? [...results, tag] : results.filter(t => t !== tag)
        this.queryParam['results'] = nextSelectedTags
      } else if (index === 'belong') {
        const nextSelectedTags = checked ? [...belong, tag] : belong.filter(t => t !== tag)
        this.queryParam['belong'] = nextSelectedTags
      } else if (index === 'unit') {
        let nextSelectedTags = checked ? [...unit, tag] : unit.filter(t => t !== tag)
        if (nextSelectedTags.length > 2) {
          nextSelectedTags = [nextSelectedTags[0], nextSelectedTags[2]]
        }
        this.queryParam['unit'] = nextSelectedTags
      }
    },

    // 为queryParam装载时间参数
    onChange(event) {
      this.visible = false
      if (event.target.value === Time[4]) {
        this.visible = true
      } else if (event.target.value === Time[0]) {
        this.queryParam['startTime'] = ''
        this.queryParam['endTime'] = ''
      } else if (event.target.value === Time[1]) {
        this.queryParam['startTime'] = currentTime + '.01.01_00.00.00'
      } else if (event.target.value === Time[2]) {
        this.queryParam['startTime'] = currentTime - 1 + '.01.01_00.00.00'
      } else if (event.target.value === Time[3]) {
        this.queryParam['startTime'] = currentTime - 4 + '.01.01_00.00.00'
      }
    },

    // 将用户选择的时间条件放入queryParam中
    handlePickerChange(dates, dateStrings) {
      this.queryParam['startTime'] = dates[0].format('yyyy.MM.DD_HH.mm.ss')
      this.queryParam['endTime'] = dates[1].format('yyyy.MM.DD_HH.mm.ss')
    },

    // 是否涉及道路施工
    handleRelatedRouteChange(event) {
      if (event.target.value === RelatedRoute[0]) {
        this.queryParam['relatedRoute'] = ''
      } else {
        this.queryParam['relatedRoute'] = event.target.value
      }
    },

    handleChartChange(event) {
      this.queryParam['chart'] = event.target.value
    },

    handlePeriodSwitchChange(checked) {
      if (checked) {
        this.queryParam['check'] = '开启时段'
      } else {
        this.queryParam['check'] = '关闭时段'
      }
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 14px;
  color: #99a2aa;
  font-family: Microsoft Yahei, Tahoma, Helvetica, Arial, '\5B8B\4F53', sans-serif;
}

a-radio-button {
  border: 0;
}
.ant-radio-button-wrapper:not(:first-child)::before {
  width: 0;
}
</style>