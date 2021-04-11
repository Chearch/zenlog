<template>
  <div class="hot-artilces shadow-xl">
    <div
      class="title-bar centerflex h-10 p-2 px-4 text-lg bg-yellow-500 z-10 text-white dark:bg-purple-700"
    >
      <span class="">Hot</span>
      <span
        class="icon-integral text-3xl cursor-pointer hover:text-blue-600"
        @click="hideHotList"
      ></span>
    </div>

    <transition name="height-zero">
      <div
        class="content-area overflow-hidden flex flex-col h-76 bg-gray-50"
        v-if="ifShow"
      >
        <div
          class="h-item centerflex p-2 hover:bg-gray-300 cursor-pointer px-6 dark:bg-black dark:text-gray-100 dark:text-blue-300 dark:hover:text-gray-100 dark:hover:bg-green-500"
          v-for="(item, index) in haticles"
          :key="index"
          @click="linkTo(item.link)"
        >
          <div class="title">{{ item.title }}</div>
          <div class="visited">
            <span> {{ item.visited }} </span>
            <span class="icon-hot text-red-600 "></span>
          </div>
        </div>
      </div>
    </transition>
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
.height-zero-enter-to,
.height-zero-leave {
  height: 20rem;
}
.height-zero-leave-to,
.height-zero-enter {
  height: 0rem;
}
.height-zero-enter-active,
.height-zero-leave-active {
  transition: all 0.3s linear;
}

.darkmode {
  @apply dark:text-gray-500 dark:hover:text-blue-400;
}
.centerflex {
  @apply flex items-center justify-between;
}
</style>