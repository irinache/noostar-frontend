<template>	
	<div class="left-side-image" :style="{'background-image': `url(${require('../assets/images/' + image_name + '.png')})`}">
		<h1 class="img-text">{{text}}</h1>
	</div>		
</template>

<script>
import Header from './Header.vue'

import Footer from './Footer.vue'

export default {
    components: {
  	  Header,

  	  Footer
    },
    props:{
		text: String,
		image_name: String
	},
 
}
</script>

<style lang="less">
	@import '../assets/styles/index.less';
	.left-side-image{
		height: 700px;
		width: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;		
	}
	.img-text{
		position: absolute;
		bottom: 50px;
		left:80px;
		right: 80px;
		text-align: left;
	}
	@media (max-width: 767px) {
	    .left-side-image{
			display: none;	
		}
	}
</style>