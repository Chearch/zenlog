<template>
  <div class="time-line">
    <div class="tline-wrapper py-5">
      <div class="Filing-wrapper py-2 flex items-center select-none dark:text-gray-500	">
        <span class="icon-logs text-2xl pl-5"></span>
        <span class="text-xl px-2 leading-8 mb-1">归档</span>
      </div>
      <div 
        class="item flex justify-between px-5 py-2 hover:bg-purple-500 cursor-pointer dark:text-gray-500" 
        v-for="(item, index) in timeLines" :key="index"
        >
        <div class="time pl-3">{{ item.time }}</div>
        <div class="count pr-4">{{ item.count }} 篇</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";

export default {
  computed: {
    timeLines() {
      return api.timeline;
    },
  },
};
</script>
<style lang='scss' scoped>
</style>