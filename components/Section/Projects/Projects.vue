<script setup>
  const router = useRouter();
  const route = useRoute();

  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });

const projectSlug = ref(null);

const handleOpen = (slug) => {
  projectSlug.value = slug;
};
</script>

<template>
  <Transition name="fade-300-blur">
    <InterceptionProjects v-model="projectSlug" v-if="projectSlug" />
  </Transition>
  <div class="projects my-12">
    <div class="project_col max-md:!hidden">
      <SectionProjectsLink
        v-for="(item, index) in props.data.projects"
        :key="item.id"
        :item="item"
        class="even:hidden"
        @click="handleOpen(item.slug)"
      />
    </div>
    <div class="project_col max-md:!hidden">
      <SectionProjectsLink
        v-for="(item, index) in props.data.projects"
        :key="item.id"
        :item="item"
        class="odd:hidden"
        @click="handleOpen(item.slug)"
      />
    </div>
    <SectionProjectsLink
      v-for="(item, index) in props.data.projects"
      :key="item.id"
      :item="item"
      class="md:hidden"
      @click="handleOpen(item.slug)"
    />
  </div>
</template>

<style lang="scss" scoped>
  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    .project_col {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;

      .project_col {
        gap: 1.5rem;
      }
    }
  }
</style>
