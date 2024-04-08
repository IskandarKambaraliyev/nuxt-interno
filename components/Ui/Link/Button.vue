<script setup>
  const { t } = useI18n();
  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: "dark",
    },
  });
</script>

<template>
  <NuxtLink
    :to="props?.to"
    class="flex-center gap-2 md:gap-4 group transition py-4 px-8 md:py-5 md:px-10 lg:py-6 lg:px-12 rounded-[1rem] lg:rounded-[1.125rem] hover:opacity-90 active:scale-105"
    :class="`${
      props.color === 'dark'
        ? 'bg-dark'
        : props.color === 'brown'
        ? 'bg-brown'
        : ''
    }`"
  >
    <span class="text-white text-body-s !font-semibold">
      {{ t(props?.label) }}
    </span>
    <div
      class="transition-all w-4 group-hover:w-6 md:group-hover:w-7 md:w-5 flex justify-end"
      :class="`${
        props.color === 'dark'
          ? 'text-brown'
          : props.color === 'brown'
          ? 'text-dark'
          : ''
      }`"
    >
      <UIcon
        name="i-heroicons-arrow-right-16-solid"
        class="w-4 h-4 md:w-5 md:h-5"
        dynamic
      />
    </div>
  </NuxtLink>
</template>

<style></style>
