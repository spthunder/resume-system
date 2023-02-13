<template>
    <div class="wrapper">
        <div class="resume">
            <div class="header"></div>
            <div class="detail"></div>
        </div>
    </div>
run
</template>
<style scoped lang="less">
.wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .resume{
        height:1090px;
        width: 794px;
        background-color: red;
        .header{
            width: 100%;
            height: 15%;
            background-color: yellow;
        }
        .detail{
            width: 100%;
            height: 85%;
            background-color: blue;
        }
    }
}

</style>
