import Vue from "vue";
// sometimes plugins don't setup their file structure correctly
// https://github.com/nuxt/nuxt.js/issues/917
import FixedHeader from "vue-fixed-header/dist/vue-fixed-header.js";

Vue.use(FixedHeader);
