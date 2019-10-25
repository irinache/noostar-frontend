<template>	
	<div>
		<Header />
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6 p-0">
					<LeftSideImage image_name="forgot-password" text="tagline label"/>
				</div>
				<div class="col-md-6 p-0 d-flex align-items-center">
					<router-view/>
				</div>				
			</div>			
		</div>		
		<Footer />
	</div>		
</template>

<script>
import Header from './Header.vue'
import LeftSideImage from './LeftSideImage.vue'
//import ForgotPasswordFormStep1 from './ForgotPasswordFormStep1.vue'
//import ForgotPasswordFormStep2 from './ForgotPasswordFormStep2.vue'
import Footer from './Footer.vue'

export default {
  components: {
  	Header,
	LeftSideImage,
	//ForgotPasswordFormStep1,
	//ForgotPasswordFormStep2,
  	Footer
  }
}
</script>

<style>
	@import '../assets/styles/index.less';
</style>

