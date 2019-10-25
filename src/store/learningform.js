import axios from '../backend/vue-axios'

export default {

  state: {
    learningForms: null,
  },

  mutations: {
    arrayLearningFormsInfo : (state, payload) => {
      state.learningForms = payload
    },
  },

  actions: {
//    getAllCourses( {commit} ) {
//      axios
//        .get("courses/")
//        .then(response => {
//          commit('arrayAllCoursesInfo', response.data);
//          return  response.data;
//        });
//    },
	getLearningForms( {commit} ) {
		return new Promise((resolve, reject) => { 
         		axios
			.get("admin/learningforms/")
			.then(response => {
			commit('arrayLearningFormsInfo', response.data);
         		resolve()
       	 		});
   		 })
     
    },

  },

  getters: {
    learningForms(state) {
       return state.learningForms
    },
  }
}
