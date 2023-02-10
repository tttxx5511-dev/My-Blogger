<template>
    <div class="site-aside-container">
        <div class="avatar">
            <Avatar url="https://img0.baidu.com/it/u=3717962186,2192472579&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
                   :size="150"/>
        </div>
        <h1 class="title">龙傲天的小窝</h1>
        <Menu />,
        <Contact />
        <p class="footer">
            黑ICP备17001719号
           </p>
    </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
export default {
    components: {
        Avatar,
        Menu,
        Contact
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less"; 
.site-aside-container {
    width: 100%;
    height: 100%;
    background: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    font-size: 14px;
    overflow-x: hidden;
    overflow-y: auto;
}
.avatar {
    display: flex;
    justify-content: center;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>