<template>
    <div class="me-view" v-if="ifViewVisible === 2">
        <slide-boomerange></slide-boomerange>
    </div>
</template>

<script>
import slideBoomerange from "./sliderBoomerange.vue"

export default {
    components:{
        slideBoomerange,
    }
}
</script>
<style lang='scss' scoped>
.me-view{
    margin-top: -5rem;
    width: 100%;
    // height: 30rem;
}
</style>