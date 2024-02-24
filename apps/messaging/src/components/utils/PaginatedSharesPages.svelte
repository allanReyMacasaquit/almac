<script>
  import SharesPost from "$components/shares/SharesPost.svelte";

  export let sharesPages;
</script>

{#each Object.keys($sharesPages) as page}
  {#each $sharesPages[page].shares as share (share.id)}
    <SharesPost {share} />
  {/each}
{/each}
