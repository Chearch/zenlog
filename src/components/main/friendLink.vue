<template>
  <div class="hot-artilces shadow-xl">
    <div
      class="title-bar centerflex h-10 p-2 px-4 text-lg bg-yellow-500 z-10 text-white dark:bg-black"
    >
      <span class="">Link</span>
      <span
        class="icon-shuqian text-2xl cursor-pointer hover:text-blue-600"
        @click="toAllSite"
      ></span>
    </div>

    <div class="content-area overflow-hidden flex flex-col bg-gray-50 dark:bg-black dark:text-blue-300 ">
      <div
        class="h-item centerflex p-2 hover:bg-gray-300 cursor-pointer px-6 dark:hover:bg-green-500 dark:hover:text-gray-100"
        v-for="(item, index) in friendLink"
        :key="index"
        @click="linkTo(item.link)"
      >
        <div class="title ">{{ item.title }}</div>
        <span class="icon-link  text-blue-600"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toAllSite() {
      alert("Ctrl+D 收藏本页")
    },
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

.hot-artilces {
  margin-top: 3rem;
}
</style>