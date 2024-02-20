<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  let snackbars = writable([
    // { message: "You have been successfully logged in", type: "success" },
    // { message: "Invalid! Wrong information.", type: "error" },
    // { message: "Warning!, please verify your credentials!", type: "warning" }
  ]);

  function addSnackbar(message, type) {
    snackbars.update((list) => [{ message, type, id: new Date().toISOString() }, ...list]);
  }

  const removeSnackbar = (id) => () => {
    // console.log(`Removing snack with ID: ${id}`);
    snackbars.update((list) => list.filter((snackbar) => snackbar.id !== id));
  };

  let isXl = writable(false);
  let isLg = writable(false);

  let innerWidth;

  $: {
    $isXl = innerWidth > 1280;
    $isLg = innerWidth > 1024;
  }

  setContext("UIkey", {
    isXl,
    isLg,
    snackbars,
    addSnackbar,
    removeSnackbar
  });
</script>

<svelte:window bind:innerWidth />
<slot />
