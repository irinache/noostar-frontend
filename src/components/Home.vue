<template>	
	<div>
		<Header />
		<MainSlider />		
		<LearningPrinciples />
		<CourseList />		
		<ContactForm />
		<Footer />
		<ModalAvailableCourses />
	</div>		
</template>

<script>
import Header from './Header.vue'
import ModalAvailableCourses from './ModalAvailableCourses.vue'
import MainSlider from './MainSlider.vue'
import LearningPrinciples from './LearningPrinciples.vue'
import CourseList from './CourseList.vue'
import TeacherList from './TeacherList.vue'
import ContactForm from './ContactForm.vue'
import Footer from './Footer.vue'

export default {
  components: {
  	Header,
  	ModalAvailableCourses,
  	MainSlider,
  	LearningPrinciples,
  	TeacherList,
  	CourseList,
  	ContactForm,
  	Footer
  }
}
</script>

<style>
	@import '../assets/styles/index.less';	
</style>

