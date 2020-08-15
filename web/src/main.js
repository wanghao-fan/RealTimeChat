import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// 引入element ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;
// 节流防抖
const on = Vue.prototype.$on;
// 节流
Vue.prototype.$on = function(event, func) {
  let previous = 0;
  let newFunc = func;
  if (event === "click") {
    newFunc = function() {
      const now = new Date().getTime();
      if (previous + 1000 <= now) {
        func.apply(this, arguments);
        previous = now;
      }
    };
  }
  on.call(this, event, newFunc);
};
// 防抖处理
Vue.prototype.$on = function(event, func) {
  let timer;
  let newFunc = func;
  if (event === "click") {
    newFunc = function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        func.apply(this, arguments);
      }, 500);
    };
  }
  on.call(this, event, newFunc);
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
