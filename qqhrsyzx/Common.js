/******公共脚本******/

var enter = "";

function keyDown() {
    if (event.srcElement.type == "textarea") return;
    if (event.keyCode == 13) {
        if (enter != "") {
            var key = eval("document.all." + enter);
            key.click();
        }
        event.returnValue = false;
    }
}

function setKeyDown(id, name, focus) {

    enter = id.replace(name, "");
    enter = enter + focus;

}

function resear(bigClass, count) {

    var ckjg = "resear.aspx?ckjg=" + bigClass;
    var height = 230 + 30 * count;
    window.open(ckjg, "", "toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no,width=400,height=" + height);
}

//网站调查栏目投票
function ballot(bigClass, id, count) {
    var i;
    var pkId;
    for (i = 0; i < count; i++) {
        var item = eval("document.all." + id + "_sati_" + i);
        if (item.checked == true) {
            pkId = item.value;
            break;
        }
    }
    if (i == count) {
        alert("请选择其中一项再投票！");
        return;
    }
    var height = 230 + 30 * count;
    var aaa = "resear.aspx?aaa=" + bigClass + "&pkId=" + pkId;
    window.open(aaa, "", "toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no,width=400,height=" + height);

}
//注册
function openreg() {
    window.open("http://www.qqhrsyzx.com/js/regLicense.aspx", "", "toolbar=no,menubar=no,scrollbars=NO,resizable=no,location=no,status=no,width=550,height=530");
}
//忘记密码
function forget() {
    window.open("http://www.qqhrsyzx.com/js/retake.aspx", "", "toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no,width=330,height=250");
}

function noname(id)
{
    var item1 = eval("document.all." + id + "_noname");	
    var item=eval("document.all."+id+"_reviewName");
    if (item1.checked)
    {
        item.value="匿名";
    }
    else
    {
        item.value="";
    }
}
function can(id)
{
	var item=eval("document.all."+id+"_reviewName");
	item.value="";
	item=eval("document.all."+id+"_reviewContent");
	item.value="";
}

function validReview(id, filter) {
    var item1 = eval("document.all." + id + "_reviewName");
    if (item1.value.LTrim().RTrim().length == 0) {
        alert("请输入用户名！");
        return false;
    }
    var item = eval("document.all." + id + "_reviewContent");
    if (item.value.LTrim().RTrim().length == 0) {
        alert("请输入评论内容！");
        return false
    }
    var keys = filter.split('|');
    for (i = 0; i < keys.length; i++) {
        var j = item.value.indexOf(keys[i], 0);
        if (j != -1) {
            alert("警告：不能在评论中发布不良信息！");
            return false
        }
    }
    return true;
}
function isValidLogin(id) {
    var item = eval("document.all." + id + "_name");
    if (item.value.LTrim().RTrim().length == 0) {
        alert("请输入用户名！");
        return false
    }
    var item1 = eval("document.all." + id + "_password");
    if (item1.value.LTrim().RTrim().length == 0) {
        alert("请输入密码！");
        return false
    }
    return true;
}
String.prototype.Trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

String.prototype.LTrim = function () {
    return this.replace(/(^\s*)/g, "");
}

String.prototype.RTrim = function () {
    return this.replace(/(\s*$)/g, "");
}
function validSearch(id) {
    var item = eval("document.all." + id + "_content");
    if (item.value.LTrim().RTrim().length == 0) {
        alert("搜索内容不能为空！");
        item.focus();
        return false;
    }
    return true;
}
function setWinuponIframe(id, content) {
    document.getElementById(id).innerHTML = content;
}


var xmlDoc;
var defaulttype = null;
var defaultsource = null;
var ddltype = null;
var ddlsource = null;
var txttype = null;
var txtsource = null;
//HuiMin定制功能
function InItDom(fname) {

    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.load(fname);
    if (xmlDoc.parseError.errorCode != 0) {
        var myErr = xmlDoc.parseError;
        alert("解析xml出错！" + myErr.reason);
    }
    return xmlDoc;
}

