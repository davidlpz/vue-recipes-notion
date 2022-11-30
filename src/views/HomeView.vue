<template>
  <main>
    <RecipesList :recipes="recipes" />
  </main>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import RecipesList from '@/components/RecipesList.vue';

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
  const databaseId = '7a8652abd6954a2dbf09edfd820c4a97';

  try {
    const response = await axios({
      method: 'post',
      url: `https://api.notion.com/v1/databases/${databaseId}/query`,
      headers: {
        'Authorization': 'secret_SnLYUFzP3Jyy3PvFGvkVbpUdFDyekQBMypArJpW91c2',
        'Content-Type': 'aplication/json',
        'Notion-Version': '2022-02-22'
      },
      data: {
        filter: {
          property: 'Name',
          text: {
            is_not_empty: true
          }
        }
      }
    });

    recipes.push(...parseRecipes(response.data.results));
  } catch (error) {
    console.log(error)
  }
};

const parseRecipes = (recipes) => {
  return recipes.map(recipe => {
    return {
      id: recipe.id,
      img: '',
      name: recipe.properties.Name.title[0].plain_text,
      img: recipe.cover?.file?.url || recipe.cover?.external?.url
    }
  })
};

loadData();

const getName = (recipe) => {
  return '';
};
</script>