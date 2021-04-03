<template>
  <div class="link-page">
    <div class="vvanta">
      <v-vanta effect="rings" class="vvanta-item" :options="options"></v-vanta>
    </div>
    <div class="links-wrapper">
      <div class="links" v-for="(item, index) in getLinks" :key="index">
        <card :title="item.title" :link="item.link" class="link">
          <template v-slot:icon>
            <img :src="item.icon" class="card-icon" />
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import VVanta from "vue-vanta";
import card from "@/components/common/card.vue";
import data from "../../data.js";

export default {
  components: { VVanta, card },
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
  computed: {
    getLinks() {
      console.log(data);
      return data.links;
    },
  },
  mounted() {
    console.log(data.links);
  },
};
</script>
<style lang='scss' scoped>
.link-page {
  width: 100%;
  height: 93vh;
  position: relative;
  overflow: hidden;
  .vvanta {
    z-index: 1;
    .vvanta-item {
      margin-top: 30px;
      z-index: inherit;
    }
  }
  .links-wrapper {
    z-index: 100;
    position: absolute;
    top: 20px;
    left: 5%;
    display: flex;
    flex-wrap: wrap;
    margin-top: -25px;
    margin-left: -70px;
    box-sizing: border-box;
    .links {
      margin-top: 50px;
      margin-left: 70px;
      .link {
        .card-icon {
          width: 30px;
          height: 30px;
          overflow: hidden;
          border: 30%;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .links-wrapper {
      width: 100% !important;
      display: flex;
      justify-content: center;
      align-items: center;
    .links{
      margin-top: 30px !important;
      margin-left: 4rem !important;
    }
  }
}
</style>