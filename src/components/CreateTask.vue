<script setup lang="ts">
import { ref } from "vue";

defineProps({
  addTask: Function,
});

const title = ref("");
const description = ref("");

const labelClass = "flex flex-col w-1/3 h-full";
</script>

<template>
  <form
    class="bg-[#FFECBE] w-full flex p-4 gap-4 rounded-xl"
    @submit="(event) => addTask && addTask(event, { title, description })"
  >
    <label for="title" v-bind:class="labelClass">
      Title
      <input
        type="text"
        name="title"
        id="title"
        class="bg-black/10 rounded-[4px]"
        aria-label="Title"
        v-model="title"
      />
    </label>
    <label for="description" v-bind:class="labelClass">
      Description
      <input
        type="text"
        name="description"
        id="description"
        class="bg-black/10 rounded-[4px]"
        aria-label="description"
        v-model="description"
      />
    </label>
    <button class="bg-[#53302F] shadow-lg rounded-[4px] px-4 text-white w-1/3">
      Add task
    </button>
  </form>
</template>
