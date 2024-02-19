<script>
  import AuthContext from "$components/context/auth/AuthContext.svelte";
  import UIContext from "$components/context/ui/UIContext.svelte";
  import SnackbarContainer from "$components/snackbar/SnackbarContainer.svelte";
  import "../app.css";
</script>

<UIContext>
  <AuthContext>
    <SnackbarContainer />
    <slot />
  </AuthContext>
</UIContext>
