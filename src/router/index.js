import { createWebHistory, createRouter } from 'vue-router'

import Navbar from '../components/Navbar.vue'
import Datos from '../components/Datos.vue'
import Formulario from '../components/Formulario.vue'




const routes = [
    { path: '/', name: 'Home', component: Formulario },
    { path: '/navbar', name: 'Navbar', component: Navbar },
    { path: '/datos', name: 'Datos', component: Datos },
    { path: '/formulario', name: 'Formulario', component: Formulario }


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router