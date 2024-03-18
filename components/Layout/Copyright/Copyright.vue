<script setup>
  const { t } = useI18n();
</script>

<template>
  <div class="py-8 text-dark-500 border-t border-[#e5e5e5] mt-8">
    <div class="container">
      <p class="text-body-m text-center">
        {{ t("copyright.text") }}
        <LayoutCopyrightStiv />
      </p>
    </div>
  </div>
</template>

<style></style>
