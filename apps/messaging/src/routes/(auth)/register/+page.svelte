<script>
  import { registerUser } from "$api/auth";
  import Register from "$components/forms/Register.svelte";

  async function register(formData) {
    try {
      const user = await registerUser(formData);
      console.log("User registered successfully:", user);
      // Add any additional logic here after registering the user
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle errors, such as displaying error messages to the user
    }
  }
</script>

<Register registerForm={register} />
