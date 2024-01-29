import { it, expect, beforeEach, describe } from "vitest";
import { useTasksStore } from "../TasksStore";
import { createPinia, setActivePinia } from "pinia";

beforeEach(() => {
  setActivePinia(createPinia());
})

describe("tasksStore", () => {
  it('should ensure default state', () => {
    //Given a new store without any changes
    //When store is created
    //Then the default state is

    //Arrange
    const tasksStore = useTasksStore();

    //Act - we're testing the constructor, there is no act.

    //Assert
    expect(tasksStore.todo).toMatchSnapshot();
    expect(tasksStore.doing).toMatchSnapshot();
    expect(tasksStore.done).toMatchSnapshot();
  });
  it("should add a task", () => {
    //Given a new store without any changes
    //When a task is added
    //Then the task is added to the todo list

    //Arrange
    const tasksStore = useTasksStore();

    //Act
    tasksStore.addTask("Do the dishes", "Clean the dishes");

    //Assert
    expect(tasksStore.todo).toMatchSnapshot();
  });
})
