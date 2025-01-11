<script setup>
  const { t } = useI18n();

  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <section class="section">
    <div class="container space-y-12">
      <SectionTeamMemberInfo :data="props.data" />
      <SectionTeamMemberBio :data="props.data" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
