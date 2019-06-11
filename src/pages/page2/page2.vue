<template>
  <div id="app">
    <div id="nav">
        <h1>我是page2</h1>
        <el-button type="success" plain @click="goback">按钮777</el-button>
        <a href="qasearch.html">跳转到qasearch</a> |{{resdata}}
      <router-link to="/page2/home">Home</router-link> |
      <router-link to="/page2/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default{
    name:'about',
    mounted(){
      console.log("mounted钩子")
      // this.setupWebViewJavascriptBridge(function(bridge) {
      //   console.log("注册handler")
      //   /* Initialize your app here */
      //   window.bridge = bridge
      //   bridge.registerHandler('JSHandler', function(data, responseCallback) {
      //     console.log("JS Echo called with:", data)
      //     responseCallback(data)
      //   })
      //   bridge.callHandler('NativeHandler', {'key':'value'}, function responseCallback(responseData) {
      //     console.log("JS received response:", responseData)
      //   })
      // })
    },
    data(){
      return{
        resdata:"初始数据"
      }
    },
    methods:{
      goback(){
        console.log("执行跳转函数")
        // window.bridge.callHandler("back", null, function(response) {
        //   this.resdata= JSON.stringify(responseData)
        //   console.log("JS received response:", responseData)
        //   // alert('Screen height:' + response)
        // })
        bridge.callHandler('NativeHandler', {"type":"back","data":""}, function responseCallback(responseData) {
          this.resdata= JSON.stringify(responseData)
          console.log("JS received response:", responseData)
        })
        // bridge.callHandler('NativeHandler', {"type":"back","data":""}, function responseCallback(responseData) {
        //   this.resdata= JSON.stringify(responseData)
        //   console.log("JS received response:", responseData)
        //   })
      },
      // wvjbscheme://__BRIDGE_LOADED__     https://__bridge_loaded__
      setupWebViewJavascriptBridge(callback) {
        console.log('0')
        if (window.WebViewJavascriptBridge) { 
          console.log('1')
          return callback(WebViewJavascriptBridge); 
        }
        if (window.WVJBCallbacks) { 
          console.log('2')
          return window.WVJBCallbacks.push(callback); 
        }
        window.WVJBCallbacks = [callback];
        console.log('3')
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        console.log('4')
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
      }
    }
  }
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
