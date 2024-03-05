<script setup>
  import aboutImg from "~/assets/images/main/about/about.png";
</script>

<template>
  <section class="my-16">
    <div
      class="container grid grid-cols-1 lg:grid-cols-2 gap-8 relative rounded-[3rem] md:rounded-[5rem] lg:rounded-none max-lg:overflow-hidden"
    >
      <div
        class="flex flex-col items-start relative max-lg:py-16 max-lg:px-8 max-lg:bg-white/80 space-y-8 lg:my-16"
      >
        <UiTitle label="We Create The Art Of Stylish Living Stylishly" />
        <p class="text-body-m text-dark-500">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <NuxtLink
          class="flex items-center gap-2 md:gap-4 group"
          to="tel:012345678"
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
            <span class="text-body-l !font-bold text-dark">012345678</span>
            <p class="text-body-m text-dark-500">Call Us Anytime</p>
          </div>
        </NuxtLink>

        <UiLinkButton
          label="Get free Estimate"
          color="dark"
          to="/about"
          class="max-sm:w-full w-max"
        />
      </div>
      <div
        class="max-lg:absolute z-[-1] max-lg:inset-0 lg:max-h-[40rem] overflow-hidden lg:rounded-none lg:rounded-tr-[50%] lg:rounded-bl-[10rem]"
      >
        <img
          width="37.5rem"
          height="40rem"
          :src="aboutImg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<style></style>
