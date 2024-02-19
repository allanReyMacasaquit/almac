import { authenticate } from "$api/auth";
import { writable } from "svelte/store";

export function createAuthStore(authType) {
  let loading = writable(false);

  async function authUser(form) {
    loading.set(true);

    try {
      await authenticate(form, authType);
    } catch (error) {
      loading.set(false);
      console.log(error.message);
    }
  }

  return {
    authUser,
    loading: { subscribe: loading.subscribe }
  };
}
