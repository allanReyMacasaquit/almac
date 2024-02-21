import { fetchSharesCollection } from "$api/share";
import { onMount } from "svelte";
import { writable } from "svelte/store";

export function createShareStore() {
  const shares = writable([]);

  function addShare(share) {
    shares.update((list) => [share, ...list]);
  }

  onMount(fetchSharesCollection);

  return {
    shares: { subscribe: shares.subscribe },
    addShare
  };
}
