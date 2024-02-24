<script>
  import Messenger from "$components/shares/Messenger.svelte";
  import SharesPost from "$components/shares/SharesPost.svelte";
  import CenteredDataLoader from "$components/utils/CenteredDataLoader.svelte";
  import PaginatedSharesPages from "$components/utils/PaginatedSharesPages.svelte";
  import { createShareStore } from "$stores/createShareStore";

  const { sharesPages, addShare, loading } = createShareStore();
</script>

<Messenger onAddShare={addShare} />
<div class="h-px bg-gray-700 my-1" />

<PaginatedSharesPages {sharesPages} />

{#if $loading}
  <CenteredDataLoader />
{/if}
