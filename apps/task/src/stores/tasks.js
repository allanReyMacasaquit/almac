import { writable } from "svelte/store";

let i = 0;
const createStore = () => {
  const taskList = writable([]);

  setInterval(() => {
    taskList.update((list) => [...list, i++]);
  }, 2000);

  return taskList;
};

export const taskListStore = createStore();
