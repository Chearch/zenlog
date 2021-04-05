<template>
  <div class="main">
    <div class="content">
      <div class="person">
        <person-info></person-info>
      </div>
      <div class="article">
        <!-- <article-list></article-list> -->
      </div>
    </div>
  </div>
</template>

<script>
import personInfo from "@/components/main/personInfo.vue";
import articleList from "@/components/main/articleList.vue";

export default {
  components: {
    personInfo,
    articleList,
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/styles/global.scss";
.main {
  width: 100%;
  height: 100%;
  position: relative;
  .content {
    position: absolute;
    top: 10px;
    left: 10%;
    width: 80%;

    display: flex;
    justify-content: center;

    .person {
      background: transparent;
      width: 25%;
      margin-top: 10px;
    }
    .article {
      background: white;
      width: 70%;
    }
  }
}

@media screen and (max-width: 600px) {
  .person {
    display: none !important;
  }
}
</style>