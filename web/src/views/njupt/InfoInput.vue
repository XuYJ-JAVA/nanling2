<template>
  <a-card title="信息录入"
          style="width:60%; margin:auto">
    <p>道路类型</p>
    <a-checkbox-group :options="RoadPlainOptions"
                      v-model="storeParam['routes']"></a-checkbox-group>
    <a-divider></a-divider>

    <p>事故类型</p>
    <a-checkbox-group :options="AccTypePlainOptions"
                      v-model="storeParam['accidents']"></a-checkbox-group>
    <a-divider></a-divider>

    <p>损害类型</p>
    <a-checkbox-group :options="AccDegreePlainOptions"
                      v-model="storeParam['results']"></a-checkbox-group>
    <a-divider></a-divider>

    <p>所属大队</p>
    <a-radio-group v-model="storeParam['belong']">
      <template v-for="squadron in Squadron">
        <a-radio :key="squadron"
                 :value="squadron">{{ squadron }}
        </a-radio>
      </template>
    </a-radio-group>
    <a-divider></a-divider>

    <p>天气类型</p>
    <a-radio-group v-model="storeParam['weather']">
      <template v-for="weather in Weather">
        <a-radio :key="weather"
                 :value="weather">{{ weather }}
        </a-radio>
      </template>
    </a-radio-group>
    <a-divider></a-divider>

    <P>路段是否施工</P>
    <a-radio-group v-model="storeParam['relatedRoute']">
      <a-radio value="是">是</a-radio>
      <a-radio value="否">否</a-radio>
    </a-radio-group>
    <a-divider></a-divider>

    <p>地图选点</p>
    <div id="container"></div>
    <a-divider></a-divider>

    <p>事故地点</p>
    <a-space size="middle">
      <a-input placeholder="经度"
               v-model="storeParam['longitude']" />
      <a-input placeholder="纬度"
               v-model="storeParam['latitude']" />
    </a-space>
    <a-divider></a-divider>

    <p>具体地点</p>
    <a-input placeholder="请输入具体地点"
             v-model="storeParam['realpath']" />
    <a-divider></a-divider>

    <p>事故发生时间</p>
    <a-date-picker v-model="storeParam['time']"
                   :show-time=true />
    <a-divider></a-divider>

    <p>现场照片</p>
    <a-upload @change="handleFileChange"
              method="post"
              list-type="picture-card"
              :action="url.upload"
              @preview="handlePreview">
      <a-icon type="plus" />
      <div class="ant-upload-text">
        上传图片
      </div>
    </a-upload>
    <a-modal :visible="previewVisible"
             :footer="null"
             @cancel="handleCancel">
      <img alt="example"
           style="width: 100%"
           :src="previewImage" />
    </a-modal>
    <a-divider></a-divider>

    <p>备注</p>
    <a-textarea placeholder="请输入其他需求信息"
                v-model="storeParam['remark']"
                auto-size />
    <a-divider></a-divider>

    <a-space style="margin-left:40%"
             size="large">
      <a-popconfirm title="确认提交？"
                    ok-text="确认"
                    cancel-text="取消"
                    @confirm="confirmSubmit">
        <a-button type="primary">提交</a-button>
      </a-popconfirm>

      <a-popconfirm title="确认重置？"
                    ok-text="确认"
                    cancel-text="取消"
                    @confirm="confirmReset">
        <a-button>重置</a-button>
      </a-popconfirm>
    </a-space>

  </a-card>
</template>

<script>
import { postAction } from '@/api/manage'
import GetPoint from './map/GetPoint.vue'
import AMapLoader from '@amap/amap-jsapi-loader'
import Axios from 'axios'

const RoadPlainOptions = ['国道', '省道', '城市', '县乡', '集镇', '非道路', '其他']
const AccTypePlainOptions = ['机机', '机非', '非非', '多车', '人机', '人非', '单机', '单非', '其他']
const AccDegreePlainOptions = ['财损', '人伤', '亡人', '其他']
const Weather = ['晴', '雨', '雾', '冰', '雪']
const Squadron = ['一中队', '二中队', '三中队', '四中队', '五中队', '事故中队']

function getAllRings(feature) {
  var coords = feature.geometry.coordinates
  var rings = []
  for (var i = 0, len = coords.length; i < len; i++) {
    rings.push(coords[i][0])
  }
  return rings
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(error)
  })
}

export default {
  name: 'InfoInput',
  components: { GetPoint },
  data() {
    let that = this
    return {
      map: null,
      AMap: null,
      AMapUI: null,
      zoom: 11,
      storeParam: {
        longitude: 0,
        latitude: 0,
        realpath: ''
      }, // 需要录入的全部信息
      RoadPlainOptions,
      AccTypePlainOptions,
      AccDegreePlainOptions,
      Weather,
      Squadron,
      previewVisible: false,
      previewImage: '',
      url: {
        upload: window._CONFIG['domianURL'] + '/acc/info/upload',
        submit: '/acc/info/submit'
      }
    }
  },

  methods: {
    // 确认将数据提交至数据库
    confirmSubmit(e) {
      if (this.check() === false) {
        this.$message.warning('除备注外，均为必填项！')
        return
      }
      this.storeParam['time'] = this.storeParam['time'].format('yyyy.MM.DD_HH.mm.ss')

      postAction(this.url.submit, this.storeParam).then(res => {
        if (res.success) {
          this.$message.success('录入成功！')
        } else {
          this.$message.warning(res.message)
        }
        // 时间置空, 防止以时间为文件名称的文件重复
        this.storeParam['time'] = null
      })
    },

    confirmReset() {
      console.log()
      this.storeParam = {}
      this.$message.success('重置成功')
    },

    handleFileChange(obj) {
      console.log(obj)
    },

    handleCancel() {
      this.previewVisible = false
    },

    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },

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
          that.storeParam['longitude'] = e.lnglat.getLng()
          that.storeParam['latitude'] = e.lnglat.getLat()
          marker.setMap(that.map)

          let parameters = {
            key: 'a45f4a96cfc85d78479be2130643ddd2', // web服务类型的key
            location: e.lnglat.getLng() + ',' + e.lnglat.getLat(),
            radius: 100, // 范围，默认：1000
            output: 'json' // 返回数据格式
            // extensions: "base",
          }
          let requestParameters =
            'https://restapi.amap.com/v3/geocode/regeo?output=' +
            parameters.output +
            '&location=' +
            parameters.location +
            '&key=' +
            parameters.key +
            '&radius=' +
            parameters.radius

          Axios.get(requestParameters).then(
            function(response) {
              that.storeParam['realpath'] = response.data.regeocode.formatted_address
            },
            function(err) {
              console.log(err)
            }
          )
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
    },

    // 校验，保证必填项不为空
    check() {
      if (this.storeParam['routes'] === undefined || this.storeParam['routes'].length === 0) {
        return false
      }
      if (this.storeParam['accidents'] === undefined || this.storeParam['accidents'].length === 0) {
        return false
      }
      if (this.storeParam['results'] === undefined || this.storeParam['results'].length === 0) {
        return false
      }
      if (this.storeParam['belong'] === undefined || this.storeParam['belong'] === '') {
        return false
      }
      if (this.storeParam['relatedRoute'] === undefined || this.storeParam['relatedRouted'] === '') {
        return false
      }
      if (this.storeParam['time'] === undefined || this.storeParam['time'] === null) {
        return false
      }
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
