<script setup>
  const { t } = useI18n();

  const props = defineProps({
    limit: {
      type: Number,
      required: false,
    },
  });
  const serviceLinks = [
    {
      title: "serviceLinks.project.title",
      text: "serviceLinks.project.text",
      link: {
        label: "serviceLinks.project.link",
        to: "/services/project-plan",
      },
    },
    {
      title: "serviceLinks.interior.title",
      text: "serviceLinks.interior.text",
      link: {
        label: "serviceLinks.interior.link",
        to: "/services/interior-work",
      },
    },
    {
      title: "serviceLinks.retail.title",
      text: "serviceLinks.retail.text",
      link: {
        label: "serviceLinks.retail.link",
        to: "/services/retail-design",
      },
    },
    {
      title: "serviceLinks.art.title",
      text: "serviceLinks.art.text",
      link: {
        label: "serviceLinks.art.link",
        to: "/services/2d-3d-art-work",
      },
    },
    {
      title: "serviceLinks.interiorWork.title",
      text: "serviceLinks.interiorWork.text",
      link: {
        label: "serviceLinks.interiorWork.link",
        to: "/services/interior-work",
      },
    },
    {
      title: "serviceLinks.decoration.title",
      text: "serviceLinks.decoration.text",
      link: {
        label: "serviceLinks.decoration.link",
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
        <h4 class="text-heading-s text-dark">{{ t(item.title )}}</h4>
        <p class="text-body-m text-dark-500 mt-5 mb-8 flex-1">
          {{ t(item.text) }}
        </p>
        <UiLink :label="t(item.link.label)" />
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
