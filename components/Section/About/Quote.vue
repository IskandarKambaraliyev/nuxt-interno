<script setup>
  const { t } = useI18n();
</script>

<template>
  <section class="section">
    <div class="container">
      <div
        class="quote py-12 md:py-16 px-8 md:px-12 rounded-[2rem] border-l-[1rem] border-r-[1rem] border-light"
      >
        <span class="font-dm text-dark symbol">“</span>
        <p class="text text-heading-m italic text-dark-500">
          {{ t("about.quote.text") }}
        </p>
        <span class="text-body-m text-dark author">
          {{ t("about.quote.author") }}
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .quote {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 50rem;
    margin: 0 auto;
    position: relative;

    .symbol {
      font-size: 5rem;
      line-height: 100%;
    }

    .text {
      margin-bottom: 2rem;
      text-align: center;
    }
  }
</style>
