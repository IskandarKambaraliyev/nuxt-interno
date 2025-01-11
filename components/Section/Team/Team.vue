<script setup>
  const { t } = useI18n();

  const { data } = await useMyFetch(`/team`);
</script>

<template>
  <section class="section">
    <div class="container">
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12"
      >
        <div v-for="(item, index) in data" :key="index" class="space-y-4">
          <NuxtLinkLocale :to="`/team/${item.id}`" class="w-full h-auto">
            <img
              width="300"
              height="400"
              :src="item.image"
              class="w-full rounded-[1rem] md:rounded-[1.5rem]"
            />
          </NuxtLinkLocale>
          <div class="text-center">
            <h5 class="text-heading-s text-dark">{{ item?.name }}</h5>
            <span class="text-body-s text-dark-500">{{ item.position }}</span>
            <div class="flex-center flex-wrap gap-4 mt-2">
              <NuxtLinkLocale
                v-if="item.social.facebook"
                :to="item.social.facebook"
                target="_blank"
                class="group"
              >
                <UIcon
                  name="i-bxl-facebook"
                  dynamic
                  class="size-4 md:size-5 lg:size-6 text-dark-500 group-hover:text-dark transition"
                />
              </NuxtLinkLocale>
              <NuxtLinkLocale
                v-if="item.social.twitter"
                :to="item.social.twitter"
                target="_blank"
                class="group"
              >
                <UIcon
                  name="i-bxl-twitter"
                  dynamic
                  class="size-4 md:size-5 lg:size-6 text-dark-500 group-hover:text-dark transition"
                />
              </NuxtLinkLocale>
              <NuxtLinkLocale
                v-if="item.social.linkedin"
                :to="item.social.linkedin"
                target="_blank"
                class="group"
              >
                <UIcon
                  name="i-bxl-linkedin"
                  dynamic
                  class="size-4 md:size-5 lg:size-6 text-dark-500 group-hover:text-dark transition"
                />
              </NuxtLinkLocale>
              <NuxtLinkLocale
                v-if="item.social.instagram"
                :to="item.social.instagram"
                target="_blank"
                class="group"
              >
                <UIcon
                  name="i-bxl-instagram"
                  dynamic
                  class="size-4 md:size-5 lg:size-6 text-dark-500 group-hover:text-dark transition"
                />
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
