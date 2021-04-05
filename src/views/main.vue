<template>
  <div class="main relative dark:bg-black">
    <!-- 左侧 -->
    <div class="info-wrapper absolute top-3 w-80 left-16">
      <!-- 用户信息 -->
      <person-info class="shadow-md h-72"></person-info>
      <!-- 网站咨询 -->
      <site-info class="site-info h-44 shadow-md"></site-info>
      <!-- 文章时间 X 篇/月 -->
      <time-line class="article-time shadow-md"></time-line>
    </div>
    <!-- 中间 -->
  </div>
</template>

<script>
import personInfo from "@/components/main/personInfo.vue";
import timeLine from "@/components/main/timeline.vue";
import articleList from "@/components/main/articleList.vue";
import siteInfo from "@/components/main/siteInfo.vue";

export default {
  components: {
    personInfo,
    articleList,
    timeLine,
    siteInfo,
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