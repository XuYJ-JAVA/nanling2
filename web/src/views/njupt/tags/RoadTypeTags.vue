<template>
  <div>
    <template v-for="tag in tags">
      <a-checkable-tag :key="tag"
                       :checked="selectedTags.indexOf(tag) > -1"
                       @change="checked => handleChange(tag, checked)"
                       style="font-size: 14px;">
        {{ tag }}
      </a-checkable-tag>
    </template>
  </div>
</template>

<script>
let tags = ['国道', '省道', '县乡', '城市', '集镇', '非道路', '其他']
export default {
  name: 'RoadTypeTags',
  data() {
    return {
      tags: tags,
      selectedTags: [] // 存储所要查询的交通事故程度信息
    }
  },
  methods: {
    handleChange(tag, checked) {
      const { selectedTags } = this
      const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag)
      this.selectedTags = nextSelectedTags
    }
  },
  setup() {}
}
</script>

<style scoped>
</style>