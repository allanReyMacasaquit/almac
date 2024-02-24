import { fetchSharesCollection } from "$api/share";
import { onMount } from "svelte";
import { get, writable } from "svelte/store";

const FIRST_PAGE = 1;

export function createShareStore() {
  const sharesPages = writable({ [FIRST_PAGE]: { shares: [] } });
  const sharesPage = writable(FIRST_PAGE);
  const loading = writable(false);

  function addShare(share) {
    sharesPages.update((page) => {
      page[FIRST_PAGE].shares.unshift(share);
      return page;
    });
    console.log(share);
  }

  onMount(loadSharedData);

  async function loadSharedData() {
    const page = get(sharesPage);
    console.log("loading page" + page);

    loading.set(true);
    try {
      const sharesLoad = await fetchSharesCollection();
      if (sharesLoad.length > 0) {
        sharesPages.update((pages) => {
          const existingShares = pages[page].shares;
          return { ...pages, [page]: { shares: [...existingShares, ...sharesLoad] } };
        });
        console.log(get(sharesPages));
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      loading.set(false);
    }
  }

  return {
    sharesPages,
    loading: { subscribe: loading.subscribe },
    addShare
  };
}
