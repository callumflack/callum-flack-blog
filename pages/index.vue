<template lang="pug">
div
  c-post(
    v-if="post.published"
    v-for="post in posts.slice(0, 1)"
    :key="post.permalink"
    :link="post.permalink"
    :image="post.heroImage"
    :title="post.title"
    :lede="post.lede"
    :body="post.body"
    :date="post.date"
    :published="post.published"
  )
  
  .InterludeSpace
    hr
    .block--my7
      p.Meta.Meta--isParagraph.c-textLight.u-textCenter.m-xAuto.u-size3of4
        span.u-block
          | This blog is 
          nuxt-link.u-linkClean(to="/about") Callum's place
          | &nbsp;to think about the things inbetween. 
          a.u-linkClean.icon-targetblank(href="https://twitter.com/callumflack", target="_blank") Comments? Twitter
        //- span.u-block * * *
        //- span.u-block.m-t1 Here's the most recent posts:
        span.u-block Here's the most recent posts:
    hr

  c-postexcerpt(
    v-if="post.published"
    v-for="post in posts.slice(1)"
    :key="post.title"
    :link="post.permalink"
    :image="post.thumbImage"
    :title="post.title"
    :lede="post.lede"
    :date="post.date"
  )
</template>

<script>
import Post from "~/components/Post.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";

export default {
  name: "blog",
  components: {
    "c-post": Post,
    "c-postexcerpt": PostExcerpt
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
  async asyncData({ app, route }) {
    const posts = await app.$content("/posts").getAll();

    return {
      posts
    };
  }
};
</script>

<style scope>
@import "../assets/styles/variables.css";

.InterludeSpace {
  margin-top: calc(1.75 * var(--s-3));
  margin-bottom: calc(1.75 * var(--s-3));

  @media (--md) {
    margin-top: calc(1.75 * var(--s-3a));
    margin-bottom: calc(1.75 * var(--s-3a));
  }
}
</style>
