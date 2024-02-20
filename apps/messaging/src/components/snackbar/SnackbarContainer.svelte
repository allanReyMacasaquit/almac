<script>
  import { getUIContext } from "$components/context/ui";
  import { flip } from "svelte/animate";
  import SnackbarItem from "./SnackbarItem.svelte";

  const { snackbars, removeSnackbar } = getUIContext();
</script>

<div class="fixed z-50 bottom-0 right-0 sm:top-4 sm:right-10 w-full md:max-w-xs">
  <ul class="flex flex-col space-y-2 text-center w-full">
    {#each $snackbars as snackbar (snackbar)}
      <div animate:flip={{ duration: 300 }} class=" w-full text-wrap">
        <SnackbarItem
          message={snackbar.message}
          type={snackbar.type}
          onClose={removeSnackbar(snackbar.id)}
        />
      </div>
    {/each}
  </ul>
</div>
