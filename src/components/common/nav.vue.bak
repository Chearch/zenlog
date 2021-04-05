<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo nav-box"
      mode="horizontal"
      @select="handleSelect"
      background-color="#fff"
      text-color="#1A181B"
      active-text-color="#1A181B"
    >
      <el-menu-item class="nav-item" :index="navItem[0]['num']">{{
        navItem[0]["name"]
      }}</el-menu-item>
      <el-menu-item class="nav-item" :index="navItem[1]['num']">{{
        navItem[1]["name"]
      }}</el-menu-item>
      <el-menu-item class="nav-item" :index="navItem[2]['num']">{{
        navItem[2]["name"]
      }}</el-menu-item>
      <el-menu-item class="nav-item" index="4">
        <span class="icon icon-logs color"></span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItem: [
        { name: "MAIN", num: "1" },
        { name: "LIKE", num: "2" },
        { name: "LINK", num: "3" },
        { name: "MAIN", num: "4" },
      ],
    };
  },
  computed: {
    activeIndex() {
      // 如果链接为 http://xxx/main 或 http://xxx/ 则activeIndex = 1
      // 如果为其他，则依次为2345...
      // activeIndex 用于标记初始el的选中状态
      let params = window.location.pathname;
      let flag = true;
      for (let nav of this.navItem) {
        if (params.indexOf(nav.name) !== -1) {
          flag = false;
          console.log(nav.num);
          return nav.num;
        }
      }
      if (flag) return "1";
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      for (let nav of this.navItem) {
        if (nav.num == +key) {
          this.jumpto(nav.name.toLowerCase());
          break;
        }
      }
    },
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
$itemHeight: 50px;
.nav {
  width: 100%;
  z-index: 1000;
  .nav-box {
    padding-left: 50px;
    border: none;
    position: relative;
    .nav-item {
      font-weight: bold;
      font-size: 14px;
      height: $itemHeight;
      line-height: $itemHeight;
      letter-spacing: 1px;
      &:last-child {
        position: absolute;
        top: 0;
        font-size: 30px;
        right: 50px;
        &:hover {
          background-color: white !important;
        }
        border: none !important;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .nav-box {
    padding-left: 10px !important;
    .nav-item {
      &:last-child {
        right: 0 !important;
      }
    }
  }
}

@keyframes iconAnimate {
  100% {
    filter: hue-rotate(360deg);
  }
}

.nav:hover {
  .icon {
    -webkit-background-clip: text;
    background-clip: text;
    cursor: pointer;
    background-image: linear-gradient(
      0deg,
      rgb(255, 0, 0),
      rgb(255, 128, 0),
      rgb(255, 255, 0),
      rgb(0, 255, 0),
      rgb(0, 255, 128),
      rgb(0, 255, 255),
      rgb(0, 128, 255),
      rgb(0, 0, 255),
      rgb(128, 0, 255),
      rgb(255, 0, 255),
      rgb(255, 0, 128)
    );
    -webkit-text-fill-color: transparent;
    animation: iconAnimate 3s linear infinite alternate;
  }
}
</style>