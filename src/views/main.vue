<template>
  <div class="main">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>

    <div class="content">
      <div class="person">
        <person-info></person-info>
      </div>
      <div class="article">
        <article-list></article-list>
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
  width: 99%;
  height: 90vh;
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    .person {
      background: transparent;
      width: 25%;
      border-right: 3px dashed gray;
      height: 80vh;
      border: 1px solid red;
    }
    .article {
      background: white;
      width: 70%;
    }
  }
}

@media screen and (max-width: 500px) {
  .person {
    display: none !important;
  }
}
</style>