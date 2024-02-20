import { authenticate } from "$api/auth";
import { getUIContext } from "$components/context/ui";
import { writable } from "svelte/store";

export function createAuthStore(authType) {
  const { addSnackbar } = getUIContext();
  let loading = writable(false);

  async function authUser(form) {
    loading.set(true);

    try {
      await authenticate(form, authType);
      addSnackbar("Welcome", "success");
    } catch (error) {
      loading.set(false);
      addSnackbar(error.message, "error");
      // console.log(error.message);
    }
  }

  return {
    authUser,
    loading: { subscribe: loading.subscribe }
  };
}
