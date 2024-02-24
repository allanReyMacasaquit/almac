<script>
  import Messenger from "$components/shares/Messenger.svelte";
  import SharesPost from "$components/shares/SharesPost.svelte";
  import CenteredDataLoader from "$components/utils/CenteredDataLoader.svelte";
  import { createShareStore } from "$stores/createShareStore";

  const { sharesPages, addShare, loading } = createShareStore();
</script>

<Messenger onAddShare={addShare} />
<div class="h-px bg-gray-700 my-1" />

{#each Object.keys($sharesPages) as page}
  {#each $sharesPages[page].shares as share (share.id)}
    <SharesPost {share} />
  {/each}
{/each}

{#if $loading}
  <CenteredDataLoader />
{/if}
