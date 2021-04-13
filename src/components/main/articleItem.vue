<template>
  <div class="article-item">
    <!-- 时间和标题 -->
    <div class="time-and-title">
      <div class="time text-black darkmode">{{ created  }}</div>
      <div class="title text-blue-700 dark:text-blue-400" @click="showArticle(id)">{{ title }}</div>
    </div>

    <!-- 分类 -->
    <div class="category darkmode">
      <span class="icon" @click="modifyCategory(c)">{{ c }},</span>
      <div class="tags" v-for="(t, index) in t" :key="index">
        <div class="icon" @click="pushTags(t)">{{ t }}</div>
        <span v-if="tlengthShow(index)">,</span>
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
  methods: {
    addTags(t) {
      this.pushTags(t);
    },
    tlengthShow(index) {
      //  前端,js,vue,html, 去除最后的逗号
      return index !== this.t.length - 1;
    },
  },
};
</script>
<style lang='scss' scoped>
.article-item {
  width: 100%;
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
    // justify-content: space-between;
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

.darkmode{
  @apply dark:text-white ;
}
</style>