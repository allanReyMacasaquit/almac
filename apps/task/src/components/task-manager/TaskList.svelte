<script context="module">
  import { writable } from "svelte/store";

  let listHoverId = writable(null);
</script>

<script>
  import { taskListStore } from "../../stores/tasks";
  import Editable from "./Editable.svelte";
  import TaskItem from "./TaskItem.svelte";
  import { flip } from "svelte/animate";
  import { fade, fly } from "svelte/transition";

  export let listTitle;
  export let tasks;
  export let id;
  export let listIndex;

  function drop(e) {
    const sourceJson = e.dataTransfer.getData("text/plain");
    const sourceData = JSON.parse(sourceJson);
    taskListStore.moveItems(sourceData, listIndex);
    listHoverId.set(null);
  }

  function saveTitle(event) {
    taskListStore.updateListItems(event.detail, listIndex);
  }
</script>

<div out:fly={{ y: 50 }} class="flex-it h-full w-80 max-w-sm min-h-full m-2 my-0">
  <div
    on:dragenter={() => {
      listHoverId.set(id);
    }}
    on:drop={drop}
    on:dragover|preventDefault={() => {}}
    role="button"
    tabindex="0"
    class:hovering={id == $listHoverId}
    class="bg-slate-100 flex-it rounded-lg max-h-full"
  >
    <div class="flex-it m-2 border border-slate-300 rounded-lg">
      <Editable bind:value={listTitle} on:save={saveTitle}>
        <div class="flex justify-between px-2 rounded-lg flex-row bg-neutral-200">
          {#if !listTitle}
            <div class="text-gray-400 text-xl font-bold py-2 tracking-widest capitalize">
              create title project
            </div>
          {/if}
          <div class="text-2xl text-slate-500 font-bold py-2 tracking-widest uppercase">
            {listTitle}
          </div>
          <button
            on:click|stopPropagation={() => {
              taskListStore.removeTaskList(listIndex);
            }}
          >
            <div class="flex hover:text-red-600 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </div>
          </button>
        </div>
      </Editable>
    </div>

    <div class="overflow-x-hidden overflow-y-auto with-scrollbar p-2">
      {#each tasks as task, itemsIndex (task.id)}
        <div out:fade in:fly={{ y: -50 }} animate:flip>
          <TaskItem items={task} {listIndex} {itemsIndex} />
        </div>
      {/each}
    </div>
    <button
      on:click={taskListStore.addTaskItems(listIndex)}
      class="flex justify-center text-center p-4 bg-neutral-300 hover:shadow-lg"
    >
      <i class="fa fa-plus py-1 mr-2" aria-hidden="true"></i>
      <h3 class="text-slate-800">Add Task</h3>
    </button>
  </div>
</div>

<style>
  .hovering {
    border: 1px solid;
    border-color: rgb(137, 151, 169);
    box-shadow: 1px 2px 7px 1px rgb(137, 151, 169);
  }
</style>
