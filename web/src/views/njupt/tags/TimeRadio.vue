<template>
  <div>
    <div>
      <a-radio-group default-value="a"
                     button-style="solid"
                     size="small"
                     style="border:0"
                     @change=onChange>
        <a-row>
          <a-col :span="12">
            <a-radio-button style="border:0"
                            value="时间不限">
              时间不限
            </a-radio-button>
          </a-col>
          <a-col :span="12">
            <a-radio-button style="border:0"
                            :value="currentTime">
              {{ currentTime + "以来" }}
            </a-radio-button>
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="12">
            <a-radio-button style="border:0;"
                            :value="currentTime-1">
              {{ currentTime - 1 + "以来" }}
            </a-radio-button>
          </a-col>
          <a-col :span="12">
            <a-radio-button style="border:0"
                            :value="currentTime-4">
              {{ currentTime - 4 + "以来" }}
            </a-radio-button>
          </a-col>
        </a-row>

        <a-radio-button style="border:0"
                        value="e">
          自定义范围...
        </a-radio-button>
      </a-radio-group>
      <a-range-picker :ranges="{ 今天: [moment(), moment()], 本月: [moment(), moment().endOf('month')] }"
                      :show-time="{
                              hideDisabledOptions: true,
                              defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
                            }"
                      @change="handlePickerChange"
                      :locale="locale"
                      v-if="visible" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
let date = new Date()
let currentTime = date.getFullYear()
export default {
  name: 'TimeRadio',
  data() {
    return {
      currentTime: currentTime,
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      locale,
      visible: false,
      dateStrings: ['', '']
    }
  },
  methods: {
    moment,

    // 将用户选择的事件条件放入dateStrings中
    onChange(event) {
      // 更新事件回调赋予event当前事件
      if (event.target.value === 'e') {
        // event.target指调用onChange的dom元素
        this.visible = true
      } else {
        if (event.target.value === '时间不限') {
          this.dateStrings = ['', '']
        } else {
          this.dateStrings = [event.target.value + '-01-01', '']
        }
        this.visible = false
      }
    },

    // 将用户选择的事件条件放入dateStrings中
    handlePickerChange(dates, dateStrings) {
      this.dateStrings[0] = dates[0].format('yyyy.MM.DD_HH.mm.ss')
      this.dateStrings[1] = dates[1].format('yyyy.MM.DD_HH.mm.ss')
    }
  },
  setup() {}
}
</script>

<style scoped>
a-radio-button {
  border: 0;
}
.ant-radio-button-wrapper:not(:first-child)::before {
  width: 0;
}
</style>
