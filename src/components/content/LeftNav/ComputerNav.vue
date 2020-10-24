<template>
  <div>
    <LeftNav v-bind:subjectArray="subjectArray"></LeftNav>
  </div>
</template>

<script>
import LeftNav from "components/common/LeftNav/LeftNav.vue";
export default {
  name: "ComputerNav",
  data: function() {
    return {
    subjectArray:[
      {
        name: "HTML",
        url: "/Computer/HTML",
      },
       {
        name: "CSS",
        url: "/Computer/CSS",
      },
       {
        name: "JavaScript",
        url: "/Computer/JavaScript",
      },
      {
        name: "SQL",
        url: "/Computer/SQL",
      },
    ],
    }
  },
  components: {
    LeftNav,
  },
};
</script>

<style scoped>
</style>
