<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  },
  components: {},
};
</script>

<style scoped>
.tabbar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>