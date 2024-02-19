<script>
  import { goto } from "$app/navigation";
  import { getAuthContext } from "$components/context/auth/index.js";
  import MainLayout from "$components/layouts/MainLayout.svelte";

  export let data;

  const { isAuthenticated } = getAuthContext();

  $: {
    if (!$isAuthenticated.isAuthentic) {
      goto("/login");
    }
  }
</script>

{#if $isAuthenticated.isAuthentic}
  <MainLayout trends={data.trends}>
    <slot />
  </MainLayout>
{/if}
