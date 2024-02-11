import {createRouter, createWebHistory} from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import('@/views/HomeView.vue') // динамическая загрузка компонента
        },
        {
            name: 'Posts',
            path: '/posts',
            component: () => import('@/components/Person/IndexPerson.vue') // динамическая загрузка компонента
        },
        {
            name: 'Post',
            path: '/post/:id',
            component: () => import('@/components/Person/ShowPerson.vue') // динамическая загрузка компонента
        },
        {
            name: 'Create post',
            path: '/post/create',
            component: () => import('@/components/Person/CreatePerson.vue') // динамическая загрузка компонента
        },
        {
            name: 'Edit post',
            path: '/post/:id/edit',
            component: () => import('@/components/Person/EditPerson.vue') // динамическая загрузка компонента
        },
    ]
});

createApp(App)
    .use(router)
    .mount('#app')
