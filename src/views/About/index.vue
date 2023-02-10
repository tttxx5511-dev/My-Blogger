<template>
    <div class="container">
         <h1>关于</h1>
        
       
      
            <input type="file" @click="handleClick()" />
     
            
    </div>
</template>

<script>
import axios from "axios";

export default {
    methods: {
        handleClick(){
            const instance = axios.create({
                baseURL:"http://region-11.autodl.com:26364"
            })
            const data = ["image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="]
            instance.post("/run/color",{data}).then(resp=>{
             console.log(resp.data); // resp.data 为响应体的数据，axios会自动解析JSON格式
})
        }
    }
}
</script>

<style>

</style>