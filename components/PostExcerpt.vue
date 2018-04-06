<template lang="pug">
  nuxt-link.project.LinkSignal.block--mb5(:to="link")
    hr.m-t0
    //- figure.project-image(v-if="image")
      img(:src="image")
    .project-text
      h1.Title
        span.LinkSignal-title {{ title }}
      p.Text(v-html="lede") 
      //- p.project-subtext.TypeScope-reset
        span(v-if="date") {{ date }}
</template>


<script>
export default {
  name: "post-excerpt",
  components: {},
  props: {
    post: Boolean,
    link: String,
    image: String,
    title: String,
    lede: String,
    body: Object,
    published: String,
    date: String
  }
};
</script>


<style scoped>
@import "../assets/styles/variables.css";
</style>
