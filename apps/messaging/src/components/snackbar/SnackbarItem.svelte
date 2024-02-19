<script>
  import TiTimesOutline from "svelte-icons/ti/TiTimesOutline.svelte";

  const type = "success";
  export let message;
  let bgColor;
  if (type === "success") {
    bgColor = "bg-blue-800";
  } else if (type === "error") {
    bgColor = "bg-red-800";
  } else {
    bgColor = "bg-yellow-800";
  }
</script>

<div
  class="{bgColor} min-w-68 text-white flex-it font-bold rounded-md md:max-w-xs w-full text-sm shadow-md"
>
  <div class="flex-it flex-row-reverse p-1">
    <button class="text-xl rounded-full">
      <div class="icon">
        <TiTimesOutline />
      </div>
    </button>
  </div>
  <div class="flex-it px-2 pb-3">{message}</div>
  <div style="width: {100}%" class="bg-black opacity-40 text-right h-2"></div>
</div>
