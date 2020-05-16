System.register(["./p-e1460616.system.js","./p-c08672ec.system.js","./p-747922cd.system.js","./p-ce1f4a1c.system.js","./p-9195761b.system.js","./p-f08ba66d.system.js"],(function(e){"use strict";var t,i,s,r,n;return{setters:[function(e){t=e.r;i=e.h},function(){},function(){},function(e){s=e.T},function(e){r=e.C},function(e){n=e.B}],execute:function(){var o=undefined&&undefined.__decorate||function(e,t,i,s){var r=arguments.length,n=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,i,s);else for(var p=e.length-1;p>=0;p--)if(o=e[p])n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n;return r>3&&n&&Object.defineProperty(t,i,n),n};var p=e("psk_img",function(){function e(e){t(this,e)}e.prototype.render=function(){var e={src:this.src,alt:this.title};if(this.height){e["height"]=this.height}if(this.width){e["width"]=this.width}return i("div",{class:"image_container"},i("div",{class:"image_wrapper"},i("img",Object.assign({},e))),this.title?i("div",{class:"image_description"},this.title):null)};return e}());o([r(),n(),s({description:'This property is the path to the image source (Example:"page/PrivateSky/EDFS.png").',isMandatory:true,propertyType:"string"})],p.prototype,"src",void 0);o([s({description:"This property is setting the width of the image. The value should be an integer specifying the units in pixels",isMandatory:false,propertyType:"string"})],p.prototype,"width",void 0);o([s({description:"This property is setting the height of the image. The value should be an integer specifying the units in pixels",isMandatory:false,propertyType:"string"})],p.prototype,"height",void 0);o([s({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:false,propertyType:"string",specialNote:"If no title is given,there will not be assumed one and there will be no image description/alt."})],p.prototype,"title",void 0)}}}));