function onSelectSource() {
    txttype.value = ddltype.options[ddltype.selectedIndex].text;
    if (txttype.value == '全部') {
        ddlsource.options[0].selected = 'selected';
        txtsource.value = '0';
    }
    getchildname(ddltype.options[ddltype.selectedIndex].text);
    selectSource(ddltype.options[ddltype.selectedIndex].text);
    
}

function Onselect() {
    txtsource.value = ddlsource.options[ddlsource.selectedIndex].value;
}

function InitUnitOptions(objSelect, childNodes) {
    var m_ChildNodes = childNodes;
    objSelect.length = 0;
        var options = document.createElement("option");
        options.value = "0";
        options.text = "全部";
        objSelect.add(options);   
        for (var i = 0; i < m_ChildNodes.length; i++) {
            var childNode = m_ChildNodes[i];
            var eOption = document.createElement("option");
            if (objSelect == ddltype) {
                eOption.value = childNode.getAttribute("name");
            }
            else {
                eOption.value = childNode.getAttribute("id");
            }
            eOption.text = childNode.getAttribute("name");
            objSelect.add(eOption);            
            if ((eOption.value == defaultsource)
            || (eOption.text == defaulttype)) {
                eOption.selected = 'selected';
            }
            
        }

    }

    function getNodeByXPath(strXPath) {
        return edutypeDom.selectSingleNode(strXPath);
    }

    function selectSource(unitName) {
        var sourceNode = getNodeByXPath('//config/unitstype [@name="' + unitName + '"]');
        if (sourceNode.childNodes.length > 0) {
            InitUnitOptions(ddlsource, sourceNode.childNodes);
        }
    }

    function getchildname(chname) {
        var childname = getNodeByXPath('//config/unitstype [@name="' + chname + '"]');
        var childNodes = childname.childNodes;
        //defaultsource = childNodes[0].getAttribute("id");
        defaultsource = '0';
        txtsource.value = defaultsource;
    } 



window.onerror = function() { return true; }

var ScrollUpNewsObj = new Array();
//垂直移动
function qswhMarquee(demoUpNews, demoUpNews1, demoUpNews2) {
    if (document.getElementById(demoUpNews2).offsetTop - document.getElementById(demoUpNews).scrollTop <= 0) {
        document.getElementById(demoUpNews).scrollTop -= document.getElementById(demoUpNews1).offsetHeight
    }
    else {
        document.getElementById(demoUpNews).scrollTop = document.getElementById(demoUpNews).scrollTop + 1  //3表示一次移动的象素
    }
}

function ScrollUpNewsMouseOver(demoUpNews, demoUpNews1, demoUpNews2) {
    ScrollUpNewsObj[demoUpNews] = setInterval(function() { qswhMarquee(demoUpNews, demoUpNews1, demoUpNews2) }, 40);
}

//水平移动
function qswhMarqueeH(demoUpNews, demoUpNews1, demoUpNews2) {

    if (document.getElementById(demoUpNews2).offsetWidth - document.getElementById(demoUpNews).scrollLeft <= 0) {
        document.getElementById(demoUpNews).scrollLeft -= document.getElementById(demoUpNews1).offsetWidth
    }
    else {
        document.getElementById(demoUpNews).scrollLeft = document.getElementById(demoUpNews).scrollLeft + 1  //3表示一次移动的象素
    }
}
function ScrollHMouseOver(demoUpNews, demoUpNews1, demoUpNews2) {
    ScrollUpNewsObj[demoUpNews] = setInterval(function() { qswhMarqueeH(demoUpNews, demoUpNews1, demoUpNews2) }, 40);
}


//Yinyf

var Oxsir = {};

Oxsir.Browser = {};

Oxsir.Browser.InternetExplorer = {};
Oxsir.Browser.Firefox = {};
Oxsir.Browser.Safari = {};
Oxsir.Browser.Opera = {};

Oxsir.Browser.agent = null;
Oxsir.Browser.hasDebuggerStatement = false;
Oxsir.Browser.name = navigator.appName;
Oxsir.Browser.version = parseFloat(navigator.appVersion);

