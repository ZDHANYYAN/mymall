<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/mainTabbar/MainTabbar";
export default {
  name: "App",
  components: {
    MainTabbar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
