<template>
  <div class="article-list-wrapper">
    <el-timeline reverse="true">
      <el-timeline-item
        :timestamp="item.time"
        placement="top"
        v-for="(item, index) in articleList"
        :key="index"
        color="#0bbd87"
        class="article-list-card"
      >
        <el-card class="article-list-card">
          <div class="article-title" @click="linkTo(item.link)">
            {{ item.title }}
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import api from "@/api/index.js";
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
  mounted() {
    console.log(api.articleList);
  },
};
</script>
<style lang='scss' scoped>
.article-list-wrapper {
  margin-left: 20px;
  .article-list-card {
    cursor: pointer;
    .article-title {
      padding: 10px;
      font-size: 0.8rem;
    }
    .article-time {
      font-size: 0.6rem;
      margin-top: 0.3rem;
      color: rgb(156, 149, 149);
    }
  }
}
</style>