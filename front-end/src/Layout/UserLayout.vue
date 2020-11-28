<template>
    <div class="user">
        <router-view class="router"></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.user{
    background: url("../assets/user.jpg"),no-repeat fixed top;
    width:100%;			
    height:100%;			
    position:fixed;
    background-size: 100% 100%;
}
.router{
    display:flex;
    justify-content:center;
}
</style>