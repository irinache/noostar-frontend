<template>
	<div class="main-slider">	
		<div class="main-slider__wrapper container-fluid">
			<div class="row">
				<div id="main-slider__right" class="main-slider__right main-slider__arr" v-on:click = "right"></div>
				
				<div id="main-slider__left" class="main-slider__left main-slider__arr" v-on:click = "left"></div>
			</div>	
			<div class="main-slider__slides">
				<div class="main-slider__slide-single">				
				<div class="main-slider__text">
					<h1>
						Учебный центр «Noostar» 1
					</h1>
					<p class="main-slider__welcome-text">
						Учебный центр «Noostar»
						Обучающие программы по программированию
						и интернет-технологиям для людей любого
						возраста и с любой базой знаний					
					</p>
					<a href="#" class="orange_btn btn-animation">Стать студентом</a>
				</div>
			</div>
			<div class="main-slider__slide-single">				
				<div class="main-slider__text">
					<h1>
						Учебный центр «Noostar» 2
					</h1>
					<p class="main-slider__welcome-text">
						Учебный центр «Noostar»
						Обучающие программы по программированию
						и интернет-технологиям для людей любого
						возраста и с любой базой знаний					
					</p>
					<a href="#" class="orange_btn btn-animation">Стать студентом</a>
				</div>
			</div>
			<div class="main-slider__slide-single">				
				<div class="main-slider__text">
					<h1>
						Учебный центр «Noostar» 3
					</h1>
					<p class="main-slider__welcome-text">
						Учебный центр «Noostar»
						Обучающие программы по программированию
						и интернет-технологиям для людей любого
						возраста и с любой базой знаний					
					</p>
					<a href="#" class="orange_btn btn-animation">Стать студентом</a>
				</div>
			</div>			
			</div>
			
		</div>
	</div>
	
</template>

<script>
	export default {
		data: function () {
			return{
				slider_wrapper: 0,
				l_arr: false,
				r_arr: true,
				cards: []
			}				
		},
		methods:{
			getNum: function(str){			
				return +str.replace(/[^\-\d]+/g, "");
			},
			getLeft: function(){
				return this.getNum(this.cards.style.left);
			},	
			getMax: function(){
				return Math.abs(this.cards.offsetWidth - this.offset);
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
					this.switchArrowState('main-slider__left', this.l_arr);
					this.l_arr = true;		
				}
				if(Math.abs(this.getLeft()) + this.offset < this.getMax())
					this.cards.style.left = this.getLeft() - this.offset + 'px';			
				else if (Math.abs(this.getLeft()) + this.offset == this.getMax()){
					this.cards.style.left = this.getLeft() - this.offset + 'px';
					
					this.switchArrowState('main-slider__right', this.r_arr);
					this.r_arr = false;	
				}								
			},
			left: function(){
				if(!this.r_arr){
					this.switchArrowState('main-slider__right', this.r_arr);		
					this.r_arr = true;		
				}
				if(this.getLeft() + this.offset < 0 )
					this.cards.style.left = this.getLeft() + this.offset + 'px';
				else if (this.getLeft() + this.offset == 0){
					this.cards.style.left = this.getLeft() + this.offset + 'px';
					this.switchArrowState('main-slider__left', this.l_arr);
					this.l_arr = false;	
				}
			},	
			reloadSlider: function() {
				let slides = document.querySelectorAll('.main-slider__slide-single');
				this.cards = document.querySelector('.main-slider__slides');
				this.card_width = window.innerWidth; 
				this.offset = this.card_width;
				this.cards.style.width = slides.length*this.offset + 'px';		
				this.cards.style.left = 0;				
				
				document.getElementById('main-slider__left').classList.remove("arr-active");
				document.getElementById('main-slider__left').classList.add("arr-unactive");
				this.l_arr = false;	
					
				document.getElementById('main-slider__right').classList.remove("arr-unactive");
				document.getElementById('main-slider__right').classList.add("arr-active");
				this.r_arr = true;
			},
			handleResize: function(event){				
				this.reloadSlider();
			}					
		},
		mounted: function () {
		    this.reloadSlider();
			this.$nextTick(function() {
				window.addEventListener('resize', this.handleResize);
			});

		}	
	}
