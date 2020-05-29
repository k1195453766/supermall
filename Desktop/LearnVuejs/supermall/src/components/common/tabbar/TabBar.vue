<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar {
  display: flex;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f6f6f6;
}
</style>
