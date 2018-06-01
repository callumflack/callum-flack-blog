<template lang="pug">
  nav.FixedMenu(:class="navBar")
    .container
      .Nav.u-flex.u-flexJustifyCenter
        div
          c-menulink.Meta(
            label="CF/b"
            link="/"
            exact
          )
        .Separator • 
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

/*

  Fixed menu functions taken from:
  https://blog.christopherianmurphy.com/2017/05/expand-collapse-navbar/
  https://codepen.io/Splode/pen/WjQewW

*/

export default {
  name: "fixed-menu",
  components: {
    "c-menulink": MenuLink
  },
  props: {
    currentPage: String,
    index: Boolean
  },
  data() {
    return {
      // Classes assigned to nav on scroll
      navBar: {
        collapse: false,
        open: false
      },
      // Used to keep track of scroll position
      scrollState: 0,
      // Menu list
      menuLinks: [
        {
          label: "Archive",
          link: "/archive"
        },
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
  },
  methods: {
    scrollDetect(home, down, up) {
      // Current scroll position
      const currentScroll = this.scrollTop();

      if (this.scrollTop() === 0) {
        home();
      } else if (currentScroll > this.scrollState) {
        down();
      } else {
        up();
      }

      // Set previous scroll position
      this.scrollState = this.scrollTop();
    },
    // Returns current scroll position
    scrollTop() {
      return window.scrollY;
    },
    // Called when scroll is in initial position
    scrollHome() {
      this.navBar.collapse = false;
    },
    // Called when scrolled down
    scrollDown() {
      this.navBar.collapse = true;
      this.navBar.open = false;
    },
    // Called when scolled up
    scrollUp() {
      this.navBar.collapse = false;
      this.navBar.open = true;
    }
  },
  created() {
    // https://nuxtjs.org/faq/window-document-undefined
    if (process.browser) {
      window.addEventListener("scroll", () => {
        this.scrollDetect(this.scrollHome, this.scrollDown, this.scrollUp);
      });
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.FixedMenu {
  background-color: var(--c-bg);
  position: fixed;
  top: 0;
  transition-duration: 0.6s;
  width: 100%;
  z-index: 999;
}

.collapse {
  transform: translateY(-100%);
  transition-duration: 0.6s;
}

.Nav {
  padding-top: var(--s-4);
  padding-bottom: var(--s-4);
}

.Separator {
  margin-left: var(--s-3b);
  margin-right: var(--s-3b);
}
</style>
