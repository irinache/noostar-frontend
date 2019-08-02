<template>
	<div class="heading-left">
		<h2 class="m-20">{{text}}</h2>
	</div>
</template>

<script>
	export default{
		props:{
			text: String
		},
		mounted(){
			document.querySelector(".heading")
		}
	}
</script>

<style>

	@import '../assets/styles/index.less';

	.heading-left h2{
		color: #393838;
		font-family: Muller;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;
		margin: 0 auto;
		margin-bottom: 16px;
	}
	.heading-left{
		margin: 66px auto 50px auto;
		width: 100%;
	}
	.heading-left:after {
	    content: " ";
	    width: 100%;
	    height: 1px;
	    background-color: #c9c9c9;    
	    z-index: 2;
	    display: block;

	}
	@media (max-width: 768px) {
	    .heading-left h2{
			font-size: 28px;
		}		
	}
</style>