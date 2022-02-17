<template>
  <div id="container"
       ref="container">
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  methods: {
    createPie() {
      datasouce = [
        ['财损事故', 254],
        ['人伤事故', 207],
        ['亡人事故', 223],
        ['其他', 180]
      ]

      var chartDom = this.$refs.container
      var myChart = echarts.init(chartDom, null, { renderer: 'svg' })
      var option

      option = {
        title: {
          text: '道路事故统计',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        toolbox: {
          // 工具栏。
          show: true, // 展示工具栏
          orient: 'vertical', // 工具栏 icon 的布局朝向为纵向
          left: 'right', // 工具栏具右
          top: 'center', // 工具栏上下居中
          feature: {
            saveAsImage: { show: true, name: 'testsavepie' }
          }
        },
        dataset: {
          source: datasouce
        },
        series: [
          {
            name: '道路统计',
            type: 'pie',
            radius: '70%',

            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      option && myChart.setOption(option)
    }
  },
  mounted() {
    this.createPie()
  }
}
</script>