import { writable } from "svelte/store";

export function createShareStore() {
  const shares = writable([]);

  function addShare(share) {
    console.log("Adding message: " + JSON.stringify(share));
  }

  return {
    shares: { subscribe: shares.subscribe },
    addShare
  };
}
