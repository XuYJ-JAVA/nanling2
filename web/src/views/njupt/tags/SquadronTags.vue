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
let tags = ['一中队', '二中队', '三中队', '四中队', '五中队', '事故中队']
export default {
  name: 'SquadronTags',
  data() {
    return {
      tags: tags,
      selectedTags: [] // 存储所要查询的中队信息
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