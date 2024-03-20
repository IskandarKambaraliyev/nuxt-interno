<script setup>
const route = useRoute();

</script>

<template>
  <div>
    {{ route.params.tag }}
  </div>
</template>

<style>

</style>