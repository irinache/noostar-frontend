<template>	
	<div class="form">
		<HeadingRight class="form__margin" text="Регистрация"/>
		<form @submit = "submit" action="/register/step-2">
			
			<p id="err-msg" class="err-text form__text-margin">Error text</p>
			<label class="text form__text-margin">Заполните регистрационную форму. </label>
			<div class="contact-us__form-group">
				<label class="contact-us__label">Электронная почта:</label>
				<input class="contact-us__input" v-model="email" type="text" id="email">
			</div>
			<div class="contact-us__form-group">
				<label class="contact-us__label">Номер телефона:</label>
				<input class="contact-us__input" v-model="phone_num" type="text" id="phone_num">
			</div>
			<div class="contact-us__form-group">
				<label class="contact-us__label float-left">Пароль:</label>
				<input class="contact-us__input" v-model="password1" type="password" id="password1">
			</div>
			<div class="contact-us__form-group">
				<label class="contact-us__label float-left">Повторите пароль:</label>
				<input class="contact-us__input" v-model="password2" type="password" id="password2">
			</div>
			<input type="submit" value="Зарегистрироваться" class="orange_btn form__btn-position">	
			<a href="javascript:history.go(-1)" class="white_btn form__btn-position">Отмена</a>
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
  			phone_num: "",
  			password1: "",
  			password2: "",
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
			margin-bottom: 20px;
		}
	}
</style>

