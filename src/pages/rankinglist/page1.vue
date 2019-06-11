<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script>
    import{AjaxB ,generateUUID,errorReport} from "../../assets/js/common.js"
    //            获取url 中gameid方法
    function GetRequest(paraName) {
        let url = document.location.toString();
        let arrObj = url.split("?");

        if (arrObj.length > 1) {
            let arrPara = arrObj[1].split("&");
            let arr;

            for (let i = 0; i < arrPara.length; i++) {
                arr = arrPara[i].split("=");

                if (arr != null && arr[0] == paraName) {
                    return arr[1];
                }
            }
            return "";
        }
        else {
            return "";
        }
    }

    export default{
        data(){
            return{
                form:{
                    userid:"",
                    hallid:"",
                    acvid:"",
                    eventkey:"",
                    eventvalue:"",
                    uniquekey:""

                }
            }

        },
        methods:{
            async aa(){
                let data = Object.assign(this.form)
                data.eventkey = 1
                data.uniquekey =generateUUID()

                try{
                    let res =await  AjaxB("get","activity", data)
                }catch (error){

                }finally {

                }

            },
        },
        created(){
//            用户唯一ID
            this.form.userid=GetRequest("userid")
//            厅主ID
            this.form.hallid=GetRequest("hallid")
//            活动ID
            this.form.acvid=GetRequest("acvid")
            this.aa()
        }
    }


</script>

<style lang="less">
 @import '../../assets/less/common.less';
#app {

  html,body{
    height: 100%;
  }
    font-family: "microsoft yahei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;



}

</style>
