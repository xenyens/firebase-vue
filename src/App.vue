<template>
  <div
    class="flex flex-col bg-[#212121] h-screen p-10 bg-linear-to-bl from-[#1D2633] to-[#5E6780]"
  >
    <h1 class="text-5xl text-white text-center uppercase font-bold">
      Firebase practice
    </h1>
    <nav
      class="flex justify-center space-x-3 flex-row mx-auto text-white w-full p-4 mt-10 font-bold items-center"
    >
      <router-link
        to="/"
        class="p-2 hover:p-2 hover:bg-orange-900 hover:rounded-lg"
        >Home</router-link
      >
      <router-link
        to="/register"
        class="p-2 hover:p-2 hover:bg-orange-900 hover:rounded-lg"
        >Register</router-link
      >
      <router-link
        to="/login"
        class="p-2 hover:p-2 hover:bg-orange-900 hover:rounded-lg"
        >Login</router-link
      >

      <button
        v-if="useStore.userData"
        @click="useStore.logoutUser"
        class="p-2 cursor-pointer hover:p-2 hover:bg-orange-900 hover:rounded-lg"
      >
        Cerrar Sesión
      </button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useUserStore } from "./stores/user";

const useStore = useUserStore();
</script>
