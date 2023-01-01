<template>
  <div>
    <div class="card">
      <div class="card-body">
        <!-- type: news, notice -->
        <span class="badge rounded-pill text-bg-secondary">{{ typeName }}</span>
        <h5 class="card-title mt-2">{{ title }}</h5>
        <p class="card-text">
          {{ contents }}
        </p>

        <a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
          >좋아요</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: {
    type: {
      type: String,
      defaulte: "news",
      validator: (value) => {
        return ["news", "notice"].includes(value);
      },
    },
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    isLike: {
      type: Boolean,
      defaulte: false,
    },
  },
  setup(props) {
    const isLikeClass = computed(() => {
      return props.isLike === true ? "btn-danger" : "btn-outline-danger";
    });

    const typeName = computed(() => {
      return props.type === "news" ? "뉴스" : "공지사항";
    });

    const toggleLike = () => {
      props.isLike = !props.isLike;
    };
    return { isLikeClass, typeName, toggleLike };
  },
};
</script>

<style lang="scss" scoped></style>
