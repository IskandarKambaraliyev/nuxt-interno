<script setup>
  const { t, locale } = useI18n();

  const route = useRoute();
  const param = route.params.teamId;

  const headImg = "https://i.ibb.co/w0XbXG5/Photo-1.png";

  const headLinks = [
    {
      to: "/",
      label: "breadcrumbs.home",
    },
    {
      to: "/team",
      label: "breadcrumbs.team",
    },
    {
      label: "breadcrumbs.teamMember",
    },
  ];

  const { data } = await useMyFetch(`/team/${param}`);
</script>

<template>
  <BaseHead :img="headImg" :links="headLinks" :title="data?.name" />

  <SectionTeamMember :data="data" v-if="data" />

  <BaseTeam />
</template>

<style lang="scss" scoped></style>
