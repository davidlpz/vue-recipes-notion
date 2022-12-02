<template>
  <section class="recipe-body">
    {{ recipe }}
  </section>
</template>

<script setup>
const props = defineProps({
  recipe: {
    type: Array,
    default: []
  }
});
</script>

<style scoped>

</style>