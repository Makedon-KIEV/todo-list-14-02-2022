import VueRouter from "vue-router";
import Vue from "vue";
import Home from '../components/Home.vue'
import EditTodo from '../components/EditTodo.vue'

Vue.use(VueRouter)
const routes = [
    {
        path:'',
        name: 'home',
        component: Home
    },
    {
        path:'/edit/:id',
        props:true,
        name: 'edit',
        component: EditTodo
    },


]

export const router = new VueRouter({
    routes,
    mode:'history'
})