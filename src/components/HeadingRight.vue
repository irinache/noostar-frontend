<template>
	<div class="heading-left">
		<h2 class="m-20">{{text | translate}}</h2>
	</div>
</template>

<script>
        import Vue from 'vue';
	export default{
		props:{
			text: String
		},
		mounted(){
                        Vue.i18n.set(Vue.i18n.locale());
			document.querySelector(".heading")
		}
	}
</script>

<style>

	@import '../assets/styles/index.less';

	.heading-left h2{
		color: #393838;
		font-weight: bold;
		text-align: left;
		text-transform: uppercase;
		margin: 0 auto;
		margin-bottom: 16px;
	}
	.heading-left{
		margin: 0 auto 0 auto;
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
	@media (max-width: 578px) {
	    .heading-left h2{
			font-size: 24px;
		}		
	}
</style>
