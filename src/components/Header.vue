<template>
 <header class="c-header">
    <div class="c-header__top">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4 logo">
                    <router-link to="/">
                        <img src="../assets/images/logo.png" alt="logo"/>
                    </router-link>                    
                </div>                
                <div class="col-md-8 c-header__elements">
                    <div class="c-header__contacts">
                        <div class="c-header__contact">
                            <span class="c-header__icon phone"></span>
                            <span class="c-header__icon viber"></span>
                            <span class="c-header__icon telegram"></span>
                            <span class="c-header__contact-text">
                                +38 (050) 123-45-67
                            </span>
                        </div>
                        <div class="c-header__contact">
                            <span class="c-header__icon email"></span>
                            <span class="c-header__contact-text">
                            noostar@ukr.net
                            </span> 
                        </div>   
                    </div>                    
                    <div class="c-header__langauges">
                        <span id="ua" class="c-header__lang" @click="chooseLang('uk')">UA</span>
                        <span id="ru" class="c-header__lang current-lang" @click="chooseLang('ru')">RU</span>
                    </div> 
                     <router-link to="/login" class="orange_btn c-header__btn-position">
                         {{ 'signin' | translate }}
                     </router-link>
               
                </div>               
            </div>
        </div>
    </div>
</header>
</template>

<script>
    import Vue from 'vue';
    export default{
        data: function () {
            return{
                                
            }               
        },
        methods:{           
            chooseLang: function(value){
               if(value == "uk"){
                    ru.classList.remove("current-lang");
                    ua.classList.add("current-lang");
               }  
               if(value == "ru"){
                    ua.classList.remove("current-lang");
                    ru.classList.add("current-lang");
               }
               Vue.prototype.setCookie("noostarlang", value, 365);
               Vue.i18n.set(value);                              
            }
        },
        mounted: function () {           
//            alert(Vue.i18n.locale());
            this.chooseLang(Vue.i18n.locale());
        } 
    }
</script>

<style lang="less">

@import '../assets/styles/index.less';

.c-header {
    &__top {
        background-color: @mainBlue;        
    }
    &__contact-text {
        font-size: 15px;
        color: @lightText;
        text-align: left; 
    }
    &__contacts {
       display: inline-block;
       vertical-align: middle;
       margin-right: 25px;
    }
    &__contact {       
       text-align: right;
    }
    &__icon {
        width: 17px;
        height: 17px;
        display: inline-block;
        vertical-align: middle;
        margin: 3px;
    }
    &__btn-position{
        margin: 0 auto;  
        margin-top: 20px;
        margin-bottom: 20px;
    }
    &__langauges{
        display: inline-block;
        vertical-align: middle;
        margin-right: 25px;
    }
    &__lang{
        padding: 0;
        margin:0;
        padding: 9px 12px 7px 12px;        
        border-radius: 4px;
        font-size: 13px;  
        color: @lightText; 
        border: 1px solid transparent;        
    }
    &__lang:hover{
        background-color: rgba(255,255,255,0.12);    
        transition: 0.5s;      
    }
    &__elements{
         text-align: right;
    }
}

.current-lang{
    border: 1px solid @lightText;
    background-color: rgba(255,255,255,0.12);    
}
.logo{
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: left;
}

.email{
     background: url('../assets/images/email_w.png') center/contain no-repeat content-box;
}
.phone{
     background: url('../assets/images/phone_w.png') center/contain no-repeat content-box;
}
.viber{
     background: url('../assets/images/viber_w.png') center/contain no-repeat content-box;
}
.telegram{
     background: url('../assets/images/telegram_w.png') center/contain no-repeat content-box;
}



@media (max-width: 767px) {
    .c-header {
        &__elements{
             text-align: center;
             margin-bottom: 35px;
        }        
    }  
    .logo{
        width: 100%;
        text-align: center;
        padding: 20;
        margin-right: auto;
        margin-left: auto;
    }

}
@media (max-width: 510px) {
    .c-header {
        &__contacts {  
           display: block; 
           margin: 25px auto;                 
        }
        &__contact { 
           text-align: center;         
        }   
        &__elements{
            text-align: center;
            margin-bottom: 55px;
        }
        &__langauges{
            margin-right: 45px;
        }
    }
}


</style>
