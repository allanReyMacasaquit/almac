<script>
  import { taskListStore } from "../../stores/tasks";
  import Editable from "./Editable.svelte";

  export let items;
  export let listIndex;
  export let itemsIndex;

  function save(event) {
    taskListStore.updateTaskItems(
      {
        id: items.id,
        text: event.detail
      },
      listIndex
    );
  }

  function dragStart(e) {
    const data = { listIndex, itemsIndex };
    e.dataTransfer.setData("text/plain", JSON.stringify(data));
  }
</script>

<div
  draggable="true"
  on:dragstart={dragStart}
  role="button"
  tabindex="0"
  style="background-color: {itemsIndex === 0 ? 'lightgreen' : ''}"
  class="flex-it p-2 bg-slate-50 mb-2 cursor-pointer border border-slate-500 rounded-lg"
>
  <div class="flex-it p-2">
    <Editable bind:value={items.text} on:save={save}>
      <div class="flex-it flex-row">
        {#if !items.text}
          <div class="text-gray-400">click to add...</div>
        {/if}
        <div
          style="font-size: {itemsIndex === 0 ? '20px' : ''}"
          class="flex flex-1 text-slate-800 tracking-widest capitalize"
        >
          {items.text}
        </div>
        <div class="flex items-end hover:text-red-600">
          <button
            on:click|stopPropagation={() => {
              taskListStore.removeTaskItems(listIndex, itemsIndex);
            }}
          >
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
          </button>
        </div>
      </div>
    </Editable>
  </div>
</div>
