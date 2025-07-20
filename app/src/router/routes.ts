import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import BlogView from "@/views/BlogView.vue";
import ContactView from "@/views/ContactView.vue";
import TerminalView from "@/views/TerminalView.vue";
import DebugView from "@/views/DebugView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: `/blog`,
    name: 'blog',
    component: BlogView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/terminal',
    name: 'terminal',
    component: TerminalView,
  },
  {
    path: '/debug',
    name: 'debug',
    component: DebugView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
];
