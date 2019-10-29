<template>	
	<div>
		<Header />
		<div class="container-fluid p-0">
			<div class="row">
				<div class="col-md-12">
					<heading :text = "course.name"  color="white"/>	
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 course__image">
					
				</div>
			</div>
		</div>
		<div class="container">
			
			<div class="row">			

				<div class="col-md-12 p-0  text-left">
					<div class="info-block float-left">
						<p class="course__info-title">
							Преподаватель:
						</p>
						<p class="course__info-text m-0">
							{{course.teacher}}
						</p>
					</div>	
					<div class="info-block float-right text-right">					
						<p class="course__info-title">
							Длительность:
						</p>
						<p class="course__info-text m-0">
							{{course.duration}}
						</p>
					</div>									
				</div>
				
			</div>
			<div class="row">
				<div class="col-md-12 course__info">
					<p class="course__info-title">
						Этот курс предназначен для:
					</p>
					<p class="course__info-text course__info-text-margin">
						{{course.who_can_apply}}
					</p>
					<p class="course__info-title">
						Для прохождения курса необходимо наличие следующих стартовых знаний:
					</p>
					<p class="course__info-text course__info-text-margin" v-html="course.basic_skills">
						{{course.basic_skills}}
					</p>
					<p class="course__info-title">
						После прохождения этого курса вы приобретете следующие знания и навыки:
					</p>
					<p class="course__info-text course__info-text-margin"  v-html="course.final_skills">
						{{course.final_skills}}
					</p>
					<p class="course__info-title">
						Стоимость курса:
					</p>
					<table>
						<tr>
							<th class="table-heading">
								Форма обучения
							</th>
							<th class="table-heading">
								Стоимость
							</th>							
						</tr>
						<tr>
							<td class="course__info-text table-cell">
								Индивидуальные занятия
							</td>
							<td class="course__info-text table-cell">
								7 000 грн
							</td>
						</tr>
						<tr>
							<td class="course__info-text table-cell">
								Занятия в группе
							</td>
							<td class="course__info-text table-cell">
								5 000 грн
							</td>
						</tr>
					</table>					
				</div>				
			</div>
			<div class="row">
				<div class="col-md-12 text-center">
					<button type="button" class="orange_btn course__btn-pos" @click="showModalCourses">Записаться на курс</button>	
				</div>
			</div>			
		</div>		
		<Footer />
	</div>		
</template>

<script>
import Header from './Header.vue'
import heading from './heading.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Footer from './Footer.vue'

export default {
  components: {
  	Header,
  	heading,
  	Footer
  },
  data() {
    return {
      info: null,
      course:{
      	name: "Операционные системы",
      	teacher: "Иванов И.И.",
      	duration: "70 часов",
      	who_can_apply: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
      	basic_skills:"- Lorem ipsum dolor sit amet, <br>- consectetur adipiscing elit, <br>- sed do eiusmod tempor incididunt <br>-  ut labore et dolore magna aliqua,<br>- quis ipsum suspendisse ultrices gravida,<br>- risus commodo viverra maecenas accumsan lacus vel facilisis. ",
      	final_skills:"- Lorem ipsum dolor sit amet, <br>- consectetur adipiscing elit, <br>- sed do eiusmod tempor incididunt <br>-  ut labore et dolore magna aliqua,<br>- quis ipsum suspendisse ultrices gravida,<br>- risus commodo viverra maecenas accumsan lacus vel facilisis. ",

      }
      
      
    };
  },
		methods: {
    		showModalCourses() {    			
    			this.$root.$emit('modal-on');	        	
	      	}
	    },
  mounted() {
   axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  filters: {
  currencydecimal (value) {
    return value.toFixed(2)
  }
}
}
</script>

<style lang="less">
	@import '../assets/styles/index.less';
	.course{
		&__image{
			width: 100%;
			background: url(../assets/images/course-img.png) no-repeat center top / cover; 
			height: 200px;
			display: block;
		}
		&__info{
			text-align: left;
			margin-top: 40px;
			padding: 0 !important;
		}
		&__info-title{			
			font-weight: bold;
			font-size: 14px;
			color: @darkText;
			margin-bottom: 5px;
		}
		&__info-text{			
			color: @text;
			font-size: 14px;

		}
		&__info-text-margin{
			margin-bottom: 30px;
		}
		&__btn-pos{
			width: 30% !important;
			margin-bottom: 50px;
		}
	}
	.info-block{
		width: 200px;
		margin-top: 30px;
		padding: 15px 20px !important;
		border-radius: 4px;
		border: 1px solid @border;		
		display: inline-block;
	}	
	.table-heading{			
		font-size: 14px;
		color: @darkText;
		margin-bottom: 5px;
		padding: 15px;
		border-bottom: 1px solid @border;
	}
	.table-cell{
		padding: 10px;
	}
	table{
		margin-bottom: 35px;
	}
	
	@media (max-width: 767px) {
	   .course{		
		&__btn-pos{
			width: 60% !important;
			
		}
	}
	table {
	    	margin-right: auto;
	    	margin-left: auto;

	    }
	}	

	@media (max-width: 446px) {
	    .course{		
			&__btn-pos{
				width: 90% !important;
				
			}
		}
		.info-block{
			width: 160px;			
		}	
	}
	@media (max-width: 366px) {	    
		.info-block{
			width: 140px;	
			padding: 10px 15px !important; 		
		}	
	}

</style>

