import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LinkedInCallback from '@/components/LinkedInCallback.vue';
const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: '/callback',
        name: 'LinkedInCallback',
        component: LinkedInCallback
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
//# sourceMappingURL=index.js.map