<template>	
	<div class="form">
		<HeadingRight class="form__margin" text="Восстановление пароля"/>
		<form @submit = "submit" action="/forgot-password/step-3">
			<p id="err-msg" class="err-text form__text-margin">Error text</p>
			<div class="contact-us__form-group">
				<label class="text form__text-margin">На ваш номер телефона был отправлен проверочный код. </label>
				<label class="contact-us__label">Код подтверждения:</label>
				<input class="contact-us__input" v-model="code" type="text" id="code">
			</div>			
			<input type="submit" value="Войти" class="orange_btn form__btn-position">	
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
		&__text-margin{
			margin-bottom: 27px;
		}
	}
</style>

