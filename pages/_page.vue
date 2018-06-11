<template lang="pug">
div
  c-post(
    :link="page.permalink"
    :title="page.title"
    :date="page.date"
    :readingtime="page.readingtime"
    :body="page.body"
  )

  .HeadingSpace.block--mb7(v-if="page.note")
    .Text.c-textLight.m-b0 ∞
    .Text.c-textLight(v-html="page.note")
    //- div(v-if="page.note")
    //- hr
    //- .block--mt7(v-if="page.tweet")
      p.Meta.u-textCenter
        a.u-linkClean.icon-targetblank(:href="page.tweet", target="_blank") 
          | Comments? Twitter
</template>

<script>
import Post from "~/components/Post.vue";

export default {
  components: {
    "c-post": Post
  },
  props: {
    updated: String,
    note: String,
    tweet: String
  },
  head() {
    return {
      title: `${this.page.title} – Callum Flack`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.page.title} – ${this.page.lede}`
        },
        // Twitter Card
        { name: "twitter:title", content: `${this.page.title}` },
        { name: "twitter:description", content: `${this.page.lede}` },
        // {
        //   name: "twitter:image",
        //   content: `${this.page.heroImage}`
        // },
        { name: "twitter:image:alt", content: "A blog post image by Callum Flack" }
      ]
    };
  },
  async asyncData({ app, route }) {
    const page = await app.$content("/posts").get(route.path);
    // const posts = await app.$content("/posts").getAll();

    return {
      page
      // posts
    };
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";
</style>
