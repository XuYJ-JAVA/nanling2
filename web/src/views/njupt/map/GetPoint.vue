<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'

function getAllRings(feature) {
  var coords = feature.geometry.coordinates
  var rings = []
  for (var i = 0, len = coords.length; i < len; i++) {
    rings.push(coords[i][0])
  }
  return rings
}

export default {
  name: 'GetPoint',

  data() {
    return {
      map: null,
      AMap: null,
      AMapUI: null,
      zoom: 11,
      longitude: 0,
      latitude: 0
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
          plugins: ['misc/PointSimplifier', 'geo/DistrictExplorer']
        },
        Loca: {
          version: '2.0.0'
        }
      }).then(AMap => {
        this.map = new AMap.Map('container', {
          zoom: this.zoom,
          center: [118.326339, 30.90522],
          resizeEnable: true
        })
        this.AMap = AMap
        this.AMapUI = AMapUI

        this.initP()

        let that = this
        this.map.on('click', function(e) {
          if (that.map.getZoom() < 20) {
            that.$message.warning('请将地图放大至最大后点击选点！')
            return
          }

          // 清理地图上所有的点标记
          let markers = that.map.getAllOverlays('marker')
          for (let i = 0; i < markers.length; i++) {
            markers[i].remove()
          }

          // 为选择的地点添加唯一点标记
          let marker = new AMap.Marker({
            clickable: false,
            position: e.lnglat,
            icon: './poi-marker-default.png',
            offset: new AMap.Pixel(-25, -57)
          })

          console.log(e)

          console.log(marker)

          that.longitude = e.pos[0]
          that.latitude = e.pos[1]
          console.log(that.longitude)
          marker.setMap(that.map)
        })
      })
    },

    // 将除南陵县以外的地区涂白
    initP() {
      let districtExplorer = new this.AMapUI.DistrictExplorer({
        map: this.map
      })

      let countryCode = 100000
      let cityCodes = [340223]
      let that = this
      districtExplorer.loadMultiAreaNodes(
        // 加载全国和市
        [cityCodes].concat(cityCodes),
        function(error, areaNodes) {
          // 整个地图的边界
          let outer = [
            new that.AMap.LngLat(-180, 90),
            new that.AMap.LngLat(-180, -90),
            new that.AMap.LngLat(180, -90),
            new that.AMap.LngLat(180, 90)
          ]

          let cityNodes = areaNodes.slice(1)

          let path = []

          // 首先放置背景区域，整个世界地图
          path.push(outer)
          // 放置南陵县边界
          path.push.apply(path, getAllRings(cityNodes[0].getParentFeature()))

          // 绘制带孔多边形
          let polygon = new that.AMap.Polygon({
            strokeStyle: 'dashed', // 虚线
            strokeColor: 'red', // 线颜色
            strokeOpacity: 1, // 线透明度
            strokeWeight: 1, // 线宽
            fillColor: 'white', // 填充色白色
            fillOpacity: 1, // 填充透明度
            map: that.map,
            path: path // 绘制用边界点组成的数组
          })
        }
      )
    }
  },

  mounted() {
    this.initMap()
  }
}
</script>

<style scoped>
#container {
  width: 50%;
  height: 500px;
}
</style>