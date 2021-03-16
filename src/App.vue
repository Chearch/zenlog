<template>
  <div>
    <my-nav></my-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import myNav from "@/components/common/nav.vue";
export default {
  components: {
    myNav,
  },
};
</script>>

<style lang="scss">
</style>
