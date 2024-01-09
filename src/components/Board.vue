<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";
import Task from "./Task.vue";
import CreateTask from "./CreateTask.vue";

const data = ref({
  todo: [
    {
      id: 1,
      title: "Opgave, der skal gøres",
      description: "Dette er en opgave som skal færdiggøres",
    },
  ],
  doing: [
    {
      id: 2,
      title: "Opgave, der bliver lavet",
      description: "Denne opgave er i gang med at blive klaret",
    },
  ],
  done: [
    {
      id: 3,
      title: "Denne opgave er færdig",
      description: "Opgaven er klaret - du kan slappe af!",
    },
  ],
});

const addTask = (
  e: SubmitEvent,
  task: { title: string; description: string },
) => {
  e.preventDefault();
  data.value.todo.push(task);
};

const h3Styles = {
  class: "bg-[#603F3E] text-white p-2 rounded-[4px] mb-2 font-bold text-lg",
};
</script>

<template>
  <div class="flex flex-col w-full gap-4">
    <CreateTask :addTask="addTask" />
    <div class="flex gap-4 w-full">
      <div id="todo" class="w-1/3 border shadow-inner rounded-lg p-2">
        <h3 v-bind="h3Styles">To Do</h3>
        <draggable :list="data.todo" itemKey="id" group="tasks" class="h-full">
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
        <draggable :list="data.doing" itemKey="id" group="tasks">
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
          :list="data.done"
          itemKey="id"
          group="tasks"
          class="h-full"
          :id="element.id"
        >
          <template #item="{ element }">
            <Task :title="element.title" :description="element.description" />
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>
