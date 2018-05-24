<template lang="pug">
div
  main(role="main")
    c-postexcerpt(
      v-if="post.published"
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
import PageHeading from "~/components/PageHeading.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import Post from "~/components/Post.vue";

export default {
  name: "blog",
  components: {
    "c-pageheading": PageHeading,
    "c-postexcerpt": PostExcerpt,
    "c-post": Post
  },
  head() {
    return {
      title: "Blog – Callum Flack Design",
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
@import "../../assets/styles/variables.css";
</style>
