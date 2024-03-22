<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });

  // console.log(props.data);

  const blogSlug = ref(null);

  const handleOpen = (slug) => {
    blogSlug.value = slug;
  };
</script>

<template>
  <Transition name="fade-300-blur">
    <InterceptionBlog v-model="blogSlug" v-if="blogSlug" />
  </Transition>
  <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
    <UiCardBlog
      v-for="(item, index) in props.data.blogs"
      :key="item.id"
      :item="item"
      @click="handleOpen(item?.slug)"
    />
  </div>
</template>

<style></style>
