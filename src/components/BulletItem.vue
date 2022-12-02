<template>
  <div class="bullet-item">
    <span class="check-bullet"></span>
    <p><slot /></p>
  </div>
</template>

<script>
export default {
  name: 'BulletItem',
}
</script>

<style lang="scss" scoped>
.bullet-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  p {
    margin: 0;
    margin-left: .5rem;
    font-weight: 500;
    font-size: .9rem;
    color: var(--main-text);
  }
  .check-bullet {
    padding: .2rem;
    border-radius: 100%;
    background: var(--main-text);
  }
}
</style>