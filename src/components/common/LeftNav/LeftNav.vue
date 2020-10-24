<template>
  <div class="left-nav">
    <LeftNavItem v-for="item in subjectArray" :key="item.name" v-bind:subject="item">
    </LeftNavItem>
  </div>
</template>

<script>
import LeftNavItem from "components/common/LeftNav/LeftNavItem.vue"
export default {
  name: "LeftNav",
  components: {
    LeftNavItem
  },
  props: {
    subjectArray:{type:Array}
  },
};
</script>

<style scoped>
.left-nav{
  /* 导航栏宽度 */
  /* width: 10%; */
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap:nowrap;
}
.left-nav :hover{
  cursor:pointer;
  opacity: 0.5;
}
</style>
