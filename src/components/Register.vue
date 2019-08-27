<template>	
	<div>
		<Header />
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6 p-0">
					<LeftSideImage image_name="register" text="Начни свое обучение прямо сейчас!"/>
				</div>
				<div class="col-md-6 p-0 d-flex align-items-center">
					<router-view />
				</div>				
			</div>			
		</div>		
		<Footer />
	</div>		
</template>

<script>
import Header from './Header.vue'
import LeftSideImage from './LeftSideImage.vue'
import Footer from './Footer.vue'

export default {
  components: {
  	Header,
	LeftSideImage,	
  	Footer
  }
}
</script>

<style>
	@import '../assets/styles/index.less';
</style>

