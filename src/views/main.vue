<template>
  <div class="main relative dark:bg-black">
    <!-- 用户信息 -->
    <div class="absolute top-3 left-16 shadow-md w-80 h-72 ">
      <person-info></person-info>
    </div>
    <!-- 文章时间 X 篇/月 -->
    <div class="article-time absolute top-80 w-80 left-16 shadow-md">
      <time-line></time-line>
    </div>
  </div>
</template>

<script>
import personInfo from "@/components/main/personInfo.vue";
import timeLine from "@/components/main/timeline.vue";
import articleList from "@/components/main/articleList.vue";

export default {
  components: {
    personInfo,
    articleList,
    timeLine,
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/styles/global.scss";
.main {
  width: 100%;
  height: 100vh;
}
</style>