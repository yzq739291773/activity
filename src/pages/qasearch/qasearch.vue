<template>
  <div id="app" class="clear">
    <h1>我是qasearch</h1>
    <el-button type="success" plain  @click="goback">返回</el-button>{{responseData}}
    <!-- <div id="nav">
        <h1>我是qasearch</h1>
        <el-button type="success" plain >按钮</el-button>
        <a href="page1.html">跳转到page1</a> |
      <router-link to="/qasearch/home">Home</router-link> |
      <router-link to="/qasearch/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
  export default{
    name:'qasearch',
    data(){
      return{
        responseData:"初始数据"
      }
    },
    methods:{
      goback(){
        bridge.callHandler('NativeHandler', {'type':'back',"data":""}, function responseCallback(responseData) {
          this.responseData = JSON.stringify(responseData) 
          console.log("JS received response:", responseData)
        })
      }
    }
  }
</script>
<style lang="less">
@import '../../assets/css/comm.css';
@import '../../assets/less/common.less';
*{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: #ccc;
  width: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
