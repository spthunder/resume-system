<template>
    <div class="wrapper">
        <div class="resume" ref="pdf" >
            <div class="header" @click="handleHeader">
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
            <div class="detail">
                <module></module>
                <module></module>
                <module></module>

            </div>
        </div>
        <div class="dialog">
            <router-view ></router-view>
        </div>
        <div class="tools">
            <tool @export="toPdf"></tool>
        </div>
    </div>
</template>
<script setup>

    import BaseInfo from '../components/BaseInfo.vue'
    import Figure from '../components/Figure.vue'
    import Badge from '../components/badge.vue'
    import Module from '../components/Module.vue';
    import tool from '../components/tool.vue'
    import { RouterView, useRouter } from 'vue-router'
    import { ref, onMounted,getCurrentInstance,   } from 'vue'
    import {downloadPDF} from '../util/toPdf.js'
    const router = useRouter()
    const handleHeader = () => {
        router.push({name:"edit"})
        console.log("hhhhh")
        console.log(router)
    }
    const pdf = ref(null)
    const pageInstance = getCurrentInstance();
    const toPdf = (val) => {
        console.log("print")
        downloadPDF(pageInstance.refs.pdf)
    }

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
            height: 13%;
            // background-color: yellow;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .baseInfo{
                width: 40%;
                height: 100%;
                // background-color: green;
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
            height: 87%;
            background-color: blue;
            display: flex;
            flex-direction: column;
        }
    }
    .dialog{
        position: absolute;
        width: 130mm;
        height: 70mm;
        right: 5mm;
        top: 30mm;

    }
    .tools{
        position: absolute;
        top: 10mm;
        right: 5mm;
        width: 130mm;
        height: 15mm;
        background-color: #fff;
    }
}

</style>
