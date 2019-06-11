<template>
  <div id="home">
    <div class="content">
      <div class="title">
        <h1>乐博问卷调查</h1>
      </div>
      <div class="questions">
        <p class="tip">欢迎参加lebo视讯有奖问卷调查，我们在调查完成后，会从收集的问卷里随机抽取10份幸运玩家，每份发放88元现金奖励，快来参与吧~</p>

        <el-form :model="ruleForm" 
        :hide-required-asterisk="true"
        :rules="rules"
        label-position="top"  
        ref="ruleForm" 
        class="demo-ruleForm">
          <!-- <el-form-item label="1、	您使用较多的登录设备是？" prop="name" >
            <el-radio-group v-model="ruleForm.device">
              <el-radio label="pc"></el-radio>
              <el-radio label="手机"></el-radio>
              <el-radio label="pad"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="2、	您通常玩什么版本的游戏？" prop="name" >
            <el-radio-group v-model="ruleForm.playVersion">
              <el-radio label="电脑网页flash版本 "></el-radio>
              <el-radio label="电脑网页html5版本"></el-radio>
              <el-radio label="手机app"></el-radio>
              <el-radio label="手机h5"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="3、	您觉得哪个游戏版本体验不好，请写出理由" prop="name" >
            <el-radio-group v-model="ruleForm.badVersion">
              <el-radio label="电脑网页flash版本 "></el-radio>
              <el-radio label="电脑网页html5版本"></el-radio>
              <el-radio label="手机app"></el-radio>
              <el-radio label="手机h5"></el-radio>
              理由<el-input  v-model="ruleForm.desc" @change="valueChange" ></el-input>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="4、	您对哪些新增的玩法感兴趣？（多选）" prop="name" >
            <el-checkbox-group v-model="ruleForm.addPlay">
              <el-checkbox label="龙虎百家乐" name="addPlay"></el-checkbox>
              <el-checkbox label="炸金花" name="addPlay"></el-checkbox>
              <el-checkbox label="赌场扑克" name="addPlay"></el-checkbox>
              <el-checkbox label="百人牛牛" name="addPlay"></el-checkbox>
              <el-checkbox label="色碟" name="addPlay"></el-checkbox>
              <el-checkbox name="addPlay" label="都不喜欢" ref="other" @change="achange">
                原因<el-input  v-model="ruleForm.addPlayOther" @change="valueChange" ></el-input>
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="5、您希望增加哪些新玩法？" prop="name"  >
            <el-input type="textarea" :autosize="{minRows:5}" v-model="ruleForm.likePlay"></el-input>
          </el-form-item>
          <el-form-item label="6、	您现在用的较多的功能有哪些？（多选）" prop="name" >
            <el-checkbox-group v-model="ruleForm.fun">
              <el-checkbox label="好路置顶" name="fun"></el-checkbox>
              <el-checkbox label="自定义筹码" name="fun"></el-checkbox>
              <el-checkbox label="自动提交" name="fun"></el-checkbox>
              <el-checkbox label="游戏全屏" name="fun"></el-checkbox>
              <el-checkbox label="限额设置" name="fun"></el-checkbox>
              <el-checkbox name="fun" label="其他" ref="other" @change="achange">
                理由<el-input  v-model="ruleForm.desc" @change="valueChange" ></el-input>
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="7、您希望增加哪些功能？" prop="name"  >
            <el-input type="textarea" :autosize="{minRows:5}" v-model="ruleForm.addFun"></el-input>
          </el-form-item>
          <el-form-item label="8、	除了lebo视讯，市面上您还玩过哪些平台？（多选）" prop="name" >
            <el-checkbox-group v-model="ruleForm.plat">
              <el-checkbox label="AG" name="plat"></el-checkbox>
              <el-checkbox label="BG" name="plat"></el-checkbox>
              <el-checkbox label="DG" name="plat"></el-checkbox>
              <el-checkbox label="BBIN" name="plat"></el-checkbox>
              <el-checkbox name="plat" label="其他" ref="other" @change="achange">
                其他<el-input  v-model="ruleForm.desc" @change="valueChange" ></el-input>
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          
          <el-form-item label="9、跟上面选择的平台对比，您觉得lebo视讯还需要哪些改进的地方？" prop="name"  >
            <el-input type="textarea" :autosize="{minRows:5}" v-model="ruleForm.improve"></el-input>
          </el-form-item>
          <el-form-item label="10、您希望增加哪些运营活动？" prop="name" >
            <el-radio-group v-model="ruleForm.operate">
              <el-radio label="比赛"></el-radio>
              <el-radio label="冲榜"></el-radio>
              <el-radio label="其他">
                其他<el-input  v-model="ruleForm.date1" @change="singlechange" ></el-input>
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="11、	您喜欢哪种风格？（多选）" prop="name" >
            <el-checkbox-group v-model="ruleForm.style">
              <el-checkbox label="蓝色夜总会" name="style"></el-checkbox>
              <el-checkbox label="土豪金大款" name="style"></el-checkbox>
              <el-checkbox label="黑色稳重系" name="style"></el-checkbox>
              <el-checkbox label="绿色舒适型" name="style"></el-checkbox>
              <el-checkbox name="style" label="其他" ref="other" @change="achange">
                其他<el-input  v-model="ruleForm.desc" @change="valueChange" ></el-input>
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="12、您觉得游戏里的按钮是否足够明显醒目？" prop="name" >
            <el-radio-group v-model="ruleForm.button">
              <el-radio label="大了"></el-radio>
              <el-radio label="小了"></el-radio>
              <el-radio label="还凑合"></el-radio>
              <el-radio label="其他">
                其他<el-input  v-model="ruleForm.button" @change="singlechange" ></el-input>
              </el-radio>
            </el-radio-group>
          </el-form-item> -->
          <el-form-item label="13、	目前的视频质量是否满意？（多选）" prop="video">
            <el-checkbox-group v-model="ruleForm.video">
              <el-checkbox label="流畅度不够（延迟、卡顿等）" name="video"></el-checkbox>
              <el-checkbox label="清晰度不够" name="video"></el-checkbox>
              <el-checkbox label="差不多" name="video"></el-checkbox>
              <el-checkbox label="很好" name="video"></el-checkbox>
              <el-checkbox name="video" label="其他" ref="other" @change="videochange">
                其他<el-input  v-model="ruleForm.videoOther" @change="videoValChange" ></el-input>
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="14、视频里现场的真实扑克牌大小是否合适？" prop="video" >
            <el-radio-group v-model="ruleForm.poker">
              <el-radio label="小了，看不清"></el-radio>
              <el-radio label="差不多"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="15、您对lebo视讯的建议：" prop="video"  >
            <el-input type="textarea" :autosize="{minRows:5}" v-model="ruleForm.advice"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      test:false,
      ruleForm: {
          device:'',
          playVersion:'',
          badVersion:'',
          addPlay:[],
          likePlay:'',
          fun:[],
          addFun:'',
          plat:[],
          improve:'',
          operate:'',
          style:[],
          button:'',
          video:[],
          videoOther:'',
          poker:'',
          advice:''
      },
      rules: {
          video: [
            { required: true, message: ' ', trigger: 'change'}
          ]
        }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('表单验证通过');
            console.log(this.ruleForm)
          } else {
            console.log('表单验证不通过');
            this.$message({
              message: '请完整填写问卷',
              type: 'warning'
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      videoValChange(val){
        if(val){
          if(this.ruleForm.video.indexOf('其他') == -1){
            this.ruleForm.video.push('其他')
          }
        }
      },
      videochange(val){
        console.log('checkbox',val)
        if(!val){
          this.ruleForm.videoOther = ''
        }
      },
      valueChange(val){
        console.log(11,val)
        console.log(this.$refs.other)
        if(val){
        console.log(this.ruleForm.type.indexOf('其他') != -1)
        if(this.ruleForm.type.indexOf('其他') == -1){
         this.ruleForm.type.push('其他')
        }
          // setTimeout(()=>{
          //    this.$refs.other.checked  = true
          // },1000)
          // this.$refs.other.checked  = true
        }else{
          console.log(0)
        }
      },
      singlechange(val){
        console.log('single',val)
        if(this.ruleForm.date1){
          this.ruleForm.resource = '其他'
        }
      },
      achange(val){
        console.log('checkbox',val)
        if(!val){
          this.ruleForm.desc = ''
        }
      }
    }
}
</script>
<style lang="less">
#home{
  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
  width: 100%;
  display: flex;
  .content{
    margin:auto;
    width: 900px;
    .title{

    }
    .questions{
      padding-top: 50px;
      .tip{
        text-align: left;
      }
      .el-form{
        .el-form-item{
          text-align: left;
          .el-form-item__label::before{
            content: ''
          }
          .el-form-item__content{
            margin-left: 2em;
            .el-checkbox{
              margin-left: 0;
              margin-right: 20px;
             
            }
            .el-radio{
              margin-left: 0;
              margin-right: 20px;
            }
            @media screen and (max-width: 768px) {
              .el-checkbox{
                display: block;
              }
              .el-radio{
                display: block;
              }
            }
            
          }
          .el-radio{
            padding:10px 0;
          }
        }
      }
    }
  }
}
  
</style>

