import { defineStore } from "pinia";

// Definir una store con pinia
export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: "faty@ite.edu.mx",
  }),
});
