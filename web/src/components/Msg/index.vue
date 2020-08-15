<template>
  <div class="msg">
    <News type="left" />
    <News type="left" />
    <News type="right" />
    <News type="right" />
  </div>
</template>
<script>
import News from "./news";
export default {
  components: { News },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="scss">
.msg {
  height: 100px;
}
</style>
