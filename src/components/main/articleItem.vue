<template>
  <div
    class="article-item w-full h-16 px-10  flex relative items-end justify-start cursor-pointer"
  >
    <div class="title" @click="linkTo(link)">{{ title }}</div>

    <!-- 分类 -->
    <div class="info-wrapper flex items-center relative text-gray-500 w-48">
      <span class="category icon" @click="modifyCategory(c)">{{ c }}</span>
      <span>,</span>

      <div
        class="tag-wrapper flex items-center"
        v-for="(t, index) in tagsArray"
        :key="index"
      >
        <div class="tag icon" @click="pushTags(t)">{{ t }}</div>
        <span class="dh" v-if="tlengthShow(index)">,</span>
      </div>
    </div>
    <div class="time text-gray-400 absolute right-3 bottom-1">{{ time | fmtTime }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    t: {
      type: String,
      required: true,
    },
    c: {
      type: String,
      required: true,
    },
  },
  computed: {
    tagsArray() {
      return this.t.split(",");
    },
  },
  methods: {
    addTags(t) {
      this.pushTags(t);
    },
    tlengthShow(index) {
      //  前端,js,vue,html, 去除最后的逗号
      return index !== this.tagsArray.length - 1;
    },
  },
  filters: {
    fmtTime: (v) => {
      if (!v) return "";
      let [year, month, day] = v.split("/");
      month.length !== 2 ? (month = "0" + month) : null;
      day.length !== 2 ? (day = "0" + day) : null;
      return `${year}/${month}/${day}`;
    },
  },
};
</script>
<style lang='scss' scoped>
.article-item {
  border-bottom: 1px solid rgb(196, 196, 196);
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
  @apply hover:text-red-300 h-8 flex justify-center items-center cursor-pointer rounded-md;
  overflow: hidden;
  text-overflow: ellipse;
  white-space: normal;
  word-break: keep-all;
}
.title {
  @apply text-lg cursor-pointer text-green-800 hover:text-green-600 font-bold w-96;
  overflow: hidden;
  text-overflow: ellipse;
  white-space: nowrap;
  word-break: keep-all;
}
</style>