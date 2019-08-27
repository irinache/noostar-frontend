<template>	
	<div class="modal-block" v-show="isShowModalCourses">
		<div class="blackout" @click="closeModalCourses" >			
		</div>	
		<div class="modal-courses">
			<heading text = "Доступные курсы" color="white"/>	
			<p class="text text-center">Выберите режим обучения и интересующие вас курсы.</p>
			
			<select class="custom_select">
				<option class="custom_option">В группе</option>
				<option class="custom_option">Индивидуально</option>
			</select>

			<ul>
				<li class="course" v-for="course in courses">	
					<div class="modal__img">
						
					</div>
					<div class="course-card__info-title">
						Курс:
					</div>		
					<div class="course-card__course-name">
						{{course.course_name}}
					</div>	
					<button class="orange_btn" @click="showCourseDetails(course.id)">
						Подробнее
					</button>	
				</li>	
			</ul>

			<router-link to="/register/step-1">Записаться</router-link>
			<button @click="closeModalCourses">
				Отмена
			</button>
			
		</div>
					
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
	    },
  		closeModalCourses(){
  			this.isShowModalCourses = false;
  		},
  		showCourseDetails(id){

  		}
  	},
  	mounted(){
  		this.$root.$on('modal-on', () => {
  			this.showModalCourses();
  			console.log("got it");
  		});
  	}
}
</script>

<style lang="less">
	@import '../assets/styles/index.less';
	.blackout{
		position: fixed;
		//overflow: hidden;
		top:0;
		left: 0;
		//z-index: 90;
		background-color: rgba(0,0,0,0.5);
		width: 100vw;
		height: 100vh;
	}
	.modal-courses{
		z-index: 91;
		position: relative;
		margin-top: 100px;
		overflow: scroll;
		margin-right: auto;
		margin-left: auto;
		padding: 0.1px;
		width: 80%;
		height: 700px;
		background-color: @lightBackground;
	}
	.modal-block{
		position: fixed;
		//overflow: hidden;
		top:0;
		left: 0;
		z-index: 1050;
		//background-color: rgba(0,0,0,0.5);
		width: 100vw;
		height: 100vh;
	}
	.custom_select{
		position: relative;
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
		}
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
	
</style>

