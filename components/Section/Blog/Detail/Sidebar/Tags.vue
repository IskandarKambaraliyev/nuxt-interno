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
    <h5 class="text-heading-s">{{ t("blog.tags") }}</h5>

    <ul class="flex flex-wrap gap-2">
      <li v-for="(item, index) in props.data.slice(0, 12)" :key="index">
        <NuxtLinkLocale
          :to="`/tag/${item}`"
          class="py-2 px-4 rounded-lg bg-light text-dark block hover:bg-dark hover:text-white transition text-body-s"
        >
          {{ item }}
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>

<style></style>
