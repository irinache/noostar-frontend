<template>
	<footer class="footer">
	    <div class="footer__top footer__brdr-btm">
	        <div class="container">
	            <div class="row align-items-center ">
	                <div class="col-md-4 footer__logo">
                    <router-link to="/">
                        <img src="../assets/images/logo.png" alt="logo"/>
                    </router-link>                    
                </div>
	                <div class="col-md-8 text-right footer__contacts">	                    
	                    <div class="footer__contact">
	                        <span class="footer__icon email"></span>
	                        <span class="footer__contact-text">
	                            noostar@gmail.com
	                        </span>
	                    </div>
	                    <div class="footer__contact">
	                        <span class="c-header__icon phone"></span>
                            <span class="c-header__icon viber"></span>
                            <span class="c-header__icon telegram"></span>
                            <span class="c-header__contact-text">
                                +38 (050) 123-45-67
                            </span>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div> 
	    <div class="footer__top">
	    	<div class="container">
	    		<div class="row">
	    			<div class="col-md-6 d-flex align-items-center">
		    			<div class="footer__text">
			    			&copy; ФОП Козаченко Александр Александрович, 2019  
			    		</div>
					</div>	
			    	<div class="col-md-6">
			    		<div class="footer__social-media">
				    		<a href="https://www.facebook.com/noostarua/" class="footer__sm-icon fb"></a>
	<!--- 			    		<a href="#" class="footer__sm-icon in"></a> --> 
			    		</div>	
	    			</div>	    			
	    		</div>	    		
	    	</div>
	    </div> 
	</footer>
</template>

<script>
	
</script>
<style lang="less">
	
	@import '../assets/styles/index.less';

	.footer {
	    &__top {
	        background-color: @mainBlue;        
	    }
	    &__contact-text {
	        font-family: Lato;
	        font-weight: 600;
	        font-size: 15px;
	        color: @lightText;
	        text-align: left;
	    }
	    &__contact {
	       display: inline-block;
	       margin-left: 25px;
	    }
	    &__icon {
	        width: 12px;
	        height: 12px;
	        display: inline-block;
	    }
	    &__social-media{
			margin-top: 20px;
			margin-bottom: 20px;	
			text-align: right;		
		}
		&__sm-icon{
			width: 38px;
			height: 38px;
			display: inline-block;
			margin-left: 17px;
		}
		&__sm-icon:hover{
			transform: scale(1.1);
			transition: 0.2s;
		}
		&__text{
			color: @text;
			font-family: Muller;
			text-align: left;					
		}
		&__brdr-btm{
			border-bottom: 1px solid @footerSeparator;
		}
		&__logo{
		    margin-top: 20px;
		    margin-bottom: 20px;
		    text-align: left;
		}
	}

	.fb{
		background: url(../assets/images/Facebook.png) no-repeat center center/cover;
	}
/*	.in{
		background: url(../assets/images/linkedin.png) no-repeat center center/cover;
	}*/

	@media (max-width: 767px) {
	    .footer {
	        &__contact {  
	            display: block;  
	            text-align: center;             
	            margin-left: 0px;
	        }
	        &__contacts{
	        	margin-top: auto;
	        	margin-bottom: auto;	
	        	margin-bottom: 30px;			
	    	}
	    	&__logo{
	    		margin-bottom: 30px;
		        width: 100%;
		        text-align: center;
		        padding: 20;
		        margin-right: auto;
		        margin-left: auto;
	    	}	
	    	&__text{
	    		display: block;
	    		width: 100%;
	    		text-align: center;
	    		margin-top: 30px;
	    	}
	        &__social-media{
	        	display: block;	 
	        	text-align: center;
	        	margin-top: 10px; 
	        	margin-bottom: 30px;				
			}
			&__sm-icon{
				margin: 8px;
			}        
	    }  
	    .row {
	        margin: 0 !important;
	    }
	    .col-md-auto {
	        width: auto;
	        padding: 5px; 
	    }
	}


	
	
</style>
