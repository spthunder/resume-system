import {
    createRouter,
    createWebHistory,
} from 'vue-router'
const Home = () => import('../page/Home.vue');
const Edit = () => import('../page/Edit.vue')

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children:[
            {
                path: 'edit',
                name: 'edit',
                component: Edit
            }
        ]
    },
]

// 创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
