"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var transition={};transition.install=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=void 0,i=void 0,o=void 0,r=void 0,s={x:0,y:0},d={x:0,y:0},c=void 0;function u(){var t=this.$el.classList;if(t){var e=[];Object.keys(t).forEach(function(n){e.push(t[n])});var n=!1;if(e.map(function(t){"animated"===t&&(n=!0)}),n){var a=document.createElement("div");if(a.id="vueg-background",!r.disable){var i=document.getElementById("vueg-background");i||(document.body.appendChild(a),i=a),i.innerHTML="",i.classList=[],i.appendChild(this.$el),i.scrollLeft=d.x,i.scrollTop=d.y}}}}function l(t){"mousedown"===t.type?(s.x=t.pageX,s.y=t.pageY):(s.x=t.touches[0].pageX,s.y=t.touches[0].pageY)}function f(){r={duration:"0.3",firstEntryDisable:!1,firstEntryDuration:".6",forwardAnim:"fadeInRight",backAnim:"fadeInLeft",sameDepthDisable:!1,tabs:[],tabsDisable:!1,disable:!1,shadow:!0,nuxt:!1}}f(),Object.keys(n).forEach(function(t){r[t]=n[t]}),t.directive("transition",{inserted:function(t,e,i,d){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this,e=arguments[1];if(!t)return;if(!a)return;if(!e)return;if(!e.parentElement)return;if(1!==e.nodeType)return;f(),Object.keys(n).forEach(function(t){r[t]=n[t]});var i=t.$data.vuegConfig;i&&Object.keys(i).forEach(function(t){r[t]=i[t]});if(r.disable)return o="";r.shadow&&(e.style.boxShadow="0 3px 10px rgba(0, 0, 0, .156863), 0 3px 10px rgba(0, 0, 0, .227451)");"first"===o&&(e.style.animationDuration=r.firstEntryDuration+"s",e.classList.add("fadeIn"));o&&(e.style.animationDuration=r.duration+"s");e.classList.add("animated");var d=["touchPoint"],u=void 0;switch(o){case"forward":u=r.forwardAnim;break;case"back":u=r.backAnim}u&&e.classList.add(u);var l=void 0,m=document.head||document.getElementsByTagName("head")[0],h=void 0;(l=document.getElementById("vueg-style"))||((l=document.createElement("style")).type="text/css",l.id="vueg-style",m.appendChild(l));if(-1!==d.findIndex(function(t){return t===u}))switch(u){case"touchPoint":var p={x:document.documentElement.clientWidth/2,y:document.documentElement.clientHeight/2};h=".touchPoint{\n                                max-height:"+document.documentElement.clientHeight+"px!important;\n                                overflow:hidden;\n                                animation-name:touchPoint;\n                                position: relative;\n                                animation-timing-function: linear;\n                            }\n                            @keyframes touchPoint {\n                                from {\n                                    opacity:0.5;\n                                    transform: scale3d(0, 0, 0);\n                                    left:"+(-p.x+s.x)+"px;\n                                    top:"+(-p.y+s.y)+"px;\n                                }\n                                to{ \n                                    opacity:1;\n                                    transform: scale3d(1, 1, 1);\n                                    left:0;\n                                    top:0;\n                                }\n                            }";var v=document.createTextNode(h);l.appendChild(v)}setTimeout(function(){e.classList.remove(r.forwardAnim),e.classList.remove(r.backAnim),e.style.animationDuration="0s",e.style.boxShadow=null;var t=document.getElementById("vueg-background");t&&(t.innerHTML=""),r.nuxt&&c&&(t=c.$el)&&t.parentElement.removeChild(t),-1!==d.findIndex(function(t){return t===u})&&(l.innerHTML="")},1e3*r.duration+300),setTimeout(function(){e.classList.remove("fadeIn")},1e3*r.firstEntryDuration)}(i.componentInstance,t)}}),t.mixin({beforeDestroy:r.nuxt?null:u,deactivated:r.nuxt?null:u,beforeRouteEnter:function(t,e,n){d={x:window.pageXOffset,y:window.pageYOffset},n()},beforeRouteLeave:function(t,e,n){c=this,n()},transition:r.nuxt?{mode:null,css:!1,leave:function(t,e){}}:null}),e.beforeEach(function(t,e,n){a=t;var s=t.path.split("/").length,d=e.path.split("/").length;if("/"!==t.path.charAt(t.path.length-1)&&(s+=1),"/"!==e.path.charAt(e.path.length-1)&&(d+=1),o=s>d?"forward":"back",s===d&&(o=i===t.path?"back":"forward",r.sameDepthDisable&&(o=""),i=e.path),t.path===e.path&&t.path===i&&(o="first"),r.firstEntryDisable&&(o=""),e.name&&t.name){var c=r.tabs.findIndex(function(t){return t.name===e.name}),u=r.tabs.findIndex(function(e){return e.name===t.name});r.tabsDisable||-1===c||-1===u?-1!==c&&-1!==u&&(o=""):(u>c&&(o="forward"),u<c&&(o="back"),u===c&&(o=""))}n()}),document.addEventListener("mousedown",l),document.addEventListener("touchstart",l)},exports.default=transition;