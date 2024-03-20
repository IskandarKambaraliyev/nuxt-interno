<script setup>
  import Viewer from "v-viewer";
  import "viewerjs/dist/viewer.css";
  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(["update:modelValue"]);

  const handleClose = () => {
    emit("update:modelValue", false);
  };

  const loading = ref(false);

  onMounted(() => {
    loading.value = true;
  });

  const handleLoaded = () => {
    loading.value = false;
  };
</script>

<template>
  <div class="fixed z-[100] inset-0 top-0 left-0 flex-center bg-black/90">
    <div @click="handleClose" class="absolute inset-0"></div>
    <button @click="handleClose" class="absolute z-[1] top-4 right-4">
      <UIcon
        name="i-heroicons-x-mark-20-solid"
        class="size-8 text-white"
        dynamic
      />
    </button>
    <UIcon
      name="i-svg-spinners-bars-rotate-fade"
      class="size-8 text-white"
      dynamic
      v-if="loading"
    />
    <NuxtImg
      :src="props.src"
      :placeholder="[5, 5, 5, 10]"
      format="webp"
      class="max-w-full max-h-full relative"
      @load="handleLoaded"
    />
  </div>
</template>

<style></style>