if (navigator.userAgent.indexOf(' MSIE ') > -1) {
    Oxsir.Browser.agent = Oxsir.Browser.InternetExplorer;
    Oxsir.Browser.version = parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]);
    Oxsir.Browser.hasDebuggerStatement = true;
}
else if (navigator.userAgent.indexOf(' Firefox/') > -1) {
    Oxsir.Browser.agent = Oxsir.Browser.Firefox;
    Oxsir.Browser.version = parseFloat(navigator.userAgent.match(/ Firefox\/(\d+\.\d+)/)[1]);
    Oxsir.Browser.name = 'Firefox';
    Oxsir.Browser.hasDebuggerStatement = true;
}
else if (navigator.userAgent.indexOf(' Safari/') > -1) {
    Oxsir.Browser.agent = Oxsir.Browser.Safari;
    Oxsir.Browser.version = parseFloat(navigator.userAgent.match(/ Safari\/(\d+\.\d+)/)[1]);
    Oxsir.Browser.name = 'Safari';
}
else if (navigator.userAgent.indexOf('Opera/') > -1) {
    Oxsir.Browser.agent = Oxsir.Browser.Opera;
}


Oxsir.Common = {};

Oxsir.Common.Random = function() {
    return parseInt(Math.random() * 10000, 10);
}


Oxsir.Common.PaletteDialog = function(id, path) {
    var arr = showModalDialog(path + "selcolor.htm", "", "dialogWidth:18.5em; dialogHeight:17.5em; status:0");

    var tmp;
    if (Oxsir.Common.JavaScript.TypeOf(id).toString().toLowerCase() == "string") {
        tmp = document.getElementById(id);
    }
    else {
        tmp = id.srcElement;
    }

    if (arr && tmp) {
        tmp.value = arr;
        tmp.fireEvent("onchange");
    }
}

Oxsir.Common.RequestQueryString = function(name) {
    var sValue = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]*)(\&?)", "i"));
    return sValue ? sValue[1] : sValue;
}

Oxsir.Common.Table = {};

//把表格的多行多列变成一列多行形
Oxsir.Common.Table.RowToColumn = function(table, tdStyle) {
    var tr, td;
    var columnCount, rowCount;
    if (table) {
        rowCount = table.rows.length;
        for (var j = 0; j < rowCount; j++) {
            columnCount = table.rows[0].cells.length;
            for (var i = 0; i < columnCount; i++) {
                tr = table.insertRow(table.rows.length);
                td = tr.insertCell(0);
                td.innerHTML = table.rows[0].cells[i].innerHTML;
                try {
                    td.attributes["id"].value = table.rows[0].cells[i].attributes["id"].value;
                    td.attributes["onclick"].value = table.rows[0].cells[i].attributes["onclick"].value;
                    td.attributes["vessels"].value = table.rows[0].cells[i].attributes["vessels"].value;
                }
                catch (e) {
                }
                td.style.cssText = tdStyle;
            }
            table.deleteRow(0);
        }
    }
}

//把表格的多行多列变成一行多列形
Oxsir.Common.Table.ColumnToRow = function(table, tdStyle) {
    var tr, td;
    var columnCount, rowCount;

    if (table) {
        rowCount = table.rows.length;

        tr = table.insertRow(table.rows.length);
        for (var i = 0; i < rowCount; i++) {
            columnCount = table.rows[0].cells.length;
            for (var j = 0; j < columnCount; j++) {
                td = tr.insertCell(tr.cells.length);
                td.innerHTML = table.rows[0].cells[j].innerHTML;
                try {
                    td.attributes["id"].value = table.rows[0].cells[j].attributes["id"].value;
                    td.attributes["onclick"].value = table.rows[0].cells[j].attributes["onclick"].value;
                    td.attributes["vessels"].value = table.rows[0].cells[j].attributes["vessels"].value;
                }
                catch (e) {
                }
                td.style.cssText = tdStyle;

            }
            table.deleteRow(0);
        }
    }
}

Oxsir.Common.JavaScript = {};

Oxsir.Common.JavaScript.TypeOf = function(objClass) {
    if (objClass && objClass.constructor && objClass.constructor.__typeName) {
        return objClass.constructor.__typeName;
    }
    else if (objClass && objClass.constructor) {
        var strFun = objClass.constructor.toString();
        var className = strFun.substr(0, strFun.indexOf('('));
        className = className.replace('function', '');
        return className.replace(/(^\s*)|(\s*$)/ig, '');
    }
    else {
        return typeof (objClass);
    }
}


