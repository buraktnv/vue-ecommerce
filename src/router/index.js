import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SwiperView from "../views/SwiperView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/swiper",
    name: "swiper",
    component: SwiperView,
  },
  {
    path: "/order",
    name: "order",
    component: () =>
      import("../views/OrdersView.vue"),
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: () =>
      import("../views/WishlistView.vue"),
  },
  {
    path: "/order-detail",
    name: "order-detail",
    component: () =>
      import("../views/OrderDetailView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
