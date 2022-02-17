<template>
    <div>
        <a-table :columns="columns" :dataSource="data" :scroll="{ x:1300 }">

        </a-table>
    </div>
</template>

<script>
import { postAction, getAction, httpAction } from '@/api/manage'
const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        sorter: true,
    },
    {
        title: '道路',
        dataIndex: 'road',
    },
    {
        title: '事故类型',
        dataIndex: 'accType'
    },
    {
        title: '事故程度',
        dataIndex: 'accDegree',
    },
    {
        title: '路段',
        dataIndex: 'roadCondition',
    },
    {
        title: '具体地点',
        dataIndex: 'location',
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime'
    }
]
export default {
    name: 'Map',
    data() {
        return {
            columns: columns,
            data: [],
            queryParam: {},
            url: {
                list: '/acc/info/queryAll',
                queryById: '/acc/info/queryByid'
            }
        }   
    },
    created() {
        postAction(this.url.list).then(res => {
                if (res.success) {
                    console.log("queryAll:", res)
                    this.data = res.result
                } else {
                    this.$message.warning(res.message)
                }
            })
    },
    methods: {
        queryAll() {
            postAction(this.url.list).then(res => {
                if (res.success) {
                    console.log("queryAll:", res)
                } else {
                    this.$message.warning(res.message)
                }
            })
        },

        queryById(id) {
            this.queryParam["id"] = id
            getAction(this.url.queryById, this.queryParam).then(res => {
                if (res.success) {
                    console.log("queryById:", res)
                } else {
                    this.$message.warning(res.message)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    
</style>