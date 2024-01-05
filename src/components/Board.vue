<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";

const data = ref({ todo: [], doing: [], done: [] });
</script>

<template>
  <div class="row">
    <div id="todo">
      <h3>To Do</h3>
      <draggable :list="data.todo" itemKey="todo">
        <template #item="{ element }">
          <div class="">{{ element.name }}</div>
        </template>
      </draggable>
    </div>
    <div id="doing">
      <h3>Doing</h3>
      <draggable :list="data.doing" itemKey="doing">
        <template #item="{ element }">
          <div class="">{{ element.name }}</div>
        </template>
      </draggable>
    </div>
    <div id="done">
      <h3>Done</h3>
      <draggable :list="data.done" itemKey="done">
        <template #item="{ element }">
          <div class="">{{ element.name }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>
