<script>
  import Loader from "$components/utils/Loader.svelte";
  import { auth } from "$db";
  import { onAuthStateChanged } from "firebase/auth";
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";

  let isLoading = writable(true);
  let isAuthenticated = writable(false);

  onMount(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isAuthenticated.set(true);
      } else {
        isAuthenticated.set(false);
      }

      isLoading.set(false);
    });
  });

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
