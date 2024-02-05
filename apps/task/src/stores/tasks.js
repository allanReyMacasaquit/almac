import { writable } from "svelte/store";
import { DEFAULT_DATA } from "../data";

const createStore = () => {
  const taskList = writable(DEFAULT_DATA);
  const { subscribe, update } = taskList;

  return {
    subscribe,

    addTaskItems: (itemIndex) => {
      update((list) => {
        const updatedList = [...list];
        const items = updatedList[itemIndex].items;
        updatedList[itemIndex].items = [
          ...items,
          {
            id: new Date().toISOString(),
            text: "new task.."
          }
        ];
        return updatedList;
      });
    },

    addTaskList: () => {
      update((list) => {
        return [
          ...list,
          {
            id: new Date().toISOString(),
            text: "new List",
            items: []
          }
        ];
      });
    },

    updateTaskItems: (items, listIndex) => {
      update((list) => {
        // Updating the taskList using Svelte's update function.
        const taskIndex = list[listIndex].items.findIndex((item) => item.id === items.id); // Finding the index of the task with the matching id.

        if (taskIndex !== -1) {
          // Checking if the task with the given id exists in the list.
          list[listIndex].items[taskIndex] = { ...items }; // Updating the task with the new data.
        }
        return list; // Returning the updated taskList.
      });
    }
  };
};

export const taskListStore = createStore();
