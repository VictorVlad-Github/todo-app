System.register(["./p-e1460616.system.js","./p-9195761b.system.js"],(function(e){"use strict";var t,r,o,n;return{setters:[function(e){t=e.r;r=e.c;o=e.h},function(e){n=e.C}],execute:function(){var i=undefined&&undefined.__decorate||function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,o);else for(var u=e.length-1;u>=0;u--)if(s=e[u])i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i;return n>3&&i&&Object.defineProperty(t,r,i),i};var s=960;var u=e("psk_default_renderer",function(){function e(e){t(this,e);this.mobileLayout=false;this.getAppVersion=r(this,"getAppVersion",7)}e.prototype.checkLayout=function(){this.mobileLayout=document.documentElement.clientWidth<s};e.prototype.componentWillLoad=function(){var e=this;return new Promise((function(t){e.checkLayout();e.getAppVersion.emit((function(r,o){if(!r){e.appVersion=o}t()}))}))};e.prototype.render=function(){var e=o("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:s});var t=o("div",{class:"nav-footer"},"version ",this.appVersion);var r=[];if(this.mobileLayout){r=[o("psk-user-profile",{"profile-renderer":"mobile-profile-renderer"}),e]}else{r=[o("psk-user-profile",null),e,t]}return o("div",{class:"global_container "+(this.mobileLayout?"is-mobile":"")},o("aside",null,r),o("section",null,o("psk-app-router",null),this.mobileLayout===true?t:null))};return e}());i([n()],u.prototype,"mobileLayout",void 0)}}}));