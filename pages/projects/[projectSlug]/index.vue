<script setup>
  const route = useRoute();

  const { data, error } = await useMyFetch(
    `/projects/${route.params.projectSlug}`
  );

  if(error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    })
  }
</script>

<template>
  <div>
    {{ route.params.projectSlug }}
  </div>
</template>

<style></style>
