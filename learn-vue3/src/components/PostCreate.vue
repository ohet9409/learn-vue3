<template>
  <div class="row g-3">
    <div class="col col-2">
      <select
        v-model="type"
        class="form-select"
        aria-label="Floating label select example"
      >
        <option value="news">뉴스</option>
        <option value="notice">공지사항</option>
      </select>
    </div>

    <div class="col col-8">
      <input
        type="text"
        class="form-control"
        placeholder=""
        aria-label="Username"
        v-model="title"
      />
    </div>
    <div class="col col-2 d-grid">
      <button class="btn btn-primary" @click="createPost">추가</button>
    </div>

    <!-- @click="$emit('createPost', 1, 2, 3, '김길동')" -->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  emits: {
    createPost: (newPost) => {
      // console.log("validator: ", newPost);
      if (!newPost.type) {
        return false;
      } else if (!newPost.title) {
        return false;
      }
      return true;
    },
  },
  setup(props, context) {
    const type = ref("news");
    const title = ref("");
    const createPost = () => {
      // context.emit("createPost", 1111, 2, 3, "김길동");
      const newPost = {
        type: type.value,
        title: title.value,
      };
      // context.emit("createPost", title.value);
      context.emit("createPost", newPost);
      title.value = "";
    };
    return { createPost, title, type };
  },
};
</script>

<style lang="scss" scoped></style>
