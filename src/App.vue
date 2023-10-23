<template>
  <ion-app>
      <router-view />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonPage } from '@ionic/vue';
</script>

<style>
ion-app, ion-page {
  height: 100vh;
}
</style>
