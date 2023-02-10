<template>
  <img
  class='avatar-img' 
  :src="url" 
  :style="{
    width: size + 'px', 
    height: size + 'px'
  }" 
   alt="">
</template>

<script>
export default {
    props : {
        url : {
            type : String, //url必须为字符串
            required : true //url必传
        },
        size: {
            type: Number
        }
    }
}
</script>

<style>
.avatar-img {
    border-radius: 50%;
    object-fit: cover;
    display: block;
}
</style>