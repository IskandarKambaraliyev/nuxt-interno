<script setup>
  const route = useRoute();
  const { t } = useI18n();
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    intercepted: {
      type: Boolean,
      required: false,
      default: false,
    },
  });

  const checkRoute = () => {
    if (
      route.fullPath.includes(`/projects?category=${props.data.category.slug}`)
    ) {
      return true;
    } else {
      return false;
    }
  };
</script>

<template>
  <div
    class="max-[450px]:py-4 py-8 md:py-10 lg:py-12 max-[450px]:px-4 px-12 md:px-14 lg:px-16 max-[450px]:rounded-[1rem] rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3rem] bg-light client max-lg:w-full"
  >
    <div class="info_wrapper">
      <h5 class="title text-body-m font-dm">
        {{ t("projects.detail.info.client") }}
      </h5>
      <span class="info text-body-m">{{ data.client_name }}</span>
    </div>
    <div class="info_wrapper">
      <h5 class="title text-body-m font-dm">
        {{ t("projects.detail.info.category") }}
      </h5>
      <NuxtLinkLocale
        :to="
          checkRoute()
            ? undefined
            : `/projects/?category=${data.category.slug}&page=1`
        "
        class="info text-body-m select-text"
        :class="{ 'hover:underline': !checkRoute() }"
      >
        {{ data.category.title }}
      </NuxtLinkLocale>
    </div>
    <div class="info_wrapper">
      <h5 class="title text-body-m font-dm">
        {{ t("projects.detail.info.tags") }}
      </h5>
      <ul class="info text-body-m tags">
        <li v-for="(item, index) in data.tags" :key="index" class="item">
          <span>,&nbsp;</span>
          <NuxtLinkLocale
            :to="`/tag/${item}`"
            class="hover:underline select-text"
          >
            {{ item }}
          </NuxtLinkLocale>
        </li>
      </ul>
    </div>
    <div class="info_wrapper">
      <h5 class="title text-body-m font-dm">
        {{ t("projects.detail.info.date") }}
      </h5>
      <span class="info text-body-m">{{ data.date }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .client {
    .info_wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;

      .title {
        min-width: 5.5rem;
        letter-spacing: 1px;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;

        .item:first-child {
          span {
            display: none;
          }
        }
      }
    }
  }
</style>
