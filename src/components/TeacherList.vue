<template>
	<div class="container-fluid teacher-list">
		<div class="row">
			<Heading text = "Преподаватели" color="white"/>			
		</div>
		
		<div id="teacher-list__left" class="teacher-list__arr teacher-list__left" v-on:click = "left">				
		</div>

		<div class="teacher-list__slider">
			<div class="teacher-list__cards" >
				<TeacherCard v-for="teacher in teachers"
				v-bind:key="teacher.name"
				v-bind:name="teacher.name"
				v-bind:specialty="teacher.specialty" 
				v-bind:info="teacher.info"
				/>		
			</div>	
		</div>
						
		<div id="teacher-list__right" class="teacher-list__arr teacher-list__right" v-on:click = "right">				
		</div>				
		
	</div>
</template>

<script>
	import Heading from './heading.vue'
	import TeacherCard from './TeacherCard.vue'
	export default {
  		components: {
  			Heading,
  			TeacherCard
  	},
 	data: function () {
		return{			
			cards: [],
			slider_wrapper: 0,
			card_width: 0,			
			r_arr: true,
			l_arr: false,	
			offset: 0,
			teachers: [
				{ 
					name: 'Иван Иванов 1',
					specialty: 'ТЕСТИРОВЩИК ПО',
					info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
				},
				{
					name: 'Иван Иванов 2',
					specialty: 'ТЕСТИРОВЩИК ПО',
					info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
 
				},
				{
					name: 'Иван Иванов 3',
					specialty: 'ТЕСТИРОВЩИК ПО',
					info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
 
				},
				{
					name: 'Иван Иванов 4',
					specialty: 'ТЕСТИРОВЩИК ПО',
					info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
 
				},
				{
					name: 'Иван Иванов 5',
					specialty: 'ТЕСТИРОВЩИК ПО',
					info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
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
			this.slider_wrapper = document.querySelector('.teacher-list__slider').offsetWidth;		
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
				this.switchArrowState('teacher-list__left', this.l_arr);				
				this.l_arr = true;		
			}
			if(Math.abs(this.getLeft()) + this.offset < this.getMax())
				this.cards.style.left = this.getLeft() - this.offset + 'px';
			else if (Math.abs(this.getLeft()) + this.offset == this.getMax()){
				this.cards.style.left = this.getLeft() - this.offset + 'px';
				
				this.switchArrowState('teacher-list__right', this.r_arr);
				this.r_arr = false;	
			}			
		},
		left: function(){
			if(!this.r_arr){
				this.switchArrowState('teacher-list__right', this.r_arr);				
				this.r_arr = true;		
			}
			if(this.getLeft() + this.offset < 0 )
				this.cards.style.left = this.getLeft() + this.offset + 'px';
			else if (this.getLeft() + this.offset == 0){
				this.cards.style.left = this.getLeft() + this.offset + 'px';
				
				this.switchArrowState('teacher-list__left', this.l_arr);
				this.l_arr = false;	
			}			
		},	
		reloadSlider: function(){
			let slides = document.querySelectorAll('.teacher-card');

			this.cards = document.querySelector('.teacher-list__cards');
			
			this.card_width = document.querySelector('.teacher-card').offsetWidth; 
			this.offset = this.card_width + 15*2;
			this.cards.style.width = slides.length*this.offset + 'px';

			this.cards.style.left = 0;

			this.l_arr = false;	
			document.querySelector('.teacher-list__left').classList.remove("arr-active");
			document.querySelector('.teacher-list__left').classList.add("arr-unactive");

			this.r_arr = true;	
			document.querySelector('.teacher-list__right').classList.remove("arr-unactive");
			document.querySelector('.teacher-list__right').classList.add("arr-active");
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

	.teacher-list{
		padding-bottom: 90px;		
		&__arr{
			width: 50px;
			height: 50px;
			display: inline-block;					
		}
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
		&__left{
			background: url(../assets/images/l_arr.png) no-repeat center top / cover;
			background-size: contain;
			text-align: left;
		}
		&__right{
			background: url(../assets/images/r_arr.png) no-repeat center top / cover;
			background-size: contain;
			text-align: right;
		}
		&__cards{
			display: inline-block;
			position: absolute;	
			transition: all ease 1s;
			z-index: 10; 		
	 		top: 0;
	 		left: 0;
		}
	}	

	@media (max-width: 1162px) {
		.teacher-list{
			&__slider{
				width: 680px;
			}
		}   
	}
	@media (max-width: 850px) {
		.teacher-list{
			&__slider{
				width: 340px;
			}
		}
	}

	@media (max-width: 482px) {
		.teacher-list{
			&__slider{
				width: 280px;
				height: 530px;
			}
			&__arr{
				width: 30px;
				height: 30px;
			}
		}				
	}

	@media (max-width: 380px) {  
		.teacher-list{
			&__arr{
				width: 10px;
				height: 30px;
				z-index: 30;
			}	
		}
	}
	@media (max-width: 340px) {  
		.teacher-list{
			&__slider{			
				width: 250px;
				height: 430px;
				
			}
		}
	}

</style>