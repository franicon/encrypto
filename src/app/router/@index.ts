import MainRoutes from "@/app/router/MainRoutes";
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [MainRoutes]
})

export default router
