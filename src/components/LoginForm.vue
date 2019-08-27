<template>	
	<div class="form ">
		<HeadingRight class="form__margin" text="Вход"/>
		<form @submit = "submit">
			<p id="err-msg" class="err-text form__text-margin">dsf</p>
			<div class="contact-us__form-group">
				<label class="contact-us__label">Электронная почта:</label>
				<input class="contact-us__input" v-model="email" type="text" id="email">
			</div>
			<div class="contact-us__form-group">
				<label class="contact-us__label float-left">Пароль:</label>
				<router-link to="/forgot-password/step-1" class="contact-us__link float-right">Забыли пароль?</router-link>
				<input class="contact-us__input" v-model="password" type="password" id="password">
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
</style>

