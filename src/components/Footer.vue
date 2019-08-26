<template>
	<footer class="footer">
	    <div class="footer__top footer__brdr-btm">
	        <div class="container">
	            <div class="row align-items-center ">
	                <div class="col-md-4 footer__logo">
	                    <img src="../assets/images/logo.png" alt="logo"/>
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
			    			&copy; 2017  
			    		</div>
					</div>	
			    	<div class="col-md-6">
			    		<div class="footer__social-media">
				    		<div class="footer__sm-icon vk"></div>
				    		<div class="footer__sm-icon fb"></div>
				    		<div class="footer__sm-icon tw"></div>
				    		<div class="footer__sm-icon in"></div> 
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

	.vk{
		background: url(../assets/images/Vkontakte.png) no-repeat center center/cover;
	}
	.fb{
		background: url(../assets/images/Facebook.png) no-repeat center center/cover;
	}
	.tw{
		background: url(../assets/images/Twitter.png) no-repeat center center/cover;
	}
	.in{
		background: url(../assets/images/linkedin.png) no-repeat center center/cover;
	}

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