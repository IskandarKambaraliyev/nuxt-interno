<script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });

  const loading = ref(false);
</script>

<template>
  <div class="group flex flex-col gap-4 cursor-pointer">
    <div class="w-full h-auto max-h-[40rem] overflow-hidden">
      <img
        v-if="item.image"
        :src="item.image"
        class="w-full h-auto max-h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        :alt="`${item.id}) Image of ${item.title}`"
      />
    </div>
    <div class="flex items-center justify-between gap-4">
      <div class="space-y-1 flex-1">
        <h5 class="font-dm text-heading-s line-clamp-1">{{ item.title }}</h5>
        <span class="text-dark-500 text-body-m">
          {{ item.category.title }}
        </span>
      </div>
      <div
        class="size-12 md:size-14 lg:size-16 flex-center bg-light rounded-full group-hover:bg-brown group-hover:text-white transition-colors duration-300 ease-in-out text-dark"
      >
        <UIcon
          name="i-heroicons-chevron-right-solid"
          class="size-6 md:size-7 lg:size-8"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