</script>

<style lang="less">	
	
	@import '../assets/styles/index.less';

	.main-slider{
		&__wrapper{
			font-size: 0; 
			overflow: hidden;
			width: 100%;
			margin: 0 auto;
			display: inline-block;
			vertical-align: middle;
			position: relative;
			height: 600px;
		}				
		&__arr {
	        position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 86px;
			height: 86px;
			z-index: 13;        
	    }
	    &__left{
			background: url("../assets/images/arrow_left_inactive.png") no-repeat center center/cover;
			left:  70px;
	    }
	    &__right{
	    	background: url("../assets/images/arrow_right_inactive.png") no-repeat center center/cover;
			right: 70px;
	    }
	    &__slides{
			position: absolute;	
			transition: all ease 1s;
			z-index: 10;
	 		text-align: left;
	 		top: 0;
	 		left: 0;
		}
		&__slide-single {
			width: 100vw;	
			height: 600px;
			transition: all ease 1s;
			display: inline-block;
			background: url('../assets/images/bg-header.jpg') no-repeat center top/cover
		}
		&__text{
			margin: 180px 0 0 200px;
			z-index: 10;
			color: @lightText;
			text-align: left;			
		}
		&__welcome-text{
			font-family: Muller;
			font-size: 20px;
			margin-top: 36px;
			margin-bottom: 28px;
			animation: text_appering 2s;
			width: 40%;
		}												
	}		
	
	h1{
		font-family: Muller;
		font-weight: bold;
		font-size: 44px;
		animation: h1_appering 2s;
	}

	.btn-animation{
		animation: btn_appering 2s;
	}	

	@media (max-width: 1000px) {  
		.main-slider{	
			&__arr {
		        width: 66px;
				height: 66px;	       
		    }
		    &__welcome-text{			
				font-size: 16px;
				text-align: center;	
				margin-right: auto;
				margin-left: auto;		
			}
			&__text{
				margin: 180px auto 0 auto;	
				text-align: center;		
			}
		} 		
		h1{
			font-size: 34px;
			text-align: center;	
		}
	}

	@media (max-width: 760px) {   
		.main-slider{
		    &__left{
				left:  40px;
		    }
		    &__right{
		    	right:  40px;
		    }
		}		
	}

	@media (max-width: 708px) {   
		.main-slider{				
		    &__welcome-text{			
				width: 60%;			
			}
			&__text{
				width: 60%;
				margin-top: 140px;		
			}
		}			
	}

	@media (max-width: 500px) {   
		.main-slider{
		    &__left{
				left:  10px;
		    }
		    &__right{
		    	right:  10px;
		    }
		}			
	}
	@media (max-width: 485px) {   
		.main-slider{		    
			&__text{				
				margin-top: 100px;	
			}
		}
	}

	@media (max-width: 425px) {   
		.main-slider{				
		    &__welcome-text{			
				font-size: 14px;
				text-align: center;	
				margin-right: auto;
				margin-left: auto;					
			}
			&__text{
				width: 60%;
				margin-top: 100px;	
			}
		}		
		h1{
			font-size: 28px;
			text-align: center;	
		}
	}

	@media (max-width: 380px) {   
		.main-slider{	
			&__arr {
		        width: 46px;
				height: 46px;	       
		    }
		} 	
	}
	
	@media (max-width: 340px) {
		.main-slider{				
		    &__welcome-text{			
				width: 70%;						
			}
			&__text{
				margin-top: 70px;	
			}
		}
	}

	//animation --------------------

	@keyframes h1_appering {
		0%{
			margin-top: -20px;
			opacity: 0;
		}
		50%{
			margin-top: 0px;
			opacity: 1;
		}
	}

	@keyframes text_appering {
		0%{
			margin-bottom: -20px;
			opacity: 0;

		}
		50%{
			margin-bottom: -20px;
			opacity: 0;
		}
		90%{
			margin-bottom: 0px;
			opacity: 1;
		}
	}

	@keyframes btn_appering {
		0%{
			opacity: 0;			
		}
		93%{
			opacity: 0;			
		}
		100%{					
			opacity: 1;	
		}		
	}
</style>