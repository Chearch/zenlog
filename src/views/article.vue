<template>
  <div class="article-view flex">
    <div class="right w-3/12"></div>
    <div class="center w-6/12 flex items-center justify-center">
      <div v-html="articleContent" class="markdown-body"></div>
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
    };
  },
  beforeMount() {
    this.articleId = this.$route.query.id;
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
</style>