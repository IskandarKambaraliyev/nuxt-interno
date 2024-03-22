<script setup>
  const { t } = useI18n();

  const props = defineProps({
    label: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <button v-if="props.title || props.icon">
    <UIcon :name="props?.icon" dynamic class="size-5 lg:size-6" />
  </button>
</template>

<style></style>
