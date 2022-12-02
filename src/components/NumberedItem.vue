<template>
  <div class="numered-detail">
    <span class="numbered-position">{{ numberPosition }}</span>
    <p><slot /></p>
  </div>
</template>

<script>
export default {
  name: 'NumberedItem',
  props: {
    numberPosition: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style lang="scss" scoped>
.numered-detail {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  .numbered-position {
    padding: 0.25rem 0.625rem;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 100%;
    background-color: var(--main-text);
    color: white;
  }
  p {
    margin: 0;
    margin-left: 1rem;
  }
}
</style>
