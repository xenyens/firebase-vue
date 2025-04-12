<template>
  <div class="flex items-center p-10 h-screen">
    <form
      @submit.prevent="handlerSubmit"
      class="grid grid-cols-1 space-y-4 mx-auto border border-white p-20 rounded-lg"
    >
      <h1 class="text-white uppercase font-bold mb-4 text-xl">Login</h1>
      <input
        type="email"
        placeholder="e-mail"
        v-model="email"
        class="p-2 bg-gray-300 rounded-lg"
      />
      <input
        type="password"
        placeholder="password"
        v-model="password"
        class="p-2 bg-gray-300 rounded-lg"
      />
      <button
        type="submit"
        class="p-2 bg-orange-500 rounded-lg text-white uppercase cursor-pointer hover:bg-orange-700"
      >
        Iniciar Sesión
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

const useStore = useUserStore();
// const router = useRouter();

const email = ref("");
const password = ref("");

const handlerSubmit = async () => {
  if (!email.value || !password.value || password.value.length < 5) {
    return alert("Debes llenar todos los campos");
  }

  await useStore.loginUser(email.value, password.value);
  // router.push("/");
};
</script>
