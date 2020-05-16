import{r as t,h as e,g as i}from"./p-1c0c10bb.js";import{A as a}from"./p-d566c6d1.js";import{c as s}from"./p-e822f00c.js";import{T as o}from"./p-7f5dadba.js";import{C as r}from"./p-443e6d65.js";var n=function(t,e,i,a){var s,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const l=class{constructor(e){t(this,e),this.icons=!1}render(){return this.actions?this.actions.split(",").map(t=>t.trim()).map(t=>{let i=0;for(;i<this.host.children.length;){let a=this.host.children.item(i++);if(a.hasAttribute("slot")&&a.getAttribute("slot")===t)return e("slot",{name:t})}return this.icons&&a.hasOwnProperty(t)?e("psk-icon",{icon:a[t].value,title:a[t].value,color:a[t].color,onClick:e=>{this.handleClick(e,t)}}):e("button",{class:"btn btn-primary",name:t.toUpperCase(),onClick:e=>{this.handleClick(e,t)}},t.toUpperCase())}):null}handleClick(t,e){let i=null;try{i=JSON.parse(this.eventData)}catch(a){}t.preventDefault(),t.stopImmediatePropagation(),s(e,{bubbles:!0,composed:!0,cancelable:!0,detail:i},!0)}get host(){return i(this)}};n([r(),o({description:["This property is a string where every action is delimitated by ','.","If an HTML child has a slot attribute with the same value as the entry in the string then a new slot will be created with that value as the name."],isMandatory:!0,defaultValue:"null",propertyType:"string"})],l.prototype,"actions",void 0),n([o({description:["This property is the icon attached to the toolbar action so it can be rendered .","If this property is not given then the value false will be assumed and instead of a psk-icon, a button will be rendered."],propertyType:"boolean",isMandatory:!1,defaultValue:"false"})],l.prototype,"icons",void 0),n([o({description:["This property is the data that will be passed to the newly created event in the detail property.","It will only be passed along when an icon/button inside the toolbar is clicked."],propertyType:"string",isMandatory:!1,defaultValue:"null"})],l.prototype,"eventData",void 0);export{l as psk_toolbar}