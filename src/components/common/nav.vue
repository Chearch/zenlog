<template>
<transition name="slide-down">
  <div class="navagation bg-white-100 dark:bg-black h-16 shadow-md flex items-center relative dark:" v-if="ifShowNav">
    <div class="title-wrapper subTitle" @click="jumpto(navItems[0].path)">
      <div class="title font-semibold">首页</div>
    </div>
    <div class="recommand-wrapper subTitle" @click="jumpto(navItems[1].path)">
      <div class="recommand font-semibold">推荐</div>
    </div>
    <div class="feature-wrapper subTitle" @click="jumpto(navItems[2].path)">
      <div class="feature font-semibold">精选</div>
    </div>
    <div class="feature-wrapper subTitle" @click="jumpto(navItems[3].path)">
      <div class="feature font-semibold">消遣</div>
    </div>
    <div class="search-warpper text-3xl absolute right-32 flex items-center">
      <transition name="search">
        <div class="search-bar relative h-10 mr-6 w-96 bg-gray-200 dark:bg-gray-500 rounded-md flex items-center" v-if="searchVisible">
          <input type="text" v-model="inpVal" class="inpstyle outline-none text-xl w-full h-full bg-transparent dark:text-gray-100" @keyup.enter.exact="search" @keyup.esc.exact="cancel"/>
          <span class="icon-cancel icon mr-2 cursor-pointer" @click="cancel"></span>
        </div>
      </transition>
    </div>
    <div class="search-icon-wrapper text-3xl cursor-pointer flex items-center">
      <span class="search icon-search icon absolute right-24" @click="search"></span>
    </div>
    <div class="search-warpper text-3xl absolute right-2 cursor-pointer">
      <ios-switch :onTodo="onTodo" :offTodo="offTodo"></ios-switch>
    </div>
  </div>
  </transition>
</template>

<script>
import iosSwitch from "@/components/common/switch.vue";
export default {
  data() {
    return {
      searchVisible: false,
      inpVal: "",
      ifShowNav: false,
    };
  },
  components: {
    iosSwitch,
  },
  methods: {
    search() {
      if (this.searchVisible) {
        // 进行搜索，将searchContent进行修改，则需要用到的地方监听searchContent
        this.modifySearchContent(this.inpVal);
      } else {
        this.searchVisible = true;
      }
    },
    cancel() {
      // 取消搜索
      if (this.inpVal) {
        this.inpVal = "";
      } else {
        this.searchVisible = false;
      }
    },
    onTodo() {
      document.documentElement.classList.add("dark");
    },
    offTodo() {
      document.documentElement.classList.remove("dark");
    },
  },
  mounted(){
    setTimeout(() => {
      this.ifShowNav = true;
    }, 500);
  }
};
</script>

<style lang='scss' scoped>
 @import "@/assets/styles/global.scss"
input[type="text"] {
  padding-left: 0.7rem;
  height: 2rem;
  line-height: 2rem;
}
.icon-cancel {
  color: #9ca3af !important;
  font-weight: normal !important;
}

.subTitle {
  @apply m-8 text-xl cursor-pointer hover:text-blue-400 dark:text-gray-500 dark:hover:text-blue-400 text-gray-600;
}
.icon {
  @apply font-bold dark:text-gray-500  hover:text-blue-400 dark:hover:text-blue-400 text-gray-600;
}


.navagation {
  width: 100%;
}
</style>