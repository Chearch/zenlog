// 用于过滤标签和分类字段
<template>
<div class="filter-bar" v-if="ifShowFilterBar">
  <!-- 过滤分类 -->
  <div class="category relative ml-3 rounded-md text-md bg-green-100  p-1 px-3  flex items-center" v-if="category">
    <span class="text-md">{{ category }}</span>
    <span class="icon-error text-2xl cursor-pointer" @click="clearCategory()"></span>
  </div>

  <!-- 过滤标签 -->
  <div class="tags ml-3 h-10 flex items-center" v-for="(item, index) in tags" :key="index">
    <div class="tag relative  p-1 px-3  rounded-md bg-pink-100">
      <span class="text-md">{{ item }}</span>
      <span class="icon-error text-2xl cursor-pointer" @click="modifyTags(item)"></span>
    </div>
  </div>

  <!-- 过滤timeline -->
  <div class="timeline relative ml-3 rounded-md text-md bg-green-100  p-1 px-3  flex items-center" v-if="selectTimeLine">
    <span class="text-md">{{ selectTimeLine }}</span>
    <span class="icon-error text-2xl cursor-pointer absolute error-icon" @click="clearTimeline()"></span>
  </div>

  <!-- 过滤searchContent -->
  <div class="searchContent relative ml-3 rounded-md text-md bg-green-100  p-1 px-3  flex items-center" v-if="searchContent">
    <span class="text-md">{{ searchContent }}</span>
    <span class="icon-error text-2xl cursor-pointer absolute error-icon" @click="clearSearchContent()"></span>
  </div>


  <!-- 清除所有 -->
  <div class="clear-all flex items-center h-full" v-if="ifShowFilterBar" @click="clearAll">
    <span class="icon-error text-2xl " @click="clearSearchContent()"></span>
  </div>

</div>
</template>

<script>
export default {
  computed:{
    ifShowFilterBar(){
      if(this.tags.length !==0 || this.category.length !==0 || this.selectTimeLine.length !==0 || this.searchContent.length !==0){
        return true;
      }else{
        return false
      }
    }
  },
  methods: {
    // 从标签列表中移除指定标签
    modifyTags(t) {
      let newTag = [...this.tags].filter((v) => v !== t);
      this.defineTags(newTag);
    },
    // 删除分类
    clearCategory(){
      this.modifyCategory('');
    },
    // 删除timeline
    clearTimeline(){
      this.setSelectTimeLine('');
    },
    // 删除searchContent
    clearSearchContent(){
      this.modifySearchContent('');
    },
    // 删除所有
    clearAll(){
      this.clearSearchContent();
      this.clearTimeline();
      this.clearCategory();
      this.clearTags();
    }
  },
};
</script>
<style lang='scss' scoped>
.filter-bar{
  position: absolute;
  top: -3rem;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
}
.tag,
.category,
.timeline,
.searchContent {
  .icon-error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
    display: none;
  }
  &:hover {
    color: gray;
    .icon-error {
      display: block;
      opacity: 1;
    }
  }
}
.clear-all{
  position: absolute;
  top: 0;
  right: 0;
  color: #ccc;
  &:hover{
    color: #333;
    cursor: pointer;
  }
}
</style>