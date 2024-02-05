<script>
  import TaskList from "../../components/task-manager/TaskList.svelte";
  import { taskListStore } from "../../stores/tasks.js";
</script>

<div>
  <a href="/">Go home</a>
</div>
<div class="p-10 h-full">
  <div class="text-2xl mb-6">Personal Projects</div>
  <button class="text-xl mb-3 font-bold cursor-pointer hover:underline flex items-start">
    + Add List
  </button>
  <div class="flex-it h-full">
    <div class="flex-it flex-row rounded-xl h-full">
      {#each $taskListStore as list, index (list.id)}
        <TaskList listTitle={list.text} tasks={list.items} listIndex={index} />
      {/each}
    </div>
  </div>
</div>
