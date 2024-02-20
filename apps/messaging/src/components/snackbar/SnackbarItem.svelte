<script>
  import { onMount, onDestroy } from "svelte";
  import TiTimes from "svelte-icons/ti/TiTimes.svelte";
  import { fly } from "svelte/transition";

  const INTERVAL_STEP = 5.0;

  export let message;
  export let type;
  export let onCloseDuration = 2000;
  export let onClose;

  let bgColor;
  let duration = onCloseDuration;
  let intervalId;

  $: progress = Math.floor((duration / onCloseDuration) * 100);

  function startTimer() {
    intervalId = setInterval(() => {
      duration -= INTERVAL_STEP;
      if (duration <= 0) {
        clearInterval(intervalId);
        onClose();
      }
    }, INTERVAL_STEP);
  }

  onMount(() => {
    startTimer();
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });

  $: {
    if (type === "success") {
      bgColor = "bg-blue-600";
    } else if (type === "error") {
      bgColor = "bg-red-500";
    } else {
      bgColor = "bg-yellow-500";
    }
  }
</script>

<div
  in:fly={{ x: 200 }}
  out:fly={{ x: 200 }}
  class="{bgColor} min-w-68 text-white flex-it font-bold sm:rounded-md md:max-w-xs w-full text-sm sm:text-lg sm:shadow-md"
>
  <div class="flex-it flex-row justify-between items-center p-6">
    <div class="flex-it px-4 w-full">{message}</div>
    <button on:click={onClose} class="text-xl rounded-full">
      <div class="icon">
        <TiTimes />
      </div>
    </button>
  </div>

  <div style="width: {progress}%" class="bg-black opacity-40 text-right h-2"></div>
</div>
