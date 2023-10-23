<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Авторизация</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <form @submit.prevent="submitForm">
        <ion-item>
          <ion-label>Логин</ion-label>
          <ion-input @input="username = $event.target.value" type="text" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Пароль</ion-label>
          <ion-input @input="password = $event.target.value" type="password" required></ion-input>
        </ion-item>
        <ion-button expand="full" type="submit">Войти</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'Authorization',
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();
    const submitForm = async () => {
      try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username: username.value,
          password: password.value,
        });

        if (response.data) {
          console.log('Authorization successful');
          router.push('/list');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return {
      username,
      password,
      submitForm
    };
  },
});
</script>

<style scoped>

</style>
