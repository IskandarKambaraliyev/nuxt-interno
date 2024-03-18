<script setup>
  const { t } = useI18n();

  const footerLinks = [
    {
      title: "footer.links.pages.title",
      links: [
        {
          to: "/about",
          exact: false,
          label: "footer.links.pages.about",
        },
        {
          to: "/projects",
          exact: false,
          label: "footer.links.pages.projects",
        },
        {
          to: "/team",
          exact: false,
          label: "footer.links.pages.team",
        },
        {
          to: "/contact",
          exact: false,
          label: "footer.links.pages.contact",
        },
        {
          to: "/services",
          exact: false,
          label: "footer.links.pages.services",
        },
        {
          to: "/pricing",
          exact: false,
          label: "footer.links.pages.pricing",
        },
      ],
    },
    {
      title: "footer.links.services.title",
      links: [
        {
          to: "/services/kitchan",
          exact: true,
          label: "footer.links.services.kitchan",
        },
        {
          to: "/services/living-area",
          exact: true,
          label: "footer.links.services.livingArea",
        },
        {
          to: "/services/bathroom",
          exact: true,
          label: "footer.links.services.bathroom",
        },
        {
          to: "/services/dining-hall",
          exact: true,
          label: "footer.links.services.diningHall",
        },
        {
          to: "/services/bedroom",
          exact: true,
          label: "footer.links.services.bedroom",
        },
      ],
    },
    {
      title: "footer.links.contact.title",
      links: [
        {
          to: "https://maps.app.goo.gl/yfcuZ8cCAgddhK9FA",
          exact: true,
          label: "footer.links.contact.address",
          target: "_blank",
        },
        {
          to: `tel:${t("footer.links.contact.phone")}`,
          exact: true,
          label: "footer.links.contact.phone",
          target: "_blank",
        },
      ],
    },
  ];
</script>

<template>
  <footer class="text-dark-500">
    <div class="container flex flex-wrap justify-between gap-8">
      <div class="max-w-[24.5rem] space-y-4">
        <UiLogo :is-link="true" />
        <p class="text-body-m">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <LayoutFooterSocials />
      </div>
      <LayoutFooterLinks :links="footerLinks" />
    </div>
  </footer>
</template>

<style></style>
