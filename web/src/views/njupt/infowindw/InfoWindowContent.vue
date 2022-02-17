<template>
  <div id="pop"
       ref="pop">
    <a-card :title="params.realpath"
            :bordered="false"
            style="width: 300px;">
      <a slot="extra"
         @click="handleClose">
        <a-icon type="close" />
      </a>

      <p>道路类型: {{ params.routes }}</p>
      <p>事故类型: {{ params.accidents }}</p>
      <p>事故程度: {{ params.results }}</p>
      <p>路段是否施工: {{ params.relatedRoute }}</p>
      <p>事故发生时间: {{ params.time }}</p>
      <p>备注: {{ params.remark }}</p>
    </a-card>
    <br />
  </div>

</template>

<script>
export default {
  name: 'InfoWindowContent',
  props: ['params', 'infoWindow'],

  methods: {
    handleClose() {
      this.infoWindow.close()
    }
  }
}
</script>

<style scoped>
</style>