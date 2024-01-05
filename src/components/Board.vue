<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";

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
</script>

<template>
  <div class="flex gap-4 w-full">
    <div id="todo" class="w-1/3 border shadow-inner rounded-[24px] p-2">
      <h3 class="bg-[#603F3E] text-white p-2 rounded-[16px] mb-2">To Do</h3>
      <draggable :list="data.todo" itemKey="title" group="tasks">
        <template #item="{ element }">
          <div class="">{{ element.title }}</div>
        </template>
      </draggable>
    </div>
    <div id="doing" class="w-1/3 border shadow-inner rounded-[24px] p-2">
      <h3 class="bg-[#603F3E] text-white p-2 rounded-[16px] mb-2">Doing</h3>
      <draggable :list="data.doing" itemKey="title" group="tasks">
        <template #item="{ element }">
          <div class="">{{ element.title }}</div>
        </template>
      </draggable>
    </div>
    <div id="done" class="w-1/3 border shadow-inner rounded-[24px] p-2">
      <h3 class="bg-[#603F3E] text-white p-2 rounded-[16px] mb-2">Done</h3>
      <draggable :list="data.done" itemKey="title" group="tasks">
        <template #item="{ element }">
          <div class="">{{ element.title }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>
