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
let tags = ['晴', '雨', '雾', '冰', '雪']
export default {
  name: 'WeatherTags',
  data() {
    return {
      tags: tags,
      selectedTags: [] // 存储所要查询的天气信息
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