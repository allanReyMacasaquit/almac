<script>
  console.log("Calling from Page");
  export let data;
</script>

<section class="p-10 h-[100%]">
  <h1 class="text-red-600 text-4xl">Welcome to my Projects</h1>
  <div>{data.test1} - {data.test2}</div>
  <div class="flex flex-col items-center h-full justify-center">
    <h1 href="/task-manager">Go to Project List</h1>
    <p class="text-center">
      <a href="/task-manager" class="text-2xl">-Visit my projects-</a> to read the documentation
    </p>
  </div>
</section>