Oxsir.Common.JavaScript.Serialize = function(o) {
    var type = Oxsir.Common.JavaScript.TypeOf(o);
    switch (type) {
        case 'Array':
            {
                var strArray = '[';
                for (var i = 0; i < o.length; ++i) {
                    var value = '';
                    if (o[i]) {
                        value = Oxsir.Common.JavaScript.Serialize(o[i]);
                    }
                    strArray += value + ',';
                }
                if (strArray.charAt(strArray.length - 1) == ',') {
                    strArray = strArray.substr(0, strArray.length - 1);
                }
                strArray += ']';
                return strArray;
            }
        case 'Date':
            {
                return 'new Date(' + o.getTime() + ')';
            }
        case 'Boolean':
        case 'Number':
        case 'number':
            return o.toString();
        case 'String':
            {
                return "\"" + o.toString() + "\"";
            }
        default:
            {
                var serialize = '{';

                for (var key in o) {
                    var subserialize = 'null';
                    if (o[key] != undefined && o[key].constructor.__typeName != "Function") {
                        subserialize = Oxsir.Common.JavaScript.Serialize(o[key]);
                        serialize += key + ' : ' + subserialize + ',';
                    }
                }

                if (o.constructor && o.constructor.__typeName) {
                    serialize += 'constructor : { __typeName : \"' + o.constructor.__typeName + '\"}';
                }
                else if (serialize.charAt(serialize.length - 1) == ',') {
                    serialize = serialize.substr(0, serialize.length - 1);
                }
                serialize += '}';
                return serialize;
            }
    }
}

Oxsir.Common.JavaScript.Deserialize = function(o) {
    return eval(o);
}

Oxsir.Common.JavaScript.GetValidAttributes = function(o) {
    var type = Oxsir.Common.JavaScript.TypeOf(o);
    switch (type) {
        case "Array":
            for (var i = 0; i < o.length; i++) {
                Oxsir.Common.JavaScript.GetValidAttributes(o[i]);
            }
            break;

        case 'Date':
        case 'Boolean':
        case 'Number':
        case 'number':
        case 'String':
        case 'Null':
            break;

        default:
            try {
                var typeName = o.constructor.__typeName.toString();
                var validAttributes = eval("t = " + typeName + "ValidAttributes");
                for (var key in o) {
                    if (!validAttributes[key]) {
                        o[key] = null;
                    }
                    else {
                        Oxsir.Common.JavaScript.GetValidAttributes(o[key]);
                    }
                }
            }
            catch (e) {

            }
            break;
    }
}

Oxsir.Common.JavaScript.Converter = function(s) {
    var dfr;
    var type = Oxsir.Common.JavaScript.TypeOf(s);
    switch (type) {
        case "Array":
            dfr = [];
            for (var i = 0; i < s.length; i++) {
                dfr[i] = Oxsir.Common.JavaScript.Converter(s[i]);
            }
            break;
        case 'Date':
        case 'Boolean':
        case 'Number':
        case 'number':
        case 'String':
        case 'Null':    //有待验证


            dfr = s;
            break;
        default:
            try {
                var typeName = s.constructor.__typeName.toString();
                dfr = eval("new " + typeName + "()");
                if (dfr) {
                    for (var key in s) {
                        //规定Parent为父指针
                        if (key == "Parent") { continue; }
                        dfr[key] = Oxsir.Common.JavaScript.Converter(s[key]);
                    }
                }
            }
            catch (e) {
                dfr = s;
            }
            break;
    }
    return dfr;
}

