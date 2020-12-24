<template>
  <div id="app">
    <p class="logo">Logo</p>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <router-link to="/Shouye" tag="div">
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
      <router-link to="/Huihua" tag="div">
        <el-menu-item index="2">
          <i class="el-icon-chat-dot-square"></i>
          <span slot="title">回话</span>
        </el-menu-item>
      </router-link>
      <router-link to="/Fangke" tag="div">
        <el-menu-item index="3">
          <i class="el-icon-user"></i>
          <span slot="title">访客</span>
        </el-menu-item>
      </router-link>
      <router-link to tag="div">
        <el-menu-item index="4">
          <i class="el-icon-tickets"></i>
          <span slot="title">历史</span>
        </el-menu-item>
      </router-link>
      <router-link to tag="div">
        <el-menu-item index="5">
          <i class="el-icon-user-solid"></i>
          <span slot="title">客户</span>
        </el-menu-item>
      </router-link>
      <router-link to tag="div">
        <el-menu-item index="6">
          <i class="el-icon-s-order"></i>
          <span slot="title">工单</span>
        </el-menu-item>
      </router-link>
      <router-link to tag="div">
        <el-menu-item index="7">
          <i class="el-icon-s-data"></i>
          <span slot="title">统计</span>
        </el-menu-item>
      </router-link>
      <router-link to tag="div">
        <el-menu-item index="8">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </router-link>
      <router-link to tag="div">
        <el-menu-item index="9">
          <i class="el-icon-switch-button"></i>
          <span slot="title">退出</span>
        </el-menu-item>
      </router-link>
    </el-menu>
    <div id="appa">
      <h2>{{title}}</h2>
      <div class="div2">
        <i class="el-icon-message-solid"></i>
      </div>
      <div class="div3">
        <img src="../assets/yh.png" />
        <div class="div3-1">
          <p>在线</p>
          <p>离线</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cbl",
  props: {
    title: {
      type: String,
      default: "首页"
    }
  },
  data() {
    return {
      isCollapse: true
    };
  },
  mounted: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
#app {
  height: 753px;
  width: 64px;
  background: #171c3a;
  position: fixed;
}
#app .logo {
  background: blue;
  border: 1px solid blue;
  width: 48px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  border-radius: 50%;
  font-weight: bold;
  color: white;
  float: left;
  margin-left: 5px;
  margin-top: 20px;
}
#app ul li {
  color: white;
  text-align: center;
  height: 60px;
  width: 62px;
  line-height: 60px;
  cursor: pointer;
}
.active {
  border-left: 5px solid #0347a9;
}
#app ul {
  float: left;
  margin-top: 25px;
  margin-left: -2px;
}
#appa {
  position: absolute;
  left: 64px;

  width: 1470px;
  height: 64px;
}
#appa h2 {
  margin: 20px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item {
  height: 65.6px;
  background: #171c3a;
  border: none;
  line-height: 65.6px;
  width: 70px;
}
.el-menu-item:hover {
  background: blue;
}
.div2 i:hover {
  color: blue;
  cursor: pointer;
}
.div2 i {
  font-size: 20px;
  float: left;
  margin-left: 1220px;
  margin-top: -47px;
}
.div3 {
  float: right;
  padding-right: 50px;
  margin-top: -70px;
  position: relative;
}
.div3-1 {
  width: 140px;
  height: 80px;
  position: absolute;
  border: 1px solid #55baf5;
  background: #ffffff;
  display: none;
  text-align: center;
  z-index: 99;
}
.div3-1 p {
  line-height: 40px;
}
.div3-1 p:hover {
  background: rgb(186, 226, 250);
  color: red;
  cursor: pointer;
}

.div3:hover div {
  display: block;
}

</style>
