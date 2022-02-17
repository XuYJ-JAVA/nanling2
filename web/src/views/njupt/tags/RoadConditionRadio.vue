<template>
  <div>
    <div>
      <a-radio-group button-style="solid"
                     size="small"
                     style="border:0"
                     @change=onChange>
        <a-row>
          <a-col :span="12">
            <a-radio-button style="border:0"
                            value="否">
              正常路段
            </a-radio-button>
          </a-col>
          <a-col :span="12">
            <a-radio-button style="border:0"
                            value="是">
              施工路段
            </a-radio-button>
          </a-col>
        </a-row>
      </a-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadConditionRadio',

  data() {
    return {
      selectedRadio: ''
    }
  },

  methods: {
    // 将用户选择路况放入selectedRadio中
    onChange(event) {
      // 更新事件回调赋予event当前事件
      this.selectedRadio = event.target.value
    }
  }
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