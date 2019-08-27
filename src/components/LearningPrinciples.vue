<template>
	<div class="grey_bg learning-principles">
		<div class="container">
			<div class="row">
				<div v-for="p in principles" class="col-md-4 learning-principles__block learning-principles__border">
					<div class="learning-principles__icon mx-auto d-block" :class="p.img">					
					</div>
					<h3>
						{{p.heading}}
					</h3>				
					<p class="learning-principles__text">
						{{p.text}}
					</p>
				</div>
				
			</div>
		</div>
	</div>	
</template>

<script>
	export default {
  		data: function(){
  			return {
  				principles: [
					{ 
						img: 'hat',
						heading: 'LOREM IPSUM DOLOR',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',			
					},
					{ 
						img: 'lamp',
						heading: 'UT ENIM AD MINIM',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',			
					},
					{ 
						img: 'book',
						heading: 'DUIS AUTE IRURE',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',			
					}
					
				]
  			}
  		}  
  	}
</script>

<style lang="less">

	@import '../assets/styles/index.less';

	.learning-principles{
		background-color: @darkerBackground;
		&__block{
			padding: 20px;	
			margin-top: 50px;
			margin-bottom: 50px;
		}
		&__border{
			border-right: 1px solid @border;
		}
		&__border:last-child{
			border-right: 0px;
		}
		&__icon{
			width: 109px;
			height: 109px;
			margin: 30px;
		}
		&__text{
			font-family: Muller Light;
			color: @text;
		}
	}	
	
	.book{
		background: url('../assets/images/book.png') center no-repeat;
	}

	.lamp{
		background: url('../assets/images/lamp.png') center no-repeat;
	}

	.hat{
		background: url('../assets/images/hat.png') center no-repeat;
	}

	h3{
		font-family: Muller Medium;
		font-size: 18px !important;
		margin-bottom: 20px;
	}

	@media (max-width: 767px) {
		.learning-principles{
			&__border{
				border-right: 0;				
			}			
		}	
	}	
</style>