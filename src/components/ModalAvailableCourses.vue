<template>		
		<div class="blackout"  @click="closeModalCourses" v-show="isShowModalCourses">		
			<div class="modal-courses" @click.stop="">

				<heading text = "Доступные курсы" color="white"/>

				<div class="close-btn" @click="closeModalCourses">					
				</div>
				<form action="/register/step-1" class="modal-form" submit="submit">
					<p class="text text-center">Выберите режим обучения и интересующие вас курсы.</p>

					<select class="custom_select modal-select-position">
						<option class="custom_option">В группе</option>
						<option class="custom_option">Индивидуально</option>
					</select>


					<div class="course-container clearfix" v-for="course in courses">
						<label class="checkbox-container" >
							<input type="checkbox">
							<span class="checkmark"></span>

							<div class="modal__img">
								
							</div>
							<div class="course-card__info-title">
								Курс:
							</div>		
							<div class="course-card__course-name">
								{{course.course_name}}
							</div>	
						</label>
						
						<router-link :to="{ name: 'course', params: { id: 1 }}" target="_blank" class="orange_btn modal-details-btn" @click="showCourseDetails(course.id)">
							Подробнее
						</router-link>					  
					</div>

				<input type="submit" class="orange_btn modal-main-btn" value="Записаться">
				<div class="white_btn modal-cancel-btn" @click="closeModalCourses">
					Отмена
				</div>

				</form>


				

					

			</div>	
		</div>	
</template>

<script>
import heading from './heading.vue'


export default {
	components: {
		heading
	},
	data: function(){
  		return {
  			isShowModalCourses: false,
  			courses: [
				{ 
					id: 0,
					date: '23.05.2019',
					course_name: 'Объектно-ориентированное программирование',
					duration: '70 часов',
					price: '5000 грн',
					teacher: 'Козаченко А. А.'
				},
				{
					id: 1,
					date: '26.06.2019',
					course_name: 'Тестирование',
					duration: '74 часов',
					price: '5500 грн',
					teacher: 'Иванов В. В.'
 
				},
				{
					id: 2,
					date: '28.06.2019',
					course_name: 'Операционные системы',
					duration: '65 часов',
					price: '6500 грн',
					teacher: 'Петров И. И.'
 
				},
				{
					id: 3,
					date: '06.08.2019',
					course_name: 'Веб-дизайн',
					duration: '80 часов',
					price: '7500 грн',
					teacher: 'Сидоров В.К.'
 
				},
				{
					id: 4,
					date: '29.09.2019',
					course_name: 'Java Core',
					duration: '60 часов',
					price: '5000 грн',
					teacher: 'Иванов В. В.' 
				}
			]
  		}
  	},
  	methods: {
  		showModalCourses() {   				
	        this.isShowModalCourses = true;	
	        document.body.classList.add("lock");	       
	    },
  		closeModalCourses(){
  			this.isShowModalCourses = false;
  			document.body.classList.remove("lock");  			
  		},
  		showCourseDetails(id){
  			alert("i work")
  		},
  		submit(){

  		}
  	},
  	mounted(){
  		this.$root.$on('modal-on', () => {
  			this.showModalCourses();  			
  		});
  	},
  	destroyed(){
  		this.closeModalCourses();
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
	.modal-courses{
		//z-index: 1051;
		position: relative;
		margin: 70px auto;		
		padding: 0.1px;
		width: 80%;
		//height: 1700px;
		background-color: @lightBackground;
	}	
	.custom_select{
		position: relative;
		display: block;
		padding: 5px 10px;
		width: 180px;
		text-align: left;
		border-radius: 4px;
		font-family: Muller;
		font-size: 14px;		
		color:@darkText;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.modal{
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
	.modal-main-btn{
		width: 40%;
		display: block;
		margin: 30px auto 20px auto;
	}
	.modal-cancel-btn{
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
	.modal-details-btn{
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
	.modal-form{
		width: 80%;
		margin-right: auto;
		margin-left: auto;
	}
	@media (max-width: 913px) {	    
		.modal{
			&__img{				
				margin-left: 70px;		
			}
		}	
		.checkbox-container {
		  
		  width: 60%;
		  
		  
		}
	}
	@media (max-width:700px) {	    
		.modal-courses{	
			width: 100%;		
		}
		.modal-details-btn{
			width:130px;
		}
	}
	
</style>

