"use strict";
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

// 默认端口
// mac 下非root用户是无法使用小于1024的常用端口 运行 npm run serve时 记得加 sudo
const port = 8090;

module.exports = {
  publicPath: "/", // 站点根目录路径
  outputDir: "dist", // 生产环境构建文件的目录
  assetsDir: "static", // 放置生成的静态资源的目录
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  devServer: {
    port: port, // 端口
    open: true, // 运行完是否自动打开浏览器
    // 出现编译器错误或警告时，在浏览器中显示全屏覆盖。是否显示警告和错误：
    overlay: {
      warnings: false, // 警告
      errors: process.env.ENV !== "master" // 错误
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src") // import '@' 相当于 import '/src'
      }
    },
    devtool: "source-map"
  }
};
