<script>
  import AuthContext from "$components/context/auth/AuthContext.svelte";
  import "../app.css";
</script>

<AuthContext>
  <slot />
</AuthContext>
