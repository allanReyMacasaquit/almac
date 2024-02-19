<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  let snackbars = writable([
    { message: "You have been successfully logged in", type: "success" },
    { message: "Invalid! Wrong information.", type: "error" },
    { message: "Warning!, please verify your credentials!", type: "warning" }
  ]);

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
    snackbars
  });
</script>

<svelte:window bind:innerWidth />
<slot />
