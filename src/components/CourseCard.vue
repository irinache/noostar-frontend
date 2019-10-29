<template>
	<router-link :to="{ name: 'course', params: { id: 1 }}" target="_blank" class="course-card" id="course-card">		
		<div class="course-card__head">
			<div class="course-card__head-text">
				{{ 'Course start label' | translate }}:
				<span class="course-card__date">
				{{ date | translate }}
				</span>
				<span class="orange_btn course-card__btn-pos">{{ 'Course start' | translate}}</span>			
			</div>			
		</div>
		<div class="course-card__image">
			<img class="course-card__image__cover" :src=cover>
		</div>		
		<div class="course-card__course-info">
			<p class="course-card__info-title">
				{{ 'Course label' | translate }}:
			</p>
			<div class="course-card__course-name">
				{{course_name | translate }}
			</div>
			<div class="clearfix">
				<div class="course-card__duration">
					<p class="course-card__info-title">
						{{ 'Course duration label' | translate }}:
					</p>
					<p class="course-card__info-text">
						{{duration | translate}}
					</p>
				</div>
				<div class="course-card__price">
					<p class="course-card__info-title">
						{{ 'Course price label' | translate }}:
					</p>
					<p class="course-card__info-text">
						{{ price }}
					</p>
				</div>
			</div>
			
			<div class="course-card__teacher">
				<p class="course-card__info-title">
					{{ 'Course authors label' | translate }}:
				</p>
				<p class="course-card__info-text">
					{{ teacher | translate }}
				</p>
			</div>
			<div class="course-card__info-btn">
				<button type="button" class="orange_btn course-card__btn-pos" @click="showModalCourses">{{ 'Join btn' | translate }}</button>			
			</div>
			
		</div>
	</router-link>
</template>

<script>

	import ModalAvailableCourses from './ModalAvailableCourses.vue';
        import Vue from 'vue';
	export default {
		components:{
			ModalAvailableCourses
		},
                data: {
                    uurl: '/123',
                },
		props:{		
			date: String,
			course_name: String,
			duration: String,
			price: String,
			teacher: String,
			cover: String
		},
		methods: {
    		showModalCourses() {    			
    			this.$root.$emit('modal-on');	        	
	      	},
                mounted: function() {
                    Vue.i18n.set(Vue.i18n.locale());
                },
	    },
	}
</script>

<style lang="less">

	@import '../assets/styles/index.less';
	
	p{
		margin: 0;
		padding: 0;
	}
	.course-card{	
		text-decoration: none;
		height: 455px;
		width: 310px;
		margin: 15px;
		border: 1px solid @cardBorder;
		border-radius: 3px;
		display: inline-block;
		background-color: @lightBackground;
		&__head-text{
			margin: 0 auto;
			margin-top: 20px;
		}	
		&__head{
			background-color: @mainBlue;
			border-radius: 3px;			
			font-size: 10px;
			text-align: center;
			color: @lightText;
			height: 58px;
			overflow: auto;
		}
		&__date{
			font-weight: bold;
			font-size: 10px;
			color: @lightText;
			margin-right: 5px;
		}
		&__image{
			width: 308px;
			height: 154px;
			overflow: hidden;
			/*background: url("../assets/images/course_img.jpg");*/
			margin-top: -3px;
			&__cover{
				width: 100%;	            
				margin-top: -3px;
				object-fit: cover;
			}
		}
		&__course-name{		
			font-weight: bold;
			color: @mainOrange;
			text-transform: uppercase;
			font-size: 12px;
			text-align: left;		
			margin-left: 23px;	
			margin-right: 23px;		 
			margin-bottom: 13px;
			height: 35px;
		}
		&__duration{
			float: left;
			width: 50%;
			border-top: 1px solid @cardBorder;
			border-bottom:  1px solid @cardBorder;
			
		}
		&__price{
			float: right;
			width: 50%;
			border-left: 1px solid @cardBorder;
			border-top: 1px solid @cardBorder;
			border-bottom:  1px solid @cardBorder;
			
		}
		&__info-title{
			margin-left: 23px;
			margin-top: 10px;
			margin-bottom: 3px;					
			font-size: 10px;
			color: @infoTitle;
			text-align: left;
		}
		&__info-text{
			margin-left: 23px;
			margin-bottom: 10px;					
			font-size: 10px;
			color: @darkText;
			text-align: left;
		}
		&__teacher{
			border-bottom:  1px solid @cardBorder;
		}
		&__info-btn{
			margin-top: 16px;
			text-align: center;
			margin-bottom: 10px;
			color: @lightText;
		}
	}
	.course-card:hover{	
		text-decoration: none;
		box-shadow: 0 0 6px rgba(0,0,0,0.1); 
		border-color: @infoTitle;
	}	
	
	.clearfix:after{
		content: ""; 
		display: table; 
		clear: both; 
	}
	

	@media (max-width: 482px) {   
		.course-card{
			width: 250px;
			height: 530px;
			&__btn-pos{
				width: 80%;
				display: block;
				margin: 10px auto 0 auto;
			}
			&__head{
				height: 100px;
			}
			&__image{
				width: 248px;
				height: 124px;
			}
		}		
	}
	@media (max-width: 340px) {   
		.course-card{
			width: 220px;
			height: 550px;
			&__course-name{
				height: 50px;
			}
			&__image{
				width: 218px;
				height: 109px;
			}
		}	
					
	}
</style>
