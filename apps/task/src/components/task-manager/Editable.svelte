<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let value;

  let isEditing = false;
</script>

{#if isEditing}
  <div class="flex-it">
    <textarea bind:value class="p-2 rounded-t-lg" />
    <button
      on:click={() => {
        (isEditing = false), dispatch("save", value);
      }}
      class="flex pt-1 shadow justify-center rounded-b-lg"
      ><h1 class="w-full text-center bg-green-100 hover:bg-green-200 p-2 rounded-lg">Save</h1>
    </button>
  </div>
{:else}
  <button class="hover" on:click={() => (isEditing = true)}>
    <slot />
  </button>
{/if}
