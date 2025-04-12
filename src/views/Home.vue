<template>
  <div class="h-screen rounded-lg flex flex-col justify-center items-center">
    <h1 class="text-5xl text-white font-bold">HOME</h1>

    <h3 class="text-2xl text-gray-200 font-bold">
      {{ useStore.userData ? useStore.userData.email : "Not user login" }}
    </h3>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";
const useStore = useUserStore();
</script>
