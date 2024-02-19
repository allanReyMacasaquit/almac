<script>
  import Messenger from "$components/shares/Messenger.svelte";
  import SharesPost from "$components/shares/SharesPost.svelte";

  let shares = [];
</script>

<!-- HOME PAGE START -->

<div class="h-px bg-gray-700 my-1" />
<Messenger />
{#each shares as share (share.id)}
  <SharesPost {share} />
{/each}
