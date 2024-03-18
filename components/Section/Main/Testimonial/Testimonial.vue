<script setup>
  import img1 from "~/assets/images/main/testimonial/img-1.png";
  import img2 from "~/assets/images/main/testimonial/img-2.png";
  import img3 from "~/assets/images/main/testimonial/img-3.png";
  import img4 from "~/assets/images/main/testimonial/img-4.png";

  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Pagination, Autoplay } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/pagination";

  const {t} = useI18n();

  const breakpoints = {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1232: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  };

  const modules = [Pagination, Autoplay];

  const { data, error } = await useMyFetch(`/testimonials`);
</script>

<template>
  <section class="section testimonials">
    <div
      class="container py-8 px-4 md:py-10 md:px-8 lg:py-12 rounded-[3rem] md:rounded-[3.5rem] lg:rounded-[4rem] bg-light"
    >
      <UiTitle :label="t('main.testimonials.title')" class="text-center" />

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
            class="px-4 py-6 md:px-5 md:py-8 lg:px-6 lg:py-10 bg-white rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] select-none cursor-default"
          >
            <div class="flex items-center space-x-4 w-full">
              <div
                class="w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem] rounded-full overflow-hidden"
              >
                <NuxtImg
                  provider="ipx"
                  format="webp"
                  width="4rem"
                  height="4rem"
                  :src="item?.img"
                  :alt="`Testimonial image - ${item?.name}`"
                  class="w-full h-full object-cover"
                  :placeholder="[10,10,5,10]"
                />
              </div>
              <div class="flex flex-col items-start">
                <h6 class="text-heading-s text-dark">{{ item?.name }}</h6>
                <span class="text-body-s text-dark-500">
                  {{ item?.address }}
                </span>
              </div>
            </div>

            <div class="mt-4 md:mt-5 lg:mt-6">
              <p class="text-body-m text-dark-500">{{ item?.text }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .testimonials {
    .container {
      overflow: hidden;
      .swiper {
        overflow: unset;
      }
      .swiper-slide {
        min-height: 100% !important;
      }
      .swiper-pagination {
        bottom: -1.5rem;

        &-bullet {
          background-color: #cda274;
        }
      }
    }
  }
</style>
