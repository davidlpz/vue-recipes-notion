import axios from 'axios';
import RecipesTransformer from '@/transformer/RecipesTransformer.js';

export default class RecipesAPI {
  baseUrl = 'https://api.notion.com/v1/';

  async listRecipes() {
    const databaseId = '7a8652abd6954a2dbf09edfd820c4a97';

    try {
      const response = await axios({
        method: 'post',
        url: `${this.baseUrl}databases/${databaseId}/query`,
        headers: {
          Authorization: 'secret_SnLYUFzP3Jyy3PvFGvkVbpUdFDyekQBMypArJpW91c2',
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
      
      return RecipesTransformer.fetchCollection(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  async loadRecipeBody(pageId) {
    try {
      const response = await axios({
        method: 'get',
        url: `https://api.notion.com/v1/blocks/${pageId}/children`,
        headers: {
          Authorization: 'secret_SnLYUFzP3Jyy3PvFGvkVbpUdFDyekQBMypArJpW91c2',
          'Content-Type': 'aplication/json',
          'Notion-Version': '2022-02-22'
        }
      });

      return RecipesTransformer.assembleBody(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
}
