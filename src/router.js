import {createWebHistory, createRouter} from 'vue-router'

//component 추가
// import Main from './views/Main.vue'
// import About from './views/About.vue'
import LoginPage from './components/LoginPage.vue'
const routes = [
    // {path:'/', component: Main},
    // {path:'/about', component: About},
    {path:'/login', component: LoginPage,}
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;