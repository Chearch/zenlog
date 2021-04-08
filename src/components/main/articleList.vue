<template>
  <div class="article-list">
    <div class="article-wrapper">
      <article-item
        v-for="(item, index) in articleList"
        :key="index"
        :title="item.title"
        :link="item.link"
        :t = "item.tag"
        :c="item.category"
        :time="item.time"
      >
      </article-item>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
import articleItem from "./articleItem";

export default {
  watch:{
    tags(v){
      this.modifiedArticleList()
    }
    ,
    category(v){
      this.modifiedArticleList()
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
    this.articleList = api.articleList.sort((a,b)=>{
        let flag4 = new Date(b.time) - new Date(a.time)
        return flag4
      });
  },
  methods:{
    modifiedArticleList(){
        this.articleList= api.articleList.filter(v=>{
        let articleTag = v.tag.split(',');
        let tags = [...this.tags];      
        // 过滤标签
        let flag1 = true;
        if(tags.length === 0){
          flag1 = true;
        }else{
          tags.forEach(t=>{
            if(!articleTag.includes(t)){
              flag1 = false;
            }
          })
        }
        // 过滤分类
        let flag2 = false;
        if(this.category.length===0){
          flag2=true;
        }else{
          if(this.category === v.category){
            flag2=true
          }
        }
        
        // 过滤搜索
        let flag3 = false;
        if(this.searchContent.length === 0){
          flag3 = true;
        }
        return flag1 && flag2 && flag3 ;
      })
    }
    
  },
  data(){
    return {
      articleList : []
    }
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