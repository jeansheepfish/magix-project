define("app/views/sundries/savedlg",["magix"],function(a,l,e){var c=a("magix");e.exports=c.View.extend({tmpl:{html:'<div class="p61-255"><h4 mx-guid="g0" class="p61-254">1</h4></div><div mx-guid="g1" class="p61-7f2" style="word-break:break-all">2</div><div class="p61-0f5"><a mx-click="enter({save:true})" class="pf0-btn pf0-046 p16-fdc">保存并离开</a><a mx-click="enter()" class="pf0-btn p16-fdc">离开不保存</a><a mx-click="cancel()" class="pf0-btn">取消</a></div>',subs:[{s:"1",keys:["title"],tmpl:"<%=$$.title%>",path:'h4[mx-guid="g0"]'},{s:"2",keys:["body"],tmpl:"<%=$$.body%>",path:'div[mx-guid="g1"]'}]},init:function(a){var l=this;l.$dialog=a.dialog,l.$body=a.body,l.$title=a.title||"提示",l.$enterCallback=a.enterCallback,l.$cancelCallback=a.cancelCallback},render:function(){var a=this;a.updater.digest({body:a.$body,title:a.$title})},"enter<click>":function(a){var l=this;l.$enterCallback&&c.toTry(l.$enterCallback,[a.params.save]),l.$dialog.close()},"cancel<click>":function(){var a=this;a.$cancelCallback&&c.toTry(a.$cancelCallback),a.$dialog.close()}},{dialogOptions:{closable:!1}})});