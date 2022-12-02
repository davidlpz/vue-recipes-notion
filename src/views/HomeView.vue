<template>
  <main>
    <RecipesList :recipes="recipes" @on-click-recipe="goToRecipeDetail" />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import RecipesList from '@/components/RecipesList.vue';
import RecipesAPI from '@/api/RecipesApi.js';

const router = useRouter();
let recipes = ref([]);

const loadData = async () => {
  try {
    recipes.value = await new RecipesAPI().listRecipes();
  } catch (error) {
    console.log(error);
  }
};

loadData();

const goToRecipeDetail = id => {
  router.push(`/recipe/${id}`);
};
</script>
