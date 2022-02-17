<template>
  <div id="container"
       ref="container">
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'VerticalBar',
  props: ['xAxisData', 'seriesData'],

  data() {
    return {}
  },

  watch: {
    seriesData: function() {
      this.createBar()
    },

    xAxisData: function() {
      this.createBar()
    }
  },

  methods: {
    createBar() {
      if (this.xAxisData !== []) {
        let chartDom = this.$refs.container
        let myChart = echarts.init(chartDom, null, { renderer: 'svg' })
        let option = {
          // 修改柱子的颜色
          color: ['#2f89cf'],
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
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          // 修改图表的大小
          grid: {
            left: '0%',
            bottom: '4%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: this.xAxisData,
              axisTick: {
                alignWithLabel: true
              },
              // 修改刻度标签相关样式
              axisLabel: {
                color: 'gray',
                fontSize: '12'
              },
              // 不显示x坐标轴的样式
              axisLine: {
                show: false
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              // 修改刻度标签相关样式
              axisLabel: {
                color: 'gray',
                fontSize: '12'
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: 'grid',
                  width: 1
                }
              }
            }
          ],
          series: [
            {
              name: 'Direct',
              type: 'bar',
              barWidth: '35%',
              itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
              },
              data: this.seriesData
            }
          ]
        }

        option && myChart.setOption(option)
        // 让图表随着屏幕大小变动自适应
        window.addEventListener('resize', function() {
          myChart.resize()
        })
      }
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