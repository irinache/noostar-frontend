<template>	
	<div class="form ">
		<HeadingRight class="form__margin" text="enter label"/>
		<form @submit = "submit">
			<p id="err-msg" class="err-text form__text-margin">Error text</p>
			<div class="contact-us__form-group">
				<label class="contact-us__label">{{ "e-mail" | translate }}:</label>
				<input class="contact-us__input" v-model="email" type="text" id="email">
			</div>
			<div class="contact-us__form-group">
				<label class="contact-us__label float-left">{{ "Password label" | translate }}:</label>
				<router-link to="/forgot-password/step-1" class="contact-us__link float-right">{{ "forget password label" | translate }}</router-link>
				<input class="contact-us__input" v-model="password" type="password" id="password">
			</div>
			<button type="submit" class="orange_btn form__btn-position"> {{ "signin" | translate }} </button>
			<a href="javascript:history.go(-1)" class="white_btn form__btn-position">{{ "Cancel label" | translate}}</a>
		</form>
	</div>		
</template>

<script>
import HeadingRight from './HeadingRight.vue'


export default {
	components: {
		HeadingRight
	},
	data: function(){
  		return {
  			email: "",
  			password: "",
  		}
  	},
  	methods: {
  		submit(e) {	  				
	  		//submit code
		}
  	},
  	mounted: function(){
  		document.getElementById("err-msg").style.display = "none";
  	}
}
</script>

<style lang="less">
	@import '../assets/styles/index.less';
	.form{
		width:60%;
		margin: auto;

		&__btn-position{
			width: 100% !important;
			margin-top: 30px;
			margin-bottom: 30px;
		}
		&__margin{
			margin-bottom: 50px;
		}
	}
	@media (max-width: 767px) {
	    .form{
			margin-bottom: 50px !important;
			margin-top: 50px !important;			
		}
	}
	@media (max-width: 440px) {
	    .form{
			width:80% !important ;			
		}
	}
</style>

