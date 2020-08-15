<template>
  <div class="input-box clearfix">
    <el-input v-model="form.msg" key="transition-InputBox-input" />
    <div class="btn">
      <transition name="el-zoom-in-center">
        <el-button
          v-if="form.msg"
          @click="submit"
          key="transition-InputBox-btn"
          type="primary"
        >
          发送
        </el-button>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputBox",
  data() {
    return {
      form: {
        msg: null
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    submit() {
      console.log(this.form.msg);
    }
  }
};
</script>
<style scoped lang="scss">
.input-box {
  display: flex;
  .btn {
    padding-left: 10px;
  }
}
</style>
