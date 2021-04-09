// 网站咨询
// 站点运行时间
// 文章数量
// 最近一次更新
<template>
  <div class="site-info">
    <div
      class="title-wrapper text-xl p-2 cursor-pointer dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 text-gray-600 flex items-center"
    >
      <span class="icon-lighting text-3xl text-blue-600 mt-1"></span>
      <span class="title font-bold">网站咨询</span>
    </div>
    <div class="article-count centerflex py-1 mt-1 darkmode">
      <div class="mx-6">文章数目:</div>
      <div class="mx-6">{{articleCount}} 篇</div>
    </div>
    <div class="site-time-wrapper centerflex py-1 darkmode">
      <div class="mx-6">运行时间:</div>
      <div class="mx-6">{{ runTime }}天</div>
    </div>
    <div
      class="last-modified-wrapper centerflex py-1 mb-1 darkmode"
    >
      <div class="mx-6">上次更新:</div>
      <div class="mx-6">{{ lastModified }}</div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  computed: {
    articleCount() {
      return api.articleList.length;
    },
    lastModified() {
      let sublist = [...api.articleList];
      let lastArticle = sublist.sort((a, b) => {
        return new Date(b.time) - new Date(a.time) ;
      });
      return lastArticle[0].time;
    },
    runTime() {
      let days =
        (new Date() - new Date(process.env.VUE_APP_RUN_TIME)) /
        (1000 * 60 * 60 * 24);
      return parseInt(days);
    },
    visited(){
      return Math.ceil(Math.random() * 1000)
    }
  },
};
</script>
<style lang='scss' scoped>
.darkmode {
  @apply dark:text-gray-500 dark:hover:text-blue-400 text-gray-600
}
.icon {
  @apply font-bold dark:text-gray-500  hover:text-blue-400 dark:hover:text-blue-400 text-gray-600;
}

.centerflex{
  @apply  flex justify-between items-center ;
}
</style>