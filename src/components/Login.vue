<template>	
	<div>
		<Header />
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6 p-0">
					<LeftSideImage image_name="login_img" text="tagline label"/>
				</div>
				<div class="col-md-6 p-0 d-flex align-items-center">
					<LoginForm />
				</div>				
			</div>			
		</div>		
		<Footer />
	</div>		
</template>

<script>
import Header from './Header.vue'
import LeftSideImage from './LeftSideImage.vue'
import LoginForm from './LoginForm.vue'
import Footer from './Footer.vue'

export default {
  components: {
  	Header,
	LeftSideImage,
	LoginForm,
  	Footer
  }
}
</script>

<style>
	@import '../assets/styles/index.less';
	
</style>

