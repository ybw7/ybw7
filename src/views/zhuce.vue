<template>
    <div id="app">
        <img src="../assets/u45.svg" class="img1">
        <div id="login">
            <h1>注册七尾客服云</h1>
            <el-input placeholder="请输入邮箱或手机号码" v-model="input1" style="width:350px;margin-left: 50px;margin-top: 50px;">
                <template slot="prepend">账号</template>
            </el-input>
            <el-input type="password" placeholder="请输入密码" v-model="input2" style="width:350px;margin-left: 50px;margin-top: 30px;">
                <template slot="prepend">密码</template>
            </el-input>
            <el-input placeholder="请输入密码" v-model="input3" style="width:350px;margin-left: 50px;margin-top: 30px;">
                <template slot="prepend">验证码</template>
            </el-input>
          
            <p class="zc" @click="zhuc">注册</p>
            <router-link to="/" tag="div" class="zhuce">已有账号，去注册</router-link>
             <img src="../assets/u49.png" class="img2">
        </div>
    </div>
</template>
<script>

export default {
    name:'zhuce',
    data(){
        return{
            input1:'',
            input2:'',
            input3:''
        }
    },
    components:{
        
    },
    methods:{
        zhuc(){
            if(""==this.input1){
                swal("请填写邮箱或手机号哦！","小傻逼")
            }else if(""==this.input2){
                swal("请填写密码哦！","大傻逼")
            }else if(""==this.input3){
                swal("验证码不能为空哦!","小傻逼")
            }else{
                swal("注册成功！","正在为您跳转","success");
                this.$router.replace('/')
                this.$router.push({
                path:"/?user="+this.input1
            })
            }
            

        }
    }
    
}
</script>
<style scoped>
    .img1{
        width: 40%;
        margin: 150px;
    }
    #app{
        background-color: rgba(0, 110, 255, 0.098);
    }
    #login{
        float: right;
        border-radius: 5px;
        margin-top: 130px;
        margin-right: 170px;
        width: 439px;
        height: 507px;
        background-color: #006EFF;
    }
    
    h1{
        color: white;
        margin-top: 50px;
        margin-left: 50px;
    }
    #login .zc{
        width: 350px;
        height: 48px;
        background-color: #ff9138;
        line-height: 48px;
        color: white;
        text-align: center;
        border-radius: 2px;
        margin-left: 50px;
        margin-top: 50px;
        cursor: pointer;
    }
    .zhuce{
        font-size: 14px;
        color: #ffffff;
        text-align: center;
        margin-top: 20px;
        cursor: pointer;
    }
    .img2{
        position: absolute;
        top: 415px;
        left: 1180px;
        width: 8%;

    }
</style>