<template>
    <div class="container">
        <el-upload 
            class="avatar-uploader" 
            action="11"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Plus } from '@element-plus/icons-vue'
    onMounted(() => {
        console.log(imageUrl.value + "111")
    })
    const imageUrl = ref('')
    const handleAvatarSuccess = () => {
        console.log("上传成功！")
    }
    const beforeAvatarUpload = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            imageUrl.value = reader.result
            console.log(reader.result)
        }
    }

</script>
<style lang="less" scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: purple;
    .avatar-uploader{
        position: relative;
        width: 80%;
        height: 100%;
        display: block;
        // border: 1px dashed var(--el-border-color);
        .avatar{
            position: absolute;
            top: calc(50% - 17.5mm);
            left: calc(50% - 12.5mm);
            width: 25mm;
            height: 33mm;
        }
        .avatar-uploader-icon {
            position: absolute;
            top: 40%;
            font-size: 28px;
            color: #8c939d;
            text-align: center;
        }
    }
    .el-upload{
        height: 100%;
        width: 80%;
    }
    .avatar-upload:hover {
        border-color: var(--el-color-primary);
        background-color: rgb(232,234,237);
    }
}
.container:hover{
    background-color: rgb(232,234,237);
}
</style>

