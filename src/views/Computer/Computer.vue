<template>
  <div id="page">
    <ComputerNav id="nav"/>
    <router-view id="content"></router-view>
  </div>
</template>

<script>
import ComputerNav from "components/content/LeftNav/ComputerNav.vue";
export default {
  name: "Computer",
  components: {
    ComputerNav,
  },
};
</script>

<style>
#page {
	/* 设置水平的flex布局 */
  display: flex;
  flex-direction: row;
}
#nav{
	width: 10%;
}
#content{
	width: 90%;
}
</style>
