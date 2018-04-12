<template lang="pug">
  headroom
    header
      .container
        .Nav.u-flex.u-flexJustifyBetween
          div
            c-menulink.Meta(
              label="CF/b"
              link="/"
              exact
            )
          div
            c-menulink.Meta(
              v-for="item in menuLinks"
              :key="item.label"
              :label="item.label"
              :year="item.year"
              :link="item.link"
              :currentPage="currentPage"
              :exact="item.exact"
            )
</template>

<script scoped>
import MenuLink from "~/components/MenuLink.vue";
import vueHeadroom from "vue-headroom";

export default {
  components: {
    "c-menulink": MenuLink,
    headroom: vueHeadroom
  },
  props: {
    currentPage: String
  },
  data() {
    return {
      isFixed: false,
      menuLinks: [
        // {
        //   label: "Archive",
        //   link: "/blog"
        // },
        {
          label: "About",
          link: "/about"
        }
        // {
        //   label: "Now",
        //   link: "/now"
        // }
      ]
    };
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.Header {
  background-color: var(--c-bg);
  top: 0;
  position: fixed;
  transition-duration: 0.6s;
  width: 100%;
  z-index: 999;
}

.Header.is-fixed {
  transform: translateY(-100px);
  transition-duration: 0.6s;
}

.Nav {
  /* border-bottom: 0.15rem solid var(--c-text);
  border-bottom: 1px solid var(--c-text);
  border-color: transparent; */
  padding-top: var(--s-4);
  padding-bottom: var(--s-4);
}
</style>
