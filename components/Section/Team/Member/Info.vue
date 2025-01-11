<script setup>
  const { t } = useI18n();

  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div class="w-full h-auto">
      <img
        width="590"
        height="786"
        :src="data?.image"
        class="w-full h-auto rounded-[1rem] md:rounded-[1.5rem]"
      />
    </div>
    <div class="col-span-1 md:col-span-2 flex flex-col justify-center gap-6">
      <div>
        <h1 class="text-heading-l text-dark">{{ data.name }}</h1>
        <span class="text-body-m text-dark-500">{{ data.position }}</span>
      </div>
      <p class="text-body-m text-dark-500">{{ data.description }}</p>
      <div class="space-y-4">
        <NuxtLinkLocale
          v-if="data.contact.email"
          :to="`mailto:${data.contact.email}`"
          target="_blank"
          class="group flex items-center gap-4 truncate"
        >
          <div
            class="size-10 md:size-12 rounded-full bg-light flex-center group-hover:bg-dark transition"
          >
            <UIcon
              name="i-heroicons-envelope"
              class="size-1/2 text-brown group-hover:text-white transition"
              dynamic
            />
          </div>
          <span
            class="text-body-m text-dark-500 group-hover:text-brown transition"
          >
            {{ data.contact.email }}
          </span>
        </NuxtLinkLocale>
        <NuxtLinkLocale
          v-if="data.contact.phone"
          :to="`tel:${data.contact.phone}`"
          target="_blank"
          class="group flex items-center gap-4 truncate"
        >
          <div
            class="size-10 md:size-12 rounded-full bg-light flex-center group-hover:bg-dark transition"
          >
            <UIcon
              name="i-heroicons-phone"
              class="size-1/2 text-brown group-hover:text-white transition"
              dynamic
            />
          </div>
          <span
            class="text-body-m text-dark-500 group-hover:text-brown transition"
          >
            {{ data.contact.phone }}
          </span>
        </NuxtLinkLocale>
        <NuxtLinkLocale
          v-if="data.contact.website"
          :to="data.contact.website"
          target="_blank"
          class="group flex items-center gap-4 truncate"
        >
          <div
            class="size-10 md:size-12 rounded-full bg-light flex-center group-hover:bg-dark transition"
          >
            <UIcon
              name="i-heroicons-phone"
              class="size-1/2 text-brown group-hover:text-white transition"
              dynamic
            />
          </div>
          <span
            class="text-body-m text-dark-500 group-hover:text-brown transition"
          >
            {{ data.contact.website }}
          </span>
        </NuxtLinkLocale>
      </div>
      <div class="flex items-center gap-4 flex-wrap">
        <NuxtLinkLocale
          v-if="data.social.facebook"
          :to="`${data.social.facebook}`"
          class="group"
          target="_blank"
        >
          <UIcon
            name="i-bxl-facebook"
            class="size-6 text-dark-500 group-hover:text-brown transition"
            dynamic
          />
        </NuxtLinkLocale>
        <NuxtLinkLocale
          v-if="data.social.twitter"
          :to="`${data.social.twitter}`"
          class="group"
          target="_blank"
        >
          <UIcon
            name="i-bxl-twitter"
            class="size-6 text-dark-500 group-hover:text-brown transition"
            dynamic
          />
        </NuxtLinkLocale>
        <NuxtLinkLocale
          v-if="data.social.linkedin"
          :to="`${data.social.linkedin}`"
          class="group"
          target="_blank"
        >
          <UIcon
            name="i-bxl-linkedin"
            class="size-6 text-dark-500 group-hover:text-brown transition"
            dynamic
          />
        </NuxtLinkLocale>
        <NuxtLinkLocale
          v-if="data.social.instagram"
          :to="`${data.social.instagram}`"
          class="group"
          target="_blank"
        >
          <UIcon
            name="i-bxl-instagram"
            class="size-6 text-dark-500 group-hover:text-brown transition"
            dynamic
          />
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
