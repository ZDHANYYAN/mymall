<template>
  <tab-bar>
      <tabbar-com path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt />
        <div slot="item-text">首页</div>
      </tabbar-com>
      <tabbar-com path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="item-text">分类</div>
      </tabbar-com>
      <tabbar-com path="/shopcart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="item-text">购物车</div>
      </tabbar-com>
      <tabbar-com path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt />
        <div slot="item-text">我的</div>
      </tabbar-com>
    </tab-bar>
</template>

<script>

import TabBar from "components/common/tabbar/Tabbar";
import TabbarCom from "components/common/tabbar/TabbarItem";

export default {
  name:'MainTabbar',
  components: {
    TabBar,
    TabbarCom,
  }
}
</script>

<style scoped>

</style>