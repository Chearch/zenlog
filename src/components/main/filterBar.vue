// 用于过滤标签和分类字段
<template>
  <div class="filter-bar h-12 w-6/12 ml-3 flex absolute top-0 items-center" v-if="ifShowFilterBar">
    <div
      class="category relative ml-3 rounded-md text-md bg-green-100  p-1 px-3  flex items-center"
      v-if="category"
    >
      <span class="text-md">{{ category }}</span>
      <span
        class="icon-error text-2xl cursor-pointer"
        @click="modifyCategory('')"
      ></span>
    </div>

    <div class="tags  ml-3 h-10 flex items-center" v-for="(item, index) in tags" :key="index">
      <div class="tag relative  p-1 px-3  rounded-md bg-pink-100">
        <span class="text-md">{{ item }}</span>
        <span
          class="icon-error text-2xl cursor-pointer"
          @click="modifyTags(item)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ifHover: "false",
    };
  },
  computed:{
    ifShowFilterBar(){
      if(this.tags.length !==0 || this.category.length !==0){
        return true;
      }else{
        return false
      }
    }
  },
  methods: {
    modifyTags(t) {
      //  从tags中删除t
      let newTag = [...this.tags].filter((v) => v !== t);
      this.defineTags(newTag);
    },
  },
};
</script>
<style lang='scss' scoped>
.filter-bar{
  border-bottom: 1px solid gray;
}
.tag,
.category {
  .icon-error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
    display: none;
  }
  &:hover {
    color: gray;
    .icon-error {
      display: block;
      opacity: 1;
    }
  }
}
</style>