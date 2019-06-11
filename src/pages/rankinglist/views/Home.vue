<template>
    <div class="home flex " id="home">


        <div class="first flexauto">
            <div class="banner1">
                <!--<img src="../assets/img/banner1.png" class="imgC">-->


                <div class="btn" @click="tablelist()">
                    <!--<img src="../assets/img/btn_rank_link.png">-->
                </div>


                <div class="txt " @click="open()">
                    游戏规则?
                </div>
            </div>
            <!--<div class="banner2">-->
                <!--<div style="position:relative">-->


                    <!--<div class="btn" @click="tablelist()">-->
                        <!--<img src="../assets/img/btn_rank_link.png">-->
                    <!--</div>-->
                <!--</div>-->

            <!--</div>-->
            <!--<div class="banner3">-->
                <!--&lt;!&ndash;<img src="../assets/img/banner3.png" class="imgC">&ndash;&gt;-->
            <!--</div>-->


        </div>


        <el-dialog top="50px" :visible.sync="iswatch" width="500px" :close-on-click-modal="false"
                   :show-close="false">
            <div slot="title" class="dialog-title">
                <span class="txt1">游戏规则</span>
                <div class="el-dialog__headerbtn" @click="close()">
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                </div>
            </div>


            <!--<div>-->
                <!--{{"userid" + form.userid}}-->
                <!--{{"hallid" + form.hallid}}-->
                <!--{{"acvid" + form.acvid}}-->
                <!--{{"uid" + uid}}-->

            <!--</div>-->
            <div class="activity">
                <div class="w1">
                    1.活动时间6月21至6月26日
                </div>
                <div class="w1">
                    2.排行榜刷新时间为美东时间24点
                </div>
                <div class="w1">
                    3.总排行榜活动截止时间为6月26日美东时间24点，榜前100名用户
                </div>
                <div class="w1">
                    4.活动结束后，奖金将会在7个工作日发放到相应账户里
                </div>
                <div class="w1">
                    5.奖励发放可以查看现金记录，类型为活动发放
                </div>
                <div class="w1">
                    6.官方享有活动解释权
                </div>
            </div>


        </el-dialog>
    </div>
</template>
<script>
    import{AjaxB, generateUUID, errorReport} from "../../../assets/js/common.js"
    //获取唯一id函数

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
            return {
                uid: "",
                iswatch: false,
                form: {
                    userid: "",
                    hallid: "",
                    acvid: "",
                    eventkey: "",
                    eventvalue: "",
                    uniquekey: ""

                }
            }
        },
        methods: {
            async tablelist(){
                let data = Object.assign(this.form)
                data.eventkey = 3
                data.uniquekey = generateUUID()

                try {

                    let res = await  AjaxB("get", "activity", data)


                } catch (error) {

                } finally {
                    this.$router.push({
                        path: "/page1/about",
                        query: {aid: this.form.acvid, uid: this.uid}
                    })
                }

            },
            async open(){

                this.iswatch = true
                let data = Object.assign(this.form)
                data.eventkey = 2
                data.uniquekey = generateUUID()


                try {
                    let res = await  AjaxB("get", "activity", data)
                } catch (error) {

                } finally {

                }

            },
            close(){
                this.iswatch = false
            },

        },
        created(){

//            this.uid="38aa3f6ca6927c2af43cc"
//            用户信息key
            this.uid = GetRequest("uid")
//            用户唯一ID
            this.form.userid = GetRequest("userid")
//            厅主ID
            this.form.hallid = GetRequest("hallid")
//            活动ID
            this.form.acvid = GetRequest("acvid")

            let index = this.uid.indexOf("#")
            let a = this.uid.substr(0, index)
            this.uid = a

        }


    }

</script>
<style lang="less">
    #home {
        .el-dialog {
            border-radius: 7px;
            .el-dialog__header {
                padding-top: 10px;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
                background-color: #2D3048;
                .el-dialog__headerbtn {
                    top: 10px
                }
            }
            .el-dialog__body {
                padding-left: 0;
                padding-right: 0;
                padding-bottom: 0;
                margin-left: 20px;
            }

        }


    }

</style>
<style scoped>
    .w1{
        width: 460px;
    }

    @media screen and (max-width: 870px) {
        .activity {
            padding-bottom: 30px;
            max-height: 140px;
            overflow-y: auto;
            text-align: left;
            font-size: 18px;
            line-height: 36px;
            color: #000;
        }

        .txt1 {
            font-weight: bold;
            font-size: 16px;
            color: #fff;
        }

        .imgC {
            display: block;
            width: 100%;
            height: 100%;

        }


        .banner1 {

            position: relative;

            width: 100vw;
            height: 100vh;

            background: url("../assets/img/banner7.jpg") ;
            background-size: 100% 100%;

        }

        .banner2 {
            /*margin-top: -1px;*/
            /*margin-bottom: -1px;*/
            width: 100vw;
            height: 13vh;
            background: url("../assets/img/banner5.png") ;
            background-size: 100% 100%;
        }

        .banner3 {

            width: 100vw;
            height: 17vh;
            background: url("../assets/img/banner6.png") ;
            background-size: 100% 100%;
        }

        .first {
            width: 100vw;
        }

        .txt {
            position: absolute;
            top: 25px;
            right: 30px;
            color: #fff;
            font-weight: bold;
            font-size: 18px;

        }

        .txt:hover {
            cursor: pointer;
        }

        .btn {
            position: absolute;
            top: 64.5vh;
            left: 0;
            bottom: 0;
            right: 0;
            margin: 0 auto;
            width: 140px;
            height: 52px;
            background: url("../assets/img/btn_rank_link.png") no-repeat;
            background-size: 100% 100%;
        }

        .btn:hover {
            cursor: pointer;
        }

    }

    @media screen and (min-width: 870px) {


        .activity {
            padding-bottom: 30px;
            min-height: 250px;
            text-align: left;
            font-size: 18px;
            line-height: 30px;
            color: #000;
        }

        .txt1 {
            font-weight: bold;
            font-size: 16px;
            color: #fff;
        }

        .imgC {
            display: block;
            width: 100%;
            height: 100%;
        }

        .banner1 {
            position: relative;
            width: 100%;
            height: 524px;
            background: url("../assets/img/banner-pc.jpg") no-repeat;
            background-size: 100% 100%;

        }

        .banner2 {
            width: 100%;
            height: 66px;
            background: url("../assets/img/banner2.png") no-repeat;
            background-size: 100% 100%;
        }

        .banner3 {
            width: 100%;
            height: 90px;
            background: url("../assets/img/banner3.png") no-repeat;
            background-size: 100% 100%;
        }

        .first {

            width: 870px;
            height: 524px;
        }

        .txt {
            position: absolute;
            top: 25px;
            right: 30px;
            color: #fff;
            font-weight: bold;
            font-size: 18px;

        }

        .txt:hover {
            cursor: pointer;
        }

        .btn {
            position: absolute;
            top: 357px;
            left: 0;
            bottom: 0;
            right: 0;
            margin: 0 auto;
            width: 174px;
            height: 66px;
            background: url("../assets/img/btn_rank_link.png") no-repeat;
            background-size: 100% 100%;
        }

        .btn:hover {
            cursor: pointer;
        }
    }


</style>


