<template>
  <div class="container">
    <div class="title">
      <span id="title">
        这是标题
      </span>
    </div>
    <div class="line">
    </div>
    <div class="content">
      掌握JavaScript、熟悉ES6语法
      熟悉Vue+Vuex+Javascript技术栈
      了解node、express框架、webpackfdssfsgdgssggsdffcxd
    </div>
  </div>
</template>

<script setup>
     
</script>
<style lang="less" scoped>
.container{
  font-size: 1rem;
  color: black;
  width: 100%;
  height: auto;
  background-color: #fff;
  margin-bottom: 1rem;
  .title{
    display: flex;
    width: 100%;
    height: 1.5rem;
    position: relative;
    #title{
      position: absolute;
      left: 0;
      top: 0;
      line-height: 1.1rem;
      font-size: 1.1rem;
      font-weight: bold;
      color: rgb(90,2,86);
    }
  }
  .line{
    width: 100%;
    height: 0.4mm;
    background-color: rgb(90,2,86);
  }
  .content{
    width: 100%;
    height: auto;
    line-height: 1.5rem;
    word-break: reak-all;
    white-space:normal; 
    text-align: left;
    padding-top: 0.5rem;
  }
}
</style>