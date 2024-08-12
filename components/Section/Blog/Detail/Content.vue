<script setup>
  const { t } = useI18n();
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    interception: {
      type: Boolean,
      required: false,
    },
  });
</script>

<template>
  <h4 class="text-heading-l">{{ data.blog.title }}</h4>
  <div class="w-full flex items-center justify-between flex-wrap gap-4">
    <span class="text-base text-dark-500">
      {{ dateFormatter(data.blog.date) }}
    </span>
    <span class="text-base text-dark-500">
      {{ data.blog.category.title }}
    </span>
  </div>
  <div class="w-full aspect-[16/9] rounded-lg overflow-hidden my-4">
    <div class="w-full h-full bg-light animate-pulse" v-if="loading"></div>
    <div class="w-full h-full relative flex-center" v-if="data.blog.image">
      <img
        width="544"
        height="306"
        :src="data.blog.image"
        class="w-full h-full object-cover absolute"
      />
      <div
        class="absolute bg-black/20 w-full h-full backdrop-blur rounded-lg"
      ></div>
      <img
        :src="data.blog.image"
        class="w-auto h-full object-contain relative"
      />
    </div>
  </div>
  <div class="blog_content text-body-m mb-12" v-html="data.blog?.content"></div>

  <div
    class="border-t border-light pt-8 flex flex-wrap items-center justify-between gap-8"
  >
    <div class="flex items-center flex-wrap gap-4">
      <span class="font-dm text-base md:text-xl">{{ t("tags") }}</span>
      <NuxtLinkLocale
        v-for="(item, index) in data.blog.tags"
        :to="`/tag/${item}`"
        :key="index"
        class="text-body-s px-4 py-2 rounded-md bg-light hover:bg-dark hover:text-white transition select-text"
      >
        {{ item }}
      </NuxtLinkLocale>
    </div>
    <SectionBlogDetailShare
      :title="data.blog.title"
      :slug="data.blog.slug"
      :interception="props.interception"
    />
  </div>
</template>

<style lang="scss">
  .blog_content {
    p {
      @apply text-dark-500;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @apply text-dark;
      font-size: 2rem;
      line-height: 150%;
      font-family: "DM Serif Display", serif;
    }

    blockquote {
      @apply text-brown bg-light;
      position: relative;
      font-family: "DM Serif Display", serif;
      padding: 8rem 5rem 3rem;
      border-radius: 3rem;
      text-align: center;
      font-size: 1.5rem;
      line-height: 150%;
      margin: 2rem 0;

      &::before {
        content: "”";
        position: absolute;
        top: 6rem;
        left: 50%;
        transform: translateX(-50%);
        font-size: 10rem;
      }
    }

    ol {
      list-style: decimal;
      list-style-position: inside;

      li:not(:last-child) {
        @apply text-dark-500;
        margin-bottom: 1rem;
      }
    }

    img {
      border-radius: 2.5rem;
    }

    @media screen and (max-width: 768px) {
      blockquote {
        font-size: 1.125rem;
        padding: 4rem 2.5rem 1.5rem;

        &::before {
          top: 3rem;
          font-size: 5rem;
        }
      }
    }
  }
</style>
