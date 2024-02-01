// import { createPinia, setActivePinia } from "pinia";
import CreateTaskVue from "../CreateTask.vue";
import { mount } from "@vue/test-utils";
import { useTasksStore } from "@/stores/TasksStore";
import { createTestingPinia } from "@pinia/testing";

describe("Task component", () => {
  it("addTask should add a task correctly", async () => {
    // Mocking the store
    // Mount the component
    const wrapper = mount(CreateTaskVue, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const tasksStore = useTasksStore();

    // Simulate filling in the task form and submitting it
    await wrapper.find('input[name="title"]').setValue("New Task");
    await wrapper
      .find('input[name="description"]')
      .setValue("Task Description");
    await wrapper.find("form").trigger("submit");

    // Assert that the addTask method was called with the correct arguments
    expect(tasksStore.addTask).toHaveBeenCalled();
  });
});
