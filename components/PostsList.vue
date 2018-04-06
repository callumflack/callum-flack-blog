<template lang="pug">
div
  c-postex(
    v-for="post in posts"
    :key="post.title"
    :link="post.permalink"
    :image="post.thumbImage"
    :title="post.title"
    :lede="post.lede"
    :date="post.date"
  )
</template>

<script>
import PostExcerpt from "~/components/PostExcerpt.vue";

export default {
  name: "posts-list",
  components: {
    "c-postex": PostExcerpt
  },
  props: {
    posts: Array
  }
};
</script>

<style scope>
@import "../assets/styles/variables.css";
</style>
