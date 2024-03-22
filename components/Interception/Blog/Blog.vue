<script setup>
  const { t } = useI18n();
  const route = useRoute();
  const router = useRouter();
  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(["update:modelValue"]);

  const loading = ref(true);

  const handleClose = () => {
    emit("update:modelValue", null);
    window.history.back();
  };

  const handlePopstate = () => {
    emit("update:modelValue", null);
  };

  onMounted(() => {
    window.history.pushState({}, "", `/blog/${props.modelValue}`);
    loading.value = true;

    // Listen for the popstate event
    window.addEventListener("popstate", handlePopstate);

    document.body.style.overflow = "hidden";
  });

  onBeforeUnmount(() => {
    window.removeEventListener("popstate", handlePopstate);
    document.body.style.overflow = "auto";
  });

  const { data, error } = await useMyFetch(`/blogs/${props.modelValue}`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }

  useSeoMeta({
    title: `${data.value.blog.title} - Interno`,
    ogTitle: `${data.value.blog.title} - Interno`,
    twitterTitle: `${data.value.blog.title} - Interno`,
    ogImage: data.value.blog.image,
  });

  watch(
    () => route.fullPath,
    () => {
      handlePopstate();
    }
  );

  const handleLoad = () => {
    loading.value = false;
  };
</script>

<template>
  <UiModalInterception @close="handleClose">
    <SectionBlogDetailContent :data="data" />
  </UiModalInterception>
</template>
