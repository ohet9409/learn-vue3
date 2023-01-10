<template>
  <main>
    <!-- <div class="container py-4">
      <ProvideInject></ProvideInject>
    </div> -->
    <!-- <LifeCycleHook /> -->
    <TemplateRefs />
  </main>
</template>

<script>
import LifeCycleHook from "./LifeCycleHook.vue";
import TemplateRefs from "./TemplateRefs.vue";

// import ProvideInject from "./ProvideInject.vue";
export default {
  components: {
    // ProvideInject,
    LifeCycleHook,
    TemplateRefs,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
