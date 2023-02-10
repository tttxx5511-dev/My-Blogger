<template>
    <div class="imager-loader-container">
        <img v-if="!everythingDone" class="placeholder-img" :src="placeholder" />
        <img @load="handleLoad" 
        :src="url" 
        :style="{opacity:originOpacity, transition: `${duration}ms`}"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                originLoaded: false,
                everythingDone: false
            }
        },
        computed: {
            originOpacity() {
                return this.originLoaded ? 1 : 0;
            }
        },
        methods: {
            handleLoad() {
                this.originLoaded = true;
                setTimeout(()=>{
                    this.everythingDone = true;
                    this.$emit("load");
                },this.duration)
            }
        },
        props: {
            url: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                default: 500
            },
        }
    }
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.imager-loader-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    img {
        .self-fill();
        object-fit: cover;
 }
    .placeholder-img {
        filter: blur(2vw);
 }
}
</style>