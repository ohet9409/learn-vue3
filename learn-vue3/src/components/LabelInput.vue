<template>
  <label class="form-label" style="border: 1px solid black" id="child-id">
    <!-- 이름 -->
    {{ label }}
    <input v-model="value" type="text" class="form-control" v-bind="$attrs" />
    <!-- <input
      type="text"
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    /> -->
  </label>
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
  props: ["modelValue", "label"],
  emits: ["update:modelValue"],
  setup(props, context) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        context.emit("update:modelValue", value);
      },
    });
    return { value };
  },
};
</script>

<style lang="scss" scoped></style>
