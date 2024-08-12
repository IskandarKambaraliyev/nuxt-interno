<script setup>
  const { t } = useI18n();

  const sectionContent = [
    {
      title: "about.main.services.title",
      text: "about.main.services.text",
      img: "https://i.ibb.co/YbKN9RK/about-1.png",
      link: {
        to: "/services",
        label: "about.main.services.link",
      },
    },
    {
      title: "about.main.projects.title",
      text: "about.main.projects.text",
      img: "https://i.ibb.co/vXrcK0B/about-2.png",
      link: {
        to: "/projects",
        label: "about.main.projects.link",
      },
    },
  ];
</script>

<template>
  <section class="section">
    <div class="container space-y-12 md:space-y-16 lg:space-y-20">
      <div
        v-for="(item, index) in sectionContent"
        :key="index"
        class="flex flex-col md:flex-row-reverse md:even:flex-row md:items-center gap-y-[2rem] md:gap-x-[2.5rem] lg:gap-x-[3rem]"
      >
        <div
          class="w-full md:w-1/2 lg:w-[55%] aspect-[16/9] rounded-[2rem] mdrounded-[2.5rem] lg:rounded-[3rem] overflow-hidden"
        >
          <img
            width="677"
            height="381"
            :src="item?.img"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex-1">
          <h3 class="text-heading-l text-dark">{{ t(item.title) }}</h3>
          <p class="text-body-m text-dark-500 mt-3 mb-5 md:mt-6 md:mb-10">
            {{ t(item.text) }}
          </p>
          <UiLinkButton
            :to="item.link.to"
            :label="item.link.label"
            class="max-w-max"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
