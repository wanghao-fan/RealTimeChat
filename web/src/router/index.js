import Vue from "vue";
import VueRouter from "vue-router";
import Message from "@/views/message.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Message",
    component: Message
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
