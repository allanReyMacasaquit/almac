<script>
  import { loginUser } from "$api/auth";
  import Login from "$components/forms/Login.svelte";

  async function login(formData) {
    try {
      const loggedIn = await loginUser(formData);
      console.log(`logged In as ${JSON.stringify(loggedIn.user.email)}`);
    } catch (error) {
      console.log(error);
    }
  }
</script>

<Login _submit={login} />
