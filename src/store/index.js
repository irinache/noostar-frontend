import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import course from "./course"
import learningtype from "./learningtype"
import learningform from "./learningform"

export default new Vuex.Store({
  modules: {
    course,
    learningtype,
    learningform
  }
})
