<template lang="pug">
article
  header.block--matchFixedMenu.block--pb6(role="banner")
    h1.Title {{ page.title }}
    time.u-block.Meta.c-textLight(:date-time="page.date") Updated: {{ page.published }}
  main.block--pb6(role="main")
    nuxtent-body(:body="page.body")
</template>

<script>
export default {
  props: {
    title: String,
    date: String,
    published: String,
    heroImage: String
  },
  head() {
    return {
      title: `${this.page.title} – Callum Flack Design`,
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
    return {
      page: await app.$content("/pages").get(route.path)
    };
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
</style>
