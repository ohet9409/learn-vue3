<template>
  <div class="container py-4">
    <input type="text" ref="inputRef" value="hello world" />
    <hr />
    <button @click="visible = !visible">Toggle Child</button>
    <LifeChildHook v-if="visible" />
    <p id="message">{{ message }}</p>
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from "vue";
import LifeChildHook from "./LifeChildHook.vue";

export default {
  components: {
    LifeChildHook,
  },
  setup() {
    const inputRef = ref("null");
    console.log("setup");
    const message = ref("");
    const visible = ref(false);

    onBeforeMount(() => {
      console.log("onBeforeMount");
      console.log(inputRef.value.value);
    });
    onMounted(() => {
      console.log("onMounted");
      console.log(inputRef.value.value);
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate", message.value);
      console.log(
        "DOM Content: ",
        document.querySelector("#message").textContent
      );
    });
    onUpdated(() => {
      console.log("Update", message.value);
      console.log(
        "DOM Content: ",
        document.querySelector("#message").textContent
      );
    });
    return { inputRef, message, visible };
  },
  data: () => ({
    dataMessage: "data message",
  }),
  beforeCreate() {
    console.log("beforeCreate", this.dataMessage);
    console.log(this);
  },
  created() {
    console.log("Create", this.dataMessage);
    console.log(this);
  },
};
</script>

<style lang="scss" scoped></style>
