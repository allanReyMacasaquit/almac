<script>
  import { registerUser } from "$api/auth";
  import Register from "$components/forms/Register.svelte";

  async function register(formData) {
    try {
      const user = await registerUser(formData);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }
</script>

<Register registerForm={register} />
