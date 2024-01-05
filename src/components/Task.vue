<script setup lang="ts">
defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div class="p-2 shadow-lg border rounded-[16px]">
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>
