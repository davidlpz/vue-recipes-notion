<template>
  <main>
    <RecipesList :recipes="recipes" />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import RecipesList from '@/components/RecipesList.vue';
import RecipesAPI from '@/api/RecipesApi.js';

let recipes = ref([]);

const loadData = async () => {
  try {
    recipes.value = await new RecipesAPI().listRecipes();
  } catch (error) {
    console.log(error);
  }
};

loadData();
</script>
