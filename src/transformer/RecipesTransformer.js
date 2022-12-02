import BaseTransformer from '@/transformer/BaseTransformer.js';

export default class RecipesTransformer extends BaseTransformer {
  static fetch(recipe) {
    return {
      id: recipe.id,
      name: recipe.properties.Name.title[0].plain_text,
      image: recipe.cover?.file?.url || recipe.cover?.external?.url
    };
  }
}
