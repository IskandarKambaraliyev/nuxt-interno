<script setup>
  const headImg =
    "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const headLinks = [
    {
      label: "breadcrumbs.home",
      to: "/",
    },
    {
      label: "breadcrumbs.about",
    },
  ];
</script>

<template>
  <BaseHead title="breadcrumbs.about" :img="headImg" :links="headLinks" />
  <SectionAboutQuote />
  <SectionAboutMain />
  <BaseTeam />
</template>

<style></style>
