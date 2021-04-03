<template>
  <div>
    <my-nav></my-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import myNav from "@/components/common/nav.vue";

// 初始化REM
document.addEventListener("DOMContentLoaded", (e) => {
  let fontSize = window.innerWidth / 37.5 > 25 ? 25 : window.innerWidth / 37.5;
  let html = document.getElementsByTagName("html")[0];
  html.style.fontSize = fontSize + "px";
  console.log("html-font-size: ", html.style.fontSize);
});

export default {
  components: {
    myNav,
  },
};
</script>>

<style lang="scss">
</style>
