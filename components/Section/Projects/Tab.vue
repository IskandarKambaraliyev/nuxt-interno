<script setup>
  const { t } = useI18n();
  const props = defineProps({
    category: {
      type: String,
      required: true,
    },
    current: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  });

  const checkCategory = () => {
    return props.category === props.current;
  };
</script>

<template>
  <button
    @click="
      $router.push({
        query: {
          category,
          page: 1
        },
      })
    "
    class="w-full min-w-max py-4 md:py-5 lg:py-6 px-8 md:px-10 lg:px-12 rounded-2xl hover:bg-light cursor-pointer transition-all text-body-m tracking-wide max-md:border border-brown"
    :class="{
      '!bg-brown !cursor-default !text-white': checkCategory('bathroom'),
    }"
  >
    {{ t(props.label) }}
  </button>
</template>

<style></style>
