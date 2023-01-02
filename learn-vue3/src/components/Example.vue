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
      <hr />
      <FancyButton>Click!! <span style="color: red">@@@</span></FancyButton>
      <FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
      <hr />
      <AppCard>
        <!-- <template v-slot:[slotArgs]="obj">
          {{ obj }}
          {{ obj.childMessage }}
          제목입니다. {{ message }}
          {{ childMessage }}
        </template> -->
        <template v-slot:header="{ headerMessage }"
          >제목입니다. {{ headerMessage }}</template
        >
        <template v-slot="obj">바디입니다. {{ obj }}</template>
        <!-- 암시적으로 Default 슬롯입니다. -->
        <template #footer>푸터입니다.</template>
      </AppCard>
      <hr />
      <AppCard>
        <template v-slot:default>게시글입니다.</template>
      </AppCard>
    </div>
  </main>
</template>

<script>
import FancyButton from "./FancyButton.vue";
import LabelInput from "./LabelInput.vue";
import MyButton from "./MyButton.vue";
import AppCard from "./AppCard.vue";
import { ref } from "vue";
export default {
  setup(props, context) {
    const sayHello = () => {
      alert("안녕하세요!");
      // context.emit("sayHello");
    };
    const slotArgs = ref("header");
    const message = ref("안녕하세요");
    return { sayHello, slotArgs, message };
  },
  components: { MyButton, LabelInput, FancyButton, AppCard },
};
</script>

<style lang="scss" scoped></style>
