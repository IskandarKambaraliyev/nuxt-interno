<script setup>
  import aboutImg from "~/assets/images/main/about/about.png";

  const { t } = useI18n();
</script>

<template>
  <section class="section">
    <div
      class="container grid grid-cols-1 lg:grid-cols-2 gap-8 relative rounded-[3rem] md:rounded-[5rem] lg:rounded-none max-lg:overflow-hidden"
    >
      <div
        class="flex flex-col items-start relative max-lg:py-16 max-lg:px-8 max-lg:bg-white/80 space-y-8 lg:my-16"
      >
        <UiTitle :label="t('main.about.title')" />
        <p class="text-body-m text-dark-500">
          {{ t("main.about.text") }}
        </p>
        <NuxtLink
          class="flex items-center gap-2 md:gap-4 group"
          :to="`tel:${t('main.about.link.phone')}`"
          target="_blank"
        >
          <div
            class="p-4 rounded-full bg-brown lg:bg-light text-white lg:text-brown flex-center group-hover:bg-brown group-hover:text-white transition-all"
          >
            <UIcon
              name="i-heroicons-phone"
              dynamic
              class="w-6 h-6 lg:w-8 lg:h-8"
            />
          </div>
          <div class="flex flex-col">
            <span class="text-body-l !font-bold text-dark">
              {{ t("main.about.link.phone") }}
            </span>
            <p class="text-body-m text-dark-500">
              {{ t("main.about.link.label") }}
            </p>
          </div>
        </NuxtLink>

        <UiLinkButton :label="t('main.about.btn')" to="/about" />
      </div>
      <div
        class="max-lg:absolute z-[-1] max-lg:inset-0 lg:max-h-[40rem] overflow-hidden lg:rounded-none lg:rounded-tr-[50%] lg:rounded-bl-[10rem]"
      >
        <NuxtImg
          width="37.5rem"
          height="40rem"
          src="https://i.ibb.co/JB03FWK/about.png"
          alt=""
          class="w-full h-full object-cover"
          :placeholder="[2, 3, 5, 10]"
        />
      </div>
    </div>
  </section>
</template>

<style></style>
