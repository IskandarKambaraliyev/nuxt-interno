<script setup>
  const route = useRoute();
  const router = useRouter();

  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });

  watch(
    () => route.query.page,
    () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  );

  console.log(props.data);
</script>

<template>
  <div>
    <div class="flex flex-col">
      <button
        v-for="item in data.totalPages"
        :key="item"
        @click="
          router.push({
            query: {
              category: route.query.category,
              page: item,
            },
          })
        "
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<style></style>