Oxsir.TabClickTab = function(o) {
    try {
        //debugger;
        var tagID = o.parentNode.id;
        var vessels = document.getElementById(o.getAttribute("vessels"));

        var argument = vessels.getAttribute("arguments");
        argument = Oxsir.Common.JavaScript.Deserialize(argument);
        for (var i = 0; i < argument.length; i++) {
            if (argument[i].Tag == tagID) {
                var tag = document.getElementById(argument[i].Tag);
                var tab = document.getElementById(argument[i].Tab);
                tag.firstChild.style.backgroundImage = "url(" + tag.firstChild.getAttribute("bgimgcur") + ")";
                tab.style.display = "block";
            }
            else {
                var tag = document.getElementById(argument[i].Tag);
                var tab = document.getElementById(argument[i].Tab);
                tag.firstChild.style.backgroundImage = "url(" + tag.firstChild.getAttribute("bgimg") + ")";
                tab.style.display = "none";
            }
        }

    }
    catch (e) {
        //alert(e.toString());
    }
}

//问卷调查
Oxsir.WebResear = {};

Oxsir.WebResear.CheckFormrd = function(o, id, pkId) {

    var txtbox = document.getElementById(id);
    var TextBox = document.getElementById(pkId);

    if (o && txtbox) {//清除文本框内容记录


        if (txtbox.value.indexOf("&<Text%") != -1) {
            txtbox.value = txtbox.value.replace(
                               txtbox.value.slice(
                                  txtbox.value.slice(0,
                                                    txtbox.value.indexOf("&<Text%")
                                                    ).lastIndexOf("|<ID%"),
                                                txtbox.value.indexOf("%Text>|", txtbox.value.indexOf("&<Text%", 0)) + 6
                                               )
                                           , "");
        }
        if (txtbox.value.indexOf("%Text>|") != -1) {
            txtbox.value = txtbox.value.replace(
            txtbox.value.slice(txtbox.value.slice(0, (txtbox.value.indexOf("="))).lastIndexOf("|<ID%"),
            txtbox.value.indexOf("%ID>=")),
            "|" + "<ID%" + o.value + "");
        }
        else
            txtbox.value = txtbox.value + "<ID%" + o.value + "%ID>" + "=" + "<Text%" + o.checked + "%Text>" + "|";
    }
    if (TextBox){
        TextBox.disabled = true;
	}
	
}
Oxsir.WebResear.CheckFormcb = function(o, id, pkId) {
    var txtbox = document.getElementById(id);
    if (o && txtbox) {
        if (txtbox.value.indexOf("<ID%" + pkId + "%ID>", 0) != -1) {
            if (!o.checked)
                txtbox.value = txtbox.value.replace(
                                        txtbox.value.slice(
                                                   txtbox.value.indexOf("<ID%" + pkId + "%ID>", 0),
                                                   txtbox.value.indexOf("%Text>|", txtbox.value.indexOf("<ID%" + pkId + "%ID>", 0)) + 7
                                                          ),
                                               "");
            //                  txtbox.value = txtbox.value.replace(
            //                                        txtbox.value.slice(
            //                                                   txtbox.value.indexOf("<ID%" + pkId + "%ID>",0),
            //                                                   txtbox.value.indexOf("%Text>|",txtbox.value.indexOf("<ID%" + pkId + "%ID>",0))+6
            //                                                          ),
            //                                               "<ID%" + pkId + "%ID>"+"="+"<Text%" + o.checked + "%Text>");
        }
        else {
            /*var checkbox = document.getElementsByName(bigClassPkId);
            var SelectedNum = 0;
            for(var i=0;i<checkbox.length;i++)
            {
            if(checkbox[i].checked)
            {
            SelectedNum++;
            if(SelectedNum>10)
            {
            alert("最多只能选10项");
            o.checked = 0;
            return;
            }
            }      
            }*/
            txtbox.value = txtbox.value + "<ID%" + pkId + "%ID>" + "=" + "<Text%" + o.checked + "%Text>" + "|";
        }
    }
}
Oxsir.WebResear.CheckFormrdTxt = function(o, id, pkId) {
    var txtbox = document.getElementById(id);
    var TextBox = document.getElementById(pkId);

    if (o && txtbox) {
        if (txtbox.value.indexOf("%Text>|") != -1) {  //替换选项为文本框内容
            txtbox.value = txtbox.value.replace(
                                          txtbox.value.slice(
                                                   txtbox.value.slice(0, txtbox.value.indexOf("%ID>=")).lastIndexOf("|<ID%"),
                                                   txtbox.value.indexOf("%Text>|", txtbox.value.indexOf("=<Text%", 0)) + 6
                                                            ),
                                          "|" + "<ID%" + o.value + "%ID>" + "&<Text%" + TextBox.value + "%Text>");
            //            txtbox.value = txtbox.value.replace(
            //            txtbox.value.slice(txtbox.value.slice(0,(txtbox.value.indexOf("="))).lastIndexOf("|") , 
            //            txtbox.value.indexOf("=")),
            //            "|"+o.value);
        }
        else
            txtbox.value = txtbox.value + "<ID%" + o.value + "%ID>" + "&<Text%" + TextBox.value + "%Text>|";
    }
    if (o && TextBox) {
        if (o.checked) {
            TextBox.disabled = false;
        }
    }
}
Oxsir.WebResear.CheckFormcbTxt = function(o, id, pkId) {

    var txtbox = document.getElementById(id);
    var TextBox = document.getElementById(pkId);
    if (o && TextBox) {
        if (o.checked) {
            txtbox.value = txtbox.value + "<ID%" + o.value + "%ID>" + "&<Text%" + TextBox.value + "%Text>|";
            TextBox.disabled = false;
        }
        else {
            if (txtbox.value.indexOf("&<Text%") != -1)
                txtbox.value = txtbox.value.replace(
                              txtbox.value.slice(
                                 txtbox.value.slice(0, txtbox.value.indexOf("&<Text%")).lastIndexOf("|<ID%"),
                                                    txtbox.value.indexOf("%Text>|", txtbox.value.indexOf("&<Text%", 0)) + 6
                                                 ), "");
            TextBox.disabled = true;
        }
    }
}
Oxsir.WebResear.CheckFormtxb = function(o, id, pkId) {
    var txtbox = document.getElementById(id);
    if (o && txtbox) {
        if (txtbox.value.indexOf("<ID%" + o.getAttribute("optionsId") + "%ID>", 0) != -1) {
            txtbox.value = txtbox.value.replace(
                              txtbox.value.slice(
                                                   txtbox.value.indexOf("<ID%" + o.getAttribute("optionsId") + "%ID>", 0),
                                                   txtbox.value.indexOf("%Text>|", txtbox.value.indexOf("<ID%" + o.getAttribute("optionsId") + "%ID>", 0)) + 6
                                                ),
                                                 "<ID%" + o.getAttribute("optionsId") + "%ID>" + "&<Text%" + o.value + "%Text>");
        }
        else
            txtbox.value = txtbox.value + "<ID%" + o.getAttribute("optionsId") + "%ID>" + "&<Text%" + o.value + "%Text>|";
    }
}

