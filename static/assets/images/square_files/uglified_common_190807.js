function mlog(){if(window.console)for(var a=0;a<arguments.length;a++);}function clickcr(a,b,c,d,e){ccr(null,b,e);
}function ccr(a,b,c){"object"!=typeof c&&(c=window.event),nclk_v2(c,b,"","")}function ccrf(a,b,c,d){
if("all"==mCom.conversationCallType)switch(b="mrd",c=c.replace(/^\*b/,"*t"),mCom.nCurrentFolder){case"0":
case"idomain":c=b+"_got"+c;break;case"all":c=b+"_all"+c;break;default:c=b+"_els"+c}else switch(b||(b=mCom.isReading&&"list"==mCom.vDivideMode?"mrd":"clt"),
mCom.nCurrentFolder){case"0":case"idomain":c=b+"_got"+c;break;case"1":c=b+"_snt"+c;break;case"2":c=b+"_chk"+c;
break;case"3":c=b+"_drf"+c;break;case"4":c=b+"_trs"+c;break;case"5":c=b+"_spm"+c;break;case"6":c=b+"_tom"+c;
break;case"all":c=b+"_all"+c;break;default:c=b+"_els"+c}nclk_v2(d,c,"","")}function setLcs(a,b){try{
if(mEnv&&mEnv.serviceType)var c=mEnv.serviceType;else if(opener&&opener.m&&opener.m.info&&opener.mEnv)var c=opener.mEnv.serviceType;else if(parent.opener&&parent.opener.m&&parent.opener.m.info&&parent.opener.mEnv)var c=parent.opener.mEnv.serviceType;
}catch(d){var c="naver"}if(a||(a=""),"naver"==c){var e="mail";a=window.location.protocol+"//mail.naver.com"+a;
}else{if("nwe"!=c)return;var e="worksmobile_mail";a=window.location.protocol+"//mail.worksmobile.com"+a,
window.lcs_SerName="lcs.worksmobile.com"}var f;if(b)"nwe"===c?(b=b.replace(/_/g,"").toLowerCase(),f={
sti:[e,b,mCom.location].join("_")}):f={sti:[e,b].join("_")};else var f=null;lcs_do(f,a),f=null,a=null;
}function refineTag(a){try{a=decodeURIComponent(encodeURIComponent(a).replace(/\%C2\%A0/g,"%26nbsp%3B"));
}catch(b){}var c=/(<p[^>]*>(((?!<\/p>)[\s\S])*))(<p[^>]*>)/gi;c.test(a)&&(a=a.replace(c,"$1</p>$4"));
var d=/(<\/p>(((?!<p[^>]*>)[\s\S])*))(<\/p>)/gi;d.test(a)&&(a=a.replace(d,"$1<p>$4"));var e=/<p[^>]*>[\s]*<\/p>/gi;
e.test(a)&&(a=a.replace(e,"")),a=a.replace(/<p[^>]*>(((?!<\/p>)[\s\S])*)<\/p>/gi,function(a,b){var c=b;
return c=c.replace(/<\/?\b(SPAN|FONT|B|STRONG|I|EM|U|STRIKE|SUB|SUP)\b[^>]*>/gi,""),c.match(/^[\s\r\n]*$/)?"":a;
});var f=/<br(\s[^>]*)?\/?>((?:(<\/span>|<\/font>))?<\/p>)/gi;f.test(a)&&(a=a.replace(f,"&nbsp;$2"));
var g=/(<div[^>]*>[\s]*)<br>([\s]*<\/div>)/gi;g.test(a)&&(a=a.replace(g,"$1&nbsp;$2"));var h=/<br(\s[^>]*)?\/?>((?:(<\/span>|<\/font>))?<\/div>)/gi;
h.test(a)&&(a=a.replace(h,"&nbsp;$2"));for(var i=/<div(((?!(width|height|background))[^>])*)><\/div>/gi;i.test(a);)a=a.replace(i,"");
return a}!function(a){function b(b,c,e,f,g,h){var i=a.g_nclk_proxy||"";return i&&b.href&&(b.href=i+d.ec(b.href)),
d(b,c,e,f,g,h)}function c(a,b,c,e,f,g){var h,i,j,k=a,l=a;if(a&&"nodeType"in a&&a.nodeType>=1)k=window.event||a;else if(a){
var m=a.srcElement||a.currentTarget||a.target;m&&(l=d.findLink(m))}return f||(f=""),j=d.gcp(l,k),i=d.gl(b,c,e,j,"",0,d.st,f,g),
h=d.l(l,i),d.sd(h),!0}var d=function(a,b,c,e,f,g,h){var i,j,k,l=a,m=a;if("nodeType"in a&&a.nodeType>=1)l=window.event||a;else if(a){
var n=a.srcElement||a.currentTarget||a.target;n&&(m=d.findLink(n))}return g||(g=""),k=d.gcp(m,l),j=d.gl(b,c,e,k,"",0,d.st,g,h),
i=d.l(m,j),d.sd(i),!0},e=a.ccsrv||"cc.naver.com",f=a.nsc||"decide.me";d.vs="0.4.2",d.md="cc",d.pt="https:"==window.location.protocol?"https:":"http:",
d.ct=0,d.ec=encodeURIComponent,d.st=1,d.findLink=function(a){for(var b=a;b&&"BODY"!==b.tagName&&"HTML"!==b.tagName&&"A"!==b.tagName;)b=b.parentNode;
return"A"!==b.tagName&&(b=a),b},d.l=function(a,b){var c,f,g;return a&&a.href?(f=a.tagName.toLowerCase(),
g=a.href.toLowerCase(),g&&0==g.indexOf(d.pt+"//"+e)?c=a.href:g&&0!=g.indexOf(d.pt+"//"+e)&&f&&"img"!=f&&(c=b+"&u="+d.ec(a.href)),
c):b+"&u=about%3Ablank"},d.sd=function(a,b){var c,e=0;if(d.ct>0){var f=(new Date).getTime();a+="&nt="+f;
}"function"==typeof b&&(e=1);var g=new Image;g.src=a,g.onload=function(){c&&clearTimeout(c),e&&b(),g.onload=null;
},g.onerror=function(){c&&clearTimeout(c),e&&b(),g.onerror=null},e&&(c=setTimeout(function(){b()},5e3)),
d.ct++},d.gl=function(b,c,g,h,i,j,k,l,m){var n=a.g_ssc||"",o=a.g_query||"",p=a.lcs_get_lpid||null,q=a.g_pid||"",r=a.g_sid||"";
void 0==j&&(j=1),void 0==k&&(k=1);var s=d.pt+"//"+e+"/"+d.md+"?a="+b+"&r="+g+"&i="+c+"&m="+j;return 1==k?(n&&(s+="&ssc="+n),
o&&(s+="&q="+d.ec(o)),r&&(s+="&s="+r),m?s+="&p="+m:q?s+="&p="+q:p&&(s+="&p="+p())):s+="&nsc="+f,l&&(s+="&g="+l),
i&&(s+="&u="+d.ec(i)),h&&(s+=h),s},d.al=function(a,b){var c=window;c.addEventListener?c.addEventListener(a,b,!1):c.attachEvent&&c.attachEvent("on"+a,b);
},d.oo="",d.of="","onpageshow"in window&&d.al("pageshow",function(){d.oo.onclick=d.of}),d.gsbw=function(){
var a=document.createElement("p");a.style.width="200px",a.style.height="200px";var b=document.createElement("div");
b.style.position="absolute",b.style.top="0px",b.style.left="0px",b.style.visibility="hidden",b.style.width="200px",
b.style.height="150px",b.style.overflow="hidden",b.appendChild(a),document.body.appendChild(b);var c=a.offsetWidth;
b.style.overflow="scroll";var d=a.offsetWidth;return c==d&&(d=b.clientWidth),document.body.removeChild(b),
c-d},d.fp=function(a){var b=curtop=0;try{if(a.offsetParent){do b+=a.offsetLeft,curtop+=a.offsetTop;while(a=a.offsetParent);
}else(a.x||a.y)&&(a.x&&(b+=a.x),a.y&&(curtop+=a.y))}catch(c){}return[b,curtop]},d.ws=function(a){a||(a=window);
var b=0;if(a.innerWidth){if(b=a.innerWidth,"number"==typeof a.innerWidth){var c=d.gsbw();b=a.innerWidth-c;
}}else document.documentElement&&document.documentElement.clientWidth?b=document.documentElement.clientWidth:document.body&&(document.body.clientWidth||document.body.clientHeight)&&(b=document.body.clientWidth);
return b},d.ci=function(a){var b,c,d=(document.URL,a.parentNode);if(null==d||void 0==d)return!1;for(;;)if("#document"==d.nodeName.toLowerCase()){
b=d.parentWindow?d.parentWindow:d.defaultView;try{return null!=b.frameElement&&void 0!=b.frameElement&&"iframe"==b.frameElement.nodeName.toLowerCase()?(c=b.frameElement.id,
c?c:!1):!1}catch(e){return!1}}else if(d=d.parentNode,null==d||void 0==d)return!1},d.gcp=function(a,b){
var c,e,f,g=-1,h=-1,i=-1,j=-1,k="",l=window.event?window.event:a;b&&(l=b||window.event);try{if(bw=d.ws(window),
f=d.ci(a)){var m=d.fp(document.getElementById(f));l.clientX&&void 0!=l.clientX&&(c=document.body,c.clientLeft&&c.clientTop?(ifrSx=l.clientX-c.clientLeft,
ifrSy=l.clientY-c.clientTop):(ifrSx=l.clientX,ifrSy=l.clientY)),i=m[0]+ifrSx,j=m[1]+ifrSy,document.body&&(document.body.scrollTop||document.body.scrollLeft)?(c=document.body,
g=i-c.scrollLeft,h=j-c.scrollTop):document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)?(e=document.documentElement,
g=i-e.scrollLeft,h=j-e.scrollTop):(g=i,h=j)}else l.clientX&&void 0!=l.clientX&&(c=document.body,c.clientLeft&&c.clientTop?(g=l.clientX-c.clientLeft,
h=l.clientY-c.clientTop):(g=l.clientX,h=l.clientY)),document.body&&(document.body.scrollTop||document.body.scrollLeft)?(i=document.body.scrollLeft+(0>g?0:g),
j=document.body.scrollTop+(0>h?0:h)):document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)?(e=document.documentElement,
void 0!=e.scrollLeft&&(i=e.scrollLeft+(0>g?0:g)),void 0!=e.scrollTop&&(j=e.scrollTop+(0>h?0:h))):(i=0>g?0:g,
j=0>h?0:h),l.pageX&&(i=l.pageX),l.pageY&&(j=l.pageY)}catch(b){}return-1!=i&&-1!=j&&(k+="&px="+i+"&py="+j),
-1!=g&&-1!=h&&(k+="&sx="+g+"&sy="+h),k},a.nclk_proxy=b,a.nclk=d,a.nclk_v2=c}(window),function(a){function b(a){
if(!C){if("complete"!==document.readyState){var c="onpageshow"in window?"pageshow":"load",d=function(a){
return function(){window.setTimeout(function(){C=!1,b(a)},10)}}(a);return document.addEventListener?window.addEventListener(c,d,!1):window.attachEvent("on"+c,d),
void(C=!0)}window.lcs_SerName||(window.lcs_SerName="lcs.naver.com");var g,h,i,j="",k=document,l=window.location;
try{i=(l.protocol?l.protocol:"http:")+"//"+window.lcs_SerName+"/m?"}catch(m){return}try{j=i+"u="+encodeURIComponent(l.href)+"&e="+(k.referrer?encodeURIComponent(k.referrer):"");
}catch(m){}try{"undefined"==typeof y.i&&(y.i=""),1>B&&(f(),w.nnb&&e(),y.ct=o(),p(),q(),r());for(g in z)"function"!=typeof z[g]&&(j+="&"+g+"="+encodeURIComponent(z[g]));
for(g in y)h=y[g],void 0!==h&&"function"!=typeof h&&(j+="&"+g+"="+encodeURIComponent(h));if(1>B)for(g in A)h=A[g],
h&&(j+="&"+g+"="+encodeURIComponent(h));for(g in a)(g.length>=3&&"function"!=typeof a[g]||"qy"===g)&&(j+="&"+g+"="+encodeURIComponent(a[g]));
if(!!a==!1||!!a.pid==!1){var n;n=window.g_pid?g_pid:u(),j+="&pid="+encodeURIComponent(n)}var s=(new Date).getTime();
j+="&ts="+s,j+="&EOU";var t=document.createElement("img");t.src=j,t.onload=function(){t.onload=null},
B++}catch(m){return}}}function c(a,c){try{a&&(y.i=a,c?b(c):b())}catch(d){}}function d(){var a=null;try{
a=window.localStorage}catch(b){}try{a||(a=window.sessionStorage)}catch(b){}return a||null}function e(){
try{var a=d();if(a){if(a.ls){var b=a.ls;if(13==b.length)return void(y.ls=b)}var c=n();null!=c&&""!=c&&(a.ls=c,
y.ls=c)}}catch(e){}}function f(){z.os=g(),z.ln=h(),z.sr=i(),z.pr=window.devicePixelRatio||1;var a=j();
z.bw=a.bw,z.bh=a.bh,z.c=k(),z.j=l(),z.k=m()}function g(){var a="";try{navigator.platform?a=navigator.platform:"";
}catch(b){}return a}function h(){var a="";try{navigator.userLanguage?a=navigator.userLanguage:navigator.language?a=navigator.language:"";
}catch(b){}return a}function i(){var a="";try{if(window.screen&&screen.width&&screen.height)a=screen.width+"x"+screen.height;else if(window.java||self.java){
var b=java.awt.Toolkit.getDefaultToolkit().getScreenSize();a=b.width+"x"+b.height}}catch(c){a=""}return a;
}function j(){var a=document,b={bw:"",bh:""};try{b.bw=a.documentElement.clientWidth?a.documentElement.clientWidth:a.body.clientWidth,
b.bh=a.documentElement.clientHeight?a.documentElement.clientHeight:a.body.clientHeight}catch(c){}return b;
}function k(){var a="";try{if(window.screen)a=screen.colorDepth?screen.colorDepth:screen.pixelDepth;else if(window.java||self.java){
var b=java.awt.Toolkit.getDefaultToolkit().getColorModel().getPixelSize();a=b}}catch(c){a=""}return a;
}function l(){var a="";try{a=navigator.javaEnabled()?"Y":"N"}catch(b){}return a}function m(){var a="";
try{a=navigator.cookieEnabled?"Y":"N"}catch(b){}return a}function n(){try{var a,b,c,d=document.cookie,e=d.split(";");
for(c=0;c<e.length;c++)if(a=e[c].substr(0,e[c].indexOf("=")),b=e[c].substr(e[c].indexOf("=")+1),a=a.replace(/^\s+|\s+$/g,""),
"NNB"==a)return unescape(b)}catch(f){}}function o(){var a="";try{var b=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
if(b&&"undefined"!=typeof b.type)switch(b.type){case b.CELL_2G:a="2g";break;case b.CELL_3G:a="3g";break;
case b.CELL_4G:a="4g";break;case b.WIFI:a="wifi";break;case b.ETHERNET:a="eth";break;case b.UNKNOWN:
a="unknown";break;case b.NONE:a="none";break;default:a=""}else if("undefined"!=typeof blackberry&&"undefined"!=typeof blackberry.network){
var c=blackberry.network;a="Wi-Fi"==c?"wifi":"3G"==c?"3g":c}else{var d="Microsoft Internet Explorer"==navigator.appName,e=navigator.userAgent.indexOf("MAC")>=0;
if(d&&!e&&f&&f.addBehavior){var f=document.body,g=f.addBehavior("#default#clientCaps");a=f.connectionType,
f.removeBehavior(g)}}}catch(h){}return a}function p(){var a=window.performance||{};if(a.timing){var b=a.timing;
for(var c in b){var d=b[c];"number"==typeof d&&(A[c]=d)}}}function q(){var a=window.performance||{};try{
if(a.getEntriesByType){var b=a.getEntriesByType("paint");b.forEach(function(a){var b=a.name;switch(b){
case"first-paint":case"first-contentful-paint":A[b]=a.startTime}})}}catch(c){}}function r(){var a=s();
void 0!==a&&(A.ngt=a)}function s(){var a=window.performance||{};return a.navigation?a.navigation.type:void 0;
}function t(){var a,b=d(),c=b?b.ls:null;if(c)a=c;else{var e;e=navigator.userAgent+Math.random(),a=e}
var f,g=window.performance||{},h=location.href;return f=g.now?g.now():(new Date).getTime(),D=E.md5(a+h+f);
}function u(){return null===D&&(D=t()),D}function v(){return D=t()}var w={nnb:!0},x="v0.7.2",y={},z={},A={},B=0,C=!1,D=null,E={};
!function(a){function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c;
}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){
return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){
return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,
a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,
j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),
n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),
o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),
p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),
m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),
n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),
o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),
o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),
p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),
m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),
n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),
o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),
p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),
m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),
m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),
n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),
n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),
o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),
p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),
m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),
n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){
var b,c="",d=32*a.length;for(b=0;d>b;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){
var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;var d=8*a.length;for(b=0;d>b;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;
return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,
e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),
j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),
e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){
return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b));
}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}a.md5=t}(E),a.lcs_do=b,a.lcs_do_gdid=c,a.lcs_get_lpid=u,
a.lcs_update_lpid=v,a.lcs_version=x}(window),jindo.AjaxHistory=function(a){var b={},c={},d=null,e=null,f=0,g="",h="",i=null,j=function(a,c){
c=c||{};var d=this["on"+a],e=b[a]||[],f="function"==typeof d,g=e.length>0;if(!f&&!g)return!0;e=e.concat(),
c.sType=a,"undefined"==typeof c._aExtend&&(c._aExtend=[],c.stop=function(){c._aExtend.length>0&&(c._aExtend[c._aExtend.length-1].bCanceled=!0);
}),c._aExtend.push({sType:a,bCanceled:!1});var h,i,j=[c];for(h=2,i=arguments.length;i>h;h++)j.push(arguments[h]);
if(f&&d.apply(this,j),g){var k;for(h=0,k;k=e[h];h++)k.apply(this,j)}return!c._aExtend.pop().bCanceled;
},k=function(a,c){if(1==arguments.length)return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(a,b){
k(b,a)},this).bind()),this;var d=b[a];return"undefined"==typeof d&&(d=b[a]=[]),d.push(c),this},l=function(a,c){
if(1==arguments.length)return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(a,b){l(b,a)},this).bind()),
this;var d=b[a];if(d)for(var e,f=0;e=d[f];f++)if(e===c){d=d.splice(f,1);break}return this},m=function(a,b){
switch(typeof a){case"undefined":var c={};for(var d in i)"htCustomEventHandler"!=d&&"_htSetter"!=d&&(c[d]=i[d]);
return c;case"string":if("undefined"==typeof b)return i[a];if("htCustomEventHandler"==a){if("undefined"!=typeof i[a])return this;
k(b)}i[a]=b,"function"==typeof i._htSetter[a]&&i._htSetter[a](b);break;case"object":for(var e in a){
if("htCustomEventHandler"==e){if("undefined"!=typeof i[e])continue;k(a[e])}"_htSetter"!==e&&(i[e]=a[e]),
"function"==typeof i._htSetter[e]&&i._htSetter[e](a[e])}}return this};!function(a){i={},i._htSetter={},
d=jindo.$Agent().navigator(),h="AjaxHistory"+(new Date).getTime(),m({sIFrameUrl:"history.html",nCheckInterval:100
}),m(a||{})}(a);var n=function(a){var b=jindo.$S(a.search.substring(1)).parseString();u(encodeURIComponent(b.hash));
},o=function(){var a=q();if(d.ie&&(document.documentMode||d.version)>=8&&"Standards"==jindo.$Document().renderingMode()||d.firefox&&d.version>=3.6||d.chrome&&d.version>3||d.safari&&d.version>=5||d.opera&&d.version>=10.6?(b.hashchange=jindo.$Fn(u,this).attach(window,"hashchange"),
g="hashchangeevent"):d.ie?(e=jindo.$Element("<IFRAME>"),e.hide(),e.appendTo(document.body),g="iframe"):(f=setInterval(jindo.$Fn(u,this).bind(),m("nCheckInterval")),
g="setinterval"),a&&"%7B%7D"!=a)"iframe"==g?e.$value().src=m("sIFrameUrl")+"?hash="+a:(c=w(a),j("change",{
htHistoryData:c}));else{var h=this;if(d.ie&&(document.documentMode||d.version)<8){var i=e.$value();i.onreadystatechange=function(){
"complete"==i.readyState&&(h.fireEvent("load"),i.onreadystatechange=function(){})},i.src=m("sIFrameUrl");
}else setTimeout(function(){h.fireEvent("load")},0)}return this},p=function(){return h},q=function(){
return d.firefox?encodeURIComponent(location.hash.substring(1).replace("#emptyFolder","").replace("#sendResult","")):location.hash.substring(1).replace("#emptyFolder","").replace("#sendResult","").replace("%23emptyFolder","").replace("%23sendResult","")||"%7B%7D";
},r=function(a){location.hash="%7B%7D"==a?"":a},s=function(a){if(a&&"object"==typeof a&&jindo.$H(a).length()>0){
c=jindo.$Json(jindo.$Json(a).toString()).toObject();var b=v(a);return q()!=b?(r(b),"iframe"==g&&(e.$value().src=m("sIFrameUrl")+"?hash="+b),
!0):!1}return!1},t=!1,u=function(a){a="undefined"==a?"%7B%7D":a,a=a&&"string"==typeof a?a:q();var b=w(a),d=c;
if(t)return void(t=!1);if(!x(c,b)){if(c=b,"write"===d.fClass&&mcCore.hideWriteArea())return t=!0,void s(d);
"iframe"==g&&r(a),j("change",{htHistoryData:c})}},v=function(a){return a?encodeURIComponent("object"==typeof JSON&&"function"==typeof JSON.stringify?JSON.stringify(a):jindo.$Json(a).toString()):"";
},w=function(a){try{if(a){var b=decodeURIComponent(a);return"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(b):jindo.$Json(b).toObject();
}}catch(c){}return{}},x=function(a,b){if(!a||!b)return!1;var c=a instanceof Array?jindo.$A(a):jindo.$H(a),d=b instanceof Array?jindo.$A(b):jindo.$H(b);
if(c.length()!=d.length())return!1;var e=!0,f=arguments.callee;return c.forEach(function(a,c){if("object"==typeof a){
if(!f(a,b[c]))return void(e=!1)}else if(a!=b[c])return void(e=!1)}),e},y=function(){"hashchangeevent"==g?b.hashchange.detach(window,"hashchange"):"iframe"==g?e.leave():clearInterval(f),
b=null,c=null,d=null,e=null,f=null,g=null,h=null};return{checkIFrameChange:n,initialize:o,attach:k,detach:l,
fireEvent:j,destroy:y,addHistory:s,getComponentId:p}},jindo.Component=jindo.$Class({_htEventHandler:null,
_htOption:null,$init:function(){var a=this.constructor.getInstance();a.push(this),this._htEventHandler={},
this._htOption={},this._htOption._htSetter={}},option:function(a,b){switch(typeof a){case"undefined":
var c={};for(var d in this._htOption)"htCustomEventHandler"!=d&&"_htSetter"!=d&&(c[d]=this._htOption[d]);
return c;case"string":if("undefined"==typeof b)return this._htOption[a];if("htCustomEventHandler"==a){
if("undefined"!=typeof this._htOption[a])return this;this.attach(b)}this._htOption[a]=b,"function"==typeof this._htOption._htSetter[a]&&this._htOption._htSetter[a](b);
break;case"object":for(var e in a){if("htCustomEventHandler"==e){if("undefined"!=typeof this._htOption[e])continue;
this.attach(a[e])}"_htSetter"!==e&&(this._htOption[e]=a[e]),"function"==typeof this._htOption._htSetter[e]&&this._htOption._htSetter[e](a[e]);
}}return this},optionSetter:function(a,b){switch(typeof a){case"undefined":return this._htOption._htSetter;
case"string":if("undefined"==typeof b)return this._htOption._htSetter[a];this._htOption._htSetter[a]=jindo.$Fn(b,this).bind();
break;case"object":for(var c in a)this._htOption._htSetter[c]=jindo.$Fn(a[c],this).bind()}return this;
},fireEvent:function(a,b){b=b||{};var c=this["on"+a],d=this._htEventHandler[a]||[],e="function"==typeof c,f=d.length>0;
if(!e&&!f)return!0;d=d.concat(),b.sType=a,"undefined"==typeof b._aExtend&&(b._aExtend=[],b.stop=function(){
b._aExtend.length>0&&(b._aExtend[b._aExtend.length-1].bCanceled=!0)}),b._aExtend.push({sType:a,bCanceled:!1
});var g,h,i=[b];for(g=2,h=arguments.length;h>g;g++)i.push(arguments[g]);if(e&&c.apply(this,i),f){var j;
for(g=0,j;j=d[g];g++)j.apply(this,i)}return!b._aExtend.pop().bCanceled},attach:function(a,b){if(1==arguments.length)return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(a,b){
this.attach(b,a)},this).bind()),this;var c=this._htEventHandler[a];return"undefined"==typeof c&&(c=this._htEventHandler[a]=[]),
c.push(b),this},detach:function(a,b){if(1==arguments.length)return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(a,b){
this.detach(b,a)},this).bind()),this;var c=this._htEventHandler[a];if(c)for(var d,e=0;d=c[e];e++)if(d===b){
c=c.splice(e,1);break}return this},detachAll:function(a){var b=this._htEventHandler;if(arguments.length)return"undefined"==typeof b[a]?this:(delete b[a],
this);for(var c in b)delete b[c];return this}}),jindo.Component.factory=function(a,b){var c,d=[];"undefined"==typeof b&&(b={});
for(var e,f=0;e=a[f];f++)c=new this(e,b),d[d.length]=c;return d},jindo.Component.getInstance=function(){
return"undefined"==typeof this._aInstance&&(this._aInstance=[]),this._aInstance},jindo.UIComponent=jindo.$Class({
$init:function(){this._bIsActivating=!1},isActivating:function(){return this._bIsActivating},activate:function(){
return this.isActivating()?this:(this._bIsActivating=!0,arguments.length>0?this._onActivate.apply(this,arguments):this._onActivate(),
this)},deactivate:function(){return this.isActivating()?(this._bIsActivating=!1,arguments.length>0?this._onDeactivate.apply(this,arguments):this._onDeactivate(),
this):this}}).extend(jindo.Component),jindo.Timer=jindo.$Class({$init:function(){this._nTimer=null,this._nLatest=null,
this._nRemained=0,this._nDelay=null,this._fRun=null,this._bIsRunning=!1},start:function(a,b){return this.abort(),
this._nRemained=0,this._nDelay=b,this._fRun=a,this._bIsRunning=!0,this._nLatest=this._getTime(),this.fireEvent("wait"),
this._excute(this._nDelay,!1),!0},isRunning:function(){return this._bIsRunning},_getTime:function(){
return(new Date).getTime()},_clearTimer:function(){var a=!1;return this._nTimer&&(clearInterval(this._nTimer),
this._bIsRunning=!1,a=!0),this._nTimer=null,a},abort:function(){var a=this._clearTimer();return a&&(this.fireEvent("abort"),
this._fRun=null),a},pause:function(){var a=this._getTime()-this._nLatest;return this._nRemained=Math.max(this._nDelay-a,0),
this._clearTimer()},_excute:function(a,b){var c=this;this._clearTimer(),this._bIsRunning=!0,this._nTimer=setInterval(function(){
if(c._nTimer){c.fireEvent("run");var a=c._fRun();if(c._nLatest=c._getTime(),!a)return clearInterval(c._nTimer),
c._nTimer=null,c._bIsRunning=!1,void c.fireEvent("end");c.fireEvent("wait"),b&&c._excute(c._nDelay,!1);
}},a)},resume:function(){return!this._fRun||this.isRunning()?!1:(this._bIsRunning=!0,this.fireEvent("wait"),
this._excute(this._nRemained,!0),this._nRemained=0,!0)}}).extend(jindo.Component),jindo.WatchInput=jindo.$Class({
_bTimerRunning:!1,_bFocused:!1,_sPrevValue:"",$init:function(a,b){var c={nInterval:100,bUseTimerOnIE:!1,
sKeyEvent:"keyup",bPermanent:!1,bActivateOnload:!0};this.option(c),this.option(b||{}),this._elInput=jindo.$(a),
this._oTimer=new jindo.Timer,this._bIE=jindo.$Agent().navigator().ie,this._wfFocus=jindo.$Fn(this._onFocus,this),
this._wfBlur=jindo.$Fn(this._onBlur,this),this._wfKeyEvent=jindo.$Fn(this._onKeyEvent,this),this._wfStartTimer=jindo.$Fn(this._startTimer,this),
this._wfStopTimer=jindo.$Fn(this._stopTimer,this),this.option("bActivateOnload")&&this.activate(!0)},
getInput:function(){return this._elInput},setInputValue:function(a){return this.getInput().value=a,this.setCompareValue(a),
this},getCompareValue:function(){return this._sPrevValue},setCompareValue:function(a){return this._sPrevValue=a,
this},fireChangeEvent:function(){var a=this.getInput(),b=a.value;return this.setCompareValue(b),this.fireEvent("change",{
elInput:a,sText:b}),this},start:function(a){return this.activate(a||!1)},stop:function(){return this.deactivate();
},_onActivate:function(a){this.setCompareValue("");var b=this.getInput();if(this._wfFocus.attach(b,"focus"),
this._bIE&&!this.option("bUseTimerOnIE"))this.fireEvent("start"),this._wfKeyEvent.attach(b,this.option("sKeyEvent"));else{
if(this._isTimerRunning())return;this.fireEvent("start"),this.option("bPermanent")?this._startTimer():(this._wfStartTimer.attach(b,"focus"),
this._wfStopTimer.attach(b,"blur"))}this._wfBlur.attach(b,"blur"),a&&this.compare()},_onDeactivate:function(){
var a=this.getInput();this._wfFocus.detach(a,"focus"),this._wfKeyEvent.detach(a,this.option("sKeyEvent")),
this._stopTimer(),this._wfStartTimer.detach(a,"focus"),this._wfStopTimer.detach(a,"blur"),this._wfBlur.detach(a,"blur"),
this.fireEvent("stop")},getInterval:function(){return this.option("nInterval")},setInterval:function(a){
return this.option("nInterval",a),this},_isTimerRunning:function(){return this._bTimerRunning},_startTimer:function(){
if(!this._isTimerRunning()){this._bTimerRunning=!0,this.fireEvent("timerStart"),this.compare();var a=this;
this._oTimer.start(function(){return a.compare(),!0},this.getInterval())}},_stopTimer:function(){this._isTimerRunning()&&(this._oTimer.abort(),
this._bTimerRunning=!1,this.compare(),this.fireEvent("timerStop"))},_onKeyEvent:function(){this.compare();
},_onFocus:function(){this._bFocused=!0,this.fireEvent("focus")},_onBlur:function(){this._bFocused=!1,
this.fireEvent("blur")},compare:function(){return this.getInput().value!=this.getCompareValue()&&this.fireChangeEvent(),
this}}).extend(jindo.UIComponent),EventDispatcher=$Class({_welEventMock:null,_wfEventHandler:null,_oController:{},
_aWriteElement:$A(["subject","bccDiv","ccDiv","toDiv","idomainSenderName","senderName","toInput","ccInput","bccInput"]),
_oShortcut:null,_sActiveArea:null,$init:function(){this._wfEventDispatch=$Fn(this._dispatchEvent,this),
this._wfHotkeyEventDispatch=$Fn(this._doHotkeyEventAction,this),this._scrollEventHandlerStore={},this._createEventMockElement(),
this._setEvent()},addController:function(a,b){this._oController[a]=b},_setEvent:function(){this._wfEventDispatch.attach(document.body,"click"),
this._wfEventDispatch.attach(document.body,"dblclick"),this._wfEventDispatch.attach(document.body,"dragstart"),
this._wfEventDispatch.attach(document.body,"dragend"),this._wfEventDispatch.attach(document.body,"dragenter"),
this._wfEventDispatch.attach(document.body,"dragleave"),this._wfEventDispatch.attach(document.body,"dragover"),
this._wfEventDispatch.attach(document.body,"drop"),this._wfEventDispatch.attach(document.body,"change"),
this._wfEventDispatch.attach(document.body,"mousedown"),this._wfEventDispatch.attach(document.body,"mouseup"),
this._wfEventDispatch.attach(document.body,"mouseover"),this._wfEventDispatch.attach(document.body,"mouseout"),
this._wfEventDispatch.attach(document.body,"keyup"),this._wfEventDispatch.attach(document.body,"mousemove"),
this._wfEventDispatch.attach(document.body,"selectstart"),this._wfEventDispatch.attach(document.body,"contextmenu"),
this._wfHotkeyEventDispatch.attach(document.body,$Agent().navigator().opera?"keypress":"keydown")},_releaseEvent:function(){
this._wfEventDispatch.detach(document.body,"click"),this._wfEventDispatch.detach(document.body,"dblclick"),
this._wfEventDispatch.detach(document.body,"dragstart"),this._wfEventDispatch.detach(document.body,"dragend"),
this._wfEventDispatch.detach(document.body,"dragenter"),this._wfEventDispatch.detach(document.body,"dragleave"),
this._wfEventDispatch.detach(document.body,"dragover"),this._wfEventDispatch.detach(document.body,"drop"),
this._wfEventDispatch.detach(document.body,"change"),this._wfEventDispatch.detach(document.body,"mousedown"),
this._wfEventDispatch.detach(document.body,"mouseup"),this._wfEventDispatch.detach(document.body,"mouseover"),
this._wfEventDispatch.detach(document.body,"mouseout"),this._wfEventDispatch.detach(document.body,"keyup"),
this._wfEventDispatch.detach(document.body,"mousemove"),this._wfEventDispatch.detach(document.body,"selectstart"),
this._wfEventDispatch.detach(document.body,"contextmenu"),this._wfHotkeyEventDispatch.detach(document.body,$Agent().navigator().opera?"keypress":"keydown");
},setActiveArea:function(a){this._sActiveArea=a},getActiveArea:function(){return this._sActiveArea},
_setReleaseEvent:function(){var a=this;$Fn(function(){try{a._releaseEvent()}catch(b){}},a).attach(window,"unload");
},runWithAction:function(a){return this._doMockEventAction(a)},_dispatchEvent:function(a){if("click"==a.type&&$Element("readFrame")&&$Element("readFrame").visible()&&"ie"==$Agent().navigator().getName()){
for(var b=a.element,c=!1,d=!1,e=null;;){if(!b||"BODY"==b.tagName.toUpperCase())break;if("A"!=b.tagName.toUpperCase()&&"AREA"!=b.tagName.toUpperCase()||!b.href||0==b.href.indexOf("mailto:")||b.href.match(/(^$|#$)/)||(d=!0,
e=b),b.id&&"readFrame"==b.id){c=!0;break}b=b.parentNode}if(c&&d){var f=e.href;return f=f.replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),
window.open(f,"",""),void a.stopDefault()}}"mousedown"===a.type&&(mCom.mousePos=a.pos());var g=$Element(this.getEventElement(a.element,a.type));
if(null!=a.element.attributes){if(g&&g.hasClass("_stopDefault"))a.stopDefault();else if(g&&g.hasClass("_stopBubble"))a.stopBubble();else if(g&&g.hasClass("_disabled"))return;
if("mousedown"==a.type&&(mCom.bMouseDownFlag||mCom.bMouseDropFlag)&&(mCom.bMouseDownFlag=!1,mCom.bMouseDropFlag=!1),
"mouseup"==a.type&&mCom.bCheckedMailFlag?mCom.bCheckedMailFlag=!1:"mouseup"==a.type&&mCom.bMouseDownFlag?mcDragndrop.handleMoveEnd(a):"mousemove"==a.type&&mCom.bMouseDownFlag&&mcDragndrop.handleDrag(a),
"mousedown"!=a.type&&"mouseup"!=a.type||!mCom.isEditingFolderName){if("click"==a.type){if(mCom.isEditingFolderName&&"folderNameInputBox"!=a.element.id&&!a.element.className.match("new_folder")&&!a.element.className.match("btn_modify")&&"stop"==mfCore.renameFolderAtList())return;
if(null!=$Element("editingAddress")&&"editingAddress"!=a.element.id&&mlCore.setAddress(),null!=$Element("pageSelect")&&"select_page_num"!=a.element.id&&(mlCore.blurSelectPage(),
$$.getSingle("span#pageSelect input").blur()),"function"==typeof gnbAllLayerClose){var h=gnbUserLayer.show||gnbNaverMeLayer.show||gnbMoreLayer.show,i=$Element($$.getSingle("ul.gnb_lst")).isEqual(a.element)||$Element($$.getSingle("ul.gnb_lst")).isParentOf(a.element);
h&&!i&&gnbAllLayerClose()}var j=$Element($$.getSingle("div.gnb_last"));if(nhn&&nhn.deskhome_menu&&"function"==typeof nhn.deskhome_menu.onResize&&!j.isEqual(a.element)&&!j.isParentOf(a.element)&&$Element("header").hasClass("h_mail")&&nhn.deskhome_menu.onResize(),
this._getAction($Element(a.element).attr("class"),a.type,g))mcCore.loadCss("lazy");else{var k=mCom.aVisibleLayerList.$value()[mCom.aVisibleLayerList.length()-1],l=null;
if(mCom.aVisibleLayerList.length()>1&&(l=mCom.aVisibleLayerList.$value()[mCom.aVisibleLayerList.length()-2]),
mCom.welExceptHideAllElement&&($Element(a.element).isEqual(mCom.welExceptHideAllElement)||mCom.welExceptHideAllElement.isParentOf(a.element)))return;
!k||k.isEqual(a.element)||k.isParentOf(a.element)||g&&k.attr("data-opener")===g.$value().id||(l&&l.isParentOf(a.element)?(k.hide(),
mCom.aVisibleLayerList.pop()):myCore.hideAllLayer())}}if(g&&"click"==a.type){var m=this._getAction(g.attr("class"),"ccr");
m&&ccr(a.element,m[0],a._event),m=this._getAction(g.attr("class"),"ccrf"),m&&ccrf(a.element,m[0],m[1],a._event),
m=null}g&&this._processEvent(g,a.type,a)}}},_processEvent:function(a,b,c){var d=this._getAction(a.attr("class"),b);
if(d){var e=d[0],f=d[1],g=d.slice(2,d.length);g.unshift(c);var h=this._oController[e],i=window[e];if(h&&"function"==typeof h[f])h[f].apply(h,g);else{
if(!i||"function"!=typeof i[f])return alert([e,"|",f," ",nLang.e.not_defined_method].join("")),!1;i[f].apply(e,g);
}}},getEventElement:function(a,b){if(a&&a.tagName){var c=$Element(a).className()||"",d=$Element(a).attr("disabled")||!1;
return(-1==c.indexOf("_"+this._htEventName[b])||d)&&(-1==c.indexOf("_"+b)||d)?"click"!=b&&"mousedown"!=b&&"mouseup"!=b&&"mouseover"!=b&&"mouseout"!=b&&"dblclick"!=b&&"contextmenu"!=b||!a.parentNode||"BODY"==a.parentNode.tagName?void 0:this.getEventElement(a.parentNode,b):a;
}},_htEventName:{click:"c1",change:"c2",contextmenu:"c3",dblclick:"d1",dragstart:"d2",dragend:"d3",dragenter:"d4",
dragleave:"d5",dragover:"d6",drop:"d7",mousedown:"m1",mouseup:"m2",mouseover:"m3",mouseout:"m4",mousemove:"m5",
keyup:"k1",keydown:"k2",keypress:"k3",selectstart:"s1"},_getAction:function(a,b){if(a){var c=new RegExp("_"+this._htEventName[b]+"\\((.*?)\\)"),d=a.match(c);
if(d&&d[0]&&d[1])return d[1].split("|");if(c=new RegExp("_"+b+"\\((.*?)\\)"),d=a.match(c),d&&d[0]&&d[1])return d[1].split("|");
}return null},_createEventMockElement:function(){this._welEventMock=$Element("<div class=''></div>"),
$Element(document.body).append(this._welEventMock.$value())},_doMockEventAction:function(a){return this._welEventMock.attr("class",""),
this._welEventMock.addClass(a),this._processEvent(this._welEventMock,"mock",null)},_oHotkeyMap:{},_oHotkeyCCRMap:{},
addHotkey:function(a,b,c){"undefined"!=typeof a&&null!==a&&""!==a&&(this._oHotkeyMap[a]=b,this._oHotkeyCCRMap[a]=c);
},removeHotKey:function(a){delete this._oHotkeyMap[a],delete this._oHotkeyCCRMap[a]},emptyHotkey:function(){
this._oHotkeyMap={},this._oHotkeyCCRMap={}},_checkKeyEventCase:function(a,b){var c=a.element,d=$Element(c),e=c.tagName.toLowerCase();
return d.hasClass("input_shortcut")?"INPUT_SHORTCUT":"input"==e&&("text"==c.type||"password"==c.type)||"textarea"==e||"div"==e&&"true"==c.contentEditable?"undefined"!=typeof this._oHotkeyMap[b]&&this._aWriteElement.has(c.id)?(a.stop(),
"EXEC_SHORTCUT"):"INPUT_TAG_DEFAULT_ACTION":$Element("event_popup")&&$Element("event_popup").visible()||$Element("user_guide_layer")&&$Element("user_guide_layer").visible()?"PREVENT_SHORTCUT":"DEFAULT_ACTION";
},_transFuntionkeySting:function(a){var b=a.key(),c=[b.ctrl?"<CTRL> + ":"",b.alt?"<ALT> + ":"",b.shift?"<SHIFT> + ":""].join("");
return c},_transAlphabetKeyString:function(a){var b,c=a.key(),d={8:"backspace",46:"del",13:"<ENTER>",
27:"esc",32:"<SPACE>",37:"←",38:"↑",39:"→",40:"↓",44:"/",191:"/",109:"-",192:"`",187:"+",220:"\\",222:"'",
186:";",219:"[",221:"]",188:",",190:"."};return b="undefined"!=typeof d[c.keyCode]?d[c.keyCode].toUpperCase():c.keyCode>=48&&c.keyCode<=90?String.fromCharCode(c.keyCode).toUpperCase():"";
},_doHotkeyEventAction:function(a){var b=a.key(),c=a.element;if(!(a.$value().metaKey||mCom.elPromotionLayer&&mCom.elPromotionLayer.visible())){
var d=this._transFuntionkeySting(a),e=this._transAlphabetKeyString(a),f=d+e,g=$Element("sendAfterReviewBg"),h="undefined"!=typeof mEnv&&mEnv.shortCut&&mEnv.shortCut.sendKey===f&&$Element("sar")&&$Element("sar").visible(),i="undefined"!=typeof mEnv&&mEnv.shortCut&&(mEnv.shortCut.helpShowKey1===f||mEnv.shortCut.helpShowKey2===f);
if(!g||!g.visible()||h||i){if(9==b.keyCode&&!b.shift&&"true"==$Element(a.element).attr("aria-haspopup")&&mCom.elVisibleLayer){
a.stop();for(var j,k=$$("a",mCom.elVisibleLayer),l=0;l<k.length;l++)if(k[l].offsetHeight>0){j=k[l];break;
}if(!j){k=$$("button",mCom.elVisibleLayer);for(var l=0;l<k.length;l++)if(k[l].offsetHeight>0){j=k[l];
break}}return void j.focus()}if(9==b.keyCode&&!b.shift&&"last"==$Element(a.element).attr("tab-action"))return a.stop(),
void mCom.elLayerPopupBtn.focus();if(9==b.keyCode&&b.shift&&"first"==$Element(a.element).attr("tab-action"))return a.stop(),
void mCom.elLayerPopupBtn.focus();9===b.keyCode&&"folderNameInputBox"==c.id&&(a.stop(),mfCore.cancelRenameFolderAtList());
var m=this._checkKeyEventCase(a,f);switch(m){case"INPUT_SHORTCUT":""!=e&&"BACKSPACE"!=e&&"DEL"!=e&&"ESC"!=e?(a.stop(),
moShortcut.modifyShortcut(a,c.id,f)):(a.stop(),$$.getSingle("#"+c.id).value="");break;case"INPUT_TAG_DEFAULT_ACTION":
switch(f){case"<ENTER>":switch(c.id){case"searchVal":case"employeeSearch":myCore.showEmployeeSearchPopup(a);
break;case"searchKeyWord":a.stop(),mlCore.doSearch_new(a,"simple");break;case"ipt_sender":case"ipt_receiver":
case"ipt_query":mlCore.doSearch_new(a,"detail");break;case"folderNameInputBox":mfCore.renameFolderAtList();
break;case"editingAddress":mlCore.setAddress();break;case"new_folder_name":moFolder.getEnter(a,"addFolder");
break;case"ipt_newFolderName":break;case"searchKeyword":moFilter.filterSearch();break;case"addr_search_keyword":
mwAddress.search();break;case"select_page_num":mUtil.changePage(a,a.element);break;case"current_page":
a.stop(),mwAddress.changeAddrPage()}break;case"ESC":"folderNameInputBox"==c.id?mfCore.cancelRenameFolderAtList():mCom.aVisibleLayerList.length()>0&&myCore.hideAllLayer(a),
mCom.bMouseDownFlag&&(mcDragndrop.handleMoveEnd(a),mCom.bMouseDropFlag=!1)}break;case"DEFAULT_ACTION":
switch(f){case"<SHIFT> + ↓":case"↓":$$.getSingle("#ly_select_item")&&$Element($$.getSingle("#ly_select_item")).visible()?(a.stop(),
myCore.selectNextItem($$.getSingle("#ly_select_item"),"down","highlighted")):$$.getSingle("#ly_download_all")&&$Element($$.getSingle("#ly_download_all")).visible()?(a.stop(),
myCore.selectNextItem($$.getSingle("#ly_download_all"),"down","hover")):mCom.isReading?mCom.isPopup?(a.stop(),
$$.getSingle("#cont_flex_area").scrollTop+=40):(a.stop(),$$.getSingle("#previewContent").scrollTop+=40):mCom.elSendResultCont&&mCom.elSendResultCont.visible()?(a.stop(),
$$.getSingle("#sendresultDivContent").scrollTop+=40):(a.stop(),mlCore.doCursorDown(a));break;case"<SHIFT> + ↑":
case"↑":$$.getSingle("#ly_select_item")&&$Element($$.getSingle("#ly_select_item")).visible()?(a.stop(),
myCore.selectNextItem($$.getSingle("#ly_select_item"),"up","highlighted")):$$.getSingle("#ly_download_all")&&$Element($$.getSingle("#ly_download_all")).visible()?(a.stop(),
myCore.selectNextItem($$.getSingle("#ly_download_all"),"up","hover")):mCom.isReading?mCom.isPopup?(a.stop(),
$$.getSingle("#cont_flex_area").scrollTop-=40):(a.stop(),$$.getSingle("#previewContent").scrollTop-=40):mCom.elSendResultCont&&mCom.elSendResultCont.visible()?(a.stop(),
$$.getSingle("#sendresultDivContent").scrollTop-=40):(a.stop(),mlCore.doCursorUp(a));break;case"→":mCom.isReading&&"read"==this._sActiveArea?(a.stop(),
mCom.isPopup?$$.getSingle("#cont_flex_area").scrollLeft+=40:$$.getSingle("#previewContent").scrollLeft+=40):"list"==this._sActiveArea&&(mCom.elList.scrollLeft+=40),
this._execShortcutAction(a,f);break;case"←":mCom.isReading&&"read"==this._sActiveArea?(a.stop(),mCom.isPopup?$$.getSingle("#cont_flex_area").scrollLeft-=40:$$.getSingle("#previewContent").scrollLeft-=40):"list"==this._sActiveArea&&(mCom.elList.scrollLeft-=40),
this._execShortcutAction(a,f);break;case"DEL":mCom.isWriting||($$.getSingle("#listBtnMenu .do_delete")&&$$.getSingle("#listBtnMenu .do_delete").focus(),
mlCore.deleteMail());break;case"BACKSPACE":a.stopDefault(),mcCore.historyBack(a);break;case"ESC":mCom.bMouseDownFlag?(mcDragndrop.handleMoveEnd(a),
mCom.bMouseDropFlag=!1):$Element("sar")&&$Element("sar").visible()?mwCore.hidePreview():mCom.aVisibleLayerList.length()>0&&myCore.hideAllLayer(a);
break;case"<ENTER>":var n=$Element(c);if($$.getSingle("#ly_select_item")&&$Element($$.getSingle("#ly_select_item")).visible()){
var o=$$.getSingle("#ly_select_item .highlighted");switch($Element(o)&&($Element(o).removeClass("highlighted"),
a.stop()),o.id){case"checkAllBtn":mlCore.toggleCheckAll(a);break;case"readMailBtn":mlCore.selectMail(a,"notRead","false");
break;case"unReadMail":mlCore.selectMail(a,"notRead","true");break;case"markMailBtn":mlCore.selectMail(a,"mark","true");
break;case"unMarkMail":mlCore.selectMail(a,"mark","false");break;case"unCheckAllBtn":mlCore.unCheckAll(a);
}}else if("download_all_pc"==c.id||"download_all_ndrive"==c.id);else if("mailFolderAddBtn"==c.id)a.stop(),
myCore.addNewFolder();else if("mailMoveBtn"==c.id)a.stop(),myCore.mailMove();else if("mailMoveContBtn"==c.id)a.stop(),
myCore.checkDuplicate();else if(1==n.hasClass("_starFocus")){a.stop();var p=$Element($$.getSingle("span",c)),q="mark";
1==p.hasClass("icoImportantOn")&&(q="unmark");var r=p.attr("mailsn");mlCore.markMailSelf(a,r,q)}else if(1==n.hasClass("do_move"))a.stop(),
myCore.showMoveLayer(a);else if(n.hasClass("chk")){a.stop();var s=n.attr("sn");this._moveLayerListSelect(a,s);
}else if(1==n.hasClass("selectName")){a.stop();var t=n.attr("fromname");moWrite.setFromName(null,t)}else"A"==c.tagName&&"#"!=c.href||"BUTTON"==c.tagName||(mcCore.isListVisible()&&mCom.aVisibleLayerList.length()<1&&0!=mlCore.getCurMailList().length()?(ccr(a.element,this._oHotkeyCCRMap[f],a.$value()),
mlCore.doReadMail(a)):this._execShortcutAction(a,f));break;case"<SPACE>":var n=$Element(c);if(n.hasClass("chk")){
a.stop();var s=n.attr("sn");return void this._moveLayerListSelect(a,s)}this._execShortcutAction(a,f);
break;case"<CTRL> + C":jindo.$Agent().navigator().firefox&&mrCore.copyReadBody(a);break;default:this._execShortcutAction(a,f);
}break;case"PREVENT_SHORTCUT":break;case"EXEC_SHORTCUT":this._execShortcutAction(a,f)}}}},_execShortcutAction:function(a,b){
if("undefined"!=typeof this._oHotkeyMap[b]){a.stop();var c=this._oHotkeyMap[b];if(/(deleteMail|cleanFolder|cleanTrash)/.test(c)){
var d="/shortcutAction/?key="+b+"&action="+c;$$.getSingle("#testFrame").src="/testForLogging"+d,$$.getSingle("#listBtnMenu .do_delete")&&$$.getSingle("#listBtnMenu .do_delete").focus();
}if(/ReadMail/.test(c)&&(!mcCore.isListVisible()||mCom.aVisibleLayerList.length()>0||0===mlCore.getCurMailList().length()))return;
if(ccr(a.element,this._oHotkeyCCRMap[b],a.$value()),mCom.runningShortcut)return;mCom.runningShortcut=!0,
this._doKeyEventAction(c,a),mCom.runningShortcut=!1}},_moveLayerListSelect:function(a,b){var c=$$.getSingle("label",a.element);
c=c.parentNode.parentNode,myCore.onMoveLayerKeyboard(c,b),obj=null},_doKeyEventAction:function(a,b){
this._welEventMock.attr("class",""),this._welEventMock.addClass(a),this._processEvent(this._welEventMock,"mock",b);
},addTempScrollEventListener:function(a,b,c){$Element(a).attach("scroll",c),this._scrollEventHandlerStore[b]=c;
},removeTempScrollEventListener:function(a,b){var c=this._scrollEventHandlerStore[b];c&&($Element(a).detach("scroll",c),
delete this._scrollEventHandlerStore[b])}}),Mail=$Class({_oEventDispatcher:null,$init:function(){this._oEventDispatcher=new EventDispatcher;
},addHotkey:function(a,b,c){this._oEventDispatcher.addHotkey(a.toUpperCase(),["_mock(",b,")"].join(""),c);
},removeHotkey:function(a){this._oEventDispatcher.removeHotkey(a.toUpperCase())},emptyHotkey:function(){
this._oEventDispatcher.emptyHotkey()},setActiveArea:function(a){this._oEventDispatcher.setActiveArea(a);
},getActiveArea:function(){return this._oEventDispatcher.getActiveArea()}}),function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b();
}(this,function(){"use strict";function a(){return Ae.apply(null,arguments)}function b(a){Ae=a}function c(a){
return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a);
}function e(a){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(a).length;var b;for(b in a)if(a.hasOwnProperty(b))return!1;
return!0}function f(a){return void 0===a}function g(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a);
}function h(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function i(a,b){
var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function j(a,b){return Object.prototype.hasOwnProperty.call(a,b);
}function k(a,b){for(var c in b)j(b,c)&&(a[c]=b[c]);return j(b,"toString")&&(a.toString=b.toString),
j(b,"valueOf")&&(a.valueOf=b.valueOf),a}function l(a,b,c,d){return yc(a,b,c,d,!0).utc()}function m(){
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,
invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1
}}function n(a){return null==a._pf&&(a._pf=m()),a._pf}function o(a){if(null==a._isValid){var b=n(a),c=Be.call(b.parsedDateParts,function(a){
return null!=a}),d=!(isNaN(a._d.getTime())||!(b.overflow<0)||b.empty||b.invalidMonth||b.invalidWeekday||b.weekdayMismatch||b.nullInput||b.invalidFormat||b.userInvalidated||!(!b.meridiem||b.meridiem&&c));
if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;
a._isValid=d}return a._isValid}function p(a){var b=l(0/0);return null!=a?k(n(b),a):n(b).userInvalidated=!0,
b}function q(a,b){var c,d,e;if(f(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),f(b._i)||(a._i=b._i),
f(b._f)||(a._f=b._f),f(b._l)||(a._l=b._l),f(b._strict)||(a._strict=b._strict),f(b._tzm)||(a._tzm=b._tzm),
f(b._isUTC)||(a._isUTC=b._isUTC),f(b._offset)||(a._offset=b._offset),f(b._pf)||(a._pf=n(b)),f(b._locale)||(a._locale=b._locale),
Ce.length>0)for(c=0;c<Ce.length;c++)d=Ce[c],e=b[d],f(e)||(a[d]=e);return a}function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():0/0),
this.isValid()||(this._d=new Date(0/0)),De===!1&&(De=!0,a.updateOffset(this),De=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject;
}function t(a){return 0>a?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),
c}function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;
return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn;
}function x(b,c){var d=!0;return k(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),
d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";
for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e);
}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments);
},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),Ee[b]||(w(c),Ee[b]=!0)}function z(a){
return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){
var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source);
}function B(a,b){var c,e=k({},a);for(c in b)j(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},k(e[c],a[c]),k(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);
for(c in a)j(a,c)&&!j(b,c)&&d(a[c])&&(e[c]=k({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){
var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];
return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),
this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a);
}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){
var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();
Me[c]=Me[c+"s"]=Me[b]=a}function K(a){return"string"==typeof a?Me[a]||Me[a.toLowerCase()]:void 0}function L(a){
var b,c,d={};for(c in a)j(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Ne[a]=b}function N(a){
var b=[];for(var c in a)b.push({unit:c,priority:Ne[c]});return b.sort(function(a,b){return a.priority-b.priority;
}),b}function O(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d;
}function P(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Re[a]=e),b&&(Re[b[0]]=function(){
return O(e.apply(this,arguments),b[1],b[2])}),c&&(Re[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a);
})}function Q(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function R(a){
var b,c,d=a.match(Oe);for(b=0,c=d.length;c>b;b++)d[b]=Re[d[b]]?Re[d[b]]:Q(d[b]);return function(b){var e,f="";
for(e=0;c>e;e++)f+=z(d[e])?d[e].call(b,a):d[e];return f}}function S(a,b){return a.isValid()?(b=T(b,a.localeData()),
Qe[b]=Qe[b]||R(b),Qe[b](a)):a.localeData().invalidDate()}function T(a,b){function c(a){return b.longDateFormat(a)||a;
}var d=5;for(Pe.lastIndex=0;d>=0&&Pe.test(a);)a=a.replace(Pe,c),Pe.lastIndex=0,d-=1;return a}function U(a,b,c){
hf[a]=z(b)?b:function(a){return a&&c?c:b}}function V(a,b){return j(hf,a)?hf[a](b._strict,b._locale):new RegExp(W(a));
}function W(a){return X(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){
return b||c||d||e}))}function X(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Y(a,b){
var c,d=b;for("string"==typeof a&&(a=[a]),g(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)jf[a[c]]=d;
}function Z(a,b){Y(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function $(a,b,c){null!=b&&j(jf,a)&&jf[a](b,c._a,c,a);
}function _(a){return ab(a)?366:365}function ab(a){return a%4===0&&a%100!==0||a%400===0}function bb(){
return ab(this.year())}function cb(b,c){return function(d){return null!=d?(eb(this,b,d),a.updateOffset(this,c),
this):db(this,b)}}function db(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():0/0}function eb(a,b,c){
a.isValid()&&!isNaN(c)&&("FullYear"===b&&ab(a.year())?a._d["set"+(a._isUTC?"UTC":"")+b](c,a.month(),ib(c,a.month())):a._d["set"+(a._isUTC?"UTC":"")+b](c));
}function fb(a){return a=K(a),z(this[a])?this[a]():this}function gb(a,b){if("object"==typeof a){a=L(a);
for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);
return this}function hb(a,b){return(a%b+b)%b}function ib(a,b){if(isNaN(a)||isNaN(b))return 0/0;var c=hb(b,12);
return a+=(b-c)/12,1===c?ab(a)?29:28:31-c%7%2}function jb(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||vf).test(b)?"format":"standalone"][a.month()]:c(this._months)?this._months:this._months.standalone;
}function kb(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[vf.test(b)?"format":"standalone"][a.month()]:c(this._monthsShort)?this._monthsShort:this._monthsShort.standalone;
}function lb(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],
this._longMonthsParse=[],this._shortMonthsParse=[],d=0;12>d;++d)f=l([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),
this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=tf.call(this._shortMonthsParse,g),
-1!==e?e:null):(e=tf.call(this._longMonthsParse,g),-1!==e?e:null):"MMM"===b?(e=tf.call(this._shortMonthsParse,g),
-1!==e?e:(e=tf.call(this._longMonthsParse,g),-1!==e?e:null)):(e=tf.call(this._longMonthsParse,g),-1!==e?e:(e=tf.call(this._shortMonthsParse,g),
-1!==e?e:null))}function mb(a,b,c){var d,e,f;if(this._monthsParseExact)return lb.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],
this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=l([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),
this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),
this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;
if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d;
}}function nb(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else if(b=a.localeData().monthsParse(b),
!g(b))return a;return c=Math.min(a.date(),ib(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),
a}function ob(b){return null!=b?(nb(this,b),a.updateOffset(this,!0),this):db(this,"Month")}function pb(){
return ib(this.year(),this.month())}function qb(a){return this._monthsParseExact?(j(this,"_monthsRegex")||sb.call(this),
a?this._monthsShortStrictRegex:this._monthsShortRegex):(j(this,"_monthsShortRegex")||(this._monthsShortRegex=yf),
this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function rb(a){
return this._monthsParseExact?(j(this,"_monthsRegex")||sb.call(this),a?this._monthsStrictRegex:this._monthsRegex):(j(this,"_monthsRegex")||(this._monthsRegex=zf),
this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function sb(){function a(a,b){
return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=l([2e3,b]),d.push(this.monthsShort(c,"")),
e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),
f.sort(a),b=0;12>b;b++)d[b]=X(d[b]),e[b]=X(e[b]);for(b=0;24>b;b++)f[b]=X(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),
this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),
this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function tb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);
return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ub(a){var b=new Date(Date.UTC.apply(null,arguments));
return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function vb(a,b,c){var d=7+b-c,e=(7+ub(a,0,d).getUTCDay()-b)%7;
return-e+d-1}function wb(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=vb(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,
g=_(f)+j):j>_(a)?(f=a+1,g=j-_(a)):(f=a,g=j),{year:f,dayOfYear:g}}function xb(a,b,c){var d,e,f=vb(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;
return 1>g?(e=a.year()-1,d=g+yb(e,b,c)):g>yb(a.year(),b,c)?(d=g-yb(a.year(),b,c),e=a.year()+1):(e=a.year(),
d=g),{week:d,year:e}}function yb(a,b,c){var d=vb(a,b,c),e=vb(a+1,b,c);return(_(a)-d+e)/7}function zb(a){
return xb(a,this._week.dow,this._week.doy).week}function Ab(){return this._week.dow}function Bb(){return this._week.doy;
}function Cb(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Db(a){
var b=xb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Eb(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),
"number"==typeof a?a:null):parseInt(a,10)}function Fb(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a;
}function Gb(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:c(this._weekdays)?this._weekdays:this._weekdays.standalone;
}function Hb(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ib(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin;
}function Jb(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],
this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;7>d;++d)f=l([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),
this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();
return c?"dddd"===b?(e=tf.call(this._weekdaysParse,g),-1!==e?e:null):"ddd"===b?(e=tf.call(this._shortWeekdaysParse,g),
-1!==e?e:null):(e=tf.call(this._minWeekdaysParse,g),-1!==e?e:null):"dddd"===b?(e=tf.call(this._weekdaysParse,g),
-1!==e?e:(e=tf.call(this._shortWeekdaysParse,g),-1!==e?e:(e=tf.call(this._minWeekdaysParse,g),-1!==e?e:null))):"ddd"===b?(e=tf.call(this._shortWeekdaysParse,g),
-1!==e?e:(e=tf.call(this._weekdaysParse,g),-1!==e?e:(e=tf.call(this._minWeekdaysParse,g),-1!==e?e:null))):(e=tf.call(this._minWeekdaysParse,g),
-1!==e?e:(e=tf.call(this._weekdaysParse,g),-1!==e?e:(e=tf.call(this._shortWeekdaysParse,g),-1!==e?e:null)));
}function Kb(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Jb.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],
this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){if(e=l([2e3,1]).day(d),
c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),
this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),
this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),
this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;
if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;
if(!c&&this._weekdaysParse[d].test(a))return d}}function Lb(a){if(!this.isValid())return null!=a?this:0/0;
var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Eb(a,this.localeData()),this.add(a-b,"d")):b;
}function Mb(a){if(!this.isValid())return null!=a?this:0/0;var b=(this.day()+7-this.localeData()._week.dow)%7;
return null==a?b:this.add(a-b,"d")}function Nb(a){if(!this.isValid())return null!=a?this:0/0;if(null!=a){
var b=Fb(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Ob(a){
return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Rb.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(j(this,"_weekdaysRegex")||(this._weekdaysRegex=Ef),
this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Pb(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Rb.call(this),
a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(j(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ff),
this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Qb(a){
return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Rb.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(j(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Gf),
this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Rb(){function a(a,b){
return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;7>b;b++)c=l([2e3,1]).day(b),d=this.weekdaysMin(c,""),
e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);
for(g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;7>b;b++)h[b]=X(h[b]),i[b]=X(i[b]),j[b]=X(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),
this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),
this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i");
}function Sb(){return this.hours()%12||12}function Tb(){return this.hours()||24}function Ub(a,b){P(a,0,0,function(){
return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Vb(a,b){return b._meridiemParse;
}function Wb(a){return"p"===(a+"").toLowerCase().charAt(0)}function Xb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM";
}function Yb(a){return a?a.toLowerCase().replace("_","-"):a}function Zb(a){for(var b,c,d,e,f=0;f<a.length;){
for(e=Yb(a[f]).split("-"),b=e.length,c=Yb(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=$b(e.slice(0,b).join("-")))return d;
if(c&&c.length>=b&&v(e,c,!0)>=b-1)break;b--}f++}return null}function $b(a){var b=null;if(!Lf[a]&&"undefined"!=typeof module&&module&&module.exports)try{
b=Hf._abbr;var c=require;c("./locale/"+a),_b(b)}catch(d){}return Lf[a]}function _b(a,b){var c;return a&&(c=f(b)?cc(a):ac(a,b),
c&&(Hf=c)),Hf._abbr}function ac(a,b){if(null!==b){var c=Kf;if(b.abbr=a,null!=Lf[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
c=Lf[a]._config;else if(null!=b.parentLocale){if(null==Lf[b.parentLocale])return Mf[b.parentLocale]||(Mf[b.parentLocale]=[]),
Mf[b.parentLocale].push({name:a,config:b}),null;c=Lf[b.parentLocale]._config}return Lf[a]=new C(B(c,b)),
Mf[a]&&Mf[a].forEach(function(a){ac(a.name,a.config)}),_b(a),Lf[a]}return delete Lf[a],null}function bc(a,b){
if(null!=b){var c,d=Kf;null!=Lf[a]&&(d=Lf[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Lf[a],Lf[a]=c,
_b(a)}else null!=Lf[a]&&(null!=Lf[a].parentLocale?Lf[a]=Lf[a].parentLocale:null!=Lf[a]&&delete Lf[a]);
return Lf[a]}function cc(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Hf;
if(!c(a)){if(b=$b(a))return b;a=[a]}return Zb(a)}function dc(){return Fe(Lf)}function ec(a){var b,c=a._a;
return c&&-2===n(a).overflow&&(b=c[lf]<0||c[lf]>11?lf:c[mf]<1||c[mf]>ib(c[kf],c[lf])?mf:c[nf]<0||c[nf]>24||24===c[nf]&&(0!==c[of]||0!==c[pf]||0!==c[qf])?nf:c[of]<0||c[of]>59?of:c[pf]<0||c[pf]>59?pf:c[qf]<0||c[qf]>999?qf:-1,
n(a)._overflowDayOfYear&&(kf>b||b>mf)&&(b=mf),n(a)._overflowWeeks&&-1===b&&(b=rf),n(a)._overflowWeekday&&-1===b&&(b=sf),
n(a).overflow=b),a}function fc(a,b,c){return null!=a?a:null!=b?b:c}function gc(b){var c=new Date(a.now());
return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()];
}function hc(a){var b,c,d,e,f=[];if(!a._d){for(d=gc(a),a._w&&null==a._a[mf]&&null==a._a[lf]&&ic(a),null!=a._dayOfYear&&(e=fc(a._a[kf],d[kf]),
(a._dayOfYear>_(e)||0===a._dayOfYear)&&(n(a)._overflowDayOfYear=!0),c=ub(e,0,a._dayOfYear),a._a[lf]=c.getUTCMonth(),
a._a[mf]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];
24===a._a[nf]&&0===a._a[of]&&0===a._a[pf]&&0===a._a[qf]&&(a._nextDay=!0,a._a[nf]=0),a._d=(a._useUTC?ub:tb).apply(null,f),
null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[nf]=24),a._w&&"undefined"!=typeof a._w.d&&a._w.d!==a._d.getDay()&&(n(a).weekdayMismatch=!0);
}}function ic(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,c=fc(b.GG,a._a[kf],xb(zc(),1,4).year),
d=fc(b.W,1),e=fc(b.E,1),(1>e||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=xb(zc(),f,g);
c=fc(b.gg,a._a[kf],j.year),d=fc(b.w,j.week),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,
(b.e<0||b.e>6)&&(i=!0)):e=f}1>d||d>yb(c,f,g)?n(a)._overflowWeeks=!0:null!=i?n(a)._overflowWeekday=!0:(h=wb(c,d,e,f,g),
a._a[kf]=h.year,a._dayOfYear=h.dayOfYear)}function jc(a){var b,c,d,e,f,g,h=a._i,i=Nf.exec(h)||Of.exec(h);
if(i){for(n(a).iso=!0,b=0,c=Qf.length;c>b;b++)if(Qf[b][1].exec(i[1])){e=Qf[b][0],d=Qf[b][2]!==!1;break;
}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Rf.length;c>b;b++)if(Rf[b][1].exec(i[3])){
f=(i[2]||" ")+Rf[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);
if(i[4]){if(!Pf.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),rc(a)}else a._isValid=!1;
}function kc(a,b,c,d,e,f){var g=[lc(a),xf.indexOf(b),parseInt(c,10),parseInt(d,10),parseInt(e,10)];return f&&g.push(parseInt(f,10)),
g}function lc(a){var b=parseInt(a,10);return 49>=b?2e3+b:999>=b?1900+b:b}function mc(a){return a.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim();
}function nc(a,b,c){if(a){var d=Cf.indexOf(a),e=new Date(b[0],b[1],b[2]).getDay();if(d!==e)return n(c).weekdayMismatch=!0,
c._isValid=!1,!1}return!0}function oc(a,b,c){if(a)return Uf[a];if(b)return 0;var d=parseInt(c,10),e=d%100,f=(d-e)/100;
return 60*f+e}function pc(a){var b=Tf.exec(mc(a._i));if(b){var c=kc(b[4],b[3],b[2],b[5],b[6],b[7]);if(!nc(b[1],c,a))return;
a._a=c,a._tzm=oc(b[8],b[9],b[10]),a._d=ub.apply(null,a._a),a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),
n(a).rfc2822=!0}else a._isValid=!1}function qc(b){var c=Sf.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(jc(b),
void(b._isValid===!1&&(delete b._isValid,pc(b),b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b)))));
}function rc(b){if(b._f===a.ISO_8601)return void jc(b);if(b._f===a.RFC_2822)return void pc(b);b._a=[],
n(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=T(b._f,b._locale).match(Oe)||[],c=0;c<e.length;c++)f=e[c],
d=(h.match(V(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&n(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),
j+=d.length),Re[f]?(d?n(b).empty=!1:n(b).unusedTokens.push(f),$(f,d,b)):b._strict&&!d&&n(b).unusedTokens.push(f);
n(b).charsLeftOver=i-j,h.length>0&&n(b).unusedInput.push(h),b._a[nf]<=12&&n(b).bigHour===!0&&b._a[nf]>0&&(n(b).bigHour=void 0),
n(b).parsedDateParts=b._a.slice(0),n(b).meridiem=b._meridiem,b._a[nf]=sc(b._locale,b._a[nf],b._meridiem),
hc(b),ec(b)}function sc(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),
d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function tc(a){var b,c,d,e,f;if(0===a._f.length)return n(a).invalidFormat=!0,
void(a._d=new Date(0/0));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),
b._f=a._f[e],rc(b),o(b)&&(f+=n(b).charsLeftOver,f+=10*n(b).unusedTokens.length,n(b).score=f,(null==d||d>f)&&(d=f,
c=b));k(a,c||b)}function uc(a){if(!a._d){var b=L(a._i);a._a=i([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){
return a&&parseInt(a,10)}),hc(a)}}function vc(a){var b=new r(ec(wc(a)));return b._nextDay&&(b.add(1,"d"),
b._nextDay=void 0),b}function wc(a){var b=a._i,d=a._f;return a._locale=a._locale||cc(a._l),null===b||void 0===d&&""===b?p({
nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(ec(b)):(h(b)?a._d=b:c(d)?tc(a):d?rc(a):xc(a),
o(a)||(a._d=null),a))}function xc(b){var e=b._i;f(e)?b._d=new Date(a.now()):h(e)?b._d=new Date(e.valueOf()):"string"==typeof e?qc(b):c(e)?(b._a=i(e.slice(0),function(a){
return parseInt(a,10)}),hc(b)):d(e)?uc(b):g(e)?b._d=new Date(e):a.createFromInputFallback(b)}function yc(a,b,f,g,h){
var i={};return(f===!0||f===!1)&&(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,
i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,vc(i)}function zc(a,b,c,d){return yc(a,b,c,d,!1);
}function Ac(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return zc();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);
return d}function Bc(){var a=[].slice.call(arguments,0);return Ac("isBefore",a)}function Cc(){var a=[].slice.call(arguments,0);
return Ac("isAfter",a)}function Dc(a){for(var b in a)if(-1===tf.call(Yf,b)||null!=a[b]&&isNaN(a[b]))return!1;
for(var c=!1,d=0;d<Yf.length;++d)if(a[Yf[d]]){if(c)return!1;parseFloat(a[Yf[d]])!==u(a[Yf[d]])&&(c=!0);
}return!0}function Ec(){return this._isValid}function Fc(){return Yc(0/0)}function Gc(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;
this._isValid=Dc(b),this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,
this._data={},this._locale=cc(),this._bubble()}function Hc(a){return a instanceof Gc}function Ic(a){
return 0>a?-1*Math.round(-1*a):Math.round(a)}function Jc(a,b){P(a,0,0,function(){var a=this.utcOffset(),c="+";
return 0>a&&(a=-a,c="-"),c+O(~~(a/60),2)+b+O(~~a%60,2)})}function Kc(a,b){var c=(b||"").match(a);if(null===c)return null;
var d=c[c.length-1]||[],e=(d+"").match(Zf)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f;
}function Lc(b,c){var d,e;return c._isUTC?(d=c.clone(),e=(s(b)||h(b)?b.valueOf():zc(b).valueOf())-d.valueOf(),
d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):zc(b).local()}function Mc(a){return 15*-Math.round(a._d.getTimezoneOffset()/15);
}function Nc(b,c,d){var e,f=this._offset||0;if(!this.isValid())return null!=b?this:0/0;if(null!=b){if("string"==typeof b){
if(b=Kc(ef,b),null===b)return this}else Math.abs(b)<16&&!d&&(b=60*b);return!this._isUTC&&c&&(e=Mc(this)),
this._offset=b,this._isUTC=!0,null!=e&&this.add(e,"m"),f!==b&&(!c||this._changeInProgress?bd(this,Yc(b-f,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,
a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?f:Mc(this)}function Oc(a,b){
return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Pc(a){
return this.utcOffset(0,a)}function Qc(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Mc(this),"m")),
this}function Rc(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){
var a=Kc(df,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Sc(a){return this.isValid()?(a=a?zc(a).utcOffset():0,
(this.utcOffset()-a)%60===0):!1}function Tc(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset();
}function Uc(){if(!f(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=wc(a),a._a){
var b=a._isUTC?l(a._a):zc(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;
return this._isDSTShifted}function Vc(){return this.isValid()?!this._isUTC:!1}function Wc(){return this.isValid()?this._isUTC:!1;
}function Xc(){return this.isValid()?this._isUTC&&0===this._offset:!1}function Yc(a,b){var c,d,e,f=a,h=null;
return Hc(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:g(a)?(f={},b?f[b]=a:f.milliseconds=a):(h=$f.exec(a))?(c="-"===h[1]?-1:1,
f={y:0,d:u(h[mf])*c,h:u(h[nf])*c,m:u(h[of])*c,s:u(h[pf])*c,ms:u(Ic(1e3*h[qf]))*c}):(h=_f.exec(a))?(c="-"===h[1]?-1:"+"===h[1]?1:1,
f={y:Zc(h[2],c),M:Zc(h[3],c),w:Zc(h[4],c),d:Zc(h[5],c),h:Zc(h[6],c),m:Zc(h[7],c),s:Zc(h[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=_c(zc(f.from),zc(f.to)),
f={},f.ms=e.milliseconds,f.M=e.months),d=new Gc(f),Hc(a)&&j(a,"_locale")&&(d._locale=a._locale),d}function Zc(a,b){
var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function $c(a,b){var c={milliseconds:0,
months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,
c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function _c(a,b){var c;return a.isValid()&&b.isValid()?(b=Lc(b,a),
a.isBefore(b)?c=$c(a,b):(c=$c(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,
months:0}}function ad(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Yc(c,d),bd(this,e,a),this}}function bd(b,c,d,e){var f=c._milliseconds,g=Ic(c._days),h=Ic(c._months);
b.isValid()&&(e=null==e?!0:e,h&&nb(b,db(b,"Month")+h*d),g&&eb(b,"Date",db(b,"Date")+g*d),f&&b._d.setTime(b._d.valueOf()+f*d),
e&&a.updateOffset(b,g||h))}function cd(a,b){var c=a.diff(b,"days",!0);return-6>c?"sameElse":-1>c?"lastWeek":0>c?"lastDay":1>c?"sameDay":2>c?"nextDay":7>c?"nextWeek":"sameElse";
}function dd(b,c){var d=b||zc(),e=Lc(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);
return this.format(g||this.localeData().calendar(f,this,zc(d)))}function ed(){return new r(this)}function fd(a,b){
var c=s(a)?a:zc(a);return this.isValid()&&c.isValid()?(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf()):!1;
}function gd(a,b){var c=s(a)?a:zc(a);return this.isValid()&&c.isValid()?(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf()):!1;
}function hd(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c));
}function id(a,b){var c,d=s(a)?a:zc(a);return this.isValid()&&d.isValid()?(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),
this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf())):!1}function jd(a,b){return this.isSame(a,b)||this.isAfter(a,b);
}function kd(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function ld(a,b,c){var d,e,f;if(!this.isValid())return 0/0;
if(d=Lc(a,this),!d.isValid())return 0/0;switch(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b)){case"year":
f=md(this,d)/12;break;case"month":f=md(this,d);break;case"quarter":f=md(this,d)/3;break;case"second":
f=(this-d)/1e3;break;case"minute":f=(this-d)/6e4;break;case"hour":f=(this-d)/36e5;break;case"day":f=(this-d-e)/864e5;
break;case"week":f=(this-d-e)/6048e5;break;default:f=this-d}return c?f:t(f)}function md(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");
return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),
-(e+d)||0}function nd(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}
function od(){if(!this.isValid())return null;var a=this.clone().utc();return a.year()<0||a.year()>9999?S(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(Date.prototype.toISOString)?this.toDate().toISOString():S(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
}function pd(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",
b="Z");var c="["+a+'("]',d=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';
return this.format(c+d+e+f)}function qd(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=S(this,b);
return this.localeData().postformat(c)}function rd(a,b){return this.isValid()&&(s(a)&&a.isValid()||zc(a).isValid())?Yc({
to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function sd(a){return this.from(zc(),a);
}function td(a,b){return this.isValid()&&(s(a)&&a.isValid()||zc(a).isValid())?Yc({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate();
}function ud(a){return this.to(zc(),a)}function vd(a){var b;return void 0===a?this._locale._abbr:(b=cc(a),
null!=b&&(this._locale=b),this)}function wd(){return this._locale}function xd(a){switch(a=K(a)){case"year":
this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);
case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),
"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function yd(a){
return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"));
}function zd(){return this._d.valueOf()-6e4*(this._offset||0)}function Ad(){return Math.floor(this.valueOf()/1e3);
}function Bd(){return new Date(this.valueOf())}function Cd(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()];
}function Dd(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),
seconds:a.seconds(),milliseconds:a.milliseconds()}}function Ed(){return this.isValid()?this.toISOString():null;
}function Fd(){return o(this)}function Gd(){return k({},n(this))}function Hd(){return n(this).overflow;
}function Id(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict
}}function Jd(a,b){P(0,[a,a.length],0,b)}function Kd(a){return Od.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy);
}function Ld(a){return Od.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Md(){return yb(this.year(),1,4);
}function Nd(){var a=this.localeData()._week;return yb(this.year(),a.dow,a.doy)}function Od(a,b,c,d,e){
var f;return null==a?xb(this,d,e).year:(f=yb(a,d,e),b>f&&(b=f),Pd.call(this,a,b,c,d,e))}function Pd(a,b,c,d,e){
var f=wb(a,b,c,d,e),g=ub(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),
this.date(g.getUTCDate()),this}function Qd(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3);
}function Rd(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;
return null==a?b:this.add(a-b,"d")}function Sd(a,b){b[qf]=u(1e3*("0."+a))}function Td(){return this._isUTC?"UTC":"";
}function Ud(){return this._isUTC?"Coordinated Universal Time":""}function Vd(a){return zc(1e3*a)}function Wd(){
return zc.apply(null,arguments).parseZone()}function Xd(a){return a}function Yd(a,b,c,d){var e=cc(),f=l().set(d,b);
return e[c](f,a)}function Zd(a,b,c){if(g(a)&&(b=a,a=void 0),a=a||"",null!=b)return Yd(a,b,c,"month");
var d,e=[];for(d=0;12>d;d++)e[d]=Yd(a,d,c,"month");return e}function $d(a,b,c,d){"boolean"==typeof a?(g(b)&&(c=b,
b=void 0),b=b||""):(b=a,c=b,a=!1,g(b)&&(c=b,b=void 0),b=b||"");var e=cc(),f=a?e._week.dow:0;if(null!=c)return Yd(b,(c+f)%7,d,"day");
var h,i=[];for(h=0;7>h;h++)i[h]=Yd(b,(h+f)%7,d,"day");return i}function _d(a,b){return Zd(a,b,"months");
}function ae(a,b){return Zd(a,b,"monthsShort")}function be(a,b,c){return $d(a,b,c,"weekdays")}function ce(a,b,c){
return $d(a,b,c,"weekdaysShort")}function de(a,b,c){return $d(a,b,c,"weekdaysMin")}function ee(){var a=this._data;
return this._milliseconds=kg(this._milliseconds),this._days=kg(this._days),this._months=kg(this._months),
a.milliseconds=kg(a.milliseconds),a.seconds=kg(a.seconds),a.minutes=kg(a.minutes),a.hours=kg(a.hours),
a.months=kg(a.months),a.years=kg(a.years),this}function fe(a,b,c,d){var e=Yc(b,c);return a._milliseconds+=d*e._milliseconds,
a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function ge(a,b){return fe(this,a,b,1)}function he(a,b){
return fe(this,a,b,-1)}function ie(a){return 0>a?Math.floor(a):Math.ceil(a)}function je(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;
return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*ie(le(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),
i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ke(g)),h+=e,g-=ie(le(e)),
d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ke(a){return 4800*a/146097}function le(a){
return 146097*a/4800}function me(a){if(!this.isValid())return 0/0;var b,c,d=this._milliseconds;if(a=K(a),
"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ke(b),"month"===a?c:c/12;switch(b=this._days+Math.round(le(this._months)),
a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":
return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;
default:throw new Error("Unknown unit "+a)}}function ne(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12):0/0;
}function oe(a){return function(){return this.as(a)}}function pe(){return Yc(this)}function qe(a){return a=K(a),
this.isValid()?this[a+"s"]():0/0}function re(a){return function(){return this.isValid()?this._data[a]:0/0;
}}function se(){return t(this.days()/7)}function te(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function ue(a,b,c){
var d=Yc(a).abs(),e=Ag(d.as("s")),f=Ag(d.as("m")),g=Ag(d.as("h")),h=Ag(d.as("d")),i=Ag(d.as("M")),j=Ag(d.as("y")),k=e<=Bg.ss&&["s",e]||e<Bg.s&&["ss",e]||1>=f&&["m"]||f<Bg.m&&["mm",f]||1>=g&&["h"]||g<Bg.h&&["hh",g]||1>=h&&["d"]||h<Bg.d&&["dd",h]||1>=i&&["M"]||i<Bg.M&&["MM",i]||1>=j&&["y"]||["yy",j];
return k[2]=b,k[3]=+a>0,k[4]=c,te.apply(null,k)}function ve(a){return void 0===a?Ag:"function"==typeof a?(Ag=a,
!0):!1}function we(a,b){return void 0===Bg[a]?!1:void 0===b?Bg[a]:(Bg[a]=b,"s"===a&&(Bg.ss=b-1),!0)}
function xe(a){if(!this.isValid())return this.localeData().invalidDate();var b=this.localeData(),c=ue(this,!a,b);
return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function ye(a){return(a>0)-(0>a)||+a}function ze(){
if(!this.isValid())return this.localeData().invalidDate();var a,b,c,d=Cg(this._milliseconds)/1e3,e=Cg(this._days),f=Cg(this._months);
a=t(d/60),b=t(a/60),d%=60,a%=60,c=t(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d?d.toFixed(3).replace(/\.?0+$/,""):"",m=this.asSeconds();
if(!m)return"P0D";var n=0>m?"-":"",o=ye(this._months)!==ye(m)?"-":"",p=ye(this._days)!==ye(m)?"-":"",q=ye(this._milliseconds)!==ye(m)?"-":"";
return n+"P"+(g?o+g+"Y":"")+(h?o+h+"M":"")+(i?p+i+"D":"")+(j||k||l?"T":"")+(j?q+j+"H":"")+(k?q+k+"M":"")+(l?q+l+"S":"");
}var Ae,Be;Be=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;c>d;d++)if(d in b&&a.call(this,b[d],d,b))return!0;
return!1};var Ce=a.momentProperties=[],De=!1,Ee={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;
var Fe;Fe=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)j(a,b)&&c.push(b);return c};var Ge={
sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",
lastWeek:"[Last] dddd [at] LT",sameElse:"L"},He={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",
LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ie="Invalid date",Je="%d",Ke=/\d{1,2}/,Le={
future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",
hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Me={},Ne={},Oe=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Pe=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Qe={},Re={},Se=/\d/,Te=/\d\d/,Ue=/\d{3}/,Ve=/\d{4}/,We=/[+-]?\d{6}/,Xe=/\d\d?/,Ye=/\d\d\d\d?/,Ze=/\d\d\d\d\d\d?/,$e=/\d{1,3}/,_e=/\d{1,4}/,af=/[+-]?\d{1,6}/,bf=/\d+/,cf=/[+-]?\d+/,df=/Z|[+-]\d\d:?\d\d/gi,ef=/Z|[+-]\d\d(?::?\d\d)?/gi,ff=/[+-]?\d+(\.\d{1,3})?/,gf=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,hf={},jf={},kf=0,lf=1,mf=2,nf=3,of=4,pf=5,qf=6,rf=7,sf=8;
P("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),P(0,["YY",2],0,function(){return this.year()%100;
}),P(0,["YYYY",4],0,"year"),P(0,["YYYYY",5],0,"year"),P(0,["YYYYYY",6,!0],0,"year"),J("year","y"),M("year",1),
U("Y",cf),U("YY",Xe,Te),U("YYYY",_e,Ve),U("YYYYY",af,We),U("YYYYYY",af,We),Y(["YYYYY","YYYYYY"],kf),
Y("YYYY",function(b,c){c[kf]=2===b.length?a.parseTwoDigitYear(b):u(b)}),Y("YY",function(b,c){c[kf]=a.parseTwoDigitYear(b);
}),Y("Y",function(a,b){b[kf]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3);
};var tf,uf=cb("FullYear",!0);tf=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;
return-1},P("M",["MM",2],"Mo",function(){return this.month()+1}),P("MMM",0,0,function(a){return this.localeData().monthsShort(this,a);
}),P("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),M("month",8),U("M",Xe),
U("MM",Xe,Te),U("MMM",function(a,b){return b.monthsShortRegex(a)}),U("MMMM",function(a,b){return b.monthsRegex(a);
}),Y(["M","MM"],function(a,b){b[lf]=u(a)-1}),Y(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);
null!=e?b[lf]=e:n(c).invalidMonth=a});var vf=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,wf="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),xf="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),yf=gf,zf=gf;
P("w",["ww",2],"wo","week"),P("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),M("week",5),
M("isoWeek",5),U("w",Xe),U("ww",Xe,Te),U("W",Xe),U("WW",Xe,Te),Z(["w","ww","W","WW"],function(a,b,c,d){
b[d.substr(0,1)]=u(a)});var Af={dow:0,doy:6};P("d",0,"do","day"),P("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a);
}),P("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),P("dddd",0,0,function(a){
return this.localeData().weekdays(this,a)}),P("e",0,0,"weekday"),P("E",0,0,"isoWeekday"),J("day","d"),
J("weekday","e"),J("isoWeekday","E"),M("day",11),M("weekday",11),M("isoWeekday",11),U("d",Xe),U("e",Xe),
U("E",Xe),U("dd",function(a,b){return b.weekdaysMinRegex(a)}),U("ddd",function(a,b){return b.weekdaysShortRegex(a);
}),U("dddd",function(a,b){return b.weekdaysRegex(a)}),Z(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);
null!=e?b.d=e:n(c).invalidWeekday=a}),Z(["d","e","E"],function(a,b,c,d){b[d]=u(a)});var Bf="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Cf="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Df="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ef=gf,Ff=gf,Gf=gf;
P("H",["HH",2],0,"hour"),P("h",["hh",2],0,Sb),P("k",["kk",2],0,Tb),P("hmm",0,0,function(){return""+Sb.apply(this)+O(this.minutes(),2);
}),P("hmmss",0,0,function(){return""+Sb.apply(this)+O(this.minutes(),2)+O(this.seconds(),2)}),P("Hmm",0,0,function(){
return""+this.hours()+O(this.minutes(),2)}),P("Hmmss",0,0,function(){return""+this.hours()+O(this.minutes(),2)+O(this.seconds(),2);
}),Ub("a",!0),Ub("A",!1),J("hour","h"),M("hour",13),U("a",Vb),U("A",Vb),U("H",Xe),U("h",Xe),U("k",Xe),
U("HH",Xe,Te),U("hh",Xe,Te),U("kk",Xe,Te),U("hmm",Ye),U("hmmss",Ze),U("Hmm",Ye),U("Hmmss",Ze),Y(["H","HH"],nf),
Y(["k","kk"],function(a,b){var c=u(a);b[nf]=24===c?0:c}),Y(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),
c._meridiem=a}),Y(["h","hh"],function(a,b,c){b[nf]=u(a),n(c).bigHour=!0}),Y("hmm",function(a,b,c){var d=a.length-2;
b[nf]=u(a.substr(0,d)),b[of]=u(a.substr(d)),n(c).bigHour=!0}),Y("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;
b[nf]=u(a.substr(0,d)),b[of]=u(a.substr(d,2)),b[pf]=u(a.substr(e)),n(c).bigHour=!0}),Y("Hmm",function(a,b){
var c=a.length-2;b[nf]=u(a.substr(0,c)),b[of]=u(a.substr(c))}),Y("Hmmss",function(a,b){var c=a.length-4,d=a.length-2;
b[nf]=u(a.substr(0,c)),b[of]=u(a.substr(c,2)),b[pf]=u(a.substr(d))});var Hf,If=/[ap]\.?m?\.?/i,Jf=cb("Hours",!0),Kf={
calendar:Ge,longDateFormat:He,invalidDate:Ie,ordinal:Je,dayOfMonthOrdinalParse:Ke,relativeTime:Le,months:wf,
monthsShort:xf,week:Af,weekdays:Bf,weekdaysMin:Df,weekdaysShort:Cf,meridiemParse:If},Lf={},Mf={},Nf=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Of=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Pf=/Z|[+-]\d\d(?::?\d\d)?/,Qf=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Rf=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Sf=/^\/?Date\((\-?\d+)/i,Tf=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Uf={
UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};a.createFromInputFallback=x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){
a._d=new Date(a._i+(a._useUTC?" UTC":""))}),a.ISO_8601=function(){},a.RFC_2822=function(){};var Vf=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){
var a=zc.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:p()}),Wf=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){
var a=zc.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:p()}),Xf=function(){
return Date.now?Date.now():+new Date},Yf=["year","quarter","month","week","day","hour","minute","second","millisecond"];
Jc("Z",":"),Jc("ZZ",""),U("Z",ef),U("ZZ",ef),Y(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Kc(ef,a);
});var Zf=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var $f=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,_f=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
Yc.fn=Gc.prototype,Yc.invalid=Fc;var ag=ad(1,"add"),bg=ad(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",
a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var cg=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){
return void 0===a?this.localeData():this.locale(a)});P(0,["gg",2],0,function(){return this.weekYear()%100;
}),P(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Jd("gggg","weekYear"),Jd("ggggg","weekYear"),
Jd("GGGG","isoWeekYear"),Jd("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),M("weekYear",1),
M("isoWeekYear",1),U("G",cf),U("g",cf),U("GG",Xe,Te),U("gg",Xe,Te),U("GGGG",_e,Ve),U("gggg",_e,Ve),U("GGGGG",af,We),
U("ggggg",af,We),Z(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),Z(["gg","GG"],function(b,c,d,e){
c[e]=a.parseTwoDigitYear(b)}),P("Q",0,"Qo","quarter"),J("quarter","Q"),M("quarter",7),U("Q",Se),Y("Q",function(a,b){
b[lf]=3*(u(a)-1)}),P("D",["DD",2],"Do","date"),J("date","D"),M("date",9),U("D",Xe),U("DD",Xe,Te),U("Do",function(a,b){
return a?b._dayOfMonthOrdinalParse||b._ordinalParse:b._dayOfMonthOrdinalParseLenient}),Y(["D","DD"],mf),
Y("Do",function(a,b){b[mf]=u(a.match(Xe)[0],10)});var dg=cb("Date",!0);P("DDD",["DDDD",3],"DDDo","dayOfYear"),
J("dayOfYear","DDD"),M("dayOfYear",4),U("DDD",$e),U("DDDD",Ue),Y(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a);
}),P("m",["mm",2],0,"minute"),J("minute","m"),M("minute",14),U("m",Xe),U("mm",Xe,Te),Y(["m","mm"],of);
var eg=cb("Minutes",!1);P("s",["ss",2],0,"second"),J("second","s"),M("second",15),U("s",Xe),U("ss",Xe,Te),
Y(["s","ss"],pf);var fg=cb("Seconds",!1);P("S",0,0,function(){return~~(this.millisecond()/100)}),P(0,["SS",2],0,function(){
return~~(this.millisecond()/10)}),P(0,["SSS",3],0,"millisecond"),P(0,["SSSS",4],0,function(){return 10*this.millisecond();
}),P(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),P(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond();
}),P(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),P(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond();
}),P(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),M("millisecond",16),
U("S",$e,Se),U("SS",$e,Te),U("SSS",$e,Ue);var gg;for(gg="SSSS";gg.length<=9;gg+="S")U(gg,bf);for(gg="S";gg.length<=9;gg+="S")Y(gg,Sd);
var hg=cb("Milliseconds",!1);P("z",0,0,"zoneAbbr"),P("zz",0,0,"zoneName");var ig=r.prototype;ig.add=ag,
ig.calendar=dd,ig.clone=ed,ig.diff=ld,ig.endOf=yd,ig.format=qd,ig.from=rd,ig.fromNow=sd,ig.to=td,ig.toNow=ud,
ig.get=fb,ig.invalidAt=Hd,ig.isAfter=fd,ig.isBefore=gd,ig.isBetween=hd,ig.isSame=id,ig.isSameOrAfter=jd,
ig.isSameOrBefore=kd,ig.isValid=Fd,ig.lang=cg,ig.locale=vd,ig.localeData=wd,ig.max=Wf,ig.min=Vf,ig.parsingFlags=Gd,
ig.set=gb,ig.startOf=xd,ig.subtract=bg,ig.toArray=Cd,ig.toObject=Dd,ig.toDate=Bd,ig.toISOString=od,ig.inspect=pd,
ig.toJSON=Ed,ig.toString=nd,ig.unix=Ad,ig.valueOf=zd,ig.creationData=Id,ig.year=uf,ig.isLeapYear=bb,
ig.weekYear=Kd,ig.isoWeekYear=Ld,ig.quarter=ig.quarters=Qd,ig.month=ob,ig.daysInMonth=pb,ig.week=ig.weeks=Cb,
ig.isoWeek=ig.isoWeeks=Db,ig.weeksInYear=Nd,ig.isoWeeksInYear=Md,ig.date=dg,ig.day=ig.days=Lb,ig.weekday=Mb,
ig.isoWeekday=Nb,ig.dayOfYear=Rd,ig.hour=ig.hours=Jf,ig.minute=ig.minutes=eg,ig.second=ig.seconds=fg,
ig.millisecond=ig.milliseconds=hg,ig.utcOffset=Nc,ig.utc=Pc,ig.local=Qc,ig.parseZone=Rc,ig.hasAlignedHourOffset=Sc,
ig.isDST=Tc,ig.isLocal=Vc,ig.isUtcOffset=Wc,ig.isUtc=Xc,ig.isUTC=Xc,ig.zoneAbbr=Td,ig.zoneName=Ud,ig.dates=x("dates accessor is deprecated. Use date instead.",dg),
ig.months=x("months accessor is deprecated. Use month instead",ob),ig.years=x("years accessor is deprecated. Use year instead",uf),
ig.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Oc),
ig.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Uc);
var jg=C.prototype;jg.calendar=D,jg.longDateFormat=E,jg.invalidDate=F,jg.ordinal=G,jg.preparse=Xd,jg.postformat=Xd,
jg.relativeTime=H,jg.pastFuture=I,jg.set=A,jg.months=jb,jg.monthsShort=kb,jg.monthsParse=mb,jg.monthsRegex=rb,
jg.monthsShortRegex=qb,jg.week=zb,jg.firstDayOfYear=Bb,jg.firstDayOfWeek=Ab,jg.weekdays=Gb,jg.weekdaysMin=Ib,
jg.weekdaysShort=Hb,jg.weekdaysParse=Kb,jg.weekdaysRegex=Ob,jg.weekdaysShortRegex=Pb,jg.weekdaysMinRegex=Qb,
jg.isPM=Wb,jg.meridiem=Xb,_b("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){
var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=x("moment.lang is deprecated. Use moment.locale instead.",_b),
a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",cc);var kg=Math.abs,lg=oe("ms"),mg=oe("s"),ng=oe("m"),og=oe("h"),pg=oe("d"),qg=oe("w"),rg=oe("M"),sg=oe("y"),tg=re("milliseconds"),ug=re("seconds"),vg=re("minutes"),wg=re("hours"),xg=re("days"),yg=re("months"),zg=re("years"),Ag=Math.round,Bg={
ss:44,s:45,m:45,h:22,d:26,M:11},Cg=Math.abs,Dg=Gc.prototype;return Dg.isValid=Ec,Dg.abs=ee,Dg.add=ge,
Dg.subtract=he,Dg.as=me,Dg.asMilliseconds=lg,Dg.asSeconds=mg,Dg.asMinutes=ng,Dg.asHours=og,Dg.asDays=pg,
Dg.asWeeks=qg,Dg.asMonths=rg,Dg.asYears=sg,Dg.valueOf=ne,Dg._bubble=je,Dg.clone=pe,Dg.get=qe,Dg.milliseconds=tg,
Dg.seconds=ug,Dg.minutes=vg,Dg.hours=wg,Dg.days=xg,Dg.weeks=se,Dg.months=yg,Dg.years=zg,Dg.humanize=xe,
Dg.toISOString=ze,Dg.toString=ze,Dg.toJSON=ze,Dg.locale=vd,Dg.localeData=wd,Dg.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ze),
Dg.lang=cg,P("X",0,0,"unix"),P("x",0,0,"valueOf"),U("x",cf),U("X",ff),Y("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10));
}),Y("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.19.1",b(zc),a.fn=ig,a.min=Bc,a.max=Cc,a.now=Xf,
a.utc=l,a.unix=Vd,a.months=_d,a.isDate=h,a.locale=_b,a.invalid=p,a.duration=Yc,a.isMoment=s,a.weekdays=be,
a.parseZone=Wd,a.localeData=cc,a.isDuration=Hc,a.monthsShort=ae,a.weekdaysMin=de,a.defineLocale=ac,a.updateLocale=bc,
a.locales=dc,a.weekdaysShort=ce,a.normalizeUnits=K,a.relativeTimeRounding=ve,a.relativeTimeThreshold=we,
a.calendarFormat=cd,a.prototype=ig,a}),function(a,b){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?b(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],b):b(a.moment);
}(this,function(a){"use strict";var b=a.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"HH:mm",
LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 HH:mm dddd",l:"YYYY/MM/DD",
ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日 HH:mm dddd"},meridiemParse:/午前|午後/i,isPM:function(a){
return"午後"===a},meridiem:function(a){return 12>a?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",
nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}日/,
ordinal:function(a,b){switch(b){case"d":case"D":case"DDD":return a+"日";default:return a}},relativeTime:{
future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",
yy:"%d年"}});return b}),function(a,b){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?b(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],b):b(a.moment);
}(this,function(a){"use strict";var b=a.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h:mm",
LTS:"A h:mm:ss",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",
l:"YYYY.MM.DD",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},calendar:{
sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"
},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",
dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(a,b){
switch(b){case"d":case"D":case"DDD":return a+"일";case"M":return a+"월";case"w":case"W":return a+"주";default:
return a}},meridiemParse:/오전|오후/,isPM:function(a){return"오후"===a},meridiem:function(a){return 12>a?"오전":"오후";
}});return b}),function(a,b){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?b(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],b):b(a.moment);
}(this,function(a){"use strict";var b=a.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{
LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah点mm分",LLLL:"YYYY年MMMD日ddddAh点mm分",
l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日 HH:mm",llll:"YYYY年MMMD日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,
meridiemHour:function(a,b){return 12===a&&(a=0),"凌晨"===b||"早上"===b||"上午"===b?a:"下午"===b||"晚上"===b?a+12:a>=11?a:a+12;
},meridiem:function(a,b){var c=100*a+b;return 600>c?"凌晨":900>c?"早上":1130>c?"上午":1230>c?"中午":1800>c?"下午":"晚上";
},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",
sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(a,b){switch(b){case"d":case"D":
case"DDD":return a+"日";case"M":return a+"月";case"w":case"W":return a+"周";default:return a}},relativeTime:{
future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",
y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}});return b}),function(a,b){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?b(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],b):b(a.moment);
}(this,function(a){"use strict";var b=a.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{
LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日 HH:mm",LLLL:"YYYY年MMMD日dddd HH:mm",
l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日 HH:mm",llll:"YYYY年MMMD日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,
meridiemHour:function(a,b){return 12===a&&(a=0),"凌晨"===b||"早上"===b||"上午"===b?a:"中午"===b?a>=11?a:a+12:"下午"===b||"晚上"===b?a+12:void 0;
},meridiem:function(a,b){var c=100*a+b;return 600>c?"凌晨":900>c?"早上":1130>c?"上午":1230>c?"中午":1800>c?"下午":"晚上";
},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",
sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(a,b){switch(b){case"d":case"D":
case"DDD":return a+"日";case"M":return a+"月";case"w":case"W":return a+"週";default:return a}},relativeTime:{
future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",
y:"1 年",yy:"%d 年"}});return b}),"undefined"==typeof window.nhn&&(window.nhn={}),nhn.husky||(nhn.husky={}),
function(){var a=/^\$(LOCAL|BEFORE|ON|AFTER)_/,b=/^\$(BEFORE|ON|AFTER)_MSG_APP_READY$/,c=[],d={};nhn.husky.HuskyCore=jindo.$Class({
name:"HuskyCore",aCallerStack:null,bMobile:jindo.$Agent().navigator().mobile||jindo.$Agent().navigator().msafari,
$init:function(a){this.htOptions=a||{},c.push(this),this.htOptions.oDebugger&&(nhn.husky.HuskyCore.getCore=function(){
return c},this.htOptions.oDebugger.setApp(this)),this.messageQueue=[],this.oMessageMap={},this.oDisabledMessage={},
this.oLazyMessage={},this.aPlugins=[],this.appStatus=nhn.husky.APP_STATUS.NOT_READY,this.aCallerStack=[],
this._fnWaitForPluginReady=jindo.$Fn(this._waitForPluginReady,this).bind(),this.registerPlugin(this);
},setDebugger:function(a){this.htOptions.oDebugger=a,a.setApp(this)},exec:function(a,b,c){return this.appStatus==nhn.husky.APP_STATUS.NOT_READY?(this.messageQueue[this.messageQueue.length]={
msg:a,args:b,event:c},!0):(this.exec=this._exec,void this.exec(a,b,c))},delayedExec:function(a,b,c,d){
var e=jindo.$Fn(this.exec,this).bind(a,b,d);setTimeout(e,c)},_exec:function(a,b,c){return(this._exec=this.htOptions.oDebugger?this._execWithDebugger:this._execWithoutDebugger).call(this,a,b,c);
},_execWithDebugger:function(a,b,c){this.htOptions.oDebugger.log_MessageStart(a,b);var d=this._doExec(a,b,c);
return this.htOptions.oDebugger.log_MessageEnd(a,b),d},_execWithoutDebugger:function(a,b,c){return this._doExec(a,b,c);
},_doExec:function(a,b,c){var d=!1;if(this.oLazyMessage[a]){var e=this.oLazyMessage[a];return this._loadLazyFiles(a,b,c,e.aFilenames,0),
!1}if(!this.oDisabledMessage[a]){var f=[];if(b&&b.length)for(var g=b.length,h=0;g>h;h++)f[h]=b[h];c&&(f[f.length]=c),
d=this._execMsgStep("BEFORE",a,f),d&&(d=this._execMsgStep("ON",a,f)),d&&(d=this._execMsgStep("AFTER",a,f));
}return d},registerPlugin:function(b){if(!b)throw"An error occured in registerPlugin(): invalid plug-in";
if(b.nIdx=this.aPlugins.length,b.oApp=this,this.aPlugins[b.nIdx]=b,b.status!=nhn.husky.PLUGIN_STATUS.NOT_READY&&(b.status=nhn.husky.PLUGIN_STATUS.READY),
this.appStatus!=nhn.husky.APP_STATUS.NOT_READY)for(var c in b)a.test(c)&&this.addToMessageMap(c,b);return this.exec("MSG_PLUGIN_REGISTERED",[b]),
b.nIdx},disableMessage:function(a,b){this.oDisabledMessage[a]=b},registerBrowserEvent:function(a,b,c,d,e){
d=d||[];var f=e?jindo.$Fn(this.delayedExec,this).bind(c,d,e):jindo.$Fn(this.exec,this).bind(c,d);return jindo.$Fn(f,this).attach(a,b);
},run:function(a){this.htRunOptions=a||{},this._changeAppStatus(nhn.husky.APP_STATUS.WAITING_FOR_PLUGINS_READY);
for(var b=this.messageQueue.length,c=0;b>c;c++){var d=this.messageQueue[c];this.exec(d.msg,d.args,d.event);
}this._fnWaitForPluginReady()},acceptLocalBeforeFirstAgain:function(a,b){a._husky_bRun=!b},createMessageMap:function(a){
this.oMessageMap[a]=[];for(var b=this.aPlugins.length,c=0;b>c;c++)this._doAddToMessageMap(a,this.aPlugins[c]);
},addToMessageMap:function(a,b){this.oMessageMap[a]&&this._doAddToMessageMap(a,b)},_changeAppStatus:function(a){
this.appStatus=a,this.appStatus==nhn.husky.APP_STATUS.READY&&this.exec("MSG_APP_READY")},_execMsgStep:function(a,b,c){
return(this._execMsgStep=this.htOptions.oDebugger?this._execMsgStepWithDebugger:this._execMsgStepWithoutDebugger).call(this,a,b,c);
},_execMsgStepWithDebugger:function(a,b,c){this.htOptions.oDebugger.log_MessageStepStart(a,b,c);var d=this._execMsgHandler("$"+a+"_"+b,c);
return this.htOptions.oDebugger.log_MessageStepEnd(a,b,c),d},_execMsgStepWithoutDebugger:function(a,b,c){
return this._execMsgHandler("$"+a+"_"+b,c)},_execMsgHandler:function(a,c){var d;this.oMessageMap[a]||this.createMessageMap(a);
var e=this.oMessageMap[a],f=e.length;if(0===f)return!0;var g=!0;if(b.test(a)){for(d=0;f>d;d++)if(this._execHandler(e[d],a,c)===!1){
g=!1;break}}else for(d=0;f>d;d++)if((e[d]._husky_bRun||(e[d]._husky_bRun=!0,"function"!=typeof e[d].$LOCAL_BEFORE_FIRST||this._execHandler(e[d],"$LOCAL_BEFORE_FIRST",[a,c])!==!1))&&("function"!=typeof e[d].$LOCAL_BEFORE_ALL||this._execHandler(e[d],"$LOCAL_BEFORE_ALL",[a,c])!==!1)&&this._execHandler(e[d],a,c)===!1){
g=!1;break}return g},_execHandler:function(a,b,c){return(this._execHandler=this.htOptions.oDebugger?this._execHandlerWithDebugger:this._execHandlerWithoutDebugger).call(this,a,b,c);
},_execHandlerWithDebugger:function(a,b,c){this.htOptions.oDebugger.log_CallHandlerStart(a,b,c);var d;
try{this.aCallerStack.push(a),d=a[b].apply(a,c),this.aCallerStack.pop()}catch(e){this.htOptions.oDebugger.handleException(e),
d=!1}return this.htOptions.oDebugger.log_CallHandlerEnd(a,b,c),d},_execHandlerWithoutDebugger:function(a,b,c){
this.aCallerStack.push(a);var d=a[b].apply(a,c);return this.aCallerStack.pop(),d},_doAddToMessageMap:function(a,b){
if("function"==typeof b[a]){for(var c=this.oMessageMap[a],d=0,e=c.length;e>d;d++)if(this.oMessageMap[a][d]==b)return;
this.oMessageMap[a][d]=b}},_waitForPluginReady:function(){for(var a=!0,b=0;b<this.aPlugins.length;b++)if(this.aPlugins[b].status==nhn.husky.PLUGIN_STATUS.NOT_READY){
a=!1;break}a?this._changeAppStatus(nhn.husky.APP_STATUS.READY):setTimeout(this._fnWaitForPluginReady,100);
},_loadLazyFiles:function(a,b,c,e,f){var g=e.length;if(f>=g)return this.oLazyMessage[a]=null,void this.oApp.exec(a,b,c);
var h=e[f];d[h]?this._loadLazyFiles(a,b,c,e,f+1):jindo.LazyLoading.load(nhn.husky.SE2M_Configuration.LazyLoad.sJsBaseURI+"/"+h,jindo.$Fn(function(a,b,c,e,f){
var g=e[f];d[g]=1,this._loadLazyFiles(a,b,c,e,f+1)},this).bind(a,b,c,e,f),"utf-8")},registerLazyMessage:function(a,b){
a=a||[],b=b||[];for(var c,d,e=0;c=a[e];e++)d=this.oLazyMessage[c],d?d.aFilenames=d.aFilenames.concat(b):this.oLazyMessage[c]={
sMsg:c,aFilenames:b}}}),nhn.husky.HuskyCore._htLoadedFile={},nhn.husky.HuskyCore.addLoadedFile=function(a){
d[a]=1},nhn.husky.HuskyCore.mixin=function(b,d,e){for(var f,g=[],h=0;f=c[h];h++)for(var i,j=0;i=f.aPlugins[j];j++)if(i instanceof b)g.push(i),
"function"!=typeof i.$LOCAL_BEFORE_FIRST&&i.oApp.acceptLocalBeforeFirstAgain(i,!0);else if(i._$superClass===b){
"function"!=typeof i.$LOCAL_BEFORE_FIRST&&i.oApp.acceptLocalBeforeFirstAgain(i,!0);for(var k in d)(e||!i.hasOwnProperty(k))&&(i[k]=d[k],
a.test(k)&&i.oApp.addToMessageMap(k,i))}for(var k in d)if((e||!b.prototype.hasOwnProperty(k))&&(b.prototype[k]=d[k],
a.test(k)))for(var i,j=0;i=g[j];j++)i.oApp.addToMessageMap(k,i)},nhn.husky.APP_STATUS={NOT_READY:0,WAITING_FOR_PLUGINS_READY:1,
READY:2},nhn.husky.PLUGIN_STATUS={NOT_READY:0,READY:1}}(),nhn.husky.CorePlugin=jindo.$Class({name:"CorePlugin",
htLazyLoadRequest_plugins:{},htLazyLoadRequest_allFiles:{},htHTMLLoaded:{},$AFTER_MSG_APP_READY:function(){
this.oApp.exec("EXEC_ON_READY_FUNCTION",[])},$ON_ADD_APP_PROPERTY:function(a,b){this.oApp[a]=b},$ON_REGISTER_BROWSER_EVENT:function(a,b,c,d,e){
this.oApp.registerBrowserEvent(a,b,c,d,e)},$ON_DISABLE_MESSAGE:function(a){this.oApp.disableMessage(a,!0);
},$ON_ENABLE_MESSAGE:function(a){this.oApp.disableMessage(a,!1)},$ON_LOAD_FULL_PLUGIN:function(a,b,c,d,e){
var f=(d.$this||d,a[0]);this.htLazyLoadRequest_plugins[f]||(this.htLazyLoadRequest_plugins[f]={nStatus:1,
sContents:""}),2===this.htLazyLoadRequest_plugins[f].nStatus?this.oApp.exec("MSG_FULL_PLUGIN_LOADED",[f,b,c,d,e,!1]):this._loadFullPlugin(a,b,c,d,e,0);
},_loadFullPlugin:function(a,b,c,d,e,f){jindo.LazyLoading.load(nhn.husky.SE2M_Configuration.LazyLoad.sJsBaseURI+"/"+a[f],jindo.$Fn(function(a,b,c,d,e,f){
var g=(a[f],a[0]);return f==a.length-1?(this.htLazyLoadRequest_plugins[g].nStatus=2,void this.oApp.exec("MSG_FULL_PLUGIN_LOADED",[a,b,c,d,e])):void this._loadFullPlugin(a,b,c,d,e,f+1);
},this).bind(a,b,c,d,e,f),"utf-8")},$ON_MSG_FULL_PLUGIN_LOADED:function(aFilenames,sClassName,sMsgName,oThisRef,oArguments,oRes){
for(var oPluginRef=oThisRef.$this||oThisRef,sFilename=aFilenames,i=0,nLen=oThisRef._huskyFLT.length;nLen>i;i++){
var sLoaderHandlerName="$BEFORE_"+oThisRef._huskyFLT[i],oRemoveFrom=oThisRef.$this&&oThisRef[sLoaderHandlerName]?oThisRef:oPluginRef;
oRemoveFrom[sLoaderHandlerName]=null,this.oApp.createMessageMap(sLoaderHandlerName)}var oPlugin=eval(sClassName+".prototype"),bAcceptLocalBeforeFirstAgain=!1;
"function"!=typeof oPluginRef.$LOCAL_BEFORE_FIRST&&this.oApp.acceptLocalBeforeFirstAgain(oPluginRef,!0);
for(var x in oPlugin)oThisRef.$this&&(!oThisRef[x]||"function"==typeof oPlugin[x]&&"constructor"!=x)&&(oThisRef[x]=jindo.$Fn(oPlugin[x],oPluginRef).bind()),
oPlugin[x]&&(!oPluginRef[x]||"function"==typeof oPlugin[x]&&"constructor"!=x)&&(oPluginRef[x]=oPlugin[x],
x.match(/^\$(LOCAL|BEFORE|ON|AFTER)_/)&&this.oApp.addToMessageMap(x,oPluginRef));bAcceptLocalBeforeFirstAgain&&this.oApp.acceptLocalBeforeFirstAgain(oPluginRef,!0),
oThisRef.$this||this.oApp.exec(sMsgName,oArguments)},$ON_LOAD_HTML:function(a){if(!this.htHTMLLoaded[a]){
var b=jindo.$("_llh_"+a);if(b){this.htHTMLLoaded[a]=!0;var c=document.createElement("DIV");for(c.innerHTML=b.value;c.firstChild;)b.parentNode.insertBefore(c.firstChild,b);
}}},$ON_EXEC_ON_READY_FUNCTION:function(){"function"==typeof this.oApp.htRunOptions.fnOnAppReady&&this.oApp.htRunOptions.fnOnAppReady();
}}),mcNotice=function(){var a=null,b=null,c=5e3,d=0,e=0,f=null,g=null,h=null,i=860,j=null,k={newMail:"<span> "+nLang.c.got_newmail+"</span>",
notice:'<a href=\'#\' onclick=\'window.open("{url}","mail_notice","width=770,height=670,resizable=no,scrollbars=yes");ccr(this,"ltp.notice",event); return false;\' target=\'_blank\'>{msg}</a>',
loading:"<span class='loading_bar'>"+nLang.c.processing+"...</span>",arranging:"<span class='loading_bar'> "+nLang.c.arranging_old_mail+"</span>",
selectedListCount:"<span class='selection'>"+nLang.c.select_mail_num+"</span>",selectedListCountWithConversation:"<span class='selection'>"+nLang.c.select_mail_num_conversation+"</span>",
clear:"&nbsp;"},l=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,5,9,7,11,8,3,4,4,7,7,3,7,3,7,7,4,7,7,7,7,7,6,7,7,3,4,7,7,7,7,10,9,8,9,8,8,7,9,8,3,7,8,8,11,8,9,8,9,8,8,8,8,9,11,9,9,8,4,12,5,7,5,3,8,7,7,7,7,5,7,7,3,3,7,3,9,7,7,7,7,5,7,5,7,7,10,7,7,7,6,3,6,9,0,0],n=function(){
b=$Element("notice"),g=new jindo.Timer("interval"),e=void 0==m.info.noticeList?0:m.info.noticeList.length,
h=$Fn(_startRollingNotice,this)},o=function(){return t()?(_stopRollingNotice(),_showMessage("newMail"),
f=setTimeout($Fn(_endMessage,this).bind(),3200),void s()):void _showMessage("clear")},p=function(a,b){
if(0==a||!t())return void _showMessage("clear");if(_stopRollingNotice(),"undefined"==typeof a){a=0;var b=0;
_woCurMailList.forEach(function(c){(c.mailSN+"").match(/^c/)?b++:a++})}a>0&&b>0?_showMessage("selectedListCountWithConversation",a,b):1>a&&b>0?_showMessage("selectedListCount",b):a>0&&1>b?_showMessage("selectedListCount",a):_showMessage("clear");
},q=function(a){return t()?("/json/arrange/oldmail"==a?_showMessage("arranging"):null==f&&"/json/newmail/"!=a&&"/write/popup/"!=a&&"/json/list/receiptReceiversList/"!=a&&_showMessage("loading"),
void("/json/read/"==a&&_showMessage("loading"))):void r()},r=function(){var a=b&&b.query(".loading_bar");
a&&_showMessage("clear")};_endMessage=function(){f=null},_stopRollingNotice=function(){g.abort()},_startRollingNotice=function(){
if(0!=e&&"undefined"!=typeof m.info){if(!t())return void _stopRollingNotice();var a=k.notice,c=m.info.noticeList[d].url;
c=c.indexOf("://")>0?c:"https://"+window.location.hostname+c,a=a.replace("{url}",c),a=a.replace("{fullMsg}",m.info.noticeList[d].subject),
a=a.replace("{msg}",_cutStrByPixel(m.info.noticeList[d].subject,210,"")),d=(d+1)%e,b.html(a);var f=$$.getSingle("a",b);
return f.onfocus=function(){_stopRollingNotice()},f.onblur=function(){s()},!0}};var s=function(){setTimeout($Fn(_startRollingNotice,this).bind(),3200),
setTimeout(function(){g.start(h.bind(),c)},3200)};_showMessage=function(d,e,f){"undefined"==typeof b&&n();
var i=k[d];mcCore.isNaver()||"selectedListCount"!=d||(i=i.replace(nLang.c.select_mail_num,mcCore.getMemoboxString("select_mail_num",mCom.nCurrentFolder,"c"))),
"selectedListCount"==d?i=i.replace("{sStatus}",e):"selectedListCountWithConversation"==d&&(i=i.replace("{normalCount}",e).replace("{conversationCount}",f)),
b.html(i),a=d,"clear"==a&&(_startRollingNotice(),g.start(h.bind(),c))},_cutStrByPixel=function(a,b,c){
var d=l,e=0,f=13,g=0;if(1>b)return a;for(var h=0,i=a.length;i>h;h++){var j=a.charCodeAt(h);if(e+=j>=128?f:d[j],
g++,e>b)return a.substring(0,h)+c}return a};var t=function(){return j||(j=$$.getSingle("#cont_fix_area .content_header")),
j&&j.offsetWidth>i},u=function(){t()||_showMessage("clear")},v=function(){_startRollingNotice()};return{
initNotice:n,notifyNewMail:o,notifySelectMailCount:p,notifyLoadingStart:q,notifyLoadingEnd:r,clearNotiIfNeeded:u,
startNotice:v}}(),m={},mCom={oHistory:null,nLoadingAPIs:0,writeType:"new",sMailList:"",sSendTo:"",bAutoSaveFailed:!1,
isSending:!1,isWriting:!1,oAutoSaveInterval:null,nEditorHeight:330,nEditorExtHeight:500,cancelUpdateList:!1,
nCurSticker:1,nCurStickerNums:[88,96,80,40],nNYStickerNums:[null,"01","02","03","05","06","07","08","09","10","11","12","13","14","16","19","20","21","22","23","24","25","27","28","29","30","31","32","35","37","38","39","40","42","43","44","45","46","47","48","52"],
eEventForUnload:null,fromName:"",parentWindow:window,aFolderInfo:[],isFolderChanged:!1,nWidthOfSnb:"220",
nWidthOfPnb:$Element("nav_snb")?$Element("nav_snb").offset().left:"0",nWidthOfListAtHorizon:"400",nWidthOfList:"200",
nUserWidthOfList:400,nHeightOfList:"100",nUserHeightOfList:100,vDivideMode:"list",nCurrentFolder:"-2",
nCurSortField:"1",elCurSortField:$$.getSingle("#list_head")?$Element($$.getSingle("#list_head .std a")):null,
nCurSortType:"0",curRCPTType:"all",bIsUnread:!1,nLastMailSN:"0",lastChecked:null,isDetailSearch:!1,nCurFromAddr:null,
curSearchType:"all",listCursor:0,oCurRequest:null,nCurrentPage:"-2",nFirstPage:"1",nLastPage:"",nCurFirstPage:"",
nCurLastPage:"",nPagingSize:"10",nExpectedShowMailCount:100,bShowListLodaingImage:!1,bPrevList4SeeMore:!1,
elNavSnb:$$.getSingle("#nav_snb"),elContent:$$.getSingle("#content"),elMailMenuArea:$Element($$.getSingle("div.mail_menu_area")),
elReadWrap:$Element($$.getSingle("div.divContent")),elListWrap:$Element($$.getSingle("div.divList")),
elOptionWrap:$Element("setup_container"),elPaging:$Element($$.getSingle("#normalPagingNav")),elHorizontalBar:$Element($$.getSingle("div.xBar")),
elVerticalBar:$Element($$.getSingle("div.xBar")),elRead:$$.getSingle("div#cont_flex_area .viewWrap"),
elList:$$.getSingle("div#cont_flex_area #list_for_view"),welList:$$.getSingle("div#cont_flex_area #list_for_view")?$Element($$.getSingle("div#cont_flex_area #list_for_view")):null,
elNav:$$.getSingle("div.svc_menu_area"),elFixArea:$Element("cont_fix_area"),elFlexArea:$Element("cont_flex_area"),
elListBtnMenu:$Element("listBtnMenu"),elListBtnMenuSingle:$$.getSingle("#listBtnMenu"),elReadBtnMenu:$Element("readBtnMenu"),
elWriteBtnMEnu:$Element("writeBtnMenu"),elListHeadDiv:$Element("listHeadDiv"),elWriteHeadDiv:$Element("writeHeadDiv"),
elSelectBtnReadMail:$Element("readMailBtn"),elSelectBtnUnReadMail:$Element("unReadMail"),elSelectBtnMarkMail:$Element("markMailBtn"),
elSelectBtnUnMarkMail:$Element("unMarkMail"),elSendResultCont:$Element("sendresultDivContent"),elDoRead:$Element($$.getSingle(".do_read",this.elListBtnMenuSingle)),
elDoReadText:$Element($$.getSingle("em",$$.getSingle(".do_read",this.elListBtnMenuSingle))),elDoSpam:$Element("undefined"!=typeof mEnv&&/naver/.test(mEnv.serviceType)?$$.getSingle(".do_spam",this.elListBtnMenuSingle):$$.getSingle("#ly_select_mailaction .do_spam")),
elDoArrange:$Element($$.getSingle("#ly_select_mailaction .do_arrange")),elDoBlock:$Element($$.getSingle(".do_block",this.elListBtnMenuSingle)),
elViewBlockList:$Element($$.getSingle(".do_viewBlockList",this.elListBtnMenuSingle)),elDoReply:$Element($$.getSingle(".do_reply",this.elListBtnMenuSingle)),
elDoReplyAll:$Element($$.getSingle(".do_replyall",this.elListBtnMenuSingle)),elDoForward:$Element($$.getSingle(".do_forward",this.elListBtnMenuSingle)),
elDoResend:$Element($$.getSingle(".do_resend",this.elListBtnMenuSingle)),elDoMove:$Element($$.getSingle(".do_move",this.elListBtnMenuSingle)),
elDoEdit:$Element($$.getSingle(".do_edit",this.elListBtnMenuSingle)),elDoMailAction:$Element($$.getSingle(".do_mailAction",this.elListBtnMenuSingle)),
elDoTranslate:$Element($$.getSingle(".do_translate",this.elListBtnMenuSingle)),elSplitBar4:$Element($$.getSingle(".splitBar4",this.elListBtnMenuSingle)),
elDoFilterRcpt:$Element($$.getSingle(".do_filterRcpt",this.elListBtnMenuSingle)),elDoDeleteC:$Element($$.getSingle(".do_delete_c",this.elListBtnMenuSingle)),
elDoDelete:$Element($$.getSingle(".do_delete",this.elListBtnMenuSingle)),elHeadReceiveTip:$Element("headReceiveTip"),
elFolderDeleteUnreadMails:$Element("folder_deleteUnreadMails"),elFolderReadUnreadMails:$Element("folder_readUnreadMails"),
elPrintAtList:$Element($$.getSingle(".layoutSelect .btn_print",this.elListBtnMenuSingle)),elSetLayout:$Element($$.getSingle(".layoutSelect .btn_change_layout",this.elListBtnMenuSingle)),
elShowRemindBtn:$Element($$.getSingle("#show_remind_btn",this.elListBtnMenuSingle)),elBtnPrePage:$Element($$.getSingle("#normalPagingNav #pre_page")),
elBtnNextPage:$Element($$.getSingle("#normalPagingNav #next_page")),elBtnFirstPage:$Element($$.getSingle("#normalPagingNav #first_page")),
elBtnLastPage:$Element($$.getSingle("#normalPagingNav #last_page")),elBtnQuickAttach:$Element($$.getSingle("#6_fol .btn_wr2me")),
elBtnIcoViewTop:$$.getSingle("a.ico_view_top")?$$.getSingle("a.ico_view_top"):null,elWriteBtnSet:$$.getSingle("#nav_snb .btn_workset",this.elNavSnb),
waElListBtnGroupAtReadLeft:$ElementList($$("[data-btn-group=listBtnGroupAtReadLeft]")),waElListBtnGroupAtReadRight:$ElementList($$("[data-btn-group=listBtnGroupAtReadRight]")),
waElListBtnGroupAtDiabled:$A($$("[data-btn-group=listBtnGroupAtDisabled]")),waElListBtnGroupAtToggle:$Element("listBtnMenu")?$A($Element("listBtnMenu").queryAll(".toggle")):$A(),
wElCheckAllBox:$$.getSingle("#listBtnMenu .buttonSet span.check_mail")?$Element($$.getSingle("#listBtnMenu .buttonSet span.check_mail")):null,
wElArrowInCheckAllBox:$$.getSingle("#listBtnMenu .buttonSet span.check_mail")?$Element($$.getSingle("#listBtnMenu .buttonSet span.check_mail a.down")):null,
bRunningShorcut:!1,woCurMailSNList:$A([]),waThumbnailQueue:$A([]),nSizePerThumbnailAtOnce:5,nTimePerThumbnailAtOnce:500,
oThumbnailQueue:null,nCurReadingMailSN:-1,sCurReadingMailCharset:"",nCurPrevMailSN:null,nCurNextMailSN:null,
mailSNAfterDelete:null,isReading:!1,readTitle:nLang.l.no_title,aVisibleLayerList:$A([]),aVisibleLayerButtonList:$A([]),
bMouseDownFlag:!1,bMouseDropFlag:!1,bDragAllSendMail:!1,bDragIncludeDraftMail:!1,bOptionMarkUpLoaded:!1,
bWriteLoaded:!1,bSearchTitleOnly:!1,oCheckNewMailInterval:"",nNewMailCheckPeriod:6e4,bActiveWindow:!0,
bUpdateListForNewMail:!1,isUpdatingForNewMail:!1,isEditingFolderName:null,aNeedToLogin:$A(["NOLOGIN","WRONGIP","RECOMMEND2OFF"]),
sImageServerURL:window.location.protocol+"//"+window.location.hostname+"/write/image/uploadByAir",sNdriveViewerPrefix:"https://viewer.cloud.",
sNdriveViewerPrefixForNCS:"https://viewer.office.",sNdriveViewerPrefixForNWE:"https://viewer.drive.",
sContactURLPrefix:"undefined"!=typeof mEnv&&"ncs"==mEnv.serviceType?window.location.protocol+"//contact.":"http://contact.",
sCalendarURLPrefix:"undefined"!=typeof mEnv&&"ncs"==mEnv.serviceType?window.location.protocol+"//calendar.":"http://calendar.",
nSimpleSearchCount:0,isNoHashHistory:$Agent().navigator().firefox&&$Agent().navigator().version>=38,
bUseNotification:window.Notification&&"granted"===Notification.permission&&"undefined"!=typeof mEnv&&"Y"===mEnv.useHtml5Noti,
oCloudSaveData:{}},mUtil={sOrderType:"",bInitSimleSearchFocus:!1,sShortcutMode:null,clearDefaultMsgForExternalWrite:function(){
mCom.hasDefaultMsg&&($$.getSingle("textarea.external_write_body").value="",mCom.hasDefaultMsg=!1)},mailNotExist:function(){
alert(nLang.e.mail_not_exist),$Element("loading_bg")&&$Element("loading_bg").hide(),$Element("loading_write_layer")&&$Element("loading_write_layer").hide(),
mCom.isPopup?window.close():mlCore&&mlCore.refreshList()},mailNotIncludedFolder:function(){alert(nLang.e.mail_not_included_folder),
mCom.isPopup?window.close():mlCore.refreshList()},checkSubject:function(a){var b=$$.getSingle("#subject");
if(""==b.value){var c=document.createElement("textarea");c.innerHTML=a,b.value=c.value,c=null,$Element(b).css("color","#aaa");
}b=null},doRefreshFromOption:function(){mlCore.updateList(null,mCom.nCurrentFolder,null,mCom.nCurrentPage),
mfCore.foldAllFolder()},cancelSendMail:function(){mCom.isSending=!1,$Element("imageCaptureAirArea")&&$Element("imageCaptureAirArea").show(),
$Element("sendAfterReviewBg").hide(),$Element("sending_layer").hide()},toggleCalInfoLayer:function(){
var a=$Element("calendarInfoLayer"),b=$Element("calendarTooltip"),c=document.activeElement?"calendarTooltip"==document.activeElement.id:!1;
a.visible()&&!c?a.hide():a.show(),a.visible()&&!c?a.attr("aria-expanded","true"):a.attr("aria-expanded","false"),
a.offset(b.offset().top+b.height(),b.offset().left-a.width()+b.width()),a=b=null},changePage:function(a,b){
ccr(b,"dvd.num",a);var c=$$.getSingle("span#pageSelect input").value;isNaN(c)||mCom.nLastPage<c||1>c?$$.getSingle("span#pageSelect input").value=mCom.nCurrentPage:mlCore.movePage(null,mCom.nCurrentFolder,c);
},changeSearchFolder:function(){"-1"!=$$.getSingle("#slt_search_folder").value?($$.getSingle("#chk_trash").checked=!1,
$$.getSingle("#chk_trash").disabled=!0):$$.getSingle("#chk_trash").disabled=!1,this.setSelectedOption($$.getSingle("#slt_search_folder"));
},changePeriod:function(){function a(a){var b=a.getMonth()+1;b=b>=10?""+b:"0"+b;var c=a.getDate();return c=c>=10?""+c:"0"+c,
a.getFullYear()+b+c}function b(b){var c=new Date;return[a(b),a(c)]}var c,d=$$.getSingle("#slt_srch_period").value,e=new Date,f="",g="";
"all"==d?(f="",g=""):"1week"==d?(c=b(new Date(e.setUTCDate(e.getUTCDate()-7))),f=c[1],g=c[0]):"1month"==d?(c=b(new Date(e.setUTCMonth(e.getUTCMonth()-1))),
f=c[1],g=c[0]):"3month"==d?(c=b(new Date(e.setUTCMonth(e.getUTCMonth()-3))),f=c[1],g=c[0]):"6month"==d?(c=b(new Date(e.setUTCMonth(e.getUTCMonth()-6))),
f=c[1],g=c[0]):"1year"==d?(c=b(new Date(e.setUTCMonth(e.getUTCMonth()-12))),f=c[1],g=c[0]):"input"==d&&(f="",
g=""),$$.getSingle("#ipt_start_date").value=g,$$.getSingle("#ipt_end_date").value=f,this.setSelectedOption($$.getSingle("#slt_srch_period"));
},changeSearchBodyRange:function(a,b){var c="";switch(a.value){case"0":c="ltp*s.ctall";break;case"1":
c="ltp*s.cttext";break;case"2":c="ltp*s.cttitle";break;case"3":c="ltp*s.ctbody";break;case"4":c="ltp*s.ctattach";
}ccr(a,c,b),this.setSelectedOption($$.getSingle("#ipt_body_range"))},changeSearchReceiverRange:function(a,b){
var c="";switch(a.value){case"0":c="ltp*s.fromcc";break;case"1":c="ltp*s.from"}ccr(a,c,b),this.setSelectedOption($$.getSingle("#ipt_receiver_range"));
},setSelectedOption:function(a){$$.getSingle("#"+a.id+"_selected").innerHTML=a.options[a.selectedIndex].innerHTML;
},executeCustomEnter:function(a){a=a?a:event;var b=a.charCode?a.charCode:a.which?a.which:a.keyCode;return(13==b||3==b)&&myCore.doLoginValidation(),
!0},viewEmbed:function(a,b,c,d){mcCore.viewEmbed(a,b,c,d,!0)},addHotkey:function(a){try{if(mEnv&&mEnv.shortCut)var b=mEnv.shortCut;else if(opener&&opener.m&&opener.m.info&&opener.mEnv)var b=opener.mEnv.shortCut;else if(parent.opener&&parent.opener.m&&parent.opener.m.info&&parent.opener.mEnv)var b=parent.opener.mEnv.shortCut;
}catch(c){var b=void 0}if(void 0==b||"false"==b.useShortCut||0==b.useShortCut||void 0==b.useShortCut)return void oMail.emptyHotkey();
if(this.sShortcutMode!=a)return this.sShortcutMode=a,oMail.emptyHotkey(),oMail.setActiveArea(a),mCom.isPopup||(oMail.addHotkey(b.allMailShowKey,"mfCore|clickFolder|all","sct.allmail"),
oMail.addHotkey(b.unreadMailShowKey,"mfCore|clickFolder|unread","sct.unreadmail"),oMail.addHotkey(b.inboxShowKey,"mfCore|clickFolder|0","sct.inbox"),
oMail.addHotkey(b.myboxShowKey,"mfCore|clickFolder|6","sct.mybox"),oMail.addHotkey(b.sentBoxShowKey,"mfCore|clickFolder|1","sct.sentmail"),
oMail.addHotkey(b.receiptBoxShowKey,"mfCore|clickFolder|2","sct.sentnotimail"),oMail.addHotkey(b.draftBoxShowKey,"mfCore|clickFolder|3","sct.draft"),
oMail.addHotkey(b.spamBoxShowKey,"mfCore|clickFolder|5","sct.junkbox"),oMail.addHotkey(b.trashBoxShowKey,"mfCore|clickFolder|4","sct.trashbox"),
"naver"===mEnv.serviceType&&(oMail.addHotkey(b.billBoxShowKey,"mfCore|clickFolder|7","sct.billingmail"),
oMail.addHotkey(b.cafeBoxShowKey,"mfCore|clickFolder|8","sct.cafemail")),oMail.addHotkey(b.lnbToggleKey||"<CTRL> + <ALT> + L","mcCore|toggleLeft","sct.leftmenu")),
oMail.addHotkey(b.popupCloseKey,"mcCore|closePopup","sct.closewindow"),"write"==a?(oMail.addHotkey(b.sendKey,"mwCore|sendMail","sct.send"),
oMail.addHotkey(b.saveKey,"mwCore|saveContents|true","sct.mailsave"),oMail.addHotkey(b.toMeSelectOptionKey,"mwTome|_toggleTome","sct.myselfmode"),
oMail.addHotkey(b.addressShowKey,"mwCore|popAddress","sct.openaddr"),oMail.addHotkey(b.filePcAttachKey,"mwAttach|shortcutUpload","sct.attachpc"),
oMail.addHotkey(b.helpShowKey2,"myCore|showShortcutLayer","sct.help2"),oMail.addHotkey(b.searchAreaMoveKey2,"mySimpleSearch|focusToSearch","sct.search2")):"read"==a?(oMail.addHotkey("<SHIFT> + "+b.replyKey,"mfCore|popupWrite|reply","sct.reply"),
oMail.addHotkey("<SHIFT> + "+b.forwardKey,"mfCore|popupWrite|forward","sct.forward"),oMail.addHotkey("<SHIFT> + "+b.newMailWriteKey,"mfCore|popupWrite|new","sct.compose"),
oMail.addHotkey("<SHIFT> + "+b.toMeMailWriteKey,"mfCore|popupWrite|toMe","sct.myself"),oMail.addHotkey(b.replyKey,"mfCore|popupWrite|reply","sct.reply"),
oMail.addHotkey(b.replyAllKey,"mfCore|popupWrite|replyAll","sct.replyall"),oMail.addHotkey(b.forwardKey,"mfCore|popupWrite|forward","sct.forward"),
oMail.addHotkey(b.mailMoveKey,"myCore|showMoveLayer","sct.move"),oMail.addHotkey(b.mailDeleteKey,"mlCore|deleteMail","sct.delete"),
oMail.addHotkey(b.readMailMarkKey,"mlCore|readMail|shortcut","sct.mark"),oMail.addHotkey(b.importantMailMarkKey,"mlCore|markMail","sct.importance"),
oMail.addHotkey(b.printKey,"myCore|printMail","sct.print"),oMail.addHotkey(b.listShowKey,"mlCore|backToList","sct.backlist"),
oMail.addHotkey(b.prevMailReadKey,"mrCore|readPrev","sct.prevmail"),oMail.addHotkey(b.nextMailReadKey,"mrCore|readNext","sct.nextmail"),
oMail.addHotkey(b.attachAllSaveKey,"myCore|showDownloadAllLayer","sct.savefiles"),oMail.addHotkey(b.newMailWriteKey,"mfCore|popupWrite|new","sct.compose"),
oMail.addHotkey(b.toMeMailWriteKey,"mfCore|popupWrite|toMe","sct.myself"),oMail.addHotkey(b.helpShowKey1,"myCore|showShortcutLayer","sct.help"),
oMail.addHotkey(b.searchAreaMoveKey1,"mySimpleSearch|focusToSearch","sct.search"),oMail.addHotkey(b.spamBoxEmptyKey,"mfCore|cleanFolder|5","sct.clearjunk"),
oMail.addHotkey(b.trashBoxEmptyKey,"mfCore|cleanTrash","sct.cleartrash")):"list"==a?(oMail.addHotkey("<SHIFT> + "+b.replyKey,"mfCore|popupWrite|reply","sct.reply"),
oMail.addHotkey("<SHIFT> + "+b.forwardKey,"mfCore|popupWrite|forward","sct.forward"),oMail.addHotkey("<SHIFT> + "+b.newMailWriteKey,"mfCore|popupWrite|new","sct.compose"),
oMail.addHotkey("<SHIFT> + "+b.toMeMailWriteKey,"mfCore|popupWrite|toMe","sct.myself"),oMail.addHotkey(b.moveUpKey,"mlCore|doCursorUp","sct.up"),
oMail.addHotkey(b.moveDownKey,"mlCore|doCursorDown","sct.down"),oMail.addHotkey("<SHIFT> + "+b.moveUpKey,"mlCore|doCursorUp","sct.up"),
oMail.addHotkey("<SHIFT> + "+b.moveDownKey,"mlCore|doCursorDown","sct.down"),oMail.addHotkey(b.prevPageMoveKey,"mlCore|movePage|prev","sct.prevpage"),
oMail.addHotkey(b.nextPageMoveKey,"mlCore|movePage|next","sct.nextpage"),oMail.addHotkey(b.firstPageMoveKey,"mlCore|movePage|first","sct.firstpage"),
oMail.addHotkey(b.lastPageMoveKey,"mlCore|movePage|last","sct.lastpage"),oMail.addHotkey(b.mailReadKey,"mlCore|doReadMail","sct.openmail"),
oMail.addHotkey(b.popupMailReadKey,"mlCore|doReadMail|popup","sct.openaswindow"),oMail.addHotkey(b.allMailSelectKey,"mlCore|toggleCheckAll","sct.selectall"),
oMail.addHotkey(b.selectOptionShowKey,"myCore|showSelectBox","sct.filter"),oMail.addHotkey(b.replyKey,"mfCore|popupWrite|reply","sct.reply"),
oMail.addHotkey(b.replyAllKey,"mfCore|popupWrite|replyAll","sct.replyall"),oMail.addHotkey(b.forwardKey,"mfCore|popupWrite|forward","sct.forward"),
oMail.addHotkey(b.mailMoveKey,"myCore|showMoveLayer","sct.move"),oMail.addHotkey(b.mailDeleteKey,"mlCore|deleteMail","sct.delete"),
oMail.addHotkey(b.readMailMarkKey,"mlCore|readMail|shortcut","sct.mark"),oMail.addHotkey(b.importantMailMarkKey,"mlCore|markMail","sct.importance"),
oMail.addHotkey(b.newMailWriteKey,"mfCore|popupWrite|new","sct.compose"),oMail.addHotkey(b.toMeMailWriteKey,"mfCore|popupWrite|toMe","sct.myself"),
oMail.addHotkey(b.helpShowKey1,"myCore|showShortcutLayer","sct.help"),oMail.addHotkey(b.searchAreaMoveKey1,"mySimpleSearch|focusToSearch","sct.search"),
oMail.addHotkey(b.spamBoxEmptyKey,"mfCore|cleanFolder|5","sct.clearjunk"),oMail.addHotkey(b.trashBoxEmptyKey,"mfCore|cleanTrash","sct.cleartrash")):("sendResult"==a||"option"==a)&&(oMail.addHotkey("<SHIFT> + "+b.newMailWriteKey,"mfCore|popupWrite|new","sct.compose"),
oMail.addHotkey("<SHIFT> + "+b.toMeMailWriteKey,"mfCore|popupWrite|toMe","sct.myself"),oMail.addHotkey(b.newMailWriteKey,"mfCore|popupWrite|new","sct.compose"),
oMail.addHotkey(b.toMeMailWriteKey,"mfCore|popupWrite|toMe","sct.myself"),oMail.addHotkey(b.helpShowKey1,"myCore|showShortcutLayer","sct.help"),
"sendResult"!=a||mCom.isPopup||oMail.addHotkey(b.searchAreaMoveKey1,"mySimpleSearch|focusToSearch","sct.search"),
oMail.addHotkey(b.spamBoxEmptyKey,"mfCore|cleanFolder|5","sct.clearjunk"),oMail.addHotkey(b.trashBoxEmptyKey,"mfCore|cleanTrash","sct.cleartrash")),
!0},updateHoykey:function(a){var b=a||this.sShortcutMode;this.sShortcutMode=null,this.addHotkey(b)},
blockMailAddrDefaultText:nLang.o.block_addr_default_text,blurBlockMailAddr:function(){var a=$("email_text");
""==a.value&&(a.value=this.blockMailAddrDefaultText)},focusBlockMailAddr:function(){var a=$("email_text");
a.value==this.blockMailAddrDefaultText&&(a.value="")},blockDomainAddrDefaultText:nLang.o.block_domain_default_text,
blurBlockDomain:function(){var a=$("domain_text");""==a.value&&(a.value=this.blockDomainAddrDefaultText);
},focusBlockDomain:function(){var a=$("domain_text");a.value==this.blockDomainAddrDefaultText&&(a.value="");
},showMeOptionPage:function(a,b){var c=$Event(a);mcCore.showOptionLayer(c,b)},popupWrite:function(a,b,c){
mfCore.popupWrite(a,b,c)},showCafeCompleteLayer:function(){myCore.showCafeCompleteLayer()},hideLayerDirectInput:function(){
moWrite.hideLayerFromName()},SWFRequestWrite:function(a){"undefined"==typeof a&&(a="./ajax.swf"),jindo.$Ajax.SWFRequest._tmpId="tmpSwf"+(new Date).getMilliseconds()+Math.floor(1e5*Math.random());
var b="jindo.$Ajax.SWFRequest.loaded";jindo.$Ajax._checkFlashLoad();var c="https:"==location.protocol?"https:":"http:",d='<div style="position:absolute;top:-1000px;left:-1000px"><object id="'+jindo.$Ajax.SWFRequest._tmpId+'" width="1" height="1" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+c+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="movie" value="'+a+'"><param name = "FlashVars" value = "activeCallback='+b+'" /><param name = "allowScriptAccess" value = "always" /><embed name="'+jindo.$Ajax.SWFRequest._tmpId+'" src="'+a+'" type="application/x-shockwave-flash" pluginspage="'+c+'//www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true" FlashVars="activeCallback='+b+'"></embed></object></div>';
document.body.insertAdjacentHTML("beforeEnd",d)},endOfFunction:function(){}},m.util={viewEmbed:function(a,b,c,d){
mcCore.viewEmbed(a,b,c,d,!0)}},mcCore=function(a){function b(a){var b=a.slice(a.lastIndexOf(".")+1).toLowerCase();
return!isNaver()&&-1!==mEnv.aBlockedExtension.indexOf(b)}function c(){var b=a.navigator.userAgent.toLowerCase(),c="";
return c=/mozilla/.test(b)&&/((010|011|016|017|018|019)\d{3,4}\d{4}$)/.test(b)?"POLARIS_LGT":/mozilla/.test(b)&&/natebrowser/.test(b)?"POLARIS_SKT":/opera/.test(b)&&(/windows ce/.test(b)||/skt/.test(b))?"OPERA":/mobile/.test(b)&&/safari/.test(b)||/iphone/.test(b)||/ipad/.test(b)?"SAFARI":/windows ce/.test(b)&&/iemobile/.test(b)?"IE":/mozilla/.test(b)&&/(wv[0-9]+)/.test(b)&&/lgtelecom/.test(b)?" LGT_WEBVIEWER":"OTHERS",
mEnv.tabletUser&&"undefined"!=typeof mEnv.tabletUser&&1==mEnv.tabletUser&&(c="TAB"),"OTHERS"!=c}function d(a){
function b(d){c.detach("focusout",b),c=null,a(d)}var c,d=13;return function(e){var f=e._event;c||(c=$Element(f.currentTarget),
c.attach("focusout",b)),f.keyCode===d&&(c.detach("focusout",b),c=null,a(e))}}function e(){return!isNaver();
}function f(a){var b=$Element($$.getSingle("#listBtnMenu",a));return b&&b.visible()?!0:!1}function g(a,b){
if("function"!=typeof Object.assign)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);else Object.assign(a,b);
}var h=20,j=0,k=null,l=null,n={CTRL:"Ctrl",ALT:"Alt",SHIFT:"Shift",ENTER:"Enter"},o={L:nLang.l.display_type_list,
H:nLang.l.display_type_horizontal,V:nLang.l.display_type_vertical};_serviceType=null,_oOpenWindow=null,
_elCalendarLayer=null;var p=!1;sendMsg=function(a,b){return"undefined"!=typeof pwe&&"undefined"!=typeof pwe.context.oApp&&pwe.context.oApp?pwe.context.oApp.exec(a,b):!1;
},setMsg=function(){},getServiceType=function(){try{("undefined"==typeof _serviceType||null==_serviceType)&&(m&&"undefined"!=typeof mEnv?_serviceType=mEnv.serviceType:opener&&opener.mEnv&&(_serviceType=opener.mEnv.serviceType)),
("undefined"==typeof _serviceType||null==_serviceType)&&mCom.isPopup&&"mail.naver.com"==location.hostname&&(document.domain="naver.com",
_serviceType=opener.mEnv.serviceType)}catch(a){if(mCom.isPopup&&"mail.naver.com"==location.hostname)return document.domain="naver.com",
getServiceType()}return _serviceType},getServiceTitle=function(){return isNwe()?nLang.c.nwe_mail:isNcs()?nLang.c.ncs_mail:nLang.c.naver_mail;
},isNcs=function(){return"ncs"==getServiceType()},isNaver=function(){return"naver"==getServiceType()||"lite"==getServiceType();
},isNwe=function(){return"nwe"==getServiceType()},useCalendar=function(){return!isNwe()||mEnv&&mEnv.useCalendar===!0;
},getIdomainUse=function(){return mEnv.idomainInUse},setIdomainUse=function(a){mEnv.idomainInUse=a},
isIdomainUse=function(){return getIdomainUse()},getIdomainInfos=function(){return"undefined"==typeof mEnv.idomainInfos||null==mEnv.idomainInfos?{}:mEnv.idomainInfos;
},getDlSenderList=function(){return"undefined"==typeof mEnv.dlSenderList||null==mEnv.dlSenderList?{}:mEnv.dlSenderList;
},isIdomainFolder=function(a){var b,c=getIdomainInfos(),d=c.length;for(b=0;d>b;b++)if(a==parseInt(c[b].folderSN))return!0;
return!1},isIdomainEmail=function(a){var b,c=getIdomainInfos(),d=c.length;for(b=0;d>b;b++)if(a==c[b].emailAddress)return!0;
return!1},getPrimaryEmailAddr=function(){return mEnv.primaryEmailAddr},setPrimaryEmailAddr=function(a){
mEnv.primaryEmailAddr=a},getIdomainFolderSN=function(){var a,b="",c=mCom.aFolderInfo.length;for(a=0;c>a;a++)"Y"==mCom.aFolderInfo[a][7]&&(""==b?b=mCom.aFolderInfo[a][0]+"":b+=","+mCom.aFolderInfo[a][0]);
return a=c=htIdomainInfo=null,b},getIdomainEmailAddress=function(){var a,b,c=getIdomainInfos(),d=c.length;
for(b=0;d>b;b++)0==b?a=c[b].emailAddress:a+=","+c[b].emailAddress;return b=d=c=null,a},getSenderAddress=function(){
var a,b=[],c=getIdomainInfos(),d=getDlSenderList(),e=c.length;for(a=0;e>a;a++)b.push(c[a].emailAddress);
var f,g=d.length;for(g>0&&b.length<1&&(mcCore.isNwe()||mcCore.isNcs())&&mEnv&&mEnv.mailAddress&&b.push(mEnv.mailAddress),
f=0;g>f;f++)b.push(d[f].email);return b},getNaverEmailAddress=function(){if((mcCore.isNwe()||mcCore.isNcs())&&mEnv&&mEnv.mailAddress)return mEnv.mailAddress;
var a=mEnv.mailId+"@"+mEnv.mailDomain;return a},convertPOSTParamToGet=function(a){for(var b=$Json(a).toString().replace("{","").replace(/}$/,"").replace(/\"/g,"").split(","),c="",d=0;d<b.length;d++){
var e=b[d].split(":");c+=0==d?"?"+e[0]+"="+encodeURIComponent(restoreSpecialChar(e[1])):"&"+e[0]+"="+encodeURIComponent(restoreSpecialChar(e[1])),
e=null}return b=null,c};var q=function(){return(isNwe()||isNcs())&&(!getCookie("NEO_SES")||"null"==getCookie("NEO_SES"))&&mCom.serverEnv&&"local"!=mCom.serverEnv;
};requestAjax=function(b){if(q())return l=b,void showLoginLayer();if(mCom.isPopup||mCom.oCheckNewMailInterval||(mCom.oCheckNewMailInterval=setInterval($Fn(mcCore.checkNewMail,this).bind(),mCom.nNewMailCheckPeriod)),
mCom.isPopup||("option"!=b.fClass&&mcNotice.notifyLoadingStart(b.sUrl),mCom.nLoadingAPIs++),mCom.oHistory&&b.fClass){
var c={fClass:b.fClass,oParameter:b.oParameter};mCom.oHistory.addHistory(c)}var d=b.sUrl;if("/json/write/send/"==d||"/json/write/send/?retryCount=1"==d){
if("/json/write/send/"===d&&(mCom.isSending=!0),""!=b.oParameter.bcc){var e="/bccSend/?showBcc="+$Element("bccview").visible()+"&bccList="+b.oParameter.bcc;
$$.getSingle("#testFrame").src="/testForLogging"+e}h=2e3,d+="?aId="+b.oParameter.attachID+"&aCount="+b.oParameter.attachCount+"&aSize="+b.oParameter.attachSize;
}else h=d.match(/\/jsonp\/pop3\/add\//)||d.match(/\/jsonp\/pop3\/update\//)?40:"/json/write/"==d?60:30;
var f;f="undefined"!=typeof mEnv?mEnv.mailId:opener&&opener.m&&opener.m.info&&opener.mEnv?opener.mEnv.mailId:"test",
b.oParameter?b.oParameter.u=f:b.oParameter={u:f},f=null;var g=b.oParameter;switch(d){case"/json/list/":
case"/json/search/":case"/json/list/from/":case"/json/list/thread/":case"/json/list/readReceipt/":mCom.oRecentListRequestParam=g,
mCom.oRecentListRequestUrl=d}if(b.oParameter.mailSN||b.oParameter.mailSNList||b.oParameter.lists)switch(d){
case"/json/select/setStatus/read/":case"/json/select/setStatus/mark/":case"/json/select/move/":case"/json/select/delete/":
break;case"/json/write/":case"/json/write/send/":b.oParameter.lists?b.oParameter.lists=K(b.oParameter.lists):null;
break;default:b.oParameter.mailSN?b.oParameter.mailSN=K(b.oParameter.mailSN):null,b.oParameter.mailSNList?b.oParameter.mailSNList=K(b.oParameter.mailSNList):null;
}switch(d){case"/json/newmail/":case"/json/read/":case"/json/read/preview/":case"/json/eml/":case"/json/folder/empty/all/":
case"/json/address/popup/list/":case"/json/list/":case"/write/popup/":case"/captcha/check/":case"/json/folder/list/":
case"/json/list/readReceipt/":case"/json/readReceipt/retrieve/":case"/json/readReceipt/delete/":case"/mime/download/plural/":
case"/json/option/senderName/delete/":d+=convertPOSTParamToGet(b.oParameter),g=""}if("undefined"!=typeof myContextMenu&&myContextMenu.bAttachPostFix)switch(d){
case"/json/search/":case"/json/write/":d+=myContextMenu.sUrlPostFix,myContextMenu.bAttachPostFix=!1}
var i={};return d.match(/\/jsonp\/pop3\/add\//)||d.match(/\/jsonp\/pop3\/update\//)||d.match(/^\/json\/address\/auto\//)?(i.type="jsonp",
i.method="get",i.async=!1):(i.type="xhr",i.method="post",i.async="undefined"!=typeof b.async?b.async:!0),
"/json/write/"==d&&$Agent().navigator().ie&&setTimeout($Fn(function(a){1==k._status&&1>j&&"/json/write/"==k._url&&(j++,
!mCom.isPopup&&--mCom.nLoadingAPIs<=0&&mcNotice.notifyLoadingEnd(),k.abort(),requestAjax(a))},this).bind(b),500),
k=$Ajax(d,{type:i.type,method:i.method,async:i.async,timeout:h,onerror:function(a){!mCom.isPopup&&--mCom.nLoadingAPIs<=0&&mcNotice.notifyLoadingEnd(),
"/json/write/save/"===d?mwCore.saveContentsFail():-1!==d.indexOf("/json/sticker/")?alert(nLang.e.temporary_system_error):-1!==d.indexOf("/json/select/reminder/")?alert(nLang.e.remind_fail_setfail):mlog(nLang.e.temporary_error+"\n(Ajax error : "+d+")"),
b.fFailCallback&&b.fFailCallback(a)},ontimeout:function(a){if(!mCom.isPopup&&--mCom.nLoadingAPIs<=0&&mcNotice.notifyLoadingEnd(),
"/json/write/send/"===d)alert(nLang.e.temporary_error+"\n(Ajax Timeout : "+d+")");else if("/json/arrange/move/"===d||"/json/arrange/delete/"===d||"/json/option/filter/add/"===d);else{
if("/json/write/"===d)return void(1>j?(j++,r(b)):mwCore.writeTimeout());"/json/write/save/"===d?mwCore.saveContentsFail():mlog(nLang.e.temporary_error+"\n(Ajax Timeout : "+d+")");
}mCom.isSending=!1,$$.getSingle("#imageCaptureAirArea")&&$Element($$.getSingle("#imageCaptureAirArea")).show(),
b.fFailCallback&&b.fFailCallback(a)},onload:function(c){var e={};try{e=c.json()}catch(f){}var h="FAIL"===e.Result&&"EXTERNAL_IP_LOGOUT"===e.LoginStatus;
if(!isNcs()||(h===!1&&"/json/newmail/"!==b.sUrl&&(p=!1),!p||"/json/newmail/"!==b.sUrl&&"/json/write/save/"!==b.sUrl)){
if(mCom.isPopup||(mCom.nLoadingAPIs--,mCom.nLoadingAPIs<=0&&"option"!=b.fClass&&"undefined"!=typeof mcNotice&&mcNotice.notifyLoadingEnd()),
!c||"12030"==c._response.status||"12031"==c._response.status||"12152"==c._response.status||"400"==c._response.status)return d.match(/\/jsonp\/pop3\/add\//)||d.match(/\/jsonp\/pop3\/update\//)?void moExtern.setSubmitControl("RELEASE"):("/json/write/"==d&&(j=0),
$$.getSingle("#testFrame").src="/testForLogging"+d+"?status="+c._response.status,void(-1!=d.indexOf("/json/write/send/")?(alert(nLang.e.fail_to_send),
mCom.isSending=!1,$$.getSingle("#imageCaptureAirArea")&&$Element($$.getSingle("#imageCaptureAirArea")).show(),
$Element("sendAfterReviewBg").hide(),$Element("sending_layer").hide(),mCom.isIE&&mcCore.isNaver()&&a.open("http://mail.naver.com/notice/10000000000025672818","","")):-1!==d.indexOf("/json/write/save/")&&mwCore.saveContentsFail()));
if(d=d.split("?")[0],"OK"==e.Result||"OK"==e.result)return b.fCallback(e);if(-1!==d.indexOf("/json/sticker/")&&(e.stickerCategories||e.emojiPackages||e.stickerPackages))return b.fCallback(e);
if((-1!==d.indexOf("json/item/stickers")||-1!==d.indexOf("json/item/emojis"))&&(e.stickers||e.order))return b.fCallback(e);
if(isNcs()&&h){if(p=!0,confirm(nLang.e.external_login_fail)){var i=a.location.hostname,k="."+i.split(".").splice(i.split(".").length-2,2).join(".");
document.cookie="NMUSER=;expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+i+"; path=/",document.cookie="NEO_SES=;expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+k+"; path=/",
document.cookie="NEO_CHK=;expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+k+"; path=/",document.cookie="WORKS_SES=;expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+k+"; path=/",
document.cookie="neoidTempSessionKey=;expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+k+"; path=/",document.cookie="nssTok=;expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+k+"; path=/",
location.href="https://"+i}}else{var l=String(c.text()).split("</LazyLoading>");if("<LazyLoading>"==l[0])return void b.fCallback(l[1]);
if(-1!=c.text().indexOf("/siteminderagent/forms/login.fcc"))return void mcCore.showLoginLayer();if(mCom.aNeedToLogin.has(e.LoginStatus))return void mcCore.showLoginLayer();
if("RELOGIN"==e.LoginStatus)return alert(nLang.e.login_info_changed),void a.location.reload(!0);if("/json/select/setStatus/read/"==d&&(mCom.bWaitingAjaxRequestForSetRead=!1),
g.Pass)b.fCallback(e);else if("/json/write/file/uploadByDnD/"===d)b.fCallback(e);else if("/write/popup/"===d||"/write/prePopup/"===d)b.fCallback(c.text());else if("/json/write/send/"===d)b.fFailCallback(c);else{
if(-1!==d.indexOf("json/newmail"))return;s(c,g,d)}}}}}),k.request(g),k};var r=function(a){!mCom.isPopup&&--mCom.nLoadingAPIs<=0&&mcNotice.notifyLoadingEnd(),
k.abort(),requestAjax(a)},s=function(b,c,d){var e={};try{e=b.json()}catch(f){}switch(e.Message){case"SYSTEM_ERROR":
alert(nLang.e.temporary_system_error);break;case"SYSTEM_ERROR_RELOGIN":logout();break;case"ACP_ERROR":
alert(nLang.e.temporary_system_error);break;case"ACP_TIME_OUT":alert(nLang.e.acp_time_out);break;case"NPC_ERROR":
alert(nLang.e.temporary_system_error);break;case"SSO_NO_EMPMAIL":alert(nLang.e.sso_no_empmail);break;
case"BADNAS":case"NOTICE_TEMP":a.open(e.Url,"NOTICE_EXAMINE",""),alert(nLang.e.examination_error);break;
case"RESERVED_FOLDERNAME":alert(nLang.e.reserved_foldername),c.isUserGuide?myUserGuide.rePopup(3):$$.getSingle("#folderNameInputBox")&&($$.getSingle("#folderNameInputBox").value=mCom.editingCurFolderName,
$$.getSingle("#folderNameInputBox").focus());break;case"SEARCH_INDEXING_ERROR":alert(nLang.e.search_index_error);
break;case"COMMON_PARAMETER_ERROR":alert(nLang.e.common_parameter_error);break;case"COMMON_EXTERNAL_HTTP_ERROR":
alert(nLang.e.common_external_http_error);break;case"COMMON_NOT_SUPPORTED_METHOD":alert(nLang.e.common_not_supported_method);
break;case"COMMON_EMPTY_STRING":alert(nLang.e.common_empty_string);break;case"MAIL_NOT_EXIST":mUtil.mailNotExist();
break;case"READ_MAIL_FAIL":d.match("ncsNewNotiApp")||alert(nLang.e.read_mail_fail);break;case"READ_NO_FOLDER_FAIL":
mUtil.mailNotIncludedFolder();break;case"FOLDER_NOT_EXIST":mcCore.folderNotExist();break;case"FOLDER_EXCEED_MAX_COUNT":
alert(nLang.f.count_limit_1000);break;case"DUPLICATE_FOLDERNAME":alert(nLang.f.already_exist),$$.getSingle("#folderNameInputBox")&&($$.getSingle("#folderNameInputBox").value=mCom.editingCurFolderName,
$$.getSingle("#folderNameInputBox").focus());break;case"SEND_NO_ATTACHID":alert(nLang.e.send_no_attachid),
mUtil.cancelSendMail();break;case"SEND_REFERRER_ERROR":alert(nLang.e.send_referrer_error),mUtil.cancelSendMail();
break;case"SEND_SAVE_ERROR":mlog(nLang.e.fail_to_save),mCom.bAutoSaveFailed=!0,$$.getSingle("#displayInform").innerHTML=-1!==$$.getSingle("#displayInform").innerHTML.indexOf(". ")?"("+nLang.e.fail_to_save+" "+nLang.e.last_save_time+": "+$$.getSingle("#displayInform").innerHTML.split(". ")[1]:"("+nLang.e.fail_to_save+")";
break;case"SEND_NO_RECIPIENT":alert(nLang.e.send_no_recipient),mUtil.cancelSendMail();break;case"SEND_EXCEED_MAX_RECIPEINT":
alert(nLang.e.send_exceed_max_recipient),mUtil.cancelSendMail();break;case"SEND_WRONG_EMAIL_FORMAT":
alert(nLang.e.send_wrong_email_format),mUtil.cancelSendMail();break;case"SEND_WRONG_MAILSN":alert(nLang.e.send_wrong_mailsn),
mUtil.cancelSendMail();break;case"SEND_CHECK_AMOUNT_ERROR":alert(nLang.e.send_check_amount_error),mUtil.cancelSendMail();
break;case"SEND_BIGFILE_ERROR":alert(nLang.e.send_bigfile_error),mUtil.cancelSendMail();break;case"SEND_INVALID_CAPTCHA_ERROR":
alert(nLang.e.send_invalid_captcha_error),mUtil.cancelSendMail();break;case"SEND_NDRIVE_ATTACH_ERROR":
alert(nLang.e.send_ndrive_attach_error),mUtil.cancelSendMail();break;case"SEND_SMTP_ERROR":alert(nLang.e.send_smtp_error),
mUtil.cancelSendMail();break;case"SEND_ERROR":alert(nLang.e.send_error),mUtil.cancelSendMail();break;
case"READRECEIPT_RESERVE_CANCEL_ERROR":confirm(nLang.e.readreceipt_reserve_cancel_error)&&mfCore.clickFolder(null,2);
break;case"READRECEIPT_RETREIVE_ERROR":mlog(nLang.e.readreceipt_retreive_error),mlCore.updateList(null,"2",mCom.curRCPTType,mCom.nCurrentPage),
myCore.showLayer(null,"ly_fail_cancel_send");break;case"CALENDAR_MAKE_ERROR":alert(nLang.e.calendar_make_error);
break;case"CALENDAR_CONTENT_ERROR":alert(nLang.e.calendar_content_error);break;case"CALENDAR_REPLY_ERROR":
alert(nLang.e.calendar_reply_error);break;case"CALENDAR_WRONG_PARAMTER":alert(nLang.e.calender_wrong_parameter);
break;case"ADDRESS_GROUP_LIST_ERROR":alert(nLang.e.address_group_list_error);break;case"ADDRESS_NHN_GROUP_LIST_ERROR":
alert(nLang.e.address_nhn_group_list_error);break;case"ADDRESS_COUNT_ERROR":alert(nLang.e.address_count_error);
break;case"ADDRESS_INVALID_EMAIL_LIST":alert(nLang.e.address_invalid_email_list);break;case"ADDRESS_MAKE_GROUP_ERROR":
alert(nLang.e.address_make_group_error);break;case"ADDRESS_SET_FREQUENT_GROUP_ERROR":alert(nLang.e.address_set_frequent_group_error);
break;case"ADDRESS_READONLY_ERROR":break;case"ADDRESS_UPDATE_ERROR":break;case"ADDRESS_FREQUENTADDRESS_UNCHECK_ERROR":
break;case"ADDRESS_ACCOUNT_EXCEED_ERROR":myAddAddress.showAddressMsg("hide");break;case"NDRIVE_FILE_UPLOAD_FAIL":
alert(nLang.e.ndrive_file_upload_fail);break;case"OPTION_ACCOUNT_NULL":alert(nLang.o.filter_addr_10_limit);
break;case"OPTION_MSGRULE_TOO_MANY_EMAIL_ADDRESSES":alert(nLang.e.option_write_fromname_overcount);break;
case"OPTION_WRITE_FROMNAME_EMPTY":alert(nLang.e.option_write_fromname_empty),c.isUserGuide&&myUserGuide.rePopup(1);
break;case"OPTION_WRITE_FROMNAME_ADD_ERROR":alert(nLang.e.option_write_fromname_add_error),c.isUserGuide&&myUserGuide.rePopup(1);
break;case"OPTION_WRITE_FROMNAME_WRONG":alert(nLang.w.cannot_use_special_char_fromname),c.isUserGuide&&myUserGuide.rePopup(1);
break;case"OPTION_WRITE_FROMNAME_OVERCOUNT":alert(nLang.e.option_write_fromname_overcount),c.isUserGuide&&myUserGuide.rePopup(1);
break;case"OPTION_WRITE_FROMNAME_ALREADY_EXIST":mCom.isWriting&&mwCore.setSenderName(c.fromName),alert(nLang.e.option_write_fromname_already_exist),
c.isUserGuide&&myUserGuide.rePopup(1);break;case"OPTION_SMTP_ONLY_FOR_INDIVIDUAL":alert(nLang.e.option_smtp_only_for_individual);
break;case"OPTION_IDOMAIN_GET_EMAIL_ERROR":alert(nLang.e.option_idomain_get_email_error);break;case"OPTION_IDOMAIN_SET_EMAIL_ERROR":
alert(nLang.e.option_idomain_set_email_error);break;case"OPTION_FOLDER_NONAME":alert(nLang.e.option_folder_noname);
break;case"OPTION_POP3_FOLDER_DUPLICATE":if(mfCore.updateFolder(),confirm(nLang.e.option_folder_duplicate)){
for(var g=c,h=""==g.pop3Sn?"NEW":"EDIT",i=g.newFolderName,j=0;j<mCom.aFolderInfo.length;j++)if(mCom.aFolderInfo[j][1]==mcCore.replaceSpecialChar(i)){
var k=mCom.aFolderInfo[j][0];break}g.newFolder=!1,g.newFolderName="",g.folderSn=k,c.isUserGuide?myUserGuide.setPop3Ajax(g):moExtern.setPop3Ajax(h,g);
}else{var g=c;g.isUserGuide?myUserGuide.rePopup(3):"W"!=g.type&&moExtern.setSubmitControl("RELEASE");
}break;case"OPTION_REJECTADDRESS_OVER_SAVE":confirm(nLang.o.reject_count_limit_confirm1)&&moCore.showOptionLayer(null,"receive_option");
break;case"OPTION_REJECTADDRESS_PARTLY_SAVE":confirm(nLang.o.reject_count_limit_confirm2)&&moCore.showOptionLayer(null,"receive_option");
break;case"OPTION_POP3_ACCOUNT_FAIL":alert(nLang.e.option_pop3_account_fail),"W"!=c.type&&(c.isUserGuide?myUserGuide.rePopup(3):moExtern.setSubmitControl("RELEASE"));
break;case"OPTION_POP3_ADD_MAX_OVER_FAIL":alert(nLang.o.externalMail_count_limit_10),c.isUserGuide?myUserGuide.rePopup(3):moExtern.setSubmitControl("RELEASE");
break;case"OPTION_POP3_ACCOUNT_FAIL_MAX":alert(nLang.e.option_pop3_account_fail_max),c.isUserGuide?myUserGuide.rePopup(3):moExtern.setSubmitControl("RELEASE");
break;case"OPTION_POP3_COMMON_FAIL":alert(nLang.e.pop3_works_common_fail),c.isUserGuide?myUserGuide.rePopup(3):moExtern.setSubmitControl("RELEASE");
break;case"OPTION_POP3_TIME_OUT":alert(nLang.e.pop3_response_timeout),moExtern.setSubmitControl("RELEASE");
break;case"OPTION_FILTER_PINCODE_ETC":case"OPTION_FILTER_PINCODE_WRONG":alert(nLang.o.not_certify_number);
break;case"RELOAD":alert(nLang.e.reload),location.href=a.location.protocol+"//"+location.hostname;break;
case"OPTION_SIGN_MAX_LIMIT":alert(nLang.o.sign_count_limit_3);break;case"INVALID_REFERER_ERROR":alert(nLang.e.invalid_referer_error);
break;default:if(mlog(nLang.e.not_defined_acp_error+e.Message),d.match(/^\/jsonp\/pop3\/add\//)||d.match(/\/jsonp\/pop3\/update\//)){
moExtern.setSubmitControl("RELEASE");break}b._response&&($$.getSingle("#testFrame").src="/testForLogging"+d+"?status="+b._response.status),
-1!==d.indexOf("/json/write/send/")?(alert(nLang.e.fail_to_send),mCom.isSending=!1,mUtil.cancelSendMail(),
mCom.isIE&&mcCore.isNaver()&&a.open("http://mail.naver.com/notice/10000000000025672818","","")):-1!==d.indexOf("/json/write/save/")&&(mCom.bAutoSaveFailed=!0,
$$.getSingle("#displayInform").innerHTML=-1!==$$.getSingle("#displayInform").innerHTML.indexOf(". ")?"("+nLang.e.fail_to_save+" "+nLang.e.last_save_time+": "+$$.getSingle("#displayInform").innerHTML.split(". ")[1]+")":"("+nLang.e.fail_to_save+")");
}};toggleDivideMode=function(b,c){if(c||mCom.vDivideMode!=b){c||mcCore.setDivideMode(b);var d=a.innerWidth||document.documentElement.clientWidth,e=a.innerHeight||document.documentElement.clientHeight,f=Number(d)/2-Number(mCom.nWidthOfPnb)-Number(mEnv.folderAreaWidth),g=Number(e)/2;
"0"==mEnv.listAreaWidth?mEnv.listAreaWidth=f>mCom.nWidthOfList?f:mCom.nWidthOfList:(Number(mCom.nWidthOfList)>Number(mEnv.listAreaWidth)?mEnv.listAreaWidth=mCom.nWidthOfList>d-(Number(mCom.nWidthOfPnb)+Number(mEnv.folderAreaWidth))-100?d-(Number(mCom.nWidthOfPnb)+Number(mEnv.folderAreaWidth))-100:mCom.nWidthOfList:Number(mEnv.listAreaWidth)>d-(Number(mCom.nWidthOfPnb)+Number(mEnv.folderAreaWidth))-100&&(mEnv.listAreaWidth=d-(Number(mCom.nWidthOfPnb)+Number(mEnv.folderAreaWidth))-100),
mCom.nUserWidthOfList=Number(mEnv.listAreaWidth)),"0"==mEnv.listAreaHeight?mEnv.listAreaHeight=g>mCom.nHeightOfList?g:mCom.nHeightOfList:(mCom.nHeightOfList>Number(mEnv.listAreaHeight)?mEnv.listAreaHeight=mCom.nHeightOfList>e-$Element("cont_fix_area").height()-150?e-$Element("cont_fix_area").height()-150:mCom.nHeightOfList:Number(mEnv.listAreaHeight)>e-$Element("cont_fix_area").height()-150&&(mEnv.listAreaHeight=e-$Element("cont_fix_area").height()-150),
mCom.nUserHeightOfList=Number(mEnv.listAreaHeight));var h=mCom.elSetLayout;"list"==b?($Element("cont_flex_area").removeClass("list_horizontal").removeClass("list_vertical").addClass("list_normal"),
h.removeClass("view_split_ver").removeClass("view_split_hor").addClass("view_list"),$Element($$.getSingle(".paging_numbers")).show(),
$Element($$.getSingle("#listBtnMenu .layoutSelect .btn_change_layout .blind")).text(o.L),mCom.elListWrap.css("width","100%"),
mCom.elReadWrap.css("left","0"),mCom.elListWrap.css("height","100%"),mCom.elReadWrap.css("top","0")):"horizontal"==b?($Element("cont_flex_area").addClass("list_horizontal").removeClass("list_vertical").removeClass("list_normal"),
h.removeClass("view_split_ver").removeClass("view_list").addClass("view_split_hor"),$Element($$.getSingle(".paging_numbers")).hide(),
$Element($$.getSingle("#listBtnMenu .layoutSelect .btn_change_layout .blind")).text(o.H),mCom.elListWrap.css("width",mEnv.listAreaWidth+"px"),
mCom.elReadWrap.css("left",mEnv.listAreaWidth+"px"),mCom.elListWrap.css("height","100%"),mCom.elReadWrap.css("top","0")):($Element("cont_flex_area").removeClass("list_horizontal").addClass("list_vertical").removeClass("list_normal"),
h.removeClass("view_split_hor").removeClass("view_list").addClass("view_split_ver"),$Element($$.getSingle(".paging_numbers")).show(),
$Element($$.getSingle("#listBtnMenu .layoutSelect .btn_change_layout .blind")).text(o.V),mCom.elListWrap.css("width","100%"),
mCom.elReadWrap.css("left","0"),mCom.elListWrap.css("height",mEnv.listAreaHeight+"px"),mCom.elReadWrap.css("top",mEnv.listAreaHeight+"px")),
mCom.vDivideMode=b,mlCore.toggleSize(),d=e=f=g=null}},setDivideMode=function(a){var b="L",c="hide";"vertical"==a?(b="V",
c="show"):"horizontal"==a&&(b="H",c="show");var d={spliteMode:b};requestAjax({fCallback:$Fn(setDivideModeCallBack,this).bind(b),
oParameter:d,sUrl:"/json/option/splitMode/set/"}),mlCore.setListButtonToggle(c),b=null,d=null},setDivideModeCallBack=function(a){
"list"!=a&&mCom.elReadWrap.show(),mEnv.divideMode=a},getElapsedTime=function(a){return},findFolderName=function(a,b){
for(var c=0;c<mCom.aFolderInfo.length;c++)if(mCom.aFolderInfo[c][0]==a){if(b)return mCom.aFolderInfo[c][1];
var d=mCom.aFolderInfo[c][1].split("/");return d=d[d.length-1]}return!1},getFolderObject=function(a){
for(var b=0;b<m.info.folder.folderList.length;b++)if(m.info.folder.folderList[b].folderSN==a)return m.info.folder.folderList[b];
return!1},findFolderSN=function(a){for(var b=0;b<mCom.aFolderInfo.length;b++)if(mCom.aFolderInfo[b][1]==a)return mCom.aFolderInfo[b][0];
return!1},getFolderOrder=function(a){for(var b=0,c=Number(a)>=1e7,d=0;d<mCom.aFolderInfo.length;d++)if(c&&mCom.aFolderInfo[d][0]>=1e7&&b++,
!c&&mCom.aFolderInfo[d][0]>100&&mCom.aFolderInfo[d][0]<1e7&&b++,mCom.aFolderInfo[d][0]==a)return b},
toggleEl=function(a,b){a&&(b&&!a.visible()?a.show():!b&&a.visible()&&a.hide())},template=function(a,b){
return a.replace(/{([^{}]*)}/g,function(a,c){var d=b[c];return d})},improvedTemplate=function(a,b){return a.replace(/{([^{}]*)}/g,function(a,c){
var d=b[c]?b[c]:"";return d})},hideSendResultDiv=function(a){mCom.elSendResultCont&&mCom.elSendResultCont.visible()&&!mCom.isPopup&&(toggleEl(mCom.elSendResultCont,!1),
toggleEl($Element(a),!0),adjustTopOfFlexArea())},hideWriteArea=function(){var a=$Element($$.getSingle("#writeWrap"));
return a&&a.visible()?mwAttach.checkAllFilesUploaded()&&mwCore.isWriteInfoSaved()?(a.hide(),mCom.oAutoSaveInterval&&clearInterval(mCom.oAutoSaveInterval),
mCom.isWriting=!1,mwCore.finishEditor(),!1):confirm(nLang.w.alert_leaving_write_page)?(a.hide(),mCom.oAutoSaveInterval&&clearInterval(mCom.oAutoSaveInterval),
mCom.isWriting=!1,mwCore.finishEditor(),!1):!0:(a=null,!1)},loadCss=function(a){if(!mCom.isPopup&&"lazy"==a&&!mCom.cssLazyLoadingStarted){
mCom.cssLazyLoadingStarted=!0;var b=$$.getSingle("head"),c=document.createElement("link"),d=mcCore.isNaver()?"":"nwe.";
c.rel="stylesheet",c.type="text/css",c.href="local"==mCom.serverEnv?"/css/src/mail_lazy_le.min.css":"/css/mail_lazy_le.min."+d+mCom.cssVersion+".css",
b.appendChild(c),c=b=null}},adjustTopOfFlexArea=function(){$Element("cont_fix_area").height();var a=$Element("cont_flex_area"),b=$Element("cont_aid_area");
a.css("top",$Element("cont_fix_area").height()+"px"),b&&a.css("bottom",b.height()+"px"),a=b=null},openWindowWithPost=function(b,c,d,e,f,g){
_oOpenWindow&&_oOpenWindow.close(),"undefined"==typeof g&&(g=a.location.protocol+"//"+a.location.hostname+"/static/blank.html?version=20160822");
var h=a.open(g,c,f),i=function(){if(_oOpenWindow=h,!h)return!1;var a="";a+="<!DOCTYPE html>",a+='<html lang="ko">',
a+="<head></head><body>",a+='<form accept-charset="UTF-8" id="formid" method="post" action="'+b+'">',
a+='</form><script type="text/javascript">',a+="var keys = "+JSON.stringify(d)+";",a+="var values = "+JSON.stringify(e)+";",
a+="for (var i = 0, nLength = keys.length; i < nLength; i++) { ",a+="appendInput(keys[i], values[i]);",
a+="} ",a+="function appendInput(key, value) { ",a+='var el = document.createElement("input");',a+='el.setAttribute("type", "hidden");',
a+='el.setAttribute("name",  key);',a+='el.setAttribute("value", value);',a+='document.getElementById("formid").appendChild(el);',
a+="}",a+='document.getElementById("formid").submit()',a+="</script></body></html>";try{h.document.write(a);
}catch(c){setTimeout(function(){h.document.write(a)},500)}};return setTimeout(i,100),h},openPopupWindow=function(b,c,d){
if(b&&""!=b){var e=a.open(b,c||"",d||"");try{e.focus()}catch(f){}}},getHumanTime=function(b,c,d){if(mCom.isPopup)try{
var e=e||a.opener;if(e&&e.m&&e.m.info)var f=Number("undefined"==typeof e.mEnv.timeZone?"+9":e.mEnv.timeZone);else var f=Number("+9");
}catch(g){var f=Number("+9")}else var f=Number(mEnv.timeZone);var h=moment.utc(1e3*(parseInt(b,10)+3600*f)),i=moment.utc(1e3*(parseInt(c,10)+3600*f));
return sDate=h.format("read"===d?mCom.sDefaultDateFormat?mCom.sDefaultDateFormat+" (ddd) HH:mm":"YYYY-MM-DD (ddd) HH:mm":h.isSame(i,"day")?"HH:mm":h.isSame(i,"year")?mCom.sDefaultDateFormat?"MMM D HH:mm":"MM-DD HH:mm":mCom.sDefaultDateFormat?mCom.sDefaultDateFormat+" HH:mm":"YYYY-MM-DD HH:mm");
},setAvailCookie=function(){setCookie("NVMAIL3AVAIL","Y","1")},setCookie=function(a,b,c,d,e){var f="";
if(d=d||"/","undefined"!=typeof c){var g=new Date;g.setDate(g.getDate()+Number(c)),f+=";expires="+g.toGMTString();
}"undefined"!=typeof d&&(f+=";path="+d),"undefined"!=typeof e&&(f+=";domain="+e),document.cookie=a+"="+escape(b)+f,
f=null},getCookie=function(a){var b=document.cookie;if(!(b.length<1)){var c=new RegExp("\\b"+a+"=([^;]*)(;|$)"),d=b.match(c);
return decodeURIComponent(d&&d[1])}},replaceSpecialChar=function(a){return"string"==typeof a?a.replace(/\&/g,"&amp;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;").replace(/</g,"&lt;").replace(/\>/g,"&gt;"):"";
},restoreSpecialChar=function(a){return a=unescape(a),"string"==typeof a?a.replace(/&amp;/g,"&").replace(/\\&quot;/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#61;/g,"="):"";
},cutStr=function(a,b,c){var d=a.length,e=parseInt(b),f=0;if(1>e)return a;for(var g=0;d>g;g++)if(f+=a.charCodeAt(g)>128?2:1,
f>e)return a.substring(0,g)+c;return a},getStrSize=function(a){for(var b=a.length,c=0,d=0;b>d;d++)c+=a.charCodeAt(d)>128?2:1;
return c},str_extract=function(a,b,c){var d=-1==d?-1:a.indexOf(b),e=-1==c?-1:a.indexOf(c);return-1==d?-1==e?a:a.substring(0,e):-1==e?a.substring(d+b.length,a.length):a.substring(d+b.length,e);
},checkNumberOnly=function(a){var b;if(null==a)return!1;for(var c=0;c<a.length;c++)if(b=a.charCodeAt(c),
!(b>=48&&57>=b))return!1;return!0},checkLogin=function(){var a=$Element("layered_notice01");a&&("WRONGIP"==mEnv.loginStatus?"3"==mEnv.loginLevel?a.show():a.hide():"RECOMMEND2OFF"==mEnv.loginStatus?a.show():a.hide());
},showLoginLayer=function(){if(mCom.oCheckNewMailInterval&&(clearInterval(mCom.oCheckNewMailInterval),
mCom.oCheckNewMailInterval=null),mCom.isWrite){mwCore.clearAutoSave();var b=$Element("sending_layer");
b&&b.visible()&&($Element("sendAfterReviewBg").hide(),b.hide())}"undefined"==typeof a.innerWidth&&(a.innerWidth=document.documentElement.clientWidth,
a.innerHeight=document.documentElement.clientHeight);var c=$Element("loginmid_layer");if(!c.visible()){
var d=$Element("loading_bg");d.show(),c.show();var e=(a.innerWidth-c.width())/2,f=(a.innerHeight-c.height())/2;
c.offset(f,e),$$.getSingle("#loginframe").src="ncs"==mEnv.serviceType||"nwe"==mEnv.serviceType?"/loginFormNwe":"/loginForm/?userID="+mEnv.mailId;
}},hideLoginLayer=function(){var a=$Element("loginmid_layer"),b=$Element("loading_bg");!q()&&l&&(requestAjax(l),
l=null),b.hide(),a.hide()},ncsLoginEnter=function(b){b=b||a.event;var c="number"==typeof b.which?b.which:b.keyCode;
return 13==c?myCore.doLoginValidation():void 0},checkDomainValidation=function(a){var b,c,d,e,f=!0,g=!0,h=a;
h=h.replace(/(\t)+$/,""),h=h.replace(/\s+/g,"");var i=/[0-9a-zA-Z\-]+(\.[0-9a-zA-Z\-]+)+/,j=h.indexOf(","),k=h.indexOf(";");
if(j>=0?d=h.split(","):k>=0?d=h.split(";"):(e=1,f=!1),1==f){e=d.length;for(var l=0;e>l;l++)b=str_extract(d[l],"<",">"),
c=b.match(i),null==c?g=!1:c[0]!=b&&(g=!1)}else b=str_extract(a,"<",">"),c=b.match(i),null==c?g=!1:c[0]!=b&&(g=!1);
return g},checkEmailValidation=function(a,b){if(a=trim(a),"undefined"!=typeof b){aValue=a.split(b);for(var c=0,d=aValue.length;d>c;c++)if(!isEmail(aValue[c]))return!1;
return!0}return isEmail(a)},isEmail=function(a){var b="string"==typeof a?$S(a).trim().toString():"",c=b.match(/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/);
return c&&c[0]==b?!0:!1},trim=function(a){return a?"string"==typeof a?a.replace(/^\s+/g,"").replace(/\s+$/g,""):"":a;
},cutStringByWidth=function(a,b){var c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,5,9,7,11,8,3,4,4,7,7,3,7,3,7,7,4,7,7,7,7,7,6,7,7,3,4,7,7,7,7,10,9,8,9,8,8,7,9,8,3,7,8,8,11,8,9,8,9,8,8,8,8,9,11,9,9,8,4,12,5,7,5,3,8,7,7,7,7,5,7,7,3,3,7,3,9,7,7,7,7,5,7,5,7,7,10,7,7,7,6,3,6,9,0,0],d=0,e=13,f=b-e;
if(1>f)return a;for(var g=0,h=a.length;h>g;g++){var i=a.charCodeAt(g);if(d+=i>=128?e:c[i],d>f)return a.substring(0,g)+"..";
}return a},historyFunc=function(a){var b,c=a.htHistoryData,d=a.htHistoryData.oParameter,e=c.fClass;for(b in d)"string"==typeof d[b]&&(d[b]=replaceSpecialChar(d[b]));
if("search"==e)for(b in d)"string"==typeof d[b]&&(d[b]=d[b].replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'"));
c.fClass=null;var f=""===d.viewMode;if(f&&(d.filterType=d.type,d.isUnread&&(d.isUnread=!1,d.filterType="unread")),
"list"==e)-1!=d.folderSN||f?-1==d.folderSN&&f&&(d.folderSN="all"):d.folderSN=d.type,mlCore.isUseViewMore()&&mCom.nCurrentFolder==d.folderSN&&mCom.nCurrentPage!=d.page&&(mCom.nExpectedShowMailCount="C"==mlCore.getCurrentViewType()?100:400),
mlCore.updateList(null,d.folderSN,null,d.page,d.sortField,d.sortType,d.isUnread,void 0,d.filterType);else if("vip"==e)d.folderSN="vip$"+d.from,
mlCore.updateList(null,d.folderSN,null,d.page,d.sortField,d.sortType,d.isUnread,void 0,d.filterType);else if("bilateral"==e)d.folderSN="bil$"+d.sender,
mCom.oBilateral&&mCom.oBilateral[d.page]?mlCore.updateListStopScroll(null,d.folderSN,d.type,d.page,d.sortField,d.sortType,d.isUnread):(d.page=1,
mlCore.updateList(null,d.folderSN,d.type,d.page,d.sortField,d.sortType,d.isUnread));else if("readReceipt"==e)mlCore.isUseViewMore()&&mCom.nCurrentPage!=d.page&&(mCom.nExpectedShowMailCount=400),
mlCore.updateList(null,2,null,d.page,d.sortField,d.sortType);else if("showThread"==e)mcCore.setMsg(d.from+nLang.c.getting_thread_list),
mlCore.showThread(null,d.mailSN,d.page);else if("read"==e)!mEnv.popupRead&&$Element("setup_container").visible()&&($Element("setup_container").hide(),
$Element("cont_fix_area").hide().show(),$Element("cont_flex_area").hide().show()),mrCore.clickTitle(null,d.mailSN);else if("search"==e){
mlCore.isUseViewMore()&&mCom.nCurrentPage!=d.page&&(mCom.nExpectedShowMailCount=400),mCom.isDetailSearch=void 0!=d.body?!0:!1,
mCom.oCurRequest=d,mCom.oCurRequest.type=d.type,mCom.nCurSortField=d.sortField,mCom.nCurSortType=d.sortType;
{d.page}mlCore.doSearch_new(null,null,null,d.filterType,null,null,d)}else"write"==e?mfCore.doWrite(d.orderType,d.sMailList,d.sSendTo):"option"==e?showOptionLayer(null,d.sOption):"first"==e&&mInit.makeFirstPage();
oRequest=d=e=null},checkNewMail=function(){mcCore.requestAjax({fCallback:$Fn(_checkNewMailCallBack,this).bind(),
oParameter:{mailSN:mCom.nLastMailSN},sUrl:"/json/newmail/"})};var t=function(b){var c=b.mailInfo,d={
body:c.body,icon:"/apple-touch-icon-114x114_new.png"},e=new Notification(c.subject,d);e.onshow=function(){
setTimeout(function(){e.close()},15e3)},e.onclick=function(){a.open("/read/popup/?nMailId="+c.mailSN,"_blank","width=900,height=650,resizable=yes,scrollbars=yes");
}},u=function(a){"all"===mCom.aNotiFolderSN?v(a):requestAjax({sUrl:"/json/folderSN/",oParameter:{mailSN:a
},fCallback:function(b){mCom.aNotiFolderSN.indexOf(b.folderSN.toString())>-1&&v(a)}})},v=function(a){
mcCore.requestAjax({sUrl:"/ncsNewNotiApp/preview?mailSN="+a,fCallback:t})},w=function(a){var b=a.oldValue||mCom.nLastMailSN,c=a.newValue;
c&&c>b&&(mCom.nLastMailSN=c)};_checkNewMailCallBack=function(a){var b=a.lastMailSN;if(b!=mCom.nLastMailSN){
mCom.bUseNotification&&mCom.nLastMailSN<b&&(localStorage.setItem("lastMailSN",b),u(b)),mCom.nLastMailSN=b,
myCore.showConfirmLayer(null,nLang.c.got_newmail);var c=mCom.nCurrentPage,d=mCom.nCurrentFolder,e=mCom.elOptionWrap.visible(),f=mCom.vDivideMode;
if(!e&&1==c&&"search"!=d&&1==mCom.nCurSortField&&mCom.elListWrap.visible())if(mCom.isUpdatingForNewMail=!0,
"C"==mlCore.getCurrentViewType())mlCore.updateConversationListForNewMail();else if("S"==mlCore.getCurrentViewType()){
var g=!1;mlCore.updateListStopScroll(null,mCom.nCurrentFolder,"",c,mCom.nCurSortField,mCom.nCurSortType,null,null,g,mCom.sCurFilterType);
}else mCom.bUpdateListForNewMail=!0,"list"!=f?mCom.bIsUnread?mlCore.updateListStopScroll(null,d,"unread",c,mCom.nCurSortField,mCom.nCurSortType):mlCore.updateListStopScroll(null,d,"",c,mCom.nCurSortField,mCom.nCurSortType):mlCore.isUseViewMore()?mCom.bIsUnread?mlCore.updateListStopScroll(null,d,"unread",c,mCom.nCurSortField,mCom.nCurSortType,null,null,mCom.sCurFilterType):mlCore.updateListStopScroll(null,d,"",c,mCom.nCurSortField,mCom.nCurSortType,null,null,mCom.sCurFilterType):mCom.bIsUnread?mlCore.updateList(null,d,"unread",c,mCom.nCurSortField,mCom.nCurSortType,null,null,mCom.sCurFilterType):mlCore.updateList(null,d,"",c,mCom.nCurSortField,mCom.nCurSortType,null,null,mCom.sCurFilterType);else mcCore.isNaver()&&mcKoreanclick.getList(d,c);
if("list"==f)var h=!1;else var h=!0;mcNotice.notifyNewMail(),h=null,c=d=bListVisible=f=h=null}},historyBack=function(a){
ccr(a.element,"sct.back",a.$value()),history.go(-1)},folderNotExist=function(){alert(nLang.e.folder_not_exist),
mlCore.updateList(null,0)},viewEmbed=function(a,b,c,d,e,f){if(1==e){var g=$$("span",$$.getSingle("#readFrame"));
for(i=0;i<g.length;i++)if($Element(g[i]).attr("nid")=="naver_embed_"+a)var h=g[i];-1!=navigator.userAgent.toLowerCase().indexOf("msie")&&(b=encodeURI(b));
var j="<embed src='"+b+"'";c&&(j+=" width='"+parseInt(c,10)+"px' "),d&&(j+=" height='"+parseInt(d,10)+"px' "),
j+="></embed>",h.innerHTML=j}else{var k=$$("div",$$.getSingle("#readFrame")),l=e;for(i=0;i<k.length;i++)if($Element(k[i]).attr("nid")=="naver_embed_"+a)var h=k[i];
-1!=navigator.userAgent.toLowerCase().indexOf("msie")&&(b=encodeURI(b)),null==b.match(/.html*/i)&&l&&"text/html"!=l.toLowerCase()||(l="applicaton/x-shockwave-flash"),
null!=b.match(/.pdf*/i)&&(b="");var j="<embed src='"+b+"'";c&&(j+=" width='"+parseInt(c,10)+"px' "),
d&&(j+=" height='"+parseInt(d,10)+"px' "),l&&(j+=" type='"+l+"' "),f&&(j+=" flashvars='"+f+"' "),j+="></embed>",
-1!==j.indexOf("javascript:")&&(j=j.replace(/javascript\:/gi,"")),h.outerHTML=j}},closePopup=function(){
mCom.isPopup&&a.close()},showCalendar=function(a,b){_elCalendarLayer||(_elCalendarLayer=$Element($$.getSingle("#ly_calendar"))),
mCalendar.setCalendar(_getCalendarOption(b));var c=$Element($$.getSingle("#"+b));oCalendarMenuOffset=c.offset(),
oCalendarMenuOffset.top=oCalendarMenuOffset.top+c.height(),oCalendarMenuOffset.left=oCalendarMenuOffset.left,
_elCalendarLayer.offset(oCalendarMenuOffset.top,oCalendarMenuOffset.left)},_getCalendarOption=function(a){
var b={calendarId:"ly_calendar",inputId:a,date:$$.getSingle("#"+a).value,showSetTodayButton:!0};return"ipt_start_date"===a||"ipt_end_date"===a?(b.dateFormat="YYYYMMDD",
b.setDateCallback=function(a,b,c){var d=$$.getSingle("#"+c),e=d.value;d.value=a,myCore.hideAllLayer(),
myCore.checkPeriodBo(),a!==e&&mUtil.setSelectedOption($$.getSingle("#slt_srch_period"))}):"arrange_start_date"===a||"arrange_end_date"===a||"arrange_ago_date"===a?(b.dateFormat=mCom.sDefaultDateFormat||"YYYYMMDD",
b.setDateCallback=myArrangeMail.changeCalendarDate):"autoreply_start_date"===a||"autoreply_end_date"===a?(b.dateFormat="YYYY.MM.DD",
b.setDateCallback=moAutoReply.changeCalendarDate):(b.dateFormat=mCom.sDefaultDateFormat||"YYYY.MM.DD",
b.setDateCallback=mwCalendar.checkCalReserve),b},toggleLeft=function(){myCore.hideAllLayer();var a=$Element("wrap");
if(a.hasClass("lft_fd")){a.removeClass("lft_fd"),mCom.nWidthOfSnb=$Element("nav_snb").width(),mCom.nWidthOfPnb=$Element("pwePnbArea")?51:0;
var b=$Element(mCom.elContent).width()-100,c=parseInt(mCom.elListWrap.css("width"),10);if("list"!=mCom.vDivideMode&&c>b){
c=b+"px",mCom.elListWrap.css("width",c),mCom.elReadWrap.css("left",c),mCom.nUserWidthOfList=parseInt(c,10);
var d={listAreaWidth:String(mCom.nUserWidthOfList),listAreaHeight:String(mCom.nUserHeightOfList)};mcCore.requestAjax({
fCallback:$Fn(mcCore.moveBarCallback,this).bind(d),oParameter:d,sUrl:"/json/option/listPaneSize/set/"
})}}else a.addClass("lft_fd"),mCom.nWidthOfSnb=0,mCom.nWidthOfPnb=0;a=null,W(),mlCore.toggleSize()},
moveBarCallback=function(a){mEnv.listAreaHeight=a.listAreaHeight,mEnv.listAreaWidth=a.listAreaWidth},
toggleDivideModeWithoutSaving=function(a,b){var c,d;switch(b){case"list":c="L",d="hide";break;case"vertical":
c="V",d="show";break;case"horizontal":c="H",d="show"}mEnv.divideMode!=c&&(myCore.hideAllLayer(),mEnv.divideMode=c,
mlCore.refreshList()),c=null},logout=function(){if(mcCore.isNwe()){var b=mEnv.rootDomain||"worksmobile.com";
a.location.href="https://auth."+b+"/logout?redirectUrl=https://mail."+b}else if(mcCore.isNcs()){for(var c=location.hostname.split(".");c.length>=2;){
var b=c.join(".");mcCore.setCookie("SMSESSION",null,-900,"/","."+b),mcCore.setCookie("NEO_SES",null,-900,"/","."+b),
mcCore.setCookie("SMSESSION",null,-900,"/",b),mcCore.setCookie("NEO_SES",null,-900,"/",b),c.shift()}
mcCore.setCookie("SMSESSION",null,-900,"/"),mcCore.setCookie("NEO_SES",null,-900,"/"),a.location.reload();
}},showOptionLayer=function(a,b){try{opener&&opener.oMail?(opener.mInit.showOptionLayerAtInit(a,b),opener.focus()):mInit&&mInit.showOptionLayerAtInit(a,b);
}catch(c){}},downloadBigfileNdrive=function(b,c){a.open(c,"ndriveUploadPopup","scrollbars=no,toolbar=no,location=no,resizable=no,status=no,menubar=no,width=476,height=360");
},setFolderSelectBox=function(a,b,c){var d=$$.getSingle("#"+a),e=0,f=$A(),g=$A([]);$Element(d).empty(),
d.options[e++]="mail_firsetView"==a?new Option(nLang.f.whole_mail_folder,"all"):new Option(nLang.f.whole_mail_folder,"-1"),
d.options[e++]=new Option(nLang.o.view_unread_mail,"unread");var h=130,i=c||150;d.options[e++]=new Option(nLang.f.inbox,"0"),
d.options[e++]=new Option(nLang.f.tome,"6");for(var j=0;j<mCom.aFolderInfo.length;j++)if(Number(mCom.aFolderInfo[j][0])>=1e7&&(g.push(mCom.aFolderInfo[j][0]),
"classify_box"!==a)){var k=mCom.aFolderInfo[j][1].split("/"),l=k[k.length-1],m="";for(o=0;o<k.length;o++)m+="..";
l=m+"/"+mcCore.restoreSpecialChar(l),k=null,m=null,d.options[e++]=new Option(l,mCom.aFolderInfo[j][0]),
l=null}d.options[e++]=new Option(nLang.f.sent,"1"),d.options[e++]=new Option(nLang.f.draft,"3");for(var n=0;n<mCom.aFolderInfo.length;n++)if(!(Number(mCom.aFolderInfo[n][0])<11||g.has(mCom.aFolderInfo[n][0]))){
if(-1!=mCom.aFolderInfo[n][1].indexOf("/")){for(var k=mCom.aFolderInfo[n][1].split("/"),l=k[k.length-1],m="",o=1;o<k.length;o++)m+="..";
l=m+"/"+mcCore.restoreSpecialChar(l),k=null,m=null}else var l=mcCore.restoreSpecialChar(mCom.aFolderInfo[n][1]);
b||(l="cleanup_box"==a?cutFolderNameByPixel(l,h):cutFolderNameByPixel(l,i)),d.options[e++]=new Option(l,mCom.aFolderInfo[n][0]),
l=null}switch("Y"==mEnv.promotionUse?d.options[e++]=new Option(nLang.f.shop,"10"):"","Y"==mEnv.billUse?d.options[e++]=new Option(nLang.f.bill,"7"):"",
"Y"==mEnv.snsUse?d.options[e++]=new Option(nLang.f.sns,"9"):"","Y"==mEnv.cafeUse?d.options[e++]=new Option(nLang.f.cafe,"8"):"",
d.options[e++]=new Option(nLang.o.view_important_mail,"mark"),d.options[e++]=new Option(nLang.o.view_attach_mail,"attach"),
mcCore.envUseRemind()&&(d.options[e++]=new Option(nLang.o.view_remind_mail,"remind")),d.options[e++]=new Option(nLang.o.view_tome_mail,"tome"),
d.options[e++]=new Option(nLang.f.spam,"5"),d.options[e++]=new Option(nLang.f.trash,"4"),a){case"mail_firsetView":
f=$A(["4","5"]);break;case"slt_search_folder":f=$A(["unread","mark","attach","tome","remind"]);break;
case"addRule_sel_selectMailbox":f=$A(["1","3","-1","4","unread","mark","attach","tome","idomain","remind"]);
break;case"folder_sn":case"select_folder":case"select_folder_q":case"select_folder_m":case"migration_box":
f=$A(["1","3","-1","unread","mark","attach","tome","idomain","remind"]);break;case"cleanup_box":f=$A(["1","3","4","5","unread","mark","attach","tome","idomain","remind"]);
break;case"classify_box":case"move_box":f=$A(["1","3","4","6","-1","unread","mark","attach","tome","idomain","12","remind"]);
break;case"cleanup_move_box":f=$A(["1","3","-1","unread","mark","attach","tome","idomain","remind"]);
}if("move_box"==a)for(var j=0;j<mCom.aFolderInfo.length;j++)Number(mCom.aFolderInfo[j][0])>=1e7&&f.push(""+mCom.aFolderInfo[j][0]);
for(var e=0;e<d.options.length;e++){var p=d.options[e].value;f.has(p)&&d.options.remove(e--)}},cutFolderNameByPixel=function(a,b){
var c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,5,9,7,11,8,3,4,4,7,7,3,7,3,7,7,4,7,7,7,7,7,6,7,7,3,4,7,7,7,7,10,9,8,9,8,8,7,9,8,3,7,8,8,11,8,9,8,9,8,8,8,8,9,11,9,9,8,4,12,5,7,5,3,8,7,7,7,7,5,7,7,3,3,7,3,9,7,7,7,7,5,7,5,7,7,10,7,7,7,6,3,6,9,0,0],d=0,e=13,f=0;
if(1>b)return a;for(var g=0;g<a.length;g++){var h=a.charCodeAt(g);if(d+=h>=128?e:c[h],f++,d>b)return a.substring(0,g)+"..";
}return a},isSystemFolderName=function(a){switch(a.toUpperCase()){case nLang.f.all_for_title.toUpperCase():
case nLang.f.sent.toUpperCase():case nLang.f.inbox.toUpperCase():case nLang.f.read_receipt.toUpperCase():
case nLang.f.draft.toUpperCase():case nLang.f.trash.toUpperCase():case nLang.f.spam.toUpperCase():case nLang.f.tome.toUpperCase():
return alert(nLang.e.reserved_foldername),!0}if(mcCore.isNaver())switch(a.toUpperCase()){case nLang.f.bill.toUpperCase():
case nLang.f.cafe.toUpperCase():case nLang.f.sns.toUpperCase():case nLang.f.shop.toUpperCase():return alert(nLang.e.reserved_foldername),
!0;default:return!1}return!1};var x=function(){requestAjax({fCallback:$Fn(y,this).bind(),oParameter:{},
sUrl:"/json/iDomain/invalidateUserCookie"})},y=function(){location.reload()},z=function(a,b){if(a){var c=a.toString(2),d=Number(b).toString(2),e=d.length;
if("1"===c.charAt(c.length-e))return!0}return!1},A=function(a,b){var c={};for(var d in a)d!=b&&(c[d]=a[d]);
return c},B=function(){return isNwe()?"undefined"==typeof mEnv||"undefined"==typeof mEnv.useDrive||mEnv.useDrive?!0:!1:!0;
},C=function(){if("undefined"==typeof document.head)return!1;if(D()<1280)return!1;try{var a=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice;
}catch(b){var a=!1}if("function"==typeof a)return!0;var c=$Agent().navigator().getName();switch(c){case"ie":
return $Agent().navigator().version>=9?!0:!1;default:return!1}},D=function(){var b,c=$Agent().navigator();
return b=c.ie?a.innerWidth?a.innerWidth:document.documentElement.clientWidth:a.screen.width},E=function(a){
var b,c,d,e,f,g,h,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",j="",k=0;for(a=this.utf8Encode(a);k<a.length;)b=a.charCodeAt(k++),
c=a.charCodeAt(k++),d=a.charCodeAt(k++),e=b>>2,f=(3&b)<<4|c>>4,g=(15&c)<<2|d>>6,h=63&d,isNaN(c)?g=h=64:isNaN(d)&&(h=64),
j=j+i.charAt(e)+i.charAt(f)+i.charAt(g)+i.charAt(h);return j},F=function(a){a=a.replace(/\r\n/g,"\n");
for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),
b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),
b+=String.fromCharCode(63&d|128))}return b},G=function(){!mCom.isPopup&&mCom.elListWrap&&mCom.elListWrap.visible()&&(mCom.nListWrapScrollTop=mCom.elList.scrollTop);
},H=function(){!mCom.isPopup&&mCom.elListWrap&&mCom.elListWrap.visible()&&(mCom.elList.scrollTop=mCom.nListWrapScrollTop);
},I=function(a){var b=(document.body||document.documentElement).style;if("string"==typeof b[a])return a;
var c=["Moz","webkit","Webkit","Khtml","O","ms"];a=a.charAt(0).toUpperCase()+a.substr(1);for(var d=0;d<c.length;d++)if("string"==typeof b[c[d]+a])return c[d]+a;
return null},J=function(a,b,c){var d=L(a);_woMailList.forEach(function(a){return a.mailSN==d?void(a.unreadThreadCount="full"==b?a.threadCount:"set"==b?c:Number(a.unreadThreadCount)+c>a.threadCount?a.threadCount:Number(a.unreadThreadCount)+c<0?0:Number(a.unreadThreadCount)+c):void 0;
},this)},K=function(a){return a?"number"==typeof a?a:a.replace(/c([0-9]+)/g,"$1"):""},L=function(a){
if(!a)return"";var b=""+a,c="";if(b.match(/^c/))c=b;else{var d=mlCore.getListObject(a);if(d.parentMailSN)c="c"+d.parentMailSN;else if(d=mlCore.getListObject("c"+a),
d.threadCount)c="c"+a;else if($$.getSingle("li[mailsn="+a+"] ! li.cv_slave",mCom.elList))c=$Element($$.getSingle("li[mailsn="+a+"] ! li.cv_slave",mCom.elList)).prev().attr("mailsn");else if(c||_woConversationMailList.forEach(function(b){
b.mailSN==a&&(c=b.parentMailSN,$A.Break())},this),!c)for(var e=mrCore.getCardListMailSN(),f=0,g=e.length;g>f;f++)if(e[f]==a){
c="c"+e[0];break}}return c},M=function(a){var b=mcCore.getPureMailSN(mcCore.getParentMailSN(a)),c=[];
if(_woMailList.forEach(function(a){a.parentMailSN==b&&c.push(a.mailSN)},this),$$.getSingle("div.cv_card",mCom.elRead)){
var d=$Element($$.getSingle("div.cv_card",mCom.elRead)).attr("data-mailsn");b==d&&_woConversationMailList.forEach(function(a){
c.push(a.mailSN)},this)}return c=$A(c).unique().$value()},N=function(a){var b="";return _woMailList.forEach(function(c){
c.mailSN==a&&(b=c.folderSN,$A.Break())},this),_woConversationMailList.forEach(function(c){c.mailSN==a&&(b=c.folderSN,
$A.Break())},this),b},O=function(a,b){return"all"==a||"-1"==a||"search"==a||a==b?!0:!1};_getSignContent=function(a){
var b=a.writeBody,c=$("senderAddress"),d="";if(b.dlSenderList&&c&&(b.dlSender||b.iDomainEmail&&("draft"==b.orderType||"template"==b.orderType)))return" ";
if("nametag"==b.selectedSign)d="";else if("blogtag"==b.selectedSign)d=b.blogtag;else{var e=$A(b.signList);
d="",e.forEach(function(a){b.selectedSign==a.signSN&&(d=a.signContent)})}return"toMe"==mCom.orderType&&(d=""),
d};var P=function(){return"attach"==mCom.nCurrentFolder||"attach"==mCom.sCurFilterType},Q=function(){
return P()&&!mEnv.bForceListView},R=function(a){("test9@navercorp.com"==mEnv.mailAddress||"japan@nwetest.com"==mEnv.mailAddress)&&(mCom.startTime=new Date);
},S=function(a){if(mCom.startTime){var b=new Date;b-mCom.startTime}},T=0,U=function(a,b){T=0;for(var c=a.length,d=function(){
T++},e=function(){T===c?"function"==typeof b&&b():setTimeout(e,50)},f=0;c>f;f++)V(a[f],d);setTimeout(e,50);
},V=function(a,b){var c=document.getElementsByTagName("head")[0],d=document.createElement("script");d.type="text/javascript",
"function"==typeof b&&(d.onload=function(){b()}),d.src=a,c.appendChild(d)},W=function(){var a=$Element("wrap");
if(a){var b=a.hasClass("lft_fd"),c=mCom.elWriteBtnSet,d=$Element("container");if(!b)return c.style.top="",
void d.removeClass("show_write");if(mCom.isWriting||$Element("setup_container").visible())return void d.removeClass("show_write");
var e=$Element("image_promotion"),f=$Element("mx_record_alert");c.style.top=e&&e.visible()?e.height()+"px":f&&f.visible()?f.height()+"px":"",
d.hasClass("show_write")||d.addClass("show_write")}},X=function(a){return isNaver()?!1:z(a,"0x200000000")?"hold":z(a,"0x400000000")?"approved":z(a,"0x800000000")?"rejected":!1;
},Y=function(a){return z(a,"0x1000000000")?"hold":z(a,"0x400000000")?"accepted":z(a,"0x800000000")?"rejected":!1;
},Z=function(a,b,c){if(c||(c="f"),isNaver())return nLang[c][a];switch(b){case"memobox":return nLang.m[a];
case"mailbox":return nLang[c][a];default:return Number(b)&&(6==Number(b)||Number(b)>=1e7)?nLang.m[a]:nLang[c][a];
}},_=function(b){var c=a.devicePixelRatio||a.screen.deviceXDPI/a.screen.logicalXDPI||1,d=mcCore.isNwe()?b+50:b;
if(c>1&&2>c){var e=$Agent(),f=e.os().win&&e.navigator().chrome?17:0,g=mcCore.isNwe()?885:835,h=20;d=Math.ceil(Math.max(c*(g+2*h),b))+f,
d=Math.min(d,screen.width)}return d},ab=function(a){var b="",c=1073741824,d=1048576,e=1024,f="";return a>=c?(a/=c,
f=" GB"):a>=d?(a/=d,f=" MB"):a>=e?(a/=e,f=" KB"):f=" B",b=a.toFixed(2)+f},bb=function(a,b,c,d){if(a){
var e=c||d||"";if(e)for(var f in n)n.hasOwnProperty(f)&&(e=e.replace(f,n[f]));a[b]=e}},cb=function(a,b){
var c=a[b]||"";if(c)for(var d in n)n.hasOwnProperty(d)&&(c=c.replace(n[d],d));return c},db=function(a){
var b=a._event.which?a._event.which:a._event.keyCode;if(b>47&&91>b||b>95&&106>b||8==b||46==b){var c=a.element,d=c.value;
if(d&&!/\D/g.test(d)&&8!==d.length){var e=$$.getSingle("#slt_srch_period");$$.getSingle("[value=input]",e).selected=!0,
mUtil.setSelectedOption(e)}}};return{sendMsg:sendMsg,setMsg:setMsg,getServiceTitle:getServiceTitle,isNcs:isNcs,
isNaver:isNaver,isNwe:isNwe,isIdomainUse:isIdomainUse,getIdomainInfos:getIdomainInfos,isIdomainFolder:isIdomainFolder,
isIdomainEmail:isIdomainEmail,getDlSenderList:getDlSenderList,getSenderAddress:getSenderAddress,getPrimaryEmailAddr:getPrimaryEmailAddr,
setPrimaryEmailAddr:setPrimaryEmailAddr,getIdomainFolderSN:getIdomainFolderSN,getIdomainEmailAddress:getIdomainEmailAddress,
getNaverEmailAddress:getNaverEmailAddress,requestAjax:requestAjax,toggleDivideMode:toggleDivideMode,
setDivideMode:setDivideMode,getElapsedTime:getElapsedTime,findFolderName:findFolderName,getFolderObject:getFolderObject,
findFolderSN:findFolderSN,getFolderOrder:getFolderOrder,toggleEl:toggleEl,template:template,improvedTemplate:improvedTemplate,
hideSendResultDiv:hideSendResultDiv,hideWriteArea:hideWriteArea,loadCss:loadCss,adjustTopOfFlexArea:adjustTopOfFlexArea,
openWindowWithPost:openWindowWithPost,openPopupWindow:openPopupWindow,getHumanTime:getHumanTime,setAvailCookie:setAvailCookie,
setCookie:setCookie,showLoginLayer:showLoginLayer,hideLoginLayer:hideLoginLayer,ncsLoginEnter:ncsLoginEnter,
checkLogin:checkLogin,getCookie:getCookie,replaceSpecialChar:replaceSpecialChar,restoreSpecialChar:restoreSpecialChar,
cutStr:cutStr,getStrSize:getStrSize,str_extract:str_extract,checkNumberOnly:checkNumberOnly,checkDomainValidation:checkDomainValidation,
checkEmailValidation:checkEmailValidation,isEmail:isEmail,trim:trim,cutStringByWidth:cutStringByWidth,
historyFunc:historyFunc,historyBack:historyBack,checkNewMail:checkNewMail,onNotification:w,folderNotExist:folderNotExist,
viewEmbed:viewEmbed,closePopup:closePopup,showCalendar:showCalendar,toggleLeft:toggleLeft,moveBarCallback:moveBarCallback,
toggleDivideModeWithoutSaving:toggleDivideModeWithoutSaving,logout:logout,showOptionLayer:showOptionLayer,
downloadBigfileNdrive:downloadBigfileNdrive,setFolderSelectBox:setFolderSelectBox,cutFolderNameByPixel:cutFolderNameByPixel,
isSystemFolderName:isSystemFolderName,refreshCookie:x,isCorrespondFlag:z,isDisplayDrive:B,isEnableDeskhome:C,
base64Encode:E,utf8Encode:F,saveListScrollTop:G,loadListScrollTop:H,getCSSName:I,setUnreadThreadCount:J,
getFolderSNByMailSN:N,getPureMailSN:K,getParentMailSN:L,getThreadMailSNList:M,avaliableFolderIncludeMail:O,
isAttach:P,isAttachView:Q,isBlockedExtension:b,refuseObject:A,testPeriodStart:R,testPeriodEnd:S,loadJsScripts:U,
loadJsScript:V,foldedWriteButton:W,checkApprovalStatus:X,getMemoboxString:Z,checkWorkflowStatus:Y,getPopupWindowWidthWith:_,
getHumanFileSize:ab,getShortCutFromElement:cb,setShortCutToElement:bb,changeDateHandler:db,isMobile:c,
keydownHandlerForIE8Input:d,envUseRemind:e,isListVisible:f,errorCallback:s,useCalendar:useCalendar,assign:g
}}(window),mcDragndrop=function(){var a=[];_oDragging={},_welCountBox=null,_fToggleChild=null,_fMoveScroll=null,
_bToggleChild=!1,_isRightClick=function(a){if(a){if(a._event&&a._event.which&&2==a._event.which)return!0;
if(a._event&&a._event.button&&2==a._event.button)return!0}return!1},folderDragStart=function(a){if(1!=_isRightClick(a)){
var b=getEventElement(a.element,"m1");return b?(_oDragging.sCurObj="folder",_oDragging.nFolderSN=b.attributes.foldersn.value,
_oDragging.nParentFolderSN=b.attributes.parentfoldersn.value,_oDragging.sFolderName=mcCore.findFolderName(b.attributes.foldersn.value,!1),
mCom.bMouseDownFlag=!0,mCom.bMouseDropFlag=!0,mCom.bInitDragObj=!0,null==_welCountBox&&(_welCountBox=$Element("dragging_layer")),
_welCountBox.className("ly_folder_drag"),$Element($$.getSingle("div#dragging_layer p")).show(),$$.getSingle("div#dragging_layer p").innerHTML=_oDragging.sFolderName,
$Element(b).addClass("dragging"),$Element($$.getSingle(".link_mail")).addClass("drag_boxmove"),$Element($$.getSingle("#section_mymail")).addClass("drag_boxmove"),
document.onselectstart=function(){return!1},!1):void(b=null)}},handleDragStart=function(a){if(!(a&&a.$value()&&a.$value().shiftKey||a.element&&$Element(a.element).hasClass("icoRead"))){
var b=getEventElement(a.element,"m1");if(b){var c=$Element(b).attr("mailsn");if("3"==$Element(b).attr("foldersn"))return void(b=null);
$$.getSingle("."+c+"_li .mInfo .mCheck").checked||(mlCore.unCheckAll(),mlCore.emptyCurMailList(),mlCore.checkMailUI($Element(b).attr("mailsn"),!1)),
null==_welCountBox&&(_welCountBox=$Element("dragging_layer")),$Element($$.getSingle("div#dragging_layer p")).show(),
mCom.bInitDragObj=!1,_oDragging.sCurObj="mail",_oDragging.nFolderSN=$Element(b).attr("foldersn"),_oDragging.nMailSN=$Element(b).attr("mailsn"),
mCom.bMouseDownFlag=mCom.bMouseDropFlag=!0,document.onselectstart=function(){return!1},c=b=null}}},handleMoveEnd=function(a){
if(1!=_isRightClick(a)){var b=getEventElement(a.element,"m2");return clearInterval(_fMoveScroll),clearTimeout(_fToggleChild),
$Element("dragging_layer").hide(),$$.getSingle(".dragging")?$Element($$.getSingle(".dragging")).removeClass("dragging"):"",
$Element($$.getSingle(".link_mail")).removeClass("drag_boxmove"),$Element($$.getSingle("#section_mymail")).removeClass("drag_boxmove"),
void 0!=b&&b.attributes.foldersn||(mCom.bMouseDropFlag=!1),mCom.bMouseDownFlag=!1,document.onselectstart=null,
!0}},handleDrag=function(a){if(1!=_isRightClick(a)){_welCountBox&&!mCom.bInitDragObj&&(_welCountBox.className("ly_msg_move"),
$$.getSingle("#dragging_layer p").innerHTML=mlCore.getCurMailListLength(),mCom.bInitDragObj=!0);var b=a.pos();
null==_welCountBox&&(_welCountBox=$Element("dragging_layer"));var c=8;_welCountBox.visible()||_welCountBox.show(),
_welCountBox.offset(b.pageY+c,b.pageX+c),b=null,c=null,a.stop()}},handleDragEnter=function(b){var c=getEventElement(b.element,"m3");
if(c){var d=$Element(c);if(d.hasClass("h_lft_menu")&&mCom.bMouseDownFlag?d.css("cursor","pointer"):(d.hasClass("_folder")||d.hasClass("folder_name"))&&(mCom.nCurOverFolder=d.attr("foldersn"),
d.addClass("ovr"),a.push(d)),mCom.bMouseDownFlag){b.element=c;var e="undefined"!=typeof c.attributes.foldersn?c.attributes.foldersn.value:-1;
if(e>100&&mCom.bMouseDownFlag&&!$Element(b.element).hasClass("drop_order")){if(b.pos().pageY-30<$Element(mCom.elNav).offset().top?_fMoveScroll=setInterval($Fn(function(){
mCom.elNav.scrollTop-=13},this).bind(),50):b.pos().pageY+30>$Element(mCom.elNav).offset().top+mCom.elNav.offsetHeight&&(_fMoveScroll=setInterval($Fn(function(){
mCom.elNav.scrollTop+=13},this).bind(),50)),null!=$Element("pSN_"+e))var f=$Element("pSN_"+e).prev();
null!=f&&(_fToggleChild=setTimeout($Fn(function(a,b){$Element("pSN_"+a).show(),b.removeClass("fold_folder").addClass("spread_folder");
for(var c=0;c<mCom.aFolderInfo.length;c++)if(mCom.aFolderInfo[c][0]==a){mCom.aFolderInfo[c][4]=!1;break;
}a=null,b=null},this).bind(e,f),500)),f=null}return"mail"==_oDragging.sCurObj?_handleDragEnterMail(e):mCom.bMouseDownFlag&&_handleDragEnterFolder(b,e),
d=null,!0}}},_handleDragEnterMail=function(a){if(a!=mCom.nCurrentFolder){for(var b=!0,c=mlCore.getCurMailList(),d=0;d<c.length();d++)if(!mcCore.isCorrespondFlag(c.get(d).status,"0x100")){
b=!1;break}c=null;var e=$Element("dragging_layer");e.className(-1!=a&&3!=a&&1!=a||1==a&&b?"ly_msg_move":"ly_msg_notmove"),
e=null,b=null}},_removeDragClass=function(a){a.removeClass("line_loc drag_into line_loc_bottom drag_line_loc ovr");
},_handleDragEnterFolder=function(a,b){var c,d=a.element;if(_elementIsMenu(d))c="undefined"!=typeof d.attributes.foldersn&&6==Number(d.attributes.foldersn.value)?$Element($$.getSingle("#6_sub_fol")).child()[0]:$Element($$.getSingle("#user_folder")).child()[0],
c&&(_removeDragClass(c),$Element(c).addClass("line_loc"));else if(b>100)c=$Element("LI"!=d.tagName?d.parentElement:d),
_removeDragClass(c),b!=_oDragging.nFolderSN&&c.addClass($Element(d).hasClass("drop_into")?"drag_into":"line_loc");else{
var e=$Element(d);e.hasClass("drop_order_bottom")?(c=e.prev(),_removeDragClass(c),c.addClass("line_loc_bottom")):c=$Element(d);
}var f=$Element("dragging_layer");0!=b&&100>b&&6!=b?(f.className("ly_folder_notmove"),$Element($$.getSingle("div#dragging_layer p")).hide()):_isValidDrag(a,b)?(f.className("ly_folder_drag"),
$Element($$.getSingle("div#dragging_layer p")).show()):(f.className("ly_folder_notmove"),$Element($$.getSingle("div#dragging_layer p")).hide(),
_removeDragClass(c)),f=null,c=null},_isValidDrag=function(a,b){var c=a.element,d=$Element(a.element);
if(_oDragging.nFolderSN<1e7){if(b>100&&1e7>b)return!0;if(c==$$.getSingle("#section_mymail .list_menu"))return!0;
if(0==b&&"H3"==c.tagName)return!0;if(d.hasClass("drop_order_bottom")&&d.hasClass("mail"))return!0}if(_oDragging.nFolderSN>=1e7){
if(b>=1e7)return!0;if("LI"==c.tagName&&6==Number(b))return!0;if(d.hasClass("drop_order_bottom")&&d.hasClass("memo"))return!0;
}return!1},_elementIsMenu=function(a){var b="undefined"!=typeof a.attributes.foldersn?a.attributes.foldersn.value:-1;
return a==$$.getSingle("#section_mymail .list_menu")?!0:0==b&&"H3"==a.tagName?!0:"LI"==a.tagName&&6==Number(b)?!0:!1;
},handleDragLeave=function(a){var b=getEventElement(a.element,"m4");if(b){if(a.element=b,clearInterval(_fMoveScroll),
clearTimeout(_fToggleChild),$Element(a.element).hasClass("h_lft_menu"))$Element(a.element).css("cursor","default");else if(null==a.relatedElement||null!=a.relatedElement.attributes){
var c=$Element(a.element);(c.hasClass("_folder")||c.hasClass("folder_name")||c.hasClass("new_folder"))&&(mCom.nCurOverFolder=null,
c.removeClass("ovr"));var d=$Element("dragging_layer");d.hasClass("ly_folder_drag")||d.hasClass("ly_folder_notmove")?(d.className("ly_folder_notmove"),
$Element($$.getSingle("div#dragging_layer p")).hide()):(d.className("ly_msg_notmove"),$Element($$.getSingle("div#dragging_layer p")).show()),
d=null,c=null}for(var e=["drag_into","line_loc","line_loc_bottom","drag_line_loc"],f=0;f<e.length;f++){
var g=e[f],h=$Element($$.getSingle("."+g));h&&h.removeClass(g)}return!0}},handleDrop=function(a){if(1!=_isRightClick(a)){
var b=getEventElement(a.element,"m2");a.element=b,b&&($Element($$.getSingle(".h_lft_menu")).css("cursor","default"),
mCom.bMouseDropFlag&&(mCom.bMouseDropFlag=!1,"mail"==_oDragging.sCurObj?_handleDropMail(b):b.attributes.foldersn.value!=_oDragging.nFolderSN&&_handleDropFolder(a)));
}},_handleDropMail=function(a){if($Element("dragging_layer").hasClass("ly_msg_notmove"))return!0;if(null!=a.attributes){
$Element(a).removeClass("ovr");var b=$Element(a).attr("foldersn");if(_oDragging.nFolderSN==b)var c=!1;else{
_oDragging.nTargetFolderSN=b;var c=_oDragging}b=null}else var c=!1;if(c){var d=mlCore.makeObjectForMoveMail(c.nTargetFolderSN,0);
return 0!=d&&(mcCore.saveListScrollTop(),mcCore.requestAjax({fCallback:$Fn(handleDropCallback,this).bind(d),
oParameter:d,sUrl:"/json/select/move/"})),d=c=null,!0}},_handleDropFolder=function(a){var b,c,d=$Element(a.element),e=a.element,f=_oDragging,g=f.nFolderSN,h=e.attributes.foldersn.value;
if(!_isValidDrag(a,h))return void(f=d=null);if(_elementIsMenu(e))6==h?(b=6,c=-1):(b=0,c=-1);else if(h>100){
if(h!=g)if("LI"==e.tagName||$Element(e).hasClass("drop_into")){var i=_findLastChildFolderSn(Number(h),g);
c=i,b=h}else{var j=e.attributes.parentfoldersn.value,k=_findPrevFolderSN(j,h);b=j,c=k}}else d.hasClass("drop_order_bottom")&&(d.hasClass("memo")?(b=6,
c=_findLastChildFolderSn(6,g)):(b=0,c=_findLastChildFolderSn(0,g)));mfCore.setFolderLocation(null,f,g,b,c),
f=d=null},_findLastChildFolderSn=function(a,b){for(var c=mCom.aFolderInfo,d=$A(),e=0;e<c.length;e++){
var f=c[e],g=f[0],h=f[2];h==a&&g>100&&d.push(g)}var i=_getLast(d,-1);return i==b?_getLast(d,-1):i},_getLast=function(a,b){
var c=a.pop();return c?c:b},_findPrevFolderSN=function(a,b){for(var c=mCom.aFolderInfo,d=$A(),e=0;e<c.length;e++){
var f=c[e],g=f[0],h=f[2];if(g==b)return d.length()>0?d.pop():-1;h==a&&g>100&&d.push(g)}return-1},handleDropCallback=function(a){
return mlCore.moveMailCallBack(a,a.targetFolderSN),!0},getEventElement=function(a,b){if(a&&a.tagName){
if(-1!=$Element(a).className().indexOf("_"+b)&&"A"!=a.tagName)return a;if("c1"==b||"m1"==b||"m2"==b||"m3"==b||"m4"==b||"d2"==b)return a.parentNode&&"BODY"!=a.parentNode.tagName?getEventElement(a.parentNode,b):void 0;
}},attachDragStart=function(a,b){var c=$$.getSingle("!li a.btn_savepc",a.element),d={downloadurl:c.href,
name:a.element.innerHTML,size:b};if("mousedown"==a.type){document.onselectstart=function(){return!1};
var e=function(a){var b=a.pos(),c=8;_welCountBox.show(),_welCountBox.offset(b.pageY+c,b.pageX+c),a.stop();
},f=function(){$Element(document).detach("mousemove",e),$Element(document).detach("mouseup",e),mCom.bMouseDropFlag=!1,
_welCountBox.hide(),$Element("dragging_layer").css("position",""),$Element("dragging_layer").css("zIndex","");
};$Element(document).attach("mousemove",e),$Element(document).attach("mouseup",f),null==_welCountBox&&(_welCountBox=$Element("dragging_layer")),
_welCountBox.className(""),$Element("dragging_layer").css("position","absolute"),$Element("dragging_layer").css("zIndex","25"),
$Element($$.getSingle("div#dragging_layer p")).show(),$$.getSingle("div#dragging_layer p").innerHTML=a.element.innerHTML,
_oDragging.sCurObj="attach",_oDragging.oAttachInfo=d,mCom.bMouseDropFlag=!0,document.onselectstart=function(){
return!1}}else a._event.dataTransfer.effectAllowed="move",a._event.dataTransfer.setData("text",$Json(d).toString());
},html5DragStart=function(a,b){var c=[],d=!0,e=1;if(mCom.bDragAllSendMail=!0,mCom.bDragIncludeDraftMail=!1,
"thread"==b)_woThreadMailList.forEach(function(a){return a.mailSN==g?(c.push({mailSN:a.mailSN,size:a.size,
status:a.status,attachCount:a.attachCount,name:a.subjectOrg?a.subjectOrg+".eml":a.subject+".eml"}),d&&"undefined"!=typeof a.reSend&&!a.reSend&&(d=!1),
mCom.bDragAllSendMail&&"undefined"!=typeof a.status&&!mcCore.isCorrespondFlag(a.status,"0x100")&&(mCom.bDragAllSendMail=!1),
void(mCom.bDragIncludeDraftMail||"undefined"==typeof a.folderSN||3!=a.folderSN||(mCom.bDragIncludeDraftMail=!0))):void 0;
});else{var f=getEventElement(a.element,"d2");if(f){var g=$Element(f).attr("mailsn");$$.getSingle("."+g+"_li .mInfo .mCheck").checked||(mlCore.unCheckAll(),
mlCore.emptyCurMailList(),mlCore.checkMailUI(g,!1))}_woCurMailList.forEach(function(a){c.push({mailSN:a.mailSN,
size:a.size,status:a.status,attachCount:a.attachCount,name:a.subjectOrg?a.subjectOrg+".eml":a.subject+".eml"
}),d&&"undefined"!=typeof a.reSend&&!a.reSend&&(d=!1),mCom.bDragAllSendMail&&"undefined"!=typeof a.status&&!mcCore.isCorrespondFlag(a.status,"0x100")&&(mCom.bDragAllSendMail=!1),
mCom.bDragIncludeDraftMail||"undefined"==typeof a.folderSN||3!=a.folderSN||(mCom.bDragIncludeDraftMail=!0);
}),e=_woCurMailList.length()}var h={mailId:mEnv.mailId,mailData:c,enableResend:d};if(a._event.dataTransfer.effectAllowed="move",
a._event.dataTransfer.setData("text",$Json(h).toString()),a._event.dataTransfer.setDragImage){var i=$$.getSingle("#dragging_layer2");
i.style.top="0px",$$.getSingle("p",i).innerHTML=e,a._event.dataTransfer.setDragImage(i,0,0)}return!0;
},html5Drop=function(a){try{if(!a._event.dataTransfer.getData("text")||!$Json(a._event.dataTransfer.getData("text")).toObject()||!$Json(a._event.dataTransfer.getData("text")).toObject().mailData)return;
}catch(b){mlog(b)}a.stopDefault();var c=getEventElement(a.element,"m2");if(c){$Element($$.getSingle(".h_lft_menu")).css("cursor","default"),
$Element(c).removeClass("ovr");var d=$Element(c).attr("foldersn");if(1==d&&!mCom.bDragAllSendMail||mCom.bDragIncludeDraftMail)return void(mCom.bDragIncludeDraftMail&&alert(nLang.l.cannot_move_temp_mail));
var e=mlCore.makeObjectForMoveMail(d,0);0!=e&&(mcCore.saveListScrollTop(),mcCore.requestAjax({fCallback:$Fn(handleDropCallback,this).bind(e),
oParameter:e,sUrl:"/json/select/move/"}),e=oDragging=null)}},html5DragOver=function(b){var c=getEventElement(b.element,"m3");
if(c){b.element=c;var d=b.element.attributes.foldersn.value;if(1!=d||mCom.bDragAllSendMail?b.stopDefault():b._event.dataTransfer.dropEffect="none",
d>100){if(null!=$Element("pSN_"+d))var e=$Element("pSN_"+d).prev();null==e||_bToggleChild||(_bToggleChild=!0,
_fToggleChild=setTimeout($Fn(function(a,b){_bToggleChild=!1,$Element("pSN_"+a).show(),b.removeClass("fold_folder").addClass("spread_folder");
for(var c=0;c<mCom.aFolderInfo.length;c++)if(mCom.aFolderInfo[c][0]==a){mCom.aFolderInfo[c][4]=!1;break;
}a=null,b=null},this).bind(d,e),500)),e=null}var f=b.element,g=$Element(f);return a.forEach(function(a){
f!=a.$value()&&a.removeClass("ovr")}),a=[],(g.hasClass("_folder")||g.hasClass("folder_name"))&&(a.push(g),
mCom.nCurOverFolder=g.attr("foldersn"),g.hasClass("ovr")||g.addClass("ovr")),!0}},html5DragLeave=function(a){
var b=getEventElement(a.element,"m4");if(b){if(a.element=b,clearInterval(_fMoveScroll),clearTimeout(_fToggleChild),
_bToggleChild=!1,$Element(a.element).hasClass("h_lft_menu"))$Element(a.element).css("cursor","default");else if(null==a.relatedElement||null!=a.relatedElement.attributes){
var c=$Element(a.element);(c.hasClass("_folder")||c.hasClass("folder_name")||c.hasClass("new_folder"))&&(mCom.nCurOverFolder=null,
c.removeClass("ovr")),c=null}return!0}};var b=function(){var a=$$.getSingle("#header").offsetHeight+mCom.elNav.offsetTop;
mCom.elNav.addEventListener("dragover",c.apply(this,[a]))},c=function(a){var b=!1;return function(c){
var e,f=a+mCom.elNav.offsetHeight,g=c.pageY;a+50>g?(b=!0,e="up"):g>f-50?(b=!0,e="down"):b=!1,b&&window.requestAnimationFrame(d.bind(this,e));
}},d=function(a){"up"===a?mCom.elNav.scrollTop=mCom.elNav.scrollTop-20:"down"===a&&(mCom.elNav.scrollTop=mCom.elNav.scrollTop+20);
},e=function(){return _oDragging};return{folderDragStart:folderDragStart,handleDragStart:handleDragStart,
getEventElement:getEventElement,handleMoveEnd:handleMoveEnd,handleDrag:handleDrag,handleDragEnter:handleDragEnter,
handleDragLeave:handleDragLeave,handleDrop:handleDrop,attachDragStart:attachDragStart,html5DragStart:html5DragStart,
html5Drop:html5Drop,html5DragOver:html5DragOver,html5DragLeave:html5DragLeave,setupLnbFolderAutoScroll:b,
getDragging:e}}(),mcPromotion=function(){return showPromotionText=function(a){sTemplate={header:"<div id='rolling' class='rolling_container'><ol>",
body:"<li class='{IconType}'><span class='icon'><em>{IconType}</em></span><a {Onclick} {Href}>{Text}</a></li>",
bodyWithShortcut:"<li class='{IconType}'><span class='icon'><em>{IconType}</em></span>{Text}<a {Onclick} {Href}>{linkText}</a></li>",
tail:"</ol></div><button class='prom_close _ccr(ttb.close) _c1(mcPromotion|{CloseType})' type='button' title='"+nLang.c.promotion_banner_close+"'><span>"+nLang.c.promotion_banner_close+"</span></button>"
};var b=[],c=-1;b[++c]=sTemplate.header;var d=a.bannerData;if(d&&!(d.length<1)){if(1==d.length)var e=0;else{
var f=new Date,e=Number(f.getSeconds())%d.length;f=null}if(d[e].isShortcut){var g=sTemplate.bodyWithShortcut;
g=g.replace(/\{LinkText\}/g,d[e].linkText)}else var g=sTemplate.body;if(g=g.replace(/\{IconType\}/g,d[e].iconType),
g=g.replace(/\{Text\}/g,d[e].text),"popup"==d[e].linkType.toLowerCase()){var h="onclick='var promotion_popup = window.open(\""+d[e].linkUrl+'" , "promotion_popup" , "width='+d[e].popupWidth+",height="+d[e].popupHeight+',scrollbars=yes");ccr(this, "ttb.link1", event);promotion_popup.focus();\'';
g=g.replace(/\{Onclick\}/g,h),g=g.replace(/\{Href\}/g,"href='javascript:;'"),h=null}else if("self"==d[e].linkType.toLowerCase()){
var i="href='"+d[e].linkUrl+"' target='_self'";g=g.replace(/\{Onclick\}/g,"onclick=\"ccr(this, 'ttb.link1', event);\";"),
g=g.replace(/\{Href\}/g,i),i=null}else{var j="href='"+d[e].linkUrl+"' target='_blank'";g=g.replace(/\{Onclick\}/g,"onclick=\"ccr(this, 'ttb.link1', event);\";"),
g=g.replace(/\{Href\}/g,j),j=null}b[++c]=g,b[++c]=sTemplate.tail.replace(/\{CloseType\}/g,"hidePromotionText|"+a.cookieKey+"|"+a.modifyTime+"|"+a.expireCookieDate),
$Element("text_promotion").html(b.join("")),$Element("text_promotion").show(),mcCore.adjustTopOfFlexArea(),
e=d=g=b=c=null}},showPromotionImage=function(a){sTemplate={header:"<p>",body:"<img width='{BodyWidth}' height='{BodyHeight}' src='{BodySrc}' alt='{BodyAlt}'>",
link:"<a {Onclick} {Href}><img width='{Width}' height='{Height}' src='{Src}' alt='{Alt}'></a>",tail:"</p><p class='closing_area'><input id='check_later_type2' name='check_later_type2' class='_c1(mcPromotion|{CloseType}) _ccr(tib.close)' type='checkbox'><label class='' for='check_later_type2'><span class='blind'>"+nLang.c.promotion_banner+"</span>{ClosingText}</label></p>"
};var b=[],c=-1;b[++c]=sTemplate.header;var d=a.bannerData;if(d){var e=sTemplate.body;if(e=e.replace(/\{BodyWidth\}/g,d.imageWidth),
e=e.replace(/\{BodyHeight\}/g,d.imageHeight),e=e.replace(/\{BodySrc\}/g,d.imageUrl),e=e.replace(/\{BodyAlt\}/g,d.imageAlt),
b[++c]=e,d.linkImageUrl){var f=sTemplate.link;if(f=f.replace(/\{Width\}/g,d.linkImageWidth),f=f.replace(/\{Height\}/g,d.linkImageHeight),
f=f.replace(/\{Src\}/g,d.linkImageUrl),f=f.replace(/\{Alt\}/g,d.linkAlt),"popup"==d.linkType.toLowerCase()){
var g="onclick='var promotion_popup = window.open(\""+d.linkUrl+'" , "promotion_popup" , "width='+d.popupWidth+",height="+d.popupHeight+',scrollbars=yes");ccr(this, "tib.link1", event);promotion_popup.focus();\'';
f=f.replace(/\{Onclick\}/g,g),f=f.replace(/\{Href\}/g,"href='javascript:;'"),g=null}else if("self"==d.linkType.toLowerCase()){
var h="href='"+d.linkUrl+"' target='_self'";f=f.replace(/\{Onclick\}/g,"onclick=\"ccr(this, 'tib.link1', event);\";"),
f=f.replace(/\{Href\}/g,h),h=null}else{var i="href='"+d.linkUrl+"' target='_blank'";f=f.replace(/\{Onclick\}/g,"onclick=\"ccr(this, 'tib.link1', event);\";"),
f=f.replace(/\{Href\}/g,i),i=null}b[++c]=f}if(d.addtionalLinkUrl){var f=sTemplate.link;if(f=f.replace(/\{Width\}/g,d.addtionalLinklinkImageWidth),
f=f.replace(/\{Height\}/g,d.addtionalLinklinkImageHeight),f=f.replace(/\{Src\}/g,d.addtionalLinkImageUrl),
f=f.replace(/\{Alt\}/g,d.addtionalLinkAlt),f=f.replace(/\{Url\}/g,d.addtionalLinkUrl),f=f.replace(/\{PopWidth\}/g,d.addtionalLinkpopupWidth),
f=f.replace(/\{PopHeight\}/g,d.addtionalLinkpopupHeight),"popup"==d.addtionalLinkType.toLowerCase()){
var g="onclick='var promotion_popup = window.open(\""+d.addtionalLinkUrl+'" , "promotion_popup" , "width='+d.addtionalLinkpopupWidth+",height="+d.addtionalLinkpopupHeight+',scrollbars=yes");ccr(this, "tib.link2", event);promotion_popup.focus();\'';
f=f.replace(/\{Onclick\}/g,g),f=f.replace(/\{Href\}/g,"href='javascript:;'"),g=null}else if("self"==d.addtionalLinkType.toLowerCase()){
var h="href='"+d.addtionalLinkUrl+"' target='_self'";f=f.replace(/\{Onclick\}/g,"onclick=\"ccr(this, 'tib.link2', event);\";"),
f=f.replace(/\{Href\}/g,h),h=null}else{var i="href='"+d.addtionalLinkUrl+"' target='_blank'";f=f.replace(/\{Onclick\}/g,"onclick=\"ccr(this, 'tib.link2', event);\";"),
f=f.replace(/\{Href\}/g,i),i=null}b[++c]=f}sTail="7"==a.expireCookieDate?sTemplate.tail.replace(/{ClosingText}/g,nLang.c.not_see_7_days):sTemplate.tail.replace(/{ClosingText}/g,nLang.c.not_see_again),
b[++c]=sTail.replace(/\{CloseType\}/g,"hidePromotionImage|"+a.cookieKey+"|"+a.modifyTime+"|"+a.expireCookieDate),
$Element("image_promotion").html(b.join("")),$Element("image_promotion").show(),mcCore.adjustTopOfFlexArea(),
nRand=null,d=null,e=null,b=null}},showPromotionLeft=function(a){sTemplate={header:"<p>",link:"<a {Onclick} {Href} title='"+nLang.c.go_to_promotion_page+"'>",
body:"<img src='{Src}' alt='{Alt}'></a></p>"};var b=[],c=-1;b[++c]=sTemplate.header;var d=a.bannerData;
if(d&&!(d.length<1)){if(1==d.length)var e=0;else{var f=new Date,e=Number(f.getSeconds())%d.length;f=null;
}var g=sTemplate.link;if("popup"==d[e].linkType.toLowerCase()){var h="onclick='var promotion_popup = window.open(\""+d[e].linkUrl+'" , "promotion_popup" , "width='+d[e].popupWidth+",height="+d[e].popupHeight+',scrollbars=yes");ccr(this, "lmb.banner", event);promotion_popup.focus();\'';
g=g.replace(/\{Onclick\}/g,h),g=g.replace(/\{Href\}/g,"href='javascript:;'"),h=null}else if("self"==d[e].linkType.toLowerCase()){
var i="href='"+d[e].linkUrl+"' target='_self'";g=g.replace(/\{Onclick\}/g,"onclick=\"ccr(this, 'lmb.banner' ,event);\""),
g=g.replace(/\{Href\}/g,i),i=null}else{var j="href='"+d[e].linkUrl+"' target='_blank'";g=g.replace(/\{Onclick\}/g,"onclick=\"ccr(this, 'lmb.banner' ,event);\""),
g=g.replace(/\{Href\}/g,j),j=null}b[++c]=g;var k=sTemplate.body;k=k.replace(/\{Src\}/g,d[e].imageUrl).replace(/\{Alt\}/g,d[e].imageAlt),
b[++c]=k,$Element("banner_promotion").append($Element(b.join(""))),$Element("banner_promotion").show(),
b=g=k=d=null}},hidePromotionImage=function(a,b,c,d){$Element("image_promotion").hide(),myCore.hideAllLayer(),
mcCore.adjustTopOfFlexArea(),mcCore.setCookie(b,c,d,"/","."+mEnv.rootDomain),mcCore.foldedWriteButton();
},hidePromotionText=function(a,b,c,d){$Element("text_promotion").hide(),myCore.hideAllLayer(),mcCore.adjustTopOfFlexArea(),
mcCore.setCookie(b,c,d,"/","."+mEnv.rootDomain)},showPromotionPopup=function(oData){var sData=oData.markup.replace(/\+/g," "),sTemplate=decodeURIComponent(sData);
document.body.insertAdjacentHTML("beforeEnd",sTemplate);var scripts=document.getElementsByTagName("script");
eval(scripts[scripts.length-1].innerHTML),"function"==typeof showPromotionPopupLayer&&showPromotionPopupLayer();
},{showPromotionText:showPromotionText,showPromotionImage:showPromotionImage,showPromotionLeft:showPromotionLeft,
hidePromotionText:hidePromotionText,hidePromotionImage:hidePromotionImage,showPromotionPopup:showPromotionPopup
}}(),mcKoreanclick=function(){return elElement=$("kcpv"),makeHtml=function(a){a+="&time="+$Date().time(),
elElement.innerHTML='<iframe height="0" frameborder="0" width="0" scrolling="no" title="'+nLang.c.empty_frame+'" src="'+a+'"></iframe>';
},bUpdateListForNewMail=!1,getList=function(a,b){makeHtml(window.location.protocol+"//"+window.location.hostname+"/pv/list.jsp?folder="+a+"&page="+b);
},getRead=function(a,b){var c=window.location.protocol+"//"+window.location.hostname+"/pv/read.jsp?mailsn="+a;
b&&(c+="&type="+b),makeHtml(c)},getWrite=function(a,b){makeHtml(window.location.protocol+"//"+window.location.hostname+"/pv/write.jsp?orderType="+a+"&attachID="+b);
},getAttach=function(a){makeHtml(window.location.protocol+"//"+window.location.hostname+"/pv/write.jsp?attachType="+a);
},getWriteSave=function(a,b){makeHtml(window.location.protocol+"//"+window.location.hostname+"/pv/write_save.jsp?orderType="+a+"&attachID="+b);
},getPreview=function(a){makeHtml(window.location.protocol+"//"+window.location.hostname+"/pv/preview.jsp?attachID="+a);
},getExternal=function(a,b){var c=window.location.protocol+"//"+window.location.hostname+"/pv/external.jsp?sn="+a;
b&&(c+="&type="+b),makeHtml(c)},getSendresult=function(a){makeHtml(window.location.protocol+"//"+location.host+"/pv/sendresult.jsp?attachID="+a);
},getOption=function(a,b){var c=window.location.protocol+"//"+window.location.hostname+"/pv/option.jsp?method="+a;
b&&(c+="&type="+b),makeHtml(c)},{bUpdateListForNewMail:bUpdateListForNewMail,getList:getList,getRead:getRead,
getWrite:getWrite,getAttach:getAttach,getWriteSave:getWriteSave,getPreview:getPreview,getExternal:getExternal,
getSendresult:getSendresult,getOption:getOption}}(),mcAutoComplete=function(){var a=null,b=!1,c=null,d=!0,e=function(c,e,g){
a&&(a.stop(),a=null),a=new jindo.WatchInput(c),a.attach({change:$Fn(f,this).bind()}),c.onkeydown=mcAutoComplete.addressInputChange,
b=!1,a.start(),a.setCompareValue(c.value),a._startTimer(),d=g},f=function(c){var d,e,f;if(c||(c=window.event),
c&&c.sType&&"change"==c.sType){b=!1;var i=a.getInput().value;if(i&&(i.length<1||i.length>50))return;var j={
q:i,limit:50,excludePrivateGroup:!0};mcCore.requestAjax({fCallback:$Fn(h,this).bind(c),oParameter:j,
sUrl:"/json/address/autoComplete/"})}else if(c&&c.keyCode&&(38==c.keyCode||40==c.keyCode)){if(e=$$.getSingle("#addrAtcpLayer li.selected"))if(38==c.keyCode&&e.previousSibling){
$Element(e).removeClass("selected"),$Element(e.previousSibling).addClass("selected");var l=$Element(e.previousSibling).offset().top-$Element("addrAtcpLayer").offset().top;
if(40>l){if($$.getSingle("#addrAtcpLayer .autoAddr li a"))var n=$Element($$.getSingle("#addrAtcpLayer .autoAddr li a")).height();else var n=24;
$$.getSingle("#addrAtcpLayer div ul").scrollTop-=n}}else if(40==c.keyCode&&e.nextSibling){$Element(e).removeClass("selected"),
$Element(e.nextSibling).addClass("selected");var l=$Element(e.nextSibling).offset().top-$Element("addrAtcpLayer").offset().top;
if(l+70>$Element("addrAtcpLayer").height()){if($$.getSingle("#addrAtcpLayer .autoAddr li a"))var n=$Element($$.getSingle("#addrAtcpLayer .autoAddr li a")).height();else var n=24;
$$.getSingle("#addrAtcpLayer div ul").scrollTop+=n}}$Event(c).stop()}13==c.keyCode?(e=$$.getSingle("#addrAtcpLayer li.selected"),
e?(f=$$.getSingle("div input",e),d=f.value,d==a.getInput().value&&g()?(k(d),mlCore.doSearch_new(c,"detail")):k(d),
$Event(c).stop()):g()&&(b=!0,m(),mlCore.doSearch_new(c,"detail"),$Event(c).stop())):9==c.keyCode&&(g()&&$$.getSingle("#ipt_receiver").focus(),
b=!0,m(),$Event(c).stop())},g=function(){return a?"ipt_sender"==$Element(a.getInput()).attr("id"):!1;
},h=function(d,e){if(!b&&document.activeElement==a.getInput()&&e.query==a.getInput().value)if(""!=e.query){
var f=$Element(d.elInput).offset();c={},c=$Jindo.mixin(c,e),$$.getSingle("#addrAtcpLayer div ul.autoAddr").innerHTML=i(e,d),
mCom.aVisibleLayerList.get(mCom.aVisibleLayerList.length()-1)&&"addrAtcpLayer"==mCom.aVisibleLayerList.get(mCom.aVisibleLayerList.length()-1).attr("id")||mCom.aVisibleLayerList.push($Element("addrAtcpLayer")),
$Element("addrAtcpLayer").show(),$$.getSingle("#addrAtcpLayer div ul.autoAddr").scrollTop=0,$Element("addrAtcpLayer").offset(f.top+$Element(d.elInput).height(),f.left);
}else $$.getSingle("#addrAtcpLayer div ul.autoAddr").innerHTML="",mCom.aVisibleLayerList.pop(),$Element("addrAtcpLayer").hide(),
mCom.aVisibleLayerList.push($Element("filterLayer"))},i=function(a){function b(a,b){return a.replace(b,"<strong>"+b+"</strong>");
}var c,e=[],f=-1,g=a.query,h=a.contact.length;d?($Element("ac_type_wrapper_in_setting").show(),$Element("addrAtcpContent").css("paddingBottom","27px")):($Element("ac_quick_menu").hide(),
$Element("addrAtcpContent").css("paddingBottom","0")),mcCore.isNaver()||($$.getSingle("#ac_type_in_setting").checked=mEnv.autoCompletePhoto,
mEnv.autoCompletePhoto&&d?$Element("addrAtcpContent").addClass("thumb_type"):$Element("addrAtcpContent").removeClass("thumb_type")),
c=['<li class="{BottomLine} {Officer} {Selected}"><div>','<a class="_c1(mcAutoComplete|setAddrValue) _m5(mcAutoComplete|overAddrValue)">','<span class="thumb_img"><img src="https://'+wm.staticDomain+'/static/pwe/nm/thumb_default.png" alt="photo" /></span>','<span class="name_cover">','<span class="name">{Name}</span>',"</span>",'<span class="info_cover">','<span class="title">{Title}</span>',"</span>","</a>",'<input type="hidden" value="{Value}"/>',"</div></li>"].join("");
var i={Name:["<strong>",mcCore.replaceSpecialChar(g),"</strong>"].join(""),i18nName:"",Value:g,Selected:"selected",
BottomLine:0===a.contact.length?"":"EndOfRecent",Title:" ",Type:"C"};e[++f]=mcCore.improvedTemplate(c,i);
for(var j=0;h>j;j++){var k=a.contact[j],l={};l.Value=k.Email,l.Type=k.Type,k.Name&&""!==$S(k.Name).trim()&&(l.Name=b(mcCore.replaceSpecialChar(k.Name),g)),
"undefined"!=typeof k.NickName&&""!==k.NickName&&(l.Name+="["+mcCore.replaceSpecialChar(k.NickName)+"]"),
k.i18nName&&""!==$S(k.i18nName).trim()&&(l.i18nName=b(mcCore.replaceSpecialChar(k.i18nName),g)),k.Email&&""!==$S(k.Email).trim()&&(l.Email=b(k.Email,g)),
k.JobTitle&&""!==$S(k.JobTitle).trim()&&(l.JobTitle=mcCore.replaceSpecialChar(k.JobTitle)),k.Company&&""!==$S(k.Company).trim()&&(l.Company=mcCore.replaceSpecialChar(k.Company)),
k.Department&&""!==$S(k.Department).trim()&&(l.Department=mcCore.replaceSpecialChar(k.Department)),10===k.excutiveStatus&&(l.Officer="officer"),
k.photoUrl&&""!==$S(k.photoUrl).trim()&&(l.photoUrl=mcCore.replaceSpecialChar(k.photoUrl)),c=['<li class="{BottomLine} {Officer} {Selected}"><div>','<a class="_c1(mcAutoComplete|setAddrValue) _m5(mcAutoComplete|overAddrValue)">',mEnv.autoCompletePhoto&&d?'<span class="thumb_img"><img src="{photoUrl}" alt="photo" data-type="{Type}" onerror="mcAutoComplete.onThumbnailError(this); return false"/></span>':"",'<span class="name_cover">',l.Name?'<span class="name">{Name} </span>':'<span class="name">('+nLang.c.namelessness+") </span>",l.i18nName?'<span class="name_en">{i18nName} </span>':"<span></span>","</span>",'<span class="info_cover">',l.JobTitle?'<span class="title">{JobTitle} </span>':"<span></span>",l.Company?'<span class="corp">{Company} </span>':"<span></span>",l.Department?'<span class="team">{Department} </span>':"<span></span>",l.Email?'<span class="email">{Email} </span>':'<span style="margin-right:1px;"></span>',"</span>","</a>",'<input type="hidden" value="{Value}"/>',"</div></li>"].join(""),
e[++f]=mcCore.improvedTemplate(c,l)}return e.join("")},j=function(){var a,b=$$.getSingle("#addrAtcpLayer li.selected");
b&&(a=$$.getSingle("div input",b).value,k(a))},k=function(c){var d=$$.getSingle("#addrAtcpLayer li div input").value,e=a.getInput().value,f="addRule_ipt_forward_mail"===a.getInput().id;
return a.getInput().focus(),f===!0&&l(c)===!1?(m(),a.getInput().value="",void alert(nLang.o.input_filter_address_validation)):(0==(d!=c&&e==c)&&(a.setCompareValue(c),
a.getInput().value=c),b=!0,void m())},l=function(a){return void 0===l.regEmail&&(l.regEmail=/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/),
l.regEmail.test(a)},m=function(){if($$.getSingle("#addrAtcpLayer div ul.autoAddr")&&$Element("addrAtcpLayer")){
$$.getSingle("#addrAtcpLayer div ul.autoAddr").innerHTML="",$Element("addrAtcpLayer").hide();for(var a=0;mCom.aVisibleLayerList&&a<mCom.aVisibleLayerList.length();a++){
var b=mCom.aVisibleLayerList.get(a);b&&"addrAtcpLayer"==b.attr("id")&&mCom.aVisibleLayerList.slice(a,a+1);
}}},n=function(){a&&a.stop&&(a.stop(),a=null),b=!0,m()},o=function(a){var b=$$.getSingle("#addrAtcpLayer li.selected");
b&&$Element(b).removeClass("selected"),$Element($$.getSingle("!li",a.element)).addClass("selected")},p=function(a){
var b=$Element(a).data("type");a.src="C"===b?"https://"+wm.staticDomain+"/static/pwe/nm/thumb_default.png":"https://"+wm.staticDomain+"/static/pwe/nm/thumb_default_team.png";
},q=function(a){var b=a.element.checked;mcCore.requestAjax({fCallback:function(){mEnv.autoCompletePhoto=!!b,
mEnv.autoCompletePhoto?$Element("addrAtcpContent").addClass("thumb_type"):$Element("addrAtcpContent").removeClass("thumb_type"),
c&&($$.getSingle("#addrAtcpLayer div ul.autoAddr").innerHTML=i(c))},oParameter:{autoCompletePhoto:b?"Y":"N"
},sUrl:"/json/option/autoCompletePhoto/set"})},r=function(){return a&&a.isActivating()?!0:!1},s=function(){
var a=$$.getSingle("#addrAtcpLayer li");return a?!0:!1};return{initAddressInputWatcher:e,addressInputChange:f,
setAddrValue:j,overAddrValue:o,destroyWatcher:n,toggleProfilePhoto:q,onThumbnailError:p,existWatcher:r,
existSuggestLayer:s}}(),CalendarLayer=$Class({$autoBind:!0,welCalendar:null,welCalendarTitle:null,welCalendarTbody:null,
welCalendarInput:null,calendarId:null,inputId:null,calendarInputFormat:null,currentMoment:null,selectedMoment:null,
setDateCallback:null,time:{hour:0,minute:0},$init:function(){},setCalendar:function(a){this.calendarId=a.calendarId,
this.inputId=a.inputId,this.calendarInputFormat=a.dateFormat,this.setDateCallback=a.setDateCallback,
this.isShow="boolean"==typeof a.isShow?a.isShow:!0,a.date?(this.currentMoment=moment(a.date,this.calendarInputFormat),
this.selectedMoment=moment(a.date,this.calendarInputFormat)):(this.currentMoment=moment(),this.selectedMoment=moment()),
this.time=a.time||{hour:0,minute:0},this.welCalendar=$Element($$.getSingle("#"+this.calendarId)),this.welCalendarTitle=$Element($$.getSingle(".move_month .calendar-title",this.welCalendar)),
this.welCalendarTbody=$Element($$.getSingle("tbody",this.welCalendar)),this.welCalendarInput=$Element($$.getSingle("#"+this.inputId)),
this._drawCalendarBody(),a.showSetTodayButton&&$Element($$.getSingle(".utx_btn_b",this.welCalendar)).className("utx_btn_b _c1(mCalendar|_setCalendarToday|"+this.inputId+") _stopDefault"),
!this.welCalendar.visible()&&this.isShow&&this.showCalendar()},hideCalendar:function(){this.isShow&&(this.welCalendar.hide(),
myCore.removeFromVisibleLayer(this.welCalendar))},showCalendar:function(){var a=this.welCalendar;a.show(),
setTimeout(function(){mCom.aVisibleLayerList.push(a)},100)},_drawCalendar:function(a,b){b&&b!==this.inputId||(a&&(this.currentMoment=moment(a),
this.selectedMoment=moment(a),this.currentMoment.isValid()||alert(nLang.w.type_format_yy_mm_dd.replace("{format}",this.calendarInputFormat))),
this._drawCalendarBody(),this.welCalendarInput.text()!=this.currentMoment.format(this.calendarInputFormat)&&this.welCalendarInput.text(this.currentMoment.format(this.calendarInputFormat)));
},_changeInput:function(a,b){$Element(b)&&$Element(b).text(a)},_moveMonth:function(a){var b=$Element(a.element).parent();
this.currentMoment.date(1),b.hasClass("calendar-btn-prev-year")?this.currentMoment.subtract(1,"year"):b.hasClass("calendar-btn-next-year")?this.currentMoment.add(1,"year"):b.hasClass("calendar-btn-prev-mon")?this.currentMoment.subtract(1,"month"):b.hasClass("calendar-btn-next-mon")&&this.currentMoment.add(1,"month"),
this._drawCalendarBody()},_drawCalendarBody:function(){$Element($$.getSingle(".move_month .calendar-btn-prev-year",this.welCalendar)).className("calendar-btn-prev-year _c1(mCalendar|_moveMonth) _stopDefault"),
$Element($$.getSingle(".move_month .calendar-btn-next-year",this.welCalendar)).className("calendar-btn-next-year _c1(mCalendar|_moveMonth) _stopDefault"),
$Element($$.getSingle(".move_month .calendar-btn-prev-mon",this.welCalendar)).className("calendar-btn-prev-mon _c1(mCalendar|_moveMonth) _stopDefault"),
$Element($$.getSingle(".move_month .calendar-btn-next-mon",this.welCalendar)).className("calendar-btn-next-mon _c1(mCalendar|_moveMonth) _stopDefault"),
this.currentMoment||(this.currentMoment=moment());var a=this.currentMoment.clone();this.welCalendarTitle.html(this.currentMoment.format("YYYY.MM"));
for(var b=a.startOf("month").day(),c=a.endOf("month").day(),d=a.date(),e=a.subtract(1,"month").endOf("month").date(),f=e-b+1,g=6,h=b+d+g-c,i=h/7,j="",k=a.date(f),l=0;i>l;l++){
for(var m='<tr class="calendar-week">',n=0;g>=n;n++)m+='<td class="',k.isSame(this.selectedMoment,"date")?m+="calendar-selected":0==n?m+="calendar-sun":6==n&&(m+="calendar-sat"),
k.isBefore(this.currentMoment,"month")&&(m+=" calendar-prev-mon"),k.isAfter(this.currentMoment,"month")&&(m+=" calendar-next-mon"),
m+='"><a href="javascript:;" draggable="true" class="calendar-date _c1(mCalendar|_setDate) _stopDefault" data-date="'+k.format("YYYYMMDD")+'">',
m+=k.date(),m+="</a></td>",k.date(k.date()+1);m+="</tr>",j+=m,m=null}this.welCalendarTbody.html(j),b=c=e=f=null,
g=h=i=j=k=null},_setDate:function(a){a&&a.stopDefault&&a.stopDefault(),this.hideCalendar();var b=a.element.getAttribute("data-date"),c=moment(b).set(this.time);
this.setDateCallback(c.format(this.calendarInputFormat),this.calendarInputFormat,this.inputId),$$.getSingle("#slt_srch_period").value="input",
mUtil.setSelectedOption($$.getSingle("#slt_srch_period"))},_setCalendarToday:function(){this.hideCalendar(),
this.setDateCallback(moment().format(this.calendarInputFormat),this.calendarInputFormat,this.inputId);
},destroy:function(){this.welCalendar=null,this.welCalendarTitle=null,this.welCalendarTbody=null,this.welCalendarInput=null,
this.calendarId=null,this.inputId=null,this.calendarInputFormat=null,this.currentMoment=null,this.selectedMoment=null,
this.setDateCallback=null}}),mCalendar=new CalendarLayer,mSelect=new $Class({$layer:null,$arrow:null,
$listContainer:null,$select:null,list:[],itemTemplate:"",$init:function(){},makeItemHtml:function(){},
isSelectedItem:function(){},getSelectedItem:function(){return this.$select&&this.$select.$value()?this.$select.$value().value:"";
},setSelectedItem:function(a){this.$select&&this.$select.$value()&&(this.$select.$value().value=a)},
render:function(a){for(var b=this.list,c=this.list.length,d=[],e=-1,f=0;c>f;f++)d[++e]=this.makeItemHtml(b[f],a);
this.$listContainer.html(d.join("")),this.adjustLayer()},adjustLayer:function(){for(var a=this.list,b=this.list.length,c=0;b>c;c++){
var d=a[c];if(this.isSelectedItem(d)){var e=this.getSelectedItem()+"";e=e.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\\\$&");
var f=$Element($$.getSingle("[data-value="+e+"]",this.$listContainer));f&&(this.$listScroll.$value().scrollTop=f.height()*c);
}}},open:function(a){"hide"===a&&myCore.hideAllLayer(),this.$arrow.addClass("on"),this.$layer.show(),
mCom.aVisibleLayerList.push(this.$layer),this.render()},close:function(a){"hide"===a&&myCore.hideAllLayer(),
this.$layer.hide(),this.$arrow.removeClass("on")}}),mInit=function(){makeFirstPage=function(){if(window.onload=b,
mcNotice.initNotice(),mlCore.setListButtonDisabled("disable"),mlCore.setListButtonToggle("hide"),!mcCore.hideWriteArea()){
switch(cCode){case"zh_CN":case"zh_TW":moment.locale(cCode.toLowerCase());break;case"ko_KR":case"ja_JP":
case"en_US":moment.locale(cCode.split("_")[0]);break;default:moment.locale("en")}"en_US"===cCode&&(mCom.sDefaultDateFormat="MMM D, YYYY"),
$Element("link_pc_version")&&("PC"===mcCore.getCookie("NVIEW")?($Element("link_pc_version").show(),$Element("wrap").css("bottom","40px")):($Element("link_pc_version").hide(),
$Element("wrap").css("bottom",""))),Number(mEnv.folderAreaWidth)<251&&(mEnv.folderAreaWidth=251),mCom.nWidthOfSnb=Number(mEnv.folderAreaWidth),
mCom.elNavSnb.style.width=mCom.nWidthOfSnb+"px",mCom.elContent.style.left=mCom.nWidthOfSnb+Number(mCom.nWidthOfPnb)+"px";
try{var c=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice}catch(d){var c=!1;
}"function"==typeof c?(mlTemplate.oListTemplate.body=mlTemplate.oListTemplate.body.replace(/{DragFunction}/g,"_d2(mcDragndrop|html5DragStart)").replace(/{UseDraggable}/g,"true"),
mlTemplate.oSenderListTemplate.body=mlTemplate.oSenderListTemplate.body.replace(/{DragFunction}/g,"_d2(mcDragndrop|html5DragStart)").replace(/{UseDraggable}/g,"true"),
mlTemplate.oSearchListTemplate.body=mlTemplate.oSearchListTemplate.body.replace(/{DragFunction}/g,"_d2(mcDragndrop|html5DragStart)").replace(/{UseDraggable}/g,"true"),
mlTemplate.oDraftListTemplate.body=mlTemplate.oDraftListTemplate.body.replace(/{DragFunction}/g,"_d2(mcDragndrop|html5DragStart)").replace(/{UseDraggable}/g,"true"),
mrTemplate.sFileListTemplateDirectLink=mrTemplate.sFileListTemplateDirectLink.replace(/{DragFunction}/g,"_d2(mcDragndrop|attachDragStart|{AttachSize})").replace(/{UseDraggable}/g,"true"),
mrTemplate.sEMLTemplate=mrTemplate.sEMLTemplate.replace(/{DragFunction}/g,"_d2(mcDragndrop|attachDragStart|{AttachSize})").replace(/{UseDraggable}/g,"true")):(mlTemplate.oListTemplate.body=mlTemplate.oListTemplate.body.replace(/{DragFunction}/g,"_m1(mcDragndrop|handleDragStart) _stopDefault").replace(/{UseDraggable}/g,"false"),
mlTemplate.oSenderListTemplate.body=mlTemplate.oSenderListTemplate.body.replace(/{DragFunction}/g,"_m1(mcDragndrop|handleDragStart) _stopDefault").replace(/{UseDraggable}/g,"false"),
mlTemplate.oSearchListTemplate.body=mlTemplate.oSearchListTemplate.body.replace(/{DragFunction}/g,"_m1(mcDragndrop|handleDragStart) _stopDefault").replace(/{UseDraggable}/g,"false"),
mlTemplate.oDraftListTemplate.body=mlTemplate.oDraftListTemplate.body.replace(/{DragFunction}/g," _stopDefault").replace(/{UseDraggable}/g,"false"),
mrTemplate.sFileListTemplateDirectLink=mrTemplate.sFileListTemplateDirectLink.replace(/{DragFunction}/g,"_m1(mcDragndrop|attachDragStart|{AttachSize})").replace(/{UseDraggable}/g,"false"),
mrTemplate.sEMLTemplate=mrTemplate.sEMLTemplate.replace(/{DragFunction}/g,"_m1(mcDragndrop|attachDragStart|{AttachSize})").replace(/{UseDraggable}/g,"false"));
try{var e="checkVirusArea";window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)&&(e="_blank");
}catch(d){e="checkVirusArea"}switch(mrTemplate.sFileListTemplateDirectLink=mrTemplate.sFileListTemplateDirectLink.replace(/{DownloadTargetArea}/g,e),
mrTemplate.sFileListTemplateDirectButton=mrTemplate.sFileListTemplateDirectButton.replace(/{DownloadTargetArea}/g,e),
mrTemplate.sFileListAtEMLTemplateDirectLink=mrTemplate.sFileListAtEMLTemplateDirectLink.replace(/{DownloadTargetArea}/g,e),
mrTemplate.sFileListAtEMLTemplateDirectButton=mrTemplate.sFileListAtEMLTemplateDirectButton.replace(/{DownloadTargetArea}/g,e),
mrTemplate.sEMLTemplateDirectButton=mrTemplate.sEMLTemplateDirectButton.replace(/{DownloadTargetArea}/g,e),
mrTemplate.sEMLAtEMLTemplateDirectButton=mrTemplate.sEMLAtEMLTemplateDirectButton.replace(/{DownloadTargetArea}/g,e),
mrTemplate.sFileListTemplateForPrint=mrTemplate.sFileListTemplateForPrint.replace(/{DownloadTargetArea}/g,e),
$Element(document.body).removeClass("meiryo"),$Element(document.body).removeClass("nanum"),$Element(document.body).removeClass("mspgothic"),
cCode){case"ja_JP":"Meiryo"==mEnv.listFontName?$Element(document.body).addClass("meiryo"):"MS PGothic"==mEnv.listFontName?$Element(document.body).addClass("mspgothic"):(mEnv.listFontName="System Font",
$Element(document.body).css("fontFamily",""));break;case"zh_CN":case"zh_TW":mEnv.listFontName="SimSun",
$Element(document.body).css("fontFamily","SimSun");break;case"ko_KR":default:"Nanumgothic"==mEnv.listFontName?$Element(document.body).addClass("nanum"):(mEnv.listFontName="Dotum",
$Element(document.body).css("fontFamily",""))}var f=null;if(mfCore.fParseFolderBo(m.info.folder),m.info.promotionText&&mcCore.getCookie(m.info.promotionText.cookieKey)!=m.info.promotionText.modifyTime&&mcPromotion.showPromotionText(m.info.promotionText),
m.info.promotionImage&&mcCore.getCookie(m.info.promotionImage.cookieKey)!=m.info.promotionImage.modifyTime&&mcPromotion.showPromotionImage(m.info.promotionImage),
m.info.promotionLeft&&mcCore.isNaver()&&mcPromotion.showPromotionLeft(m.info.promotionLeft),"write"==mCom.initAction){
getWriteBody();var g=mEnv.firstFolderSN;mlCore.updateList(null,g),o=!0}else if("read"==mCom.initAction)"L"!=mEnv.divideMode&&mcCore.toggleDivideMode("list",!0),
location.hash?mCom.initAction="":(mrCore.clickTitle(null,mCom.sMailList),mCom.isReading=!0,o=!0);else if("option"==mCom.initAction){
var h=["read","view","write","security","folder","smart","filter","sign","autoreply","mobile","setspam","rejectAddress","receive","rejectKeyword","externalMail","externalImap","externalUpload","idomain","pop3","imap","shortcut"],i=mCom.subType;
switch(mCom.subType){case"spam":i="setspam";break;case"keyword":i="rejectKeyword";break;case"block":
i="rejectAddress";break;case"external":i="externalMail"}for(var j=!1,k=0;k<h.length;k++)h[k]==i&&(j=!0);
j||(i="read"),showOptionLayerAtInit(null,i+"_option",!0)}else if(3==mEnv.firstFolderSN?(mcCore.toggleDivideMode("list",!0),
$Element("cont_flex_area").removeClass("list_horizontal").removeClass("list_vertical").addClass("list_normal")):"V"==mEnv.divideMode?(mcCore.toggleDivideMode("vertical",!0),
mlCore.setListButtonToggle("show")):"H"==mEnv.divideMode&&(mcCore.toggleDivideMode("horizontal",!0),
mlCore.setListButtonToggle("show")),"list"==mCom.initAction){var g=mCom.sMailList;mlCore.updateList(null,g),
o=!0}else if(mCom.bFirstPageLoaded){var g=mEnv.firstFolderSN;mlCore.updateList(null,g),o=!0}else{var g=mCom.nCurrentFolder=mEnv.firstFolderSN;
if(mlCore.arrangeListMenu(g),mlCore.clearReadArea(),("all"==g||"unread"==g||"mark"==g||"attach"==g||"tome"==g)&&(f=mCom.nCurrentFolder=g,
g="-1"),mcCore.setMsg(nLang.c.getting_list_from_folder.replace("{Name}",m.info.list.folderName)),mlCore.isUseViewMore()&&$Element("cont_flex_area")?($Element("cont_flex_area").addClass("nav_endless"),
mCom.elBtnIcoViewTop&&(mCom.elBtnIcoViewTop.style.display=""),mlCore.setNoScroll()):($Element("cont_flex_area").removeClass("nav_endless"),
mCom.elBtnIcoViewTop&&(mCom.elBtnIcoViewTop.style.display="none"),mCom.elList.onscroll=null),"S"==mlCore.getCurrentViewType()){
var l=!1,n=_makeObjectForUpdateList(g,1,mCom.nCurSortField,mCom.nCurSortType);mcCore.requestAjax({async:l,
fCallback:$Fn(_fParseListForSenderView,this).bind(n.page,g,l),oParameter:n,sUrl:"/json/list/sender/"
});var o=1}else if("remind"==g){mCom.nCurSortField=13;var o=mlCore.fParseListBo(mlTemplate.oListTemplate,f,-1,g,m.info.list);
mlRemind.makePagesForRemind(-1,m.info.list.isTruncated)}else{"attach"===f&&(mEnv.bForceListView=!0);var p="3"==g?oDraftListTemplate:mlTemplate.oListTemplate,o=mlCore.fParseListBo(p,f,1,g,m.info.list);
}switch(mEnv.firstFolderSN){case"0":mCom.elSelectedFolder=$Element("0_fol");break;case"1":mCom.elSelectedFolder=$Element("1_fol");
break;case"all":case"unread":mCom.elSelectedFolder=$Element($$.getSingle(".list_menu .bu1")).parent();
break;case"6":mCom.elSelectedFolder=$Element("6_fol");break;case"attach":break;case"remind":break;case"mark":
break;default:mCom.elSelectedFolder=$Element(mEnv.firstFolderSN+"_fol")}if(mCom.elSelectedFolder&&mCom.elSelectedFolder.addClass("click"),
o>-1&&3!=mCom.nCurrentFolder&&mEnv.openFirstMail&&"list"!=mCom.vDivideMode){var q=mlCore.getMailList();
q.length()>0&&mrCore.clickTitle(null,q.$value()[0].mailSN)}}o>-1&&!mCom.bOptionMarkUpLoaded&&(setTimeout($Fn(function(){
mcCore.loadCss("lazy")},this).bind(),5e3),setTimeout($Fn(function(){mEnv.popupWrite||"write"==mCom.initAction||getWriteBody();
},this).bind(),1e4)),mEnv.listFontSize?(mCom.welList.css("fontSize",mEnv.listFontSize+"pt"),Number(mEnv.listFontSize)>10&&$Element($$.getSingle("#cont_flex_area .divList")).addClass("fsize_large")):mCom.welList.css("fontSize","9pt"),
mUtil.addHotkey("list"),mCom.oCheckNewMailInterval||(mCom.oCheckNewMailInterval=setInterval($Fn(mcCore.checkNewMail,this).bind(),mCom.nNewMailCheckPeriod));
var r,s=!1;try{r=JSON.parse(decodeURIComponent(window.location.hash.substring(1))),("list"===r.fClass||"read"===r.fClass&&"L"!==mEnv.divideMode)&&(s=!0);
}catch(d){s=!0}if(!mcCore.isNaver()&&"object"==typeof works)try{works.notify.bee.ready({service:works.notify.bee.Service.MAIL,
promotion:s})}catch(d){}if(mCom.isNoHashHistory&&!mCom.oHistory){mCom.oHistory=function(){var a=function(a){
if(!a||!location.hash||b(a)!==location.hash){var c=b(a);window.history.pushState(a,"",c)}},b=function(a){
var b=a.oParameter;return b?"#"+encodeURIComponent(JSON.stringify(a)):""};return{addHistory:a}}();var t=function(b){
var c=b.state;return null===c?void(location.hash.match(/(sendResult|emptyFolder)$/)||(location.hash="",
window.location.reload())):(a(),void mcCore.historyFunc({htHistoryData:c}))};window.onpopstate=t,r&&t({
state:r})}else mCom.oHistory||(mCom.oHistory=new jindo.AjaxHistory({sIFrameUrl:"/history.html",bDisablePermanentLinkOnIE:!0
}).attach({change:function(b){return null==b.htHistoryData.fClass?void(location.hash.match(/(sendResult|emptyFolder)$/)||(location.hash="",
window.location.reload())):(a(),void mcCore.historyFunc(b))}}),"function"!=typeof jindo.AjaxHistory.checkIFrameChange&&(jindo.AjaxHistory.checkIFrameChange=mCom.oHistory.checkIFrameChange),
mCom.oHistory.initialize());if(mySimpleSearch.initSimpleSearch(),mCom.bFirstPageLoaded=!0,mfCore.setMaxFolderCount(m.info.env.maxFolderCount+6+("Y"==mEnv.promotionUse?1:0)+("Y"==mEnv.snsUse?1:0)+("Y"==mEnv.cafeUse?1:0)+("Y"==mEnv.billUse?1:0)),
mEnv.useVipMailBox&&mfCore.initVipFolder(),mcCore.isNaver()&&mEnv.showUserGuide&&myUserGuide.initUserGuide(),
mcCore.isNaver()&&!mEnv.showUserGuide&&myTwoStepAuth.showLayer(),"draggable"in document.createElement("span")&&mcDragndrop.setupLnbFolderAutoScroll(),
!mcCore.isNcs()&&"ko_KR"===cCode){if(mcCore.isNwe()&&mCom.isWorksJP)return;myCore.initFaqCover()}return mtCore.showMailboxTooltip(mEnv.totalUsage),
2==mCom.nCurrentFolder?mcCore.toggleEl($Element("headReceiveTip"),mEnv.useReadReceipt):mcCore.toggleEl($Element("headReceiveTip"),!1),
!0}};var a=function(){"function"==typeof gnbAllLayerClose&&(gnbUserLayer.show||gnbNaverMeLayer.show||gnbMoreLayer.show)&&gnbAllLayerClose(),
nhn&&nhn.deskhome_menu&&"function"==typeof nhn.deskhome_menu.onResize&&nhn.deskhome_menu._htElement&&nhn.deskhome_menu._htElement.btn_more&&nhn.deskhome_menu.onResize();
},b=function(){if("function"==typeof initPNB&&initPNB(),c(),isNaver())"function"==typeof getGNB&&getGNB();else{
if(window.performance){var a=window.performance.timing,b=a.domInteractive-a.navigationStart;b>5e3&&__nvl_error("Users Loading Time is longer than 5 seconds. (onContentLoad : "+b+"ms)");
}mCom.bUseNotification&&setTimeout(function(){window.addEventListener("storage",mcCore.onNotification),
mcCore.requestAjax({sUrl:"/json/option/mobileNoti/get/",oParam:{sOption:"mobile_option"},fCallback:function(a){
mCom.aNotiFolderSN="mailbox"===a.notiType&&"all"!==a.notiMailBox?a.notiMailBox.split(","):"all"}})},1e3);
}};getWriteBody=function(){if(!mCom.writeLoadingStarted){mCom.writeLoadingStarted=!0;var a={};return mcCore.requestAjax({
fCallback:$Fn(_setWriteBody,this).bind(),oParameter:a,sUrl:"/write/prePopup/"}),a=null,!0}},_setWriteBody=function(a){
var b=a.split('<div class="_BodyAreaDivisionForLazyLoading" style="display:none"></div>')[1],c=a.split('<div class="_LayerAreaDivisionForLazyLoading" style="display:none"></div>')[1],d=a.split('<div class="_ScriptAreaDivisionForLazyLoading" style="display:none"></div>')[1],e=$$.getSingle("head"),f=document.createElement("link"),g=mcCore.isNaver()?"":"nwe.";
f.rel="stylesheet",f.type="text/css",f.href="local"==mCom.serverEnv?"/css/src/mail_lazy_le.min.css":"/css/mail_lazy_le.min."+g+mCom.cssVersion+".css",
e.appendChild(f),f=document.createElement("link"),f.rel="stylesheet",f.type="text/css",f.href="/css/cp_address_5.7."+g+"css",
e.appendChild(f),f=document.createElement("link"),f.rel="stylesheet",f.type="text/css",mEnv.isUseNewEditor===!1&&(f.href="local"==mCom.serverEnv?"/css/src/se2_new/"+cCode+"/smart_editor2.me.min.css":"/css/se2_new/"+cCode+"/smart_editor2.me.min."+g+mCom.cssVersion+".css"),
e.appendChild(f),$$.getSingle("#writeWrap").innerHTML=b,$Element($$.getSingle("body")).appendHTML("<div>"+c+"</div>"),
_loadScriptForWrite(d),e=f=b=null},_loadScriptForWrite=function(a){if(a){var b=a.split('<script src="'),c=$$.getSingle("head"),d=1,e=setInterval($Fn(function(a,b){
try{var c=a[d].split('"></script>')[0];switch(!1){case-1==c.indexOf("/js_src/com/nhncorp/mail/common/common.context.js"):
case-1==c.indexOf("/js_lib/jindo/jindo.2.8.1.min.custom.js"):case-1==c.indexOf("/js_lib/mvc/dispatcher.js"):
case-1==c.indexOf("/js_lib/moment/"):case-1==c.indexOf("/js_src/com/nhncorp/mail/list/list.core.js"):
case-1==c.indexOf("/js_src/com/nhncorp/mail/layer/layer.core.js"):case-1==c.indexOf("/js_src/com/nhncorp/mail/layer/layer.simpleSearch.js"):
break;default:var f=document.createElement("script");f.type="text/javascript",f.src=c,b.appendChild(f),
f=null}d++,(d>=a.length||!a[d])&&(clearInterval(e),_initWritePage())}catch(g){mlog("error! failed at script lazy loading"),
clearInterval(e)}},this).bind(b,c),30);b=c=null}},_initWritePage=function(){if(window.initWritePage){
window.initWritePage(),mCom.bWriteLoaded=!0;var a=$$.getSingle(".timeZoneWrapper select");a&&(a.value=mEnv.timeZone),
"write"==mCom.initAction&&mfCore.popupWrite(null,mCom.orderType,mCom.sMailList,mCom.sSendTo)}else setTimeout($Fn(_initWritePage,this).bind(),10);
},_getOptionDiv=function(){return mCom.optionLoadingStarted?void 0:(mCom.optionLoadingStarted=!0,mcCore.requestAjax({
fCallback:$Fn(_setOptionDiv,this).bind(),oParameter:{},sUrl:"/option/"}),!0)},_setOptionDiv=function(a){
$$.getSingle("#setup_container").innerHTML=a;var b=$$.getSingle("head");if("local"==mCom.serverEnv||"local"==mCom.serverEnv){
if(mcCore.isNcs())var c=["core","filter","folder","imap","read","receive","shortcut","security","sign","mobile","remind","spam","view","write"];else if(mcCore.isNaver())var c=["spam","autoreply","bill","cafe","core","externmail","filter","folder","imap","pop3smtp","read","receive","shortcut","security","sign","mobile","remind","view","write"];else var c=["spam","autoreply","bill","cafe","core","externmail","filter","folder","imap","pop3smtp","read","receive","shortcut","security","sign","mobile","remind","view","write"];
for(i=0,len=c.length;len>i;i++){var d=document.createElement("script");d.type="text/javascript",d.src="/js_src/com/nhncorp/mail/option/option."+c[i]+".js",
b.appendChild(d),d=null}c=null}else{var d=document.createElement("script");d.type="text/javascript",
d.src="/js/uglified_option_"+mCom.buildVersion+".js",b.appendChild(d),d=null}b=null},showOptionLayerAtInit=function(a,b,c){
mcCore.hideWriteArea()||($Element("previewMailLayer")&&$Element("previewMailLayer").hide(),$Element("confirmLayer")&&$Element("confirmLayer").hide(),
mcCore.loadCss("lazy"),mCom.bOptionMarkUpLoaded&&"object"==typeof moRead&&_optionWriteModuleExist()?displayOptionLayer(a,b,c):($Element("loading_option_layer").show(),
$Element("loading_bg").show(),mCom.optionLoadingStarted||_getOptionDiv(),setTimeout($Fn(showOptionLayerAtInit,this).bind(a,b,c),10)),
null!=mwCore&&mwCore.finishEditor(),mcCore.foldedWriteButton())},_optionWriteModuleExist=function(){
return"object"==typeof moWrite},displayOptionLayer=function(a,b,c){if(b||(b="read_option"),"undefined"==typeof moSpam)return void setTimeout(showOptionLayerAtInit.bind(this,a,b,c),10);
switch($Element("loading_bg").hide(),$Element("loading_option_layer").hide(),myCore.hideAllLayer(),moCore.showOptionLayer(a,b,c),
$$.getSingle(".back_home").focus(),cCode){case"ja_JP":$$.getSingle("#setReadfont #mail_font").outerHTML=['<select id="mail_font" onclick="ccr(this, \'cfb_rds.fontset\', event)">','<option id="system_font" value="System Font">システムフォント</option>','<option value="Meiryo">Meiryo</option>','<option value="MS PGothic">MS Pゴシック</option>',"</select>"].join("");
break;case"zh_CN":case"zh_TW":$$.getSingle("#setReadfont #system_font").value="SimSun"}var d,e=$$.getSingle("#edittype"),f=jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<=8;
d=mcCore.isNaver()?['<option value="H" selected="">'+nLang.o.editor_mode_2_h+"</option>",'<option value="T">'+nLang.o.editor_mode_2_t+"</option>"].join(""):f?['<option value="H2" disabled>'+nLang.o.editor_mode_2_h+"</option>",'<option value="T2" disabled>'+nLang.o.editor_mode_2_t+"</option>",'<option value="H">'+nLang.o.editor_mode_1_h+"</option>",'<option value="T">'+nLang.o.editor_mode_1_t+"</option>"].join(""):['<option value="H2" selected="">'+nLang.o.editor_mode_2_h+"</option>",'<option value="T2">'+nLang.o.editor_mode_2_t+"</option>",'<option value="H">'+nLang.o.editor_mode_1_h+"</option>",'<option value="T">'+nLang.o.editor_mode_1_t+"</option>"].join(""),
$Agent().navigator().ie&&$Agent().navigator().version<=9?e.outerHTML=['<select id="edittype" onchange="moWrite.toggleWriteEditType(this.value)" onclick="ccr(this, \'cfb_wrt.editormode\', event)">',d,"</select>"].join(""):e.innerHTML=d,
jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<=8&&($Element($$.getSingle("#autoreply_start_date")).attach("keydown",mcCore.keydownHandlerForIE8Input(myCore.changeAutoreplyDate)),
$Element($$.getSingle("#autoreply_end_date")).attach("keydown",mcCore.keydownHandlerForIE8Input(myCore.changeAutoreplyDate)));
};var c=function(){var a=$Element(mCom.elNavSnb),b=$$.getSingle("#section_mymail .btn_setup"),c=$$.getSingle("#section_mymail .btn_add"),d=!1;
a.attach({mouseover:function(){d=!0,a.addClass("enter_lnb")},mouseout:function(){d=!1,document.activeElement!==b&&document.activeElement!==c&&a.removeClass("enter_lnb");
},keydown:function(a){var b=$Element(a.element);13===a.key().keyCode&&b.hasClass("btn_modify")&&mfCore.editFolderName(a);
}}),$Element(c).attach({focus:function(){a.addClass("enter_lnb")},blur:function(){d||a.removeClass("enter_lnb");
}}),$Element(b).attach({focus:function(){a.addClass("enter_lnb")},blur:function(){d||a.removeClass("enter_lnb");
}}),$Element(window).attach("resize",mlCore.resizeListArea),jindo.$Agent().navigator().firefox||jindo.$Agent().navigator().safari||$Element(window).attach("copy",mrCore.copyReadBody),
jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<=8&&($Element($$.getSingle("#arrange_start_date")).attach("keydown",mcCore.keydownHandlerForIE8Input(myArrangeMail.changeArrangeDate)),
$Element($$.getSingle("#arrange_end_date")).attach("keydown",mcCore.keydownHandlerForIE8Input(myArrangeMail.changeArrangeDate)),
$Element($$.getSingle("#arrange_ago_date")).attach("keydown",mcCore.keydownHandlerForIE8Input(myArrangeMail.changeArrangeDate)),
$Element($$.getSingle("#ipt_start_date")).attach("keydown",mcCore.keydownHandlerForIE8Input(myCore.checkPeriod)),
$Element($$.getSingle("#ipt_end_date")).attach("keydown",mcCore.keydownHandlerForIE8Input(myCore.checkPeriod)));
};return{makeFirstPage:makeFirstPage,getWriteBody:getWriteBody,showOptionLayerAtInit:showOptionLayerAtInit,
displayOptionLayer:displayOptionLayer}}(),myAddAddress=function(){_addressList=[],_privateGroups=[],
_sharedGroups=[];var a=['<tr data-index="{{Index}}">','<td class="imp">','<a href="javascript:;" class="importantOff _c1(myAddAddress|toggleVip|{{Index}})">','<i class="blind">'+nLang.c.address_layer_import_checked+"</i>","</a>","</td>",'<td class="name">','<input type="text" class="ipt_txt" value="{{Name}}" title="'+nLang.c.address_layer_name+'">',"</td>",'<td class="email">','<div class="cell_wrap">{{Address}}</div>',"</td>",'<td class="group">','<a href="javascript:;" class="combo_button _c1(myAddAddressSelect|_toggleSelectLayer|{{Index}})">','<span class="current">{{GroupName}}</span>','<i class="ico_arrow"><span class="blind">'+nLang.c.address_layer_groupselect_open+"</span></i>","</a>","</td>","</tr>"].join(""),b=function(a,b,d){
mcCore.requestAjax({fCallback:$Fn(c,this).bind(a,b,d),oParameter:{},sUrl:"/json/address/groups"})},c=function(a,b,c,f){
return d(f),e(b,c)?(g(),p("show"),i(a,b),h(),void myAddAddressSelect.init(_privateGroups,_sharedGroups)):void n();
},d=function(a){_privateGroups=[],_sharedGroups=[];var b,c={};if(c.type="private",c.no=0,c.name=nLang.c.address_layer_default,
_privateGroups.push(c),a.privateGroups)for(b=0;b<a.privateGroups.length;b++){var d=a.privateGroups[b],c={};
c.type="private",c.no=d.groupNo,c.name=d.name,_privateGroups.push(c)}var c={};if(c.type="shared",c.no=0,
c.name=nLang.c.address_layer_default,_sharedGroups.push(c),a.sharedGroups)for(b=0;b<a.sharedGroups.length;b++){
var d=a.sharedGroups[b],c={};c.type="shared",c.no=d.groupNo,c.name=d.name,_sharedGroups.push(c)}},e=function(a,b){
var c=[];if(_addressList=[],"list"==a)c=_woCurMailList._array;else if("read"==a){var d=_woCurMailList.get(0);
c=[{fromName:d.fromName,fromAddr:d.fromAddr}]}else c=-1!=b.indexOf("<")?[{fromName:b.split("<")[0],fromAddr:b.split("<")[1]
}]:[{fromName:"",fromAddr:b}];if(0==c.length)return alert(nLang.c.select_mail),!1;if(c.length>80)return alert(nLang.l.disable_save_contact_over_count),
!1;for(var e=f(c),g=0;g<e.length;g++){var h=e[g],i={};i.bImportant="N",i.fromName=h.fromName.replace(/&quot;/g,"").replace(/\"/g,"")?$S(h.fromName.replace(/&quot;/g,"").replace(/\"/g,"").replace(/&amp;/g,"&")).trim():nLang.c.noname,
h.fromAddr&&(i.fromAddr=mcCore.restoreSpecialChar(h.fromAddr.replace(/^(<|&lt;)|(>|&gt;)$/g,""))),i.groupType="private",
i.groupName=_privateGroups[0].name,i.groupNo=_privateGroups[0].no,_addressList.push(i)}return _addressList&&_addressList.length>0?!0:(alert(nLang.l.no_add_address),
!1)},f=function(a){var b,c,d=[];for(b=0;b<a.length;b++){var e=a[b],f=!1;if(e.fromAddr&&""!=e.fromAddr)for(c=0;c<d.length;c++)d[c].fromAddr==e.fromAddr&&(f=!0);else f=!0;
f||d.push(e)}return d},g=function(){var b,c=$Element("ly_address_table"),d="";for(b=0;b<_addressList.length;b++){
var e=_addressList[b],f=/\{\{Index\}\}/g;d+=a.replace(f,b).replace("{{Name}}",e.fromName).replace("{{Address}}",e.fromAddr).replace("{{GroupName}}",e.groupName);
}c.html(d)},h=function(){var a=$$.getSingle("#ly_address_list caption");a&&a.focus()},i=function(a,b){
var c,d,e=$Element("ly_address"),f=a.element;if(hideAllLayer(),e.show(),"list"==b)c=$Element($$.getSingle(".buttonSet")),
d=c.offset(),d.top=d.top+c.height(),d.left=d.left+15,e.offset(d.top,d.left);else if("read"===b||"context"===b&&"read"===mCom.contextType){
for("context"===b&&(f=myContextMenu.getTriggerBtn());"BODY"!==f.nodeName&&"DL"!==f.nodeName;)f=f.parentElement;
c=$Element($$.getSingle(".toggleExpand button",f)),c||(c=$Element($$.getSingle("button.toggleExpand",f))),
c?(d=c.offset(),d.top=d.top,d.left=d.left+c.width(),e.offset(d.top,d.left)):myContextMenu.arrangeLayerOffset(e);
}else myContextMenu.arrangeLayerOffset(e);mCom.aVisibleLayerList.push(e),mCom.contextType=""},j=function(a,b){
var c=$Element($$.getSingle("tr[data-index="+b+"] .imp a",$$.getSingle("#ly_address_list"))),d=_addressList[b];
"Y"==d.bImportant?(d.bImportant="N",c&&c.removeClass("importantOn").addClass("importantOff")):(d.bImportant="Y",
c&&"shared"!=d.groupType&&c.removeClass("importantOff").addClass("importantOn"))},k=function(){var a,b,c={},d="XygoKw==",e="KShfOw==",f=[];
for(b=0;b<_addressList.length;b++){var g,h=_addressList[b],i=$$.getSingle("tr[data-index="+b+"]",$$.getSingle("ly_address_list")),j=$$.getSingle("td.name input",i),k=j.value;
g=[k?k:nLang.c.noname,h.fromAddr,h.groupType,h.groupNo,h.bImportant].join(e),f.push(g)}a=f.join(d),c.contacts=a,
mcCore.requestAjax({fCallback:$Fn(l,this).bind(),oParameter:c,sUrl:"/json/address/contacts/add"})},l=function(){
n()},m=function(){n()},n=function(){var a=myContextMenu.getTriggerBtn();_addressList=[],_privateGroups=[],
_sharedGroups=[],hideAllLayer(),a&&a.focus()},o=function(){var a=$Element("address_combo_layer");a&&a.hide();
},p=function(a){"show"==a?($Element("ly_address_msg_success").show(),$Element("ly_address_list").show(),
$Element("ly_address_msg_fail").hide()):($Element("ly_address_msg_success").hide(),$Element("ly_address_list").hide(),
$Element("ly_address_msg_fail").show())},q=function(){},r=function(a){var b=_addressList[a];return b.groupNo;
},s=function(a){var b=_addressList[a];return b.groupType},t=function(a){var b=_addressList[a];return b.groupName;
},u=function(a,b,c){var d,e=_addressList[a];d="private"==b?v(_privateGroups,c):v(_sharedGroups,c),e.groupType=b,
e.groupName=d,e.groupNo=c},v=function(a,b){for(var c=0;c<a.length;c++){var d=a[c];if(b==d.no)return d.name;
}return""};return{initAddAddressLayer:b,toggleVip:j,clickAddAddressConfirm:k,clickAddAddressCancel:m,
closeComboLayer:o,showAddressMsg:p,stopPropagation:q,getSelectedGroup:r,getSelectedType:s,getSelectedName:t,
setSelectedGroup:u}}(),AddAddressSelectClass=$Class({$autoBind:!0,firstFromName:"",privateList:[],sharedList:[],
index:0,type:"private",getSelectedItem:function(){return myAddAddress.getSelectedGroup(this.index)},
setSelectedItem:function(a){myAddAddress.setSelectedGroup(this.index,this.type,a),this.$select.$value().innerHTML=myAddAddress.getSelectedName(this.index);
},$init:function(){this.$layer=$Element("address_combo_layer"),this.$listContainer=$Element($("address_combo_address")),
this.$listScroll=$Element($$.getSingle("#address_combo_layer .group_body")),this.itemTemplate='<li class="_c1(myAddAddressSelect|_selectGroup|{GroupNo}) {Active}" data-value="{GroupNo}"><a href="javascript:;">{GroupName}</a></li>',
this.$select=null,this.$arrow=null,this.list=[],this.$radioShared=$Element("contact_group01"),this.$radioPrivate=$Element("contact_group02");
},init:function(a,b){this.privateList=a,this.sharedList=b},_toggleSelectLayer:function(a,b){this.$layer.visible()&&Number(this.$layer.attr("data-addrindex"))===Number(b)?this.close():(this.$tr=$Element($$.getSingle("#ly_address_table tr[data-index="+b+"]")),
this.$layer.attr("data-addrindex",b),this.$select=$Element($$.getSingle(".combo_button .current",this.$tr)),
this.$arrow=$Element($$.getSingle(".combo_button .ico_arrow",this.$tr)),this.index=b,this.setGroupType(myAddAddress.getSelectedType(b)),
$$.getSingle(".group",this.$tr).appendChild(this.$layer.$value()),this.open())},_toggleGroupType:function(a,b){
this.setGroupType(b),this.render()},setGroupType:function(a){this.type=a,"private"==a?(this.$radioPrivate.attr("checked",!0),
this.$radioShared.attr("checked",!1),this.list=this.privateList):(this.$radioPrivate.attr("checked",!1),
this.$radioShared.attr("checked",!0),this.list=this.sharedList)},render:function(){this.$super.render(this.getSelectedItem());
},makeItemHtml:function(a,b){var c=this.itemTemplate,d={};return d.GroupNo=a.no,d.GroupName=a.name,d.Active=Number(a.no)===Number(b)?"active":"",
mcCore.template(c,d)},adjustLayer:function(){myCore.adjustLayer(this.$select.$value().parentElement,this.$layer),
this.$super.adjustLayer()},isSelectedItem:function(a){return Number(a.no)===Number(this.getSelectedItem())?!0:!1;
},_selectGroup:function(a,b){this.close(),this.setSelectedItem(b)}}).extend(mSelect),myAddAddressSelect=new AddAddressSelectClass,
myArrangeMail=function(){function a(a){var b,d=a.element,e=i[d.id],f=moment(d.value,c);f.isValid()?b=f.format(c):(d.value=e,
b=e),mCalendar._drawCalendar(b,d.id)}function b(a,b,c){$$.getSingle("#"+c).value=a}var c,d="",e="",f=[],g=0,h=0,i={
arrange_ago_date:"",arrange_start_date:"",arrange_end_date:""},j=!1,k=function(a){j||l(a)},l=function(a){
var b=$Element("arrange_mail_layer");if(c=mCom.sDefaultDateFormat||"YYYYMMDD",b.visible())return void myCore.showLayer(a.element,b);
mcCore.setFolderSelectBox("cleanup_box"),mcCore.setFolderSelectBox("move_box"),$$.getSingle("#cleanup_box").value="0",
$$.getSingle("#move_box").value="0",$$.getSingle("#move_box").disabled=!1,$$.getSingle("#arrange_ago_date").disabled=!1,
$$.getSingle("#arrange_ago_date").value=nLang.c.arrange_select_before_date,$$.getSingle("#oldmail_period_01").checked=!0,
$$.getSingle("#oldmail_destination_02").checked=!0,$$.getSingle("#oldmail_destination_02_01").value="",
$$.getSingle("#move_box").disabled=!0,$Element("arrange_ago_date").addClass("blank"),m("disable"),d=moment().subtract(6,"month"),
e=moment().subtract(1,"year"),$$.getSingle("#arrange_start_date").value=e.format(c),$$.getSingle("#arrange_end_date").value=d.format(c),
i.arrange_start_date=e.format(c),i.arrange_end_date=d.format(c),i.arrange_ago_date=d.format(c),$$.getSingle("#arrange_start_date").disabled=!0,
$$.getSingle("#arrange_end_date").disabled=!0;var f=$Agent().navigator();if(f.chrome)var g=document.body;else var g=document.documentElement;
var h=g.scrollTop,j=g.scrollHeight;if(nTop=h+(g.clientHeight-b.height())/2,mCom.elOptionWrap&&mCom.elOptionWrap.visible()){
var k=$Element($$.getSingle(".setup_gnb")).offset().top+$Element($$.getSingle(".setup_gnb")).height();
k>nTop&&(nTop=k)}else j<nTop+b.height()&&(nTop=j-b.height()-$Element("footer").height());b.css({top:nTop+"px",
left:mCom.nWidthOfSnb+"px"}),$$.getSingle("#except_imp_mail").checked=!1,$$.getSingle("#cleanup_check_all").checked=!1,
$$.getSingle("#except_imp_12").checked=!1,myCore.showLayer(a.element,b,{direction:"downward",align:"bottom"
},$$.getSingle("input",b)),$$.getSingle("#testabc_001").focus(),mcCore.requestAjax({fCallback:$Fn(n,this).bind(),
oParameter:{listSize:"3000"},sUrl:"/json/arrange/unreadlist/"})},m=function(a){"able"==a?($$.getSingle("#cleanup_read_btn").disabled=!1,
$$.getSingle("#cleanup_del_btn").disabled=!1,$Element("cleanup_read_btn").removeClass("disabled"),$Element("cleanup_del_btn").removeClass("disabled")):($$.getSingle("#cleanup_read_btn").disabled=!0,
$$.getSingle("#cleanup_del_btn").disabled=!0,$Element("cleanup_read_btn").addClass("disabled"),$Element("cleanup_del_btn").addClass("disabled"));
},n=function(a){f=a.unreadMailList,h=0;for(var b=0,c=f.length;c>b;b++)f[b].checked=!1,h+=f[b].mailSNList.length;
g=0,$Element("cleanup_list_body").html(q()),$Element("cleanup_status_desc").html(o())},o=function(){
var a=nLang.c.unread_mail_desc,b=0===h?0:parseInt(100*g/h,10);return a=a.replace("{allNum}",h).replace("{selectedNum}",g).replace("{percent}",b);
},p='<li><span class="cell_check"><input type="checkbox" id="cleanup_check_{i}"  onclick="myArrangeMail.unreadListChecked(this, {i}); ccr(this, \'lfx*a.usender\', event); " ></span><label for="cleanup_check_{i}"><span class="cell_sender"><i class="blind">'+nLang.c.sender_simple_search+':</i>{senderName} &lt;{senderAddress}&gt;</span><span class="cell_title"><i class="blind">'+nLang.c.recently_received_mail_title+':</i>{recentTitle}</span><span class="cell_count"><i class="blind">통수</i>{unreadNum}</span></label></li>',q=function(){
for(var a="",b=0,c=f.length;c>b;b++){var d=p.replace(/\{i\}/g,b).replace("{senderName}",f[b].name).replace("{senderAddress}",f[b].email).replace("{recentTitle}",f[b].subject&&f[b].subject.replace(/^\s+|\s+$/g,"")?f[b].subject.replace(/\</g,"&lt;").replace(/\>/g,"&gt;"):nLang.l.no_title).replace(/\{unreadNum\}/g,f[b].mailCount);
a+=d}return""==a?(a+="<li class='blank_list'>"+nLang.c.arrange_no_list+"</li>",$$.getSingle("#cleanup_check_all").disabled=!0):$$.getSingle("#cleanup_check_all").disabled=!1,
a},r=function(a,b,c){var d=a.$value();"checked"==c?(d.checked=!0,a.hasClass("checked")||a.addClass("checked"),
f[b].checked=!0):(d.checked=!1,a.hasClass("checked")&&a.removeClass("checked"),f[b].checked=!1)},s=function(a,b){
var c=$Element(a),d=f[b].mailSNList.length;c.hasClass("checked")?(r(c,b,"unchecked"),g=Number(g)-Number(d)):(r(c,b,"checked"),
g=Number(g)+Number(d)),$Element("cleanup_status_desc").html(o()),$("cleanup_check_all").checked=g>=h?!0:!1,
m(0==g?"disable":"able")},t=function(a){$Element("arrange_mail_layer").hide(),mInit.showOptionLayerAtInit(a,"folder_option"),
setTimeout(u,20)},u=function(){$$("#folder_list tr").length>7?($$.getSingle("#setup_pos_wrap").scrollTop=$$.getSingle("#setup_pos_wrap").scrollHeight,
$$.getSingle("#deltype").focus()):setTimeout(u,20)},v=function(a,b){for(var c="",d=0,e=f.length;e>d;d++)f[d].checked&&(c+=";"+f[d].mailSNList.join(";"));
c&&";"==c[0]&&(c=c.slice(1));var g={excludeMark:$$.getSingle("#except_imp_mail").checked?1:0,type:b,
mailSNList:c};mcCore.requestAjax({fCallback:$Fn(w,this).bind(),oParameter:g,sUrl:"/json/arrange/unreadtreat"
}),$Element("arrange_mail_layer").hide(),x()},w=function(){mlCore.refreshList()},x=function(){$Element("btnArrange").addClass("disabled"),
j=!0,setTimeout(function(){$Element("btnArrange").removeClass("disabled"),j=!1},2e3)},y=function(){var a=$$.getSingle("#arrange_ago_date"),b=$$.getSingle("#arrange_start_date"),f=$$.getSingle("#arrange_end_date");
if($$.getSingle("#oldmail_period_01").checked){if(!D(a.value))return a.focus(),void(a.value="")}else if($$.getSingle("#oldmail_period_02").checked){
if(!D(b.value))return b.value=e.format(c),void b.focus();if(!D(f.value))return f.value=d.format(c),void f.focus();
if(moment(b.value,c).isAfter(moment(f.value,c)))return alert(nLang.c.invalid_start_date),b.value=e.format(c),
void(f.value=d.format(c))}if($$.getSingle("#oldmail_destination_02").checked)z($$.getSingle("#oldmail_destination_02_01").value,"ARRANGE_MOVE");else if($$.getSingle("#oldmail_destination_03").checked)B(nLang.f.trash,"4");else{
var g=$$.getSingle("#move_box").value,h=$$.getSingle("#move_box")[$$.getSingle("#move_box").selectedIndex].innerHTML;
h=h.split("/").pop(),B(h,g)}},z=function(a,b){if(!mfCore.checkFolderCount())return void alert(nLang.f.count_limit_1000);
if(a=a.replace(/(^\s*)|(\s*$)/g,""),""==a||a==nLang.f.new_folder)alert(nLang.f.noname);else if(a.length>20)alert(nLang.f.length_limit_20);else if(-1!==a.indexOf("/"))alert(nLang.f.cannot_use_slash_foldername_2);else if(mfCore.isExistFolderName(mcCore.replaceSpecialChar(a)))alert(nLang.f.already_exist);else{
if(isSystemFolderName(a))return;var c={folderName:a};mcCore.requestAjax({fCallback:$Fn(A,this).bind(a,b),
oParameter:c,sUrl:"/json/folder/add/"})}},A=function(a,b,c){if(null!=c){for(var d=[],e=c.folderList,f=0;f<e.length;f++)d.push([e[f].folderSN,e[f].folderName,e[f].parentFolderSN,e[f].hasChildFolder,null,e[f].unreadMailCount,e[f].mailCount,e[f].idomain]);
mCom.aFolderInfo=d}"CLEAN_MOVE"==b?cleanupMail.doCleanupMove(null,c.addedFolderSN):"CLEAN_MOVE_CONTINUE"==b?cleanupMail.doCleanupAction(null,c.addedFolderSN):"ARRANGE_MOVE"==b?B(a,c.addedFolderSN):"CLASSIFY_CONTEXT"==b&&myContextMenu.addClassifyRule(null,c.addedFolderSN);
},B=function(a,b){var d="",e="";$$.getSingle("#oldmail_period_02").checked?(d=moment($$.getSingle("#arrange_start_date").value,c).format("YYYYMMDD"),
e=moment($$.getSingle("#arrange_end_date").value,c).format("YYYYMMDD")):e=moment($$.getSingle("#arrange_ago_date").value,c).format("YYYYMMDD"),
oOption={fromFolderSN:$$.getSingle("#cleanup_box").value,targetFolderSN:b,targetFolderName:a,fromDate:d,
toDate:e,excludeMark:$$.getSingle("#except_imp_12").checked?1:0},mcCore.requestAjax({fCallback:$Fn(C,this).bind(),
oParameter:oOption,sUrl:"/json/arrange/oldmail"}),$Element("arrange_mail_layer").hide(),x()},C=function(a){
myCore.showConfirmLayer(null,nLang.l.move_mail.replace("{FolderName}",a.targetFolderName)),mlCore.refreshList();
},D=function(a){var b=moment(a,c),d=moment();return b.isValid()?b.isAfter(d)?(alert(nLang.c.input_past_date),
!1):b.format(c)!=a?(alert(nLang.c.invalid_date),!1):!0:!1};clickDirectPeriod=function(){$$.getSingle("#arrange_ago_date").disabled=!0,
$$.getSingle("#arrange_start_date").disabled=!1,$$.getSingle("#arrange_end_date").disabled=!1},clickSelectPeriod=function(){
$$.getSingle("#arrange_start_date").disabled=!0,$$.getSingle("#arrange_end_date").disabled=!0,$$.getSingle("#arrange_ago_date").disabled=!1,
$$.getSingle("#oldmail_period_01").checked=!0;var a=$$.getSingle("#arrange_ago_date").value;a==nLang.c.arrange_select_before_date&&($$.getSingle("#arrange_ago_date").value=d.format(c)),
$$.getSingle("#arrange_ago_date").focus()},clickNewFolder=function(){$$.getSingle("#move_box").disabled=!0,
$$.getSingle("#oldmail_destination_02").checked=!0,$$.getSingle("#oldmail_destination_02_01").disabled=!1,
$$.getSingle("#oldmail_destination_02_01").focus()},clickAgoDate=function(a){$Element("arrange_ago_date").removeClass("blank"),
clickSelectPeriod(),myCore.showCalendar(a,"arrange_ago_date")};var E=function(){$Element("arrange_mail_layer").hide(),
$Element("btnArrange").$value().focus(),mCom.elVisibleLayer=null},F=function(a,b){var c=$Element("ly_calendar");
c.visible()&&(c.hide(),mCom.aVisibleLayerList.pop()),"unread"==b?($Element("old_cleanup_unread").show(),
$Element("old_cleanup_period").hide(),$$.getSingle("#testabc_001").focus()):"period"==b&&($Element("old_cleanup_unread").hide(),
$Element("old_cleanup_period").show(),$$.getSingle("#testabc_002").focus())},G=function(a){var b=f.length;
if(a.element.checked){for(var c=0;b>c;c++)r($Element("cleanup_check_"+c),c,"checked"),g=h;m("able")}else{
for(var c=0;b>c;c++)r($Element("cleanup_check_"+c),c,"unchecked"),g=0;m("disable")}$Element("cleanup_status_desc").html(o());
};return{showArrangeLayer:k,new_addFolder:z,clickDoArrangeUnread:v,clickDoArrange:y,clickDirectPeriod:clickDirectPeriod,
clickNewFolder:clickNewFolder,clickSelectPeriod:clickSelectPeriod,clickAgoDate:clickAgoDate,closeArrangeMailLayer:E,
clickTab:F,clickCheckAllUnread:G,unreadListChecked:s,showOptionLayer:t,changeArrangeDate:a,changeCalendarDate:b
}}(),cleanupMail=function(){var a=$A();return showCleanupLayer=function(a,b){return 0==mlCore.getCurMailListLength()?(alert(nLang.c.select_mail),
!1):mlCore.getCurMailListLength()>10?(alert(nLang.l.disable_arrange_mail_over_count),!1):void _initCleanupLayer(a,b);
},_initCleanupLayer=function(b,c){var d=$Element("cleanup_mail_layer"),e=mCom.elDoMailAction;if(mCom.elReadBtnMenu.visible()&&mCom.elReadBtnMenu.query(".do_mailAction")._element,
d.visible())return void myCore.showLayer(e,d);mcCore.setFolderSelectBox("cleanup_move_box"),$$.getSingle("#move_desc strong").innerHTML=$$.getSingle("#cleanup_move_box")[$$.getSingle("#cleanup_move_box").selectedIndex].innerHTML,
clickTab(b,"delete"),$$.getSingle("#cleanup_range_option1").checked=!0;var f="<li email='{email}'><span>{name} &lt;{email}&gt;</span><a class='ico_del _c1(cleanupMail|removeCleanupList) _ccrf(clt|*r.deladdress) _stopDefault' href='#'><span class='blind'>"+nLang.l.delete_from_delete_list+"</span></a>	</li>",g=[];
a=$A();var h=mlCore.getCurMailList(),j=h.length();for(i=0;j>i;i++){var k=mcCore.trim(h.get(i).fromAddr);
""==k||a.has(k)||(g+=f.replace("{name}",h.get(i).fromName).replace(/\{email\}/g,k),a.push(k))}if($$.getSingle(".cleanup_list ul").innerHTML=g,
0==a.length())return void alert(nLang.c.select_mail);1==a.length()&&($$.getSingle(".cleanup_list a").style.display="none"),
$$.getSingle("#delete_option2").checked=!0,$$.getSingle("#cleanup_continue_move").checked=!1;var l={
direction:"bottom"==c?"upward":"downward",align:"center"};myCore.showLayer(e,d,l,$$.getSingle("button",d.$value()));
},clickTab=function(a,b){"4"==mCom.nCurrentFolder?(b="move",$Element($$.getSingle("#cleanup_moveTab a")).hide().css("visibility","hidden")):$Element($$.getSingle("#cleanup_moveTab a")).show().css("visibility",""),
"delete"==b?($Element("cleanup_moveTab").hide().css("visibility","hidden"),$Element("cleanup_deleteTab").show().css("visibility",""),
$Element("cleanup_move_notice").hide().css("visibility","hidden"),$Element("cleanup_delete_notice").show().css("visibility",""),
$Element("move_option").hide().css("visibility","hidden"),$Element("move_desc").hide().css("visibility","hidden"),
$Element("delete_option").show().css("visibility",""),$Element("delete_desc").show().css("visibility",""),
$$.getSingle("#delete_option2").checked=!0,$$.getSingle("#delete_option1").disabled=isNaN(Number(mCom.nCurrentFolder))?!0:!1):($Element("cleanup_moveTab").show().css("visibility",""),
$Element("cleanup_deleteTab").hide().css("visibility","hidden"),$Element("cleanup_move_notice").show().css("visibility",""),
$Element("cleanup_delete_notice").hide().css("visibility","hidden"),$Element("move_option").show().css("visibility",""),
$Element("move_desc").show().css("visibility",""),$Element("delete_option").hide().css("visibility","hidden"),
$Element("delete_desc").hide().css("visibility","hidden"),$$.getSingle("#cleanup_rdo_select_mbox1").checked=!0,
$$.getSingle("#cleanup_move_box_new").value="",$$.getSingle("#cleanup_move_box").disabled=!1,$$.getSingle("#cleanup_move_box_new").disabled=!0);
},removeCleanupList=function(b){var c=$Element($$.getSingle("!li",b.element));a=a.refuse(c.attr("email")),
c.leave(),1==a.length()&&($$.getSingle(".cleanup_list a").style.display="none")},doCleanupAction=function(b,c){
var d=$Element("cleanup_deleteTab").visible()?"delete":"move";if(0==$$(".cleanup_list li").length)return alert(nLang.c.alert_not_select_mail),
$Element("cleanup_mail_layer").hide(),!1;if("delete"==d)doCleanupDelete();else if("move"==d){var e=c||$$.getSingle("#cleanup_rdo_select_mbox1").checked?"exist":"new",f=$$.getSingle("#cleanup_continue_move").checked;
if("new"==e)myArrangeMail.new_addFolder($$.getSingle("#cleanup_move_box_new").value,f?"CLEAN_MOVE_CONTINUE":"CLEAN_MOVE");else{
if(f){var g=c||$$.getSingle("#cleanup_move_box").value,h="";a.forEach(function(a){h+=a+";"});var i={
fromLayer:"CLEAN_MOVE",folderSN:g,fromCond:"2",fromText:h,tMoveFolder:"Y",retroactivity:"Y"};mcCore.requestAjax({
fCallback:$Fn(myCore._CheckDuplicateCallback,this).bind(i),oParameter:i,sUrl:"/json/option/filter/exist/"
})}c?doCleanupMove(null,c):doCleanupMove()}}},doCleanupDelete=function(b){if(!b){var b={folderType:$$.getSingle("#delete_option1").checked?"current":"all",
deleteType:$$.getSingle("#cleanup_range_option1").checked?"all":"unread",fromEmail:a.toString()};"current"==b.folderType&&(b.folderSN=mCom.nCurrentFolder),
("1"==mCom.nCurrentFolder||"4"==mCom.nCurrentFolder||"5"==mCom.nCurrentFolder||"6"==mCom.nCurrentFolder)&&(b.includeFolderSN=mCom.nCurrentFolder);
}mcCore.requestAjax({fCallback:$Fn(function(){},this).bind(),oParameter:b,sUrl:"/json/arrange/delete/"
}),_doCleanupCallback()},doCleanupMove=function(b,c){if(!b)var b={targetFolderSN:c||$$.getSingle("#cleanup_move_box").value,
moveType:$$.getSingle("#cleanup_range_option1").checked?"all":"unread",fromEmail:a.toString()};("1"==mCom.nCurrentFolder||"4"==mCom.nCurrentFolder||"5"==mCom.nCurrentFolder||"6"==mCom.nCurrentFolder)&&(b.includeFolderSN=mCom.nCurrentFolder),
mcCore.requestAjax({fCallback:$Fn(function(){},this).bind(),oParameter:b,sUrl:"/json/arrange/move/"}),
_doCleanupCallback()},_doCleanupCallback=function(){mfCore.updateFolder(),alert(nLang.c.msg_clean_request_complete),
$Element("cleanup_mail_layer")&&($Element("cleanup_mail_layer").hide(),$$.getSingle(".do_mailAction",$("listBtnMenu")).focus());
},changeFolder=function(a){$$.getSingle("#clean_folder_name").innerHTML=a[a.selectedIndex].innerHTML;
},closeCleanupMailLayer=function(){$Element("cleanup_mail_layer").hide(),$$.getSingle(".do_mailAction",$("listBtnMenu")).focus();
},{showCleanupLayer:showCleanupLayer,clickTab:clickTab,removeCleanupList:removeCleanupList,doCleanupAction:doCleanupAction,
doCleanupMove:doCleanupMove,doCleanupDelete:doCleanupDelete,changeFolder:changeFolder,closeCleanupMailLayer:closeCleanupMailLayer
}}(),myContextMenu=function(){function a(a,d,e){var h=$Element("ly_sender_info");return a&&a.stopDefault(),
h&&h.visible()&&f&&(f==a.element||f==a.element.parentNode)?($ElementList($$("li.context_selected")).removeClass("context_selected"),
void hideAllLayer()):(hideAllLayer(),g={},f=a.element,k=b(f,d,mlCore.getListObject(e)),void c(f,d))}
function b(a,b,c){var d,e=($Element("ly_sender_info"),""),f="",g="",h="";return b===l.FROM_SENDERVIEW?(e=a.innerHTML,
f=$Element($$.getSingle("! ul[data-address]",a)).attr("data-address"),g=e==f?f:'"'+e+'" <'+f+">",h="lst."):b===l.FROM_LIST?(e=c.fromName.replace(/^[\s"'\\]+|[\s"'\\]+$/g,""),
f=c.fromAddr,g=""==e?f:'"'+e+'" <'+f+">",h="lst."):b===l.FROM_READ&&(d=a.innerHTML.match(/(<|&lt;)[^<&]+@[^>&]+(>|&gt;)$/)[0],
d?(e=a.innerHTML.replace(d,"").replace(/^[\s"'\\]+|[\s"'\\]+$/g,""),f=d.replace(/^(<|&lt;)|(>|&gt;)$/g,""),
g=""==e?"<"+f+">":'"'+e.replace(/&quot;/g,"").replace(/\"/g,"").replace(/&amp;/g,"&")+'" <'+mcCore.restoreSpecialChar(f)+">",
h="mrd."):mlog("isn't email part")),{sName:e,sAddress:f,sFullAddress:g,sAreaCode:h}}function c(a,b){
var c,e,f,g,h,i,j=$Element("ly_sender_info"),l=!0;if(mcCore.isNcs()&&k&&k.sAddress&&mEnv.mailDomainList)for(var n=mEnv.mailDomainList.split(","),o=k.sAddress.split("@")[1],p=0;p<n.length;p++)n[p]===o&&(l=!1);
j||($Element(document.body).appendHTML(m.lySenderInfo),j=$Element("ly_sender_info")),c=$Element($$.getSingle("#ly_sender_info #context_show_memberinfo")),
e=$Element($$.getSingle("#ly_sender_info #context_send_message")),f=$Element($$.getSingle("#ly_sender_info #delete_context_menu")),
g=$Element($$.getSingle("#ly_sender_info #search_from_context_menu")),h=$Element($$.getSingle("#ly_sender_info #search_to_context_menu")),
i=$Element($$.getSingle("#ly_sender_info #hide_image_context_menu")),mcCore.isNaver()?c.hide():mcCore.isNcs()&&l?c.hide():c.show(),
mEnv.useWebMessage?mcCore.isNcs()&&l?e.hide():e.show():e.hide(),"search"==mCom.nCurrentFolder||1==mCom.nCurrentFolder?f.hide():f.show(),
mCom&&mCom.hasNoOpener?(g.hide(),h.hide()):(g.show(),h.show()),mcCore.isNwe()&&mCom.showImageAddress?i.show():i.hide(),
j.show(),d(a,b),mCom.aVisibleLayerList.push(j),$$.getSingle("li a",j).focus(),mCom.elLayerPopupBtn=a,
mCom.elVisibleLayer=j,mCom.contextType=b}function d(a,b){var c,d=$Element("ly_sender_info"),e=$Element(a);
if(b===l.FROM_READ)$Element("previewContent")&&$Element("previewContent").append(d),_AdjustLayer(a,d,"bottom","left");else if(b===l.FROM_LIST||b===l.FROM_SENDERVIEW){
var f=$Element("cont_flex_area");f&&f.append(d),$Element($$.getSingle("! li",a)).addClass("context_selected"),
c=0,e.offset().top-e.height()+d.height()>window.innerHeight+c-$Element("footer").height()?_AdjustLayer(a,d,"upward","left",0,3):_AdjustLayer(a,d,"downward","left",0,3);
}j=d.offset()}function e(a){var b,c,d="width=742,height=530,scrollbars=yes,toolbar=no,location=no,resizable=yes,status=no,menubar=no",e={
initEmails:JSON.stringify([a]),serviceId:""};return jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<10?void alert(nLang.e.unavailable_web_message):(mcCore.isNcs()?(b=l.NCS_WEB_MESSENGER_URL,
e.serviceId="ncs"):mcCore.isNwe()&&(b=l.WORKS_WEB_MESSENGER_URL,e.serviceId="works"),c="initEmails="+encodeURIComponent(e.initEmails)+"&serviceId="+encodeURIComponent(e.serviceId),
b=b+"?"+c,void window.open(b,"Send Message",d))}var f,g={},h="?clicklog=1",i=!1,j=null,k={sName:"",sAddress:"",
sFullAddress:"",sAreaCode:""},l={FROM_SENDERVIEW:"senderView",FROM_LIST:"list",FROM_READ:"read",NCS_WEB_MESSENGER_URL:"https://talk.navercorp.com/sendMessage",
WORKS_WEB_MESSENGER_URL:"https://talk.worksmobile.com/sendMessage"},m={lySenderInfo:'<div style="display:none" class="dh_layer" id="ly_sender_info"><div class="type_a"><ul class="selector"><li class="border"><a class="si_item_1 _c1(myContextMenu|execSenderContextMenu|write) _stopDefault" href="#" tab-action="first"><span class="sender_info_icon"></span>'+nLang.w.write_mail+'</a></li><li id="context_send_message"><a class="si_item_1 _c1(myContextMenu|execSenderContextMenu|sendWebMessage) _stopDefault" href="#"><span class="sender_info_icon"></span>'+nLang.l.send_web_message+'</a></li><li id="context_show_memberinfo" class="border"><a class="si_item_1 _c1(myContextMenu|execSenderContextMenu|showInfo) _stopDefault" href="#"><span class="sender_info_icon"></span>'+nLang.l.show_employee_info+'</a></li><li id="search_from_context_menu"><a class="si_item_2 _c1(myContextMenu|execSenderContextMenu|searchFrom) _stopDefault" href="#"><span class="sender_info_icon"></span>'+nLang.l.search_mail_from+'</a></li><li id="search_to_context_menu" class="border"><a class="si_item_3 _c1(myContextMenu|execSenderContextMenu|searchTo) _stopDefault" href="#" ><span class="sender_info_icon"></span>'+nLang.l.search_mail_to+'</a></li><li class="border"><a class="si_item_4 _c1(myContextMenu|execSenderContextMenu|bilateral) _stopDefault" href="#"><span class="sender_info_icon"></span>'+nLang.l.show_bilateral+'</a></li><li id="set_vip_context_menu" class="add_contact"><a class="si_item_4 _c1(myContextMenu|execSenderContextMenu|addVip) _stopDefault" href="#"><span class="sender_info_icon"></span>'+nLang.f.vip_select_to_vip+'</a></li><li id="add_contact_context_menu" class="add_contact"><a class="si_item_4 _c1(myContextMenu|execSenderContextMenu|addContact) _stopDefault" href="#"><span class="sender_info_icon"></span>'+nLang.l.add_contact+'</a></li><li><a class="si_item_5 _c1(myContextMenu|execSenderContextMenu|emphasize) _stopDefault" href="#"><span class="sender_info_icon"></span>'+nLang.l.emphasize_send_mail+'</a></li><li class="border task_classify"><a class="si_item_6 _c1(myContextMenu|execSenderContextMenu|classify) _stopDefault" href="#"><span class="sender_info_icon"></span>'+nLang.l.classify_mailbox+'</a></li><li><a class="si_item_7 _c1(myContextMenu|execSenderContextMenu|reject) _stopDefault" href="#"><span class="sender_info_icon"></span>'+nLang.l.reject+'</a></li><li id="delete_context_menu"><a class="si_item_8 _c1(myContextMenu|execSenderContextMenu|delete) _stopDefault" href="#"><span class="sender_info_icon"></span>'+nLang.l.delete_mail_from+'</a></li><li id="hide_image_context_menu"><a class="si_item_9 _c1(myContextMenu|execSenderContextMenu|hideImage) _stopDefault" href="#" tab-action="last"><span class="sender_info_icon"></span>'+nLang.l.block_image_link+"</a></li></ul></div></div>"
};"undefined"==typeof window.innerHeight&&(window.innerHeight=document.documentElement.clientHeight);
var n=function(a){return a&&"read"==a&&mcCore.isNcs()?!1:6!=mCom.nCurrentFolder&&3!=mCom.nCurrentFolder;
},o=function(a){a&&a.stopDefault(),hideAllLayer()},p=function(a,b){var c=k.sName,d=k.sAddress,f=k.sFullAddress,g=k.sAreaCode;
switch(hideAllLayer(),b){case"write":ccr(a.element,g+"write",a),myContextMenu.bAttachPostFix=!0,mfCore.popupWrite(a,"new",null,f.replace(/,/g,""));
break;case"showInfo":ccr(a.element,g+"profile",a),myCore.showSenderInfo(null,d);break;case"sendWebMessage":
ccr(a.element,g+"message",a),e(d);break;case"searchFrom":ccr(a.element,g+"fromsearch",a),myContextMenu.bAttachPostFix=!0,
q(d);break;case"searchTo":ccr(a.element,g+"tosearch",a),myContextMenu.bAttachPostFix=!0,r(d);break;case"addContact":
ccr(a.element,g+"addcontact",a),myAddAddress.initAddAddressLayer(a,"context",f);break;case"addVip":ccr(a.element,g+"vip",a),
s(c,d);break;case"emphasize":ccr(a.element,g+"chighlight",a),t(d);break;case"classify":ccr(a.element,g+"autogroup",a),
u(d);break;case"reject":ccr(a.element,g+"spmblock",a),v(d);break;case"delete":ccr(a.element,g+"delall",a),
w(d);break;case"bilateral":ccr(a.element,g+"relatedmail",a),x(d);break;case"hideImage":y(d)}},q=function(a){
mCom.isPopup?(opener.$Element("detail_search").visible()||opener.myCore.showSearchLayer(),opener.mlCore.displayReSearchCheckbox(),
opener.$$.getSingle("#slt_search_folder").value=-1,opener.mCom.nCurrentFolder=-1,opener.mfCore.makeSearchLayerBo(),
opener.$$.getSingle("#ipt_sender").value=a,opener.$$.getSingle("#ipt_receiver").value="",opener.mlCore.doSearch_new(null,"detail")):($Element("detail_search").visible()||myCore.showSearchLayer(),
mlCore.displayReSearchCheckbox(),$$.getSingle("#slt_search_folder").value=-1,mCom.nCurrentFolder=-1,
mfCore.makeSearchLayerBo(),$$.getSingle("#ipt_sender").value=a,$$.getSingle("#ipt_receiver").value="",
mlCore.doSearch_new(null,"detail"))},r=function(a){mCom.isPopup?(opener.$Element("detail_search").visible()||opener.myCore.showSearchLayer(),
opener.mlCore.displayReSearchCheckbox(),opener.$$.getSingle("#slt_search_folder").value=1,opener.mCom.nCurrentFolder=1,
opener.mfCore.makeSearchLayerBo(),opener.$$.getSingle("#ipt_sender").value="",opener.$$.getSingle("#ipt_receiver").value=a,
opener.mlCore.doSearch_new(null,"detail")):($Element("detail_search").visible()||myCore.showSearchLayer(),
mlCore.displayReSearchCheckbox(),$$.getSingle("#slt_search_folder").value=1,mCom.nCurrentFolder=1,mfCore.makeSearchLayerBo(),
$$.getSingle("#ipt_sender").value="",$$.getSingle("#ipt_receiver").value=a,mlCore.doSearch_new(null,"detail"));
},s=function(a,b){var c="context",d=b=mcCore.restoreSpecialChar(b);a&&(a=a.replace(/"|'|&quot;/g,""),
d='"'+a+'"<'+b+">");var e={address:d,name:a,addressOrigin:b,status:"Y"};mcCore.requestAjax({fCallback:$Fn(function(a,b,c){
_setImportanceCallback(a,b,c)},this).bind(e,c),oParameter:e,sUrl:"/json/address/important/"+h})},t=function(a){
var b={fromText:a,fromCond:"2",tHighlightColor:"Y",highlightColor:"#fffde0",type:"emphasize"};A(b)},u=function(a){
mcCore.setFolderSelectBox("classify_box"),$$.getSingle("#ipt_addr_1").value=a,$$.getSingle("#oldmail_destination_11").checked=!0,
$$.getSingle("#oldmail_01").checked=!1,$$.getSingle("#oldmail_destination_02_11").value="",$Element("oldmail_destination_02_11").attr("disabled","disabled");
var b=$Element("ly_classify_mini");b.show(),$$.getSingle("input",b).focus(),C(b),mCom.aVisibleLayerList.push(b);
},v=function(a){if(a==mEnv.mailAddress)return void alert(nLang.o.cannot_add_mine_to_reject);if(confirm(nLang.l.confirm_add_reject)){
var b={addItems:a};mcCore.requestAjax({fCallback:$Fn(function(){},this).bind(),oParameter:b,sUrl:"/json/option/rejectAddress/set/"+h
})}},w=function(a,b){var c=nLang.l.confirm_delete_mail+"\n"+nLang.l.call_delete_mail;if(b&&(c=nLang.l.add_reject_list+"\n"+c),
confirm(c)){var d={fromEmail:a,deleteType:"all"};isNaN(mCom.nCurrentFolder)||-1==mCom.nCurrentFolder?d.folderType="all":(d.folderType="current",
d.folderSN=mCom.nCurrentFolder),mcCore.requestAjax({fCallback:$Fn(function(){},this).bind(),oParameter:d,
sUrl:"/json/arrange/delete/"+h})}},x=function(a){mCom.isPopup?opener.mlCore.updateList(null,"bil$"+a):mlCore.updateList(null,"bil$"+a);
},y=function(a){if(a){var b={showImageAddress:a};mcCore.requestAjax({fCallback:z,oParameter:b,sUrl:"/json/option/showImageAddress/remove"
})}},z=function(){mCom.nCurReadingMailSN&&-1!=mCom.nCurReadingMailSN&&mrCore.readSpamMail(null,mCom.nCurrentFolder,!1);
},A=function(a,b,c){var d=myContextMenu.getTriggerBtn();b&&myContextMenu.oFilterOption?(myContextMenu.oFilterOption.delFilterSN=c,
mcCore.requestAjax({fCallback:$Fn(function(){},this).bind(),oParameter:myContextMenu.oFilterOption,sUrl:"/json/option/filter/add/"+h
}),alert(myContextMenu.oFilterOption.type&&"emphasize"==myContextMenu.oFilterOption.type?nLang.l.set_emphasize_mail:nLang.l.add_classify_rule),
d&&d.focus()):(myContextMenu.oFilterOption=a,mcCore.requestAjax({fCallback:$Fn(function(a,b){if(b.Count>=b.MaxFilterCount){
myCore.showOverLimitRuleLayer("context");var c=$Element("ly_rule_over_limit_index");C(c)}else if("-1"!=b.DuplicateSN){
myCore.showDuplicateRuleLayer("context",b.DuplicateSN);var e=$Element("ly_rule_duplicate_index");C(e);
}else mcCore.requestAjax({fCallback:$Fn(function(){},this).bind(),oParameter:a,sUrl:"/json/option/filter/add/"+h
}),alert(a.type&&"emphasize"==a.type?nLang.l.set_emphasize_mail:nLang.l.add_classify_rule),d&&d.focus();
},this).bind(a),oParameter:a,sUrl:"/json/option/filter/exist/"+h})),hideAllLayer()},B=function(a,b){
var c;if("undefined"==typeof b&&$$.getSingle("#oldmail_destination_12").checked){var d=$$.getSingle("#oldmail_destination_02_11").value;
return void myArrangeMail.new_addFolder(d,"CLASSIFY_CONTEXT")}b?(mfCore.updateFolder(),c=b):c=$$.getSingle("#classify_box").value;
var e={fromText:$$.getSingle("#ipt_addr_1").value,fromCond:"2",tMoveFolder:"Y",folderSN:c,retroactivity:$$.getSingle("#oldmail_01").checked?"Y":"N",
type:"classify"};A(e)},C=function(a,b){if(!b){if(!j)return;b=j}b.top+a.height()>window.innerHeight-($Element("footer")?$Element("footer").height():0)&&(b.top=window.innerHeight-($Element("footer")?$Element("footer").height():0)-a.height()),
a.offset(b.top,b.left)},D=function(){return f};return{sUrlPostFix:h,bAttachPostFix:i,oFilterOption:g,
isUseContextMenu:n,showSenderContextLayer:a,execSenderContextMenu:p,addClassifyRule:B,addFilterRule:A,
noReceiver:o,arrangeLayerOffset:C,getTriggerBtn:D}}(),myCore=function(){function a(a,c){var d=mcCore.findFolderName(c,!0),e=$Element($$.getSingle("#layer_folder_edit")),f=$Element($$.getSingle("#layer_folder_edit .nob")),g=$$.getSingle("#layer_folder_edit #foldername"),h=d.split("/"),i=h.pop(),j=h?h.join("/"):"";
hideAllLayer(),_triggerElem=a.element,mcCore.isNaver()||(Number(c)>=1e7?(e.query("#foldersn").html(e.query("#foldersn").html().replace(nLang.m.mailbox_modify,nLang.m.memobox_modify)),
e.query("TABLE .condition").html(nLang.m.memobox_org_folder_name),e.query("TABLE .condition label").html(nLang.m.memobox_new_folder_name)):(e.query("#foldersn").html(e.query("#foldersn").html().replace(nLang.m.memobox_modify,nLang.m.mailbox_modify)),
e.query("TABLE .condition").html(nLang.m.mailbox_org_folder_name),e.query("TABLE .condition label").html(nLang.m.mailbox_new_folder_name))),
f.$value().value=mcCore.restoreSpecialChar(i),f.attr("data-parentName",j),$$.getSingle("#layer_folder_edit #foldersn").value=c,
g.value="",e.show(),b(e,$Element(a.element.parentNode)),mCom.aVisibleLayerList.push(e),g.focus()}function b(a,b){
var c,d,e=b.offset();"undefined"==typeof window.innerWidth&&(window.innerWidth=document.documentElement.clientWidth,
window.innerHeight=document.documentElement.clientHeight);var f=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop;
c=e.top+a.height()<window.innerHeight+f?e.top:e.top+b.height()-a.height(),d=e.left-a.width(),a.offset(c,d);
}function c(a){var b,c=a.element,d=c.value,e=mCom.sDefaultDateFormat||"YYYY.MM.DD";b=moment(c.value,e),
b.isValid()||(d=moment().format(e),c.value=d),mCalendar._drawCalendar(d,c.id),moAutoReply.checkDueDay();
}_nFolderToMoveMail=null,_sMailListToMove=null,_oMoveMailOption={},_triggerElem=null;var d=null,e=null,f={
BILL_CODE:103,NAVERCAFE_CODE:203,SNSNOTI_CODE:207,NEWSLETTER_CODE:212,SHOP_CODE:213,BILL_FOLDERSN:7,
NAVERCAFE_FOLDERSN:8,SNSNOTI_FOLDERSN:9,SHOP_NEWS_FOLDERSN:10},g=null;_nRuleLimitCount=500;var h='<tr><td><span class="file_name" title="{Filename}">{Filename}</span></td><td><a href="{SupportUrl}" {Target} class="reason">{Type}</a></td></tr>';
useSmartMailbox=function(a,b){mcCore.requestAjax({fCallback:$Fn(_useSmartMailboxCallback,this).bind(b),
oParameter:{flag:"on",folderSNList:b},sUrl:"/json/option/useSmartMailBox"})},showCafeCompleteLayer=function(){
hideAllLayer();var a=$Element($$.getSingle("#ly_tip_cafemailbox")),b=$$.getSingle("#8_fol");a.show(),
_AdjustLayer(b,a,"rightward","bottom"),mCom.aVisibleLayerList.push(a),a=b=null},showCafeManage=function(){
$Element("ly_tip_cafemailbox").hide(),mcCore.openPopupWindow("http://section.cafe.naver.com/JoinCafeList.nhn");
},showMoveLayer=function(a,b,c){var d=$$.getSingle("#moveMailLayer");if($Element(d).visible())return void showLayer(f,d);
if(a&&a.element&&"conversation"==b&&"all"==c){var e="all"==mCom.nCurrentFolder?"mrd_all":0==mCom.nCurrentFolder?"mrd_got":"mrd_els";
ccr(a.element,e+".allthreadmove",a)}if("2"!=mCom.nCurrentFolder&&"3"!=mCom.nCurrentFolder&&!mCom.hasNoOpener){
mCom.conversationCallType="";var f=a.element,g=$Element($$.getSingle(".btn_area:not(.except_self)",d)),h=$Element($$.getSingle(".btn_area.except_self",d));
b&&"conversation"==b?"all"==c?(mCom.conversationCallType="all","BUTTON"!=a.element.tagName&&(f=$$.getSingle("! button",a.element))):(mCom.conversationCallType="current",
f=$$.getSingle("div.cv_card[data-mailsn="+c+"] .subject .mailListBtn .btn_txt",mCom.elRead)):"keydown"==a.type&&mCom.elReadWrap.visible()&&"list"==mCom.vDivideMode?f=$$.getSingle("#readBtnMenu .do_move"):"keydown"==a.type&&mCom.elListWrap.visible()&&(f=$$.getSingle("#listBtnMenu .do_move")),
"all"==mCom.conversationCallType?($$.getSingle(".btn_area.except_self #except_sendmail",d).checked=!0,
g.hide(),h.show()):(g.show(),h.hide());var i=$Element(d),j=$Element(f);if(i){if(mCom.elLayerPopupBtn=a.element,
"all"!=mCom.conversationCallType&&0==mlCore.getCurMailListLength())return hideAllLayer(),alert(nLang.c.select_mail),
!1;var k={direction:"downward",align:"left"};showLayer(f,d,k,$$.getSingle("li a",$("moveBox_list"))),
"undefined"==typeof window.innerWidth&&(window.innerWidth=document.documentElement.clientWidth,window.innerHeight=document.documentElement.clientHeight),
""===$$.getSingle("#moveBox_list",d).innerHTML.trim()&&setTimeout(function(){mfCore.makeMoveLayerBo(),
_onClickFolderListBo(null,0)},0);var l=j.offset(),m=150,n=window.innerHeight-l.top-m,o=21*(mCom.aFolderInfo.length-2);
if($Element($$.getSingle("#moveMailLayer .moveBox_list")).height(n>o?o:n),b&&"shortcut"!=b&&"conversation"!=b){
var p=l.top-$Element($$.getSingle("#moveMailLayer .moveBox_list")).height()-60;i.offset(p,l.left),p=null;
}_onClickFolderListBo(null,0),l=null,$$.getSingle("#ipt_newFolderName").value=$Element("ipt_newFolderName").data("default_value");
}}},moveBar=function(){return"undefined"==typeof window.innerWidth&&(window.innerWidth=document.documentElement.clientWidth,
window.innerHeight=document.documentElement.clientHeight),document.onselectstart=function(){return!1;
},mCom.nWidthOfSnb=$Element("wrap").hasClass("lft_fd")?0:$Element("nav_snb").width(),mCom.nWidthOfPnb=!$Element("wrap").hasClass("lft_fd")&&$Element("pwePnbArea")?51:0,
$Element(document).attach("mousemove",resizeListWrapFlexible),$Element(document).attach("mouseup",resizeListWrapFlexible),
$ElementList($$(".folderName")).removeClass("_stopBubble"),!0},resizeListWrap=function(a){var b=mCom.vDivideMode,c=$Element($$.getSingle(".divSplitBar")),d=50,e=100,f=$Event(a).pos();
if("mousemove"==a.type)if("horizontal"==b){var g=Number(mCom.nWidthOfSnb)+Number(mCom.nWidthOfPnb)+Number(mCom.nWidthOfList),h=window.innerWidth-d;
f.pageX>h?c.css("left",h+"px"):f.pageX>g?c.css("left",f.pageX+"px"):c.css("left",g+"px"),g=null,h=null;
}else{var i=Number($Element("header").height())+Number($Element("cont_fix_area").height())+Number(mCom.elPaging.height())+23,j=window.innerHeight-e;
f.pageY>j?c.css("top",j):f.pageY>i?c.css("top",f.pageY):c.css("top",i)}else if("mouseup"==a.type){document.onselectstart=null;
if("horizontal"==b){var g=Number(mCom.nWidthOfSnb)+Number(mCom.nWidthOfPnb)+Number(mCom.nWidthOfList),h=window.innerWidth-d,k=f.pageX-mCom.nWidthOfSnb-mCom.nWidthOfPnb+"px";
f.pageX>h?(k=h-mCom.nWidthOfSnb-mCom.nWidthOfPnb+"px",mCom.elListWrap.css("width",k),mCom.elReadWrap.css("left",k)):f.pageX>g?(mCom.elListWrap.css("width",k),
mCom.elReadWrap.css("left",k)):(k=g-mCom.nWidthOfSnb-mCom.nWidthOfPnb+"px",mCom.elListWrap.css("width",k),
mCom.elReadWrap.css("left",k)),mCom.nUserWidthOfList=parseInt(k,10)}else{var l=Number($Element("header").height())+Number($Element("cont_fix_area").height()),i=l+Number(mCom.elPaging.height())+23,j=window.innerHeight-e,m=f.pageY-l+"px";
f.pageY>j?(m=j-l+"px",mCom.elListWrap.css("height",m),mCom.elReadWrap.css("top",m)):f.pageY>i?(mCom.elListWrap.css("height",m),
mCom.elReadWrap.css("top",m)):(m=i-l+"px",mCom.elListWrap.css("height",m),mCom.elReadWrap.css("top",m)),
mCom.nUserHeightOfList=parseInt(m,10)}$ElementList($$(".folderName")).addClass("_stopBubble"),$Element(document).detach("mousemove",resizeListWrap),
$Element(document).detach("mouseup",resizeListWrap),c.hide();var n={listAreaWidth:String(mCom.nUserWidthOfList),
listAreaHeight:String(mCom.nUserHeightOfList)};mcCore.requestAjax({fCallback:$Fn(_MoveBarCallback,this).bind(n),
oParameter:n,sUrl:"/json/option/listPaneSize/set/"})}return!0},nTestCount=0,resizeListWrapFlexible=function(a){
if(nTestCount++,nTestCount%3==1&&"mousemove"==a.type){var b=$Event(a).pos(),c=mCom.vDivideMode,d=100,e=100;
if(mcCore.isAttachView()&&mlCore.initAttachShow(),"horizontal"==c){var f=Number(mCom.nWidthOfSnb)+Number(mCom.nWidthOfPnb)+Number(mCom.nWidthOfList),g=window.innerWidth-d,h=b.pageX-Number(mCom.nWidthOfSnb)-Number(mCom.nWidthOfPnb)+"px";
b.pageX>g?(h=g-Number(mCom.nWidthOfSnb)-Number(mCom.nWidthOfPnb)+"px",mCom.elListWrap.css("width",h),
mCom.elReadWrap.css("left",h)):b.pageX>f?(mCom.elListWrap.css("width",h),mCom.elReadWrap.css("left",h)):(h=f-Number(mCom.nWidthOfSnb)-Number(mCom.nWidthOfPnb)+"px",
mCom.elListWrap.css("width",h),mCom.elReadWrap.css("left",h)),mCom.nUserWidthOfList=parseInt(h,10)}else{
var i=Number($Element("header").height())+Number($Element("cont_fix_area").height()),j=i+Number(mCom.elPaging.height())+23,k=window.innerHeight-e,l=b.pageY-i+"px";
b.pageY>k?(l=k-i+"px",mCom.elListWrap.css("height",l),mCom.elReadWrap.css("top",l)):b.pageY>j?(mCom.elListWrap.css("height",l),
mCom.elReadWrap.css("top",l)):(l=j-i+"px",mCom.elListWrap.css("height",l),mCom.elReadWrap.css("top",l)),
mCom.nUserHeightOfList=parseInt(l,10)}mlCore.toggleSize()}else if("mouseup"==a.type){document.onselectstart=null,
$ElementList($$(".folderName")).addClass("_stopBubble"),$Element(document).detach("mousemove",resizeListWrapFlexible),
$Element(document).detach("mouseup",resizeListWrapFlexible);var m={listAreaWidth:String(mCom.nUserWidthOfList),
listAreaHeight:String(mCom.nUserHeightOfList)};mcCore.requestAjax({fCallback:$Fn(_MoveBarCallback,this).bind(m),
oParameter:m,sUrl:"/json/option/listPaneSize/set/"})}return!0},adjustLayer=function(a,b,c,d,e,f){_AdjustLayer(a,b,c,d,e,f);
},_AdjustLayer=function(a,b,c,d,e,f){var g=$Agent().navigator();if(g.chrome)var h=document.body;else var h=document.documentElement;
var i=b,j=a?$Element(a):"",k=j?j.offset():"",l=mCom.elOptionWrap&&mCom.elOptionWrap.visible()?!0:!1,m=($Element("pwePnbArea")?$Element("pwePnbArea").width():0)+($Element("nav_snb")?$Element("nav_snb").width():0),n=mCom.isPopup?0:$Element("header").height(),o=mCom.elOptionWrap&&mCom.elOptionWrap.visible()?$Element($$.getSingle(".setup_gnb")).height()+$Element($$.getSingle(".setup_head")).height():0,p=mCom.isPopup?h.clientHeight:$Element("footer").offset().top,q=n+o,r=p,s=0,t=0;
switch(e=e?e:0,f=f?f:0,c){case"upward":t=k.top-i.height();break;case"overlay":t=k.top;break;case"rightward":
t=k.top-i.height()+j.height();break;case"center":t=k.top+(j.height()-i.height())/2;break;case"screen-center":
{var u=h.scrollTop;h.scrollHeight}t=u+(h.clientHeight-i.height())/2;break;case"absolute-center":t=(h.clientHeight-i.height())/2;
break;case"downward":default:t=k.top+j.height()}switch(d){case"center":s=k.left-(i.width()-j.width())/2;
break;case"right":s=k.left+(j.width()-i.width());break;case"bottom":s=k.left+j.width();break;case"screen-center":
var v=h.scrollLeft>m?h.scrollLeft:m+h.scrollLeft;s=v+(h.clientWidth-v-i.width())/2,(0>s||m>s)&&(s=m);
break;case"absolute-center":s=(h.clientWidth-i.width())/2,0>s&&(s=0);break;case"left":default:s=k.left;
}"absolute-center"!=c&&(t=q>t?n+o:t),"absolute-center"!=d&&(s=s>0?s:m),mCom.isPopup||l||(t=t+i.height()>r?r-i.height():t),
i.offset(t+e,s+f)},showReceiveTipLayer=function(a,b){var c=$Element($$.getSingle("#ly_rc_tip")),d=$Element($$.getSingle("#ly_rc_tip_rcv")),e=$Element($$.getSingle("#ly_rc_tip_cancel_naver")),f=$Element($$.getSingle("#ly_rc_tip_cancel_nwe")),g=mcCore.getCookie("WORKS_LOC"),h=$Element($$.getSingle("#ly_rc_tip_help_receive")),i=$Element($$.getSingle("#ly_rc_tip_help_cancel_naver")),j=$Element($$.getSingle("#ly_rc_tip_help_cancel_nwe"));
myCore.receiveTipLayerTab("receive"),"show"==b&&c.visible()&&(b="hide"),"show"===b?(h.hide(),i.hide(),
j.hide(),mcCore.isNaver()?(h.attr("href",nLang.l.receivetip_helplink_receive_naver),i.attr("href",nLang.l.receivetip_helplink_cancel_naver),
h.show(),i.show()):mcCore.isNwe()&&g&&("kr1"===g&&"ko_KR"===cCode||"jp1"===g&&"ja_JP"===cCode)&&(h.attr("href",nLang.l.receivetip_helplink_receive_nwe),
j.attr("href",nLang.l.receivetip_helplink_cancel_nwe),h.show(),j.show()),d.show(),e.hide(),f.hide(),
showLayer(a.element,c,{direction:"",align:""})):c.hide(),elReceiveTipLayer=null},receiveTipLayerTab=function(a){
var b=$Element($$.getSingle("#ly_rc_tip_rcv")),c=$Element($$.getSingle("#ly_rc_tip_cancel_naver")),d=$Element($$.getSingle("#ly_rc_tip_cancel_nwe")),e=$Element($$.getSingle("#ly_rc_tip_tab_rcv")),f=$Element($$.getSingle("#ly_rc_tip_tab_cancel"));
b.hide(),c.hide(),d.hide(),e.removeClass("selected"),f.removeClass("selected"),"receive"===a?(b.show(),
e.addClass("selected")):(mcCore.isNaver()?c.show():d.show(),f.addClass("selected"))},showReceiveFilterLayer=function(a,b){
var c={direction:"bottom"==b?"upward":"downward",align:"right"};showLayer(a.element,"ly_read_filter_item",c);
},selectFilterRcpt=function(a,b){var c=$$.getSingle("#changeViewFilterLayer .selector").children.length,d=mCom.nCurrentPage;
for(i=0;c>i;i++)$Element($$.getSingle("#changeViewFilterLayer .selector").children[i]).removeClass("selected");
$Element(a.element.parentNode).addClass("selected"),$Element("ly_read_filter_item").hide(),mCom.curRCPTType=b,
mlCore.updateList(a,2,b,d),c=d=null},showCancelSentFailLayer=function(a){var b=$Element($$.getSingle("#ly_fail_cancel_send"));
b.visible()?b.hide():(mCom.aVisibleLayerList.push(b),b.show(),_AdjustLayer(a.element,b,"downward","right")),
b=null},showAlertMessageLayer=function(a,b,c){var d=$Element($$.getSingle("#ly_alert_message"));d.visible()||"hide"==b?d.hide():($Element("alertMessage").html(c),
d.show()),d=null};var j=function(a,b,c){if(c=c||"",!mCom.isPopup){if("hide"==c)return $Element("confirmLayer").hide(),
void mcNotice.notifySelectMailCount(0);$$.getSingle("p._msg").innerHTML=b;try{d&&clearTimeout(d)}catch(e){}
$Element("confirmLayer").opacity("1"),$Element("confirmLayer").show(),d=setTimeout(function(){$Element("confirmLayer").disappear(1);
},3e3),c=null}},k=function(a,b,c){var e;try{e=$Element(mCom.isPopup&&opener&&opener.document?$$.getSingle("#confirmLayer",opener.document):"confirmLayer");
}catch(f){}if(e){if("hide"==a)return void $Element("confirmLayer").hide();$$.getSingle("p._msg",e.$value()).innerHTML=b;
try{d&&clearTimeout(d)}catch(f){}try{mCom.isPopup&&opener&&opener.mCom?opener.mCom.sDeleteMoveCancelInfo=JSON.stringify(c):mCom.sDeleteMoveCancelInfo=JSON.stringify(c);
}catch(f){}e.opacity("1"),e.show(),d=setTimeout(function(){e.disappear(1),mCom.sDeleteMoveCancelInfo="";
},1e4)}},l=function(a,b,c,e){a=a||"";var f;try{f=$Element(mCom.isPopup&&opener&&opener.document?opener.mCom.isPopup&&opener.opener&&opener.opener.document?$$.getSingle("#confirmLayer",opener.opener.document):$$.getSingle("#confirmLayer",opener.document):"confirmLayer");
}catch(g){}if(f){if("hide"==a)return void f.hide();var h=nLang.w.cancel_send_noti;if(!isNaver()){h=h.replace(/\{messageID\}/g,b),
h=c?h.replace("{showMailLink}","display:inline"):h.replace("{showMailLink}","display:none"),$$.getSingle("p._msg",f.$value()).innerHTML=h;
try{d&&clearTimeout(d)}catch(g){}f.opacity("1"),f.show(),d=setTimeout(function(){f.disappear(1)},1e3*(e-1));
}}};showSearchLayer=function(){n(),showSearchLayerBo(),"search"!=mCom.nCurrentFolder&&mfCore.makeSearchLayerBo(),
mlCore.displayReSearchCheckbox()};var n=function(){var a=$A(["ipt_receiver_range","slt_search_folder","ipt_body_range","slt_srch_period"]);
a.map(function(a){var b=$Element(a);b.attach("focus",function(){b.parent().addClass("focus")}),b.attach("blur",function(){
b.parent().removeClass("focus")})})};showSearchLayerBo=function(a){hideAllLayer();var b=$Element($$.getSingle("#detail_search"));
b.visible()||"hide"==a?(b.hide(),$Element("searchHelp").removeClass("selected"),"search"!=mCom.nCurrentFolder&&m.info&&m.info.promotionText&&mCom.elListWrap&&mCom.elListWrap.visible()&&mcCore.getCookie(m.info.promotionText.cookieKey)!=m.info.promotionText.modifyTime&&mcPromotion.showPromotionText(m.info.promotionText)):(b.show(),
$Element("searchHelp").addClass("selected"),$Element("text_promotion").hide()),mcCore.adjustTopOfFlexArea();
},showRelHelp=function(a){var b=$Element($$.getSingle("#helpRelation"));b.visible()?hideAllLayer():(hideAllLayer(),
b.show(),mCom.aVisibleLayerList.push(b),_AdjustLayer(a.element,b,"upward","right"))},showSelectBox=function(){
if(2!=Number(mCom.nCurrentFolder)){var a=$Element($$.getSingle("#ly_select_item")),b=$$.getSingle("#ly_select_item li.highlighted");
if(a.visible())showLayer(null,a.$value());else{var c=$$.getSingle("#listBtnMenu .check_mail a.down");
b&&$Element(b).removeClass("highlighted"),$Element("checkAllBtn").addClass("highlighted");var d={direction:"downward",
align:"left"},e=a.queryAll("LI A");if(e.length>0){var f=new RegExp(nLang.m.mail+"|"+nLang.m.memo,"gi"),g=!mcCore.isNaver()&&(6==Number(mCom.nCurrentFolder)||Number(mCom.nCurrentFolder)>=1e7)?nLang.m.memo:nLang.m.mail;
$A(e).forEach(function(a){a.html(a.html().replace(f,g))})}showLayer(c,a.$value(),d,$$.getSingle("#checkAllBtn > a"));
}}},selectNextItem=function(a,b,c,d){var e=$$("li",a),f=e.length,g=0;for(g;f>g;g++)if($Element(e[g]).hasClass(c)){
if($Element(e[g]).removeClass(c),"down"==b)var h=g+1>=f?g:g+1;else var h=0>g-1?g:g-1;var i=e[h];if($Element(i).addClass(c),
!$Element(i).visible())continue;return void(d||$$.getSingle("a",i).focus())}$Element(e[0]).addClass(c),
d||$$.getSingle("a",e[0]).focus()};var o=function(a,b){if(0==mlCore.getCurMailListLength())return alert(nLang.c.select_mail),
!1;var c=$$.getSingle("#ly_select_mailaction"),d=a.element;"SPAN"===a.element.tagName&&(d=$$.getSingle("!button",a.element));
var e={direction:"bottom"==b?"upward":"downward",align:"left"};if(4!=mCom.nCurrentFolder&&5!=mCom.nCurrentFolder){
var f=$Element(c).query("li.encoding"),g=$$("#ly_select_mailaction #li_mail_down");b?f.hide():f.show().query("a").html(mcCore.getMemoboxString("to_view_lang",mCom.nCurrentFolder));
var h,i=!1;if($Element("listBtnMenu").visible()?mlCore.getCurMailList().forEach(function(a){h="2"==mCom.nCurrentFolder?mlCore.getParentMail(a.mailSN):a,
h.securityLevel&&"NORMAL"!=h.securityLevel||(i=!0)}):(h=mlCore.getCurMailList().get(0),h.securityLevel&&"NORMAL"!=h.securityLevel||(i=!0)),
i)for(var j=0,k=g.length;k>j;j++){var l=$Element(g[j]);l.show()}else for(var j=0,k=g.length;k>j;j++){
var l=$Element(g[j]);l.hide()}f.next()&&f.next().query("a").html(mcCore.getMemoboxString("to_view_origin",mCom.nCurrentFolder));
}showLayer(d,c,e),$Element($$.getSingle("li[@display!=none] a",c)).attr("tab-action","first")},p=function(a){
var b=a.element,c=$$.getSingle("#changeViewFilterLayer"),d=$Element(c);if(d.visible())showLayer(b,c);else{
var e=$$.getSingle(".list_sorting",c);$$.getSingle("li.selected",e)?$Element($$.getSingle("li.selected",e)).removeClass("selected"):null,
$Element($$.getSingle("li[data-viewfilter="+mCom.nCurSortField+"]",e)).addClass("selected"),$ElementList($$("li[data-viewfilter] a",e)).addClass("descend"),
$ElementList($$("li[data-viewfilter] a span",e)).html(nLang.c.descend_sort),1==mCom.nCurSortType&&($Element($$.getSingle("li[data-viewfilter="+mCom.nCurSortField+"] a",e)).removeClass("descend"),
$Element($$.getSingle("li[data-viewfilter="+mCom.nCurSortField+"] a span",e)).html(nLang.c.ascend_sort));
var f=$$.getSingle(".list_filtering",c);if($$.getSingle("li.selected",f)?$Element($$.getSingle("li.selected",f)).removeClass("selected"):null,
mCom.sCurFilterType)$Element($$.getSingle("li[data-viewfilter="+mCom.sCurFilterType+"]",f)).addClass("selected");else{
var g=$Element($$.getSingle("li[data-viewfilter='all']",f));g.hasClass("selected")||g.addClass("selected");
}"14"==mCom.nCurSortField?($ElementList("ul.list_filtering li").addClass("disabled"),$ElementList("ul.list_filtering li.selected").removeClass("disabled")):$ElementList("ul.list_filtering li").removeClass("disabled"),
$Element($$.getSingle("ul[@display=block] li a",c)).attr("tab-action","first"),$Element(e).visible()?$Element($$.getSingle("li:last-child a",e)).attr("tab-action","last"):$Element($$.getSingle("li:last-child a",f)).attr("tab-action","last"),
1==mCom.nCurrentFolder&&($Element($$.getSingle("li[data-viewfilter=tome]",c)).hide(),$Element($$.getSingle("li[data-viewfilter=attach]",c)).addClass("border"));
var h={direction:"downward",align:"right"};showLayer(a.element,c,h,$$.getSingle("li.selected a",c))}
},q=function(a){var b=a.element,c=$$.getSingle("#changeViewTypeLayer"),d=$Element(c);if(d.visible())showLayer(b,c);else{
var e=mlCore.getCurrentViewType();$$.getSingle("li.selected",c)?$Element($$.getSingle("li.selected",c)).removeClass("selected"):null,
$Element($$.getSingle("li[data-viewtype="+e+"]",c)).addClass("selected"),hideAllLayer();var f={direction:"downward",
align:"right"};showLayer(b,c,f,$$.getSingle("li.selected a",c))}},r=function(a){var b=(a.element.parentNode,
$$.getSingle("#changeViewLayoutLayer")),c=$Element(b);if(c.visible())hideAllLayer();else{$$.getSingle("li.selected",b)?$Element($$.getSingle("li.selected",b)).removeClass("selected"):null,
$Element($$.getSingle("li[data-viewlayout="+mCom.vDivideMode+"]",b)).addClass("selected"),hideAllLayer();
var d={direction:"downward",align:"right"};showLayer(a.element,b,d,$$.getSingle("li.selected a",b))}
};showConversationLayer=function(a,b){var c=$Element($$.getSingle("#ly_conversation")),d=a.element;if(c.visible())hideAllLayer();else{
hideAllLayer();var e=$Element($$.getSingle("#conversation_read_btn a",c)),f=$Element($$.getSingle("#conversation_move_btn a",c)),g=$Element($$.getSingle("#conversation_delete_btn a",c));
if("all"==b)$$.getSingle("div.cv_card span.icoRead.no",mCom.elRead)?e.className("_c1(mlCore|readMail|read_conversation|all) _stopDefault").html(nLang.l.read):e.className("_c1(mlCore|readMail|unread_conversation|all) _stopDefault").html(nLang.l.unread),
f.className("_c1(myCore|showMoveLayer|conversation|all) _stopDefault"),g.className("_c1(mlCore|deleteMail|conversation|all) _stopDefault");else{
for(var h=a.element;h&&!$Element(h).hasClass("cv_card");)h=h.parentNode;var i=$Element(h).attr("data-mailsn");
_woConversationMailList.forEach(function(a){return a.mailSN==i?void(_woCurConversationMail=$A([a])):void 0;
},this),$Element(h).hasClass("notRead")?e.className("_c1(mlCore|readMail|read_conversation|"+i+") _stopDefault").html(nLang.l.read):e.className("_c1(mlCore|readMail|unread_conversation|"+i+") _stopDefault").html(nLang.l.unread),
f.className("_c1(myCore|showMoveLayer|conversation|"+i+") _stopDefault"),g.className("_c1(mlCore|deleteMail|conversation|"+i+") _stopDefault");
}c.show(),mCom.aVisibleLayerList.push(c),_AdjustLayer(d,c,"downward","right")}},showCharSetLayer=function(){
var a=mlCore.getCurMailListLength(),b=$Element("ly_charset");if(0==a)return alert(nLang.c.select_mail),
!1;if(a>1)return alert(nLang.c.select_only_one),!1;if("2"==mCom.nCurrentFolder){var c=mlCore.getParentMail(mlCore.getCurMailList().get(0).mailSN);
if(null==c||!c.isSaveSentMail)return alert(nLang.e.mail_not_exist_readreceipt),!1}if(b.visible())hideAllLayer();else{
hideAllLayer(),b.show(),mCom.aVisibleLayerList.push(b);var d=$Element("ly_select_mailaction");if(b.css("left",d.css("left")),
b.css("top",d.css("top")),$Element("container")){var e=parseInt($Element("container").height(),10)-parseInt($Element("footer").height(),10)-parseInt($Element("header").height(),10);
parseInt(b.css("top"),10)+parseInt(b.height(),10)>e&&b.css("top",e-parseInt(b.height(),10)+"px"),e=null;
}}a=b=null},showMoreCharSet=function(){var a=$Element("ly_charset"),b=$Element($$.getSingle("#ly_charset_more"));
b.show(),mCom.aVisibleLayerList.push(b);var c=$Element($$.getSingle("#ly_charset")),d=c.offset();if(d.top=d.top,
d.left=d.left-b.width(),b.offset(d.top,d.left),$Element("container")){var e=parseInt($Element("container").height(),10)-parseInt($Element("footer").height(),10)-parseInt($Element("header").height(),10);
parseInt(b.css("top"),10)+parseInt(a.height(),10)>e&&b.css("top",e-parseInt(a.height(),10)+"px"),e=null;
}c=d=null},showCalendar=function(a,b){"all"==$$.getSingle("#slt_srch_period").value||"ipt_start_date"!=b&&"ipt_end_date"!=b||($$.getSingle("#slt_srch_period").value="input"),
("arrange_start_date"==b||"arrange_end_date"==b)&&($$.getSingle("#arrange_ago_date").disabled=!0,$$.getSingle("#oldmail_period_02").checked=!0,
$$.getSingle("#arrange_start_date").disabled=!1,$$.getSingle("#arrange_end_date").disabled=!1),mcCore.showCalendar(a,b);
},showAutoReplyCalendar=function(a,b){oMail._oEventDispatcher._oController.common.showAutoReplyCalendar(a,b);
},hideAllLayer=function(){if("undefined"!=typeof mcAutoComplete&&mcAutoComplete&&document.activeElement&&"ipt_sender"!=document.activeElement.id&&mcAutoComplete.destroyWatcher(),
$Element("invalidReplytoLayer")&&$Element("invalidReplytoLayer").visible()&&$Element("invalidReplytoLayer").hide(),
!(mCom.aVisibleLayerList.length()<1)){for(var a=mCom.aVisibleLayerList._array,b=0;b<a.length;b++){var c=a[b];
if(c){var d=mCom.aVisibleLayerButtonList.get(b);switch(c.hide(),d&&d.attr("aria-haspopup")&&d.removeClass("open"),
c.$value().id){case"senderNameSuggestLayer":$Element("senderNameSuggestLayerShowLnk").removeClass("on");
break;case"senderAddressSuggestLayer":$Element("senderAddressSuggestLayerShowLnk").removeClass("on");
break;case"skin_set_layer":$Element("wrap").removeClass("skin_"+mfSkin.selectedSkin),$Element("wrap").addClass("skin_"+mEnv.folderSkin);
break;case"ly_sender_info":$ElementList($$("li.context_selected")).removeClass("context_selected");break;
case"select_lang_layer":mrTranslate.closeSelectLayer();break;case"searchHistoryLayer":case"simpleSearchLayer":
$Element($$.getSingle("#cont_fix_area .msearch")).removeClass("infocus"),$Element("delete_all_history").removeClass("selected"),
$Element("SearchHistoryOnOff").removeClass("selected")}}else a.splice(b,1)}mCom.aVisibleLayerList=$A([]),
mCom.aVisibleLayerButtonList=$A([]),mCom.elVisibleLayer=null}};var s=function(){_triggerElem&&(_triggerElem.focus(),
_triggerElem=null)};onClickFolderList=function(a,b){_onClickFolderListBo(a.element,b)},onKeydownFolderList=function(a,b){
13==a.keyCode&&_onClickFolderListBo(a.element.parentNode,b)},_onClickFolderListBo=function(a,b,c){1==Number(b)?$$.getSingle("#mailMoveContBtn").setAttribute("disabled","disabled"):$$.getSingle("#mailMoveContBtn").removeAttribute("disabled");
var d=$$.getSingle("#moveBox_list");if(null!=a&&"LABEL"==a.tagName&&(a=a.parentNode.parentNode),$Element($$.getSingle(".selected",d))&&$Element($$.getSingle(".selected",d)).removeClass("selected"),
_nFolderToMoveMail=b,a?$Element(a).hasClass("fSN_"+b)?$Element(a).addClass("selected"):$Element(a).parent().addClass("selected"):""!==d.innerHTML.trim()&&$Element($$.getSingle(".fSN_"+b,d)).addClass("selected"),
c){for(var e=$$("li",d),f=-1,g=0;g<e.length;g++)$Element(e[g]).hasClass("fSN_"+b)&&(f=g);d.scrollTop=f*$Element(e[0]).height();
}},onMoveLayerKeyboard=function(a,b){_onClickFolderListBo(a,b)},addNewFolder=function(){if(!mfCore.checkFolderCount())return void alert(nLang.f.count_limit_1000);
var a=$$.getSingle("#ipt_newFolderName").value.replace(/(^\s*)|(\s*$)/g,"");if(""==a||a==nLang.f.new_folder)alert(nLang.f.noname),
$("ipt_newFolderName")&&$("ipt_newFolderName").focus();else if(a.length>20)alert(nLang.f.length_limit_20);else if(-1!==a.indexOf("/"))alert(nLang.f.cannot_use_slash_foldername_2);else{
if(isSystemFolderName(a))return;if(mfCore.isExistFolderName(mcCore.replaceSpecialChar(a)))alert(nLang.f.already_exist);else{
var b=mfCore.addNewFolderBo(a);mcCore.requestAjax({fCallback:$Fn(_AddNewFolderCallback,this).bind(a),
oParameter:b,sUrl:"/json/folder/add/"}),$$.getSingle("#ipt_newFolderName").value=""}}a=b=null},_AddNewFolderCallback=function(a,b){
var c=c||window.opener;"OK"!=b.result&&(mCom.isPopup&&mfCore.shouldLazyDrawFolderList()||mfCore.fParseFolderBo(b),
_updateAddNewFolder(a,b.folderList),mCom.isPopup&&c&&c.m&&c.mfCore.fParseFolderBo(b))},mailMove=function(a,b,c){
c=c||"",mlCore.moveMail(null,_nFolderToMoveMail,b,c),hideAllLayer()},checkDuplicate=function(a,b){var c=mlCore.getCurMailList().$value();
if(c=_uniqueAddress(c),c=c.sort(),!a.element.disabled){if(0===c.length)return alert(nLang.c.select_mail),
!1;if(c.length>10)return alert(nLang.l.filter_limit_10_address),!1;_nFolderToMoveMail=b||_nFolderToMoveMail;
for(var d=[],e="",f=!1,g=0;g<c.length;g++){var h=c[g];if(3==h.folderSN)return void(f=!0);d.push(h.fromAddr);
}if(f)return alert(nLang.l.cannot_move_temp_mail),void hideAllLayer();if(e=d.join(String.fromCharCode(31)),
f)return alert(nLang.l.cannot_move_temp_mail),void hideAllLayer();_sMailListToMove=e;var i={fromText:e,
fromCond:"2",tMoveFolder:"Y",folderSN:_nFolderToMoveMail||0,addrLength:c.length};_oMoveMailOption=i,
mcCore.requestAjax({fCallback:$Fn(_CheckDuplicateCallback,this).bind(null),oParameter:i,sUrl:"/json/option/filter/checkExist/"
}),hideAllLayer()}},_uniqueAddress=function(a){var b=[];if(a)for(var c=0;c<a.length;c++){for(var d=a[c],e=!1,f=0;f<b.length;f++)b[f].fromAddr===d.fromAddr&&(e=!0);
e||b.push(d)}return b},execContinueMove=function(a,b){if(b)mcCore.requestAjax({fCallback:$Fn(function(){},this).bind(),
oParameter:b,sUrl:"/json/option/filter/add/"});else{var c=1,d=$$.getSingle("#check_cleanup_option").checked;
mCom.isDuplicateMove=!0,mlCore.moveMail(null,_nFolderToMoveMail,c,d),d=c=null}},changeDuplicateRule=function(){
hideAllLayer();var a=_oMoveMailOption;a.retroactivity||(a.retroactivity=$$.getSingle("#check_cleanup_option_dup").checked?"Y":"N"),
mcCore.requestAjax({fCallback:$Fn(function(){},this).bind(a),oParameter:a,sUrl:"/json/option/filter/add/"
}),"CLEAN_MOVE"==a.fromLayer||_ChangeDuplicateRuleCallback()},showSenderInfo=function(a,b){if(mcCore.isNcs()&&b&&mEnv.mailDomainList){
for(var c=mEnv.mailDomainList.split(","),d=b.split("@")[1],e=!0,f=0;f<c.length;f++)c[f]===d&&(e=!1);if(e)return void myContextMenu.showSenderContextLayer(a,"read");
}if(b);else{var g=mlCore.getCurMailListLength();if(g>1)return alert(nLang.c.select_only_one),!1;mlCore.getCurMailList().$value().length>0&&(b=mlCore.getCurMailList().$value()[mlCore.getCurMailListLength()-1].fromAddr);
}if(!b)return alert(nLang.l.no_sender_receiver_address),void hideAllLayer();b=encodeURI(b).replace(/#/g,"%23");
var h=mCom.sContactURLPrefix+mEnv.rootDomain;("local"==mCom.serverEnv||"dev"==mCom.serverEnv)&&(h="http://test.contact.worksmobile.com");
var i=h+"/domain/selectDlGroupCompositionsPopUp.nhn?email="+b+"&domainEmail="+mEnv.mailAddress+"&worksService=mail";
mcCore.openPopupWindow(i,"SEARCHEMP","width=1126,height=740,resizable=yes,toolbar=no,menubar=no,location=no,scrollbars=yes"),
hideAllLayer()},showReceiverInfo=function(){var a=mlCore.getCurMailListLength();if(a>1)return alert(nLang.c.select_only_one),
!1;var b=mlCore.getCurMailList().$value()[mlCore.getCurMailListLength()-1];sEmail=mCom.isPopup?b.toAddress.email||"":b.toAddr||b.email||"",
sEmail=sEmail.replace(/#/g,"%23");var c=mCom.sContactURLPrefix+mEnv.rootDomain;("local"==mCom.serverEnv||"dev"==mCom.serverEnv)&&(c="http://test.contact.works.worksmobile.com");
var d=c+"/domain/selectDlGroupCompositionsPopUp.nhn?email="+sEmail+"&domainEmail="+mEnv.mailAddress+"&worksService=mail";
mcCore.openPopupWindow(d,"SEARCHEMP","width=1126,height=740,resizable=yes,toolbar=no,menubar=no,location=no,scrollbars=yes"),
hideAllLayer()},clickShowMimeLayer=function(a,b){var c=mlCore.getCurMailListLength();if(0==c)return alert(nLang.c.select_mail),
!1;if(c>1)return alert(nLang.c.select_only_one),!1;if("2"==mCom.nCurrentFolder){var d=mlCore.getParentMail(mlCore.getCurMailList().get(0).mailSN);
if(null==d||!d.isSaveSentMail)return alert(nLang.e.mail_not_exist_readreceipt),!1}b=b||"0";var e=mlCore.getCurMailList().$value()[0].mailSN,f={
mailSN:e,fullMime:b};mcCore.requestAjax({fCallback:$Fn(_ClickShowMimeLayerCallback,this).bind(b),oParameter:f,
sUrl:"/json/read/viewMime/"})},scrapMailToBlog=function(){hideAllLayer();var a=mlCore.getCurMailListLength();
if(0==a)return alert(nLang.c.select_mail),!1;if(a>1)return alert(nLang.c.select_only_one),!1;var b=mlCore.getCurMailList().get(0).subject,c=mlCore.getCurMailList().get(0).mailSN;
if(b=b.match(/^\s*$/)?nLang.l.no_title:mcCore.restoreSpecialChar(b),"2"==mCom.nCurrentFolder){var d=mlCore.getParentMail(c);
if(null==d||!d.isSaveSentMail)return void alert(nLang.e.mail_not_exist_readreceipt)}var e="/blog/scrapBlogForm?mailSN="+c+"&subject="+encodeURIComponent(b);
window.open(e,"BLOG_SAVE","width=500,height=510,top=10,left=10,toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0");
},downloadMail=function(){if(hideAllLayer(),0==mlCore.getCurMailListLength())return alert(nLang.c.select_mail),
!1;var a=[],b=-1,c="",d=!1,e=!1;if(mlCore.getCurMailList().forEach(function(c){var f=mlCore.getParentMail(c.mailSN);
return $Element("listBtnMenu").visible()&&f&&f.securityLevel&&"NORMAL"!=f.securityLevel?void(e=!0):"2"==mCom.nCurrentFolder&&(f&&null==f||!f.isSaveSentMail)?void(d=!0):void(a[++b]=c.mailSN);
}),$Element("listBtnMenu").visible()&&e&&alert(nLang.e.no_security_download),d)return alert(nLang.e.mail_not_exist_readreceipt),
!1;if(a.length>80)return alert(nLang.l.disable_save_mail_over_count),!1;c=a.length>1?"/mime/download/plural?mailSN=":"/mime/download/each/?mailSN=";
for(var f=0;f<a.length;f++)"c"==a[f][0]&&(a[f]=a[f].slice(1));return $("checkVirusArea").src=window.location.protocol+"//"+mEnv.downloadServerInfo+c+a.join(";"),
!0},checkPeriod=function(a){var b,c=a.element,d=c.value,e=mCom.sDefaultDateFormat||"YYYYMMDD";hideAllLayer(),
b=moment(c.value,e),b.isValid()||(d=moment().format(e),c.value=d),mCalendar._drawCalendar(d,c.id),checkPeriodBo(a),
$$.getSingle("#slt_srch_period").value="input",mUtil.setSelectedOption($$.getSingle("#slt_srch_period"));
},checkPeriodBo=function(a){var b="",c="";if(mCom.isPopup){if(a&&(a.value.length<8||null!=a.value.match(/\D/g)))return void alert(nLang.c.date_length_8);
b=$$.getSingle("#calStartDate"),c=$$.getSingle("#calEndDate")}else b=$$.getSingle("#ipt_start_date"),
c=$$.getSingle("#ipt_end_date");var d=b.value,e=d.split("-").join(""),f=c.value,g=f.split("-").join("");
e>g&&""!=e&&""!=g&&(b.value=f,c.value=d)},printMail=function(){var a=mlCore.getCurMailListLength();if(0==a)return alert(nLang.c.select_mail),
!1;if(a>1)return alert(nLang.c.select_only_one),!1;var b=mCom.charset||"",c=mCom.isPopup?"_self":"_blank";
window.open("/read/popup/?nMailId="+mlCore.getCurMailList().$value()[0].mailSN+"&print=true&charset="+b,c,"width=900,height=650,resizable=yes,scrollbars=yes");
},showLayer=function(a,b,c,d,e,f){var g=$Element(a),h=$Element(b);if(h.visible())return hideAllLayer(),
mCom.elLayerPopupBtn&&mCom.elLayerPopupBtn.focus(),void(mCom.elLayerPopupBtn=null);if(f||hideAllLayer(),
h.show(),c?_AdjustLayer(a,h,c.direction,c.align):_AdjustLayer(a,h,"screen-center","screen-center"),!d||"A"!=d.tagName&&"BUTTON"!=d.tagName&&"INPUT"!=d.tagName){
for(var i=$$("a",h),j=0;j<i.length;j++)if(i[j].offsetHeight>0){d=i[j];break}if(!d){i=$$("button",h);for(var j=0;j<i.length;j++)if(i[j].offsetHeight>0){
d=i[j];break}}}e||(mCom.aVisibleLayerList.push(h),mCom.aVisibleLayerButtonList.push(g)),g&&g.attr("aria-haspopup")&&g.addClass("open"),
mCom.elLayerPopupBtn=a,mCom.elVisibleLayer=b,d&&$Element(d).visible()&&d.focus()},hideLayer=function(a,b,c){
var d=b?$Element(b):$Element($$.getSingle("!.dh_layer",a.element))||$Element($$.getSingle("!.setup_layer",a.element)),e=myContextMenu.getTriggerBtn();
d&&d.hide(),c?c.focus():e?e.focus():_triggerElem&&_triggerElem.focus()},doLoginValidation=function(){
var a=$$.getSingle("#pt-login-username-textbox"),b=$$.getSingle("#pt-login-userpassword-textbox");if(""==a.value)return a.focus(),
!1;if(""==b.value)return b.focus(),!1;$$.getSingle("#saveid").checked?mcCore.setCookie("saveid",a.value,900,"","."+mEnv.rootDomain):mcCore.setCookie("saveid","",0,"","."+mEnv.rootDomain);
var c={target:"-SM-"+window.location.protocol+"//mail."+mEnv.rootDomain+"/checkLogin",smauthreason:"0",
USER:a.value,PASSWORD:b.value},d={callback:$Fn(_makeObjectForDoLoginValidation,this).bind(),oParameter:c
},e="/siteminderagent/forms/login.fcc",f=$Ajax(e,{onload:$Fn(function(a){d.callback(a.text()),oResult=null;
}).bind()});return f.request(d.oParameter),f=null,a.value="",b.value="",mcCore.hideLoginLayer(),!1},
_makeObjectForDoLoginValidation=function(){var a={};mcCore.requestAjax({fCallback:$Fn(_makeObjectForAfterLoginValidation,this).bind(),
oParameter:a,sUrl:"/checkLogin/"})},_makeObjectForAfterLoginValidation=function(a){"OK"!=a.Result?mcCore.showLoginLayer():(mcCore.hideLoginLayer(),
mCom.isPopup||mCom.oCheckNewMailInterval?mCom.isWrite&&mwCore.setAutoSaveTimer():mCom.oCheckNewMailInterval=setInterval($Fn(mcCore.checkNewMail,this).bind(),mCom.nNewMailCheckPeriod));
},showFakeNotiLayer=function(a,b){var c=$Element("ly_fakemail_help");c&&("show"===b?(hideAllLayer(),
c.show(),mCom.aVisibleLayerList.push(c),_AdjustLayer(a.element,c,"downward","absolute-center")):hideAllLayer());
},showSpamLayer=function(a,b,c){var d=a.element;if(!b||"bottom"==b){if(0==mlCore.getCurMailListLength())return alert(nLang.c.select_mail),
!1;if(mlCore.getCurMailListLength()>80)return alert(nLang.l.disable_report_mail_over_count),!1}if("N"==mEnv.spamLayerView)return"bottom"==b&&(b=null),
void mlCore.submitDeleteSpam(a,b,c);var e,h,i=mlCore.getCurMailList(),j=b?mlCore.getMailCategory(b):-1;
if(j>0?e=j:1===i.length()&&(e=i.get(0).category),e)switch(e){case f.BILL_CODE:h="N"===mEnv.billUse?"/json/option/useBillFolder/get":"";
break;case f.NAVERCAFE_CODE:h="N"===mEnv.cafeUse?"/json/option/useCafeFolder/get":"";break;case f.SNSNOTI_CODE:
h="N"===mEnv.snsUse?"/json/option/useSNSFolder/get":"";break;case f.NEWSLETTER_CODE:case f.SHOP_CODE:
h="N"===mEnv.promotionUse?"/json/option/useShopFolder/get":""}mcCore.requestAjax(h?{fCallback:$Fn(u,this).bind(d,b,c,e),
sUrl:h}:{fCallback:$Fn(_ShowSpamLayerCallback,this).bind(d,b,c),oParameter:{},sUrl:"/json/spam/info/"
}),_showSpamLayer=!0,g=a.element};var t=function(){var a=$$.getSingle(".do_spam",$$.getSingle("#listBtnMenu"));
a&&a.focus(),hideAllLayer()},u=function(a,b,c,d,e){switch(d){case f.BILL_CODE:"N"===e.useBill&&v(a,b,c,d);
break;case f.NAVERCAFE_CODE:"N"===e.useCafe&&v(a,b,c,d);break;case f.SNSNOTI_CODE:"N"===e.useSNS&&v(a,b,c,d);
break;case f.NEWSLETTER_CODE:case f.SHOP_CODE:"N"===e.useShop&&v(a,b,c,d)}},v=function(a,b,c,d){var e=$Element("usingSmartMailboxGuideLayer");
e.data("mail-info",{category:d,mailSN:b,mailAddr:c}),b&&"bottom"!==b?(e.show(),_AdjustLayer($$.getSingle("#previewMailLayer"),e,"overlay")):(hideAllLayer(),
e.show(),_AdjustLayer(a,e,b&&"bottom"===b?"upward":"downward")),mCom.aVisibleLayerList.push(e)},w=function(){
var a=$Element("usingSmartMailboxGuideLayer"),b=a.data("mail-info"),c=b.category;mcCore.requestAjax({
fCallback:function(){var a,d,e=$Element("completeSmartMailboxAfterSpam"),g=$Element("usingSmartMailboxGuideLayer");
switch(c){case f.BILL_CODE:a=nLang.f.bill,d=f.BILL_FOLDERSN;break;case f.NAVERCAFE_CODE:a=nLang.f.cafe,
d=f.NAVERCAFE_FOLDERSN;break;case f.SNSNOTI_CODE:a=nLang.f.sns,d=f.SNSNOTI_FOLDERSN;break;case f.NEWSLETTER_CODE:
case f.SHOP_CODE:a=nLang.f.shop,d=f.SHOP_NEWS_FOLDERSN}mCom.isPopup&&opener&&opener.mEnv?(opener.mEnv.cafeUse="Y",
opener.mEnv.billUse="Y",opener.mEnv.snsUse="Y",opener.mEnv.promotionUse="Y"):(mEnv.cafeUse="Y",mEnv.billUse="Y",
mEnv.snsUse="Y",mEnv.promotionUse="Y"),mfCore.updateFolder(null,function(){0===mlCore.getCurMailList().length()?mlCore.pushToCurMailList(mlCore.getListObject(b.mailSN)):b.mailSN&&mlCore.getCurMailList().get(0).mailSN!==b.mailSN&&(mlCore.emptyCurMailList(),
mlCore.pushToCurMailList(mlCore.getListObject(b.mailSN))),mlCore.moveMail(null,d,0,0,function(){return mCom.isPopup&&opener?(alert(nLang.f.smartmail_setting1+a+nLang.f.smartmail_setting2),
void window.close()):($Element("mailboxName").$value().innerHTML=a,hideAllLayer(),e.css({top:g.css("top"),
left:g.css("left")}),e.show(),void setTimeout(function(){mCom.aVisibleLayerList.push(e)},1e3))})})},
oParameter:{},sUrl:"/json/option/useSmartFolder"})},x=function(){var a=$Element("usingSmartMailboxGuideLayer"),b=a.data("mail-info"),c=b.mailSN,d=b.mailAddr;
mcCore.requestAjax({fCallback:$Fn(_ShowSpamLayerCallback,this).bind(g,c,d),oParameter:{},sUrl:"/json/spam/info/"
})},y=function(){hideAllLayer()};_ShowSpamLayerCallback=function(a,b,c,d){var e=$Element("alertSpamLayer");
b&&"bottom"!==b?(e.show(),_AdjustLayer($$.getSingle("#previewMailLayer"),e,"overlay"),$Element("submitDeleteSpamBtn").className("b _c1(mlCore|submitDeleteSpam|"+b+"|"+c+") _ccrf(clt|*s.confirm) _stopDefault")):(e.show(),
$Element("submitDeleteSpamBtn").className("b _c1(mlCore|submitDeleteSpam) _ccrf(clt|*s.confirm) _stopDefault"),
mcCore.isNaver()?_AdjustLayer(a,e,b&&"bottom"===b?"upward":"downward"):_AdjustLayer(a,e,b&&"bottom"===b?"upward":"downward","center",-25),
hideAllLayer()),mCom.aVisibleLayerList.push(e),$$.getSingle("#spam_radio1").focus(),"0"===d.SpamOption.spamMoveType?$$.getSingle("#spam_radio1").checked=!0:$$.getSingle("#spam_radio2").checked=!0,
$$.getSingle("#spamGuide").innerHTML='<input id="checkReject" class="input" type="checkbox" onclick="ccrf(this, \'clt\', \'*s.blockmail\', event)"><label for="checkReject">'+nLang.c.reject_selected_mail_address+"</label> (<strong>"+d.SpamOption.rejectListCount+" "+nLang.c.unit2+"</strong> / 1000 "+nLang.c.unit2+")",
$$.getSingle("#checkReject").checked=!0,$$.getSingle("#checkReject").disabled=!1;var f=mlCore.getCurMailList();
for(i=0,len=f.length();len>i;i++)f.get(i).fromAddr===mEnv.primaryEmailAddr&&($$.getSingle("#checkReject").disabled=$$.getSingle("#checkReject").disabled||!0);
b&&"bottom"!==b&&c===mEnv.primaryEmailAddr&&($$.getSingle("#checkReject").disabled=!0),$$.getSingle("#chk_automove2").checked=!0,
mcCore.isNaver()&&"N"===d.SpamOption.autoMove?$Element($$.getSingle("!div",$$.getSingle("#chk_automove2"))).show():$Element($$.getSingle("!div",$$.getSingle("#chk_automove2"))).hide(),
e=el=null},showAddRejectLayer=function(a,b){if(0==mlCore.getCurMailListLength())return alert(nLang.c.select_mail),
!1;if(mlCore.getCurMailListLength()>80)return alert(nLang.l.disable_reject_mail_over_count),!1;if(1==mlCore.getCurMailListLength()&&""==mlCore.getCurMailList().$value()[0].fromAddr)return alert(nLang.l.no_add_address),
!1;var c=null,c=$Element("layerRejectMail");c.show(),mCom.aVisibleLayerList.push(c),_AdjustLayer(a.element,c,b?"upward":"downward");
var d=mlCore.getCurMailList().$value()[0].fromAddr,e=d.split("@")[1];e=""==d?nLang.l.no_address:e,d=""==d?nLang.l.no_address:d;
var f=mlCore.getCurMailList().$value().length>1?nLang.c.more_numbers_exit.replace("{Number}",Number(mlCore.getCurMailList().$value().length-1)):"";
$$.getSingle(".rejectMailText",c.$value()).innerHTML=d+f,d=e=c=null},submitAddReject=function(){var a=_submitAddRejectBo();
mcCore.requestAjax({fCallback:$Fn(_SubmitAddRejectCallback,this).bind(a.addItems),oParameter:a,sUrl:"/json/option/rejectAddress/set"
})},_submitAddRejectBo=function(){var a=$H(),b="";for(i=0;i<mlCore.getCurMailList().$value().length;i++){
var c=mlCore.getCurMailList().$value()[i].fromAddr;a.add(c,1)}for(a.remove(""),a.remove("undefined"),
a.remove(mcCore.getNaverEmailAddress()),i=0;i<a.keys().length;i++)b+=mcCore.trim(a.keys()[i].toLowerCase()),
1!=a.keys().length&&(b+=";");var d={addItems:mcCore.restoreSpecialChar(b)};return b=null,d},_SubmitAddRejectCallback=function(a){
var b=$Element("layerRejectMail").offset(),c=$Element("layerRejectMailResult");hideAllLayer(),c.show(),
c.offset(b.top,b.left),mCom.aVisibleLayerList.push(c),a=a.replace(/\;/g,"<br>"),$$.getSingle("#layerRejectMailResult .value").innerHTML=a,
b=c=null},showDownloadAllLayer=function(a,b){var c=$$.getSingle("#save_all");if(null!=$$.getSingle(".attfile_area")&&null!=c||mcCore.isAttachView()){
b||(b=mCom.nCurReadingMailSN);var d=$Element($$.getSingle("#ly_download_all"));if(d.visible())d.hide();else{
var e;if(d.show(),"keydown"===a.type){var f=$Element(c),g=$ElementList(".cv_card").$value();if($$.getSingle(".cv_card")){
if(_isAllCardFolded(g))return void d.hide();_isAnyCardSelected(g)&&(f=$Element($$.getSingle("div.cv_card.selected a#save_all")));
}if($$.getSingle(".listWrap_attach")&&(f=$Element($$.getSingle("div.viewWrap a#save_all"))),!f||_isSaveAllBtnNotInView(f))return void d.hide();
e=f}else e=a.element;_AdjustLayer(e,d);var h=$Element($$.getSingle("#ly_download_all li.selected"));h&&h.removeClass("hover"),
$$.getSingle("#download_all_pc").innerHTML='<a href="javascript:;" class="_c1(myCore|checkDownloadAll|pc|'+b+') _ccr(rda.saveall) _stopDefault" onmouseover="this.focus()">'+nLang.r.download_all_pc+"</a>";
var i=$Element("download_all_ndrive");mcCore.isDisplayDrive()?(i.html('<a href="javascript:;" class="_c1(myCore|checkDownloadAll|cloud|'+b+') _ccr(rda.ndrive) _stopDefault" onmouseover="this.focus()">'+(mcCore.isNaver()?nLang.r.download_all_ndrive:mcCore.isNcs()?nLang.r.download_all_officedrive:nLang.r.download_all_worksdrive)+"</a>"),
i.show()):$Element("download_all_ndrive").hide(),$$.getSingle("#download_all_pc > a").focus(),$Element("download_all_pc").addClass("hover"),
mCom.aVisibleLayerList.push(d)}}},_isAllCardFolded=function(a){for(var b=0;b<a.length;b++)if(!a[b].hasClass("fold"))return!1;
return!0},_isAnyCardSelected=function(a){for(var b=0;b<a.length;b++)if(a[b].hasClass("selected"))return!0;
return!1},_isSaveAllBtnNotInView=function(a){var b=($Element("nav_snb"),$Element("footer")),c=$Element("cont_fix_area"),d=($Element($$.getSingle("div.xBar")),
$Element($$.getSingle("div.divContent"))),e=d.offset(),f=a.offset(),g=c.offset().top+c.height(),h=e.left<0?0:d.offset().left,i=3,j=d.offset().top>c.offset().top?f.top<e.top-a.height()+i:f.top<g-a.height()+i,k=b?f.top>b.offset().top:f.top>window.innerHeight-i,l=f.left+a.width()<h,m=f.left>window.innerWidth;
return j||k||m||l},_useSmartMailboxCallback=function(a,b){hideAllLayer(),"OK"===b.Result&&(7==a?mEnv.billUse="Y":8==a?mEnv.cafeUse="Y":9==a?mEnv.snsUse="Y":10==a&&(mEnv.promotionUse="Y"),
mfCore.updateFolder(),_showSmartCompleteLayer())},_showSmartCompleteLayer=function(){var a=$Element("setSmartFolderCompleteLayer"),b=$Element("smart_mailbox").offset();
mCom.aVisibleLayerList.push(a),$$.getSingle("#setSmartFolderCompleteLayer button").focus(),a.css({top:b.top-160+"px",
left:$Element("nav_snb").width()+9+"px"}),a.show()},_MoveBarCallback=function(a){mEnv.listAreaHeight=a.listAreaHeight,
mEnv.listAreaWidth=a.listAreaWidth},showFolderAction=function(){if(elFolderActionLayer=$Element($$.getSingle("#ly_folderAction")),
mCom.nCurrentFolder<100?($Element($$.getSingle("._renameCase")).hide(),$Element($$.getSingle("._deleteCase")).hide()):($Element($$.getSingle("._renameCase")).show(),
$Element($$.getSingle("._deleteCase")).show()),elFolderActionLayer.visible())hideAllLayer();else{hideAllLayer(),
elFolderActionLayer.show(),mCom.aVisibleLayerList.push(elFolderActionLayer);var a=$Element($$.getSingle("#folder_action")),b=a.offset();
b.top=b.top+15,b.left=b.left,elFolderActionLayer.offset(b.top,b.left)}},_updateAddNewFolder=function(a,b){
var c="";for(a=mcCore.replaceSpecialChar(a),i=0;i<b.length;i++)if(b[i].folderName==a){c=b[i].folderSN;
break}var d=$$.getSingle(".moveBox_list",$("moveMailLayer")),e=$$.getSingle(".fSN_"+c,d);e||mfCore.addFolderToMoveLayer(c,a),
_onClickFolderListBo(null,c,!0)},_ClickShowMimeLayerCallback=function(a,b){hideAllLayer();var c=$Element($$.getSingle("#viewmime")),d='<textarea cols="60" rows="10" class="originBox" readonly="readonly">'+b.mailMime+"</textarea>";
$Element("viewMimeContents").html(d),"1"==a?($Element("titlemime").html(nLang.l.view_mime),$Element("buttonmime").className("_c1(myCore|clickShowMimeLayer) view_header_mime _stopDefault"),
$Element("buttonmime").html(nLang.l.view_header)):($Element("titlemime").html(nLang.l.view_header),$Element("buttonmime").className("_c1(myCore|clickShowMimeLayer|1) view_full_mime _stopDefault"),
$Element("buttonmime").html(nLang.l.view_mime)),c.show(),_AdjustLayer(null,c,"screen-center","screen-center"),
$$.getSingle("#viewMimeContents").scrollTop="0",mCom.aVisibleLayerList.push(c),c=d=null},_CheckDuplicateCallback=function(a,b){
a&&(_oMoveMailOption=a),_oMoveMailOption.duplicatedSN=b.DuplicateSN,_nRuleLimitCount=b.MaxFilterCount;
var c=(b.FromLayer,Number(b.Count)),d=0,e=0;if(b.DuplicateSN){var f=String(b.DuplicateSN).split(";");
e=f.length;for(var g=0;g<f.length;g++)"-1"!=f[g]&&(d+=1)}return d>0?c>=_nRuleLimitCount&&e-d>0?showOverLimitRuleLayer():c+(e-d)>_nRuleLimitCount?_showPluralOverLimitRuleLayerBo(Number(b.Count)):"CLEAN_MOVE"==b.FromLayer?showDuplicateRuleLayer("CLEAN_MOVE"):showDuplicateRuleLayer():c>=_nRuleLimitCount?showOverLimitRuleLayer():c+(e-d)>_nRuleLimitCount?_showPluralOverLimitRuleLayerBo(Number(b.Count)):"CLEAN_MOVE"==b.FromLayer?myCore.execContinueMove(null,a):_showContinueMoveMailLayerBo(b),
c=d=e=null,!0},showOverLimitRuleLayer=function(a){var b=$Element("ly_rule_over_limit_index"),c=$Element($$.getSingle("#ly_rule_over_limit_index .btn_autoindex"));
if(b.show(),$Element("contMoveTxt").html(mcCore.findFolderName(_nFolderToMoveMail,!1)),"option"==a){
var d=$Element("filterLayer");_AdjustLayer(d,b,"center","center"),c.hide(),elFilterTable=nOffsetTop=nOffsetLeft=null;
}else if("context"==a);else{var e=$Element(mCom.isReading&&"list"==mCom.vDivideMode?$$.getSingle("#readBtnMenu .do_move"):$$.getSingle(".do_move"));
_AdjustLayer(e,b),c.show(),e=null}mCom.aVisibleLayerList.push(b),b=null},_showContinueMoveMailLayerBo=function(){
var a=$Element("ly_move_mail_continue"),b=$$.getSingle(mCom.isReading&&"list"==mCom.vDivideMode?"#readBtnMenu .do_move":".do_move");
a.show(),$Element("contMoveTxt").html(mcCore.findFolderName(_nFolderToMoveMail,!1)),$$.getSingle("#check_cleanup_option").checked=!1,
$$.getSingle("#check_cleanup_option").disabled=_oMoveMailOption.addrLength>1?!0:!1,_AdjustLayer(b,a),
mCom.aVisibleLayerList.push(a),$("execMoveMailContBtn").focus(),a=b=null},showDuplicateRuleLayer=function(a,b,c,d){
var e=$Element("ly_rule_duplicate_index"),f=$Element($$.getSingle("#ly_rule_duplicate_index .btn_autoindex")),g=$$.getSingle("#check_cleanup_option_dup"),h=$Element($$.getSingle("#ly_rule_duplicate_index .addButton button.b"));
if(e.show(),h.$value().focus(),_oMoveMailOption.checked=!1,"option"==a){var i=$$.getSingle("#filterLayer");
_AdjustLayer(i,e,"center","center"),h.className("b _c1(moFilter|beforeAddFilter|"+b+"|"+c+"|"+d+") _ccr(cfa*l.save) _stopDefault"),
f.hide(),$Element($$.getSingle("!p",g)).hide(),i=null}else if("CLEAN_MOVE"==a){var j=$$.getSingle(mCom.isReading&&"list"==mCom.vDivideMode?"#readBtnMenu .do_move":".do_move");
_AdjustLayer(j,e),h.className("b _c1(myCore|changeDuplicateRule) _stopDefault"),f.show(),$Element($$.getSingle("!p",g)).hide(),
j=null}else if("context"==a)$Element($$.getSingle("!p",g)).hide(),h.className("b _c1(myContextMenu|addFilterRule|true|"+b+") _stopDefault");else{
var j=$$.getSingle(mCom.isReading&&"list"==mCom.vDivideMode?"#readBtnMenu .do_move":".do_move");_AdjustLayer(j,e),
h.className("b _c1(myCore|changeDuplicateRule) _stopDefault"),f.show(),$Element($$.getSingle("!p",g)).show(),
j=null}g.disabled=_oMoveMailOption.addrLength>1?!0:!1,mCom.aVisibleLayerList.push(e),e=f=h=null},_showPluralOverLimitRuleLayerBo=function(a){
var b=$Element("ly_rule_plural_over_limit_index");b.show();var c=nLang.o.over_limit_add_filter.replace("{CurrentCount}",a).replace("{RestCount}",_nRuleLimitCount-a);
$Element($$.getSingle("#ly_rule_plural_over_limit_index .p7")).html(c);var d=$$.getSingle(mCom.isReading&&"list"==mCom.vDivideMode?"#readBtnMenu .do_move":".do_move");
_AdjustLayer(d,b),mCom.aVisibleLayerList.push(b),b=c=d=null},_ChangeDuplicateRuleCallback=function(){
mCom.isDuplicateMove=!0,mailMove()},_showCenterPositionBo=function(a){var b=parseFloat(a.clientHeight)/2,c=parseFloat(a.clientWidth)/2,d=window.innerHeight||document.documentElement.offsetHeight,e=Math.floor(Math.round(d/2+document.body.scrollTop)-b),f=Math.floor(Math.round(document.documentElement.offsetWidth/2+document.body.scrollLeft)-c);
e=0>e?0:e,f=0>f?0:f,a.style.top=e+"px",a.style.left=f+"px",b=c=d=e=f=null},showShortcutLayer=function(){
hideAllLayer();var a=$Element("shortcut_layer"),b={inboxShowKey:$$.getSingle("#shortcut_layer #sc_ly_folder_00"),
myboxShowKey:$$.getSingle("#shortcut_layer #sc_ly_folder_01"),sentBoxShowKey:$$.getSingle("#shortcut_layer #sc_ly_folder_02"),
receiptBoxShowKey:$$.getSingle("#shortcut_layer #sc_ly_folder_03"),draftBoxShowKey:$$.getSingle("#shortcut_layer #sc_ly_folder_04"),
spamBoxShowKey:$$.getSingle("#shortcut_layer #sc_ly_folder_05"),trashBoxShowKey:$$.getSingle("#shortcut_layer #sc_ly_folder_06"),
lnbToggleKey:$$.getSingle("#shortcut_layer #sc_ly_folder_11"),spamBoxEmptyKey:$$.getSingle("#shortcut_layer #sc_ly_folder_09"),
trashBoxEmptyKey:$$.getSingle("#shortcut_layer #sc_ly_folder_10"),allMailShowKey:$$.getSingle("#shortcut_layer #sc_ly_list_00"),
unreadMailShowKey:$$.getSingle("#shortcut_layer #sc_ly_list_01"),moveUpKey:$$.getSingle("#shortcut_layer #sc_ly_list_02"),
moveDownKey:$$.getSingle("#shortcut_layer #sc_ly_list_03"),prevPageMoveKey:$$.getSingle("#shortcut_layer #sc_ly_list_04"),
nextPageMoveKey:$$.getSingle("#shortcut_layer #sc_ly_list_05"),firstPageMoveKey:$$.getSingle("#shortcut_layer #sc_ly_list_06"),
lastPageMoveKey:$$.getSingle("#shortcut_layer #sc_ly_list_07"),mailReadKey:$$.getSingle("#shortcut_layer #sc_ly_list_08"),
popupMailReadKey:$$.getSingle("#shortcut_layer #sc_ly_list_09"),popupCloseKey:$$.getSingle("#shortcut_layer #sc_ly_list_10"),
allMailSelectKey:$$.getSingle("#shortcut_layer #sc_ly_list_11"),selectOptionShowKey:$$.getSingle("#shortcut_layer #sc_ly_list_12"),
replyKey:$$.getSingle("#shortcut_layer #sc_ly_read_00"),replyAllKey:$$.getSingle("#shortcut_layer #sc_ly_read_01"),
forwardKey:$$.getSingle("#shortcut_layer #sc_ly_read_02"),mailMoveKey:$$.getSingle("#shortcut_layer #sc_ly_read_03"),
mailDeleteKey:$$.getSingle("#shortcut_layer #sc_ly_read_04"),readMailMarkKey:$$.getSingle("#shortcut_layer #sc_ly_read_05"),
importantMailMarkKey:$$.getSingle("#shortcut_layer #sc_ly_read_06"),printKey:$$.getSingle("#shortcut_layer #sc_ly_read_07"),
listShowKey:$$.getSingle("#shortcut_layer #sc_ly_read_08"),prevMailReadKey:$$.getSingle("#shortcut_layer #sc_ly_read_09"),
nextMailReadKey:$$.getSingle("#shortcut_layer #sc_ly_read_10"),attachAllSaveKey:$$.getSingle("#shortcut_layer #sc_ly_read_11"),
newMailWriteKey:$$.getSingle("#shortcut_layer #sc_ly_write_00"),toMeMailWriteKey:$$.getSingle("#shortcut_layer #sc_ly_write_01"),
sendKey:$$.getSingle("#shortcut_layer #sc_ly_write_02"),saveKey:$$.getSingle("#shortcut_layer #sc_ly_write_03"),
toMeSelectOptionKey:$$.getSingle("#shortcut_layer #sc_ly_write_04"),addressShowKey:$$.getSingle("#shortcut_layer #sc_ly_write_05"),
filePcAttachKey:$$.getSingle("#shortcut_layer #sc_ly_write_06"),helpShowKey1:$$.getSingle("#shortcut_layer #sc_ly_etc_00"),
helpShowKey2:$$.getSingle("#shortcut_layer #sc_ly_etc_01"),searchAreaMoveKey1:$$.getSingle("#shortcut_layer #sc_ly_etc_02"),
searchAreaMoveKey2:$$.getSingle("#shortcut_layer #sc_ly_etc_03")},c={lnbToggleKey:"<CTRL> + <ALT> + L"
},d={};"naver"===mEnv.serviceType&&(b.billBoxShowKey=$$.getSingle("#shortcut_layer #sc_ly_folder_07"),
b.cafeBoxShowKey=$$.getSingle("#shortcut_layer #sc_ly_folder_08"));try{mEnv&&mEnv.shortCut?d=mEnv.shortCut:opener&&opener.m&&opener.m.info&&opener.mEnv&&opener.mEnv.shortCut?d=opener.mEnv.shortCut:parent.opener&&parent.opener.m&&parent.opener.m.info&&parent.opener.mEnv&&parent.opener.mEnv.shortCut&&(d=parent.opener.mEnv.shortCut);
}catch(e){d={}}if("false"==d.useShortCut||0==d.useShortCut?($Element("use_icon").addClass("ico_off"),
$Element("use_icon").removeClass("ico_on")):($Element("use_icon").removeClass("ico_off"),$Element("use_icon").addClass("ico_on")),
a.visible())return a.hide(),void $Element("sendAfterReviewBg").hide();a.show(),$Element("sendAfterReviewBg").show(),
$$.getSingle("#shortcut_layer .btn_close").focus();for(var f in b)b.hasOwnProperty(f)&&mcCore.setShortCutToElement(b[f],"innerHTML",mcCore.replaceSpecialChar(d[f]),mcCore.replaceSpecialChar(c[f])||"");
},showMemoPopup=function(){var a=mlCore.getCurMailListLength();if(a>1)return alert(nLang.c.select_only_one),
!1;if("2"==mCom.nCurrentFolder){var b=getParentMail(_woCurMailList.$value()[0].mailSN);if(null==b||!b.isSaveSentMail)return void alert(nLang.e.mail_not_exist_readreceipt);
}var c=mlCore.getCurMailList().$value();sMailSN=c[0].mailSN,window.open(location.protocol+"//"+location.hostname+"/memo/plugin/popup?mailSN="+sMailSN,"memoWin","width=300,height=300"),
myCore.hideAllLayer()},showEmployeeSearchPopup=function(){var a=$Element($$.getSingle("div.staff_srch")).attr("linkDomain");
if(mcCore.isNcs())var b=$$.getSingle("#employeeSearch");else var b=$$.getSingle("#searchVal");var c=mcCore.trim(b.value);
c==nLang.c.search_employee&&(c=""),b.value=nLang.c.search_employee,b.blur(),mcCore.isNcs()?(a+="?m=getOrgBox&emp.orgSearchKey=7&emp.orgSearchKeyWord="+encodeURI(c)+"&emp.empNm="+encodeURI(c)+"&emp.deptNm="+encodeURI(c)+"&emp.appDuty="+encodeURI(c),
mcCore.openPopupWindow(a,"SEARCHEMP","width=994,height=728,toolbar=no,menubar=no,location=no,scrollbars=yes")):(a+=encodeURI(c),
mcCore.openPopupWindow(a,"SEARCHEMPNWE","width=985,height=652,toolbar=no,menubar=no,location=no,scrollbars=yes"));
},showBackupFolderLayer=function(a,b){mcCore.requestAjax({fCallback:$Fn(_showBackupFolderLayerCallback,this).bind(a),
oParameter:{folderSN:b},sUrl:"/json/folder/backupinfo/"})},_showBackupFolderLayerCallback=function(a,c){
_triggerElem=a.element;var d=$Element(a.element).isChildOf($Element("ly_select_folderaction")),e=$$.getSingle(d?"#backupFolder_layer":"#backupFolder_layer_option"),f=$Element(e);
$$.getSingle(".box_listup strong",e).innerHTML=mcCore.getHumanFileSize(c.totalSize);for(var g="",h='<li><span>{FileName} ({FileSize})</span> <a href="javascript:;" class="utx_btn_b _c1(mfCore|downloadBackupFolder|{FolderSN}|{Start}|{End}|{EncodeFileName}|{MailCount}) _stopDefault"><span class="utx_inrbtn">'+nLang.c.download+"</span></a></li>",i=0;i<c.fileList.length;i++){
var j=c.fileList[i],k={FileName:j.fileName,FileSize:mcCore.getHumanFileSize(j.fileSize),FolderSN:c.folderSN,
Start:j.start,End:j.end,EncodeFileName:escape(j.fileName),MailCount:j.mailCount};g+=mcCore.template(h,k),
j=k=null}if($$.getSingle(".box_listup ul",e).innerHTML=g,"undefined"==typeof window.innerWidth&&(window.innerWidth=document.documentElement.clientWidth,
window.innerHeight=document.documentElement.clientHeight),f.show(),d){var l=$Element($$.getSingle("#nav_snb li[foldersn="+c.folderSN+"]"));
l.offset().top+f.height()<window.innerHeight?f.offset(l.offset().top,l.offset().left+l.width()):f.height()<window.innerHeight?f.offset(window.innerHeight-f.height(),l.offset().left+l.width()):f.offset(l.offset().top+l.height()-f.height(),l.offset().left+l.width());
}else b(f,$Element(a.element.parentNode));mCom.aVisibleLayerList.push(f),z()};var z=function(){var a=$$.getSingle("#backupFolder_layer_option .blind");
a&&a.focus()};resizeSnb=function(a){if(nTestCount++,"mousedown"==a.type)"undefined"==typeof window.innerWidth&&(window.innerWidth=document.documentElement.clientWidth,
window.innerHeight=document.documentElement.clientHeight),document.onselectstart=function(){return!1;
},$Element(document).attach("mousemove",resizeSnb),$Element(document).attach("mouseup",resizeSnb);else if(nTestCount%3==1&&"mousemove"==a.type){
var b=$Event(a).pos(),c=b.pageX-mCom.nWidthOfPnb;251>c?c=251:c>320&&(c=320),mCom.elNavSnb.style.width=c+"px",
mCom.nWidthOfSnb=c,mCom.elContent.style.left=c+Number(mCom.nWidthOfPnb)+"px",$Element(mCom.elContent).width()-mEnv.listAreaWidth<100&&$Element("cont_flex_area").hasClass("list_horizontal")&&(mEnv.listAreaWidth=$Element(mCom.elContent).width()-100,
mCom.elListWrap.css("width",mEnv.listAreaWidth+"px"),mCom.elReadWrap.css("left",mEnv.listAreaWidth+"px")),
mcCore.isAttachView()&&mlCore.initAttachShow()}else if("mouseup"==a.type){document.onselectstart=null,
$Element(document).detach("mousemove",resizeSnb),$Element(document).detach("mouseup",resizeSnb);var d={
folderAreaWidth:parseInt(mCom.elNavSnb.style.width,10)};mcCore.requestAjax({fCallback:$Fn(_resizeSnbCallback,this).bind(d),
oParameter:d,sUrl:"/json/option/folderAreaSize/set/"})}},_resizeSnbCallback=function(a){mEnv.folderAreaWidth=a.folderAreaWidth;
},highlightMenu=function(a){$ElementList($$("#ly_select_item li")).removeClass("highlighted");$Element($$.getSingle("!li",a)).addClass("highlighted"),
a.focus()},openNdriveDownloadAllPopup=function(a){e&&e.close(),e=window.open(window.location.protocol+"//"+window.location.hostname+"/static/blank.html?version=20160822","ndriveUploadPopup","scrollbars=no,toolbar=no,location=no,resizable=no,status=no,menubar=no,width=476,height=360");
for(var b=mCom.oCloudSaveData[a],c=b.keys,d=b.values,f="",g=window.location.protocol+"//"+m.info.ndrive.sNdriveUrl+"/saveFile.nhn",h=0,i=b.keys.length;i>h;h++)f+="<input type='hidden' name='"+c[h]+"' value='"+d[h]+"' />";
var j="";j+="<!DOCTYPE html>",j+='<html lang="ko">',j+="<head></head><body>",j+='<form accept-charset="UTF-8" id="formid" method="post" action="'+g+'">',
j+=f,j+='</form><script type="text/javascript">',j+='document.getElementById("formid").submit()',j+="</script></body></html>";
try{e.document.write(j)}catch(k){setTimeout(function(){e.document.write(j)},500)}},downloadBlocked=function(a,b){
var c=$$.getSingle("#downloadBlockLayer"),d=$$.getSingle("#downloadBlockUrl",c),e=mcCore.getCookie("WORKS_LOC"),f="preview"===b?nLang.e.preview_block_subtitle:nLang.e.download_block_subtitle;
mcCore.isNwe()&&("kr1"===e&&"ko_KR"===cCode||"jp1"===e&&"ja_JP"===cCode)?d.href=nLang.e.help_download_block_url:d&&(d.style.display="none"),
$$.getSingle("p.desc",c).innerHTML=f,showLayer(null,c)},checkDownloadAll=function(a,b,c,d){var e=mCom.oCloudSaveData[c],f=e.blockFileList.length;
if(hideAllLayer(),!d&&f>0)if(e.attachCount===f)downloadBlocked();else{var g=$$.getSingle("#downloadBlockListLayer"),i=mcCore.getCookie("WORKS_LOC"),j="",k="javascript:;",l=mcCore.isNaver()?nLang.e.upload_blocked_extension_naver:nLang.e.upload_blocked_extension,m="pc"===b?nLang.e.download_pc_block_title:nLang.e.download_cloud_block_title,n="b _c1(myCore|checkDownloadAll|"+b+"|"+c+"|true)",o='style="text-decoration:none;cursor:default;"';
mcCore.isNwe()&&("kr1"===i&&"ko_KR"===cCode||"jp1"===i&&"ja_JP"===cCode)&&(k=nLang.e.help_download_block_url,
o='target="_blank"');for(var p=0,q=Math.min(f,120);q>p;p++)j+=h.replace(/\{Filename\}/g,e.blockFileList[p]).replace(/\{Type\}/,l).replace(/\{SupportUrl\}/,k).replace(/\{Target\}/,o);
$$.getSingle(".btn_area button",g).className=n,$Element($$.getSingle("tbody",g)).html(j),$$.getSingle(".block_title",g).innerHTML=m,
showLayer(null,g)}else if("pc"===b){var k=window.location.protocol+"//"+mEnv.downloadServerInfo+"/file/download/all/?mailSN="+c+"&domain="+document.location.host+"&u="+mEnv.mailId;
$$.getSingle("#checkVirusArea").contentWindow.location.href=k}else openNdriveDownloadAllPopup(c)},addToVisibleLayer=function(a){
mCom.aVisibleLayerList.push(a)},removeFromVisibleLayer=function(a){for(var b=mCom.aVisibleLayerList.$value(),c=[],d=0;d<b.length;d++){
var e=b[d];$Element(e)!=a&&c.push(e)}mCom.aVisibleLayerList=$A(c)};var A=function(){$Element($$.getSingle("#nav_snb")).addClass("show_faq_banner");
},B=function(){var a,b=$Element($$.getSingle("#faq_layer_wrapper")),c=$Element($$.getSingle("#faq_layer")),d=$$.getSingle(".first_item",b),e=$Element($$.getSingle("#nav_snb")),f=e.width(),g=(e.height(),
"-9999px"),h=$$.getSingle("#showFaqBtn"),i=h.getBoundingClientRect().bottom;b.visible()||(b.show(),b.css("top",g)),
a=b.height(),b.css("top")!==g?(b.css("top",g),h&&h.focus()):(myCore.hideAllLayer(),b.css({left:f-10,
top:"20%"}),c.css({top:-(document.body.clientHeight-i+10)}),b.show(),b.css("display","table"),d&&d.focus(),
mCom.aVisibleLayerList.push(b))},C=function(){$Element("loading_bg")&&$Element("loading_bg").hide(),
$Element("loading_write_layer")&&$Element("loading_write_layer").hide();var a=$Element("invalidReplytoLayer");
a&&a.show()},D=function(a,b){var c=$Element("invalidReplytoLayer");c&&c.hide(),mCom.sendBlockInfo=null,
mCom.isPopup&&"fromclose"!==b&&setTimeout(function(){window.close()},100)},E=function(a){mCom.isPopup&&mCom.parentWindow&&(mInit=mCom.parentWindow.mInit),
mInit&&mInit.showOptionLayerAtInit(a,"write_option"),D()},F=function(){$Element("loading_bg")&&$Element("loading_bg").hide(),
$Element("loading_write_layer")&&$Element("loading_write_layer").hide();var a=$Element("invalid_email_layer");
a&&(a.show(),setTimeout(function(){$$.getSingle("button",a).focus()},0))},G=function(){var a=$Element("invalid_email_layer");
a&&a.hide(),mCom.sendBlockInfo&&(mCom.sendBlockInfo.result="N"),mCom.isPopup&&(mCom.isInvalidMail=!0);
};return{showSpamLayer:showSpamLayer,closeSpamLayer:t,showCafeCompleteLayer:showCafeCompleteLayer,showCafeManage:showCafeManage,
showMoveLayer:showMoveLayer,moveBar:moveBar,showReceiveTipLayer:showReceiveTipLayer,receiveTipLayerTab:receiveTipLayerTab,
showReceiveFilterLayer:showReceiveFilterLayer,selectFilterRcpt:selectFilterRcpt,showCancelSentFailLayer:showCancelSentFailLayer,
showAlertMessageLayer:showAlertMessageLayer,showConfirmLayer:j,showSearchLayer:showSearchLayer,showSearchLayerBo:showSearchLayerBo,
showRelHelp:showRelHelp,showSelectBox:showSelectBox,showMailLayer:o,showCharSetLayer:showCharSetLayer,
showMoreCharSet:showMoreCharSet,showFolderAction:showFolderAction,showCalendar:showCalendar,showAutoReplyCalendar:showAutoReplyCalendar,
hideAllLayer:hideAllLayer,focusTriggerElem:s,hideLayer:hideLayer,onClickFolderList:onClickFolderList,
onMoveLayerKeyboard:onMoveLayerKeyboard,addNewFolder:addNewFolder,mailMove:mailMove,checkDuplicate:checkDuplicate,
_CheckDuplicateCallback:_CheckDuplicateCallback,execContinueMove:execContinueMove,changeDuplicateRule:changeDuplicateRule,
showSenderInfo:showSenderInfo,showReceiverInfo:showReceiverInfo,clickShowMimeLayer:clickShowMimeLayer,
scrapMailToBlog:scrapMailToBlog,downloadMail:downloadMail,checkPeriod:checkPeriod,checkPeriodBo:checkPeriodBo,
printMail:printMail,showLayer:showLayer,doLoginValidation:doLoginValidation,showFakeNotiLayer:showFakeNotiLayer,
showAddRejectLayer:showAddRejectLayer,submitAddReject:submitAddReject,showDownloadAllLayer:showDownloadAllLayer,
showOverLimitRuleLayer:showOverLimitRuleLayer,showDuplicateRuleLayer:showDuplicateRuleLayer,showShortcutLayer:showShortcutLayer,
selectNextItem:selectNextItem,adjustLayer:adjustLayer,_AdjustLayer:_AdjustLayer,showMemoPopup:showMemoPopup,
showEmployeeSearchPopup:showEmployeeSearchPopup,showBackupFolderLayer:showBackupFolderLayer,resizeSnb:resizeSnb,
resizeListWrap:resizeListWrap,resizeListWrapFlexible:resizeListWrapFlexible,highlightMenu:highlightMenu,
showConversationLayer:showConversationLayer,onKeydownFolderList:onKeydownFolderList,showViewFilterLayer:p,
showViewTypeLayer:q,showViewLayoutLayer:r,showSendCancelConfirmLayer:l,showDeleteMoveCancelConfirmLayer:k,
showRenameFolderLayer:a,changeAutoreplyDate:c,openNdriveDownloadAllPopup:openNdriveDownloadAllPopup,
downloadBlocked:downloadBlocked,checkDownloadAll:checkDownloadAll,addToVisibleLayer:addToVisibleLayer,
removeFromVisibleLayer:removeFromVisibleLayer,showInvalidReplyToLayer:C,hideInvalidReplyLayer:D,moveToWriteOption:E,
showInvalidMailLayer:F,hideInvalidMailLayer:G,initFaqCover:A,showFaqLayer:B,useSmartMailboxWithMove:w,
reportSpamMail:x,closeSmartMailboxGuide:y,useSmartMailbox:useSmartMailbox}}(),myExternalMail=function(){
var a=function(a,b){var c=$Element("externMail_layer");if(c.visible())return void myCore.hideAllLayer();
var d=c.query(".mail_ext_list");c&&($$.getSingle("#ext_select_all").checked=!0,d.html(""),c=d=null,mcCore.requestAjax({
fCallback:$Fn(e,this).bind(a,b),oParameter:{},sUrl:"/json/pop3/list"}))},b=function(){for(var a=$Element($$.getSingle(".mail_ext_list")).child().length,b=$$.getSingle("#ext_select_all").checked,c=0;a>c;c++)$$.getSingle("#ext_select_"+c).disabled||($$.getSingle("#ext_select_"+c).checked=b);
},c=function(){for(var a=$Element($$.getSingle(".mail_ext_list")).child().length,b=0;a>b;b++)if(0==$$.getSingle("#ext_select_"+b).checked)return void($$.getSingle("#ext_select_all").checked=!1);
$$.getSingle("#ext_select_all").checked=!0},d=function(){for(var a="",b=$Element($$.getSingle(".mail_ext_list")).child().length,c=0;b>c;c++){
var d=$$.getSingle("#ext_select_"+c);d.checked&&(a+=$Element(d).attr("pop3sn")+";")}""==a?$Element("externMail_layer").hide():mcCore.requestAjax({
fCallback:$Fn(function(){$Element("externMail_layer").hide(),mcKoreanclick.getExternal(a,"import")},this).bind(a),
oParameter:{pop3SnList:a},sUrl:"/json/pop3/import"})},e=function(a,b,c){if("FAIL"!=c.Result&&void 0!=c.Result){
if(0==c.ExtPop3OptionList.length)return void mInit.showOptionLayerAtInit(null,"externalMail_option");
if(c.isImportingPop3Mails)return void alert(nLang.c.get_external_mail);if(""!=c.lastRetriveTime){var d=mCom.sDefaultDateFormat?moment(c.lastRetriveTime).format("MMM D, YYYY HH:mm:ss"):c.lastRetriveTime;
$Element("ext_layer_lastUpdateTime").html("("+nLang.c.last_access_time+" "+d+")")}var e="",f='<tr><td><input type="checkbox" class="_c1(myExternalMail|toggleCheckExtMail);" checked id="ext_select_{index}" pop3Sn="{pop3Sn}" onclick="ccr(this, \'omi.select\', event);"></td><td><label for="ext_select_{index}">{serviceName}({userID})<span class="blind">'+nLang.c.select+"/"+nLang.c.cancel+'</span></label></td><td id="lastStatus"><span class="pcs_rst">{strongTag}{status}</span></td><td><a href="#" onclick="ccr(this, \'omi.inbox\', event);$Element(\'externMail_layer\').hide();" class="_c1(mlCore|updateList|{folderSn}) _stopDefault">{folderName}</a></td></tr>';
for(i=0;i<c.ExtPop3OptionList.length;i++){var g=f,h=c.ExtPop3OptionList[i];g=g.replace(/\{index\}/g,i),
g=g.replace(/\{pop3Sn\}/g,h.pop3Sn),g=g.replace(/\{serviceName\}/g,h.serviceName),g=g.replace(/\{userID\}/g,h.userId),
g=g.replace(/\{folderSn\}/g,h.folderSn),g=g.replace(/\{folderName\}/g,h.folderName);var j=h.address;if(("pop.paran.com"==j||"pop.mail.yahoo.co.kr"==j||"pop.freechal.com"==j)&&(g=g.replace(/checked/g,"disabled=true"),
g=g.replace(/<tr>/g,"<tr class='disabled'>"),g=g.replace(/\{strongTag\}/g,""),g=g.replace(/\{status\}/g,nLang.c.terminate_service)),
"pop.naver.com"==j&&mEnv.mailId==h.userId&&(g=g.replace(/checked/g,"disabled=true"),g=g.replace(/<tr>/g,"<tr class='disabled'>"),
g=g.replace(/\{strongTag\}/g,""),g=g.replace(/\{status\}/g,nLang.c.deny_service)),""==h.lastStatus||void 0==h.lastStatus)g=g.replace(/\{strongTag\}/g,""),
g=g.replace(/\{status\}/g,nLang.c.no_external_mail);else if(h.lastStatus.status){g=g.replace(/\{strongTag\}/g,'<strong class="complete">'+nLang.c.complete+" </strong>");
var k="("+nLang.c.mail+" "+h.lastStatus.mailCount+nLang.c.unit2+")";h.lastStatus.overSizeCount&&h.lastStatus.overSizeCount>0&&(k+="</span><span class='pcs_rst'>"+nLang.c.fail_over_size.replace(/\{overSizeCount\}/,h.lastStatus.overSizeCount)),
g=g.replace(/\{status\}/g,k)}else g=g.replace(/\{strongTag\}/g,'<strong class="fail">'+nLang.c.fail+" </strong>"),
g=g.replace(/\{status\}/g,"("+h.lastStatus.message+")");e+=g}$Element($$.getSingle(".mail_ext_wrap .mail_ext .mail_ext_list")).html(e);
var l=$Element("externMail_layer");myCore.showLayer(a.element,l,null,$$.getSingle("a",l.$value())),"OPTION"==b?(l.css("left",$Element(a.element).offset().left-200+"px"),
l.css("top",$Element(a.element).offset().top-350+"px")):(l.css("top",$Element(a.element).offset().top-310+"px"),
l.css("left","200px")),$$.getSingle("button",l).focus();var m=$Element("setup_container"),n=m.query(".externalMail_options");
m.visible()&&n.hasClass("on")?l.query(".lnk_add").hide():l.query(".lnk_add").show(),setLcs("","layerpop3");
}},f=function(){$Element("externMail_layer").hide(),$$.getSingle(".bu13 a").focus()};return{showExtMailLayer:a,
importExtMail:d,toggleCheckExtMail:c,toggleCheckAllExtMail:b,closeExtMailLayer:f}}(),myRemind=function(){
var a=31536e6,b=6e5,c=9e5,d="";return toggleRemindLayer=function(a){return a.element.parentElement&&$Element(a.element.parentElement).attr("disabled")?void 0:$Element($$.getSingle("#ly_remindLayer")).visible()?void $Element($$.getSingle("#ly_remindLayer")).hide():void mcCore.requestAjax({
fCallback:$Fn(_showRemindLayerCallback,this).bind(a.element),sUrl:"/json/option/reminder/get"})},_newDateTime=function(a,b,c){
var d;return d=a?moment(a):moment(),(0==b||b)&&(d=d.hours(b)),(0==c||c)&&(d=d.minutes(c)),d.seconds(0).valueOf();
},_getTimezoneTime=function(a){var b=_getTimeZone();return a+60*(new Date).getTimezoneOffset()*1e3+3600*b*1e3;
},_getTimezoneNow=function(){var a=moment().valueOf();return a=_getTimezoneTime(a),moment(a)},_getTimeZone=function(){
if(mCom.isPopup)try{var a=a||window.opener;if(a&&a.m&&a.m.info)var b=Number(a.mEnv.timeZone)||Number("+9");else var b=Number("+9");
}catch(c){var b=Number("+9")}else var b=Number(mEnv.timeZone);return b},_showRemindLayerCallback=function(a,c){
if(c){var e,f,g,h,i=$$.getSingle("#ly_remindLayer"),j="SPAN"===a.tagName?a.parentElement:a,k=0,l=0,m=_getTimezoneNow().seconds(0),n=c.nextWeek.split(","),o=c.favorite.split(","),p=864e5;
n[0]=Number(n[0])-1,o[0]=Number(o[0])-1,c.soon=Number(c.soon),h=m.minutes()>=30?m.hour()+c.soon+1:m.hour()+c.soon,
k=moment(m.valueOf()).set({hour:h,minute:0}).valueOf(),e=_newDateTime(null,c.lateToday.split(":")[0],c.lateToday.split(":")[1]),
f=_newDateTime(null,c.tomorrow.split(":")[0],c.tomorrow.split(":")[1])+p,g=_newDateTime(m.valueOf()+(7+n[0]-m.day())*p,n[1].split(":")[0],n[1].split(":")[1]);
var q=_newDateTime(null,o[1].split(":")[0],o[1].split(":")[1]);if(l=(-1==o[0]||o[0]==m.day())&&m.valueOf()<q?q:-1==o[0]&&m.valueOf()>q?_newDateTime(m.valueOf()+p,o[1].split(":")[0],o[1].split(":")[1]):o[0]>m.day()?_newDateTime(m.valueOf()+(o[0]-m.day())*p,o[1].split(":")[0],o[1].split(":")[1]):_newDateTime(m.valueOf()+(o[0]-m.day()+7)*p,o[1].split(":")[0],o[1].split(":")[1]),
$$.getSingle("#ly_remindLayer .soon").innerHTML=_getRemindHumanTime(k),$Element($$.getSingle("#ly_remindLayer .soonLink")).attr("data-time",k),
e>m.valueOf()+b?($$.getSingle("#ly_remindLayer .lateToday").innerHTML=_getRemindHumanTime(e),$Element($$.getSingle("#ly_remindLayer .lateTodayLink")).attr("data-time",e),
$Element($$.getSingle("#ly_remindLayer .lateTodayLink")).css("display","block")):$Element($$.getSingle("#ly_remindLayer .lateTodayLink")).css("display","none"),
$$.getSingle("#ly_remindLayer .tomorrow").innerHTML=_getRemindHumanTime(f),$Element($$.getSingle("#ly_remindLayer .tomorrowLink")).attr("data-time",f),
$$.getSingle("#ly_remindLayer .nextWeek").innerHTML=_getRemindHumanTime(g,"day"),$Element($$.getSingle("#ly_remindLayer .nextWeekLink")).attr("data-time",g),
"Y"==c.useFavorite){var r=_getRemindHumanTime(l,"day");-1==o[0]&&(r=r.split(")")[1]),$$.getSingle("#ly_remindLayer .favorite").innerHTML=r,
$Element($$.getSingle("#ly_remindLayer .favoriteLink")).attr("data-time",l),$Element($$.getSingle("#ly_remindLayer .favoriteLink")).css("display","block");
}else $Element($$.getSingle("#ly_remindLayer .favoriteLink")).css("display","none");_toggleClearRemindBtn();
var s={direction:"downward",align:"left"};return toggleRemindCalendar("hide"),d="",$Element(i).visible()?void 0:void myCore.showLayer(j,i,s);
}},_getDayString=function(a){var b="";switch(a){case 0:b=nLang.c.sunday;break;case 1:b=nLang.c.monday;
break;case 2:b=nLang.c.tuesday;break;case 3:b=nLang.c.wednesday;break;case 4:b=nLang.c.thursday;break;
case 5:b=nLang.c.friday;break;case 6:b=nLang.c.saturday}return b},_getRemindHumanTime=function(a,b){
var c=new $Date(a),d="",e="";return"day"==b&&(d="("+_getDayString(c.day())+") "),e+="am"==c.format("a")?nLang.r.am:nLang.r.pm,
d+e+" "+c.format("h:i")},_toggleClearRemindBtn=function(){var a=!0,b=$Element("remind_clear_btn"),c=$Element($$.getSingle("#ly_remindLayer li.border a"));
_woCurMailList.forEach(function(b){(mcCore.isCorrespondFlag(b.status,"0x40000000000")||mcCore.isCorrespondFlag(b.status,"0x20000000000"))&&(a=!1);
}),a?(b.hide(),c.attr("tab-action","last"),b.child()[0].attr("tab-action","")):(b.show(),c.attr("tab-action",""),
b.child()[0].attr("tab-action","last"))},toggleRemindCalendar=function(a){var b=$Element($$.getSingle("#ly_remindLayer .border")),c=$Element("remind_layer_calendar_btn"),e=$Element($$.getSingle("a",b)),f=$Element("remind_clear_btn");
"hide"==a||b.hasClass("expand")&&"show"!=a?(d=$$.getSingle("#remind_layer_calendar_input").value,b.removeClass("expand"),
f.visible()||(c.attr("tab-action",""),e.attr("tab-action","last"))):(b.addClass("expand"),renderRemindCalendar(d?d:moment(_getCalendarDefaultTime()).format((mCom.sDefaultDateFormat||"YYYY-MM-DD")+" HH:mm")),
f.visible()||(c.attr("tab-action","last"),e.attr("tab-action","")))},_getCalendarDefaultTime=function(){
var a=_getTimezoneNow().seconds(0);return a.set(50<=a.minutes()&&a.minutes()<=59?{hour:a.hour()+1,minute:30,
second:0}:0<=a.minutes()&&a.minutes()<=19?{minute:30,second:0}:{hour:a.hour()+1,minute:0,second:0}),
a.valueOf()},renderRemindCalendar=function(a){var b=(mCom.sDefaultDateFormat||"YYYY-MM-DD")+" HH:mm",c=moment(a,b);
if(a&&-1===a.indexOf(" "))var d=moment(_getCalendarDefaultTime()),e=c.set({hour:d.hour(),minute:d.minute()
}).format(b);else var e=a;$$.getSingle("#remind_layer_calendar_input").value=e,mCalendar.setCalendar({
calendarId:"calendar_remindLayer",inputId:"remind_layer_calendar_input",dateFormat:b,date:e,time:{hour:c.hour(),
minute:c.minute()},setDateCallback:myRemind.renderRemindCalendar,isShow:!1})},setRemind=function(c,d){
var e=_getTimezoneNow(),f=$Element($$.getSingle("#ly_remindLayer ."+d+"Link")).attr("data-time");if("manual"==d&&$Element("remind_layer_calendar_input").$value().value&&(f=_getManualTime()),
"favorite"!=d&&Number(f)<=e.valueOf()+b)return alert(nLang.l.remind_fail_min_time),void toggleRemindCalendar("show");
if(Number(f)>e.valueOf()+a)return alert(nLang.l.remind_fail_max_time),void toggleRemindCalendar("show");
var g=_getSelectedMailList("set"),h="set";if(!g)return void hideAllLayer();var i={mailSNList:g,reminderTime:_encodeRemindTime(f),
status:h};mcCore.requestAjax({fCallback:$Fn(_setRemindCallback,this).bind(i),oParameter:i,sUrl:"/json/select/reminder"
})},_encodeRemindTime=function(a){var b=_getTimeZone(),c=Number(a);return c=c-60*(new Date).getTimezoneOffset()*1e3-3600*b*1e3,
a=""+c,a=a.slice(0,a.length-3)},_getManualTime=function(){var a=(mCom.sDefaultDateFormat||"YYYY-MM-DD")+" HH:mm",b=moment($$.getSingle("#remind_layer_calendar_input").value,a);
return b.valueOf()},_setRemindCallback=function(a){a.mailSNList&&a.reminderTime&&myCore.showConfirmLayer(null,nLang.l.remind_set_noti),
hideAllLayer(),mcCore.saveListScrollTop(),_refreshRemindInfo(a.reminderTime)},_refreshRemindInfo=function(a){
if(mcCore.isListVisible(window.document))mlCore.refreshList(!0);else{var b=_woCurMailList.get(0),c=$$.getSingle("div[data-mailsn="+_woCurMailList.get(0).mailSN+"]"),d=$Element($$.getSingle("p.read_remind_date",c));
if(d.removeClass("remind_date"),d.removeClass("remind_complete"),a){var e=nLang.l.remind_scheduled,f=a,g=_getTimezoneNow()+"";
g=g.slice(0,g.length-3),d.html(getRemindDateForRead(e,f,Number(g))),d.addClass("remind_date"),b.status=_clearRemindStatus(b.status,"0x40000000000"),
b.status=_setRemindStatus(b.status)}else d.html(""),b.status=_clearRemindStatus(b.status,"0x20000000000");
mCom.isPopup&&window.opener&&mcCore.isListVisible(window.opener.document)&&window.opener.refreshList(!0);
}},_setRemindStatus=function(a){for(var b=a.toString(2),c=parseInt("0x20000000000",16).toString(2),d=b.length,e=c.length,f=Math.max(d,e),g=[],h=0;f>h;h++)g[f-h-1]=e-h-1==0?"1":b[d-h-1]?b[d-h-1]:"0";
return parseInt(g.join(""),2)},_clearRemindStatus=function(a,b){var c=a.toString(2).split(""),d=parseInt(b,16).toString(2),e=c.length-d.length;
return c[e]&&(c[e]="0"),parseInt(c.join(""),2)},_isList=function(){return $Element("listBtnMenu").visible();
},clearRemind=function(){var a=_getSelectedMailList("clear"),b="clear",c={mailSNList:a,status:b};mcCore.requestAjax({
fCallback:$Fn(_clearRemindCallback,this).bind(c),oParameter:c,sUrl:"/json/select/reminder"})},_clearRemindCallback=function(a){
a.mailSNList&&myCore.showConfirmLayer(null,nLang.l.remind_clear_noti),hideAllLayer(),mcCore.saveListScrollTop(),
_refreshRemindInfo()},_getSelectedMailList=function(a){var b={set:nLang.l.fail_invalid_desc1,clear:nLang.l.cannot_clear_complete
},c={set:_isRemindableMail,clear:_isClearableMail},d=b[a],e=c[a],f=_getMailList(_woCurMailList,e);return"set"==a&&f.hasInvalid&&""!=f.sMailList&&(d+="\n\n"+nLang.l.fail_invalid_desc2),
f.hasInvalid&&alert(d),f.sMailList},_getMailList=function(a,b){var c="",d=!1,e={};return a.forEach(function(a){
b(a)?c+=a.mailSN+";":d=!0}),e.sMailList=c,e.hasInvalid=d,e},_isRemindableMail=function(a){return mcCore.isCorrespondFlag(a.status,"0x4000")||mcCore.isCorrespondFlag(a.status,"0x10000")?!1:3==Number(a.folderSN)?!1:5==Number(a.folderSN)?!1:4==Number(a.folderSN)?!1:!0;
},_isClearableMail=function(){return!0},inputBlur=function(a){var b=a.value;validateInput(a),b!==a.value&&renderRemindCalendar(a.value);
},validateInput=function(a){var b=(mCom.sDefaultDateFormat||"YYYY-MM-DD")+" HH:mm",c=moment(a.value,b);
c.isValid()?a.value=c.format(b):_invalidInputAlert(a)},_invalidInputAlert=function(a){alert(nLang.l.remind_invalid_date),
a.value=moment(_getTimezoneNow().valueOf()+c).format((mCom.sDefaultDateFormat||"YYYY-MM-DD")+" HH:mm");
},getRemindDateForRead=function(a,b,c){var d,e,f,g;return e='<span class="blind">'+nLang.l.remind_date+'</span>​<span class="ico_remind" title="{RemindBlind}"></span>{RemindDate}',
d=b?mcCore.getHumanTime(b,c,"read"):new $Date,f=d+" "+a,g=d,e.replace("{RemindBlind}",f).replace("{RemindDate}",g);
},{toggleRemindLayer:toggleRemindLayer,toggleRemindCalendar:toggleRemindCalendar,renderRemindCalendar:renderRemindCalendar,
setRemind:setRemind,clearRemind:clearRemind,getRemindDateForRead:getRemindDateForRead,inputBlur:inputBlur
}}(),mySimpleSearch=function(){_oWatchInput=null,_welListLayer=null,_welHistoryLayer=null,_ela=null,
_elInput=null,_welExArea=null,_elSearchBtn=null,_wfInputTextFocus=null,_wfInputTextBlur=null,_wfInputTextKeyDown=null,
_nSelectedIndex=0,_simpleSearchFilter=nLang.c.simple_search_filter,stop=function(){},_isInitFocus=!1,
_aHistoryData=null;var a=$Element("delete_all_history"),b=$Element("SearchHistoryOnOff");return initSimpleSearch=function(){
_elInput=$("searchKeyWord"),_welListLayer=$Element("simpleSearchLayer"),_welHistoryLayer=$Element("searchHistoryLayer"),
_ela=$$(".txt",$("simpleSearchLayer")),_welExArea=$Element("simpleSearchLayer"),_elSearchBtn=$$.getSingle(".search_btn",$("folder_menu")),
_oWatchInput=new jindo.WatchInput(_elInput),_oWatchInput.attach({change:$Fn(_inputTextChange,this).bind()
}),_oWatchInput.start(),_wfInputTextKeyDown=$Fn(_inputTextKeyDown,this).attach(_elInput,"keydown"),_wfInputTextFocus=$Fn(_inputTextFocus,this).attach(_elInput,"focus"),
_wfInputTextFocus=$Fn(_inputTextFocus,this).attach(_elInput,"click"),_wfInputTextBlur=$Fn(_inputTextBlur,this).attach(_elInput,"blur"),
attachQuickMenuEventHandlers(),_alignListLayer()},attachQuickMenuEventHandlers=function(){a.attach("focus",function(){
a.addClass("selected")}),a.attach("blur",function(){a.removeClass("selected")}),b.attach("focus",function(){
b.addClass("selected")}),b.attach("blur",function(){b.removeClass("selected")})},_showSimpleSearchLayer=function(){
if(_welListLayer.visible());else{myCore.hideAllLayer();var a=$Element($$.getSingle("#cont_fix_area .msearch"));
a.addClass("infocus"),mCom.aVisibleLayerList.push(_welListLayer),_welListLayer.show()}},_hideSimpleSearchLayer=function(){
myCore.hideAllLayer()},_inputTextKeyDown=function(c){var d=(c.element,c.key()),e=d.keyCode,f=0,g=_elInput.value,h=$S(g).trim(),i=_simpleSearchFilter.test(h.$value());
if(_welListLayer.visible()){if(i||""==h.$value())return;38==e?(f=_getSimpleSearchIndex("up"),_changeLayerListBg(f),
c.stop()):40==e?(_welListLayer.visible()?(f=_getSimpleSearchIndex("down"),_changeLayerListBg(f)):_inputTextChange(),
c.stop()):13==e?(c.stop(),_selectionSimpleSearchList($Event(c),_nSelectedIndex)):9==e&&_hideSimpleSearchLayer();
}else if(_welHistoryLayer.visible())if(38==e){var j=$$.getSingle("#historyLayer_ul").children;f=_getSearchHistoryIndex("up"),
-1!==f&&myCore.selectNextItem($$.getSingle("#searchHistoryLayer"),"up","selected",!0),c.stop()}else if(40==e){
var j=$$.getSingle("#historyLayer_ul").children,k=j.length-1,l=$Element(j[k]);if(f=_getSearchHistoryIndex("down"),
-1===f)l&&l.hasClass("selected")?(l.removeClass("selected"),a.$value().focus()):0!==j.length||b.hasClass("selected")||b.$value().focus();else{
var m=$$.getSingle("#historyLayer_ul .selected"),n=$$.getSingle("#historyLayer_ul .selected .delete_btn");
m&&document.activeElement===_elInput&&n.focus(),myCore.selectNextItem($$.getSingle("#searchHistoryLayer"),"down","selected",!0);
}c.stop()}else if(13==e){c.stop();var o=$$.getSingle("#searchHistoryLayer .selected");if(!o)return;clickSearchHistoryList(void 0,$$.getSingle("#searchHistoryLayer .selected").value),
_elSearchBtn.focus()}else 9==e&&_welHistoryLayer.hide()},_handleQuickMenuKeyDown=function(c){{var d=c.key(),e=d.keyCode,f=$$.getSingle("#historyLayer_ul").children,g=f.length-1,h=$Element(f[g]);
$$.getSingle("#historyLayer_ul .selected .delete_btn")}38===e?(nIndex=_getSearchHistoryIndex("up"),0===f.length?b.hasClass("selected")&&_elInput.focus():-1===nIndex&&b.hasClass("selected")?a.$value().focus():nIndex===g&&(_elInput.focus(),
h&&h.addClass("selected")),c.stop()):40===e&&(nIndex=_getSearchHistoryIndex("down"),-1===nIndex?a&&a.hasClass("selected")&&b.$value().focus():(myCore.selectNextItem($$.getSingle("#searchHistoryLayer"),"down","selected",!0),
_elInput.focus()),c.stop())},_inputTextFocus=function(a){setTimeout(function(){0==mUtil.bInitSimleSearchFocus&&(_elInput.value="",
mUtil.bInitSimleSearchFocus=!0)},1),_welHistoryLayer.detach("keydown",_handleQuickMenuKeyDown),_inputTextChange(),
a.stop()},_inputTextBlur=function(){_welHistoryLayer.attach("keydown",_handleQuickMenuKeyDown)},_inputTextChange=function(){
"undefined"==typeof _elInput&&(_elInput=$("searchKeyWord")),_nSelectedIndex=0;var a=_elInput.value,b=$S(a).trim(),c=_simpleSearchFilter.test(b.$value());
if(""==a)return void showHistory();if(c||""==b.$value())return void _hideSimpleSearchLayer();a=b.$value(),
a=a.replace(/\s+/g," ");for(var d=_ela.length,e=0;d>e;e++)_ela[e].innerHTML=mcCore.replaceSpecialChar(a);
_welListLayer.css({left:"-1000px"}),_showSimpleSearchLayer(),_welListLayer.$value().style.display="block",
_ela[3].offsetWidth>120?_welExArea.hasClass("sl_ex")||_welExArea.addClass("sl_ex"):_welExArea.hasClass("sl_ex")&&_welExArea.removeClass("sl_ex"),
_alignListLayer(),_changeLayerListBg(_nSelectedIndex)},_alignListLayer=function(){var a=$Element(_elSearchBtn).offset(),b=(_elSearchBtn.offsetWidth,
_elSearchBtn.offsetHeight),c=(_welListLayer.width(),a.top+b-1),d="284",d=$Element("searchKeyWord").offset().left;
_welListLayer.css({top:c+"px",left:d+"px"}),_welHistoryLayer.css({top:c+"px",left:d+"px"})},mouseOverSimpleSearchList=function(a,b){
_nSelectedIndex=b,_changeLayerListBg(b)},clickSimpleSearchList=function(a,b){_selectionSimpleSearchList(a,b);
},_selectionSimpleSearchList=function(a,b){var c=_getFilteringInputText(_elInput.value,b);_oWatchInput.setInputValue(c),
_elSearchBtn.focus(),_hideSimpleSearchLayer(),a&&_sendClickCr(a,b),_doSimpleSearch(a)},_sendClickCr=function(a,b){
var c="";switch(parseInt(b)){case 0:c="ltp*l.all";break;case 1:c="ltp*l.from";break;case 2:c="ltp*l.to";
break;case 3:c="ltp*l.content";break;case 4:c="ltp*l.exact";break;default:c="ltp*l.all"}ccr(null,c,a.$value());
},_getFilteringInputText=function(a,b){var b=b.toString(),c=$S(a).trim();switch(a=c.$value(),a=a.replace(/\s+/g," "),
b){case"0":break;case"1":a=nLang.c.sender_simple_search+":"+a;break;case"2":a=nLang.c.receiver_simple_serach+":"+a;
break;case"3":a=nLang.c.content_simple_search+":"+a;break;case"4":a='"'+a+'"'}return a},_getSimpleSearchIndex=function(a){
return"up"==a?(_nSelectedIndex--,0>_nSelectedIndex&&(_nSelectedIndex=0)):"down"==a&&(_nSelectedIndex++,
_nSelectedIndex>4&&(_nSelectedIndex=4)),_nSelectedIndex},_getSearchHistoryIndex=function(c){var d=$Element("historyLayer_ul"),e=d.indexOf($Element($$.getSingle("#historyLayer_ul li.selected"))),f=$$.getSingle("#historyLayer_ul").children.length-1;
return"up"==c?_nSelectedIndex=a.hasClass("selected")?f:b.hasClass("selected")?-1:0>e?-1:e-1:"down"==c&&(_nSelectedIndex=a.hasClass("selected")||b.hasClass("selected")?-1:f>e?e+1:-1),
_nSelectedIndex},_changeLayerListBg=function(a){$ElementList($$("a",$("simpleSearchLayer"))).removeClass("onfocus"),
$Element($$("a",$("simpleSearchLayer"))[a]).addClass("onfocus")},_doSimpleSearch=function(a){a.stop(),
mlCore.doSearch_new(a,"simple")},focusToSearch=function(){_elInput=$("searchKeyWord"),_elInput&&(_elInput.focus(),
showHistory())},showHistory=function(){_welHistoryLayer||(_welHistoryLayer=$Element("searchHistoryLayer")),
_welHistoryLayer.visible()||""!=_elInput.value||(_alignListLayer(),_getSearchHistory())},_getSearchHistory=function(){
mcCore.requestAjax({fCallback:$Fn(_searchHistoryCallback,this).bind(),oParameter:{use:mEnv.useSearchHistory?"on":"off"
},sUrl:"/json/searchHistory/list/"})},_searchHistoryCallback=function(a){var c="",d=a.list;mEnv.useSearchHistory?($Element("SearchHistoryOnOff").html(nLang.c.search_keyword_save_off),
$Element("delete_all_history").show()):($Element("SearchHistoryOnOff").html(nLang.c.search_keyword_save_on),
$Element("delete_all_history").hide(),$Element("offSearchHistory").show()),0==d.length&&mEnv.useSearchHistory?($Element("emptySearchHistory").show(),
$Element("delete_all_history").hide()):$Element("emptySearchHistory").hide(),mEnv.useSearchHistory&&(c=_makeSearchHistoryList(d)),
$Element("historyLayer_ul").html(c),myCore.hideAllLayer(),mCom.aVisibleLayerList.push(_welHistoryLayer),
_welHistoryLayer.show();var e=$Element($$.getSingle("#cont_fix_area .msearch"));e.addClass("infocus"),
document.activeElement===b.$value()?b.addClass("selected"):_elInput.focus()},_makeSearchHistoryList=function(a){
var b="";_aHistoryData=$A();for(var c=0;c<a.length;c++){var d=[],e=-1,f="",g="",h="",i="",j="",k="";a[c].elements.all&&(d[++e]=a[c].elements.all+"<span class='subtx'>("+nLang.c.search_all+")</span>, ",
i=0,j=a[c].elements.all),a[c].elements.from&&(d[++e]=a[c].elements.from+"<span class='subtx'>("+nLang.c.search_from+")</span>, ",
f=a[c].elements.from),a[c].elements.toCc&&(d[++e]=a[c].elements.toCc+"<span class='subtx'>("+nLang.c.search_tocc+")</span>, ",
g=0,h=a[c].elements.toCc),a[c].elements.to&&(d[++e]=a[c].elements.to+"<span class='subtx'>("+nLang.c.search_to+")</span>, ",
g=1,h=a[c].elements.to),a[c].elements.subjectBody&&(d[++e]=a[c].elements.subjectBody+"<span class='subtx'>("+nLang.c.search_subject_body+")</span>, ",
i=1,j=a[c].elements.subjectBody),a[c].elements.subject&&(d[++e]=a[c].elements.subject+"<span class='subtx'>("+nLang.c.search_subject+")</span>, ",
i=2,j=a[c].elements.subject),a[c].elements.body&&(d[++e]=a[c].elements.body+"<span class='subtx'>("+nLang.c.search_body+")</span>, ",
i=3,j=a[c].elements.body),a[c].elements.attach&&(d[++e]=a[c].elements.attach+"<span class='subtx'>("+nLang.c.search_attach+")</span>, ",
i=4,j=a[c].elements.attach),a[c].elements.match&&(d[++e]='"'+a[c].elements.match+"\"<span class='subtx'>("+nLang.c.search_exact+")</span>, ",
i=0,j='"'+a[c].elements.match+'"'),a[c].elements.subjectBodyAttach&&(d[++e]=a[c].elements.subjectBodyAttach+"<span class='subtx'>("+nLang.c.search_content+")</span>, ",
k=a[c].elements.subjectBodyAttach),_aHistoryData.push([f,g,h,i,j,k]);var l="<li value='"+c+"' onmouseover='mySimpleSearch.mouseOverSearchHistoryList("+c+")'><a href='#' class='_c1(mySimpleSearch|clickSearchHistoryList|"+c+")  _ccr(ltp*h.recent) _stopDefault'>"+d.join("").replace(/, $/,"")+"<a class='delete_btn _click(mySimpleSearch|deleteHistory|"+a[c].sn+")  _ccr(ltp*h.del) _stopDefault'><span class='blind'>"+nLang.c.del+"</span></a></li>";
b+=l,d=e=l=null}return b},useSearchHistory=function(a){var b={useSearchHistory:!mEnv.useSearchHistory
};mcCore.requestAjax({fCallback:$Fn(_useSearchHistoryCallback,this).bind(a,b),oParameter:b,sUrl:"/json/searchHistory/onOff/"
})},_useSearchHistoryCallback=function(a,b){b.useSearchHistory?($Element("historyLayer_ul").show(),$Element("offSearchHistory").hide(),
$Element("SearchHistoryOnOff").html(nLang.c.search_keyword_save_off),$Element("delete_all_history").show(),
mEnv.useSearchHistory=!0,ccr(a.element,"ltp*h.saveon",a.$value()),_getSearchHistory()):($Element("historyLayer_ul").hide(),
$Element("emptySearchHistory").hide(),$Element("offSearchHistory").show(),$Element("SearchHistoryOnOff").html(nLang.c.search_keyword_save_on),
$Element("delete_all_history").hide(),$Element("SearchHistoryOnOff").addClass("selected"),mEnv.useSearchHistory=!1,
ccr(a.element,"ltp*h.saveoff",a.$value()))},deleteAllHistory=function(a){ccr(a.element,"ltp*h.delall",a.$value()),
mcCore.requestAjax({fCallback:$Fn(_getSearchHistory,this).bind(),oParameter:{},sUrl:"/json/searchHistory/deleteAll"
})},deleteHistory=function(a,b){mcCore.requestAjax({fCallback:$Fn(_getSearchHistory,this).bind(),oParameter:{
sn:b},sUrl:"/json/searchHistory/delete"})},clickSearchHistoryList=function(a,b){function c(a){var b=a.getMonth()+1;
b=b>=10?""+b:"0"+b;var c=a.getDate();return c=c>=10?""+c:"0"+c,a.getFullYear()+b+c}function d(a){var b=new Date;
return[c(a),c(b)]}if(oOption={},oOption.from=encodeURI(_aHistoryData.get(b)[0]),oOption.toCond=encodeURI(_aHistoryData.get(b)[1]),
oOption.to=encodeURI(_aHistoryData.get(b)[2]),oOption.body=encodeURI(_aHistoryData.get(b)[4]),oOption.content=encodeURI(_aHistoryData.get(b)[5]),
oOption.bodyCond=encodeURI(_aHistoryData.get(b)[3]),oOption.period="all",oOption.periodStart="",oOption.periodEnd="",
oOption.folderSN="-1",oOption.exceptTrash=!0,oOption.reQuery=!1,oOption.page="1",oOption.sortField="1",
oOption.sortType="0",oOption.type="all",oOption.useSearchHistory=mEnv.useSearchHistory,mcCore.isNcs()){
var e=new Date,f=d(new Date(e.setUTCMonth(e.getUTCMonth()-12))),g=f[1],h=f[0];oOption.period=encodeURI("1year"),
oOption.periodStart=encodeURI(h),oOption.periodEnd=encodeURI(g),f=e=g=h=null}mlCore.doSearchWithOption(oOption,"history"),
mCom.isDetailSearch=!1,mCom.oCurRequest=oOption,$Element("searchHistoryLayer").hide()},mouseOverSearchHistoryList=function(a){
$ElementList($$("li",$("historyLayer_ul"))).removeClass("selected"),$Element($$("li",$("historyLayer_ul"))[a]).addClass("selected");
},setSearchText=function(a){_oWatchInput.setInputValue(a)},{initSimpleSearch:initSimpleSearch,clickSimpleSearchList:clickSimpleSearchList,
mouseOverSimpleSearchList:mouseOverSimpleSearchList,focusToSearch:focusToSearch,showHistory:showHistory,
useSearchHistory:useSearchHistory,deleteHistory:deleteHistory,deleteAllHistory:deleteAllHistory,clickSearchHistoryList:clickSearchHistoryList,
mouseOverSearchHistoryList:mouseOverSearchHistoryList,setSearchText:setSearchText}}(),myTwoStepAuth=function(){
var a="SHOW_TWO_STEP_AUTH_PROMOTION",b=function(){mcCore.setCookie(a,"false","999999"),$Element("twoStepAuthPromotion").hide();
},c=function(){var b=mcCore.getCookie(a),c=new Date,d=new Date(2018,6,12,23,59,59),e=$Element("twoStepAuthPromotion");
c.getTime()<d.getTime()&&"false"!==b&&e.show()},d=function(){$Element("twoStepAuthPromotion").hide();
};return{neverShowPromotion:b,showLayer:c,hideLayer:d}}(),"undefined"==typeof console&&(console={},console.log=function(){}),
pwe={},pwe.me={},pwe.mail={},pwe.calendar={},pwe.address={},pwe.context={bRun:!1,bResizing:!1,bFirstLoading:!1,
bFullbrowsing:!1,bUseMessage:!0,oDispatcher:null,sServiceType:"",oApp:null,nAjaxRequestCnt:0,common:{
oParam:{},oStatus:{}},me:{oParam:{},oStatus:{}},mail:{oParam:{},oStatus:{}},calendar:{oParam:{},oStatus:{}
},address:{oParam:{},oStatus:{}}},pwe.Base=$Class({$init:function(){},$LOCAL_BEFORE_ALL:function(){return pwe.context.bUseMessage?!0:!1;
},addController:function(a,b){pwe.context.oDispatcher.addController(a,b)},requestAjax:function(a,b,c,d){
var e={sUrl:a,oParam:c,sType:d};pwe.context.oApp.exec("PWE_COMMON_AJAX_CALLED",[e]),$Ajax(a,{type:"undefined"==typeof d||null==d?"post":d,
onload:function(a){var c=a.json();b(c),pwe.context.oApp.exec("PWE_COMMON_AJAX_LOADED",[e])},onerror:function(){
e.htException={sErrMsg:nLang.e.api_response_error},pwe.context.oApp.exec("PWE_COMMON_AJAX_EXCEPTION_THREW",[e]);
}}).request(c)}}),pwe.Common=$Class({name:"pwe.Common",$init:function(a){this._htOption=a,this._setServiceType(a);
},$ON_MSG_APP_READY:function(){this._initPWEContext(),this._setPWEFirstLoading(!0),this._enableEventDispatcher();
},$LOCAL_BEFORE_FIRST:function(){},$ON_PWE_COMMON_EVENTDISPATCHER_ENABLED:function(){this.addController(this.name,this);
},$ON_PWE_COMMON_AJAX_CALLED:function(){pwe.context.nAjaxRequestCnt++},$ON_PWE_COMMON_AJAX_LOADED:function(){
pwe.context.nAjaxRequestCnt--},$ON_PWE_COMMON_AJAX_EXCEPTION_THREW:function(){pwe.context.nAjaxRequestCnt--;
},_initPWEContext:function(){pwe.context.bRun=!0,pwe.context.bResizing=!1},_setServiceType:function(a){
pwe.context.sServiceType="undefined"==typeof a?"":a.sServiceType},_setPWEFirstLoading:function(a){pwe.context.bFirstLoading=a;
},_enableEventDispatcher:function(){pwe.context.oDispatcher||(pwe.context.oDispatcher="undefined"!=typeof oMail&&null!=oMail._oEventDispatcher?oMail._oEventDispatcher:new EventDispatcher,
this.oApp.exec("PWE_COMMON_EVENTDISPATCHER_ENABLED"))},_eof:function(){}}).extend(pwe.Base),eofCommon={};