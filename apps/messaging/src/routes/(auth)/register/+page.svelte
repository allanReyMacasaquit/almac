<script>
  import Register from "$components/forms/Register.svelte";
  import { createAuthStore } from "$stores/createAuthStore";

  const { authUser, loading } = createAuthStore("register");
  async function register(formData) {
    try {
      const user = await authUser(formData);
      console.log("User registered successfully:", user);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }
</script>

<Register loading={$loading} registerForm={register} />
