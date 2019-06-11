<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="success" plain  @click="goback">返回</el-button>
    {{responseData}}
  </div>
</template>
<script>
  export default{
    name:'about',
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
