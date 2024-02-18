<script>
  import Loader from "$components/utils/Loader.svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { auth } from "$db";

  let isLoading = writable(true);

  const isAuthenticated = writable(false, (set) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        set(true);
        isLoading.set(false);
      } else {
        set(false);
        isLoading.set(true);
      }
    });

    return unsubscribe;
  });

  setContext("key", {
    isAuthenticated,
    isLoading
  });
</script>

{#if $isLoading && !$isAuthenticated}
  <Loader size="100" />
{:else}
  <slot />
{/if}
