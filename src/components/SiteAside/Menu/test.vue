<template>
    <div class="test-container">
      <Menu />
    </div>
  </template>
  
  <script>
  import Menu from '../Menu/index.vue';
  import "@/styles/global.less";
  export default {
      components: {
        Menu,
      }
  }
  </script>
  
  <style>
.test-container {
  width: 250px;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
  background: #000;
}
  </style>