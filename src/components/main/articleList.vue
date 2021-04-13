<template>
  <div class="article-list w-full">
    <article-item
      v-for="(item, index) in articleList"
      :key="index"
      :title="item.title"
      :id="item.id"
      :t="item.tags"
      :c="item.category"
      :created="item.created"
    >
    </article-item>
  </div>
</template>

<script>
import articleItem from "./articleItem";
export default {
  watch: {
    tags(v) {
      this.modifiedArticleList();
    },
    category(v) {
      this.modifiedArticleList();
    },
    searchContent(v){
      this.modifiedArticleList();
    },
    selectTimeLine(v){
      this.modifiedArticleList();
    }
  },
  computed: {
    nowday() {
      let [year, month, day] = this.getNowTime();
      return `${year}/${month}/${day}`;
    },
  },
  components: {
    articleItem,
  },
  mounted() {
    this.articleList = [...this.articles];
    // .sort((a, b) => {
    //   let flag4 = new Date(b.time) - new Date(a.time);
    //   return flag4;
    // });
  },
  methods: {
    modifiedArticleList() {
      this.articleList = [...this.articles].filter((v) => {
        let articleTag = v.tags;    // 文章自带标签
        let tags = [...this.tags];  // 用户想要的标签

        // 过滤标签
        let flag1 = true;
        if (tags.length === 0) {
          flag1 = true;
        } else {
          tags.forEach((t) => {
            if (!articleTag.includes(t)) {
              flag1 = false;
            }
          });
        }

        // 过滤分类
        let flag2 = false;
        if (this.category.length === 0) {
          flag2 = true;
        } else {
          if (this.category === v.category) {
            flag2 = true;
          }
        }

        // 过滤搜索
        let flag3 = false;
        if (this.searchContent.length === 0) {
          flag3 = true;
        }

        // 过滤timeline
        let flag4 = false;
        let t = v.created.replace(/\/\d+$/,''); // 将2021/03/12 -> 2021/03
        if(this.selectTimeLine.length === 0){
          flag4 = true;
        }else if(this.selectTimeLine === t){
          flag4 = true;
        }

        return flag1 && flag2 && flag3 && flag4;
      });
    },
  },
  data() {
    return {
      articleList: [],
    };
  },
};
</script>
<style lang='scss' scoped>
</style>