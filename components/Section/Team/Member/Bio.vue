<script setup>
  const { t } = useI18n();

  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });

  const rangeUi = {
    base: "disabled:cursor-default",
    progress: {
      base: "peer-disabled:bg-opacity-100",
      background: "bg-brown",
    },
    thumb: {
      color: "text-brown",
      ring: "[&::-webkit-slider-thumb]:ring-4",
    },
    track: {
      background:
        "[&::-webkit-slider-runnable-track]:bg-light [&::-moz-range-track]:bg-light",
    },
  };
</script>

<template>
  <div class="space-y-8">
    <div>
      <h6 class="text-heading-l text-dark">{{ t("teamMember.bio.title") }}</h6>
      <div v-html="data.bio" class="member_bio text-dark-500 text-body-m"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
      <div class="space-y-8">
        <div>
          <h6 class="text-heading-m">
            {{ t("teamMember.bio.functionality") }}
          </h6>
          <div
            v-html="data.functionality"
            class="member_functionality text-dark-500 text-body-m"
          ></div>
        </div>
        <div class="space-y-4">
          <div class="space-y-1">
            <div class="flex items-center justify-between relative">
              <span class="text-dark-500 text-body-m !font-medium">
                {{ t("teamMember.bio.skills.design") }}
              </span>
              <span
                class="text-dark text-body-xs !font-medium"
                :class="`${
                  data.skills.design > 50
                    ? 'absolute bottom-0 -translate-x-1/2'
                    : 'relative'
                }`"
                :style="{
                  left: `${
                    data.skills.design > 50 ? data.skills.design : 'unset'
                  }%`,
                }"
              >
                {{ `${data.skills.design}%` }}
              </span>
            </div>
            <URange
              size="sm"
              v-model="data.skills.design"
              :disabled="true"
              :ui="rangeUi"
            />
          </div>
          <div class="space-y-1">
            <div class="flex items-center justify-between relative">
              <span class="text-dark-500 text-body-m !font-medium">
                {{ t("teamMember.bio.skills.management") }}
              </span>
              <span
                class="text-dark text-body-xs !font-medium"
                :class="`${
                  data.skills.management > 50
                    ? 'absolute bottom-0 -translate-x-1/2'
                    : 'relative'
                }`"
                :style="{
                  left: `${
                    data.skills.management > 50
                      ? data.skills.management
                      : 'unset'
                  }%`,
                }"
              >
                {{ `${data.skills.management}%` }}
              </span>
            </div>
            <URange
              size="sm"
              v-model="data.skills.management"
              :disabled="true"
              :ui="rangeUi"
            />
          </div>
          <div class="space-y-1">
            <div class="flex items-center justify-between relative">
              <span class="text-dark-500 text-body-m !font-medium">
                {{ t("teamMember.bio.skills.client") }}
              </span>
              <span
                class="text-dark text-body-xs !font-medium"
                :class="`${
                  data.skills.client > 50
                    ? 'absolute bottom-0 -translate-x-1/2'
                    : 'relative'
                }`"
                :style="{
                  left: `${
                    data.skills.client > 50 ? data.skills.client : 'unset'
                  }%`,
                }"
              >
                {{ `${data.skills.client}%` }}
              </span>
            </div>
            <URange
              size="sm"
              v-model="data.skills.client"
              :disabled="true"
              :ui="rangeUi"
            />
          </div>
        </div>
      </div>
      <div>
        <UAccordion :items="data.qa">
          <template #default="{ item, index, open }">
            <button>
              <!-- <template #leading>leading</template>
              <span>{{ item.question }}</span>
              <template #trailing>trailing</template> -->
            </button>
          </template>

          <template #item="{ item }">
            <span>{{ item.answer }}</span>
          </template>
        </UAccordion>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
