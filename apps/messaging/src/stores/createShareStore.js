import { writable } from "svelte/store";

export function createShareStore() {
  const shares = writable([]);

  function addShare(share) {
    shares.update((list) => [share, ...list]);
  }

  return {
    shares: { subscribe: shares.subscribe },
    addShare
  };
}
