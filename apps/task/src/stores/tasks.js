import { writable } from "svelte/store";

const createStore = () => {
  const taskList = writable([], () => {
    let i = 0;
    const id = setInterval(() => {
      taskList.update((list) => [...list, i++]);
    }, 2000);

    return () => {
      clearInterval(id);
    };
  });

  return taskList;
};

export const taskListStore = createStore();
