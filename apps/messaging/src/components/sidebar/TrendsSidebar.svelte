<script>
  export let trends;
</script>

<div
  style="background-image: linear-gradient(to bottom, rgb(88 28 135), rgb(1, 45, 57));"
  class="overflow-hidden w-auto flex-it rounded-2xl border border-slate-700 p-2"
>
  <div class="flex-it p-4">
    <span class="text-2xl tracking-widest text-center">Trends</span>
  </div>
  {#each trends as trend, index}
    <div
      class="flex-it p-4 hidden sm:flex cursor-pointer transition duration-200 rounded-lg m-2 {index %
        2 ===
      0
        ? 'bg-violet-900'
        : 'bg-violet-800'} hover:bg-blue-800"
    >
      <div class="flex-it">
        <span class="h-16 w-16 object-cover mb-2">
          <img src={trend.icon} alt="trend.icon" />
        </span>
        <span class="text-gray-400 text-sm"> {trend.category}</span>
        <span class="text-lg font-bold">{trend.content}</span>
        <span class="text-gray-400 text-sm">{trend.shareCount} shares</span>
      </div>
    </div>
  {/each}
</div>
