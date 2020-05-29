<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActivity">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-activity"></slot>
    </div>
    <div :style="isActivity?{color:textActivityColor}:{color:textDefaultColor}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
import Tabbar from "./TabBar";
export default {
  name: "TabBarItem",
  props: {
    path: String,
    textActivityColor: {
      type: String,
      default: "red"
    },
    textDefaultColor: {
      type: String,
      default: "#666666"
    }
  },
  data() {
    return {};
  },
  components: {},
  //   计算属性
  computed: {
    isActivity() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
}
.tab-bar-item span {
  font-size: 14px;
  margin-top: -5px;
  display: block;
}
/* .active {
  color: #d4237a;
} */
</style>