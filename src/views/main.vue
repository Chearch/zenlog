<template>
  <div class="main relative flex dark:bg-black">
    <!-- 左侧 -->
    <div class="left w-1/8">
      <!-- 用户信息 -->
      <person-info class="shadow-md h-72"></person-info>
      <!-- 网站咨询 -->
      <site-info class="site-info h-44 shadow-md"></site-info>
      <!-- 文章时间 X 篇/月 -->
      <time-line class="article-time shadow-md"></time-line>
    </div>
    <!-- 中间 -->
    <div class="center w-1/2">
    <!-- 过滤标签栏 -->
      <filter-bar></filter-bar>
    <!-- 文章列表 -->
      <article-list></article-list>
    </div>

    <!-- 右侧 -->
    <div class="right w-1/8 bg-red-100">
    <!-- 当前热门 -->
    <!-- 友情链接 -->
    </div>

    <!-- mobile -->
    <div class="mobile">
      <h1>请在PC端打开</h1>
    </div>
  </div>
</template>

<script>
import personInfo from "@/components/main/personInfo.vue";
import timeLine from "@/components/main/timeline.vue";
import articleList from "@/components/main/articleList.vue";
import siteInfo from "@/components/main/siteInfo.vue";
import filterBar from "@/components/main/filterBar.vue";
export default {
  components: {
    personInfo,
    articleList,
    timeLine,
    siteInfo,
    filterBar,
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/styles/global.scss";
.main {
  width: 100%;
  height: 100%;
  .left {
    margin: 3rem 0 0 8rem;
    .site-info{
      margin-top: 3rem;
    }
    .article-time {
      margin-top: 3rem;
    }
  }
  .center {
    margin: 1rem 0 0 8rem;
  }
  .right{

  }
  .mobile{
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .left{
    display: none;
  }
  .center{
    display: none;
  }
  .right{
    display: none;
  }
  .mobile{
    display: block;
  }
}
</style>