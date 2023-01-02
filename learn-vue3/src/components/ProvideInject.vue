<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">ProvideInject component</div>
      <div class="card-body">
        <button @click="count++">Click</button>
        <p>{{ appMessage }}</p>
        <Child></Child>
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref, readonly, inject } from "vue";
import Child from "./Child.vue";
export default {
  components: {
    Child,
  },
  setup() {
    const staticMessage = "static message";
    const message = ref("message");
    const updateMessage = (appendMessage) => {
      message.value = message.value + appendMessage;
    };
    const count = ref(10);
    provide("static-message", staticMessage);
    provide("message", { message: readonly(message), updateMessage });
    provide("count", count);

    const appMessage = inject("app-message");

    console.log("this.msg: ", this);

    const msg = inject("msg");
    console.log(msg);

    return { count, appMessage };
  },
  mounted() {
    console.log("this.msg: ", this.msg);
  },
};
</script>

<style lang="scss" scoped></style>
