import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Authorization from "@/views/Authorization.vue";
import ItemList from "@/views/ItemList.vue";
import Item from "@/views/SingleItem.vue";
import Add from "@/views/Add.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Authorization
  },
  {
    path: '/list',
    component: ItemList
  },
  {
    path: '/add',
    component: Add
  },
  {
    path: '/item/:id',
    component: Item
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
