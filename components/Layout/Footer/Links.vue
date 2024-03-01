<script setup>
  const route = useRoute();

  const props = defineProps({
    links: {
      type: Array,
      required: true,
    },
  });

  function checkActive(url, exact = false) {
    if (url === "/") {
      return route.fullPath === url;
    } else if (url === null) {
      return false;
    } else {
      if (exact) {
        return route.fullPath === url;
      }
      return route.fullPath.includes(url);
    }
  }
</script>

<template>
  <div class="flex flex-wrap items-start gap-x-12 gap-y-4">
    <div v-for="(item, index) in props?.links" :key="index">
      <h5 class="capitalize text-heading-s mb-4">{{ item.title }}</h5>
      <ul class="space-y-2">
        <li v-for="(link, i) in item?.links" :key="i" class="max-w-[15rem]">
          <NuxtLink
            :to="link?.to"
            class="capitalize text-body-m transition hover:text-brown"
            :class="`${checkActive(link?.to, link?.exact) ? 'text-brown' : ''}`"
          >
            {{ link?.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
