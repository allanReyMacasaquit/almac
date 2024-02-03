<script>
  import "../app.css";
</script>

<div class="text-white p-10 bg-slate-500">
  I am a root layout
  <slot />
</div>

<div class="text-white p-10">
  I am a root layout
  <div class="text-white p-4">
    I am a task manager layout
   <div class="text-white">I am task manager</div>
  </div>
</div>