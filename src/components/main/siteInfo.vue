// 网站咨询
// 站点运行时间
// 文章数量
// 最近一次更新
<template>
  <div class="site-info">
    <div class="title-wrapper text-xl px-1 pt-3 cursor-pointer dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 text-gray-600 flex items-center">
      <span class="icon-lighting text-3xl text-blue-600 mt-1"></span>
      <span class="title font-bold">网站咨询</span>
    </div>
    <div class="article-count flex justify-between items-center py-2 mt-1 darkmode">
      <div class="mx-6">文章数目:</div>
      <div class="mx-6">{{articleCount}} 篇</div>
    </div>
    <div class="site-time-wrapper flex justify-between items-center py-2 darkmode">
      <div class="mx-6">运行时间:</div>
      <div class="mx-6">{{ runTime }}天</div>
    </div>
    <div
      class="last-modified-wrapper flex justify-between items-center py-2 mb-1 darkmode pb-4"
    >
      <div class="mx-6">上次更新:</div>
      <div class="mx-6">{{ lastModified }}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    articleCount() {
      return this.articles.length;
    },
    lastModified() {
      let sublist = [...this.articles];
      let lastArticle = sublist.sort((a, b) => {
        return new Date(b.created) - new Date(a.created) ;
      });
      let lastMdify = lastArticle[0].created || new Date().toLocaleDateString();
      return lastMdify;
    },
    runTime() {
      let days =
        (new Date() - new Date(process.env.VUE_APP_RUN_TIME)) /
        (1000 * 60 * 60 * 24);
      return parseInt(days);
    },
  },
};
</script>
<style lang='scss' scoped>
.darkmode {
  @apply dark:text-gray-500 dark:hover:text-blue-400 text-gray-600
}

.site-info{
  border: 1px solid #eee;
  user-select: none;
}
</style>