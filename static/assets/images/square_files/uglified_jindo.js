function _event_getScrollbarSize(){var a={x:0,y:0},b=jindo.$(['<div style="',["overflow:scroll","width:100px","height:100px","position:absolute","left:-1000px","border:0","margin:0","padding:0"].join(" !important;"),' !important;">'].join(""));
return document.body.insertBefore(b,document.body.firstChild),a={x:b.offsetWidth-b.scrollWidth,y:b.offsetHeight-b.scrollHeight
},document.body.removeChild(b),b=null,_event_getScrollbarSize=function(){return a},a}function _ie_check_scroll(a,b){
var c=jindo._p_._j_ag.match(/(?:MSIE) ([0-9.]+)/);return(_ie_check_scroll=document.body.componentFromPoint&&c&&8==parseInt(c[1],10)?function(a,b){
return!/HTMLGenericElement/.test(a+"")&&/(scrollbar|outside)/.test(a.componentFromPoint(b.clientX,b.clientY));
}:function(a,b){return/(scrollbar|outside)/.test(a.componentFromPoint(b.clientX,b.clientY))})(a,b)}function _event_isScroll(a,b){
if(a.componentFromPoint)return _ie_check_scroll(a,b);if(jindo._p_._JINDO_IS_FF)try{var c=b.originalTarget.localName;
return"thumb"===c||"slider"===c||"scrollcorner"===c||"scrollbarbutton"===c}catch(d){return!0}var e=jindo.$Element(a).css("display");
if("inline"===e)return!1;var f={x:b.offsetX||b.layerX||0,y:b.offsetY||b.layerY||0};jindo._p_._JINDO_IS_WK&&(f.x-=a.clientLeft,
f.y-=a.clientTop);var g=_event_getScrollbarSize(),h={x:[a.clientWidth,a.clientWidth+g.x],y:[a.clientHeight,a.clientHeight+g.y]
};return h.x[0]<=f.x&&f.x<=h.x[1]||h.y[0]<=f.y&&f.y<=h.y[1]}"undefined"!=typeof window&&void 0===window.nhn&&(window.nhn={});
var jindo=window.jindo||{};if(jindo._p_={},jindo._p_.jindoName="jindo",window[jindo._p_.jindoName]){
var __old_j=window[jindo._p_.jindoName];for(var i in __old_j)jindo[i]=__old_j[i]}jindo._p_._j_ag=navigator.userAgent,
jindo._p_._JINDO_IS_IE=/(MSIE|Trident)/.test(jindo._p_._j_ag),jindo._p_._JINDO_IS_FF=jindo._p_._j_ag.indexOf("Firefox")>-1,
jindo._p_._JINDO_IS_OP=jindo._p_._j_ag.indexOf("Opera")>-1,jindo._p_._JINDO_IS_SP=jindo._p_._j_ag.indexOf("Safari")>-1,
jindo._p_._JINDO_IS_SF=jindo._p_._j_ag.indexOf("Apple")>-1,jindo._p_._JINDO_IS_CH=jindo._p_._j_ag.indexOf("Chrome")>-1,
jindo._p_._JINDO_IS_WK=jindo._p_._j_ag.indexOf("WebKit")>-1,jindo._p_._JINDO_IS_EG=jindo._p_._j_ag.indexOf("Edge")>-1,
jindo._p_._JINDO_IS_MO=/(iPad|Mobile|Android|Nokia|webOS|BlackBerry|Opera Mini)/.test(jindo._p_._j_ag),
jindo._p_.trim=function(a){return a.replace(/^(\s|　)+/g,"").replace(/(\s|　)+$/g,"")},jindo.$Jindo=function(){
var a=arguments.callee,b=a._cached;return b?b:this instanceof a?(b||(a._cached=this),void(this.version="2.8.1")):new a;
},jindo.$Jindo.VERSION="2.8.1",jindo._p_.addExtension=function(a,b,c){jindo[a][b]?jindo.$Jindo._warn(a+"."+b+" was overwrite."):/^x/.test(b)?jindo[a][b]=c:jindo.$Jindo._warn("The Extension Method("+a+"."+b+") must be used with x prefix.");
},jindo.$Jindo.compatible=function(){return!1},jindo.$Jindo.mixin=function(a,b){g_checkVarType(arguments,{
obj:["oDestination:Hash+","oSource:Hash+"]},"<static> $Jindo#mixin");var c={};for(var d in a)c[d]=a[d];
for(d in b)b.hasOwnProperty(d)&&!jindo.$Jindo.isHash(b[d])&&(c[d]=b[d]);return c},jindo._p_._objToString=Object.prototype.toString,
jindo.$Error=function(a,b){this.message="	method : "+b+"\n	message : "+a,this.type="Jindo Custom Error",
this.toString=function(){return this.message+"\n	"+this.type}},jindo.$Except={CANNOT_USE_OPTION:"해당 옵션은 사용할 수 없습니다.",
CANNOT_USE_HEADER:"type이 jsonp일때 header메서드는 사용할 수 없습니다.",PARSE_ERROR:"파싱중 에러가 발생했습니다.",NOT_FOUND_ARGUMENT:"파라미터가 없습니다.",
NOT_STANDARD_QUERY:"css셀렉터가 정상적이지 않습니다.",INVALID_DATE:"날짜 포멧이 아닙니다.",REQUIRE_AJAX:"가 없습니다.",NOT_FOUND_ELEMENT:"엘리먼트가 없습니다.",
HAS_FUNCTION_FOR_GROUP:"그룹으로 지우지 않는 경우 detach할 함수가 있어야 합니다.",NONE_ELEMENT:"에 해당하는 엘리먼트가 없습니다.",NOT_SUPPORT_SELECTOR:"는 지원하지 않는 selector입니다.",
NOT_SUPPORT_METHOD:"desktop에서 지원하지 않는 메서드 입니다.",JSON_MUST_HAVE_ARRAY_HASH:"get메서드는 json타입이 hash나 array타입만 가능합니다.",
MUST_APPEND_DOM:"document에 붙지 않은 엘리먼트를 기준 엘리먼트로 사용할 수 없습니다.",NOT_USE_CSS:"는 css를 사용 할수 없습니다.",NOT_WORK_DOMREADY:"domready이벤트는 iframe안에서 사용할 수 없습니다.",
CANNOT_SET_OBJ_PROPERTY:"속성은 오브젝트입니다.\n클래스 속성이 오브젝트이면 모든 인스턴스가 공유하기 때문에 위험합니다.",NOT_FOUND_HANDLEBARS:"",
INVALID_MEDIA_QUERY:""},jindo._p_._toArray=function(a){return Array.prototype.slice.apply(a)};try{Array.prototype.apply(document.documentElement.childNodes);
}catch(e){jindo._p_._toArray=function(a){for(var b=[],c=a.length,d=0;c>d;d++)b.push(a[d]);return b}}
jindo.$Jindo.isNumeric=function(a){return!isNaN(parseFloat(a))&&!jindo.$Jindo.isArray(a)&&isFinite(a);
},function(){var a={Element:1,Document:9};for(var b in a)jindo.$Jindo["is"+b]=function(a,b){return function(c){
return new RegExp(a).test(jindo._p_._objToString.call(c))?!0:"[object Object]"==jindo._p_._objToString.call(c)&&null!==c&&void 0!==c&&c.nodeType==b?!0:!1;
}}(b,a[b]);for(var c=["Function","Array","String","Boolean","Date","RegExp"],b=0,d=c.length;d>b;b++)jindo.$Jindo["is"+c[b]]=function(a){
return function(b){return jindo._p_._objToString.call(b)=="[object "+a+"]"}}(c[b])}(),jindo.$Jindo.isNode=function(a){
try{return!(!a||!a.nodeType)}catch(b){return!1}},jindo.$Jindo.isHash=function(a){return"[object Object]"==jindo._p_._objToString.call(a)&&null!==a&&void 0!==a&&!a.nodeType&&!jindo.$Jindo.isWindow(a);
},jindo.$Jindo.isNull=function(a){return null===a},jindo.$Jindo.isUndefined=function(a){return void 0===a;
},jindo.$Jindo.isWindow=function(a){return a&&(a==window.top||a==a.window)},jindo.$Jindo.Break=function(){
if(!(this instanceof arguments.callee))throw new arguments.callee},jindo.$Jindo.Continue=function(){
if(!(this instanceof arguments.callee))throw new arguments.callee},jindo.$Jindo._F=function(a){return a;
},jindo.$Jindo._warn=function(a){window.console&&(console.warn&&console.warn(a),!0)},jindo.$Jindo._maxWarn=function(a,b,c){
a>b&&jindo.$Jindo._warn("추가적인 파라미터가 있습니다. : "+c)},jindo.$Jindo.checkVarType=function(a,b,c){var c=c||a.callee.name||"anonymous",d=jindo.$Jindo,e=d.compatible(),f=a.callee["_checkVarType_"+e];
if(f)return f(a,b,c);var g=[];g.push("var nArgsLen = aArgs.length;"),g.push("var $Jindo = "+jindo._p_.jindoName+".$Jindo;"),
e&&(g.push("var nMatchScore;"),g.push("var nMaxMatchScore = -1;"),g.push("var oFinalRet = null;"));var h=[],i=0;
for(var j in b)b.hasOwnProperty(j)&&(i=Math.max(b[j].length,i));for(var j in b)if(b.hasOwnProperty(j)){
var k=b[j],l=k.length,m=[],n=[],o=[];e||n.push(i>l?"nArgsLen === "+l:"nArgsLen >= "+l),o.push("var oRet = new $Jindo._varTypeRetObj();");
for(var p=l,q=0;l>q;++q){var r=/^([^:]+):([^\+]*)(\+?)$/.exec(k[q]),s=r[1],t=r[2],u=!!r[3];if("Variant"===t)e&&n.push(q+" in aArgs"),
o.push('oRet["'+s+'"] = aArgs['+q+"];"),p--;else if(d._varTypeList[t]){var v="tmp"+t+"_"+q;m.push("var "+v+" = $Jindo._varTypeList."+t+"(aArgs["+q+"], "+u+");"),
n.push(v+" !== "+jindo._p_.jindoName+".$Jindo.VARTYPE_NOT_MATCHED"),o.push('oRet["'+s+'"] = '+v+";");
}else if(/^\$/.test(t)&&jindo[t]){var w,x="";u&&(w={$Fn:"Function",$S:"String",$A:"Array",$H:"Hash",
$ElementList:"Array"}[t]||t.replace(/^\$/,""),jindo.$Jindo["is"+w]&&(x=" || $Jindo.is"+w+"(vNativeArg_"+q+")")),
n.push("(aArgs["+q+"] instanceof "+jindo._p_.jindoName+"."+t+x+")"),o.push('oRet["'+s+'"] = '+jindo._p_.jindoName+"."+t+"(aArgs["+q+"]);");
}else{if(!jindo.$Jindo["is"+t])throw new Error("VarType("+t+") Not Found");var y,x="";u&&(y={Function:"$Fn",
String:"$S",Array:"$A",Hash:"$H"}[t]||"$"+t,jindo[y]&&(x=" || aArgs["+q+"] instanceof "+jindo._p_.jindoName+"."+y)),
n.push("($Jindo.is"+t+"(aArgs["+q+"])"+x+")"),o.push('oRet["'+s+'"] = vNativeArg_'+q+";")}}o.push('oRet.__type = "'+j+'";'),
e?(o.push("nMatchScore = "+(1e3*l+10*p)+" + (nArgsLen === "+l+" ? 1 : 0);"),o.push("if (nMatchScore > nMaxMatchScore) {"),
o.push("    nMaxMatchScore = nMatchScore;"),o.push("    oFinalRet = oRet;"),o.push("}")):o.push("return oRet;"),
h.push(m.join("\n")),n.length&&h.push("if ("+n.join(" && ")+") {"),h.push(o.join("\n")),n.length&&h.push("}");
}g.push(" $Jindo._maxWarn(nArgsLen,"+i+',"'+c+'");');for(var q=0;i>q;++q){var z="aArgs["+q+"]";g.push(["var vNativeArg_",q," = ",z," && ",z,".$value ? ",z,".$value() : ",z+";"].join(""));
}return e||h.push("$Jindo.checkVarType._throwException(aArgs, oRules, sFuncName);"),h.push("return oFinalRet;"),
a.callee["_checkVarType_"+e]=f=new Function("aArgs,oRules,sFuncName",g.join("\n")+h.join("\n")),f(a,b,c);
};var g_checkVarType=jindo.$Jindo.checkVarType;jindo.$Jindo._varTypeRetObj=function(){},jindo.$Jindo._varTypeRetObj.prototype.toString=function(){
return this.__type},jindo.$Jindo.checkVarType._throwException=function(a,b,c){for(var d=function(a){
for(var b in jindo)if(jindo.hasOwnProperty(b)){var c=jindo[b];if("function"!=typeof c)continue;if(a instanceof c)return b;
}var d=jindo.$Jindo;for(var b in d)if(d.hasOwnProperty(b)){if(!/^is(.+)$/.test(b))continue;var e=RegExp.$1,f=d[b];
if(f(a))return e}return"Unknown"},e=function(a,b,c){var d=["잘못된 파라미터입니다.",""];if(a&&(d.push("호출한 형태 :"),
d.push("	"+a),d.push("")),b.length){d.push("사용 가능한 형태 :");for(var e=0,f=b.length;f>e;e++)d.push("	"+b[e]);
d.push("")}return c&&(d.push("매뉴얼 페이지 :"),d.push("	"+c),d.push("")),d.unshift(),d.join("\n")},f=[],g=0,h=a.length;h>g;++g)try{
f.push(d(a[g]))}catch(i){f.push("Unknown")}var j=c+"("+f.join(", ")+")",k=[];for(var l in b)if(b.hasOwnProperty(l)){
var m=b[l];k.push(""+c+"("+m.join(", ").replace(/(^|,\s)[^:]+:/g,"$1")+")")}var n;throw/(\$\w+)#(\w+)?/.test(c)&&(n="@docurl@"+encodeURIComponent(RegExp.$1)+".html#method_"+RegExp.$2),
new TypeError(e(j,k,n))};var _getElementById=function(a,b){docEle=a.documentElement;var c="jindo"+(new Date).getTime(),d=a.createElement("div");
return d.style.display="none","undefined"!=typeof MSApp?MSApp.execUnsafeLocalFunction(function(){d.innerHTML="<input type='hidden' name='"+c+"'/>";
}):d.innerHTML="<input type='hidden' name='"+c+"'/>",docEle.insertBefore(d,docEle.firstChild),_getElementById=a.getElementById(c)?function(a,b){
var c=a.getElementById(b);if(null==c)return c;if(c.attributes.id&&c.attributes.id.value==b)return c;for(var d=a.all[b],e=1;e<d.length;e++)if(d[e].attributes.id&&d[e].attributes.id.value==b)return d[e];
}:function(a,b){return a.getElementById(b)},docEle.removeChild(d),_getElementById(a,b)};jindo.$Jindo.varType=function(){
var a=this.checkVarType(arguments,{s4str:["sTypeName:String+","fpFunc:Function+"],s4obj:["oTypeLists:Hash+"],
g:["sTypeName:String+"]}),b=jindo.$Jindo._denyTypeListComma;switch(a+""){case"s4str":var c=","+a.sTypeName.replace(/\+$/,"")+",";
if(b.indexOf(c)>-1)throw new Error("Not allowed Variable Type");return this._varTypeList[a.sTypeName]=a.fpFunc,
this;case"s4obj":var d=a.oTypeLists;for(var e in d)d.hasOwnProperty(e)&&(fpFunc=d[e],arguments.callee.call(this,e,fpFunc));
return this;case"g":return this._varTypeList[a.sTypeName]}},jindo.$Jindo.VARTYPE_NOT_MATCHED={},function(){
var a=jindo.$Jindo._varTypeList={},b=jindo.$Jindo,c=b.VARTYPE_NOT_MATCHED;a.Numeric=function(a){return b.isNumeric(a)?1*a:c;
},a.Hash=function(a,d){return d&&jindo.$H&&a instanceof jindo.$H?a.$value():b.isHash(a)?a:c},a.$Class=function(a){
return b.isFunction(a)&&a.extend?a:c};var d=[];for(var e in b)b.hasOwnProperty(e)&&/^is(.+)$/.test(e)&&d.push(RegExp.$1);
b._denyTypeListComma=d.join(","),b.varType("ArrayStyle",function(a){return a&&(/(Arguments|NodeList|HTMLCollection|global|Window)/.test(jindo._p_._objToString.call(a))||/Object/.test(jindo._p_._objToString.call(a))&&b.isNumeric(a.length))?jindo._p_._toArray(a):c;
}),b.varType("Form",function(a,b){return a?(b&&a.$value&&(a=a.$value()),a.tagName&&"FORM"==a.tagName.toUpperCase()?a:c):c;
})}(),jindo._p_._createEle=function(a,b,c,d){var e="R"+(new Date).getTime()+parseInt(1e5*Math.random(),10),f=c.createElement("div");
switch(a){case"select":case"table":case"dl":case"ul":case"fieldset":case"audio":f.innerHTML="<"+a+' class="'+e+'">'+b+"</"+a+">";
break;case"thead":case"tbody":case"col":f.innerHTML="<table><"+a+' class="'+e+'">'+b+"</"+a+"></table>";
break;case"tr":f.innerHTML='<table><tbody><tr class="'+e+'">'+b+"</tr></tbody></table>";break;default:
f.innerHTML='<div class="'+e+'">'+b+"</div>"}var g;for(g=f.firstChild;g&&g.className!=e;g=g.firstChild);
return d?g:g.childNodes},jindo.$=function(){if(!arguments.length)throw new jindo.$Error(jindo.$Except.NOT_FOUND_ARGUMENT,"$");
var a=[],b=arguments,c=b.length,d=b[c-1],e=document,f=null,g=/^<([a-z]+|h[1-5])>$/i,h=/^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;
c>1&&"string"!=typeof d&&d.body&&(b=Array.prototype.slice.apply(b,[0,c-1]),e=d);for(var i=0;c>i;i++){
if(f=b[i]&&b[i].$value?b[i].$value():b[i],jindo.$Jindo.isString(f)||jindo.$Jindo.isNumeric(f))if(f+="",
f=f.replace(/^\s+|\s+$/g,""),f=f.replace(/<!--(.|\n)*?-->/g,""),f.indexOf("<")>-1){if(g.test(f))f=e.createElement(RegExp.$1);else if(h.test(f)){
for(var j={thead:"table",tbody:"table",tr:"tbody",td:"tr",dt:"dl",dd:"dl",li:"ul",legend:"fieldset",
option:"select",source:"audio"},k=RegExp.$1.toLowerCase(),l=jindo._p_._createEle(j[k],f,e),i=0,m=l.length;m>i;i++)a.push(l[i]);
f=null}}else f=_getElementById(e,f);f&&f.nodeType&&(a[a.length]=f)}return a.length>1?a:a[0]||null},jindo.$Class=function(oDef){
function typeClass(){for(var t=this,a=[],superFunc=function(m,superClass,func){if("constructor"!=m&&func.toString().indexOf("$super")>-1){
var funcArg=func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g,"$1").split(","),funcStr=func.toString().replace(/function[^{]*{/,"").replace(/(\w|\.?)(this\.\$super|this)/g,function(a,b,c){
return b?a:c+".$super"});funcStr=funcStr.substr(0,funcStr.length-1),func=superClass[m]=eval("false||function("+funcArg.join(",")+"){"+funcStr+"}");
}return function(){var a=this.$this[m],b=this.$this,c=(b[m]=func).apply(b,arguments);return b[m]=a,c;
}};void 0!==t._$superClass;){t.$super=new Object,t.$super.$this=this;for(var x in t._$superClass.prototype)t._$superClass.prototype.hasOwnProperty(x)&&(void 0===this[x]&&"$init"!=x&&(this[x]=t._$superClass.prototype[x]),
t.$super[x]="constructor"!=x&&"_$superClass"!=x&&"function"==typeof t._$superClass.prototype[x]?superFunc(x,t._$superClass,t._$superClass.prototype[x]):t._$superClass.prototype[x]);
"function"==typeof t.$super.$init&&(a[a.length]=t),t=t.$super}for(var i=a.length-1;i>-1;i--)a[i].$super.$init.apply(a[i].$super,arguments);
if(this.$autoBind)for(var i in this)/^\_/.test(i)&&(this[i]=jindo.$Fn(this[i],this).bind());"function"==typeof this.$init&&this.$init.apply(this,arguments);
}var oArgs=g_checkVarType(arguments,{"4obj":["oDef:Hash+"]},"$Class");if(void 0!==oDef.$static){var i=0,x;
for(x in oDef)oDef.hasOwnProperty(x)&&("$static"==x||i++);for(x in oDef.$static)oDef.$static.hasOwnProperty(x)&&(typeClass[x]=oDef.$static[x]);
if(!i)return oDef.$static;delete oDef.$static}return typeClass.prototype=oDef,typeClass.prototype.constructor=typeClass,
typeClass.prototype.kindOf=function(a){return jindo._p_._kindOf(this.constructor.prototype,a.prototype);
},typeClass.extend=jindo.$Class.extend,typeClass},jindo._p_._kindOf=function(a,b){return a!=b?a._$superClass?jindo._p_._kindOf(a._$superClass.prototype,b):!1:!0;
},jindo.$Class.extend=function(a){g_checkVarType(arguments,{"4obj":["oDef:$Class"]},"<static> $Class#extend");
this.prototype._$superClass=a;var b=a.prototype;for(var c in b)jindo.$Jindo.isHash(b[c])&&jindo.$Jindo._warn(jindo.$Except.CANNOT_SET_OBJ_PROPERTY);
for(var d in a)if(a.hasOwnProperty(d)){if("prototype"==d)continue;this[d]=a[d]}return this},jindo.$$=jindo.cssquery=function(){
function GEBID(a,b,c){if(9===a.nodeType||a.parentNode&&a.parentNode.tagName)return _getElementById(c,b);
for(var d=a.getElementsByTagName("*"),e=0,f=d.length;f>e;e++)if(d[e].id===b)return d[e]}function getElementsByClass(a,b,c){
var d=new Array;null==b&&(b=document),null==c&&(c="*");var e=b.getElementsByTagName(c),f=e.length,g=new RegExp("(^|\\s)"+a+"(\\s|$)");
for(i=0,j=0;f>i;i++)g.test(e[i].className)&&(d[j]=e[i],j++);return d}function _isNonStandardQueryButNotException(a){
return/\[\s*(?:checked|selected|disabled)/.test(a)}function _commaRevise(a,b){return a.replace(/\,/gi,b);
}function _startCombinator(a){return/^[~>+]/.test(a)}function _addQueryId(a,b){var c,d;return/^\w+$/.test(a.id)?c="#"+a.id:(d="C"+(new Date).getTime()+Math.floor(1e6*Math.random()),
a.setAttribute(b,d),c="["+b+"="+d+"]"),c}var sVersion="3.0",debugOption={repeat:1},UID=1,cost=0,validUID={},bSupportByClassName=document.getElementsByClassName?!0:!1,safeHTML=!1,getUID4HTML=function(a){
var b=safeHTML?a._cssquery_UID&&a._cssquery_UID[0]:a._cssquery_UID;return b&&validUID[b]==a?b:(b=UID++,
a._cssquery_UID=safeHTML?[b]:b,validUID[b]=a,b)},getUID4XML=function(a){var b=a.getAttribute("_cssquery_UID"),c=safeHTML?b&&b[0]:b;
return c||(c=UID++,a.setAttribute("_cssquery_UID",safeHTML?[c]:c)),c},getUID=getUID4HTML,uniqid=function(a){
return(a||"")+(new Date).getTime()+parseInt(1e8*Math.random(),10)},getChilds_dontShrink=function(a,b,c){
return bSupportByClassName&&c?a.getElementsByClassName?a.getElementsByClassName(c):a.querySelectorAll?a.querySelectorAll(c):getElementsByClass(c,a,b):"*"==b?a.all||a.getElementsByTagName(b):a.getElementsByTagName(b);
},clearKeys=function(){backupKeys._keys={}},oDocument_dontShrink=document,bXMLDocument=!1,backupKeys=function(a){
var b=backupKeys._keys;a=a.replace(/'(\\'|[^'])*'/g,function(a){var c=uniqid("QUOT");return b[c]=a,c;
}),a=a.replace(/"(\\"|[^"])*"/g,function(a){var c=uniqid("QUOT");return b[c]=a,c}),a=a.replace(/\[(.*?)\]/g,function(a,c){
if(0==c.indexOf("ATTR"))return a;var d="["+uniqid("ATTR")+"]";return b[d]=a,d});var c;do c=!1,a=a.replace(/\(((\\\)|[^)|^(])*)\)/g,function(a,d){
if(0==d.indexOf("BRCE"))return a;var e="_"+uniqid("BRCE");return b[e]=a,c=!0,e});while(c);return a},restoreKeys=function(a,b){
var c,d=backupKeys._keys,e=b?/(\[ATTR[0-9]+\])/g:/(QUOT[0-9]+|\[ATTR[0-9]+\])/g;do c=!1,a=a.replace(e,function(a){
return d[a]?(c=!0,d[a]):a});while(c);return a=a.replace(/_BRCE[0-9]+/g,function(a){return d[a]?d[a]:a;
})},restoreString=function(sKey){var oKeys=backupKeys._keys,sOrg=oKeys[sKey];return sOrg?eval(sOrg):sKey;
},wrapQuot=function(a){return'"'+a.replace(/"/g,'\\"')+'"'},getStyleKey=function(a){return/^@/.test(a)?a.substr(1):null;
},getCSS=function(a,b){return a.currentStyle?("float"==b&&(b="styleFloat"),a.currentStyle[b]||a.style[b]):window.getComputedStyle?oDocument_dontShrink.defaultView.getComputedStyle(a,null).getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase())||a.style[b]:("float"==b&&jindo._p_._JINDO_IS_IE&&(b="styleFloat"),
a.style[b])},oCamels={accesskey:"accessKey",cellspacing:"cellSpacing",cellpadding:"cellPadding","class":"className",
colspan:"colSpan","for":"htmlFor",maxlength:"maxLength",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",
valign:"vAlign"},getDefineCode=function(a){var b,c;if(bXMLDocument)b='oEl.getAttribute("'+a+'",2)';else if(c=getStyleKey(a))a="$$"+c,
b='getCSS(oEl, "'+c+'")';else switch(a){case"checked":b='oEl.checked + ""';break;case"disabled":b='oEl.disabled + ""';
break;case"enabled":b='!oEl.disabled + ""';break;case"readonly":b='oEl.readOnly + ""';break;case"selected":
b='oEl.selected + ""';break;default:b=oCamels[a]?"oEl."+oCamels[a]:'oEl.getAttribute("'+a+'",2)'}return"_"+a.replace(/\-/g,"_")+" = "+b;
},getReturnCode=function(a){var b=getStyleKey(a.key),c="_"+(b?"$$"+b:a.key);c=c.replace(/\-/g,"_");var d=a.val?wrapQuot(a.val):"";
switch(a.op){case"~=":return"("+c+' && (" " + '+c+' + " ").indexOf(" " + '+d+' + " ") > -1)';case"^=":
return"("+c+" && "+c+".indexOf("+d+") == 0)";case"$=":return"("+c+" && "+c+".substr("+c+".length - "+a.val.length+") == "+d+")";
case"*=":return"("+c+" && "+c+".indexOf("+d+") > -1)";case"!=":return"("+c+" != "+d+")";case"=":return"("+c+" == "+d+")";
}return"("+c+")"},getNodeIndex=function(a){var b=getUID(a),c=oNodeIndexes[b]||0;if(0==c){for(var d=(a.parentNode||a._IE5_parentNode).firstChild;d;d=d.nextSibling)1==d.nodeType&&(c++,
setNodeIndex(d,c));c=oNodeIndexes[b]}return c},oNodeIndexes={},setNodeIndex=function(a,b){var c=getUID(a);
oNodeIndexes[c]=b},unsetNodeIndexes=function(){setTimeout(function(){oNodeIndexes={}},0)},oPseudoes_dontShrink={
contains:function(a,b){return(a.innerText||a.textContent||"").indexOf(b)>-1},"last-child":function(a){
for(a=a.nextSibling;a;a=a.nextSibling)if(1==a.nodeType)return!1;return!0},"first-child":function(a){
for(a=a.previousSibling;a;a=a.previousSibling)if(1==a.nodeType)return!1;return!0},"only-child":function(a){
for(var b=0,c=(a.parentNode||a._IE5_parentNode).firstChild;c;c=c.nextSibling)if(1==c.nodeType&&b++,b>1)return!1;
return b?!0:!1},empty:function(a){return a.firstChild?!1:!0},"nth-child":function(a,b,c){var d=getNodeIndex(a);
return d%b==c},"nth-last-child":function(a,b,c){for(var d=(a.parentNode||a._IE5_parentNode).lastChild;d&&1!=d.nodeType;d=d.previousSibling);
var e=getNodeIndex(d),f=getNodeIndex(a),g=e-f+1;return g%b==c},checked:function(a){return!!a.checked;
},selected:function(a){return!!a.selected},enabled:function(a){return!a.disabled},disabled:function(a){
return!!a.disabled}},getExpression=function(a){var b,c,d={defines:"",returns:"true"},a=restoreKeys(a,!0),e=[],f=[],g=[],a=a.replace(/:([\w-]+)(\(([^)]*)\))?/g,function(a,b,c,e){
switch(b){case"not":var f=getExpression(e),h=f.defines,i=f.returnsID+f.returnsTAG+f.returns;g.push("!(function() { "+h+" return "+i+" })()");
break;case"nth-child":case"nth-last-child":e=restoreString(e),"even"==e?e="2n":"odd"==e&&(e="2n+1");var j,k,l=e.match(/([0-9]*)n([+-][0-9]+)*/);
l?(j=l[1]||1,k=l[2]||0):(j=1/0,k=parseInt(e,10)),g.push("oPseudoes_dontShrink["+wrapQuot(b)+"](oEl, "+j+", "+k+")");
break;case"first-of-type":case"last-of-type":b="first-of-type"==b?"nth-of-type":"nth-last-of-type",e=1;
case"nth-of-type":case"nth-last-of-type":e=restoreString(e),"even"==e?e="2n":"odd"==e&&(e="2n+1");var j,k;
/([0-9]*)n([+-][0-9]+)*/.test(e)?(j=parseInt(RegExp.$1,10)||1,k=parseInt(RegExp.$2,20)||0):(j=1/0,k=parseInt(e,10)),
d.nth=[j,k,b];break;default:e=e?restoreString(e):"",g.push("oPseudoes_dontShrink["+wrapQuot(b)+"](oEl, "+wrapQuot(e)+")");
}return""}),a=a.replace(/\[(@?[\w-]+)(([!^~$*]?=)([^\]]*))?\]/g,function(a,b,c,d,f){return b=restoreString(b),
f=restoreString(f),("checked"==b||"disabled"==b||"enabled"==b||"readonly"==b||"selected"==b)&&(f||(d="=",
f="true")),e.push({key:b,op:d,val:f}),""}),h=null,a=a.replace(/\.([\w-]+)/g,function(a,b){return e.push({
key:"class",op:"~=",val:b}),h||(h=b),""}),a=a.replace(/#([\w-]+)/g,function(a,c){return bXMLDocument?e.push({
key:"id",op:"=",val:c}):b=c,""});c="*"==a?"":a;for(var i,j={},k=0;i=e[k];k++){var l=i.key;j[l]||f.push(getDefineCode(l)),
g.unshift(getReturnCode(i)),j[l]=!0}return f.length&&(d.defines="var "+f.join(",")+";"),g.length&&(d.returns=g.join("&&")),
d.quotID=b?wrapQuot(b):"",d.quotTAG=c?wrapQuot(bXMLDocument?c:c.toUpperCase()):"",bSupportByClassName&&(d.quotCLASS=h?wrapQuot(h):""),
d.returnsID=b?"oEl.id == "+d.quotID+" && ":"",d.returnsTAG=c&&"*"!=c?"oEl.tagName == "+d.quotTAG+" && ":"",
d},splitToParts=function(a){var b=[],c=" ",d=a.replace(/(.*?)\s*(!?[+>~ ]|!)\s*/g,function(a,d,e){return d&&b.push({
rel:c,body:d}),c=e.replace(/\s+$/g,"")||" ",""});return d&&b.push({rel:c,body:d}),b},isNth_dontShrink=function(a,b,c,d,e){
for(var f=0,g=a;g;g=g[e])1!=g.nodeType||b&&b!=g.tagName||f++;return f%c==d},compileParts=function(aParts){
for(var aPartExprs=[],i=0,oPart;oPart=aParts[i];i++)aPartExprs.push(getExpression(oPart.body));for(var sFunc="",sPushCode="aRet.push(oEl); if (oOptions.single) { bStop = true; }",i=aParts.length-1,oPart;oPart=aParts[i];i--){
var oExpr=aPartExprs[i],sPush=(debugOption.callback?"cost++;":"")+oExpr.defines,sReturn="if (bStop) {"+(0==i?"return aRet;":"return;")+"}";
sPush+="true"==oExpr.returns?(sFunc?sFunc+"(oEl);":sPushCode)+sReturn:"if ("+oExpr.returns+") {"+(sFunc?sFunc+"(oEl);":sPushCode)+sReturn+"}";
var sCheckTag="oEl.nodeType != 1";oExpr.quotTAG&&(sCheckTag="oEl.tagName != "+oExpr.quotTAG);var sTmpFunc="(function(oBase"+(0==i?", oOptions) { var bStop = false; var aRet = [];":") {");
switch(oExpr.nth&&(sPush="if (isNth_dontShrink(oEl, "+(oExpr.quotTAG?oExpr.quotTAG:"false")+","+oExpr.nth[0]+","+oExpr.nth[1]+',"'+("nth-of-type"==oExpr.nth[2]?"previousSibling":"nextSibling")+'")) {'+sPush+"}"),
oPart.rel){case" ":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = (oCandi.parentNode || oCandi._IE5_parentNode)) {if (oCandi == oBase) break;}if (!oCandi || "+sCheckTag+") return aRet;"+sPush:"var aCandi = getChilds_dontShrink(oBase, "+(oExpr.quotTAG||'"*"')+", "+(oExpr.quotCLASS||"null")+");for (var i = 0, oEl; oEl = aCandi[i]; i++) {"+(oExpr.quotCLASS?"if ("+sCheckTag+") continue;":"")+sPush+"}";
break;case">":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);if ((oEl.parentNode || oEl._IE5_parentNode) != oBase || "+sCheckTag+") return aRet;"+sPush:"for (var oEl = oBase.firstChild; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }"+sPush+"}";
break;case"+":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oPrev;for (oPrev = oEl.previousSibling; oPrev; oPrev = oPrev.previousSibling) { if (oPrev.nodeType == 1) break; }if (!oPrev || oPrev != oBase || "+sCheckTag+") return aRet;"+sPush:"for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush;
break;case"~":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = oCandi.previousSibling) { if (oCandi == oBase) break; }if (!oCandi || "+sCheckTag+") return aRet;"+sPush:"for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}";
break;case"!":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);for (; oBase; oBase = (oBase.parentNode || oBase._IE5_parentNode)) { if (oBase == oEl) break; }if (!oBase || "+sCheckTag+") return aRet;"+sPush:"for (var oEl = (oBase.parentNode || oBase._IE5_parentNode); oEl; oEl = (oEl.parentNode || oEl._IE5_parentNode)) {if ("+sCheckTag+") { continue; }"+sPush+"}";
break;case"!>":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel = (oBase.parentNode || oBase._IE5_parentNode);if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush:"var oEl = (oBase.parentNode || oBase._IE5_parentNode);if (!oEl || "+sCheckTag+") { return aRet; }"+sPush;
break;case"!+":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType == 1) break; }if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush:"for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush;
break;case"!~":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType != 1) { continue; }if (oRel == oEl) { break; }}if (!oRel || ("+sCheckTag+")) return aRet;"+sPush:"for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}";
}sTmpFunc+=(0==i?"return aRet;":"")+"})",sFunc=sTmpFunc}return eval("var fpCompiled = "+sFunc+";"),fpCompiled;
},parseQuery=function(a){var b=a,c=arguments.callee,d=c._cache[b];if(!d){a=backupKeys(a);var e=splitToParts(a);
d=c._cache[b]=compileParts(e),d.depth=e.length}return d};parseQuery._cache={};var parseTestQuery=function(sQuery){
for(var fpSelf=arguments.callee,aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/),aResult=[],nLen=aSplitQuery.length,aFunc=[],i=0;nLen>i;i++)aFunc.push(function(sQuery){
var sCacheKey=sQuery,fpFunction=fpSelf._cache[sCacheKey];if(!fpFunction){sQuery=backupKeys(sQuery);var oExpr=getExpression(sQuery);
eval("fpFunction = function(oEl) { "+oExpr.defines+"return ("+oExpr.returnsID+oExpr.returnsTAG+oExpr.returns+"); };");
}return fpFunction}(restoreKeys(aSplitQuery[i])));return aFunc};parseTestQuery._cache={};var distinct=function(a){
for(var b,c=[],d={},e=0;b=a[e];e++){var f=getUID(b);d[f]||(c.push(b),d[f]=!0)}return c},markElement_dontShrink=function(a,b){
var c=getUID(a);return cssquery._marked[b][c]?!1:(cssquery._marked[b][c]=!0,!0)},getParentElement=function(a){
var b;if(a=a&&a.$value?a.$value():a,jindo.$Jindo.isString(a))try{a=document.getElementById(a)}catch(c){
a=document}a||(a=document||window.document);try{return b=a.nodeType,1!=b&&9!=b&&10!=b&&11!=b&&(a=a.ownerDocument||a.document),
a||a.ownerDocument||a.document}catch(c){return window.document}},oResultCache=null,bUseResultCache=!1,bExtremeMode=!1,old_cssquery=function(a,b,c){
g_checkVarType(arguments,{"4str":["sQuery:String+"],"4var":["sQuery:String+","oParent:Variant"],"4var2":["sQuery:String+","oParent:Variant","oOptions:Variant"]
},"cssquery");if(b=getParentElement(b),c=c&&c.$value?c.$value():c,"object"==typeof a){var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=arguments.callee(a[e],b,c));
return d}cost=0;for(var f,g=(new Date).getTime(),h=0,i=debugOption.repeat;i>h;h++)f=function(a,b,c){
if(c?c.oneTimeOffCache||(c.oneTimeOffCache=!1):c={oneTimeOffCache:!1},cssquery.safeHTML(c.oneTimeOffCache),
b||(b=document),oDocument_dontShrink=b.ownerDocument||b.document||b,/\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(jindo._p_._j_ag)&&parseFloat(RegExp.$1)<6){
try{oDocument_dontShrink.location}catch(d){oDocument_dontShrink=document}oDocument_dontShrink.firstChild=oDocument_dontShrink.getElementsByTagName("html")[0],
oDocument_dontShrink.firstChild._IE5_parentNode=oDocument_dontShrink}bXMLDocument="undefined"!=typeof XMLDocument?oDocument_dontShrink.constructor===XMLDocument:!oDocument_dontShrink.location,
getUID=bXMLDocument?getUID4XML:getUID4HTML,clearKeys();for(var e=backupKeys(a).split(/\s*,\s*/),f=[],g=e.length,h=0;g>h;h++)e[h]=restoreKeys(e[h]);
for(var h=0;g>h;h++){var i=e[h],j=null,k=i+(c.single?"_single":""),l=bUseResultCache?oResultCache[k]:null;
if(l)for(var m,n=0;m=l[n];n++)if(m.parent==b){j=m.result;break}if(!j){var o=parseQuery(i);cssquery._marked=[];
for(var n=0,p=o.depth;p>n;n++)cssquery._marked.push({});j=distinct(o(b,c)),bUseResultCache&&!c.oneTimeOffCache&&(oResultCache[k]instanceof Array||(oResultCache[k]=[]),
oResultCache[k].push({parent:b,result:j}))}f=f.concat(j)}return unsetNodeIndexes(),f}(a,b,c);return g=(new Date).getTime()-g,
debugOption.callback&&debugOption.callback(a,cost,g),f},cssquery;if(document.querySelectorAll){var _div=document.createElement("div");
cssquery=function(a,b,c){{var d,e,f,g,h,i,j;g_checkVarType(arguments,{"4str":["sQuery:String+"],"4var":["sQuery:String+","oParent:Variant"],
"4var2":["sQuery:String+","oParent:Variant","oOptions:Variant"]},"cssquery")}b=getParentElement(b),c=c&&c.$value?c.$value():c,
a=a.replace(/\[(.*?)\=(\d*)\]/g,function(a,b,c){return"["+b+"='"+c+"']"}),e=b.nodeType;try{if(_isNonStandardQueryButNotException(a))return old_cssquery(a,b,c);
if(j=(b.tagName||"").toUpperCase(),9!==e&&"HTML"!=j)11===e&&(b=b.cloneNode(!0),i=_div.cloneNode(!0),
i.appendChild(b),b=i,i=null),h=_addQueryId(b,"queryid"),f=!0,(_parent=b.parentNode)||"BODY"===j||jindo.$Element._contain((b.ownerDocument||b.document).body,b)?(g=b,
b=_parent):(i=_div.cloneNode(!0),g=b,i.appendChild(g),b=i),a=_commaRevise(h+" "+a,", "+h+" ");else if(b=b.ownerDocument||b.document||b,
_startCombinator(a))return[];d=c&&c.single?[b.querySelector(a)]:jindo._p_._toArray(b.querySelectorAll(a));
}catch(k){d=old_cssquery(a,b,c)}return f&&(g.removeAttribute("queryid"),i=null),d}}else cssquery=old_cssquery;
return cssquery.test=function(a,b){clearKeys();try{var c=g_checkVarType(arguments,{"4ele":["oEl:Element+","sQuery:String+"],
"4doc":["oEl:Document+","sQuery:String+"]},"<static> cssquery#test");eEl=c.oEl,b=c.sQuery}catch(d){return!1;
}for(var e=parseTestQuery(b),f=0,g=e.length;g>f;f++)if(e[f](a))return!0;return!1},cssquery.useCache=function(a){
return void 0!==a&&(bUseResultCache=a,cssquery.clearCache()),bUseResultCache},cssquery.clearCache=function(){
oResultCache={}},cssquery.getSingle=function(a,b,c){return c=c&&c.$value?c.$value():c,cssquery(a,b,{
single:!0,oneTimeOffCache:c?!!c.oneTimeOffCache:!1})[0]||null},cssquery.xpath=function(a,b){return a=a&&a.$value?a.$value():a,
a=a.replace(/\/(\w+)(\[([0-9]+)\])?/g,function(a,b,c,d){return d=d||"1",">"+b+":nth-of-type("+d+")"}),
old_cssquery(a,b)},cssquery.debug=function(){var a=g_checkVarType(arguments,{"4fun":["fpCallback:Function+"],
"4fun2":["fpCallback:Function+","nRepeat:Numeric"]},"<static> cssquery#debug");debugOption.callback=a.fpCallback,
debugOption.repeat=a.nRepeat||1},cssquery.safeHTML=function(a){return arguments.length>0&&(safeHTML=a&&jindo._p_._JINDO_IS_IE),
safeHTML||!jindo._p_._JINDO_IS_IE},cssquery.version=sVersion,cssquery.release=function(){jindo._p_._JINDO_IS_IE&&(delete validUID,
validUID={},bUseResultCache&&cssquery.clearCache())},cssquery._getCacheInfo=function(){return{uidCache:validUID,
eleCache:oResultCache}},cssquery._resetUID=function(){UID=0},cssquery.extreme=function(a){0==arguments.length&&(a=!0),
bExtremeMode=a},cssquery}(),jindo.$Agent=function(){var a=arguments.callee,b=a._cached;return b?b:this instanceof a?(b||(a._cached=this),
this._navigator=navigator,void(this._dm=document.documentMode)):new a},jindo.$Agent.prototype.navigator=function(){
function a(a,b){return(b||"").indexOf(a)>-1}var b={},c=-1,d=-1,e=this._navigator.userAgent,f=this._navigator.vendor||"",g=this._dm;
b.getName=function(){var a="";for(x in b)"boolean"==typeof b[x]&&b[x]&&b.hasOwnProperty(x)&&(a=x);return a;
},b.webkit=a("WebKit",e),b.opera=void 0!==window.opera||a("Opera",e),b.ie=!b.opera&&(a("MSIE",e)||a("Trident",e)),
b.chrome=b.webkit&&a("Chrome",e),b.safari=b.webkit&&!b.chrome&&a("Apple",f),b.firefox=a("Firefox",e),
b.mozilla=a("Gecko",e)&&!b.safari&&!b.chrome&&!b.firefox&&!b.ie,b.camino=a("Camino",f),b.netscape=a("Netscape",e),
b.omniweb=a("OmniWeb",e),b.icab=a("iCab",f),b.konqueror=a("KDE",f),b.mobile=(a("Mobile",e)||a("Android",e)||a("Nokia",e)||a("webOS",e)||a("Opera Mini",e)||a("BlackBerry",e)||a("Windows",e)&&a("PPC",e)||a("Smartphone",e)||a("IEMobile",e))&&!a("iPad",e),
b.msafari=!a("IEMobile",e)&&a("Mobile",e)||a("iPad",e)&&a("Safari",e),b.mopera=a("Opera Mini",e),b.mie=a("PPC",e)||a("Smartphone",e)||a("IEMobile",e),
b.edge=b.webkit&&a("Edge",e);try{if(b.ie)if(g>0)if(c=g,e.match(/(?:Trident)\/([0-9.]+)/)){var h=parseFloat(RegExp.$1,10);
h>3&&(d=h+4)}else d=c;else d=c=e.match(/(?:MSIE) ([0-9.]+)/)[1];else b.safari||b.msafari?(c=parseFloat(e.match(/Safari\/([0-9.]+)/)[1]),
c=100==c?1.1:e.match(/Version\/([0-9.]+)/)?RegExp.$1:[1,1.2,-1,1.3,2,3][Math.floor(c/100)]):b.edge?c=e.match(/Edge[ \/]([0-9.]+)/)[1]:b.mopera?c=e.match(/(?:Opera\sMini)\/([0-9.]+)/)[1]:b.firefox||b.opera||b.omniweb?c=e.match(/(?:Firefox|Opera|OmniWeb)\/([0-9.]+)/)[1]:b.mozilla?c=e.match(/rv:([0-9.]+)/)[1]:b.icab?c=e.match(/iCab[ \/]([0-9.]+)/)[1]:b.chrome&&(c=e.match(/Chrome[ \/]([0-9.]+)/)[1]);
b.version=parseFloat(c),b.nativeVersion=parseFloat(d),isNaN(b.version)&&(b.version=-1)}catch(i){b.version=-1;
}return this.navigator=function(){return b},b},jindo.$Agent.prototype.os=function(){var a={};return u=this._navigator.userAgent,
p=this._navigator.platform,f=function(a,b){return b.indexOf(a)>-1},aMatchResult=null,a.getName=function(){
var b="";for(x in a)a[x]===!0&&a.hasOwnProperty(x)&&(b=x);return b},a.win=f("Win",p),a.mac=f("Mac",p),
a.linux=f("Linux",p),a.win2000=a.win&&(f("NT 5.0",u)||f("Windows 2000",u)),a.winxp=a.win&&f("NT 5.1",u),
a.xpsp2=a.winxp&&f("SV1",u),a.vista=a.win&&f("NT 6.0",u),a.win7=a.win&&f("NT 6.1",u),a.win8=a.win&&f("NT 6.2",u),
a.ipad=f("iPad",u),a.iphone=f("iPhone",u)&&!a.ipad,a.android=f("Android",u),a.nokia=f("Nokia",u),a.webos=f("webOS",u),
a.blackberry=f("BlackBerry",u),a.mwin=f("PPC",u)||f("Smartphone",u)||f("IEMobile",u)||f("Windows Phone",u),
a.ios=a.ipad||a.iphone,a.symbianos=f("SymbianOS",u),a.version=null,a.win?(aMatchResult=u.match(/Windows NT ([\d|\.]+)/),
null!=aMatchResult&&void 0!=aMatchResult[1]&&(a.version=aMatchResult[1])):a.mac?(aMatchResult=u.match(/Mac OS X ([\d|_]+)/),
null!=aMatchResult&&void 0!=aMatchResult[1]&&(a.version=String(aMatchResult[1]).split("_").join("."))):a.linux||(a.android?(aMatchResult=u.match(/Android ([\d|\.]+)/),
null!=aMatchResult&&void 0!=aMatchResult[1]&&(a.version=aMatchResult[1])):a.ios?(aMatchResult=u.match(/(iPhone )?OS ([\d|_]+)/),
null!=aMatchResult&&void 0!=aMatchResult[2]&&(a.version=String(aMatchResult[2]).split("_").join("."))):a.blackberry?(aMatchResult=u.match(/Version\/([\d|\.]+)/),
null==aMatchResult&&(aMatchResult=u.match(/BlackBerry\s?\d{4}\/([\d|\.]+)/)),null!=aMatchResult&&void 0!=aMatchResult[1]&&(a.version=aMatchResult[1])):a.symbianos?(aMatchResult=u.match(/SymbianOS\/(\d+.\w+)/),
null!=aMatchResult&&void 0!=aMatchResult[1]&&(a.version=aMatchResult[1])):a.webos?(aMatchResult=u.match(/webOS\/([\d|\.]+)/),
null!=aMatchResult&&void 0!=aMatchResult[1]&&(a.version=aMatchResult[1])):a.mwin&&(aMatchResult=u.match(/Windows CE ([\d|\.]+)/),
null!=aMatchResult&&void 0!=aMatchResult[1]&&(a.version=aMatchResult[1]),!a.version&&(aMatchResult=u.match(/Windows Phone (OS )?([\d|\.]+)/))&&(a.version=aMatchResult[2]))),
this.os=function(){return a},a},jindo.$Agent.prototype.flash=function(){var a={},b=this._navigator.plugins,c=this._navigator.mimeTypes,d=null;
if(a.installed=!1,a.version=-1,!jindo.$Jindo.isUndefined(b)&&b.length)d=b["Shockwave Flash"],d&&(a.installed=!0,
d.description&&(a.version=parseFloat(d.description.match(/[0-9.]+/)[0]))),b["Shockwave Flash 2.0"]&&(a.installed=!0,
a.version=2);else if(!jindo.$Jindo.isUndefined(c)&&c.length)d=c["application/x-shockwave-flash"],a.installed=d&&d.enabledPlugin;else try{
a.version=parseFloat(new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/(.\d?),/)[1]),
a.installed=!0}catch(e){}return this.flash=function(){return a},this.info=this.flash,a},jindo.$Agent.prototype.silverlight=function(){
var a=new Object,b=this._navigator.plugins,c=null;if(a.installed=!1,a.version=-1,!jindo.$Jindo.isUndefined(b)&&b.length)c=b["Silverlight Plug-In"],
c&&(a.installed=!0,a.version=parseInt(c.description.split(".")[0],10),"1.0.30226.2"==c.description&&(a.version=2));else try{
c=new ActiveXObject("AgControl.AgControl"),a.installed=!0,c.isVersionSupported("3.0")?a.version=3:c.isVersionSupported("2.0")?a.version=2:c.isVersionSupported("1.0")&&(a.version=1);
}catch(d){}return this.silverlight=function(){return a},a},jindo.$A=function(a){var b=arguments.callee;
if(a instanceof b)return a;if(!(this instanceof b))try{return jindo.$Jindo._maxWarn(arguments.length,1,"$A"),
new b(a)}catch(c){if(c instanceof TypeError)return null;throw c}var d=g_checkVarType(arguments,{"4voi":[],
"4arr":["aPram:Array+"],"4nul":["oNull:Null"],"4und":["oUndefined:Undefined"],arrt:["aPram:ArrayStyle"]
},"$A");switch(null==d&&(a=[]),d+""){case"arrt":case"4arr":a=d.aPram;break;case"4nul":case"4und":case"4voi":
a=[]}this._array=[];for(var e=0;e<a.length;e++)this._array[this._array.length]=a[e]},jindo.$A.checkVarTypeObj={
"4fun":["fCallback:Function+"],"4thi":["fCallback:Function+","oThis:Variant"]},jindo.$A.prototype.toString=function(){
return this._array.toString()},jindo.$A.prototype.get=function(a){return g_checkVarType(arguments,{"4num":["nIndex:Numeric"]
},"$A#get"),this._array[a]},jindo.$A.prototype.set=function(a,b){return g_checkVarType(arguments,{"4num":["nIndex:Numeric","vValue:Variant"]
},"$A#set"),this._array[a]=b,this},jindo.$A.prototype.length=function(a){var b=g_checkVarType(arguments,{
"4num":[jindo.$Jindo._F("nLen:Numeric")],sv:["nLen:Numeric","vValue:Variant"],"4voi":[]},"$A#length");
switch(b+""){case"4num":return this._array.length=b.nLen,this;case"sv":var c=this._array.length;this._array.length=b.nLen;
for(var d=c;a>d;d++)this._array[d]=b.vValue;return this;case"4voi":return this._array.length}},jindo.$A.prototype.has=function(a){
return this.indexOf(a)>-1},jindo.$A.prototype.indexOf=function(a){return jindo.$A.prototype.indexOf=this._array.indexOf?function(a){
return this._array.indexOf(a)}:function(a){for(var b=0;b<this._array.length;b++)if(this._array[b]==a)return b;
return-1},this.indexOf(a)},jindo.$A.prototype.$value=function(){return this._array},jindo.$A.prototype.push=function(){
return this._array.push.apply(this._array,jindo._p_._toArray(arguments))},jindo.$A.prototype.pop=function(){
return this._array.pop()},jindo.$A.prototype.shift=function(){return this._array.shift()},jindo.$A.prototype.unshift=function(){
return this._array.unshift.apply(this._array,jindo._p_._toArray(arguments)),this._array.length},jindo.$A.prototype.forEach=function(){
function a(a){return function(b,c){function d(){try{b.apply(c||e,jindo._p_._toArray(arguments))}catch(a){
if(!(a instanceof e.constructor.Continue))throw a}}var e=(g_checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#forEach"),
this);return a(this,d),this}}return jindo.$A.prototype.forEach=a(this._array.forEach?function(a,b){try{
a._array.forEach(b)}catch(c){if(!(c instanceof a.constructor.Break))throw c}}:function(a,b){for(var c=a._array,d=0,e=c.length;e>d;d++)try{
b(c[d],d,c)}catch(f){if(f instanceof a.constructor.Break)break;throw f}}),this.forEach.apply(this,jindo._p_._toArray(arguments));
},jindo.$A.prototype.slice=function(a,b){var c=this._array.slice.call(this._array,a,b);return jindo.$A(c);
},jindo.$A.prototype.splice=function(){var a=this._array.splice.apply(this._array,jindo._p_._toArray(arguments));
return jindo.$A(a)},jindo.$A.prototype.shuffle=function(){return this._array.sort(function(){return Math.random()>Math.random()?1:-1;
}),this},jindo.$A.prototype.reverse=function(){return this._array.reverse(),this},jindo.$A.prototype.empty=function(){
return this._array.length=0,this},jindo.$A.prototype.sort=function(a){var b=g_checkVarType(arguments,{
"void":[],"4fp":["fpSort:Function+"]},"$A#sort");return a?this._array.sort(jindo.$Fn(b.fpSort,this).bind()):this._array.sort(),
this},jindo.$A.Break=jindo.$Jindo.Break,jindo.$A.Continue=jindo.$Jindo.Continue,jindo.$A.prototype.map=function(){
function a(a){return function(b,c){function d(a){try{f.push(b.apply(c||g,jindo._p_._toArray(arguments)));
}catch(d){if(!(d instanceof g.constructor.Continue))throw d;f.push(a)}}var e=g_checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#map");
if(null==e)return this;var f=[],g=this;return a(this,d),jindo.$A(f)}}return jindo.$A.prototype.map=a(this._array.map?function(a,b){
a.forEach(b)}:function(a,b){for(var c=a._array,d=0,e=a._array.length;e>d;d++)try{b(c[d],d,c)}catch(f){
if(f instanceof a.constructor.Break)break;throw f}}),this.map.apply(this,jindo._p_._toArray(arguments));
},jindo.$A.prototype.filter=function(){function a(a){return function(b,c){function d(a){try{b.apply(c||g,jindo._p_._toArray(arguments))&&f.push(a);
}catch(d){if(!(d instanceof g.constructor.Continue))throw d}}var e=g_checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#filter");
if(null==e)return this;var f=[],g=this;return a(this,d),jindo.$A(f)}}return jindo.$A.prototype.filter=a(this._array.filter?function(a,b){
try{a.forEach(b)}catch(c){if(!(c instanceof a.constructor.Break))throw c}}:function(a,b){for(var c=a._array,d=0,e=a._array.length;e>d;d++)try{
b(c[d],d,c)}catch(f){if(f instanceof a.constructor.Break)break;throw f}}),this.filter.apply(this,jindo._p_._toArray(arguments));
},jindo.$A.prototype.every=function(){var a=g_checkVarType,b=jindo.$A.checkVarTypeObj;return jindo.$A.prototype.every=this._array.every?function(c,d){
return a(arguments,b,"$A#every"),this._array.every(c,d||this)}:function(c,d){a(arguments,b,"$A#every");
for(var e=!0,f=this._array,g=0,h=f.length;h>g;g++)if(c.call(d||this,f[g],g,f)===!1){e=!1;break}return e;
},this.every.apply(this,jindo._p_._toArray(arguments))},jindo.$A.prototype.some=function(){var a=g_checkVarType,b=jindo.$A.checkVarTypeObj;
return jindo.$A.prototype.some=this._array.some?function(c,d){return a(arguments,b,"$A#some"),this._array.some(c,d||this);
}:function(c,d){a(arguments,b,"$A#some");for(var e=!1,f=this._array,g=0,h=f.length;h>g;g++)if(c.call(d||this,f[g],g,f)===!0){
e=!0;break}return e},this.some.apply(this,jindo._p_._toArray(arguments))},jindo.$A.prototype.refuse=function(){
var a=jindo.$A(jindo._p_._toArray(arguments));return this.filter(function(b){return!(a.indexOf(b)>-1);
})},jindo.$A.prototype.unique=function(){var a,b,c=this._array,d=[],e=c.length;for(a=0;e>a;a++){for(b=0;b<d.length&&c[a]!=d[b];b++);
b>=d.length&&(d[b]=c[a])}return this._array=d,this},jindo.$H=function(a){var b=arguments.callee;if(a instanceof b)return a;
if(!(this instanceof b))try{return jindo.$Jindo._maxWarn(arguments.length,1,"$H"),new b(a||{})}catch(c){
if(c instanceof TypeError)return null;throw c}g_checkVarType(arguments,{"4obj":["oObj:Hash+"],"4vod":[]
},"$H");this._table={};for(var d in a)a.hasOwnProperty(d)&&(this._table[d]=a[d])},jindo.$H.prototype.$value=function(){
return this._table},jindo.$H.prototype.$=function(a,b){var c=g_checkVarType(arguments,{s4var:[jindo.$Jindo._F("key:String+"),"value:Variant"],
s4var2:["key:Numeric","value:Variant"],g4str:["key:String+"],s4obj:["oObj:Hash+"],g4num:["key:Numeric"]
},"$H#$");switch(c+""){case"s4var":case"s4var2":return this._table[a]=b,this;case"s4obj":var d=c.oObj;
for(var e in d)d.hasOwnProperty(e)&&(this._table[e]=d[e]);return this;default:return this._table[a]}
},jindo.$H.prototype.length=function(){var a=0,b=this.__jindo_sorted_index;if(b)return b.length;for(var c in this._table)if(this._table.hasOwnProperty(c)){
if(void 0!==Object.prototype[c]&&Object.prototype[c]===this._table[c])continue;a++}return a},jindo.$H.prototype.forEach=function(a,b){
var c=(g_checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]
},"$H#forEach"),this._table),d=this.constructor,e=this.__jindo_sorted_index;if(e)for(var f=0,g=e.length;g>f;f++)try{
var h=e[f];a.call(b||this,c[h],h,c)}catch(i){if(i instanceof d.Break)break;if(i instanceof d.Continue)continue;
throw i}else for(var h in c)if(c.hasOwnProperty(h)){if(!c.propertyIsEnumerable(h))continue;try{a.call(b||this,c[h],h,c);
}catch(i){if(i instanceof d.Break)break;if(i instanceof d.Continue)continue;throw i}}return this},jindo.$H.prototype.filter=function(a,b){
var c=(g_checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]
},"$H#filter"),jindo.$H()),d=this._table,e=this.constructor;for(var f in d)if(d.hasOwnProperty(f)){if(!d.propertyIsEnumerable(f))continue;
try{a.call(b||this,d[f],f,d)&&c.add(f,d[f])}catch(g){if(g instanceof e.Break)break;if(g instanceof e.Continue)continue;
throw g}}return c},jindo.$H.prototype.map=function(a,b){var c=(g_checkVarType(arguments,{"4fun":["callback:Function+"],
"4obj":["callback:Function+","thisObject:Variant"]},"$H#map"),jindo.$H()),d=this._table,e=this.constructor;
for(var f in d)if(d.hasOwnProperty(f)){if(!d.propertyIsEnumerable(f))continue;try{c.add(f,a.call(b||this,d[f],f,d));
}catch(g){if(g instanceof e.Break)break;if(!(g instanceof e.Continue))throw g;c.add(f,d[f])}}return c;
},jindo.$H.prototype.add=function(a,b){var c=(g_checkVarType(arguments,{"4str":["key:String+","value:Variant"],
"4num":["key:Numeric","value:Variant"]},"$H#add"),this.__jindo_sorted_index);return c&&void 0==this._table[a]&&this.__jindo_sorted_index.push(a),
this._table[a]=b,this},jindo.$H.prototype.remove=function(a){g_checkVarType(arguments,{"4str":["key:String+"],
"4num":["key:Numeric"]},"$H#remove");if(void 0===this._table[a])return null;var b=this._table[a];delete this._table[a];
var c=this.__jindo_sorted_index;if(c){for(var d=[],e=0,f=c.length;f>e;e++)c[e]!=a&&d.push(c[e]);this.__jindo_sorted_index=d;
}return b},jindo.$H.prototype.search=function(a){var b=(g_checkVarType(arguments,{"4str":["value:Variant"]
},"$H#search"),!1),c=this._table;for(var d in c)if(c.hasOwnProperty(d)){if(!c.propertyIsEnumerable(d))continue;
var e=c[d];if(e===a){b=d;break}}return b},jindo.$H.prototype.hasKey=function(a){g_checkVarType(arguments,{
"4str":["key:String+"],"4num":["key:Numeric"]},"$H#hasKey");return void 0!==this._table[a]},jindo.$H.prototype.hasValue=function(a){
g_checkVarType(arguments,{"4str":["value:Variant"]},"$H#hasValue");return this.search(a)!==!1},jindo._p_.defaultSort=function(a,b,c){
var d=[],e=a.fpSort;for(var f in b._table)b._table.hasOwnProperty(f)&&!function(a,b){d.push({key:a,val:b
})}(f,b._table[f]);a+""=="vo"&&(e=function(a,b){return a===b?0:a>b?1:-1}),d.sort(function(a,d){return e.call(b,a[c],d[c]);
});for(var g=[],h=0,i=d.length;i>h;h++)g.push(d[h].key);return g},jindo.$H.prototype.sort=function(){
var a=g_checkVarType(arguments,{vo:[],"4fp":["fpSort:Function+"]},"$H#sort");return this.__jindo_sorted_index=jindo._p_.defaultSort(a,this,"val"),
this},jindo.$H.prototype.ksort=function(){var a=g_checkVarType(arguments,{vo:[],"4fp":["fpSort:Function+"]
},"$H#ksort");return this.__jindo_sorted_index=jindo._p_.defaultSort(a,this,"key"),this},jindo.$H.prototype.keys=function(){
var a=this.__jindo_sorted_index;if(!a){a=[];for(var b in this._table)this._table.hasOwnProperty(b)&&a.push(b);
}return a},jindo.$H.prototype.values=function(){var a=[];for(var b in this._table)this._table.hasOwnProperty(b)&&(a[a.length]=this._table[b]);
return a},jindo.$H.prototype.toQueryString=function(){var a=[],b=null;for(var c in this._table)if(this._table.hasOwnProperty(c))if(b=this._table[c],
jindo.$Jindo.isArray(b))for(i=0;i<b.length;i++)a[a.length]=encodeURIComponent(c)+"[]="+encodeURIComponent(b[i]+"");else a[a.length]=encodeURIComponent(c)+"="+encodeURIComponent(this._table[c]+"");
return a.join("&")},jindo.$H.prototype.empty=function(){return this._table={},delete this.__jindo_sorted_index,
this},jindo.$H.Break=jindo.$Jindo.Break,jindo.$H.Continue=jindo.$Jindo.Continue,jindo.$Fn=function(func,thisObject){
var cl=arguments.callee;if(func instanceof cl)return func;if(!(this instanceof cl))try{return jindo.$Jindo._maxWarn(arguments.length,2,"$Fn"),
new cl(func,thisObject)}catch(e){if(e instanceof TypeError)return null;throw e}var oArgs=g_checkVarType(arguments,{
"4fun":["func:Function+"],"4fun2":["func:Function+","thisObject:Variant"],"4str":["func:String+","thisObject:String+"]
},"$Fn");switch(this._tmpElm=null,this._key=null,oArgs+""){case"4str":this._func=eval("false||function("+func+"){"+thisObject+"}");
break;case"4fun":case"4fun2":this._func=func,this._this=thisObject}},jindo.$Fn._commonPram=function(a,b){
return g_checkVarType(a,{"4ele":["eElement:Element+","sEvent:String+"],"4ele2":["eElement:Element+","sEvent:String+","bUseCapture:Boolean"],
"4str":["eElement:String+","sEvent:String+"],"4str2":["eElement:String+","sEvent:String+","bUseCapture:Boolean"],
"4arr":["aElement:Array+","sEvent:String+"],"4arr2":["aElement:Array+","sEvent:String+","bUseCapture:Boolean"],
"4doc":["eElement:Document+","sEvent:String+"],"4win":["eElement:Window+","sEvent:String+"],"4doc2":["eElement:Document+","sEvent:String+","bUseCapture:Boolean"],
"4win2":["eElement:Window+","sEvent:String+","bUseCapture:Boolean"]},b)},jindo.$Fn.prototype.$value=function(){
return this._func},jindo.$Fn.prototype.bind=function(){var a,b=jindo._p_._toArray(arguments),c=this._func,d=this._this||this;
return c.bind?(b.unshift(d),a=Function.prototype.bind.apply(c,b)):a=function(){var a=jindo._p_._toArray(arguments);
return b.length&&(a=b.concat(a)),c.apply(d,a)},a},jindo.$Fn.prototype.attach=function(a,b,c){{var d,e=jindo.$Fn._commonPram(arguments,"$Fn#attach"),f=null,g=b,h=a;
jindo._p_._j_ag}switch(c!==!0&&(c=!1),this._bUseCapture=c,e+""){case"4arr":case"4arr2":for(var h=e.aElement,g=e.sEvent,i=0,d=h.length;d>i;i++)this.attach(h[i],g,!!c);
return this}return f=this._bind=this._bind?this._bind:this.bind(),jindo.$Element(h).attach(g,f),this;
},jindo.$Fn.prototype.detach=function(a,b,c){{var d,e=jindo.$Fn._commonPram(arguments,"$Fn#detach"),f=null,g=a,h=b;
jindo._p_._j_ag}switch(e+""){case"4arr":case"4arr2":for(var g=e.aElement,h=e.sEvent,i=0,d=g.length;d>i;i++)this.detach(g[i],h,!!c);
return this}return f=this._bind=this._bind?this._bind:this.bind(),jindo.$Element(e.eElement).detach(e.sEvent,f),
this},jindo.$Fn.prototype.delay=function(a,b){var c=g_checkVarType(arguments,{"4num":["nSec:Numeric"],
"4arr":["nSec:Numeric","args:Array+"]},"$Fn#delay");switch(c+""){case"4num":b=b||[];break;case"4arr":
b=c.args}return this._delayKey=setTimeout(this.bind.apply(this,b),1e3*a),this},jindo.$Fn.prototype.setInterval=function(a,b){
var c=g_checkVarType(arguments,{"4num":["nSec:Numeric"],"4arr":["nSec:Numeric","args:Array+"]},"$Fn#setInterval");
switch(c+""){case"4num":b=b||[];break;case"4arr":b=c.args}return this._repeatKey=setInterval(this.bind.apply(this,b),1e3*a),
this},jindo.$Fn.prototype.repeat=jindo.$Fn.prototype.setInterval,jindo.$Fn.prototype.stopDelay=function(){
return void 0!==this._delayKey&&(window.clearTimeout(this._delayKey),delete this._delayKey),this},jindo.$Fn.prototype.stopRepeat=function(){
return void 0!==this._repeatKey&&(window.clearInterval(this._repeatKey),delete this._repeatKey),this;
},jindo.$Event=function(a){return a?function(a){var b=arguments.callee;return a instanceof b?a:this instanceof b?(this._event=this._posEvent=a,
this._globalEvent=window.event,this.type=a.type.toLowerCase(),"dommousescroll"==this.type?this.type="mousewheel":"domcontentloaded"==this.type&&(this.type="domready"),
this.isTouch=!1,this.type.indexOf("touch")>-1&&(this._posEvent=a.changedTouches[0],this.isTouch=!0),
this.canceled=!1,this.element=a.target||a.srcElement,this.currentElement=a.currentTarget,this.relatedElement=null,
void(jindo.$Jindo.isUndefined(a.relatedTarget)?a.fromElement&&a.toElement&&(this.relatedElement=a["mouseout"==this.type?"toElement":"fromElement"]):this.relatedElement=a.relatedTarget)):new b(a);
}:function(a){var b=arguments.callee;return a instanceof b?a:this instanceof b?(void 0===a&&(a=window.event),
a===window.event&&document.createEventObject&&(a=document.createEventObject(a)),this.isTouch=!1,this._event=this._posEvent=a,
this._globalEvent=window.event,this.type=a.type.toLowerCase(),"dommousescroll"==this.type?this.type="mousewheel":"domcontentloaded"==this.type&&(this.type="domready"),
this.canceled=!1,this.element=a.target||a.srcElement,this.currentElement=a.currentTarget,this.relatedElement=null,
void(void 0!==a.relatedTarget?this.relatedElement=a.relatedTarget:a.fromElement&&a.toElement&&(this.relatedElement=a["mouseout"==this.type?"toElement":"fromElement"]))):new b(a);
}}(jindo._p_._JINDO_IS_MO),jindo._p_.customEvent={},jindo._p_.customEventStore={},jindo._p_.normalCustomEvent={},
jindo._p_.hasCustomEvent=function(a){return!(!jindo._p_.getCustomEvent(a)&&!jindo._p_.normalCustomEvent[a]);
},jindo._p_.getCustomEvent=function(a){return jindo._p_.customEvent[a]},jindo._p_.addCustomEventListener=function(a,b,c,d,e){
jindo._p_.customEventStore[b]||(jindo._p_.customEventStore[b]={},jindo._p_.customEventStore[b].ele=a),
jindo._p_.customEventStore[b][c]||(jindo._p_.customEventStore[b][c]={}),jindo._p_.customEventStore[b][c][d]||(jindo._p_.customEventStore[b][c][d]={
custom:e})},jindo._p_.setCustomEventListener=function(a,b,c,d,e){jindo._p_.customEventStore[a][b][c].real_listener=d,
jindo._p_.customEventStore[a][b][c].wrap_listener=e},jindo._p_.getCustomEventListener=function(a,b,c){
var d=jindo._p_.customEventStore[a];return d&&d[b]&&d[b][c]?d[b][c]:{}},jindo._p_.getNormalEventListener=function(a,b,c){
var d=jindo._p_.normalCustomEvent[b];return d&&d[a]&&d[a][c]?d[a][c]:{}},jindo._p_.hasCustomEventListener=function(a,b,c){
var d=jindo._p_.customEventStore[a];return d&&d[b]&&d[b][c]?!0:!1},jindo.$Event.customEvent=function(a,b){
var c=g_checkVarType(arguments,{s4str:["sName:String+"],s4obj:["sName:String+","oEvent:Hash+"]},"$Event.customEvent");
switch(c+""){case"s4str":if(jindo._p_.hasCustomEvent(a))throw new jindo.$Error("The Custom Event Name have to unique.");
return jindo._p_.normalCustomEvent[a]={},this;case"s4obj":if(jindo._p_.hasCustomEvent(a))throw new jindo.$Error("The Custom Event Name have to unique.");
jindo._p_.normalCustomEvent[a]={},jindo._p_.customEvent[a]=function(){this.name=a,this.real_listener=[],
this.wrap_listener=[]};var d=jindo._p_.customEvent[a].prototype;d.events=[];for(var e in b)d[e]=b[e],
d.events.push(e);return jindo._p_.customEvent[a].prototype.fireEvent=function(a){for(var b=0,c=this.wrap_listener.length;c>b;b++)this.wrap_listener[b](a);
},this}},jindo.$Event.prototype.mouse=function(a){g_checkVarType(arguments,{voi:[],bol:["bIsScrollbar:Boolean"]
});var b=this._event,c=this.element,d=0,e=!1,f=!1,g=!1,e=b.which?0==b.button:!!(1&b.button),f=b.which?1==b.button:!!(4&b.button),g=b.which?2==b.button:!!(2&b.button),h={};
b.wheelDelta?d=b.wheelDelta/120:b.detail&&(d=-b.detail/3);var i;return a&&(i=_event_isScroll(c,b)),h={
delta:d,left:e,middle:f,right:g,scrollbar:i},this.mouse=function(a){return a&&(h.scrollbar=_event_isScroll(this.element,this._event),
this.mouse=function(){return h}),h},h},jindo.$Event.prototype.key=function(){var a=this._event,b=a.keyCode||a.charCode,c={
keyCode:b,alt:a.altKey,ctrl:a.ctrlKey,meta:a.metaKey,shift:a.shiftKey,up:38==b,down:40==b,left:37==b,
right:39==b,enter:13==b,esc:27==b};return this.key=function(){return c},c},jindo.$Event.prototype.pos=function(a){
g_checkVarType(arguments,{voi:[],bol:["bGetOffset:Boolean"]});var b=this._posEvent,c=this.element.ownerDocument||document,d=c.body,e=c.documentElement,f=[d.scrollLeft||e.scrollLeft,d.scrollTop||e.scrollTop],g={
clientX:b.clientX,clientY:b.clientY,pageX:"pageX"in b?b.pageX:b.clientX+f[0]-d.clientLeft,pageY:"pageY"in b?b.pageY:b.clientY+f[1]-d.clientTop,
layerX:"offsetX"in b?b.offsetX:b.layerX-1,layerY:"offsetY"in b?b.offsetY:b.layerY-1};if(a&&jindo.$Element){
var h=jindo.$Element(this.element).offset();g.offsetX=g.pageX-h.left,g.offsetY=g.pageY-h.top}return g;
},jindo.$Event.prototype.stop=function(a){g_checkVarType(arguments,{voi:[],num:["nCancel:Numeric"]}),
a=a||jindo.$Event.CANCEL_ALL;var b=window.event&&window.event==this._globalEvent?this._globalEvent:this._event,c=!!(a&jindo.$Event.CANCEL_BUBBLE),d=!!(a&jindo.$Event.CANCEL_DEFAULT),e=this.realType;
return!c||"focusin"!==e&&"focusout"!==e||jindo.$Jindo._warn("The "+e+" event can't stop bubble."),this.canceled=!0,
void 0!==b.preventDefault&&d&&b.preventDefault(),void 0!==b.stopPropagation&&c&&b.stopPropagation(),
d&&(b.returnValue=!1),c&&(b.cancelBubble=!0),this},jindo.$Event.prototype.stopDefault=function(){return this.stop(jindo.$Event.CANCEL_DEFAULT);
},jindo.$Event.prototype.stopBubble=function(){return this.stop(jindo.$Event.CANCEL_BUBBLE)},jindo.$Event.CANCEL_BUBBLE=1,
jindo.$Event.CANCEL_DEFAULT=2,jindo.$Event.CANCEL_ALL=3,jindo.$Event.prototype.$value=function(){return this._event;
},function(a){for(var b="Touch",c=0,d=a.length;d>c;c++)jindo.$Event.prototype[a[c]+b]=function(a){return function(){
if(this.isTouch){for(var b,c=[],d=this._event[a+"es"],e=d.length,f=0;e>f;f++)b=d[f],c.push({id:b.identifier,
event:this,element:b.target,_posEvent:b,pos:jindo.$Event.prototype.pos});this[a]=function(b){var d=g_checkVarType(arguments,{
"void":[],"4num":["nIndex:Numeric"]},"$Event#"+a);return d+""=="void"?c:c[b]}}else this[a]=function(){
throw new jindo.$Error(jindo.$Except.NOT_SUPPORT_METHOD,"$Event#"+a)};return this[a].apply(this,jindo._p_._toArray(arguments));
}}(a[0]+b)}(["changed","target"]),jindo.$Element=function(a){var b=arguments.callee;if(a&&a instanceof b)return a;
if(!(this instanceof b))try{return jindo.$Jindo._maxWarn(arguments.length,1,"$Element"),new b(a)}catch(c){
if(c instanceof TypeError)return null;throw c}var d=jindo.$Jindo,e=d.checkVarType(arguments,{"4str":["sID:String+"],
"4nod":["oEle:Node"],"4doc":["oEle:Document+"],"4win":["oEle:Window+"]},"$Element");switch(e+""){case"4str":
a=jindo.$(a);break;default:a=e.oEle}if(this._element=a,null==this._element)throw new TypeError("{not_found_element}");
if(this._element.__jindo__id)this._key=this._element.__jindo__id;else try{this._element.__jindo__id=this._key=jindo._p_._makeRandom();
}catch(c){}this.tag=(this._element.tagName||"").toLowerCase()},jindo._p_.NONE_GROUP="_jindo_event_none",
jindo._p_.splitEventSelector=function(a){var b=a.match(/^([a-z_]*)(.*)/i),c=jindo._p_.trim(b[1]),d=jindo._p_.trim(b[2].replace("@",""));
return{type:d?"delegate":"normal",event:c,selector:d}},jindo._p_._makeRandom=function(){return"e"+(new Date).getTime()+parseInt(1e8*Math.random(),10);
},jindo._p_.releaseEventHandlerForAllChildren=function(a){var b,c=a._element.all||a._element.getElementsByTagName("*"),d=c.length,e=null;
for(b=0;d>b;b++)e=c[b],1==e.nodeType&&e.__jindo__id&&jindo.$Element.eventManager.cleanUpUsingKey(e.__jindo__id,!0);
c=e=null},jindo._p_.canUseClassList=function(){var a="classList"in document.body&&"classList"in document.createElementNS("http://www.w3.org/2000/svg","g");
return jindo._p_.canUseClassList=function(){return a},jindo._p_.canUseClassList()},jindo._p_.vendorPrefixObj={
"-moz":"Moz","-ms":"ms","-o":"O","-webkit":"webkit"},jindo._p_.cssNameToJavaScriptName=function(a){if(/^(\-(?:moz|ms|o|webkit))/.test(a)){
var b=RegExp.$1;a=a.replace(b,jindo._p_.vendorPrefixObj[b])}return a.replace(/(:?-(\w))/g,function(a,a,b){
return b.toUpperCase()})},jindo._p_.getStyleIncludeVendorPrefix=function(a){for(var b=["Transition","Transform","Animation","Perspective"],c=["webkit","-","Moz","O","ms"],d="",e="",f="",g={},h=a||document.body.style,i=0,j=b.length;j>i;i++){
d=b[i];for(var k=0,l=c.length;l>k;k++){if(e=c[k],f="-"!=e?e+d:d.toLowerCase(),"undefined"!=typeof h[f]){
g[d.toLowerCase()]=f;break}g[d.toLowerCase()]=!1}}return a?g:(jindo._p_.getStyleIncludeVendorPrefix=function(){
return g},jindo._p_.getStyleIncludeVendorPrefix())},jindo._p_.getTransformStringForValue=function(a){
var b=jindo._p_.getStyleIncludeVendorPrefix(a),c=b.transform;return"MozTransform"===b.transform?c="-moz-transform":"webkitTransform"===b.transform?c="-webkit-transform":"OTransform"===b.transform?c="-o-transform":"msTransform"===b.transform&&(c="-ms-transform"),
a?c:(jindo._p_.getTransformStringForValue=function(){return c},jindo._p_.getTransformStringForValue());
},jindo._p_.setOpacity=function(a,b){a.offsetHeight,a.style.opacity=b},jindo.$Element._eventBind=function(a,b,c,d){
jindo.$Element._eventBind=a.addEventListener?9==document.documentMode?function(a,b,c,d){/resize/.test(b)?a.attachEvent("on"+b,c):a.addEventListener(b,c,!!d);
}:function(a,b,c,d){a.addEventListener(b,c,!!d)}:function(a,b,c){a.attachEvent("on"+b,c)},jindo.$Element._eventBind(a,b,c,d);
},jindo.$Element._unEventBind=function(a,b,c){jindo.$Element._unEventBind=a.removeEventListener?9==document.documentMode?function(a,b,c){
/resize/.test(b)?a.detachEvent("on"+b,c):a.removeEventListener(b,c,!1)}:function(a,b,c){a.removeEventListener(b,c,!1);
}:function(a,b,c){a.detachEvent("on"+b,c)},jindo.$Element._unEventBind(a,b,c)},jindo.$Element.prototype.$value=function(){
return this._element},jindo.$Element.prototype.visible=function(a,b){var c=g_checkVarType(arguments,{
g:[],s4bln:[jindo.$Jindo._F("bVisible:Boolean")],s4str:["bVisible:Boolean","sDisplay:String+"]},"$Element#visible");
switch(c+""){case"g":return"none"!=this._getCss(this._element,"display");case"s4bln":return this[a?"show":"hide"](),
this;case"s4str":return this[a?"show":"hide"](b),this}},jindo.$Element.prototype.show=function(a){var b=g_checkVarType(arguments,{
"4voi":[],"4str":["sDisplay:String+"]},"$Element#show"),c=this._element.style,d="block",e={p:d,div:d,
form:d,h1:d,h2:d,h3:d,h4:d,ol:d,ul:d,fieldset:d,td:"table-cell",th:"table-cell",li:"list-item",table:"table",
thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",col:"table-column",
colgroup:"table-column-group",caption:"table-caption",dl:d,dt:d,dd:d};try{switch(b+""){case"4voi":var f=e[this.tag];
c.display=f||"inline";break;case"4str":c.display=a}}catch(g){c.display="block"}return this},jindo.$Element.prototype.hide=function(){
return this._element.style.display="none",this},jindo.$Element.prototype.toggle=function(){g_checkVarType(arguments,{
"4voi":[],"4str":["sDisplay:String+"]},"$Element#toggle");return this["none"==this._getCss(this._element,"display")?"show":"hide"].apply(this,arguments),
this},jindo.$Element.prototype.opacity=function(a){var b,c,d=g_checkVarType(arguments,{g:[],s:["nOpacity:Numeric"]
},"$Element#opacity"),e=this._element;switch(d+""){case"g":return c="none"!=this._getCss(e,"display"),
"undefined"!=typeof e.style.opacity?(b=parseFloat(e.style.opacity),isNaN(b)&&(b=c?1:0)):(b="undefined"==typeof e.filters.alpha?c?100:0:e.filters.alpha.opacity,
b/=100),b;case"s":return c="none"!=this._getCss(e,"display"),a=d.nOpacity,e.style.zoom=1,a=Math.max(Math.min(a,1),0),
"undefined"!=typeof e.style.opacity?e.style.opacity=a:(a=Math.ceil(100*a),"unknown"!=typeof e.filters&&"undefined"!=typeof e.filters.alpha?e.filters.alpha.opacity=a:e.style.filter=e.style.filter+" alpha(opacity="+a+")"),
this}},jindo._p_._revisionCSSAttr=function(a,b){var c=jindo.$Element.hook(a);return a=c?c:jindo._p_.cssNameToJavaScriptName(a).replace(/^(animation|perspective|transform|transition)/i,function(a){
return b[a.toLowerCase()]})},jindo._p_.changeTransformValue=function(a,b){return(a+"").replace(/([\s|-]*)(?:transform)/,function(a,c){
return jindo._p_.trim(c).length>0?a:c+jindo._p_.getTransformStringForValue(b)})},jindo.$Element.prototype.css=function(a,b){
var c=g_checkVarType(arguments,{g:["sName:String+"],s4str:[jindo.$Jindo._F("sName:String+"),jindo.$Jindo._F("vValue:String+")],
s4num:["sName:String+","vValue:Numeric"],s4obj:["oObj:Hash+"]},"$Element#css"),d=this._element;switch(c+""){
case"s4str":case"s4num":var e={};a=jindo._p_._revisionCSSAttr(a,jindo._p_.getStyleIncludeVendorPrefix()),
e[a]=b,a=e;break;case"s4obj":a=c.oObj;var e={},f=jindo._p_.getStyleIncludeVendorPrefix();for(i in a)a.hasOwnProperty(i)&&(e[jindo._p_._revisionCSSAttr(i,f)]=a[i]);
a=e;break;case"g":var f=jindo._p_.getStyleIncludeVendorPrefix();a=jindo._p_._revisionCSSAttr(a,f);var g=this._getCss;
if("opacity"==a)return this.opacity();if((jindo._p_._JINDO_IS_FF||jindo._p_._JINDO_IS_OP)&&("backgroundPositionX"==a||"backgroundPositionY"==a)){
var h=g(d,"backgroundPosition").split(/\s+/);return"backgroundPositionX"==a?h[0]:h[1]}if(!window.getComputedStyle&&"backgroundPosition"==a)return g(d,"backgroundPositionX")+" "+g(d,"backgroundPositionY");
if(!jindo._p_._JINDO_IS_OP&&window.getComputedStyle&&("padding"==a||"margin"==a)){var j=g(d,a+"Top"),k=g(d,a+"Right"),l=g(d,a+"Bottom"),m=g(d,a+"Left");
return j==k&&l==m?j:j==l&&k==m?j+" "+k:j+" "+k+" "+l+" "+m}return g(d,a)}var n;for(var o in a)if(a.hasOwnProperty(o)){
if(n=a[o],!jindo.$Jindo.isString(n)&&!jindo.$Jindo.isNumeric(n))continue;if("opacity"==o){this.opacity(n);
continue}if("cssFloat"==o&&jindo._p_._JINDO_IS_IE&&(o="styleFloat"),!jindo._p_._JINDO_IS_FF&&!jindo._p_._JINDO_IS_OP||"backgroundPositionX"!=o&&"backgroundPositionY"!=o)this._setCss(d,o,/transition/i.test(o)?jindo._p_.changeTransformValue(n):n);else{
var h=this.css("backgroundPosition").split(/\s+/);n="backgroundPositionX"==o?n+" "+h[1]:h[0]+" "+n,this._setCss(d,"backgroundPosition",n);
}}return this},jindo.$Element.prototype._getCss=function(a,b){var c;return c=window.getComputedStyle?function(a,b){
try{"cssFloat"==b&&(b="float");var c=a.ownerDocument||a.document||document,d=a.style[b];if(!a.style[b]){
var e=c.defaultView.getComputedStyle(a,null);b=b.replace(/([A-Z])/g,"-$1").replace(/^(webkit|ms)/g,"-$1").toLowerCase(),
d=e.getPropertyValue(b),d=void 0===d?e[b]:d}return"textDecoration"==b&&(d=d.replace(",","")),d}catch(f){
throw new jindo.$Error((a.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")}}:a.currentStyle?function(a,b){
try{"cssFloat"==b&&(b="styleFloat");var c=a.style[b];if(c)return c;var d=a.currentStyle;return d?d[b]:c;
}catch(e){throw new jindo.$Error((a.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")}}:function(a,b){
try{return"cssFloat"==b&&jindo._p_._JINDO_IS_IE&&(b="styleFloat"),a.style[b]}catch(c){throw new jindo.$Error((a.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css");
}},jindo.$Element.prototype._getCss=c,c(a,b)},jindo.$Element.prototype._setCss=function(a,b,c){a.style[b]="#top#left#right#bottom#".indexOf(b+"#")>0&&("number"==typeof c||/\d$/.test(c))?parseInt(c,10)+"px":c;
},jindo.$Element.prototype.attr=function(a,b){var c,d,e,f,g,h=g_checkVarType(arguments,{g:["sName:String+"],
s4str:["sName:String+","vValue:String+"],s4num:["sName:String+","vValue:Numeric"],s4nul:["sName:String+","vValue:Null"],
s4bln:["sName:String+","vValue:Boolean"],s4arr:["sName:String+","vValue:Array+"],s4obj:[jindo.$Jindo._F("oObj:Hash+")]
},"$Element#attr"),i=this._element,j=null;switch(h+""){case"s4str":case"s4nul":case"s4num":case"s4bln":
case"s4arr":var k={};k[a]=b,a=k;break;case"s4obj":a=h.oObj;break;case"g":if("class"==a||"className"==a)return i.className;
if("style"==a)return i.style.cssText;if("checked"==a||"disabled"==a)return!!i[a];if("value"==a){if("button"==this.tag)return i.getAttributeNode("value").value;
if("select"==this.tag){if(i.multiple){for(c=0,d=i.options.length;d>c;c++)f=i.options[c],f.selected&&(j||(j=[]),
b=f.value,""==b&&(b=f.text),j.push(b));return j}return i.selectedIndex<0?null:(b=i.options[i.selectedIndex].value,
""==b?i.options[i.selectedIndex].text:b)}return i.value}return"href"==a?i.getAttribute(a,2):i.getAttribute(a);
}e=function(a,b){var c,d,e,f=-1;for(c=0,d=a.length;d>c;c++)if(e=a[c],e.value===b||e.text===b){f=c;break;
}return f};for(var l in a)if(a.hasOwnProperty(l)){var m=a[l];if(jindo.$Jindo.isNull(m))if("select"==this.tag)if(i.multiple)for(c=0,
d=i.options.length;d>c;c++)i.options[c].selected=!1;else i.selectedIndex=-1;else i.removeAttribute(l);else if("class"==l||"className"==l)i.className=m;else if("style"==l)i.style.cssText=m;else if("checked"==l||"disabled"==l)i[l]=m;else if("value"==l)if("select"==this.tag)if(i.multiple)if(jindo.$Jindo.isArray(m))for(g=jindo.$A(m),
c=0,d=i.options.length;d>c;c++)f=i.options[c],f.selected=g.has(f.value)||g.has(f.text);else i.selectedIndex=e(i.options,m);else i.selectedIndex=e(i.options,m);else i.value=m;else i.setAttribute(l,m);
}return this},jindo.$Element.prototype.width=function(a){var b=g_checkVarType(arguments,{g:[],s:["nWidth:Numeric"]
},"$Element#width");switch(b+""){case"g":return this._element.offsetWidth;case"s":a=b.nWidth;var c=this._element;
c.style.width=a+"px";var d=c.offsetWidth;if(d!=a&&0!==d){var e=2*a-d;e>0&&(c.style.width=e+"px")}return this;
}},jindo.$Element.prototype.height=function(a){var b=g_checkVarType(arguments,{g:[],s:["nHeight:Numeric"]
},"$Element#height");switch(b+""){case"g":return this._element.offsetHeight;case"s":a=b.nHeight;var c=this._element;
c.style.height=a+"px";var d=c.offsetHeight;if(d!=a&&0!==d){var a=2*a-d;a>0&&(c.style.height=a+"px")}
return this}},jindo.$Element.prototype.className=function(a){var b=g_checkVarType(arguments,{g:[],s:[jindo.$Jindo._F("sClass:String+")]
},"$Element#className"),c=this._element;switch(b+""){case"g":return c.className;case"s":return c.className=a,
this}},jindo.$Element.prototype.hasClass=function(){var a=g_checkVarType;return jindo.$Element.prototype.hasClass=jindo._p_.canUseClassList()?function(b){
a(arguments,{"4str":["sClass:String+"]},"$Element#hasClass");return this._element.classList.contains(b);
}:function(b){a(arguments,{"4str":["sClass:String+"]},"$Element#hasClass");return(" "+this._element.className+" ").indexOf(" "+b+" ")>-1;
},this.hasClass.apply(this,arguments)},jindo.$Element.prototype.addClass=function(a){for(var b,c=(g_checkVarType(arguments,{
"4str":["sClass:String+"]},"$Element#addClass"),this._element),d=c.className,e=(a+"").split(" "),f=e.length-1;f>=0;f--)b=e[f],
-1==(" "+d+" ").indexOf(" "+b+" ")&&(d=d+" "+b);return c.className=d.replace(/\s+$/,"").replace(/^\s+/,""),
this},jindo.$Element.prototype.removeClass=function(){return jindo.$Element.prototype.removeClass=this._element.classList?function(a){
if(null==this._element)return this;for(var b=this._element.classList,c=(a+"").split(" "),d=c.length;d--;)""!=c[d]&&b.remove(c[d]);
return this}:function(a){for(var b,c=this._element,d=a.split(/\s+/),e=d.length-1;e>=0;e--)b=d[e],this.hasClass(b)&&(c.className=(" "+c.className.replace(/\s+$/,"").replace(/^\s+/,"")+" ").replace(" "+b+" "," ").replace(/\s+$/,"").replace(/^\s+/,""));
return this},this.removeClass.apply(this,arguments)},jindo.$Element.prototype.toggleClass=function(){
var a=g_checkVarType;return jindo.$Element.prototype.toggleClass=jindo._p_.canUseClassList()?function(b,c){
var d=a(arguments,{"4str":["sClass:String+"],"4str2":["sClass:String+","sClass2:String+"]},"$Element#toggleClass");
switch(d+""){case"4str":this._element.classList.toggle(b+"");break;case"4str2":b+="",c+="",this.hasClass(b)?(this.removeClass(b),
this.addClass(c)):(this.addClass(b),this.removeClass(c))}return this}:function(b,c){a(arguments,{"4str":["sClass:String+"],
"4str2":["sClass:String+","sClass2:String+"]},"$Element#toggleClass");return c=c||"",this.hasClass(b)?(this.removeClass(b),
c&&this.addClass(c)):(this.addClass(b),c&&this.removeClass(c)),this},this.toggleClass.apply(this,arguments);
},jindo.$Element.prototype.cssClass=function(a){var b=g_checkVarType(arguments,{g:["sClass:String+"],
s4bln:["sClass:String+","bCondition:Boolean"],s4obj:["oObj:Hash+"]},"$Element#cssClass");switch(b+""){
case"g":return this.hasClass(b.sClass);case"s4bln":return b.bCondition?this.addClass(b.sClass):this.removeClass(b.sClass),
this;case"s4obj":var c=this._element;a=b.oObj;var d=c.className;for(var e in a)a.hasOwnProperty(e)&&(a[e]?-1==(" "+d+" ").indexOf(" "+e+" ")&&(d=(d+" "+e).replace(/^\s+/,"")):(" "+d+" ").indexOf(" "+e+" ")>-1&&(d=(" "+d+" ").replace(" "+e+" "," ").replace(/\s+$/,"").replace(/^\s+/,"")));
return c.className=d,this}},jindo.$Element.prototype.text=function(a){var b,c,d=g_checkVarType(arguments,{
g:[],s4str:["sText:String+"],s4num:[jindo.$Jindo._F("sText:Numeric")],s4bln:["sText:Boolean"]},"$Element#text"),e=this._element,f=this.tag;
switch(d+""){case"g":return b=void 0!==e.textContent?"textContent":"innerText",("textarea"==f||"input"==f)&&(b="value"),
e[b];case"s4str":case"s4num":case"s4bln":try{if("textarea"==f||"input"==f)e.value=a+"";else{var c=e.ownerDocument||e.document||document;
this.empty(),e.appendChild(c.createTextNode(a))}}catch(g){return e.innerHTML=(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;");
}return this}},jindo.$Element.prototype.html=function(){var a=jindo._p_._JINDO_IS_IE,b=jindo._p_._JINDO_IS_FF,c={
g:[],s4str:[jindo.$Jindo._F("sText:String+")],s4num:["sText:Numeric"],s4bln:["sText:Boolean"]},d=g_checkVarType;
return jindo.$Element.prototype.html=a?function(a){var b=d(arguments,c,"$Element#html");switch(b+""){
case"g":return this._element.innerHTML;case"s4str":case"s4num":case"s4bln":a+="",jindo.cssquery&&jindo.cssquery.release();
for(var e=this._element;e.firstChild;)e.removeChild(e.firstChild);var f,g="R"+(new Date).getTime()+parseInt(1e5*Math.random(),10),h=e.ownerDocument||e.document||document,i=e.tagName.toLowerCase();
switch(i){case"select":case"table":f=h.createElement("div"),f.innerHTML="<"+i+' class="'+g+'">'+a+"</"+i+">";
break;case"tr":case"thead":case"tbody":case"colgroup":f=h.createElement("div"),f.innerHTML="<table><"+i+' class="'+g+'">'+a+"</"+i+"></table>";
break;default:e.innerHTML=a}if(f){var j;for(j=f.firstChild;j&&j.className!=g;j=j.firstChild);if(j){for(var k,l=!0;k=e.firstChild;)k.removeNode(!0);
for(var k=j.firstChild;k;k=j.firstChild)if("select"==i){var m=k.cloneNode(!0);k.selected&&l&&(l=!1,m.selected=!0),
e.appendChild(m),k.removeNode(!0)}else e.appendChild(k);f.removeNode&&f.removeNode(!0)}f=null}return this;
}}:b?function(a){var b=d(arguments,c,"$Element#html");switch(b+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":a+="";var e=this._element;if(e.parentNode)e.innerHTML=a;else{var f,g="R"+(new Date).getTime()+parseInt(1e5*Math.random(),10),h=e.ownerDocument||e.document||document,i=e.tagName.toLowerCase();
switch(i){case"select":case"table":f=h.createElement("div"),f.innerHTML="<"+i+' class="'+g+'">'+a+"</"+i+">";
break;case"tr":case"thead":case"tbody":case"colgroup":f=h.createElement("div"),f.innerHTML="<table><"+i+' class="'+g+'">'+a+"</"+i+"></table>";
break;default:e.innerHTML=a}if(f){var j;for(j=f.firstChild;j&&j.className!=g;j=j.firstChild);if(j){for(var k;k=e.firstChild;)k.removeNode(!0);
for(var k=j.firstChild;k;k=j.firstChild)e.appendChild(k);f.removeNode&&f.removeNode(!0)}f=null}}return this;
}}:function(a){var b=d(arguments,c,"$Element#html");switch(b+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":a+="";var e=this._element;return e.innerHTML=a,this}},this.html.apply(this,arguments);
},jindo.$Element.prototype.outerHTML=function(){var a=this._element;if(a=jindo.$Jindo.isDocument(a)?a.documentElement:a,
void 0!==a.outerHTML)return a.outerHTML;var b=a.ownerDocument||a.document||document,c=b.createElement("div"),d=a.parentNode;
if(!d)return a.innerHTML;d.insertBefore(c,a),c.style.display="none",c.appendChild(a);var e=c.innerHTML;
return d.insertBefore(a,c),d.removeChild(c),e},jindo.$Element.prototype.toString=function(){return this.outerHTML()||"[object $Element]";
},jindo.$Element.prototype.attach=function(a,b){var c,d,e=g_checkVarType(arguments,{"4str":["sEvent:String+","fpCallback:Function+"],
"4obj":["hListener:Hash+"]},"$Element#attach");switch(e+""){case"4str":c=jindo._p_.splitEventSelector(e.sEvent),
this._add(c.type,c.event,c.selector,b);break;case"4obj":d=e.hListener;for(var f in d)this.attach(f,d[f]);
}return this},jindo.$Element.prototype.detach=function(a,b){var c,d,e=g_checkVarType(arguments,{"4str":["sEvent:String+","fpCallback:Function+"],
"4obj":["hListener:Hash+"]},"$Element#detach");switch(e+""){case"4str":c=jindo._p_.splitEventSelector(e.sEvent),
this._del(c.type,c.event,c.selector,b);break;case"4obj":d=e.hListener;for(var f in d)this.detach(f,d[f]);
}return this},jindo.$Element.prototype.delegate=function(a,b,c){g_checkVarType(arguments,{"4str":["sEvent:String+","vFilter:String+","fpCallback:Function+"],
"4fun":["sEvent:String+","vFilter:Function+","fpCallback:Function+"]},"$Element#delegate");return this._add("delegate",a,b,c);
},jindo.$Element.prototype.undelegate=function(a,b,c){g_checkVarType(arguments,{"4str":["sEvent:String+","vFilter:String+","fpCallback:Function+"],
"4fun":["sEvent:String+","vFilter:Function+","fpCallback:Function+"],group_for_string:["sEvent:String+","vFilter:String+"],
group_for_function:["sEvent:String+","vFilter:Function+"]},"$Element#undelegate");return this._del("delegate",a,b,c);
},jindo._p_.customEventAttach=function(a,b,c,d,e,f,g){if(jindo._p_.hasCustomEventListener(f.__jindo__id,b,c)){
var h=jindo._p_.getCustomEventListener(f.__jindo__id,b,c).custom;h.real_listener&&(h.real_listener.push(d),
h.wrap_listener.push(e))}else{var i=jindo._p_.getCustomEvent(b),h=new i,j=h.events;h.real_listener.push(d),
h.wrap_listener.push(e);for(var k=0,l=j.length;l>k;k++)h["_fp"+j[k]]=jindo.$Fn(h[j[k]],h).bind(),g(a,j[k],c,h["_fp"+j[k]]);
jindo._p_.addCustomEventListener(f,f.__jindo__id,b,c,h)}},jindo._p_.normalCustomEventAttach=function(a,b,c,d,e,f){
jindo._p_.normalCustomEvent[b][c]||(jindo._p_.normalCustomEvent[b][c]={},jindo._p_.normalCustomEvent[b][c].ele=a,
jindo._p_.normalCustomEvent[b][c][d]={},jindo._p_.normalCustomEvent[b][c][d].real_listener=[],jindo._p_.normalCustomEvent[b][c][d].wrap_listener=[]),
jindo._p_.normalCustomEvent[b][c][d].real_listener.push(e),jindo._p_.normalCustomEvent[b][c][d].wrap_listener.push(f);
},jindo.$Element.prototype._add=function(a,b,c,d){var e=jindo.$Element.eventManager,f=b;b=b.toLowerCase();
var g=e.splitGroup(b);b=g.event;var h=g.group,i=this._element,j=i.__jindo__id,k=i.ownerDocument||i.document||document;
if(jindo._p_.hasCustomEvent(b)){c=c||"_NONE_";var l=jindo.$Fn(d,this).bind();jindo._p_.normalCustomEventAttach(i,b,j,c,d,l),
jindo._p_.getCustomEvent(b)&&jindo._p_.customEventAttach(a,b,c,d,l,i,jindo.$Fn(this._add,this).bind());
}else{if("domready"==b&&jindo.$Jindo.isWindow(i))return jindo.$Element(k).attach(b,d),this;if("load"==b&&i===k)return jindo.$Element(window).attach(b,d),
this;if(!document.addEventListener&&"domready"==b){if(window.top!=window)throw jindo.$Error(jindo.$Except.NOT_WORK_DOMREADY,"$Element#attach");
return jindo.$Element._domready(i,d),this}b=e.revisionEvent(a,b,f),d=e.revisionCallback(a,b,f,d),e.isInit(this._key)||e.init(this._key,i),
e.hasEvent(this._key,b,f)||e.initEvent(this,b,f,h),e.hasGroup(this._key,b,h)||e.initGroup(this._key,b,h),
e.addEventListener(this._key,b,h,a,c,d)}return this},jindo._p_.customEventDetach=function(a,b,c,d,e,f){
for(var g=jindo._p_.getCustomEventListener(e.__jindo__id,b,c),h=g.custom,i=h.events,j=0,k=i.length;k>j;j++)f(a,i[j],c,h["_fp"+i[j]]);
},jindo.$Element.prototype._del=function(a,b,c,d){var e=jindo.$Element.eventManager,f=b;b=b.toLowerCase();
var g=e.splitGroup(b);b=g.event;var h=g.group,i=this._element.ownerDocument||this._element.document||document;
if(jindo._p_.hasCustomEvent(b)){var j=this._element.__jindo__id;c=c||"_NONE_";for(var k=jindo._p_.getNormalEventListener(j,b,c),l=k.wrap_listener,m=k.real_listener,n=[],o=[],p=0,q=m.length;q>p;p++)m[p]!=d&&(n.push(l[p]),
o.push(m[p]));if(0==o.length){var r=jindo._p_.normalCustomEvent[b][j],s=0;for(var p in r)if("ele"!==p){
s++;break}0===s?delete jindo._p_.normalCustomEvent[b][j]:delete jindo._p_.normalCustomEvent[b][j][c];
}jindo._p_.customEvent[b]&&(jindo._p_.setCustomEventListener(j,b,c,o,n),0==o.length&&(jindo._p_.customEventDetach(a,b,c,d,this._element,jindo.$Fn(this._del,this).bind()),
delete jindo._p_.customEventStore[j][b][c]))}else{if("domready"==b&&jindo.$Jindo.isWindow(this._element))return jindo.$Element(i).detach(b,d),
this;if("load"==b&&this._element===i)return jindo.$Element(window).detach(b,d),this;if(b=e.revisionEvent(a,b,f),
!document.addEventListener&&"domready"==b){for(var t=[],u=jindo.$Element._domready.list,p=0,q=u.length;q>p;p++)u[p]!=d&&t.push(u[p]);
return jindo.$Element._domready.list=t,this}if(h===jindo._p_.NONE_GROUP&&!jindo.$Jindo.isFunction(d)&&!c)throw new jindo.$Error(jindo.$Except.HAS_FUNCTION_FOR_GROUP,"$Element#"+("normal"==a?"detach":"delegate"));
e.removeEventListener(this._key,b,h,a,c,d)}return this},jindo._p_.mouseTouchPointerEvent=function(a){
var b={};return jindo._p_.mouseTouchPointerEvent=function(a){return b[a]?b[a]:a},jindo._p_.mouseTouchPointerEvent(a);
},jindo.$Element.eventManager=function(){function a(a,b,c){return function(){var d=jindo._p_._toArray(arguments,0);
return c.length&&(d=c.concat(d)),a.apply(b,d)}}var b={};return{revisionCallback:function(a,b,c,d){if((document.addEventListener||jindo._p_._JINDO_IS_IE&&"delegate"==a)&&("mouseenter"==c||"mouseleave"==c)){
var e=jindo.$Element.eventManager._fireWhenElementBoundary(a,d);e._origin_=d,d=e}return d},_fireWhenElementBoundary:function(a,b){
return function(c){var d=c.relatedElement?jindo.$Element(c.relatedElement):null,e=c.currentElement;"delegate"==a&&(e=c.element),
d&&(d.isEqual(e)||d.isChildOf(e))||b(c)}},revisionEvent:function(a,b,c){return this.revisionEvent=void 0!==document.addEventListener?function(a,b,c){
if(/^ms/i.test(c))return c;var d=jindo.$Event.hook(b);if(d)return jindo.$Jindo.isFunction(d)?d():d;if(b=b.toLowerCase(),
"domready"==b||"domcontentloaded"==b)b="DOMContentLoaded";else if("mousewheel"!=b||jindo._p_._JINDO_IS_WK||jindo._p_._JINDO_IS_OP||jindo._p_._JINDO_IS_IE)if("mouseenter"!=b||jindo._p_._JINDO_IS_IE&&"delegate"!=a)if("mouseleave"!=b||jindo._p_._JINDO_IS_IE&&"delegate"!=a)if("transitionend"==b||"transitionstart"==b){
var e=b.replace("transition",""),f=jindo._p_.getStyleIncludeVendorPrefix();"transition"!=f.transition&&(e=e.substr(0,1).toUpperCase()+e.substr(1)),
b=f.transition+e}else if("animationstart"==b||"animationend"==b||"animationiteration"==b){var e=b.replace("animation",""),f=jindo._p_.getStyleIncludeVendorPrefix();
"animation"!=f.animation&&(e=e.substr(0,1).toUpperCase()+e.substr(1)),b=f.animation+e}else("focusin"===b||"focusout"===b)&&(b="focusin"===b?"focus":"blur");else b="mouseout";else b="mouseover";else b="DOMMouseScroll";
return jindo._p_.mouseTouchPointerEvent(b)}:function(a,b,c){if(/^ms/i.test(c))return c;var d=jindo.$Event.hook(b);
return d?jindo.$Jindo.isFunction(d)?d():d:("delegate"==a&&"mouseenter"==b?b="mouseover":"delegate"==a&&"mouseleave"==b&&(b="mouseout"),
jindo._p_.mouseTouchPointerEvent(b))},this.revisionEvent(a,b,c)},test:function(){return b},isInit:function(a){
return!!b[a]},init:function(a,c){b[a]={ele:c,event:{}}},getEventConfig:function(a){return b[a]},hasEvent:function(a,c){
if(!document.addEventListener&&"domready"==c.toLowerCase())return jindo.$Element._domready.list&&jindo.$Element._domready.list.length>0?!0:!1;
try{return!!b[a].event[c]}catch(d){return!1}},hasGroup:function(a,c,d){return!!b[a].event[c].type[d];
},initEvent:function(c,d,e){var f=c._key,g=b[f].event,h=a(function(a,b,c){c=c||window.event,void 0===c.currentTarget&&(c.currentTarget=this._element);
var d=jindo.$Event(c);d.currentElement||(d.currentElement=this._element),d.realType=b;var e=d.element,f=jindo.$Element.eventManager,g=f.getEventConfig(d.currentElement.__jindo__id),h=g.event[a].type;
for(var i in h)if(h.hasOwnProperty(i)){for(var j=h[i].normal,k=0,l=j.length;l>k;k++)j[k].call(this,d);
var m,n,o=h[i].delegate;for(var p in o)if(o.hasOwnProperty(p)&&(m=o[p].checker(e),m[0])){n=o[p].callback,
d.element=m[1];for(var q=0,r=n.length;r>q;q++)n[q].call(this,d)}}},c,[d,e]);g[d]={listener:h,type:{}
},jindo.$Element._eventBind(c._element,d,h,"focusin"===e||"focusout"===e)},initGroup:function(a,c,d){
var e=b[a].event[c].type;e[d]={normal:[],delegate:{}}},addEventListener:function(a,c,d,e,f,g){var h=b[a].event[c].type[d];
"normal"===e?h.normal.push(g):"delegate"===e&&(this.hasDelegate(h,f)||this.initDelegate(b[a].ele,h,f),
this.addDelegate(h,f,g))},hasDelegate:function(a,b){return!!a.delegate[b]},containsElement:function(a,b,c,d){
if(a==b&&d)return jindo.$$.test(b,c);for(var e=jindo.$$(c,a),f=0,g=e.length;g>f;f++)if(e[f]==b)return!0;
return!1},initDelegate:function(b,c,d){var e;e=jindo.$Jindo.isString(d)?a(function(a,b,c){var d=c,e=this.containsElement(a,c,b,!0);
if(!e)for(var f=this._getParent(a,c),g=0,h=f.length;h>g;g++)if(d=f[g],this.containsElement(a,d,b)){e=!0;
break}return[e,d]},this,[b,d]):a(function(a,b,c){var d=c,e=b(a,c);if(!e)for(var f=this._getParent(a,c),g=0,h=f.length;h>g;g++)if(d=f[g],
b(a,d)){e=!0;break}return[e,d]},this,[b,d]),c.delegate[d]={checker:e,callback:[]}},addDelegate:function(a,b,c){
a.delegate[b].callback.push(c)},removeEventListener:function(a,c,d,e,f,g){var h;try{h=b[a].event[c].type[d];
}catch(i){return}var j,k=[];if(j="normal"===e?h.normal:h.delegate[f].callback,c==jindo._p_.NONE_GROUP||jindo.$Jindo.isFunction(g))for(var l=0,m=j.length;m>l;l++)(j[l]._origin_||j[l])!=g&&k.push(j[l]);
"normal"===e?(delete h.normal,h.normal=k):"delegate"===e&&(delete h.delegate[f].callback,h.delegate[f].callback=k),
this.cleanUp(a,c)},cleanUpAll:function(){for(var a in b)b.hasOwnProperty(a)&&this.cleanUpUsingKey(a,!0);
},cleanUpUsingKey:function(a,c){var d;if(b[a]&&b[a].event){d=b[a].event;for(var e in d)d.hasOwnProperty(e)&&this.cleanUp(a,e,c);
}},cleanUp:function(a,c,d){var e;try{e=b[a].event[c].type}catch(f){return}var g,h=!1;if(!d)for(var i in e)if(e.hasOwnProperty(i)){
if(g=e[i],g.normal.length){h=!0;break}var j=g.delegate;for(var k in j)if(j.hasOwnProperty(k)&&j[k].callback.length){
h=!0;break}if(h)break}if(!h){jindo.$Element._unEventBind(b[a].ele,c,b[a].event[c].listener),delete b[a].event[c];
var l=!0,m=b[a].event;for(var n in m)if(m.hasOwnProperty(n)){l=!1;break}l&&delete b[a]}},splitGroup:function(a){
var b=/\s*(.+?)\s*\(\s*(.*?)\s*\)/.exec(a);return b?{event:b[1].toLowerCase(),group:b[2].toLowerCase()
}:{event:a.toLowerCase(),group:jindo._p_.NONE_GROUP}},_getParent:function(a,b){for(var c=a,d=[],e=null,f=b.ownerDocument||b.document||document;b.parentNode&&e!=c&&(e=b.parentNode,
e!=f.documentElement);)d[d.length]=e,b=e;return d}}}(),jindo.$Element._domready=function(a,b){if(void 0===jindo.$Element._domready.list){
var c=null;jindo.$Element._domready.list=[b];var d=!1,e=function(){if(!d){d=!0;for(var b=jindo.$Element._domready.list.concat(),e={
type:"domready",target:a,currentTarget:a};c=b.shift();)c(e)}};!function(){try{a.documentElement.doScroll("left");
}catch(b){return void setTimeout(arguments.callee,50)}e()}(),a.onreadystatechange=function(){"complete"==a.readyState&&(a.onreadystatechange=null,
e())}}else jindo.$Element._domready.list.push(b)},jindo.$Element.prototype.appear=function(a,b){function c(){
var c=g_checkVarType(arguments,{"4voi":[],"4num":["nDuration:Numeric"],"4fun":["nDuration:Numeric","fpCallback:Function+"]
},"$Element#appear");switch(c+""){case"4voi":a=.3,b=function(){};break;case"4num":a=c.nDuration,b=function(){};
break;case"4fun":a=c.nDuration,b=c.fpCallback}return[a,b]}var d,e=jindo._p_.getStyleIncludeVendorPrefix(),f=e.transition;
return d="transition"==f?"end":"End",jindo.$Element.prototype.appear=e.transition?function(a,b){var f=c.apply(this,jindo._p_._toArray(arguments));
a=f[0],b=f[1];var g=this,h=this._element,i=e.transition,j=function(){g.show(),h.style[i+"Property"]="",
h.style[i+"Duration"]="",h.style[i+"TimingFunction"]="",h.style.opacity="",b.call(g,g),h.removeEventListener(i+d,arguments.callee,!1);
};return this.visible()||(h.style.opacity=h.style.opacity||0,g.show()),h.addEventListener(i+d,j,!1),
h.style[i+"Property"]="opacity",h.style[i+"Duration"]=a+"s",h.style[i+"TimingFunction"]="linear",jindo._p_.setOpacity(h,"1"),
this}:function(a,b){var d=c.apply(this,jindo._p_._toArray(arguments));a=d[0],b=d[1];var e=this,f=this.opacity();
if("none"==this._getCss(this._element,"display")&&(f=0),1==f)return this;try{clearTimeout(this._fade_timer);
}catch(g){}var h=(1-f)/(100*(a||.3)),i=function(){f+=h,e.opacity(f),f>=1?(e._element.style.filter="",
b.call(e,e)):e._fade_timer=setTimeout(i,10)};return this.show(),i(),this},this.appear.apply(this,arguments);
},jindo.$Element.prototype.disappear=function(a,b){function c(){var c=g_checkVarType(arguments,{"4voi":[],
"4num":["nDuration:Numeric"],"4fun":["nDuration:Numeric","fpCallback:Function+"]},"$Element#disappear");
switch(c+""){case"4voi":a=.3,b=function(){};break;case"4num":a=c.nDuration,b=function(){};break;case"4fun":
a=c.nDuration,b=c.fpCallback}return[a,b]}var d,e=jindo._p_.getStyleIncludeVendorPrefix(),f=e.transition;
return d="transition"==f?"end":"End",jindo.$Element.prototype.disappear=function(a,b){var d=c.apply(this,jindo._p_._toArray(arguments));
a=d[0],b=d[1];var e=this,f=this.opacity();if(0==f)return this;try{clearTimeout(this._fade_timer)}catch(g){}
var h=f/(100*(a||.3)),i=function(){f-=h,e.opacity(f),0>=f?(e._element.style.display="none",e.opacity(1),
b.call(e,e)):e._fade_timer=setTimeout(i,10)};return i(),this},this.disappear.apply(this,arguments)},
jindo.$Element.prototype.offset=function(){var a=g_checkVarType(arguments,{g:[],s:["nTop:Numeric","nLeft:Numeric"]
},"$Element#offset");switch(a+""){case"g":return this.offset_get();case"s":return this.offset_set(a.nTop,a.nLeft);
}},jindo.$Element.prototype.offset_set=function(a,b){var c=this._element;isNaN(parseFloat(this._getCss(c,"top")))&&(c.style.top="0px"),
isNaN(parseFloat(this._getCss(c,"left")))&&(c.style.left="0px");var d=this.offset_get(),e={top:a-d.top,
left:b-d.left};return c.style.top=parseFloat(this._getCss(c,"top"))+e.top+"px",c.style.left=parseFloat(this._getCss(c,"left"))+e.left+"px",
this},jindo.$Element.prototype.offset_get=function(){var a=this._element,b=null,c=jindo._p_._JINDO_IS_SP&&!jindo._p_._JINDO_IS_CH,d=jindo._p_._JINDO_IS_IE,e=0;
d&&(e=document.documentMode?document.documentMode:jindo.$Agent().navigator().verison);var f=function(a){
for(var b={left:0,top:0},c=a,d=c.offsetParent;c=c.parentNode;)c.offsetParent&&(b.left-=c.scrollLeft,
b.top-=c.scrollTop),c==d&&(b.left+=a.offsetLeft+c.clientLeft,b.top+=a.offsetTop+c.clientTop,c.offsetParent||(b.left+=c.offsetLeft,
b.top+=c.offsetTop),d=c.offsetParent,a=c);return b},g=function(a){var c={left:0,top:0},f=a.ownerDocument||a.document||document,g=f.documentElement,h=f.body;
if(a.getBoundingClientRect){if(!b){var i=window==top;if(!i)try{i=window.frameElement&&1==window.frameElement.frameBorder;
}catch(j){}d&&8>e&&window.external&&i&&document.body.contains(a)?(b={left:2,top:2},oBase=null):b={left:0,
top:0}}var k;try{k=a.getBoundingClientRect()}catch(j){k={left:0,top:0}}a!==g&&a!==h&&(c.left=k.left-b.left,
c.top=k.top-b.top,c.left+=g.scrollLeft||h.scrollLeft,c.top+=g.scrollTop||h.scrollTop)}else if(f.getBoxObjectFor){
var k=f.getBoxObjectFor(a),l=f.getBoxObjectFor(g||h);c.left=k.screenX-l.screenX,c.top=k.screenY-l.screenY;
}else{for(var m=a;m;m=m.offsetParent)c.left+=m.offsetLeft,c.top+=m.offsetTop;for(var m=a.parentNode;m&&"BODY"!=m.tagName;m=m.parentNode)"TR"==m.tagName&&(c.top+=2),
c.left-=m.scrollLeft,c.top-=m.scrollTop}return c};return(c?f:g)(a)},jindo.$Element.prototype.evalScripts=function(sHTML){
var oArgs=g_checkVarType(arguments,{"4str":["sHTML:String+"]},"$Element#evalScripts"),aJS=[],leftScript="<script(\\s[^>]+)*>(.*?)</",rightScript="script>";
return sHTML=sHTML.replace(new RegExp(leftScript+rightScript,"gi"),function(a,b,c){return aJS.push(c),
""}),eval(aJS.join("\n")),this},jindo.$Element.prototype.clone=function(a){var b=g_checkVarType(arguments,{
"default":[],set:["bDeep:Boolean"]},"$Element#clone");return b+""=="default"&&(a=!0),jindo.$Element(this._element.cloneNode(a));
},jindo.$Element._common=function(a,b){try{return jindo.$Element(a)._element}catch(c){throw TypeError(c.message.replace(/\$Element/g,"$Element#"+b).replace(/Element\.html/g,"Element.html#"+b));
}},jindo.$Element._prepend=function(a,b){var c=a.childNodes;c.length>0?a.insertBefore(b,c[0]):a.appendChild(b);
},jindo.$Element.prototype.append=function(a){return this._element.appendChild(jindo.$Element._common(a,"append")),
this},jindo.$Element.prototype.prepend=function(a){return jindo.$Element._prepend(this._element,jindo.$Element._common(a,"prepend")),
this},jindo.$Element.prototype.replace=function(a){a=jindo.$Element._common(a,"replace"),jindo.cssquery&&jindo.cssquery.release();
var b=this._element,c=b.parentNode;if(c&&c.replaceChild)return c.replaceChild(a,b),this;var d=a;return c.insertBefore(d,b),
c.removeChild(b),this},jindo.$Element.prototype.appendTo=function(a){return jindo.$Element._common(a,"appendTo").appendChild(this._element),
this},jindo.$Element.prototype.prependTo=function(a){return jindo.$Element._prepend(jindo.$Element._common(a,"prependTo"),this._element),
this},jindo.$Element.prototype.before=function(a){var b=jindo.$Element._common(a,"before");return this._element.parentNode.insertBefore(b,this._element),
this},jindo.$Element.prototype.after=function(a){return a=jindo.$Element._common(a,"after"),this.before(a),
jindo.$Element(a).before(this),this},jindo.$Element.prototype.parent=function(a,b){var c=g_checkVarType(arguments,{
"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"],for_function_number:["fpFunc:Function+","nLimit:Numeric"],
for_null_number:["fpFunc:Null","nLimit:Numeric"]},"$Element#parent"),d=this._element;switch(c+""){case"4voi":
return d.parentNode?jindo.$Element(d.parentNode):null;case"4fun":case"4nul":b=-1;break;case"for_function_number":
case"for_null_number":0==c.nLimit&&(b=-1)}for(var e=[],f=null;d.parentNode&&0!=b--;){try{f=jindo.$Element(d.parentNode);
}catch(d){f=null}if(d.parentNode==document.documentElement)break;(!a||a&&a.call(this,f))&&(e[e.length]=f),
d=d.parentNode}return e},jindo.$Element.prototype.child=function(a,b){var c=g_checkVarType(arguments,{
"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"],for_function_number:["fpFunc:Function+","nLimit:Numeric"],
for_null_number:["fpFunc:Null","nLimit:Numeric"]},"$Element#child"),d=this._element,e=[],f=null;switch(c+""){
case"4voi":for(var g=d.childNodes,h=[],i=0,j=g.length;j>i;i++)if(1==g[i].nodeType)try{h.push(jindo.$Element(g[i]));
}catch(d){h.push(null)}return h;case"4fun":case"4nul":b=-1;break;case"for_function_number":case"for_null_number":
0==c.nLimit&&(b=-1)}return(f=function(b,c,d){for(var g=null,h=null,i=0;i<b.childNodes.length;i++)if(g=b.childNodes[i],
1==g.nodeType){try{h=jindo.$Element(b.childNodes[i])}catch(j){h=null}(!a||a&&a.call(d,h))&&(e[e.length]=h),
0!=c&&f(b.childNodes[i],c-1)}})(d,b-1,this),e},jindo.$Element.prototype.prev=function(a){var b=g_checkVarType(arguments,{
"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"]},"$Element#prev"),c=this._element,d=[];switch(b+""){
case"4voi":if(!c)return null;do if(c=c.previousSibling,c&&1==c.nodeType)try{return null==c?null:jindo.$Element(c);
}catch(c){return null}while(c);try{return null==c?null:jindo.$Element(c)}catch(c){return null}case"4fun":
case"4nul":if(!c)return d;do if(c=c.previousSibling,c&&1==c.nodeType&&(!a||a.call(this,c)))try{d[d.length]=null==c?null:jindo.$Element(c);
}catch(c){d[d.length]=null}while(c);try{return d}catch(c){return null}}},jindo.$Element.prototype.next=function(a){
var b=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"]},"$Element#next"),c=this._element,d=[];
switch(b+""){case"4voi":if(!c)return null;do if(c=c.nextSibling,c&&1==c.nodeType)try{return null==c?null:jindo.$Element(c);
}catch(c){return null}while(c);try{return null==c?null:jindo.$Element(c)}catch(c){return null}case"4fun":
case"4nul":if(!c)return d;do if(c=c.nextSibling,c&&1==c.nodeType&&(!a||a.call(this,c)))try{d[d.length]=null==c?null:jindo.$Element(c);
}catch(c){d[d.length]=null}while(c);try{return d}catch(c){return null}}},jindo.$Element.prototype.first=function(){
var a=this._element.firstElementChild||this._element.firstChild;if(!a)return null;for(;a&&1!=a.nodeType;)a=a.nextSibling;
try{return a?jindo.$Element(a):null}catch(b){return null}},jindo.$Element.prototype.last=function(){
var a=this._element.lastElementChild||this._element.lastChild;if(!a)return null;for(;a&&1!=a.nodeType;)a=a.previousSibling;
try{return a?jindo.$Element(a):null}catch(b){return null}},jindo.$Element._contain=function(a,b){if(document.compareDocumentPosition)return!!(16&a.compareDocumentPosition(b));
if(a.contains)return a!==b&&(a.contains?a.contains(b):!0);if(!document.body.contains){for(var c=a,d=b;c&&c.parentNode;)if(c=c.parentNode,
c==d)return!0;return!1}if(a===(b.ownerDocument||b.document)&&b.tagName&&"BODY"===b.tagName.toUpperCase())return!0;
9===a.nodeType&&a!==b&&(a=a.body);try{return a!==b&&(a.contains?a.contains(b):!0)}catch(c){return!1}
},jindo.$Element.prototype.isChildOf=function(a){try{return jindo.$Element._contain(jindo.$Element(a)._element,this._element);
}catch(b){return!1}},jindo.$Element.prototype.isParentOf=function(a){try{return jindo.$Element._contain(this._element,jindo.$Element(a)._element);
}catch(b){return!1}},jindo.$Element.prototype.isEqual=function(a){try{return this._element===jindo.$Element(a)._element;
}catch(b){return!1}},jindo.$Element.prototype.fireEvent=function(){function a(a,b){var d=g_checkVarType(arguments,c,"$Element#fireEvent"),e=this._element;
if(jindo._p_.normalCustomEvent[a])return jindo._p_.fireCustomEvent(e,a,this,!!jindo._p_.normalCustomEvent[a]),
this;a=(a+"").toLowerCase();var f=document.createEventObject();switch(d+""){case"4obj":b=d.oProps;for(k in b)b.hasOwnProperty(k)&&(f[k]=b[k]);
f.button=(b.left?1:0)+(b.middle?4:0)+(b.right?2:0),f.relatedTarget=b.relatedElement||null}return"input"==this.tag&&"click"==a&&("checkbox"==e.type?e.checked=!e.checked:"radio"==e.type&&(e.checked=!0)),
this._element.fireEvent("on"+a,f),this}function b(a,b){var d=g_checkVarType(arguments,c,"$Element#fireEvent"),e=this._element,f=a;
if(a=jindo.$Element.eventManager.revisionEvent("",a,a),jindo._p_.normalCustomEvent[a])return jindo._p_.fireCustomEvent(e,a,this,!!jindo._p_.normalCustomEvent[a]),
this;var g="HTMLEvents";a=(a+"").toLowerCase(),"click"==a||0==a.indexOf("mouse")?g="MouseEvent":f.indexOf("wheel")>0?(a="DOMMouseScroll",
g=jindo._p_._JINDO_IS_FF?"MouseEvent":"MouseWheelEvent"):0==a.indexOf("key")?g="KeyboardEvent":a.indexOf("pointer")>0&&(g="MouseEvent",
a=f);var h;switch(d+""){case"4obj":switch(b=d.oProps,b.button=0+(b.middle?1:0)+(b.right?2:0),b.ctrl=b.ctrl||!1,
b.alt=b.alt||!1,b.shift=b.shift||!1,b.meta=b.meta||!1,g){case"MouseEvent":h=document.createEvent(g),
h.initMouseEvent(a,!0,!0,null,b.detail||0,b.screenX||0,b.screenY||0,b.clientX||0,b.clientY||0,b.ctrl,b.alt,b.shift,b.meta,b.button,b.relatedElement||null);
break;case"KeyboardEvent":if(window.KeyEvent)h=document.createEvent("KeyEvents"),h.initKeyEvent(a,!0,!0,window,b.ctrl,b.alt,b.shift,b.meta,b.keyCode,b.keyCode);else try{
h=document.createEvent("Events")}catch(i){h=document.createEvent("UIEvents")}finally{h.initEvent(a,!0,!0),
h.ctrlKey=b.ctrl,h.altKey=b.alt,h.shiftKey=b.shift,h.metaKey=b.meta,h.keyCode=b.keyCode,h.which=b.keyCode;
}break;default:h=document.createEvent(g),h.initEvent(a,!0,!0)}break;case"4str":h=document.createEvent(g),
h.initEvent(a,!0,!0)}return e.dispatchEvent(h),this}var c={"4str":[jindo.$Jindo._F("sEvent:String+")],
"4obj":["sEvent:String+","oProps:Hash+"]};return jindo._p_.fireCustomEvent=function(a,b,c){var d,e,f=jindo._p_.normalCustomEvent[b];
for(var g in f){e=f[g],d=e.ele;var h;for(var i in e)if("_NONE_"===i){if(d==a||c.isChildOf(d)){h=e[i].wrap_listener;
for(var j=0,k=h.length;k>j;j++)h[j]()}}else if(jindo.$Element.eventManager.containsElement(d,a,i,!1)){
h=e[i].wrap_listener;for(var j=0,k=h.length;k>j;j++)h[j]()}}},jindo.$Element.prototype.fireEvent=void 0!==document.dispatchEvent?b:a,
this.fireEvent.apply(this,jindo._p_._toArray(arguments))},jindo.$Element.prototype.empty=function(){
return jindo.cssquery&&jindo.cssquery.release(),this.html(""),this},jindo.$Element.prototype.remove=function(a){
jindo.cssquery&&jindo.cssquery.release();var b=jindo.$Element;return b(b._common(a,"remove")).leave(),
this},jindo.$Element.prototype.leave=function(){var a=this._element;return a.parentNode&&(jindo.cssquery&&jindo.cssquery.release(),
a.parentNode.removeChild(a)),this},jindo.$Element.prototype.wrap=function(a){var b=this._element;return a=jindo.$Element._common(a,"wrap"),
b.parentNode&&b.parentNode.insertBefore(a,b),a.appendChild(b),this},jindo.$Element.prototype.ellipsis=function(a){
g_checkVarType(arguments,{"4voi":[],"4str":["stringTail:String+"]},"$Element#ellipsis");a=a||"...";var b=this.text(),c=b.length,d=parseInt(this._getCss(this._element,"paddingTop"),10)+parseInt(this._getCss(this._element,"paddingBottom"),10),e=this._element.offsetHeight-d,f=0,g=this.text("A")._element.offsetHeight-d;
if(1.5*g>e)return this.text(b),this;for(e=g;1.5*g>e;)f+=Math.max(Math.ceil((c-f)/2),1),e=this.text(b.substring(0,f)+a)._element.offsetHeight-d;
for(;e>1.5*g;)f--,e=this.text(b.substring(0,f)+a)._element.offsetHeight-d;return this},jindo.$Element.prototype.indexOf=function(a){
try{for(var b=jindo.$Element(a)._element,c=this._element.childNodes,d=0,e=c.length,f=0;e>f;f++)if(1==c[f].nodeType){
if(c[f]===b)return d;d++}}catch(b){}return-1},jindo.$Element.prototype.queryAll=function(a){for(var b=(g_checkVarType(arguments,{
"4str":["sSelector:String+"]},"$Element#queryAll"),jindo.cssquery(a,this._element)),c=[],d=0,e=b.length;e>d;d++)c.push(jindo.$Element(b[d]));
return c},jindo.$Element.prototype.query=function(a){var b=(g_checkVarType(arguments,{"4str":["sSelector:String+"]
},"$Element#query"),jindo.cssquery.getSingle(a,this._element));return null===b?b:jindo.$Element(b)},
jindo.$Element.prototype.test=function(a){g_checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#test");
return jindo.cssquery.test(this._element,a)},jindo.$Element.prototype.xpathAll=function(a){for(var b=(g_checkVarType(arguments,{
"4str":["sXPath:String+"]},"$Element#xpathAll"),jindo.cssquery.xpath(a,this._element)),c=[],d=0,e=b.length;e>d;d++)c.push(jindo.$Element(b[d]));
return c},jindo.$Element.insertAdjacentHTML=function(a,b,c,d,e,f){var g=[b];g.callee=arguments.callee;
var h=(g_checkVarType(g,{"4str":["sHTML:String+"]},"$Element#"+f),a._element);if(b+="",h.insertAdjacentHTML&&!/^<(option|tr|td|th|col)(?:.*?)>/.test(b.replace(/^(\s|　)+|(\s|　)+$/g,"").toLowerCase()))h.insertAdjacentHTML(c,b);else{
var i,j=h.ownerDocument||h.document||document,k=j.createDocumentFragment(),l=b.replace(/^(\s|　)+|(\s|　)+$/g,""),m={
option:"select",tr:"tbody",thead:"table",tbody:"table",col:"table",td:"tr",th:"tr",div:"div"},n=/^\<(option|tr|thead|tbody|td|th|col)(?:.*?)\>/i.exec(l),o=null===n?"div":n[1].toLowerCase(),p=m[o];
i=jindo._p_._createEle(p,l,j,!0);for(var q=i.getElementsByTagName("script"),r=0,s=q.length;s>r;r++)q[r].parentNode.removeChild(q[r]);
for(;i[d];)k.appendChild(i[d]);e(k.cloneNode(!0))}return a},jindo.$Element.prototype.appendHTML=function(a){
return jindo.$Element.insertAdjacentHTML(this,a,"beforeEnd","firstChild",jindo.$Fn(function(a){var b=this._element;
if("table"===b.tagName.toLowerCase())for(var c=b.childNodes,d=0,e=c.length;e>d;d++)if(1==c[d].nodeType){
b=c[d];break}b.appendChild(a)},this).bind(),"appendHTML")},jindo.$Element.prototype.prependHTML=function(a){
var b=jindo.$Element;return b.insertAdjacentHTML(this,a,"afterBegin","firstChild",jindo.$Fn(function(a){
var c=this._element;if("table"===c.tagName.toLowerCase())for(var d=c.childNodes,e=0,f=d.length;f>e;e++)if(1==d[e].nodeType){
c=d[e];break}b._prepend(c,a)},this).bind(),"prependHTML")},jindo.$Element.prototype.beforeHTML=function(a){
return jindo.$Element.insertAdjacentHTML(this,a,"beforeBegin","firstChild",jindo.$Fn(function(a){this._element.parentNode.insertBefore(a,this._element);
},this).bind(),"beforeHTML")},jindo.$Element.prototype.afterHTML=function(a){return jindo.$Element.insertAdjacentHTML(this,a,"afterEnd","firstChild",jindo.$Fn(function(a){
this._element.parentNode.insertBefore(a,this._element.nextSibling)},this).bind(),"afterHTML")},jindo.$Element.prototype.hasEventListener=function(a){
var b,c=g_checkVarType(arguments,{"4str":["sEvent:String+"]},"$Element#hasEventListener"),d=!1,e=c.sEvent.toLowerCase();
if(this._key){if(b=this._element.ownerDocument||this._element.document||document,"load"==e&&this._element===b)d=jindo.$Element(window).hasEventListener(c.sEvent);else if("domready"==e&&jindo.$Jindo.isWindow(this._element))d=jindo.$Element(b).hasEventListener(c.sEvent);else{
var f=jindo.$Element.eventManager.revisionEvent("",a);d=!!jindo.$Element.eventManager.hasEvent(this._key,f,c.sEvent);
}return d}return!1},jindo.$Element.prototype.preventTapHighlight=function(){if(jindo._p_._JINDO_IS_MO){
var a="no_tap_highlight"+(new Date).getTime(),b=document.createElement("style"),c=document.getElementsByTagName("html")[0];
b.type="text/css",c.insertBefore(b,c.firstChild);var d=b.sheet||b.styleSheet;d.insertRule("."+a+" { -webkit-tap-highlight-color: rgba(0,0,0,0); }",0),
d.insertRule("."+a+" * { -webkit-tap-highlight-color: rgba(0,0,0,.25); }",0),jindo.$Element.prototype.preventTapHighlight=function(b){
return this[b?"addClass":"removeClass"](a)}}else jindo.$Element.prototype.preventTapHighlight=function(){
return this};return this.preventTapHighlight.apply(this,jindo._p_._toArray(arguments))},jindo.$Element.prototype.data=function(sKey,vValue){
function toCamelCase(a){return a.replace(/\-(.)/g,function(a,b){return b.toUpperCase()})}function toDash(a){
return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}var oType={g:["sKey:String+"],s4var:["sKey:String+","vValue:Variant"],
s4obj:["oObj:Hash+"]},jindoKey="_jindo";return jindo.$Element.prototype.data=document.body.dataset?function(a,b){
var c,d=g_checkVarType(arguments,oType,"$Element#data"),e=jindo.$Jindo.isNull;switch(d+""){case"g":a=toCamelCase(a);
var f=this._element.dataset[a+jindoKey],g=this._element.dataset[a];return g?f?window.JSON.parse(g):g:null;
case"s4var":var h;if(e(b))return a=toCamelCase(a),delete this._element.dataset[a],delete this._element.dataset[a+jindoKey],
this;h={},h[a]=b,a=h;case"s4obj":var i;for(var j in a)i=toCamelCase(j),e(a[j])?(delete this._element.dataset[i],
delete this._element.dataset[i+jindoKey]):(c=jindo.$Json._oldToString(a[j]),null!=c&&(this._element.dataset[i]=c,
this._element.dataset[i+jindoKey]="jindo"));return this}}:function(sKey,vValue){var sToStr,oArgs=g_checkVarType(arguments,oType,"$Element#data"),isNull=jindo.$Jindo.isNull;
switch(oArgs+""){case"g":sKey=toDash(sKey);var isMakeFromJindo=this._element.getAttribute("data-"+sKey+jindoKey),sVal=this._element.getAttribute("data-"+sKey);
return isMakeFromJindo?null!=sVal?eval("("+sVal+")"):null:sVal;case"s4var":var oData;if(isNull(vValue))return sKey=toDash(sKey),
this._element.removeAttribute("data-"+sKey),this._element.removeAttribute("data-"+sKey+jindoKey),this;
oData={},oData[sKey]=vValue,sKey=oData;case"s4obj":var sChange;for(var i in sKey)sChange=toDash(i),isNull(sKey[i])?(this._element.removeAttribute("data-"+sChange),
this._element.removeAttribute("data-"+sChange+jindoKey)):(sToStr=jindo.$Json._oldToString(sKey[i]),null!=sToStr&&(this._element.setAttribute("data-"+sChange,sToStr),
this._element.setAttribute("data-"+sChange+jindoKey,"jindo")));return this}},this.data.apply(this,jindo._p_._toArray(arguments));
},jindo.$ElementList=function(a){var b=arguments.callee;if(a instanceof b)return a;if(!(this instanceof b))try{
return new b(a)}catch(c){if(c instanceof TypeError)return null;throw c}var d=g_checkVarType(arguments,{
"4arr":["aEle:Array+"],"4str":["sCssQuery:String+"],"4nul":["oEle:Null"],"4und":["oEle:Undefined"]},"$ElementList");
switch(d+""){case"4arr":a=d.aEle;break;case"4str":a=jindo.cssquery(d.sCssQuery);break;case"4nul":case"4und":
a=[]}this._elements=[];for(var e=0,f=a.length;f>e;e++)this._elements.push(jindo.$Element(a[e]))},function(a){
for(var b=["show","hide","toggle","addClass","removeClass","toggleClass","fireEvent","leave","empty","className","width","height","text","html","css","attr"],c=0,d=b.length;d>c;c++){
var e=b[c];jindo.$Element.prototype[e]&&(a[b[c]]=function(a){return function(){try{for(var b=[],c=0,d=arguments.length;d>c;c++)b.push(arguments[c]);
for(var e=0,f=this._elements.length;f>e;e++)this._elements[e][a].apply(this._elements[e],b);return this;
}catch(g){throw TypeError(g.message.replace(/\$Element/g,"$Elementlist#"+a).replace(/Element\.html/g,"Elementlist.html#"+a));
}}}(b[c]))}for(var f=["appear","disappear"],c=0,d=f.length;d>c;c++)jindo.$Element.prototype[e]&&(a[f[c]]=function(a){
return function(b,c){try{for(var d=this,e=0,f=this._elements.length;f>e;e++)e==f-1?this._elements[e][a](b,function(){
c&&c(d)}):this._elements[e][a](b);return this}catch(g){throw TypeError(g.message.replace(/\$Element/g,"$Elementlist#"+a).replace(/Element\.html/g,"Elementlist.html#"+a));
}}}(f[c]))}(jindo.$ElementList.prototype),jindo.$ElementList.prototype.get=function(a){g_checkVarType(arguments,{
"4num":["nIdx:Numeric"]},"$ElementList#get");return this._elements[a]},jindo.$ElementList.prototype.getFirst=function(){
return this._elements[0]},jindo.$ElementList.prototype.getLast=function(){return this._elements[Math.max(this._elements.length-1,0)];
},jindo.$ElementList.prototype.length=function(){var a=(g_checkVarType(arguments,{"4voi":[],"4num":[jindo.$Jindo._F("nLen:Numeric")],
"4var":["nLen:Numeric","oValue:Variant"]},"$ElementList#length"),jindo.$A(this._elements));try{return a.length.apply(a,jindo._p_._toArray(arguments));
}catch(b){throw TypeError(b.message.replace(/\$A/g,"$Elementlist#length").replace(/A\.html/g,"Elementlist.html#length"));
}},jindo.$ElementList.prototype.$value=function(){return this._elements},jindo.$Form=function(a){var b=arguments.callee;
if(a instanceof b)return a;if(!(this instanceof b))try{return jindo.$Jindo._maxWarn(arguments.length,1,"$Form"),
new b(a)}catch(c){if(c instanceof TypeError)return null;throw c}var d=g_checkVarType(arguments,{"4str":["oForm:String+"],
"4ele":["oForm:Element+"]},"$Form");switch(d+""){case"4str":a=jindo.$(a)}if(!a.tagName||"FORM"!=a.tagName.toUpperCase())throw TypeError("only form");
this._form=a},jindo.$Form.prototype.$value=function(){return this._form},jindo.$Form.prototype.serialize=function(){
var a=this,b={},c=arguments.length,d=function(c,d){if(!c.disabled){var e=a.value(d);void 0!==e&&(b[d]=e);
}};if(0==c)for(var e=this._form.elements.length,f=0;e>f;f++){var g=this._form.elements[f];g.name&&d(g,g.name);
}else for(var f=0;c>f;f++)d(this.element(arguments[f]),arguments[f]);return jindo.$H(b).toQueryString();
},jindo.$Form.prototype.element=function(a){var b=g_checkVarType(arguments,{"4voi":[],"4str":[jindo.$Jindo._F("sKey:String+")]
},"$Form#element");switch(b+""){case"4voi":return jindo._p_._toArray(this._form.elements);case"4str":
return this._form.elements[a+""]}},jindo.$Form.prototype.enable=function(a){var b=g_checkVarType(arguments,{
s4bln:["sName:String+","bEnable:Boolean"],s4obj:["oObj:Hash+"],g:[jindo.$Jindo._F("sName:String+")]},"$Form#enable");
switch(b+""){case"s4bln":var c=this._form[a];if(!c)return this;c=1==c.nodeType?[c]:c;for(var d=b.bEnable,e=0;e<c.length;e++)c[e].disabled=!d;
return this;case"s4obj":a=b.oObj;var f=this;for(var g in a)a.hasOwnProperty(g)&&f.enable(g,a[g]);return this;
case"g":var c=this._form[a];if(!c)return this;c=1==c.nodeType?[c]:c;for(var h=!0,e=0;e<c.length;e++)if(c[e].disabled){
h=!1;break}return h}},jindo.$Form.prototype.value=function(a){var b,c,d=g_checkVarType(arguments,{s4str:["sKey:String+","vValue:Variant"],
s4obj:[jindo.$Jindo._F("oObj:Hash+")],g:["sKey:String+"]},"$Form#value");if(d+""=="s4obj"){var e=this;
a=d.oObj;for(var f in a)a.hasOwnProperty(f)&&e.value(f,a[f]);return this}var g=this._form[a];if(!g)throw new jindo.$Error(a+jindo.$Except.NONE_ELEMENT,"$Form#value");
switch(g=1==g.nodeType?[g]:g,d+""){case"s4str":for(var h=d.vValue,i=g.length,j=0;i>j;j++){var k=g[j];
switch(k.type){case"radio":k.checked=k.value==h;break;case"checkbox":k.checked=h.constructor==Array?jindo.$A(h).has(k.value):k.value==h;
break;case"select-one":for(var l=-1,j=0,m=k.options.length;m>j;j++)b=k.options[j],b.value!=h&&b.text!=h||(l=j);
k.selectedIndex=l;break;case"select-multiple":var l=-1;if(jindo.$Jindo.isArray(h))for(var n=jindo.$A(h),j=0,m=k.options.length;m>j;j++)b=k.options[j],
k.options[j].selected=n.has(b.value)||n.has(b.text);else{for(var j=0,m=k.options.length;m>j;j++)b=k.options[j],
b.value!=h&&b.text!=h||(l=j);k.selectedIndex=l}break;default:k.value=h}}return this;case"g":for(var o=[],i=g.length,j=0;i>j;j++){
var k=g[j];switch(k.type){case"radio":case"checkbox":k.checked&&o.push(k.value);break;case"select-one":
-1!=k.selectedIndex&&(b=k.options[k.selectedIndex],c=""==b.value?b.text:b.value,o.push(c));break;case"select-multiple":
if(-1!=k.selectedIndex)for(var j=0,m=k.options.length;m>j;j++)b=k.options[j],b.selected&&(c=""==b.value?b.text:b.value,
o.push(c));break;default:o.push(k.value)}}return o.length>1?o:o[0]}},jindo.$Form.prototype.submit=function(){
var a=g_checkVarType(arguments,{voi:[],"4str":["sTargetName:String+"],"4fun":["fValidation:Function+"],
"4fun2":["sTargetName:String+","fValidation:Function+"]},"$Form#submit"),b=null;switch(a+""){case"4str":
b=this._form.target,this._form.target=a.sTargetName;break;case"4fun":case"4fun2":if(!a.fValidation.call(this,this._form))return this;
a+""=="4fun2"&&(b=this._form.target,this._form.target=a.sTargetName)}return this._form.submit(),jindo.$Jindo.isNull(b)||(this._form.target=b),
this},jindo.$Form.prototype.reset=function(a){var b=g_checkVarType(arguments,{"4voi":[],"4fun":["fValidation:Function+"]
},"$Form#reset");return b+""!="4fun"||a.call(this,this._form)?(this._form.reset(),this):this},jindo.$Document=function(a){
var b=arguments.callee;if(a instanceof b)return a;if(!(this instanceof b))try{return jindo.$Jindo._maxWarn(arguments.length,1,"$Document"),
new b(a||document)}catch(c){if(c instanceof TypeError)return null;throw c}var d=g_checkVarType(arguments,{
"4doc":["oDocument:Document+"]},"$Document");this._doc=null==d?document:a,this._docKey="Standards"==this.renderingMode()?"documentElement":"body";
},function(){var a=jindo.cssquery,b={query:a.getSingle,queryAll:a,xpathAll:a.xpath};for(var c in b)jindo.$Document.prototype[c]=function(a,b){
return function(c){g_checkVarType(arguments,{"4str":["sQuery:String+"]},"$Document#"+a);return b(c,this._doc);
}}(c,b[c])}(),jindo.$Document.prototype.$value=function(){return this._doc},jindo.$Document.prototype.scrollSize=function(){
var a=this._doc[jindo._p_._JINDO_IS_WK?"body":this._docKey];return{width:Math.max(a.scrollWidth,a.clientWidth),
height:Math.max(a.scrollHeight,a.clientHeight)}},jindo.$Document.prototype.scrollPosition=function(){
var a=this._doc[jindo._p_._JINDO_IS_WK?"body":this._docKey];return{left:a.scrollLeft||window.pageXOffset||window.scrollX||0,
top:a.scrollTop||window.pageYOffset||window.scrollY||0}},jindo.$Document.prototype.clientSize=function(){
var a=this._doc[this._docKey],b=jindo._p_._JINDO_IS_SP&&!jindo._p_._JINDO_IS_CH;return b?{width:window.innerWidth,
height:window.innerHeight}:{width:a.clientWidth,height:a.clientHeight}},jindo.$Document.prototype.renderingMode=function(){
var a,b=(jindo._p_._j_ag,jindo._p_._JINDO_IS_IE),c=jindo._p_._JINDO_IS_WK&&!jindo._p_._JINDO_IS_CH&&navigator.vendor.indexOf("Apple")>-1;
return a="compatMode"in this._doc?"CSS1Compat"==this._doc.compatMode?"Standards":b?"Quirks":"Almost":c?"Standards":"Quirks";
},jindo.$Window=function(a){var b=arguments.callee;if(a instanceof b)return a;if(!(this instanceof b))try{
return jindo.$Jindo._maxWarn(arguments.length,1,"$Window"),new b(a||window)}catch(c){if(c instanceof TypeError)return null;
throw c}g_checkVarType(arguments,{"4win":["el:Window+"]},"$Window");this._win=a},jindo.$Window.prototype.$value=function(){
return this._win},jindo.$Window.prototype.resizeTo=function(a,b){g_checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"]
},"$Window#resizeTo");return this._win.resizeTo(a,b),this},jindo.$Window.prototype.resizeBy=function(a,b){
g_checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"]},"$Window#resizeBy");return this._win.resizeBy(a,b),
this},jindo.$Window.prototype.moveTo=function(a,b){g_checkVarType(arguments,{"4num":["nLeft:Numeric","nTop:Numeric"]
},"$Window#moveTo");return this._win.moveTo(a,b),this},jindo.$Window.prototype.moveBy=function(a,b){
g_checkVarType(arguments,{"4num":["nLeft:Numeric","nTop:Numeric"]},"$Window#moveBy");return this._win.moveBy(a,b),
this},jindo.$Window.prototype.sizeToContent=function(a,b){g_checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"],
"4voi":[]},"$Window#sizeToContent");if(this._win.sizeToContent)this._win.sizeToContent();else{if(2!=arguments.length){
var c,d,e=this._win,f=this._win.document;e.innerHeight?(c=e.innerWidth,d=e.innerHeight):f.documentElement&&f.documentElement.clientHeight?(c=f.documentElement.clientWidth,
d=f.documentElement.clientHeight):f.body&&(c=f.body.clientWidth,d=f.body.clientHeight);var g,h,i=f.body.scrollHeight,j=f.body.offsetHeight;
i>j?(g=f.body.scrollWidth,h=f.body.scrollHeight):(g=f.body.offsetWidth,h=f.body.offsetHeight),a=g-c,
b=h-d}this._win.resizeBy(a,b)}return this},jindo.$S=function(a){var b=arguments.callee;if(a instanceof b)return a;
if(!(this instanceof b))try{return jindo.$Jindo._maxWarn(arguments.length,1,"$Json"),new b(a||"")}catch(c){
if(c instanceof TypeError)return null;throw c}g_checkVarType(arguments,{"4str":["str:String+"]},"$S");
this._str=a+""},jindo.$S.prototype.$value=function(){return this._str},jindo.$S.prototype.toString=jindo.$S.prototype.$value,
jindo.$S.prototype.trim=function(){return jindo.$S.prototype.trim="a".trim?function(){return jindo.$S(this._str.trim());
}:function(){return jindo.$S(jindo._p_.trim(this._str))},this.trim()},jindo.$S.prototype.escapeHTML=function(){
var a={'"':"quot","&":"amp","<":"lt",">":"gt","'":"#39"},b=this._str.replace(/[<>&"']/g,function(b){
return a[b]?"&"+a[b]+";":b});return jindo.$S(b)},jindo.$S.prototype.stripTags=function(){return jindo.$S(this._str.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/gi,""));
},jindo.$S.prototype.times=function(){var a=g_checkVarType(arguments,{"4str":["nTimes:Numeric"]},"$S#times");
return a?jindo.$S(Array(a.nTimes+1).join(this._str)):this},jindo.$S.prototype.unescapeHTML=function(){
var a={quot:'"',amp:"&",lt:"<",gt:">","#39":"'"},b=this._str.replace(/&([a-z]+|#[0-9]+);/g,function(b,c){
return a[c]?a[c]:b});return jindo.$S(b)},jindo.$S.prototype.escape=function(){var a=this._str.replace(/([\u0080-\uFFFF]+)|[\n\r\t"'\\]/g,function(a,b,c){
return b?escape(b).replace(/%/g,"\\"):(c={"\n":"\\n","\r":"\\r","	":"\\t"})[a]?c[a]:"\\"+a});return jindo.$S(a);
},jindo.$S.prototype.bytes=function(a){var b,c,d=g_checkVarType(arguments,{"4voi":[],"4num":["nConfig:Numeric"],
"4obj":["nConfig:Hash+"]},"$S#bytes"),e=0,f=0,g=0,h=this._str.length,i=(document.charset||document.characterSet||document.defaultCharset)+"";
switch(d+""){case"4voi":b=!1;break;case"4num":b=!0,c=a;break;case"4obj":i=a.charset||i,c=a.size||!1,
b=!!c}if("utf-8"==i.toLowerCase()){for(g=0;h>g;g++)if(e=this._str.charCodeAt(g),f+=128>e?1:2048>e?2:65536>e?3:4,
b&&f>c){this._str=this._str.substr(0,g);break}}else for(g=0;h>g;g++)if(f+=this._str.charCodeAt(g)>128?2:1,
b&&f>c){this._str=this._str.substr(0,g);break}return b?this:f},jindo.$S.prototype.parseString=function(){
if(""==this._str)return{};for(var a,b,c,d=this._str.split(/&/g),e={},f=!1,g=0;g<d.length;g++){b=d[g].substring(0,a=d[g].indexOf("=")),
f=!1;try{c=decodeURIComponent(d[g].substring(a+1))}catch(h){f=!0,c=decodeURIComponent(unescape(d[g].substring(a+1)));
}"[]"==b.substr(b.length-2,2)?(b=b.substring(0,b.length-2),jindo.$Jindo.isUndefined(e[b])&&(e[b]=[]),
e[b][e[b].length]=f?escape(c):c):e[b]=f?escape(c):c}return e},jindo.$S.prototype.escapeRegex=function(){
var a=this._str,b=/([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\\|])/g;return jindo.$S(a.replace(b,"\\$1"))},
jindo.$S.prototype.format=function(){var a=arguments,b=0,c=this._str.replace(/%([ 0])?(-)?([1-9][0-9]*)?([bcdsoxX])/g,function(c,d,e,f,g){
var h=a[b++],i="",j="";if(f=f?+f:0,"s"==g)i=h+"";else if(" bcdoxX".indexOf(g)>0){if(!jindo.$Jindo.isNumeric(h))return"";
i="c"==g?String.fromCharCode(h):h.toString({b:2,d:10,o:8,x:16,X:16}[g])," X".indexOf(g)>0&&(i=i.toUpperCase());
}return i.length<f&&(j=jindo.$S(d||" ").times(f-i.length)._str),"-"==e?i+=j:i=j+i,i});return jindo.$S(c);
},jindo.$Json=function(a){var b=arguments.callee;if(a instanceof b)return a;if(!(this instanceof b))try{
return jindo.$Jindo._maxWarn(arguments.length,1,"$Json"),new b(arguments.length?a:{})}catch(c){if(c instanceof TypeError)return null;
throw c}g_checkVarType(arguments,{"4var":["oObject:Variant"]},"$Json"),this._object=a},jindo.$Json._oldMakeJSON=function(sObject,sType){
try{if(!jindo.$Jindo.isString(sObject)||!/^(?:\s*)[\{\[]/.test(sObject))return sObject;sObject=eval("("+sObject+")");
}catch(e){throw new jindo.$Error(jindo.$Except.PARSE_ERROR,sType)}return sObject},jindo.$Json.fromXML=function(a){
var b=jindo.$Jindo,c=(b.checkVarType(arguments,{"4str":["sXML:String+"]},"<static> $Json#fromXML"),{}),d=/\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/gi,e=/^[0-9]+(?:\.[0-9]+)?$/,f={
"&amp;":"&","&nbsp;":" ","&quot;":'"',"&lt;":"<","&gt;":">"},g={tags:["/"],stack:[c]},h=function(a){
return b.isUndefined(a)?"":a.replace(/&[a-z]+;/g,function(a){return b.isString(f[a])?f[a]:a})},i=function(a,b){
a.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g,function(a,c,d,e){b[c]=h((d?d.replace(/\\"/g,'"'):void 0)||(e?e.replace(/\\'/g,"'"):void 0));
})},j=function(a){for(var b in a)if(a.hasOwnProperty(b)){if(Object.prototype[b])continue;return!1}return!0;
},k=function(a,c,d,f,k,l){var m,n="",o=g.stack.length-1;if(b.isString(c)&&c)if("/"!=c.substr(0,1)){var p="string"==typeof d&&d,q="string"==typeof f&&f,r=!p&&q?"":{};
if(m=g.stack[o],b.isUndefined(m[c]))m[c]=r,m=g.stack[o+1]=m[c];else if(m[c]instanceof Array){var s=m[c].length;
m[c][s]=r,m=g.stack[o+1]=m[c][s]}else m[c]=[m[c],r],m=g.stack[o+1]=m[c][1];p&&i(d,m),g.tags[o+1]=c,q&&(g.tags.length--,
g.stack.length--)}else g.tags.length--,g.stack.length--;else b.isString(k)&&k?n=k:b.isString(l)&&l&&(n=h(l));
if(n.replace(/^\s+/g,"").length>0){var t=g.stack[o-1],u=g.tags[o];if(e.test(n)?n=parseFloat(n):"true"==n?n=!0:"false"==n&&(n=!1),
b.isUndefined(t))return;if(t[u]instanceof Array){var v=t[u];b.isHash(v[v.length-1])&&!j(v[v.length-1])?(v[v.length-1].$cdata=n,
v[v.length-1].toString=function(){return n}):v[v.length-1]=n}else b.isHash(t[u])&&!j(t[u])?(t[u].$cdata=n,
t[u].toString=function(){return n}):t[u]=n}};return a=a.replace(/<(\?|\!-)[^>]*>/g,""),a.replace(d,k),
jindo.$Json(c)},jindo.$Json.prototype.get=function(a){var b=jindo.$Jindo,c=(b.checkVarType(arguments,{
"4str":["sPath:String+"]},"$Json#get"),jindo.$Json._oldMakeJSON(this._object,"$Json#get"));if(!b.isHash(c)&&!b.isArray(c))throw new jindo.$Error(jindo.$Except.JSON_MUST_HAVE_ARRAY_HASH,"$Json#get");
for(var d,e,f,g,h,i=a.split("/"),j=/^([\w:\-]+)\[([0-9]+)\]$/,k=[[c]],l=k[0],m=i.length,n=0;m>n;n++)if("."!=i[n]&&""!=i[n]){
if(".."==i[n])k.length--;else{if(f=[],e=-1,d=l.length,0==d)return[];for(j.test(i[n])&&(e=+RegExp.$2),
g=0;d>g;g++)h=l[g][i[n]],b.isUndefined(h)||(b.isArray(h)?e>-1?e<h.length&&(f[f.length]=h[e]):f=f.concat(h):-1==e&&(f[f.length]=h));
k[k.length]=f}l=k[k.length-1]}return l},jindo.$Json.prototype.toString=function(){return jindo.$Json._oldToString(this._object);
},jindo.$Json._oldToString=function(a){var b=jindo.$Jindo,c={$:function(a){return b.isNull(a)||!b.isString(a)&&1/0==a?"null":b.isFunction(a)?void 0:b.isUndefined(a)?void 0:b.isBoolean(a)?a?"true":"false":b.isString(a)?this.s(a):b.isNumeric(a)?a:b.isArray(a)?this.a(a):b.isHash(a)?this.o(a):b.isDate(a)?a+"":"object"==typeof a||b.isRegExp(a)?"{}":isNaN(a)?"null":void 0;
},s:function(a){var b={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","	":"\\t"},c=function(a){return void 0!==b[a]?b[a]:a;
};return'"'+a.replace(/[\\"'\n\r\t]/g,c)+'"'},a:function(a){for(var c="[",d="",e=a.length,f=0;e>f;f++)b.isFunction(a[f])||(c+=d+this.$(a[f]),
d||(d=","));return c+"]"},o:function(a){a=jindo.$H(a).ksort().$value();var c="{",d="";for(var e in a)if(a.hasOwnProperty(e)){
if(b.isUndefined(a[e])||b.isFunction(a[e]))continue;c+=d+this.s(e)+":"+this.$(a[e]),d||(d=",")}return c+"}";
}};return c.$(a)},jindo.$Json.prototype.toXML=function(){var a=function(b,c){var d=function(a,b){return"<"+c+(b||"")+">"+a+"</"+c+">";
};switch(typeof b){case"undefined":case"null":return d("");case"number":return d(b);case"string":return d(b.indexOf("<")<0?b.replace(/&/g,"&amp;"):"<![CDATA["+b+"]]>");
case"boolean":return d(String(b));case"object":var e="";if(b instanceof Array)for(var f=b.length,g=0;f>g;g++)e+=a(b[g],c);else{
var h="";for(var i in b)if(b.hasOwnProperty(i)){if("$cdata"==i||"function"==typeof b[i])continue;e+=a(b[i],i);
}c&&(e=d(e,h))}return e}};return a(jindo.$Json._oldMakeJSON(this._object,"$Json#toXML"),"")},jindo.$Json.prototype.toObject=function(){
return jindo.$Json._oldMakeJSON(this._object,"$Json#toObject")},jindo.$Json.prototype.compare=function(a){
function b(a,b){if(c.isArray(a)){if(a.length!==b.length)return!1;for(var d=0,e=a.length;e>d;d++)if(!arguments.callee(a[d],b[d]))return!1;
return!0}if(c.isRegExp(a)||c.isFunction(a)||c.isDate(a))return String(a)===String(b);if("number"==typeof a&&isNaN(a))return isNaN(b);
if(c.isHash(a)){var e=0;for(var f in a)e++;for(var f in b)e--;if(0!==e)return!1;for(var f in a)if(f in b==!1||!arguments.callee(a[f],b[f]))return!1;
return!0}return a===b}{var c=jindo.$Jindo;c.checkVarType(arguments,{"4obj":["oData:Hash+"],"4arr":["oData:Array+"]
},"$Json#compare")}try{return b(jindo.$Json._oldMakeJSON(this._object,"$Json#compare"),a)}catch(d){return!1;
}},jindo.$Json.prototype.$value=jindo.$Json.prototype.toObject,jindo.$Ajax=function(a,b){function c(){
if(window.XMLHttpRequest)return new XMLHttpRequest;if(ActiveXObject){try{return new ActiveXObject("MSXML2.XMLHTTP");
}catch(a){return new ActiveXObject("Microsoft.XMLHTTP")}return null}}var d=arguments.callee;if(!(this instanceof d))try{
return jindo.$Jindo._maxWarn(arguments.length,2,"$Ajax"),new d(a,b||{})}catch(e){if(e instanceof TypeError)return null;
throw e}var f=jindo.$Ajax,g=jindo.$Error,h=jindo.$Except,i=g_checkVarType(arguments,{"4str":["sURL:String+"],
"4obj":["sURL:String+","oOption:Hash+"]},"$Ajax");i+""=="for_string"&&(i.oOption={});var j=location.toString(),k="";
try{k=j.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]}catch(e){}this._status=0,this._url=i.sURL,this._headers={},
this._options={type:"xhr",method:"post",proxy:"",timeout:0,onload:function(){},onerror:null,ontimeout:function(){},
jsonp_charset:"utf-8",callbackid:"",callbackname:"",sendheader:!0,async:!0,decode:!0,postBody:!1},this._options=f._setProperties(i.oOption,this),
f._validationOption(this._options,"$Ajax"),f.CONFIG&&this.option(f.CONFIG);var l=this._options;l.type=l.type.toLowerCase(),
l.method=l.method.toLowerCase(),void 0===window["__"+jindo._p_.jindoName+"_callback"]&&(window["__"+jindo._p_.jindoName+"_callback"]=[],
window["__"+jindo._p_.jindoName+"2_callback"]=[]);var m=this;switch(l.type){case"put":case"delete":case"get":
case"post":l.method=l.type;case"xhr":this._request=c();break;case"flash":if(!f.SWFRequest)throw new g(jindo._p_.jindoName+".$Ajax.SWFRequest"+h.REQUIRE_AJAX,"$Ajax");
this._request=new f.SWFRequest(function(){return m.option.apply(m,arguments)});break;case"jsonp":if(!f.JSONPRequest)throw new g(jindo._p_.jindoName+".$Ajax.JSONPRequest"+h.REQUIRE_AJAX,"$Ajax");
this._request=new f.JSONPRequest(function(){return m.option.apply(m,arguments)});break;case"iframe":
if(!f.FrameRequest)throw new g(jindo._p_.jindoName+".$Ajax.FrameRequest"+h.REQUIRE_AJAX,"$Ajax");this._request=new f.FrameRequest(function(){
return m.option.apply(m,arguments)})}},jindo.$Ajax._setProperties=function(a,b){a=a||{};var c;return c=a.type=a.type||"xhr",
a.onload=jindo.$Fn(a.onload||function(){},b).bind(),a.method=a.method||"post","iframe"!=c&&(a.timeout=a.timeout||0,
a.ontimeout=jindo.$Fn(a.ontimeout||function(){},b).bind(),a.onerror=jindo.$Fn(a.onerror||function(){},b).bind()),
"xhr"==c?(a.async=void 0===a.async?!0:a.async,a.postBody=void 0===a.postBody?!1:a.postBody):"jsonp"==c?(a.method="get",
a.jsonp_charset=a.jsonp_charset||"utf-8",a.callbackid=a.callbackid||"",a.callbackname=a.callbackname||""):"flash"==c?(a.sendheader=void 0===a.sendheader?!0:a.sendheader,
a.decode=void 0===a.decode?!0:a.decode):"iframe"==c&&(a.proxy=a.proxy||""),a},jindo.$Ajax._validationOption=function(a,b){
var c=jindo.$Except,d=a.type;"jsonp"===d?"get"!==a.method&&jindo.$Jindo._warn(c.CANNOT_USE_OPTION+"\n	"+b+"-method="+a.method):"flash"===d&&"get"!==a.method&&"post"!==a.method&&jindo.$Jindo._warn(c.CANNOT_USE_OPTION+"\n	"+b+"-method="+a.method),
a.postBody&&("xhr"!==d||"get"===a.method)&&jindo.$Jindo._warn(c.CANNOT_USE_OPTION+"\n	"+a.method+"-postBody="+a.postBody);
var e={xhr:"onload|timeout|ontimeout|onerror|async|method|postBody|type",jsonp:"onload|timeout|ontimeout|onerror|jsonp_charset|callbackid|callbackname|method|type",
flash:"onload|timeout|ontimeout|onerror|sendheader|decode|method|type",iframe:"onload|proxy|method|type"
},f=[],g=0;for(f[g++]in a);for(var h=e[d],g=0,i=f.length;i>g;g++)-1==h.indexOf(f[g])&&jindo.$Jindo._warn(c.CANNOT_USE_OPTION+"\n	"+d+"-"+f[g]);
},jindo.$Ajax.prototype._onload=function(a){var b=jindo.$Ajax,c=jindo.$Jindo;return a?function(){var a,d=this._request.status,e=4==this._request.readyState&&(200==d||0==d);
if(4==this._request.readyState){if(!e&&c.isFunction(this._options.onerror)?this._options.onerror(new b.Response(this._request)):this._is_abort||(a=this._options.onload(new b.Response(this._request))),
c.isFunction(this._oncompleted)&&this._oncompleted(e,a),"xhr"==this._options.type){this.abort();try{
delete this._request.onload}catch(f){this._request.onload=void 0}}delete this._request.onreadystatechange;
}}:function(){var a,d=this._request.status,e=4==this._request.readyState&&(200==d||0==d);4==this._request.readyState&&(!e&&c.isFunction(this._options.onerror)?this._options.onerror(new b.Response(this._request)):a=this._options.onload(new b.Response(this._request)),
this._status--,c.isFunction(this._oncompleted)&&this._oncompleted(e,a))}}(jindo._p_._JINDO_IS_IE),jindo.$Ajax.prototype.request=function(a){
var b=jindo.$Jindo,c=b.checkVarType(arguments,{"4voi":[],"4obj":[b._F("oData:Hash+")],"4str":["sData:String+"]
},"$Ajax#request");this._status++;var d,e,f=this,g=this._request,h=this._options,i=[],d="",j=null,k=this._url;
this._is_abort=!1;var l=h.type.toUpperCase(),m=h.method.toUpperCase();if(h.postBody&&"XHR"==l&&"GET"!=m)d=c+""=="4str"?c.sData:c+""=="4obj"?jindo.$Json(c.oData).toString():null;else switch(c+""){
case"4voi":d=null;break;case"4obj":var a=c.oData;for(var n in a)if(a.hasOwnProperty(n))if(e=a[n],b.isFunction(e)&&(e=e()),
b.isArray(e)||jindo.$A&&e instanceof jindo.$A){e instanceof jindo.$A&&(e=e._array);for(var o=0;o<e.length;o++)i[i.length]=n+"="+encodeURIComponent(e[o]);
}else i[i.length]=n+"="+encodeURIComponent(e);d=i.join("&")}if(d&&"XHR"==l&&"GET"==m&&(k+=-1==k.indexOf("?")?"?":"&",
k+=d,d=null),"XHR"==l&&h.async?g.open(m,k,h.async):"XHR"==l?g.open(m,k,!1):g.open(m,k),"XHR"==l&&"POST"==m&&g.setRequestHeader("If-Modified-Since","Thu, 1 Jan 1970 00:00:00 GMT"),
"XHR"==l||"IFRAME"==l||"FLASH"==l&&h.sendheader){this._headers["Content-Type"]||g.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"),
g.setRequestHeader("charset","utf-8"),this._headers["X-Requested-With"]||g.setRequestHeader("X-Requested-With","XMLHttpRequest");
for(var p in this._headers)if(this._headers.hasOwnProperty(p)){if("function"==typeof this._headers[p])continue;
g.setRequestHeader(p,String(this._headers[p]))}}if(!g.addEventListener||jindo._p_._JINDO_IS_OP||jindo._p_._JINDO_IS_IE)if(void 0!==g.onload)g.onload=function(a){
4!=g.readyState||f._is_abort||(clearTimeout(j),j=void 0,f._onload(a))};else{var q=jindo._p_._j_ag.match(/(?:MSIE) ([0-9.]+)/);
if(q&&6==q[1]&&h.async){var r=function(a){4!=g.readyState||f._is_abort||(j&&(clearTimeout(j),j=void 0),
f._onload(a),clearInterval(f._interval),f._interval=void 0)};this._interval=setInterval(r,300)}else g.onreadystatechange=function(a){
4==g.readyState&&(clearTimeout(j),j=void 0,f._onload(a))}}else this._loadFunc&&g.removeEventListener("load",this._loadFunc,!1),
this._loadFunc=function(a){clearTimeout(j),j=void 0,f._onload(a)},g.addEventListener("load",this._loadFunc,!1);
return h.timeout>0&&(this._timer&&clearTimeout(this._timer),j=setTimeout(function(){f._is_abort=!0,f._interval&&(clearInterval(f._interval),
f._interval=void 0);try{g.abort()}catch(a){}h.ontimeout(g),b.isFunction(f._oncompleted)&&f._oncompleted(!1);
},1e3*h.timeout),this._timer=j),this._test_url=k,g.send(d),this},jindo.$Ajax.prototype.isIdle=function(){
return 0==this._status},jindo.$Ajax.prototype.abort=function(){try{this._interval&&clearInterval(this._interval),
this._timer&&clearTimeout(this._timer),this._interval=void 0,this._timer=void 0,this._is_abort=!0,this._request.abort();
}finally{this._status--}return this},jindo.$Ajax.prototype.url=function(){var a=g_checkVarType(arguments,{
g:[],s:["sURL:String+"]},"$Ajax#url");switch(a+""){case"g":return this._url;case"s":return this._url=a.sURL,
this}},jindo.$Ajax.prototype.option=function(){var a=g_checkVarType(arguments,{s4var:["sKey:String+","vValue:Variant"],
s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax#option");switch(a+""){case"s4var":a.oOption={},a.oOption[a.sKey]=a.vValue;
case"s4obj":var b=a.oOption;try{for(var c in b)b.hasOwnProperty(c)&&(this._options[c]="onload"===c||"ontimeout"===c||"onerror"===c?jindo.$Fn(b[c],this).bind():b[c]);
}catch(d){}break;case"g":return this._options[a.sKey]}return jindo.$Ajax._validationOption(this._options,"$Ajax#option"),
this},jindo.$Ajax.prototype.header=function(){"jsonp"===this._options.type&&jindo.$Jindo._warn("");var a=g_checkVarType(arguments,{
s4str:["sKey:String+","sValue:String+"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax#option");switch(a+""){
case"s4str":this._headers[a.sKey]=a.sValue;break;case"s4obj":var b=a.oOption;try{for(var c in b)b.hasOwnProperty(c)&&(this._headers[c]=b[c]);
}catch(d){}break;case"g":return this._headers[a.sKey]}return this},jindo.$Ajax.Response=function(a){
this._response=a,this._regSheild=/^for\(;;\);/},jindo.$Ajax.Response.prototype.xml=function(){return this._response.responseXML;
},jindo.$Ajax.Response.prototype.text=function(){return this._response.responseText.replace(this._regSheild,"");
},jindo.$Ajax.Response.prototype.status=function(){var a=this._response.status;return 0==a?200:a},jindo.$Ajax.Response.prototype.readyState=function(){
return this._response.readyState},jindo.$Ajax.Response.prototype.json=function(){if(this._response.responseJSON)return this._response.responseJSON;
if(this._response.responseText)try{return eval("("+this.text()+")")}catch(e){throw new jindo.$Error(jindo.$Except.PARSE_ERROR,"$Ajax#json");
}return{}},jindo.$Ajax.Response.prototype.header=function(a){var b=g_checkVarType(arguments,{"4str":["name:String+"],
"4voi":[]},"$Ajax.Response#header");switch(b+""){case"4str":return this._response.getResponseHeader(a);
case"4voi":return this._response.getAllResponseHeaders()}};var klass=jindo.$Class;jindo.$Ajax.RequestBase=klass({
_respHeaderString:"",callbackid:"",callbackname:"",responseXML:null,responseJSON:null,responseText:"",
status:404,readyState:0,$init:function(){},onload:function(){},abort:function(){},open:function(){},
send:function(){},setRequestHeader:function(a,b){g_checkVarType(arguments,{"4str":["sName:String+","sValue:String+"]
},"$Ajax.RequestBase#setRequestHeader"),this._headers[a]=b},getResponseHeader:function(a){return g_checkVarType(arguments,{
"4str":["sName:String+"]},"$Ajax.RequestBase#getResponseHeader"),this._respHeaders[a]||""},getAllResponseHeaders:function(){
return this._respHeaderString},_getCallbackInfo:function(){var a="";if(""!=this.option("callbackid")){
var b=0;do a="_"+this.option("callbackid")+"_"+b,b++;while(window["__"+jindo._p_.jindoName+"_callback"][a]);
}else do a="_"+Math.floor(1e4*Math.random());while(window["__"+jindo._p_.jindoName+"_callback"][a]);return""==this.option("callbackname")&&this.option("callbackname","_callback"),
{callbackname:this.option("callbackname"),id:a,name:"window.__"+jindo._p_.jindoName+"_callback."+a}}
}),jindo.$Ajax.JSONPRequest=klass({_headers:{},_respHeaders:{},_script:null,_onerror:null,$init:function(a){
this.option=a},_callback:function(a){this._onerror&&(clearTimeout(this._onerror),this._onerror=null);
var b=this;this.responseJSON=a,this.onload(this),setTimeout(function(){b.abort()},10)},abort:function(){
if(this._script)try{this._script.parentNode.removeChild(this._script)}catch(a){}},open:function(a,b){
g_checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.JSONPRequest#open"),this.responseJSON=null,
this._url=b},send:function(a){var b=g_checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]
},"$Ajax.JSONPRequest#send"),c=this,d=this._getCallbackInfo(),e=document.getElementsByTagName("head")[0];
this._script=document.createElement("script"),this._script.type="text/javascript",this._script.charset=this.option("jsonp_charset"),
e?e.appendChild(this._script):document.body&&document.body.appendChild(this._script),window["__"+jindo._p_.jindoName+"_callback"][d.id]=function(a){
try{c.readyState=4,c.status=200,c._callback(a)}finally{delete window["__"+jindo._p_.jindoName+"_callback"][d.id],
delete window["__"+jindo._p_.jindoName+"2_callback"][d.id]}},window["__"+jindo._p_.jindoName+"2_callback"][d.id]=function(a){
window["__"+jindo._p_.jindoName+"_callback"][d.id](a)};var f=jindo.$Agent(navigator),g=function(){c.responseJSON||(c.readyState=4,
c.status=500,c._onerror=setTimeout(function(){c._callback(null)},200))};f.navigator().ie?this._script.onreadystatechange=function(){
"loaded"==this.readyState&&(g(),this.onreadystatechange=null)}:this._script.onload=this._script.onerror=function(){
g(),this.onerror=null,this.onload=null};var h="&";switch(-1==this._url.indexOf("?")&&(h="?"),b+""){case"4voi":
case"4nul":a="";break;case"4str":a="&"+a}this._test_url=this._script.src=this._url+h+d.callbackname+"="+d.name+a;
}}).extend(jindo.$Ajax.RequestBase),jindo.$Ajax.SWFRequest=klass({$init:function(a){this.option=a},_headers:{},
_respHeaders:{},_getFlashObj:function(){var a,b=jindo.$Ajax.SWFRequest._tmpId,c=jindo.$Agent(window.navigator).navigator();
return a=c.ie&&9==c.version?_getElementById(document,b):window.document[b],(this._getFlashObj=function(){
return a})()},_callback:function(a,b,c){if(this.readyState=4,jindo.$Jindo.isNumeric(a)?this.status=a:1==a&&(this.status=200),
200==this.status){if(jindo.$Jindo.isString(b))try{this.responseText=this.option("decode")?decodeURIComponent(b):b,
this.responseText&&""!=this.responseText||(this.responseText=b)}catch(d){"URIError"==d.name&&(this.responseText=b,
this.responseText&&""!=this.responseText||(this.responseText=b))}jindo.$Jindo.isHash(c)&&(this._respHeaders=c);
}this.onload(this)},open:function(a,b){g_checkVarType(arguments,{"4str":["method:String+","url:String+"]
},"$Ajax.SWFRequest#open");this._url=b,this._method=a},send:function(a){function b(a){switch(typeof a){
case"string":return'"'+a.replace(/\"/g,'\\"')+'"';case"number":return a;case"object":var d="",e=[];if(c.isArray(a)){
for(var f=0;f<a.length;f++)e[f]=b(a[f]);d="["+e.join(",")+"]"}else{for(var g in a)a.hasOwnProperty(g)&&(e[e.length]=b(g)+":"+b(a[g]));
d="{"+e.join(",")+"}"}return d;default:return'""'}}{var c=jindo.$Jindo;c.checkVarType(arguments,{"4voi":[],
"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.SWFRequest#send")}this.responseXML=!1,this.responseText="";
var d=this,e={},f=this._getCallbackInfo(),g=this._getFlashObj();a=(a||"").split("&");for(var h,i=0;i<a.length;i++)h=a[i],
pos=h.indexOf("="),key=h.substring(0,pos),val=h.substring(pos+1),e[key]=decodeURIComponent(val);this._current_callback_id=f.id,
window["__"+jindo._p_.jindoName+"_callback"][f.id]=function(a,b){try{d._callback(a,b)}finally{delete window["__"+jindo._p_.jindoName+"_callback"][f.id];
}},window["__"+jindo._p_.jindoName+"2_callback"][f.id]=function(a){window["__"+jindo._p_.jindoName+"_callback"][f.id](a);
};var j={url:this._url,type:this._method,data:e,charset:"UTF-8",callback:f.name,header_json:this._headers
};g.requestViaFlash(b(j))},abort:function(){this._current_callback_id&&(window["__"+jindo._p_.jindoName+"_callback"][this._current_callback_id]=function(){
delete window["__"+jindo._p_.jindoName+"_callback"][info.id],delete window["__"+jindo._p_.jindoName+"2_callback"][info.id];
},window["__"+jindo._p_.jindoName+"2_callback"][this._current_callback_id]=function(a){window["__"+jindo._p_.jindoName+"_callback"][this._current_callback_id](a);
})}}).extend(jindo.$Ajax.RequestBase),jindo.$Ajax.SWFRequest.write=function(a){var b=jindo.$Jindo.checkVarType(arguments,{
"4voi":[],"4str":["data:String+"]},"<static> $Ajax.SWFRequest#write");switch(b+""){case"4voi":a="./ajax.swf";
}var c=jindo.$Ajax;c.SWFRequest._tmpId="tmpSwf"+(new Date).getMilliseconds()+Math.floor(1e5*Math.random());
var d="jindo.$Ajax.SWFRequest.loaded",e="https:"==location.protocol?"https:":"http:",f=jindo._p_._JINDO_IS_IE?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':"";
c._checkFlashLoad();var g=document.body,h=g.childNodes,i=jindo.$("<div style='position:absolute;top:-1000px;left:-1000px' tabindex='-1'>/<div>");
i.innerHTML='<object tabindex="-1" id="'+c.SWFRequest._tmpId+'" width="1" height="1" '+f+' codebase="'+e+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="movie" value="'+a+'"><param name = "FlashVars" value = "activeCallback='+d+'" /><param name = "allowScriptAccess" value = "always" /><embed tabindex="-1" name="'+c.SWFRequest._tmpId+'" src="'+a+'" type="application/x-shockwave-flash" pluginspage="'+e+'://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true" FlashVars="activeCallback='+d+'"></embed></object>',
h.length>0?g.insertBefore(i,h[0]):g.appendChild(i)},jindo.$Ajax._checkFlashLoad=function(){jindo.$Ajax._checkFlashKey=setTimeout(function(){
jindo.$Ajax.SWFRequest.onerror()},5e3),jindo.$Ajax._checkFlashLoad=function(){}},jindo.$Ajax.SWFRequest.activeFlash=!1,
jindo.$Ajax.SWFRequest.onload=function(){},jindo.$Ajax.SWFRequest.onerror=function(){},jindo.$Ajax.SWFRequest.loaded=function(){
clearTimeout(jindo.$Ajax._checkFlashKey),jindo.$Ajax.SWFRequest.activeFlash=!0,jindo.$Ajax.SWFRequest.onload();
},jindo.$Ajax.FrameRequest=klass({_headers:{},_respHeaders:{},_frame:null,_domain:"",$init:function(a){
this.option=a},_callback:function(a,b,c){var d=this;this.readyState=4,this.status=200,this.responseText=b,
this._respHeaderString=c,c.replace(/^([\w\-]+)\s*:\s*(.+)$/m,function(a,b,c){d._respHeaders[b]=c}),this.onload(this),
setTimeout(function(){d.abort()},10)},abort:function(){if(this._frame)try{this._frame.parentNode.removeChild(this._frame);
}catch(a){}},open:function(a,b){g_checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.FrameRequest#open");
var c=/https?:\/\/([a-z0-9_\-\.]+)/i,d=document.location.toString().match(c);this._method=a,this._url=b,
this._remote=String(b).match(/(https?:\/\/[a-z0-9_\-\.]+)(:[0-9]+)?/i)[0],this._frame=null,this._domain=null!=d&&d[1]!=document.domain?document.domain:"";
},send:function(a){g_checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.FrameRequest#send");
this.responseXML="",this.responseText="";var b=this,c=/https?:\/\/([a-z0-9_\-\.]+)/i,d=this._getCallbackInfo(),e=[];
e.push(this._remote+"/ajax_remote_callback.html?method="+this._method);var f=[];window["__"+jindo._p_.jindoName+"_callback"][d.id]=function(a,c,e){
try{b._callback(a,c,e)}finally{delete window["__"+jindo._p_.jindoName+"_callback"][d.id],delete window["__"+jindo._p_.jindoName+"2_callback"][d.id];
}},window["__"+jindo._p_.jindoName+"2_callback"][d.id]=function(a,b,c){window["__"+jindo._p_.jindoName+"_callback"][d.id](a,b,c);
};for(var g in this._headers)this._headers.hasOwnProperty(g)&&(f[f.length]="'"+g+"':'"+this._headers[g]+"'");
f="{"+f.join(",")+"}",e.push("&id="+d.id),e.push("&header="+encodeURIComponent(f)),e.push("&proxy="+encodeURIComponent(this.option("proxy"))),
e.push("&domain="+this._domain),e.push("&url="+encodeURIComponent(this._url.replace(c,""))),e.push("#"+encodeURIComponent(a));
var h=this._frame=document.createElement("iframe"),i=h.style;i.position="absolute",i.visibility="hidden",
i.width="1px",i.height="1px";var j=document.body||document.documentElement;j.firstChild?j.insertBefore(h,j.firstChild):j.appendChild(h),
"undefined"!=typeof MSApp&&MSApp.addPublicLocalApplicationUri(this.option("proxy")),h.src=e.join("");
}}).extend(jindo.$Ajax.RequestBase),jindo.$Ajax.Queue=function(a){var b=arguments.callee;if(!(this instanceof b))return new b(a||{});
var c=g_checkVarType(arguments,{"4voi":[],"4obj":["option:Hash+"]},"$Ajax.Queue");a=c.option,this._options={
async:!1,useResultAsParam:!1,stopOnFailure:!1},this.option(a),this._queue=[]},jindo.$Ajax.Queue.prototype.option=function(){
var a=g_checkVarType(arguments,{s4str:["sKey:String+","sValue:Variant"],s4obj:["oOption:Hash+"],g:["sKey:String+"]
},"$Ajax.Queue#option");switch(a+""){case"s4str":this._options[a.sKey]=a.sValue;break;case"s4obj":var b=a.oOption;
try{for(var c in b)b.hasOwnProperty(c)&&(this._options[c]=b[c])}catch(d){}break;case"g":return this._options[a.sKey];
}return this},jindo.$Ajax.Queue.prototype.add=function(a,b){var c=g_checkVarType(arguments,{"4obj":["oAjax:Hash+"],
"4obj2":["oAjax:Hash+","oPram:Hash+"]},"$Ajax.Queue");switch(c+""){case"4obj2":b=c.oPram}return this._queue.push({
obj:a,param:b}),this},jindo.$Ajax.Queue.prototype.request=function(){return this._requestAsync.apply(this,this.option("async")?[]:[0]),
this},jindo.$Ajax.Queue.prototype._requestSync=function(a,b){var c=this,d=this._queue;d.length>a+1&&(d[a].obj._oncompleted=function(b,d){
(!c.option("stopOnFailure")||b)&&c._requestSync(a+1,d)});var e=d[a].param||{};if(this.option("useResultAsParam")&&b)try{
for(var f in b)void 0===e[f]&&b.hasOwnProperty(f)&&(e[f]=b[f])}catch(g){}d[a].obj.request(e)},jindo.$Ajax.Queue.prototype._requestAsync=function(){
for(var a=0;a<this._queue.length;a++)this._queue[a].obj.request(this._queue[a].param||{})},jindo.$Date=function(a){
var b=arguments,c=arguments.callee;if(a&&a instanceof c)return a;if(!(this instanceof c)){for(var d="",e=0,f=b.length;f>e;e++)d+="a["+e+"],";
var g=new Function("cl","a","return new cl("+d.replace(/,$/,"")+");");try{return jindo.$Jindo._maxWarn(arguments.length,7,"$Date"),
g(c,b)}catch(h){if(h instanceof TypeError)return null;throw h}}var i=g_checkVarType(arguments,{"4voi":[],
"4str":["src:String+"],"4num":["src:Numeric"],"4dat":["src:Date+"],"4num2":["src:Numeric","src:Numeric"],
"4num3":["src:Numeric","src:Numeric","src:Numeric"],"4num4":["src:Numeric","src:Numeric","src:Numeric","src:Numeric"],
"4num5":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num6":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"],
"4num7":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"]
},"$Date");switch(i+""){case"4voi":this._date=new Date;break;case"4num":this._date=new Date(1*a);break;
case"4str":this._date=/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)))/.test(a)?jindo.$Date._makeISO(a):c.parse(a);
break;case"4dat":(this._date=new Date).setTime(a.getTime()),this._date.setMilliseconds(a.getMilliseconds());
break;case"4num2":case"4num3":case"4num4":case"4num5":case"4num6":case"4num7":for(var e=0;7>e;e++)jindo.$Jindo.isNumeric(b[e])||(b[e]=1);
this._date=new Date(b[0],b[1],b[2],b[3],b[4],b[5],b[6])}this._names={};for(var e in jindo.$Date.names)jindo.$Date.names.hasOwnProperty(e)&&(this._names[e]=jindo.$Date.names[e]);
},jindo.$Date._makeISO=function(a){var b=a.match(/(\d{4})(?:-?(\d\d)(?:-?(\d\d)(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|(?:([-+])(\d\d)(?::?(\d\d))?)?)?)?)?)?/),c=parseInt(b[4]||0,10),d=parseInt(b[5]||0,10);
return"Z"==b[8]?c+=jindo.$Date.utc:("+"==b[9]||"-"==b[9])&&(c+=jindo.$Date.utc-parseInt(b[9]+b[10],10),
d+=parseInt(b[9]+b[11],10)),new Date(b[1]||0,parseInt(b[2]||0,10)-1,b[3]||0,c,d,b[6]||0,b[7]||0)},jindo.$Date._paramCheck=function(a,b){
return g_checkVarType(a,{s:["nParm:Numeric"],g:[]},"$Date#"+b)},jindo.$Date.names={month:["January","Febrary","March","April","May","June","July","August","September","October","Novermber","December"],
s_month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
s_day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ampm:["AM","PM"]},jindo.$Date.utc=9,jindo.$Date.now=function(){
return this.now=Date.now?function(){return Date.now()}:function(){return+new Date},this.now()},jindo.$Date.prototype.name=function(a,b){
var c=g_checkVarType(arguments,{s4str:["sKey:String+","aValue:Array+"],s4obj:["oObject:Hash+"],g:["sKey:String+"]
},"$Date#name");switch(c+""){case"s4str":this._names[a]=b;break;case"s4obj":a=c.oObject;for(var d in a)a.hasOwnProperty(d)&&(this._names[d]=a[d]);
break;case"g":return this._names[a]}return this},jindo.$Date.parse=function(a){var b=(g_checkVarType(arguments,{
"4str":["sKey:String+"]},"$Date#parse"),new Date(Date.parse(a)));if(isNaN(b)||"Invalid Date"==b)throw new jindo.$Error(jindo.$Except.INVALID_DATE,"$Date#parse");
return b},jindo.$Date.prototype.$value=function(){return this._date},jindo.$Date.prototype.format=function(a){
var b=g_checkVarType(arguments,{"4str":["sFormat:String+"]},"$Date#format");a=b.sFormat;var c={},d=this._date,e=this._names,f=this;
return(a||"").replace(/[a-z]/gi,function(a){if(void 0!==c[a])return c[a];switch(a){case"d":case"j":return c.j=d.getDate(),
c.d=(c.j>9?"":"0")+c.j,c[a];case"l":case"D":case"w":case"N":return c.w=d.getDay(),c.N=c.w?c.w:7,c.D=e.s_day[c.w],
c.l=e.day[c.w],c[a];case"S":return(c.S=["st","nd","rd"][d.getDate()])?c.S:c.S="th";case"z":return c.z=Math.floor((d.getTime()-new Date(d.getFullYear(),0,1).getTime())/864e5),
c.z;case"m":case"n":return c.n=d.getMonth()+1,c.m=(c.n>9?"":"0")+c.n,c[a];case"L":return c.L=f.isLeapYear(),
c.L;case"o":case"Y":case"y":return c.o=c.Y=d.getFullYear(),c.y=(c.o+"").substr(2),c[a];case"a":case"A":
case"g":case"G":case"h":case"H":return c.G=d.getHours(),c.g=(c.g=c.G%12)?c.g:12,c.A=c.G<12?e.ampm[0]:e.ampm[1],
c.a=c.A.toLowerCase(),c.H=(c.G>9?"":"0")+c.G,c.h=(c.g>9?"":"0")+c.g,c[a];case"i":return c.i=((c.i=d.getMinutes())>9?"":"0")+c.i,
c.i;case"s":return c.s=((c.s=d.getSeconds())>9?"":"0")+c.s,c.s;case"u":return c.u=d.getMilliseconds(),
c.u;case"U":return c.U=f.time(),c.U;default:return a}})},jindo.$Date.prototype.time=function(a){var b=jindo.$Date._paramCheck(arguments,"time");
switch(a=b.nParm,b+""){case"s":return this._date.setTime(a),this;case"g":return this._date.getTime();
}},jindo.$Date.prototype.year=function(a){var b=jindo.$Date._paramCheck(arguments,"year");switch(a=b.nParm,
b+""){case"s":return this._date.setFullYear(a),this;case"g":return this._date.getFullYear()}},jindo.$Date.prototype.month=function(a){
var b=jindo.$Date._paramCheck(arguments,"month");switch(a=b.nParm,b+""){case"s":return this._date.setMonth(a),
this;case"g":return this._date.getMonth()}},jindo.$Date.prototype.date=function(a){var b=jindo.$Date._paramCheck(arguments,"date");
switch(a=b.nParm,b+""){case"s":return this._date.setDate(a),this;case"g":return this._date.getDate();
}},jindo.$Date.prototype.day=function(){return this._date.getDay()},jindo.$Date.prototype.hours=function(a){
var b=jindo.$Date._paramCheck(arguments,"hours");switch(a=b.nParm,b+""){case"s":return this._date.setHours(a),
this;case"g":return this._date.getHours()}},jindo.$Date.prototype.minutes=function(a){var b=jindo.$Date._paramCheck(arguments,"minutes");
switch(a=b.nParm,b+""){case"s":return this._date.setMinutes(a),this;case"g":return this._date.getMinutes();
}},jindo.$Date.prototype.seconds=function(a){var b=jindo.$Date._paramCheck(arguments,"seconds");switch(a=b.nParm,
b+""){case"s":return this._date.setSeconds(a),this;case"g":return this._date.getSeconds()}},jindo.$Date.prototype.isLeapYear=function(){
var a=this._date.getFullYear();return!((a%4||!(a%100))&&a%400)},jindo.$Date.prototype.compare=function(a,b){
var c=g_checkVarType(arguments,{"4dat":["oDate:Date+"],"4str":["oDate:Date+","sType:String+"]},"$Date#compare");
return a=c.oDate,b=c.sType,b?"s"===b?Math.floor(a/1e3)-Math.floor(this._date/1e3):"i"===b?Math.floor(Math.floor(a/1e3)/60)-Math.floor(Math.floor(this._date/1e3)/60):"h"===b?Math.floor(Math.floor(Math.floor(a/1e3)/60)/60)-Math.floor(Math.floor(Math.floor(this._date/1e3)/60)/60):"d"===b?Math.floor(Math.floor(Math.floor(Math.floor(a/1e3)/60)/60)/24)-Math.floor(Math.floor(Math.floor(Math.floor(this._date/1e3)/60)/60)/24):"m"===b?a.getMonth()-this._date.getMonth():"y"===b?a.getFullYear()-this._date.getFullYear():void 0:a-this._date;
},jindo.$Cookie=function(){{var a=arguments.callee;a._cached}if(a._cached)return a._cached;if(!(this instanceof a))try{
return jindo.$Jindo._maxWarn(arguments.length,1,"$Cookie"),arguments.length>0?new a(arguments[0]):new a;
}catch(b){if(b instanceof TypeError)return null;throw b}a._cached=this;var c=g_checkVarType(arguments,{
"4voi":[],"4bln":["bURIComponent:Boolean"]},"$Cookie");switch(c+""){case"4voi":this._bURIComponent=!1;
break;case"4bln":this._bURIComponent=c.bURIComponent}},jindo.$Cookie.prototype.keys=function(){for(var a=document.cookie.split(";"),b=/^\s+|\s+$/g,c=new Array,d=0;d<a.length;d++)c[c.length]=a[d].substr(0,a[d].indexOf("=")).replace(b,"");
return c},jindo.$Cookie.prototype.get=function(a){for(var b,c,d=(g_checkVarType(arguments,{"4str":["sName:String+"]
},"$Cookie#get"),document.cookie.split(/\s*;\s*/)),e=new RegExp("^(\\s*"+a+"\\s*=)"),f=0;f<d.length;f++)if(e.test(d[f]))return b=d[f].substr(RegExp.$1.length),
c=this._bURIComponent&&jindo.$Jindo.isNull(b.match(/%u\w{4}/))?decodeURIComponent(b):unescape(b);return null;
},jindo.$Cookie.prototype.set=function(a,b,c,d,e){var f,g=jindo.$Jindo,h=g.checkVarType(arguments,{"4str":["sName:String+","sValue:String+"],
day_for_string:["sName:String+","sValue:String+","nDays:Numeric"],domain_for_string:["sName:String+","sValue:String+","nDays:Numeric","sDomain:String+"],
path_for_string:["sName:String+","sValue:String+","nDays:Numeric","sDomain:String+","sPath:String+"]
},"$Cookie#set"),i="";return h+""!="4str"&&0!==c&&(i=";expires="+new Date((new Date).getTime()+1e3*c*60*60*24).toGMTString()),
g.isUndefined(d)&&(d=""),g.isUndefined(e)&&(e="/"),f=this._bURIComponent?encodeURIComponent(b):escape(b),
document.cookie=a+"="+f+i+"; path="+e+(d?"; domain="+d:""),this},jindo.$Cookie.prototype.remove=function(a){
for(var b=jindo.$Jindo,c=(b.checkVarType(arguments,{"4str":["sName:String+"],domain_for_string:["sName:String+","sDomain:String+"],
path_for_string:["sName:String+","sDomain:String+","sPath:String+"]},"$Cookie#remove"),jindo._p_._toArray(arguments)),d=[],e=0,f=c.length;f>e;e++)d.push(c[e]),
0==e&&(d.push(""),d.push(-1));return b.isNull(this.get(a))||this.set.apply(this,d),this},jindo.$Template=function(a,b){
var c,d=null,e="",f=arguments.callee;if(a instanceof f)return a;if(!(this instanceof f))try{return jindo.$Jindo._maxWarn(arguments.length,2,"$Template"),
new f(a||"",b||"default")}catch(g){if(g instanceof TypeError)return null;throw g}var h=g_checkVarType(arguments,{
"4str":["str:String+"],"4ele":["ele:Element+"],"4str3":["str:String+","sEngineName:String+"],"4ele3":["ele:Element+","sEngineName:String+"]
},"$Template");switch((d=_getElementById(document,a)||a)&&d.tagName&&(e=d.tagName.toUpperCase())&&("TEXTAREA"==e||"SCRIPT"==e&&"text/template"==d.getAttribute("type"))&&(a=(d.value||d.innerHTML).replace(/^\s+|\s+$/g,"")),
this._str=a+"",c="default",h+""){case"4str3":case"4ele3":c=h.sEngineName}this._compiler=jindo.$Template.getEngine(c);
},jindo.$Template._aEngines={},jindo.$Template._cache={},jindo.$Template.splitter=/(?!\\)[\{\}]/g,jindo.$Template.pattern=/^(?:if (.+)|elseif (.+)|for (?:(.+)\:)?(.+) in (.+)|(else)|\/(if|for)|=(.+)|js (.+)|set (.+)|gset (.+))$/,
jindo.$Template.addEngine=function(){var a=g_checkVarType(arguments,{"4fun":["sEngineName:String+","fEngine:Function+"]
},"$Template#addEngine");jindo.$Template._aEngines[a.sEngineName]=a.fEngine},jindo.$Template.getEngine=function(){
var a=g_checkVarType(arguments,{"4str":["sEngineName:String+"]},"$Template#getEngine");return jindo.$Template._aEngines[a.sEngineName];
},jindo.$Template.prototype.process=function(){var a,b=g_checkVarType(arguments,{"4obj":["data:Hash+"],
"4voi":[]},"$Template#process");return jindo.$Template._cache&&jindo.$Template._cache[this._str]?(a=jindo.$Template._cache[this._str])(b+""=="for_void"?"":b.data):(jindo.$Template._cache[this._str]=a=this._compiler(this._str),
a(b+""=="for_void"?"":b.data))},jindo.$Template.addEngine("default",function(a){var b,c="",d="",e="",f=(" "+a+" ").replace(/\\{/g,d).replace(/\\}/g,e).replace(/(?!\\)\}\{/g,"}"+c+"{").split(jindo.$Template.splitter),g=f.length,h={
'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","	":"\\t","\f":"\\f"},i=[/(["'](?:(?:\\.)+|[^\\["']+)*["']|[a-zA-Z_](?:[\w\.]|\[(?:.*?)\])*)/g,/[\n\r\t\f"\\]/g,/^\s+/,/\s+$/,/#/g],j=[function(a){
return'"'==a.substring(0,1)||"'"==a.substring(0,1)||"null"==a||"false"==a||"true"==a?a:"d."+a},function(a){
return h[a]||a},"",""],k=0;if(f[0]=f[0].substr(1),f[g-1]=f[g-1].substr(0,f[g-1].length-1),2>g)return function(a){
return function(){return a}}(f[0]);for(f=f.reverse();g--;)g%2?f[g]=f[g].replace(jindo.$Template.pattern,function(){
var a=arguments;if(a[11])return a[11].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g,function(){
var a=arguments,b="var "+a[1]+"=";return b+=a[2]?a[2]:a[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(a){
return"="==a.substring(0,1)?"d."+a.replace("=",""):a})})+";";if(a[10])return a[10].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g,function(){
var a=arguments,b="d."+a[1]+"=";return b+=a[2]?"d."+a[2]:a[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(a){
return"="==a.substring(0,1)?"d."+a.replace("=",""):a})})+";";if(a[9])return"s[i++] = "+a[9].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(a){
return"="==a.substring(0,1)?"d."+a.replace("=",""):a})+";";if(a[8])return"s[i++] = d."+a[8]+";";if(a[1])return"if("+a[1].replace(i[0],j[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){";
if(a[2])return"}else if("+a[2].replace(i[0],j[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){";
if(a[5]){b=a[4];var c=[];return c.push("var t# = d."+a[5]+" || {},"),c.push("p# = "+jindo._p_.jindoName+".$Jindo.isArray(t#),"),
c.push("i# = 0,"),c.push("j#,"),c.push("leng#,"),c.push("aProp# = [],"),c.push("sProp#;"),c.push("if(p#){"),
c.push("	leng# = t#.length;"),c.push("	for(j# = 0; j# < leng#; j#++){aProp#.push(j#);}"),c.push("}else{"),
c.push("	for(j# in t#){aProp#.push(j#);}"),c.push("}"),c.push("leng# = aProp#.length;"),c.push("for(var x# = 0; x# < leng#; x#++){"),
c.push("	sProp# = aProp#[x#];"),c.push("	if(!p# && !t#.hasOwnProperty(sProp#)){"),c.push("		continue;"),
c.push("	}"),c.push("	if((p# && isNaN(i# = parseInt(sProp#, 10))) || (!p# && !t#.propertyIsEnumerable(sProp#))){"),
c.push("		continue;"),c.push("	}"),c.push("	d."+a[4]+" = t#[sProp#];"),c.push(a[3]?"d."+a[3]+" = sProp#;":""),
c.join("").replace(i[4],k++)}return a[6]?"}else{":a[7]?"for"==a[7]?"delete d."+b+"; };":"};":a[0]}):f[g]==c?f[g]="":f[g]&&(f[g]='s[i++] = "'+f[g].replace(i[1],j[1])+'";');
f=f.reverse().join("").replace(new RegExp(d,"g"),"{").replace(new RegExp(e,"g"),"}");var l=[];return l.push("d = d || {};"),
l.push("var s = [], i = 0;"),l.push(f),l.push('return s.join("");'),f=new Function("d",""+l.join(""));
}),jindo.$Template.addEngine("micro",function(a){return new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");
}),jindo.$Template.addEngine("handlebars",function(a){if("undefined"==typeof Handlebars)throw new jindo.$Error(jindo.$Except.NOT_FOUND_HANDLEBARS,"$Template#process");
return Handlebars.compile(a)}),jindo.$Template.addEngine("simple",function(a){return function(b){return a.replace(/\{\{([^{}]*)\}\}/g,function(a,c){
return"undefined"==typeof b[c]?"":b[c]})}});for(var aClass=["$Agent","$Ajax","$A","$Cookie","$Date","$Document","$Element","$ElementList","$Event","$Form","$Fn","$H","$Json","$S","$Template","$Window"],sClass,oClass,i=0,l=aClass.length;l>i;i++)sClass=aClass[i],
oClass=jindo[sClass],oClass&&(oClass.addExtension=function(a){return function(b,c){return jindo._p_.addExtension(a,b,c),
this}}(sClass));for(var hooks=["$Element","$Event"],i=0,l=hooks.length;l>i;i++){var _className=hooks[i];
jindo[_className]&&(jindo[_className].hook=function(a){var b={};return function(c,d){var e=jindo.$Jindo.checkVarType(arguments,{
g:["sName:String+"],s4var:["sName:String+","vRevisionKey:Variant"],s4obj:["oObj:Hash+"]},"jindo."+a+".hook");
switch(e+""){case"g":return b[e.sName.toLowerCase()];case"s4var":return null==d?delete b[e.sName.toLowerCase()]:b[e.sName.toLowerCase()]=d,
this;case"s4obj":var f=e.oObj;for(var g in f)b[g.toLowerCase()]=f[g];return this}}}(_className))}if(jindo.$Jindo.isUndefined(window)||-1==jindo._p_._j_ag.indexOf("IEMobile")&&jindo._p_._j_ag.indexOf("Mobile")>-1&&jindo._p_._JINDO_IS_SP||new jindo.$Element(window).attach("unload",function(){
jindo.$Element.eventManager.cleanUpAll()}),"function"==typeof define&&define.amd&&define.amd.jindo&&define("jindo",[],function(){
return jindo}),"undefined"!=typeof window)for(prop in jindo)jindo.hasOwnProperty(prop)&&(window[prop]=jindo[prop]);