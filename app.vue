<script setup>
  const { t, locale } = useI18n();

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
    themeColor: "#292F36",
    viewport:
      "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no",
  });

  useHead({
    link: [
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-180-180.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16.png",
      },
    ],
    htmlAttrs: {
      lang: locale.value,
    },
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
