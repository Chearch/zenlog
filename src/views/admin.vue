<template>
    <div>
        管理页面
    </div>
</template>

<script>
export default {
    mounted(){
        console.log('1 admin mounted ');
        let cookie = this.getCookie();
        if(cookie.length === 0){
            this.jumpto('/login');
            location.reload()
        }
    }
}
</script>
<style lang='scss' scoped>

</style>