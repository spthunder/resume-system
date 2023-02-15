<template>
    <div class="content">
        <div class="name">{{ Info.name }}</div>
        <div class="contact">
            <div class="tel">{{ Info.tel }}</div>
            <div>|</div>
            <div class="email">{{ Info.email }}</div>
        </div>
        <div class="birth">{{ Info.birth }}</div>
    </div>
</template>
<script setup>
    import {baseInfo} from '../store/store.js'
    const Info = baseInfo()
</script>
<style lang="less" scoped>
    .content{
        width: 100%;
        height: calc(100% - 4rem);
        padding-bottom: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-family: "宋体";
        .name{
            width: 100%;
            font-size: 1.5rem;
            font-weight: bolder;
        }
        .contact{
            display: flex;
            justify-content: row;
            margin-top: 0.5rem;
            font-weight: bold;
            .tel{
                margin-right: 0.5rem;
            }
        }
        .birth{
            font-weight: bold;
        }
    }
</style>