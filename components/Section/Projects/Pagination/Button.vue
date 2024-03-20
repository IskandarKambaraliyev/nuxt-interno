<script setup>
  const route = useRoute();
  const router = useRouter();
  const props = defineProps({
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    item: {
      type: Number,
      required: true,
    },
  });
</script>

<template>
  <button
    @click="
      router.push({
        query: {
          category: route.query.category,
          page: item,
        },
      })
    "
    class="size-12 rounded-full border border-light transition text-dark hover:bg-light truncate overflow-hidden text-body-m flex-center"
    :class="{
      '!bg-brown border-transparent !text-white cursor-default': props?.active,
    }"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped></style>
