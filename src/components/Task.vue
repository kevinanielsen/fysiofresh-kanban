<script setup lang="ts">
defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div class="p-2 shadow-lg border rounded-[4px]">
    <h4 class="text-lg font-bold">{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>
