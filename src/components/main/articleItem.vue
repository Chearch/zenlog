<template>
  <div class="article-item relative" @mouseenter="enterItem" @mouseleave="leaveItem">
    <!-- 时间和标题 -->
    <div class="time-and-title" >
      <div class="time">{{ created  }}</div>
      <div class="title " @click="showArticle(id)" v-html="title"></div>
    </div>

    <!-- 分类 -->
    <div class="category">
      <span class="icon" @click="modifyCategory(c)">{{ c }},</span>
      <div class="tags" v-for="(t, index) in t" :key="index">
        <div class="icon" @click="pushTags(t)">{{ t }}</div>
        <span v-if="tlengthShow(index)">,</span>
      </div>
    </div>

    <!-- 搜索内容  -->
    <div class="search-content-info absolute" v-if="ifShowSearchContent" @mousewheel="mswheel" ref="scroll" id="scroll">
      <div class="content-card">
        <div class="content" v-html="articleContent"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    created: {
      type: String,
      required: true,
    },
    t: {
      type: Array,
      required: true,
    },
    c: {
      type: String,
      required: true,
    },
  },
  watch:{
    searchResult(v){
      console.log('searchResult Changed');
      this.searchResultChange();
    },
    ifMouseEnter(v){
      this.setItemVisible();
    }
  },
  data(){
    return {
      ifShowSearchContent: false,  
      ifMouseEnter: false,
      articleContent: '',
    }
  },
  methods: {
    addTags(t) {
      this.pushTags(t);
    },
    tlengthShow(index) {
      //  前端,js,vue,html, 去除最后的逗号
      return index !== this.t.length - 1;
    },
    enterItem(){
      this.ifMouseEnter = true;
    },
    leaveItem(){
      this.ifMouseEnter = false;
    },
    setItemVisible(){
      let searchResult = [...this.searchResult];
      if(searchResult.length !== 0 && this.ifMouseEnter && this.articleContent.length !== 0){
        this.ifShowSearchContent = true;
      }else{
        this.ifShowSearchContent = false;
      }
    },
    searchResultChange(){
      this.setItemVisible();
      if([...this.searchResult].length === 0) return;
       let item  = [...this.searchResult].filter(v=>v.id == this.id)[0];
       this.articleContent = item.content;
       let keyword = item.keyword;

       if(this.articleContent.length === 0) return;
       
       this.articleContent = '.....' + this.articleContent + '......';
       this.articleContent = this.articleContent.replace(keyword,`<i style='color: #D97706; font-weight:bold;'>${keyword}</i>`);     
    },
    // 水平滚动
    mswheel(e){
        e.preventDefault();
        let step = e.deltaY > 0 ? 20 : -20;
        this.$refs.scroll.scrollLeft += step;
    },
  },
  mounted(){
    this.searchResultChange();
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/styles/global.scss";
.article-item {
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  &:nth-last-child(1) {
    border-bottom: none;
    margin-bottom: 9rem;
  }

  .time-and-title{
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    .time{
      padding-right: 3rem !important; 
    }
    .title{
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipse;
      white-space: nowrap;
      word-break: keep-all;
      margin-left: 0 !important;
      &:hover{
        border-bottom: 1px solid blue;
      }
    }
}

.category{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .icon{
    cursor: pointer;
  }
  .tags{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: .3rem;
  }
}
}

.icon {
  overflow: hidden;
  text-overflow: ellipse;
  white-space: normal;
  word-break: keep-all;
  box-sizing: border-box;
  &:hover{
    border-bottom: 1px solid blue;
  }
}

.search-content-info {
  top: 50%;
  right: 10rem;
  width: 50rem;
  transform: translate(100%,-50%);
  margin: 1rem 0;
  overflow-x: scroll;
  background-color: white;
  &::-webkit-scrollbar{
    height: 0;
  }
  .content-card{
    border-radius: 3px;
    opacity: 1;
    z-index: 1000;
    box-shadow: -3px 3px 3px 3px rgba(0, 0, 0, .15);
    .content{
      width: 100%;
      padding: .8rem .4rem;
      text-indent: .4rem;
      // text-overflow: ellipsis;
      // overflow: hidden;
      white-space: nowrap;
      color: black;
    }
  }
}
</style>