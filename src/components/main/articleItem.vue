<template>
  <div class="article-item w-9/12 h-8 my-5 px-3 py-6 flex items-center justify-between ">
      <div class="title text-lg cursor-pointer text-green-800 hover:text-green-600 font-bold " @click="linkTo(link)">{{title}}</div>

        <!-- 分类 -->
      <div class="info-wrapper flex items-center relative text-gray-500 ">
          <span class="category icon" @click="modifyCategory(c)" >{{c}}</span>

          <div class="tag-wrapper" v-for="(t,index) in tagsArray" :key="index">
              <div class="tag   icon"
              @click="pushTags(t)">{{t}}</div>
          </div>
      </div>
        <div class="time text-gray-400 ">{{time | fmtTime}}</div>
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
  },
};
</script>
<style lang='scss' scoped>
.article-item{
    border-bottom: 1px solid rgb(196, 196, 196);
    box-sizing: border-box;
    &:nth-last-child(1) {
      border-bottom: none;
      margin-bottom: 9rem;
    }
    &:nth-last-child(1):hover {
      box-shadow:none;
    }
}

.icon{
  @apply hover:bg-gray-700 w-12 h-8 flex justify-center items-center cursor-pointer rounded-md ;
}
</style>