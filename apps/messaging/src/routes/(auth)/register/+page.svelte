<script>
  import Register from "$components/forms/Register.svelte";
  import { createAuthStore } from "$stores/createAuthStore";

  const { authUser, loading } = createAuthStore("register");
  async function register(formData) {
    await authUser(formData);
  }
</script>

<Register registerFormLoading={$loading} registerForm={register} />
