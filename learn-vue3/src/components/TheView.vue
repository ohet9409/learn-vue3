<template>
  <main>
    <!-- <div class="container py-4">
      <ProvideInject></ProvideInject>
    </div> -->
    <LifeCycleHook />
  </main>
</template>

<script>
import LifeCycleHook from "./LifeCycleHook.vue";

// import ProvideInject from "./ProvideInject.vue";
export default {
  components: {
    // ProvideInject,
    LifeCycleHook,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
