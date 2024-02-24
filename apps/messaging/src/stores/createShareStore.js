import { fetchSharesCollection } from "$api/share";
import { onMount } from "svelte";
import { writable } from "svelte/store";

export function createShareStore() {
  const shares = writable([]);
  const loading = writable(false);

  function addShare(share) {
    shares.update((list) => [share, ...list]);
  }

  onMount(loadSharedData);

  async function loadSharedData() {
    loading.set(true);
    try {
      const sharesLoad = await fetchSharesCollection();
      shares.set(sharesLoad);
    } catch (error) {
      console.log(error.message);
    } finally {
      loading.set(false);
    }
  }

  return {
    shares: { subscribe: shares.subscribe },
    loading: { subscribe: loading.subscribe },
    addShare
  };
}
