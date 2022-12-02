<template>
  <section class="recipe-body">
    <component
      v-for="(block, index) in blocks"
      :is="getTagByBlock(block.type)"
      :key="index"
    >
      {{ block.text }}
    </component>
  </section>
</template>

<script setup>
const props = defineProps({
  blocks: {
    type: Array,
    default: []
  }
});

const getTagByBlock = type => {
  const options = {
    heading_2: 'h2',
    heading_3: 'h3',
    bulleted_list_item: 'p',
    numbered_list_item: 'p',
  }
  return options[type]
}
</script>

<style scoped>

</style>