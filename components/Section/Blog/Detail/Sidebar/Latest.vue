<script setup>
  const { t } = useI18n();
  const props = defineProps({
    data: {
      type: Array,
      required: true,
    },
  });
</script>

<template>
  <div class="space-y-4 md:space-y-6 lg:space-y-8">
    <h5 class="text-heading-s">{{ t("blog.latest") }}</h5>

    <ul class="space-y-4 md:space-y-6 lg:space-y-8">
      <li v-for="(item, index) in props.data" :key="index">
        <NuxtLinkLocale
          :to="`/blog/${item.slug}`"
          class="flex flex-wrap gap-1 py-1 border-b border-brown justify-between group"
        >
          <span class="text-heading-xs text-dark line-clamp-2 group-hover:text-brown transition">{{ item.title }}</span>
          <span class="text-dark-500">{{ dateFormatter(item.date) }}</span>
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>

<style></style>
