<template>
    <div class="wrapper">
        <el-form  class="form" size="default" label-width="120px">
            <el-form-item label="姓名">
                <el-input v-model="name" />
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="tel" />
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="email" />
            </el-form-item>
            <el-form-item label="年龄或生日">
                <el-col :span="11">
                <el-date-picker
                    v-model="birth"
                    type="date"
                    placeholder="选择日期"
                    style="width: 100%"
                />
                </el-col>
            </el-form-item>
        </el-form>
    </div>
    
  </template>
  
  <script  setup>
  import { reactive, onMounted, watch} from 'vue'
  import {storeToRefs} from 'pinia'
  import {baseInfo} from '../store/store.js'

   const {name,tel,email,birth} = storeToRefs(baseInfo())
   watch(birth, (newValue, oldValue) => {
        if(newValue instanceof Date){
            birth.value = newValue.getFullYear() + '-' + (newValue.getMonth() + 1)
        }
    })

  </script>
  <style lang="less" scoped>
  .wrapper{
    height: 100%;
    width: 100%;
    background-color: #fff;
    position: relative;
    border-radius: 1.5rem;
    .form{
        position: absolute;
        top: 10%;
        right: 5%;
        width: 90%;
        height: 80%;

    }
  }

  </style>