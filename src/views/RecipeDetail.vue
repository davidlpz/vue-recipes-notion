<template>
  <main class="recipe-detail">
    <div class="image-wrapper">      
      <img class="recipe-image" :src="recipe.image" :alt="recipe.name" />
    </div>
    <div class="recipe-body">
      <h1 class="recipe-title">{{ recipe.name }}</h1>
      <RecipeBody :blocks="recipe.body" />
    </div>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import RecipesAPI from '@/api/RecipesApi.js';
import RecipeBody from '@/components/RecipeBody.vue'

const route = useRoute();
const recipes = ref([]);
let recipe = ref({});

const loadData = async () => {
  try {
    recipes.value = await new RecipesAPI().listRecipes();
    recipe.value = recipes.value.find(item => item.id === route.params.id);
    recipe.value.body = await new RecipesAPI().loadRecipeBody(route.params.id);
  } catch (error) {
    console.log(error);
  }
};

loadData();
</script>

<style lang="scss" scoped>
.recipe-detail {
  .image-wrapper {
    width: 100%;
    height: 375px;
  }
  .recipe-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .recipe-body-wrapper {
    height: 100%;
    background-color: white;
    padding: 44px 24px;
    h1 {
      color: #3e5481;
      font-size: 17px;
      font-weight: bold;
    }
  }
}
</style>