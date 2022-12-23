/**
 * [jQuery-clickout]{@link https://github.com/emn178/jquery-clickout}
 *
 * @version 0.1.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2017
 * @license MIT
 */ !function(t){"use strict";var n="jquery-clickout",i=":"+n,c=t();t.expr[":"][n]=function(i){return!!t(i).data(n)},t.event.special.clickout={add:function i(a){var e=t(this),r=e.data(n);r||(r=[],e.data(n,r),c=c.add(e)),r.push(a.handler)},remove:function i(c){var a=t(this).data(n);t.isArray(a)&&(a.splice(a.indexOf(c.handler),1),a.length||t(this).removeData(n))}},t(document).bind("click touchend",function a(e){(c=c.filter(i)).each(function(i,c){if(c!==e.target&&!t.contains(c,e.target))for(var a=t(c).data(n),r=0;r<a.length;++r)a[r].call(t(c),t.Event("clickout",{target:e.target}))})}),t(document).on("page:before-unload",function(n){c.each(function(){t(this).unbind("clickout")})}),t.fn.clickout=function(t,n){return arguments.length>0?this.bind("clickout",t,n):this.trigger("clickout")}}(jQuery);