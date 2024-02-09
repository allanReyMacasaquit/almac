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
  <div class="flex-it h-full flex-1 mt-10">
    <div class="flex-it flex-col md:flex-row gap-5 mb-4 h-4/5">
      {#each $taskListStore as list, index (list.id)}
        <div
          animate:flip
          in:fly={{ y: 50 }}
          class="bg-slate-200 p-4 rounded-lg mt-4 with-scrollbar h-3/4"
        >
          <TaskList listTitle={list.text} tasks={list.items} id={list.id} listIndex={index} />
        </div>
      {/each}
      <button
        out:fade
        on:click={taskListStore.addTaskList}
        class="text-xl mt-2 md:mt-0 mb-5 bg-slate-800 h-20 top-[-20%] right-0 justify-center font-bold cursor-pointer whitespace-nowrap text-slate-50 rounded-xl p-4 max-w-full md:absolute items-center border border-slate-300"
      >
        <i class="fa fa-plus py-1 mr-2" aria-hidden="true"></i>Add Ministry
      </button>
    </div>
  </div>
</div>
