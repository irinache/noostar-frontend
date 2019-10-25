<template>		
	<div class="blackout"  @click="closeEvent" v-show="isShowEvent">		
		<div class="events" @click.stop="">
			<heading text = "Event Registration" color="white"/>
			<div class="close-btn" @click="closeEvent"></div>
			<form action="/register/step-1" class="event-form">
				<div id="step-1" v-show="step==1">
					<label class="text form__text-margin">{{ 'Reg form label' | translate}} </label>
					<p id="err-msg" class="err-text form__text-margin">{{ errorText  }}</p>
					<div class="contact-us__form-group">
						<label class="contact-us__label">{{ 'e-mail' | translate}}:</label>
						<input class="contact-us__input" v-model="email" type="text" id="email">
					</div>

                                        <div class="contact-us__form-group">
                                                <label class="contact-us__label">{{ 'first name' | translate}}:</label>
                                                <input class="contact-us__input" v-model="first_name" type="text" id="first_name">
                                        </div>

					<div class="contact-us__form-group">
                                                <label class="contact-us__label">{{ 'last name' | translate}}:</label>
                                                <input class="contact-us__input" v-model="last_name" type="text" id="last_name">
                                        </div>

					<div class="orange_btn event-main-btn" @click="showLastStep">{{"Next label" | translate }}</div>
				</div>
				<div id="step-2" v-show="step==2">
				<p id="err-msg" class="err-text form__text-margin">{{ errorText  }}</p>

							<label class="text form__text-margin">{{ 'Finish registration label' | translate}}</label>
							<div class="contact-us__form-group">
								<label class="contact-us__label">{{ 'Enter code label' | translate}}:</label>
								<input class="contact-us__input" v-model="code" type="text" id="code">
							</div>
					<div class="orange_btn event-main-btn" @click="finish">{{"Join label" | translate }}</div>
				</div>
				<div class="white_btn event-cancel-btn" @click="closeEvent">
					{{ 'Cancel label' | translate }}
				</div>

			</form>
			</div>	
		</div>	
</template>

<script>
import Vue from 'vue'
import heading from './heading.vue'
import axios from 'axios'


export default {
	components: {
		heading
	},
	data: function(){
  		return {
  			isShowEvent: false,
			step: 1,
			email: "",
			code: "",
			first_name: "",
			last_name: "",
			errorText: ""
  		}
  	},
  	methods: {
		showEvent() {
			this.isShowEvent = true;	
			document.body.classList.add("lock");	       
		},
  		closeEvent(){
  			this.isShowEvent = false;
  			document.body.classList.remove("lock");
  			this.step = 1;
			this.email = "";
                        this.code = "";
			this.first_name = "";
                        this.last_name = "";
  		},
		showLastStep() {
			if (this.email != "" && this.first_name != "" && this.last_name != ""){
				let visitor = {
                                	'email': this.email,
                                        'first_name': this.first_name,
                                        'last_name': this.last_name 
                               	}
				axios.post('http://noostar.dp.ua/api/auth/regvisitor/', {'visitor': visitor})
 	             			.then((response) => {
             		              	        console.log(response.data);
                				if (response.status==200){
							++this.step;
						}
                		})
				.catch (error => {
					document.getElementById("err-msg").style.display = "block";
					console.log('error: ')
					console.log(error.response.data['email'][0]);
					if ('email' in error.response.data) {
						document.getElementById("err-msg").style.display = "block";
                                        	this.errorText = Vue.i18n.translate(error.response.data['email'][0]);
                                	}
				})
			}
			else{
				document.getElementById("err-msg").style.display = "block";
                                this.errorText = Vue.i18n.translate("error fill all fields");
			}
		},
  		finish(){
			if (this.code == ""){
				document.getElementById("err-msg").style.display = "block";
                                this.errorText = Vue.i18n.translate("error code absent");
				return;
			}
			axios.post('http://noostar.dp.ua/api/auth/meetupsign/', {'email': this.email, 'code': this.code})
				.then((response) => {
                                	console.log(response.data);
				})
				.catch (error => {
            				console.log(error.response.data);
					document.getElementById("err-msg").style.display = "block";
                                        this.errorText = Vue.i18n.translate(error.response.data.message);
          			})
  		}
  	},
  	mounted(){
		Vue.i18n.set(Vue.i18n.locale());
  		this.$root.$on('event-on', () => {
  			this.showEvent();  			
  		});
		document.getElementById("err-msg").style.display = "none";
  	},
  	destroyed(){
  		this.closeEvent();
  	}

}
</script>

