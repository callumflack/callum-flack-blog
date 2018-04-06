<template lang="pug">
  div
    header(role="banner")
      c-pageheading(
        projectSpace
        titleXl="change-making digital design"
        lede="<span class='u-block ParagraphSpace'>Hi, I'm Callum Flack. I help owners and creators make websites and apps that attract, motivate and retain their audience. I work fluidly across visual design, user experience, and code.</span><span class='u-block'>Here's 5 ways I design for audience change:</span>"
      )
    main(role="content")
      section.Slide(style="background-color:rgba(236, 223, 194,0.5)")
        .FlexGridWrapper
          .FlexGrid
            .u-md-size1of2.vh-Slide
            .u-md-size1of2.m-t5.sm-m-t0
              .u-flex.u-flexAlignItemsCenter.h-100
                .container.container--sm.m-l0
                  p
                    span.Title-number 1
                  h2.Title.Title--xl 
                    | We all respond<br>to beauty
                  p.m-t0.m-b0 
                    | You'll know in a heartbeat when it's right. To resonate deeply with people, I design for the heart first. 

</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
import MarkdownImage from "~/components/MarkdownImage.vue";
import LazyImage from "~/components/LazyImage.vue";
import MarkdownMovie from "~/components/MarkdownMovie.vue";

export default {
  layout: "default",
  components: {
    "c-pageheading": PageHeading,
    "c-image": MarkdownImage,
    "c-lazyimage": LazyImage,
    "c-movie": MarkdownMovie
  }
};
</script>

<style lang="postcss">
@import "../assets/styles/variables.css";

.Slide,
.vh-Slide {
  min-height: 75vh;
}

.Slide,
.vh-Slide,
.sm-vh-Slide {
  @media (--md) {
    min-height: 100vh;
  }
}

.Slide {
  margin-left: auto;
  margin-right: auto;
  padding-top: var(--s-5);
  padding-bottom: var(--s-5);
  position: relative;

  @media (--md) {
    padding: 0;
  }

  /* counter .figure & .u-flex */
  & .figure {
    margin: 0;
    width: 100%;
  }
}

.Slide + .Slide {
  /* margin-top: 1rem; */
}

.Slide-texture--darken:after {
  background-color: rgba(0, 0, 0, 1);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.Slide-texture--sudden {
  background-blend-mode: multiply;
  background-color: #ecdfc2;
  background-color: rgba(236, 223, 194, 0.5);
  background-image: url(/images/_sudden.jpg);
  background-position-y: 80%;
}

.Slide-texture--lady {
  background-color: rgba(236, 223, 194, 0.5);
  background-image: url(/images/_lady.jpg);
}

.Slide-texture--hi {
  background-image: url(/images/hi.svg);

  @media (--sm) {
    background-position-x: 40%;
  }
  @media (--lg) {
    background-position-x: 70%;
  }
}

.Slide-texture--pattern {
  // background-blend-mode: multiply;
  // background-color: hsl(41, 30%, 23%);
  // background-color: #292522;
  // background-color: #aaa;
  // background-color: #886262;
  // background-color: #1e2433;
  // background-color: var(--c-text);
  // background-color: #626c88;
  // background-color: #353535;
  // background-image: url(/images/_sudden.jpg);
  // background-image: url(/images/_enticing-as-it-seems.jpg);
  // background-image: url(/images/_overcast-night.jpg);
  // background-image: url("http://res.cloudinary.com/pw-img-cdn/image/upload/v1522321387/okok/_overcast-night.jpg");
  // background-image: url(/images/_stripes.jpg);
  // background-image: url(/images/_spys.jpg);
  background-image: url(/images/_sagatiba.jpg);

  &:after {
    background-color: rgba(0, 0, 0, 0.85);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
}

.Slide-texture--reverse {
  & .container {
    position: relative;
    z-index: 1;
  }

  & h2,
  & h3,
  & p,
  & .Box-heading {
    border-color: var(--c-highlight);
    color: var(--c-highlight);
  }

  & .Title-number {
    background-color: var(--c-highlight);
    color: var(--c-text);
  }
}

.Box {
  border: 1px solid var(--c-highlight);
  padding: 0;
}

.Box + .Box {
  margin-top: -1px;

  @media (--sm) {
    margin-left: -1px;
    margin-top: 0;
  }
}

.Box-heading,
.Box-text {
  margin: 0;
  padding: calc(0.8 * var(--s-3b)) var(--s-3b);
  position: relative;

  @media (--lg) {
    padding: calc(0.8 * var(--s-4)) var(--s-4);
  }
}

.Box-heading {
  border-bottom: 1px solid currentColor;

  & span {
    display: inline-block;
  }
}

.Box-icon {
  display: inline-block;
  height: 30px;
  margin-right: var(--s-2);
  transform: translateY(4px);
  width: 30px;

  @media (--sm) {
    height: 35px;
    // transform: translateY(5px);
    width: 35px;
  }
  @media (--md) {
    height: 40px;
    // transform: translateY(6px);
    width: 40px;
  }

  @media (--md) {
    // transform: translateY(9px);
  }

  & img {
    display: block;
  }
}
</style>
