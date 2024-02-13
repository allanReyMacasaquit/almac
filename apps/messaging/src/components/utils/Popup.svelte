<script>
  import { afterUpdate, onMount } from "svelte";
  import clickOutside from "$components/action/eventAction.js";
  let isOpen = false;
  let openerMenu;
  let popUpBottomPosition;
  let popup;

  onMount(() => {
    addEventListener("click", closePopup);

    return () => {
      removeEventListener("click", closePopup);
    };
  });

  afterUpdate(() => {
    popUpBottomPosition = openerMenu.clientHeight * 1.2 + "px";
  });

  function closePopup() {
    if (isOpen && !isPopupClicked) isOpen = !isOpen;
  }
  function isPopupClicked(targetEl) {
    return popup.contains(targetEl);
  }
</script>

<div class="flex-it">
  <div bind:this={openerMenu} class="flex-it">
    <button on:click|stopPropagation={() => (isOpen = !isOpen)}>
      <slot />
    </button>
  </div>
  {#if isOpen}
    <div
      on:clickOutsideEvent={() => {
        isOpen = !isOpen;
      }}
      use:clickOutside
      bind:this={popup}
      style="bottom: {popUpBottomPosition};"
      class="flex-it hover:cursor-pointer fixed bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white popup z-10 rounded-2xl border-gray-700 border transition duration-1000"
    >
      <div class="xl:w-72 xl:min-w-68 max-h-120 min-h-8 flex-it overflow-auto">
        <div class="flex-it flex-grow flex-shrink py-">
          <div
            class="flex-it flex-row items-center justify-center p-2 text-xl text-center transition"
          >
            <span class="hidden xl:block">Logout</span>
            <i class="fa fa-sign-out mx-2" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
