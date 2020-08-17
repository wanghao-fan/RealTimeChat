<template>
  <el-container style="height: 97vh;">
    <el-container>
      <el-header>聊天室</el-header>
      <el-main>
        <Msg />
      </el-main>
      <el-footer>
        <InputBox />
      </el-footer>
    </el-container>
  </el-container>
</template>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

<script>
import { InputBox, Msg } from "@/components";
export default {
  components: {
    InputBox,
    Msg
  },
  data() {
    return {
    };
  }
}
</script>
