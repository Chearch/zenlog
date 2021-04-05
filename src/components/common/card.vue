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
    color: {
      type: String,
      default: "#000",
    },
    bgColor: {
      type: String,
      default: "#fff",
    },
  },
};
</script>
<style lang='scss' scoped>
.common-card {
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 100;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 14px;
  transition: box-shadow 0.2s ease-out;
  box-sizing: content-box;

  .card-icon {
    margin-left: 2.2rem;
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }
  .title-wrapper {
    margin-left: 0.4rem;
    font-size: 1rem;
    line-height: 1rem;
  }
  &:hover {
    border-bottom: 3px solid #41D3BD;
    transition: box-shadow 0.2s ease-out;
  }
}

@media screen and (max-width: 500px) {
  .common-card {
    width: 15rem !important;
    height: 4rem !important;
    .card-icon {
      margin-left: 2.5rem !important;
    }
    .title-wrapper {
      margin-left: 2rem !important;
    }
  }
}
</style>