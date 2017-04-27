define("app/mixins/gtip",["magix","$"],function(t,i,o){var n=t("magix"),e=t("$"),a={vertical:5,horizontal:10},r={lt:function(t,i){t.css({top:65*i+a.vertical*(i+1),left:a.horizontal})},rt:function(t,i){t.css({top:65*i+a.vertical*(i+1),right:a.horizontal})},lb:function(t,i){t.css({bottom:65*i+a.vertical*(i+1),left:a.horizontal})},rb:function(t,i){t.css({bottom:65*i+a.vertical*(i+1),right:a.horizontal})}};n.applyStyle("pa7",".pa7-b93{border:1px solid #ccc;background-color:#fff;padding:8px 20px;position:fixed;z-index:450;border-radius:4px;width:300px;height:65px;overflow:hidden;word-break:break-all;transition:all .3s;opacity:0}.pa7-9b9{opacity:1}.pa7-7a1{opacity:0}");var s={calc:function(t){var i=this,o=i["$"+t];if(o&&o.length)for(var n=0,e=void 0;n<o.length;n++){e=o[n];var a=r[t];a(e,n)}},add:function(t,i){i||(i="rt");var o=this;if(!r[i])throw new Error("mx-gip unsupport dock:"+i);(o["$"+i]||(o["$"+i]=[])).push(t),t.on("tipclose",function(){o.remove(t,i)}),o.calc(i)},remove:function(t,i){t.off("close");for(var o=this,n=o["$"+i],e=n.length-1;e>=0;e--){if(n[e]==t){n.splice(e,1);break}}o.calc(i)}};o.exports=n.View.extend({tmpl:{html:"1",subs:[{s:"1",keys:["tip"],tmpl:"<%=$$.tip.msg%>",path:"#"}]},init:function(t){var i=this;this.$extra=t,this.on("destroy",function(){i.$oNode.trigger("tipclose").remove()})},render:function(){var t=this,i=e("#"+t.id);i.addClass("pa7-b93"),t.$oNode=i,t.updater.digest({tip:t.$extra}),t.$extra.timeout&&setTimeout(t.wrapAsync(function(){t.close()}),t.$extra.timeout),setTimeout(t.wrapAsync(function(){i.addClass("pa7-9b9")}),20)},close:function(){var t=this;this.$oNode.addClass("pa7-7a1"),setTimeout(this.wrapAsync(function(){t.owner.unmountVframe()}),300)}},{gtipShow:function(t){var i=n.guid("gtip-");e("body").append('<div id="'+i+'" />'),this.owner.mountVframe(i,"app/mixins/gtip",t),s.add(e("#"+i),t.dock)},gtipRT:function(t,i){this.gtipShow({msg:t,dock:"rt",timeout:i||3e3})},gtipRB:function(t,i){this.gtipShow({msg:t,dock:"rb",timeout:i||3e3})},gtipLT:function(t,i){this.gtipShow({msg:t,dock:"lt",timeout:i||3e3})},gtipLB:function(t,i){this.gtipShow({msg:t,dock:"lb",timeout:i||3e3})}})});