import axios from '../backend/vue-axios'

export default {

  state: {
    allCoursesInfo: null,
    courseInfo: null,
  },

  mutations: {
    arrayAllCoursesInfo : (state, payload) => {
      state.allCoursesInfo = payload
    },
    arrayCourseInfo : (state, payload) => {
      state.courseInfo = payload
    }
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
	getAllCourses( {commit} ) {
		return new Promise((resolve, reject) => { 
         		axios
			.get("courses/")
			.then(response => {
			commit('arrayAllCoursesInfo', response.data);
         		resolve()
       	 		});
   		 })
     
    },

    getCourse( {commit}, {id}){
      axios
        .get("courses/", {
            params: {
                company: id
           }
        })
        .then(response => {
          commit('arrayCourseInfo', response.data);
        }) 
    },
  },

  getters: {
    allCoursesInfo(state) {
       return state.allCoursesInfo
    },
    companyInfo(state) {
      return state.courseInfo
    },
  }
}
