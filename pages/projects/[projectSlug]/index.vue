<script setup>
  const { t } = useI18n();
  const route = useRoute();

  onMounted(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  });

  const { data, error } = await useMyFetch(
    `/projects/${route.params.projectSlug}`
  );

  useSeoMeta({
    title: `${data.value.title} - Interno`,
    ogTitle: `${data.value.title} - Interno`,
    twitterTitle: `${data.value.title} - Interno`,
    ogImage: data.value.image,
    articleTag: data.value.tags,
  });

  useHead({
    li
  })

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }

  const headLinks = [
    {
      label: t("breadcrumbs.home"),
      to: "/",
    },
    {
      label: t("breadcrumbs.projects"),
      to: "/projects?category=bathroom&page=1",
    },
    {
      label: data.value?.title,
    },
  ];
</script>

<template>
  <BaseHead
    :img="data.head_image ? data.head_image : data.image"
    :links="headLinks"
  />
  <section class="my-20">
    <div class="container">
      <div
        class="flex max-lg:flex-col-reverse items-start gap-x-8 gap-y-4 mb-20"
      >
        <SectionProjectsDetailInfo :data="data" :intercepted="false" />
        <SectionProjectsDetail
          :data="data"
          :intercepted="false"
          class="flex-1"
        />
      </div>
      <BaseImage
        :src="data.image"
        :large="data.image_large ? data.image_large : data.image"
      />
    </div>
  </section>
</template>

<style></style>
