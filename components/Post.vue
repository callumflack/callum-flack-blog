<template lang="pug">
  article.Article
    header.block--pb5.u-lg-size5of6.m-xAuto(role="banner")
      h1.Title.u-textCenter
        nuxt-link(:to="link") {{ title }}
      .u-block.u-textCenter
        time.Meta.c-textLight(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
        span(v-if="readingtime")
          span.MetaSeparator.c-textLight • 
          span.Meta.c-textLight {{ readingtime }} minutes
    main(role="main")
      no-ssr
        nuxtent-body(:body="body")
</template>

<script>
import moment from "vue-moment";

export default {
  name: "post",
  components: {
    moment
  },
  props: {
    published: Boolean,
    link: String,
    title: String,
    lede: String,
    date: String,
    readingtime: Number,
    body: Object
  }
  // https://forum.vuejs.org/t/how-to-format-date-for-display/3586/4
  // filters: {
  //   formateDate: function (value) {
  //     if (value) {
  //       return moment(String(value)).format('MM/DD/YYYY hh:mm')
  //     }
  //   }
  // }
};
</script>

<style scoped>
@import "../assets/styles/variables.css";

.MetaSeparator {
  margin-left: var(--s-2);
  margin-right: var(--s-2);
}
</style>
