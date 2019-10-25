<template>
	<div class="grey_bg contact-us">	
		<div class="container justify-content-center">
			<div class="row col-md-12 m-0">
				<HeadingRight class="contact-us__heading-margin" text="Contact title"/>		
			</div>
			<form>
				<div class="row m-0">
					<div class="col-md-6">
						<div class="contact-us__form-group">
					        <label class="contact-us__label">{{ 'first name' | translate }}:</label>
					        <input class="contact-us__input" v-model="name" type="text" id="name">
					    </div>
					    <div class="contact-us__form-group">
					        <label class="contact-us__label">{{'Phone number' | translate }}:</label>
					        <input class="contact-us__input" v-model="phone" type="text" id="phone">
					    </div>
					</div>
					<div class="col-md-6">
					    <div class="contact-us__form-group">
					        <label class="contact-us__label">{{ 'message' | translate}}:</label>
					        <textarea class="contact-us__input contact-us__message" v-model="message" id="message"></textarea> 
					    </div>
					</div>	
				</div>
				<div class="row m-0">
					<div class="col-md-12">
						<div class="orange_btn float-right contact-us__btn-position" @click="contactformSubmit">{{ 'send message' | translate }} </div>
					</div>					
				</div>	    
			    
			</form>

		</div>
	</div>
	
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
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
  			contactformSubmit() {	
				axios.post('http://noostar.dp.ua/api/sendmail/', {
                                        "username": this.name,
                                        "phone": this.phone,
                                        "message": this.message
                                })
                                .then((response) => {
                                        console.log(response.data);
                                        if (response.data.status=='Ok'){
                                                console.log(response.data.status);
                                        }
                                        else{
                                                console.log(response.data.status);
                                        }
                                        this.name = "";
                                        this.phone = "";
                                        this.message = "";

                                })
		    	},
  		},
		//mounted(){
		//	Vue.i18n.set(Vue.i18n.locale());
		//},
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
			padding: 7px 15px 6px 15px;
		}
		&__link{
			font-family: Muller;
			font-size: 12px;
			margin-bottom: 5px;
			text-decoration: underline;			
			color: @darkText;
		}
		&__message{
			height: 114px;
		}
		&__btn-position{
			margin-top: 15px;
			margin-bottom: 80px;
		}
		&__heading-margin{
			margin-top: 66px;
			margin-bottom: 50px;
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
