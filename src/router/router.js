import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
const Home = () => import('../page/Home.vue');

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;
