define("app/views/coms/tree",["magix","../../services/service"],function(t,e,d){var i=t("magix");i.applyStyle("pf2",".pf2-e75{width:900px}");var r=t("../../services/service");d.exports=i.View.extend({tmpl:{html:'<h3>Tree组件</h3><p>该组件目前仅展示，其它功能有待开发</p><h4>配置项</h4><table class="p3a-c06 p3a-042 pf2-e75"><thead><tr><th>参数名称</th><th>参数类型</th><th>参数说明</th><th>默认值</th></tr></thead><tbody><tr><td>list</td><td>array</td><td>列表数组，可为简单数组或[1,2,3]或对象数组，如[{id:1,text:\'a\'}]</td><td></td></tr><tr><td>textKey</td><td>string</td><td>当列表中的项为对象时，渲染text时读取的key</td><td></td></tr><tr><td>idKey</td><td>string</td><td>当列表中的项为对象时，做为唯一id的key</td><td></td></tr><tr><td>parentKey</td><td>string</td><td>关联父节点的key</td><td></td></tr></tbody></table><h4 class="p16-716">演示</h4><div mx-guid="g0" id="tree_<%=$$.id%>" mx-view="app/gallery/mx-tree/index?parentKey=pId&idKey=id&textKey=text&list=<%@$$.list1%>"></div><div mx-guid="g1" id="code_<%=$$.id%>" mx-view="app/gallery/mx-tree/index?list=<%@$$.list2%>&parentKey=parentCode&textKey=keyName&idKey=keyCode"></div>',subs:[{keys:["id","list1"],path:'div[mx-guid="g0"]',attr:'id="tree_<%=$$.id%>" mx-view="app/gallery/mx-tree/index?parentKey=pId&idKey=id&textKey=text&list=<%@$$.list1%>"',attrs:[{n:"id",p:1},{n:"mx-view",v:1}]},{keys:["id","list2"],path:'div[mx-guid="g1"]',attr:'id="code_<%=$$.id%>" mx-view="app/gallery/mx-tree/index?list=<%@$$.list2%>&parentKey=parentCode&textKey=keyName&idKey=keyCode"',attrs:[{n:"id",p:1},{n:"mx-view",v:1}]}]},mixins:[r],render:function(){var t=this;t.request().all(["list","code"],function(e,d,i){t.updater.digest({id:t.id,list1:d.get("data",[]),list2:i.get("data",[])})})}})});