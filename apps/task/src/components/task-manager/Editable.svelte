<script>
  let isEditing = false;
</script>

{#if isEditing}
  <div class="flex-it">
    <textarea class="p-2 rounded-lg" />
    <button on:click={() => (isEditing = false)} class="flex underline justify-end">Close </button>
  </div>
{:else}
  <button on:click={() => (isEditing = true)}>
    <slot />
  </button>
{/if}
