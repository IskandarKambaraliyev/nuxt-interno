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
  <div
    class="p-4 md:p-6 lg:p-8 rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] bg-light md:space-y-2 lg:space-y-4"
  >
    <h5 class="text-heading-s">{{ t("blog.categories") }}</h5>

    <ul class="divide-y divide-brown">
      <li v-for="(item, index) in props.data" :key="index">
        <NuxtLinkLocale
          :to="`/blog?category=${item.slug}`"
          class="text-body-m text-dark-500 hover:text-brown py-4 block"
        >
          {{ item.title }}
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>

<style></style>
