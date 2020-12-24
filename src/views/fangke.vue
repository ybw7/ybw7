<template>
  <div id="app">
    <CBL title="访客"></CBL>
    <div id="appb">
      <el-select v-model="value" placeholder="全部客服" size="medium" style="width:180px;height:180px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="value" placeholder="全部来源" size="medium" style="width:180px;height:180px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="value" placeholder="全部终端" size="medium" style="width:180px;height:180px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import CBL from "../components/cbl";
export default {
  name: "fangke",
  components: {
    CBL
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "王妹妹"
        },
        {
          value: "选项2",
          label: "七尾"
        },
        {
          value: "选项3",
          label: "理想"
        },
        {
          value: "选项4",
          label: "王志"
        },
        {
          value: "选项5",
          label: "周杰伦"
        }
      ],
      value: ""
    };
  }
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
</style>