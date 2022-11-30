<template>
  <main>
    <RecipesList :recipes="recipes" />
  </main>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import RecipesList from '@/components/RecipesList.vue';
import RecipesAPI from '@/api/RecipesApi.js';

let recipes = reactive([]);

const loadBodyRecipes = async (pageId) => {
  const databaseId = '7a8652abd6954a2dbf09edfd820c4a97';

  try {
    const response = await axios({
      method: 'get',
      url: `https://api.notion.com/v1/blocks/${pageId}/children`,
      headers: {
        'Authorization': 'secret_SnLYUFzP3Jyy3PvFGvkVbpUdFDyekQBMypArJpW91c2',
        'Content-Type': 'aplication/json',
        'Notion-Version': '2022-02-22'
      }
    });

    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const loadData = async () => {
  try {
    const response = await new RecipesAPI().listRecipes();
    recipes.push(...response);
  } catch (error) {
    console.log(error)
  }
};

loadData();
</script>