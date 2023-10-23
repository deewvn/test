<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Добавление товара</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" style="max-height: 80%">
      <form @submit.prevent="submitForm">
        <ion-item>
          <ion-label>title</ion-label>
          <ion-input @input="title = $event.target.value" type="text" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>description</ion-label>
          <ion-input @input="description = $event.target.value" type="text" required></ion-input>
        </ion-item>
        <ion-button expand="full" type="submit">Добавить</ion-button>
      </form>
    </ion-content>
    <ion-footer collapse="fade">
      <ion-toolbar>
        <ion-button @click="() => router.push(`/list`)">Назад</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'Add',
  setup() {
    const title = ref('');
    const description = ref('');
    const router = useRouter();
    const submitForm = async () => {
      try {
        const response = await axios.post('https://dummyjson.com/products/add', {
          title: title.value,
          description: description.value,
        });
        if (response.data) {
          alert('Добавлено');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return {
      title,
      description,
      submitForm,
      router
    };
  },
});
</script>

<style scoped>

</style>
