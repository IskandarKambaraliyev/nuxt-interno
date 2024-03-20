<script setup>
  const { t, locale } = useI18n();

  const route = useRoute();
  const router = useRouter();

  if (
    route.query.category !== "bathroom" &&
    route.query.category !== "bedroom" &&
    route.query.category !== "kitchen" &&
    route.query.category !== "living-area"
  ) {
    navigateTo({
      query: {
        category: "bathroom",
        page: route.query.page || 1,
      },
    });
  }

  const currentCategory = ref(route.query.category || "bathroom");

  const currentPage = ref(route.query.page || 1);

  watch(
    () => route.query.category,
    (newVal) => {
      currentCategory.value = newVal;
    }
  );

  watch(
    () => route.query.page,
    (newVal) => {
      currentPage.value = newVal;
    }
  );

  const { data, error } = await useFetch(
    () =>
      `/api/${locale.value}/projects/?page=${currentPage.value}&category=${currentCategory.value}`
  );

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <BaseHead
    :title="t('projects.title')"
    img="https://i.ibb.co/GCXJz1z/projects.png"
    :links="[
      { label: t('breadcrumbs.home'), to: '/' },
      { label: t('breadcrumbs.projects') },
    ]"
  />
  <div class="my-[5rem]">
    <div class="container">
      <SectionProjectsCategory :current="currentCategory" />

      <SectionProjects :data="data" />

      <SectionProjectsPagination :data="data.pagination" />
    </div>
  </div>
</template>

<style></style>
