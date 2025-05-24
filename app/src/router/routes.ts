import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LinkedInCallback from "@/components/LinkedInCallback.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/callback',
    name: 'linkedin-callback',
    component: LinkedInCallback
  }
];