<script>
  import { page } from "$app/stores";
</script>

<div class="flex-it justify-center items-center h-full text-white">
  <div class="text-center">
    <div class="text-4xl font-bold">
      {$page.status} - {$page.error.message}
    </div>
    <a href="/" class="">
      <button class="border rounded-lg p-3 mt-2 bg-blue-800 hover:bg-blue-700 transition"
        >Go to home page</button
      >
    </a>
  </div>
</div>
