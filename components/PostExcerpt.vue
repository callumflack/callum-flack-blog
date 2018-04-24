<template lang="pug">
  nuxt-link.project.LinkSignal.block--mb5(:to="link")
    //- hr.m-t0.RuleMargin
    //- figure.project-image(v-if="image")
      img(:src="image")
    .project-text
      time.u-block.Meta.c-textLight.TimeMargin(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
      h1.Subtitle.m-t0
        span.LinkSignal-title {{ title }}
      p.Text(v-html="lede") 
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

.RuleMargin {
  margin-bottom: calc(1.25 * var(--s-3a));
}

.TimeMargin {
  margin-bottom: var(--s-3a);
}
</style>
