<template>
  <main>
    <RecipesList :recipes="recipes" />
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import RecipesList from '@/components/RecipesList.vue';
import RecipesAPI from '@/api/RecipesApi.js';

let recipes = reactive([]);

const loadData = async () => {
  try {
    const response = await new RecipesAPI().listRecipes();
    recipes.push(...response);
  } catch (error) {
    console.log(error);
  }
};

loadData();
</script>
