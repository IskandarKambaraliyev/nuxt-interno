<script setup>
  const route = useRoute();
  const router = useRouter();
  const { t, locale } = useI18n();

  useSeoMeta({
    title: t("ogBlog"),
    ogTitle: t("ogBlog"),
    twitterTitle: t("ogBlog"),
    ogImage: "/og-blog.png",
  });

  const page = ref(route.query.page || 1);

  const { data, error } = await useFetch(
    () => `/api/${locale.value}/blogs?page=${page.value}`
  );

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }

  const headImg =
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const breadcrumbs = [
    {
      label: "breadcrumbs.home",
      to: "/",
    },
    {
      label: "breadcrumbs.blog",
    },
  ];
</script>

<template>
  <BaseHead :title="t('blogs.title')" :img="headImg" :links="breadcrumbs" />
  <SectionBlogLatest :data="data?.latest" />
  <section class="section">
    <div class="container">
      <h2 class="text-heading-l text-dark mb-6">{{ t("blogs.title") }}</h2>
      <BaseBlogs :data="data" />
    </div>
  </section>
</template>

<style></style>
