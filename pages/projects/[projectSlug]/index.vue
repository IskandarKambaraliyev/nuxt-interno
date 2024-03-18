<script setup>
  const route = useRoute();
</script>

<template>
  <div>
    {{ route.params.projectSlug }}
  </div>
</template>

<style></style>
