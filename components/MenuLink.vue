<template lang="pug">
  nuxt-link(
    :class="currentPage"
    :to='link'
    :exact="exact"
  )
    span {{ label }}
</template>

<script>
export default {
  name: "NavLink",

  props: {
    label: String,
    year: String,
    link: String,
    external: Boolean,
    exact: Boolean
  },

  computed: {
    currentPage() {
      let classes = ["link"];
      if (this.link === this.$store.state.currentPage) {
        classes.push("is-active");
      } else if (this.$store.state.isMobileNavVisible) {
        classes.push("");
      } else {
        classes.push("");
      }
      return classes.join(" ");
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.link {
  background-image: none;
  text-decoration: none;
}

.link + .link {
  margin-left: var(--s-3b);
}

.nuxt-link-active span {
  position: relative;
}

.nuxt-link-active span:before {
  background-color: currentColor;
  content: "";
  display: inline-block;
  height: 0.15rem;
  height: 1px;
  left: 0;
  right: 0;
  bottom: -2px;
  position: absolute;
}
</style>