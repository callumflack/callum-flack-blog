
<template lang="pug">
  //- .loading-page.u-flex.u-flexAlignItemsCenter.u-flexJustifyCenter(v-if="loading")
  .loading-page(v-if="loading")
    .container
      .block--py7
        .Heading Patternworks
</template>

<script>
export default {
  name: "page-loading",
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.loading-page {
  background: var(--c-bg);
  height: 100%;
  left: 0;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 999;
}
</style>