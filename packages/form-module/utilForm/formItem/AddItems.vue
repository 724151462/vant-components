<template>
  <div class="item-container">
    <div class="item-header">
      <span style="color: #7A869A">{{ title }}</span>
      <span
        style="color:#0E6FFF;"
        @click="$router.push({ path: url })"
      ><span class="font-weight: bold">+</span>添加</span>
    </div>
    <slot name="list" />
  </div>
</template>

<script>
export default {
  props: ['title', 'url']
}
</script>

<style lang="scss" scoped>
.item-container {
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  .item-header {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
  }
}
</style>
