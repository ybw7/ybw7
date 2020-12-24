<template>
  <div id="app">
    <CBL></CBL>
    <div id="appb">
      <h2>客服九尾，欢迎回来！</h2>
      <div class="bka">
        <div class="bkaa">
          <p>总会话量</p>
          <p>230</p>
          <p>较昨日上涨10%</p>
        </div>
        <div class="bkaa">
          <p>处理中的会话数量</p>
          <p style="color:#ff6262;">200</p>
          <p>较昨日上涨10%</p>
        </div>
        <div class="bkaa">
          <p>在线客服数</p>
          <p style="color:#2ED477;">30</p>
          <p>较昨日上涨10%</p>
        </div>
        <div class="bkaa">
          <p>今日消息数</p>
          <p style="color:#ff9138;">2300</p>
          <p>较昨日上涨10%</p>
        </div>
      </div>
      <div id="bkb">
        <div class="bkba">
          <img src="../assets/tjt.png" alt="统计" />
        </div>
        <div class="bkbb">
          <p>快捷入口</p>
          <div class="bkbba">
          <router-link tag="div" to="/Zu2">
            <img src="../assets/1.png" />
          </router-link>
          <router-link tag="div" to="/Zu3">
            <img src="../assets/2.png" />
          </router-link>
          <router-link tag="div" to="/Zu4">
            <img src="../assets/3.png" />
          </router-link>
          <router-link tag="div" to="/Zu5">
            <img src="../assets/4.png" />
          </router-link>
          <router-link tag="div" to="/Zu6">
            <img src="../assets/5.png" />
          </router-link>
          <router-link tag="div" to="Zu7">
            <img src="../assets/6.png" />
          </router-link>
          <img src="../assets/7.png" alt="">
          </div>
        </div>
      </div>
      <div class="div3">
        <p>客服监控</p>
        <el-table :data="tableData" style="width: 1250px">
          <el-table-column
            align="center"
            prop="date"
            label="客服昵称"
            width="180"
          >
          </el-table-column>
          <el-table-column align="center" prop="name" label="状态" width="180">
          </el-table-column>
          <el-table-column align="center" prop="address" label="在线时长">
          </el-table-column>
          <el-table-column align="center" prop="hui" label="会话数" width="180">
          </el-table-column>
          <el-table-column
            align="center"
            prop="xiao"
            label="消息数"
            width="180"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="px"
            label="平均响应时长"
            width="180"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="ph"
            label="平均会话时长"
            width="180"
          >
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import CBL from "../components/cbl";
export default {
  name: "shouye",
  components: {
    CBL
  },
  data() {
    return {
      tableData: [
        {
          date: "客服小美",
          name: "在线",
          address: "6h",
          hui: "30",
          xiao: "389",
          px: "24s",
          ph: "5min",
        },
        {
          date: "客服小美",
          name: "在线",
          address: "6h",
          hui: "30",
          xiao: "389",
          px: "24s",
          ph: "5min",
        },
        {
          date: "客服小美",
          name: "在线",
          address: "6h",
          hui: "30",
          xiao: "389",
          px: "24s",
          ph: "5min",
        },
        {
          date: "客服小美",
          name: "在线",
          address: "6h",
          hui: "30",
          xiao: "389",
          px: "24s",
          ph: "5min",
        },
        {
          date: "客服小美",
          name: "在线",
          address: "6h",
          hui: "30",
          xiao: "389",
          px: "24s",
          ph: "5min",
        },{
          date: "客服小美",
          name: "在线",
          address: "6h",
          hui: "30",
          xiao: "389",
          px: "24s",
          ph: "5min",
        }
      ],
    };
  },
};
</script>
<style scoped>
#appb {
  /* background: skyblue; */
  width: 1454px;
  height: 1100px;
  position: absolute;
  left: 65px;
  top: 80px;
  background: #e6f1ff;
  z-index: -1;
}
#appb h2 {
  margin: 20px;
}
#appb .bka {
  width: 1292px;
  height: 203px;
  background: #ffffff;
  border-radius: 5px;
  margin-left: 70px;
}
#appb .bka .bkaa {
  width: 300px;
  height: 180px;
  background: #e6f1ff;
  border-radius: 5px;
  float: left;
  margin-left: 20px;
  margin-top: 10px;
  text-align: center;
}
.bkaa p:nth-of-type(1) {
  color: rgba(51, 51, 51, 0.9);
  font-size: 14px;
  margin-top: 35px;
}
.bkaa p:nth-of-type(2) {
  color: rgba(0, 110, 255, 0.9);
  font-size: 48px;
  font-weight: bold;
}
.bkaa p:nth-of-type(3) {
  color: #999999;
  font-size: 12px;
}
.bkba img {
  border-radius: 5px;
  margin-left: 70px;
  margin-top: 20px;
}
.bkbb {
  width: 430px;
  height: 357px;
  float: right;
  margin-top: -360px;
  margin-right: 90px;
  border-radius: 5px;
  background: #ffffff;
  display: inline-block;
}
.bkbb p{
    font-size: 20px;
    margin: 20px;
}
.bkbba img{
    cursor: pointer;
}

.bkbba img:nth-of-type(1){
     float: left;
     margin-left: 35px;
     margin-top: 20px;
}
.div3 {
  width: 1292px;
  background: #ffffff;
  border-radius: 5px;
  margin-left: 70px;
  margin-top: 20px;
}
.div3 p {
  font-size: 20px;
  padding: 20px 30px;
  
}
.el-table__row .cell{
    color: #2ed477;
}

</style>