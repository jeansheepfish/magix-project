+function(t){"use strict";var e=void 0!==window.orientation,s=navigator.userAgent.toLowerCase().indexOf("android")>-1,i="Microsoft Internet Explorer"==window.navigator.appName,n=function(e,i){s||(this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.mask=String(this.options.mask),this.init(),this.listen(),this.checkVal())};n.DEFAULTS={mask:"",placeholder:"_",definitions:{9:"[0-9]",a:"[A-Za-z]",w:"[A-Za-z0-9]",h:"[A-Fa-f0-9]","*":"."}},n.prototype.init=function(){var e=this.options.definitions,s=this.mask.length;this.tests=[],this.partialPosition=this.mask.length,this.firstNonMaskPos=null,t.each(this.mask.split(""),t.proxy(function(t,i){"?"==i?(s--,this.partialPosition=t):e[i]?(this.tests.push(new RegExp(e[i])),null===this.firstNonMaskPos&&(this.firstNonMaskPos=this.tests.length-1)):this.tests.push(null)},this)),this.buffer=t.map(this.mask.split(""),t.proxy(function(t,s){if("?"!=t)return e[t]?this.options.placeholder:t},this)),this.focusText=this.$element.val(),this.$element.data("rawMaskFn",t.proxy(function(){return t.map(this.buffer,function(t,e){return this.tests[e]&&t!=this.options.placeholder?t:null}).join("")},this))},n.prototype.listen=function(){if(!this.$element.attr("readonly")){var e=(i?"paste":"input")+".bs.inputmask";this.$element.on("unmask.bs.inputmask",t.proxy(this.unmask,this)).on("focus.bs.inputmask",t.proxy(this.focusEvent,this)).on("blur.bs.inputmask",t.proxy(this.blurEvent,this)).on("keydown.bs.inputmask",t.proxy(this.keydownEvent,this)).on("keypress.bs.inputmask",t.proxy(this.keypressEvent,this)).on(e,t.proxy(this.pasteEvent,this))}},n.prototype.caret=function(t,e){if(0!==this.$element.length){if("number"==typeof t)return e="number"==typeof e?e:t,this.$element.each(function(){if(this.setSelectionRange)this.setSelectionRange(t,e);else if(this.createTextRange){var s=this.createTextRange();s.collapse(!0),s.moveEnd("character",e),s.moveStart("character",t),s.select()}});if(this.$element[0].setSelectionRange)t=this.$element[0].selectionStart,e=this.$element[0].selectionEnd;else if(document.selection&&document.selection.createRange){var s=document.selection.createRange();t=0-s.duplicate().moveStart("character",-1e5),e=t+s.text.length}return{begin:t,end:e}}},n.prototype.seekNext=function(t){for(var e=this.mask.length;++t<=e&&!this.tests[t];);return t},n.prototype.seekPrev=function(t){for(;--t>=0&&!this.tests[t];);return t},n.prototype.shiftL=function(t,e){var s=this.mask.length;if(!(t<0)){for(var i=t,n=this.seekNext(e);i<s;i++)if(this.tests[i]){if(!(n<s&&this.tests[i].test(this.buffer[n])))break;this.buffer[i]=this.buffer[n],this.buffer[n]=this.options.placeholder,n=this.seekNext(n)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,t))}},n.prototype.shiftR=function(t){for(var e=this.mask.length,s=t,i=this.options.placeholder;s<e;s++)if(this.tests[s]){var n=this.seekNext(s),r=this.buffer[s];if(this.buffer[s]=i,!(n<e&&this.tests[n].test(r)))break;i=r}},n.prototype.unmask=function(){this.$element.unbind(".bs.inputmask").removeData("bs.inputmask")},n.prototype.focusEvent=function(){this.focusText=this.$element.val();var t=this.mask.length,e=this.checkVal();this.writeBuffer();var s=this,i=function(){e==t?s.caret(0,e):s.caret(e)};i(),setTimeout(i,50)},n.prototype.blurEvent=function(){this.checkVal(),this.$element.val()!==this.focusText&&(this.$element.trigger("change"),this.$element.trigger("input"))},n.prototype.keydownEvent=function(t){var s=t.which;if(8==s||46==s||e&&127==s){var i=this.caret(),n=i.begin,r=i.end;return r-n==0&&(n=46!=s?this.seekPrev(n):r=this.seekNext(n-1),r=46==s?this.seekNext(r):r),this.clearBuffer(n,r),this.shiftL(n,r-1),!1}if(27==s)return this.$element.val(this.focusText),this.caret(0,this.checkVal()),!1},n.prototype.keypressEvent=function(t){var e=this.mask.length,s=t.which,i=this.caret();if(t.ctrlKey||t.altKey||t.metaKey||s<32)return!0;if(s){i.end-i.begin!=0&&(this.clearBuffer(i.begin,i.end),this.shiftL(i.begin,i.end-1));var n=this.seekNext(i.begin-1);if(n<e){var r=String.fromCharCode(s);if(this.tests[n].test(r)){this.shiftR(n),this.buffer[n]=r,this.writeBuffer();var a=this.seekNext(n);this.caret(a)}}return!1}},n.prototype.pasteEvent=function(){var t=this;setTimeout(function(){t.caret(t.checkVal(!0))},0)},n.prototype.clearBuffer=function(t,e){for(var s=this.mask.length,i=t;i<e&&i<s;i++)this.tests[i]&&(this.buffer[i]=this.options.placeholder)},n.prototype.writeBuffer=function(){return this.$element.val(this.buffer.join("")).val()},n.prototype.checkVal=function(t){for(var e=this.mask.length,s=this.$element.val(),i=-1,n=0,r=0;n<e;n++)if(this.tests[n]){for(this.buffer[n]=this.options.placeholder;r++<s.length;){var a=s.charAt(r-1);if(this.tests[n].test(a)){this.buffer[n]=a,i=n;break}}if(r>s.length)break}else this.buffer[n]==s.charAt(r)&&n!=this.partialPosition&&(r++,i=n);return!t&&i+1<this.partialPosition?(this.$element.val(""),this.clearBuffer(0,e)):(t||i+1>=this.partialPosition)&&(this.writeBuffer(),t||this.$element.val(this.$element.val().substring(0,i+1))),this.partialPosition?n:this.firstNonMaskPos};var r=t.fn.inputmask;t.fn.inputmask=function(e){return this.each(function(){var s=t(this),i=s.data("bs.inputmask");i||s.data("bs.inputmask",i=new n(this,e))})},t.fn.inputmask.Constructor=n,t.fn.inputmask.noConflict=function(){return t.fn.inputmask=r,this},t(document).on("focus.bs.inputmask.data-api","[data-mask]",function(e){var s=t(this);s.data("bs.inputmask")||s.inputmask(s.data())}),t.Inputmask=n}(window.jQuery),define("app/gallery/mx-inputmask/index",["magix","$"],function(t,e,s){var i=t("magix"),n=t("$");s.exports=i.View.extend({ctor:function(t){var e=this;e.$mask=t.mask,e.on("destroy",function(){var t=e.$inputmask;t&&t.unmask()})},render:function(){var t=this;t.$inputmask=new n.Inputmask("#"+t.id,{mask:t.$mask})}})});