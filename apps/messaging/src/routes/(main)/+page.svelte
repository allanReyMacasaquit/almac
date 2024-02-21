<script>
  import Messenger from "$components/shares/Messenger.svelte";
  import SharesPost from "$components/shares/SharesPost.svelte";
  import { createShareStore } from "$stores/createShareStore";

  const { shares, addShare } = createShareStore();
</script>

<Messenger onAddShare={addShare} />
<div class="h-px bg-gray-700 my-1" />
{#each $shares as share (share.id)}
  <SharesPost {share} />
{/each}
