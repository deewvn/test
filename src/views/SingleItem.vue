<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Товар</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content style="max-height: 80%">
      <ion-item>
        <ion-label>{{ item?.title }}</ion-label>
        <img :src="item?.thumbnail" :alt="item?.title" width="50"/>
        <ion-label>{{ item?.description }}</ion-label>
      </ion-item>
    </ion-content>
    <ion-footer collapse="fade">
      <ion-toolbar>
        <ion-button @click="() => router.push(`/list`)">Назад</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router'


export default defineComponent({
  name: 'Item',
  setup() {
    const item = ref(null);
    const route = useRoute();
    const router = useRouter();
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${route.params.id}`);
        item.value = response.data;
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchItem();

    return {
      item,
      router
    };
  },
});
</script>

<style scoped>

</style>
