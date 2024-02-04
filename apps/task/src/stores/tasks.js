import { writable } from "svelte/store";
import { DEFAULT_DATA } from "../data";

const createStore = () => {
  const taskList = writable(DEFAULT_DATA);
  return taskList;
};

export const taskListStore = createStore();
