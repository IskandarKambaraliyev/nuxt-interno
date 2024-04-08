<script setup>
  const { t } = useI18n();

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

  const loaded = ref(false);

  const handleLoad = () => {
    loaded.value = true;
  };
</script>

<template>
  <div class="w-full h-[15rem] md:h-[23rem] relative" v-if="props.img">
    <NuxtImg
      width="1470"
      height="356"
      format="webp"
      :src="props?.img"
      :placeholder="[10, 5, 5, 10]"
      class="w-full h-full object-cover object-center select-none"
      @load="handleLoad"
      :preload="true"
    />
    <Transition name="fade-300">
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur md:bg-white min-w-[20rem] max-w-max w-full py-[1.5rem] md:py-[2.5rem] px-[3rem] md:px-[5rem] rounded-t-[2rem]"
        v-if="(props.title || props.links) && loaded"
      >
        <h1 v-if="props.title" class="text-heading-l text-center">
          {{ t(props?.title) }}
        </h1>
        <ul v-if="props.links" class="flex-center flex-wrap">
          <li v-for="(item, index) in props.links" :key="index">
            <span :class="{ hidden: index === 0 }" class="text-body-m">
              &nbsp;/
            </span>
            <NuxtLinkLocale
              :to="item?.to"
              class="text-body-m select-text"
              :class="{ 'hover:underline': item?.to }"
            >
              {{ t(item?.label) }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style></style>
