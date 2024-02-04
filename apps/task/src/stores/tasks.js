import { writable } from "svelte/store";

let i = 0;
const createStore = () => {
  const taskList = writable([]);

  setTimeout(() => {
    taskList.set([1, 2, 3]);
  }, 1000);

  setInterval(() => {
    taskList.update((list) => [...list, i++]);
  }, 1000);

  return taskList;
};

export const taskListStore = createStore();
