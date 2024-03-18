<script setup>
  const { t } = useI18n();

  const { data, error } = await useMyFetch("/customers/");

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }
</script>

<template>
  <section class="py-24 md:py-32 lg:py-40 bg-light">
    <div
      class="container grid grid-cols-2 md:grid-cols-4 max-[375px]:grid-cols-1 gap-y-8"
    >
      <BaseCustomersResult
        :item="data?.experience"
        :index="1"
        :label="t('customers.experience.title')"
      />
      <BaseCustomersResult
        :item="data?.success"
        :index="2"
        :label="t('customers.success.title')"
        class="min-[375px]:border-l border-brown"
      />
      <BaseCustomersResult
        :item="data?.active"
        :index="3"
        :label="t('customers.active.title')"
        class="md:border-l border-brown"
      />
      <BaseCustomersResult
        :item="data?.satisfied"
        :index="4"
        :label="t('customers.satisfied.title')"
        class="min-[375px]:border-l border-brown"
      />
    </div>
  </section>
</template>

<style></style>
