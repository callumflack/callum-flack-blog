<template lang="pug">
div
  c-post(
    v-for="post in posts"
    v-if="post.published"
    :key="post.permalink"
    :link="post.permalink"
    :image="post.heroImage"
    :title="post.title"
    :lede="post.lede"
    :body="post.body"
    :date="post.date"
    :published="post.published"
  )
</template>

<script>
import PostExcerpt from "~/components/PostExcerpt.vue";
import Post from "~/components/Post.vue";

export default {
  name: "blog",
  components: {
    "c-postex": PostExcerpt,
    "c-post": Post
  },
  head() {
    return {
      title: "A blog by Callum Flack",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Selected writing by Callum Flack about digital design, user experience & code"
        }
      ]
    };
  },
  data() {
    return {
      posts: []
    };
  },
  async asyncData({ app }) {
    const posts = await app.$content("/posts").getAll();

    return {
      posts
    };
  }
};
</script>

<style scope>
@import "../assets/styles/variables.css";
</style>
