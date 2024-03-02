<script setup>

const props = defineProps({
  to: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <NuxtLink v-if="props.to" :to="props.to" class="flex-center gap-2 group">
    <span class="text-body-s !font-semibold">{{ props?.label }}</span>
    <div class="text-brown group-hover:translate-x-1 transition">
      <UIcon name="i-heroicons-arrow-right-16-solid" class="w-4 h-4 md:w-5 md:h-5" dynamic />
    </div>
  </NuxtLink>
  <div v-else class="flex-center gap-2 group">
    <span class="text-body-s !font-semibold">{{ props?.label }}</span>
    <div class="text-brown group-hover:translate-x-1 transition">
      <UIcon name="i-heroicons-arrow-right-16-solid" class="w-4 h-4 md:w-5 md:h-5" dynamic />
    </div>
  </div>
</template>

<style></style>