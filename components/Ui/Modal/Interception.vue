<script setup>
  const props = defineProps({
    modalClass: {
      type: String,
      required: false,
    },
  });
  const emit = defineEmits(["close"]);
</script>

<template>
  <div class="fixed inset-0 z-[50] flex-center backdrop-blur">
    <div
      class="w-full h-[100svh] overflow-y-auto py-4 max-md:pt-14 max-md:pb-20 relative"
    >
      <div class="fixed inset-0 bg-black/50" @click="emit('close')"></div>
      <button
        class="absolute md:fixed top-4 right-4 z-[1] group transition"
        @click="emit('close')"
      >
        <UIcon
          name="i-heroicons-x-mark-16-solid"
          class="size-6 text-white/80 group-hover:text-white transition"
        />
      </button>
      <div
        class="interception bg-white overflow-y-auto relative rounded-lg px-4 py-8 mx-auto"
        :class="`${modalClass}`"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .interception {
    max-width: 70rem;
    width: calc(100% - 10rem);

    @media screen and (max-width: 767px) {
      width: calc(100% - 2rem);
      padding: 1rem;
    }
  }
</style>
