<template>
<div class="page  relative flex flex-col">
    <div class="main relative flex dark:bg-black">
    <!-- 左侧 -->
    <div class="left w-3/12">
      <!-- 用户信息 -->
      <person-info class="shadow-md w-72 h-72"></person-info>
      <!-- 网站咨询 -->
      <site-info class="site-info w-72 h-44 shadow-md"></site-info>
      <!-- 文章时间 X 篇/月 -->
      <time-line class="article-time w-72 shadow-md"></time-line>
    </div>
    <!-- 中间 -->
    <div class="center w-6/12">
    <!-- 过滤标签栏 -->
      <filter-bar></filter-bar>
    <!-- 文章列表 -->
      <article-list></article-list>
    </div>

    <!-- 右侧 -->
    <div class="right w-3/12">
    <!-- 当前热门 -->
    <hot-articles></hot-articles>
    <!-- 友情链接 -->
    <friend-link></friend-link>
    </div>

  </div>
    <div class="footer mt-8 h-28">
      <footer-bar class="w-full absolute bottom-0 bg-blue-400"></footer-bar>
    </div>
</div>
</template>

<script>
import personInfo from "@/components/main/personInfo.vue";
import timeLine from "@/components/main/timeline.vue";
import articleList from "@/components/main/articleList.vue";
import siteInfo from "@/components/main/siteInfo.vue";
import filterBar from "@/components/main/filterBar.vue";
import hotArticles from '@/components/main/hotArticles.vue'
import footerBar from "@/components/common/footer.vue"
import friendLink from "@/components/main/friendLink.vue"

export default {
  components: {
    personInfo,
    articleList,
    timeLine,
    siteInfo,
    filterBar,
    footerBar,
    hotArticles,
    friendLink
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
    margin: 1rem 0 0 3rem;
  }
  .right{
    margin: 2rem 0 0 0 ;
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