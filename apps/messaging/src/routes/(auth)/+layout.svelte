<script>
  import { goto } from "$app/navigation";
  import { getAuthContext } from "$components/context/auth";

  const { isAuthenticated } = getAuthContext();

  $: {
    if ($isAuthenticated.isAuthentic) {
      goto("/");
    }
  }
</script>

{#if !$isAuthenticated.isAuthentic}
  <slot />
{/if}
