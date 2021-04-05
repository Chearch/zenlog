<template>
  <div class="article-list-wrapper">
    <!-- <div class="cards-wrapper">
      <card
        v-for="(item, index) in articleList"
        :key="index"
        :title="item.title"
        :link="item.link"
        class="article-list-card"
      >
      </card>
    </div> -->
  </div>
</template>

<script>
import api from "@/api/index.js";
import card from "@/components/common/card.vue";

export default {
  computed: {
    articleList() {
      return api.articleList;
    },
    nowday() {
      let [year, month, day] = this.getNowTime();
      return `${year}/${month}/${day}`;
    },
  },
  components: {
    card,
  },
  mounted() {
    console.log(api.articleList);
  },
};
</script>
<style lang='scss' scoped>
.article-list-wrapper {
  margin-left: 3rem;
  .cards-wrapper {
    .article-list-card {
      width: 20rem;
      padding: 1.2rem 0;
      margin-top: 1rem;
      border: 1px solid red;
    }
  }
}
</style>