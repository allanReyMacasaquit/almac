<script>
  import { flip } from "svelte/animate";
  import TaskList from "../../components/task-manager/TaskList.svelte";
  import { taskListStore } from "../../stores/tasks.js";
  import { fade, fly } from "svelte/transition";

  export let data;
</script>

<div>
  <a href="/">Go home</a>
</div>
<div class="text-2xl">{data.appName} / {data.board}</div>
<div class="p-10 h-full flex-it items-start">
  <button
    out:fade
    on:click={taskListStore.addTaskList}
    class="text-xl justify-center font-bold cursor-pointer w-full bg-slate-200 text-slate-500 rounded-xl p-4 max-w-full flex items-center border border-slate-300"
  >
    <i class="fa fa-plus py-1 mr-2" aria-hidden="true"></i>Add List
  </button>
  <div class="flex-it h-full flex-1 mt-10">
    <div class="flex-it flex-row rounded-xl border border-slate-300 p-4 shadow-lg h-3/4">
      {#each $taskListStore as list, index (list.id)}
        <div animate:flip in:fly={{ y: 50 }}>
          <TaskList listTitle={list.text} tasks={list.items} id={list.id} listIndex={index} />
        </div>
      {/each}
    </div>
  </div>
</div>
