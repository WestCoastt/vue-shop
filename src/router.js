import { createWebHistory, createRouter } from "vue-router";
import Main from "./components/Main.vue";
import Digital from "./components/Digital.vue";
import Accessory from "./components/Accessory.vue";
import Fashion from "./components/Fashion.vue";
import Cart from "./components/Cart.vue";
import Product from "./components/Product.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
  {
    path: "/",
    component: Main,
  },
  {
    path: "/fashion",
    component: Fashion,
  },
  {
    path: "/accessory",
    component: Accessory,
  },
  {
    path: "/digital",
    component: Digital,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/product/:id",
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
