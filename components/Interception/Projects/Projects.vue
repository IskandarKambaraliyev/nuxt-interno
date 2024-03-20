<script setup>
  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(["update:modelValue"]);

  const handleClose = () => {
    emit("update:modelValue", null);
    window.history.back();
  };

  const handlePopstate = () => {
    emit("update:modelValue", null);
  };

  onMounted(() => {
    window.history.pushState({}, "", `/projects/${props.modelValue}`);

    // Listen for the popstate event
    window.addEventListener("popstate", handlePopstate);

    document.body.style.overflow = "hidden";
  });

  onBeforeUnmount(() => {
    window.removeEventListener("popstate", handlePopstate);
    document.body.style.overflow = "auto";
  });

  const { data, error } = await useMyFetch(`/projects/${props.modelValue}`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
  useSeoMeta({
    title: data.value.title,
  });
</script>

<template>
  <div class="fixed z-[50] inset-0 backdrop-blur">
    <div
      class="w-full h-[100svh] overflow-y-auto py-4 max-md:pt-14 max-md:pb-20 relative"
    >
      <button
        class="absolute md:fixed top-4 right-4 z-[1] group transition"
        @click="handleClose"
      >
        <UIcon
          name="i-heroicons-x-mark-16-solid"
          class="size-6 text-white/80 group-hover:text-white transition"
        />
      </button>
      <div
        class="fixed inset-0 bg-black/50 cursor-pointer"
        @click="handleClose"
      />
      <div class="bg-white p-8 rounded-lg project mx-auto relative">
        <div
          class="flex max-lg:flex-col-reverse items-start gap-x-8 gap-y-4 mb-20"
        >
          <SectionProjectsDetailInfo :data="data" :intercepted="true" />
          <SectionProjectsDetail
            :data="data"
            :intercepted="true"
            class="flex-1"
          />
        </div>
        <BaseImage
          :src="data.image"
          :large="data.image_large ? data.image_large : data.image"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .project {
    max-width: 73rem;
    width: calc(100% - 10rem);
    overflow-y: auto;

    @media screen and (max-width: 767px) {
      width: calc(100% - 2rem);
      padding: 1rem;
    }
  }
</style>
