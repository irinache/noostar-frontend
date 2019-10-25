import axios from '../backend/vue-axios'

export default {

  state: {
    learningTypes: null,
  },

  mutations: {
    arrayLearningTypesInfo : (state, payload) => {
      state.learningTypes = payload
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
	getLearningTypes( {commit} ) {
		return new Promise((resolve, reject) => { 
         		axios
			.get("admin/learningtypes/")
			.then(response => {
			commit('arrayLearningTypesInfo', response.data);
         		resolve()
       	 		});
   		 })
     
    },

  },

  getters: {
    learningTypes(state) {
       return state.learningTypes
    },
  }
}
