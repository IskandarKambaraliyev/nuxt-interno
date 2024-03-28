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
      required: false,
    },
    clickable: {
      type: Boolean,
      required: false,
      default: true,
    },
  });
</script>

<template>
  <button
    @click="
      props.clickable &&
        router.push({
          query: {
            category: route.query.category,
            page: item,
          },
        })
    "
    class="size-12 rounded-full border border-light transition text-dark truncate overflow-hidden text-body-m flex-center bg-white cursor-default"
    :class="{
      '!bg-brown border-transparent !text-white cursor-default': props?.active,
      'hover:bg-light cursor-pointer': props.clickable,
    }"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped></style>
