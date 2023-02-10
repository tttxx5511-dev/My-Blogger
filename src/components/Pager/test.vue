<template>
    <div>
      <Pager :total="total" 
      :current="current" 
      @pageChange1="handlePageChange"/>
      hello
    </div>
  </template>
  
  <script>
    // import Pager from "./components/Pager"

    import Pager from "./"
    export default {
      components: {
        Pager,
      },
      data() {
        return {
          visible: true,
          total: 302,
          current: 1
        }
      },
      methods : {
        handlePageChange(newPage) {
          this.current = newPage;
          console.log("加载当前页数据");
        }
      }
    }
  </script>
  
  <style>
  </style>