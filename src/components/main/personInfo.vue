<template>
  <div class="person-info">
    <!-- 头像部分 -->
    <div class="header-image-wrapper">
      <img src="@/assets/image/avator.jpg" alt="" />
    </div>
    <!-- 名称 -->
    <div class="name-wrapper">
      <div class="name">{{ username }}</div>
    </div>
    <!-- 联系方式 -->
    <div class="connect-tool">
      <a class="icon icon-qq qq" :href="userqq" target="_blank"></a>
      <a class="icon icon-email email" :href="useremail" target="_blank"></a>
      <a class="icon icon-GitHub github" :href="usergithub" target="_blank"></a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    poetryList() {
      if (process.env.VUE_APP_USER_poetry) {
        return process.env.VUE_APP_USER_poetry.split("-").reverse();
      } else {
        return [];
      }
    },
    username() {
      return process.env.VUE_APP_USER_name;
    },
    userqq() {
      return `https://wpa.qq.com/msgrd?v=3&uin=${process.env.VUE_APP_USER_qq}&site=qq&menu=yes`;
    },
    useremail() {
      return `mailto:${process.env.VUE_APP_USER_email}`;
    },
    usergithub() {
      return `${process.env.VUE_APP_USER_github}`;
    },
  },
  mounted() {
    // alert(document.body.offsetWidth)
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/styles/global.scss";
.person-info {
  width: 100%;
  height: 300px;
  box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.15);
  &:hover{
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  }
  @include center;
  flex-direction: column;
  position: relative;
  .header-image-wrapper {
    @include center;
    img {
      width: 50%;
      height: auto;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .name-wrapper {
    width: 100%;
    @include center;
    .name {
      font-size: 20px;
      font-weight: bolder;
      cursor: pointer;
      padding: 18px;
      &:hover {
        animation: avator 0.5s ease-in-out reverse;
      }
    }
  }
  .connect-tool {
    display: flex;
    width: 50%;
    justify-content: center;
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
    .icon {
      font-size: 24px;
      cursor: pointer;
      padding: 0 10px;
      &:hover {
        color: $unflodColor;
      }
    }
    // .qq {}
    // .email {}
    // .github {}
  }
}

@keyframes avator {
  0% {
    transform: rotate(0deg);
    filter: blur(0px);
    scale: 1;
  }
  50% {
    transform: rotate(360deg);
    filter: blur(1px);
    scale: 1.1;
  }
  100% {
    transform: rotate(360deg);
    filter: blur(0px);
    scale: 1;
  }
}
</style>