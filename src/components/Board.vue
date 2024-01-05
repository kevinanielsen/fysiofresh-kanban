<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";
import Task from "./Task.vue";

const data = ref({
  todo: [
    {
      title: "Task",
      description: "",
    },
  ],
  doing: [],
  done: [],
});
const h3Styles = {
  class: "bg-[#603F3E] text-white p-2 rounded-[16px] mb-2 font-bold text-lg",
};
</script>

<template>
  <div class="flex gap-4 w-full">
    <div id="todo" class="w-1/3 border shadow-inner rounded-[24px] p-2">
      <h3 v-bind="h3Styles">To Do</h3>
      <draggable :list="data.todo" itemKey="title" group="tasks">
        <template #item="{ element }">
          <Task :title="element.title" :description="element.description" />
        </template>
      </draggable>
    </div>
    <div id="doing" class="w-1/3 border shadow-inner rounded-[24px] p-2">
      <h3 v-bind="h3Styles">Doing</h3>
      <draggable :list="data.doing" itemKey="title" group="tasks">
        <template #item="{ element }">
          <Task :title="element.title" :description="element.description" />
        </template>
      </draggable>
    </div>
    <div id="done" class="w-1/3 border shadow-inner rounded-[24px] p-2">
      <h3 v-bind="h3Styles">Done</h3>
      <draggable :list="data.done" itemKey="title" group="tasks">
        <template #item="{ element }">
          <Task :title="element.title" :description="element.description" />
        </template>
      </draggable>
    </div>
  </div>
</template>
