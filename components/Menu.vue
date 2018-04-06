<template lang="pug">
  nav.FixedMenu(:class="navBar")
    .container
      //- .Nav.u-flex.u-flexJustifyBetween
      .Nav.u-flex.u-flexJustifyBetween
        div
          c-menulink.Meta(
            label="CF/b"
            link="/"
            exact
          )
        //- .Separator • 
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
          link: "/blog"
        },
        {
          label: "About",
          link: "/about"
        },
        {
          label: "Now",
          link: "/now"
        }
      ]
    };
  },
  methods: {
    scrollDetect(home, down, up) {
      // Current scroll position
      const currentScroll = this.scrollTop();

      // Do nothing if scroll position is above the window
      // Handles iOS bounce scrolling
      if (this.scrollState < 0) {
        home();
      }

      if (currentScroll > this.scrollState) {
        down();
      } else if (currentScroll < this.scrollState) {
        up();
      } else {
        home();
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
      this.navBar.open = false;
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
  width: 100%;
  z-index: 999;
}

.FixedMenu {
  /* background-color: var(--c-text); */

  & .link {
    /* color: var(--c-bg); */
  }
}

.collapse {
  animation: collapse 0.5s ease forwards;
}

.open {
  animation: open 0.5s ease forwards;
  /* box-shadow: 0 9px 25px 0 rgba(0, 0, 0, 0.25), 0 19px 70px 0 rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15); */
}

@keyframes collapse {
  from {
    opacity: 1;
    top: 0;
  }
  to {
    opacity: 0;
    top: calc(-1 * var(--fixedMenuHeight));
  }
}

@keyframes open {
  from {
    opacity: 0;
    top: calc(-1 * var(--fixedMenuHeight));
  }
  to {
    opacity: 1;
    top: 0;
  }
}

.Nav {
  /* border-bottom: 0.15rem solid var(--c-text);
  border-bottom: 1px solid var(--c-text);
  border-color: transparent; */
  padding-top: var(--s-4);
  padding-bottom: var(--s-4);
}

.Separator {
  color: var(--c-bg);
  margin: 0 var(--s-3);
}
</style>
