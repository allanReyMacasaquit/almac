<script>
  let isEditing = false;
  let value = "";
</script>

{#if isEditing}
  <div class="flex-it">
    <textarea bind:value class="p-2 rounded-lg" />
    <button on:click={() => (isEditing = false)} class="flex underline justify-end">Close </button>
  </div>
{:else}
  <button on:click={() => (isEditing = true)}>
    <slot />
  </button>
{/if}
