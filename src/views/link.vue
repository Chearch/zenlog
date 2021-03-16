<template>
  <div class="link">
    <div class="vvanta">
      <v-vanta effect="rings" class="vvanta-item" :options="options"></v-vanta>
    </div>
    <div class="links">

    </div>
  </div>
</template>

<script>
import VVanta from "vue-vanta";
export default {
  components: { VVanta },
  data() {
    return {
      options: {
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 700.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xf12193,
        backgroundAlpha: 0.0,
      },
    };
  },
};
</script>
<style lang='scss' scoped>
.link {
  width: 100%;
  height: 93vh;
  position: relative;
  overflow: hidden;
  .vvanta {
    z-index: 1;
    .vvanta-item {
      margin-top: 30px;
    }
  }
  .links {
    z-index: 100;
    position: absolute;
    top: 0;
  }
}
</style>