<script setup>
  const { t } = useI18n();
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <div class="space-y-8 md:space-y-10 lg:space-y-12">
    <SectionBlogDetailSidebarSearch />
    <SectionBlogDetailSidebarLatest :data="props.data.latestBlogs" />
    <!-- <SectionBlogDetailSidebarCategories :data="props.data.categories" /> -->
    <SectionBlogDetailSidebarTags :data="props.data.tags" />
  </div>
</template>

<style></style>