<style lang="less">
	@import '../assets/styles/index.less';
	.blackout{
		background-color: rgba(0, 0, 0, 0.5);
		  position: fixed;
		  top: 0;
		  left: 0;
		  width: 100%;
		  height: 100%;
		  overflow: auto;		 
		  padding: 0 20px;
		  z-index: 1050;		
	}
	.events{
		//z-index: 1051;
		position: relative;
		margin: 70px auto;		
		padding: 0.1px;
		width: 80%;
		//height: 1700px;
		background-color: @lightBackground;
	}	
	.event{
		&__img{
			background: url("../assets/images/course_img.jpg");
			height: 50px;
			width: 50px;
			float: left;
			margin: 11px;
			margin-left: 90px;		}
	}

	ul{
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		padding: 0;
	}
	li{
		list-style-type: none;
		background-color: @darkerBackground;
		border-radius: 4px;
		padding: 10px;
		margin:10px; 
	}
	.close-btn{
		position: absolute;
		top:30px;
		right: 30px;
		width: 20px;
		height: 20px;
		background: url("../assets/images/cross.png");
		cursor: pointer;
	}
	.lock{		
		overflow: hidden;
	}
	.event-main-btn{
		width: 40%;
		display: block;
		margin: 30px auto 20px auto;
	}
	.event-cancel-btn{
		margin: 20px auto 50px auto;
	}

	/* The container */
	.checkbox-container {
	  display: block;
	  position: relative;
	  display: inline-block;

		float: left;

	  
	  margin: 0px auto;
	  cursor: pointer;
	  font-size: 22px;
	  width: 70%;
	  
	  -webkit-user-select: none;
	  -moz-user-select: none;
	  -ms-user-select: none;
	  user-select: none;
	}

	/* Hide the browser's default checkbox */
	.checkbox-container input {
	  position: absolute;
	  opacity: 0;
	  cursor: pointer;
	  height: 0;
	  width: 0;
	}

	/* Create a custom checkbox */
	.checkmark {
	  position: absolute;
	  top: 50%;
	  left: 20px;
	  transform: translateY(-50%);
	  height: 35px;
	  width: 35px;
	  background-color: @lightBackground;
	  border: 1px solid @border;

	  border-radius: 2px;
	}

	/* On mouse-over, add a grey background color */
	.checkbox-container:hover input ~ .checkmark {
	  background-color: @darkerBackground;
	}

	/* When the checkbox is checked, add a blue background 
	.course-container input:checked ~ .checkmark {
	  background-color: @lightBackground;
	   border: 1px solid @border;
	   border-radius: 2px;
	}*/

	/* Create the checkmark/indicator (hidden when not checked) */
	.checkmark:after {
	  content: "";
	  position: absolute;
	  display: none;
	}

	/* Show the checkmark when checked */
	.checkbox-container input:checked ~ .checkmark:after {
	  display: block;
	}

	/* Style the checkmark/indicator */
	.checkbox-container .checkmark:after {
	  left: 10px;
	  top:0px;
	  width: 12px;
	  height: 28px;
	  border: solid @mainOrange;
	  border-width: 0 4px 4px 0;
	  -webkit-transform: rotate(45deg);
	  -ms-transform: rotate(45deg);
	  transform: rotate(45deg);
	}
	.event-details-btn{
		width:150px;
		float: right;
		margin-right: 20px;
		margin-top: 20px;
	}
	.course-container{
		width: 100%;
		background-color: @darkerBackground;
	    border: 1px solid @border;
	    border-radius: 4px;
	    margin-top: 20px;
	}
	.event-form{
		width: 80%;
		margin-right: auto;
		margin-left: auto;
	}
	@media (max-width: 913px) {	    
		.event{
			&__img{				
				margin-left: 70px;		
			}
		}	
		.checkbox-container {
		  
		  width: 60%;
		  
		  
		}
	}
	@media (max-width:700px) {	    
		.events{	
			width: 100%;		
		}
		.event-details-btn{
			width:130px;
		}
	}
	
</style>

