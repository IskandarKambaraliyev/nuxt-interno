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
  <section class="section" v-if="props.data">
    <div class="container space-y-6">
      <h2 class="text-heading-l text-dark">{{ t("blogs.latest") }}</h2>

      <NuxtLinkLocale
        :to="`/blog/${props.data.slug}`"
        class="border border-light rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 group hover:bg-light transition duration-300 ease-in-out"
      >
        <div
          class="aspect-[4/3] rounded-[0.75rem] md:rounded-[1.25rem] lg:rounded-[1.75rem] overflow-hidden"
        >
          <NuxtImg
            width="539"
            height="434"
            format="webp"
            :placeholder="[24, 18, 5, 10]"
            :src="data.image"
            class="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div class="space-y-6 md:space-y-8 flex flex-col justify-center">
          <div class="space-y-4 md:space-y-6">
            <h5 class="text-heading-s text-dark line-clamp-2">{{ data.title }}</h5>
            <div
              v-html="data.content"
              class="line-clamp-6 text-body-m text-dark-500"
            ></div>
          </div>
          <div class="flex items-center justify-between flex-wrap gap-4">
            <span class="text-body-m text-dark-500">
              {{ dateFormatter(data.date) }}
            </span>
            <div
              class="size-12 md:size-16 rounded-full bg-light flex-center group-hover:bg-brown duration-300 ease-in-out"
            >
              <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="size-1/2 text-dark group-hover:text-white transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </NuxtLinkLocale>
    </div>
  </section>
</template>

<style></style>
