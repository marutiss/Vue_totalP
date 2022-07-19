import { createRouter, createWebHistory } from 'vue-router';

//component 추가
import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';
import ShopPage from './components/ShopPage.vue';

const routes = [
    {
    path:'/login',
    component: LoginPage,
    },
    {
     path:'/',
     component: HomePage,
    },
    {
     path:'/shop',
    component: ShopPage,
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;