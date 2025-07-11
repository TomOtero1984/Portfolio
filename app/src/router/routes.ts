import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactView from "@/views/ContactView.vue";
import TerminalView from "@/views/TerminalView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/terminal',
    name: 'terminal',
    component: TerminalView,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  }
];
