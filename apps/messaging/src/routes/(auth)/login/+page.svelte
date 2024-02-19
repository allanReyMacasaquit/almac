<script>
  import Login from "$components/forms/Login.svelte";
  import { createAuthStore } from "$stores/createAuthStore";

  const { authUser, loading } = createAuthStore("login");

  async function login(formData) {
    try {
      const loggedIn = await authUser(formData);
      console.log(`logged In as ${JSON.stringify(loggedIn.user.email)}`);
    } catch (error) {
      console.log(error);
    }
  }
</script>

<Login loading={$loading} _submit={login} />
