<template>
  <div class="hot-artilces w-72 shadow-xl">
    <div
      class="title-bar centerflex h-10 p-2 text-lg darkmode bg-gray-700 z-10 text-white"
    >
      <span class="">Link</span>
      <span
        class="icon-shuqian text-2xl cursor-pointer"
        @click="toAllSite"
      ></span>
    </div>

      <div
        class="content-area overflow-hidden flex flex-col bg-gray-50"
        v-if="ifShow"
      >
        <div
          class="h-item centerflex p-2 hover:bg-gray-300 cursor-pointer"
          v-for="(item, index) in friendLink"
          :key="index"
          @click="linkTo(item.link)"
        >
          <div class="title darkmode">{{ item.title }}</div>
          <span class="icon-link darkmode text-blue-600"></span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      haticles: [],
      tmpAtcles: [],
      ifShow: true,
      task: "",
    };
  },
  methods: {
    hideHotList() {
      this.ifShow = !this.ifShow;
    },
    toAllSite(){

    }
  },
  created() {
    this.tmpAtcles = [...this.articles]
      .sort((a, b) => {
        return b.visited - a.visited;
      })
      .slice(0, this.limit);
    this.haticles = this.tmpAtcles;
  },
};
</script>


<style lang='scss' scoped>
.darkmode {
  @apply dark:text-gray-500 dark:hover:text-blue-400;
}
.centerflex {
  @apply flex items-center justify-between;
}

.hot-artilces{
    margin-top: 3rem;
}
</style>