<script setup>
  const headImg = "https://i.ibb.co/LtxBJ4H/Photo.png";

  const headLinks = [
    {
      to: "/",
      label: "breadcrumbs.home",
    },
    {
      label: "breadcrumbs.team",
    },
  ];
</script>

<template>
  <BaseHead :img="headImg" :links="headLinks" title="team" />
  <SectionTeam />
</template>

<style></style>
