define('app/views/demos/editable',['magix','../../../coms/form/index'],function(require,exports,module){
/*Magix ,View */
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
var View = require('../../../coms/form/index');
Magix.applyStyle('mx-638',".mx-638-vm{vertical-align:middle}.mx-638-w100{width:100px}.mx-638-w700{width:700px}.mx-638-m50{margin:50px}.mx-638-w60{width:60px}.mx-638-float{position:fixed;left:1000px;top:100px;border:1px solid #ccc;height:400px;width:200px}.mx-638-sitem{height:26px;line-height:26px;padding:0 10px}.mx-638-fr{float:right}");
module.exports = View.extend({
    tmpl: "<div><table class=\"table mx-638-w700 mx-638-m50\"><thead><tr><th>ID</th><th>Name</th><th></th></tr></thead><tbody mx-guid=\"x6151-\u001f\">@1-\u001f</tbody></table></div>",
    tmplData: [{"guid":1,"keys":["list"],"tmpl":"<%for(var i=0;i<list.length;i++){var item=list[i]%><tr><td><%if(item.editable){%><input class=\"input mx-638-w60\" value=\"<%=item.id%>\" mx-change=\"setValue({path:'list.<%=item.index%>.id'})\"/><%}else{%> <%=item.id%> <%}%></td><td><%if(item.editable){%><input class=\"input mx-638-w100\" value=\"<%=item.name%>\" mx-change=\"setValue({path:'list.<%=item.index%>.name'})\"/><%}else{%> <%=item.name%> <%}%></td><td><div class=\"operation\"><%if(item.editable){%><a href=\"javascript:;\" mx-click=\"save({index:<%=item.index%>})\">保存</a><%}else{%><a href=\"javascript:;\" mx-click=\"edit({index:<%=item.index%>})\">编辑</a><%}%></div></td></tr><%}%>","selector":"tbody[mx-guid=\"x6151-\u001f\"]"}],
    ctor: function() {
        var list = [];
        for (var i = 0; i < 10; i++) {
            list.push({
                index: i,
                name: 'name-' + i,
                id: 'id-' + i
            });
        }
        this.$updater.set({
            list: list
        });
    },
    render: function() {
        var me = this;
        me.$updater.digest();
    },
    'edit<click>': function(e) {
        e.preventDefault();
        var data = this.$updater;
        var list = data.get('list');
        var item = list[e.params.index];
        item.editable = true;
        data.set({
            list: list
        }).digest();
    },
    'save<click>': function(e) {
        e.preventDefault();
        var data = this.$updater;
        var list = data.get('list');
        var item = list[e.params.index];
        delete item.editable;
        data.set({
            list: list
        }).digest();
    }
});
});