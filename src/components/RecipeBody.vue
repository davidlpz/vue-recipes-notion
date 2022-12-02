<template>
  <section class="recipe-body">
    <component
      v-for="(block, index) in blocks"
      :is="getTagByBlock(block.type)"
      :key="index"
      :number-position="getNumberPosition(block.text)"
    >
      {{ block.text }}
    </component>
  </section>
</template>

<script>
import BulletItem from '@/components/BulletItem.vue'
import NumberedItem from '@/components/NumberedItem.vue';

export default {
  name: 'RecipeBody',
  components: {
    BulletItem,
    NumberedItem,
  }
}
</script>


<script setup>

const props = defineProps({
  blocks: {
    type: Array,
    default: []
  }
});

const getTagByBlock = type => {
  const options = {
    heading_2: 'h2',
    heading_3: 'h3',
    bulleted_list_item: 'BulletItem',
    numbered_list_item: 'NumberedItem'
  }
  return options[type];
}

const getNumberPosition = textBlock => {
  const numberedItems = props.blocks.filter(
    block => block.type === 'numbered_list_item'
  );
  return numberedItems.findIndex(item => item.text === textBlock) + 1
}
</script>

<style scoped>

</style>