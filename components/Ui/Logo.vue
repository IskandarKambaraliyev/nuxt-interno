<script setup>
  const props = defineProps({
    isLink: {
      type: Boolean,
      default: true,
    },
  });
</script>

<template>
  <NuxtLink
    :to="props.isLink ? '/' : null"
    class="flex items-center space-x-2.5"
  >
    <div class="w-[2.125rem] aspect-[1/1] overflow-hidden">
      <svg
        width="2.125rem"
        height="2.125rem"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-auto"
      >
        <path
          d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
          fill="#CDA274"
        />
      </svg>
    </div>
    <span class="text-logo text-dark" :class="`${props.isLink ? '' : 'select-text'}`">Interno</span>
  </NuxtLink>
</template>

<style></style>
