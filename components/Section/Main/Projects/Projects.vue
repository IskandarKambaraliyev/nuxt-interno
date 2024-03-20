<script setup>
  const { t } = useI18n();
  const { data, error } = await useMyFetch(`/projects/?pinned=true&limit=4`);

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }

  const projectSlug = ref(null);

  const handleOpen = (slug) => {
    projectSlug.value = slug;
  };
</script>

<template>
  <Transition name="fade-300-blur">
    <InterceptionProjects v-model="projectSlug" v-if="projectSlug" />
  </Transition>
  <section class="section">
    <div class="container">
      <div class="flex-center flex-col max-w-[45rem] mx-auto space-y-2">
        <UiTitle :label="t('main.projects.title')" class="text-center" />
        <p class="text-center text-dark-500 text-body-m">
          {{ t("main.projects.text") }}
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-x-[6rem] gap-y-[3.5rem] mt-12 md:mt-16 lg:mt-20"
      >
        <SectionMainProjectsCard
          v-for="(item, index) in data?.projects"
          :key="index"
          :item="item"
          :index="index + 1"
          @click="handleOpen(item?.slug)"
        />
      </div>
    </div>
  </section>
</template>

<style></style>
