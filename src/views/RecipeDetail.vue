<template>
  <main class="recipe-detail">
    <div class="image-wrapper">      
      <img class="recipe-image" :src="recipe.image" :alt="recipe.name" />
    </div>
    <div class="recipe-body">
      <h1 class="recipe-title">{{ recipe.name }}</h1>
      {{ recipe.body }}
    </div>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import RecipesAPI from '@/api/RecipesApi.js';

const route = useRoute();
const recipes = ref([]);
let recipe = ref({});

const assembleRecipeBody = blocks => {
  console.log(blocks)
  return blocks
    .map(block => {
      const type = block.type
      if (block[type].rich_text.length) {
        const text = block[type].rich_text[0].text.content
        return {
          type,
          text,
        }
      }
    })
}

const loadData = async () => {
  try {
    recipes.value = await new RecipesAPI().listRecipes();
    recipe.value = recipes.value.find(item => item.id === route.params.id);
    const response = await new RecipesAPI().loadRecipeBody(route.params.id);
    recipe.value.body = assembleRecipeBody(response);
  } catch (error) {
    console.log(error);
  }
};


loadData();
</script>

<style scoped>
.image-wrapper {
  width: 100%;
  height: 375px;
}
.recipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>