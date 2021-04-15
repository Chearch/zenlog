<template>
<transition name="slide-down">
  <div class="navagation flex items-center bg-gray-100 text-black dark:bg-gray-900 dark:text-white" v-if="ifShowNav">

    <div class="title-wrapper subTitle" @click="navClick(0)" :class="{'selected': ifViewVisible === 0}">
      <div class="title font-semibold">{{navItems[0].name}}</div>
    </div>
    <div class="recommand-wrapper subTitle" @click="navClick(1)" :class="{'selected': ifViewVisible === 1}">
      <div class="recommand font-semibold">{{navItems[1].name}}</div>
    </div>
    <div class="feature-wrapper subTitle" @click="navClick(2)" :class="{'selected': ifViewVisible === 2}">
      <div class="feature font-semibold">{{navItems[2].name}}</div>
    </div>
    <!-- <div class="feature-wrapper subTitle" @click="navClick(3)" :class="{'selected': ifViewVisible === 3}">
      <div class="feature font-semibold">{{navItems[3].name}}</div>
    </div> -->
    <div class="filter-wrapper">
      <filter-bar></filter-bar>
    </div>
    <div class="search-warpper text-3xl absolute right-32 flex items-center">
      <transition name="search">
        <div class="search-bar relative h-10 mr-6 w-96 bg-gray-200 dark:bg-gray-500 rounded-md flex items-center" v-if="searchVisible">
          <input type="text" v-model="inpVal" v-focus class="inpstyle outline-none text-xl w-full h-full bg-transparent dark:text-gray-100" @keyup.enter.exact="search" @keyup.esc.exact="cancel"/>
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
import api from "@/api/index.js"
import filterBar from "@/components/common/filterBar.vue"

export default {
  data() {
    return {
      inpVal: "",
    };
  },
  components: {
    iosSwitch,
    filterBar,
  },
  methods: {
    search() {
      if (this.searchVisible) {
        // 进行搜索，将searchContent进行修改，则需要用到的地方监听searchContent
        this.inpVal = this.inpVal.trim();
        this.modifySearchContent(this.inpVal);
        api.search(this.inpVal).then(result=>{
          this.setSearchResult(result)
        }).catch(reason=>{
          this.error(reason);
        })
      } else {
        this.setSearchVisible(true);
      }
    },
    cancel() {
      // 取消搜索
        this.inpVal = "";
        this.setSearchVisible(false);
        this.clearAllTags();
    },
    onTodo() {
      document.documentElement.classList.add("dark");
      this.setIfDarkMode(true);
    },
    offTodo() {
      document.documentElement.classList.remove("dark");
      this.setIfDarkMode(false);
    },
    navClick(n){
      this.setIfViewVisible(n);
      this.info('navgation 82-lines: click '+this.navItems[n].name);
      // this.jumpto(navItems[n].path);
    },
  },
  mounted(){
    setTimeout(() => {
      this.setIfShowNav(true);
    }, 500);
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/styles/global.scss";
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');
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
  @apply m-8 text-xl cursor-pointer hover:text-blue-400 dark:hover:text-blue-400;
  div{
    font-family: 'Fira Sans', sans-serif !important;
    font-size: 1.4rem
  }
}
.icon {
  @apply font-bold hover:text-blue-400;
  font-size: 1.6rem
}

.navagation {
  width: 100%;
  box-shadow: 0 .3rem .3rem rgba(0, 0, 0, 0.15); 
  position: fixed;
  width: 100%;
  height: 4rem;
  top: 0;
  left: 0;
  z-index: 1000;
  .filter-wrapper{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }  
}

.selected{
  color: #051025;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  font-weight: bold;
  // text-shadow: 1px 1px 2px #31579A;
  // overflow: hidden;
  &:hover{
    color: #051025 !important;
  }
}
// .selected::before{
//   content: '';
//   width: 250%;
//   height: 8rem;
//   background-color: gray;
//   box-shadow: inset 0 3px 6px rgba(0, 0, 0, .15);
//   position: absolute;
//   bottom: 0;
//   left: 50%;
//   border-radius: 3rem;
//   transform: translate(-50%,90%);
// }




















</style>