<template>
  <div class="page relative flex flex-col">
    <div class="main relative flex dark:bg-black">
      <!-- 左侧 -->
      <div class="left w-3/12">
        <!-- 用户信息 -->
        <div class="showcenter">
          <person-info class="shadow-md h-72 w-72"></person-info>
        </div>
        <!-- 网站咨询 -->
        <div class="showcenter">
          <site-info class="site-info h-44 shadow-md w-72"></site-info>
        </div>

        <!-- 文章时间 X 篇/月 -->
        <div class="showcenter">
          <time-line class="article-time shadow-md w-72"></time-line>
        </div>
      </div>

      <!-- 中间 -->
      <div class="center w-4/12">
        <!-- 过滤标签栏 -->
        <filter-bar></filter-bar>
        <!-- 文章列表 -->
        <article-list></article-list>
      </div>

      <!-- 右侧 -->
      <div class="right w-3/12">
        <!-- 当前热门 -->
        <div class="showcenter">
          <hot-articles class="w-72"></hot-articles>
        </div>
        <!-- 友情链接 -->
        <div class="showcenter">
          <friend-link class="w-72"></friend-link>
        </div>
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
import hotArticles from "@/components/main/hotArticles.vue";
import footerBar from "@/components/common/footer.vue";
import friendLink from "@/components/main/friendLink.vue";

export default {
  components: {
    personInfo,
    articleList,
    timeLine,
    siteInfo,
    filterBar,
    footerBar,
    hotArticles,
    friendLink,
  },
 
};
</script>
<style lang='scss' scoped>
@import "@/assets/styles/global.scss";
.main {
  width: 100%;
  height: 100%;
  margin-bottom: 10rem;
  .left {
    margin: 4rem;
    .site-info {
      margin-top: 3rem;
    }
    .article-time {
      margin-top: 3rem;
    }
  }
  .center {
    margin-top: 4rem;
  }
  .right {
    margin: 4rem;
  }
  .mobile {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .page {
    .left {
      display: none;
    }
    .center {
      margin: 0 !important;
      width: 100% !important;
    }
    .right {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
}

.showcenter {
  @apply flex justify-center items-center;
}
</style>