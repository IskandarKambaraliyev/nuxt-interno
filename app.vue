<script setup>
  const { t } = useI18n();

  const colorMode = useColorMode();

  useSeoMeta({
    ogImage: "/og-image.png",
    title: t("title"),
    description: t("description"),
    ogTitle: t("title"),
    ogDescription: t("description"),
    twitterTitle: t("title"),
    twitterDescription: t("description"),
    twitterCard: "summary_large_image",
    ogUrl: "https://interno.stiv.uz/",
    keywords:
      "interno, stiv uz, Takhirjanovich, Iskandar Kambaraliyev, nuxt, i18n",
  });

  onMounted(() => {
    colorMode.value = "light";
    localStorage.setItem("nuxt-color-mode", "light");
  });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style></style>
