<template>
  <div class="content">
    <el-button @click="sendtoPdf" id="export" color="rgb(255,102,68)" size="large" type="primary">
                导出为pdf
                <el-icon class="el-icon--right">
                    <Upload />
                </el-icon>
    </el-button>
  </div>
</template>

<script setup>
    import { Upload } from '@element-plus/icons-vue'
    import { defineEmits} from 'vue'
    const emits = defineEmits(['export'])   //父组件触发的名字
    const sendtoPdf = () => {
        console.log("child component")
        emits('export')
    }

</script>
<style lang="less" scoped>
.content{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    #export{
            color: #fff;
        }
}

  
</style>