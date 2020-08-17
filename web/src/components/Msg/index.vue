<template>
  <div class="msg">
    <News v-for="(item,index) in list" :key="index" :item="item" />
  </div>
</template>
<script>
import News from "./news";
import { mapState } from "vuex"
export default {
  components: { News },
  computed:{
    ...mapState('message',['list'])
  }
};
</script>
<style scoped lang="scss">
.msg {
  height: 100px;
}
</style>
