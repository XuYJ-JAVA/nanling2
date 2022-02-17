<template>
  <div>
    <a-card>
      <div>
        时间范围：
        <a-range-picker v-model="queryParam['time']" />
        <a-button type="primary"
                  @click="query">查询</a-button>
      </div>
      <a-table :columns="columns"
               :data-source="data"
               :scroll="{x:true}">
        <span slot="action"
              slot-scope="text">
          <a @click="handleChange(text)">修改</a>
        </span>
      </a-table>
      <a-modal title="信息修改"
               width="55%"
               :visible="visible"
               :confirm-loading="confirmLoading"
               @ok="handleOk"
               @cancel="handleCancel">

        <p>道路类型</p>
        <a-checkbox-group :options="RoadPlainOptions"
                          v-model="storeParam['routes']"></a-checkbox-group>
        <a-divider></a-divider>

        <p>事故类型</p>
        <a-checkbox-group :options="AccTypePlainOptions"
                          v-model="storeParam['accidents']"></a-checkbox-group>
        <a-divider></a-divider>

        <p>事故程度</p>
        <a-checkbox-group :options="AccDegreePlainOptions"
                          v-model="storeParam['results']"></a-checkbox-group>
        <a-divider></a-divider>

        <p>所属大队</p>
        <a-radio-group v-model="storeParam['belong']">
          <template v-for="squadron in Squadron">
            <a-radio :key="squadron"
                     :value="squadron">{{ squadron }}</a-radio>
          </template>
        </a-radio-group>
        <a-divider></a-divider>

        <p>天气类型</p>
        <a-radio-group v-model="storeParam['weather']">
          <template v-for="weather in Weather">
            <a-radio :key="weather"
                     :value="weather">
              {{ weather }}
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

        <!-- <p>现场照片</p>
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
                 @cancel="handlePreCancel">
          <img alt="example"
               style="width: 100%"
               :src="previewImage" />
        </a-modal>
        <a-divider></a-divider> -->

        <p>备注</p>
        <a-textarea placeholder="请输入其他需求信息"
                    v-model="storeParam['remark']"
                    auto-size />
        <a-divider></a-divider>

      </a-modal>
    </a-card>
  </div>
</template>

<script>
import { postAction } from '@/api/manage'
import { getAction } from '../../api/manage'
import moment from 'moment'

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '道路情况',
    dataIndex: 'routes',
    key: 'routes'
  },
  {
    title: '事故形态',
    dataIndex: 'accidents',
    key: 'accidents'
  },
  {
    title: '事故后果',
    dataIndex: 'results',
    key: 'results'
  },
  {
    title: '涉路施工',
    dataIndex: 'relatedRoute',
    key: 'relatedRoute'
  },
  {
    title: '事故地点',
    dataIndex: 'realpath',
    key: 'realpath'
  },
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time'
  },
  {
    title: '天气',
    dataIndex: 'weather',
    key: 'weather'
  },
  {
    title: '所属中队',
    dataIndex: 'belong',
    key: 'belong'
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' }
  }
]

const RoadPlainOptions = ['国道', '省道', '城市', '县乡', '其他']
const AccTypePlainOptions = ['机机', '机非', '非非', '多车', '其他']
const AccDegreePlainOptions = ['财损', '人伤', '亡人', '其他']
const Weather = ['晴', '雨', '雾', '冰', '雪']
const Squadron = ['一中队', '二中队', '三中队', '四中队', '五中队', '事故中队']

export default {
  name: 'InfoModify',

  data() {
    return {
      RoadPlainOptions,
      AccTypePlainOptions,
      AccDegreePlainOptions,
      Weather,
      Squadron,
      url: {
        upload: window._CONFIG['domianURL'] + '/acc/info/upload',
        queryAll: '/acc/info/queryAll',
        queryByPeriodTime: '/acc/info/queryByPeriodTime',
        modifyAccInfo: '/acc/info/modifyAccInfo'
      },
      fileList: [
        {
          uid: '-1',
          name: 'image.jpg',
          status: 'done',
          url: window._CONFIG['domianURL'] + '/img/2022.01.07_02.40.18.jpg'
        }
      ],
      columns: columns,
      data: [],
      visible: false,
      confirmLoading: false,
      previewVisible: false,
      previewImage: '',
      storeParam: {},
      queryParam: {}
    }
  },

  methods: {
    // 进行信息修改
    handleChange(text) {
      // 拷贝一个text，避免修改未提交就影响表格当中的值
      this.storeParam = JSON.parse(JSON.stringify(text))
      let time = this.storeParam['time']
      time = moment(time, 'YYYY.MM.DD_HH.mm.ss')
      this.storeParam['time'] = time
      console.log(this.storeParam['time'])
      this.visible = true
    },

    handleOk() {
      this.storeParam['routes'] = '[' + this.storeParam['routes'].toString() + ']'
      this.storeParam['accidents'] = '[' + this.storeParam['accidents'].toString() + ']'
      this.storeParam['results'] = '[' + this.storeParam['results'].toString() + ']'
      this.storeParam['time'] = this.storeParam['time'].format('yyyy.MM.DD_HH.mm.ss')
      this.storeParam['miniTime'] = this.storeParam['time'].split('_')[1]
      console.log(this.storeParam)
      postAction(this.url.modifyAccInfo, this.storeParam).then(res => {
        if (res.success) {
          this.$message.success('修改成功！')
        } else {
          this.$message.success('修改失败！')
        }
        this.visible = false
      })
    },

    handleCancel() {
      this.visible = false
    },

    handleFileChange(obj) {
      console.log(obj)
    },

    // 提交查询参数，并通过参数筛选得到事故信息
    query() {
      this.queryParam['startTime'] = this.queryParam.time[0].format('yyyy.MM.DD') + '_00.00.00'
      this.queryParam['endTime'] = this.queryParam.time[1].format('yyyy.MM.DD') + '_23.59.59'
      getAction(this.url.queryByPeriodTime, this.queryParam).then(res => {
        if (res.success) {
          let queryData = res.result
          for (let i = 0; i < queryData.length; i++) {
            queryData[i].routes = this.stringToArray(queryData[i]['routes'])
            queryData[i].accidents = this.stringToArray(queryData[i]['accidents'])
            queryData[i].results = this.stringToArray(queryData[i]['results'])
          }
          console.log(queryData)
          this.data = queryData
        } else {
          this.$message.warning(res.message)
        }
      })
    },

    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },

    handlePreCancel() {
      this.previewVisible = false
    },

    // 将以,为分割符的字符串转化为数组
    stringToArray(string) {
      return string
        .replaceAll('"', '')
        .replaceAll('[', '')
        .replaceAll(']', '')
        .replaceAll(' ', '')
        .split(',')
    }
  }

  // created() {
  //   postAction(this.url.queryAll).then(res => {
  //     if (res.success) {
  //       this.data = res.result
  //     } else {
  //       this.$message.warning(res.message)
  //     }
  //   })
  // }
}
</script>

<style scoped>
</style>