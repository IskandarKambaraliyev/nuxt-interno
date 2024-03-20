<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: false,
    },
    links: {
      type: Array,
      required: false,
    },
    img: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <div class="w-full h-[12rem] md:h-[17rem] relative" v-if="props.img">
    <NuxtImg
      width="1232"
      height="272"
      format="webp"
      :src="props?.img"
      :placeholder="[10, 5, 5, 10]"
      class="w-full h-full object-cover object-center select-none"
    />
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur md:bg-white min-w-[20rem] max-w-max w-full py-[1.5rem] md:py-[2.5rem] px-[3rem] md:px-[5rem] rounded-t-[2rem]"
      v-if="props.title || props.links"
    >
      <h1 v-if="props.title" class="text-heading-l text-center">
        {{ props?.title }}
      </h1>
      <ul v-if="props.links" class="flex-center flex-wrap">
        <li v-for="(item, index) in props.links" :key="index">
          <span :class="{ hidden: index === 0 }" class="text-body-m">
            &nbsp;/&nbsp;
          </span>
          <NuxtLinkLocale
            :to="item?.to"
            class="text-body-m select-text"
            :class="{ 'hover:underline': item?.to }"
          >
            {{ item?.label }}
          </NuxtLinkLocale>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
