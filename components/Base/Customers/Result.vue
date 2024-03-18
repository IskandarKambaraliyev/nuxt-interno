<script setup>
  const props = defineProps({
    item: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <div class="w-full flex-center flex-col">
    <span class="text-heading-xl text-brown">{{ item }}</span>
    <h6 class="text-body-m text-dark-500">{{ label }}</h6>
  </div>
</template>

<style></style>
