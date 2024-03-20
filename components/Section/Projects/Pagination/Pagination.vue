<script setup>
  const route = useRoute();
  const router = useRouter();

  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });

  watch(
    () => route.query.page,
    () => {
      // window.scrollTo({ top: 0, behavior: "smooth" });
      window.scrollTo({ top: 0 });
    }
  );
</script>

<template>
  <div>
    <div class="flex-center flex-wrap gap-4">
      <SectionProjectsPaginationButton
        :item="data.page - 1"
        v-if="data.hasPrevPage"
      >
        <UIcon name="i-heroicons-chevron-left-solid" class="size-6" />
      </SectionProjectsPaginationButton>
      <SectionProjectsPaginationButton
        v-for="item in data.totalPages"
        :key="item"
        :item="item"
        :active="data.page === item"
      >
        {{ item }}
      </SectionProjectsPaginationButton>
      <SectionProjectsPaginationButton
        :item="data.page + 1"
        v-if="data.hasNextPage"
      >
        <UIcon
          name="i-heroicons-chevron-right-solid"
          class="size-4 md:size-5 lg:size-6"
        />
      </SectionProjectsPaginationButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .pagination_btn {
    @apply size-8 md:size-10 lg:size-12 rounded-full border border-brown transition hover:bg-brown hover:text-white;

    &.active {
      @apply bg-light border-transparent text-dark cursor-default;
    }
  }
</style>
