<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Список товаров</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content style="max-height: 80%">
      <ion-list>
        <ion-item v-for="item in items" :key="item.id" @click="() => router.push(`/item/${item.id}`)">
          <ion-label>{{ item.title }}</ion-label>
          <img :src="item.thumbnail" :alt="item.title" width="50"/>
          <ion-label>{{ item.description }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer collapse="fade">
      <ion-toolbar>
        <ion-button @click="loadMore">Загрузить еще</ion-button>
        <ion-button @click="() => router.push(`/add`)">Добавить</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ItemList',
  setup() {
    const items = ref([]);
    const page = ref(1);
    const router = useRouter();

    const fetchItems = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products?skip=${page.value * 5}&limit=5`);
        items.value = [...items.value, ...response.data.products];
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const loadMore = () => {
      page.value++;
      fetchItems();
    };

    fetchItems();

    return {
      items,
      loadMore,
      router
    };
  },
});
</script>

<style scoped>

</style>
