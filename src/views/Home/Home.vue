<template>
<div>
 <NavBar>
    <span slot="left">待设计</span>
    <span slot="middle">待设计</span>
    <span slot="right">还在设计</span>
  </NavBar>
  <div>
    完全没有想好该怎末设计首页，所以索性不写了，但是剩下的页面还是决定简洁为主，直接写代码就行。
  </div>
  <div>
    怎么说呢，这个项目，其实没啥难点，但是真正写出来还是有非常非常多的坑的，以后我会持续对页面进行优化和更新的。
  </div>
  <div>
    本网页技术栈为：html+css+JavaScript+vue+webpack+node+cli+git，不知道git算不算，，
  </div>
  <div>
    开发者qq：1796655849
  </div>
  <div>
    项目源码已经开源到github：https://github.com/klsdf/HatSoft.git
  </div>
</div>
 
</template>

<script>
import NavBar from "components/common/NavBar/NavBar.vue";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>

<style>
</style>

