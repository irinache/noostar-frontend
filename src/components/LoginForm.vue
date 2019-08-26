<template>	
	<div class="login-form ">
		<HeadingRight class="login-form__margin" text="Вход"/>
		<form @submit = "submit">
			<div class="contact-us__form-group">
				<label class="contact-us__label">Электронная почта:</label>
				<input class="contact-us__input" v-model="email" type="text" id="email">
			</div>
			<div class="contact-us__form-group">
				<label class="contact-us__label float-left">Пароль:</label>
				<a href="#" class="contact-us__link float-right">Забыли пароль?</a>
				<input class="contact-us__input" v-model="password" type="password" id="password">
			</div>
			<input type="submit" value="Войти" class="orange_btn login-form__btn-position">	
			<router-link to="/" href="#" class="white_btn login-form__btn-position">Отмена</router-link>
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
  		}	
}
</script>

<style lang="less">
	@import '../assets/styles/index.less';
	.login-form{
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
</style>

