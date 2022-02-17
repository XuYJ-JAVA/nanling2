<template>
  <div id="container"
       ref="container"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'TwoLevelBar',
  props: ['source', 'dimensions'],

  data() {
    return {
      series: []
    }
  },

  watch: {
    source: function() {
      this.createBar()
    }
  },

  methods: {
    createBar() {
      let chartDom = this.$refs.container
      let myChart = echarts.init(chartDom, null, { renderer: 'svg' })
      let option = {
        legend: {},
        tooltip: {},
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            },
            magicType: {
              type: ['line', 'bar']
            }
          }
        },
        dataset: {
          dimensions: this.dimensions,
          source: this.source
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      }

      option && myChart.setOption(option)
      // 让图表随着屏幕大小变动自适应
      window.addEventListener('resize', function() {
        myChart.resize()
      })
    }
  },

  mounted() {
    this.createBar()
  }
}
</script>

<style scoped>
#container {
  width: 75vw;
  height: 45vh;
}
</style>