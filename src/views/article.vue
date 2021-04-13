<template>
  <div class="article-view flex">
    <div class="right w-3/12"></div>
    <div class="center w-6/12 flex items-center justify-center flex-col">
      <div class="bar w-full h-36 text-black ">
        <div class="title-wrapper  flex w-full items-center justify-center text-3xl ">
          <span class="icon-back cursor-pointer" @click="goback"></span>
          <div class="title dark:text-red">{{article.title}}</div>
          </div>
        <div class="info ct mt-4 text-lg">
          <div class="fis px-6 ct">
              <span class="icon-time mr-1 text-blue-500"></span>
              <span class="time-info">{{article.created}}</span>
          </div>
            <div class="sec px-6 ct">
              <span class="icon-biaoqian mr-1 text-green-500"></span>
              <span class="tags-info">{{article.tags.join(' / ').toUpperCase()}}</span>
            </div>
          <div class="thi px-6 ct">
              <span class="icon-uniE903 mr-1 text-yellow-500"></span>
              <span class="category-info">{{article.category}}</span>
          </div>
        </div>
      </div>
      <div class="content">
        <div v-html="articleContent" class="markdown-body"></div>
      </div>
    </div>
    <div class="left w-3/12"></div>
  </div>
</template>

<script>
import axios from "axios";
import marked from "marked";
import hljs from "../utils/highlight.min.js";

export default {
  data() {
    return {
      articleId: null,
      articleContent: "",
      article: [],
    };
  },
  beforeMount() {
    this.articleId = this.$route.query.id;
    this.article = [...this.articles].filter(v=> v.id == this.articleId)[0];
    this.getContent();
  },
  mounted() {
    let block = document.querySelectorAll("pre code");
    block.forEach((el) => {
      hljs.highlightBlock(el);
    });
  },
  methods: {
    getContent() {
      axios({
        url: process.env.VUE_APP_API_ADDRESS + "/article?id=" + this.articleId,
        method: "get",
      }).then((res) => {
        this.articleContent = res.data;
        this.rendermk(this.articleContent);
      });
    },
    rendermk(content) {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        breaks: true, // 换行之后添加<br>，需要gfm为true
        tables: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        },
      });
      this.articleContent = marked(content);
    },
  },
};
</script>
<style lang='scss'>
@import "@/assets/styles/global.scss";
.article-view {
  margin-top: 3rem;
  margin-bottom: 10rem;
}
.ct{
  @apply flex items-center justify-center;
}
.center{
  position: relative;
  .icon-back{
    position: absolute;
    left: 0;
    top: 0;
  }
  .title{
    margin-left: 3rem;
  }
  .info{
    margin-left: 3rem;
  }
}
</style>