<template lang="pug">
  footer.Footer.block--mt7(role="contentinfo")
    hr
    blockquote
      p.Meta.Meta--isParagraph.c-textLight.u-textCenter
        | Do not define things. Rather define how they interact with other things. 
        a(href="https://twitter.com/afoolswisdom/status/980290864969691138" target="_blank") — Sark
</template>

<script>
export default {
  computed: {
    currentPageClass: function() {
      return `page-${this.$store.state.currentPage}`;
    }
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

.Footer blockquote {
  @media (--md) {
    margin: 0 auto;
    width: 80%;
  }
}

.Footer a {
  background-image: initial;
}
</style>
