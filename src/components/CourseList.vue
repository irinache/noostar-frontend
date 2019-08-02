<template>
	<div class="container-fluid grey_bg course-list">
		<div class="row">
			<Heading text = "Список курсов" color="grey"/>			
		</div>
		<div id="course-list__left" class="course-list__arr course-list__left" v-on:click = "left">
				
		</div>
		<div class="course-list__slider">
			<div class="course-list__cards" >
				<CourseCard v-for="course in courses"
				v-bind:key="course.course_name"
				v-bind:date="course.date" v-bind:course_name="course.course_name"
				v-bind:duration="course.duration"
				v-bind:price="course.price"
				v-bind:teacher="course.teacher"
				/>		
			</div>	
		</div>
						
		<div id="course-list__right" class="course-list__arr course-list__right" v-on:click = "right">
				
		</div>
	</div>
</template>

<script>
import Heading from './heading.vue'
import CourseCard from './CourseCard.vue'
export default {
  components: {
  	Heading,
  	CourseCard
},
	data: function () {
		return{			
			cards: [],
			slider_wrapper: 0,
			card_width: 0,			
			r_arr: true,
			l_arr: false,			
			offset: 0,
			courses: [
				{ 
					date: '23.05.2019',
					course_name: 'Объектно-ориентированное программирование',
					duration: '70 часов',
					price: '5000 грн',
					teacher: 'Козаченко А. А.'
				},
				{
					date: '26.06.2019',
					course_name: 'Тестирование',
					duration: '74 часов',
					price: '5500 грн',
					teacher: 'Иванов В. В.'
 
				},
				{
					date: '28.06.2019',
					course_name: 'Операционные системы',
					duration: '65 часов',
					price: '6500 грн',
					teacher: 'Петров И. И.'
 
				},
				{
					date: '06.08.2019',
					course_name: 'Веб-дизайн',
					duration: '80 часов',
					price: '7500 грн',
					teacher: 'Сидоров В.К.'
 
				},
				{
					date: '29.09.2019',
					course_name: 'Java Core',
					duration: '60 часов',
					price: '5000 грн',
					teacher: 'Иванов В. В.' 
				}
			]
		}				
	},
	beforeDestroy: function () {
    	window.removeEventListener('resize', this.handleResize)
    },
	methods:{	
		getNum: function(str){			
			return +str.replace(/[^\-\d]+/g, "");
		},
		getLeft: function(){
			return this.getNum(this.cards.style.left);
		},	
		getMax: function(){
			this.slider_wrapper = document.querySelector('.course-list__slider').offsetWidth;		
			let count = this.slider_wrapper / this.offset;			
			return Math.abs(this.cards.offsetWidth - count*this.offset);
		},
		switchArrowState: function(id, arr){
			let elem = document.getElementById(id);
				if (arr === true){
					elem.classList.add("arr-unactive");
					elem.classList.remove("arr-active");					
				}
				else if (arr == false){
					elem.classList.add("arr-active");
					elem.classList.remove("arr-unactive");
				}
		},
		right: function(){
			if(!this.l_arr){
				this.switchArrowState('course-list__left', this.l_arr);				
				this.l_arr = true;		
			}
			if(Math.abs(this.getLeft()) + this.offset < this.getMax())
				this.cards.style.left = this.getLeft() - this.offset + 'px';
			else if (Math.abs(this.getLeft()) + this.offset == this.getMax()){
				this.cards.style.left = this.getLeft() - this.offset + 'px';
				this.switchArrowState('course-list__right', this.r_arr);
				this.r_arr = false;					
			}			
		},
		left: function(){
			if(!this.r_arr){
				this.switchArrowState('course-list__right', this.r_arr);
				this.r_arr = true;		
			}
			if(this.getLeft() + this.offset < 0 )
				this.cards.style.left = this.getLeft() + this.offset + 'px';
			else if (this.getLeft() + this.offset == 0){
				this.cards.style.left = this.getLeft() + this.offset + 'px';
				this.switchArrowState('course-list__left', this.l_arr);	
				this.l_arr = false;					
			}
		},	
		reloadSlider: function(){
			let slides = document.querySelectorAll('.course-card');

			this.cards = document.querySelector('.course-list__cards');
			
			this.card_width = document.querySelector('.course-card').offsetWidth; 
			this.offset = this.card_width + 15*2;
			this.cards.style.width = slides.length*this.offset + 'px';

			this.cards.style.left = 0;

			this.l_arr = false;	
			document.querySelector('.course-list__left').classList.remove("arr-active");
			document.querySelector('.course-list__left').classList.add("arr-unactive");

			this.r_arr = true;	
			document.querySelector('.course-list__right').classList.remove("arr-unactive");
			document.querySelector('.course-list__right').classList.add("arr-active");	
		},
		handleResize: function(event){
			this.reloadSlider();
		}
	},
	mounted(){
		this.reloadSlider();

		this.$nextTick(function() {
			window.addEventListener('resize', this.handleResize);
		});				
	},	
}
</script>

<style lang="less">

	@import '../assets/styles/index.less';

	.grey_bg{
		background-color: #f6f6fa;
	}	

	.course-list{
		padding-bottom: 90px;		
		&__slider{
			font-size: 0; 
			overflow: hidden;
			width: 1020px;
			margin: 0 auto;
			display: inline-block;
			vertical-align: middle;
			position: relative;
			height: 470px;			
		}
		&__cards{
			display: inline-block;
			position: absolute;	
			transition: all ease 1s;
			z-index: 10;
	 		text-align: left;
	 		top: 0;
	 		left: 0;
		}
		&__arr{
			width: 50px;
			height: 50px;
			display: inline-block;
			vertical-align: middle;
		}	
		&__left{
			background: url(../assets/images/l_arr.png) no-repeat center top / cover;
			background-size: contain;
			text-align: left;
		}
		&__right {
			background: url(../assets/images/r_arr.png) no-repeat center top / cover;
			background-size: contain;
			text-align: right;
		}
	}

	.arr-active:hover {
		opacity: 1;
	}
	.arr-unactive{
		opacity: 0.3;
	}
	.arr-active{
		opacity: 0.7;
	}

	@media (max-width: 1162px) {
		.course-list{
			&__slider{			
				width: 680px;
			}
		}
	}

	@media (max-width: 850px) {
	    .course-list{
			&__slider{			
				width: 340px;
			}
		}
	}

	@media (max-width: 482px) {   
		.course-list{
			&__slider{			
				width: 280px;
				height: 550px;
			}
			&__arr{
				width: 30px;
				height: 30px;
			}	
		}		
	}

	@media (max-width: 380px) {  
		.course-list{
			&__arr{
				width: 10px;
				height: 30px;
				z-index: 30;
			}	
		}
	}

	@media (max-width: 340px) {  
		.course-list{
			&__slider{			
				width: 250px;
				height: 580px;
			}
		}
	}
</style>