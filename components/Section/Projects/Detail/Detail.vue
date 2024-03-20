<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    intercepted: {
      type: Boolean,
      required: false,
      default: false,
    },
  });
</script>

<template>
  <div class="w-full">
    <h1 v-if="!props.intercepted" class="text-heading-l w-full">{{ data?.title }}</h1>
    <h2 v-if="props.intercepted" class="text-heading-l w-full">{{ data?.title }}</h2>
    <div v-html="data.content" class="text-body-m text-dark-500 w-full"></div>
  </div>
</template>

<style></style>
