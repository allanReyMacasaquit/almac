<script>
  import AuthContext from "$components/context/auth/AuthContext.svelte";
  import SnackbarContainer from "$components/snackbar/SnackbarContainer.svelte";
  import "../app.css";
</script>

<AuthContext>
  <SnackbarContainer />
  <slot />
</AuthContext>
