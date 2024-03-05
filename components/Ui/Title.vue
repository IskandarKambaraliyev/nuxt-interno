<script setup>
  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "dark",
      required: false,
    },
  });
</script>

<template>
  <h3
    class="text-heading-l"
    :class="`${
      props?.color === 'dark'
        ? 'text-dark'
        : props.color === 'brown'
        ? 'text-brown'
        : ''
    }`"
  >
    {{ props.label }}
  </h3>
</template>

<style></style>
