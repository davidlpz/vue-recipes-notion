<template>
  <main>
    <RecipesList :recipes="recipes" @on-click-recipe="goToRecipeDetail" />
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import RecipesList from '@/components/RecipesList.vue';
import RecipesAPI from '@/api/RecipesApi.js';

let recipes = reactive([]);
const router = useRouter();

const loadData = async () => {
  try {
    const response = await new RecipesAPI().listRecipes();
    recipes.push(...response);
  } catch (error) {
    console.log(error);
  }
};

const goToRecipeDetail = id => {
  router.push(`/recipe/${id}`);
};

loadData();
</script>
