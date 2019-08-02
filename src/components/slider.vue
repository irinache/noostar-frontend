<template>
	<div>
		<div class="container">
			<div class="row">
				<div id="right" class="arr" v-on:click = "right"></div>
				<div class="text">
					<h1>
						Учебный центр «Noostar»
					</h1>
					<p class="welcome_text">
						Учебный центр «Noostar»<br>
						Обучающие программы по программированию<br>
						и интернет-технологиям для людей любого<br>
						возраста и с любой базой знаний<br>						
					</p>
					<a href="#" class="orange_btn">Стать студентом</a>
				</div>
				<div id="left" class="arr" v-on:click = "left"></div>
			</div>			
		</div>		
		<div id="slide">
			<img src="../assets/images/bg-header1.jpg" class="slide-single" alt="">
			<img src="../assets/images/bg-header2.jpg" class="slide-single" alt="">
			<img src="../assets/images/bg-header3.jpg" class="slide-single" alt="">		
		</div>
	</div>
	
</template>

<script>
	export default {
		data: function () {
			return{
				step: 0,
				offset: -1,
				slides: [],
				slider: [],
				slides2: [],
				slides3: []
			}				
		},
		ready: function() {
			
		},
		methods:{			
			draw: function(direction){
				let img = document.createElement('img');
				img.src = this.slider[this.step];
				img.classList.add('slide-single');
				img.style.left = this.offset*100 + '%';

				if (direction == "l" || direction == "none"){
					document.querySelector('#slide').appendChild(img);
					if (this.step + 1 == this.slider.length){
						this.step = 0;
					}
					else{
						this.step++ 
					}
				}
				if (direction == "r"){					
					var first_child = document.querySelector('.slide-single');
					document.querySelector('#slide').insertBefore(img, first_child);
					if (this.step == 0){
						this.step = 2;
					}
					else{
						this.step--; 
					}
				}
				
				if(this.offset < this.slider.length - 1){
					this.offset++;
				}				
			},
			left: function(){			
				this.hideControls();
				var ref = this;
				this.slides2 = document.querySelectorAll('.slide-single');
				console.log(this.slides2)
				this.slides2[0].remove();
				this.offset = 1;

				this.draw("l");
				 
				let offset2 = 0;
				for(let i = 1; i < this.slides2.length; i++){
					this.slides2[i].style.left = offset2*100 - 100 +'%';
					offset2++;
				}				
				setTimeout(function(){	
					ref.showControls();
				}, 1000)	
			},
			hideControls: function(){
				document.getElementById("left").style.visibility = "hidden";
				document.getElementById("left").onclick = null;
				document.getElementById("right").style.visibility = "hidden";
				document.getElementById("right").onclick = null;
			},
			showControls: function(){
				document.getElementById("left").style.visibility = "visible";
				document.getElementById("left").onclick = this.left;
				document.getElementById("right").style.visibility = "visible";
				document.getElementById("right").onclick = this.left;
			},
			right:function(){
				this.hideControls();
				var ref = this;
				this.slides3 = document.querySelectorAll('.slide-single');
				console.log(this.slides3)
				this.slides3[this.slides3.length - 1].remove();
				this.offset = -1;
				
				this.draw("r")

				let offset3 = -1;
				for(let i = 0; i < this.slides3.length - 1; i++){
					this.slides3[i].style.left = offset3*100 + 100 +'%';
					offset3++;
				}			
				setTimeout(function(){	
					ref.showControls();
				}, 1000)
			}
		},
		mounted: function () {
		    this.slides = document.querySelectorAll('.slide-single')
			console.log(this.slides); 
			for(let i = 0; i < this.slides.length; i++){
				this.slider[i] = this.slides[i].src;
				this.slides[i].remove();
				console.log(this.slides); 
			}
			console.log(this.slider);
			this.draw("none"); 
			this.draw("none"); 
			this.draw("none"); 
			document.getElementById("left").onclick = this.left;
		}
	
	}

</script>

<style>	

	@import '../assets/styles/index.less';
	
	#slide{
		width: 100%;
		height: 620px;		
		margin: 0 auto;
		position: relative;
		font-family: sans-serif;
		overflow: hidden;
	}
	.slide-single {
		width: 100%;		
		position: absolute;
		transition: all ease 1s;
		left: 0;
		top:0;
	}
	#right{		
		background: url("../assets/images/arrow_right_inactive.png") no-repeat center;
		right: 70px;
	}
	#left{		
		background: url("../assets/images/arrow_left_inactive.png") no-repeat center;
		left:  70px;
	}
	.arr{
		position: absolute;
		top: 350px;
		width: 86px;
		height: 86px;
		z-index: 10;
	}
	.text{
		position: absolute;
		top: 260px;
		left: 200px;
		z-index: 10;
		color: white;
		text-align: left;
	}
	h1{
		font-family: Muller;
		font-weight: bold;
		font-size: 44px;
	}
	.welcome_text{
		font-family: Muller;
		font-size: 20px;
		margin-top: 36px;
		margin-bottom: 28px;
	}
	.orange_btn{
		background-color: #ff5215;
		color: white;
		font-family: Muller;
		font-weight: bold;
		font-size: 12px;
		border-radius: 5px;
		text-transform: uppercase;

		padding: 12px 25px 10px 25px;
		
	}
	a:hover{
		background-color: #ff652f;
		color: white;
		text-decoration: none;
	}

</style>