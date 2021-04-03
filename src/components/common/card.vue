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
    @click="jumpto"
    :style="{ color: color, 'background-color': bgColor }"
  >
    <slot name="icon" class="card-icon"></slot>
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
      default: "#fff",
    },
    bgColor: {
      type: String,
      default: "#000",
    },
  },
  methods: {
    jumpto() {
      window.open(this.link);
    },
  },
};
</script>
<style lang='scss' scoped>
.common-card {
  cursor: pointer;
  width: 10rem;
  height: 3rem;
  z-index: 100;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5),
    -4px -4px 10px rgba(255, 255, 255, 1);
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: content-box;
  border-radius: 10px;
  transition: box-shadow 0.2s ease-out;

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
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1),
      -4px -4px 10px rgba(255, 255, 255, 1);
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