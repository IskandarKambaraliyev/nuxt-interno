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
  <div class="container">
    <div class="flex-center flex-wrap gap-4">
      <BasePaginationButton :item="data.page - 1" v-if="data.hasPrevPage">
        <UIcon name="i-heroicons-chevron-left-solid" class="size-1/2" />
      </BasePaginationButton>

      <BasePaginationButton
        v-for="item in data.totalPages"
        :key="item"
        :item="item"
        :active="data.page === item"
        class="max-md:!hidden"
      >
        {{ item }}
      </BasePaginationButton>

      <BasePaginationButton
        :item="1"
        class="md:!hidden"
        v-if="!data.hasNextPage && data.totalPages >= 3"
      >
        {{ 1 }}
      </BasePaginationButton>

      <BasePaginationButton
        :clickable="false"
        class="md:!hidden"
        v-if="data.hasPrevPage && data.prevPage !== 1"
      >
        <UIcon
          name="i-heroicons-ellipsis-horizontal-20-solid"
          class="size-1/2"
        />
      </BasePaginationButton>

      <BasePaginationButton
        :item="data.prevPage"
        :active="false"
        class="md:!hidden"
        v-if="!data.hasNextPage || data.prevPage === 1"
      >
        {{ data.prevPage }}
      </BasePaginationButton>

      <BasePaginationButton
        :item="data.page"
        :active="tryUseNuxtApp"
        class="md:!hidden"
      >
        {{ data.page }}
      </BasePaginationButton>

      <BasePaginationButton
        :item="data.nextPage"
        :active="false"
        class="md:!hidden"
        v-if="!data.hasPrevPage || data.nextPage === data.totalPages"
      >
        {{ data.nextPage }}
      </BasePaginationButton>

      <BasePaginationButton
        class="md:!hidden"
        :clickable="false"
        v-if="data.hasNextPage && data.nextPage !== data.totalPages"
      >
        <UIcon
          name="i-heroicons-ellipsis-horizontal-20-solid"
          class="size-1/2"
        />
      </BasePaginationButton>

      <BasePaginationButton
        :item="data.totalPages"
        class="md:!hidden"
        v-if="!data.hasPrevPage && data.totalPages >= 3"
      >
        {{ data.totalPages }}
      </BasePaginationButton>

      <BasePaginationButton :item="data.page + 1" v-if="data.hasNextPage">
        <UIcon name="i-heroicons-chevron-right-solid" class="size-1/2" />
      </BasePaginationButton>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
