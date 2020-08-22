<template>
  <div id="tab-bar">
    <div class="tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {},
};
</script>

<style scoped>
.tabbar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>