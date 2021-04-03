<template>
  <div>
    <card :title="'bilibili'" :link="'http://bilibili.com'">
    </card>
  </div>
</template>

<script>
import card from "@/components/common/card.vue";

export default {
    props:{
        title: {
            type: String,
            required: true
        },
        
    },
  components: {
    card,
  },
};
</script>
<style lang='scss' scoped>
</style>