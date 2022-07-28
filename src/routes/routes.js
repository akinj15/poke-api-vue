import { createRouter, createWebHistory } from 'vue-router';

// import de view 
import index from '../views/IndexComponent.vue' 

//import de components
import pokemon from '../components/Pokemon'

const listRoutes = [
    ...pokemon.routes
] 

const routes = [
    {
        path: '/',
        component: index,
        children: [
            ...listRoutes,
        ]
    },

];

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})



export default router;
