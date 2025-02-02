<script setup>
  const route = useRoute();
  const router = useRouter();
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
    title: `${data.value.title} - Interno`,
    ogTitle: `${data.value.title} - Interno`,
    twitterTitle: `${data.value.title} - Interno`,
    ogImage: data.value.image,
  });

  watch(
    () => route.fullPath,
    () => {
      handlePopstate();
    }
  );
</script>

<template>
  <UiModalInterception @close="handleClose">
    <div class="flex max-lg:flex-col-reverse items-start gap-x-8 gap-y-4 mb-20">
      <SectionProjectsDetailInfo :data="data" :intercepted="true" />
      <SectionProjectsDetail :data="data" :intercepted="true" class="flex-1" />
    </div>
    <BaseImage
      :src="data.image"
      :large="data.image_large ? data.image_large : data.image"
    />
  </UiModalInterception>
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
