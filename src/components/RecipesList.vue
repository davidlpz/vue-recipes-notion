<template>
  <section class="recipe-list">
    <div v-for="recipe in recipes" :key="recipe.id" class="recipe-item">
      <img :src="recipe.image" :alt="recipe.name" @click="onClickHandler(recipe.id)" />
      <h3 @click="onClickHandler(recipe.id)">{{ recipe.name }}</h3>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  recipes: {
    type: Array,
    default: () => {
      return [];
    }
  }
});

const emit = defineEmits(['on-click-recipe']);

const onClickHandler = id => {
  emit('on-click-recipe', id);
};
</script>

<style lang="scss" scoped>
.recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px) 19%;
  gap: 25px;
}
.recipe-item {
  img {
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  h3 {
    margin: 0.75rem 0 0.5rem;
    color: var(--main-text);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
  }
}
</style>
