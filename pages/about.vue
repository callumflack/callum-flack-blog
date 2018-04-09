<template lang="pug">
article
  header.block--matchFixedMenu.block--pb6(role="banner")
    c-lazyimage(
      v-if="page.heroInCloudinary"
      project
      portrait
      :src="page.heroImage"
    )
    c-image(
      v-else-if="page.heroImage"
      project
      portrait
      local
      :src="page.heroImage"
    )
  main.block--pb6(role="main")
    nuxtent-body.TypeScope(:body="page.body")
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import LazyImage from "~/components/LazyImage.vue";
import MarkdownImage from "~/components/MarkdownImage.vue";

export default {
  components: {
    "c-pageheading": PageHeading,
    "c-lazyimage": LazyImage,
    "c-image": MarkdownImage
  },
  props: {
    title: String,
    lede: String,
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
        },
        // Twitter Card
        { name: "twitter:title", content: `${this.page.title}` },
        {
          name: "twitter:description",
          content: `${this.page.title} – ${this.page.lede}`
        },
        { name: "twitter:image", content: `${this.page.heroImage}` },
        { name: "twitter:image:alt", content: "Callum Flack" }
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
