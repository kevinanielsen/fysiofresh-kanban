<script setup lang="ts">
defineProps({
  id: Number,
  title: String,
  description: String,
});
</script>

<template>
  <div class="p-2 shadow-lg border rounded-[4px] mb-2" :key="id">
    <h4 class="text-lg font-bold">{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>
