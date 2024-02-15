<script>
  import Loader from "$components/utils/Loader.svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  let isLoading = writable(true);
  let isAuthenticated = writable(false, (set) => {
    setTimeout(() => {
      set(false);
      isLoading.set(false);
    }, 500);
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
