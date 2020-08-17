<template>
  <div class="news clearfix">
    <div :class="[item.type == 'left' ? 'fl' : 'fr']">
      <div class="user-img">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        {{item.username}}
      </div>
    </div>
    <p :class="['content', item.type == 'left' ? 'fl' : 'fr']" align="left">
      {{item.msg}}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    item:{
      type: Object,
      default: function(){
        return {
          msg: null,
          username: null,
          type: null
        }
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="scss">
.news {
  display: inline;
  .user-img {
    height: 100px;
    line-height: 110px;
  }
  .content {
    position: relative;
    max-width: 30%;
    background: white;
    color: black;
    word-wrap: break-word;
    padding: 10px 8px;
    border-radius: 10px;
  }
  .fr {
    margin-right: 15px;
  }
  .fl {
    margin-left: 15px;
  }
  p.fl::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 25px;
    left: -30px;
    border-left: 20px solid transparent;
    border-bottom: 14px solid transparent;
    border-right: 20px solid white;
    transform: skewY(-50deg);
  }
  p.fr::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 25px;
    right: -30px;
    border-left: 20px solid white;
    border-bottom: 20px solid transparent;
    border-right: 20px solid transparent;
    transform: skewY(50deg);
  }
}

// .news {
//   height: 100%;
//   width: 100%;
//   .user-img {
//     height: 100px;
//     line-height: 110px;
//   }
//   .content {
//     position: relative;
//     margin-left: 15px;
//     max-width: 30%;
//     background: white;
//     color: black;
//     word-wrap: break-word;
//     padding: 10px 8px;
//     border-radius: 10px;
//   }
//   .content::after {
//     content: "";
//     position: absolute;
//     width: 0;
//     height: 0;
//     top: 25px;
//     left: -30px;
//     border-left: 20px solid transparent;
//     border-bottom: 14px solid transparent;
//     border-right: 20px solid white;
//     transform: skewY(-50deg);
//   }
// }
</style>
