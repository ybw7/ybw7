<template>
    <div id="app">
        <img src="../assets/u1.svg">
        <div id="login">
            <h1>登录七尾客服云</h1>
            <el-input placeholder="请填写注册时所写的邮箱" v-model="input1" style="width:350px;margin-left: 50px;margin-top: 50px;">
                <template slot="prepend">账号</template>
            </el-input>
            <el-input type="password" placeholder="请输入内容" v-model="input2" style="width:350px;margin-left: 50px;margin-top: 30px;">
                <template slot="prepend">密码</template>
            </el-input>
            <p>忘记密码请联系客服人员</p>
            <p @click="dl">登陆</p>
            <router-link to="/Zhuce" tag="div" class="zhuce">没有账号，现在去注册</router-link>
        </div>
    </div>
</template>
<script>

export default {
    name:'login',
    data(){
        return{
            input1:this.$route.query.user,
            input2:this.$route.query.pwd
        }
    },
    methods:{
        dl(){
            if(""==this.input1){
                swal("账号不能为空!");
            }else if(""==this.input2){
                swal("密码不能为空!");
            }else{
                swal("登陆成功！","正在为您跳转","success");
                this.$router.replace('/Shouye')
            }
        }
    }
    
    
}
</script>
<style scoped>
    #app img{
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
    #login p:nth-of-type(1){
        color: white;
        font-size: 13px;
        margin-left: 255px;
        margin-top: 10px;
    }
    h1{
        color: white;
        margin-top: 50px;
        margin-left: 50px;
    }
    #login p:nth-of-type(2){
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
</style>