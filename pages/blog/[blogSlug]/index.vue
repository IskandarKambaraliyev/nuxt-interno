<script setup>
  const route = useRoute();
  const router = useRouter();
  const { t } = useI18n();

  const { data, error } = await useMyFetch(`/blogs/${route.params.blogSlug}`);

  if (data.value) {
    useSeoMeta({
      title: `${data.value.blog.title} - Interno`,
      ogTitle: `${data.value.blog.title} - Interno`,
      twitterTitle: `${data.value.blog.title} - Interno`,
      ogImage: data.value.blog.image,
      articleAuthor: "Interno",
      articleTag: data.value.blog.tags,
    });
  } else {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }

  onMounted(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  });

  const breadcrumb = [
    {
      to: "/",
      label: t("breadcrumbs.home"),
    },
    {
      to: "/blog",
      label: t("breadcrumbs.blog"),
    },
    {
      label: data.value.blog.title,
    },
  ];
</script>

<template>
  <BaseHead
    :title="data.blog?.title"
    :img="data.blog?.image"
    :links="breadcrumb"
  />
  <section class="section" v-if="data">
    <div class="container grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-12">
      <div class="lg:col-span-2">
        <SectionBlogDetailContent :data="data" />
      </div>
      <div class="flex flex-col col-span-1">
        <SectionBlogDetailSidebar :data="data" />
      </div>
    </div>
  </section>
</template>

<style></style>
