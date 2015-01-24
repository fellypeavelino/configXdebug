!function(a){function b(b,d,e){var f,g=b.split("."),h=a;"function"!=typeof d&&(e=d,d=null),e=e||c();for(var i=0,j=g.length;j>i;i++)f=i==j-1,h[g[i]]=f?e:h[g[i]]||{},h=h[g[i]];return d&&d.call(h,h),h}function c(){var a,b;return a=function(){var a=new b;return a.initialize.apply(a,arguments),a},b=function(){},b.prototype=a.prototype,a.fn=a.prototype,a.fn.initialize=function(){},a}b.fetch=function(b){for(var c=b.split("."),d=a,e=0,f=c.length;f>e&&(d=d[c[e]],d);e++);return d},b.run=function(a,c){var d=b.fetch(a);return d?d.apply(null,c):void 0},b.wrapper=function(a,c){return b(a,function(a){return a.fn.initialize=function(){c.apply(a,arguments)},a})},a.Module=b}(window),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}}),function(a){a.fn.byData=function(b){return a(this).find("[data-"+b+"]")},a.fn.isExist=function(b,c){var d=a(this).find(b);return d.length&&"function"==typeof c&&c.call(null,d,a(this)),d.length},a.fn.blink=function(){a(this).fadeToggle().fadeToggle()}}(jQuery),Module("ApikiNewsletterBox.Application",function(a){a.fn.initialize=function(a){this._isExistCookie()||ApikiNewsletterBox.FormNewsletter(a)},a.fn._isExistCookie=function(){var a=jQuery.cookie("apiki-newsletter-is-hide");return a&&1==parseInt(a)}}),Module("ApikiNewsletterBox.FormNewsletter",function(a){a.fn.initialize=function(a){this.container=a.byData("component-signature"),this.delay=this.container.data("attr-delay"),this.form=this.container.byData("attr-form"),this.formSendAjax=ApikiNewsletterBox.FormSendAjax(this.form),this.close=this.container.byData("attr-close"),this.expires=this.close.data("expire"),this.init()},a.fn.init=function(){return this._loadFieldsForm(),parseInt(this.delay)>0?(setTimeout(this._startDelayComponent.bind(this),1e3*this.delay),void 0):(this._startDelayComponent(),void 0)},a.fn._startDelayComponent=function(){this.container.fadeIn(300),this.addEventListener()},a.fn._loadFieldsForm=function(){this.form.fieldName=this.form.find('[type="text"]'),this.form.fieldEmail=this.form.find('[type="email"]'),this.form.fieldSubmit=this.form.find('[type="submit"]')},a.fn.addEventListener=function(){this.form.on("submit",this._onSubmitForm.bind(this)),this.formSendAjax.on("request-success",this._onRequestSuccess.bind(this)).on("request-fail",this._onRequestFail.bind(this)),this.close.on("click",this._onClickClose.bind(this))},a.fn._onClickClose=function(){var a=this;a.container.fadeOut(300,function(){a.container.remove()}),this._setCookie()},a.fn._setCookie=function(){parseInt(this.expire)<=0||jQuery.cookie("apiki-newsletter-is-hide",1,{expires:this.expires/86400,path:"/"})},a.fn._onRequestSuccess=function(){this._finallySend("Assinatura realizada com sucesso."),setTimeout(this._onClickClose.bind(this),5e3)},a.fn._onRequestFail=function(){this._finallySend("Ops! Ocorreu uma falha, tente novamente.",!0)},a.fn._onSubmitForm=function(a){a.preventDefault(),this._isValidForm()&&(this._beforeSend(),this.formSendAjax.send())},a.fn._beforeSend=function(){var a=this.form.fieldSubmit;a.attr("disabled","disabled"),a.val(a.data("text-wait")),a.next(".request-message").remove()},a.fn._finallySend=function(a,b){var c=this.form.fieldSubmit;b&&c.removeAttr("disabled"),c.val(c.data("text-default")),c.after('<span class="request-message">%s</span>'.replace(/\%s/,a))},a.fn._isValidForm=function(){return this._isEmptyField("fieldName")?(this._renderMessageError("fieldName","Qual seu nome?"),!1):this._isEmptyField("fieldEmail")||!this._isValidEmail()?(this._renderMessageError("fieldEmail","Informe um e-mail válido"),!1):!0},a.fn._isEmptyField=function(a){var b=this._getField(a);return b&&!b.val().replace(/\s/g,"").length},a.fn._isValidEmail=function(){var a=this.form.fieldEmail.val();return a.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$")},a.fn._renderMessageError=function(a,b){var c=this._getField(a);c&&c.val(b).focus().select()},a.fn._getField=function(a){var b=this.form[a];return b?b:!1}}),Module("ApikiNewsletterBox.FormSendAjax",function(a){a.fn.initialize=function(a){this.form=a,this.on=jQuery.proxy(this.form,"on"),this.emit=jQuery.proxy(this.form,"trigger")},a.fn.send=function(){var a,b=this.form.attr("action"),c=this.form.serialize();a=jQuery.ajax({url:b,data:c,dataType:"json",type:"POST"}),a.done(this._done.bind(this)),a.fail(this._fail.bind(this))},a.fn._done=function(a){this.emit("request-success",a)},a.fn._fail=function(a){var b={};a.responseText&&(b=JSON.parse(a.responseText)),this.emit("request-fail",b)}}),jQuery(function(){ApikiNewsletterBox.Application(jQuery("body"))});