<script setup>
  const { t } = useI18n();
  
  useSeoMeta({
    title: t("ogBlog"),
    ogTitle: t("ogBlog"),
    twitterTitle: t("ogBlog"),
    ogImage: "/og-blog.png",
  });
</script>

<template>
  <div>Blog page</div>
</template>

<style></style>
