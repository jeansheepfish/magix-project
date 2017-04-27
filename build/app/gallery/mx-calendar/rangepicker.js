define("app/gallery/mx-calendar/range",["magix","$","./index"],function(e,t,a){var i=e("magix"),n=e("$"),d=e("./index"),r=d.parse,s=d.format;i.applyStyle("p3f",".p3f-d9a{border:1px solid #e6e6e6;padding:15px 0;border-radius:4px;font-size:12px;background-color:#fff;width:250px}.p3f-9be{padding:0 10px;margin-bottom:15px}.p3f-b45{width:240px}.p3f-st{height:24px;border-radius:4px;margin:0 10px 10px 0;width:70px;padding:4px;float:left;text-align:center;display:inline-block;cursor:pointer}.p3f-st:hover{background:#eee}.p3f-2ed,.p3f-2ed:hover{color:#fff;background:#6363e6}.p3f-ec7{padding:0 10px;margin-bottom:15px}.p3f-ipt{background-color:#f0f0f0;border:0;height:24px;width:110px;text-align:center;display:inline-block;color:#333;border-radius:4px;box-sizing:border-box;padding:6px 9px}.p3f-d14{border-top:1px solid #e6e6e6;padding-left:10px;padding-right:10px;padding-top:10px}");var o=function(e,t){t||(t=new Date);var a=new Date(t.getTime()+864e5*e);return a=a.getFullYear()+"/"+(a.getMonth()+1)+"/"+a.getDate(),new Date(a)},c=o(0),p=o(-1),l=function(e){var t=o(-7),a=e-t.getDay();return{start:o(a,t),end:o(a+6,t)}},g=l(0),u=l(1),f=function(){var e=new Date(c.getFullYear(),c.getMonth()-1,1),t=e.getFullYear(),a=e.getMonth(),i=32-new Date(t,a,32).getDate();return{start:e,end:new Date(t,a,i)}}();f.text="上月",g.text="上周（周日至周六）",u.text="上周（周一至周日）";for(var h={today:{text:"今天",start:c,end:c},yesterday:{text:"昨天",start:p,end:p},preMonth:f,preWeekSun:g,preWeekMon:u,passedThisMonth:{text:"本月",start:o(1-c.getDate()),end:p},lastestThisMonth:{text:"本月",start:o(1-c.getDate()),end:c}},m=[2,6,13,14,29,89],x=0,k=void 0,$=void 0;x<m.length;x++)k=m[x],$=k+1,h["passed"+$]={text:"过去"+$+"天",start:o(-$),end:p},h["lastest"+$]={text:"最近"+$+"天",start:o(-k),end:c};var v=["preMonth","preWeekMon","preWeekSun","passedThisMonth","lastestThisMonth"],y=i.View.extend({tmpl:{html:'<div mx-guid="g9" class="p3f-d9a">1</div>',subs:[{s:"1",keys:["quickDates"],tmpl:'<%if($$.quickDates.length){%><div class="p3f-9be"><div class="p16-03e">快捷日期</div><div mx-guid="g4" class="p3f-b45 p16-c8d">2</div></div><%}%><div class="p3f-ec7"><div class="p16-03e">日期范围</div><div class="p16-c8d"><input mx-guid="g7" class="p3f-ipt" data-hidden="<%=$$.dates.startStr%>" value="<%=$$.dates.startStr%>" mx-click="showDatepicker({first:true})" id="start_<%=$$.id%>" mx-change="sync()"/>-<input mx-guid="g8" class="p3f-ipt" data-hidden="<%=$$.dates.endStr%>" value="<%=$$.dates.endStr%>" mx-click="showDatepicker()" id="end_<%=$$.id%>" mx-change="sync()"/></div></div><div class="p3f-d14 p16-c8d"><button mx-click="picked()" type="button" class="pf0-btn pf0-046">确定</button><button mx-click="cancel()" type="button" class="pf0-btn p16-ml5">取消</button></div>',path:'div[mx-guid="g9"]'},{s:"2",keys:["quickDatesMap","dates"],tmpl:'<%for(var i=0;i<$$.quickDates.length;i++){var key=$$.quickDates[i],info=$$.quickDatesMap[key]%><span class="p3f-st<%if($$.dates.quickDateKey==key){%> p3f-2ed<%}%>" mx-click="picked({quick:true,key:\'<%=key%>\'})"><%=info?info.text:key%></span><%}%>',path:'div[mx-guid="g4"]',pKeys:["quickDates"]},{keys:["dates","id"],path:'input[mx-guid="g7"]',pKeys:["quickDates"],attr:'data-hidden="<%=$$.dates.startStr%>" value="<%=$$.dates.startStr%>" mx-click="showDatepicker({first:true})" id="start_<%=$$.id%>"',attrs:[{n:"data-hidden"},{n:"value",q:1,p:1},{n:"mx-click"},{n:"id",p:1}]},{keys:["dates","id"],path:'input[mx-guid="g8"]',pKeys:["quickDates"],attr:'data-hidden="<%=$$.dates.endStr%>" value="<%=$$.dates.endStr%>" mx-click="showDatepicker()" id="end_<%=$$.id%>"',attrs:[{n:"data-hidden"},{n:"value",q:1,p:1},{n:"mx-click"},{n:"id",p:1}]}]},init:function(e){var t=this;t.$linkage=e.linkage,t.$min=e.min,t.$max=e.max,t.$dates=e.dates,t.$quickDates=e.quickDates||[],t.$placement=e.placement,t.$align=e.align},inside:function(e){var t=this,a=i.inside(e,t.id);if(!a)for(var n=t.owner.children(),d=n.length-1;d>=0;d--){var r=i.Vframe.get(n[d]);if(r&&(a=r.invoke("inside",e)),a)break}return a},render:function(){var e=this;e.updater.digest({id:e.id,quickDatesMap:h,quickDates:e.$quickDates,dates:e.$dates}),e.$node=n("#"+e.id)},"sync<change>":function(e){var t=this;e.stopPropagation(),n(e.eventTarget).data("hidden",e.date);var a=n("#start_"+t.id).data("hidden"),i=n("#end_"+t.id).data("hidden"),d=t.updater.get("dates"),s=r(a,d.formatter);r(i,d.formatter).getTime()<s.getTime()&&(i=a,n("#end_"+t.id).data("hidden",i)),d=y.getDescription(a,i,t.$quickDates),t.updater.digest({dates:d})},"showDatepicker<click>":function(e){var t=this,a=e.eventTarget,i=e.params,d={max:t.$max,min:t.$min,selected:a.value,placement:t.$placement,align:t.$align};i.first?t.$linkage&&(d.max=n("#end_"+t.id).data("hidden")):d.min=n("#start_"+t.id).data("hidden"),a.vframe?a.vframe.invoke("update",d):t.owner.mountVframe(a.id,"app/gallery/mx-calendar/datepicker",d).invoke("show")},"picked<click>":function(e){var t,a,i,d,r=this,o=e.params,c=r.updater,p=c.get("dates");if(o.quick){p.quickDateKey=o.key;var l=h[o.key];t=l.start,a=l.end,i=s(t,p.formatter),d=s(a,p.formatter),n("#start_"+r.id).data("hidden",i),n("#end_"+r.id).data("hidden",d),p.startStr=i,p.endStr=d,p.start=t,p.end=a,p.quickDateText=l.text,c.digest({dates:p})}else i=n("#start_"+r.id).data("hidden"),d=n("#end_"+r.id).data("hidden"),p=y.getDescription(i,d,r.$quickDates),c.digest({dates:p});r.$node.trigger({type:"change",dates:p})},"cancel<click>":function(){this.$node.trigger("cancel")}},{getSupportQuickDates:function(){return h},getDescription:function(e,t,a){e=r(e),t=r(t);var n,d={startStr:s(e,"yyyy-MM-dd"),endStr:s(t,"yyyy-MM-dd"),formatter:"yyyy-MM-dd"},o=c.getTime(),l=p.getTime(),g=e.getTime(),u=t.getTime();if(g==u)o==u?n="today":l==u&&(n="yesterday");else{var f=(u-g)/864e5+1;l==u?h[n="passed"+f]||(n=0):o==u&&(h[n="lastest"+f]||(n=0))}if(!n)for(var m=v.length-1;m>-1;m--){var x=v[m],k=h[x];if(u==k.end.getTime()&&g==k.start.getTime()){n=x;break}}return n&&a&&(i.toMap(a)[n]||(n=0)),n&&(d.quickDateText=h[n].text,d.quickDateKey=n),d}});a.exports=y}),define("app/gallery/mx-calendar/rangepicker",["magix","$","../mx-monitor/index","./index","./range"],function(e,t,a){var i=e("magix"),n=e("$"),d=e("../mx-monitor/index"),r=e("./index"),s=e("./range"),o=["today","yesterday","passed7","lastestThisMonth","preMonth","lastest15"],c=i.View.extend({init:function(e){var t=this,a=e.start,i=e.end,c=r.format(new Date,"YYYY-MM-dd");t.$fill=!0,a||(t.$fill=!1,a=c),i||(t.$fill=!1,i=c),t.$shortcuts="false"!=e.shortcuts,t.$linkage="false"!=e.linkage,t.$max=e.max,t.$min=e.min,t.$placement=e.placement,t.$align=e.align,t.$quickDates=t.$shortcuts?o:[],t.$dates=s.getDescription(a,i,t.$quickDates),d.setup();var p=n("#"+t.id),l=function(){t.show()};t.on("destroy",function(){d.teardown(),n("#rpcnt_"+t.id).remove(),p.off("click",l)}),p.on("click",l),t.$ownerNode=p},inside:function(e){var t=this,a=i.inside(e,t.id)||i.inside(e,"rpcnt_"+t.id);if(!a)for(var n=t.owner.children(),d=n.length-1;d>=0;d--){var r=i.Vframe.get(n[d]);if(r&&(a=r.invoke("inside",e)),a)break}return a},fill:function(){var e=this,t=e.$dates;t.quickDateText?e.$ownerNode.val(t.quickDateText):e.$ownerNode.val(t.startStr+"至"+t.endStr)},render:function(){var e=this,t="rpcnt_"+e.id;n(e.wrapEvent('<div mx-change="pickRange()" mx-cancel="hide()" style="position:absolute;display:none;z-index:10"></div>')).attr("id",t).insertAfter(e.$ownerNode),e.owner.mountVframe(t,"app/gallery/mx-calendar/range",{min:e.$min,max:e.$max,dates:e.$dates,linkage:e.$linkage,quickDates:e.$quickDates,placement:e.$placement,align:e.$align}),e.$fill&&e.fill()},show:function(){var e=this;if(!e.$shown){var t=n("#rpcnt_"+e.id),a=e.$ownerNode;e.$shown=!0,d.add(e),t.show();var i=a.offset(),r=void 0,s=void 0;switch(e.$placement){case"top":s=i.top-t.outerHeight()-5;break;default:s=i.top+a.outerHeight()+5}switch(e.$align){case"right":r=i.left+a.outerWidth()-t.outerWidth();break;default:r=i.left}t.offset({left:r,top:s})}},hide:function(){var e=this;if(e.$shown){var t=n("#rpcnt_"+e.id);e.$shown=!1,t.hide(),d.remove(e)}},"pickRange<change>":function(e){var t=this;e.stopPropagation(),t.$dates=e.dates,t.fill(),t.hide(),t.$ownerNode.trigger({type:"change",dates:e.dates})},"hide<cancel>":function(e){e.stopPropagation(),this.hide()}});a.exports=c});