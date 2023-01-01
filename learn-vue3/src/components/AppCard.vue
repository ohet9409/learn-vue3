<template>
  <div class="card">
    <div class="card-header" v-if="$slots.header">
      <slot name="header" header-message="헤더 메시지"> #header </slot>
    </div>
    <div class="card-body" v-if="$slots.default">
      <slot :child-message="childMessage" hello-message="안녕하세요"
        >#body</slot
      >
    </div>
    <div class="card-footer text-muted" v-if="$slots.footer">
      <slot name="footer" footer-message="푸터 메시지">#footer</slot>
    </div>
  </div>
  {{ hasFooter }}
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup(props, context) {
    const childMessage = ref("자식 컴포넌트 메세지");
    const hasFooter = computed(() => !!context.slots.footer);
    return { childMessage, hasFooter };
  },
};
</script>

<style lang="scss" scoped></style>
