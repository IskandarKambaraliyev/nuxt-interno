<script setup>
  const { t } = useI18n();
  const { data, error } = await useMyFetch(`/blogs?limit=3`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="text-center max-w-[45rem] mx-auto mb-8 md:mb-10 lg:mb-12">
        <UiTitle :label="t('main.blogs.title')" />
        <p class="text-body-m text-dark-500">{{ t("main.blogs.text") }}</p>
      </div>
      <BaseBlogs :data="data" />
    </div>
  </section>
</template>

<style></style>
