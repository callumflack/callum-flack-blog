<template lang="pug">
  div(:class="currentPageClass")
    c-menu
    .Page.block--py7
      .container
        nuxt
        c-footer
</template>

<script>
import Footer from "~/components/Footer.vue";
import Menu from "~/components/Menu1.vue";

export default {
  components: {
    "c-footer": Footer,
    "c-menu": Menu
  },
  computed: {
    currentPageClass: function() {
      return `page-${this.$store.state.currentPage}`;
    }
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

.Page {
  background-color: var(--c-bg);
  min-height: 100vh;
  padding-top: var(--s-6);
  position: relative;
  z-index: 3;
}

.page-enter-active {
  /* background-color: var(--c-bg); */
  /* height: 100vh; */
  /* opacity: 1; */
  transition: opacity 0.15s;
  /* width: 100vw; */
  /* z-index: 999; */
}
.page-leave-active {
  transition: opacity 0.15s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
