<template>
 <header class="c-header">
    <div class="c-header__top">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4 logo">
                    <img src="../assets/images/logo.png" alt="logo"/>
                </div>
                <div class="col-md-auto">
                    <div class="c-header__contact">
                        <span class="c-header__icon email"></span>
                        <span class="c-header__contact-text">
                        noostar@gmail.com
                        </span> 
                    </div>
                    <div class="c-header__contact">
                        <span class="c-header__icon phone"></span>
                        <span class="c-header__contact-text">
                            +38 (050) 123-45-67
                        </span>
                    </div>
                </div>
                
                <div class="btn-group col-md-auto dropdown-lang">
                    <button type="button" class="btn c-header__lang dropdown-toggle" data-toggle="dropdown">
                           English
                    </button>
                     <div class="dropdown-menu">
                        <a class="dropdown-item c-header__lang" href="#">English</a>
                        <a class="dropdown-item c-header__lang" href="#">Russian</a>
                        <a class="dropdown-item c-header__lang" href="#">Ukrainian</a>
                    </div>
                </div>  
                <div class="col-md-auto btn_container">
                    <a class="orange_btn c-header__btn-position ">
                        Учиться
                    </a>
                </div>  
            </div>
        </div>
    </div>
</header>
</template>

<script>
    export default{
        
    }
</script>

<style lang="less">

@import '../assets/styles/index.less';

.c-header {
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
       margin-right: 25px;
    }
    &__icon {
        width: 12px;
        height: 12px;
        display: inline-block;
    }
    &__btn-position{
        margin: 0 auto;  
        margin-top: 20px;
        margin-bottom: 20px;
    }
    &__lang{
        padding: 7px 15px 7px;
        border: 1px @text;
        box-shadow: none;
        border-radius: 4px;
        color:@text;
        font-family: Muller;
        font-size: 13px !important;   
        background-color: @lightBackground !important;
    }

}
.logo{
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: left;
}

.email{
     background: url('../assets/images/email_icon.png') center/cover no-repeat content-box;
}
.phone{
     background: url('../assets/images/phone_icon.png') center/cover no-repeat content-box;
}

@media (max-width: 1198px) {
    .c-header {
        &__btn-position{
            margin-top: 20px;
            margin-bottom: 20px;
        }

        &__contact {  
            display: block;
            text-align: left;
        }
    }
}

@media (max-width: 770px) {
    .row {
        margin: 0 !important;
    }
    .col-md-auto {
        width: auto;
        padding: 5px; 
    }
}

@media (max-width: 770px) {
    .c-header {
        &__contact {  
            display: block;  
            text-align: left;             
            margin-right: 0px;
        }
        
    }  
    .btn_container{       
        margin-bottom: 10px;    
    }
    .dropdown-lang{
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 20px;
        margin-top: 10px; 
    }
    .logo{
        width: 100%;
        text-align: center;
        padding: 20;
        margin-right: auto;
        margin-left: auto;
    }
}
@media (max-width: 482px) {
    .c-header {
        &__contact {            
            text-align: center;             
            margin-right: 0px;
            width: 90vw;
        }
        &__btn-position{
            width: 100%;
        }
    }
    
    .btn_container{
        width: 100%;  
        margin-left: auto;
        margin-right: auto;      
        margin-bottom: 10px;    
    }
    .logo{
        width: 100%;
        text-align: center;
        margin-right: auto;
        margin-left: auto;
    }
    .dropdown-lang{        
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 20px;
        margin-top: 10px; 
    }
}
</style>