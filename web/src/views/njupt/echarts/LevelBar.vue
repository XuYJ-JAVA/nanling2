<template>
  <div id="container"
       ref="container">
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { Search } from '../mixins/Search'

export default {
  name: 'LevelBar',
  mixins: [Search],

  data() {
    return {
      data: {},
      url: {
        queryByRoads: '/acc/info/queryByRoads'
      },
      queryParam: {}
    }
  },

  methods: {
    createBar() {
      let chartDom = this.$refs.container
      let myChart = echarts.init(chartDom, null, { renderer: 'svg' })
      let myColor = ['#1089E7', 'F57474', '#56D0E3', '#F8B448', '#8B78F6', 'skyblue']
      console.log('roads', this.data)
      let option = {
        title: {},
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

        grid: {
          left: '22%',
          bottom: '10%'
        },
        // 不显示x轴的相关信息
        xAxis: {
          show: false
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            data: ['国道', '省道', '县乡', '城市', '其他'],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: 'gray'
            }
          },
          {
            data: this.data,
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: 'gray'
            }
          }
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            data: [19, 0, 2, 60, 19],
            yAxisIndex: 0,
            // 将柱子改成圆角
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                // 修改柱子的颜色
                color: function(params) {
                  return myColor[params.dataIndex]
                }
              }
            },
            // 修改柱子之间的距离
            barCategoryGap: 50,
            // 修改柱子的宽度
            barWidth: 20,
            label: {
              show: true,
              // 图形内显示
              position: 'inside',
              formatter: '{c}%'
            }
          },
          {
            name: '框',
            type: 'bar',
            data: [100, 100, 100, 100, 100],
            barCategoryGap: 50,
            barWidth: 20,
            yAxisIndex: 1,
            itemStyle: {
              color: 'none',
              borderColor: '#00c1de',
              borderWidth: 3,
              barBorderRadius: 15
            }
          }
        ]
      }

      option && myChart.setOption(option)

      window.addEventListener('resize', function() {
        myChart.resize()
      })
    }
  },

  mounted() {
    this.data = this.searchAccNumForRoads()
  }
}
</script>

<style scoped>
#container {
  width: 35vw;
  height: 45vh;
}
</style>