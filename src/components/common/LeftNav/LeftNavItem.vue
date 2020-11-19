<template>
  <div class="left-nav-item" :style="{ backgroundColor: color }" v-on:click="itemClick">
    <span class="text">{{ subject.name }}</span>
  </div>
</template>

<script>
export default {
  name: "LeftNavItem",
  components: {},
  props: {
    subject: { type: Object },
  },
  methods:{
    itemClick(){
      this.$router.replace(this.subject.url)
    }
  },
  computed: {
    color: function () {
      var colors = ["#bfc","#FF69B4","#FFA07A","#B0C4DE","#D87093"];
      var color = colors[parseInt(Math.random() * colors.length)];
      return color;
    },
  },
};
</script>

<style>
.left-nav-item {
  border: 1px black solid;
  /* 调整子元素居中用的 */
  display: flex;
  margin-bottom: 5px;
}
.text {
  /* 居中 */
  margin: 0 auto;
  align-self: center;
}

</style>
