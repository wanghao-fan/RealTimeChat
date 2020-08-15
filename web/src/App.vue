<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 单行限长 超出部分隐藏 ... */
.single-row-hide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 两行限长 超出部分隐藏 ...*/
.two-row-hide {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

/* 浮动 */
.clearfix {
  &:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
}
.fl {
  float: left;
}

.fr {
  float: right;
}
</style>
