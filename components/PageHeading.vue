<template lang="pug">
  .block--pb6.block--matchFixedMenu
    .container
      h1.Title(
        v-if="title"
        v-html="title"
      )
      h2.Text.m-t0.m-b0(
        v-if="lede"
        v-html="lede"
      )
</template>

<script>
export default {
  name: "page-heading",
  props: {
    title: String,
    lede: String,
    projectSpace: Boolean,
    projectScope: Boolean
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";
</style>
