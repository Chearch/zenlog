<template>
  <div class="article-item w-9/12 h-28 my-3 p-9 flex flex-col justify-center darkmode">
      <div class="title-wrapper my-3  darkmode">
          <div class="title text-xl cursor-pointer mb-1 darkmode" @click="linkTo(link)">{{title}}</div>
      </div>

      <div class="info-wrapper flex items-center relative text-gray-500 darkmode">
        <!-- 分类 -->
          <span 
            class="category rounded-md bg-gray-200 p-1 px-3 cursor-pointer mr-2 -ml-1 hover:bg-gray-700 hover:text-gray-100 darkmode dark:bg-gray-900"
            @click="modifyCategory(c)"
            >{{c}}</span>
          <div class="tag-wrapper" v-for="(t,index) in tagsArray" :key="index">
              <span class="tag  rounded-xl bg-gray-200 p-1 px-3 ml-2 cursor-pointer hover:bg-gray-700 hover:text-gray-100 darkmode dark:bg-gray-900"
              @click="pushTags(t) " >{{t}}</span>
          </div>
          <span class="time absolute right-0 darkmode">{{time}}</span>
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
  computed:{
      tagsArray(){
          return this.t.split(',')
      }
  },
  methods:{
      addTags(t){
          this.pushTags(t);
      }
  }
};
</script>
<style lang='scss' scoped>
.article-item{
    border-bottom: 2px solid gray;
    box-sizing: border-box;
    &:nth-last-child(1) {
      border-bottom: none;
      margin-bottom: 9rem;
    }
  &:hover{
    box-shadow: 0 3px 0 rgba(0,0,0,.15);
    transition: all .2s linear;
  }
    &:nth-last-child(1):hover {
      box-shadow:none;
    }
}

.darkmode {
  @apply dark:text-gray-200 dark:hover:text-blue-400;
}
</style>