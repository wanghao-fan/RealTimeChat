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
import { mapState, mapActions } from 'vuex'
export default {
  name: "InputBox",
  data() {
    return {
      form: {
        msg: '',
        username: ''
      }
    };
  },
  computed:{
    ...mapState('user',['userid'])
  },
  mounted() {
    var self = this;
    this.ws = new WebSocket('ws://localhost:8000/ws');
    // 接收消息
    this.ws.addEventListener('message', function(e) {
        var res = JSON.parse(e.data);
        // 判断 是否为 下发唯一用户id
        if(res.Code === 'auth'){
          self.form.username = res.UserId.replace(RegExp('\\[::1]:', 'g'), '')
          self.upUSER_ID(self.form.username)
          return
        }
        // 消息类型，自己还是别人，right 是自己
        var type = res.username == self.userid ? 'right' : 'left'
        // 写入store
        self.addMessage(Object.assign({
          type: type
        },res))
    });
  },
  methods:{
    ...mapActions('user', ['upUSER_ID']),
    ...mapActions('message', ['addMessage']),
    // 发送消息
    submit() {
      this.ws.send(
        JSON.stringify({
          msg: this.form.msg,
          username: this.form.username
      }));
      this.form.msg = ''
    },  
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
