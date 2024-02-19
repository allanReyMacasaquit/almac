<script>
  import { getUser } from "$api/users";
  import Loader from "$components/utils/Loader.svelte";
  import { auth } from "$db";
  import { onAuthStateChanged } from "firebase/auth";
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";

  let isLoading = writable(true);
  let isAuthenticated = writable({ isAuthentic: false, user: null });

  onMount(onChanged);

  function onChanged() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const authenticUser = await getUser(user.uid);
        // console.log(authenticUser);
        isAuthenticated.set({ isAuthentic: true, user: authenticUser });
      } else {
        isAuthenticated.set({ isAuthentic: false, user: null });
      }

      isLoading.set(false);
    });
  }

  setContext("key", {
    isAuthenticated,
    isLoading
  });
</script>

{#if $isLoading}
  <Loader size="100" />
{:else}
  <slot />
{/if}
