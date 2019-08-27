<template>	
	<div class="form">
		<HeadingRight class="form__margin" text="Восстановление пароля"/>
		<form @submit = "submit" action="/login">
			<p id="err-msg" class="err-text form__text-margin">Error text</p>
			<div class="contact-us__form-group">				
				<label class="contact-us__label">Новый пароль:</label>
				<input class="contact-us__input" v-model="new_pswd_1" type="password" id="password">
			</div>	
			<div class="contact-us__form-group">				
				<label class="contact-us__label">Повторите пароль:</label>
				<input class="contact-us__input" v-model="new_pswd_2" type="password" id="password">
			</div>			
			<input type="submit" value="Сохранить" class="orange_btn form__btn-position">	
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
  			new_pswd_1: "",  
  			new_pswd_2				
  		}
  	},
  	methods: {
  		submit(e) {	
	  		//submit code
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

