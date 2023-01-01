<template>
  <div>
    <main>
      <div class="container py-4">
        <PostCreate @create-post="createPost"></PostCreate>
        <hr class="my-4" />
        <div class="row g-3">
          <div class="col-4 col" v-for="post in posts" :key="post.id">
            <app-card
              :title="post.title"
              :contents="post.contents"
              :type="post.type"
              :is-like="post.isLike"
            ></app-card>
          </div>
        </div>
        <hr class="my-4" />
        <label>
          <!-- <LabelInput
            :model-value="username"
            @update:model-value="(value) => (username = value)"
          ></LabelInput> -->
          <!-- 이름
          <input type="text" v-model="username" /> -->
          <LabelInput
            v-model="username"
            label="이름"
            class="parent-class"
            style="color: red"
            id="parent-id"
          ></LabelInput>
          <LabelTitle v-model:title="title" label="제목"></LabelTitle>
          <Username
            v-model:firstName="firstName"
            v-model:lastName="lastName"
            @update:firstName="updateN"
          ></Username>
        </label>
      </div>
    </main>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import PostItem from "./PostItem.vue";
import LabelInput from "./LabelInput.vue";
import LabelTitle from "./LabelTitle.vue";
import PostCreate from "./PostCreate.vue";
import Username from "./Username.vue";
export default {
  components: { PostItem, PostCreate, LabelInput, LabelTitle, Username },
  setup() {
    const username = ref("");
    console.log(username.value);

    const title = ref("");

    const firstName = ref("");
    const lastName = ref("");

    const post = reactive({
      title: "제목2",
      contents: "내용2",
    });

    const posts = reactive([
      { id: 1, title: "제목1", contents: "내용1", isLike: true, type: "news" },
      { id: 2, title: "제목2", contents: "내용2", isLike: true, type: "news" },
      { id: 3, title: "제목3", contents: "내용3", isLike: true, type: "news" },
      {
        id: 4,
        title: "제목4",
        contents: "내용4",
        isLike: false,
        type: "notice",
      },
      {
        id: 5,
        title: "제목5",
        contents: "내용5",
        isLike: false,
        type: "notice",
      },
    ]);

    // const createPost = (a, b, c, d) => {
    //   console.log("createPost", a, b, c, d);
    // };

    // const createPost = (newTitle) => {
    //   console.log("createPost", newTitle);
    // };

    const createPost = (newPost) => {
      console.log("newPost: ", newPost);
    };
    const updateN = (val) => {
      firstName.value = val;
      console.log("firstName: ", firstName.value);
    };
    return {
      post,
      posts,
      createPost,
      username,
      title,
      firstName,
      lastName,
      updateN,
    };
  },
};
</script>

<style lang="scss" scoped></style>
