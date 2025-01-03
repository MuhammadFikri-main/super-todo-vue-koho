import { createRouter, createWebHistory } from 'vue-router';
import BodyView from "@/layout/BodyView.vue";
import indexDashbord from "@/pages/indexDashbord.vue";

const routes = [
  {
    path: "/",
    component: BodyView,
    children: [
      {
        path: "/",
        name: "dashbord",
        component: indexDashbord,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use import.meta.env instead of process.env
  routes,
});

export default router;