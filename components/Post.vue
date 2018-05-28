<template lang="pug">
  article.Article
    header.block--pb5.u-lg-size5of6.m-xAuto(role="banner")
      h1.Title.u-textCenter
        nuxt-link(:to="link") {{ title }}
      time.u-block.u-textCenter.Meta.c-textLight(:date-time="date") {{ date | moment("MMMM Do, YYYY") }}
    main(role="main")
      no-ssr
        nuxtent-body(:body="body")
</template>

<script>
import PageHeading from "~/components/PageHeading.vue";
// https://github.com/brockpetrie/vue-moment
import moment from "vue-moment";
// import moment from 'moment';

export default {
  name: "post",
  components: {
    "c-pageheading": PageHeading,
    moment
  },
  props: {
    post: Boolean,
    link: String,
    heroImage: String,
    title: String,
    lede: String,
    body: Object,
    date: String,
    published: Boolean,
    note: String,
    tweet: String
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
</style>
