<template>
  <div class="article-item w-full h-16 px-10 flex items-center justify-between">
    <!-- 时间和标题 -->
    <div class="time-and-title flex">
      <div class="time text-lg text-black w-32 darkmode">{{ created  }}</div>
      <div class="title text-lg cursor-pointer text-blue-700 dark:text-blue-400" @click="showArticle(id)">{{ title }}</div>
    </div>

    <!-- 分类 -->
    <div class="flex items-center justify-end darkmode">
      <span class="category icon cursor-pointer" @click="modifyCategory(c)">{{ c }},</span>
      <div class="flex items-center" v-for="(t, index) in t" :key="index">
        <div class="icon flex justify-center items-center cursor-pointer ml-1" @click="pushTags(t)">{{ t }}</div>
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
  box-sizing: border-box;
  &:nth-last-child(1) {
    border-bottom: none;
    margin-bottom: 9rem;
  }
  &:nth-last-child(1):hover {
    box-shadow: none;
  }
}

.icon {
  overflow: hidden;
  text-overflow: ellipse;
  white-space: normal;
  word-break: keep-all;
  &:hover{
    border-bottom: 1px solid blue;
  }
}
.title {
  overflow: hidden;
  text-overflow: ellipse;
  white-space: nowrap;
  word-break: keep-all;
  &:hover{
    border-bottom: 1px solid blue;
  }
}
.darkmode{
  @apply dark:text-white ;
}
</style>