<template>
  <main>
    <div class="container py-4">
      <MyButton
        @click="sayHello"
        @hello="sayHello"
        class="my-button"
        id="my-button"
        @say-hello="sayHello"
      ></MyButton>
      <LabelInput label="이름" data-id="아이디 입니다."></LabelInput>
    </div>
  </main>
</template>

<script>
import LabelInput from "./LabelInput.vue";
import MyButton from "./MyButton.vue";

export default {
  setup(props, context) {
    const sayHello = () => {
      alert("안녕하세요!");
      // context.emit("sayHello");
    };
    return { sayHello };
  },
  components: { MyButton, LabelInput },
};
</script>

<style lang="scss" scoped></style>
