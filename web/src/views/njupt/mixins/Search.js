import { getAction } from '@/api/manage'

export const Search = {
    methods: {
        // 装载查询参数
        setQueryParam() {
            let dateStrings = this.$refs.timeRadio.dateStrings
            if (dateStrings[0] !== undefined) {
              this.queryParam['startTime'] = dateStrings[0].replace('-', '.')
            }
            if (dateStrings[1] !== undefined) {
              this.queryParam['endTime'] = dateStrings[1].replace('-', '.')
            }
            // 存入道路类型
            this.queryParam['routes'] = this.$refs.roadTypeTags.selectedTags.toString()
            // 存入事故类型
            this.queryParam['accidents'] = this.$refs.accTypeTags.selectedTags.toString()
            // 存入事故后果
            this.queryParam['results'] = this.$refs.accDegreeTags.selectedTags.toString()
            // 存入路段状况(是否涉及施工)
            this.queryParam['relatedRoute'] = this.$refs.roadConditionRadio.selectedRadio
            // 存入中队信息
            this.queryParam['belong'] = this.$refs.squadronTags.selectedTags.toString()
            // 存入天气信息
            this.queryParam['weather'] = this.$refs.weatherTags.selectedTags.toString()
        },

        searchAccInfo() {
            this.setQueryParam() // 设置查询参数
            // 根据查询参数查询事故信息并在地图上显示
            getAction(this.url.queryBySimpleConditions, this.queryParam).then(res => {
              if (res.success) {
                this.data = res.result
                // this.map.clearMap() // 清除地图上的所有覆盖物
                this.showAccInfo() // 将新的查询到的事故信息显示在地图上
              } else {
                this.$message.warning(res.message)
              }
              this.onClose()
            })
        },

        // 查询国道，省道，县乡，城市及其他道路的事故数
        searchAccNumForRoads() {
          getAction(this.url.queryByRoads, this.queryParam).then(res => {
            if (res.success) {
              this.data = res.result
            } else {
              this.$message.warning(res.message)
            }
            this.createBar()
          })
        }
    }
}