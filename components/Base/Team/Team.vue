<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Pagination, Autoplay } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/pagination";

  const { t } = useI18n();

  const breakpoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1232: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  };

  const modules = [Pagination, Autoplay];

  const { data, error } = await useMyFetch(`/team`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <section class="bg-light section">
    <div class="container">
      <h3 class="text-center text-heading-l text-dark">{{ t("team") }}</h3>

      <div class="mt-8">
        <swiper
          :modules="modules"
          :breakpoints="breakpoints"
          :slidesPerView="1"
          :spaceBetween="16"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide
            v-for="(item, index) in data"
            :key="index"
            class="aspect-[3/4] relative rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden group select-none"
          >
            <NuxtLinkLocale class="w-full h-full" :to="`/team/${item.id}`">
              <NuxtImg
                width="296"
                height="394"
                format="webp"
                :src="item?.image"
                :placeholder="[9, 12, 5, 10]"
                class="object-cover w-full h-full"
                :alt="`Member - ${item?.name}`"
              />
            </NuxtLinkLocale>

            <div
              class="absolute inset-0 flex flex-col items-center invisible gap-8 p-4 text-center transition-all duration-500 ease-in-out scale-105 bg-white opacity-0 justify-evenly group-hover:opacity-100 group-hover:scale-100 group-hover:visible"
            >
              <div class="flex flex-col">
                <span class="text-heading-s line-clamp-2 text-dark">
                  {{ item?.name }}
                </span>
                <span class="text-base truncate text-dark-500">
                  {{ item?.position }}
                </span>
              </div>

              <div class="flex flex-wrap gap-4">
                <NuxtLinkLocale
                  :to="item.social.facebook"
                  v-if="item.social.facebook"
                  target="_blank"
                >
                  <UIcon
                    class="transition size-6 text-dark-500 hover:text-brown"
                    name="i-bxl-facebook"
                    dynamic
                  />
                </NuxtLinkLocale>
                <NuxtLinkLocale
                  :to="item.social.twitter"
                  v-if="item.social.twitter"
                  target="_blank"
                >
                  <UIcon
                    class="transition size-6 text-dark-500 hover:text-brown"
                    name="i-bxl-twitter"
                    dynamic
                  />
                </NuxtLinkLocale>
                <NuxtLinkLocale
                  :to="item.social.linkedin"
                  v-if="item.social.linkedin"
                  target="_blank"
                >
                  <UIcon
                    class="transition size-6 text-dark-500 hover:text-brown"
                    name="i-bxl-linkedin"
                    dynamic
                  />
                </NuxtLinkLocale>
                <NuxtLinkLocale
                  :to="item.social.instagram"
                  v-if="item.social.instagram"
                  target="_blank"
                >
                  <UIcon
                    class="transition size-6 text-dark-500 hover:text-brown"
                    name="i-bxl-instagram"
                    dynamic
                  />
                </NuxtLinkLocale>
              </div>

              <div class="flex flex-col">
                <NuxtLinkLocale
                  :to="`tel:${item.contact.phone}`"
                  class="transition text-body-m text-dark-500 hover:text-brown"
                  target="_blank"
                >
                  {{ item.contact.phone }}
                </NuxtLinkLocale>
                <NuxtLinkLocale
                  :to="`mailto:${item.contact.email}`"
                  class="transition text-body-m text-dark-500 hover:text-brown"
                  target="_blank"
                >
                  {{ item.contact.email }}
                </NuxtLinkLocale>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style></style>
