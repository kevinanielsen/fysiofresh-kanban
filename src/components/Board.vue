<script setup lang="ts">
import draggable from "vuedraggable";
import Task from "./Task.vue";
import CreateTask from "./CreateTask.vue";
import { useTasksStore } from "@/stores/TasksStore";

const tasks = useTasksStore();

const h3Styles = {
  class: "bg-[#603F3E] text-white p-2 rounded-[4px] mb-2 font-bold text-lg",
};
</script>

<template>
  <div class="flex flex-col w-full gap-4">
    <CreateTask />
    <div class="flex gap-4 w-full">
      <div id="todo" class="w-1/3 border shadow-inner rounded-lg p-2">
        <h3 v-bind="h3Styles">To Do</h3>
        <draggable :list="tasks.todo" itemKey="id" group="tasks" class="h-full">
          <template #item="{ element }">
            <Task
              :title="element.title"
              :description="element.description"
              :id="element.id"
            />
          </template>
        </draggable>
      </div>
      <div id="doing" class="w-1/3 border shadow-inner rounded-lg p-2">
        <h3 v-bind="h3Styles">Doing</h3>
        <draggable :list="tasks.doing" itemKey="id" group="tasks">
          <template #item="{ element }">
            <Task
              :title="element.title"
              :description="element.description"
              :id="element.id"
            />
          </template>
        </draggable>
      </div>
      <div id="done" class="w-1/3 border shadow-inner rounded-lg p-2">
        <h3 v-bind="h3Styles">Done</h3>
        <draggable
          :list="tasks.done"
          itemKey="id"
          group="tasks"
          class="h-full"
        >
          <template #item="{ element }">
            <Task :title="element.title" :description="element.description" :id="element.id" />
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>
@/stores/TasksStore