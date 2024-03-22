<script setup>
  const { t, locale } = useI18n();

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });

  const url = ref(null);

  onMounted(() => (url.value = window.location.href));

  const { copy, copied } = useClipboard();

  const shareOnTelegram = () => {
    const url_tg = `https://t.me/share/url?url=${encodeURIComponent(
      url.value
    )}&text=${encodeURIComponent(props.title)}`;
    window.open(url_tg, "_blank");
  };

  const shareOnFacebook = () => {
    const url_fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url.value
    )}`;
    window.open(url_fb, "_blank");
  };

  const shareOnTwitter = () => {
    const url_x = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url.value
    )}&text=${encodeURIComponent(props.title)}`;
    window.open(url_x, "_blank");
  };
</script>

<template>
  <div class="flex items-center gap-8">
    <SectionBlogDetailShareButton icon="i-bxl-telegram" @click="shareOnTelegram" />
    <SectionBlogDetailShareButton icon="i-bxl-facebook" @click="shareOnFacebook" />
    <SectionBlogDetailShareButton icon="i-ri-twitter-x-line" @click="shareOnTwitter" />
    <SectionBlogDetailShareButton :icon="copied ? 'i-heroicons-clipboard-document-check-16-solid' : 'i-heroicons-clipboard-16-solid'" @click="copy(url)" />
  </div>
</template>

<style></style>
