// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuexI18n from 'vuex-i18n';
import store from './store';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize-css';

Vue.use(vuexI18n.plugin, store);

Vue.config.productionTip = false



let translationUk = {};
let translationRu = {};
let translationEn = {};

store.dispatch('getAllCourses')
  .then(response1 => {
    store.getters.allCoursesInfo.forEach(function(item,index){
      if ('en' in item.translations) {
        for (var key in item.translations.en) {
          let s = key+item.uuid;
          translationEn[s] = item.translations.en[key];
        }
      }
      if ('ru' in item.translations) {
        for (var key in item.translations.ru) {
          let s = key+item.uuid;
          translationRu[s] = item.translations.ru[key];
          console.log(s + ": " + translationRu[s]);
        }
      }
      if ('uk' in item.translations) {
        for (var key in item.translations.uk) {
          let s = key+item.uuid;
          translationUk[s] = item.translations.uk[key];
          console.log(s + ": " + translationUk[s]);
        }
      }
	console.log(JSON.stringify(translationUk))
    });
    store.dispatch('getLearningTypes')
      .then(response2 => {
        store.getters.learningTypes.forEach(function(item,index){
          if ('en' in item.translations) {
            let s = "learningtype"+item.uuid;
            translationEn[s] = item.translations.en;
          }
          if ('ru' in item.translations) {
            let s = "learningtype"+item.uuid;
            translationRu[s] = item.translations.ru;
            console.log(s + ": " + translationRu[s]);
          }
          if ('uk' in item.translations) {
              let s = "learningtype"+item.uuid;
              translationUk[s] = item.translations.uk;
              console.log(s + ": " + translationUk[s]);
            }
		console.log(JSON.stringify(translationUk))
        });
        store.dispatch('getLearningForms')
          .then(response3 => {
            store.getters.learningForms.forEach(function(item,index){
              if ('en' in item.translations) {
                let s = "learningform"+item.uuid;
                translationEn[s] = item.translations.en;
              }
              if ('ru' in item.translations) {
                let s = "learningform"+item.uuid;
                translationRu[s] = item.translations.ru;
                console.log(s + ": " + translationRu[s]);
              }
              if ('uk' in item.translations) {
                let s = "learningform"+item.uuid;
                translationUk[s] = item.translations.uk;
                console.log(s + ": " + translationUk[s]);
              }
		console.log(JSON.stringify(translationUk))

             });
            axios.get('http://noostar.dp.ua/static/resources/i18n/uk.json')
              .then((response) => {
                translationUk = Object.assign({},translationUk,response.data);
                Vue.i18n.add('uk', translationUk);
             })
            axios.get('http://noostar.dp.ua/static/resources/i18n/ru.json')
              .then((response) => {
                translationRu = Object.assign({},translationRu,response.data);
                Vue.i18n.add('ru', translationRu);
              })
            })
          .catch (error => {
            alert(error);
          })
     })
  });


Vue.prototype.setCookie = function(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

Vue.prototype.getCookie = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

Vue.prototype.eraseCookie = function(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}

Vue.prototype.setDefautLanguage = function() {
    let lang = Vue.prototype.getCookie("noostarlang");
    if (lang == null) {
        lang = navigator.language || navigator.userLanguage;
        lang = lang.substring(0, 2);
    }
    Vue.prototype.setCookie("noostarlang", lang, 365);
    Vue.i18n.set(lang);
}

new Vue({
  store,
  router,
  axios,
  render: h => h(App),
  beforeCreate: function() {
//    this.$store.dispatch('getAllCourses')
//        .then(response1 => {
//            this.$store.getters.allCoursesInfo.forEach(function(item,index){
//                if ('en' in item.translations) {
//                    for (var key in item.translations.en) {
//                        let s = key+"-"+item.uuid;
//                        translationEn[s] = item.translations.en[key];
//                    }
//                }
//                if ('ru' in item.translations) {
//                    for (var key in item.translations.ru) {
//                        let s = key+"-"+item.uuid;
//                        translationRu[s] = item.translations.ru[key];
//                        console.log(s+": "+translationRu[s])
//                    }
//                }
//                if ('uk' in item.translations) {
//                    for (var key in item.translations.uk) {
//                        let s = key+"-"+item.uuid;
//                        translationUk[s] = item.translations.uk[key];
//                        console.log(s+": "+translationUk[s]);
//                    }
//                }
//            });
//        })
//        .catch (error => {
//            alert(error);
//        });
//    axios.get('http://noostar.dp.ua/static/resources/i18n/uk.json')
//        .then((response) => { 
////            for (var key in response.data) {
//                translationUk[key]=response.data[key]
//            }
//            Vue.i18n.add('uk', translationUk);
//    })

//    axios.get('http://noostar.dp.ua/static/resources/i18n/ru.json')
//        .then((response) => {
//            Vue.i18n.add('ru', translationRu);
//        })

    Vue.prototype.setDefautLanguage();
  }
}).$mount('#app')
