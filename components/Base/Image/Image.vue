<script setup>
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    large: {
      type: String,
      required: true,
    },
  });

  const openModal = ref(false);

  const handleOpenModal = () => {
    openModal.value = true;
  };

  const handleCloseModal = () => {
    openModal.value = false;
  };
</script>

<template>
  <div>
    <div
      class="w-full aspect-[3/2] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] mx-auto relative"
    >
      <NuxtImg
        format="webp"
        width="1200"
        height="800"
        :src="props.src"
        :placeholder="[5, 5, 5, 10]"
        class="w-full h-full object-cover object-center select-none"
      />
      <button
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 md:size-20 lg:size-24 rounded-full bg-white flex-center group hover:bg-dark transition duration-300"
        @click="handleOpenModal"
      >
        <UIcon
          name="i-heroicons-magnifying-glass-20-solid"
          dynamic
          class="size-1/2 text-brown group-hover:text-white transition duration-300"
        />
      </button>
    </div>
    <Transition name="fade-300">
      <BaseImageModal v-model="openModal" :src="props.large" v-if="props.large && openModal" />
    </Transition>
  </div>
</template>

<style></style>
