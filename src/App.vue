<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import api from "@/api/index.js"
// 初始化REM
document.addEventListener("DOMContentLoaded", (e) => {
  let fontSize = window.innerWidth / 37.5 > 15 ? 15 : window.innerWidth / 37.5;
  let html = document.getElementsByTagName("html")[0];
  html.style.fontSize = fontSize + "px";
  console.info("html-font-size: ", html.style.fontSize);
});

export default {
  created(){
    api.articleLists().then(res=>{
      this.modifyArticles(res);
    }).catch(reason=>{
      console.log(reason);
      alert('网络请求失败，请刷新或放弃！')
    })
    console.log('i18n: ',this.$i18n.locale );
  }
};
</script>>

<style lang="scss" >
html,body{
  height: 100%;
  width: 100%;
  body > div{
    height: 100%;
  }
  @apply bg-gray-100 text-black dark:bg-gray-800 dark:text-gray-100;
}
</style>
