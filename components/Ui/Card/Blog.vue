<script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });

  // console.log(props.item);

  const loading = ref(true);

  onMounted(() => {
    loading.value = true;
  });

  const handleLoad = () => {
    loading.value = false;
  };
</script>

<template>
  <div
    class="rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] border border-light cursor-pointer p-4 lg:p-5 flex flex-col gap-4 lg:gap-5 select-none bg-white transition duration-300 ease-in-out group"
    :class="{ 'hover:bg-light': !loading }"
  >
    <div
      v-if="item.image"
      class="w-full aspect-[1/1] overflow-hidden rounded-t-[1.5rem] md:rounded-t-[2rem] lg:rounded-t-[2.25rem] relative"
    >
      <img
        width="360"
        height="360"
        :src="item.image"
        :alt="`Blog article - ${item?.title}`"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-300 ease-in-out"
      />
    </div>

    <div class="flex-1 flex flex-col justify-between gap-4 lg:gap-5">
      <h4 class="text-heading-s line-clamp-3 text-dark">{{ item.title }}</h4>

      <div class="flex items-center justify-between flex-wrap">
        <span class="text-base text-dark-500">
          {{ dateFormatter(item.date) }}
        </span>

        <div
          class="size-12 rounded-full bg-light flex-center text-dark group-hover:bg-white transition duration-300 ease-in-out"
        >
          <UIcon
            name="i-heroicons-chevron-right transition duration-300 ease-in-out"
            class="size-1/2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
