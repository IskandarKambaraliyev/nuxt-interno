<script setup>
</script>

<template>
  <section class="text-dark-500 hero">
    <div
      class="container relative rounded-[3rem] md:rounded-[3.5rem] lg:rounded-[4rem] overflow-hidden"
    >
      <div class="absolute inset-0">
        <!-- <NuxtImg
          preload
          src="/hero.png"
          provider="ipx"
          format="webp"
          sizes="1200px"
          class="w-full h-full object-cover select-none"
          :placeholder="[60, 40, 5, 10]"
          alt="Hero image"
        /> -->
        <img
          src="https://i.ibb.co/f4CBk6t/hero.png"
          class="w-full h-full object-cover select-none"
        />
      </div>
      <div
        class="relative content min-h-[70svh] p-4 md:p-8 lg:p-12 flex flex-col justify-center items-start space-y-5 max-w-[32rem]"
      >
        <h1 class="font-dm text-dark text-heading-xl">
          Let Your Home Be Unique
        </h1>
        <p class="text-body-m">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <UiLinkButton
          label="get started"
          to="/services"
          class="capitalize"
          color="dark"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
