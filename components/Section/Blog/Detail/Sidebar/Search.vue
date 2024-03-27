<script setup>
  const { t, locale } = useI18n();
  const route = useRoute();
  const router = useRouter();

  const search = ref(route.query.search || "");

  const { data, error } = await useFetch(
    () => `/api/${locale.value}/blogs?search=${search.value}`
  );

  watch(search, (newVal) => {
    router.push({ query: { search: newVal ? newVal : undefined } });
  });
</script>

<template>
  <div class="relative">
    <input
      type="text"
      v-model="search"
      class="bg-light py-4 pl-8 pr-[5.5rem] w-full peer rounded-lg ring-0 ring-transparent focus:outline-none focus:ring-2 focus:ring-brown transition-all text-body-m placeholder:text-dark-500/50"
      :placeholder="t('blog.search')"
    />

    <UIcon
      name="i-heroicons-magnifying-glass-20-solid"
      class="absolute top-1/2 right-8 size-6 -translate-y-1/2"
    />

    <Transition name="fade-300">
      <ul v-if="data && search" class="result">
        <li v-for="(item, index) in data.blogs.slice(0, 10)" :key="index">
          <NuxtLinkLocale
            :to="`/blog/${item?.slug}`"
            class="py-2 px-4 flex items-center justify-between flex-wrap gap-x-4 gap-y-1 group"
          >
            <span
              class="text-dark text-heading-xs group-hover:text-brown transition line-clamp-2"
            >
              {{ item?.title }}
            </span>
            <span
              class="text-dark-500 text-base group-hover:text-brown transition"
            >
              {{ dateFormatter(item.date) }}
            </span>
          </NuxtLinkLocale>
        </li>
        <li v-if="!data.blogs.length && search">
          <span class="py-2 px-4 text-body-m block text-dark-500">
            Nothing found
          </span>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
  .result {
    @apply bg-light shadow-lg invisible peer-focus:visible divide-y divide-brown;
    position: absolute;
    top: calc(100% + 1rem);
    left: 0;
    z-index: 1;
    width: 100%;
    overflow: hidden;
    border-radius: 0.5rem;

    &:hover {
      visibility: visible;
    }
  }
</style>
