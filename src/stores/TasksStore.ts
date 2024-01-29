import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    todo: [{ id: 0, title: "Do the dishes", description: "" }],
    doing: [],
    done: [],
  }),
  actions: {
    addTask(title: string, description: string) {
      const id = Math.round(Math.random() * 10000);
      this.todo.push({ id, title, description });
    },
  },
});
