import { it, expect } from "vitest";
import { useTasksStore } from "../TasksStore";
import { iTask } from "@/models/task";

it('should ensure default state', () => {
  //Given a new store without any changes
  //When store is created
  //Then the default state is

  //Arrange
  const tasksStore = useTasksStore();

  //Act - we're testing the constructor, there is no act.

  //Assert
  expect(tasksStore.todo).toStrictEqual([] as iTask[]);
});
