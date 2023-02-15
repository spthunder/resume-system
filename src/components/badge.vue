<template>
    <div class="container">
        <img class="img" src="../assets/img/badge.png" alt="">
    </div>
</template>
<style lang="less" scoped>
.container{
    height: 100%;
    width: 100%;
    position: relative;
    .img{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 3.5rem;
        width: 3.5rem;
        image-rendering: pixelated;
    }
}
</style>