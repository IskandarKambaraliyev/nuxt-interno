<script setup>

const colorMode = useColorMode();

onMounted(() => {
  colorMode.value = "light";
  localStorage.setItem("nuxt-color-mode", "light");
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
</style>