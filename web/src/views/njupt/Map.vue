<template>
  <div>
    <div id="container">
      <!-- z-index调整dom元素的显示等级，等级过小会被父元素覆盖 -->
      <a-button id="search-btn"
                type="primary"
                :icon="direction"
                @click="showDrawer">
      </a-button>

      <a-drawer title="简单搜索"
                width="500"
                placement="right"
                :closable="false"
                :visible="visible"
                :get-container="false"
                :wrap-style="{ position: 'absolute' }"
                @close="onClose">
        <time-radio ref="timeRadio"></time-radio>
        <a-divider />

        <road-type-tags ref="roadTypeTags"></road-type-tags>
        <a-divider />

        <acc-type-tags ref="accTypeTags"></acc-type-tags>
        <a-divider />

        <acc-degree-tags ref="accDegreeTags"></acc-degree-tags>
        <a-divider />

        <road-condition-radio ref="roadConditionRadio"></road-condition-radio>
        <a-divider />

        <weather-tags ref="weatherTags"></weather-tags>
        <a-divider />

        <squadron-tags ref="squadronTags"></squadron-tags>
        <a-divider />

        <a-button type="dashed"
                  size="small"
                  icon="search"
                  @click="search">确认搜索</a-button>
      </a-drawer>
    </div>

    <!-- 注册的信息窗体 -->
    <info-window-content :params="params"
                         :infoWindow="infoWindow"
                         ref="pop"
                         id="pop">
    </info-window-content>
    <div style="height:0">
      {{   dataFromAnalysis = this.$route.query.list }}
    </div>

  </div>
</template>

<script>
import { postAction, getAction, httpAction } from '@/api/manage'
import AMapLoader from '@amap/amap-jsapi-loader'
import { shallowRef } from '@vue/reactivity'
import TimeRadio from './tags/TimeRadio.vue'
import RoadTypeTags from '@/views/njupt/tags/RoadTypeTags'
import AccTypeTags from '@/views/njupt/tags/AccTypeTags'
import AccDegreeTags from './tags/AccDegreeTags.vue'
import RoadConditionRadio from '@/views/njupt/tags/RoadConditionRadio'
import InfoWindowContent from './infowindw/InfoWindowContent.vue'
import { Search } from '@/views/njupt/mixins/Search'
import { ShowPoint } from '@/views/njupt/mixins/ShowPoint'
import SquadronTags from './tags/SquadronTags.vue'
import WeatherTags from './tags/WeatherTags.vue'

function getAllRings(feature) {
  var coords = feature.geometry.coordinates
  var rings = []
  for (var i = 0, len = coords.length; i < len; i++) {
    rings.push(coords[i][0])
  }
  return rings
}

export default {
  components: {
    TimeRadio,
    AccDegreeTags,
    InfoWindowContent,
    RoadTypeTags,
    AccTypeTags,
    RoadConditionRadio,
    SquadronTags,
    WeatherTags
  },
  mixins: [Search, ShowPoint],
  name: 'Map',
  data() {
    return {
      infoWindow: null,
      params: {},
      AMap: null,
      AMapUI: null,
      dataFromAnalysis: [],
      data: [], // data用于封装所有事故信息
      queryParam: {},
      visible: false,
      show: true,
      direction: 'left',
      url: {
        list: '/acc/info/queryAll',
        queryById: '/acc/info/queryByid',
        queryBySimpleConditions: '/acc/info/queryBySimpleConditions'
      }
    }
  },

  setup() {
    const map = shallowRef(null)
    return {
      map
    }
  },

  // 当由事故分析界面跳转过来并携带事故信息的数据时，将其显示在地图上
  watch: {
    dataFromAnalysis: function() {
      if (this.dataFromAnalysis !== [] && this.dataFromAnalysis !== undefined) {
        this.data = this.dataFromAnalysis
        this.showAccInfo()
      }
    }
  },

  methods: {
    initMap() {
      AMapLoader.load({
        key: 'a60a54a59267d67bb4600f02ce6e636c', // 申请的web端开发者key
        version: '2.0', // 指定要加载的JSAPI的版本
        plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.Driving', 'AMap.AutoComplete'], // 需要使用的插件列表，如比例尺'AMap.Scale'等
        AMapUI: {
          version: '1.1',
          plugins: ['misc/PointSimplifier', 'geo/DistrictExplorer', 'overlay/SimpleInfoWindow']
        },
        Loca: {
          version: '2.0.0'
        }
      })
        .then(AMap => {
          this.AMap = AMap
          this.AMapUI = AMapUI
          this.map = new AMap.Map('container', {
            // 设置地图容器id
            zoom: 14, // 初始化地图级别
            center: [118.334083, 30.914621],
            resizeEnable: true // 初始化地图中心点位置
          })

          var toolbar = new AMap.ToolBar()
          this.map.addControl(toolbar)
          var Scale = new AMap.Scale()
          this.map.addControl(Scale)

          // 将除南陵县外的地区涂白
          this.initP()
          // 以标记点的形式显示所有事故位置信息

          this.showAccInfo()
        })
        .catch(e => {
          console.log(e)
        })
    },

    // 以标记点的形式显示所有事故位置信息 this.$refs.pop.$el
    showAccInfo() {
      let infoWindow = new this.AMap.InfoWindow({
        content: this.$refs.pop.$el,
        isCustom: true
      })
      this.infoWindow = infoWindow
      this.initPage(this.AMapUI.PointSimplifier, this.data, infoWindow) // 将事故信息以海量点的形式展示在地图上
    },

    showDrawer() {
      if (this.visible) {
        this.visible = false
        this.direction = 'left'
      } else {
        this.visible = true
        this.direction = 'right'
      }
    },

    onClose() {
      this.direction = 'left'
      this.visible = false
    },

    search() {
      this.searchAccInfo()
    }
  },
  mounted() {
    // DOM初始化完成进行地图初始化
    postAction(this.url.list).then(res => {
      if (res.success) {
        this.data = res.result
      } else {
        this.$message.warning(res.message)
      }
      this.initMap()
    })
  }
}
</script>

<style scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  position: relative;
}

#search-btn {
  height: 80px;
  width: 15px;
  position: absolute;
  right: 0;
  top: 45vh;
  z-index: 9999;
}
</style>