<template lang="pug">
  article.block--mb6
    //- c-pageheading(:title="title")
    header.block--matchFixedMenu.block--pb5(role="banner")
      h1.Title
        span(v-if="pageView") {{ title }}
        nuxt-link.u-linkClean(v-else, :to="link") {{ title }}
      time.u-block.Meta.c-textLight(:date-time="date") {{ published }}
    
    no-ssr
      nuxtent-body(:body="body")

    .HeadingSpace(v-if="pageView")
      hr
      p.Text.c-textLight(v-if="updated") Updated: {{ updated }}
      p.Text.c-textLight(v-if="note", v-html="note")
      .block--mt6(v-if="tweet")
        //- p.Meta.m-b0.u-textCenter Comments?
        p.Meta.u-textCenter
          a.u-linkClean.icon-targetblank(:href="tweet", target="_blank") Comments? Twitter
</template>


<script>
import PageHeading from "~/components/PageHeading.vue";

export default {
  name: "post",
  components: {
    "c-pageheading": PageHeading
  },
  props: {
    post: Boolean,
    pageView: Boolean,
    link: String,
    heroImage: String,
    title: String,
    lede: String,
    body: Object,
    published: String,
    date: String,
    updated: Boolean,
    note: String,
    tweet: String
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";
</style>
