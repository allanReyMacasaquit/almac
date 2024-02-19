<script>
  import Login from "$components/forms/Login.svelte";
  import { createAuthStore } from "$stores/createAuthStore";

  const { authUser, loading } = createAuthStore("login");
  async function login(formData) {
    await authUser(formData);
  }
</script>

<Login loginFormLoading={$loading} loginForm={login} />
