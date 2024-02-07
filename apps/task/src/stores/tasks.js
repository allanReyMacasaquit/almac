import { writable } from "svelte/store";
import { DEFAULT_DATA } from "../data";

const createStore = () => {
  const storedList = localStorage.getItem("local-storage");
  const _storedData = storedList ? JSON.parse(storedList) : DEFAULT_DATA;

  const taskList = writable(_storedData);
  const { subscribe, update } = taskList;

  return {
    subscribe,

    moveItems: (sourceData, movetoListIndex) => {
      update((list) => {
        const [task] = list[sourceData.listIndex].items.splice(sourceData.itemsIndex, 1);
        list[movetoListIndex].items.push(task);
        return list;
      });
    },

    addTaskItems: (itemIndex) => {
      update((list) => {
        const updatedList = [...list];
        const items = updatedList[itemIndex].items;
        updatedList[itemIndex].items = [
          ...items,
          {
            id: new Date().toISOString(),
            text: ""
          }
        ];
        return updatedList;
      });
    },

    removeTaskItems: (listIndex, itemsIndex) => {
      update((list) => {
        list[listIndex].items.splice(itemsIndex, 1);
        return list;
      });
    },

    addTaskList: () => {
      update((list) => {
        return [
          ...list,
          {
            id: new Date().toISOString(),
            text: "",
            items: []
          }
        ];
      });
    },

    removeTaskList: (listIndex) => {
      update((list) => {
        list.splice(listIndex, 1);
        return list;
      });
    },

    updateListItems: (title, listIndex) => {
      update((list) => {
        list[listIndex].text = title;
        return list;
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

taskListStore.subscribe((list) => {
  if (list) {
    localStorage.setItem("local-storage", JSON.stringify(list));
  }
});
