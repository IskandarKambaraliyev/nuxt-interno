<script setup>
const socialLinks = [
  {
    to: "https://www.facebook.com/",
    target: "_blank",
    icon: "i-bxl-facebook",
    title: "Facebook",
  },
  {
    to: "https://twitter.com/",
    target: "_blank",
    icon: "i-ri-twitter-x-line",
    title: "Twitter",
  },
  {
    to: "https://www.linkedin.com/",
    target: "_blank",
    icon: "i-bxl-linkedin",
    title: "Linkedin",
  },
  {
    to: "https://www.instagram.com/",
    target: "_blank",
    icon: "i-bxl-instagram",
    title: "Instagram",
  },
];
</script>

<template>
  <ul class="flex items-center space-x-4">
    <li v-for="(item, index) in socialLinks" :key="index">
      <NuxtLink :to="item?.to" :target="item?.target" class="group relative">
        <UIcon :name="item?.icon" :dynamic="true" class="w-5 h-5 group-hover:text-brown transition" />
        <div
          class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 -left-4 lg:left-1/2 lg:-translate-x-1/2 bg-dark rounded-lg p-2 title before:bg-dark">
          <span class="text-white">
            {{ item?.title }}
          </span>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.group {
  .title {
    bottom: calc(100% + 0.5rem);

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) translateY(0.25rem) rotate(45deg);
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;

      @media screen and (max-width: 1232px) {
        left: 1rem;
        transform: translateX(0) translateY(0.25rem) rotate(45deg);
      }
    }
  }
}
</style>
