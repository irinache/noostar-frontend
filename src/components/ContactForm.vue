<template>
	<div class="grey_bg contact-us">	
		<div class="container justify-content-center">
			<div class="row col-md-12 m-0">
				<HeadingRight text="Есть вопросы? Напишите нам"/>		
			</div>
			<form @submit = "submit">
				<div class="row m-0">
					<div class="col-md-6">
						<div class="contact-us__form-group">
					        <label class="contact-us__label">Имя:</label>
					        <input class="contact-us__input" v-model="name" type="text" id="name">
					    </div>
					    <div class="contact-us__form-group">
					        <label class="contact-us__label">Телефон:</label>
					        <input class="contact-us__input" v-model="phone" type="text" id="phone">
					    </div>
					</div>
					<div class="col-md-6">
					    <div class="contact-us__form-group">
					        <label class="contact-us__label">Сообщение:</label>
					        <textarea class="contact-us__input contact-us__message" v-model="message" id="message"></textarea> 
					    </div>
					</div>	
				</div>
				<div class="row m-0">
					<div class="col-md-12">
						<input type="submit" value="Отправить заявку" class="orange_btn float-right contact-us__btn-position">	
					</div>					
				</div>	    
			    
			</form>

		</div>
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
  				name: "",
  				phone: "",
  				message: ""
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
	
	.contact-us{
		&__form-group{
			margin-bottom: 16px;
		}
		&__label{
			display: block;
			text-align: left;
		}
		&__input{
			width: 100%;
			border: 1px solid @border; 
			border-radius: 3px;
			font-family: Muller;
			font-size: 14px;
			padding-left: 7px;
		}
		&__message{
			height: 95px;
		}
		&__btn-position{
			margin-top: 15px;
			margin-bottom: 80px;
		}
	}

	input{		
		border: none;
	}

	textarea{
		 resize: none;
	}

	label{
		font-family: Muller;
		font-size: 12px;
		margin-bottom: 5px;
		color: @text;
	}
</style>