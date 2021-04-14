<template>
  <div class="recommand">
    <div class="center w-full h-full bg-gray-50">
      <parallax-carousel></parallax-carousel>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
import parallaxCarousel from "@/components/recommand/parallaxCarousel.vue";

export default {
  components: {
    parallaxCarousel,
  },
  created() {
    api.getRecommandArticles("zhihu").then((resz) => {
        this.setRecommandArticles(resz.data);
    });
  },
};
</script>
<style lang='scss' scoped>
</style>