Oxsir.WebResear.ViewPole = function(bigClassPkId) {
    var aaa = "WebResearResultPole.aspx?bigClassPkId=" + bigClassPkId;
    window.open(aaa, "", "width=450,height=400,scrollbars=yes,status=yes");
}
Oxsir.WebResear.ViewCake = function(bigClassPkId) {

    var aaa = "WebResearResultCake.aspx?bigClassPkId=" + bigClassPkId;
    window.open(aaa, "", "width=450,height=400,scrollbars=yes,status=yes");
}

Oxsir.WebResear.InitWebResearData = function(webResearClientID) {
    document.isSubmited = false;
    window.open("WebResearVote.aspx?ClientID=" + webResearClientID, "", "width=450,height=400,scrollbars=yes,status=yes");
}
Oxsir.WebResear.WebResearDataForSave = function(webResearClientID) {
    document.isSubmited = false;
    window.open("WebResearVote.aspx?ClientID=" + webResearClientID + "&IsSaved=1", "", "width=450,height=400,scrollbars=yes,status=yes");
}
Oxsir.WebResear.WebResearSubmitSchoolInfo = function(webResearClientID) {
    document.isSubmited = false;
    window.open("WebResearVote.aspx?ClientID=" + webResearClientID + "&IsSubmitSchoolInfo=1", "", "width=450,height=400,scrollbars=yes,status=yes");
}

