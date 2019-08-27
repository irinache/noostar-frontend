<template>	
	<div class="form ">
		<HeadingRight class="form__margin" text="Регистрация"/>
		<form @submit = "submit" action="/login">			
			<p id="err-msg" class="err-text form__text-margin">Error text</p>
			<label class="text form__text-margin">На ваш номер телефона будет отправлено сообщение с кодом для продтверждения регистрации.</label>
			<div class="contact-us__form-group">
				<label class="contact-us__label">Ввести код:</label>
				<input class="contact-us__input" v-model="code" type="text" id="code">
			</div>			
			<input type="submit" value="Подтвердить" class="orange_btn form__btn-position">	
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
  			code: "",  			
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

