// 存放文章或者友情链接
// 
/* 接收参数
 * @title 
 * @href
 * @slot
 * @avator
 * 
 * 向外暴露的事件
 * selfClick，同时自身携带click事件
 * /

<template>
  <div
    class="common-card"
    @click="linkTo(link)"
    :style="{ color: color, 'background-color': bgColor }"
  >
    <slot name="icon" class="card-icon"></slot>
    <slot name="desc" class="card-desc"></slot>
    <div class="title-wrapper">
      <div>{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang='scss' scoped>
</style>