/****************************************************************
* Iframe框架自适应
****************************************************************/
function iframeAutoFit() {
    try {
        if (window != parent) {
            var a = parent.document.getElementsByTagName("IFRAME");
            for (var i = 0; i < a.length; i++) //author:meizz
            {
                if (a[i].contentWindow == window) {
                    var h1 = 0, h2 = 0;
                    a[i].parentNode.style.height = a[i].offsetHeight + "px";
                    a[i].style.height = "0px";
                    if (document.documentElement && document.documentElement.scrollHeight) {
                        h1 = document.documentElement.scrollHeight;
                    }
                    if (document.body) h2 = document.body.scrollHeight;

                    var h = Math.max(h1, h2);
                    if (document.all) { h += 4; }
                    if (window.opera) { h += 1; }
                    a[i].style.height = a[i].parentNode.style.height = h + "px";
                }
            }
        }
    }
    catch (ex) { }
}

function AskAnswer(container) {
    var contain = document.getElementById(container);
    var height = parseInt(contain.style.height, 10);
    var marquee1 = new Marquee(container, 0, null, null, null, 100);
    marquee1.Start();
}


function Request(strName) {
    var strHref = window.location.href;
    var intPos = strHref.indexOf("?");
    var strRight = strHref.substr(intPos + 1);
    var arrTmp = strRight.split("&");
    for (var i = 0; i < arrTmp.length; i++) {
        var arrTemp = arrTmp[i].split("=");
        if (arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
    }
    return "";
}


//定制功能脚本
function getvalue(name) {
    var str = window.location.search;
    if (str.indexOf(name) != -1) {
        var pos_start = str.indexOf(name) + name.length + 1;
        var pos_end = str.indexOf("&", pos_start);
        if (pos_end == -1) {
            return str.substring(pos_start);
        }
        else {
            return str.substring(pos_start, pos_end)
        }
    }
    else {
        return "";
    }
}

function insertAfter(newEl, targetEl) {
    var parentEl = targetEl.parentNode;

    if (parentEl.lastChild == targetEl) {
        parentEl.appendChild(newEl);
    } else {
        parentEl.insertBefore(newEl, targetEl.nextSibling);
    }
}

//定制留言汇总功能脚本
function showTable(gridId, pageId, pageSize, time) {
    var obj = document.getElementById(gridId);
    var pagesNumber = obj.rows.length / pageSize;

    var m_newTableRow = document.createElement('tr');
    m_newTableRow.style.height = "14pt";
    var m_newTablerowData = document.createElement('td');
    m_newTablerowData.align = "right";
    m_newTablerowData.colSpan = 3;
    for (var i = 0; i < pagesNumber; i++)
        m_newTablerowData.innerHTML += "<a id=\"page_" + i + "\" onClick='showData(\"" + gridId + "\", " + i + ", " + pageSize + ", " + 0 + ");' style=\"cursor:pointer;margin-left:3px;margin-right:3px;\">" + (i + 1) + "</a>";
    m_newTableRow.appendChild(m_newTablerowData);
    insertAfter(m_newTableRow, obj.rows[obj.rows.length - 1]);
    showData(gridId, pageId, pageSize, time)
}

function showData(gridId, pageId, pageSize, time) {
    var size = pageSize - 1;
    var showedNumber = 0;
    var obj = document.getElementById(gridId);
    var pagesNumber = obj.rows.length / pageSize;
    for (var i = 0; i < obj.rows.length; i++) {
        if (i < ((pageId + 1) * size) && i >= pageId * size) {
            obj.rows[i].style.display = "";
        }
        else {
            obj.rows[i].style.display = "none";
        }
    }
    obj.rows[obj.rows.length - 1].style.display = "";

    for (var i = 0; i < pagesNumber; i++) {
        var pageIndex = document.getElementById("page_" + i);
        if (i == pageId)
            pageIndex.style.background = "#bfa757";
        else
            pageIndex.style.background = "#FFFFFF";
    }

    pageId++;
    if (pageId >= pagesNumber)
        pageId = 0;
    if (time > 0)
        setTimeout("showData(\"" + gridId + "\", " + pageId + ", " + pageSize + ", " + time + ");", time);
}


