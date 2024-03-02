<script setup>
  const props = defineProps({
    limit: {
      type: Number,
      required: false,
    },
  });
  const serviceLinks = [
    {
      title: "Project Plan",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
      link: {
        label: "Read More",
        to: "/services/project-plan",
      },
    },
    {
      title: "Interior Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
      link: {
        label: "Read More",
        to: "/services/interior-work",
      },
    },
    {
      title: "Retail Design",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
      link: {
        label: "Read More",
        to: "/services/retail-design",
      },
    },
    {
      title: "2d/3d Art Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
      link: {
        label: "Read More",
        to: "/services/2d-3d-art-work",
      },
    },
    {
      title: "Interior Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
      link: {
        label: "Read More",
        to: "/services/interior-work",
      },
    },
    {
      title: "Decoration Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
      link: {
        label: "Read More",
        to: "/services/decoration-work",
      },
    },
  ];
</script>

<template>
  <ul
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12 md:my-16 list"
  >
    <li
      v-for="(item, index) in serviceLinks.slice(0, props?.limit)"
      :key="index"
    >
      <NuxtLink
        :to="item.link.to"
        class="text-center flex flex-col items-center py-8 px-4 md:py-10 md:px-6 lg:py-12 lg:px-8 rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] hover:bg-light border border-transparent max-lg:hover:border-light max-lg:border-[#e5e5e5] max-lg:bg-white/10 max-lg:backdrop-blur-sm group transition-all item"
      >
        <h4 class="text-heading-s text-dark">{{ item.title }}</h4>
        <p class="text-body-m text-dark-500 mt-5 mb-8 flex-1">
          {{ item.text }}
        </p>
        <UiLink :label="item.link.label" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  @media screen and (hover: none) {
    .list .item {
      background: #f4f0ec;
      border-color: transparent;
    }
  }
</style>
