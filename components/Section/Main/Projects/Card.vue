<script setup>
  const { t } = useI18n();

  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  });
</script>

<template>
  <div class="space-y-6 group cursor-pointer">
    <div
      class="w-full aspect-[1/1] overflow-hidden"
      :class="{
        'max-md:rounded-[2rem] md:rounded-tr-[3.5rem] lg:rounded-tr-[5rem]':
          props.index === 1,
        'max-md:rounded-[2rem] md:rounded-tl-[3.5rem] lg:rounded-tl-[5rem]':
          props.index === 2,
        'max-md:rounded-[2rem] md:rounded-br-[3.5rem] lg:rounded-br-[5rem]':
          props.index === 3,
        'max-md:rounded-[2rem] md:rounded-bl-[3.5rem] lg:rounded-bl-[5rem]':
          props.index === 4,
      }"
    >
      <img
        width="35.5rem"
        height="35.5rem"
        :src="item.image"
        class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />
    </div>
    <div class="flex items-center justify-between gap-4">
      <div class="space-y-1 flex-1">
        <h5 class="font-dm text-heading-s line-clamp-1">{{ item.title }}</h5>
        <NuxtLinkLocale
          :to="`/projects?category=${item.category.slug}`"
          class="text-dark-500 text-body-m hover:text-brown"
        >
          {{ item.category.title }}
        </NuxtLinkLocale>
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
