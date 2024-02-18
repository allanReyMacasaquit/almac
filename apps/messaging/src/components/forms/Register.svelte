<script>
  import {
    compareWithValidator,
    emailValidator,
    maxLengthValidator,
    minLengthValidator,
    requiredValidator
  } from "$actions/validators";
  import createFormStore from "$stores/createFormStore";
  import FormErrors from "./FormErrors.svelte";

  export let registerForm;

  const { validate, submit, errors, value } = createFormStore({
    fullName: "",
    username: "",
    email: "",
    avatar: "",
    password: "",
    passwordConfirmation: ""
  });
</script>

<div class="flex-it justify-center items-center h-full">
  <div class="text-white text-4xl text-center font-bold mt-20">Good News - Create Account</div>
  <div class="mt-10 flex-it h-100 xs:w-100 w-full bg-white p-10">
    <div class="flex-it">
      <form class="flex-it">
        <div class="flex-it overflow-hidden sm:rounded-md">
          <div class="flex-it">
            <div class="flex-it">
              <div class="flex-it py-2">
                <label for="fullName" class="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  on:input={value}
                  use:validate={[
                    requiredValidator,
                    (ele) => minLengthValidator(ele, 5),
                    (ele) => maxLengthValidator(ele, 50)
                  ]}
                  type="text"
                  name="fullName"
                  id="fullName"
                  class="mt-1 p-4 border rounded-lg block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <FormErrors errors={$errors.fullName} />
              </div>

              <div class="flex-it py-2">
                <label for="username" class="block text-sm font-medium text-gray-700">
                  username
                </label>
                <input
                  on:input={value}
                  use:validate={[
                    requiredValidator,
                    (ele) => minLengthValidator(ele, 3),
                    (ele) => maxLengthValidator(ele, 10)
                  ]}
                  type="text"
                  name="username"
                  id="username"
                  class="mt-1 block w-full p-4 border rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <FormErrors errors={$errors.username} />
              </div>

              <div class="flex-it py-2">
                <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
                <input
                  on:input={value}
                  use:validate={[
                    requiredValidator,
                    (ele) => emailValidator(ele),
                    (ele) => minLengthValidator(ele)
                  ]}
                  type="text"
                  name="email"
                  id="email"
                  class="mt-1 block w-full p-4 border rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <FormErrors errors={$errors.email} />
              </div>

              <div class="flex-it py-2">
                <label for="avatar" class="block text-sm font-medium text-gray-700"> Avatar </label>
                <input
                  on:input={value}
                  use:validate={[requiredValidator]}
                  type="text"
                  name="avatar"
                  id="avatar"
                  class="mt-1 block w-full p-4 border rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <FormErrors errors={$errors.avatar} />
              </div>

              <div class="flex-it py-2">
                <label for="password" class="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  on:input={value}
                  use:validate={[requiredValidator, (ele) => minLengthValidator(ele)]}
                  type="password"
                  name="password"
                  id="password"
                  class="mt-1 block w-full p-4 border rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <FormErrors errors={$errors.password} />
              </div>

              <div class="flex-it py-2">
                <label for="passwordConfirmation" class="block text-sm font-medium text-gray-700">
                  Password Confirmation
                </label>
                <input
                  on:input={value}
                  use:validate={[requiredValidator, (ele) => compareWithValidator(ele, "password")]}
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  class="mt-1 block w-full p-4 border rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <FormErrors errors={$errors.passwordConfirmation} />
              </div>
            </div>
          </div>
          <div class="text-sm text-gray-600 pb-4">
            Already Registered?{" "}
            <a class="hover:underline" href="/login"> Go to Login </a>
          </div>
          <div class="flex-it py-2">
            <button
              on:click={submit(registerForm)}
              type="button"
              class="
              bg-blue-400 hover:bg-blue-500 focus:ring-0
              disabled:cursor-not-allowed disabled:bg-gray-400
              inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
