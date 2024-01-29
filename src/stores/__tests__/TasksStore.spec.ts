import { it, expect, beforeEach } from "vitest";
import { useTasksStore } from "../TasksStore";
import { createPinia, setActivePinia } from "pinia";

beforeEach(() => {
  setActivePinia(createPinia());
})

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
