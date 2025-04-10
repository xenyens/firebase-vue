<template>
  <div>
    <h1>Home</h1>
    <h2>{{ userStore.userData }}</h2>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
</script>
