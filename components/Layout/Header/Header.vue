<script setup>
const route = useRoute();

// Link lists of the header. Set "exact" property to true if you want to check the exact path. Change the "target" property to "_blank" if you want to open the link in a new tab. You can also add a click event to the link. But keep in mind that if you use click event, the "to" property will be ignored.
const links = [
  {
    label: "Home",
    to: "/",
    target: "_self",
    exact: false,
    // click: () => {
    //   console.log("clicked");
    // },
  },
  {
    label: "About us",
    to: "/about",
    target: "_self",
    exact: false,
  },
  {
    label: "Services",
    to: "/services",
    target: "_self",
    exact: false,
  },
  {
    label: "Projects",
    to: "/projects",
    target: "_self",
    exact: false,
  },
  {
    label: "Blog",
    to: "/blog",
    target: "_self",
    exact: false,
  },
  {
    label: "Contact",
    to: "/contact",
    target: "_self",
    exact: false,
  },
];

function checkActive(url, exact = false) {
  if (url === "/") {
    return route.fullPath === url;
  } else if (url === null) {
    return false;
  } else {
    if (exact) {
      return route.fullPath === url;
    }
    return route.fullPath.includes(url);
  }
}

const openSidebar = ref(false);

const toggleSidebar = () => {
  openSidebar.value = !openSidebar.value;
};

const slideoverUi = {
  width: "max-w-[22rem]",
};

watch(
  () => route.fullPath,
  () => {
    openSidebar.value = false;
  }
);

const isSticky = ref(true);

// Function to handle scroll event
const handleScroll = () => {
  isSticky.value = window.scrollY > 1;
};

// Add scroll event listener when component is mounted
onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

// Remove scroll event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header class="text-dark py-4 lg:py-8 sticky top-0 left-0 w-full z-[40] transition-all border-b border-transparent"
    :class="{ 'bg-white/80 backdrop-blur border-white': isSticky }">
    <div class="container flex items-center justify-between">
      <UiLogo :is-link="true" />

      <button class="p-2 flex-center lg:!hidden" @click="toggleSidebar">
        <UIcon name="i-heroicons-bars-2-16-solid w-6 h-6" />
      </button>
      <ul class="flex items-center space-x-4 max-lg:!hidden">
        <li v-for="(item, index) in links" :key="index">
          <NuxtLink :to="!item.click && item?.to" :target="item?.target"
            class="text-body-m p-2 hover:text-brown transition cursor-pointer capitalize" @click="item?.click"
            :class="`${checkActive(item?.to, item?.exact) ? 'text-brown' : ''}`">
            {{ item?.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
  <USlideover v-model="openSidebar" :ui="slideoverUi">
    <div class="w-full h-[77px] flex items-center justify-end p-4 border-b">
      <button class="p-2 flex-center lg:!hidden" @click="toggleSidebar">
        <UIcon name="i-heroicons-x-mark-16-solid w-6 h-6" />
      </button>
    </div>
    <ul class="flex flex-col items-center space-y-2 p-4">
      <li v-for="(item, index) in links" :key="index">
        <NuxtLink :to="!item.click && item?.to" :target="item?.target"
          class="text-body-m p-2 hover:text-brown transition cursor-pointer capitalize" @click="item?.click"
          :class="`${checkActive(item?.to, item?.exact) ? 'text-brown' : ''}`">
          {{ item?.label }}
        </NuxtLink>
      </li>
    </ul>
  </USlideover>
</template>

<style></style>
