<script setup>
  const route = useRoute();
  const router = useRouter();
  const { t } = useI18n();

  const { data, error } = await useMyFetch(`/blogs/${route.params.blogSlug}`);

  useSeoMeta({
    title: `${data.value.blog.title} - Interno`,
    ogTitle: `${data.value.blog.title} - Interno`,
    twitterTitle: `${data.value.blog.title} - Interno`,
    ogImage: data.value.blog.image,
  });

  onMounted(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  });
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionBlogDetailContent :data="data" />
    </div>
  </section>
</template>

<style></style>
