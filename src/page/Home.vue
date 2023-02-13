<template>
    <div class="wrapper">
        <div class="resume">
            <div class="header">
                <div class="badge">
                    <badge></badge>
                </div>
                <div class="baseInfo">
                    <base-info></base-info>
                </div>
                <div class="figure">
                    <Figure></Figure>
                </div>
            </div>
            <div class="detail"></div>
        </div>
    </div>
</template>
<script setup>
    import BaseInfo from '../components/BaseInfo.vue'
    import Figure from '../components/Figure.vue'
    import Badge from '../components/badge.vue'
</script>
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
    background-color: rgb(232,234,237);
    .resume{
        height: calc(297mm - 10mm);
        width: calc(210mm - 10mm);
        padding: 10mm 10mm;
        background-color: #fff;
        // background-color: red;
        .header{
            width: 100%;
            height: 15%;
            // background-color: yellow;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .baseInfo{
                width: 40%;
                height: 100%;
                background-color: green;
            }
            .badge{
                width: 20%;
                height: 100%;
                // background-color: black;
            }
            .figure{
                width: 20%;
                height: 90%;
                // background-color: black;
            }
        }
        .detail{
            width: 100%;
            height: 85%;
            background-color: blue;
        }
    }
}

</style>
