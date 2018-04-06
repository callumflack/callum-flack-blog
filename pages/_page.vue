<template lang="pug">
div
  c-post(
    pageView
    :link="page.permalink"
    :image="page.heroImage"
    :title="page.title"
    :body="page.body"
    :date="page.date"
    :published="page.published"
    :updated="page.updated"
    :note="page.note"
    :tweet="page.tweet"
  )
  c-postslist(
    :posts="posts"
  )
</template>

<script>
import Post from "~/components/Post.vue";
import PostsList from "~/components/PostsList.vue";

export default {
  components: {
    "c-post": Post,
    "c-postslist": PostsList
  },
  head() {
    return {
      title: `${this.page.title} – Callum Flack`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.page.title} – ${this.page.lede}`
        }
      ]
    };
  },
  async asyncData({ app, route }) {
    const page = await app.$content("/posts").get(route.path);
    const posts = await app.$content("/posts").getAll();

    return {
      page,
      posts
    };
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";
</style>
