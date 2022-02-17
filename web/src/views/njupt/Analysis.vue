<template>
  <div>
    <a-card style="width:100%"
            :tab-list="tabList"
            :active-tab-key="key"
            @tabChange="key => onTabChange(key, 'key')">

      <p v-if="key === 'accNum'"
         style="width:100%">
        <search-view ref="searchView"></search-view>
        <a-divider></a-divider>

        <a-button type="primary"
                  @click="generateChart">
          生成图表
        </a-button>

        <a-button id="map-btn"
                  @click="skipToMap">
          地图展示
        </a-button>

        <vertical-bar :xAxisData="xAxisData"
                      :seriesData="seriesData"
                      ref="verticalBar"
                      v-if="show">
        </vertical-bar>

        <two-level-bar :dimensions="dimensions"
                       :source="source"
                       v-else>
        </two-level-bar>

      </p>
      <p v-else-if="key === 'app'">

      </p>
      <p v-else>
        折线图
      </p>
    </a-card>
  </div>
</template>

<script>
import { postAction, getAction, httpAction } from '@/api/manage'
import VerticalBar from './echarts/VerticalBar'
import LevelBar from './echarts/LevelBar.vue'
import SearchView from './search/SearchView'
import TwoLevelBar from './echarts/TwoLevelBar.vue'
import Map from './Map'

export default {
  name: 'Analysis',
  components: { VerticalBar, LevelBar, SearchView, TwoLevelBar, Map },
  data() {
    return {
      tabList: [
        {
          key: 'accNum',
          tab: '高级分析'
        },
        {
          key: 'app',
          tab: '饼图'
        },
        {
          key: 'project',
          tab: '折线图'
        }
      ],
      key: 'accNum',
      url: {
        getChartData: '/acc/info/getChartData',
        mapUrl: '/njupt/nltp/map'
      },
      xAxisData: [],
      seriesData: [],
      source: [],
      dimensions: [],
      list: [],
      show: true
    }
  },

  methods: {
    onTabChange(key, type) {
      this[type] = key
    },

    generateChart() {
      let qp = this.$refs.searchView.queryParam
      let queryParam = {}
      let keys = Object.keys(qp)
      for (let i = 0; i < keys.length; i++) {
        queryParam[keys[i]] = qp[keys[i]].toString()
      }

      getAction(this.url.getChartData, queryParam).then(res => {
        if (res.success) {
          let map = res.result[0]
          console.log(map)
          this.list = res.result[1]
          if (qp['unit'].length === 1 || qp['unit'].length === 0) {
            this.show = true
            this.xAxisData = Object.keys(map)
            this.seriesData = Object.values(map)
          } else {
            this.show = false
            let oneLevelLabel = Object.keys(map).sort()
            let twoLevelLabel = Object.keys(map[oneLevelLabel[0]])
            let source = []
            let dimensions = []
            dimensions = ('xLabel,' + twoLevelLabel.toString()).split(',')
            for (let i = 0; i < oneLevelLabel.length; i++) {
              let data = {
                xLabel: oneLevelLabel[i]
              }
              for (let j = 0; j < twoLevelLabel.length; j++) {
                data[twoLevelLabel[j]] = map[data['xLabel']][twoLevelLabel[j]]
              }
              source[i] = data
            }
            this.dimensions = dimensions
            this.source = source
            console.log(this.source, this.dimensions)
          }
        } else {
          this.$message.warning(res.message)
        }
      })
    },

    skipToMap() {
      sessionStorage.setItem('list', JSON.stringify(this.list))
      this.$router.push({ path: this.url.mapUrl, query: { list: this.list } })
    }
  },

  mounted() {}
}
</script>

<style scoped>
#map-btn {
  float: right;
}
</style>