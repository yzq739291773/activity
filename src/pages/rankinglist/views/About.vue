<template>
  <div class="about flex ">

      <div class="flexauto second" style="position: relative">

          <div class="finish" v-if="parseInt(status) == 0">
              <img src="../assets/img/icon_infor.png" >
          </div>

          <div class="top-header clear">
              <div class="left top1">
                  <b>昵称</b>
              </div>
              <div class="left top2">
                  <b>有效投注额</b>
              </div>
              <div class="left top3">
                  <b>排名</b>
              </div>
              <div class="iconBack" @click="back()">
                  <img src="../assets/img/btn_return.png" >
              </div>



          </div>
              <div class="tableBody">

                  <!--表格数据部分-->
                  <div class="tableContainer">

                      <div class="tableRow clear" v-for="(item,index) in tableData" :key="index">
                          <div class="left row1">{{item.nickname}}</div>
                          <div class="left row1">
                              <div  class="line">
                                  <img src="../assets/img/icon_money.png" >
                              </div>

                              <div class="line2">
                                  {{item.bet_score_total}}
                              </div>
                          </div>
                          <div class="left row1 p10"  style="position: relative; height: 70px;">
                              <div class="roun1 aa" v-if="item.rank=='1'">
                                  <img src="../assets/img/icon_num1.png" >
                              </div>
                              <div class="roun1 aa" v-else-if="item.rank=='2'">
                                  <img src="../assets/img/icon_num2.png" >
                              </div>
                              <div class="roun1 aa" v-else-if="item.rank=='3'">
                                  <img src="../assets/img/icon_num3.png" >
                              </div>
                              <div class="roun1 aa" v-else>
                                  {{item.rank}}
                              </div>
                          </div>

                      </div>

                  </div>

          <div class="tableBottom clear">
              <div class="left top1">{{downData.nickname}}</div>
              <div class="left  top2">
                  <div  class="line">
                      <img src="../assets/img/icon_money.png" >
                  </div>

                  <div class="line2">
                      {{downData.bet_score_total}}
                  </div>
              </div>
              <div class="left  top3 p10"  style="position: relative;height:70px ">
                  <div class="roun2  bb" v-if="parseInt(downData.rank)==0">
                      未上榜
                  </div>
                  <div class="roun1 mar1 bb" v-else>
                      {{downData.rank}}
                  </div>
              </div>

          </div>
              </div>


          <div class="txt11"  v-if="tableData.length ==0">
              {{aa.text}}
          </div>



      </div>


  </div>
</template>
<script>
    import{AjaxA ,generateUUID} from "../../../assets/js/common.js"
    export default{
        data(){
            return{
                tableData:[],
                downData:{},
                status:"",
                aa:[],

            }
        },
        methods: {
            back(){
                this.$router.push({
                    path: "/page1/home",

                })
            },
            async getData(){

                let data ={aid:this.$route.query.aid,uid:this.$route.query.uid}

                try{
                    let res =await AjaxA("post","ranking",data)
                    this.aa =res
                    this.tableData=res.result.list
                    this.downData=res.result.user_ranking
                    this.status = res .result.status

                }catch(error){
                    alert("服务器或者网络错误，请联系后台人员")
                  this.aa =error

                }finally {

                }

            }

        },
        mounted(){
            this.getData()
        }
    }

</script>
<style scoped>

