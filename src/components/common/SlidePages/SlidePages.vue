<template>
  <div class="full-page">
    <div class="main-area">
      <div class="logo animated">知识</div>
      <div class="text animated">改变</div>
      <div class="btn animated">命运</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.full-page {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* min-width: 1000px; */
  z-index: -10;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  background-image: url("~assets/img/background/001.jpg");
  animation: play 4s linear;
}
.main-area{
  margin: 0 auto;
  align-self: center;
}
.main-area .logo {
  animation-delay: 0.5s;
  animation-name: fadeInLeftBig;
  text-align: center;
  font-size: 40px;
  color: black;
}
.main-area .text {
  animation-delay: 2s;
  animation-name: fadeInRightBig;
  text-align: center;
  font-size: 50px;
  color: black;
}
.main-area .btn {
  animation-delay: 3s;
  animation-name: fadeInUpBig;
  text-align: center;
  font-size: 40px;
  color: black;
}

.animated {
  /* animation-delay: 0.2s; */
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes play{
  0%{
    background-position: 0,0;
  }
  100%{
    background-position: 0,1000;
  }
}

@keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInRightBig {
  0% {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUpBig {
  0% {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
</style>
