function getAllRings(feature) {
    var coords = feature.geometry.coordinates
    var rings = []
    for (var i = 0, len = coords.length; i < len; i++) {
      rings.push(coords[i][0])
    }
    return rings
}

export const ShowPoint = {
    data() {
        return {
            pointSimplifierIns: null
        }
    },
    methods: {

        // 格式化数据
        initData(data) {
            // 为每个事故信息（dataItem)添加颜色属性，方便绘图区分
            for (let i = 0; i < data.length; i++) {
                if (data[i]['longitude'] === "" || data[i]['latitude'] === "" || data[i]['longitude'] === null || data[i]['latitude'] === null || data[i]['result'] === '[]' || data[i]['result'] === null) {
                    data.splice(i, 1)
                    i--
                    continue
                }
                // 为每个dataItem添加position 
                data[i]['position'] = [parseFloat(data[i]['longitude']), parseFloat(data[i]['latitude'])]
                if (data[i]['results'].search("亡人") !== -1) {
                    data[i]['color'] = "red"
                } else if (data[i]['results'].search("人伤") !== -1) {
                    data[i]['color'] = "yellow"
                } else if (data[i]['results'].search("财损") !== -1) {
                    data[i]['color'] = "blue"
                } else {
                    data[i]['color'] = "green"
                }
            }
        },

        // 加载标记点
        initPage(PointSimplifier, data, infoWindow) {
            // 初始化数据
            this.initData(data)
            if (this.pointSimplifierIns !== null) {
                this.pointSimplifierIns.setData()
            }
            if (this.data.length === 0) return
            // 创建组件实例
            this.pointSimplifierIns = new PointSimplifier({
                map: this.map, // 关联的map
                zIndex: 1, // 绘制用图层的叠加顺序值 。如果需要叠加在地图的最上层，可以设置一个较大的值，比如300
                compareDataItem: function(a, b, aIndex, bIndex) {
                    // 数据源中靠后的元素优先,index大的排到前面去
                    return aIndex > bIndex ? -1 : 1
                },
                getPosition: function(dataItem) {
                    return dataItem.position
                },
                getHoverTitle: function(dataItem, idx) {
                    // 返回数据项的title信息，鼠标hover时显示
                    return '序号:' + idx
                },
                // 支持样式分组
                renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
                // 按照事故程度（颜色）进行分组
                renderOptions: {
                    // 点的样式
                    getGroupId: function(dataItem, idx) {
                        return dataItem['color']
                    },
                    groupStyleOptions: function(gid) {
                        return {
                            pointStyle: {
                                fillStyle: gid
                            }
                        }
                    }
                }
            })

            this.pointSimplifierIns.setData(data)
            this.map.setCenter(data[data.length-1]['position'])
            this.map.setZoom(15)

            // 将Map.vue对象赋值that，以便其可以在点击事件的回调函数中调用
            let that = this

            this.pointSimplifierIns.on('pointClick', function(e, record) {
                that.params = record.data
                infoWindow.open(that.map, record.data.position)
            })

            this.showDrawer()
            this.showDrawer()
            
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
        }
    }
}