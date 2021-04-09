<template>
  <div>
    <my-nav></my-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import myNav from "@/components/common/nav.vue";
import api from "@/api/index.js"

// 初始化REM
document.addEventListener("DOMContentLoaded", (e) => {
  let fontSize = window.innerWidth / 37.5 > 15 ? 15 : window.innerWidth / 37.5;
  let html = document.getElementsByTagName("html")[0];
  html.style.fontSize = fontSize + "px";
  console.log("html-font-size: ", html.style.fontSize);
});

export default {
  components: {
    myNav,
  },
  beforeMount(){
    this.modifyArticles(api.articleList);
  }
};
</script>>

<style lang="scss">
</style>
