<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="sideaside">
          <SiteAside />
        </div>
        </template>
      <template #default>
        <RouterView />
      </template>
      </Layout>  
  </div>
</template>

<script>
import Layout from "./components/Layout"
import SiteAside from "./components/SiteAside"
export default {
  components: {
    SiteAside,
    Layout
  }
  
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
  .sideaside{
    width: 250px;
  }
}

</style>