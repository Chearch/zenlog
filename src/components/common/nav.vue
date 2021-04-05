<template>
  <div
    class="navagation bg-white-100 dark:bg-black h-16 shadow-md flex items-center relative dark:"
  >
    <div
      class="title-wrapper m-8 text-xl cursor-pointer dark:text-gray-500  hover:text-blue-400 dark:hover:text-blue-400 text-gray-600"
    >
      <div class="title font-semibold">首页</div>
    </div>
    <div
      class="recommand-wrapper m-8 text-xl cursor-pointer dark:text-gray-500  hover:text-blue-400 dark:hover:text-blue-400 text-gray-600"
    >
      <div class="recommand font-semibold">推荐</div>
    </div>
    <div
      class="feature-wrapper m-8 text-xl cursor-pointer dark:text-gray-500  hover:text-blue-400 dark:hover:text-blue-400 text-gray-600"
    >
      <div class="feature font-semibold">精选</div>
    </div>

    <div
      class="feature-wrapper m-8 text-xl cursor-pointer dark:text-gray-500  hover:text-blue-400 dark:hover:text-blue-400 text-gray-600"
    >
      <div class="feature font-semibold">消遣</div>
    </div>

    <div class="search-warpper text-3xl absolute right-24 cursor-pointer">
      <div
        class="search icon-search font-bold dark:text-gray-500  hover:text-blue-400 dark:hover:text-blue-400 text-gray-600"
      ></div>
    </div>

    <div class="search-warpper text-3xl absolute right-2 cursor-pointer">
      <ios-switch :onTodo="onTodo" :offTodo="offTodo"></ios-switch>
    </div>
  </div>
</template>

<script>
import iosSwitch from "@/components/common/switch.vue";

export default {
  components: {
    iosSwitch,
  },
  methods:{
    onTodo(){
      document.documentElement.classList.add("dark")
    },
    offTodo(){
      document.documentElement.classList.remove("dark")
    }
  },
  mounted() {
    // if (
    //   localStorage.theme === "dark" ||
    //   (!("theme" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches)
    // ) 
  },
};
</script>
<style lang='scss' scoped>
</style>