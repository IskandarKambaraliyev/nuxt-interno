<script setup>
  const props = defineProps({
    current: {
      type: String,
      required: true,
    },
  });

  const changeCategory = (category) => {
    navigateTo({
      query: {
        category,
      },
    });
  };

  const checkCategory = (category) => {
    return category === props.current;
  };

  const tabCategories = [
    {
      label: "projects.tabs.bathroom",
      category: "bathroom",
    },
    {
      label: "projects.tabs.bedroom",
      category: "bedroom",
    },
    {
      label: "projects.tabs.kitchen",
      category: "kitchen",
    },
    {
      label: "projects.tabs.livingArea",
      category: "living-area",
    },
  ];
</script>

<template>
  <ul
    class="max-w-max w-full flex-wrap flex-center max-md:gap-x-4 max-md:gap-y-2 md:border border-brown rounded-[1.25rem] mx-auto md:overflow-hidden"
  >
    <li
      v-for="(item, index) in tabCategories"
      :key="index"
      class="max-[440px]:flex-1"
    >
      <SectionProjectsTab
        :category="item.category"
        :current="current"
        :label="item.label"
      />
    </li>
  </ul>
</template>

<style></style>
