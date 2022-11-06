<template>
  <div class="p-3 bg-danger">
    <button
      type="button"
      class="btn btn-primary"
      v-bind="$attrs"
      @click="sayHello"
    >
      버튼
    </button>
  </div>
</template>

<script>
export default {
  // 부모 속성이 상속 안되도록
  // inheritAttrs: false,
  // emit 이벤트가 다른 곳에서 사용되지 않도록 정의해줌
  emits: ["sayHello"],
  setup(props, context) {
    console.log("context.attrs: ", context.attrs);
    console.log("class: ", context.attrs.class);
    console.log("id ", context.attrs.id);
    console.log("onClick: ", context.attrs.onClick);

    const sayHello = () => {
      context.emit("sayHello");
    };
    return { sayHello };
  },
};
</script>

<style lang="scss" scoped></style>
