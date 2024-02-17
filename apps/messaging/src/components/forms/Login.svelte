<script>
  import {
    compareWithValidator,
    firstUppercaseLetter,
    minLengthValidator,
    requiredValidator
  } from "$actions/validators";
  import createFormStore from "$stores/createFormStore";
  import FormErrors from "./FormErrors.svelte";

  const { validate, submit, errors, value } = createFormStore({
    email: "",
    password: ""
  });

  function _submit(formdata) {
    alert(JSON.stringify(formdata));
  }
</script>

<div class="flex-it justify-center items-center h-full">
  <div class="text-white text-4xl text-center font-bold">Good News - Get In</div>
  <div class="mt-10 flex-it h-100 xs:w-100 w-full bg-white p-10">
    <div class="flex-it h-full">
      <form class="flex-it">
        <div class="flex-it overflow-hidden sm:rounded-md">
          <div class="flex-it">
            <div class="flex-it">
              <div class="flex-it py-2">
                <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
                <input
                  on:input={value}
                  use:validate={[requiredValidator]}
                  type="email"
                  name="email"
                  id="email"
                  class="mt-1 p-4 border rounded-lg block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <FormErrors errors={$errors.email} />
              </div>
              <div class="flex-it py-2">
                <label for="password" class="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  on:input={value}
                  use:validate={[requiredValidator]}
                  type="password"
                  name="password"
                  id="password"
                  class="mt-1 p-4 border rounded-lg block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <FormErrors errors={$errors.password} />
            </div>
          </div>
          <div class="text-sm text-gray-600 pb-4">
            No Account Yet?{" "}
            <a class="hover:underline" href="/register"> Create a new account </a>
          </div>
          <div class="flex-it py-2">
            <button
              on:click={submit(_submit)}
              type="button"
              class="
              bg-blue-400 hover:bg-blue-500
              inline-flex focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-400 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
