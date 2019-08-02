<template>
	<div class="heading" :class="color">
		<h2>{{text}}</h2>
	</div>
</template>

<script>
	export default{
		props:{
			text: String,
			color: String
		}
	}
</script>

<style lang="less">

	@import '../assets/styles/index.less';

	.heading h2{
		color: @heading;
		font-family: Muller;
		font-weight: bold;
		text-align: center;
		text-transform: uppercase;
		margin: 0 auto 30px auto;	
	}
	.heading{
		position: relative;
		margin: 66px auto 50px auto;
	}
	.heading:before {
	    content: " ";
	    width: 363px;
	    height: 1px;
	    background-color: @border;    
	    z-index: 2;
	 	position: absolute;
	 	bottom: 0;
	 	transform: translateX(-50%);
	}
	.grey:after{		
		content: url(../assets/images/book_icon.png);
		width: 50px;
	 	text-align: center;
	 	transform: translateX(-50%);
		background-color: @darkerBackground;
		position: absolute;
 		bottom: -20px; 
 		z-index: 3;
	}
	.white:after{		
		content: url(../assets/images/book_icon.png);
		width: 50px;
	 	text-align: center;
	 	transform: translateX(-50%);
		background-color: @lightBackground;
		position: absolute;
 		bottom: -20px; 
 		z-index: 3;
	}
	@media (max-width: 768px) {
	    .heading h2{
			font-size: 28px;
		}
		.heading:before {	   
		    width: 300px;	   
		}
	}
	@media (max-width: 578px) {
	    .heading:before {	   
		    width: 200px;	   
		}
	}
</style>