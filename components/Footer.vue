<template lang="pug">
  footer.Footer.block--mt7(role="contentinfo")
    hr
    blockquote
      p.Meta.Meta--isParagraph.c-textLight
        | Eventually, everything connects — people, ideas, objects. 
        span.u-lg-lineBreak The quality of the connections is the key to quality per se.<br>— Charles Eames
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

.FooterRule {
  // background-color: var(--c-text);
  // height: 4px;
}
</style>
