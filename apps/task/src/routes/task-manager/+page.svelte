<script>
  import TaskList from "../../components/task-manager/TaskList.svelte";
  import { taskListStore } from "../../stores/tasks.js";
</script>

<div>
  <a href="/">Go home</a>
</div>
<div class="p-10 h-full flex-it">
  <div class="text-2xl mb-6">Personal Projects</div>
  <button
    on:click={taskListStore.addTaskList}
    class="text-xl mb-3 font-bold cursor-pointer hover:underline flex items-start"
  >
    + Add List
  </button>
  <div class="flex-it h-full flex-1">
    <div class="flex-it flex-row rounded-xl h-3/4">
      {#each $taskListStore as list, index (list.id)}
        <TaskList listTitle={list.text} tasks={list.items} id={list.id} listIndex={index} />
      {/each}
    </div>
  </div>
</div>
