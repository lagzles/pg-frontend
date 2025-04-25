import { createRouter, createWebHistory } from 'vue-router';
import ItemList from '../components/Item/ItemList.vue';
import ItemDetail from '../components/Item/ItemDetail.vue'; // vamos criar esse já já

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ItemList,
  },
  {
    path: '/item/:id',
    name: 'ItemDetail',
    component: ItemDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
