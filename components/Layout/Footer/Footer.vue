<script setup>
const footerLinks = [
  {
    title: "Pages",
    links: [
      {
        to: "/about",
        exact: false,
        label: "About us",
      },
      {
        to: "/projects",
        exact: false,
        label: "Our projects",
      },
      {
        to: "/team",
        exact: false,
        label: "Our team",
      },
      {
        to: "/contact",
        exact: false,
        label: "Contact us",
      },
      {
        to: "/services",
        exact: false,
        label: "services",
      },
      {
        to: "/pricing",
        exact: false,
        label: "Pricing",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        to: "/services/kitchan",
        exact: true,
        label: "kitchan",
      },
      {
        to: "/services/living-area",
        exact: true,
        label: "Living area",
      },
      {
        to: "/services/bathroom",
        exact: true,
        label: "Bathroom",
      },
      {
        to: "/services/dining-hall",
        exact: true,
        label: "Dining hall",
      },
      {
        to: "/services/bedroom",
        exact: true,
        label: "Bedroom",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        to: "https://maps.app.goo.gl/yfcuZ8cCAgddhK9FA",
        exact: true,
        label: "55 East Birchwood Ave. Brooklyn, New York 11201",
        target: "_blank",
      },
      {
        to: "mailto:contact@interno.com",
        exact: true,
        label: "contact@interno.com",
        target: "_blank",
      },
      {
        to: "tel:(123) 456 - 7890",
        exact: true,
        label: "(123) 456 - 7890",
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
