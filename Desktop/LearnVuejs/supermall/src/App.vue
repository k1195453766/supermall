<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-item path="/home" :textActivityColor="textActivityColor">
        <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt />
        <img slot="item-icon-activity" src="@/assets/img/tabbar/home_activity.png" alt />
        <div slot="item-text">
          <span>首页</span>
        </div>
      </tab-bar-item>
      <tab-bar-item path="/type" :textActivityColor="textActivityColor">
        <img slot="item-icon" src="@/assets/img/tabbar/type.png" alt />
        <img slot="item-icon-activity" src="@/assets/img/tabbar/type_activity.png" alt />
        <div slot="item-text">
          <span>分类</span>
        </div>
      </tab-bar-item>
      <tab-bar-item path="/cart" :textActivityColor="textActivityColor">
        <img slot="item-icon" src="@/assets/img/tabbar/cart.png" alt />
        <img slot="item-icon-activity" src="@/assets/img/tabbar/cart_activity.png" alt />
        <div slot="item-text">
          <span>购物车</span>
        </div>
      </tab-bar-item>
      <tab-bar-item path="/my" :textActivityColor="textActivityColor">
        <img slot="item-icon" src="@/assets/img/tabbar/my.png" alt />
        <img slot="item-icon-activity" src="@/assets/img/tabbar/my_activity.png" alt />
        <div slot="item-text">
          <span>我的</span>
        </div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "App",
  data() {
    return {
      textActivityColor: "#d4237a"
    };
  },
  components: {
    TabBarItem,
    TabBar
  },
  methods: {
    
  },
};
</script>

<style>
/* 在这里加载公共样式 */
@import url("./assets/css/base.css");
</style>
