<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class="header">
    <Header/>
  </div>
  
  <div class="contentBox">
    <RouterView class="content" />
  </div>
  
</template>

<style scoped lang="scss"> 
.header{
  width: 100%;
  height: 10vmin;
  background-color: #750E21;
}
.contentBox{
  width: 100%;
  height: 90vmin;
  // background-color: #BE3144;
}
// .content{
//   width: 80%;
//   height: 80%;
//   background-color: white;
//   margin: auto;
// }
</style>
