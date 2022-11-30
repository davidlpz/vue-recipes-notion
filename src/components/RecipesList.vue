<template>
  <section class="recipe-list">
    <div v-for="recipe in recipes" :key="recipe.id" class="recipe-item">
      <!--<div class="recipe-img-container">
        <img v-if="recipe.img" :src="recipe.img" :alt="recipe.name">
      </div>-->
      <h3>{{ recipe.emoji }} {{ recipe.name }}</h3>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  recipes: {
    type: Array,
    default: []
  }
});
</script>

<style scoped>
.recipe-item {
  display: flex;
}
.recipe-img-container {
  width: 100px;
  height: 100px;
  overflow: hidden;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
}
</style>