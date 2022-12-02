<template>
  <section class="recipe-body">
    <div v-for="block in blocks">
      {{ block.text }}
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  blocks: {
    type: Array,
    default: []
  }
});
</script>

<style scoped>

</style>