.txt11{
    position: absolute;
    top: 50%;
    left: 46%;
    font-size: 16px;
    color: #000;
}


    @media screen and (max-width: 870px) {
        .about{
            height: 100%;
        }
        .finish{
            z-index: 1000;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 3.215rem;
            height: 231px;
            margin: auto;

        }
        .iconBack{
            position: absolute;
            top:6px;
            left:0.6rem;
            width: 30px;
            height: 24px;
        }
        .iconBack:hover{
            cursor: pointer;
        }
        .tableBottom{
            position: absolute;
            bottom: 0;
            width: 9.6rem;
            height:70px;
            line-height: 70px;
            background-color: #414B9A;
            color:#fff ;
        }
        .tableContainer{
            /* padding-left: 0.15rem;
            padding-right: 0.15rem; */
            padding-top: 50px;
            padding-bottom: 80px;
            width: 100%;
            height: 100%;
            max-height: 100%;
            overflow-y: auto;
        }
        .tableRow{
            margin: 0 auto;
            margin-top:8px;
            width: 9rem;
            border-radius:10px ;
            height: 70px;
            line-height: 70px;
            background-color: #6D74AC;
            color: #fff;
        }
        .tableRow:nth-child(1){
            background: -webkit-linear-gradient(#fc6742,#fb4c31 );
            background: -o-linear-gradient(#fc6742, #fb4c31);
            background: -moz-linear-gradient(#fc6742, #fb4c31);
            background: linear-gradient(#fc6742, #fb4c31);
        }
        .tableRow:nth-child(2){
            background: -webkit-linear-gradient(#d532f3,#bb24eb );
            background: -o-linear-gradient(#d532f3,#bb24eb);
            background: -moz-linear-gradient(#d532f3, #bb24eb);
            background: linear-gradient(#d532f3, #bb24eb);
        }
        .tableRow:nth-child(3){
            background: -webkit-linear-gradient(#3aa3fa,#2f89f9);
            background: -o-linear-gradient(#3aa3fa,#2f89f9);
            background: -moz-linear-gradient(#3aa3fa, #2f89f9);
            background: linear-gradient(#3aa3fa, #2f89f9);
        }
        .p10{

        }
        .aa{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }
        .bb{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto 0;
        }
        .roun2{
            height: 0.733rem;
            line-height: 0.733rem;
            font-size: 24px;
            font-weight: bold;
            color: #fff;
        }
        .roun1{
            width:0.733rem ;
            height: 0.733rem;
            line-height: 0.733rem;
            border-radius: 50%;
            background-color: #EFEFEF;
            font-size: 24px;
            font-weight: bold;
            color: #6d74ac;
        }
        .mar1{
            margin-left: 1.03rem;
        }
        .row1{
            height: 100%;
            width: 3rem;
        }
        .line{
            margin: 0 auto;
            width: 0.326rem;
            height: 24px;
            line-height: 60px;
        }
        .line2{
            line-height: 40px;
        }
        .second{

            padding-top: 15px;
            padding-right: 0.2rem;
            padding-left: 0.2rem;
            width: 10rem;
            height: 100%;
            background-color: #2D3048;
        }
        .tableBody{
            width: 9.6rem;

            height: 100%;
            background-color: #eaeaea;

        }
        .top-header{
            z-index: 1000;
            position: absolute;
            top: 0;
            width: 9.6rem;
            background-color: #AB1C2B;
            height: 50px;
            line-height: 50px;
            color: #fff;
        }
        .top1{
            height: 100%;
            width: 3.19rem;
        }
        .top2{
            width: 3.2rem;
        }
        .top3{
            width: 3rem;
        }
    }

    @media screen and (min-width: 870px) {
    /*.about{*/
    /*height: 100%;*/
    /*}*/
    .finish{
        z-index: 1000;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 230px;
        height: 231px;
        margin: auto;

    }
    .iconBack{
        position: absolute;
        top:6px;
        left:22px;
        width: 30px;
        height: 24px;
    }
    .iconBack:hover{
        cursor: pointer;
    }
    .tableBottom{
        position: absolute;
        bottom: 4px;
        width: 840px;
        height:70px;
        line-height: 70px;
        background-color: #414B9A;
        color:#fff ;

    }
    .tableContainer{
        margin-top: 65px;
        padding-top:0;
        padding-bottom: 20px;
        width: 100%;
        height: 368px;
        max-height: 368px;
        overflow-y: auto;
    }
    .tableRow{
        margin: 0 auto;
        margin-top:8px;
        width: 762px;
        border-radius:10px ;
        height: 70px;
        line-height: 70px;
        background-color: #6D74AC;
        color: #fff;
    }
    .tableRow:nth-child(1){
        background: -webkit-linear-gradient(#fc6742,#fb4c31 );
        background: -o-linear-gradient(#fc6742, #fb4c31);
        background: -moz-linear-gradient(#fc6742, #fb4c31);
        background: linear-gradient(#fc6742, #fb4c31);
    }
    .tableRow:nth-child(2){
        background: -webkit-linear-gradient(#d532f3,#bb24eb );
        background: -o-linear-gradient(#d532f3,#bb24eb);
        background: -moz-linear-gradient(#d532f3, #bb24eb);
        background: linear-gradient(#d532f3, #bb24eb);
    }
    .tableRow:nth-child(3){
        background: -webkit-linear-gradient(#3aa3fa,#2f89f9);
        background: -o-linear-gradient(#3aa3fa,#2f89f9);
        background: -moz-linear-gradient(#3aa3fa, #2f89f9);
        background: linear-gradient(#3aa3fa, #2f89f9);
    }
    .p10{
        padding-top: 10px;
    }
    .roun2{


        height: 54px;
        line-height: 54px;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
    }
    .roun1{
        margin-left: 123px;
        width:54px ;
        height: 54px;
        line-height: 54px;
        border-radius: 30px;
        background-color: #EFEFEF;
        font-size: 24px;
        font-weight: bold;
        color: #6d74ac;
    }
    .row1{
        height: 100%;
        width: 254px;
    }
    .line{
        margin: 0 auto;
        width: 24px;
        height: 24px;
        line-height: 60px;
    }
    .line2{
        line-height: 50px;
    }
    .second{
        padding: 15px;
        width: 870px;
        height: 524px;
        background-color: #2D3048;
    }
    .tableBody{
        width: 840px;
        height: 390px;
        background-color: #eaeaea;

    }
    .top-header{
        margin-top: 30px;
        z-index: 1000;
        position: absolute;
        top:0;
        width: 840px;
        background-color: #AB1C2B;
        height: 50px;
        line-height: 50px;
        color: #fff;
    }
    .top1{
        height: 100%;
        width: 285px;
    }
    .top2{
        width: 254px;
    }
    .top3{
        width: 293px;
    }
}


</style>


