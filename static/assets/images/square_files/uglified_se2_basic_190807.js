function createSEditor2(a,b,c){if(!window.$Jindo)return void(parent.document.body.innerHTML="진도 프레임웍이 필요합니다.<br>\n<a href='http://dev.naver.com/projects/jindo/download'>http://dev.naver.com/projects/jindo/download</a>에서 jindo.min.js를 다운로드 받아 /js 폴더에 복사 해 주세요.");
b||(b={},b.fOnBeforeUnload=null);var d=b.type?b.type:"write",e=c||jindo.$("smart_editor2"),f=jindo.$$.getSingle("DIV.husky_seditor_editing_area_container",e),g=jindo.$$.getSingle("IFRAME.se2_input_wysiwyg",f),h=a?a:jindo.$$.getSingle("TEXTAREA.blind",f),i=jindo.$$.getSingle("TEXTAREA.se2_input_htmlsrc",f),j="write"===d?jindo.$$.getSingle("TEXTAREA.se2_input_text",f):null,k="ko_KR",l="basic";
b.elAppContainer=e,b.oNavigator=jindo.$Agent().navigator(),b.I18N_LOCALE&&(k=b.I18N_LOCALE);var m=new nhn.husky.HuskyCore(b);
m.registerPlugin(new nhn.husky.CorePlugin(b?b.fOnAppLoad:null)),m.registerPlugin(new nhn.husky.StringConverterManager),
m.registerPlugin(new nhn.husky.SE2_serviceForMail(g,d));var n="write"===d&&mcCore.isNwe()?885:835,o={
nMinHeight:195,nMinWidth:parseInt(a.style.minWidth,10)||n,nHeight:a.style.height||a.offsetHeight,nWidth:a.style.width||a.offsetWidth
};return m.registerPlugin(new nhn.husky.SE_EditingAreaManager("WYSIWYG",h,o,b.fOnBeforeUnload,e,d)),
m.registerPlugin(new nhn.husky.SE_EditingArea_WYSIWYG(g,d)),m.registerPlugin(new nhn.husky.SE_EditingArea_HTMLSrc(i)),
"write"===d&&m.registerPlugin(new nhn.husky.SE_EditingArea_TEXT(j)),m.registerPlugin(new nhn.husky.SE2M_EditingModeChanger(e)),
m.registerPlugin(new nhn.husky.SE2M_EditingAreaRuler(e)),m.registerPlugin(new nhn.husky.SE_PasteHandler),
m.registerPlugin(new nhn.husky.HuskyRangeManager(g)),m.registerPlugin(new nhn.husky.Utils),m.registerPlugin(new nhn.husky.SE2M_UtilPlugin),
m.registerPlugin(new nhn.husky.SE_WYSIWYGStyler),m.registerPlugin(new nhn.husky.SE2M_Toolbar(e)),m.registerPlugin(new nhn.husky.SE_UndoRedo),
m.registerPlugin(new nhn.husky.Hotkey),m.registerPlugin(new nhn.husky.SE_EditingAreaVerticalResizer(e)),
m.registerPlugin(new nhn.husky.DialogLayerManager),m.registerPlugin(new nhn.husky.ActiveLayerManager),
m.registerPlugin(new nhn.husky.SE_WYSIWYGStyleGetter),m.registerPlugin(new nhn.husky.SE_WYSIWYGEnterKey("P")),
m.registerPlugin(new nhn.husky.SE2M_ColorPalette(e)),m.registerPlugin(new nhn.husky.SE2M_FontColor(e)),
m.registerPlugin(new nhn.husky.SE2M_BGColor(e)),m.registerPlugin(new nhn.husky.SE2M_FontNameWithLayerUI(e)),
m.registerPlugin(new nhn.husky.SE2M_FontSizeWithLayerUI(e)),m.registerPlugin(new nhn.husky.SE2M_LineStyler),
m.registerPlugin(new nhn.husky.SE2M_LineHeightWithLayerUI(e)),m.registerPlugin(new nhn.husky.SE2M_List(e)),
m.registerPlugin(new nhn.husky.SE2M_Hyperlink(e)),m.registerPlugin(new nhn.husky.MessageManager(oMessageMap,k)),
m.registerPlugin(new nhn.husky.SE2M_SCharacter(e,k,d)),m.registerPlugin(new nhn.husky.SE2M_Emoticon(e)),
m.registerPlugin(new nhn.husky.SE2M_EmoticonData(k)),m.registerPlugin(new nhn.husky.SE2M_StyleRemover),
m.registerPlugin(new nhn.husky.SE2M_ExecCommand(g)),"write"===d&&(m.registerPlugin(new nhn.husky.SE2M_TableCreator(e)),
m.registerPlugin(new nhn.husky.SE2M_FindReplacePlugin(e)),m.registerPlugin(new nhn.husky.SE2Mail_ComposerSignManager(e,d)),
mcCore.isNaver()&&m.registerPlugin(new nhn.husky.SE2M_AttachMap(e)),"ko_KR"==k&&m.registerPlugin(new nhn.husky.SE2M_SpellChecker(e)),
m.registerPlugin(new nhn.husky.SE2M_AttachPhoto(e)),m.registerPlugin(new nhn.husky.SE2M_QuickEditor_Common(e)),
m.registerPlugin(new nhn.husky.SE2M_TableEditor(e)),m.registerPlugin(new nhn.husky.SE2M_TableBlockStyler(e))),
m.registerPlugin(new nhn.husky.SE2B_CSSLoader(l)),m.registerPlugin(new nhn.husky.SE2M_Accessibility(e,k,l)),
m}function fontProperty(a,b,c,d,e){this.fontId=a,this.fontName=b,this.defaultSize=c,this.fontURL=d,this.fontCSSURL=e,
this.displayName=b,this.isLoaded=!0,this.fontFamily=this.fontId,""!=this.fontCSSURL?(this.displayName+=""+c,
this.fontFamily+="_"+c,this.isLoaded=!1,this.loadCSS=function(a){this.isLoaded||(this._importCSS(a),
this.isLoaded=!0)},this.loadCSSToMenu=function(){this._importCSS(document)},this._importCSS=function(a){
var b=a.styleSheets.length,c=a.styleSheets[b-1];(0===b||30==c.imports.length)&&(a.createStyleSheet?c=a.createStyleSheet():(c=a.createElement("style"),
a.documentElement.firstChild.appendChild(c),c=c.sheet)),c.addImport(this.fontCSSURL)}):(this.loadCSS=function(){},
this.loadCSSToMenu=function(){}),this.toStruct=function(){return{fontId:this.fontId,fontName:this.fontName,
defaultSize:this.defaultSize,fontURL:this.fontURL,fontCSSURL:this.fontCSSURL}}}function Shortcut(a,b){
var a=a.replace(/\s+/g,""),c=Shortcut.Store,d=Shortcut.Action;if("undefined"==typeof b&&a.constructor==String)return c.set("document",a,document),
d.init(c.get("document"),a);if(b.constructor==String&&a.constructor==String)return c.set(b,a,jindo.$(b)),
d.init(c.get(b),a);if(b.constructor!=String&&a.constructor==String){var e="nonID"+(new Date).getTime();
return e=Shortcut.Store.searchId(e,b),c.set(e,a,b),d.init(c.get(e),a)}alert(b+"는 반드시 string이거나  없어야 됩니다.");
}function createSE2BViewManager(){if(window.console||(window.console={log:function(){}}),!window.$Jindo)return void(parent.document.body.innerHTML="진도 프레임웍이 필요합니다.<br>\n<a href='http://dev.naver.com/projects/jindo/download'>http://dev.naver.com/projects/jindo/download</a>에서 jindo.min.js를 다운로드 받아 /js 폴더에 복사 해 주세요.");
var a=new nhn.husky.HuskyCore;return a.registerPlugin(new nhn.husky.CorePlugin),a.registerPlugin(new nhn.husky.StringConverterManager),
a.registerPlugin(new nhn.husky.SE2ViewManagerCore),a.registerPlugin(new nhn.husky.HuskyRangeManager),
a.registerPlugin(new nhn.husky.SE2M_StyleRemover),a}"undefined"==typeof window.nhn&&(window.nhn={}),
nhn.husky||(nhn.husky={}),function(){var a=/^\$(LOCAL|BEFORE|ON|AFTER)_/,b=/^\$(BEFORE|ON|AFTER)_MSG_APP_READY$/,c=[],d={};
nhn.husky.HuskyCore=jindo.$Class({name:"HuskyCore",aCallerStack:null,bMobile:jindo.$Agent().navigator().mobile||jindo.$Agent().navigator().msafari,
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
}}),nhn.husky.HuskyRangeManager=jindo.$Class({name:"HuskyRangeManager",oWindow:null,$init:function(a){
this.oWindow=a||window},$BEFORE_MSG_APP_READY:function(){this.oWindow&&"IFRAME"==this.oWindow.tagName&&(this.oWindow=this.oWindow.contentWindow,
nhn.CurrentSelection.setWindow(this.oWindow)),this.oApp.exec("ADD_APP_PROPERTY",["getSelection",jindo.$Fn(this.getSelection,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["getEmptySelection",jindo.$Fn(this.getEmptySelection,this).bind()]);
},$ON_SET_EDITING_WINDOW:function(a){this.oWindow=a},getEmptySelection:function(a){var b=new nhn.HuskyRange(a||this.oWindow);
return b},getSelection:function(a){this.oApp.exec("RESTORE_IE_SELECTION",[]);var b=this.getEmptySelection(a);
try{b.setFromSelection()}catch(c){}return b}}),"undefined"==typeof window.nhn&&(window.nhn={}),nhn.husky||(nhn.husky={}),
nhn.husky.HuskyMessageLogger=jindo.$Class({$init:function(){this.bLogging=!0,this.aExecutionStack=[],
this.aLog=[]},log_MessageStart:function(a){(this.aExecutionStack.length||this.bLogging)&&this.aExecutionStack.push({
sMessage:a,sBEFORE_Plugins:[],sON_Plugins:[],sAFTER_Plugins:[],nStartTime:new Date,nEndTime:null})},
log_MessageEnd:function(){if(this.aExecutionStack.length||this.bLogging){var a=this.aExecutionStack.pop();
if(a.nEndTime=new Date,this.aExecutionStack.length){var b=this.aExecutionStack[this.aExecutionStack.length-1];
b.aMessages.push(a)}else this.aLog.push(a)}},log_MessageStepStart:function(a){if(this.aExecutionStack.length||this.bLogging){
var b=this.aExecutionStack[this.aExecutionStack.length-1],c="a"+a+"_Plugins";b[c]=[],b._sLastStepArray=c;
}},log_MessageStepEnd:function(){if(this.aExecutionStack.length||this.bLogging){var a=this.aExecutionStack[this.aExecutionStack.length-1];
delete a._sLastStepArray}},log_CallHandlerStart:function(a){(this.aExecutionStack.length||this.bLogging)&&this.aExecutionStack.push({
sPluginName:a.name,aMessages:[],nStartTime:new Date,nEndTime:null})},log_CallHandlerEnd:function(){if(this.aExecutionStack.length||this.bLogging){
var a=this.aExecutionStack.pop();a.nEndTime=new Date;var b=this.aExecutionStack[this.aExecutionStack.length-1];
b[b._sLastStepArray].push(a)}},handleException:function(a){throw a},startLogging:function(){this.clearLog(),
this.bLogging=!0},stopLogging:function(){this.bLogging=!1},getLog:function(){return this.aLog},clearLog:function(){
this.aLog=[]}}),"undefined"==typeof window.nhn&&(window.nhn={}),nhn.CurrentSelection_IE=function(){this.getCommonAncestorContainer=function(){
try{return this._oSelection=this._document.selection,"Control"==this._oSelection.type?this._oSelection.createRange().item(0):this._oSelection.createRangeCollection().item(0).parentElement();
}catch(a){return this._document.body}},this.isCollapsed=function(){return this._oSelection=this._document.selection,
"None"==this._oSelection.type}},nhn.CurrentSelection_FF=function(){this.getCommonAncestorContainer=function(){
return this._getSelection().commonAncestorContainer},this.isCollapsed=function(){var a=this._window.getSelection();
return a.rangeCount<1?!0:a.getRangeAt(0).collapsed},this._getSelection=function(){try{return this._window.getSelection().getRangeAt(0);
}catch(a){return this._document.createRange()}}},nhn.CurrentSelection=new(jindo.$Class({$init:function(){
var a=jindo.$Agent().navigator();a.ie&&document.selection?nhn.CurrentSelection_IE.apply(this):nhn.CurrentSelection_FF.apply(this);
},setWindow:function(a){this._window=a,this._document=a.document}})),nhn.W3CDOMRange=jindo.$Class({$init:function(a){
this.reset(a)},reset:function(a){this._window=a,this._document=this._window.document,this.collapsed=!0,
this.commonAncestorContainer=this._document.body,this.endContainer=this._document.body,this.endOffset=0,
this.startContainer=this._document.body,this.startOffset=0,this.oBrowserSelection=new nhn.BrowserSelection(this._window),
this.selectionLoaded=this.oBrowserSelection.selectionLoaded},cloneContents:function(){var a=this._document.createDocumentFragment(),b=this._document.createDocumentFragment(),c=this._getNodesInRange();
if(c.length<1)return a;var d=this._constructClonedTree(c,b),e=b.firstChild;if(e)for(var f,g=e.firstChild;g;)f=g.nextSibling,
a.appendChild(g),g=f;return d=this._splitTextEndNodes({oStartContainer:d.oStartContainer,iStartOffset:this.startOffset,
oEndContainer:d.oEndContainer,iEndOffset:this.endOffset}),d.oStartContainer&&d.oStartContainer.previousSibling&&nhn.DOMFix.parentNode(d.oStartContainer).removeChild(d.oStartContainer.previousSibling),
d.oEndContainer&&d.oEndContainer.nextSibling&&nhn.DOMFix.parentNode(d.oEndContainer).removeChild(d.oEndContainer.nextSibling),
a},_constructClonedTree:function(a,b){var c=null,d=null,e=this.startContainer,f=this.endContainer,g=function(a,b,g){
if(0>b)return b;var h=b-1,i=a[b].cloneNode(!1);for(a[b]==e&&(c=i),a[b]==f&&(d=i);h>=0&&nhn.DOMFix.parentNode(a[h])==a[b];)h=this._recurConstructClonedTree(a,h,i);
return g.insertBefore(i,g.firstChild),h};return this._recurConstructClonedTree=g,a[a.length]=nhn.DOMFix.parentNode(a[a.length-1]),
this._recurConstructClonedTree(a,a.length-1,b),{oStartContainer:c,oEndContainer:d}},cloneRange:function(){
return this._copyRange(new nhn.W3CDOMRange(this._window))},_copyRange:function(a){return a.collapsed=this.collapsed,
a.commonAncestorContainer=this.commonAncestorContainer,a.endContainer=this.endContainer,a.endOffset=this.endOffset,
a.startContainer=this.startContainer,a.startOffset=this.startOffset,a._document=this._document,a},collapse:function(a){
a?(this.endContainer=this.startContainer,this.endOffset=this.startOffset):(this.startContainer=this.endContainer,
this.startOffset=this.endOffset),this._updateRangeInfo()},compareBoundaryPoints:function(a,b){switch(a){
case nhn.W3CDOMRange.START_TO_START:return this._compareEndPoint(this.startContainer,this.startOffset,b.startContainer,b.startOffset);
case nhn.W3CDOMRange.START_TO_END:return this._compareEndPoint(this.endContainer,this.endOffset,b.startContainer,b.startOffset);
case nhn.W3CDOMRange.END_TO_END:return this._compareEndPoint(this.endContainer,this.endOffset,b.endContainer,b.endOffset);
case nhn.W3CDOMRange.END_TO_START:return this._compareEndPoint(this.startContainer,this.startOffset,b.endContainer,b.endOffset);
}},_findBody:function(a){if(!a)return null;for(;a;){if("BODY"==a.tagName)return a;a=nhn.DOMFix.parentNode(a);
}return null},_compareEndPoint:function(a,b,c,d){return this.oBrowserSelection.compareEndPoints(a,b,c,d);
},_getCommonAncestorContainer:function(a,b){a=a||this.startContainer,b=b||this.endContainer;for(var c=b;a;){
for(;c;){if(a==c)return a;c=nhn.DOMFix.parentNode(c)}c=b,a=nhn.DOMFix.parentNode(a)}return this._document.body;
},deleteContents:function(){if(!this.collapsed){this._splitTextEndNodesOfTheRange();var a=this._getNodesInRange();
if(!(a.length<1)){for(var b=a[0].previousSibling;b&&this._isBlankTextNode(b);)b=b.previousSibling;var c,d=-1;
b||(c=nhn.DOMFix.parentNode(a[0]),d=0);for(var e=0;e<a.length;e++){var f=a[e];!f.firstChild||this._isAllChildBlankText(f)?(c==f&&(d=this._getPosIdx(c),
c=nhn.DOMFix.parentNode(f)),nhn.DOMFix.parentNode(f).removeChild(f)):c==f&&0===d&&(d=this._getPosIdx(c),
c=nhn.DOMFix.parentNode(f))}b?"BODY"==b.tagName?this.setStartBefore(b,!0):this.setStartAfter(b,!0):this.setStart(c,d,!0,!0),
this.collapse(!0)}}},extractContents:function(){var a=this.cloneContents();return this.deleteContents(),
a},getInsertBeforeNodes:function(){var a,b=null;return"3"==this.startContainer.nodeType?(a=nhn.DOMFix.parentNode(this.startContainer),
b=this.startContainer.nodeValue.length<=this.startOffset?this.startContainer.nextSibling:this.startContainer.splitText(this.startOffset)):(a=this.startContainer,
b=nhn.DOMFix.childNodes(this.startContainer)[this.startOffset]),b&&nhn.DOMFix.parentNode(b)||(b=null),
{elParent:a,elBefore:b}},insertNode:function(a){var b=this.getInsertBeforeNodes();b.elParent.insertBefore(a,b.elBefore),
this.setStartBefore(a)},selectNode:function(a){this.reset(this._window),this.setStartBefore(a),this.setEndAfter(a);
},selectNodeContents:function(a){this.reset(this._window),this.setStart(a,0,!0),this.setEnd(a,nhn.DOMFix.childNodes(a).length);
},_endsNodeValidation:function(a,b){if(!a||this._findBody(a)!=this._document.body)throw new Error("INVALID_NODE_TYPE_ERR oNode is not part of current document");
return 3==a.nodeType?b>a.nodeValue.length&&(b=a.nodeValue.length):b>nhn.DOMFix.childNodes(a).length&&(b=nhn.DOMFix.childNodes(a).length),
b},setEnd:function(a,b,c,d){c||(b=this._endsNodeValidation(a,b)),this.endContainer=a,this.endOffset=b,
d||(this.startContainer&&-1==this._compareEndPoint(this.startContainer,this.startOffset,this.endContainer,this.endOffset)?this._updateRangeInfo():this.collapse(!1));
},setEndAfter:function(a,b){if(!a)throw new Error("INVALID_NODE_TYPE_ERR in setEndAfter");return"BODY"==a.tagName?void this.setEnd(a,nhn.DOMFix.childNodes(a).length,!0,b):void this.setEnd(nhn.DOMFix.parentNode(a),this._getPosIdx(a)+1,!0,b);
},setEndBefore:function(a,b){if(!a)throw new Error("INVALID_NODE_TYPE_ERR in setEndBefore");return"BODY"==a.tagName?void this.setEnd(a,0,!0,b):void this.setEnd(nhn.DOMFix.parentNode(a),this._getPosIdx(a),!0,b);
},setStart:function(a,b,c,d){c||(b=this._endsNodeValidation(a,b)),this.startContainer=a,this.startOffset=b,
d||(this.endContainer&&-1==this._compareEndPoint(this.startContainer,this.startOffset,this.endContainer,this.endOffset)?this._updateRangeInfo():this.collapse(!0));
},setStartAfter:function(a,b){if(!a)throw new Error("INVALID_NODE_TYPE_ERR in setStartAfter");return"BODY"==a.tagName?void this.setStart(a,nhn.DOMFix.childNodes(a).length,!0,b):void this.setStart(nhn.DOMFix.parentNode(a),this._getPosIdx(a)+1,!0,b);
},setStartBefore:function(a,b){if(!a)throw new Error("INVALID_NODE_TYPE_ERR in setStartBefore");return"BODY"==a.tagName?void this.setStart(a,0,!0,b):void this.setStart(nhn.DOMFix.parentNode(a),this._getPosIdx(a),!0,b);
},surroundContents:function(a){a.appendChild(this.extractContents()),this.insertNode(a),this.selectNode(a);
},toString:function(){var a=this._document.createElement("DIV");return a.appendChild(this.cloneContents()),
a.textContent||a.innerText||""},fixCommonAncestorContainer:function(){jindo.$Agent().navigator().ie&&(this.commonAncestorContainer=this._getCommonAncestorContainer());
},_isBlankTextNode:function(a){return 3==a.nodeType&&""==a.nodeValue?!0:!1},_isAllChildBlankText:function(a){
for(var b=0,c=a.childNodes.length;c>b;b++)if(!this._isBlankTextNode(a.childNodes[b]))return!1;return!0;
},_getPosIdx:function(a){for(var b=0,c=a.previousSibling;c;c=c.previousSibling)b++;return b},_updateRangeInfo:function(){
return this.startContainer?(this.collapsed=this.oBrowserSelection.isCollapsed(this)||this.startContainer===this.endContainer&&this.startOffset===this.endOffset,
void(this.commonAncestorContainer=this.oBrowserSelection.getCommonAncestorContainer(this))):void this.reset(this._window);
},_isCollapsed:function(a,b,c,d){var e=!1;if(a==c&&b==d)e=!0;else{var f=this._getActualStartNode(a,b),g=this._getActualEndNode(c,d);
f=this._getNextNode(this._getPrevNode(f)),g=this._getPrevNode(this._getNextNode(g)),f&&g&&"BODY"!=g.tagName&&(this._getNextNode(g)==f||g==f&&this._isBlankTextNode(g))&&(e=!0);
}return e},_splitTextEndNodesOfTheRange:function(){var a=this._splitTextEndNodes({oStartContainer:this.startContainer,
iStartOffset:this.startOffset,oEndContainer:this.endContainer,iEndOffset:this.endOffset});this.startContainer=a.oStartContainer,
this.startOffset=a.iStartOffset,this.endContainer=a.oEndContainer,this.endOffset=a.iEndOffset},_splitTextEndNodes:function(a){
return a=this._splitStartTextNode(a),a=this._splitEndTextNode(a)},_splitStartTextNode:function(a){var b=a.oStartContainer,c=a.iStartOffset,d=a.oEndContainer,e=a.iEndOffset;
if(!b)return a;if(3!=b.nodeType)return a;if(0===c)return a;if(b.nodeValue.length<=c)return a;var f=b.splitText(c);
return b==d&&(e-=c,d=f),b=f,c=0,{oStartContainer:b,iStartOffset:c,oEndContainer:d,iEndOffset:e}},_splitEndTextNode:function(a){
var b=a.oStartContainer,c=a.iStartOffset,d=a.oEndContainer,e=a.iEndOffset;return d?3!=d.nodeType?a:e>=d.nodeValue.length?a:0===e?a:(d.splitText(e),
{oStartContainer:b,iStartOffset:c,oEndContainer:d,iEndOffset:e}):a},_getNodesInRange:function(){if(this.collapsed)return[];
var a=this._getActualStartNode(this.startContainer,this.startOffset),b=this._getActualEndNode(this.endContainer,this.endOffset);
return this._getNodesBetween(a,b)},_getActualStartNode:function(a,b){var c=a;return 3==a.nodeType?b>=a.nodeValue.length?(c=this._getNextNode(a),
"BODY"==c.tagName&&(c=null)):c=a:b<nhn.DOMFix.childNodes(a).length?c=nhn.DOMFix.childNodes(a)[b]:(c=this._getNextNode(a),
"BODY"==c.tagName&&(c=null)),c},_getActualEndNode:function(a,b){var c=a;return 0===b?(c=this._getPrevNode(a),
"BODY"==c.tagName&&(c=null)):c=3==a.nodeType?a:nhn.DOMFix.childNodes(a)[b-1],c},_getNextNode:function(a){
return a&&"BODY"!=a.tagName?a.nextSibling?a.nextSibling:this._getNextNode(nhn.DOMFix.parentNode(a)):this._document.body;
},_getPrevNode:function(a){return a&&"BODY"!=a.tagName?a.previousSibling?a.previousSibling:this._getPrevNode(nhn.DOMFix.parentNode(a)):this._document.body;
},_getNodesBetween:function(a,b){var c=[];if(this._nNodesBetweenLen=0,!a||!b)return c;try{this._recurGetNextNodesUntil(a,b,c);
}catch(d){return[]}return c},_recurGetNextNodesUntil:function(a,b,c){if(!a)return!1;if(!this._recurGetChildNodesUntil(a,b,c))return!1;
for(var d=a.nextSibling;!d;){if(!(a=nhn.DOMFix.parentNode(a)))return!1;if(c[this._nNodesBetweenLen++]=a,
a==b)return!1;d=a.nextSibling}return this._recurGetNextNodesUntil(d,b,c)},_recurGetChildNodesUntil:function(a,b,c){
if(!a)return!1;var d=!1,e=a;if(e.firstChild)for(e=e.firstChild;e;){if(!this._recurGetChildNodesUntil(e,b,c)){
d=!0;break}e=e.nextSibling}return c[this._nNodesBetweenLen++]=a,d?!1:a==b?!1:!0},_getNodesBetweenAndExcludeTags:function(a,b,c){
var d=[];c.push("");var e=c.join("...");if(this._nNodesBetweenLen=0,!a||!b)return d;try{this._recurGetNextNodesUntilAndExcludeTags(a,b,d,e);
}catch(f){return[]}return d},_recurGetNextNodesUntilAndExcludeTags:function(a,b,c,d){if(!a)return!1;if(d.indexOf(a.tagName+"...")<0&&!this._recurGetChildNodesUntilAndExcludeTags(a,b,c,d))return!1;
for(var e=a.nextSibling;!e;){if(!(a=nhn.DOMFix.parentNode(a)))return!1;if(c[this._nNodesBetweenLen++]=a,
a==b)return!1;e=a.nextSibling}return this._recurGetNextNodesUntilAndExcludeTags(e,b,c,d)},_recurGetChildNodesUntilAndExcludeTags:function(a,b,c,d){
if(!a)return!1;var e=!1,f=a;if(f.firstChild)for(f=f.firstChild;f;){if((void 0==f.tagName||d.indexOf(f.tagName+"...")<0)&&!this._recurGetChildNodesUntilAndExcludeTags(f,b,c,d)){
e=!0;break}f=f.nextSibling}return c[this._nNodesBetweenLen++]=a,e?!1:a==b?!1:!0}}),nhn.W3CDOMRange.START_TO_START=0,
nhn.W3CDOMRange.START_TO_END=1,nhn.W3CDOMRange.END_TO_END=2,nhn.W3CDOMRange.END_TO_START=3,nhn.HuskyRange=jindo.$Class({
_rxCursorHolder:/^(?:\uFEFF|\u00A0|\u200B|<br>)$/i,_rxTextAlign:/text-align:[^"';]*;?/i,setWindow:function(a){
this.reset(a||window)},$init:function(a){this.HUSKY_BOOMARK_START_ID_PREFIX="husky_bookmark_start_",
this.HUSKY_BOOMARK_END_ID_PREFIX="husky_bookmark_end_",this.sBlockElement="P|DIV|LI|H[1-6]|PRE",this.sBlockContainer="BODY|TABLE|TH|TR|TD|UL|OL|BLOCKQUOTE|FORM",
this.rxBlockElement=new RegExp("^("+this.sBlockElement+")$"),this.rxBlockContainer=new RegExp("^("+this.sBlockContainer+")$"),
this.rxLineBreaker=new RegExp("^("+this.sBlockElement+"|"+this.sBlockContainer+")$"),this.rxHasBlock=new RegExp("(?:<(?:"+this.sBlockElement+"|"+this.sBlockContainer+").*?>|style=[\"']?[^>]*?(?:displays?:s?block)[^>]*?[\"']?)","gi"),
this.setWindow(a)},select:function(){try{this.oBrowserSelection.selectRange(this)}catch(a){}},setFromSelection:function(a){
this.setRange(this.oBrowserSelection.getRangeAt(a),!0)},setRange:function(a,b){this.reset(this._window),
this.setStart(a.startContainer,a.startOffset,b,!0),this.setEnd(a.endContainer,a.endOffset,b)},setEndNodes:function(a,b){
this.reset(this._window),this.setEndAfter(b,!0),this.setStartBefore(a)},splitTextAtBothEnds:function(){
this._splitTextEndNodesOfTheRange()},getStartNode:function(){return this.collapsed?3==this.startContainer.nodeType?0===this.startOffset?null:this.startContainer.nodeValue.length<=this.startOffset?null:this.startContainer:null:3==this.startContainer.nodeType?this.startOffset>=this.startContainer.nodeValue.length?this._getNextNode(this.startContainer):this.startContainer:this.startOffset>=nhn.DOMFix.childNodes(this.startContainer).length?this._getNextNode(this.startContainer):nhn.DOMFix.childNodes(this.startContainer)[this.startOffset];
},getEndNode:function(){return this.collapsed?this.getStartNode():3==this.endContainer.nodeType?0===this.endOffset?this._getPrevNode(this.endContainer):this.endContainer:0===this.endOffset?this._getPrevNode(this.endContainer):nhn.DOMFix.childNodes(this.endContainer)[this.endOffset-1];
},getNodeAroundRange:function(a,b){if(!this.collapsed)return this.getStartNode();if(this.startContainer&&3==this.startContainer.nodeType)return this.startContainer;
var c,d,e;return d=this.startOffset>=nhn.DOMFix.childNodes(this.startContainer).length?this._getNextNode(this.startContainer):nhn.DOMFix.childNodes(this.startContainer)[this.startOffset],
c=0===this.endOffset?this._getPrevNode(this.endContainer):nhn.DOMFix.childNodes(this.endContainer)[this.endOffset-1],
a?(e=c,e||b||(e=d)):(e=d,e||b||(e=c)),e},_getXPath:function(a){for(var b="";a&&1==a.nodeType;)b="/"+a.tagName+"["+this._getPosIdx4XPath(a)+"]"+b,
a=nhn.DOMFix.parentNode(a);return b},_getPosIdx4XPath:function(a){for(var b=0,c=a.previousSibling;c;c=c.previousSibling)c.tagName==a.tagName&&b++;
return b},_evaluateXPath:function(a,b){a=a.substring(1,a.length-1);for(var c=a.split(/\//),d=b.body,e=2;e<c.length&&d;e++){
c[e].match(/([^\[]+)\[(\d+)/i);for(var f=RegExp.$1,g=RegExp.$2,h=nhn.DOMFix.childNodes(d),i=[],j=h.length,k=0,l=0;j>l;l++)h[l].tagName==f&&(i[k++]=h[l]);
d=i.length<g?null:i[g]}return d},_evaluateXPathBookmark:function(a){var b=a.sXPath,c=a.nTextNodeIdx,d=a.nOffset,e=this._evaluateXPath(b,this._document);
if(c>-1&&e){for(var f=nhn.DOMFix.childNodes(e),g=null,h=c,i=d;(g=f[h])&&3==g.nodeType&&g.nodeValue.length<i;)i-=g.nodeValue.length,
h++;e=nhn.DOMFix.childNodes(e)[h],d=i}return e||(e=this._document.body,d=0),{elContainer:e,nOffset:d
}},getXPathBookmark:function(){var a=-1,b={elContainer:this.startContainer,nOffset:this.startOffset},c=this.startContainer;
3==c.nodeType&&(b=this._getFixedStartTextNode(),a=this._getPosIdx(b.elContainer),c=nhn.DOMFix.parentNode(c));
var d=this._getXPath(c),e={sXPath:d,nTextNodeIdx:a,nOffset:b.nOffset};if(this.collapsed)var f={sXPath:d,
nTextNodeIdx:a,nOffset:b.nOffset};else{var g=-1,h={elContainer:this.endContainer,nOffset:this.endOffset
},i=this.endContainer;3==i.nodeType&&(h=this._getFixedEndTextNode(),g=this._getPosIdx(h.elContainer),
i=nhn.DOMFix.parentNode(i));var j=this._getXPath(i),f={sXPath:j,nTextNodeIdx:g,nOffset:h.nOffset}}return[e,f];
},moveToXPathBookmark:function(a){if(!a)return!1;var b=this._evaluateXPathBookmark(a[0]),c=this._evaluateXPathBookmark(a[1]);
return b.elContainer&&c.elContainer?(this.startContainer=b.elContainer,this.startOffset=b.nOffset,this.endContainer=c.elContainer,
this.endOffset=c.nOffset,!0):void 0},_getFixedTextContainer:function(a,b){for(;a&&3==a.nodeType&&a.previousSibling&&3==a.previousSibling.nodeType;)b+=a.previousSibling.nodeValue.length,
a=a.previousSibling;return{elContainer:a,nOffset:b}},_getFixedStartTextNode:function(){return this._getFixedTextContainer(this.startContainer,this.startOffset);
},_getFixedEndTextNode:function(){return this._getFixedTextContainer(this.endContainer,this.endOffset);
},placeStringBookmark:function(){return this.collapsed||jindo.$Agent().navigator().ie||jindo.$Agent().navigator().firefox?this.placeStringBookmark_NonWebkit():this.placeStringBookmark_Webkit();
},placeStringBookmark_NonWebkit:function(){var a=(new Date).getTime(),b=this.cloneRange();b.collapseToEnd();
var c=this._document.createElement("SPAN");c.id=this.HUSKY_BOOMARK_END_ID_PREFIX+a,b.insertNode(c);var b=this.cloneRange();
b.collapseToStart();var d=this._document.createElement("SPAN");if(d.id=this.HUSKY_BOOMARK_START_ID_PREFIX+a,
b.insertNode(d),jindo.$Agent().navigator().ie){try{d.innerHTML=unescape("%uFEFF")}catch(e){}try{c.innerHTML=unescape("%uFEFF");
}catch(e){}}return this.moveToBookmark(a),a},placeStringBookmark_Webkit:function(){var a,b,c=(new Date).getTime(),d=this.cloneRange();
d.collapseToEnd(),a=this._document.createTextNode(""),d.insertNode(a),b=a.parentNode,a.previousSibling&&"TD"==a.previousSibling.tagName&&(b=a.previousSibling,
a=null);var e=this._document.createElement("SPAN");e.id=this.HUSKY_BOOMARK_END_ID_PREFIX+c,b.insertBefore(e,a);
var d=this.cloneRange();d.collapseToStart(),a=this._document.createTextNode(""),d.insertNode(a),b=a.parentNode,
a.nextSibling&&"TD"==a.nextSibling.tagName&&(b=a.nextSibling,a=b.firstChild);var f=this._document.createElement("SPAN");
return f.id=this.HUSKY_BOOMARK_START_ID_PREFIX+c,b.insertBefore(f,a),this.moveToBookmark(c),c},cloneRange:function(){
return this._copyRange(new nhn.HuskyRange(this._window))},moveToBookmark:function(a){return"object"!=typeof a?this.moveToStringBookmark(a):this.moveToXPathBookmark(a);
},getStringBookmark:function(a,b){return this._document.getElementById(b?this.HUSKY_BOOMARK_END_ID_PREFIX+a:this.HUSKY_BOOMARK_START_ID_PREFIX+a);
},moveToStringBookmark:function(a,b){var c=this.getStringBookmark(a),d=this.getStringBookmark(a,!0);return c&&d?(this.reset(this._window),
b?(this.setEndAfter(d),this.setStartBefore(c)):(this.setEndBefore(d),this.setStartAfter(c)),!0):!1},
removeStringBookmark:function(a){this._removeAll(this.HUSKY_BOOMARK_START_ID_PREFIX+a),this._removeAll(this.HUSKY_BOOMARK_END_ID_PREFIX+a);
},_removeAll:function(a){for(var b;b=this._document.getElementById(a);)nhn.DOMFix.parentNode(b).removeChild(b);
},collapseToStart:function(){this.collapse(!0)},collapseToEnd:function(){this.collapse(!1)},createAndInsertNode:function(a){
var b=this._document.createElement(a);return this.insertNode(b),b},getNodes:function(a,b){a&&this._splitTextEndNodesOfTheRange();
var c=this._getNodesInRange(),d=[];if(!b)return c;for(var e=0;e<c.length;e++)b(c[e])&&(d[d.length]=c[e]);
return d},getTextNodes:function(a){var b=function(a){return 3==a.nodeType&&"\n"!=a.nodeValue&&""!=a.nodeValue?!0:!1;
};return this.getNodes(a,b)},surroundContentsWithNewNode:function(a){var b=this._document.createElement(a);
return this.surroundContents(b),b},isRangeInRange:function(a,b){var c=this.compareBoundaryPoints(nhn.W3CDOMRange.START_TO_START,a),d=this.compareBoundaryPoints(nhn.W3CDOMRange.START_TO_END,a),e=this.compareBoundaryPoints(nhn.W3CDOMRange.ND_TO_START,a),f=this.compareBoundaryPoints(nhn.W3CDOMRange.END_TO_END,a);
return 0>=c&&f>=0?!0:b?1==d?!1:-1==e?!1:!0:!1},isNodeInRange:function(a,b,c){var d=new nhn.HuskyRange(this._window);
return c&&a.firstChild?(d.setStartBefore(a.firstChild),d.setEndAfter(a.lastChild)):d.selectNode(a),this.isRangeInRange(d,b);
},pasteText:function(a){this.pasteHTML(a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;").replace(/"/g,"&quot;"));
},pasteHTML:function(a){var b=this._document.createElement("DIV");if(b.innerHTML=a,!b.firstChild)return void this.deleteContents();
var c=this.cloneRange(),d=c.placeStringBookmark(),e=c.getLineInfo(),f=e.oStart,g=e.oEnd;if(f.oLineBreaker&&"P"===f.oLineBreaker.nodeName&&c.rxHasBlock.test(a)){
b.style.cssText=f.oLineBreaker.style.cssText.replace(this._rxTextAlign,""),b.align=f.oLineBreaker.align,
c.deleteContents();var h=f.oLineBreaker.parentNode,i=f.oLineBreaker.nextSibling,j=c.getStringBookmark(d);
c.setEndNodes(j,g.oLineBreaker),f.oLineBreaker===g.oLineBreaker&&(oNextContents=c.extractContents())&&b.appendChild(oNextContents),
i?h.insertBefore(b,i):h.appendChild(b),c.removeStringBookmark(d),this._removeEmptyP(this._getPrevElement(b));
var k=this._getNextElement(b);if(k){var l=this._getNextElement(k);l&&(this._removeEmptyP(k),k=l)}else k=this._document.createElement("P"),
k.style.cssText=f.oLineBreaker.style.cssText,k.align=f.oLineBreaker.align,k.innerHTML="﻿",h.appendChild(k);
this.selectNodeContents(k),this.collapseToStart()}else{var m=b.firstChild,n=b.lastChild;for(this.collapseToStart();b.lastChild;)this.insertNode(b.lastChild);
this.setEndNodes(m,n),c.moveToBookmark(d),c.deleteContents(),c.removeStringBookmark(d)}},_removeEmptyP:function(a){
if(a&&"P"===a.nodeName){var b=a.innerHTML;(""===b||this._rxCursorHolder.test(b))&&a.parentNode.removeChild(a);
}},_getSiblingElement:function(a,b){if(!a)return null;var c=a[b?"previousSibling":"nextSibling"];return c&&1===c.nodeType?c:arguments.callee(c,b);
},_getPrevElement:function(a){return this._getSiblingElement(a,!0)},_getNextElement:function(a){return this._getSiblingElement(a,!1);
},toString:function(){return this.toString=nhn.W3CDOMRange.prototype.toString,this.toString()},toHTMLString:function(){
var a=this._document.createElement("DIV");return a.appendChild(this.cloneContents()),a.innerHTML},findAncestorByTagName:function(a){
for(var b=this.commonAncestorContainer;b&&b.tagName!=a;)b=nhn.DOMFix.parentNode(b);return b},selectNodeContents:function(a){
if(a){var b=a.firstChild?a.firstChild:a,c=a.lastChild?a.lastChild:a;this.reset(this._window),3==b.nodeType?this.setStart(b,0,!0):this.setStartBefore(b),
3==c.nodeType?this.setEnd(c,c.nodeValue.length,!0):this.setEndAfter(c)}},_hasTextDecoration:function(a,b){
return a&&a.style?a.style.textDecoration.indexOf(b)>-1?!0:"underline"===b&&"U"===a.tagName?!0:"line-through"!==b||"S"!==a.tagName&&"STRIKE"!==a.tagName?!1:!0:!1;
},_setTextDecoration:function(a,b){jindo.$Agent().navigator().firefox?a.style.textDecoration=a.style.textDecoration?a.style.textDecoration+" "+b:b:"underline"===b?a.innerHTML="<U>"+a.innerHTML+"</U>":"line-through"===b&&(a.innerHTML="<STRIKE>"+a.innerHTML+"</STRIKE>");
},_checkTextDecoration:function(a){if("SPAN"===a.tagName){var b=!1,c=!1,d=null;for(oChildNode=a.firstChild;oChildNode;){
if(1===oChildNode.nodeType&&(b=b||"U"===oChildNode.tagName,c=c||"S"===oChildNode.tagName||"STRIKE"===oChildNode.tagName),
b&&c)return;oChildNode=oChildNode.nextSibling}for(d=nhn.DOMFix.parentNode(a);d&&"BODY"!==d.tagName;)if(1===d.nodeType){
if(!b&&this._hasTextDecoration(d,"underline")&&(b=!0,this._setTextDecoration(a,"underline")),!c&&this._hasTextDecoration(d,"line-through")&&(c=!0,
this._setTextDecoration(a,"line-through")),b&&c)return;d=nhn.DOMFix.parentNode(d)}else d=nhn.DOMFix.parentNode(d);
}},styleRange:function(a,b,c,d,e){var f=this.aStyleParents=this._getStyleParentNodes(c,d);if(!(f.length<1)){
for(var g,h,i=0;i<f.length;i++){for(var j in a)g=j,h=a[g],"string"==typeof h&&(e&&a.color&&this._checkTextDecoration(f[i]),
f[i].style[g]=h);if(b)for(var j in b)g=j,h=b[g],"string"==typeof h&&("class"==g?jindo.$Element(f[i]).addClass(h):f[i].setAttribute(g,h));
}this.reset(this._window),this.setStartBefore(f[0]),this.setEndAfter(f[f.length-1])}},expandBothEnds:function(){
this.expandStart(),this.expandEnd()},expandStart:function(){if(3!=this.startContainer.nodeType||0===this.startOffset){
var a=this._getActualStartNode(this.startContainer,this.startOffset);a=this._getPrevNode(a),"BODY"==a.tagName?this.setStartBefore(a):this.setStartAfter(a);
}},expandEnd:function(){if(!(3==this.endContainer.nodeType&&this.endOffset<this.endContainer.nodeValue.length)){
var a=this._getActualEndNode(this.endContainer,this.endOffset);a=this._getNextNode(a),"BODY"==a.tagName?this.setEndAfter(a):this.setEndBefore(a);
}},_getStyleParentNodes:function(a,b){this._splitTextEndNodesOfTheRange();var c,d,e=this.getStartNode(),f=this.getEndNode(),g=this._getNodesInRange(),h=[],i=0,j=g.length,k=jindo.$A(g).filter(function(a){
return!a.firstChild||b&&"LI"==a.tagName}),l=this.commonAncestorContainer;if(b)for(;l;){if("LI"==l.tagName){
this._isFullyContained(l,k)&&(h[i++]=l);break}l=l.parentNode}for(var m=0;j>m;m++)if(c=g[m])if(b&&"LI"==c.tagName&&this._isFullyContained(c,k))h[i++]=c;else if(3==c.nodeType&&""!=c.nodeValue&&!c.nodeValue.match(/^(\r|\n)+$/)){
var n=nhn.DOMFix.parentNode(c);if("SPAN"==n.tagName){if(this._isFullyContained(n,k,c)){h[i++]=n;continue;
}}else{var o=this._findParentSingleSpan(n);if(o){h[i++]=o;continue}}d=this._document.createElement("SPAN"),
n.insertBefore(d,c),d.appendChild(c),h[i++]=d,a&&d.setAttribute(a,"true")}return this.setStartBefore(e),
this.setEndAfter(f),h},_findParentSingleSpan:function(a){if(!a)return null;for(var b,c,d=0,e=0,f=a.childNodes;c=f[d];d++)if(b=c.nodeValue,
!this._rxCursorHolder.test(b)&&(e++,e>1))return null;return"SPAN"===a.nodeName?a:this._findParentSingleSpan(a.parentNode);
},_isFullyContained:function(a,b,c){var d,e,f=this._getVeryFirstRealChild(a);return d=c&&f==c?1:b.indexOf(f),
-1!=d&&(f=this._getVeryLastRealChild(a),e=c&&f==c?1:b.indexOf(f)),-1!=d&&-1!=e},_getVeryFirstChild:function(a){
return a.firstChild?this._getVeryFirstChild(a.firstChild):a},_getVeryLastChild:function(a){return a.lastChild?this._getVeryLastChild(a.lastChild):a;
},_getFirstRealChild:function(a){for(var b=a.firstChild;b&&3==b.nodeType&&""==b.nodeValue;)b=b.nextSibling;
return b},_getLastRealChild:function(a){for(var b=a.lastChild;b&&3==b.nodeType&&""==b.nodeValue;)b=b.previousSibling;
return b},_getVeryFirstRealChild:function(a){var b=this._getFirstRealChild(a);return b?this._getVeryFirstRealChild(b):a;
},_getVeryLastRealChild:function(a){var b=this._getLastRealChild(a);return b?this._getVeryLastChild(b):a;
},_getLineStartInfo:function(a){function b(a){if(a&&!d){if(h.test(a.tagName))return f=a,d=e,void(g=!0);
e=a,c(a.previousSibling),d||b(nhn.DOMFix.parentNode(a))}}function c(a){if(a&&!d){if(h.test(a.tagName))return f=a,
d=e,void(g=!1);if(a.firstChild&&"TABLE"!=a.tagName)for(var b=a.lastChild;b&&!d;)c(b),b=b.previousSibling;else e=a;
d||c(a.previousSibling)}}var d=null,e=a,f=a,g=!1,h=this.rxLineBreaker;return h.test(a.tagName)?d=a:b(a),
{oNode:d,oLineBreaker:f,bParentBreak:g}},_getLineEndInfo:function(a){function b(a){if(a&&!d){if(h.test(a.tagName))return f=a,
d=e,void(g=!0);e=a,c(a.nextSibling),d||b(nhn.DOMFix.parentNode(a))}}function c(a){if(a&&!d){if(h.test(a.tagName))return f=a,
d=e,void(g=!1);if(a.firstChild&&"TABLE"!=a.tagName)for(var b=a.firstChild;b&&!d;)c(b),b=b.nextSibling;else e=a;
d||c(a.nextSibling)}}var d=null,e=a,f=a,g=!1,h=this.rxLineBreaker;return h.test(a.tagName)?d=a:b(a),
{oNode:d,oLineBreaker:f,bParentBreak:g}},getLineInfo:function(a){var a=a||!1,b=this.getStartNode(),c=this.getEndNode();
b||(b=this.getNodeAroundRange(!a,!0)),c||(c=this.getNodeAroundRange(!a,!0));var d=this._getLineStartInfo(b),e=d.oNode,f=this._getLineEndInfo(c),g=f.oNode;
if(b!=e||c!=g){var h=this._compareEndPoint(nhn.DOMFix.parentNode(e),this._getPosIdx(e),this.endContainer,this.endOffset),i=this._compareEndPoint(nhn.DOMFix.parentNode(g),this._getPosIdx(g)+1,this.startContainer,this.startOffset);
0>=h&&i>=0||(b=this.getNodeAroundRange(!1,!0),c=this.getNodeAroundRange(!1,!0),d=this._getLineStartInfo(b),
f=this._getLineEndInfo(c))}return{oStart:d,oEnd:f}},_findSingleChild:function(a){if(!a)return null;for(var b,c,d=null,e=0,f=0,g=a.childNodes;c=g[e];e++)if(b=c.nodeValue,
!this._rxCursorHolder.test(b)&&(d=c,f++,f>1))return null;return d},_hasCursorHolderOnly:function(a){
return a&&1===a.nodeType?this._rxCursorHolder.test(a.innerHTML)?!0:this._hasCursorHolderOnly(this._findSingleChild(a)):!1;
}}).extend(nhn.W3CDOMRange),nhn.BrowserSelection=function(a){this.init=function(a){this._window=a||window,
this._document=this._window.document},this.init(a),this._document.createRange?nhn.BrowserSelectionImpl_FF.apply(this):nhn.BrowserSelectionImpl_IE.apply(this),
this.selectRange=function(a){this.selectNone(),this.addRange(a)},this.selectionLoaded=!0,this._oSelection||(this.selectionLoaded=!1);
},nhn.BrowserSelectionImpl_FF=function(){this._oSelection=this._window.getSelection(),this.getRangeAt=function(a){
a=a||0;try{var b=this._oSelection.getRangeAt(a)}catch(c){return new nhn.W3CDOMRange(this._window)}return this._FFRange2W3CRange(b);
},this.addRange=function(a){var b=this._W3CRange2FFRange(a);this._oSelection.addRange(b)},this.selectNone=function(){
this._oSelection.removeAllRanges()},this.getCommonAncestorContainer=function(a){var b=this._W3CRange2FFRange(a);
return b.commonAncestorContainer},this.isCollapsed=function(a){var b=this._W3CRange2FFRange(a);return b.collapsed;
},this.compareEndPoints=function(a,b,c,d){var e=this._document.createRange(),f=this._document.createRange();
e.setStart(a,b),f.setStart(c,d),e.collapse(!0),f.collapse(!0);try{return e.compareBoundaryPoints(1,f);
}catch(g){return 1}},this._FFRange2W3CRange=function(a){var b=new nhn.W3CDOMRange(this._window);return b.setStart(a.startContainer,a.startOffset,!0),
b.setEnd(a.endContainer,a.endOffset,!0),b},this._W3CRange2FFRange=function(a){var b=this._document.createRange();
return b.setStart(a.startContainer,a.startOffset),b.setEnd(a.endContainer,a.endOffset),b}},nhn.BrowserSelectionImpl_IE=function(){
this._oSelection=this._document.selection,this.oLastRange={oBrowserRange:null,elStartContainer:null,
nStartOffset:-1,elEndContainer:null,nEndOffset:-1},this._updateLastRange=function(a,b){this.oLastRange.oBrowserRange=a,
this.oLastRange.elStartContainer=b.startContainer,this.oLastRange.nStartOffset=b.startOffset,this.oLastRange.elEndContainer=b.endContainer,
this.oLastRange.nEndOffset=b.endOffset},this.getRangeAt=function(a){a=a||0;var b,c;if("Control"==this._oSelection.type){
b=new nhn.W3CDOMRange(this._window);var d=this._oSelection.createRange().item(a);return d&&d.ownerDocument==this._document?(b.selectNode(d),
b):b}c=this._oSelection.createRange();var d=c.parentElement();return b=d&&d.ownerDocument==this._document?this._IERange2W3CRange(c):new nhn.W3CDOMRange(this._window);
},this.addRange=function(a){var b=this._W3CRange2IERange(a);b.select()},this.selectNone=function(){this._oSelection.empty();
},this.getCommonAncestorContainer=function(a){return this._W3CRange2IERange(a).parentElement()},this.isCollapsed=function(a){
var b=this._W3CRange2IERange(a),c=b.duplicate();return c.collapse(),b.isEqual(c)},this.compareEndPoints=function(a,b,c,d){
var e,f;return a===this.oLastRange.elStartContainer&&b===this.oLastRange.nStartOffset?(e=this.oLastRange.oBrowserRange.duplicate(),
e.collapse(!0)):a===this.oLastRange.elEndContainer&&b===this.oLastRange.nEndOffset?(e=this.oLastRange.oBrowserRange.duplicate(),
e.collapse(!1)):e=this._getIERangeAt(a,b),c===this.oLastRange.elStartContainer&&d===this.oLastRange.nStartOffset?(f=this.oLastRange.oBrowserRange.duplicate(),
f.collapse(!0)):c===this.oLastRange.elEndContainer&&d===this.oLastRange.nEndOffset?(f=this.oLastRange.oBrowserRange.duplicate(),
f.collapse(!1)):f=this._getIERangeAt(c,d),e.compareEndPoints("StartToStart",f)},this._W3CRange2IERange=function(a){
if(this.oLastRange.elStartContainer===a.startContainer&&this.oLastRange.nStartOffset===a.startOffset&&this.oLastRange.elEndContainer===a.endContainer&&this.oLastRange.nEndOffset===a.endOffset)return this.oLastRange.oBrowserRange;
var b=this._getIERangeAt(a.startContainer,a.startOffset),c=this._getIERangeAt(a.endContainer,a.endOffset);
return b.setEndPoint("EndToEnd",c),this._updateLastRange(b,a),b},this._getIERangeAt=function(a,b){var c=this._document.body.createTextRange(),d=this._getSelectableNodeAndOffsetForIE(a,b),e=d.oSelectableNodeForIE,f=d.iOffsetForIE;
return c.moveToElementText(e),c.collapse(d.bCollapseToStart),c.moveStart("character",f),c},this._getSelectableNodeAndOffsetForIE=function(a,b){
var c=null,d=null,e=0;3==a.nodeType?(c=nhn.DOMFix.parentNode(a),d=nhn.DOMFix.childNodes(c),e=d.length):(c=a,
d=nhn.DOMFix.childNodes(c),e=b<d.length?b:d.length);for(var f=null,g=0,h=!0,i=0;e>i;i++)if(f=d[i],3==f.nodeType){
if(f==a)break;g+=f.nodeValue.length}else c=f,g=0,h=!1;return 3==a.nodeType&&(g+=b),{oSelectableNodeForIE:c,
iOffsetForIE:g,bCollapseToStart:h}},this._IERange2W3CRange=function(a){var b=new nhn.W3CDOMRange(this._window),c=null,d=null;
c=a.duplicate(),c.collapse(!0),d=this._getW3CContainerAndOffset(c,!0),b.setStart(d.oContainer,d.iOffset,!0,!0);
var e=a.duplicate();return e.collapse(!0),e.isEqual(a)?b.collapse(!0):(c=a.duplicate(),c.collapse(!1),
d=this._getW3CContainerAndOffset(c),b.setEnd(d.oContainer,d.iOffset,!0)),this._updateLastRange(a,b),
b},this._getW3CContainerAndOffset=function(a,b){for(var c=a,d=c.parentElement(),e=-1,f=this._document.body.createTextRange(),g=nhn.DOMFix.childNodes(d),h=null,i=0,j=0;j<g.length;j++)if(3!=g[j].nodeType){
if(f.moveToElementText(g[j]),f.compareEndPoints("StartToStart",a)>=0)break;h=g[j]}var i=j;if(0!==i&&3==g[i-1].nodeType){
var k=this._document.body.createTextRange(),l=null;h?(k.moveToElementText(h),k.collapse(!1),l=h.nextSibling):(k.moveToElementText(d),
k.collapse(!0),l=d.firstChild);var m=c.duplicate();m.setEndPoint("StartToStart",k);for(var n=m.text.replace(/[\r\n]/g,"").length;n>l.nodeValue.length&&l.nextSibling;)n-=l.nodeValue.length,
l=l.nextSibling;{l.nodeValue}b&&l.nextSibling&&3==l.nextSibling.nodeType&&n==l.nodeValue.length&&(n-=l.nodeValue.length,
l=l.nextSibling),d=l,e=n}else d=c.parentElement(),e=i;return{oContainer:d,iOffset:e}}},nhn.DOMFix=new(jindo.$Class({
$init:function(){jindo.$Agent().navigator().ie||jindo.$Agent().navigator().opera?(this.childNodes=this._childNodes_Fix,
this.parentNode=this._parentNode_Fix):(this.childNodes=this._childNodes_Native,this.parentNode=this._parentNode_Native);
},_parentNode_Native:function(a){return a.parentNode},_parentNode_Fix:function(a){if(!a)return a;for(;a.previousSibling;)a=a.previousSibling;
return a.parentNode},_childNodes_Native:function(a){return a.childNodes},_childNodes_Fix:function(a){
var b=null,c=0;if(a){var b=[];for(a=a.firstChild;a;)b[c++]=a,a=a.nextSibling}return b}})),window.nhn=window.nhn||{},
nhn.husky=nhn.husky||{},nhn.husky.SE2M_Configuration=nhn.husky.SE2M_Configuration||{},nhn.husky.SE2M_Configuration.Editor={
sJsBaseURL:"/js_src/com/nhncorp/mail/write/se2_new/js_src/",sImageBaseURL:"https://"+wm.staticDomain+"/static/pwe/nm/se2_new"
},nhn.husky.SE2M_Configuration.LazyLoad={sJsBaseURI:"/js_src/com/nhncorp/mail/write/se2_new/js_lazyload"
},nhn.husky.SE2M_Configuration.SE2B_CSSLoader={sCSSBaseURI:"/css/se2_new/"+cCode+"/"},nhn.husky.SE2M_Configuration.SE_EditingAreaManager={
sCSSBaseURI:"/css/se2_new/",sBlankPageURL:"/js_src/com/nhncorp/mail/write/se2_new/smart_editor2_inputarea.html?version=20190704&type="+("worksmobile.com"==document.domain?"domain":"personal"),
sBlankPageURL_EmulateIE7:"/js_src/com/nhncorp/mail/write/se2_new/smart_editor2_inputarea_ie8.html?version=20190704&type="+("worksmobile.com"==document.domain?"domain":"personal"),
aAddtionalEmulateIE7:[9,10]},nhn.husky.SE2M_Configuration.LinkageDomain={sCommonAPI:"http://api.se2.naver.com",
sCommonStatic:"http://static.se2.naver.com",sCommonImage:"http://images.se2.naver.com",sCommonThumbnail:"http://thumbnails.se2.naver.net",
sGutSearch:"/json",sPhoto:"http://blog.naver.com",sMapView:"http://test.mashup.map.naver.com"},nhn.husky.SE2M_Configuration.SE2M_Accessibility={
sBeforeElementId:"",sNextElementId:"",sTitleElementId:""},nhn.husky.SE2M_Configuration.SpellChecker={
bUseXHR:!0,nMaxSuggestions:100,bKeepSuggestionLayerInEditingArea:!1,sSpellCheckerURL:nhn.husky.SE2M_Configuration.LinkageDomain.sGutSearch+"/speller/spellCheck.json",
sWordSuggestionURL:nhn.husky.SE2M_Configuration.LinkageDomain.sGutSearch+"/speller/spellSuggest.json"
},nhn.husky.SE2M_Configuration.Quote={sImageBaseURL:"http://static.se2.naver.com/static/img"},nhn.husky.SE2M_Configuration.CustomObject={
sVersion:1,sClassName:"__se_object",sValueName:"jsonvalue",sTagIdPrefix:"se_object_",sTailComment:"<!--__se_object_end -->",
sBlankTemplateURL:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonStatic+"/static/db_attach/iframe_template_for_se1_obj.html",
sAttributeOfEmpty:'s_isempty="true"',sAttributeOfOldDB:'s_olddb="true"',sBlock:'<div class="_block" style="position:absolute;z-index:10000;background-color:#fff;"></div>',
sBlockTemplate:"<div[\\s\\S]*?class=['\"]?_block['\"]?[\\s\\S]*?</div>",sHighlight:'<div class="_highlight" style="position:absolute;width:58px;height:16px;line-height:0;z-index:9999"><img src="'+nhn.husky.SE2M_Configuration.LinkageDomain.sCommonStatic+'/static/img/pencil2.png" alt="" width="58" height="16" style="vertical-align:top"></div>',
sHighlightTemplate:"<div[\\s\\S]*?class=['\"]?_highlight['\"]?[\\s\\S]*?</div>",sHtmlTemplateStartTag:"<!-- se_object_template_start -->",
sHtmlTemplateEndTag:"<!-- se_object_template_end -->",sHtmlFilterTag:"{=sType}_{=sSubType}_{=nSeq}",
sTplHtmlFilterTag:"<!--{=sType}_{=sSubType}_(\\d+)-->",sImgComServerPath:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonStatic+"/static/img/reviewitem",
nMaxWidth:548},nhn.husky.SE2M_Configuration.ObjectParamFilter={aInvalidParam:["enablehtmlaccess"]},nhn.husky.SE2M_Configuration.AttachPhoto={
sClassName:"__se_object",s_type:"attachment",sPopUpURL:nhn.husky.SE2M_Configuration.LinkageDomain.sPhoto+"/AttachPhotoWebtopForm.nhn",
sUploadUrl:"http://test.upphoto.naver.com",sAttachDomain:"http://blogfiles.naver.net",sThumbAttachDomain:"http://blogthumb2.naver.net",
storyPhoto:{s_subtype:"storyphoto",sFakePath:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonStatic+"/static/img/alter_photo_",
sThumbPath:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonStatic+"/static/img/attach_thumb_photo",
rxHtmlTpl:/<div([^>]*)[\s]* s_subtype[\s]*=(?:|'|")storyphoto(?:|'|").*?>\.?<\/div>/gi,rxImgTpl:/<img[^>]*[\s]*s_subtype[\s]*=(?:|'|")storyphoto(?:|'|").*?>/gi,
irToDbTpl:'<div class="__se_object" id="{STAGID}" s_type="attachment"  s_subtype="storyphoto"  jsonvalue="{JSONVALUE}"></div>',
dbToIrTpl:'<img id="{=sId}" src="{=src}" sxml="{=sFileURL}" imgqe="false" class="__se_object"  nWidth="{=nWidth}" nHeight="{=nHeight}"  s_type="attachment"  s_subtype="storyphoto"  jsonvalue="{=jsonvalue}" >',
sFilterTag:"<!--attachment_storyphoto_{IDX}-->",rxFilter:/\<\!\-\-attachment\_storyphoto\_.+?\-\-\>/gi,
bAllowSeObjectEdit:"true",bImageQE:"false"},photo:{s_subtype:"photo",rxHtmlTpl:/<div([^>]*)[\s]* s_subtype[\s]*=(?:|'|")photo(?:|'|").*?>\.?<\/div>/gi,
rxImgTpl:/<img[^>]*[\s]*s_subtype[\s]*=(?:|'|")photo(?:|'|").*?>/gi,sFilterTag:"<!--attachment_photo_{IDX}-->",
rxFilter:/\<\!\-\-attachment\_photo\_.+?\-\-\>/gi,bAllowSeObjectEdit:"true",bImageQE:"true"},slidePhoto:{
wizImgTpl:'<img class="__se_object" s_type="attachment"  s_subtype="slidephoto" imgqe="false"  src="'+nhn.husky.SE2M_Configuration.LinkageDomain.sCommonStatic+'/static/img/alter_photo_slide_old.png" width="460" height="325" jsonvalue="{JSONVALUE}" >',
irToDbTpl:'<div class="__se_object"  s_type="attachment"  s_subtype="slidephoto"  jsonvalue="{JSONVALUE}"></div>',
rxHtmlTpl:/<div([^>]*)[\s]* s_subtype[\s]*=(?:|'|")slidephoto(?:|'|").*?>\.?<\/div>/gi,rxImgTpl:/<img[^>]*[\s]*s_subtype[\s]*=(?:|'|")slidephoto(?:|'|").*?>/gi,
sFilterTag:"<!--attachment_slidephoto_{IDX}-->",rxFilter:/\<\!\-\-attachment\_slidephoto\_.+?\-\-\>/gi
},layoutPhoto:{wizImgTpl:'<img class="__se_object" s_type="attachment"  s_subtype="layoutphoto" imgqe="false"  src="'+nhn.husky.SE2M_Configuration.LinkageDomain.sCommonStatic+'/static/img/alter_photo_layout_old.png" width="460" height="325" jsonvalue="{JSONVALUE}" >',
irToDbTpl:'<div class="__se_object" s_type="attachment"  s_subtype="layoutphoto"  jsonvalue="{JSONVALUE}"></div>',
rxHtmlTpl:/<div([^>]*)[\s]* s_subtype[\s]*=(?:|'|")layoutphoto(?:|'|").*?>\.?<\/div>/gi,rxImgTpl:/<img[^>]*[\s]*s_subtype[\s]*=(?:|'|")layoutphoto(?:|'|").*?>/gi,
sFilterTag:"<!--attachment_layoutphoto_{IDX}-->",rxFilter:/\<\!\-\-attachment\_layoutphoto\_.+?\-\-\>/gi
}},nhn.husky.SE2M_Configuration.SE2M_AttachMap={sUploadURL:"http://test.mapview.naver.com",sServiceId:"se",
sServiceURL:"blog.naver.com",sDummyImgURL:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonStatic+"/static/img/alter_map.png",
sThumbnailURL:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonStatic+"/static/img/attach_thumb_map.gif"
},nhn.husky.SE2M_Configuration.QuickEditor={common:{bUseConfig:!1,sBaseAjaxUrl:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonAPI+"/1/properties/TextGet.nhn",
sAddTextAjaxUrl:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonAPI+"/1/properties/TextUpdate.nhn"
},Image:{nImageMaxWidthSize:9999,nImageMaxHeightSize:9999,sMsg:"가로 800px, 세로 900px을 초과하실 수 없습니다."}},
nhn.husky.SE2M_Configuration.SE2M_Emoticon={sImgBaseURL:nhn.husky.SE2M_Configuration.Editor.sImageBaseURL+"/emoticon/",
sUserImgBaseURL:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonImage+"/",sCallbackURL:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonStatic+"/static/callback.nhn"
},nhn.husky.SE2M_Configuration.SE2M_ColorPalette={bUseRecentColor:!1,addColorURL:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonAPI+"/1/colortable/TextAdd.nhn",
updateColorURL:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonAPI+"/1/colortable/TextUpdate.nhn",
colorListURL:nhn.husky.SE2M_Configuration.LinkageDomain.sCommonAPI+"/1/colortable/TextList.nhn"},nhn.husky.SE2M_Configuration.AttachCommon={
STATUS:{C:"add",D:"remove",U:"update",K:"keep"},UNIT_INFO:{B:{nByte:1,sTxtUnit:"B"},K:{nByte:1024,sTxtUnit:"KB"
},M:{nByte:1048576,sTxtUnit:"MB"}},ALLOW_TYPE:{FILE:{F:"파일"},KEEP:{L:"구 레이아웃",S:"구 슬라이드"},THUMBNAIL:{
I:"사진/그림",T:"스토리포토",U:"스토리포토에 포함된 사진",M:"동영상",C:"일정",Y:"음악(뮤직플레이어)",P:"지도",X:"수식",G:"로고",V:"투표"}}},nhn.husky.SE2M_Configuration.SE2M_ThumbnailManager={
SCROLL_HEIGHT:198,bUsePhotographInfo:!1,sTplObject:'<li id="{=sTagId}" class="__se_object"><span class="thumb_wrap"><img id="{=sTagId}" src="{=sThumbnailUrl}" class="__se_object" s_type="{=sType}" s_subtype="{=sSubType}" jsonvalue="{=sTagJsonValue}"><span class="se2_file_skin"></span></span><button type="button" title="삭제"><span>삭제</span></button></li>'
},nhn.husky.SE2M_Configuration.SE2M_EditingAreaRuler={890:{sStyle:"width:741px; margin:20px 0 10px 64px"
},698:{sStyle:"width:548px; margin:20px 0 10px 64px"}},nhn.husky.SE2M_Toolbar=jindo.$Class({name:"SE2M_Toolbar",
toolbarArea:null,toolbarButton:null,uiNameTag:"uiName",nUIStatus:1,sUIClassPrefix:"husky_seditor_ui_",
aUICmdMap:null,elFirstToolbarItem:null,_assignHTMLElements:function(a){a=jindo.$(a)||document,this.rxUI=new RegExp(this.sUIClassPrefix+"([^ ]+)"),
this.toolbarArea=jindo.$$.getSingle(".se2_tool",a),this.aAllUI=jindo.$$("[class*="+this.sUIClassPrefix+"]",this.toolbarArea),
this.elTextTool=jindo.$$.getSingle("div.husky_seditor_text_tool",this.toolbarArea),this.welToolbarArea=jindo.$Element(this.toolbarArea);
for(var b=0,c=this.aAllUI.length;c>b;b++)if(this.rxUI.test(this.aAllUI[b].className)){var d=RegExp.$1;
if(void 0!==this.htUIList[d])continue;this.htUIList[d]=this.aAllUI[b],this.htWrappedUIList[d]=jindo.$Element(this.htUIList[d]);
}null!=jindo.$$.getSingle("DIV.se2_icon_tool")&&(this.elFirstToolbarItem=jindo.$$.getSingle("DIV.se2_icon_tool UL.se2_itool1>li>button"));
},$LOCAL_BEFORE_FIRST:function(){var a=jindo.$$(">ul>li[class*="+this.sUIClassPrefix+"]>button",this.elTextTool),b=a.length;
this.elFirstToolbarItem=this.elFirstToolbarItem||a[0],this.elLastToolbarItem=a[b-1],this.oApp.registerBrowserEvent(this.toolbarArea,"keydown","NAVIGATE_TOOLBAR",[]);
},$init:function(a,b){this._htOptions=b||{},this.htUIList={},this.htWrappedUIList={},this.aUICmdMap={},
this._assignHTMLElements(a)},$ON_MSG_APP_READY:function(){this.oApp.bMobile?this.oApp.registerBrowserEvent(this.toolbarArea,"touchstart","EVENT_TOOLBAR_TOUCHSTART"):(this.oApp.registerBrowserEvent(this.toolbarArea,"mouseover","EVENT_TOOLBAR_MOUSEOVER"),
this.oApp.registerBrowserEvent(this.toolbarArea,"mouseout","EVENT_TOOLBAR_MOUSEOUT")),this.oApp.registerBrowserEvent(this.toolbarArea,"mousedown","EVENT_TOOLBAR_MOUSEDOWN"),
this.oApp.exec("ADD_APP_PROPERTY",["getToolbarButtonByUIName",jindo.$Fn(this.getToolbarButtonByUIName,this).bind()]);
var a=jindo.$$.getSingle(".se2_tool");this.oApp.exec("REGISTER_HOTKEY",["esc","FOCUS_EDITING_AREA",[],a]),
this._htOptions.aDisabled&&(this._htOptions._sDisabled=","+this._htOptions.aDisabled.toString()+",",
this.oApp.exec("DISABLE_UI",[this._htOptions.aDisabled]))},$ON_NAVIGATE_TOOLBAR:function(a){var b=9;a.element==this.elLastToolbarItem&&a.key().keyCode==b&&(a.key().shift||(this.elFirstToolbarItem.focus(),
a.stopDefault())),a.element==this.elFirstToolbarItem&&a.key().keyCode==b&&a.key().shift&&(a.stopDefault(),
this.elLastToolbarItem.focus())},$ON_FOCUS_EDITING_AREA:function(){this.oApp.exec("FOCUS")},$ON_TOGGLE_TOOLBAR_ACTIVE_LAYER:function(a,b,c,d,e,f){
this.oApp.exec("TOGGLE_ACTIVE_LAYER",[a,"MSG_TOOLBAR_LAYER_SHOWN",[a,b,c,d],e,f])},$ON_MSG_TOOLBAR_LAYER_SHOWN:function(a,b,c,d){
this.oApp.exec("POSITION_TOOLBAR_LAYER",[a,b]),c&&this.oApp.exec(c,d)},$ON_SHOW_TOOLBAR_ACTIVE_LAYER:function(a,b,c,d){
this.oApp.exec("SHOW_ACTIVE_LAYER",[a,b,c]),this.oApp.exec("POSITION_TOOLBAR_LAYER",[a,d])},$ON_ENABLE_UI:function(a){
this._enableUI(a)},$ON_DISABLE_UI:function(a){if(a instanceof Array)for(var b,c=0;b=a[c];c++)this._disableUI(b);else this._disableUI(a);
},$ON_SELECT_UI:function(a){var b=this.htWrappedUIList[a];b&&(b.removeClass("hover"),b.addClass("active"));
},$ON_DESELECT_UI:function(a){var b=this.htWrappedUIList[a];b&&b.removeClass("active")},$ON_TOGGLE_UI_SELECTED:function(a){
var b=this.htWrappedUIList[a];b&&(b.hasClass("active")?b.removeClass("active"):(b.removeClass("hover"),
b.addClass("active")))},$ON_ENABLE_ALL_UI:function(a){if(1!==this.nUIStatus){var b;a=a||{};var c=jindo.$A(a.aExceptions||[]);
for(b in this.htUIList)b&&!c.has(b)&&this._enableUI(b);this.nUIStatus=1}},$ON_DISABLE_ALL_UI:function(a){
if(2!==this.nUIStatus){var b;a=a||{};var c=jindo.$A(a.aExceptions||[]),d=a.bLeaveActiveLayer||!1;d||this.oApp.exec("HIDE_ACTIVE_LAYER");
for(b in this.htUIList)b&&!c.has(b)&&this._disableUI(b);this.nUIStatus=2}},$ON_MSG_STYLE_CHANGED:function(a,b){
"@^"===b?this.oApp.exec("SELECT_UI",[a]):this.oApp.exec("DESELECT_UI",[a])},$ON_POSITION_TOOLBAR_LAYER:function(a,b){
var c,d,e,f;a=jindo.$(a),b=b||{};var g=jindo.$(b.elBtn),h=b.sAlign,i=-1;if(a){g&&g.tagName&&"BUTTON"==g.tagName&&g.parentNode.appendChild(a);
var j=jindo.$Element(a);"right"!=h?(a.style.left="0",c=j.offset().left,d=c+a.offsetWidth,e=this.welToolbarArea.offset().left,
f=e+this.toolbarArea.offsetWidth,d>f&&j.css("left",f-d-i+"px"),e>c&&j.css("left",e-c+i+"px")):(a.style.right="0",
c=j.offset().left,d=c+a.offsetWidth,e=this.welToolbarArea.offset().left,f=e+this.toolbarArea.offsetWidth,
d>f&&j.css("right",-1*(f-d-i)+"px"),e>c&&j.css("right",-1*(e-c+i)+"px"))}},$ON_EVENT_TOOLBAR_MOUSEOVER:function(a){
if(2!==this.nUIStatus)for(var b=this._getAffectedElements(a.element),c=0;c<b.length;c++)b[c].hasClass("active")||b[c].addClass("hover");
},$ON_EVENT_TOOLBAR_MOUSEOUT:function(a){if(2!==this.nUIStatus)for(var b=this._getAffectedElements(a.element),c=0;c<b.length;c++)b[c].removeClass("hover");
},$ON_EVENT_TOOLBAR_MOUSEDOWN:function(a){for(var b=a.element;b;){if(b.className&&b.className.match(/active/)&&(b.childNodes.length>2||b.parentNode.className.match(/se2_pair/)))return;
b=b.parentNode}this.oApp.exec("HIDE_ACTIVE_LAYER_IF_NOT_CHILD",[a.element])},_enableUI:function(a){if(!(this._htOptions._sDisabled&&this._htOptions._sDisabled.indexOf(","+a+",")>-1)){
var b,c;this.nUIStatus=0;var d=this.htWrappedUIList[a],e=this.htUIList[a];if(d){d.removeClass("off");
var f=e.getElementsByTagName("BUTTON");for(b=0,c=f.length;c>b;b++)f[b].disabled=!1;var g="";if(this.aUICmdMap[a])for(b=0;b<this.aUICmdMap[a].length;b++)g=this.aUICmdMap[a][b],
this.oApp.exec("ENABLE_MESSAGE",[g])}}},_disableUI:function(a){var b,c;this.nUIStatus=0;var d=this.htWrappedUIList[a],e=this.htUIList[a];
if(d){d.addClass("off"),d.removeClass("hover");var f=e.getElementsByTagName("BUTTON");for(b=0,c=f.length;c>b;b++)f[b].disabled=!0;
var g="";if(this.aUICmdMap[a])for(b=0;b<this.aUICmdMap[a].length;b++)g=this.aUICmdMap[a][b],this.oApp.exec("DISABLE_MESSAGE",[g]);
}},_getAffectedElements:function(a){var b,c;if(!a.bSE2_MDCancelled){a.bSE2_MDCancelled=!0;for(var d=a.getElementsByTagName("BUTTON"),e=0,f=d.length;f>e;e++)d[e].onmousedown=function(){
return!1}}if(!a||!a.tagName)return[];if("BUTTON"==(b=a).tagName)return(b=b.parentNode)&&"LI"==b.tagName&&this.rxUI.test(b.className)?[jindo.$Element(b)]:(b=a,
(b=b.parentNode.parentNode)&&"LI"==b.tagName&&(c=jindo.$Element(b)).hasClass("se2_pair")?[c,jindo.$Element(a.parentNode)]:[]);
if("SPAN"==(b=a).tagName){if((b=b.parentNode.parentNode)&&"LI"==b.tagName&&this.rxUI.test(b.className))return[jindo.$Element(b)];
if((b=b.parentNode)&&"LI"==b.tagName&&this.rxUI.test(b.className))return[jindo.$Element(b)]}return[];
},$ON_REGISTER_UI_EVENT:function(a,b,c,d){if(this.htUIList[a]){var e;this.aUICmdMap[a]||(this.aUICmdMap[a]=[]),
this.aUICmdMap[a][this.aUICmdMap[a].length]=c,e=jindo.$$.getSingle("button",this.htUIList[a]),e&&this.oApp.registerBrowserEvent(e,b,c,d);
}},getToolbarButtonByUIName:function(a){return jindo.$$.getSingle("BUTTON",this.htUIList[a])}}),nhn.husky.SE2B_Customize_ToolBar=jindo.$Class({
name:"SE2B_Customize_ToolBar",$init:function(a){this._assignHTMLElements(a)},$BEFORE_MSG_APP_READY:function(){
this._addEventMoreButton()},_assignHTMLElements:function(a){this.oAppContainer=a,this.elTextToolBarArea=jindo.$$.getSingle("div.se2_tool"),
this.elTextMoreButton=jindo.$$.getSingle("button.se2_text_tool_more",this.elTextToolBarArea),this.elTextMoreButtonParent=this.elTextMoreButton.parentNode,
this.welTextMoreButtonParent=jindo.$Element(this.elTextMoreButtonParent),this.elMoreLayer=jindo.$$.getSingle("div.se2_sub_text_tool");
},_addEventMoreButton:function(){this.oApp.registerBrowserEvent(this.elTextMoreButton,"click","EVENT_CLICK_EXPAND_VIEW"),
this.oApp.registerBrowserEvent(this.elMoreLayer,"click","EVENT_CLICK_EXPAND_VIEW")},$ON_EVENT_CLICK_EXPAND_VIEW:function(a){
this.oApp.exec("TOGGLE_EXPAND_VIEW",[this.elTextMoreButton]),a.stop()},$ON_TOGGLE_EXPAND_VIEW:function(){
this.oApp.exec(this.welTextMoreButtonParent.hasClass("active")?"HIDE_EXPAND_VIEW":"SHOW_EXPAND_VIEW");
},$ON_CHANGE_EDITING_MODE:function(a){"WYSIWYG"!=a?(this.elTextMoreButton.disabled=!0,this.welTextMoreButtonParent.removeClass("active"),
this.oApp.exec("HIDE_EXPAND_VIEW")):this.elTextMoreButton.disabled=!1},$AFTER_SHOW_ACTIVE_LAYER:function(){
this.oApp.exec("HIDE_EXPAND_VIEW")},$AFTER_SHOW_DIALOG_LAYER:function(){this.oApp.exec("HIDE_EXPAND_VIEW");
},$ON_SHOW_EXPAND_VIEW:function(){this.welTextMoreButtonParent.addClass("active"),this.elMoreLayer.style.display="block";
},$ON_HIDE_EXPAND_VIEW:function(){this.welTextMoreButtonParent.removeClass("active"),this.elMoreLayer.style.display="none";
},$ON_RESET_TOOLBAR:function(){"WYSIWYG"===this.oApp.getEditingMode()&&(this.oApp.exec("END_SPELLCHECK"),
this.oApp.exec("DISABLE_ALL_UI"),this.oApp.exec("ENABLE_ALL_UI"),this.oApp.exec("RESET_STYLE_STATUS"),
this.oApp.exec("CHECK_STYLE_CHANGE"),this.oApp.exec("APPLY_FONTCOLOR",["#000000"]),this.oApp.exec("HIDE_EXPAND_VIEW"));
}}),nhn.husky.ActiveLayerManager=jindo.$Class({name:"ActiveLayerManager",oCurrentLayer:null,$BEFORE_MSG_APP_READY:function(){
this.oNavigator=jindo.$Agent().navigator()},$ON_TOGGLE_ACTIVE_LAYER:function(a,b,c,d,e){a==this.oCurrentLayer?this.oApp.exec("HIDE_ACTIVE_LAYER",[]):(this.oApp.exec("SHOW_ACTIVE_LAYER",[a,d,e]),
b&&this.oApp.exec(b,c))},$ON_SHOW_ACTIVE_LAYER:function(a,b,c){a=jindo.$(a);var d=this.oCurrentLayer;
a!=d&&(this.oApp.exec("HIDE_ACTIVE_LAYER",[]),this.sOnCloseCmd=b,this.aOnCloseParam=c,a.style.display="block",
this.oCurrentLayer=a,this.oApp.exec("ADD_APP_PROPERTY",["oToolBarLayer",this.oCurrentLayer]))},$ON_HIDE_ACTIVE_LAYER:function(){
var a=this.oCurrentLayer;a&&(a.style.display="none",this.oCurrentLayer=null,this.sOnCloseCmd&&this.oApp.exec(this.sOnCloseCmd,this.aOnCloseParam));
},$ON_HIDE_ACTIVE_LAYER_IF_NOT_CHILD:function(a){for(var b=a;b;){if(b==this.oCurrentLayer)return;b=b.parentNode;
}this.oApp.exec("HIDE_ACTIVE_LAYER")},$ON_HIDE_CURRENT_ACTIVE_LAYER:function(){this.oApp.exec("HIDE_ACTIVE_LAYER",[]);
}}),nhn.husky.AjaxFlashChecker=jindo.$Class({name:"AjaxFlashChecker",status:nhn.husky.PLUGIN_STATUS.NOT_READY,
$init:function(a){a=a||{},this.nTimeout=a.nTimeout||500,this._chkFlash()},_chkFlash:function(){jindo.$Ajax.SWFRequest.activeFlash?this.status=nhn.husky.PLUGIN_STATUS.READY:--this.nTimeout<0?this.status=nhn.husky.PLUGIN_STATUS.READY:setTimeout(jindo.$Fn(this._chkFlash,this).bind(),10);
}}),nhn.husky.DialogLayerManager=jindo.$Class({name:"DialogLayerManager",aMadeDraggable:null,aOpenedLayers:null,
$init:function(){this.aMadeDraggable=[],this.aDraggableLayer=[],this.aOpenedLayers=[]},$BEFORE_MSG_APP_READY:function(){
this.oNavigator=jindo.$Agent().navigator()},$ON_MSG_APP_READY:function(){this.oApp.registerLazyMessage(["SHOW_DIALOG_LAYER","TOGGLE_DIALOG_LAYER"],["hp_DialogLayerManager$Lazy.js","N_DraggableLayer.js"]);
}}),nhn.husky.MessageManager=jindo.$Class({name:"MessageManager",oMessageMap:null,sLocale:"ko_KR",$init:function(a,b){
switch(b){case"ja_JP":this.oMessageMap=oMessageMap_ja_JP;break;case"en_US":this.oMessageMap=oMessageMap_en_US;
break;case"zh_CN":this.oMessageMap=oMessageMap_zh_CN;break;case"zh_TW":this.oMessageMap=oMessageMap_zh_TW;
break;default:this.oMessageMap=a}},$BEFORE_MSG_APP_READY:function(){this.oApp.exec("ADD_APP_PROPERTY",["$MSG",jindo.$Fn(this.getMessage,this).bind()]);
},getMessage:function(a){return this.oMessageMap[a]?unescape(this.oMessageMap[a]):a}}),nhn.husky.PopUpManager={},
nhn.husky.PopUpManager._instance=null,nhn.husky.PopUpManager._pluginKeyCnt=0,nhn.husky.PopUpManager.getInstance=function(a){
return null==this._instance&&(this._instance=new function(){this._whtPluginWin=new jindo.$H,this._whtPlugin=new jindo.$H,
this.addPlugin=function(a,b){this._whtPlugin.add(a,b)},this.getPlugin=function(){return this._whtPlugin;
},this.getPluginWin=function(){return this._whtPluginWin},this.openWindow=function(a){var b={oApp:null,
sUrl:"",sName:"popup",sLeft:null,sTop:null,nWidth:400,nHeight:400,sProperties:null,bScroll:!0};for(var c in a)b[c]=a[c];
null==b.oApp&&alert("팝업 요청시 옵션으로 oApp(허스키 reference) 값을 설정하셔야 합니다.");var d=b.sLeft||(screen.availWidth-b.nWidth)/2,e=b.sTop||(screen.availHeight-b.nHeight)/2,f=null!=b.sProperties?b.sProperties:"top="+e+",left="+d+",width="+b.nWidth+",height="+b.nHeight+",scrollbars="+(b.bScroll?"yes":"no")+",status=yes",g=window.open(b.sUrl,b.sName,f);
return g&&setTimeout(function(){try{g.focus()}catch(a){}},100),this.removePluginWin(g),this._whtPluginWin.add(this.getCorrectKey(this._whtPlugin,b.oApp),g),
g},this.getCorrectKey=function(a,b){var c=null;return a.forEach(function(a,d){return a==b?void(c=d):void 0;
}),c},this.removePluginWin=function(a){var b=this._whtPluginWin.search(a);b&&(this._whtPluginWin.remove(b),
this.removePluginWin(a))}}),this._instance.addPlugin("plugin_"+this._pluginKeyCnt++,a),nhn.husky.PopUpManager._instance;
},nhn.husky.PopUpManager.setCallback=function(a,b,c){if(this._instance.getPluginWin().hasValue(a)){var d=this._instance.getCorrectKey(this._instance.getPluginWin(),a);
d&&this._instance.getPlugin().$(d).exec(b,c)}},nhn.husky.PopUpManager.getFunc=function(a,b){if(this._instance.getPluginWin().hasValue(a)){
var c=this._instance.getCorrectKey(this._instance.getPluginWin(),a);if(c)return this._instance.getPlugin().$(c)[b]();
}},nhn.husky.SE2B_CSSLoader=jindo.$Class({name:"SE2B_CSSLoader",bCssLoaded:!1,aInstantLoadTrigger:["OPEN_QE_LAYER","SHOW_ACTIVE_LAYER","SHOW_DIALOG_LAYER","START_SPELLCHECK"],
aDelayedLoadTrigger:["MSG_SE_OBJECT_EDIT_REQUESTED","OBJECT_MODIFY","MSG_SE_DUMMY_OBJECT_EDIT_REQUESTED","TOGGLE_TOOLBAR_ACTIVE_LAYER","SHOW_TOOLBAR_ACTIVE_LAYER"],
$init:function(){if(this.htOptions=nhn.husky.SE2M_Configuration.SE2B_CSSLoader,jindo.$Agent().navigator().ie){
for(var a=0,b=this.aInstantLoadTrigger.length;b>a;a++)this["$BEFORE_"+this.aInstantLoadTrigger[a]]=jindo.$Fn(function(){
this.loadSE2CSS()},this).bind();for(var a=0,b=this.aDelayedLoadTrigger.length;b>a;a++){var c=this.aDelayedLoadTrigger[a];
this["$BEFORE_"+this.aDelayedLoadTrigger[a]]=jindo.$Fn(function(a){var b=jindo.$A(arguments).$value();
return b=b.splice(1,b.length-1),this.loadSE2CSS(a,b)},this).bind(c)}}else this.loadSE2CSS()},loadSE2CSS:function(a,b){
if(this.bCssLoaded)return!0;this.bCssLoaded=!0;var c=null;return a&&(c=jindo.$Fn(this.oApp.exec,this.oApp).bind(a,b)),
nhn.husky.SE2M_Utils.loadCSS(this.htOptions.sCSSBaseURI+"/smart_editor2_items.css",c),!1}}),"undefined"==typeof window.nhn&&(window.nhn={}),
nhn.husky||(nhn.husky={}),function(){var a=navigator.userAgent,b=jindo.$Agent(),c=b.navigator(),d=b.os(),e=a.match(/(SHW-|Chrome|Safari)/gi)||"";
2===e.length&&"SHW-"===e[0]&&"Safari"===e[1]?c.bGalaxyBrowser=!0:a.indexOf("LG-V500")>-1&&a.indexOf("Version/4.0")>-1&&(c.bGPadBrowser=!0),
"undefined"==typeof d.ios&&(d.ios=a.indexOf("iPad")>-1||a.indexOf("iPhone")>-1,d.ios&&(e=a.match(/(iPhone )?OS ([\d|_]+)/),
null!=e&&void 0!=e[2]&&(d.version=String(e[2]).split("_").join("."))))}(),nhn.husky.SE2M_UtilPlugin=jindo.$Class({
name:"SE2M_UtilPlugin",$BEFORE_MSG_APP_READY:function(){this.oApp.exec("ADD_APP_PROPERTY",["oAgent",jindo.$Agent()]),
this.oApp.exec("ADD_APP_PROPERTY",["oNavigator",jindo.$Agent().navigator()]),this.oApp.exec("ADD_APP_PROPERTY",["oUtils",this]);
},$ON_REGISTER_HOTKEY:function(a,b,c,d){this.oApp.exec("ADD_HOTKEY",[a,b,c,d||this.oApp.getWYSIWYGDocument()]);
},$ON_SE2_ATTACH_HOVER_EVENTS:function(a){this.oApp.exec("ATTACH_HOVER_EVENTS",[a,{fnElmToSrc:this._elm2Src,
fnElmToTarget:this._elm2Target}])},_elm2Src:function(a){return"LI"==a.tagName&&a.firstChild&&"BUTTON"==a.firstChild.tagName?a.firstChild:a;
},_elm2Target:function(a){return"BUTTON"==a.tagName&&"LI"==a.parentNode.tagName?a.parentNode:a},getScrollXY:function(){
var a,b,c=this.oApp.getWYSIWYGWindow();return"undefined"==typeof c.scrollX?(a=c.document.documentElement.scrollLeft,
b=c.document.documentElement.scrollTop):(a=c.scrollX,b=c.scrollY),{x:a,y:b}}}),nhn.husky.SE2M_Utils={
sURLPattern:"(http|https|ftp|mailto):(?:\\/\\/)?((:?\\w|-)+(:?\\.(:?\\w|-)+)+)([^ <>]+)?",rxDateFormat:/^(?:\d{4}\.)?\d{1,2}\.\d{1,2}$/,
_rxTable:/^(?:CAPTION|TBODY|THEAD|TFOOT|TR|TD|TH|COLGROUP|COL)$/i,isInvalidNodeInTable:function(a){if(a&&!this._rxTable.test(a.nodeName)){
var b;if((b=a.previousSibling)&&this._rxTable.test(b.nodeName))return!0;if((b=a.nextSibling)&&this._rxTable.test(b.nodeName))return!0;
}return!1},removeInvalidNodeInTable:function(a){this.isInvalidNodeInTable(a)&&a.parentNode&&a.parentNode.removeChild(a);
},reviseDateFormat:function(a){return a&&a.replace&&(a=a.replace(this.rxDateFormat,"$&.")),a},getCustomCSS:function(a,b,c){
var d=[];if("undefined"==typeof a||"undefined"==typeof b||!a||!b)return d;var e=a.match(b);return e&&e[0]&&e[1]&&(c?d=e[1].split(c):d[0]=e[1]),
d},toStringSamePropertiesOfArray:function(a,b,c){if(!a)return"";if(a instanceof Array){for(var d=[],e=0;e<a.length;e++)d.push(a[e][b]);
return d.join(",").replace(/,/g,c)}return"undefined"==typeof a[b]?"":"string"==typeof a[b]?a[b]:void 0;
},makeArray:function(a){if(null===a||"undefined"==typeof a)return[];if(a instanceof Array)return a;var b=[];
return b.push(a),b},ellipsis:function(a,b,c,d){c=c||"...","undefined"==typeof d&&(d=1);var e=jindo.$Element(a),f=jindo.$Element(b),g=e.html(),h=g.length,i=f.height(),j=0;
e.html("A");var k=f.height();if(k*(d+.5)>i)return e.html(g);for(i=k;k*(d+.5)>i;)j+=Math.max(Math.ceil((h-j)/2),1),
e.html(g.substring(0,j)+c),i=f.height();for(;i>k*(d+.5);)j--,e.html(g.substring(0,j)+c),i=f.height();
},ellipsisByPixel:function(a,b,c,d){b=b||"...";var e=jindo.$Element(a),f=e.width();if(!(c>f)){var g=e.html(),h=g.length,i=0;
if("undefined"==typeof d){var j=e.html("A").width();for(f=j;c>f;)i+=Math.max(Math.ceil((h-i)/2),1),e.html(g.substring(0,i)+b),
f=e.width();d=function(){return!0}}for(i=e.html().length-b.length;f>c&&d();)i--,e.html(g.substring(0,i)+b),
f=e.width()}},ellipsisElementsToDesinatedWidth:function(a,b,c,d){jindo.$A(a).forEach(function(a,e){a||jindo.$A.Continue(),
nhn.husky.SE2M_Utils.ellipsisByPixel(a,b,c[e],d)})},paddingZero:function(a,b){for(var c=a.toString();c.length<b;)c="0"+c;
return c},cutStringToByte:function(a,b,c){if(null===a||0===a.length)return a;a=a.replace(/  +/g," "),
c||""==c||(c="...");for(var d=b,e=0,f=a.length,g=0;f>g;g++){if(e+=this.getCharByte(a.charAt(g)),e==d)return g==f-1?a:a.substring(0,g)+c;
if(e>d)return a.substring(0,g)+c}return a},getCharByte:function(a){if(null===a||a.length<1)return 0;var b=0,c=escape(a);
return 1==c.length?b++:-1!=c.indexOf("%u")?b+=2:-1!=c.indexOf("%")&&(b+=c.length/3),b},getFilteredHashTable:function(a,b){
if(!(b instanceof Array))return arguments.callee.call(this,a,[b]);var c=jindo.$A(b);return jindo.$H(a).filter(function(a,b){
return c.has(b)&&a?!0:!1}).$value()},isBlankNode:function(a){var b=this.isBlankTextNode,c=function(a){
return a?b(a)?!0:"BR"==a.tagName?!0:"&nbsp;"==a.innerHTML||""==a.innerHTML?!0:!1:!0},d=function(a){if("IMG"==a.tagName||"IFRAME"==a.tagName)return!1;
if(c(a))return!0;if("P"==a.tagName){for(var d=a.childNodes.length-1;d>=0;d--){var e=a.childNodes[d];b(e)&&e.parentNode.removeChild(e);
}if(1==a.childNodes.length){if("IMG"==a.firstChild.tagName||"IFRAME"==a.firstChild.tagName)return!1;if(c(a.firstChild))return!0;
}}return!1};if(d(a))return!0;for(var e=0,f=a.childNodes.length;f>e;e++){var g=a.childNodes[e];if(!d(g))return!1;
}return!0},isBlankTextNode:function(a){var b;return 3==a.nodeType&&(b=a.nodeValue,b=b.replace(unescape("%uFEFF"),""),
""==b)?!0:!1},isFirstChildOfNode:function(a,b,c){return c&&c.tagName==b&&c.firstChild.tagName==a?!0:!1;
},findAncestorByTagName:function(a,b){for(;b&&b.tagName!=a;)b=b.parentNode;return b},findAncestorByTagNameWithCount:function(a,b){
for(var c=0,d={};b&&b.tagName!=a;)b=b.parentNode,c+=1;return d={elNode:b,nRecursiveCount:c}},findClosestAncestorAmongTagNames:function(a,b){
for(var c=new RegExp("^("+a.join("|")+")$","i");b&&!c.test(b.tagName);)b=b.parentNode;return b},findClosestAncestorAmongTagNamesWithCount:function(a,b){
for(var c=0,d={},e=new RegExp("^("+a.join("|")+")$","i");b&&!e.test(b.tagName);)b=b.parentNode,c+=1;return d={
elNode:b,nRecursiveCount:c}},isNumber:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},deleteProperty:function(a,b){
if("object"==typeof a&&"string"==typeof b&&"undefined"!=typeof a[b]){a[b]=void 0;try{delete a[b]}catch(c){}
}},loadCSS:function(a,b){var c=document,d=c.getElementsByTagName("HEAD")[0],e=c.createElement("LINK");
e.setAttribute("type","text/css"),e.setAttribute("rel","stylesheet"),e.setAttribute("href",a),b&&("onload"in e?e.onload=function(){
b()}:e.onreadystatechange=function(){"complete"==e.readyState&&(e.getAttribute("_complete")||(e.setAttribute("_complete",!0),
b()))}),d.appendChild(e)},getUniqueId:function(a){return(a||"")+jindo.$Date().time()+(1e5*Math.random()).toFixed();
},clone:function(a,b){if("undefined"!=typeof a&&a&&(a.constructor==Array||a.constructor==Object)){var c=a.constructor==Array?[]:{};
for(var d in a)c[d]=arguments.callee("undefined"!=typeof b&&b[d]?b[d]:a[d]);return c}return a},getHtmlTagAttr:function(a,b){
var c=new RegExp("\\s"+b+"=('([^']*)'|\"([^\"]*)\"|([^\"' >]*))","i"),d=c.exec(a);if(!d)return"";var e=d[1]||d[2]||d[3];
return e&&(e=e.replace(/[\"]/g,"")),e},iframeAlignConverter:function(a,b){var c=a.tagName.toUpperCase();
if("DIV"==c||"P"==c){if(null===a.parentNode)return;var d=b,e=jindo.$Element(a),f=e.html(),g=jindo.$Element(a).attr("align")||jindo.$Element(a).css("text-align"),h=jindo.$Element(jindo.$("<div></div>",d));
h.html(f).attr("align",g),e.replace(h)}},getJsonDatafromXML:function(a){var b={},c=/\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/gi,d=/^[0-9]+(?:\.[0-9]+)?$/,e=/^\s+$/g,f={
"&amp;":"&","&nbsp;":" ","&quot;":'"',"&lt;":"<","&gt;":">"},g={tags:["/"],stack:[b]},h=function(a){
return"undefined"==typeof a?"":a.replace(/&[a-z]+;/g,function(a){return"string"==typeof f[a]?f[a]:a});
},i=function(a,b){a.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g,function(a,c,d,e){
b[c]=h((d?d.replace(/\\"/g,'"'):void 0)||(e?e.replace(/\\'/g,"'"):void 0))})},j=function(a){for(var b in a)if(a.hasOwnProperty(b)){
if(Object.prototype[b])continue;return!1}return!0},k=function(a,b,c,f,k,l){var m,n="",o=g.stack.length-1;
if("string"==typeof b&&b)if("/"!=b.substr(0,1)){var p="string"==typeof c&&c,q="string"==typeof f&&f,r=!p&&q?"":{};
if(m=g.stack[o],"undefined"==typeof m[b])m[b]=r,m=g.stack[o+1]=m[b];else if(m[b]instanceof Array){var s=m[b].length;
m[b][s]=r,m=g.stack[o+1]=m[b][s]}else m[b]=[m[b],r],m=g.stack[o+1]=m[b][1];p&&i(c,m),g.tags[o+1]=b,q&&(g.tags.length--,
g.stack.length--)}else g.tags.length--,g.stack.length--;else"string"==typeof k&&k?n=k:"string"==typeof l&&l.replace(e,"")&&(n=h(l));
if(n.length>0){var t=g.stack[o-1],u=g.tags[o];if(d.test(n)||("true"==n||"false"==n)&&(n=new Boolean(n)),
"undefined"==typeof t)return;if(t[u]instanceof Array){var v=t[u];"object"!=typeof v[v.length-1]||j(v[v.length-1])?v[v.length-1]=n:(v[v.length-1].$cdata=n,
v[v.length-1].toString=function(){return n})}else"object"!=typeof t[u]||j(t[u])?t[u]=n:(t[u].$cdata=n,
t[u].toString=function(){return n})}};return a=a.replace(/<(\?|\!-)[^>]*>/g,""),a.replace(c,k),jindo.$Json(b);
},replaceSpecialChar:function(a){return"string"==typeof a?a.replace(/\&/g,"&amp;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;").replace(/</g,"&lt;").replace(/\>/g,"&gt;"):"";
},restoreSpecialChar:function(a){return"string"==typeof a?a.replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"):"";
}},nhn.husky.AutoResizer=jindo.$Class({welHiddenDiv:null,welCloneDiv:null,elContainer:null,$init:function(a,b){
var c=["lineHeight","textDecoration","letterSpacing","fontSize","fontFamily","fontStyle","fontWeight","textTransform","textAlign","direction","wordSpacing","fontSizeAdjust","paddingTop","paddingLeft","paddingBottom","paddingRight","width"],d=c.length,e={
position:"absolute",top:-9999,left:-9999,opacity:0,overflow:"hidden",wordWrap:"break-word"};for(this.nMinHeight=b.nMinHeight,
this.wfnCallback=b.wfnCallback,this.elContainer=a.parentNode,this.welTextArea=jindo.$Element(a),this.welHiddenDiv=jindo.$Element("<div>"),
this.wfnResize=jindo.$Fn(this._resize,this),this.sOverflow=this.welTextArea.css("overflow"),this.welTextArea.css("overflow","hidden");d--;)e[c[d]]=this.welTextArea.css(c[d]);
this.welHiddenDiv.css(e),this.nLastHeight=this.welTextArea.height()},bind:function(){this.welCloneDiv=jindo.$Element(this.welHiddenDiv.$value().cloneNode(!1)),
this.wfnResize.attach(this.welTextArea,"keyup"),this.welCloneDiv.appendTo(this.elContainer),this._resize();
},unbind:function(){this.wfnResize.detach(this.welTextArea,"keyup"),this.welTextArea.css("overflow",this.sOverflow),
this.welCloneDiv&&this.welCloneDiv.leave()},_resize:function(){var a,b=this.welTextArea.$value().value,c=!1;
b!==this.sContents&&(this.sContents=b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;").replace(/\n/g,"<br>"),
this.sContents+="<br>",this.welCloneDiv.html(this.sContents),a=this.welCloneDiv.height(),a<this.nMinHeight&&(a=this.nMinHeight),
this.welTextArea.css("height",a+"px"),this.elContainer.style.height=a+"px",this.nLastHeight<a&&(c=!0),
this.wfnCallback(c))}}),"undefined"!=typeof StringBuffer&&(StringBuffer={}),StringBuffer=function(a){
this._aString=[],"undefined"!=typeof a&&this.append(a)},StringBuffer.prototype.append=function(a){return this._aString.push(a),
this},StringBuffer.prototype.toString=function(){return this._aString.join("")},StringBuffer.prototype.setLength=function(a){
this._aString.length="undefined"==typeof a||0>=a?0:a},function(){var a=null,b=/,/gi;IsInstalledFont=function(c){
var d="Comic Sans MS"==c?"Courier New":"Comic Sans MS";a||(a=document.createElement("div"));var e="position:absolute !important; font-size:200px !important; left:-9999px !important; top:-9999px !important;";
a.innerHTML="mmmmiiiii"+unescape("%uD55C%uAE00"),a.style.cssText=e+'font-family:"'+d+'" !important';var f=document.body||document.documentElement;
f.firstChild?f.insertBefore(a,f.firstChild):document.body.appendChild(a);var g=a.offsetWidth+"-"+a.offsetHeight;
a.style.cssText=e+'font-family:"'+c.replace(b,'","')+'", "'+d+'" !important';var h=g!=a.offsetWidth+"-"+a.offsetHeight;
return document.body.removeChild(a),h}}(),nhn.husky.StringConverterManager=jindo.$Class({name:"StringConverterManager",
oConverters:null,$init:function(){this.oConverters={},this.oConverters_DOM={},this.oAgent=jindo.$Agent().navigator();
},$BEFORE_MSG_APP_READY:function(){this.oApp.exec("ADD_APP_PROPERTY",["applyConverter",jindo.$Fn(this.applyConverter,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["addConverter",jindo.$Fn(this.addConverter,this).bind()]),this.oApp.exec("ADD_APP_PROPERTY",["addConverter_DOM",jindo.$Fn(this.addConverter_DOM,this).bind()]);
},applyConverter:function(a,b,c){var d="@"+(new Date).getTime()+"@",e=new RegExp(d,"g"),f={sContents:d+b
};c=c||document,this.oApp.exec("MSG_STRING_CONVERTER_STARTED",[a,f]);var g;if(b=f.sContents,g=this.oConverters_DOM[a]){
var h=c.createElement("DIV");h.innerHTML=b;for(var i=0;i<g.length;i++)g[i](h);b=h.innerHTML,h.parentNode&&h.parentNode.removeChild(h),
h=null,jindo.$Agent().navigator().ie&&(d+="(\r\n)?",e=new RegExp(d,"g"))}if(g=this.oConverters[a])for(var i=0;i<g.length;i++){
var j=g[i](b);"undefined"!=typeof j&&(b=j)}return f={sContents:b},this.oApp.exec("MSG_STRING_CONVERTER_ENDED",[a,f]),
f.sContents=f.sContents.replace(e,""),f.sContents},$ON_ADD_CONVERTER:function(a,b){var c=this.oApp.aCallerStack;
b.sPluginName=c[c.length-2].name,this.addConverter(a,b)},$ON_ADD_CONVERTER_DOM:function(a,b){var c=this.oApp.aCallerStack;
b.sPluginName=c[c.length-2].name,this.addConverter_DOM(a,b)},addConverter:function(a,b){var c=this.oConverters[a];
c||(this.oConverters[a]=[]),this.oConverters[a][this.oConverters[a].length]=b},addConverter_DOM:function(a,b){
var c=this.oConverters_DOM[a];c||(this.oConverters_DOM[a]=[]),this.oConverters_DOM[a][this.oConverters_DOM[a].length]=b;
}}),nhn.husky.Utils=jindo.$Class({name:"Utils",$init:function(){var a=jindo.$Agent(),b=a.navigator();
if(b.ie&&6==b.version)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(c){}},$BEFORE_MSG_APP_READY:function(){
this.oApp.exec("ADD_APP_PROPERTY",["htBrowser",jindo.$Agent().navigator()])},$ON_ATTACH_HOVER_EVENTS:function(a,b){
b=b||[];var c=b.sHoverClass||"hover",d=b.fnElmToSrc||function(a){return a},e=b.fnElmToTarget||function(a){
return a};if(a)for(var f=jindo.$Fn(function(a){jindo.$Element(e(a.currentElement)).addClass(c)},this),g=jindo.$Fn(function(a){
jindo.$Element(e(a.currentElement)).removeClass(c)},this),h=0,i=a.length;i>h;h++){var j=d(a[h]);f.attach(j,"mouseover"),
g.attach(j,"mouseout"),f.attach(j,"focus"),g.attach(j,"blur")}}}),nhn.husky.HuskyCore.addLoadedFile("N_DraggableLayer.js"),
nhn.DraggableLayer=jindo.$Class({$init:function(a,b){this.elLayer=a,this.setOptions(b),this.elHandle=this.oOptions.elHandle,
a.style.display="block",a.style.position="absolute",a.style.zIndex="9999",this.aBasePosition=this.getBaseOffset(a);
var c=this.toInt(jindo.$Element(a).offset().top)-this.aBasePosition.top,d=this.toInt(jindo.$Element(a).offset().left)-this.aBasePosition.left,e=this._correctXY({
x:d,y:c});a.style.top=e.y+"px",a.style.left=e.x+"px",this.$FnMouseDown=jindo.$Fn(jindo.$Fn(this._mousedown,this).bind(a),this),
this.$FnMouseMove=jindo.$Fn(jindo.$Fn(this._mousemove,this).bind(a),this),this.$FnMouseUp=jindo.$Fn(jindo.$Fn(this._mouseup,this).bind(a),this),
this.$FnMouseDown.attach(this.elHandle,"mousedown"),this.elHandle.ondragstart=new Function("return false"),
this.elHandle.onselectstart=new Function("return false")},_mousedown:function(a,b){"INPUT"!=b.element.tagName&&(this.oOptions.fnOnDragStart(),
this.MouseOffsetY=b.pos().clientY-this.toInt(a.style.top)-this.aBasePosition.top,this.MouseOffsetX=b.pos().clientX-this.toInt(a.style.left)-this.aBasePosition.left,
this.$FnMouseMove.attach(a.ownerDocument,"mousemove"),this.$FnMouseUp.attach(a.ownerDocument,"mouseup"),
this.elHandle.style.cursor="move")},_mousemove:function(a,b){var c=b.pos().clientY-this.MouseOffsetY-this.aBasePosition.top,d=b.pos().clientX-this.MouseOffsetX-this.aBasePosition.left,e=this._correctXY({
x:d,y:c});a.style.top=e.y+"px",a.style.left=e.x+"px"},_mouseup:function(a){this.oOptions.fnOnDragEnd(),
this.$FnMouseMove.detach(a.ownerDocument,"mousemove"),this.$FnMouseUp.detach(a.ownerDocument,"mouseup"),
this.elHandle.style.cursor=""},_correctXY:function(a){var b=a.x,c=a.y;return c<this.oOptions.nMinY&&(c=this.oOptions.nMinY),
c>this.oOptions.nMaxY&&(c=this.oOptions.nMaxY),b<this.oOptions.nMinX&&(b=this.oOptions.nMinX),b>this.oOptions.nMaxX&&(b=this.oOptions.nMaxX),
{x:b,y:c}},toInt:function(a){var b=parseInt(a);return b||0},findNonStatic:function(a){return a?"BODY"==a.tagName?a:jindo.$Element(a).css("position").match(/absolute|relative/i)?a:this.findNonStatic(a.offsetParent):null;
},getBaseOffset:function(a){var b=this.findNonStatic(a.offsetParent)||a.ownerDocument.body,c=jindo.$Element(b).offset();
return{top:c.top,left:c.left}},setOptions:function(a){this.oOptions=a||{},this.oOptions.bModal=this.oOptions.bModal||!1,
this.oOptions.elHandle=this.oOptions.elHandle||this.elLayer,this.oOptions.nMinX=this.oOptions.nMinX||-999999,
this.oOptions.nMinY=this.oOptions.nMinY||-999999,this.oOptions.nMaxX=this.oOptions.nMaxX||999999,this.oOptions.nMaxY=this.oOptions.nMaxY||999999,
this.oOptions.fnOnDragStart=this.oOptions.fnOnDragStart||function(){},this.oOptions.fnOnDragEnd=this.oOptions.fnOnDragEnd||function(){};
}}),nhn.husky.LazyLoader=jindo.$Class({name:"LazyLoader",htMsgInfo:null,aLoadingInfo:null,$init:function(a){
this.htMsgInfo={},this.aLoadingInfo=[],this.aToDo=a},$ON_MSG_APP_READY:function(){for(var a=0;a<this.aToDo.length;a++){
var b=this.aToDo[a];this._createBeforeHandlersAndSaveURLInfo(b.oMsgs,b.sURL,b.elTarget,b.htOptions)}
},$LOCAL_BEFORE_ALL:function(a,b){var c=a.replace("$BEFORE_",""),d=this.htMsgInfo[c];return 1==d.nLoadingStatus?!0:2==d.nLoadingStatus?(this[a]=function(){
return this._removeHandler(a),this.oApp.delayedExec(c,b,0),!1},!0):(d.bLoadingStatus=1,new jindo.$Ajax(d.sURL,{
onload:jindo.$Fn(this._onload,this).bind(c,b)}).request(),!0)},_onload:function(a,b,c){4==c._response.readyState?(this.htMsgInfo[a].elTarget.innerHTML=c.text(),
this.htMsgInfo[a].nLoadingStatus=2,this._removeHandler("$BEFORE_"+a),this.oApp.exec("sMsg",b)):this.oApp.exec(this.htMsgInfo[a].sFailureCallback,[]);
},_removeHandler:function(a){delete this[a],this.oApp.createMessageMap(a)},_createBeforeHandlersAndSaveURLInfo:function(a,b,c,d){
d=d||{};var e={sURL:b,elTarget:c,sSuccessCallback:d.sSuccessCallback,sFailureCallback:d.sFailureCallback,
nLoadingStatus:0};if(this.aLoadingInfo[this.aLoadingInfo.legnth]=e,!(a instanceof Array)){var f=a;a=[];
var g={};for(var h in f)if(h.match(/^\$(BEFORE|ON|AFTER)_(.+)$/)){var i=RegExp.$2;if("MSG_APP_READY"==i)continue;
g[i]||(a[a.length]=RegExp.$2,g[i]=!0)}}for(var j=0;j<a.length;j++){var k="$BEFORE_"+a[j];this[k]=function(){
return!1},this.oApp.createMessageMap(k),this.htMsgInfo[a[j]]=e}}}),nhn.husky.SE_EditingArea_HTMLSrc=jindo.$Class({
name:"SE_EditingArea_HTMLSrc",sMode:"HTMLSrc",bAutoResize:!1,nMinHeight:null,$init:function(a){this.elEditingArea=jindo.$(a);
},$BEFORE_MSG_APP_READY:function(){this.oNavigator=jindo.$Agent().navigator(),this.oApp.exec("REGISTER_EDITING_AREA",[this]);
},$ON_MSG_APP_READY:function(){this.oApp.getEditingAreaHeight&&(this.nMinHeight=this.oApp.getEditingAreaHeight());
},$ON_CHANGE_EDITING_MODE:function(a){a==this.sMode?(this.elEditingArea.style.display="block",this.elEditingArea.style.position="absolute",
this.elEditingArea.style.top="0px"):(this.elEditingArea.style.display="none",this.elEditingArea.style.position="",
this.elEditingArea.style.top="")},$AFTER_CHANGE_EDITING_MODE:function(a,b){if(a==this.sMode&&!b){var c=new TextRange(this.elEditingArea);
c.setSelection(0,0)}},startAutoResize:function(){var a={nMinHeight:this.nMinHeight,wfnCallback:jindo.$Fn(this.oApp.checkResizeGripPosition,this).bind()
};this.oNavigator.msafari&&(a.wfnCallback=function(){}),this.bAutoResize=!0,this.AutoResizer=new nhn.husky.AutoResizer(this.elEditingArea,a),
this.AutoResizer.bind()},stopAutoResize:function(){this.AutoResizer.unbind()},getIR:function(){var a=this.getRawContents();
return this.oApp.applyConverter&&(a=this.oApp.applyConverter(this.sMode+"_TO_IR",a,this.oApp.getWYSIWYGDocument())),
a},setIR:function(a){("<br>"===a.toLowerCase()||"<p>&nbsp;</p>"===a.toLowerCase()||"<p><br></p>"===a.toLowerCase()||"<p></p>"===a.toLowerCase())&&(a="");
var b=jindo.$Agent().navigator();b.ie&&11==b.nativeVersion&&11==document.documentMode&&(a=a.replace(/(<br><br>$)/,""));
var c=a;this.oApp.applyConverter&&(c=this.oApp.applyConverter("IR_TO_"+this.sMode,c,this.oApp.getWYSIWYGDocument())),
this.setRawContents(c)},setRawContents:function(a){"undefined"!=typeof a&&(this.elEditingArea.value=a);
},getRawContents:function(){return this.elEditingArea.value},focus:function(){this.elEditingArea.focus();
}}),"undefined"==typeof window.TextRange&&(window.TextRange={}),TextRange=function(a,b){this._o=a,this._oDoc=b||document;
},TextRange.prototype.getSelection=function(){var a=this._o,b=[-1,-1];if(isNaN(this._o.selectionStart)){
a.focus();var c=this._oDoc.body.createTextRange(),d=null;d=this._oDoc.selection.createRange().duplicate(),
c.moveToElementText(a),d.collapse(!0),c.setEndPoint("EndToEnd",d),b[0]=c.text.length,d=this._oDoc.selection.createRange().duplicate(),
c.moveToElementText(a),d.collapse(!1),c.setEndPoint("EndToEnd",d),b[1]=c.text.length,a.blur()}else b[0]=a.selectionStart,
b[1]=a.selectionEnd;return b},TextRange.prototype.setSelection=function(a,b){var c=this._o;if("undefined"==typeof b&&(b=a),
c.setSelectionRange)c.setSelectionRange(a,b);else if(c.createTextRange){var d=c.createTextRange();d.collapse(!0),
d.moveStart("character",a),d.moveEnd("character",b-a),d.select(),c.blur()}},TextRange.prototype.copy=function(){
var a=this.getSelection();return this._o.value.substring(a[0],a[1])},TextRange.prototype.paste=function(a){
var b=this._o,c=this.getSelection(),d=b.value,e=d.substr(0,c[0]),f=d.substr(c[1]);d=e+a+f,b.value=d;var g=0;
if("undefined"==typeof this._oDoc.body.style.maxHeight){var h=e.match(/\n/gi);g=null!==h?h.length:0}
this.setSelection(c[0]+a.length-g)},TextRange.prototype.cut=function(){var a=this.copy();return this.paste(""),
a},nhn.husky.SE_EditingArea_TEXT=jindo.$Class({name:"SE_EditingArea_TEXT",sMode:"TEXT",sRxConverter:"@[0-9]+@",
bAutoResize:!1,nMinHeight:null,$init:function(a){this.elEditingArea=jindo.$(a)},$BEFORE_MSG_APP_READY:function(){
this.oNavigator=jindo.$Agent().navigator(),this.oApp.exec("REGISTER_EDITING_AREA",[this]),this.oApp.exec("ADD_APP_PROPERTY",["getTextAreaContents",jindo.$Fn(this.getRawContents,this).bind()]);
},$ON_MSG_APP_READY:function(){this.oApp.getEditingAreaHeight&&(this.nMinHeight=this.oApp.getEditingAreaHeight());
},$ON_REGISTER_CONVERTERS:function(){this.oApp.exec("ADD_CONVERTER",["IR_TO_TEXT",jindo.$Fn(this.irToText,this).bind()]),
this.oApp.exec("ADD_CONVERTER",["TEXT_TO_IR",jindo.$Fn(this.textToIr,this).bind()])},$ON_CHANGE_EDITING_MODE:function(a){
a==this.sMode?(this.elEditingArea.style.display="block",this.elEditingArea.style.position="absolute",
this.elEditingArea.style.top="0px"):(this.elEditingArea.style.display="none",this.elEditingArea.style.position="",
this.elEditingArea.style.top="")},$AFTER_CHANGE_EDITING_MODE:function(a,b){if(a==this.sMode&&!b){var c=new TextRange(this.elEditingArea);
c.setSelection(0,0)}},irToText:function(a){var b=a,c=0,d=b.match(new RegExp(this.sRxConverter));return null!==d&&(b=b.replace(new RegExp(this.sRxConverter),"")),
b=b.replace(/\r/g,""),b=b.replace(/[\n|\t]/g,""),b=b.replace(/[\v|\f]/g,""),b=b.replace(/<p><br><\/p>/gi,"\n"),
b=b.replace(/<P>&nbsp;<\/P>/gi,"\n"),b=b.replace(/<br(\s)*\/?>/gi,"\n"),b=b.replace(/<br(\s[^\/]*)?>/gi,"\n"),
b=b.replace(/<\/p(\s[^\/]*)?>/gi,"\n"),b=b.replace(/<\/li(\s[^\/]*)?>/gi,"\n"),b=b.replace(/<\/tr(\s[^\/]*)?>/gi,"\n"),
c=b.lastIndexOf("\n"),c>-1&&"\n"==b.substring(c)&&(b=b.substring(0,c)),b=jindo.$S(b).stripTags().toString(),
b=this.unhtmlSpecialChars(b),null!==d&&(b=d[0]+b),b},textToIr:function(a){if(a){var b=a,c=null;return c=b.match(new RegExp(this.sRxConverter)),
null!==c&&(b=b.replace(c[0],"")),b=this.htmlSpecialChars(b),b=this._addLineBreaker(b),null!==c&&(b=c[0]+b),
b}},_addLineBreaker:function(a){if("BR"===this.oApp.sLineBreaker)return a.replace(/\r?\n/g,"<BR>");for(var b=new StringBuffer,c=a.split("\n"),d=c.length,e="",f=0;d>f&&(e=jindo.$S(c[f]).trim().$value(),
f!==d-1||""!==e);f++)null!==e&&""!==e?(b.append("<P>"),b.append(c[f]),b.append("</P>")):b.append(jindo.$Agent().navigator().ie?"<P>&nbsp;</P>":"<P><BR></P>");
return b.toString()},startAutoResize:function(){var a={nMinHeight:this.nMinHeight,wfnCallback:jindo.$Fn(this.oApp.checkResizeGripPosition,this).bind()
};this.oNavigator.msafari&&(a.wfnCallback=function(){}),this.bAutoResize=!0,this.AutoResizer=new nhn.husky.AutoResizer(this.elEditingArea,a),
this.AutoResizer.bind()},stopAutoResize:function(){this.AutoResizer.unbind()},getIR:function(){var a=this.getRawContents();
return this.oApp.applyConverter&&(a=this.oApp.applyConverter(this.sMode+"_TO_IR",a,this.oApp.getWYSIWYGDocument())),
a},setIR:function(a){var b=a;this.oApp.applyConverter&&(b=this.oApp.applyConverter("IR_TO_"+this.sMode,b,this.oApp.getWYSIWYGDocument())),
this.setRawContents(b)},setRawContents:function(a){"undefined"!=typeof a&&(this.elEditingArea.value=a);
},getRawContents:function(){return this.elEditingArea.value},focus:function(){this.elEditingArea.focus();
},htmlSpecialChars:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;");
},unhtmlSpecialChars:function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&amp;/g,"&");
}}),nhn.husky.SE_EditingArea_WYSIWYG=jindo.$Class({name:"SE_EditingArea_WYSIWYG",status:nhn.husky.PLUGIN_STATUS.NOT_READY,
sMode:"WYSIWYG",iframe:null,doc:null,bStopCheckingBodyHeight:!1,bAutoResize:!1,nBodyMinHeight:0,nScrollbarWidth:0,
iLastUndoRecorded:0,_nIFrameReadyCount:50,bWYSIWYGEnabled:!1,$init:function(a){this.iframe=jindo.$(a);
var b=jindo.$Agent().navigator();b.ie&&(this.iframe.style.display="none"),this.sBlankPageURL="smart_editor2_inputarea.html",
this.sBlankPageURL_EmulateIE7="smart_editor2_inputarea_ie8.html",this.aAddtionalEmulateIE7=[],this.htOptions=nhn.husky.SE2M_Configuration.SE_EditingAreaManager,
this.htOptions&&(this.sBlankPageURL=this.htOptions.sBlankPageURL||this.sBlankPageURL,this.sBlankPageURL_EmulateIE7=this.htOptions.sBlankPageURL_EmulateIE7||this.sBlankPageURL_EmulateIE7,
this.aAddtionalEmulateIE7=this.htOptions.aAddtionalEmulateIE7||this.aAddtionalEmulateIE7),this.aAddtionalEmulateIE7.push(8),
this.sIFrameSrc=this.sBlankPageURL,b.ie&&jindo.$A(this.aAddtionalEmulateIE7).has(b.nativeVersion)&&(this.sIFrameSrc=this.sBlankPageURL_EmulateIE7);
var c=this.sIFrameSrc,a=this.iframe,d=jindo.$Fn(this.initIframe,this).bind(),e=jindo.$Fn(function(){
this.iframe.src=c},this).bind();!b.ie||b.version>=9&&document.addEventListener?(a.addEventListener("load",d,!1),
a.addEventListener("error",e,!1)):(a.attachEvent("onload",d),a.attachEvent("onerror",e)),a.src=c,this.elEditingArea=a;
},$BEFORE_MSG_APP_READY:function(){this.oEditingArea=this.iframe.contentWindow.document,this.oApp.exec("REGISTER_EDITING_AREA",[this]),
this.oApp.exec("ADD_APP_PROPERTY",["getWYSIWYGWindow",jindo.$Fn(this.getWindow,this).bind()]),this.oApp.exec("ADD_APP_PROPERTY",["getWYSIWYGDocument",jindo.$Fn(this.getDocument,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["isWYSIWYGEnabled",jindo.$Fn(this.isWYSIWYGEnabled,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["getRawHTMLContents",jindo.$Fn(this.getRawHTMLContents,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["setRawHTMLContents",jindo.$Fn(this.setRawHTMLContents,this).bind()]),
this.isWYSIWYGEnabled()&&this.oApp.exec("ENABLE_WYSIWYG_RULER"),this.oApp.registerBrowserEvent(this.getDocument().body,"paste","EVENT_EDITING_AREA_PASTE");
},$ON_MSG_APP_READY:function(){this.oApp.hasOwnProperty("saveSnapShot")||(this.$ON_EVENT_EDITING_AREA_MOUSEUP=function(){},
this._recordUndo=function(){}),this._bIERangeReset=!0,this.oApp.oNavigator.ie?(jindo.$Fn(function(a){
var b=this.iframe.contentWindow.document.selection;b&&"control"===b.type.toLowerCase()&&8===a.key().keyCode&&(this.oApp.exec("EXECCOMMAND",["delete",!1,!1]),
a.stop()),this._bIERangeReset=!1},this).attach(this.iframe.contentWindow.document,"keydown"),jindo.$Fn(function(){
this._oIERange=null,this._bIERangeReset=!0},this).attach(this.iframe.contentWindow.document.body,"mousedown"),
this.getDocument().createRange||jindo.$Fn(this._onIEBeforeDeactivate,this).attach(this.iframe.contentWindow.document.body,"beforedeactivate"),
jindo.$Fn(function(){this._bIERangeReset=!1},this).attach(this.iframe.contentWindow.document.body,"mouseup")):this.oApp.oNavigator.bGPadBrowser&&(this.$ON_EVENT_TOOLBAR_TOUCHSTART=function(){
this._oIERange=this.oApp.getSelection().cloneRange()}),this.fnSetBodyHeight=jindo.$Fn(this._setBodyHeight,this).bind(),
this.fnCheckBodyChange=jindo.$Fn(this._checkBodyChange,this).bind(),this.fnSetBodyHeight(),this._setScrollbarWidth();
},_setScrollbarWidth:function(){var a=this.getDocument(),b=a.createElement("div");b.style.width="100px",
b.style.height="100px",b.style.overflow="scroll",b.style.position="absolute",b.style.top="-9999px",a.body.appendChild(b),
this.nScrollbarWidth=b.offsetWidth-b.clientWidth,a.body.removeChild(b)},$AFTER_EVENT_EDITING_AREA_KEYUP:function(a){
if(this.bAutoResize){var b=a.key();b.keyCode>=33&&b.keyCode<=40||b.alt||b.ctrl||16===b.keyCode||this._setAutoResize();
}},$AFTER_PASTE_HTML:function(){this.bAutoResize&&this._setAutoResize()},startAutoResize:function(){
this.oApp.exec("STOP_CHECKING_BODY_HEIGHT"),this.bAutoResize=!0;var a=this.oApp.oNavigator;jindo.$Element(this.getDocument().body).css(a.ie&&a.version<9?{
overflow:"visible"}:{overflowX:"visible",overflowY:"hidden"}),this._setAutoResize(),this.nCheckBodyInterval=setInterval(this.fnCheckBodyChange,500),
this.oApp.exec("START_FLOAT_TOOLBAR")},stopAutoResize:function(){this.bAutoResize=!1,clearInterval(this.nCheckBodyInterval),
this.oApp.exec("STOP_FLOAT_TOOLBAR"),jindo.$Element(this.getDocument().body).css({overflow:"visible",
overflowY:"visible"}),this.oApp.exec("START_CHECKING_BODY_HEIGHT")},_checkBodyChange:function(){if(this.bAutoResize){
var a=this.getDocument().body.innerHTML.length;a!==this.nBodyLength&&(this.nBodyLength=a,this._setAutoResize());
}},_getResizeHeight:function(){var a,b,c,d,e=this.getDocument().body,f=["width","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","wordSpacing"];
if(this.oApp.oNavigator.msafari||!this.oApp.oNavigator.firefox&&!this.oApp.oNavigator.safari)return this.oApp.oNavigator.ie&&8===this.oApp.oNavigator.version&&8===document.documentMode&&jindo.$Element(e).css("height","0px"),
b=parseInt(e.scrollHeight,10),b<this.nBodyMinHeight&&(b=this.nBodyMinHeight),b;for(this.elDummy||(this.elDummy=document.createElement("div"),
this.elDummy.className="se2_input_wysiwyg",this.oApp.elEditingAreaContainer.appendChild(this.elDummy),
this.elDummy.style.cssText="position:absolute !important; left:-9999px !important; top:-9999px !important; z-index: -9999 !important; overflow: auto !important;",
this.elDummy.style.height=this.nBodyMinHeight+"px"),a=jindo.$Element(e),d=f.length,c={};d--;)c[f[d]]=a.css(f[d]);
return c.lineHeight.indexOf("px")>-1&&(c.lineHeight=parseInt(c.lineHeight,10)/parseInt(c.fontSize,10)),
jindo.$Element(this.elDummy).css(c),this.elDummy.innerHTML=e.innerHTML,b=this.elDummy.scrollHeight},
_setAutoResize:function(){var a,b,c,d,e=this.getDocument().body,f=jindo.$Element(e),g=!1,h=this.oApp.oNavigator;
this.nTopBottomMargin=this.nTopBottomMargin||parseInt(f.css("marginTop"),10)+parseInt(f.css("marginBottom"),10),
this.nBodyMinHeight=this.nBodyMinHeight||this.oApp.getEditingAreaHeight()-this.nTopBottomMargin,(h.ie&&h.nativeVersion>=9||h.chrome||this.oApp.oNavigator.msafari)&&(f.css("height","0px"),
this.iframe.style.height="0px"),a=this._getResizeHeight(),h.ie?a>this.nBodyMinHeight?(c=this.oApp.getCurrentStyle(),
d=this._getStyleSize(c),d<this.nTopBottomMargin&&(d=this.nTopBottomMargin),b=a+d,b+=18,g=!0):(a=this.nBodyMinHeight,
b=this.nBodyMinHeight+this.nTopBottomMargin):a>this.nBodyMinHeight?(c=this.oApp.getCurrentStyle(),d=this._getStyleSize(c),
d<this.nTopBottomMargin&&(d=this.nTopBottomMargin),b=a+d,g=!0):(a=this.nBodyMinHeight,b=this.nBodyMinHeight+this.nTopBottomMargin),
h.firefox||f.css("height",a+"px"),this.iframe.style.height=b+"px",this.oApp.welEditingAreaContainer.height(b),
this.oApp.oNavigator.msafari||this.oApp.checkResizeGripPosition(g)},_getStyleSize:function(a){var b;if(a){
var c=a.lineHeight;if(c&&/[^\d\.]/.test(c))if(/\d/.test(c)&&/[A-Za-z]/.test(c)){if(/px$/.test(c))return parseFloat(c,10);
if(/pt$/.test(c))return 4*parseFloat(c,10)/3;if(/em$/.test(c))return 16*parseFloat(c,10);if(/cm$/.test(c))return 96*parseFloat(c,10)/2.54;
}else/\d/.test(c)&&/%/.test(c)?c=100*parseFloat(c,10):/[^A-Za-z]/.test(c)||(c=1.2);var d=a.fontSize;d&&!/px$/.test(d)&&(d=/pt$/.test(d)?4*parseFloat(d,10)/3+"px":/em$/.test(d)?16*parseFloat(d,10)+"px":/cm$/.test(d)?96*parseFloat(d,10)/2.54+"px":"medium"==d?"16px":"16px"),
b=parseFloat(d,10)*c}else b=18;return b},_setBodyHeight:function(){if(!this.bStopCheckingBodyHeight){
var a,b,c=this.getDocument().body,d=jindo.$Element(c),e=parseInt(d.css("marginTop"),10)+parseInt(d.css("marginBottom"),10),f=this.oApp.getEditingAreaHeight(),g=f-e,h=d.height();
if(this.nTopBottomMargin=e,0===h)return d.css("height",g+"px"),void setTimeout(this.fnSetBodyHeight,500);
var i=jindo.$Agent().navigator(),j=i.ie&&11===i.nativeVersion,k=this.nBodyHeight_last===h;j&&k||d.css("height","0px"),
a=parseInt(c.scrollHeight,10),b=a>f?a-e:g,this._isHorizontalScrollbarVisible()&&(b-=this.nScrollbarWidth),
j&&k||d.css("height",b+"px"),this.nBodyHeight_last=b,setTimeout(this.fnSetBodyHeight,500)}},_isHorizontalScrollbarVisible:function(){
var a=this.getDocument();return a.documentElement.clientWidth<a.documentElement.scrollWidth?!0:!1},$ON_STOP_CHECKING_BODY_HEIGHT:function(){
this.bStopCheckingBodyHeight||(this.bStopCheckingBodyHeight=!0)},$ON_START_CHECKING_BODY_HEIGHT:function(){
this.bStopCheckingBodyHeight&&(this.bStopCheckingBodyHeight=!1,this.fnSetBodyHeight())},$ON_IE_CHECK_EXCEPTION_FOR_SELECTION_PRESERVATION:function(){
var a=this.getDocument().selection;a&&"Control"===a.type&&(this._oIERange=null)},_onIEBeforeDeactivate:function(){
this.oApp.delayedExec("IE_CHECK_EXCEPTION_FOR_SELECTION_PRESERVATION",null,0),this._oIERange||this._bIERangeReset||(this._oIERange=this.oApp.getSelection().cloneRange());
},$ON_CHANGE_EDITING_MODE:function(a){if(a===this.sMode){var b=jindo.$Agent().navigator();if(b.ie&&b.nativeVersion>8){
var c=jindo.$$.getSingle("DIV.husky_seditor_editing_area_container").childNodes[0];"DIV"==c.tagName&&1e3==c.style.zIndex&&c.parentNode.removeChild(c);
}this.iframe.style.visibility="visible","block"!=this.iframe.style.display&&(this.iframe.style.display="block"),
this.oApp.exec("REFRESH_WYSIWYG"),this.oApp.exec("SET_EDITING_WINDOW",[this.getWindow()]),this.oApp.exec("START_CHECKING_BODY_HEIGHT");
}else this.iframe.style.visibility="hidden",this.oApp.exec("STOP_CHECKING_BODY_HEIGHT")},$AFTER_CHANGE_EDITING_MODE:function(){
this._oIERange=null},$ON_REFRESH_WYSIWYG:function(){jindo.$Agent().navigator().firefox&&(this._disableWYSIWYG(),
this._enableWYSIWYG())},$ON_ENABLE_WYSIWYG:function(){this._enableWYSIWYG()},$ON_DISABLE_WYSIWYG:function(){
this._disableWYSIWYG()},$ON_IE_HIDE_CURSOR:function(){if(this.oApp.oNavigator.ie){this._onIEBeforeDeactivate();
var a=this.oApp.getWYSIWYGDocument().selection;if(a&&a.createRange)try{a.empty()}catch(b){a=this.oApp.getSelection(),
a.select(),a.oBrowserSelection.selectNone()}else this.oApp.getEmptySelection().oBrowserSelection.selectNone();
}},$AFTER_SHOW_ACTIVE_LAYER:function(){this.oApp.exec("IE_HIDE_CURSOR"),this.bActiveLayerShown=!0},$BEFORE_EVENT_EDITING_AREA_KEYDOWN:function(){
this._bKeyDown=!0},$ON_EVENT_EDITING_AREA_KEYDOWN:function(a){if(this.oApp.getEditingMode()===this.sMode){
var b=a.key();if(this.oApp.oNavigator.ie)switch(b.keyCode){case 33:this._pageUp(a);break;case 34:this._pageDown(a);
break;case 8:this._backspace(a);break;case 46:this._delete(a)}else this.oApp.oNavigator.firefox&&8===b.keyCode&&this._backspace(a);
this._recordUndo(b)}},_backspace:function(a){var b=this._prepareBackspaceDelete(!0);b&&this._removeUnremovable(b,!0)&&a.stop();
},_delete:function(a){var b=this._prepareBackspaceDelete(!1);if(b)if(this._removeUnremovable(b,!1))a.stop();else if(3===b.nodeType){
var c=this.oApp.getSelection().getLineInfo(),d=c.oEnd.oLineBreaker,e=d&&d.nextSibling;this._removeWrongSpan(e);
}else this._removeWrongSpan(b)},_prepareBackspaceDelete:function(a){var b=this.oApp.getSelection();if(b.collapsed){
var c=b.getNodeAroundRange(a,!1);return this._isLineFeed(c)&&(c=a?b._getPrevNode(c):b._getNextNode(c)),
this._clearCursorHolderValue(c),c}},_isLineFeed:function(a){return a&&3===a.nodeType&&/^[\n]*$/.test(a.nodeValue);
},_clearCursorHolderValue:function(a){!a||3!==a.nodeType||"​"!==a.nodeValue&&"﻿"!==a.nodeValue||(a.nodeValue="");
},_removeUnremovable:function(a,b){var c=!1;if(!a)return!1;if("TABLE"===a.nodeName)a.parentNode.removeChild(a),
c=!0;else if("DIV"===a.nodeName){var d=b?a.lastChild:a.firstChild;d?"TABLE"===d.nodeName?(a.removeChild(d),
c=!0):1===d.nodeType&&""==jindo.$S(d.innerHTML).trim()&&(a.removeChild(d),c=!0):(a.parentNode.removeChild(a),
c=!0)}return c},_removeWrongSpan:function(a){if(a&&"SPAN"===a.nodeName&&a.firstChild&&"P"===a.firstChild.nodeName){
for(var b=a.parentNode;a.firstChild;)b.insertBefore(a.firstChild,a);b.removeChild(a)}},$BEFORE_EVENT_EDITING_AREA_KEYUP:function(){
return this._bKeyDown?void(this._bKeyDown=!1):!1},$ON_EVENT_EDITING_AREA_MOUSEUP:function(){this.oApp.saveSnapShot();
},$BEFORE_PASTE_HTML:function(){this.oApp.getEditingMode()!==this.sMode&&this.oApp.exec("CHANGE_EDITING_MODE",[this.sMode]);
},$ON_PASTE_HTML:function(a,b,c){var d,e,f,g,h,i,j,k;if(this.oApp.getEditingMode()===this.sMode){if(c||this.oApp.exec("RECORD_UNDO_BEFORE_ACTION",["PASTE HTML"]),
e=jindo.$Agent().navigator(),d=b||this.oApp.getSelection(),e.ie&&8==e.nativeVersion&&8==document.documentMode&&(a+=unescape("%uFEFF")),
d.pasteHTML(a),e.ie?(d.collapseToEnd(),d.select(),this._oIERange=null,this._bIERangeReset=!1):(f=d.placeStringBookmark(),
this.oApp.getWYSIWYGDocument().body.innerHTML=this.oApp.getWYSIWYGDocument().body.innerHTML,d.moveToBookmark(f),
d.collapseToEnd(),d.select(),d.removeStringBookmark(f),d=this.oApp.getSelection(),b&&b.setRange(d)),
a.indexOf("<img")>-1&&(g=d.startContainer,1===g.nodeType&&"P"===g.tagName&&(h=jindo.$Element(g).child(function(a){
return 1===a.$value().nodeType&&"IMG"===a.$value().tagName},1),h.length>0)))for(i=h[h.length-1].$value(),
j=i.nextSibling;j;)k=j.nextSibling,3!==j.nodeType||"&nbsp;"!==j.nodeValue&&j.nodeValue!==unescape("%u00A0")||g.removeChild(j),
j=k;c||this.oApp.exec("RECORD_UNDO_AFTER_ACTION",["PASTE HTML"])}},$ON_FOCUS_N_CURSOR:function(a,b){
var c,d;return b&&(c=jindo.$(b,this.getDocument()))?(clearTimeout(this._nTimerFocus),void(this._nTimerFocus=setTimeout(jindo.$Fn(function(a){
this._scrollIntoView(a),this.oApp.exec("FOCUS")},this).bind(c),300))):(d=this.oApp.getSelection(),void(d.collapsed?a?(this.oApp.exec("FOCUS"),
c=this.getDocument().body,d.selectNode(c),d.collapseToEnd(),d.select(),this._scrollIntoView(c)):this.oApp.exec("FOCUS"):(a?d.collapseToEnd():d.collapseToStart(),
d.select())))},_getElementVerticalPosition:function(a){var b=0,c=a,d={nTop:0,nBottom:0};if(!a)return d;
try{for(;c;)b+=c.offsetTop,c=c.offsetParent}catch(e){}return d.nTop=b,d.nBottom=b+jindo.$Element(a).height(),
d},_getVisibleVerticalPosition:function(){var a,b,c,d={nTop:0,nBottom:0};return a=this.getWindow(),b=this.getDocument(),
c=a.innerHeight?a.innerHeight:b.documentElement.clientHeight||b.body.clientHeight,d.nTop=a.pageYOffset||b.documentElement.scrollTop,
d.nBottom=d.nTop+c,d},_isElementVisible:function(a,b){return a.nTop>=b.nTop&&a.nBottom<=b.nBottom},_scrollIntoView:function(a){
var b=this._getElementVerticalPosition(a),c=this._getVisibleVerticalPosition(),d=0;if(!this._isElementVisible(b,c))return(d=b.nBottom-c.nBottom)>0?void this.getWindow().scrollTo(0,c.nTop+d):void this.getWindow().scrollTo(0,b.nTop);
},$BEFORE_MSG_EDITING_AREA_RESIZE_STARTED:function(){if(!jindo.$Agent().navigator().ie){var a=null;a=this.oApp.getSelection(),
this.sBM=a.placeStringBookmark()}},$AFTER_MSG_EDITING_AREA_RESIZE_ENDED:function(){if(this.oApp.getEditingMode()===this.sMode&&(this.oApp.exec("REFRESH_WYSIWYG"),
!jindo.$Agent().navigator().ie)){var a=this.oApp.getEmptySelection();a.moveToBookmark(this.sBM),a.select(),
a.removeStringBookmark(this.sBM)}},$ON_CLEAR_IE_BACKUP_SELECTION:function(){this._oIERange=null},$ON_RESTORE_IE_SELECTION:function(){
if(this._oIERange)try{this._oIERange.select(),this._oPrevIERange=this._oIERange,this._oIERange=null}catch(a){}
},$ON_EVENT_EDITING_AREA_PASTE:function(a){this.oApp.delayedExec("EVENT_EDITING_AREA_PASTE_DELAY",[a],0);
},$ON_EVENT_EDITING_AREA_PASTE_DELAY:function(a){this._replaceBlankToNbsp(a.element)},_replaceBlankToNbsp:function(a){
var b=this.oApp.oNavigator;if(b.ie&&9===b.nativeVersion&&7===document.documentMode&&1===a.nodeType&&"BR"!==a.tagName){
var c=jindo.$$("p:empty()",this.oApp.getWYSIWYGDocument().body,{oneTimeOffCache:!0});jindo.$A(c).forEach(function(a){
a.innerHTML="&nbsp;"})}},_pageUp:function(a){var b,c=this._getEditorHeight(),d=jindo.$Document(this.oApp.getWYSIWYGDocument()).scrollPosition();
b=d.top<=c?0:d.top-c,this.oApp.getWYSIWYGWindow().scrollTo(0,b),a.stop()},_pageDown:function(a){var b,c=this._getEditorHeight(),d=jindo.$Document(this.oApp.getWYSIWYGDocument()).scrollPosition(),e=this._getBodyHeight();
b=d.top+c>=e?e-c:d.top+c,this.oApp.getWYSIWYGWindow().scrollTo(0,b),a.stop()},_getEditorHeight:function(){
return this.oApp.elEditingAreaContainer.offsetHeight-this.nTopBottomMargin},_getBodyHeight:function(){
return parseInt(this.getDocument().body.scrollHeight,10)},initIframe:function(){try{if(!this.iframe.contentWindow.document||!this.iframe.contentWindow.document.body||"about:blank"===this.iframe.contentWindow.document.location.href)throw new Error("Access denied");
var a=nhn.husky.SE2M_Configuration.SE2B_CSSLoader&&nhn.husky.SE2M_Configuration.SE2B_CSSLoader.sCSSBaseURI?nhn.husky.SE2M_Configuration.SE2B_CSSLoader.sCSSBaseURI:"";
if(nhn.husky.SE2M_Configuration.SE_EditingAreaManager.sCSSBaseURI&&(a=nhn.husky.SE2M_Configuration.SE_EditingAreaManager.sCSSBaseURI),
a){var b=this.getDocument(),c=b.getElementsByTagName("head")[0],d=b.createElement("link");d.type="text/css",
d.rel="stylesheet",d.href=a+"/smart_editor2_in.css",d.onload=jindo.$Fn(function(){this.oApp&&this.oApp.getEditingMode&&this.oApp.getEditingMode()===this.sMode&&this.oApp.exec("RESET_STYLE_STATUS");
},this).bind(),c.appendChild(d)}this._enableWYSIWYG(),this.status=nhn.husky.PLUGIN_STATUS.READY}catch(e){
if(!(this._nIFrameReadyCount-->0))throw"iframe for WYSIWYG editing mode can't be initialized. Please check if the iframe document exists and is also accessable(cross-domain issues). ";
setTimeout(jindo.$Fn(this.initIframe,this).bind(),100)}},getIR:function(){var a,b=this.iframe.contentWindow.document.body.innerHTML;
return a=this.oApp.applyConverter?this.oApp.applyConverter(this.sMode+"_TO_IR",b,this.oApp.getWYSIWYGDocument()):b;
},setIR:function(a){var b,c=this.oApp.oNavigator,d=c.ie&&document.documentMode<11,e=d?"":"<br>";if(b=this.oApp.applyConverter?this.oApp.applyConverter("IR_TO_"+this.sMode,a,this.oApp.getWYSIWYGDocument()):a,
""===b.replace(/[\r\n\t\s]*/,"")&&("BR"!==this.oApp.sLineBreaker&&(e="<p>"+e+"</p>"),b=e),this.iframe.contentWindow.document.body.innerHTML=b,
d&&this.oApp.getEditingMode()===this.sMode)for(var f=this.oApp.getWYSIWYGDocument().body.getElementsByTagName("P"),g=0,h=f.length;h>g;g++)1===f[g].childNodes.length&&"&nbsp;"===f[g].innerHTML&&(f[g].innerHTML="");
},getRawContents:function(){return this.iframe.contentWindow.document.body.innerHTML},getRawHTMLContents:function(){
return this.getRawContents()},setRawHTMLContents:function(a){this.iframe.contentWindow.document.body.innerHTML=a;
},getWindow:function(){return this.iframe.contentWindow},getDocument:function(){return this.iframe.contentWindow.document;
},focus:function(){this.getDocument().body.focus(),this.oApp.exec("RESTORE_IE_SELECTION")},_recordUndo:function(a){
return a.keyCode>=33&&a.keyCode<=40?void this.oApp.saveSnapShot():void(a.alt||a.ctrl||16===a.keyCode||this.oApp.getLastKey()!==a.keyCode&&(this.oApp.setLastKey(a.keyCode),
(a.enter||46===a.keyCode||8===a.keyCode)&&this.oApp.exec("RECORD_UNDO_ACTION",["KEYPRESS("+a.keyCode+")",{
bMustBlockContainer:!0}])))},_enableWYSIWYG:function(){null!==this.iframe.contentWindow.document.body.contentEditable?this.iframe.contentWindow.document.body.contentEditable=!0:this.iframe.contentWindow.document.designMode="on",
this.bWYSIWYGEnabled=!0,jindo.$Agent().navigator().firefox&&setTimeout(jindo.$Fn(function(){this.iframe.contentWindow.document.execCommand("enableInlineTableEditing",!1,!1);
},this).bind(),0)},_disableWYSIWYG:function(){null!==this.iframe.contentWindow.document.body.contentEditable?this.iframe.contentWindow.document.body.contentEditable=!1:this.iframe.contentWindow.document.designMode="off",
this.bWYSIWYGEnabled=!1},isWYSIWYGEnabled:function(){return this.bWYSIWYGEnabled}}),nhn.husky.SE_EditingAreaManager=jindo.$Class({
name:"SE_EditingAreaManager",oActivePlugin:null,elContentsField:null,bIsDirty:!1,bAutoResize:!1,$init:function(a,b,c,d,e){
this.sDefaultEditingMode=a,this.elContentsField=jindo.$(b),this._assignHTMLElements(e),this.fOnBeforeUnload=d,
this.oEditingMode={},this.elContentsField.style.display="none",this.nMinWidth=parseInt(c.nMinWidth||60,10),
this.nMinHeight=parseInt(c.nMinHeight||60,10);var f=this._getSize([c.nWidth,c.width,this.elEditingAreaContainer.offsetWidth],this.nMinWidth),g=this._getSize([c.nHeight,c.height,this.elEditingAreaContainer.offsetHeight],this.nMinHeight);
this.elEditingAreaContainer.style.width=f.nSize+f.sUnit,this.elEditingAreaContainer.style.height=g.nSize+g.sUnit,
"px"===f.sUnit?e.style.width=f.nSize+2+"px":"%"===f.sUnit&&(e.style.minWidth=this.nMinWidth+"px")},_getSize:function(a,b){
var c,d,e,f,g,h="px";for(b=parseInt(b,10),c=0,d=a.length;d>c;c++)if(a[c]){if(!isNaN(a[c])){f=parseInt(a[c],10),
g=h;break}if(e=/([0-9]+)(.*)/i.exec(a[c]),!(!e||e.length<2||e[1]<=0)){f=parseInt(e[1],10),g=e[2],g||(g=h),
b>f&&g===h&&(f=b);break}}return g||(g=h),(isNaN(f)||b>f&&g===h)&&(f=b),{nSize:f,sUnit:g}},_assignHTMLElements:function(a){
this.elEditingAreaContainer=jindo.$$.getSingle("DIV.husky_seditor_editing_area_container",a),this.toolbarArea=jindo.$$.getSingle(".se2_tool",a);
},$BEFORE_MSG_APP_READY:function(){this.oApp.exec("ADD_APP_PROPERTY",["version",nhn.husky.SE_EditingAreaManager.version]),
this.oApp.exec("ADD_APP_PROPERTY",["elEditingAreaContainer",this.elEditingAreaContainer]),this.oApp.exec("ADD_APP_PROPERTY",["welEditingAreaContainer",jindo.$Element(this.elEditingAreaContainer)]),
this.oApp.exec("ADD_APP_PROPERTY",["getEditingAreaHeight",jindo.$Fn(this.getEditingAreaHeight,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["getEditingAreaWidth",jindo.$Fn(this.getEditingAreaWidth,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["getRawContents",jindo.$Fn(this.getRawContents,this).bind()]),this.oApp.exec("ADD_APP_PROPERTY",["getContents",jindo.$Fn(this.getContents,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["getIR",jindo.$Fn(this.getIR,this).bind()]),this.oApp.exec("ADD_APP_PROPERTY",["setContents",this.setContents]),
this.oApp.exec("ADD_APP_PROPERTY",["setIR",this.setIR]),this.oApp.exec("ADD_APP_PROPERTY",["getEditingMode",jindo.$Fn(this.getEditingMode,this).bind()]);
},$ON_MSG_APP_READY:function(){this.htOptions=this.oApp.htOptions[this.name]||{},this.sDefaultEditingMode=this.htOptions.sDefaultEditingMode||this.sDefaultEditingMode,
this.iframeWindow=this.oApp.getWYSIWYGWindow(),this.oApp.exec("REGISTER_CONVERTERS",[]),this.oApp.exec("CHANGE_EDITING_MODE",[this.sDefaultEditingMode,!0]),
this.oApp.exec("LOAD_CONTENTS_FIELD",[!1]),this.oApp.exec("REGISTER_HOTKEY",["esc","CLOSE_LAYER_POPUP",[],document]),
window.onbeforeunload=this.fOnBeforeUnload?this.fOnBeforeUnload:jindo.$Fn(function(){return this.getRawContents()!=this.sCurrentRawContents||this.bIsDirty?this.oApp.$MSG("SE_EditingAreaManager.onExit"):void 0;
},this).bind()},$ON_CLOSE_LAYER_POPUP:function(){this.oApp.exec("ENABLE_ALL_UI"),this.oApp.exec("DESELECT_UI",["helpPopup"]),
this.oApp.exec("HIDE_ALL_DIALOG_LAYER",[]),this.oApp.exec("HIDE_EDITING_AREA_COVER"),this.oApp.exec("FOCUS");
},$AFTER_MSG_APP_READY:function(){this.oApp.exec("UPDATE_RAW_CONTENTS"),this.oApp.htOptions[this.name]&&this.oApp.htOptions[this.name].bAutoResize&&(this.bAutoResize=this.oApp.htOptions[this.name].bAutoResize),
this.oApp.oNavigator.msafari&&(this.bAutoResize=!0),this.startAutoResize()},$ON_LOAD_CONTENTS_FIELD:function(a){
var b=this.elContentsField.value;b=b.replace(/^\s+/,""),this.oApp.exec("SET_CONTENTS",[b,a])},$ON_UPDATE_CONTENTS_FIELD:function(){
this.elContentsField.value=this.oApp.getContents(),this.oApp.exec("UPDATE_RAW_CONTENTS")},$ON_UPDATE_RAW_CONTENTS:function(){
this.sCurrentRawContents=this.oApp.getRawContents()},$BEFORE_CHANGE_EDITING_MODE:function(a){return this.oEditingMode[a]?(this.stopAutoResize(),
this._oPrevActivePlugin=this.oActivePlugin,void(this.oActivePlugin=this.oEditingMode[a])):!1},$AFTER_CHANGE_EDITING_MODE:function(a,b){
if(this._oPrevActivePlugin){var c=this._oPrevActivePlugin.getIR();this.oApp.exec("SET_IR",[c]),this._setEditingAreaDimension();
}this.startAutoResize(),b||this.oApp.delayedExec("FOCUS",[],0)},$ON_SET_IS_DIRTY:function(a){this.bIsDirty=a;
},$ON_FOCUS:function(a){this.oActivePlugin&&"function"==typeof this.oActivePlugin.setIR&&(this.iframeWindow&&this.iframeWindow.document.hasFocus&&!this.iframeWindow.document.hasFocus()&&"WYSIWYG"==this.oActivePlugin.sMode?this.iframeWindow.focus():this.oActivePlugin.focus(),
a&&this.oApp.bMobile||this.oActivePlugin.focus())},$ON_IE_FOCUS:function(){this.oApp.oNavigator.ie&&this.oApp.exec("FOCUS");
},$ON_SET_CONTENTS:function(a,b){this.setContents(a,b)},$BEFORE_SET_IR:function(a,b){b=b||!1,b||this.oApp.exec("RECORD_UNDO_ACTION",["BEFORE SET CONTENTS",{
sSaveTarget:"BODY"}])},$ON_SET_IR:function(a){this.oActivePlugin&&"function"==typeof this.oActivePlugin.setIR&&this.oActivePlugin.setIR(a);
},$AFTER_SET_IR:function(a,b){b=b||!1,b||this.oApp.exec("RECORD_UNDO_ACTION",["AFTER SET CONTENTS",{
sSaveTarget:"BODY"}])},$ON_REGISTER_EDITING_AREA:function(a){this.oEditingMode[a.sMode]=a,"WYSIWYG"==a.sMode&&this.attachDocumentEvents(a.oEditingArea),
this._setEditingAreaDimension(a)},$ON_MSG_EDITING_AREA_RESIZE_STARTED:function(){this._isLayerReasonablyShown=!1;
var a=jindo.$$.getSingle("ul[class^='se2_itool']>li.active",this.toolbarArea,{oneTimeOffCache:!0});if(a)var b=a.parentNode;
!b||"se2_itool2"!=b.className&&"se2_itool4"!=b.className||(this._isLayerReasonablyShown=!0),this._fitElementInEditingArea(this.elEditingAreaContainer),
this.oApp.exec("STOP_AUTORESIZE_EDITING_AREA"),this.oApp.exec("SHOW_EDITING_AREA_COVER"),this.elEditingAreaContainer.style.overflow="hidden",
this.iStartingHeight=parseInt(this.elEditingAreaContainer.style.height,10)},$ON_STOP_AUTORESIZE_EDITING_AREA:function(){
this.bAutoResize&&(this.stopAutoResize(),this.bAutoResize=!1)},startAutoResize:function(){this.bAutoResize&&this.oActivePlugin&&"function"==typeof this.oActivePlugin.startAutoResize&&this.oActivePlugin.startAutoResize();
},stopAutoResize:function(){this.bAutoResize&&this.oActivePlugin&&"function"==typeof this.oActivePlugin.stopAutoResize&&this.oActivePlugin.stopAutoResize();
},$ON_RESIZE_EDITING_AREA:function(a,b){null!==a&&"undefined"!=typeof a&&this._resizeWidth(a,"px"),null!==b&&"undefined"!=typeof b&&this._resizeHeight(b,"px"),
this._fitElementInEditingArea(this.elResizingBoard),this._setEditingAreaDimension()},_resizeWidth:function(a,b){
var c=parseInt(a,10);c<this.nMinWidth&&(c=this.nMinWidth),a&&(this.elEditingAreaContainer.style.width=c+b);
},_resizeHeight:function(a,b){var c=parseInt(a,10);c<this.nMinHeight&&(c=this.nMinHeight),a&&(this.elEditingAreaContainer.style.height=c+b);
},$ON_RESIZE_EDITING_AREA_BY:function(a,b){var c,d,e=parseInt(a,10),f=parseInt(b,10);0!==a&&-1===this.elEditingAreaContainer.style.width.indexOf("%")&&(c=this.elEditingAreaContainer.style.width?parseInt(this.elEditingAreaContainer.style.width,10)+e:null),
0!==f&&(d=this.elEditingAreaContainer.style.height?this.iStartingHeight+f:null),(a||f)&&this.oApp.exec("RESIZE_EDITING_AREA",[c,d]);
},$ON_MSG_EDITING_AREA_RESIZE_ENDED:function(){this._isLayerReasonablyShown||this.oApp.exec("HIDE_EDITING_AREA_COVER"),
this.elEditingAreaContainer.style.overflow="",this._setEditingAreaDimension()},$ON_SHOW_EDITING_AREA_COVER:function(){
this.elResizingBoard||this.createCoverDiv(),this.elResizingBoard.style.display="block"},$ON_HIDE_EDITING_AREA_COVER:function(){
this.elResizingBoard&&(this.elResizingBoard.style.display="none")},$ON_KEEP_WITHIN_EDITINGAREA:function(a,b){
var c=parseInt(a.style.top,10);c+a.offsetHeight>this.oApp.elEditingAreaContainer.offsetHeight&&(a.style.top="number"==typeof b?c-a.offsetHeight-b+"px":this.oApp.elEditingAreaContainer.offsetHeight-a.offsetHeight+"px");
var d=parseInt(a.style.left,10);d+a.offsetWidth>this.oApp.elEditingAreaContainer.offsetWidth&&(a.style.left=this.oApp.elEditingAreaContainer.offsetWidth-a.offsetWidth+"px");
},$ON_EVENT_EDITING_AREA_KEYDOWN:function(){this.oApp.exec("HIDE_ACTIVE_LAYER",[])},$ON_EVENT_EDITING_AREA_MOUSEDOWN:function(){
this.oApp.exec("HIDE_ACTIVE_LAYER",[])},$ON_EVENT_EDITING_AREA_SCROLL:function(){this.oApp.exec("HIDE_ACTIVE_LAYER",[]);
},_setEditingAreaDimension:function(a){a=a||this.oActivePlugin,this._fitElementInEditingArea(a.elEditingArea);
},_fitElementInEditingArea:function(a){a.style.height=this.elEditingAreaContainer.offsetHeight+"px"},
attachDocumentEvents:function(a){this.oApp.registerBrowserEvent(a,"click","EVENT_EDITING_AREA_CLICK"),
this.oApp.registerBrowserEvent(a,"dblclick","EVENT_EDITING_AREA_DBLCLICK"),this.oApp.registerBrowserEvent(a,"mousedown","EVENT_EDITING_AREA_MOUSEDOWN"),
this.oApp.registerBrowserEvent(a,"mousemove","EVENT_EDITING_AREA_MOUSEMOVE"),this.oApp.registerBrowserEvent(a,"mouseup","EVENT_EDITING_AREA_MOUSEUP"),
this.oApp.registerBrowserEvent(a,"mouseout","EVENT_EDITING_AREA_MOUSEOUT"),this.oApp.registerBrowserEvent(a,"mousewheel","EVENT_EDITING_AREA_MOUSEWHEEL"),
this.oApp.registerBrowserEvent(a,"keydown","EVENT_EDITING_AREA_KEYDOWN"),this.oApp.registerBrowserEvent(a,"keypress","EVENT_EDITING_AREA_KEYPRESS"),
this.oApp.registerBrowserEvent(a,"keyup","EVENT_EDITING_AREA_KEYUP"),this.oApp.registerBrowserEvent(a,"scroll","EVENT_EDITING_AREA_SCROLL");
},createCoverDiv:function(){this.elResizingBoard=document.createElement("DIV"),this.elEditingAreaContainer.insertBefore(this.elResizingBoard,this.elEditingAreaContainer.firstChild),
this.elResizingBoard.style.position="absolute",this.elResizingBoard.style.background="#000000",this.elResizingBoard.style.zIndex=100,
this.elResizingBoard.style.border=1,this.elResizingBoard.style.opacity=0,this.elResizingBoard.style.filter="alpha(opacity=0.0)",
this.elResizingBoard.style.MozOpacity=0,this.elResizingBoard.style["-moz-opacity"]=0,this.elResizingBoard.style["-khtml-opacity"]=0,
this._fitElementInEditingArea(this.elResizingBoard),this.elResizingBoard.style.width=this.elEditingAreaContainer.offsetWidth+"px",
this.elResizingBoard.style.display="none"},$ON_GET_COVER_DIV:function(a,b){this.elResizingBoard&&(b[a]=this.elResizingBoard);
},getIR:function(){return this.oActivePlugin?this.oActivePlugin.getIR():""},setIR:function(a,b){this.oApp.exec("SET_IR",[a,b]);
},getRawContents:function(){return this.oActivePlugin?this.oActivePlugin.getRawContents():""},getContents:function(){
var a,b=this.oApp.getIR();return a=this.oApp.applyConverter?this.oApp.applyConverter("IR_TO_DB",b,this.oApp.getWYSIWYGDocument()):b,
a=this._cleanContents(a)},_cleanContents:function(a){return a.replace(new RegExp("(<img [^>]*>)"+unescape("%uFEFF"),"ig"),"$1");
},setContents:function(a,b){var c;c=this.oApp.applyConverter?this.oApp.applyConverter("DB_TO_IR",a,this.oApp.getWYSIWYGDocument()):a,
this.oApp.exec("SET_IR",[c,b])},getEditingMode:function(){return this.oActivePlugin.sMode},getEditingAreaWidth:function(){
return this.elEditingAreaContainer.offsetWidth},getEditingAreaHeight:function(){return this.elEditingAreaContainer.offsetHeight;
}});var nSE2Version="12056";nhn.husky.SE_EditingAreaManager.version={revision:"12056",type:"basic",number:"2.8.2"
},nhn.husky.SE_EditingAreaVerticalResizer=jindo.$Class({name:"SE_EditingAreaVerticalResizer",oResizeGrip:null,
sCookieNotice:"bHideResizeNotice",nEditingAreaMinHeight:null,htConversionMode:null,$init:function(a,b){
this.htConversionMode=b,this._assignHTMLElements(a)},$BEFORE_MSG_APP_READY:function(){this.oApp.exec("ADD_APP_PROPERTY",["isUseVerticalResizer",jindo.$Fn(this.isUseVerticalResizer,this).bind()]);
},$ON_MSG_APP_READY:function(){this.oApp.bMobile?(this.oResizeGrip.disabled=!0,this.oResizeGrip.style.height="0"):(this.oApp.exec("REGISTER_HOTKEY",["shift+esc","FOCUS_RESIZER"]),
this.isUseVerticalResizer()?(this.oResizeGrip.style.display="block",this.welNoticeLayer&&!Number(jindo.$Cookie().get(this.sCookieNotice))&&(this.welNoticeLayer.delegate("click","BUTTON.bt_clse",jindo.$Fn(this._closeNotice,this).bind()),
this.welNoticeLayer.show()),this.$FnMouseDown=jindo.$Fn(this._mousedown,this),this.$FnMouseMove=jindo.$Fn(this._mousemove,this),
this.$FnMouseUp=jindo.$Fn(this._mouseup,this),this.$FnMouseOver=jindo.$Fn(this._mouseover,this),this.$FnMouseOut=jindo.$Fn(this._mouseout,this),
this.$FnMouseDown.attach(this.oResizeGrip,"mousedown"),this.$FnMouseOver.attach(this.oResizeGrip,"mouseover"),
this.$FnMouseOut.attach(this.oResizeGrip,"mouseout")):(this.oResizeGrip.style.display="none",this.oApp.isUseModeChanger()||(this.elModeToolbar.style.display="none"))),
this.oApp.exec("ADD_APP_PROPERTY",["checkResizeGripPosition",jindo.$Fn(this.checkResizeGripPosition,this).bind()]),
this.oApp.getEditingAreaHeight&&(this.nEditingAreaMinHeight=this.oApp.getEditingAreaHeight())},isUseVerticalResizer:function(){
return"undefined"==typeof this.htConversionMode||"undefined"==typeof this.htConversionMode.bUseVerticalResizer||this.htConversionMode.bUseVerticalResizer===!0?!0:!1;
},checkResizeGripPosition:function(a){var b=jindo.$Document(),c=jindo.$Element(this.oResizeGrip).offset().top-b.scrollPosition().top+25-b.clientSize().height;
0>=c||(a&&(this.nEditingAreaMinHeight>this.oApp.getEditingAreaHeight()-c&&(c=-1*(this.nEditingAreaMinHeight-this.oApp.getEditingAreaHeight())),
this.oApp.exec("MSG_EDITING_AREA_RESIZE_STARTED"),this.oApp.exec("RESIZE_EDITING_AREA_BY",[0,-1*c]),
this.oApp.exec("MSG_EDITING_AREA_RESIZE_ENDED")),this.oApp.exec("STOP_AUTORESIZE_EDITING_AREA"))},$ON_FOCUS_RESIZER:function(){
this.oApp.exec("IE_HIDE_CURSOR"),this.oResizeGrip.focus()},_assignHTMLElements:function(a){this.oResizeGrip=jindo.$$.getSingle("BUTTON.husky_seditor_editingArea_verticalResizer",a),
this.elModeToolbar=jindo.$$.getSingle("DIV.se2_conversion_mode",a),this.welNoticeLayer=jindo.$Element(jindo.$$.getSingle("DIV.husky_seditor_resize_notice",a)),
this.welConversionMode=jindo.$Element(this.oResizeGrip.parentNode)},_mouseover:function(a){a.stopBubble(),
this.welConversionMode.addClass("controller_on")},_mouseout:function(a){a.stopBubble(),this.welConversionMode.removeClass("controller_on");
},_mousedown:function(a){this.iStartHeight=a.pos().clientY,this.iStartHeightOffset=a.pos().layerY,this.$FnMouseMove.attach(document,"mousemove"),
this.$FnMouseUp.attach(document,"mouseup"),this.iStartHeight=a.pos().clientY,this.oApp.exec("HIDE_ACTIVE_LAYER"),
this.oApp.exec("HIDE_ALL_DIALOG_LAYER"),this.oApp.exec("MSG_EDITING_AREA_RESIZE_STARTED",[this.$FnMouseDown,this.$FnMouseMove,this.$FnMouseUp]);
},_mousemove:function(a){var b=a.pos().clientY-this.iStartHeight;this.oApp.exec("RESIZE_EDITING_AREA_BY",[0,b]);
},_mouseup:function(){this.$FnMouseMove.detach(document,"mousemove"),this.$FnMouseUp.detach(document,"mouseup"),
this.oApp.exec("MSG_EDITING_AREA_RESIZE_ENDED",[this.$FnMouseDown,this.$FnMouseMove,this.$FnMouseUp]);
},_closeNotice:function(){this.welNoticeLayer.hide(),jindo.$Cookie().set(this.sCookieNotice,1,3650)}
}),nhn.husky.SE_WYSIWYGEnterKey=jindo.$Class({name:"SE_WYSIWYGEnterKey",$init:function(a){this.sLineBreaker="BR"==a?"BR":"P",
this.htBrowser=jindo.$Agent().navigator(),this.htBrowser.opera&&"P"==this.sLineBreaker&&(this.$ON_MSG_APP_READY=function(){}),
this.htBrowser.ie?this._addCursorHolder=this._addCursorHolderSpace:(this._addExtraCursorHolder=function(){},
this._addBlankText=function(){})},$ON_MSG_APP_READY:function(){this.oApp.exec("ADD_APP_PROPERTY",["sLineBreaker",this.sLineBreaker]),
this.oSelection=this.oApp.getEmptySelection(),this.tmpTextNode=this.oSelection._document.createTextNode(unescape("%u00A0")),
jindo.$Fn(this._onKeyDown,this).attach(this.oApp.getWYSIWYGDocument(),"keydown")},_onKeyDown:function(a){
var b=a.key();a.canceled||b.shift||b.enter&&("BR"==this.sLineBreaker?this._insertBR(a):this._wrapBlock(a));
},$ON_REGISTER_CONVERTERS:function(){this.oApp.exec("ADD_CONVERTER",["IR_TO_DB",jindo.$Fn(this.onIrToDB,this).bind()]);
},onIrToDB:function(a){var b=a,c=/<br(\s[^>]*)?\/?>((?:<\/span>)?<\/p>)/gi,d=/(<p[^>]*>)(?:\s*)(<\/p>)/gi;
return b=b.replace(c,"&nbsp;$2"),b=this.htBrowser.ie&&this.htBrowser.version<11?b.replace(d,"$1&nbsp;$2"):b.replace(d,"");
},_addBlankText:function(a){var b,c,d,e,f,g=a.getNodes();for(b=0,c=g.length;c>b;b++)d=g[b],1===d.nodeType&&"SPAN"===d.tagName&&(d.id.indexOf(a.HUSKY_BOOMARK_START_ID_PREFIX)>-1||d.id.indexOf(a.HUSKY_BOOMARK_END_ID_PREFIX)>-1||(e=d.firstChild,
(!e||3==e.nodeType&&nhn.husky.SE2M_Utils.isBlankTextNode(e)||1==e.nodeType&&1==d.childNodes.length&&(e.id.indexOf(a.HUSKY_BOOMARK_START_ID_PREFIX)>-1||e.id.indexOf(a.HUSKY_BOOMARK_END_ID_PREFIX)>-1))&&(f=a._document.createTextNode(unescape("%uFEFF")),
d.appendChild(f))))},_addCursorHolder:function(a){var b=a;return(""==a.innerHTML||(b=this._getStyleOnlyNode(a)))&&(b.innerHTML="<br>"),
b||(b=this._getStyleNode(a)),b},_addCursorHolderSpace:function(a){var b;if(this._addSpace(a),b=this._getStyleNode(a),
""==b.innerHTML&&"param"!=b.nodeName.toLowerCase())try{b.innerHTML=unescape("%uFEFF")}catch(c){}return b;
},_getBlockEndNode:function(a,b){return a?"BR"===a.nodeName?a:a===b?b:this._getBlockEndNode(a.nextSibling,b):b;
},_convertHeadSpace:function(a){var b;if(a&&(b=a.nextSibling)&&3===b.nodeType){for(var c,d=b.nodeValue,e="",f=0;(c=d[f])&&" "===c;f++)e+=" ";
f>0&&(b.nodeValue=e+d.substring(f))}},_wrapBlock:function(a){var b,c,d,e=this.oApp.getSelection(),f=e.placeStringBookmark(),g=e.getLineInfo(),h=g.oStart,i=g.oEnd;
if((!h.bParentBreak||e.rxBlockContainer.test(h.oLineBreaker.tagName))&&(a.stop(),e.deleteContents(),
h.oNode.parentNode&&11!==h.oNode.parentNode.nodeType)){b=this.oApp.getWYSIWYGDocument().createElement(this.sLineBreaker),
e.moveToBookmark(f),e.setStartBefore(h.oNode),this._addBlankText(e),e.surroundContents(b),e.collapseToEnd(),
c=this.oApp.getWYSIWYGDocument().createElement(this.sLineBreaker);var j=this._getBlockEndNode(h.oNode,i.oNode);
return j===h.oNode&&(j=i.oNode),e.setEndAfter(j),this._addBlankText(e),e.surroundContents(c),e.moveToStringBookmark(f,!0),
e.collapseToEnd(),e.removeStringBookmark(f),e.select(),null!==c.lastChild&&"BR"==c.lastChild.tagName&&c.removeChild(c.lastChild),
d=this._addCursorHolder(c),c.nextSibling&&"BR"==c.nextSibling.tagName&&c.parentNode.removeChild(c.nextSibling),
e.selectNodeContents(d),e.collapseToStart(),e.select(),this.oApp.exec("CHECK_STYLE_CHANGE"),f=e.placeStringBookmark(),
void setTimeout(jindo.$Fn(function(a){var b=e.getStringBookmark(a);b&&(e.moveToStringBookmark(a),e.select(),
e.removeStringBookmark(a))},this).bind(f),0)}var k=e.getStringBookmark(f,!0);if(this.htBrowser.firefox)k&&k.nextSibling&&"IFRAME"==k.nextSibling.tagName?setTimeout(jindo.$Fn(function(a){
var b=e.getStringBookmark(a);b&&(e.moveToStringBookmark(a),e.select(),e.removeStringBookmark(a))},this).bind(f),0):setTimeout(jindo.$Fn(function(a){
var b=e.getStringBookmark(a,!0);b&&(this._convertHeadSpace(b),e.removeStringBookmark(a))},this).bind(f),0);else if(this.htBrowser.ie){
var l=k.parentNode,m=!1,n=!1;if(!k||!l)return void e.removeStringBookmark(f);if(e.removeStringBookmark(f),
m="U"===l.tagName||null!==nhn.husky.SE2M_Utils.findAncestorByTagName("U",l),n="S"===l.tagName||"STRIKE"===l.tagName||null!==nhn.husky.SE2M_Utils.findAncestorByTagName("S",l)&&null!==nhn.husky.SE2M_Utils.findAncestorByTagName("STRIKE",l),
m||n)return void setTimeout(jindo.$Fn(this._addTextDecorationTag,this).bind(m,n),0);setTimeout(jindo.$Fn(this._addExtraCursorHolder,this).bind(l),0);
}else this._convertHeadSpace(k),e.removeStringBookmark(f)},_addExtraCursorHolder:function(a){var b,c,d;
if(a=this._getStyleOnlyNode(a),a&&"SPAN"===a.tagName){for(b=a.lastChild;b;)c=b.previousSibling,3===b.nodeType?(nhn.husky.SE2M_Utils.isBlankTextNode(b)&&b.parentNode.removeChild(b),
b=c):b=c;d=a.innerHTML,""===d.replace("​","").replace("﻿","")&&(a.innerHTML="​")}var e,f=this.oApp.getSelection();
if(f.collapsed&&(f.fixCommonAncestorContainer(),e=f.commonAncestorContainer,e&&(e=f._getVeryFirstRealChild(e),
3===e.nodeType&&(e=e.parentNode),e&&"SPAN"===e.tagName))){d=e.innerHTML;var g=!1;""===d.replace("​","").replace("﻿","")&&(e.innerHTML="​",
g=!0),f.selectNodeContents(e),g?f.collapseToEnd():f.collapseToStart(),f.select()}},_addSpace:function(a){
var b,c,d,e,f,g;if(a){if(3===a.nodeType)return a.parentNode;if("P"!==a.tagName)return a;if(f=jindo.$Element(a).child(function(a){
return 1===a.$value().nodeType&&"IMG"===a.$value().tagName},1),f.length>0){for(g=f[f.length-1].$value(),
c=g.nextSibling;c;)d=c.nextSibling,3!==c.nodeType||"&nbsp;"!==c.nodeValue&&c.nodeValue!==unescape("%u00A0")&&"​"!==c.nodeValue||a.removeChild(c),
c=d;return a}for(c=a.firstChild,d=c,e=!1;c;)d=c.nextSibling,3===c.nodeType&&(c.nodeValue===unescape("%uFEFF")&&a.removeChild(c),
e||"&nbsp;"!==c.nodeValue&&c.nodeValue!==unescape("%u00A0")&&"​"!==c.nodeValue||(e=!0)),c=d;return e||(b=this.tmpTextNode.cloneNode(),
a.appendChild(b)),a}},_addTextDecorationTag:function(a,b){var c,d,e=this.oApp.getSelection();if(e.collapsed){
for(c=e.startContainer;c;){if(3===c.nodeType){c=nhn.DOMFix.parentNode(c);break}if(!c.childNodes||0===c.childNodes.length)break;
c=c.firstChild}c&&"U"!==c.tagName&&"S"!==c.tagName&&"STRIKE"!==c.tagName&&(a&&(d=e._document.createElement("U"),
c.appendChild(d),c=d),b&&(d=e._document.createElement("STRIKE"),c.appendChild(d)),d.innerHTML="​",e.selectNodeContents(d),
e.collapseToEnd(),e.select())}},_getStyleNode:function(a){for(;a.firstChild&&this.oSelection._isBlankTextNode(a.firstChild);)a.removeChild(a.firstChild);
var b=a.firstChild;return b?3===b.nodeType||1===b.nodeType&&("IMG"==b.tagName||"BR"==b.tagName||"HR"==b.tagName||"IFRAME"==b.tagName)?a:this._getStyleNode(a.firstChild):a;
},_getStyleOnlyNode:function(a){if(!a)return null;if(!a.insertBefore)return null;if("IMG"==a.tagName||"BR"==a.tagName||"HR"==a.tagName||"IFRAME"==a.tagName)return null;
for(;a.firstChild&&this.oSelection._isBlankTextNode(a.firstChild);)a.removeChild(a.firstChild);return a.childNodes.length>1?null:a.firstChild?3===a.firstChild.nodeType?nhn.husky.SE2M_Utils.isBlankTextNode(a.firstChild)?a:null:this._getStyleOnlyNode(a.firstChild):a;
},_insertBR:function(a){a.stop();var b=this.oApp.getSelection(),c=this.oApp.getWYSIWYGDocument().createElement("BR");
if(b.insertNode(c),b.selectNode(c),b.collapseToEnd(),!this.htBrowser.ie){var d=b.getLineInfo(),e=d.oEnd;
if(e.bParentBreak){for(;e.oNode&&3==e.oNode.nodeType&&""==e.oNode.nodeValue;)e.oNode=e.oNode.previousSibling;
var f=1;(e.oNode==c||e.oNode.nextSibling==c)&&(f=0),0===f&&(b.pasteHTML("<br type='_moz'/>"),b.collapseToEnd());
}}b.insertNode(this.oApp.getWYSIWYGDocument().createTextNode("")),b.select()}}),nhn.husky.SE2M_EditingAreaRuler=jindo.$Class({
name:"SE2M_EditingAreaRuler",$init:function(a){this._assignHTMLElements(a),this.htConfig=nhn.husky.SE2M_Configuration.SE2M_EditingAreaRuler||{};
},_assignHTMLElements:function(a){this.elEditingAreaRuler=jindo.$$.getSingle("DIV.se2_editor_mark",a);
},_adjustWysiwygWidth:function(){var a=jindo.$Element(this.oApp.getWYSIWYGDocument().body);if(a&&this.htConfig[this.nRulerWidth]){
var b="{"+this.htConfig[this.nRulerWidth].sStyle.replace(/;/gi,",").replace(/\"/gi,"")+"}",c=jindo.$Json(b.replace(/(\w+)\s?:\s?([\w\s]*[^,}])/gi,'$1:"$2"'));
a.css(c.toObject());var d=jindo.$Element(this.elEditingAreaRuler),e={width:a.css("width"),marginLeft:a.css("marginLeft"),
top:a.css("marginTop")};d.css(e),this.bUse?d.show():d.hide()}},$ON_ENABLE_WYSIWYG_RULER:function(){this.oApp.htOptions[this.name]&&(this.bUse=this.oApp.htOptions[this.name].bUse||!1,
this.nRulerWidth=this.oApp.htOptions[this.name].nRulerWidth||0),!this.elEditingAreaRuler||0>=this.nRulerWidth||this._adjustWysiwygWidth();
},$ON_CHANGE_EDITING_MODE:function(a){this.elEditingAreaRuler&&("WYSIWYG"===a&&this.bUse&&this.htConfig[this.nRulerWidth]?jindo.$Element(this.elEditingAreaRuler).show():jindo.$Element(this.elEditingAreaRuler).hide());
}}),nhn.husky.SE2M_EditingModeChanger=jindo.$Class({name:"SE2M_EditingModeChanger",htConversionMode:null,
$init:function(a,b){this.htConversionMode=b,this._assignHTMLElements(a)},_assignHTMLElements:function(a){
a=jindo.$(a)||document,this.elWYSIWYGButton=jindo.$$.getSingle("BUTTON.se2_to_editor",a),this.elHTMLSrcButton=jindo.$$.getSingle("BUTTON.se2_to_html",a),
this.elTEXTButton=jindo.$$.getSingle("BUTTON.se2_to_text",a),this.elModeToolbar=jindo.$$.getSingle("DIV.se2_conversion_mode",a),
this.welWYSIWYGButtonLi=jindo.$Element(this.elWYSIWYGButton.parentNode),this.welHTMLSrcButtonLi=jindo.$Element(this.elHTMLSrcButton.parentNode),
this.welTEXTButtonLi=jindo.$Element(this.elTEXTButton.parentNode)},$BEFORE_MSG_APP_READY:function(){
this.oApp.exec("ADD_APP_PROPERTY",["isUseModeChanger",jindo.$Fn(this.isUseModeChanger,this).bind()]);
},$ON_MSG_APP_READY:function(){this.oApp.htOptions.bOnlyTextMode?(this.elWYSIWYGButton.style.display="none",
this.elHTMLSrcButton.style.display="none",this.elTEXTButton.style.display="block",this.oApp.exec("CHANGE_EDITING_MODE",["TEXT"])):(this.oApp.registerBrowserEvent(this.elWYSIWYGButton,"click","EVENT_CHANGE_EDITING_MODE_CLICKED",["WYSIWYG"]),
this.oApp.registerBrowserEvent(this.elHTMLSrcButton,"click","EVENT_CHANGE_EDITING_MODE_CLICKED",["HTMLSrc"]),
this.oApp.registerBrowserEvent(this.elTEXTButton,"click","EVENT_CHANGE_EDITING_MODE_CLICKED",["TEXT",!1]),
this.showModeChanger(),this.isUseModeChanger()===!1&&this.oApp.isUseVerticalResizer()===!1&&(this.elModeToolbar.style.display="none"));
},showModeChanger:function(){this.isUseModeChanger()?(this.elWYSIWYGButton.style.display="block",this.elHTMLSrcButton.style.display="block",
this.elTEXTButton.style.display="block"):(this.elWYSIWYGButton.style.display="none",this.elHTMLSrcButton.style.display="none",
this.elTEXTButton.style.display="none")},isUseModeChanger:function(){return"undefined"==typeof this.htConversionMode||"undefined"==typeof this.htConversionMode.bUseModeChanger||this.htConversionMode.bUseModeChanger===!0?!0:!1;
},$ON_EVENT_CHANGE_EDITING_MODE_CLICKED:function(a,b){if("TEXT"==a){var c=this.oApp.getIR();if(c.length>0&&!b&&!confirm(this.oApp.$MSG("SE2M_EditingModeChanger.confirmTextMode")))return!1;
this.oApp.exec("CHANGE_EDITING_MODE",[a])}else this.oApp.exec("CHANGE_EDITING_MODE",[a]);"HTMLSrc"==a?this.oApp.exec("MSG_NOTIFY_CLICKCR",["htmlmode"]):"TEXT"==a?this.oApp.exec("MSG_NOTIFY_CLICKCR",["textmode"]):this.oApp.exec("MSG_NOTIFY_CLICKCR",["editormode"]);
},$ON_DISABLE_ALL_UI:function(a){a=a||{};var b=jindo.$A(a.aExceptions||[]);b.has("mode_switcher")||("WYSIWYG"==this.oApp.getEditingMode()?(this.welWYSIWYGButtonLi.removeClass("active"),
this.elHTMLSrcButton.disabled=!0,this.elTEXTButton.disabled=!0):"TEXT"==this.oApp.getEditingMode()?(this.welTEXTButtonLi.removeClass("active"),
this.elWYSIWYGButton.disabled=!0,this.elHTMLSrcButton.disabled=!0):(this.welHTMLSrcButtonLi.removeClass("active"),
this.elWYSIWYGButton.disabled=!0,this.elTEXTButton.disabled=!0))},$ON_ENABLE_ALL_UI:function(){"WYSIWYG"==this.oApp.getEditingMode()?(this.welWYSIWYGButtonLi.addClass("active"),
this.elHTMLSrcButton.disabled=!1,this.elTEXTButton.disabled=!1):"TEXT"==this.oApp.getEditingMode()?(this.welTEXTButtonLi.addClass("active"),
this.elWYSIWYGButton.disabled=!1,this.elHTMLSrcButton.disabled=!1):(this.welHTMLSrcButtonLi.addClass("active"),
this.elWYSIWYGButton.disabled=!1,this.elTEXTButton.disabled=!1)},$ON_CHANGE_EDITING_MODE:function(a){
"HTMLSrc"==a?(this.welWYSIWYGButtonLi.removeClass("active"),this.welHTMLSrcButtonLi.addClass("active"),
this.welTEXTButtonLi.removeClass("active"),this.elWYSIWYGButton.disabled=!1,this.elHTMLSrcButton.disabled=!0,
this.elTEXTButton.disabled=!1,this.oApp.exec("HIDE_ALL_DIALOG_LAYER"),this.oApp.exec("DISABLE_ALL_UI",[{
aExceptions:["mode_switcher"]}])):"TEXT"==a?(this.welWYSIWYGButtonLi.removeClass("active"),this.welHTMLSrcButtonLi.removeClass("active"),
this.welTEXTButtonLi.addClass("active"),this.elWYSIWYGButton.disabled=!1,this.elHTMLSrcButton.disabled=!1,
this.elTEXTButton.disabled=!0,this.oApp.exec("HIDE_ALL_DIALOG_LAYER"),this.oApp.exec("DISABLE_ALL_UI",[{
aExceptions:["mode_switcher"]}])):(this.welWYSIWYGButtonLi.addClass("active"),this.welHTMLSrcButtonLi.removeClass("active"),
this.welTEXTButtonLi.removeClass("active"),this.elWYSIWYGButton.disabled=!0,this.elHTMLSrcButton.disabled=!1,
this.elTEXTButton.disabled=!1,this.oApp.exec("RESET_STYLE_STATUS"),this.oApp.exec("ENABLE_ALL_UI",[]));
}}),nhn.husky.SE_PasteHandler=jindo.$Class({name:"SE_PasteHandler",sContentsSlicer:"("+["-----Original Message-----","---------- Forwarded message ----------","----- 원문 메시지 -----"].join("|")+")",
$init:function(a){this.sParagraphContainer=a||"P",this.aConversionTarget=["TABLE"],this.htBrowser=jindo.$Agent().navigator();
},$ON_REGISTER_CONVERTERS:function(){this.htBrowser.ie&&this.oApp.exec("ADD_CONVERTER",["IR_TO_DB",jindo.$Fn(this.irToDb,this).bind()]);
},irToDb:function(a){if("undefined"==typeof a||!a)return a;var b=this._filterPastedContents(a,!0);return b;
},$ON_MSG_APP_READY:function(){this.elEditingAreaContainer=jindo.$$.getSingle("DIV.husky_seditor_editing_area_container",null,{
oneTimeOffCache:!0}),this.oApp.exec("ADD_APP_PROPERTY",["filterPastedContents",jindo.$Fn(this._filterPastedContents,this).bind()]),
(this.htBrowser.chrome||this.htBrowser.safari&&this.htBrowser.version>=6)&&(this.$ON_EVENT_EDITING_AREA_PASTE=this._handlePaste);
},_handlePaste:function(a){var b,c,d,e,f=!1;b=a.$value().clipboardData.getData("text/html"),c=document.createElement("DIV"),
c.innerHTML=b,d=jindo.$$.getSingle("style",c,{oneTimeOffCache:!0}),d&&(e=d.innerHTML,e=e.replace(/"/g,"'"),
this._sStyleFromClipboard=e),f=this._hasConversionTarget(b),f&&(this.oApp.exec("RECORD_UNDO_BEFORE_ACTION",["HANDLE PASTE",{
elSaveTarget:this.oApp.getWYSIWYGDocument().body}]),this._preparePaste(),setTimeout(jindo.$Fn(function(){
var a=new RegExp("^[​]");this.zwspStart&&("unknown"==typeof this.zwspStart.nodeValue?"unknown"!=typeof this.zwspStart.parentNode&&this.zwspStart.parentNode&&this.zwspStart.parentNode.removeChild(this.zwspStart):(this.zwspStart.nodeValue&&(this.zwspStart.nodeValue=this.zwspStart.nodeValue.replace(a,"")),
""==this.zwspStart.nodeValue&&this.zwspStart.parentNode&&this.zwspStart.parentNode.removeChild(this.zwspStart)));
var b=new RegExp("[​]$");this.zwspEnd&&("unknown"==typeof this.zwspEnd.nodeValue?"unknown"!=typeof this.zwspEnd.parentNode&&this.zwspEnd.parentNode&&this.zwspEnd.parentNode.removeChild(this.zwspEnd):(this.zwspEnd.nodeValue&&(this.zwspEnd.nodeValue=this.zwspEnd.nodeValue.replace(b,"")),
""==this.zwspEnd.nodeValue&&this.zwspEnd.parentNode&&this.zwspEnd.parentNode.removeChild(this.zwspEnd)));
var c=this.oApp.getSelection();this.oSelectionClone=null;try{this._processPaste()}catch(d){if("undefined"!=typeof JEagleEyeClient){
var e="http://blog.naver.com/hp_SE_PasteHandler.js/_handlePaste",f=d.lineNumber;f||(f=0),JEagleEyeClient.sendError(d,e,f);
}}c.moveToStringBookmark(this._sBM),c.collapseToEnd(),c.select(),c.removeStringBookmark(this._sBM),this.oApp.exec("RECORD_UNDO_AFTER_ACTION",["HANDLE PASTE",{
elSaveTarget:this.oApp.getWYSIWYGDocument().body}])},this).bind(),0))},_hasConversionTarget:function(a){
var b=!1,c=new RegExp("<("+this.aConversionTarget.join("|")+")[^>]*>","i");return a&&c.test(a)&&(b=!0),
b},_preparePaste:function(){this._securePasteArea()},_securePasteArea:function(){var a=this.oApp.getSelection();
this._sBM=a.placeStringBookmark();var b=a.getStringBookmark(this._sBM,!0),c=a.getStringBookmark(this._sBM),d=document.createTextNode("");
this.zwspStart=d.cloneNode(!0),this.zwspStart.nodeValue="​",this.zwspEnd=this.zwspStart.cloneNode(!0);
var e=c.nextSibling;e?(this._isEmptyTextNode(e)&&(e=e.nextSibling),c.parentNode.insertBefore(this.zwspStart,e)):c.parentNode.appendChild(this.zwspStart),
b.parentNode.insertBefore(this.zwspEnd,b),c.innerHTML="​",a.setStartAfter(c),a.setEndBefore(this.zwspEnd),
a.select()},_processPaste:function(){if(this._savePastedContents(),this._sTarget)try{this.elPasteHelper?(this._clearPasteHelper(),
this._showPasteHelper()):this._createPasteHelper(),this._loadToPasteHelper(),this._loadToBody(),this._hidePasteHelper();
}catch(a){throw this._hidePasteHelper(),a}},_savePastedContents:function(){var a=this.oApp.getSelection();
a.moveToStringBookmark(this._sBM),a.select(),this.oSelectionClone=a.cloneContents(),a.collapseToEnd(),
a.select();var b=this._outerHTML(this.oSelectionClone);if(this._isPastedContentsEmpty=!0,""!=b){if(this._isPastedContentsEmpty=!1,
this.htBrowser.firefox||this.htBrowser.safari&&this.htBrowser.version>=6){var c=b.match(/<style>([^<>]+)<\/style>/i);
if(c){var d=c[1];d=d.replace(/"/g,"'"),this._sStyleFromClipboard?this._sStyleFromClipboard+=d:this._sStyleFromClipboard=d;
}}this._sTarget=this._filterPastedContents(b,!0)}},_outerHTML:function(a){var b="";if(a.outerHTML)b=a.outerHTML;else{
var c=document.createElement("DIV");c.appendChild(a.cloneNode(!0)),b=c.innerHTML}return b},_filterPastedContents:function(a,b){
this._isPastedMultiParagraph=!1,this._aGoesPreviousParagraph=[];var c,d,e,f,g,h,i,j,k=[],l=-1,m="",n=["BLOCKQUOTE","DD","DIV","DL","FORM","H1","H2","H3","H4","H5","H6","HR","OL","P","TABLE","UL","IFRAME"],o=new RegExp("^("+n.join("|")+")$","i"),p=!1,q=0,r=0,s=[],t=0,u=0,v=[],w=/^<[^!?\/\s>]+(([\s]{0})|([\s]+[^>]+))>/,x=/^<[\/]?([^\s]+)(([\s]{0})|([\s]+[^>]+))>/,y=/^<\/[A-Za-z]+>/,z=/^<[^>]+\/>/,A=/^[\s]+/,B=/^[^<\n]+/,C=/^<[^<>]+>/,D=/(style[\s]*=[\s]*)(["'])([^"']*)(["'])/i,E=/class[\s]*=[\s]*(?:(?:["']([^"']*)["'])|([^\s>]+))/i,F=/(^<table)/gi,G=/&quot;/gi,H="",I=[],J="",K="",L=/(class[\s]*=[\s]*["'])([^"']*)(["'])/i,M=/(class[\s]*=[\s]*)([^"'\s>]+)/i,N=0,O=/(border)([-]?[^:]*)(:[\s]*)([^;'"]+)/gi,P=/([^:\d])([0]?\.[0-5][0-9]*pt)/gi,Q=/(:)([\s]*([0]?\.[0-5][0-9]*pt))/gi,R="",S="",T="",U="",V="",W="",X=!1,Y=!1,Z=/(["';\s])(width[\s]*:[\s]*)([A-Za-z0-9.]+[%]?)([;]?)/i,$=/(["';\s])(height[\s]*:[\s]*)([A-Za-z0-9.]+[%]?)([;]?)/i,_=/([\s]*)(>)/g,ab=/span[\s]*=[\s]*"([\d]+)"/i,bb=/colspan[\s]*=[\s]*"([\d]+)"/i;
this._doFilter=jindo.$Fn(function(a){var b=a;this._isPastedMultiParagraph=!1,this._aGoesPreviousParagraph=[];
var n=!1,cb=!1,db=0,eb=0,fb=!1;for(k=[],l=-1,m="",p=!1,q=0,r=0,s=[],t=0,u=0,v=[],H="",I=[],J="",K="",
N=0,R="",S="",T="",U="",V="",W="",X=!1,Y=!1;""!=a;){if(d="",c="",z.test(a))c=a.match(z)[0],d=c,f=z;else if(w.test(a)){
if(c=a.match(w)[0],e=c.match(x)[1].toUpperCase(),H="",E.test(c)&&(H=c.match(E)[1]||c.match(E)[2]),c=c.replace(G,"'"),
(this.htBrowser.chrome||this.htBrowser.firefox||this.htBrowser.safari&&this.htBrowser.version>=6)&&(I=[],
H&&-1===H.indexOf("mso")&&(I=H.split(" ")),I&&I.length>0))for(var gb=0,hb=I.length;hb>gb;gb++)g="",h="",
i=null,J="",g=I[gb],h=g+"[\\n\\r\\t\\s]*{([^}]*)}",i=new RegExp(h),i.test(this._sStyleFromClipboard)&&(J=this._sStyleFromClipboard.match(i)[1]),
J&&(c=D.test(c)?c.replace(D,"$1$2"+J+" $3$4"):c.replace(_,' style="'+J+'"$2'));if(c=c.replace(O,function(){
return arguments[0].replace(Q,"$11px").replace(P," 1px")}),e=c.match(x)[1].toUpperCase(),"TABLE"===e)0===u&&(H?-1===H.indexOf("__se_tbl")&&(L.test(c)?c=c.replace(L,"$1$2 __se_tbl_ext$3"):M.test(c)&&(c=c.replace(M,'$1"$2 __se_tbl_ext"'))):c=c.replace(F,'$1 class="__se_tbl_ext"')),
p=!0,u++;else if(this.htBrowser.ie||"COL"!==e)this.htBrowser.ie||"TR"!==e?("TD"===e||"TH"===e)&&(j=void 0,
s=void 0,N=void 0,this.htBrowser.ie||(s=v[u],s&&s.length>0&&(bb.test(c)&&(N=c.match(bb)[1],N=parseInt(N,10)),
j=s[q],!Z.test(c)&&j&&(N&&(-1!=j.indexOf("pt")?j=parseFloat(j,10)*N+"pt":-1!=j.indexOf("px")&&(j=parseFloat(j,10)*N+"px")),
c=D.test(c)?c.replace(D,"$1$2width:"+j+"; $3$4"):c.replace(_,' style="width:'+j+';"$2'))),!$.test(c)&&t&&(c=D.test(c)?c.replace(D,"$1$2height:"+t+"; $3$4"):c.replace(_,' style="height:'+t+';"$2'))),
N?q+=N:q++):$.test(c)?(U=c.match($)[3],t=U):t=null;else{if(T=Z.test(c)?c.match(Z)[3]:"",N=0,ab.test(c)&&(N=c.match(ab)[1]),
s=v[u]&&"number"==typeof v[u].length?v[u]:[],N){N=parseInt(N,10);for(var gb=0;N>gb;gb++)s.push(T),r++;
}else r++,s.push(T);v[u]=s}o.test(e)&&(this._isPastedMultiParagraph=!0,n=!0),d+=c,f=w}else if(A.test(a))c=a.match(A)[0],
d=c,f=A;else if(B.test(a))c=a.match(B)[0],d=c,f=B;else if(y.test(a))c=a.match(y)[0],e=c.match(x)[1].toUpperCase(),
"TABLE"===e?(v[u]=null,u--,p=!1,r=0,q=0):"TR"===e&&(q=0),o.test(e)&&(cb=!0),d+=c,f=y;else{if(!C.test(a))return b;
c=a.match(C)[0],d=c,f=C}if(""!=d){m=d,l++;var ib="";this._isPastedMultiParagraph||(ib=d),n?(fb&&(this.htBrowser.ie||(d="</"+this.sParagraphContainer+">"+d),
fb=!1),eb++,db++):fb||0!=db||(this.htBrowser.ie||(d="<"+this.sParagraphContainer+">"+d),fb=!0),cb&&(n=!1,
cb=!1,db--),this._isPastedMultiParagraph||this._aGoesPreviousParagraph.push(ib),k.push(d)}a=a.replace(f,"");
}if(!this.htBrowser.ie&&0==eb){var jb=new RegExp("^<"+this.sParagraphContainer+">");k[0]&&(k[0]=k[0].replace(jb,""));
}return k.join("")},this).bind();var cb=b?this._filterTableContents(a):this._doFilter(a);return cb},
_filterTableContents:function(a){function b(){o=q.lastIndex,p=r.lastIndex;var a=q.exec(j),b=r.exec(j),e=q.lastIndex,f=r.lastIndex;
q.lastIndex=o,r.lastIndex=p,null===a?null!==b&&d():null===b?null!==a&&c():f>e?c():e>f&&d()}function c(){
l=q.exec(j),r.lastIndex=q.lastIndex,null!==l&&v++,1==v&&(m=l.index,s.push(m)),b()}function d(){l=r.exec(j),
q.lastIndex=r.lastIndex,null!==l&&w++,0!==v&&0!==w&&v==w&&(n=l.index,t.push(n+8),u.push(x()),y()),b();
}var e,f,g,h,i=this.sContentsSlicer?!0:!1,j=a,k="";i&&(e=new RegExp(this.sContentsSlicer),f=e.exec(a),
f&&(g=f.index,j=a.slice(0,g),k=a.slice(g,a.length)));var l,m,n,o,p,q=new RegExp("<table(([\\s]{0})|([\\s]+[^>]+))>","ig"),r=new RegExp("</table>","ig"),s=[],t=[],u=[],v=0,w=0,x=function(){
return j.slice(m,n+8)},y=function(){m=void 0,n=void 0,v=0,w=0};b();for(var z=0,A=u.length;A>z;z++){var B=u[z];
B=this._doFilter(B),u[z]=B}if(this.htBrowser.ie){var C,D,E=[],F=s.length,G=t.length;if(F>0&&F==G){C=s[0],
E.push(j.slice(0,C));for(var z=0,A=s.length;A>z;z++)F>1&&z>0&&(C=t[z-1],D=s[z],E.push(j.slice(C,D))),
C=s[z],D=t[z],E.push(u[z]);D=t[G-1],E.push(j.slice(D,j.length+1)),h=E.join("")}else h=j}else h=u.join("");
return h+=k},_createPasteHelper:function(){this.elPasteHelper||(this.elPasteHelper=document.createElement("DIV"),
this.elPasteHelper.className="husky_seditor_paste_helper",this.elPasteHelper.style.width="0px",this.elPasteHelper.style.height="0px",
this.elPasteHelper.style.overflow="hidden",this.elPasteHelper.contentEditable="true",this.elPasteHelper.style.position="absolute",
this.elPasteHelper.style.top="9999px",this.elPasteHelper.style.left="9999px",this.elEditingAreaContainer.appendChild(this.elPasteHelper));
},_showPasteHelper:function(){this.elPasteHelper&&"none"==this.elPasteHelper.style.display&&(this.elPasteHelper.style.display="block");
},_hidePasteHelper:function(){this.elPasteHelper&&"none"!=this.elPasteHelper.style.display&&(this.elPasteHelper.style.display="none");
},_clearPasteHelper:function(){this.elPasteHelper&&(this.elPasteHelper.innerHTML="")},_loadToPasteHelper:function(){
var a,b,c,d,e=[];if(this._isPastedMultiParagraph&&(a=document.createElement("DIV"),a.innerHTML=this._sTarget,
e=a.childNodes),this._aGoesPreviousParagraph&&this._aGoesPreviousParagraph.length>0){b=this._aGoesPreviousParagraph.join(""),
a=document.createElement("DIV"),a.innerHTML=b,c=a.childNodes;for(var f=0,g=c.length;g>f;f++)this.elPasteHelper.appendChild(c[f].cloneNode(!0));
e.length>0&&(e.splice?e.splice(0,1):(d=jindo.$A(e),d.splice(0,1),e=d.$value()))}if(e.length>0)for(var f=0,g=e.length;g>f;f++)this.elPasteHelper.appendChild(e[f].cloneNode(!0));
},_loadToBody:function(){var a=this.oApp.getSelection();try{a.moveToStringBookmark(this._sBM),a.select();
var b=a.getNodes(),c=this._markMatchedElementIndex(b,this.aConversionTarget),d=this.oApp.getSelection(this.oApp.getWYSIWYGWindow().parent);
d.setStartBefore(this.elPasteHelper.firstChild),d.setEndAfter(this.elPasteHelper.lastChild),d.select();
var e=d.getNodes(),f=this._markMatchedElementIndex(e,this.aConversionTarget),g=c.length-f.length;if(c.length>0&&c.length==f.length)for(var h,i,j,k,l=0,m=f.length;m>l;l++)h=c[l+g],
i=f[l],j=b[h],k=e[i],/__se_tbl/.test(j.className)||j.parentNode.replaceChild(k.cloneNode(!0),j)}catch(n){
a.moveToStringBookmark(this._sBM),a.select(),a.deleteContents();var o=a.getStringBookmark(this._sBM,!0);
throw o.parentNode.insertBefore(this.oSelectionClone.cloneNode(!0),o),n}},_markMatchedElementIndex:function(a,b,c,d){
var e,f,g,h=[],i=b.join("|"),j=new RegExp("^("+i+")$","i");c&&(d=d||"OR","AND"===d.toUpperCase()?g=!0:"OR"===d.toUpperCase()&&(g=!1));
for(var k=0,l=a.length;l>k;k++)if(e=a[k],j.test(e.nodeName))if(c){for(var m=c.length;m--;)if(f=c[m],
"AND"===d.toUpperCase()){if(!f.apply(e)){g=!1;break}}else if("OR"===d.toUpperCase()&&f.apply(e)){g=!0;
break}g&&h.push(k)}else h.push(k);return h},_isEmptyTextNode:function(a){return 3==a.nodeType&&!/\S/.test(a.nodeValue);
}}),nhn.ColorPicker=jindo.$Class({elem:null,huePanel:null,canvasType:"Canvas",_hsvColor:null,$init:function(a,b){
if(this.elem=jindo.$Element(a).empty(),this.huePanel=null,this.cursor=jindo.$Element("<div>").css("overflow","hidden"),
this.canvasType=jindo.$(a).filters?"Filter":jindo.$("<canvas>").getContext?"Canvas":null,!this.canvasType)return!1;
this.option({huePanel:null,huePanelType:"horizontal"}),this.option(b),this.option("huePanel")&&(this.huePanel=jindo.$Element(this.option("huePanel")).empty()),
this._hsvColor=this._hsv(0,100,100);for(var c in this)/^_on[A-Z][a-z]+[A-Z][a-z]+$/.test(c)&&(this[c+"Fn"]=jindo.$Fn(this[c],this));
this._onDownColorFn.attach(this.elem,"mousedown"),this.huePanel&&this._onDownHueFn.attach(this.huePanel,"mousedown"),
this.paint()},rgb:function(a){this.hsv(this._rgb2hsv(a.r,a.g,a.b))},hsv:function(a){if("undefined"==typeof a)return this._hsvColor;
var b=null,c=this.elem.width(),d=this.elem.height(),e=this.cursor.width(),f=this.cursor.height(),g=0,h=0;
if(this.huePanel)b=this._hsv2rgb(a.h,100,100),this.elem.css("background","#"+this._rgb2hex(b.r,b.g,b.b)),
g=a.s/100*c,h=(100-a.v)/100*d;else{var i=c/2;a.v>a.s?(a.v=100,g=a.s/100*i):(a.s=100,g=(100-a.v)/100*i+i),
h=a.h/360*d}g=Math.max(Math.min(g-1,c-e),1),h=Math.max(Math.min(h-1,d-f),1),this.cursor.css({left:g+"px",
top:h+"px"}),this._hsvColor=a,b=this._hsv2rgb(a.h,a.s,a.v),this.fireEvent("colorchange",{type:"colorchange",
element:this,currentElement:this,rgbColor:b,hexColor:"#"+this._rgb2hex(b.r,b.g,b.b),hsvColor:a})},paint:function(){
this.huePanel?(this["_paintColWith"+this.canvasType](),this["_paintHueWith"+this.canvasType]()):this["_paintOneWith"+this.canvasType](),
this.cursor.appendTo(this.elem),this.cursor.css({position:"absolute",top:"1px",left:"1px",background:"white",
border:"1px solid black"}).width(3).height(3),this.hsv(this._hsvColor)},_paintColWithFilter:function(){
jindo.$Element("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",filter:"progid:DXImageTransform.Microsoft.Gradient(GradientType=1,StartColorStr='#FFFFFFFF',EndColorStr='#00FFFFFF')"
}).appendTo(this.elem),jindo.$Element("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",
filter:"progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr='#00000000',EndColorStr='#FF000000')"
}).appendTo(this.elem)},_paintColWithCanvas:function(){var a=jindo.$Element("<canvas>").css({width:"100%",
height:"100%"});a.appendTo(this.elem.empty());var b=a.attr("width",a.width()).attr("height",a.height()).$value().getContext("2d"),c=null,d=a.width(),e=a.height();
c=b.createLinearGradient(0,0,d,0),c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(1,"rgba(255,255,255,0)"),
b.fillStyle=c,b.fillRect(0,0,d,e),c=b.createLinearGradient(0,0,0,e),c.addColorStop(0,"rgba(0,0,0,0)"),
c.addColorStop(1,"rgba(0,0,0,1)"),b.fillStyle=c,b.fillRect(0,0,d,e)},_paintOneWithFilter:function(){
for(var a,b,c,d,e,f,g=this.elem.height(),h=1;7>h;h++)a=Math.floor((h-1)/6*g),b=Math.floor(h/6*g),c=this._hsv2rgb((h-1)/6*360,100,100),
d=this._hsv2rgb(h/6*360,100,100),e="#FF"+this._rgb2hex(c.r,c.g,c.b),f="#FF"+this._rgb2hex(d.r,d.g,d.b),
jindo.$Element("<div>").css({position:"absolute",left:0,width:"100%",top:a+"px",height:b-a+"px",filter:"progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr='"+e+"',EndColorStr='"+f+"')"
}).appendTo(this.elem);jindo.$Element("<div>").css({position:"absolute",top:0,left:0,width:"50%",height:"100%",
filter:"progid:DXImageTransform.Microsoft.Gradient(GradientType=1,StartColorStr='#FFFFFFFF',EndColorStr='#00FFFFFF')"
}).appendTo(this.elem),jindo.$Element("<div>").css({position:"absolute",top:0,right:0,width:"50%",height:"100%",
filter:"progid:DXImageTransform.Microsoft.Gradient(GradientType=1,StartColorStr='#00000000',EndColorStr='#FF000000')"
}).appendTo(this.elem)},_paintOneWithCanvas:function(){var a={r:0,g:0,b:0},b=jindo.$Element("<canvas>").css({
width:"100%",height:"100%"});b.appendTo(this.elem.empty());for(var c=b.attr("width",b.width()).attr("height",b.height()).$value().getContext("2d"),d=b.width(),e=b.height(),f=c.createLinearGradient(0,0,0,e),g=0;7>g;g++)a=this._hsv2rgb(g/6*360,100,100),
f.addColorStop(g/6,"rgb("+a.join(",")+")");c.fillStyle=f,c.fillRect(0,0,d,e),f=c.createLinearGradient(0,0,d,0),
f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.5,"rgba(255,255,255,0)"),f.addColorStop(.5,"rgba(0,0,0,0)"),
f.addColorStop(1,"rgba(0,0,0,1)"),c.fillStyle=f,c.fillRect(0,0,d,e)},_paintHueWithFilter:function(){
var a,b,c,d,e,f,g="vertical"==this.option().huePanelType,h=this.huePanel.width(),i=this.huePanel.height(),j=null,k=parseInt(this.huePanel.css("borderWidth"),10);
isNaN(k)&&(k=0),h-=2*k;for(var l=1;7>l;l++){a=Math.floor((l-1)/6*(g?i:h)),b=Math.floor(l/6*(g?i:h)),
c=this._hsv2rgb((l-1)/6*360,100,100),d=this._hsv2rgb(l/6*360,100,100),e="#FF"+this._rgb2hex(c.r,c.g,c.b),
f="#FF"+this._rgb2hex(d.r,d.g,d.b),j=jindo.$Element("<div>").css({position:"absolute",filter:"progid:DXImageTransform.Microsoft.Gradient(GradientType="+(g?0:1)+",StartColorStr='"+e+"',EndColorStr='"+f+"')"
});var m=b-a+1;j.appendTo(this.huePanel),j.css(g?"left":"top",0).css(g?"width":"height","100%"),j.css(g?"top":"left",a+"px").css(g?"height":"width",m+"px");
}},_paintHueWithCanvas:function(){var a,b=this.option(),c="vertical"==b.huePanelType,d=jindo.$Element("<canvas>").css({
width:"100%",height:"100%"});d.appendTo(this.huePanel.empty());for(var e=d.attr("width",d.width()).attr("height",d.height()).$value().getContext("2d"),f=e.createLinearGradient(0,0,c?0:d.width(),c?d.height():0),g=0;7>g;g++)a=this._hsv2rgb(g/6*360,100,100),
f.addColorStop(g/6,"rgb("+a.join(",")+")");e.fillStyle=f,e.fillRect(0,0,d.width(),d.height())},_rgb2hsv:function(a,b,c){
var d=0,e=0,f=Math.max(a,b,c),g=Math.min(a,b,c),h=f-g;return e=f?h/f:0,e&&(a==f?d=60*(b-c)/h:b==f?d=120+60*(c-a)/h:c==f&&(d=240+60*(a-b)/h),
0>d&&(d+=360)),d=Math.floor(d),e=Math.floor(100*e),f=Math.floor(f/255*100),this._hsv(d,e,f)},_hsv2rgb:function(a,b,c){
a=a%360/60,b/=100,c/=100;var d=0,e=0,f=0,g=Math.floor(a),h=a-g,i=c*(1-b),j=c*(1-b*h),k=c*(1-b*(1-h));
switch(g){case 0:d=c,e=k,f=i;break;case 1:d=j,e=c,f=i;break;case 2:d=i,e=c,f=k;break;case 3:d=i,e=j,
f=c;break;case 4:d=k,e=i,f=c;break;case 5:d=c,e=i,f=j;break;case 6:}return d=Math.floor(255*d),e=Math.floor(255*e),
f=Math.floor(255*f),this._rgb(d,e,f)},_rgb2hex:function(a,b,c){return a=a.toString(16),1==a.length&&(a="0"+a),
b=b.toString(16),1==b.length&&(b="0"+b),c=c.toString(16),1==c.length&&(c="0"+c),a+b+c},_hex2rgb:function(a){
var b=a.match(/#?([0-9a-f]{6}|[0-9a-f]{3})/i);return b=3==b[1].length?b[1].match(/./g).filter(function(a){
return a+a}):b[1].match(/../g),{r:Number("0x"+b[0]),g:Number("0x"+b[1]),b:Number("0x"+b[2])}},_rgb:function(a,b,c){
var d=[a,b,c];return d.r=a,d.g=b,d.b=c,d},_hsv:function(a,b,c){var d=[a,b,c];return d.h=a,d.s=b,d.v=c,
d},_onDownColor:function(a){if(!a.mouse().left)return!1;var b=a.pos();this._colPagePos=[b.pageX,b.pageY],
this._colLayerPos=[b.layerX,b.layerY],this._onUpColorFn.attach(document,"mouseup"),this._onMoveColorFn.attach(document,"mousemove"),
this._onMoveColor(a)},_onUpColor:function(){this._onUpColorFn.detach(document,"mouseup"),this._onMoveColorFn.detach(document,"mousemove");
},_onMoveColor:function(a){var b=this._hsvColor,c=a.pos(),d=this._colLayerPos[0]+(c.pageX-this._colPagePos[0]),e=this._colLayerPos[1]+(c.pageY-this._colPagePos[1]),f=this.elem.width(),g=this.elem.height();
if(d=Math.max(Math.min(d,f),0),e=Math.max(Math.min(e,g),0),this.huePanel)b.s=b[1]=d/f*100,b.v=b[2]=(g-e)/g*100;else{
b.h=e/g*360;var h=f/2;h>d?(b.s=d/h*100,b.v=100):(b.s=100,b.v=(f-d)/h*100)}this.hsv(b),a.stop()},_onDownHue:function(a){
if(!a.mouse().left)return!1;var b=a.pos();this._huePagePos=[b.pageX,b.pageY],this._hueLayerPos=[b.layerX,b.layerY],
this._onUpHueFn.attach(document,"mouseup"),this._onMoveHueFn.attach(document,"mousemove"),this._onMoveHue(a);
},_onUpHue:function(){this._onUpHueFn.detach(document,"mouseup"),this._onMoveHueFn.detach(document,"mousemove");
},_onMoveHue:function(a){var b=this._hsvColor,c=a.pos(),d=0,e=0,f=this._hueLayerPos[0]+(c.pageX-this._huePagePos[0]),g=this._hueLayerPos[1]+(c.pageY-this._huePagePos[1]);
"vertical"==this.option().huePanelType?(d=g,e=this.huePanel.height()):(d=f,e=this.huePanel.width()),
b.h=b[0]=Math.min(Math.max(d,0),e)/e*360%360,this.hsv(b),a.stop()}}).extend(jindo.Component),nhn.husky.SE_WYSIWYGStyleGetter=jindo.$Class({
name:"SE_WYSIWYGStyleGetter",hKeyUp:null,getStyleInterval:200,oStyleMap:{fontFamily:{type:"Value",css:"fontFamily"
},fontSize:{type:"Value",css:"fontSize"},lineHeight:{type:"Value",css:"lineHeight",converter:function(a,b){
return a.match(/px$/)?Math.ceil(parseInt(a,10)/parseInt(b.fontSize,10)*10)/10:a}},bold:{command:"bold"
},underline:{command:"underline"},italic:{command:"italic"},lineThrough:{command:"strikethrough"},superscript:{
command:"superscript"},subscript:{command:"subscript"},justifyleft:{command:"justifyleft"},justifycenter:{
command:"justifycenter"},justifyright:{command:"justifyright"},justifyfull:{command:"justifyfull"},orderedlist:{
command:"insertorderedlist"},OrderedlistA:{command:"insertorderedlist"},UnorderedlistA:{command:"insertunorderedlist"
}},$init:function(){this.oStyle=this._getBlankStyle()},$LOCAL_BEFORE_ALL:function(){return"WYSIWYG"==this.oApp.getEditingMode();
},$ON_MSG_APP_READY:function(){this.oDocument=this.oApp.getWYSIWYGDocument(),this.oApp.exec("ADD_APP_PROPERTY",["getCurrentStyle",jindo.$Fn(this.getCurrentStyle,this).bind()]),
(jindo.$Agent().navigator().safari||jindo.$Agent().navigator().chrome||jindo.$Agent().navigator().ie)&&(this.oStyleMap.textAlign={
type:"Value",css:"textAlign"})},$ON_EVENT_EDITING_AREA_MOUSEUP:function(){this.oApp.exec("CHECK_STYLE_CHANGE");
},$ON_EVENT_EDITING_AREA_KEYPRESS:function(a){var b;if(!this.oApp.oNavigator.firefox||(b=a.key(),!b.ctrl||97!=b.keyCode))return this.bAllSelected?void(this.bAllSelected=!1):void this.oApp.exec("CHECK_STYLE_CHANGE");
},$ON_EVENT_EDITING_AREA_KEYDOWN:function(a){var b=this;setTimeout(function(){b._onEventEditingAreaKeyDown(a);
},1)},_onEventEditingAreaKeyDown:function(a){var b=a.key();if((this.oApp.oNavigator.ie||this.oApp.oNavigator.firefox)&&b.ctrl&&65==b.keyCode)return this.oApp.exec("RESET_STYLE_STATUS"),
void(this.bAllSelected=!0);if(8==b.keyCode||b.keyCode>=33&&b.keyCode<=40||45==b.keyCode||46==b.keyCode){
if(b.shift&&35===b.keyCode)return this.oApp.exec("RESET_STYLE_STATUS"),void(this.bAllSelected=!0);if(this.bAllSelected){
if(this.oApp.oNavigator.firefox)return;return void(this.bAllSelected=!1)}this.oApp.exec("CHECK_STYLE_CHANGE");
}},$ON_CHECK_STYLE_CHANGE:function(){this._getStyle()},$ON_RESET_STYLE_STATUS:function(){this.oStyle=this._getBlankStyle();
var a=this._getStyleOf(this.oApp.getWYSIWYGDocument().body);this.oStyle.fontFamily=a.fontFamily,this.oStyle.fontSize=a.fontSize,
this.oStyle.justifyleft="@^";for(var b in this.oStyle)this.oApp.exec("MSG_STYLE_CHANGED",[b,this.oStyle[b]]);
},getCurrentStyle:function(){return this.oStyle},_check_style_change:function(){this.oApp.exec("CHECK_STYLE_CHANGE",[]);
},_getBlankStyle:function(){var a={};for(var b in this.oStyleMap)a[b]="Value"==this.oStyleMap[b].type?"":0;
return a},_getStyle:function(){var a;if(nhn.CurrentSelection.isCollapsed())a=this._getStyleOf(nhn.CurrentSelection.getCommonAncestorContainer());else{
var b=this.oApp.getSelection(),c=function(a){return a.childNodes&&0!=a.childNodes.length?!1:!0},d=b.getNodes(!1,c);
a=this._getStyleOf(0==d.length?b.commonAncestorContainer:d[0])}for(attributeName in a)if(this.oStyleMap[attributeName].converter&&(a[attributeName]=this.oStyleMap[attributeName].converter(a[attributeName],a)),
this.oStyle[attributeName]!=a[attributeName]){if("object"!=typeof document.body.currentStyle&&"function"==typeof getComputedStyle&&"fontSize"==attributeName&&this.oStyle.fontFamily!=a.fontFamily)continue;
this.oApp.exec("MSG_STYLE_CHANGED",[attributeName,a[attributeName]])}this.oStyle=a},_getStyleOf:function(a){
var b=this._getBlankStyle();if(!a)return b;3==a.nodeType?a=a.parentNode:9==a.nodeType&&(a=a.body);var c,d=jindo.$Element(a);
for(var e in this.oStyle)if(c=this.oStyleMap[e],c.type&&"Value"==c.type)try{if(c.css){var f=d.css(c.css);
"fontFamily"==e&&(f=f.split(/,/)[0]),b[e]=f}else c.command&&(b[e]=this.oDocument.queryCommandState(c.command));
}catch(g){}else if(c.command)try{b[e]=this.oDocument.queryCommandState(c.command)?"@^":"@-"}catch(g){}
for(;a&&"LI"!=a.tagName;)a=a.parentNode;switch(a&&(""!=a.style.textAlign&&(b.textAlign=a.style.textAlign,
b.justifyleft="@-",b.justifycenter="@-",b.justifyright="@-",b.justifyfull="@-"),a=a.parentNode,"OL"==a.tagName?(b.orderedlist="@^",
b.OrderedlistA="@^",b.UnorderedlistA="@-"):(b.orderedlist="@-",b.OrderedlistA="@-",b.UnorderedlistA="@^")),
b.textAlign){case"left":b.justifyleft="@^";break;case"center":b.justifycenter="@^";break;case"right":
b.justifyright="@^";break;case"justify":b.justifyfull="@^"}return"@-"==b.justifyleft&&"@-"==b.justifycenter&&"@-"==b.justifyright&&"@-"==b.justifyfull&&(b.justifyleft="@^"),
b}}),nhn.husky.SE_WYSIWYGStyler=jindo.$Class({name:"SE_WYSIWYGStyler",_sCursorHolder:"﻿",$init:function(){
var a=jindo.$Agent().navigator();a.ie&&a.version>8&&(this._sCursorHolder="⁠",this.$ON_REGISTER_CONVERTERS=function(){
var a=/\u2060/g;this.oApp.exec("ADD_CONVERTER",["WYSIWYG_TO_IR",jindo.$Fn(function(b){return b.replace(a,"﻿");
},this).bind()])})},$PRECONDITION:function(){return"WYSIWYG"==this.oApp.getEditingMode()},$ON_SET_WYSIWYG_STYLE:function(a){
var b=this.oApp.getSelection(),c={};this.oApp.exec("IS_SELECTED_TD_BLOCK",["bIsSelectedTd",c]);var d=c.bIsSelectedTd;
if(b.collapsed&&!d){this.oApp.exec("RECORD_UNDO_ACTION",["FONT STYLE",{bMustBlockElement:!0}]);var e,f=!1,g=b.commonAncestorContainer;
3==g.nodeType&&(g=g.parentNode),g&&b._rxCursorHolder.test(g.innerHTML)&&(e=b._findParentSingleSpan(g)),
e?""==e.innerHTML&&(e.innerHTML=this._sCursorHolder):(e=this.oApp.getWYSIWYGDocument().createElement("SPAN"),
e.innerHTML=this._sCursorHolder,f=!0);var h;for(var i in a)h=a[i],"string"==typeof h&&(e.style[i]=h);
if(f)if("BODY"==b.startContainer.tagName&&0===b.startOffset){var j=b._getVeryFirstRealChild(this.oApp.getWYSIWYGDocument().body),k=!0,l=j.cloneNode(!1);
try{l.innerHTML="test","test"!=l.innerHTML&&(k=!1)}catch(m){k=!1}k&&1==l.nodeType&&"BR"==l.tagName?(b.selectNode(j),
b.collapseToStart(),b.insertNode(e)):k&&"IFRAME"!=j.tagName&&j.appendChild&&"string"==typeof j.innerHTML?j.appendChild(e):(b.selectNode(j),
b.collapseToStart(),b.insertNode(e))}else b.collapseToStart(),b.insertNode(e);else b=this.oApp.getEmptySelection();
return a.color&&b._checkTextDecoration(e),b.selectNodeContents(f?e:g),b.collapseToEnd(),b._window.focus(),
b._window.document.body.focus(),void b.select()}if(this.oApp.exec("RECORD_UNDO_BEFORE_ACTION",["FONT STYLE",{
bMustBlockContainer:!0}]),d){var n;this.oApp.exec("GET_SELECTED_TD_BLOCK",["aTdCells",c]),n=c.aTdCells;
for(var o=0;o<n.length;o++)b.selectNodeContents(n[o]),b.styleRange(a),b.select()}else{for(var p,q=!!a.color,r=a.fontSize||a.fontFamily,s=0,n=b.getNodes();p=n[s];s++)nhn.husky.SE2M_Utils.removeInvalidNodeInTable(p);
if(b.styleRange(a,null,null,r,q),jindo.$Agent().navigator().firefox)for(var t=b.aStyleParents,s=0,u=t.length;u>s;s++){
var v=t[s];v.nextSibling&&"BR"==v.nextSibling.tagName&&!v.nextSibling.nextSibling&&v.parentNode.removeChild(v.nextSibling);
}b._window.focus(),b.select()}this.oApp.exec("RECORD_UNDO_AFTER_ACTION",["FONT STYLE",{bMustBlockContainer:!0
}])}}),nhn.husky.SE2M_Accessibility=jindo.$Class({name:"SE2M_Accessibility",$init:function(a,b,c){this._assignHTMLElements(a),
b&&(this.sLang=b),c&&(this.sType=c)},_assignHTMLElements:function(a){this.elHelpPopupLayer=jindo.$$.getSingle("DIV.se2_accessibility",a),
this.welHelpPopupLayer=jindo.$Element(this.elHelpPopupLayer),this.oCloseButton=jindo.$$.getSingle("BUTTON.se2_close",this.elHelpPopupLayer),
this.oCloseButton2=jindo.$$.getSingle("BUTTON.se2_close2",this.elHelpPopupLayer),this.nDefaultTop=150,
this.elAppContainer=a},$ON_MSG_APP_READY:function(){this.htAccessOption=nhn.husky.SE2M_Configuration.SE2M_Accessibility||{},
this.oApp.exec("REGISTER_HOTKEY",["alt+F10","FOCUS_TOOLBAR_AREA",[]]),this.oApp.exec("REGISTER_HOTKEY",["alt+COMMA","FOCUS_BEFORE_ELEMENT",[]]),
this.oApp.exec("REGISTER_HOTKEY",["alt+PERIOD","FOCUS_NEXT_ELEMENT",[]]),("basic"!=this.sType&&"light"!=this.sType||"ko_KR"==this.sLang)&&(this.oApp.exec("REGISTER_HOTKEY",["alt+0","OPEN_HELP_POPUP",[]]),
this.oApp.exec("REGISTER_HOTKEY",["esc","CLOSE_HELP_POPUP",[],document]),this.htAccessOption.sTitleElementId&&this.oApp.registerBrowserEvent(document.getElementById(this.htAccessOption.sTitleElementId),"keydown","MOVE_TO_EDITAREA",[]));
},$ON_MOVE_TO_EDITAREA:function(a){var b=9;if(a.key().keyCode==b){if(a.key().shift)return;this.oApp.delayedExec("FOCUS",[],0);
}},$LOCAL_BEFORE_FIRST:function(){jindo.$Fn(jindo.$Fn(this.oApp.exec,this.oApp).bind("CLOSE_HELP_POPUP",[this.oCloseButton]),this).attach(this.oCloseButton,"click"),
jindo.$Fn(jindo.$Fn(this.oApp.exec,this.oApp).bind("CLOSE_HELP_POPUP",[this.oCloseButton2]),this).attach(this.oCloseButton2,"click");
var a=this.oApp.getWYSIWYGWindow().frameElement;this.htOffsetPos=jindo.$Element(a).offset(),this.nEditorWidth=a.offsetWidth,
this.htInitialPos=this.welHelpPopupLayer.offset();this.oApp.oUtils.getScrollXY();this.nLayerWidth=590,
this.nLayerHeight=480,this.htTopLeftCorner={x:parseInt(this.htOffsetPos.left,10),y:parseInt(this.htOffsetPos.top,10)
}},$ON_FOCUS_NEXT_ELEMENT:function(){this._currentNextFocusElement=null,this._currentNextFocusElement=this.htAccessOption.sNextElementId?document.getElementById(this.htAccessOption.sNextElementId):this._findNextFocusElement(this.elAppContainer),
this._currentNextFocusElement?(window.focus(),this._currentNextFocusElement.focus()):parent&&parent.nhn&&parent.nhn.husky&&parent.nhn.husky.EZCreator&&parent.nhn.husky.EZCreator.elIFrame&&(parent.focus(),
(this._currentNextFocusElement=this._findNextFocusElement(parent.nhn.husky.EZCreator.elIFrame))&&this._currentNextFocusElement.focus());
},_findNextFocusElement:function(a){for(var b=null,c=a.nextSibling;c;){if(1!==c.nodeType){if(c=this._switchToSiblingOrNothing(c))continue;
break}if(this._recursivePreorderTraversalFilter(c,this._isFocusTag),this._nextFocusElement){b=this._nextFocusElement,
this._bStopFindingNextElement=!1,this._nextFocusElement=null;break}if(c=this._switchToSiblingOrNothing(c),
!c)break}return b},_switchToSiblingOrNothing:function(a,b){var c=a;if(b)if(c.previousSibling)c=c.previousSibling;else{
for(;"BODY"!=c.nodeName.toUpperCase()&&!c.previousSibling;)c=c.parentNode;c="BODY"==c.nodeName.toUpperCase()?null:c.previousSibling;
}else if(c.nextSibling)c=c.nextSibling;else{for(;"BODY"!=c.nodeName.toUpperCase()&&!c.nextSibling;)c=c.parentNode;
c="BODY"==c.nodeName.toUpperCase()?null:c.nextSibling}return c},_recursivePreorderTraversalFilter:function(a,b,c){
var d=this,e=b.apply(a);if(e)return d._bStopFindingNextElement=!0,void(c?d._previousFocusElement=a:d._nextFocusElement=a);
if(c)for(var f=a.childNodes.length,g=f-1;g>=0&&(d._recursivePreorderTraversalFilter(a.childNodes[g],b,!0),
!this._bStopFindingNextElement);g--);else for(var g=0,f=a.childNodes.length;f>g&&(d._recursivePreorderTraversalFilter(a.childNodes[g],b),
!this._bStopFindingNextElement);g++);},_isFocusTag:function(){for(var a=this,b=["A","BUTTON","INPUT","TEXTAREA"],c=!1,d=0,e=b.length;e>d;d++)if(1===a.nodeType&&a.nodeName&&a.nodeName.toUpperCase()==b[d]&&!a.disabled&&jindo.$Element(a).visible()){
c=!0;break}return c},$ON_FOCUS_BEFORE_ELEMENT:function(){this._currentPreviousFocusElement=null,this._currentPreviousFocusElement=this.htAccessOption.sBeforeElementId?document.getElementById(this.htAccessOption.sBeforeElementId):this._findPreviousFocusElement(this.elAppContainer),
this._currentPreviousFocusElement?(window.focus(),this._currentPreviousFocusElement.focus()):parent&&parent.nhn&&parent.nhn.husky&&parent.nhn.husky.EZCreator&&parent.nhn.husky.EZCreator.elIFrame&&(parent.focus(),
(this._currentPreviousFocusElement=this._findPreviousFocusElement(parent.nhn.husky.EZCreator.elIFrame))&&this._currentPreviousFocusElement.focus());
},_findPreviousFocusElement:function(a){for(var b=null,c=a.previousSibling;c;){if(1!==c.nodeType){if(c=this._switchToSiblingOrNothing(c,!0))continue;
break}if(this._recursivePreorderTraversalFilter(c,this._isFocusTag,!0),this._previousFocusElement){b=this._previousFocusElement,
this._bStopFindingNextElement=!1,this._previousFocusElement=null;break}if(c=this._switchToSiblingOrNothing(c,!0),
!c)break}return b},$ON_FOCUS_TOOLBAR_AREA:function(){this.oButton=jindo.$$.getSingle("BUTTON.se2_font_family",this.elAppContainer),
this.oButton&&!this.oButton.disabled&&(window.focus(),this.oButton.focus())},$ON_OPEN_HELP_POPUP:function(){
this.oApp.exec("DISABLE_ALL_UI",[{aExceptions:["se2_accessibility"]}]),this.oApp.exec("SHOW_EDITING_AREA_COVER"),
this.oApp.exec("SELECT_UI",["se2_accessibility"]),this.nCalcX=this.htTopLeftCorner.x+this.oApp.getEditingAreaWidth()-this.nLayerWidth,
this.nCalcY=this.htTopLeftCorner.y-30,this.oApp.exec("SHOW_DIALOG_LAYER",[this.elHelpPopupLayer,{elHandle:this.elTitle,
nMinX:this.htTopLeftCorner.x+0,nMinY:this.nDefaultTop+77,nMaxX:this.nCalcX,nMaxY:this.nCalcY}]),this.welHelpPopupLayer.offset(this.nCalcY,this.nCalcX/2),
jindo.$Agent().navigator().ie&&window.focus();var a=this;setTimeout(function(){try{a.oCloseButton2.focus();
}catch(b){}},200)},$ON_CLOSE_HELP_POPUP:function(){this.oApp.exec("ENABLE_ALL_UI"),this.oApp.exec("DESELECT_UI",["helpPopup"]),
this.oApp.exec("HIDE_ALL_DIALOG_LAYER",[]),this.oApp.exec("HIDE_EDITING_AREA_COVER"),this.oApp.exec("FOCUS");
}}),nhn.husky.SE2M_BGColor=jindo.$Class({name:"SE2M_BGColor",rxColorPattern:/^#?[0-9a-fA-F]{6}$|^rgb\(\d+, ?\d+, ?\d+\)$/i,
$init:function(a){this._assignHTMLElements(a)},_assignHTMLElements:function(a){this.elLastUsed=jindo.$$.getSingle("SPAN.husky_se2m_BGColor_lastUsed",a),
this.elDropdownLayer=jindo.$$.getSingle("DIV.husky_se2m_BGColor_layer",a),this.elBGColorList=jindo.$$.getSingle("UL.husky_se2m_bgcolor_list",a),
this.elPaletteHolder=jindo.$$.getSingle("DIV.husky_se2m_BGColor_paletteHolder",this.elDropdownLayer),
this._setLastUsedBGColor("#777777")},$BEFORE_MSG_APP_READY:function(){this.oApp.exec("ADD_APP_PROPERTY",["getLastUsedBackgroundColor",jindo.$Fn(this.getLastUsedBGColor,this).bind()]);
},$ON_MSG_APP_READY:function(){this.oApp.exec("REGISTER_UI_EVENT",["BGColorA","click","APPLY_LAST_USED_BGCOLOR"]),
this.oApp.exec("REGISTER_UI_EVENT",["BGColorB","click","TOGGLE_BGCOLOR_LAYER"]),this.oApp.registerBrowserEvent(this.elBGColorList,"click","EVENT_APPLY_BGCOLOR",[]),
this.oApp.registerLazyMessage(["APPLY_LAST_USED_BGCOLOR","TOGGLE_BGCOLOR_LAYER"],["hp_SE2M_BGColor$Lazy.js"]);
},_setLastUsedBGColor:function(a){this.sLastUsedColor=a,this.elLastUsed.style.backgroundColor=this.sLastUsedColor;
},getLastUsedBGColor:function(){return this.sLastUsedColor?this.sLastUsedColor:"#777777"}}),nhn.husky.SE2M_ColorPalette=jindo.$Class({
name:"SE2M_ColorPalette",elAppContainer:null,bUseRecentColor:!1,nLimitRecentColor:17,rxRGBColorPattern:/rgb\((\d+), ?(\d+), ?(\d+)\)/i,
rxColorPattern:/^#?[0-9a-fA-F]{6}$|^rgb\(\d+, ?\d+, ?\d+\)$/i,aRecentColor:[],URL_COLOR_LIST:"",URL_COLOR_ADD:"",
URL_COLOR_UPDATE:"",sRecentColorTemp:'<li><button type="button" title="{RGB_CODE}" style="background:{RGB_CODE}"><span><span>{RGB_CODE}</span></span></button></li>',
$init:function(a){this.elAppContainer=a},$ON_MSG_APP_READY:function(){},_assignHTMLElements:function(a){
var b=nhn.husky.SE2M_Configuration.SE2M_ColorPalette;b&&(this.bUseRecentColor=b.bUseRecentColor||!1,
this.URL_COLOR_ADD=b.addColorURL||"http://api.se2.naver.com/1/colortable/TextAdd.nhn",this.URL_COLOR_UPDATE=b.updateColorURL||"http://api.se2.naver.com/1/colortable/TextUpdate.nhn",
this.URL_COLOR_LIST=b.colorListURL||"http://api.se2.naver.com/1/colortable/TextList.nhn"),this.elColorPaletteLayer=jindo.$$.getSingle("DIV.husky_se2m_color_palette",a),
this.elColorPaletteLayerColorPicker=jindo.$$.getSingle("DIV.husky_se2m_color_palette_colorpicker",this.elColorPaletteLayer),
this.elRecentColorForm=jindo.$$.getSingle("form",this.elColorPaletteLayerColorPicker),this.elBackgroundColor=jindo.$$.getSingle("ul.husky_se2m_bgcolor_list",a),
this.elInputColorCode=jindo.$$.getSingle("INPUT.husky_se2m_cp_colorcode",this.elColorPaletteLayerColorPicker),
this.elPreview=jindo.$$.getSingle("SPAN.husky_se2m_cp_preview",this.elColorPaletteLayerColorPicker),
this.elCP_ColPanel=jindo.$$.getSingle("DIV.husky_se2m_cp_colpanel",this.elColorPaletteLayerColorPicker),
this.elCP_HuePanel=jindo.$$.getSingle("DIV.husky_se2m_cp_huepanel",this.elColorPaletteLayerColorPicker),
this.elCP_ColPanel.style.position="relative",this.elCP_HuePanel.style.position="relative",this.elColorPaletteLayerColorPicker.style.display="none",
this.elMoreBtn=jindo.$$.getSingle("BUTTON.husky_se2m_color_palette_more_btn",this.elColorPaletteLayer),
this.welMoreBtn=jindo.$Element(this.elMoreBtn),this.elOkBtn=jindo.$$.getSingle("BUTTON.husky_se2m_color_palette_ok_btn",this.elColorPaletteLayer),
this.bUseRecentColor&&(this.elColorPaletteLayerRecent=jindo.$$.getSingle("DIV.husky_se2m_color_palette_recent",this.elColorPaletteLayer),
this.elRecentColor=jindo.$$.getSingle("ul.se2_pick_color",this.elColorPaletteLayerRecent),this.elDummyNode=jindo.$$.getSingle("ul.se2_pick_color > li",this.elColorPaletteLayerRecent)||null,
this.elColorPaletteLayerRecent.style.display="none")},$LOCAL_BEFORE_FIRST:function(){this._assignHTMLElements(this.elAppContainer),
this.elDummyNode&&jindo.$Element(jindo.$$.getSingle("ul.se2_pick_color > li",this.elColorPaletteLayerRecent)).leave(),
this.bUseRecentColor&&this._ajaxRecentColor(this._ajaxRecentColorCallback),this.oApp.registerBrowserEvent(this.elColorPaletteLayer,"click","EVENT_CLICK_COLOR_PALETTE"),
this.oApp.bMobile||(this.oApp.registerBrowserEvent(this.elBackgroundColor,"mouseover","EVENT_MOUSEOVER_COLOR_PALETTE"),
this.oApp.registerBrowserEvent(this.elColorPaletteLayer,"mouseover","EVENT_MOUSEOVER_COLOR_PALETTE"),
this.oApp.registerBrowserEvent(this.elBackgroundColor,"mouseout","EVENT_MOUSEOUT_COLOR_PALETTE"),this.oApp.registerBrowserEvent(this.elColorPaletteLayer,"mouseout","EVENT_MOUSEOUT_COLOR_PALETTE"));
},$ON_EVENT_MOUSEOVER_COLOR_PALETTE:function(a){for(var b=a.element;b&&b.tagName&&"li"!=b.tagName.toLowerCase();)b=b.parentNode;
b&&b.nodeType&&9!=b.nodeType&&(""!=b.className&&b.className&&"undefined"!=typeof b.className||jindo.$Element(b).addClass("hover"));
},$ON_EVENT_MOUSEOUT_COLOR_PALETTE:function(a){for(var b=a.element;b&&b.tagName&&"li"!=b.tagName.toLowerCase();)b=b.parentNode;
b&&"hover"==b.className&&jindo.$Element(b).removeClass("hover")},$ON_EVENT_CLICK_COLOR_PALETTE:function(a){
for(var b=a.element;"SPAN"==b.tagName;)b=b.parentNode;if(b.tagName&&"BUTTON"==b.tagName){if(b==this.elMoreBtn)return void this.oApp.exec("TOGGLE_COLOR_PICKER");
this.oApp.exec("APPLY_COLOR",[b])}},$ON_APPLY_COLOR:function(a){var b=this.elInputColorCode.value,c=null;
return-1==b.indexOf("#")&&(b="#"+b,this.elInputColorCode.value=b),a==this.elOkBtn?this._verifyColorCode(b)?void this.oApp.exec("COLOR_PALETTE_APPLY_COLOR",[b,!0]):(this.elInputColorCode.value="",
alert(this.oApp.$MSG("SE_Color.invalidColorCode")),void this.elInputColorCode.focus()):(c=jindo.$Element(a.parentNode.parentNode.parentNode),
b=a.title,void(c.hasClass("husky_se2m_color_palette")?this.oApp.exec("COLOR_PALETTE_APPLY_COLOR",[b,nhn.husky.SE2M_Configuration.SE2M_ColorPalette.bAddRecentColorFromDefault]):c.hasClass("husky_se2m_color_palette_recent")&&this.oApp.exec("COLOR_PALETTE_APPLY_COLOR",[b,!0])));
},$ON_RESET_COLOR_PALETTE:function(){this._initColor()},$ON_TOGGLE_COLOR_PICKER:function(){this.oApp.exec("none"==this.elColorPaletteLayerColorPicker.style.display?"SHOW_COLOR_PICKER":"HIDE_COLOR_PICKER");
},$ON_SHOW_COLOR_PICKER:function(){this.elColorPaletteLayerColorPicker.style.display="",this.cpp=new nhn.ColorPicker(this.elCP_ColPanel,{
huePanel:this.elCP_HuePanel});var a=jindo.$Fn(function(a){this.elPreview.style.backgroundColor=a.hexColor,
this.elInputColorCode.value=a.hexColor},this).bind();this.cpp.attach("colorchange",a),this.$ON_SHOW_COLOR_PICKER=this._showColorPickerMain,
this.$ON_SHOW_COLOR_PICKER()},$ON_HIDE_COLOR_PICKER:function(){this.elColorPaletteLayerColorPicker.style.display="none",
this.welMoreBtn.addClass("se2_view_more"),this.welMoreBtn.removeClass("se2_view_more2")},$ON_SHOW_COLOR_PALETTE:function(a,b){
this.sCallbackCmd=a,this.oLayerContainer=b,this.oLayerContainer.insertBefore(this.elColorPaletteLayer,null),
this.elColorPaletteLayer.style.display="block",this.oApp.delayedExec("POSITION_TOOLBAR_LAYER",[this.elColorPaletteLayer.parentNode.parentNode],0);
},$ON_HIDE_COLOR_PALETTE:function(){this.elColorPaletteLayer.style.display="none"},$ON_COLOR_PALETTE_APPLY_COLOR:function(a,b){
b=b?b:!1,a=this._getHexColorCode(a),this.bUseRecentColor&&b&&this.oApp.exec("ADD_RECENT_COLOR",[a]),
this.oApp.exec(this.sCallbackCmd,[a])},$ON_EVENT_MOUSEUP_COLOR_PALETTE:function(a){var b=a.element;b.style.backgroundColor&&this.oApp.exec("COLOR_PALETTE_APPLY_COLOR",[b.style.backgroundColor,!1]);
},$ON_ADD_RECENT_COLOR:function(a){var b=0===this.aRecentColor.length;this._addRecentColor(a),b?this._ajaxAddColor():this._ajaxUpdateColor(),
this._redrawRecentColorElement()},_verifyColorCode:function(a){return this.rxColorPattern.test(a)},_getHexColorCode:function(a){
if(this.rxRGBColorPattern.test(a)){var b=function(a){var b=parseInt(a,10).toString(16);return b.length<2&&(b="0"+b),
b.toUpperCase()},c=b(RegExp.$1),d=b(RegExp.$2),e=b(RegExp.$3);a="#"+c+d+e}return a},_addRecentColor:function(a){
var b=jindo.$A(this.aRecentColor);b=b.refuse(a),b.unshift(a),b.length()>this.nLimitRecentColor&&b.length(this.nLimitRecentColor),
this.aRecentColor=b.$value()},_redrawRecentColorElement:function(){var a,b=[],c=this.aRecentColor.length;
if(0!==c){for(a=0;c>a;a++)b.push(this.sRecentColorTemp.replace(/\{RGB_CODE\}/gi,this.aRecentColor[a]));
this.elRecentColor.innerHTML=b.join(""),this.elColorPaletteLayerRecent.style.display="block"}},_ajaxAddColor:function(){
jindo.$Ajax(this.URL_COLOR_ADD,{type:"jsonp",onload:function(){}}).request({text_key:"colortable",text_data:this.aRecentColor.join(",")
})},_ajaxUpdateColor:function(){jindo.$Ajax(this.URL_COLOR_UPDATE,{type:"jsonp",onload:function(){}}).request({
text_key:"colortable",text_data:this.aRecentColor.join(",")})},_showColorPickerMain:function(){this._initColor(),
this.elColorPaletteLayerColorPicker.style.display="",this.welMoreBtn.removeClass("se2_view_more"),this.welMoreBtn.addClass("se2_view_more2");
},_initColor:function(){this.cpp&&this.cpp.rgb({r:0,g:0,b:0}),this.elPreview.style.backgroundColor="#000000",
this.elInputColorCode.value="#000000",this.oApp.exec("HIDE_COLOR_PICKER")},_ajaxRecentColor:function(a){
jindo.$Ajax(this.URL_COLOR_LIST,{type:"jsonp",onload:jindo.$Fn(a,this).bind()}).request()},_ajaxRecentColorCallback:function(a){
var b,c,d,e=a.json().result;if(e&&!e.error){for(b=jindo.$A(e).filter(this._verifyColorCode,this),b.length()>this.nLimitRecentColor&&b.length(this.nLimitRecentColor),
e=b.reverse().$value(),c=0,d=e.length;d>c;c++)this._addRecentColor(this._getHexColorCode(e[c]));this._redrawRecentColorElement();
}}}).extend(jindo.Component),nhn.husky.SE2M_ExecCommand=jindo.$Class({name:"SE2M_ExecCommand",oEditingArea:null,
oUndoOption:null,_rxCmdInline:/^(?:bold|underline|italic|strikethrough|superscript|subscript)$/i,$init:function(a){
this.oEditingArea=a,this.nIndentSpacing=20,this.rxClickCr=new RegExp("^bold|underline|italic|strikethrough|justifyleft|justifycenter|justifyright|justifyfull|insertorderedlist|insertunorderedlist|outdent|indent$","i");
},$BEFORE_MSG_APP_READY:function(){this.oEditingArea&&"IFRAME"==this.oEditingArea.tagName&&(this.oEditingArea=this.oEditingArea.contentWindow.document);
},$ON_MSG_APP_READY:function(){jindo.$Agent().os().mac?(this.oApp.exec("REGISTER_HOTKEY",["meta+b","EXECCOMMAND",["bold",!1,!1]]),
this.oApp.exec("REGISTER_HOTKEY",["meta+u","EXECCOMMAND",["underline",!1,!1]]),this.oApp.exec("REGISTER_HOTKEY",["meta+i","EXECCOMMAND",["italic",!1,!1]]),
this.oApp.exec("REGISTER_HOTKEY",["meta+d","EXECCOMMAND",["strikethrough",!1,!1]])):(this.oApp.exec("REGISTER_HOTKEY",["ctrl+b","EXECCOMMAND",["bold",!1,!1]]),
this.oApp.exec("REGISTER_HOTKEY",["ctrl+u","EXECCOMMAND",["underline",!1,!1]]),this.oApp.exec("REGISTER_HOTKEY",["ctrl+i","EXECCOMMAND",["italic",!1,!1]]),
this.oApp.exec("REGISTER_HOTKEY",["ctrl+d","EXECCOMMAND",["strikethrough",!1,!1]])),this.oApp.exec("REGISTER_HOTKEY",["tab","INDENT"]),
this.oApp.exec("REGISTER_HOTKEY",["shift+tab","OUTDENT"]),this.oApp.exec("REGISTER_UI_EVENT",["bold","click","EXECCOMMAND",["bold",!1,!1]]),
this.oApp.exec("REGISTER_UI_EVENT",["underline","click","EXECCOMMAND",["underline",!1,!1]]),this.oApp.exec("REGISTER_UI_EVENT",["italic","click","EXECCOMMAND",["italic",!1,!1]]),
this.oApp.exec("REGISTER_UI_EVENT",["lineThrough","click","EXECCOMMAND",["strikethrough",!1,!1]]),this.oApp.exec("REGISTER_UI_EVENT",["superscript","click","EXECCOMMAND",["superscript",!1,!1]]),
this.oApp.exec("REGISTER_UI_EVENT",["subscript","click","EXECCOMMAND",["subscript",!1,!1]]),this.oApp.exec("REGISTER_UI_EVENT",["justifyleft","click","EXECCOMMAND",["justifyleft",!1,!1]]),
this.oApp.exec("REGISTER_UI_EVENT",["justifycenter","click","EXECCOMMAND",["justifycenter",!1,!1]]),
this.oApp.exec("REGISTER_UI_EVENT",["justifyright","click","EXECCOMMAND",["justifyright",!1,!1]]),this.oApp.exec("REGISTER_UI_EVENT",["justifyfull","click","EXECCOMMAND",["justifyfull",!1,!1]]),
this.oApp.exec("REGISTER_UI_EVENT",["outdent","click","EXECCOMMAND",["outdent",!1,!1]]),this.oApp.exec("REGISTER_UI_EVENT",["indent","click","EXECCOMMAND",["indent",!1,!1]]),
this.oNavigator=jindo.$Agent().navigator(),this.oNavigator.safari||this.oNavigator.chrome||(this._getDocumentBR=function(){},
this._fixDocumentBR=function(){}),this.oNavigator.ie||(this._fixCorruptedBlockQuote=function(){},this.oNavigator.safari||this.oNavigator.chrome||(this._insertBlankLine=function(){})),
this.oNavigator.firefox||(this._extendBlock=function(){})},$ON_INDENT:function(){this.oApp.delayedExec("EXECCOMMAND",["indent",!1,!1],0);
},$ON_OUTDENT:function(){this.oApp.delayedExec("EXECCOMMAND",["outdent",!1,!1],0)},$BEFORE_EXECCOMMAND:function(a,b,c,d){
var e;this.oApp.exec("FOCUS"),this._bOnlyCursorChanged=!1,e=this.oApp.getSelection();for(var f,g=0,h=e.getNodes();f=h[g];g++)nhn.husky.SE2M_Utils.removeInvalidNodeInTable(f);
/^insertorderedlist|insertunorderedlist$/i.test(a)&&(this._getDocumentBR(),this._checkBlockQuoteCondition_IE()),
/^justify*/i.test(a)&&this._removeElementAlign("span"),this._rxCmdInline.test(a)&&(this.oUndoOption={
bMustBlockElement:!0},nhn.CurrentSelection.isCollapsed()&&(this._bOnlyCursorChanged=!0)),("indent"==a||"outdent"==a)&&(d||(d={}),
d.bDontAddUndoHistory=!0),d&&d.bDontAddUndoHistory||this._bOnlyCursorChanged||(/^justify*/i.test(a)?this.oUndoOption={
sSaveTarget:"BODY"}:("insertorderedlist"===a||"insertunorderedlist"===a)&&(this.oUndoOption={bMustBlockContainer:!0
}),this.oApp.exec("RECORD_UNDO_BEFORE_ACTION",[a,this.oUndoOption])),this.oNavigator.ie&&this.oApp.getWYSIWYGDocument().selection&&"Control"===this.oApp.getWYSIWYGDocument().selection.type&&(e=this.oApp.getSelection(),
e.select()),("insertorderedlist"==a||"insertunorderedlist"==a)&&this._insertBlankLine()},_checkBlockQuoteCondition_IE:function(){
var a,b=jindo.$Agent().navigator(),c=!1;if(b.ie&&b.nativeVersion>=9&&b.nativeVersion<=11&&b.version>=9&&b.version<=11||this.oApp.oAgent.os().winxp&&b.ie&&b.nativeVersion<=8||b.edge){
var d=this.oApp.getSelection(),e=d.commonAncestorContainer,f=nhn.husky.SE2M_Utils.findAncestorByTagNameWithCount("BLOCKQUOTE",e);
if(a=f.elNode){var g=nhn.husky.SE2M_Utils.findClosestAncestorAmongTagNamesWithCount(["td","th"],e);g.elNode?g.nRecursiveCount>f.nRecursiveCount&&(c=!0):c=!0;
}}c&&this._insertDummyParagraph_IE(a)},_insertDummyParagraph_IE:function(a){this._elDummyParagraph=document.createElement("P"),
a.appendChild(this._elDummyParagraph)},_removeDummyParagraph_IE:function(){this._elDummyParagraph&&this._elDummyParagraph.parentNode&&this._elDummyParagraph.parentNode.removeChild(this._elDummyParagraph);
},$ON_EXECCOMMAND:function(a,b,c){var d=!1,e={},f=this.oApp.getSelection();if(b=""==b||b?b:!1,c=""==c||c?c:!1,
this.oApp.exec("IS_SELECTED_TD_BLOCK",["bIsSelectedTd",e]),d=e.bIsSelectedTd)"indent"==a?this.oApp.exec("SET_LINE_BLOCK_STYLE",[null,jindo.$Fn(this._indentMargin,this).bind()]):"outdent"==a?this.oApp.exec("SET_LINE_BLOCK_STYLE",[null,jindo.$Fn(this._outdentMargin,this).bind()]):this._setBlockExecCommand(a,b,c);else switch(a){
case"indent":case"outdent":this.oApp.exec("RECORD_UNDO_BEFORE_ACTION",[a]);var g=f.placeStringBookmark();
"indent"===a?this.oApp.exec("SET_LINE_STYLE",[null,jindo.$Fn(this._indentMargin,this).bind(),{bDoNotSelect:!0,
bDontAddUndoHistory:!0}]):this.oApp.exec("SET_LINE_STYLE",[null,jindo.$Fn(this._outdentMargin,this).bind(),{
bDoNotSelect:!0,bDontAddUndoHistory:!0}]),f.moveToStringBookmark(g),f.select(),f.removeStringBookmark(g),
setTimeout(jindo.$Fn(function(a){this.oApp.exec("RECORD_UNDO_AFTER_ACTION",[a])},this).bind(a),25);break;
case"justifyleft":case"justifycenter":case"justifyright":case"justifyfull":var h=this._extendBlock();
this.oEditingArea.execCommand(a,b,c),h&&h.select(),this.oNavigator.ie&&this._removeElementAlign("table");
break;default:if(f.collapsed&&this._rxCmdInline.test(a)){var i=f.placeStringBookmark(),j=f.getStringBookmark(i),k=j.previousSibling;
k&&"​"===k.nodeValue||(k=this.oApp.getWYSIWYGDocument().createTextNode("​"),f.insertNode(k)),f.removeStringBookmark(i),
f.selectNodeContents(k),f.select(),this.oEditingArea.execCommand(a,b,c),f.collapseToEnd(),f.select();
var l=this._findSingleNode(k);l&&f._hasCursorHolderOnly(l.nextSibling)&&l.parentNode.removeChild(l.nextSibling);
}else this.oEditingArea.execCommand(a,b,c)}this._countClickCr(a)},_findSingleNode:function(a){return a?1===a.parentNode.childNodes.length?this._findSingleNode(a.parentNode):a:null;
},$AFTER_EXECCOMMAND:function(a,b,c,d){this.elP1&&this.elP1.parentNode&&this.elP1.parentNode.removeChild(this.elP1),
this.elP2&&this.elP2.parentNode&&this.elP2.parentNode.removeChild(this.elP2),/^insertorderedlist|insertunorderedlist$/i.test(a)&&(this._removeDummyParagraph_IE(),
this._fixCorruptedBlockQuote("insertorderedlist"===a?"OL":"UL"),this.oNavigator.bGalaxyBrowser&&this._removeBlockQuote()),
/^justify*/i.test(a)&&this._fixAlign("justifyfull"===a?"justify":a.substring(7)),("indent"==a||"outdent"==a)&&(d||(d={}),
d.bDontAddUndoHistory=!0),d&&d.bDontAddUndoHistory||this._bOnlyCursorChanged||this.oApp.exec("RECORD_UNDO_AFTER_ACTION",[a,this.oUndoOption]),
this.oApp.exec("CHECK_STYLE_CHANGE",[])},_removeElementAlign:function(a){for(var b=this.oApp.getSelection(),c=b.getNodes(),d=null,e=new RegExp("^"+a+"$","i"),f=0,g=c.length;g>f;f++)d=c[f],
d.tagName&&e.test(d.tagName)&&(d.style.textAlign="",d.removeAttribute("align"))},_getAlignNode:function(a){
if(a.tagName&&("P"===a.tagName||"DIV"===a.tagName))return a;for(a=a.parentNode;a&&a.tagName;){if("P"===a.tagName||"DIV"===a.tagName)return a;
a=a.parentNode}},_fixAlign:function(a){{var b=this.oApp.getSelection(),c=[],d=null,e=null;this.oNavigator.ie?function(a){
return a.tagName&&"TABLE"===a.tagName?(a.removeAttribute("align"),!0):!1}:function(){}}b.collapsed?c[0]=b.startContainer:c=b.getNodes();
for(var f=0,g=c.length;g>f;f++)d=c[f],3===d.nodeType&&(d=d.parentNode),(!e||d!==e&&!jindo.$Element(d).isChildOf(e))&&(e=this._getAlignNode(d),
e&&e.align!==e.style.textAlign&&(e.style.textAlign=a,e.setAttribute("align",a)))},_getDocumentBR:function(){
var a,b;for(this.aBRs=this.oApp.getWYSIWYGDocument().getElementsByTagName("BR"),this.aBeforeBRs=[],a=0,
b=this.aBRs.length;b>a;a++)this.aBeforeBRs[a]=this.aBRs[a]},_fixDocumentBR:function(){if(this.aBeforeBRs.length!==this.aBRs.length){
var a,b=jindo.$A(this.aBeforeBRs),c=this.aBRs.length;for(a=c-1;a>=0;a--)b.indexOf(this.aBRs[a])<0&&this.aBRs[a].parentNode.removeChild(this.aBRs[a]);
}},_setBlockExecCommand:function(a,b,c){var d,e,f={};this.oSelection=this.oApp.getSelection(),this.oApp.exec("GET_SELECTED_TD_BLOCK",["aTdCells",f]),
d=f.aTdCells;for(var g=0;g<d.length;g++){this.oSelection.selectNodeContents(d[g]),this.oSelection.select(),
this.oNavigator.firefox&&this.oEditingArea.execCommand("styleWithCSS",b,!1),e=this.oSelection.getNodes();
for(var h=0;h<e.length;h++)("UL"==e[h].tagName||"OL"==e[h].tagName)&&jindo.$Element(e[h]).css("color",c);
this.oEditingArea.execCommand(a,b,c)}},_indentMargin:function(a){for(var b,c,d,e,f,g,h=a;h;){if(h.tagName&&"LI"===h.tagName){
a=h;break}h=h.parentNode}if("LI"===a.tagName){if(a.previousSibling&&a.previousSibling.tagName&&a.previousSibling.tagName===a.parentNode.tagName){
if(a.nextSibling&&a.nextSibling.tagName&&a.nextSibling.tagName===a.parentNode.tagName){for(b=[a],c=0,
d=a.nextSibling.childNodes.length;d>c;c++)b.push(a.nextSibling.childNodes[c]);for(e=a.previousSibling,
f=a.nextSibling,c=0,d=b.length;d>c;c++)e.insertBefore(b[c],null);f.parentNode.removeChild(f)}else a.previousSibling.insertBefore(a,null);
return}return a.nextSibling&&a.nextSibling.tagName&&a.nextSibling.tagName===a.parentNode.tagName?void a.nextSibling.insertBefore(a,a.nextSibling.firstChild):(h=a.parentNode.cloneNode(!1),
a.parentNode.insertBefore(h,a),void h.appendChild(a))}g=parseInt(a.style.marginLeft,10),g||(g=0),g+=this.nIndentSpacing,
a.style.marginLeft=g+"px"},_outdentMargin:function(a){for(var b,c,d,e,f,g,h=a;h;){if(h.tagName&&"LI"===h.tagName){
a=h;break}h=h.parentNode}if("LI"!==a.tagName)g=parseInt(a.style.marginLeft,10),g||(g=0),g-=this.nIndentSpacing,
0>g&&(g=0),a.style.marginLeft=g+"px";else{if(b=a.parentNode,c=a.parentNode,a.previousSibling&&a.previousSibling.tagName&&a.previousSibling.tagName.match(/LI|UL|OL/))if(a.nextSibling&&a.nextSibling.tagName&&a.nextSibling.tagName.match(/LI|UL|OL/)){
for(d=b.cloneNode(!1);a.nextSibling;)d.insertBefore(a.nextSibling,null);b.parentNode.insertBefore(d,b.nextSibling),
c=d}else c=b.nextSibling;if(b.parentNode.insertBefore(a,c),b.innerHTML.match(/LI/i)||b.parentNode.removeChild(b),
!a.parentNode.tagName.match(/OL|UL/)){for(e=a.parentNode,c=a,f=this.oApp.getWYSIWYGDocument(),e=f.createElement("P"),
c=null,a.parentNode.insertBefore(e,a);a.firstChild;)e.insertBefore(a.firstChild,c);a.parentNode.removeChild(a);
}}},_insertBlankLine:function(){var a=this.oApp.getSelection(),b=a.commonAncestorContainer;for(this.elP1=null,
this.elP2=null;b;){if("BLOCKQUOTE"==b.tagName){this.elP1=jindo.$("<p>&nbsp;</p>",this.oApp.getWYSIWYGDocument()),
b.parentNode.insertBefore(this.elP1,b),this.elP2=jindo.$("<p>&nbsp;</p>",this.oApp.getWYSIWYGDocument()),
b.parentNode.insertBefore(this.elP2,b.nextSibling);break}b=b.parentNode}if(!this.elP1&&!this.elP2){b=a.commonAncestorContainer,
b=1!==b.nodeType?b.parentNode:b;var c=b.previousSibling,d=b.nextSibling;c&&"BLOCKQUOTE"===c.tagName&&(this.elP1=jindo.$("<p>&nbsp;</p>",this.oApp.getWYSIWYGDocument()),
c.parentNode.insertBefore(this.elP1,c.nextSibling)),d&&"BLOCKQUOTE"===d.tagName&&(this.elP1=jindo.$("<p>&nbsp;</p>",this.oApp.getWYSIWYGDocument()),
d.parentNode.insertBefore(this.elP1,d))}},_fixCorruptedBlockQuote:function(a){var b,c,d,e,f,g,h,i,j,k=this.oApp.getWYSIWYGDocument().getElementsByTagName(a);
for(f=0,g=k.length;g>f;f++)if(k[f].firstChild&&k[f].firstChild.tagName==a){b=k[f];break}if(b){for(c=b.parentNode,
h=this._getPosIdx(b),i=this.oApp.getWYSIWYGDocument().createElement("DIV"),i.innerHTML=b.outerHTML.replace("<"+a,"<BLOCKQUOTE"),
b.parentNode.insertBefore(i.firstChild,b),b.parentNode.removeChild(b),d=c.childNodes[h],e=d.getElementsByTagName(a),
f=0,g=e.length;g>f;f++)e[f].childNodes.length<1&&e[f].parentNode.removeChild(e[f]);j=this.oApp.getEmptySelection(),
j.selectNodeContents(d),j.collapseToEnd(),j.select()}},_removeBlockQuote:function(){for(var a,b,c,d="Apple-style-span",e=this.oApp.getSelection(),f=e.commonAncestorContainer,g=f;f;)"LI"===f.tagName?(c=f,
f="display: inline !important; "===f.style.cssText?f.parentNode:null):"SPAN"===f.tagName&&f.className===d?(a=f,
f=c?null:f.parentNode):f=f.parentNode;for(c&&a&&(f=a.parentNode,f.replaceChild(g,a),e.selectNodeContents(f),
e.collapseToEnd(),e.select());f;)if("BLOCKQUOTE"===f.tagName){b=f.getElementsByClassName(d);for(var h=0;a=b[h];h++)a.parentNode.removeChild(a);
f=null}else f=f.parentNode},_getPosIdx:function(a){for(var b=0,c=a.previousSibling;c;c=c.previousSibling)b++;
return b},_countClickCr:function(a){a.match(this.rxClickCr)&&this.oApp.exec("MSG_NOTIFY_CLICKCR",[a.replace(/^insert/i,"")]);
},_extendBlock:function(){var a=this.oApp.getSelection(),b=a.startContainer,c=a.endContainer,d=[],e=[],f=a.cloneRange();
if(b===c&&1===b.nodeType&&"P"===b.tagName&&(d=jindo.$A(b.childNodes).filter(function(a){return 1===a.nodeType&&"IMG"===a.tagName;
}).$value(),e=jindo.$A(a.getNodes()).filter(function(a){return 1===a.nodeType&&"IMG"===a.tagName}).$value(),
!(d.length<=e.length)))return a.selectNode(b),a.select(),f}}),nhn.husky.SE2M_FontColor=jindo.$Class({
name:"SE2M_FontColor",rxColorPattern:/^#?[0-9a-fA-F]{6}$|^rgb\(\d+, ?\d+, ?\d+\)$/i,$init:function(a){
this._assignHTMLElements(a)},_assignHTMLElements:function(a){this.elLastUsed=jindo.$$.getSingle("SPAN.husky_se2m_fontColor_lastUsed",a),
this.elDropdownLayer=jindo.$$.getSingle("DIV.husky_se2m_fontcolor_layer",a),this.elPaletteHolder=jindo.$$.getSingle("DIV.husky_se2m_fontcolor_paletteHolder",this.elDropdownLayer),
this._setLastUsedFontColor("#000000")},$BEFORE_MSG_APP_READY:function(){this.oApp.exec("ADD_APP_PROPERTY",["getLastUsedFontColor",jindo.$Fn(this.getLastUsedFontColor,this).bind()]);
},$ON_MSG_APP_READY:function(){this.oApp.exec("REGISTER_UI_EVENT",["fontColorA","click","APPLY_LAST_USED_FONTCOLOR"]),
this.oApp.exec("REGISTER_UI_EVENT",["fontColorB","click","TOGGLE_FONTCOLOR_LAYER"]),this.oApp.registerLazyMessage(["APPLY_LAST_USED_FONTCOLOR","TOGGLE_FONTCOLOR_LAYER"],["hp_SE2M_FontColor$Lazy.js"]);
},_setLastUsedFontColor:function(a){this.sLastUsedColor=a,this.elLastUsed.style.backgroundColor=this.sLastUsedColor;
},getLastUsedFontColor:function(){return this.sLastUsedColor?this.sLastUsedColor:"#000000"}}),nhn.husky.SE2M_FontNameWithLayerUI=jindo.$Class({
name:"SE2M_FontNameWithLayerUI",FONT_SEPARATOR:"husky_seditor_font_separator",_rxQuote:/['"]/g,_rxComma:/\s*,\s*/g,
$init:function(a,b){this.elLastHover=null,this._assignHTMLElements(a),this.htBrowser=jindo.$Agent().navigator(),
this.aAdditionalFontList=b||[]},addAllFonts:function(){var a,b,c,d,e;if(this.htFamilyName2DisplayName={},
this.htAllFonts={},this.aBaseFontList=[],this.aDefaultFontList=[],this.aTempSavedFontList=[],this.htOptions=this.oApp.htOptions.SE2M_FontName,
this.htOptions){if(a=this.htOptions.aDefaultFontList||[],b=this.htOptions.aFontList,c=this.htOptions.htMainFont,
d=this.htOptions.aFontInUse,this.htBrowser.ie&&b)for(e=0;e<b.length;e++)this.addFont(b[e].id,b[e].name,b[e].size,b[e].url,b[e].cssUrl);
for(e=0;e<a.length;e++)this.addFont(a[e][0],a[e][1],0,"","",1);if(c&&c.id&&this.setMainFont(c.id,c.name,c.size,c.url,c.cssUrl),
this.htBrowser.ie&&d)for(e=0;e<d.length;e++)this.addFontInUse(d[e].id,d[e].name,d[e].size,d[e].url,d[e].cssUrl);
}if(this.htOptions&&this.htOptions.aDefaultFontList&&0!==this.htOptions.aDefaultFontList.length||(this.addFont("돋움,Dotum","돋움",0,"","",1,null,!0),
this.addFont("돋움체,DotumChe,AppleGothic","돋움체",0,"","",1,null,!0),this.addFont("굴림,Gulim","굴림",0,"","",1,null,!0),
this.addFont("굴림체,GulimChe","굴림체",0,"","",1,null,!0),this.addFont("바탕,Batang,AppleMyungjo","바탕",0,"","",1,null,!0),
this.addFont("바탕체,BatangChe","바탕체",0,"","",1,null,!0),this.addFont("궁서,Gungsuh,GungSeo","궁서",0,"","",1,null,!0),
this.addFont("Arial","Arial",0,"","",1,"abcd",!0),this.addFont("Tahoma","Tahoma",0,"","",1,"abcd",!0),
this.addFont("Times New Roman","Times New Roman",0,"","",1,"abcd",!0),this.addFont("Verdana","Verdana",0,"","",1,"abcd",!0),
this.addFont("Courier New","Courier New",0,"","",1,"abcd",!0)),this.aAdditionalFontList&&this.aAdditionalFontList.length>0)for(e=0,
nLen=this.aAdditionalFontList.length;nLen>e;e++)this.addFont(this.aAdditionalFontList[e][0],this.aAdditionalFontList[e][1],0,"","",1);
},$ON_MSG_APP_READY:function(){this.bDoNotRecordUndo=!1,this.oApp.exec("ADD_APP_PROPERTY",["addFont",jindo.$Fn(this.addFont,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["addFontInUse",jindo.$Fn(this.addFontInUse,this).bind()]),this.oApp.exec("ADD_APP_PROPERTY",["setMainFont",jindo.$Fn(this.setMainFont,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["setDefaultFont",jindo.$Fn(this.setDefaultFont,this).bind()]),this.oApp.exec("REGISTER_UI_EVENT",["fontName","click","SE2M_TOGGLE_FONTNAME_LAYER"]),
this._initFontName()},$AFTER_MSG_APP_READY:function(){this._attachIEEvent()},_assignHTMLElements:function(a){
this.oDropdownLayer=jindo.$$.getSingle("DIV.husky_se_fontName_layer",a),this.elFontNameLabel=jindo.$$.getSingle("SPAN.husky_se2m_current_fontName",a),
this.elFontNameList=jindo.$$.getSingle("UL",this.oDropdownLayer),this.elInnerLayer=this.elFontNameList.parentNode,
this.aelFontInMarkup=jindo.$$("LI",this.oDropdownLayer),this.elFontItemTemplate=this.aelFontInMarkup.shift(),
this.aLIFontNames=jindo.$A(jindo.$$("LI",this.oDropdownLayer)).filter(function(a){return null!==a.firstChild;
})._array,this.sDefaultText=this.elFontNameLabel.innerHTML},_initFontName:function(){this._addFontInMarkup(),
this.addAllFonts();var a;this.oApp.getCurrentStyle&&(a=this.oApp.getCurrentStyle())&&this.$ON_MSG_STYLE_CHANGED("fontFamily",a.fontFamily),
this.oApp.registerBrowserEvent(this.oDropdownLayer,"mouseover","EVENT_FONTNAME_LAYER_MOUSEOVER",[]),
this.oApp.registerBrowserEvent(this.oDropdownLayer,"click","EVENT_FONTNAME_LAYER_CLICKED",[])},_checkFontLI:function(a,b){
if(!a)return!1;var c=IsInstalledFont(b);return a.style.display=c?"block":"none",c},_addFontInMarkup:function(){
for(var a,b,c,d,e=0;a=this.aelFontInMarkup[e];e++)a.firstChild?(b=$Element(a).data("font").replace(this._rxQuote,"").replace(this._rxComma,","),
d|=this._checkFontLI(a,b)):a.className.indexOf(this.FONT_SEPARATOR)>-1?(c&&(c.style.display=d?"block":"none"),
c=a,d=!1):a.style.display="none";c&&(c.style.display=d?"block":"none")},_attachIEEvent:function(){if(this.htBrowser.ie){
if(this.htBrowser.nativeVersion<9)return this._wfOnPasteWYSIWYGBody=jindo.$Fn(this._onPasteWYSIWYGBody,this),
void this._wfOnPasteWYSIWYGBody.attach(this.oApp.getWYSIWYGDocument().body,"paste");if(document.documentMode<9)return this._wfOnFocusWYSIWYGBody=jindo.$Fn(this._onFocusWYSIWYGBody,this),
void this._wfOnFocusWYSIWYGBody.attach(this.oApp.getWYSIWYGDocument().body,"focus");this.welEditingAreaCover=jindo.$Element('<DIV style="width:100%; height:100%; position:absolute; top:0px; left:0px; z-index:1000;"></DIV>'),
this.oApp.welEditingAreaContainer.prepend(this.welEditingAreaCover),jindo.$Fn(this._onMouseupCover,this).attach(this.welEditingAreaCover.$value(),"mouseup");
}},_onFocusWYSIWYGBody:function(){this._wfOnFocusWYSIWYGBody.detach(this.oApp.getWYSIWYGDocument().body,"focus"),
this._loadAllBaseFont()},_onPasteWYSIWYGBody:function(){this._wfOnPasteWYSIWYGBody.detach(this.oApp.getWYSIWYGDocument().body,"paste"),
this._loadAllBaseFont()},_onMouseupCover:function(a){a.stop(),this.welEditingAreaCover&&this.welEditingAreaCover.leave();
var b=a.mouse(),c=this.oApp.getWYSIWYGDocument().body,d=jindo.$Element(c),e=this.oApp.getEmptySelection();
if(e.selectNode(c),e.collapseToStart(),e.select(),d.fireEvent("mousedown",{left:b.left,middle:b.middle,
right:b.right}),d.fireEvent("mouseup",{left:b.left,middle:b.middle,right:b.right}),this.oApp.oNavigator.ie&&document.documentMode<11&&"WYSIWYG"===this.oApp.getEditingMode()){
if("<p></p>"==this.oApp.getWYSIWYGDocument().body.innerHTML){this.oApp.getWYSIWYGDocument().body.innerHTML='<p><span id="husky_bookmark_start_INIT"></span><span id="husky_bookmark_end_INIT"></span></p>';
var e=this.oApp.getSelection();e.moveToStringBookmark("INIT"),e.select(),e.removeStringBookmark("INIT");
}}else if(this.oApp.oNavigator.ie&&11==this.oApp.oNavigator.nativeVersion&&11==document.documentMode&&"WYSIWYG"===this.oApp.getEditingMode()&&"<p><br></p>"==this.oApp.getWYSIWYGDocument().body.innerHTML){
var f=jindo.$$.getSingle("br",c);e.setStartBefore(f),e.setEndBefore(f),e.select()}},$ON_EVENT_TOOLBAR_MOUSEDOWN:function(){
this.htBrowser.nativeVersion<9||document.documentMode<9||this.welEditingAreaCover&&this.welEditingAreaCover.leave();
},_loadAllBaseFont:function(){var a,b;if(this.htBrowser.ie){if(this.htBrowser.nativeVersion<9)for(a=0,
b=this.aBaseFontList.length;b>a;a++)this.aBaseFontList[a].loadCSS(this.oApp.getWYSIWYGDocument());else if(document.documentMode<9)for(a=0,
b=this.aBaseFontList.length;b>a;a++)this.aBaseFontList[a].loadCSSToMenu();this._loadAllBaseFont=function(){};
}},_addFontToMenu:function(a,b,c){var d=document.createElement("LI");d.innerHTML=this.elFontItemTemplate.innerHTML.replace("@DisplayName@",a).replace("FontFamily",b).replace("@SampleText@",c),
this.elFontNameList.insertBefore(d,this.elFontItemTemplate),this.aLIFontNames[this.aLIFontNames.length]=d,
this.aLIFontNames.length>20&&(this.oDropdownLayer.style.overflowX="hidden",this.oDropdownLayer.style.overflowY="auto",
this.oDropdownLayer.style.height="400px",this.oDropdownLayer.style.width="204px")},$ON_EVENT_FONTNAME_LAYER_MOUSEOVER:function(a){
var b=this._findLI(a.element);b&&(this._clearLastHover(),b.className="hover",this.elLastHover=b)},$ON_EVENT_FONTNAME_LAYER_CLICKED:function(a){
var b=this._findLI(a.element);if(b){var c,d=this._getFontFamilyFromLI(b),e=this.htAllFonts[d.replace(/\"/g,nhn.husky.SE2M_FontNameWithLayerUI.CUSTOM_FONT_MARKS)];
c=e?e.defaultSize+"pt":0,this.oApp.exec("SET_FONTFAMILY",[d,c])}},_findLI:function(a){for(;"LI"!=a.tagName;){
if(!a||a===this.oDropdownLayer)return null;a=a.parentNode}return a.className.indexOf(this.FONT_SEPARATOR)>-1?null:a;
},_clearLastHover:function(){this.elLastHover&&(this.elLastHover.className="")},$ON_SE2M_TOGGLE_FONTNAME_LAYER:function(){
this.oApp.exec("TOGGLE_TOOLBAR_ACTIVE_LAYER",[this.oDropdownLayer,null,"MSG_FONTNAME_LAYER_OPENED",[],"MSG_FONTNAME_LAYER_CLOSED",[]]),
this.oApp.exec("MSG_NOTIFY_CLICKCR",["font"])},$ON_MSG_FONTNAME_LAYER_OPENED:function(){this.oApp.exec("SELECT_UI",["fontName"]);
},$ON_MSG_FONTNAME_LAYER_CLOSED:function(){this._clearLastHover(),this.oApp.exec("DESELECT_UI",["fontName"]);
},$ON_MSG_STYLE_CHANGED:function(a,b){if("fontFamily"==a){b=b.replace(/["']/g,"");var c=this._getMatchingLI(b);
if(this._clearFontNameSelection(),c)this.elFontNameLabel.innerHTML=this._getFontNameLabelFromLI(c),jindo.$Element(c).addClass("active");else{
var d=this.sDefaultText;this.elFontNameLabel.innerHTML=d}}},$BEFORE_RECORD_UNDO_BEFORE_ACTION:function(){
return!this.bDoNotRecordUndo},$BEFORE_RECORD_UNDO_AFTER_ACTION:function(){return!this.bDoNotRecordUndo;
},$BEFORE_RECORD_UNDO_ACTION:function(){return!this.bDoNotRecordUndo},$ON_SET_FONTFAMILY:function(a,b){
if(a){var c=this.htAllFonts[a.replace(/\"/g,nhn.husky.SE2M_FontNameWithLayerUI.CUSTOM_FONT_MARKS)];c&&c.loadCSS(this.oApp.getWYSIWYGDocument()),
this.oApp.exec("RECORD_UNDO_BEFORE_ACTION",["SET FONTFAMILY",{bMustBlockElement:!0}]),this.bDoNotRecordUndo=!0,
parseInt(b,10)>0&&this.oApp.exec("SET_WYSIWYG_STYLE",[{fontSize:b}]),this.oApp.exec("SET_WYSIWYG_STYLE",[{
fontFamily:a}]),this.bDoNotRecordUndo=!1,this.oApp.exec("RECORD_UNDO_AFTER_ACTION",["SET FONTFAMILY",{
bMustBlockElement:!0}]),this.oApp.exec("HIDE_ACTIVE_LAYER",[]),this.oApp.exec("CHECK_STYLE_CHANGE",[]);
}},_getMatchingLI:function(a){a=a.toLowerCase();for(var b,c,d=0;d<this.aLIFontNames.length;d++){b=this.aLIFontNames[d],
c=this._getFontFamilyFromLI(b).toLowerCase().split(",");for(var e=0;e<c.length;e++)if(c[e]&&jindo.$S(c[e].replace(/['"]/gi,"")).trim().$value()==a)return b;
}return null},_getFontFamilyFromLI:function(a){return a.getElementsByTagName("EM")[0].style.fontFamily;
},_getFontNameLabelFromLI:function(a){return a.firstChild.firstChild.firstChild.nodeValue},_clearFontNameSelection:function(){
for(var a=0;a<this.aLIFontNames.length;a++)jindo.$Element(this.aLIFontNames[a]).removeClass("active");
},addFont:function(a,b,c,d,e,f,g,h){if(!this.htBrowser.ie&&e)return null;if(h&&!IsInstalledFont(a))return null;
a=a.toLowerCase();var i,j,k=new fontProperty(a,b,c,d,e);return c>0?(i=a+"_"+c,j=b+"_"+c):(i=a,j=b),f||(i=nhn.husky.SE2M_FontNameWithLayerUI.CUSTOM_FONT_MARKS+i+nhn.husky.SE2M_FontNameWithLayerUI.CUSTOM_FONT_MARKS),
this.htAllFonts[i]?this.htAllFonts[i]:(this.htAllFonts[i]=k,this.htBrowser.ie&&this.htBrowser.nativeVersion>=9&&document.documentMode>=9&&k.loadCSSToMenu(),
this.htFamilyName2DisplayName[i]=b,g=g||this.oApp.$MSG("SE2M_FontNameWithLayerUI.sSampleText"),this._addFontToMenu(j,i,g),
f?1==f?this.aDefaultFontList[this.aDefaultFontList.length]=k:this.aTempSavedFontList[this.aTempSavedFontList.length]=k:this.aBaseFontList[this.aBaseFontList.length]=k,
k)},addFontInUse:function(a,b,c,d,e,f){var g=this.addFont(a,b,c,d,e,f);return g?(g.loadCSS(this.oApp.getWYSIWYGDocument()),
g):null},setMainFont:function(a,b,c,d,e,f){var g=this.addFontInUse(a,b,c,d,e,f);return g?(this.setDefaultFont(g.fontFamily,c),
g):null},setDefaultFont:function(a,b){var c=this.oApp.getWYSIWYGDocument().body;c.style.fontFamily=a,
b>0&&(c.style.fontSize=b+"pt")}}),nhn.husky.SE2M_FontNameWithLayerUI.CUSTOM_FONT_MARKS="'",nhn.husky.SE2M_FontSizeWithLayerUI=jindo.$Class({
name:"SE2M_FontSizeWithLayerUI",$init:function(a){this._assignHTMLElements(a)},_assignHTMLElements:function(a){
this.oDropdownLayer=jindo.$$.getSingle("DIV.husky_se_fontSize_layer",a),this.elFontSizeLabel=jindo.$$.getSingle("SPAN.husky_se2m_current_fontSize",a),
this.aLIFontSizes=jindo.$A(jindo.$$("LI",this.oDropdownLayer)).filter(function(a){return null!=a.firstChild;
})._array,this.sDefaultText=this.elFontSizeLabel.innerHTML},$ON_MSG_APP_READY:function(){this.oApp.exec("REGISTER_UI_EVENT",["fontSize","click","SE2M_TOGGLE_FONTSIZE_LAYER"]),
this.oApp.exec("SE2_ATTACH_HOVER_EVENTS",[this.aLIFontSizes]);for(var a=0;a<this.aLIFontSizes.length;a++)this.oApp.registerBrowserEvent(this.aLIFontSizes[a],"click","SET_FONTSIZE",[this._getFontSizeFromLI(this.aLIFontSizes[a])]);
},$ON_SE2M_TOGGLE_FONTSIZE_LAYER:function(){this.oApp.exec("TOGGLE_TOOLBAR_ACTIVE_LAYER",[this.oDropdownLayer,null,"SELECT_UI",["fontSize"],"DESELECT_UI",["fontSize"]]),
this.oApp.exec("MSG_NOTIFY_CLICKCR",["size"])},_rxPX:/px$/i,_rxPT:/pt$/i,$ON_MSG_STYLE_CHANGED:function(a,b){
if("fontSize"==a){if(this._rxPX.test(b)){var c=parseFloat(b.replace(this._rxPX,""));b=c>0?72*c/96+"pt":this.sDefaultText;
}if(this._rxPT.test(b)){var c=parseFloat(b.replace(this._rxPT,"")),d=Math.floor(c),e=c-d;c=e>=0&&.25>e?d+0:e>=.25&&.75>e?d+.5:d+1,
b=c+"pt"}b||(b=this.sDefaultText);var f=this._getMatchingLI(b);this._clearFontSizeSelection(),f?(this.elFontSizeLabel.innerHTML=b,
jindo.$Element(f).addClass("active")):this.elFontSizeLabel.innerHTML=b}},$ON_SET_FONTSIZE:function(a){
a&&(this.oApp.exec("SET_WYSIWYG_STYLE",[{fontSize:a}]),this.oApp.exec("HIDE_ACTIVE_LAYER",[]),this.oApp.exec("CHECK_STYLE_CHANGE",[]));
},_getMatchingLI:function(a){var b;a=a.toLowerCase();for(var c=0;c<this.aLIFontSizes.length;c++)if(b=this.aLIFontSizes[c],
this._getFontSizeFromLI(b).toLowerCase()==a)return b;return null},_getFontSizeFromLI:function(a){return a.firstChild.firstChild.style.fontSize;
},_clearFontSizeSelection:function(){for(var a=0;a<this.aLIFontSizes.length;a++)jindo.$Element(this.aLIFontSizes[a]).removeClass("active");
}}),nhn.husky.SE2M_Hyperlink=jindo.$Class({name:"SE2M_Hyperlink",sATagMarker:"HTTP://HUSKY_TMP.MARKER/",
_assignHTMLElements:function(a){this.oHyperlinkButton=jindo.$$.getSingle("li.husky_seditor_ui_hyperlink",a),
this.oHyperlinkLayer=jindo.$$.getSingle("div.se2_layer",this.oHyperlinkButton),this.oLinkInput=jindo.$$.getSingle("INPUT[type=text]",this.oHyperlinkLayer),
this.oBtnConfirm=jindo.$$.getSingle("button.se2_apply",this.oHyperlinkLayer),this.oBtnCancel=jindo.$$.getSingle("button.se2_cancel",this.oHyperlinkLayer);
},_generateAutoLink:function(a,b,c,d,e){b=b||"";var f;return f=d?'<a href="http://'+d+'">'+c+"</a>":'<a href="'+e+'">'+c+"</a>",
b+f},$BEFORE_MSG_APP_READY:function(){var a=nhn.husky.SE2M_Configuration.SE2M_Hyperlink;if(a&&a.bAutolink===!1){
this.$ON_REGISTER_CONVERTERS=null,this.$ON_DISABLE_MESSAGE=null,this.$ON_ENABLE_MESSAGE=null;try{this.oApp.getWYSIWYGDocument().execCommand("AutoUrlDetect",!1,!1);
}catch(b){}}},$ON_MSG_APP_READY:function(){this.bLayerShown=!1,this.oApp.exec("REGISTER_UI_EVENT",["hyperlink","click","TOGGLE_HYPERLINK_LAYER"]),
jindo.$Agent().os().mac?this.oApp.exec("REGISTER_HOTKEY",["meta+k","TOGGLE_HYPERLINK_LAYER",[]]):this.oApp.exec("REGISTER_HOTKEY",["ctrl+k","TOGGLE_HYPERLINK_LAYER",[]]),
this.oApp.registerLazyMessage(["TOGGLE_HYPERLINK_LAYER","APPLY_HYPERLINK"],["hp_SE2M_Hyperlink$Lazy.js"]);
},$ON_REGISTER_CONVERTERS:function(){this.oApp.exec("ADD_CONVERTER_DOM",["IR_TO_DB",jindo.$Fn(this.irToDb,this).bind()]);
},$LOCAL_BEFORE_FIRST:function(a){return a.match(/(REGISTER_CONVERTERS)/)?(this.oApp.acceptLocalBeforeFirstAgain(this,!0),
!0):(this._assignHTMLElements(this.oApp.htOptions.elAppContainer),this.sRXATagMarker=this.sATagMarker.replace(/\//g,"\\/").replace(/\./g,"\\."),
this.oApp.registerBrowserEvent(this.oBtnConfirm,"click","APPLY_HYPERLINK"),this.oApp.registerBrowserEvent(this.oBtnCancel,"click","HIDE_ACTIVE_LAYER"),
void this.oApp.registerBrowserEvent(this.oLinkInput,"keydown","EVENT_HYPERLINK_KEYDOWN"))},$ON_EVENT_HYPERLINK_KEYDOWN:function(a){
a.key().enter&&(this.oApp.exec("APPLY_HYPERLINK"),a.stop())},$ON_DISABLE_MESSAGE:function(a){if("TOGGLE_HYPERLINK_LAYER"===a){
try{this.oApp.getWYSIWYGDocument().execCommand("AutoUrlDetect",!1,!1)}catch(b){}this._bDisabled=!0}},
$ON_ENABLE_MESSAGE:function(a){if("TOGGLE_HYPERLINK_LAYER"===a){try{this.oApp.getWYSIWYGDocument().execCommand("AutoUrlDetect",!1,!0);
}catch(b){}this._bDisabled=!1}},irToDb:function(a){if(!this._bDisabled){var b="@"+(new Date).getTime()+"@",c=new RegExp(b,"g"),d=a.cloneNode(!0);
try{d.innerHTML}catch(e){d=jindo.$(a.outerHTML)}for(var f,g,h=this.oApp.getEmptySelection(),i=h._getFirstRealChild(d),j=h._getLastRealChild(d),k=jindo.$A(h._getNodesBetween(i,j)),l=k.filter(function(a){
return a&&3===a.nodeType}).$value(),m=l,n=l,o=this.oApp.getWYSIWYGDocument().createElement("DIV"),p=0,q=l.length;q>p;p++){
for(f=m[p].parentNode,g=!1;f;){if("A"===f.tagName||"PRE"===f.tagName){g=!0;break}f=f.parentNode}if(!g){
o.innerHTML="";try{o.appendChild(m[p].cloneNode(!0)),o.innerHTML=(b+o.innerHTML).replace(/(&nbsp|\s)?(((?!http[s]?:\/\/)www\.(?:(?!\&nbsp;|\s|\(|\)|"|').)+)|(http[s]?:\/\/(?:(?!&nbsp;|\s|\(|\)|"|').)+))/gi,this._generateAutoLink),
m[p].parentNode.insertBefore(o,m[p]),m[p].parentNode.removeChild(m[p])}catch(r){}for(;o.firstChild;)o.parentNode.insertBefore(o.firstChild,o);
o.parentNode.removeChild(o)}}o=h=i=j=k=l=m=n=f=null,d.innerHTML=d.innerHTML.replace(c,""),a.innerHTML=d.innerHTML,
d=null}}}),nhn.husky.SE2M_LineHeightWithLayerUI=jindo.$Class({name:"SE2M_LineHeightWithLayerUI",MIN_LINE_HEIGHT:50,
$ON_MSG_APP_READY:function(){this.oApp.exec("REGISTER_UI_EVENT",["lineHeight","click","SE2M_TOGGLE_LINEHEIGHT_LAYER"]),
this.oApp.registerLazyMessage(["SE2M_TOGGLE_LINEHEIGHT_LAYER"],["hp_SE2M_LineHeightWithLayerUI$Lazy.js"]);
}}),nhn.husky.SE2M_LineStyler=jindo.$Class({name:"SE2M_LineStyler",$BEFORE_MSG_APP_READY:function(){
this.oApp.exec("ADD_APP_PROPERTY",["getLineStyle",jindo.$Fn(this.getLineStyle,this).bind()])},$ON_SET_LINE_STYLE:function(a,b,c){
this.oSelection=this.oApp.getSelection();var d=this._getSelectedNodes(!1);this.setLineStyle(a,b,c,d),
this.oApp.exec("CHECK_STYLE_CHANGE",[])},$ON_SET_LINE_BLOCK_STYLE:function(a,b,c){this.oSelection=this.oApp.getSelection(),
this.setLineBlockStyle(a,b,c),this.oApp.exec("CHECK_STYLE_CHANGE",[])},_getSelectedTDs:function(){var a={};
return this.oApp.exec("GET_SELECTED_TD_BLOCK",["aTdCells",a]),a.aTdCells||[]},getLineStyle:function(a){
var b,c,d,e,f=this._getSelectedNodes(!1);if(0===f.length)return null;var g=f.length;0===g?e=null:(c=this._getLineWrapper(f[0]),
e=this._getWrapperLineStyle(a,c));var h=this.oSelection.getStartNode();if(null!=e)for(var i=1;g>i;i++)if(!this._isChildOf(f[i],b)&&f[i]&&(b=this._getLineWrapper(f[i]),
b!=c)){if(d=this._getWrapperLineStyle(a,b),d!=e){e=null;break}c=b}b=this._getLineWrapper(f[g-1]);var j=this.oSelection.getEndNode();
return setTimeout(jindo.$Fn(function(a,b){var c=this._getSelectedTDs();if(c.length>0){var d=nhn.husky.SE2M_Utils.findAncestorByTagName("TD",a),e=nhn.husky.SE2M_Utils.findAncestorByTagName("TD",b);
a=d||!a?c[0].firstChild:a,b=e||!b?c[c.length-1].lastChild:b}this.oSelection.setEndNodes(a,b),this.oSelection.select(),
this.oApp.exec("CHECK_STYLE_CHANGE",[])},this).bind(h,j),0),e},setLineStyle:function(a,b,c,d){function e(a,b,c){
if(!a){g=!0;try{a=thisRef.oSelection.surroundContentsWithNewNode("P")}catch(d){a=thisRef.oSelection.surroundContentsWithNewNode("DIV");
}}return"function"==typeof c?c(a):a.style[b]=c,0===a.childNodes.length&&(a.innerHTML="&nbsp;"),a}function f(a){
for(;a&&"BODY"!=a.tagName;)a=nhn.DOMFix.parentNode(a);return a?!0:!1}thisRef=this;var g=!1;if(0!==d.length){
var h,i,j=d.length;c&&c.bDontAddUndoHistory||this.oApp.exec("RECORD_UNDO_BEFORE_ACTION",["LINE STYLE"]),
i=this._getLineWrapper(d[0]),i=e(i,a,b);for(var k=i,l=i,m=1;j>m;m++){try{if(!f(nhn.DOMFix.parentNode(d[m])))continue;
}catch(n){continue}this._isChildOf(d[m],h)||(h=this._getLineWrapper(d[m]),h!=i&&(h=e(h,a,b),i=h))}l=h||k,
!g||c&&c.bDoNotSelect||setTimeout(jindo.$Fn(function(a,b,c){a==b?(this.oSelection.selectNodeContents(a),
1==a.childNodes.length&&"BR"==a.firstChild.tagName&&this.oSelection.collapseToStart()):this.oSelection.setEndNodes(a,b),
this.oSelection.select(),c&&c.bDontAddUndoHistory||this.oApp.exec("RECORD_UNDO_AFTER_ACTION",["LINE STYLE"]);
},this).bind(k,l,c),0)}},setLineBlockStyle:function(a,b,c){for(var d=[],e=[],f=this._getSelectedTDs(),g=0;g<f.length;g++){
this.oSelection.selectNode(f[g]),d=this.oSelection.getNodes();for(var h=0,i=0;h<d.length;h++)(3==d[h].nodeType||"BR"==d[h].tagName&&0==h)&&(e[i]=d[h],
i++);this.setLineStyle(a,b,c,e),d=e=[]}},getTextNodes:function(a,b){var c=function(a){return 3==a.nodeType&&"\n"!=a.nodeValue&&""!=a.nodeValue&&"﻿"!=a.nodeValue||"LI"==a.tagName&&""==a.innerHTML||"P"==a.tagName&&""==a.innerHTML?!0:!1;
};return b.getNodes(a,c)},_getSelectedNodes:function(a){if(a||(this.oSelection=this.oApp.getSelection()),
"LI"==this.oSelection.endContainer.tagName&&0==this.oSelection.endOffset&&""==this.oSelection.endContainer.innerHTML&&this.oSelection.setEndAfter(this.oSelection.endContainer),
this.oSelection.collapsed){var b=this._getSelectedTDs();if(b.length>0)return[b[0].firstChild,b[b.length-1].lastChild];
this.oSelection.selectNode(this.oSelection.commonAncestorContainer)}var c=this.getTextNodes(!1,this.oSelection);
if(0===c.length){var d=this.oSelection.getStartNode();if(d)c[0]=d;else{var e=this.oSelection._document.createTextNode(" ");
this.oSelection.insertNode(e),c=[e]}}return c},_getWrapperLineStyle:function(a,b){var c=null;if(b&&b.style[a])c=b.style[a];else for(b=this.oSelection.commonAncesterContainer;b&&!this.oSelection.rxLineBreaker.test(b.tagName);){
if(b&&b.style[a]){c=b.style[a];break}b=nhn.DOMFix.parentNode(b)}return c},_isChildOf:function(a,b){for(;a&&"BODY"!=a.tagName;){
if(a==b)return!0;a=nhn.DOMFix.parentNode(a)}return!1},_getLineWrapper:function(a){var b=this.oApp.getEmptySelection();
b.selectNode(a);var c,d,e,f,g=b.getLineInfo(),h=g.oStart,i=g.oEnd,j=null;return c=h.oNode,e=h.oLineBreaker,
d=i.oNode,f=i.oLineBreaker,this.oSelection.setEndNodes(c,d),e==f&&("P"==e.tagName||"DIV"==e.tagName||"LI"==e.tagName?j=e:this.oSelection.setEndNodes(e.firstChild,e.lastChild)),
j}}),nhn.husky.SE2M_List=jindo.$Class({name:"SE2M_List",selectedUnorderedListStyle:"disc",selectedOrderedListStyle:"decimal",
orderedListStyleArray:["decimal","upper-alpha","lower-alpha","upper-roman","lower-roman"],orderedListStyleDic:{
decimal:0,"upper-alpha":1,"lower-alpha":2,"upper-roman":3,"lower-roman":4},unorderedListStyleArray:["bu_disc","bu_empty_disc","bu_big_circle","bu_square","bu_dash","bu_check","bu_g_check"],
unorderedListStyleDic:{disc:0,"empty-disc":1,"big-circle":2,square:3,dashed:4,check:5,"green-check":6
},backgroundPositionfontSizeDic:{7:"4px",8:"5px",9:"6px",10:"7px",11:"6px",12:"7px",14:"9px",18:"13px",
24:"17px",36:"29px"},unorderedListStyleUrlPrefix:"https://"+wm.staticDomain+"/static/pwe/nm/se2_new/bu/",
currentFontSize:null,_getDefaultFontSize:function(){var a=this.oApp.getWYSIWYGDocument().body.style.fontSize;
return""==a&&(a="9pt"),a},$init:function(a){this.elUnorderedDropdownLayer=jindo.$$.getSingle("DIV.husky_se2m_unorderedlist_layer",a),
this.elUnorderedlistList=jindo.$$.getSingle("UL.husky_se2m_unorderedlist_list",this.elUnorderedDropdownLayer),
this.elOrderedDropdownLayer=jindo.$$.getSingle("DIV.husky_se2m_orderedlist_layer",a),this.elOrderedlistList=jindo.$$.getSingle("UL.husky_se2m_orderedlist_list",this.elOrderedDropdownLayer);
},$BEFORE_MSG_APP_READY:function(){},$ON_MSG_APP_READY:function(){this.oApp.exec("REGISTER_UI_EVENT",["UnorderedlistA","click","APPLY_SELECTED_UNORDEREDLIST_STYLE"]),
this.oApp.exec("REGISTER_UI_EVENT",["UnorderedlistB","click","TOGGLE_UNORDEREDLIST_LAYER"]),this.oApp.registerBrowserEvent(this.elUnorderedlistList,"click","EVENT_APPLY_UNORDEREDLIST",[]),
this.oApp.registerBrowserEvent(this.elUnorderedlistList,"mouseover","EVENT_MOUSEOVER_UNORDEREDLIST"),
this.oApp.registerBrowserEvent(this.elUnorderedlistList,"mouseout","EVENT_MOUSEOUT_UNORDEREDLIST"),this.oApp.exec("REGISTER_UI_EVENT",["OrderedlistA","click","APPLY_SELECTED_ORDEREDLIST_STYLE"]),
this.oApp.exec("REGISTER_UI_EVENT",["OrderedlistB","click","TOGGLE_ORDEREDLIST_LAYER"]),this.oApp.registerBrowserEvent(this.elOrderedlistList,"click","EVENT_APPLY_ORDEREDLIST",[]),
this.oApp.registerBrowserEvent(this.elOrderedlistList,"mouseover","EVENT_MOUSEOVER_ORDEREDLIST"),this.oApp.registerBrowserEvent(this.elOrderedlistList,"mouseout","EVENT_MOUSEOUT_ORDEREDLIST");
},_assignHTMLElements:function(){},_fixListHTML:function(a){var b,c,d;if(null!=a&&1==a.nodeType&&("OL"===a.tagName||"UL"===a.tagName)){
for(b=document.createElement("DIV"),c=a.childNodes[0];c;){if(1==c.nodeType&&"LI"===c.tagName){for(d=document.createElement("DIV");c.childNodes[0];)d.appendChild(c.childNodes[0]);
a.removeChild(c),b.appendChild(d)}else b.appendChild(c);c=a.childNodes[0]}return a.parentNode.replaceChild(b,a),
b}},$ON_APPLY_LISTSTYLE:function(){},$ON_EVENT_EDITING_AREA_KEYDOWN:function(a){var b=a.key();switch(b.keyCode){
case 8:var c=!1,d=this.oApp.getSelection();if(d.startContainer){var e=d.startContainer,f="OL"==e.tagName||"UL"==e.tagName?e.firstChild:d.findAncestorByTagName("LI");
if(c=!!f){var g=f.parentNode;if(jindo.$Agent().navigator().ie&&11==jindo.$Agent().navigator().nativeVersion&&1==this._getContent(f).trim().length&&"BR"!=f.lastChild.tagName){
var h=document.createTextNode("​");f.insertBefore(h,null)}if(this._ifAtStartOfLiNode()){a.stop();var g=f.parentNode,i=f.previousElementSibling,j=document.createElement("P"),k=null;
if(g&&(k=g.parentNode),jindo.$Agent().navigator().ie&&11==jindo.$Agent().navigator().nativeVersion&&this._isEmptyLiNode(f)){
var h=document.createTextNode("​");f.insertBefore(h,null)}if(null!=i){if(f.hasChildNodes())for(var l=f.childNodes;0!=l.length;)j.insertBefore(l[0],null);
i.insertBefore(j,null),g.removeChild(f);var m=j.hasChildNodes()?j.childNodes[0]:j;d.selectNode(m),d.collapseToStart(),
d.select()}else this.oApp.exec("OUTDENT",[]);k&&!g.hasChildNodes()&&k.removeChild(g),null==k||"OL"!=k.tagName&&"UL"!=k.tagName||this._applyListStyle(k,this._getListStyle(k),!0,!0);
}}}break;case 13:var d=this.oApp.getSelection(),n=d.startContainer,f=n,g=null,o=!1;if(f&&"LI"!=f.tagName&&(f=d.findAncestorByTagName("LI")),
null==f){n&&(g=this._getParentListNode(n),g&&(g=this._fixListHTML(g),a.stop(),d.selectNodeContents(g),
d.collapseToEnd(),d.select()));break}if(jindo.$Agent().navigator().edge&&(""==f.textContent||8203!=f.textContent.charCodeAt(0))){
var p=document.createTextNode("​");f.insertBefore(p,f.firstChild||null)}if((this._ifAtStartOfLiNode()||this._isEmptyLiNode(f))&&(a.stop(),
this.oApp.exec("OUTDENT",[]),o=!0),g=this._getParentListNode(f)){this._applyListStyle(g,this._getListStyle(g),!0,!1);
var q=g.parentNode;!q||"OL"!=q.tagName&&"UL"!=q.tagName||this._applyListStyle(q,this._getListStyle(q),!0,!1);
}o?this._resetSelectionForIE(d,f,f.style.fontSize):this._resetSelectionForIE(d,f,f.style.fontSize)}},
$BEFORE_EXECCOMMAND:function(a){switch(a){case"justifyleft":case"justifycenter":case"justifyright":case"justifyfull":
var b=this.oApp.getSelection(),c=b.startContainer,d=b.endContainer,e=c,f=d,g=!1,h=a.substring(7);for("full"==h&&(h="justify");e&&"LI"!=e.tagName;)e=e.parentNode;
for(;f&&"LI"!=f.tagName;)f=f.parentNode;if(e){for(;e&&e!=f;)e.style.textAlign=h,e=e.nextSibling;f&&(f.style.textAlign=h),
g=!0}else if(f){for(;f;)f.style.textAlign=h,f=f.previousSibling;g=!0}if(g)return this.oApp.exec("CHECK_STYLE_CHANGE"),
!1}return!0},$AFTER_EXECCOMMAND:function(a){switch(a){case"indent":setTimeout(jindo.$Fn(this._doAfterIndent,this).bind(),1);
break;case"outdent":setTimeout(jindo.$Fn(this._doAfterOutdent,this).bind(),1)}return!0},_ifAtStartOfLiNode:function(){
var a=this.oApp.getSelection(),b=a.startContainer,c=a.findAncestorByTagName("LI"),d=null,e=null;if(!a.collapsed||3==b.nodeType&&0!=a.startOffset&&""!==b.nodeValue.replace("​","")||3!=b.nodeType&&""!=$S(this._getContent(c)).trim()&&a.startOffset==b.childNodes.length)return!1;
if(3!=b.nodeType&&this._getContent(b)==this._getContent(c)&&0==a.startOffset)return!0;for(d=3==b.nodeType?b:b.childNodes[a.startOffset];d&&"LI"!=d.tagName;){
for(e=d.previousSibling;null!=e;){if(3==e.nodeType){if(""!=e.nodeValue.replace("​",""))return!1}else if(""!=this._getContent(e).replace("​",""))return!1;
e=e.previousSibling}d=d.parentNode}return!0},_getContent:function(a){if(null==a)return null;var b=jindo.$Agent().navigator().ie&&8==jindo.$Agent().navigator().nativeVersion?a.innerText:a.textContent;
return b},_isEmptyLiNode:function(a){if(!a||"LI"!=a.tagName)return!1;var b=this._getContent(a).replace("​","");
return 0==b.length?!0:!1},_resetSelectionForIE:function(a,b,c){if(b&&jindo.$Agent().navigator().ie){
var d=this;jindo.$Agent().navigator().nativeVersion<10?(b=b.nextSibling,setTimeout(function(){if(b&&d._isEmptyLiNode(b)){
for(;b.childNodes[0];)b.removeChild(b.childNodes[0]);var e=document.createElement("SPAN"),f=document.createTextNode(" ");
e.style.fontSize=c,e.appendChild(f),b.appendChild(e),setTimeout(function(){try{a.selectNode(f),a.collapseToEnd(),
a.select()}catch(b){}},100)}},1)):11==jindo.$Agent().navigator().nativeVersion&&a.collapsed&&setTimeout(function(){
for(var a=d.oApp.getSelection(),c=b.nextSibling;c&&"LI"!==c.tagName;)c=c.parentNode;if(c){for(var e=c.innerText,f=0;f<e.length;++f)if(8203!=e.charCodeAt(f))return;
for(;c.childNodes[0];)c.removeChild(c.childNodes[0]);var g=document.createElement("SPAN"),e=document.createTextNode("​");
g.appendChild(e),c.appendChild(g),a.selectNode(e),a.collapseToEnd(),a.select()}},100)}},_doAfterIndent:function(a){
var b=this.oApp.getSelection(),c=b.startContainer,d=null,e=null,f="0",g=0,h=a||!1;c=this._getParentListNode(c),
c&&!h&&(d=c.parentNode,d=this._getParentListNode(d),d&&c.tagName==d.tagName&&(c=d)),c&&(e=this._getListStyle(c),
f=this._getListLevel(c),e&&f||(e="OL"==c.tagName?this.selectedOrderedListStyle:this.selectedUnorderedListStyle,
f="0"),this._fixListStyle(c,e,f,!1),g=parseInt(f),g=this._applyIndentRule(c,e,0),this._applyListStyle(c,e,!1,!0));
},_applyIndentRule:function(a,b,c){if(c>0)if("OL"==a.tagName)(this.orderedListStyleDic[b]+c)%this.orderedListStyleArray.length==this.orderedListStyleDic["upper-roman"]&&++c;else for(var d=(this.unorderedListStyleDic[b]+c)%this.unorderedListStyleArray.length;d==this.unorderedListStyleDic["big-circle"]||d==this.unorderedListStyleDic.check||d==this.unorderedListStyleDic["green-check"];)++c,
d=(this.unorderedListStyleDic[b]+c)%this.unorderedListStyleArray.length;return c},_doAfterOutdent:function(){
this._doAfterIndent(!0)},_getParentListNode:function(a){for(;a&&"OL"!=a.tagName&&"UL"!=a.tagName;)a=a.parentNode;
return a},_applyListStyle:function(a,b,c,d){var e="APPLY_";"UL"==a.tagName&&(e+="UN"),e+="ORDEREDLIST",
c?this.oApp.delayedExec(e,[b,!1,a,d,!1],0):this.oApp.exec(e,[b,!1,a,d,!1])},$ON_TOGGLE_ORDEREDLIST_LAYER:function(){
this.oApp.exec("TOGGLE_TOOLBAR_ACTIVE_LAYER",[this.elOrderedDropdownLayer,null,"ORDEREDLIST_LAYER_SHOWN",[],"ORDEREDLIST_LAYER_HIDDEN",[]]),
this.oApp.exec("MSG_NOTIFY_CLICKCR",["orderedlist"])},$ON_TOGGLE_UNORDEREDLIST_LAYER:function(){this.oApp.exec("TOGGLE_TOOLBAR_ACTIVE_LAYER",[this.elUnorderedDropdownLayer,null,"UNORDEREDLIST_LAYER_SHOWN",[],"UNORDEREDLIST_LAYER_HIDDEN",[]]),
this.oApp.exec("MSG_NOTIFY_CLICKCR",["unorderedlist"])},$ON_ORDEREDLIST_LAYER_SHOWN:function(){this.oApp.exec("SELECT_UI",["OrderedlistB"]),
this._updateActiveStatus(this.elOrderedlistList,this.selectedOrderedListStyle)},$ON_UNORDEREDLIST_LAYER_SHOWN:function(){
this.oApp.exec("SELECT_UI",["UnorderedlistB"]),this._updateActiveStatus(this.elUnorderedlistList,this.selectedUnorderedListStyle);
},_updateActiveStatus:function(a,b){for(var c=null,d=null,e=0;e<a.children.length;++e)d=a.children[e],
"LI"==d.tagName&&(c=d.children[0],c.title==b?jindo.$Element(d).addClass("active"):jindo.$Element(d).removeClass("active"));
},$ON_ORDEREDLIST_LAYER_HIDDEN:function(){this.oApp.exec("DESELECT_UI",["OrderedlistB"]),this.oApp.exec("RESET_ORDEREDLIST",[]);
},$ON_UNORDEREDLIST_LAYER_HIDDEN:function(){this.oApp.exec("DESELECT_UI",["UnorderedlistB"]),this.oApp.exec("RESET_UNORDEREDLIST",[]);
},$ON_EVENT_APPLY_ORDEREDLIST:function(a){var b=a.element;if("BUTTON"==b.tagName){var c=b.title,d=!1,e=this.oApp.getSelection().startContainer;
e=this._getParentListNode(e),e&&"UL"==e.tagName&&(d=!0),this.oApp.exec("RECORD_UNDO_BEFORE_ACTION",["insertorderedlist",{
bMustBlockContainer:!0}]),this.oApp.exec("APPLY_ORDEREDLIST",[c,d,null,!0,!0])}},$ON_EVENT_APPLY_UNORDEREDLIST:function(a){
var b=a.element;if("BUTTON"==b.tagName){var c=b.title,d=!1,e=this.oApp.getSelection().startContainer;
e=this._getParentListNode(e),e&&"OL"==e.tagName&&(d=!0),this.oApp.exec("RECORD_UNDO_BEFORE_ACTION",["insertunorderedlist",{
bMustBlockContainer:!0}]),this.oApp.exec("APPLY_UNORDEREDLIST",[c,d,null,!0,!0])}},$ON_APPLY_SELECTED_ORDEREDLIST_STYLE:function(){
this.oApp.exec("APPLY_ORDEREDLIST",[this.selectedOrderedListStyle,!0,null,!0,!0]),this.oApp.exec("MSG_NOTIFY_CLICKCR",["orderedlist"]);
},$ON_APPLY_SELECTED_UNORDEREDLIST_STYLE:function(){this.oApp.exec("APPLY_UNORDEREDLIST",[this.selectedUnorderedListStyle,!0,null,!0,!0]),
this.oApp.exec("MSG_NOTIFY_CLICKCR",["unorderedlist"])},$ON_APPLY_ORDEREDLIST:function(a,b,c,d,e){this._applyList(a,b,c,d,e,"OL","insertorderedlist",this._applyOrderedList),
this.oApp.exec("RECORD_UNDO_AFTER_ACTION",["insertorderedlist",{bMustBlockContainer:!0}])},$ON_APPLY_UNORDEREDLIST:function(a,b,c,d,e){
this._applyList(a,b,c,d,e,"UL","insertunorderedlist",this._applyUnorderedList),this.oApp.exec("RECORD_UNDO_AFTER_ACTION",["insertunorderedlist",{
bMustBlockContainer:!0}])},_applyOrderedList:function(a,b,c,d){var e=this.orderedListStyleArray,f=this.orderedListStyleDic,g=null,h=0,i=0,j=null;
this.selectedOrderedListStyle=b,h=(f[b]+c)%e.length,a.style.marginLeft="0px",a.style.paddingLeft=c>0||a.parentNode&&("UL"==a.parentNode.tagName||"OL"==a.parentNode.tagName)?"20px":"0px",
a.style.listStyleType=e[h],a.style.listStylePosition="inside";for(var k=0;k<a.children.length;++k)switch(g=a.children[k],
g.tagName){case"LI":g.style.listStyle="",g.style.backgroundImage="",g.style.paddingLeft="0px",this._fixLiNodeFontSize(g);
break;case"OL":d&&(i=c+1,i=this._applyIndentRule(g,b,i),this._fixListStyle(g,b,i,!0),this._applyOrderedList(g,b,i,d));
break;case"UL":d&&(i=0,j=this._getListStyle(g)||this.selectedUnorderedListStyle,i=this._applyIndentRule(g,j,i),
this._fixListStyle(g,j,i,!1),this._applyUnorderedList(g,j,i,d))}},_applyUnorderedList:function(a,b,c,d){
var e=(this.unorderedListStyleUrlPrefix,this.unorderedListStyleArray),f=this.unorderedListStyleDic,g=null,h=0,i=0,j=null;
this.selectedUnorderedListStyle=b,h=(f[b]+c)%e.length,a.style.marginLeft="0px",a.style.paddingLeft=c>0||a.parentNode&&("UL"==a.parentNode.tagName||"OL"==a.parentNode.tagName)?"20px":"0px",
a.style.listStylePosition="inside";for(var k=0;k<a.children.length;++k)switch(g=a.children[k],g.tagName){
case"LI":g.style.listStyle="none",g.style.backgroundRepeat="no-repeat",this._applyULLiNode(g,h);break;
case"UL":d&&(i=c+1,i=this._applyIndentRule(g,b,i),this._fixListStyle(g,b,i,!0),this._applyUnorderedList(g,b,i,d));
break;case"OL":d&&(i=0,j=this._getListStyle(g)||this.selectedOrderedListStyle,i=this._applyIndentRule(g,j,i),
this._fixListStyle(g,j,i,!1),this._applyOrderedList(g,j,i,d))}},_applyList:function(a,b,c,d,e,f,g,h){
var i=null,j=0;if(null==c){var k=this.oApp.getSelection(),l=null,m=null;for(m=i=k.startContainer;i&&"OL"!=i.tagName&&"UL"!=i.tagName;)i=i.parentNode;
var n=!!i;if("none"!==a&&(b||!n)){if(i&&(jindo.$Agent().navigator().ie||jindo.$Agent().navigator().edge))for(var l=null,o=0;l=i.children[o];++o)"LI"==l.tagName&&(jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().nativeVersion<9?(l.style.backgroundImage="",
l.style.paddingLeft=""):l.setAttribute("style",""));(jindo.$Agent().navigator().chrome||jindo.$Agent().navigator().safari||i&&jindo.$Agent().navigator().ie&&8==jindo.$Agent().navigator().nativeVersion)&&b&&i&&i.parentNode&&i.tagName==i.parentNode.tagName&&(j=parseInt(this._getListLevel(i.parentNode))),
this.oApp.exec("EXECCOMMAND",[g,!1,""])}if(k=this.oApp.getSelection(),k.fixCommonAncestorContainer(),
i=k.findAncestorByTagName(f),!i&&!n&&k.startContainer&&"BODY"==k.startContainer.tagName&&(i=k.startContainer.children[0],
i&&("OL"==i.tagName||"UL"==i.tagName))){var p=document.createTextNode("");i.children[0].insertBefore(p,i.children[0].childNodes[0]?i.children[0].childNodes[0]:null),
k.selectNode(p),k.collapseToEnd(),k.select()}if(i&&"none"!==a&&jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().nativeVersion>8){
for(var q=i,l=null,r=!1,s=null,o=0;l=q.children[o];++o)if(!this._isEmptyString(l.innerText)){if("OL"==l.tagName||"UL"==l.tagName){
q=l,o=-1;continue}if("LI"==l.tagName){s||(s=l),k=this.oApp.getSelection(),k.selectNode(l.firstChild),
k.select(),r=!0;break}}if(!r){for(var o=0;l=q.children[o];++o)if("OL"!=l.tagName&&"UL"!=l.tagName){if("LI"==l.tagName){
s=l;break}}else q=l,o=-1;s&&s.childNodes.length>0&&(k=this.oApp.getSelection(),k.selectNode(s.firstChild.firstChild?s.firstChild.firstChild:s.firstChild),
k.collapseToStart(),k.select())}}}else i=c;if("none"==a){for(var k=null;i&&i.tagName==f&&(this.oApp.exec("EXECCOMMAND",[g,!1,""]),
!jindo.$Agent().navigator().ie);)k=this.oApp.getSelection(),i=k.findAncestorByTagName(f);return void this.oApp.exec("HIDE_ACTIVE_LAYER");
}if(i&&i.tagName==f){var t=j;this._fixListStyle(i,a,t,e),t=parseInt(this._getListLevel(i)),h.call(this,i,a,t,d);
}this.oApp.exec("HIDE_ACTIVE_LAYER"),this.oApp.exec("CHECK_STYLE_CHANGE")},_getListStyle:function(a){
var b=(jindo.$Element(a),null),c=null,d=null;return c=a.getAttribute("nid"),c&&(d=c.split("_"),3==d.length&&(b=d[1])),
b||(b="UL"===a.tagName?"disc":"decimal"),b},_getListLevel:function(a){var b=(jindo.$Element(a),null),c=null,d=null;
return c=a.getAttribute("nid"),c&&(d=c.split("_"),3==d.length&&(b=d[2])),b||(b=0),b},_fixListStyle:function(a,b,c,d){
var e=(jindo.$Element(a),null),f=null,g=null,h=null;g=a.getAttribute("nid"),d||!g||0==g.length?a.setAttribute("nid","SE_"+b+"_"+c):(h=g.split("_"),
3==h.length||4==h.length?(e=h[1],f=h[2],(e!=b||parseInt(f)<c)&&a.setAttribute("nid","SE_"+b+"_"+c)):a.setAttribute("nid","SE_"+b+"_"+c));
},$ON_EVENT_MOUSEOVER_ORDEREDLIST:function(a){this._mouseOverList(a)},$ON_EVENT_MOUSEOVER_UNORDEREDLIST:function(a){
this._mouseOverList(a)},_mouseOverList:function(a){for(var b=a.element;b&&b.tagName&&"LI"!=b.tagName;)b=b.parentNode;
b&&b.nodeType&&9!=b.nodeType&&(""!=b.className&&b.className&&"undefined"!=typeof b.className||jindo.$Element(b).addClass("hover"));
},$ON_EVENT_MOUSEOUT_ORDEREDLIST:function(a){this._mouseOutList(a)},$ON_EVENT_MOUSEOUT_UNORDEREDLIST:function(a){
this._mouseOutList(a)},_mouseOutList:function(a){for(var b=a.element;b&&b.tagName&&"LI"!=b.tagName;)b=b.parentNode;
b&&"hover"==b.className&&jindo.$Element(b).removeClass("hover")},_applyULLiNode:function(a,b){if("LI"==a.tagName){
var c=(a.children[0],"url("+this.unorderedListStyleUrlPrefix+this.unorderedListStyleArray[b]),d=this._fixLiNodeFontSize(a);
c=c+d["pic-size"]+".png)",a.style.backgroundImage=c,a.style.paddingLeft=d["padding-left"],a.style.backgroundPosition="0px "+this.backgroundPositionfontSizeDic[d["font-size"]];
}},_fixLiNodeFontSize:function(a){var b,c=!1,d=a.textContent||a.innerText;if((jindo.$Agent().navigator().ie||jindo.$Agent().navigator().edge)&&this._isEmptyString(d)&&this.currentFontSize){
a.style.fontSize=this.currentFontSize;for(var e=0;a.children[e];)"SPAN"==a.children[e].tagName&&(a.children[e].style.fontSize=this.currentFontSize),
++e}for(var e=a.childNodes.length-1;e>=0;--e)if(3==a.childNodes[e].nodeType){b=e,c=!0;break}if(c){for(var f=document.createElement("SPAN");a.childNodes[0];)f.appendChild(a.childNodes[0]);
""!=a.style.fontSize&&(f.style.fontSize=a.style.fontSize),a.appendChild(f);for(var g=this.oApp.getSelection(),h=g.endContainer;h&&h!=a;)h=h.parentNode;
h&&(g.selectNode(f),jindo.$Agent().navigator().ie?setTimeout(function(){g.select()},10):g.select())}
var i=this._getFirstChar(a),j=this._getLargestFontSize(a);if(null==i){if(i=a.children[0])if(this.currentFontSize){
var g=this.oApp.getSelection();g.isNodeInRange(a,!1,!0)&&(i.style.fontSize=this.currentFontSize)}else{
for(var k=a.previousSibling;k&&"LI"!=k.tagName;)k=k.previousSibling;k?i.style.fontSize=k.style.fontSize:""!=a.style.fontSize&&(i=a);
}}else for(;i&&i!=a&&""==i.style.fontSize;)i=i.parentNode;if(jindo.$Agent().navigator().ie||jindo.$Agent().navigator().edge)for(var l=null,f=null,e=0;l=a.children[e];++e)if("DIV"==l.tagName||"P"==l.tagName){
if(1==l.childNodes.length&&1==l.childNodes[0].nodeType)f=l.childNodes[0],f.style.cssText=l.style.cssText+";"+f.style.cssText,
a.replaceChild(f,l);else{for(f=document.createElement("SPAN"),f.style.cssText=l.style.cssText;l.childNodes[0];)f.appendChild(l.childNodes[0]);
a.replaceChild(f,l)}f.lastChild&&1==f.lastChild.nodeType&&"BR"==f.lastChild.tagName&&f.removeChild(f.lastChild);
}var m="_m",n=parseInt(this._getDefaultFontSize()),o="13px";return j?n=parseInt(j.style.fontSize):i&&""!=i.style.fontSize?n=parseInt(i.style.fontSize):""!==a.textContent&&""!==a.innerText||!this.currentFontSize||(n=parseInt(this.currentFontSize)),
n||(n=parseInt(this._getDefaultFontSize())),8>=n?(m="_s",o="12px"):14>=n?(m="_m",o="13px"):(m="_l",o="16px"),
a.style.fontSize=n+"pt",{"pic-size":m,"font-size":n,"padding-left":o}},_getLargestFontSize:function(a){
for(var b=null,c=!1,d=null,e=null,f=0;f<a.childNodes.length;++f){b=a.childNodes[f],"SPAN"==b.tagName&&(b.style.lineHeight="",
""==b.style.fontSize&&(b.style.fontSize=""!=a.style.fontSize?a.style.fontSize:this._getDefaultFontSize()),
this._isEmptyString(b.textContent||b.innerText)&&this.currentFontSize&&(b.style.fontSize=this.currentFontSize)),
c=!1;for(var g=0;g<b.childNodes.length;++g)if(3==b.childNodes[g].nodeType&&!this._isEmptyString(b.childNodes[g].nodeValue)){
c=!0;break}c&&b.style&&""!=b.style.fontSize&&(null==d||parseInt(b.style.fontSize)>parseInt(d.style.fontSize))&&(d=b),
e=this._getLargestFontSize(b),null!=e&&(!c&&b.style&&(b.style.fontSize=""!=e.style.fontSize?e.style.fontSize:this._getDefaultFontSize()),
(null==d||parseInt(e.style.fontSize)>parseInt(d.style.fontSize))&&(d=e))}return d},_getFirstChar:function(a){
for(var b=null,c=0;c<a.childNodes.length;++c)return b=a.childNodes[c],3!=b.nodeType||this._isEmptyString(b.nodeValue)?this._getFirstChar(b):b.parentNode;
return null},_isEmptyString:function(a){var b=!0;a=$S(a).trim().toString();for(var c=0;c<a.length;++c)if("​"!=a[c]&&"⁠"!=a[c]){
b=!1;break}return b},$AFTER_SET_FONTSIZE:function(a){var b=this.oApp.getSelection(),c=b.startContainer;
c=this._getParentListNode(c),c&&(this.currentFontSize=a,"OL"==c.tagName?this.$ON_APPLY_ORDEREDLIST(this.selectedOrderedListStyle,!1,c,!0,!1):"UL"==c.tagName&&this.$ON_APPLY_UNORDEREDLIST(this.selectedUnorderedListStyle,!1,c,!0,!1),
this.currentFontSize=null,this.oApp.exec("RECORD_UNDO_AFTER_ACTION",["FONT STYLE",{bMustBlockContainer:!0
}]))}}),nhn.husky.HuskyCore.addLoadedFile("hp_SE_SpellCheckManager.js"),nhn.husky.SpellCheckManager=jindo.$Class({
$init:function(){this.sSpellCheckerURL=nhn.husky.SE2M_Configuration.SpellChecker.sSpellCheckerURL,this.sWordSuggestionURL=nhn.husky.SE2M_Configuration.SpellChecker.sWordSuggestionURL,
this.bUseXHR=!!nhn.husky.SE2M_Configuration.SpellChecker.bUseXHR,this.bSpellCheckMode=!1,this.bWordSuggetMode=!1;
},ajaxSpellCheck:function(a,b){this.bSpellCheckMode=!0,this.bWordSuggetMode=!1;var c={input:a};this._sendAjaxRequest(c,b);
},ajaxWordSuggestion:function(a,b){this.bSpellCheckMode=!1,this.bWordSuggetMode=!0;var c={errata:a};this._sendAjaxRequest(c,b);
},_funcCallbackWrapper:function(a,b,c){"undefined"!=c.text()?b(c):this._sendAjaxRequest(a,b)},_sendAjaxRequest:function(a,b){
var c,d,e=jindo.$Fn(this._funcCallbackWrapper,this).bind(a,b);this.bSpellCheckMode?d=this.sSpellCheckerURL:this.bWordSuggetMode&&(d=this.sWordSuggestionURL),
c=this.bUseXHR?new jindo.$Ajax(d,{type:"xhr",onload:e}):new jindo.$Ajax(d,{type:"flash",sendheader:!1,
onload:e}),c.request(a)}}),nhn.husky.SE2M_Emoticon=jindo.$Class({name:"SE2M_Emoticon",$ON_MSG_APP_READY:function(){
var a=nhn.husky.SE2M_Configuration.SE2M_Emoticon;a&&(this.sImgBaseURL=a.sImgBaseURL||"img/emoticon/"),
this.oApp.exec("REGISTER_UI_EVENT",["emoticon","click","TOGGLE_EMOTICON_LAYER"]),this.oApp.registerLazyMessage(["TOGGLE_EMOTICON_LAYER"],["hp_SE2M_Emoticon$Lazy.js"]);
}}),nhn.husky.SE2M_EmoticonList=[],nhn.husky.SE2M_EmoticonAltList=[],nhn.husky.SE2M_EmoticonData=jindo.$Class({
name:"SE2M_EmoticonData",sLang:"ko_KR",$init:function(a){a&&""!=a&&(this.sLang=a)},$ON_SET_EMOTICON_LIST:function(){
switch(this.sLang){case"ja_JP":case"zh_CN":case"zh_TW":case"en_US":nhn.husky.SE2M_EmoticonList[0]="1_01.gif 1_02.gif 1_03.gif 1_04.gif 1_05.gif 1_06.gif 1_07.gif 1_08.gif 1_09.gif 1_10.gif 1_11.gif 1_12.gif 1_13.gif 1_14.gif 1_15.gif 1_16.gif 1_17.gif 1_18.gif 1_19.gif 1_20.gif 1_21.gif 1_22.gif 1_23.gif 1_24.gif 1_25.gif 1_26.gif 1_27.gif 1_28.gif 1_29.gif 1_30.gif 1_31.gif 1_32.gif 1_33.gif 1_34.gif 1_35.gif 1_36.gif 1_37.gif 1_38.gif 1_39.gif 1_40.gif 1_41.gif 1_42.gif 1_43.gif 1_44.gif 1_45.gif 1_46.gif 1_47.gif 1_48.gif 1_49.gif 1_50.gif".split(" "),
nhn.husky.SE2M_EmoticonAltList[0]=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
nhn.husky.SE2M_EmoticonList[1]="2_01.gif 2_02.gif 2_03.gif 2_04.gif 2_05.gif 2_06.gif 2_07.gif 2_08.gif 2_09.gif 2_10.gif 2_11.gif 2_12.gif 2_13.gif 2_14.gif 2_15.gif 2_16.gif 2_17.gif 2_18.gif 2_19.gif 2_20.gif 2_21.gif 2_22.gif 2_23.gif 2_24.gif 2_25.gif 2_26.gif 2_27.gif 2_28.gif 2_29.gif 2_30.gif 2_31.gif 2_32.gif 2_33.gif 2_34.gif 2_35.gif 2_36.gif 2_37.gif 2_38.gif 2_39.gif 2_40.gif 2_41.gif 2_42.gif 2_43.gif 2_44.gif 2_45.gif 2_46.gif 2_47.gif 2_48.gif 2_49.gif 2_50.gif".split(" "),
nhn.husky.SE2M_EmoticonAltList[1]=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
nhn.husky.SE2M_EmoticonList[2]="3_01.gif 3_02.gif 3_03.gif 3_05.gif 3_06.gif 3_07.gif 3_08.gif 3_09.gif 3_10.gif 3_11.gif 3_12.gif 3_13.gif 3_14.gif 3_15.gif 3_16.gif 3_17.gif 3_18.gif 3_19.gif 3_20.gif 3_21.gif 3_22.gif 3_23.gif 3_24.gif 3_25.gif 3_26.gif 3_27.gif 3_28.gif 3_29.gif 3_30.gif 3_31.gif 3_32.gif 3_33.gif 3_34.gif 3_35.gif 3_36.gif 3_37.gif 3_38.gif 3_39.gif 3_40.gif 3_41.gif 3_42.gif 3_43.gif 3_44.gif 3_45.gif 3_46.gif 3_47.gif 3_48.gif".split(" "),
nhn.husky.SE2M_EmoticonAltList[2]=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
nhn.husky.SE2M_EmoticonList[3]="4_01.gif 4_02.gif 4_03.gif 4_04.gif 4_06.gif 4_07.gif 4_08.gif 4_09.gif 4_10.gif 4_11.gif 4_12.gif 4_13.gif 4_14.gif 4_15.gif 4_16.gif 4_17.gif 4_18.gif 4_19.gif 4_20.gif 4_21.gif 4_22.gif 4_23.gif 4_24.gif 4_25.gif 4_26.gif 4_27.gif 4_28.gif 4_29.gif 4_30.gif 4_31.gif 4_32.gif 4_33.gif 4_34.gif 4_35.gif 4_36.gif 4_37.gif 4_38.gif 4_39.gif 4_40.gif 4_41.gif 4_42.gif".split(" "),
nhn.husky.SE2M_EmoticonAltList[3]=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
nhn.husky.SE2M_EmoticonList[4]="5_01.gif 5_02.gif 5_03.gif 5_04.gif 5_05.gif 5_06.gif 5_17.gif 5_23.gif 5_24.gif 5_26.gif 5_39.gif 5_43.gif 5_44.gif 5_45.gif 5_46.gif 5_47.gif 5_48.gif 5_49.gif 5_50.gif".split(" "),
nhn.husky.SE2M_EmoticonAltList[4]=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
break;case"ko_KR":default:nhn.husky.SE2M_EmoticonList[0]="1_01.gif 1_02.gif 1_03.gif 1_04.gif 1_05.gif 1_06.gif 1_07.gif 1_08.gif 1_09.gif 1_10.gif 1_11.gif 1_12.gif 1_13.gif 1_14.gif 1_15.gif 1_16.gif 1_17.gif 1_18.gif 1_19.gif 1_20.gif 1_21.gif 1_22.gif 1_23.gif 1_24.gif 1_25.gif 1_26.gif 1_27.gif 1_28.gif 1_29.gif 1_30.gif 1_31.gif 1_32.gif 1_33.gif 1_34.gif 1_35.gif 1_36.gif 1_37.gif 1_38.gif 1_39.gif 1_40.gif 1_41.gif 1_42.gif 1_43.gif 1_44.gif 1_45.gif 1_46.gif 1_47.gif 1_48.gif 1_49.gif 1_50.gif".split(" "),
nhn.husky.SE2M_EmoticonAltList[0]="꿈뻑꿈뻑|깜찍|좋아|눈물|미소|미소 동글이|좋아 동글이|화남 동글이|엉엉 동글이|신남 동글이|미소 남자|사랑 남자|울음 남자|화남 남자|놀람 남자|미소 여자|사랑 여자|울음 여자|화남 여자|놀람 여자|무표정 남자아기|웃음 남자아기|울음 남자아기|사랑 남자아기|땀삐질 남자아기|무표정 여자아기|웃음 여자아기|울음 여자아기|땀삐질 여자아기|놀람 여자아기|웃음 노란동글이|미소 노란동글이|화남 노란동글이|시무룩 노란동글이|화남 노란 동글이|음흉 노란동글이|엉엉 회색동글이|놀람 분홍동글이|음흉 파란동글이|박장대소 분홍동글|무표정 음침동글이|웃음 음침동글이|울음 음침동글이|화남 음침동글이|땀삐질 음침동글이|호탕 유령|흑흑 유령|식은땀 유령|울음 유령|놀람 유령".split("|"),
nhn.husky.SE2M_EmoticonList[1]="2_01.gif 2_02.gif 2_03.gif 2_04.gif 2_05.gif 2_06.gif 2_07.gif 2_08.gif 2_09.gif 2_10.gif 2_11.gif 2_12.gif 2_13.gif 2_14.gif 2_15.gif 2_16.gif 2_17.gif 2_18.gif 2_19.gif 2_20.gif 2_21.gif 2_22.gif 2_23.gif 2_24.gif 2_25.gif 2_26.gif 2_27.gif 2_28.gif 2_29.gif 2_30.gif 2_31.gif 2_32.gif 2_33.gif 2_34.gif 2_35.gif 2_36.gif 2_37.gif 2_38.gif 2_39.gif 2_40.gif 2_41.gif 2_42.gif 2_43.gif 2_44.gif 2_45.gif 2_46.gif 2_47.gif 2_48.gif 2_49.gif 2_50.gif".split(" "),
nhn.husky.SE2M_EmoticonAltList[1]="코알라|양|소|강아지1|강아지2|원숭이|문어|너구리|공룡|까마귀|펭귄|하마|돼지|여우|젖소|토끼|호랑이|개구리|거북이|팬더곰|늑대|게|참새|개미|돌고래|메뚜기|새우|고래|상어|고양이뒷모습|자는 고양이|새|애벌레|코끼리|토마토|사과|귤|버섯|감자|코스모스|단풍잎|메론|인삼|호박|꽃잎|장미꽃|클로버|고추|당근|완두콩".split("|"),
nhn.husky.SE2M_EmoticonList[2]="3_01.gif 3_02.gif 3_03.gif 3_04.gif 3_05.gif 3_06.gif 3_07.gif 3_08.gif 3_09.gif 3_10.gif 3_11.gif 3_12.gif 3_13.gif 3_14.gif 3_15.gif 3_16.gif 3_17.gif 3_18.gif 3_19.gif 3_20.gif 3_21.gif 3_22.gif 3_23.gif 3_24.gif 3_25.gif 3_26.gif 3_27.gif 3_28.gif 3_29.gif 3_30.gif 3_31.gif 3_32.gif 3_33.gif 3_34.gif 3_35.gif 3_36.gif 3_37.gif 3_38.gif 3_39.gif 3_40.gif 3_41.gif 3_42.gif 3_43.gif 3_44.gif 3_45.gif 3_46.gif 3_47.gif 3_48.gif".split(" "),
nhn.husky.SE2M_EmoticonAltList[2]="의자|전화기|탁상시계|태극기|텔레비전|구름|눈오는 구름|우산|별|하트|가위|색연필|물감|성냥|소화기|담배불|모닥불|촛불|자물쇠|책|손목시계|필름|카메라|밴드|선물상자|망치|리본|양말|필름카메라|폭탄|엄지손가락 싫어요|엄지손가락 좋아요|거미줄|두루말이휴지|트로피|야구공|축구공|배구공|농구공|북|탬버린|바이올린|기타|피아노|이어폰|mp3플레이어|라디오|LP플레이어| | ".split("|"),
nhn.husky.SE2M_EmoticonList[3]="4_01.gif 4_02.gif 4_03.gif 4_04.gif 4_05.gif 4_06.gif 4_07.gif 4_08.gif 4_09.gif 4_10.gif 4_11.gif 4_12.gif 4_13.gif 4_14.gif 4_15.gif 4_16.gif 4_17.gif 4_18.gif 4_19.gif 4_20.gif 4_21.gif 4_22.gif 4_23.gif 4_24.gif 4_25.gif 4_26.gif 4_27.gif 4_28.gif 4_29.gif 4_30.gif 4_31.gif 4_32.gif 4_33.gif 4_34.gif 4_35.gif 4_36.gif 4_37.gif 4_38.gif 4_39.gif 4_40.gif 4_41.gif 4_42.gif".split(" "),
nhn.husky.SE2M_EmoticonAltList[3]="와인잔|우유|맥주캔|맥주잔|소주병|요쿠르트|바나나우유|과자|비스킷|식빵|삼각김밥|커피잔|케익|닭다리|키위|복숭아|햄버거|감자튀김|계란말이초밥|생선초밥|짬뽕|짜장면|통닭|사탕|도넛|찐빵|샌드위치|김밥|냄비|포크스푼|자동차|오토바이|헬멧|스쿠터|STOP|여자화장실표시|남자화장실표시|유턴표시|버스정류장표시|OTL금지|19금|금연| | | | | | | | |".split("|"),
nhn.husky.SE2M_EmoticonList[4]="5_01.gif 5_02.gif 5_03.gif 5_04.gif 5_05.gif 5_06.gif 5_07.gif 5_08.gif 5_09.gif 5_10.gif 5_11.gif 5_12.gif 5_13.gif 5_14.gif 5_15.gif 5_16.gif 5_17.gif 5_18.gif 5_19.gif 5_20.gif 5_21.gif 5_22.gif 5_23.gif 5_24.gif 5_25.gif 5_26.gif 5_27.gif 5_28.gif 5_29.gif 5_30.gif 5_31.gif 5_32.gif 5_33.gif 5_34.gif 5_35.gif 5_36.gif 5_37.gif 5_38.gif 5_39.gif 5_40.gif 5_41.gif 5_42.gif 5_43.gif 5_44.gif 5_45.gif 5_46.gif 5_47.gif 5_48.gif 5_49.gif 5_50.gif".split(" "),
nhn.husky.SE2M_EmoticonAltList[4]="LOVE|GO|GOOD|OK|YES|NO|쳇|흥!|웩|즐|안녕|헤헤|ㅎㅎㅎ|ㅋㅋㅋ|앗싸|짱이야|음표|우씨|젠장|유후|바보|최고|NO.1|OTL|부끄부끄|I Am|대박|만세|추카|훗|뜨아|워워워|웃자|화이팅|아자아자|힘내3|버럭|헐|OTL|굿|뷁|지름신|@_@|>ㅂ<|O_O|+ㅁ+|-_-+|ㅠ_ㅠ|-_-|=_=".split("|");
}}}),nhn.husky.SE2M_FindReplacePlugin=jindo.$Class({name:"SE2M_FindReplacePlugin",oEditingWindow:null,
oFindReplace:null,bFindMode:!0,bLayerShown:!1,$init:function(){this.nDefaultTop=20},$ON_MSG_APP_READY:function(){
this.oEditingWindow=this.oApp.getWYSIWYGWindow(),jindo.$Agent().os().mac?(this.oApp.exec("REGISTER_HOTKEY",["meta+f","SHOW_FIND_LAYER",[]]),
this.oApp.exec("REGISTER_HOTKEY",["meta+h","SHOW_REPLACE_LAYER",[]])):(this.oApp.exec("REGISTER_HOTKEY",["ctrl+f","SHOW_FIND_LAYER",[]]),
this.oApp.exec("REGISTER_HOTKEY",["ctrl+h","SHOW_REPLACE_LAYER",[]])),this.oApp.exec("REGISTER_UI_EVENT",["findAndReplace","click","TOGGLE_FIND_REPLACE_LAYER"]),
this.oApp.registerLazyMessage(["TOGGLE_FIND_REPLACE_LAYER","SHOW_FIND_LAYER","SHOW_REPLACE_LAYER","SHOW_FIND_REPLACE_LAYER"],["hp_SE2M_FindReplacePlugin$Lazy.js","N_FindReplace.js"]);
},$ON_SHOW_ACTIVE_LAYER:function(){this.oApp.exec("HIDE_DIALOG_LAYER",[this.elDropdownLayer])}}),nhn.husky.SE2M_SCharacter=jindo.$Class({
name:"SE2M_SCharacter",$ON_MSG_APP_READY:function(){this.oApp.exec("REGISTER_UI_EVENT",["sCharacter","click","TOGGLE_SCHARACTER_LAYER"]),
this.oApp.registerLazyMessage(["TOGGLE_SCHARACTER_LAYER"],["hp_SE2M_SCharacter$Lazy.js"])}}),nhn.husky.SE2M_SpellChecker=jindo.$Class({
name:"SE2M_SpellChecker",sUnderlineClassName:"se2_check_spell",sNewSpanMarker:"_sm2_spchk_tmp_span",
sOriginalWordTag:"_sm2_spchk",sTmpHrefTag:"_sm2_spchk_href",sSuggestionLoadingClassName:"loading",sNoSuggestionClassName:"nodata",
bSpellCheckMode:!1,$init:function(){this.nMaxSuggestions=nhn.husky.SE2M_Configuration.SpellChecker.nMaxSuggestions||100,
this.bKeepSuggestionLayerInEditingArea=nhn.husky.SE2M_Configuration.SpellChecker.bKeepSuggestionLayerInEditingArea||!1,
this.bUseXHR=!!nhn.husky.SE2M_Configuration.SpellChecker.bUseXHR},$ON_REGISTER_CONVERTERS:function(){
this.oApp.exec("ADD_CONVERTER_DOM",["WYSIWYG_TO_IR",jindo.$Fn(function(a){this.bSpellCheckMode&&this._removeSpellCheckMarkup(a);
},this).bind()])},$ON_MSG_APP_READY:function(){this.oApp.exec("REGISTER_UI_EVENT",["spellCheck","click","TOGGLE_SPELLCHECK"]),
this.oApp.registerLazyMessage(["TOGGLE_SPELLCHECK"],["hp_SE2M_SpellChecker$Lazy.js","hp_SE_SpellCheckManager.js","N_FindReplace.js"]);
}}),nhn.husky.SE2M_StyleRemover=jindo.$Class({name:"SE2M_StyleRemover",$ON_MSG_APP_READY:function(){
this.oApp.exec("REGISTER_UI_EVENT",["styleRemover","click","CHOOSE_REMOVE_STYLE",[]])},$LOCAL_BEFORE_FIRST:function(){
this.oHuskyRange=this.oApp.getEmptySelection(),this._document=this.oHuskyRange._document},$ON_CHOOSE_REMOVE_STYLE:function(){
var a=!1,b={};this.oApp.exec("IS_SELECTED_TD_BLOCK",["bIsSelectedTd",b]),a=b.bIsSelectedTd,this.oApp.exec("RECORD_UNDO_BEFORE_ACTION",["REMOVE STYLE",{
bMustBlockElement:!0}]),a?this.oApp.exec("REMOVE_STYLE_IN_BLOCK",[]):this.oApp.exec("REMOVE_STYLE",[]),
this.oApp.exec("RECORD_UNDO_AFTER_ACTION",["REMOVE STYLE",{bMustBlockElement:!0}]),this.oApp.exec("MSG_NOTIFY_CLICKCR",["noeffect"]);
},$ON_REMOVE_STYLE_IN_BLOCK:function(){var a={};this.oSelection=this.oApp.getSelection(),this.oApp.exec("GET_SELECTED_TD_BLOCK",["aTdCells",a]);
for(var b=a.aTdCells,c=0;c<b.length;c++)this.oSelection.selectNodeContents(b[c]),this.oSelection.select(),
this.oApp.exec("REMOVE_STYLE",[])},$ON_REMOVE_STYLE:function(a){if(a&&a.commonAncestorContainer||(a=this.oApp.getSelection()),
!a.collapsed){a.expandBothEnds();var b=a.placeStringBookmark(),c=a.getNodes(!0);this._removeStyle(c),
a.moveToBookmark(b);for(var c=a.getNodes(!0),d=0;d<c.length;d++){var e=c[d];e.style&&"BR"!=e.tagName&&"TD"!=e.tagName&&"TR"!=e.tagName&&"TBODY"!=e.tagName&&"TABLE"!=e.tagName&&(e.removeAttribute("align"),
e.removeAttribute("style"),"inline"!=jindo.$Element(e).css("display")||"IMG"==e.tagName||"IFRAME"==e.tagName||e.firstChild&&!a._isBlankTextNode(e.firstChild)||e.parentNode.removeChild(e));
}a.moveToBookmark(b),"TBODY"===a.commonAncestorContainer.tagName&&(a=this.oApp.getSelection()),a.select();
for(var f=this._document.getElementById(a.HUSKY_BOOMARK_START_ID_PREFIX+b);f;){for(oParent=nhn.DOMFix.parentNode(f),
oParent.removeChild(f);oParent&&(!oParent.firstChild||!oParent.firstChild.nextSibling&&a._isBlankTextNode(oParent.firstChild));){
var g=oParent.parentNode;oParent.parentNode.removeChild(oParent),oParent=g}f=this._document.getElementById(a.HUSKY_BOOMARK_START_ID_PREFIX+b);
}for(var f=this._document.getElementById(a.HUSKY_BOOMARK_END_ID_PREFIX+b);f;){for(oParent=nhn.DOMFix.parentNode(f),
oParent.removeChild(f);oParent&&(!oParent.firstChild||!oParent.firstChild.nextSibling&&a._isBlankTextNode(oParent.firstChild));){
var g=oParent.parentNode;oParent.parentNode.removeChild(oParent),oParent=g}f=this._document.getElementById(a.HUSKY_BOOMARK_END_ID_PREFIX+b);
}this.oApp.exec("CHECK_STYLE_CHANGE")}},$ON_REMOVE_STYLE2:function(a){this._removeStyle(a)},$ON_REMOVE_STYLE_AND_PASTE_HTML:function(a,b){
var c,d,e,f,g;if(c=jindo.$Agent().navigator(),!a)return!1;"WYSIWYG"!=this.oApp.getEditingMode()&&this.oApp.exec("CHANGE_EDITING_MODE",["WYSIWYG"]),
b||this.oApp.exec("RECORD_UNDO_BEFORE_ACTION",["REMOVE STYLE AND PASTE HTML"]),g=this.oApp.getSelection(),
g.deleteContents(),d=this.oApp.getWYSIWYGDocument().createElement("DIV"),g.insertNode(d),c.webkit&&(d.innerHTML="&nbsp;"),
g.selectNode(d),this.oApp.exec("REMOVE_STYLE",[g]),c.ie?a+="<p>&nbsp;</p>":c.firefox&&(a+="<p><br></p>"),
g.selectNode(d),g.pasteHTML(a),f=g.getNodes()||[];for(var h=0;h<f.length;h++)if(f[h].tagName&&"td"==f[h].tagName.toLowerCase()){
e=f[h],g.selectNodeContents(e.firstChild||e),g.collapseToStart(),g.select();break}g.collapseToEnd(),
g.select(),this.oApp.exec("FOCUS"),d||d.parentNode.removeChild(d),b||this.oApp.exec("RECORD_UNDO_AFTER_ACTION",["REMOVE STYLE AND PASTE HTML"]);
},_removeStyle:function(a){for(var b=jindo.$A(a),c=0;c<a.length;c++){var d=a[c];if(d&&d.parentNode&&d.parentNode.tagName){
var e=!1;if("inline"==jindo.$Element(d.parentNode).css("display")){var f=d.parentNode;if(d.firstChild){
if(-1==b.indexOf(this.oHuskyRange._getVeryLastRealChild(d)))continue;if(-1==b.indexOf(this.oHuskyRange._getVeryFirstRealChild(d)))continue;
}if(d.nextSibling){if(-1==b.indexOf(this._getVeryLast(d.nextSibling)))if(c--,-1!=b.indexOf(this._getVeryFirst(d.parentNode))){
for(var g=d,h=f;g;){var i=g.previousSibling;if(f.parentNode.insertBefore(g,h),h=g,!i)break;g=i}0===f.childNodes.length&&f.parentNode.removeChild(f);
}else{if(e){c++;continue}var j=this._document.createElement("SPAN"),g=d;for(f.insertBefore(j,g.nextSibling);g;){
var i=g.previousSibling;if(j.insertBefore(g,j.firstChild),!i)break;if(-1==b.indexOf(this._getVeryFirst(i)))break;
g=i}for(this._splitAndAppendAtTop(j);j.firstChild;)j.parentNode.insertBefore(j.firstChild,j);j.parentNode.removeChild(j);
}}else{c--;for(var g=d;g;){var i=g.previousSibling;if(f.parentNode.insertBefore(g,f.nextSibling),!i)break;
if(-1==b.indexOf(this._getVeryFirst(i)))break;g=i}0===f.childNodes.length&&f.parentNode.removeChild(f);
}}}}},_splitAndAppendAtTop:function(a){for(var b=a,c=b,d=c;"inline"==jindo.$Element(c.parentNode).css("display");){
for(var e=c.parentNode.cloneNode(!1);c.nextSibling;)e.appendChild(c.nextSibling);c=c.parentNode,e.insertBefore(d,e.firstChild),
d=e}oTop=c.parentNode,oTop.insertBefore(b,c.nextSibling),oTop.insertBefore(d,b.nextSibling)},_getVeryFirst:function(a){
return a?a.firstChild?this.oHuskyRange._getVeryFirstRealChild(a):a:null},_getVeryLast:function(a){return a?a.lastChild?this.oHuskyRange._getVeryLastRealChild(a):a:null;
}}),nhn.husky.SE2M_TableBlockStyler=jindo.$Class({name:"SE2M_TableBlockStyler",nSelectedTD:0,htSelectedTD:{},
aTdRange:[],$init:function(){},$LOCAL_BEFORE_ALL:function(){return"WYSIWYG"==this.oApp.getEditingMode();
},$ON_MSG_APP_READY:function(){this.oDocument=this.oApp.getWYSIWYGDocument()},$ON_EVENT_EDITING_AREA_MOUSEUP:function(){
"WYSIWYG"==this.oApp.getEditingMode()&&this.setTdBlock()},$ON_IS_SELECTED_TD_BLOCK:function(a,b){return this.nSelectedTD>0?(b[a]=!0,
b[a]):(b[a]=!1,b[a])},$ON_GET_SELECTED_TD_BLOCK:function(a,b){b[a]=this.htSelectedTD.aTdCells},setTdBlock:function(){
this.oApp.exec("GET_SELECTED_CELLS",["aTdCells",this.htSelectedTD]);var a=this.htSelectedTD.aTdCells;
a&&(this.nSelectedTD=a.length)},$ON_DELETE_BLOCK_CONTENTS:function(){var a,b,c,d=this;this.setTdBlock();
for(var e=0;e<this.nSelectedTD;e++)jindo.$Element(this.htSelectedTD.aTdCells[e]).child(function(e){a=jindo.$Element(e._element.parentNode),
a.remove(e),b=d.oDocument.createElement("P"),c=jindo.$Agent().navigator().firefox?d.oDocument.createElement("BR"):d.oDocument.createTextNode(" "),
b.appendChild(c),a.append(b)},1)}}),nhn.husky.SE2M_TableCreator=jindo.$Class({name:"SE2M_TableCreator",
_sSETblClass:"__se_tbl",nRows:3,nColumns:4,nBorderSize:1,sBorderColor:"#000000",sBGColor:"#000000",nBorderStyleIdx:3,
nTableStyleIdx:1,nMinRows:1,nMaxRows:20,nMinColumns:1,nMaxColumns:20,nMinBorderWidth:1,nMaxBorderWidth:10,
rxLastDigits:null,sReEditGuideMsg_table:null,oSelection:null,$ON_MSG_APP_READY:function(){this.sReEditGuideMsg_table=this.oApp.$MSG("SE2M_ReEditAction.reEditGuideMsg.table"),
this.oApp.exec("REGISTER_UI_EVENT",["table","click","TOGGLE_TABLE_LAYER"]),this.oApp.registerLazyMessage(["TOGGLE_TABLE_LAYER"],["hp_SE2M_TableCreator$Lazy.js"]);
},$ON_REGISTER_CONVERTERS:function(){this.oApp.exec("ADD_CONVERTER_DOM",["IR_TO_DB",jindo.$Fn(this.irToDbDOM,this).bind()]),
this.oApp.exec("ADD_CONVERTER_DOM",["DB_TO_IR",jindo.$Fn(this.dbToIrDOM,this).bind()])},irToDbDOM:function(a){
var b=[],c=jindo.$$("table[class=__se_tbl]",a,{oneTimeOffCache:!0});if(jindo.$A(c).forEach(function(a){
jindo.$Element(a).attr("attr_no_border_tbl")&&b.push(a)},this),!(b.length<1))for(var d,e=[],f=0,g=b.length;g>f;f++)d=b[f],
jindo.$Element(d).css({border:"",borderLeft:"",borderBottom:""}),jindo.$Element(d).attr({border:0,cellpadding:1
}),e=jindo.$$("tbody>tr>td",d),jindo.$A(e).forEach(function(a){jindo.$Element(a).css({border:"",borderTop:"",
borderRight:""})})},dbToIrDOM:function(a){var b=[],c=jindo.$$("table[class=__se_tbl]",a,{oneTimeOffCache:!0
});if(jindo.$A(c).forEach(function(a){jindo.$Element(a).attr("attr_no_border_tbl")&&b.push(a)},this),
!(b.length<1))for(var d,e=[],f=0,g=b.length;g>f;f++)d=b[f],jindo.$Element(d).css({border:"1px dashed #c7c7c7",
borderLeft:0,borderBottom:0}),jindo.$Element(d).attr({border:1,cellpadding:0}),e=jindo.$$("tbody>tr>td",d),
jindo.$A(e).forEach(function(a){jindo.$Element(a).css({border:"1px dashed #c7c7c7",borderTop:0,borderRight:0
})})}}),nhn.husky.SE2M_TableEditor=jindo.$Class({name:"SE2M_TableEditor",_sSETblClass:"__se_tbl",_sSEReviewTblClass:"__se_tbl_review",
STATUS:{S_0:1,MOUSEDOWN_CELL:2,CELL_SELECTING:3,CELL_SELECTED:4,MOUSEOVER_BORDER:5,MOUSEDOWN_BORDER:6
},CELL_SELECTION_CLASS:"se2_te_selection",MIN_CELL_WIDTH:5,MIN_CELL_HEIGHT:5,TMP_BGC_ATTR:"_se2_tmp_te_bgc",
TMP_BGIMG_ATTR:"_se2_tmp_te_bg_img",ATTR_TBL_TEMPLATE:"_se2_tbl_template",nStatus:1,nMouseEventsStatus:0,
aSelectedCells:[],$ON_REGISTER_CONVERTERS:function(){this.oApp.exec("ADD_CONVERTER_DOM",["WYSIWYG_TO_IR",jindo.$Fn(function(a){
if(!(this.aSelectedCells.length<1))for(var b,c=["TD","TH"],d=0;d<c.length;d++){b=a.getElementsByTagName(c[d]);
for(var e=0,f=b.length;f>e;e++)b[e].className&&(b[e].className=b[e].className.replace(this.CELL_SELECTION_CLASS,""),
b[e].getAttribute(this.TMP_BGC_ATTR)?(b[e].style.backgroundColor=b[e].getAttribute(this.TMP_BGC_ATTR),
b[e].removeAttribute(this.TMP_BGC_ATTR)):b[e].getAttribute(this.TMP_BGIMG_ATTR)&&(jindo.$Element(this.aCells[e]).css("backgroundImage",b[e].getAttribute(this.TMP_BGIMG_ATTR)),
b[e].removeAttribute(this.TMP_BGIMG_ATTR)))}},this).bind()])},$ON_MSG_APP_READY:function(){this.oApp.registerLazyMessage(["EVENT_EDITING_AREA_MOUSEMOVE","STYLE_TABLE"],["hp_SE2M_TableEditor$Lazy.js","SE2M_TableTemplate.js"]);
}}),nhn.husky.HuskyCore.addLoadedFile("N_FindReplace.js"),nhn.FindReplace=jindo.$Class({sKeyword:"",
window:null,document:null,bBrowserSupported:!1,_bLGDevice:!1,bEOC:!1,$init:function(a){if(this.sInlineContainer="SPAN|B|U|I|S|STRIKE",
this.rxInlineContainer=new RegExp("^("+this.sInlineContainer+")$"),this.window=a,this.document=this.window.document,
this.document.domain!=this.document.location.hostname){var b=jindo.$Agent(),c=b.navigator();if(c.firefox&&c.version<3)return this.bBrowserSupported=!1,
void(this.find=function(){return 3})}this._bLGDevice=navigator.userAgent.indexOf("LG-")>-1,this.bBrowserSupported=!0;
},find:function(a,b,c,d){var e;return this._bLGDevice||this.window.focus(),a?(this.bEOC=!1,(e=this.findNext(a,b,c,d))?0:(this.bEOC=!0,
e=this.findNew(a,b,c,d),e?0:1)):2},findNew:function(a,b,c,d){return this.findReset(),this.findNext(a,b,c,d);
},findNext:function(a,b,c,d){var e;if(b=b||!1,d=d||!1,c=c||!1,this.window.find){var f=!1;return"false"===this.document.body.contentEditable?window.find(a,b,c,f,d):this.window.find(a,b,c,f,d);
}if(this.document.body.createTextRange)try{var g=0;return c&&(g+=1),d&&(g+=2),b&&(g+=4),this.window.focus(),
this.document.selection?(this._range=this.document.selection.createRangeCollection().item(0),this._range.collapse(!1)):this._range?this._range.collapse(!1):this._range=this.document.body.createTextRange(),
e=this._range.findText(a,1,g),this._range.select(),e}catch(h){return!1}return!1},findReset:function(){
if(this.window.find){return void this.window.getSelection().removeAllRanges()}this.document.body.createTextRange&&(this._range=this.document.body.createTextRange(),
this._range.collapse(!0),this._range.select())},replace:function(a,b,c,d,e){return this._replace(a,b,c,d,e);
},_replace:function(a,b,c,d,e,f){if(!a)return 4;f=f||new nhn.HuskyRange(this.window),f.setFromSelection(),
c=c||!1;var g,h=f.toString();return(g=c?h==a:h.toLowerCase()==a.toLowerCase())?("function"==typeof b?f=b(f):f.pasteText(b),
f.select(),this.find(a,c,d,e)):this.find(a,c,d,e)+2},replaceAll:function(a,b,c,d){if(!a)return-1;var e,f=!1,g=0,h=this.window;
if(0!==this.find(a,c,f,d))return g;var i=new nhn.HuskyRange(this.window);i.setFromSelection(),i.collapseToStart();
var j=this.window.document.createElement("SPAN");j.innerHTML=unescape("%uFEFF"),i.insertNode(j),i.select();
var k=i.placeStringBookmark();for(this.bEOC=!1;!this.bEOC;)e=this._replace(a,b,c,f,d,i),(0==e||1==e)&&g++;
var l=function(){var a=new nhn.HuskyRange(h);a.setFromSelection(),i.moveToBookmark(k);var b=i.compareBoundaryPoints(nhn.W3CDOMRange.START_TO_END,a);
return 1==b?!1:!0};for(e=0,this.bEOC=!1;!l()&&0==e&&!this.bEOC;)e=this._replace(a,b,c,f,d,i),(0==e||1==e)&&g++;
return i.moveToBookmark(k),i.deleteContents(),i.removeStringBookmark(k),setTimeout(function(){j.parentNode.removeChild(j);
},0),g},_isBlankTextNode:function(a){return 3==a.nodeType&&""==a.nodeValue?!0:!1},_getNextNode:function(a,b){
if(!a||"BODY"==a.tagName)return{elNextNode:null,bDisconnected:!1};if(a.nextSibling){for(a=a.nextSibling;a.firstChild;)a.tagName&&!this.rxInlineContainer.test(a.tagName)&&(b=!0),
a=a.firstChild;return{elNextNode:a,bDisconnected:b}}return this._getNextNode(nhn.DOMFix.parentNode(a),b);
},_getNextTextNode:function(a,b){for(var c,a;;)if(c=this._getNextNode(a,b),a=c.elNextNode,b=c.bDisconnected,
a&&3!=a.nodeType&&!this.rxInlineContainer.test(a.tagName)&&(b=!0),!a||3==a.nodeType&&!this._isBlankTextNode(a))break;
return{elNextText:a,bDisconnected:b}},_getFirstTextNode:function(){for(var a=this.document.body.firstChild;a&&a.firstChild;)a=a.firstChild;
if(!a)return null;if(3!=a.nodeType||this._isBlankTextNode(a)){var b=this._getNextTextNode(a,!1);a=b.elNextText;
}return a},_addToTextMap:function(a,b,c,d){for(var e=b[d].length,f=0,g=a.nodeValue.length;g>f;f++)c[d][e+f]=[a,f];
b[d]+=a.nodeValue},_createTextMap:function(){for(var a=[],b=[],c=-1,d=this._getFirstTextNode(),e={elNextText:d,
bDisconnected:!0};d;)e.bDisconnected&&(c++,a[c]="",b[c]=[]),this._addToTextMap(e.elNextText,a,b,c),e=this._getNextTextNode(d,!1),
d=e.elNextText;return{aTexts:a,aElTexts:b}},replaceAll_js:function(a,b,c,d){try{for(var e=(new Date,
this._createTextMap()),f=(new Date,e.aTexts),g=e.aElTexts,h=0,i=a.length,j=0,k=f.length;k>j;j++)for(var l=f[j],m=l.length-i;m>=0;m--){
var n=l.substring(m,m+i);if(!(d&&m>0&&l.charAt(m-1).match(/[a-zA-Z가-힣]/))&&n==a){h++;var o,p,q=new nhn.HuskyRange(this.window);
m+i<g[j].length?(o=g[j][m+i][0],p=g[j][m+i][1]):(o=g[j][m+i-1][0],p=g[j][m+i-1][1]+1),q.setEnd(o,p,!0,!0),
q.setStart(g[j][m][0],g[j][m][1],!0),"function"==typeof b?q=b(q):q.pasteText(b),m-=i}}return h}catch(r){
return h}}}),nhn.husky.HuskyCore.addLoadedFile("SE2M_TableTemplate.js"),nhn.husky.SE2M_TableTemplate=[{},{
htTableProperty:{border:"0",cellPadding:"0",cellSpacing:"1"},htTableStyle:{backgroundColor:"#c7c7c7"
},aRowStyle:[{padding:"3px 4px 2px",backgroundColor:"#ffffff",color:"#666666"}]},{htTableProperty:{border:"0",
cellPadding:"0",cellSpacing:"1"},htTableStyle:{backgroundColor:"#c7c7c7"},aRowStyle:[{padding:"3px 4px 2px",
backgroundColor:"#ffffff",color:"#666666"},{padding:"3px 4px 2px",backgroundColor:"#f3f3f3",color:"#666666"
}]},{htTableProperty:{border:"0",cellPadding:"0",cellSpacing:"0"},htTableStyle:{backgroundColor:"#ffffff",
borderTop:"1px solid #c7c7c7"},aRowStyle:[{padding:"3px 4px 2px",borderBottom:"1px solid #c7c7c7",backgroundColor:"#ffffff",
color:"#666666"},{padding:"3px 4px 2px",borderBottom:"1px solid #c7c7c7",backgroundColor:"#f3f3f3",color:"#666666"
}]},{htTableProperty:{border:"0",cellPadding:"0",cellSpacing:"0"},htTableStyle:{border:"1px solid #c7c7c7"
},ht1stRowStyle:{padding:"3px 4px 2px",backgroundColor:"#f3f3f3",color:"#666666",borderRight:"1px solid #e7e7e7",
textAlign:"left",fontWeight:"normal"},aRowStyle:[{padding:"3px 4px 2px",backgroundColor:"#ffffff",borderTop:"1px solid #e7e7e7",
borderRight:"1px solid #e7e7e7",color:"#666666"}]},{htTableProperty:{border:"0",cellPadding:"0",cellSpacing:"1"
},htTableStyle:{backgroundColor:"#c7c7c7"},aRowStyle:[{padding:"3px 4px 2px",backgroundColor:"#f8f8f8",
color:"#666666"},{padding:"3px 4px 2px",backgroundColor:"#ebebeb",color:"#666666"}]},{htTableProperty:{
border:"0",cellPadding:"0",cellSpacing:"0"},ht1stRowStyle:{padding:"3px 4px 2px",borderTop:"1px solid #000000",
borderBottom:"1px solid #000000",backgroundColor:"#333333",color:"#ffffff",textAlign:"left",fontWeight:"normal"
},aRowStyle:[{padding:"3px 4px 2px",borderBottom:"1px solid #ebebeb",backgroundColor:"#ffffff",color:"#666666"
},{padding:"3px 4px 2px",borderBottom:"1px solid #ebebeb",backgroundColor:"#f8f8f8",color:"#666666"}]
},{htTableProperty:{border:"0",cellPadding:"0",cellSpacing:"1"},htTableStyle:{backgroundColor:"#c7c7c7"
},ht1stRowStyle:{padding:"3px 4px 2px",backgroundColor:"#333333",color:"#ffffff",textAlign:"left",fontWeight:"normal"
},ht1stColumnStyle:{padding:"3px 4px 2px",backgroundColor:"#f8f8f8",color:"#666666",textAlign:"left",
fontWeight:"normal"},aRowStyle:[{padding:"3px 4px 2px",backgroundColor:"#ffffff",color:"#666666"}]},{
htTableProperty:{border:"0",cellPadding:"0",cellSpacing:"1"},htTableStyle:{backgroundColor:"#c7c7c7"
},ht1stColumnStyle:{padding:"3px 4px 2px",backgroundColor:"#333333",color:"#ffffff",textAlign:"left",
fontWeight:"normal"},aRowStyle:[{padding:"3px 4px 2px",backgroundColor:"#ffffff",color:"#666666"}]},{
htTableProperty:{border:"0",cellPadding:"0",cellSpacing:"1"},htTableStyle:{backgroundColor:"#a6bcd1"
},aRowStyle:[{padding:"3px 4px 2px",backgroundColor:"#ffffff",color:"#3d76ab"}]},{htTableProperty:{border:"0",
cellPadding:"0",cellSpacing:"1"},htTableStyle:{backgroundColor:"#a6bcd1"},aRowStyle:[{padding:"3px 4px 2px",
backgroundColor:"#ffffff",color:"#3d76ab"},{padding:"3px 4px 2px",backgroundColor:"#f6f8fa",color:"#3d76ab"
}]},{htTableProperty:{border:"0",cellPadding:"0",cellSpacing:"0"},htTableStyle:{backgroundColor:"#ffffff",
borderTop:"1px solid #a6bcd1"},aRowStyle:[{padding:"3px 4px 2px",borderBottom:"1px solid #a6bcd1",backgroundColor:"#ffffff",
color:"#3d76ab"},{padding:"3px 4px 2px",borderBottom:"1px solid #a6bcd1",backgroundColor:"#f6f8fa",color:"#3d76ab"
}]},{htTableProperty:{border:"0",cellPadding:"0",cellSpacing:"0"},htTableStyle:{border:"1px solid #a6bcd1"
},ht1stRowStyle:{padding:"3px 4px 2px",backgroundColor:"#f6f8fa",color:"#3d76ab",borderRight:"1px solid #e1eef7",
textAlign:"left",fontWeight:"normal"},aRowStyle:[{padding:"3px 4px 2px",backgroundColor:"#ffffff",borderTop:"1px solid #e1eef7",
borderRight:"1px solid #e1eef7",color:"#3d76ab"}]},{htTableProperty:{border:"0",cellPadding:"0",cellSpacing:"1"
},htTableStyle:{backgroundColor:"#a6bcd1"},aRowStyle:[{padding:"3px 4px 2px",backgroundColor:"#fafbfc",
color:"#3d76ab"},{padding:"3px 4px 2px",backgroundColor:"#e6ecf2",color:"#3d76ab"}]},{htTableProperty:{
border:"0",cellPadding:"0",cellSpacing:"0"},ht1stRowStyle:{padding:"3px 4px 2px",borderTop:"1px solid #466997",
borderBottom:"1px solid #466997",backgroundColor:"#6284ab",color:"#ffffff",textAlign:"left",fontWeight:"normal"
},aRowStyle:[{padding:"3px 4px 2px",borderBottom:"1px solid #ebebeb",backgroundColor:"#ffffff",color:"#3d76ab"
},{padding:"3px 4px 2px",borderBottom:"1px solid #ebebeb",backgroundColor:"#f6f8fa",color:"#3d76ab"}]
},{htTableProperty:{border:"0",cellPadding:"0",cellSpacing:"1"},htTableStyle:{backgroundColor:"#a6bcd1"
},ht1stRowStyle:{padding:"3px 4px 2px",backgroundColor:"#6284ab",color:"#ffffff",textAlign:"left",fontWeight:"normal"
},ht1stColumnStyle:{padding:"3px 4px 2px",backgroundColor:"#f6f8fa",color:"#3d76ab",textAlign:"left",
fontWeight:"normal"},aRowStyle:[{padding:"3px 4px 2px",backgroundColor:"#ffffff",color:"#3d76ab"}]},{
htTableProperty:{border:"0",cellPadding:"0",cellSpacing:"1"},htTableStyle:{backgroundColor:"#a6bcd1"
},ht1stColumnStyle:{padding:"3px 4px 2px",backgroundColor:"#6284ab",color:"#ffffff",textAlign:"left",
fontWeight:"normal"},aRowStyle:[{padding:"3px 4px 2px",backgroundColor:"#ffffff",color:"#3d76ab"}]}],
nhn.husky.Hotkey=jindo.$Class({name:"Hotkey",$init:function(){this.oShortcut=shortcut},$ON_ADD_HOTKEY:function(a,b,c,d){
c||(c=[]);var e=jindo.$Fn(this.oApp.exec,this.oApp).bind(b,c);this.oShortcut(a,d).addEvent(e)}}),Shortcut.Store={
anthorKeyHash:{},datas:{},currentId:"",currentKey:"",searchId:function(a,b){var c=!1;if(jindo.$H(this.datas).forEach(function(d,e){
b==d.element&&(a=e,c=!0,jindo.$H.Break())}),!c&&a in this.datas){for(var d=a;d in this.datas;)d="nonID"+(new Date).getTime();
return d}return a},set:function(a,b,c){this.currentId=a,this.currentKey=b;var d=this.get(a);this.datas[a]=d?d.createKey(b):new Shortcut.Data(a,b,c);
},get:function(a,b){return b?this.datas[a].keys[b]:this.datas[a]},reset:function(a){var b=this.datas[a];
Shortcut.Helper.bind(b.func,b.element,"detach"),delete this.datas[a]},allReset:function(){jindo.$H(this.datas).forEach(jindo.$Fn(function(a,b){
this.reset(b)},this).bind())}},Shortcut.Data=jindo.$Class({$init:function(a,b,c){this.id=a,this.element=c,
this.func=jindo.$Fn(this.fire,this).bind(),Shortcut.Helper.bind(this.func,c,"attach"),this.keys={},this.keyStemp={},
this.createKey(b)},createKey:function(a){this.keyStemp[Shortcut.Helper.keyInterpretor(a)]=a,this.keys[a]={};
var b=this.keys[a];return b.key=a,b.events=[],b.commonExceptions=[],b.stopDefalutBehavior=!0,this},getKeyStamp:function(a){
var b=a.keyCode||a.charCode,c="";return c+=a.altKey?"1":"0",c+=a.ctrlKey?"1":"0",c+=a.metaKey?"1":"0",
c+=a.shiftKey?"1":"0",c+=b},fire:function(a){a=a||window.eEvent;var b=this.keyStemp[this.getKeyStamp(a)];
b&&this.excute(new jindo.$Event(a),b)},excute:function(a,b){var c=!0,d=Shortcut.Helper,e=this.keys[b];
d.notCommonException(a,e.commonExceptions)&&jindo.$A(e.events).forEach(function(b){if(e.stopDefalutBehavior){
var d=b.exceptions.length;if(d){for(var f=0;d>f;f++)if(!b.exception[f](a)){c=!1;break}if(c){if(b.event(a),
jindo.$Agent().navigator().ie){var g=a._event;g.keyCode="",g.charCode=""}a.stop()}else jindo.$A.Break();
}else{if(b.event(a),jindo.$Agent().navigator().ie){var g=a._event;g.keyCode="",g.charCode=""}a.stop();
}}})},addEvent:function(a,b){var c=this.keys[b].events;Shortcut.Helper.hasEvent(a,c)||c.push({event:a,
exceptions:[]})},addException:function(a,b){var c=this.keys[b].commonExceptions;Shortcut.Helper.hasException(a,c)||c.push(a);
},removeException:function(a,b){var c=this.keys[b].commonExceptions;c=jindo.$A(c).filter(function(b){
return b!=a}).$value()},removeEvent:function(a,b){var c=this.keys[b].events;c=jindo.$A(c).filter(function(b){
return b!=a}).$value(),this.unRegister(b)},unRegister:function(a){var b=this.keys[a].events;b.length&&delete this.keys[a];
var c=!0;for(var d in this.keys){c=!1;break}c&&(Shortcut.Helper.bind(this.func,this.element,"detach"),
delete Shortcut.Store.datas[this.id])},startDefalutBehavior:function(a){this._setDefalutBehavior(a,!1);
},stopDefalutBehavior:function(a){this._setDefalutBehavior(a,!0)},_setDefalutBehavior:function(a,b){
this.keys[a].stopDefalutBehavior=b}}),Shortcut.Helper={keyInterpretor:function(a){var b=a.split("+"),c=jindo.$A(b),d="";
d+=c.has("alt")?"1":"0",d+=c.has("ctrl")?"1":"0",d+=c.has("meta")?"1":"0",d+=c.has("shift")?"1":"0";var c=c.filter(function(a){
return!("alt"==a||"ctrl"==a||"meta"==a||"shift"==a)}),e=c.$value()[0];if(e){var a=Shortcut.Store.anthorKeyHash[e.toUpperCase()]||e.toUpperCase().charCodeAt(0);
d+=a}return d},notCommonException:function(a,b){for(var c=b.length,d=0;c>d;d++)if(!b[d](a))return!1;return!0;
},hasEvent:function(a,b){for(var c=b.length,d=0;c>d;++d)if(b.event==a)return!0;return!1},hasException:function(a,b){
for(var c=b.length,d=0;c>d;++d)if(b[d]==a)return!0;return!1},bind:function(a,b,c){"attach"==c?domAttach(b,"keydown",a):domDetach(b,"keydown",a);
}},function(){window.domAttach=document.addEventListener?function(a,b,c){a.addEventListener(b,c,!1)}:function(a,b,c){
a.attachEvent("on"+b,c)}}(),function(){window.domDetach=document.removeEventListener?function(a,b,c){
a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent("on"+b,c)}}(),Shortcut.Action={init:function(a,b){
return this.dataInstance=a,this.rawKey=b,this},addEvent:function(a){return this.dataInstance.addEvent(a,this.rawKey),
this},removeEvent:function(a){return this.dataInstance.removeEvent(a,this.rawKey),this},addException:function(a){
return this.dataInstance.addException(a,this.rawKey),this},removeException:function(a){return this.dataInstance.removeException(a,this.rawKey),
this},startDefalutBehavior:function(){return this.dataInstance.startDefalutBehavior(this.rawKey),this;
},stopDefalutBehavior:function(){return this.dataInstance.stopDefalutBehavior(this.rawKey),this},resetElement:function(){
return Shortcut.Store.reset(this.dataInstance.id),this},resetAll:function(){return Shortcut.Store.allReset(),
this}},function(){Shortcut.Store.anthorKeyHash={BACKSPACE:8,TAB:9,ENTER:13,ESC:27,SPACE:32,PAGEUP:33,
PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DEL:46,COMMA:188,PERIOD:190,SLASH:191};for(var a=Shortcut.Store.anthorKeyHash,b=1;13>b;b++)Shortcut.Store.anthorKeyHash["F"+b]=b+111;
var c=jindo.$Agent().navigator();c.ie||c.safari||c.chrome?(a.HYPHEN=189,a.EQUAL=187):(a.HYPHEN=109,a.EQUAL=61);
}();var shortcut=Shortcut;nhn.husky.SE2_serviceForMail=jindo.$Class({name:"SE2_serviceForMail",iframe:null,
$init:function(a,b){this.iframe=a,this.sEditorType=b},$BEFORE_MSG_APP_READY:function(){},$ON_MSG_APP_READY:function(){
this._wfFocus=jindo.$Fn(this._onFocus,this)},$ON_ATTACH_FOCUS_EVENT:function(){if("WYSIWYG"==this.oApp.getEditingMode()){
var a=this.iframe.contentDocument||this.iframe.contentWindow;this._wfFocus.attach(a.body,"focus")}},
$ON_DETACH_FOCUS_EVENT:function(){if(this.oApp.getEditingMode()==this.sMode){var a=this.iframe.contentDocument||this.iframe.contentWindow;
this._wfFocus.detach(a.body,"focus")}},_onFocus:function(a){this.oApp.exec("APPLY_FOCUS"),a.stop()},
$ON_APPLY_FOCUS:function(){var a=this.oApp.getEmptySelection();a.collapseToEnd(),a._window.focus(),a._window.document.body.focus(),
a.select()},$AFTER_CHANGE_EDITING_MODE:function(a){if("TEXT"==a){var b=this.oApp.getContents();-1!=b.indexOf("&lt;!--sign&nbsp;Area&nbsp;start--&gt;")&&-1!=b.indexOf("&lt;!--sign&nbsp;Area&nbsp;end--&gt;")&&(b=b.replace(/&lt;!--sign&nbsp;Area&nbsp;start--&gt;/g,"").replace(/&lt;!--sign&nbsp;Area&nbsp;end--&gt;/g,""),
this.oApp.setContents(b)),b=null}},$ON_EVENT_EDITING_AREA_CLICK:function(a){var b="A"===a.element.tagName.toUpperCase()?a.element:jindo.$$.getSingle("!a",a.element);
b&&window.open(b.getAttribute("href"),""),"write"===this.sEditorType&&(myCore.hideAllLayer(),maCore.hideAutocompleteAddrSuggestLayer());
},$ON_MSG_SEND_HOTKEY:function(a){a.stop(),mwCore.sendMail(a),ccr(a.element,"sct.send",a)},$ON_MSG_SAVE_HOTKEY:function(a){
a.stop(),mwCore.saveContents(a,!0),ccr(a.element,"sct.mailsave",a)},$ON_MSG_SEND_TOME_HOTKEY:function(a){
a.stop(),mwTome._toggleTome(a),ccr(a.element,"sct.myselfmode",a)},$ON_MSG_POP_ADDRESS_HOTKEY:function(a){
a.stop(),mwCore.popAddress(),ccr(a.element,"sct.openaddr",a)},$ON_MSG_ADD_FILE_PC_HOTKEY:function(a){
a.stop(),mwAttach.shortcutUpload(),ccr(a.element,"sct.attachpc",a)},$ON_MSG_SHOW_SHORTCUT_TOOLTIP_HOTKEY:function(a){
a.stop(),myCore.showShortcutLayer(),ccr(a.element,"sct.help2",a)},$ON_MSG_ONFOCUS_SHEARCH_HOTKEY:function(a){
a.stop(),mySimpleSearch.focusToSearch(),ccr(a.element,"sct.search2",a)},$ON_MSG_CLOSE_WINDOW_HOTKEY:function(a){
a.stop(),mcCore.closePopup(),ccr(a.element,"sct.closewindow",a)},$ON_MSG_GOTO_MAILBOX_HOTKEY:function(a,b){
b.stop();var c="";switch(a){case"all":c="sct.allmail";break;case"unread":c="sct.unreadmail";break;case"0":
c="sct.inbox";break;case"1":c="sct.sentmail";break;case"2":c="sct.sentnotimail";break;case"3":c="sct.draft";
break;case"4":c="sct.junkbox";break;case"5":c="sct.trashbox";break;case"6":c="sct.mybox"}mlCore.updateList(null,a),
ccr(b.element,c,b)},$ON_HIDE_ALL_LAYER:function(){this.oApp.exec("HIDE_ALL_DIALOG_LAYER"),this.oApp.exec("HIDE_ACTIVE_LAYER"),
this.oApp.exec("HIDE_EXPAND_VIEW"),this.oApp.exec("STOP_CHECKING_BODY_HEIGHT")}}),nhn.husky.SE2M_AttachPhoto=$Class({
name:"SE2M_AttachPhoto",htOptions:nhn.husky.SE2M_Configuration.CustomObject,$init:function(){},$ON_MSG_APP_READY:function(){
this.oApp.exec("REGISTER_UI_EVENT",["photo_attach","click","ATTACHPHOTO_OPEN_WINDOW"])},$LOCAL_BEFORE_FIRST:function(a){
return a.match(/(REGISTER_CONVERTERS)/)?(this.oApp.acceptLocalBeforeFirstAgain(this,!0),!0):(this.sBlogId=this.oApp.htOptions.ExternalInfo.sBlogId||"",
void(this.oPopupMgr||(this.htPopupOption={oApp:this.oApp,sName:this.name,bScroll:!1,sProperties:"",sUrl:""
},this.htPhotoParam={copyurl:"",mode:"base",width:"",storyPhoto:"",publishDomain:""},this.oPopupMgr=nhn.husky.PopUpManager.getInstance(this.oApp))));
},$ON_ATTACHPHOTO_OPEN_WINDOW:function(){mwAttach.attachImage()},makePopupURL:function(){var a=new StringBuffer;
return a.append(nhn.husky.SE2M_Configuration.AttachPhoto.sPopUpURL),a.toString()},popupParamReset:function(){
this.htPhotoParam={},this.htPhotoParam.mode="base"},$ON_MSG_SE_OBJECT_EDIT_REQUESTED:function(a,b){var c=this.settingReeditInfo(a,b);
c&&this.oApp.exec("ATTACHPHOTO_OPEN_WINDOW")},$ON_ATTACHPHOTO_CLOSE_WINDOW:function(){this.oPopupWindow&&this.oPopupWindow.close();
}}),nhn.husky.SE2M_AttachMap=$Class({name:"SE2M_AttachMap",elDummyImg:null,aContents:[],aAttachAreaInfo:{},
oPopupWindow:null,oOptions:{sType:"attachment",sSubType:"map",sClassName:nhn.husky.SE2M_Configuration.CustomObject.sClassName,
sTagIdPrefix:nhn.husky.SE2M_Configuration.CustomObject.sTagIdPrefix,sEditTpl:"<!--attachment_map_{IDX}-->",
sSaveTpl:'<div id="{STAG_ID}"  class="__se_object" s_type="attachment" s_subtype="map" jsonvalue="{MAP_DATA}"></div>',
rxHtmlTpl:/\<\!\-\-attachment_map_.+?\-\-\>/gi,rxImgTpl:/<img([^>]*) s_subtype=\"map\" .*?>/gi,rxIframeTpl:/<iframe([^>]*) s_subtype=\"?map\"? .*?><\/iframe>/gi,
rxDivTpl:/<div([^>]*) s_subtype=\"?map\"? .*?><\/div>/gi,rxSaveTpl:/jsonvalue=\"([^"]+).*?\"/gi},$init:function(){
var a=nhn.husky.SE2M_Configuration.SE2M_AttachMap;a&&(this.sUploaderHost=a.sUploadURL,this.sUploaderURL=a.sUploadURL+"?svc="+a.sServiceId+"&openurl="+a.sServiceURL,
this.sIframePreviewURL=a.sUploadURL+"/view?mid={MAP_ID}&type=preview",this.sDummyImg=a.sDummyImgURL,
this.sThumbImgURL=a.sThumbnailURL)},$ON_MSG_APP_READY:function(){this.oApp.exec("REGISTER_UI_EVENT",["map_attach","click","ATTACHMAP_OPEN_WINDOW"]);
},$LOCAL_BEFORE_FIRST:function(a){return a.match(/(REGISTER_CONVERTERS)/)?(this.oApp.acceptLocalBeforeFirstAgain(this,!0),
!0):void(this._oPopupMgr=nhn.husky.PopUpManager.getInstance(this.oApp))},$ON_ATTACHMAP_OPEN_WINDOW:function(){
var a=function(a,b,c){b||(b=200),c||(c=200);var d=window.open(a,"mail_editor_popup","height="+c+",width="+b+",status=yes,toolbar=no,menubar=no,location=no");
d||alert(nLang.c.unblock_popup_desc)},b=window.location.protocol+"//"+document.location.host+"/smart/write/uploadmap.nhn",c=$Agent().navigator().ie&&8===$Agent().navigator().version?"http://":window.location.protocol+"//",d=c+document.location.host+"/smart/write/?cmd=uploadImage",e=mwCore.oWriteForm.attachID,f="mashup.map.naver.com";
a(c+f+"/index.nhn?svc=ml&openurl="+b+"&imgUSN="+d+"&attachID="+e,800,600)},attachImageFile:function(a,b){
var c=this._oEditor||oEditor,d='<img class="NHN_MAIL_IMAGE" src="'+a+'"></img>';c.exec("PASTE_HTML",[d]),
b&&(this._oImageInfo.num++,this._oImageInfo.size+=parseInt(b),this._resetFileSizeGraph()),this.closeImageFilePopup();
},closeImageFilePopup:function(){var a=this._oEditor||oEditor;a.exec("ATTACHPHOTO_CLOSE_WINDOW")},$ON_MAIL_MAP_ATTACHED:function(a,b,c,d,e){
this._attachMapFile(a,b,c,d,e)},_attachMapFile:function(a,b,c,d,e){a.image=b,a.width=d,a.height=e;var f=$(b?"map_incl_img_code":"map_excl_img_code").innerHTML;
a.route||(f=f.replace(/<!-- HAS_ROUTE -->(.|\r|\n)*<!-- \/HAS_ROUTE -->/g,"")),f=f.replace(/\[TITLE\]/gi,a.title).replace(/\[MAPIMG\]/gi,b).replace(/\[WIDTH\]/gi,d).replace(/\[HEIGHT\]/gi,e).replace(/\[ADDRESS\]/gi,a.address).replace(/\[MAXIMIZE\]/gi,a.maximize).replace(/\[ROUTE\]/gi,a.route),
this.oApp.exec("REMOVE_STYLE_AND_PASTE_HTML",[f])}}),nhn.husky.SE2Mail_ComposerSignManager=jindo.$Class({
name:"SE2Mail_ComposerSignManager",$init:function(a){this.oSignToolbarButton=$$.getSingle(".husky_seditor_ui_composer_sign",a),
this.oDropdownLayer=$$.getSingle("DIV.husky_seditor_ui_composer_sign_layer",a),this.oSignListArea=$$.getSingle("DIV>UL",this.oDropdownLayer),
this.sSignListTpl=$S(this.oSignListArea.innerHTML).trim().$value(),this.sDomainAddress="",this.aDomainSigns=[],
this.aDomainSignInfos=[],this.sLastSelectedSignSn="",this._oApiResponse=null},$ON_MSG_APP_READY:function(){
this.oApp.exec("REGISTER_UI_EVENT",["composer_sign","click","TOGGLE_MAIL_SIGN_LAYER"])},$ON_MAIL_WRITE_API_RESPONSED:function(a){
return this._oApiResponse=a.writeBody,this._setupMailSign(a.writeBody),this.aDomainSigns.length<1?$Element(this.oSignToolbarButton).hide():$Element(this.oSignToolbarButton).show(),
!0},_setupMailSign:function(a){var b,c=this._makeMainDomainMailSignInfo(a),d=a.iDomainEmail||a.primaryEmailAddr;
this.aDomainSignInfos=a.signListDomain||[],this.aDomainSignInfos.push(c),b=this._makeSubDomainSignInfo(a,c);
for(var e=0,f=b.length;f>e;e++)this.aDomainSignInfos.push(b[e]);this.sDomainAddress=d,this.aDomainSigns=this._getSignsFrom(this.sDomainAddress),
this.sLastSelectedSignSn=this._getDefaultSinSnFrom(this.sDomainAddress)},_makeMainDomainMailSignInfo:function(a){
var b,c=a.selectedSign||"",d=a.signList||[],e=mEnv.mailAddress||"";return b={domainAddr:e,signInfoList:d,
defaultSignSn:c}},_makeSubDomainSignInfo:function(a,b){var c,d,e=a.dlSenderList||[],f=a.idomainInfos||[],g=[];
for(c=0,d=e.length;d>c;c++)g.push({domainAddr:e[c].email,signInfoList:b.signInfoList,defaultSignSn:""
});for(c=0,d=f.length;d>c;c++)g.push({domainAddr:f[c].emailAddress,signInfoList:b.signInfoList,defaultSignSn:b.defaultSignSn
});return g},_getSignContentFrom:function(a,b){var c,d,e,f,g=[],h="";for(e=0,f=this.aDomainSignInfos.length;f>e;e++)if(this.aDomainSignInfos[e].domainAddr===a){
g=this.aDomainSignInfos[e].signInfoList,c=b||(this.aDomainSignInfos[e].defaultSignSn?this.aDomainSignInfos[e].defaultSignSn.toString():"");
break}for(e=0,f=g.length;f>e;e++)if(d=g[e].signSN?g[e].signSN.toString():"",d===c){h=g[e].signContent;
break}return h},_getDefaultSinSnFrom:function(a){var b,c;for(b=0,c=this.aDomainSignInfos.length;c>b;b++)if(this.aDomainSignInfos[b].domainAddr===a)return this.aDomainSignInfos[b].defaultSignSn?this.aDomainSignInfos[b].defaultSignSn.toString():"";
return""},_getSignsFrom:function(a){var b,c;for(b=0,c=this.aDomainSignInfos.length;c>b;b++)if(this.aDomainSignInfos[b].domainAddr===a)return this.aDomainSignInfos[b].signInfoList;
return[]},$ON_MAIL_SIGN_LIST_UPDATE:function(a){var b="";this.sDomainAddress=a,this.aDomainSigns=this._getSignsFrom(this.sDomainAddress),
this.sLastSelectedSignSn=this._getDefaultSinSnFrom(this.sDomainAddress),this.aDomainSigns.length<1?$Element(this.oSignToolbarButton).hide():(b=this._getSignContentFrom(this.sDomainAddress),
$Element(this.oSignToolbarButton).show()),this._changeSignContent(b)},$ON_MAIL_SIGN_SELECTED:function(a){
var b=this._getSignContentFrom(this.sDomainAddress,a);this.sPrevSelectedSignSn=this.sLastSelectedSignSn,
this.sLastSelectedSignSn=a,this._changeSignContent(b),this.oApp.exec("HIDE_ACTIVE_LAYER")},_changeSignContent:function(a){
var b="<!--sign Area start-->",c="<!--sign Area end-->",d="WYSIWYG"===this.oApp.getEditingMode()?this.oApp.getWYSIWYGDocument().body.innerHTML:this.oApp.getContents(),e=-1!=d.indexOf(b)&&-1!=d.indexOf(c);
if(e!==!1||a){if(e){var f=d.split(b)[0],g=d.split(c)[1],h=d.split(b)[1].split(c)[0];if(h!=mCom.sCurSignContents&&!confirm(nLang.c.change_sign_desc))return void(this.sLastSelectedSignSn=this.sPrevSelectedSignSn);
d=f+b+a+c+g,this.oApp.setContents(d)}else a=b+a+c,a=$Agent().navigator().ie?["<P>&nbsp;</P><P>&nbsp;</P>",a].join(""):["<P><BR></P><P><BR></P>",a].join(""),
this.oApp.exec("PASTE_HTML",[a]);var i="WYSIWYG"===this.oApp.getEditingMode()?this.oApp.getWYSIWYGDocument().body.innerHTML:this.oApp.getContents();
mCom.sCurSignContents=i.split(b)[1].split(c)[0]}},$ON_TOGGLE_MAIL_SIGN_LAYER:function(){this._setupSignLayer(),
this.oApp.exec("TOGGLE_TOOLBAR_ACTIVE_LAYER",[this.oDropdownLayer,null,"SELECT_UI",["composer_sign"],"DESELECT_UI",["composer_sign"]]);
},_setupSignLayer:function(){for(var a,b=[],c="",d="",e="",f="",g=0,h=this.aDomainSigns.length;h>g;g++)a=this.aDomainSigns[g],
c=a.name,d=a.signContent,e=a.signSN?a.signSN.toString():"",f=this.sSignListTpl.replace("@active@",e===this.sLastSelectedSignSn?"active":"").replace("@signSn@",e).replace("@SignName@",c),
b.push(f);this.oSignListArea.innerHTML=b.join("")},_fEof:function(){}}),"undefined"==typeof window.nhn&&(window.nhn={});
var oMessageMap_en_US={"SE_EditingAreaManager.onExit":"Contents have been changed.","SE_Color.invalidColorCode":"Enter the correct color code. \n\n 예) #000000, #FF0000, #FFFFFF, #ffffff, ffffff",
"SE_Hyperlink.invalidURL":"You have entered an incorrect URL.","SE_FindReplace.keywordMissingSearch":"Enter the word you wish to find.",
"SE_FindReplace.keywordMissingReplace":"Enter the word you wish to find.","SE_FindReplace.keywordNotFoundSearch":"The word does not exist.",
"SE_FindReplace.keywordNotFoundReplace":"The word does not exist.","SE_FindReplace.replaceAllResultP1":"A total of ",
"SE_FindReplace.replaceAllResultP2":" matching contents have been changed.","SE_FindReplace.notSupportedBrowser":"Function cannot be used in the browser you are currently using. \n\nSorry for the inconvenience.",
"SE_FindReplace.replaceKeywordNotFound":"No word to change.","SE_LineHeight.invalidLineHeight":"Incorrect value.",
"SE_Footnote.defaultText":"Enter footnote details.","SE.failedToLoadFlash":"The function cannot be used because flash has been blocked.",
"SE2M_EditingModeChanger.confirmTextMode":"The contents remain, but editing effects, including fonts, and attachments, \nsuch as images, will disappear when changed to text mode. \nMake changes?",
"SE2M_FontNameWithLayerUI.sSampleText":"ABCD","SE_Hyperlink.selectedArea":"selected area"};"undefined"==typeof window.nhn&&(window.nhn={});
var oMessageMap_ja_JP={"SE_EditingAreaManager.onExit":"内容が変更されました。","SE_Color.invalidColorCode":"カラーコードを正しく入力してください。 \n\n 例) #000000, #FF0000, #FFFFFF, #ffffff, ffffff",
"SE_Hyperlink.invalidURL":"入力したURLが正しくありません。","SE_FindReplace.keywordMissingSearch":"検索する文字列をご入力ください。",
"SE_FindReplace.keywordMissingReplace":"置換する文字列をご入力ください。","SE_FindReplace.keywordNotFoundSearch":"検索する文字列がありません。",
"SE_FindReplace.keywordNotFoundReplace":"置換する文字列がありません。","SE_FindReplace.replaceAllResultP1":"一致する内容が計",
"SE_FindReplace.replaceAllResultP2":"件変わりました。","SE_FindReplace.notSupportedBrowser":"現在ご使用中のブラウザーではご利用いただけない機能です。\n\nご不便をおかけしまして申し訳ございません。",
"SE_FindReplace.replaceKeywordNotFound":"変更される単語がありません。","SE_LineHeight.invalidLineHeight":"誤った値です。",
"SE_Footnote.defaultText":"脚注内容を入力してください。","SE.failedToLoadFlash":"フラッシュが遮断されているため、この機能は使用できません。","SE2M_EditingModeChanger.confirmTextMode":"テキストモードに切り換えると、作成された内容は維持されますが、\nフォント等の編集効果と画像等の添付内容が消えることになります。\n切り換えますか？",
"SE2M_FontNameWithLayerUI.sSampleText":"あいうえお","SE_Hyperlink.selectedArea":"選択した領域"};"undefined"==typeof window.nhn&&(window.nhn={});
var oMessageMap={"SE_EditingAreaManager.onExit":"내용이 변경되었습니다.","SE_Color.invalidColorCode":"색상 코드를 올바르게 입력해 주세요. \n\n 예) #000000, #FF0000, #FFFFFF, #ffffff, ffffff",
"SE_Hyperlink.invalidURL":"입력하신 URL이 올바르지 않습니다.","SE_FindReplace.keywordMissingSearch":"찾으실 단어를 입력해 주세요.",
"SE_FindReplace.keywordMissingReplace":"찾으실 단어를 입력해 주세요.","SE_FindReplace.keywordNotFoundSearch":"찾으실 단어가 없습니다.",
"SE_FindReplace.keywordNotFoundReplace":"찾으실 단어가 없습니다.","SE_FindReplace.replaceAllResultP1":"일치하는 내용이 총 ",
"SE_FindReplace.replaceAllResultP2":"건 바뀌었습니다.","SE_FindReplace.notSupportedBrowser":"현재 사용하고 계신 브라우저에서는 사용하실수 없는 기능입니다.\n\n이용에 불편을 드려 죄송합니다.",
"SE_FindReplace.replaceKeywordNotFound":"바뀔 단어가 없습니다","SE_LineHeight.invalidLineHeight":"잘못된 값입니다.",
"SE_Footnote.defaultText":"각주내용을 입력해 주세요","SE.failedToLoadFlash":"플래시가 차단되어 있어 해당 기능을 사용할 수 없습니다.","SE2M_EditingModeChanger.confirmTextMode":"텍스트 모드로 전환하면 작성된 내용은 유지되나, \n글꼴 등의 편집효과와 이미지 등의 첨부내용이 모두 사라지게 됩니다.\n전환하시겠습니까?",
"SE2M_FontNameWithLayerUI.sSampleText":"가나다라","SE_Table.preview":"행렬 미리보기","SE_Hyperlink.selectedArea":"선택한 영역"
};"undefined"==typeof window.nhn&&(window.nhn={});var oMessageMap_zh_CN={"SE_EditingAreaManager.onExit":"内容有了变化。",
"SE_Color.invalidColorCode":"请你输入正确的色相代码。 \n\n 例) #000000, #FF0000, #FFFFFF, #ffffff, ffffff","SE_Hyperlink.invalidURL":"你输入的URL不符条件。",
"SE_FindReplace.keywordMissingSearch":"请你输入要找的词汇。","SE_FindReplace.keywordMissingReplace":"请你输入要找的词汇。",
"SE_FindReplace.keywordNotFoundSearch":"没有词汇符合条件。","SE_FindReplace.keywordNotFoundReplace":"没有词汇符合条件。",
"SE_FindReplace.replaceAllResultP1":"符合条件的内容改编为","SE_FindReplace.replaceAllResultP2":"件","SE_FindReplace.notSupportedBrowser":"这是你现在使用的浏览器不可支持的功能。\n\n麻烦你很道歉。",
"SE_FindReplace.replaceKeywordNotFound":"没有词汇要改变。","SE_LineHeight.invalidLineHeight":"这是有问题的值。","SE_Footnote.defaultText":"请你输入脚注内容。",
"SE.failedToLoadFlash":"flash被隔绝，不能使用该功能。","SE2M_EditingModeChanger.confirmTextMode":"转换为text模式就能维持制作内容，\n但字体等编辑效果和图像等附件内容都会消失。\n你还要继续吗？",
"SE2M_FontNameWithLayerUI.sSampleText":"甲乙丙丁","SE_Hyperlink.selectedArea":"已选中的领域"};"undefined"==typeof window.nhn&&(window.nhn={});
var oMessageMap_zh_TW={"SE_EditingAreaManager.onExit":"內容已被更改。","SE_Color.invalidColorCode":"請輸入正確的顔色代碼。\n\n例子） #000000, #FF0000, #FFFFFF, #ffffff, ffffff",
"SE_Hyperlink.invalidURL":"輸錯URL","SE_FindReplace.keywordMissingSearch":"請輸入要查詢的單詞。","SE_FindReplace.keywordMissingReplace":"請輸入要查詢的單詞。",
"SE_FindReplace.keywordNotFoundSearch":"要查詢的單詞不存在。","SE_FindReplace.keywordNotFoundReplace":"要查詢的單詞不存在。",
"SE_FindReplace.replaceAllResultP1":"一致的內容總有 ","SE_FindReplace.replaceAllResultP2":"件已被更改。","SE_FindReplace.notSupportedBrowser":"當前的浏覽器上無法使用此功能。\n\n很抱歉給你添麻煩了。",
"SE_FindReplace.replaceKeywordNotFound":"要更改的詞彙不存在。","SE_LineHeight.invalidLineHeight":"爲有錯誤的值。","SE_Footnote.defaultText":"請輸入注腳內容。",
"SE.failedToLoadFlash":"Flash被屏蔽，導致無法使用此功能。","SE2M_EditingModeChanger.confirmTextMode":"如轉換爲文本模式，雖然維持已寫成的內容，\n但字號等編輯效果和圖像等附加內容都會被消失。\n是否轉換？",
"SE2M_FontNameWithLayerUI.sSampleText":"甲乙丙丁","SE_Hyperlink.selectedArea":"已選中的領域"};nhn.husky.SE2M_QuickEditor_Common=jindo.$Class({
name:"SE2M_QuickEditor_Common",_environmentData:"",_currentType:"",_in_event:!1,_bUseConfig:!1,_sBaseAjaxUrl:"",
_sAddTextAjaxUrl:"",$init:function(){this.waHotkeys=new jindo.$A([]),this.waHotkeyLayers=new jindo.$A([]);
},$ON_MSG_APP_READY:function(){var a=nhn.husky.SE2M_Configuration.QuickEditor;a&&(this._bUseConfig=a.common&&"undefined"!=typeof a.common.bUseConfig?a.common.bUseConfig:!0),
this._bUseConfig?(this._sBaseAjaxUrl=a.common.sBaseAjaxUrl,this._sAddTextAjaxUrl=a.common.sAddTextAjaxUrl,
this.getData()):this.setData("{table:'full',img:'full',review:'full'}"),this.oApp.registerLazyMessage(["OPEN_QE_LAYER"],["hp_SE2M_QuickEditor_Common$Lazy.js"]);
},$ON_EVENT_EDITING_AREA_KEYDOWN:function(a){var b=a.key();if(8==b.keyCode||46==b.keyCode){var c=jindo.$Agent().navigator();
if(c.ie&&c.nativeVersion>8){var d=jindo.$$.getSingle("DIV.husky_seditor_editing_area_container").childNodes[0];
"DIV"==d.tagName&&1e3==d.style.zIndex&&d.parentNode.removeChild(d)}this.oApp.exec("CLOSE_QE_LAYER",[a]);
}},getData:function(){var a=this;jindo.$Ajax(a._sBaseAjaxUrl,{type:"jsonp",timeout:1,onload:function(b){
var c=b.json().result;a.setData(c&&c.text_data?c.text_data:"{table:'full',img:'full',review:'full'}");
},onerror:function(){a.setData("{table:'full',img:'full',review:'full'}")},ontimeout:function(){a.setData("{table:'full',img:'full',review:'full'}");
}}).request({text_key:"qeditor_fold"})},setData:function(sResult){var oResult={table:"full",img:"full",
review:"full"};sResult&&(oResult=eval("("+sResult+")")),this._environmentData={table:{isOpen:!1,type:oResult.table,
isFixed:!1,position:[]},img:{isOpen:!1,type:oResult.img,isFixed:!1},review:{isOpen:!1,type:oResult.review,
isFixed:!1,position:[]}},this.waTableTagNames=jindo.$A(["table","tbody","td","tfoot","th","thead","tr"]);
},$ON_REGISTER_HOTKEY:function(a,b,c){"tab"!=a&&"shift+tab"!=a&&this.waHotkeys.push([a,b,c])}}),nhn.husky.SE_UndoRedo=jindo.$Class({
name:"SE_UndoRedo",oCurStateIdx:null,iMinimumSizeChange:1,nMaxUndoCount:20,nAfterMaxDeleteBuffer:100,
sBlankContentsForFF:"<br>",sDefaultXPath:"/HTML[0]/BODY[0]",nInitialStateIdx:0,$init:function(){this.aUndoHistory=[],
this.oCurStateIdx={nIdx:0,nStep:0},this.nHardLimit=this.nMaxUndoCount+this.nAfterMaxDeleteBuffer},$LOCAL_BEFORE_ALL:function(a){
if(a.match(/_DO_RECORD_UNDO_HISTORY_AT$/))return!0;try{if("WYSIWYG"!=this.oApp.getEditingMode())return!1;
}catch(b){return!1}return!0},$BEFORE_MSG_APP_READY:function(){this._historyLength=0,this.oApp.exec("ADD_APP_PROPERTY",["getUndoHistory",jindo.$Fn(this._getUndoHistory,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["getUndoStateIdx",jindo.$Fn(this._getUndoStateIdx,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["setInitialStateIndex",jindo.$Fn(this._setInitialStateIndex,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["saveSnapShot",jindo.$Fn(this._saveSnapShot,this).bind()]),this.oApp.exec("ADD_APP_PROPERTY",["getLastKey",jindo.$Fn(this._getLastKey,this).bind()]),
this.oApp.exec("ADD_APP_PROPERTY",["setLastKey",jindo.$Fn(this._setLastKey,this).bind()]),this._saveSnapShot(),
this.oApp.exec("DO_RECORD_UNDO_HISTORY_AT",[this.oCurStateIdx,"","","",null,this.sDefaultXPath])},_getLastKey:function(){
return this.sLastKey},_setLastKey:function(a){this.sLastKey=a},$ON_MSG_APP_READY:function(){var a=jindo.$Agent().navigator();
this.bIE=a.ie,this.bFF=a.firefox,this.oApp.exec("REGISTER_UI_EVENT",["undo","click","UNDO"]),this.oApp.exec("REGISTER_UI_EVENT",["redo","click","REDO"]),
jindo.$Agent().os().mac?(this.oApp.exec("REGISTER_HOTKEY",["meta+z","UNDO"]),this.oApp.exec("REGISTER_HOTKEY",["meta+y","REDO"])):(this.oApp.exec("REGISTER_HOTKEY",["ctrl+z","UNDO"]),
this.oApp.exec("REGISTER_HOTKEY",["ctrl+y","REDO"]))},$ON_UNDO:function(){if(this._doRecordUndoHistory("UNDO",{
nStep:0,bSkipIfEqual:!0,bMustBlockContainer:!0}),!(this.oCurStateIdx.nIdx<=this.nInitialStateIdx)){var a=this.aUndoHistory[this.oCurStateIdx.nIdx].oUndoCallback[this.oCurStateIdx.nStep],b=this.aUndoHistory[this.oCurStateIdx.nIdx].sParentXPath[this.oCurStateIdx.nStep];
if(a&&this.oApp.exec(a.sMsg,a.aParams),this.oCurStateIdx.nStep>0)this.oCurStateIdx.nStep--;else{var c=this.aUndoHistory[this.oCurStateIdx.nIdx];
this.oCurStateIdx.nIdx--,c.nTotalSteps>1?this.oCurStateIdx.nStep=0:(c=this.aUndoHistory[this.oCurStateIdx.nIdx],
this.oCurStateIdx.nStep=c.nTotalSteps-1)}var d=this.aUndoHistory[this.oCurStateIdx.nIdx].sParentXPath[this.oCurStateIdx.nStep],e=!1;
d!==b&&0===d.indexOf(b)&&(e=!0),this.oApp.exec("RESTORE_UNDO_HISTORY",[this.oCurStateIdx.nIdx,this.oCurStateIdx.nStep,e]),
this.oApp.exec("CHECK_STYLE_CHANGE",[]),this.sLastKey=null}},$ON_REDO:function(){if(!(this.oCurStateIdx.nIdx>=this.aUndoHistory.length)){
var a=this.aUndoHistory[this.oCurStateIdx.nIdx];if(!(this.oCurStateIdx.nIdx==this.aUndoHistory.length-1&&this.oCurStateIdx.nStep>=a.nTotalSteps-1)){
this.oCurStateIdx.nStep<a.nTotalSteps-1?this.oCurStateIdx.nStep++:(this.oCurStateIdx.nIdx++,a=this.aUndoHistory[this.oCurStateIdx.nIdx],
this.oCurStateIdx.nStep=a.nTotalSteps-1);var b=this.aUndoHistory[this.oCurStateIdx.nIdx].oRedoCallback[this.oCurStateIdx.nStep];
b&&this.oApp.exec(b.sMsg,b.aParams),this.oApp.exec("RESTORE_UNDO_HISTORY",[this.oCurStateIdx.nIdx,this.oCurStateIdx.nStep]),
this.oApp.exec("CHECK_STYLE_CHANGE",[]),this.sLastKey=null}}},$ON_RECORD_UNDO_ACTION:function(a,b){b=b||{
sSaveTarget:null,elSaveTarget:null,bMustBlockElement:!1,bMustBlockContainer:!1,bDontSaveSelection:!1
},b.nStep=0,b.bSkipIfEqual=!1,b.bTwoStepAction=!1,this._doRecordUndoHistory(a,b)},$ON_RECORD_UNDO_BEFORE_ACTION:function(a,b){
b=b||{sSaveTarget:null,elSaveTarget:null,bMustBlockElement:!1,bMustBlockContainer:!1,bDontSaveSelection:!1
},b.nStep=0,b.bSkipIfEqual=!1,b.bTwoStepAction=!0,this._doRecordUndoHistory(a,b)},$ON_RECORD_UNDO_AFTER_ACTION:function(a,b){
b=b||{sSaveTarget:null,elSaveTarget:null,bMustBlockElement:!1,bMustBlockContainer:!1,bDontSaveSelection:!1
},b.nStep=1,b.bSkipIfEqual=!1,b.bTwoStepAction=!0,this._doRecordUndoHistory(a,b)},$ON_RESTORE_UNDO_HISTORY:function(a,b,c){
this.oApp.exec("HIDE_ACTIVE_LAYER"),this.oCurStateIdx.nIdx=a,this.oCurStateIdx.nStep=b;var d=this.aUndoHistory[this.oCurStateIdx.nIdx],e=d.sContent[this.oCurStateIdx.nStep],f=d.sFullContents[this.oCurStateIdx.nStep],g=d.oBookmark[this.oCurStateIdx.nStep],h=d.sParentXPath[this.oCurStateIdx.nStep],i=null,j="",k=this.oApp.getEmptySelection();
if(this.oApp.exec("RESTORE_IE_SELECTION"),c)this.oApp.getWYSIWYGDocument().body.innerHTML=f,f=this.oApp.getWYSIWYGDocument().body.innerHTML,
j=f,h=this.sDefaultXPath;else{i=k._evaluateXPath(h,k._document);try{i.innerHTML=e,j=i.innerHTML}catch(l){
this.oApp.getWYSIWYGDocument().body.innerHTML=f,f=this.oApp.getWYSIWYGDocument().body.innerHTML,j=f,
h=this.sDefaultXPath}}this.bFF&&j==this.sBlankContentsForFF&&(j=""),d.sFullContents[this.oCurStateIdx.nStep]=f,
d.sContent[this.oCurStateIdx.nStep]=j,d.sParentXPath[this.oCurStateIdx.nStep]=h,g&&"scroll"==g.sType?setTimeout(jindo.$Fn(function(){
this.oApp.getWYSIWYGDocument().documentElement.scrollTop=g.nScrollTop},this).bind(),0):(k=this.oApp.getEmptySelection(),
k.selectionLoaded&&(g?k.moveToXPathBookmark(g):k=this.oApp.getEmptySelection(),k.select()))},_doRecordUndoHistory:function(a,b){
b=b||{};var c=b.nStep||0,d=b.bSkipIfEqual||!1,e=b.bTwoStepAction||!1,f=b.sSaveTarget||null,g=b.elSaveTarget||null,h=b.bDontSaveSelection||!1,i=b.bMustBlockElement||!1,j=b.bMustBlockContainer||!1,k=b.oUndoCallback,l=b.oRedoCallback;
this._historyLength=this.aUndoHistory.length,this.oCurStateIdx.nIdx!==this._historyLength-1&&(d=!0);var m=this.aUndoHistory[this.oCurStateIdx.nIdx],n=m.sFullContents[this.oCurStateIdx.nStep],o="",p="",q="",r=null,s=null,t={
nIdx:this.oCurStateIdx.nIdx,nStep:this.oCurStateIdx.nStep};if(s=this.oApp.getSelection(),s.selectionLoaded&&(r=s.getXPathBookmark()),
q=g?s._getXPath(g):f?this._getTargetXPath(r,f):this._getParentXPath(r,i,j),p=this.oApp.getWYSIWYGDocument().body.innerHTML,
o=q===this.sDefaultXPath?p:s._evaluateXPath(q,s._document).innerHTML,this.bFF&&o==this.sBlankContentsForFF&&(o=""),
!e&&d){if(n.length===p.length)return;var u=document.createElement("div"),v=document.createElement("div");
u.innerHTML=p,v.innerHTML=n;var w=document.createDocumentFragment();if(w.appendChild(u),w.appendChild(v),
p=u.innerHTML,n=v.innerHTML,u=null,v=null,w=null,n.length===p.length)return}h&&(r={sType:"scroll",nScrollTop:this.oApp.getWYSIWYGDocument().documentElement.scrollTop
}),t.nStep=c,0===t.nStep&&this.oCurStateIdx.nStep===m.nTotalSteps-1&&(t.nIdx=this.oCurStateIdx.nIdx+1),
this._doRecordUndoHistoryAt(t,a,o,p,r,q,k,l)},$ON_DO_RECORD_UNDO_HISTORY_AT:function(a,b,c,d,e,f){this._doRecordUndoHistoryAt(a,b,c,d,e,f);
},_doRecordUndoHistoryAt:function(a,b,c,d,e,f,g,h){if(0!==a.nStep)this.aUndoHistory[a.nIdx].nTotalSteps=a.nStep+1,
this.aUndoHistory[a.nIdx].sContent[a.nStep]=c,this.aUndoHistory[a.nIdx].sFullContents[a.nStep]=d,this.aUndoHistory[a.nIdx].oBookmark[a.nStep]=e,
this.aUndoHistory[a.nIdx].sParentXPath[a.nStep]=f,this.aUndoHistory[a.nIdx].oUndoCallback[a.nStep]=g,
this.aUndoHistory[a.nIdx].oRedoCallback[a.nStep]=h;else{var i={sAction:b,nTotalSteps:1};i.sContent=[],
i.sContent[0]=c,i.sFullContents=[],i.sFullContents[0]=d,i.oBookmark=[],i.oBookmark[0]=e,i.sParentXPath=[],
i.sParentXPath[0]=f,i.oUndoCallback=[],i.oUndoCallback[0]=g,i.oRedoCallback=[],i.oRedoCallback[0]=h,
this.aUndoHistory.splice(a.nIdx,this._historyLength-a.nIdx,i),this._historyLength=this.aUndoHistory.length;
}this._historyLength>this.nHardLimit&&(this.aUndoHistory.splice(0,this.nAfterMaxDeleteBuffer),a.nIdx-=this.nAfterMaxDeleteBuffer),
this.oCurStateIdx.nIdx=a.nIdx,this.oCurStateIdx.nStep=a.nStep},_saveSnapShot:function(){this.oSnapShot={
oBookmark:this.oApp.getSelection().getXPathBookmark()}},_getTargetXPath:function(a,b){var c=this.sDefaultXPath,d=a[0].sXPath.split("/"),e=a[1].sXPath.split("/"),f=[],g=d.length<e.length?d.length:e.length,h=0,i=-1;
if("BODY"===b)return c;for(h=0;g>h&&d[h]===e[h];h++)f.push(d[h]),""!==d[h]&&"HTML"!==d[h]&&"BODY"!==d[h]&&d[h].indexOf(b)>-1&&(i=h);
return i>-1&&(f.length=i),c=f.join("/"),c.length<this.sDefaultXPath.length&&(c=this.sDefaultXPath),c;
},_getParentXPath:function(a,b,c){var d,e,f,g,h,i,j,k,l=this.sDefaultXPath,m=["","HTML[0]","BODY[0]"],n=0,o=-1;
if(!a)return l;if(a[0].sXPath===l||a[1].sXPath===l)return l;if(d=a[0].sXPath.split("/"),e=a[1].sXPath.split("/"),
f=this.oSnapShot.oBookmark[0].sXPath.split("/"),g=this.oSnapShot.oBookmark[1].sXPath.split("/"),h=f.length<g.length?f.length:g.length,
i=d.length<e.length?d.length:e.length,i=h>i?i:h,3>i)return l;for(b=b||!1,c=c||!1,n=3;i>n&&(j=d[n],j===e[n]&&j===f[n]&&j===g[n]&&e[n]===f[n]&&e[n]===g[n]&&f[n]===g[n]);n++)m.push(j),
k=j.substring(0,j.indexOf("[")),!b||"P"!==k&&"LI"!==k&&"DIV"!==k?("UL"===k||"OL"===k||"TD"===k||"TR"===k||"TABLE"===k||"BLOCKQUOTE"===k)&&(o=n):o=n;
if(o>-1)m.length=o+1;else if(b||c)return l;return m.join("/")},_getUndoHistory:function(){return this.aUndoHistory;
},_getUndoStateIdx:function(){return this.oCurStateIdx},_setInitialStateIndex:function(){this.nInitialStateIdx=this.oCurStateIdx.nIdx;
}}),nhn.husky.SE_EditingArea_WYSIWYG=jindo.$Class({$init:function(a,b){this.iframe=jindo.$(a),this.sEditorType=b;
var c=jindo.$Agent().navigator();c.ie&&(this.iframe.style.display="none"),this.sBlankPageURL="smart_editor2_inputarea.html?2",
this.sBlankPageURL_EmulateIE7="smart_editor2_inputarea_ie8.html?2",this.aAddtionalEmulateIE7=[],this.htOptions=nhn.husky.SE2M_Configuration.SE_EditingAreaManager,
this.htOptions&&(this.sBlankPageURL=this.htOptions.sBlankPageURL||this.sBlankPageURL,this.sBlankPageURL_EmulateIE7=this.htOptions.sBlankPageURL_EmulateIE7||this.sBlankPageURL_EmulateIE7,
this.aAddtionalEmulateIE7=this.htOptions.aAddtionalEmulateIE7||this.aAddtionalEmulateIE7),this.aAddtionalEmulateIE7.push(8),
this.sIFrameSrc=this.sBlankPageURL,c.ie&&jindo.$A(this.aAddtionalEmulateIE7).has(c.nativeVersion)&&(this.sIFrameSrc=this.sBlankPageURL_EmulateIE7);
var d=this.sIFrameSrc,a=this.iframe,e=jindo.$Fn(this.initIframe,this).bind(),f=jindo.$Fn(function(){
this.iframe.src=d},this).bind();!c.ie||c.version>=9&&document.addEventListener?(a.addEventListener("load",e,!1),
a.addEventListener("error",f,!1)):(a.attachEvent("onload",e),a.attachEvent("onerror",f)),a.src=d,this.elEditingArea=a;
},initIframe:function(){try{if(!this.iframe.contentWindow.document||!this.iframe.contentWindow.document.body||"about:blank"===this.iframe.contentWindow.document.location.href)throw new Error("Access denied");
var a=nhn.husky.SE2M_Configuration.SE2B_CSSLoader&&nhn.husky.SE2M_Configuration.SE2B_CSSLoader.sCSSBaseURI?nhn.husky.SE2M_Configuration.SE2B_CSSLoader.sCSSBaseURI:"";
if(nhn.husky.SE2M_Configuration.SE_EditingAreaManager.sCSSBaseURI&&(a=nhn.husky.SE2M_Configuration.SE_EditingAreaManager.sCSSBaseURI),
a){var b=this.getDocument(),c=b.getElementsByTagName("head")[0],d=b.createElement("link"),e="write"===this.sEditorType&&mcCore.isNaver()?"":"nwe.";
d.type="text/css",d.rel="stylesheet",d.href="local"==mCom.serverEnv?"/css/src/se2_new/smart_editor2_in_mail.me.min.css":this.htOptions.sCSSBaseURI+"smart_editor2_in_mail.me.min."+e+mCom.cssVersion+".css",
d.onload=jindo.$Fn(function(){this.oApp&&this.oApp.getEditingMode&&this.oApp.getEditingMode()===this.sMode&&this.oApp.exec("RESET_STYLE_STATUS");
},this).bind(),c.appendChild(d)}this._enableWYSIWYG(),this.status=nhn.husky.PLUGIN_STATUS.READY}catch(f){
if(!(this._nIFrameReadyCount-->0))throw"iframe for WYSIWYG editing mode can't be initialized. Please check if the iframe document exists and is also accessable(cross-domain issues). ";
setTimeout(jindo.$Fn(this.initIframe,this).bind(),100)}},_setBodyHeight:function(){if(!this.bStopCheckingBodyHeight){
var a,b,c=this.getDocument().body,d=jindo.$Element(c),e=parseInt(d.css("marginTop"),10)+parseInt(d.css("marginBottom"),10),f=this.oApp.getEditingAreaHeight(),g=f-e>0?f-e:0,h=d.height();
if(this.nTopBottomMargin=e,0===h)return d.css("height",g+"px"),void setTimeout(this.fnSetBodyHeight,500);
var i=this.nBodyHeight_last===h;i||d.css("height","0px"),a=parseInt(c.scrollHeight,10),b=a>f?a-e:g,this._isHorizontalScrollbarVisible()&&(b-=this.nScrollbarWidth),
i||d.css("height",b+"px"),this.nBodyHeight_last=b,setTimeout(this.fnSetBodyHeight,500)}},_enableWYSIWYG:function(){
var a=this.oApp;if(null!==this.iframe.contentWindow.document.body.contentEditable){if(this.iframe.contentWindow.document.body.contentEditable=!0,
!this.iframe.contentWindow.document.body.ondrop&&"undefined"!=typeof Blob){if(!parent&&!parent.mwAttach)return;
this.iframe.contentWindow.document.body.ondrop=function(b){b.preventDefault();var c=b.dataTransfer.files;
if(c&&0!=c.length){if(1===c.length){var d=c[0];if(d.type&&d.type.match(/image.*/))return b.preventDefault(),
b.stopPropagation(),void parent.mwAttach.uploadImageFromBlob(d,function(b){a.exec("PASTE_HTML",['<img class="NHN_MAIL_IMAGE" src="'+b+'" >']);
})}var e=jindo.$Event(b);parent.mwAttach.dropFileHtml5(e)}},this.iframe.contentWindow.document.body.ondragover=function(a){
if(a.dataTransfer.types.length&&"Files"===a.dataTransfer.types[0]){var b=jindo.$Event(a);parent.mwAttach.dragoverFileHtml5(b);
}}}}else this.iframe.contentWindow.document.designMode="on";this.bWYSIWYGEnabled=!0,jindo.$Agent().navigator().firefox&&setTimeout(jindo.$Fn(function(){
this.iframe.contentWindow.document.execCommand("enableInlineTableEditing",!1,!1)},this).bind(),0)},_disableWYSIWYG:function(){
null!==this.iframe.contentWindow.document.body.contentEditable?(this.iframe.contentWindow.document.body.contentEditable=!1,
this.iframe.contentWindow.document.body.ondrop&&(this.iframe.contentWindow.document.body.ondrop=null,
this.iframe.contentWindow.document.body.ondragover=null)):this.iframe.contentWindow.document.designMode="off",
this.bWYSIWYGEnabled=!1}}).extend(nhn.husky.SE_EditingArea_WYSIWYG),nhn.husky.SE_EditingAreaManager=jindo.$Class({
$init:function(a,b,c,d,e,f){this.sDefaultEditingMode=a,this.elContentsField=jindo.$(b),this._assignHTMLElements(e),
this.fOnBeforeUnload=d,this.oEditingMode={},this.elContentsField.style.display="none",this.nMinWidth=parseInt(c.nMinWidth||60,10),
this.nMinHeight=parseInt(c.nMinHeight||60,10);var g=this._getSize([c.nWidth,c.width,this.elEditingAreaContainer.offsetWidth],this.nMinWidth),h=this._getSize([c.nHeight,c.height,this.elEditingAreaContainer.offsetHeight],this.nMinHeight);
this.elEditingAreaContainer.style.width=g.nSize+g.sUnit,this.elEditingAreaContainer.style.height=h.nSize+h.sUnit,
"px"===g.sUnit?e.style.width=g.nSize+2+"px":"%"===g.sUnit&&(e.style.minWidth=this.nMinWidth+"px"),this.sEditorType=f;
},$ON_MSG_APP_READY:function(){this.htOptions=this.oApp.htOptions[this.name]||{},this.sDefaultEditingMode=this.htOptions.sDefaultEditingMode||this.sDefaultEditingMode,
this.iframeWindow=this.oApp.getWYSIWYGWindow(),this.oApp.exec("REGISTER_CONVERTERS",[]),this.oApp.exec("CHANGE_EDITING_MODE",[this.sDefaultEditingMode,!0]),
this.oApp.exec("LOAD_CONTENTS_FIELD",[!1])},$AFTER_CHANGE_EDITING_MODE:function(a,b){if(this._oPrevActivePlugin){
var c=this._oPrevActivePlugin.getIR();if(c){if("HTMLSrc"==this._oPrevActivePlugin.sMode&&"WYSIWYG"==this.oActivePlugin.sMode){
if("write"===this.sEditorType){var d={mailBody:mwCore.changeInlineImageTag(c)};mcCore.requestAjax({fCallback:$Fn(function(a){
this.oApp.exec("SET_IR",[a.cleanBody]),this._setEditingAreaDimension(),this.startAutoResize(),b||this.oApp.delayedExec("FOCUS",[],0);
},this).bind(),oParameter:d,sUrl:"/json/write/preview/"})}else if("sign"===this.sEditorType){var d={
signData:c};mSign.requestAjax({fCallback:$Fn(function(a){var c=a.contents;"undefined"==typeof c&&(c=a.htmlText),
this.oApp.exec("SET_IR",[c]),this._setEditingAreaDimension(),this.startAutoResize(),b||this.oApp.delayedExec("FOCUS",[],0);
},this).bind(),oParam:d,sUrl:"/json/option/sign/preview/"})}return!1}this.oApp.exec("SET_IR",[c])}this._setEditingAreaDimension();
}this.startAutoResize(),b||this.oApp.delayedExec("FOCUS",[],0)},getContents:function(){for(var a,b=this.oApp.getIR(),c=$$("table p, table span",this.oApp.getWYSIWYGDocument().body),d=0;d<c.length;d++){
var e=c[d];e&&e.parentNode&&e.parentNode.tagName&&("TBODY"==e.parentNode.tagName||"TR"==e.parentNode.tagName)&&e.parentNode.removeChild(e);
}return a=this.oApp.applyConverter?this.oApp.applyConverter("IR_TO_DB",b,this.oApp.getWYSIWYGDocument()):b,
a=this._cleanContents(a)}}).extend(nhn.husky.SE_EditingAreaManager),nhn.husky.SE2M_LineStyler=jindo.$Class({
$ON_SET_LINE_STYLE:function(a,b,c){this.oSelection=this.oApp.getSelection();var d=this._getSelectedNodes(!1);
this.setLineStyle(a,b,c,d),this.oApp.exec("CHECK_STYLE_CHANGE",[]);for(var e=$$("table p, table span",oEditor.getWYSIWYGDocument().body),f=0;f<e.length;f++){
var g=e[f];g&&g.parentNode&&g.parentNode.tagName&&("TBODY"==g.parentNode.tagName||"TR"==g.parentNode.tagName)&&g.parentNode.removeChild(g);
}}}).extend(nhn.husky.SE2M_LineStyler),nhn.husky.SE2B_CSSLoader=jindo.$Class({$init:function(a){this.sEditorType=a;
},loadSE2CSS:function(a,b){if(this.bCssLoaded)return!0;this.bCssLoaded=!0;var c=null,d=mcCore.isNaver()?"":"nwe.";
return a&&(c=jindo.$Fn(this.oApp.exec,this.oApp).bind(a,b)),"local"==mCom.serverEnv?nhn.husky.SE2M_Utils.loadCSS("/css/src/se2_new/"+cCode+"/smart_editor2_items.me.min.css",c):nhn.husky.SE2M_Utils.loadCSS(this.htOptions.sCSSBaseURI+"smart_editor2_items.me.min."+d+mCom.cssVersion+".css",c),
!1}}).extend(nhn.husky.SE2B_CSSLoader),nhn.husky.SE2M_ExecCommand=jindo.$Class({_fixAlign:function(a){
{var b=this.oApp.getSelection(),c=[],d=null,e=null;this.oNavigator.ie?function(a){return a.tagName&&"TABLE"===a.tagName?(a.removeAttribute("align"),
!0):!1}:function(){}}b.collapsed?c[0]=b.startContainer:c=b.getNodes();for(var f=0,g=c.length;g>f;f++)d=c[f],
3===d.nodeType&&(d=d.parentNode),(!e||d!==e&&!jindo.$Element(d).isChildOf(e))&&(e=this._getAlignNode(d),
e&&e.align!==e.style.textAlign&&(e.style.textAlign=a,e.setAttribute("align",a)));for(var h=$$("table p, table span",oEditor.getWYSIWYGDocument().body),f=0;f<h.length;f++){
var i=h[f];i&&i.parentNode&&i.parentNode.tagName&&("TBODY"==i.parentNode.tagName||"TR"==i.parentNode.tagName)&&i.parentNode.removeChild(i);
}}}).extend(nhn.husky.SE2M_ExecCommand),nhn.husky.SE2M_Hyperlink=jindo.$Class({_assignHTMLElements:function(a){
this.oHyperlinkButton=jindo.$$.getSingle("li.husky_seditor_ui_hyperlink",a),this.oHyperlinkLayer=jindo.$$.getSingle("div.se2_layer",this.oHyperlinkButton),
this.oLinkInput=jindo.$$.getSingle("#temphypertext02",this.oHyperlinkLayer),this.oTextInput=jindo.$$.getSingle("#temphypertext01",this.oHyperlinkLayer),
this.oTestLink=jindo.$Element(jindo.$$.getSingle("a.link_check",this.oHyperlinkLayer)),this.oBtnConfirm=jindo.$$.getSingle("button.se2_apply",this.oHyperlinkLayer),
this.oBtnCancel=jindo.$$.getSingle("button.se2_cancel",this.oHyperlinkLayer)},$LOCAL_BEFORE_FIRST:function(a){
return a.match(/(REGISTER_CONVERTERS)/)?(this.oApp.acceptLocalBeforeFirstAgain(this,!0),!0):(this._assignHTMLElements(this.oApp.htOptions.elAppContainer),
this.sRXATagMarker=this.sATagMarker.replace(/\//g,"\\/").replace(/\./g,"\\."),this.oApp.registerBrowserEvent(this.oBtnConfirm,"click","APPLY_HYPERLINK"),
this.oApp.registerBrowserEvent(this.oBtnCancel,"click","HIDE_ACTIVE_LAYER"),this.oApp.registerBrowserEvent(this.oTestLink,"click","CHECK_LINK_STATUS"),
void this.oApp.registerBrowserEvent(this.oLinkInput,"keyup","EVENT_HYPERLINK_KEYUP"))},$ON_EVENT_HYPERLINK_KEYUP:function(a){
if(a.key().enter)this.oApp.exec("APPLY_HYPERLINK"),a.stop();else{var b=this.oLinkInput.value;/^((http|https|ftp|mailto):(?:\/\/)?)/.test(b)||(b="http://"+b),
b=b.replace(/\s+$/,""),this._validateURL(b)?(this.oTestLink.attr("href",b),this.oTestLink.removeClass("disabled")):this.oTestLink.addClass("disabled");
}},$ON_CHECK_LINK_STATUS:function(a){this.oTestLink.hasClass("disabled")&&a.stopDefault()},$ON_TOGGLE_HYPERLINK_LAYER:function(){
this.bLayerShown||(this.oApp.exec("IE_FOCUS",[]),this.oSelection=this.oApp.getSelection()),this.oApp.delayedExec("TOGGLE_TOOLBAR_ACTIVE_LAYER",[this.oHyperlinkLayer,null,"MSG_HYPERLINK_LAYER_SHOWN",[],"MSG_HYPERLINK_LAYER_HIDDEN",[""]],0),
this.oApp.exec("MSG_NOTIFY_CLICKCR",["hyperlink"])},$ON_APPLY_HYPERLINK:function(){if(!this._validateTarget())return void alert(this.oApp.$MSG("SE_Hyperlink.invalidTarget"));
var a=this.oLinkInput.value;/^((http|https|ftp|mailto):(?:\/\/)?)/.test(a)||(a="http://"+a),a=a.replace(/\s+$/,"");
var b=jindo.$Agent().navigator();if(this.oApp.exec("IE_FOCUS",[]),this._validateURL(a)){var c="_self";
this.oApp.exec("RECORD_UNDO_BEFORE_ACTION",["HYPERLINK",{sSaveTarget:this.bModify?"A":null}]);var d=this.oSelection.placeStringBookmark();
this.oSelection.select(),!b.ie||8!==b.version&&8!==b.nativeVersion||(this.oApp.exec("IE_FOCUS",[]),this.oSelection.moveToBookmark(d),
this.oSelection.select()),this.bTextEditable&&this.oSelection.getTextNodes().length>1&&(this.oSelection.deleteContents(),
this.bEmptySelection=!0),(b.firefox||b.ie)&&(this.oSelection.collapsed||this.bEmptySelection)?(this.oSelection.pasteHTML('<a href="#">&nbsp;</a>'),
this.oSelection.moveToBookmark(d),this.oSelection.select()):this.bEmptySelection&&(this.oSelection.collapseToStart(),
this.oSelection.select());var e=Math.ceil(1e4*Math.random());if(""==a)this.oApp.exec("EXECCOMMAND",["unlink"]);else if(this._isExceptional()){
this.oApp.exec("EXECCOMMAND",["unlink",!1,"",{bDontAddUndoHistory:!0}]);var f="<a href='"+a+"' target="+c+">";
jindo.$A(this.oSelection.getNodes(!0)).forEach(function(a){var b=this.oApp.getEmptySelection();3===a.nodeType?(b.selectNode(a),
b.pasteHTML(f+a.nodeValue+"</a>")):1===a.nodeType&&"IMG"===a.tagName&&(b.selectNode(a),b.pasteHTML(f+jindo.$Element(a).outerHTML()+"</a>"));
},this)}else this.oApp.exec("EXECCOMMAND",["createLink",!1,this.sATagMarker+e+encodeURIComponent(a),{
bDontAddUndoHistory:!0}]);for(var g,h=this.oApp.getWYSIWYGDocument(),i=h.body.getElementsByTagName("A"),j=i.length,k=new RegExp(this.sRXATagMarker+e,"gi"),l=0;j>l;l++){
g=i[l];var m="";try{m=g.getAttribute("href")}catch(n){}if(m&&m.match(k)){var o=m.replace(k,""),p=decodeURIComponent(o);
if(b.ie)jindo.$Element(g).attr({href:p,target:c}).css("cursor","pointer");else{var q=jindo.$Element(g).html();
jindo.$Element(g).attr({href:p,target:c}).css("cursor","pointer"),this._validateURL(q)&&jindo.$Element(g).html(jindo.$Element(g).attr("href"));
}if(this.oSelection.collapsed||this.bTextEditable){var r=""!==jindo.$S(this.oTextInput.value).trim().$value()?this.oTextInput.value:a;
jindo.$Element(g).text(r).css("white-space","pre"),this.oSelection.selectNode(g),d=this.oSelection.placeStringBookmark();
}}}this.oApp.exec("HIDE_ACTIVE_LAYER"),setTimeout(jindo.$Fn(function(){var a=this.oApp.getEmptySelection();
a.moveToBookmark(d),a.collapseToEnd(),a.select(),a.removeStringBookmark(d),this.oApp.exec("FOCUS"),this.oApp.exec("RECORD_UNDO_AFTER_ACTION",["HYPERLINK",{
sSaveTarget:this.bModify?"A":null}])},this).bind(),17)}else alert(this.oApp.$MSG("SE_Hyperlink.invalidURL")),
this.oLinkInput.focus()},$ON_MSG_HYPERLINK_LAYER_SHOWN:function(){this.bLayerShown=!0,this.bTextEditable=!0,
this.bEmptySelection=!1,this.oLinkInput.value="",this.oTextInput.disabled=!1,this.oTestLink.attr("href","#"),
this.oTestLink.addClass("disabled");var a=this.oSelection.findAncestorByTagName("A");a||(a=this._getSelectedNode()),
a&&!this.oSelection.collapsed?this._setLayerForUpdateLink(a):this.oSelection.collapsed?(this.oTextInput.value="",
this.bModify=!1,this.oTextInput.focus()):this._setLayer(),this.oApp.delayedExec("SELECT_UI",["hyperlink"],0),
this.oSelection.collapsed||this.oLinkInput.focus()},_setLayer:function(){var a=jindo.$A(["img","br","li","ol","ul","tr","td","dl","dt"]),b=jindo.$Agent().navigator(),c="";
jindo.$A(this.oSelection.getNodes(!0)).forEach(function(b){3===b.nodeType&&(c+=b.nodeValue?$S(b.nodeValue).trim().$value():""),
1!==b.nodeType||!a.has(b.tagName.toLowerCase())&&"block"!==$Element(b).css("display")||("img"===b.tagName.toLowerCase()&&(c+="img"),
this.bTextEditable=!1)},this),b.ie&&(c=$S(c).escape().$value().replace(/^\s+|\s+$|\\A0|\\u200B/g,"")),
(!c||!b.ie&&""==$S(c).trim().$value())&&(this.bTextEditable=!0,this.bEmptySelection=!0),this.bTextEditable?this.oTextInput.value=this.bTextEditable&&this.bEmptySelection?"":this.oSelection.toString():(this.oTextInput.value=this.oApp.$MSG("SE_Hyperlink.selectedArea"),
this.oTextInput.disabled=!0),this.bModify=!1},_setLayerForUpdateLink:function(a){this.oSelection.selectNode(a),
this.oSelection.select(),this.bModify=!0;try{var b=a.getAttribute("href");b=b&&-1==b.indexOf("#")?b:"",
""!==b&&(this.oTestLink.attr("href",b),this.oTestLink.removeClass("disabled")),this.oLinkInput.value=b;
}catch(c){this.oLinkInput.value=""}var d=jindo.$Element(a).child(function(a){return"img"===a.tag.toLowerCase();
});d.length>0?(this.bTextEditable=!1,this.oTextInput.disabled=!0,this.oTextInput.value=this.oApp.$MSG("SE_Hyperlink.selectedArea")):this.oTextInput.value=jindo.$Element(a).text();
},_validateURL:function(a){if(!a)return!1;try{var b=a.split("?");b[0]=b[0].replace(/%[a-z0-9]{2}/gi,"U"),
decodeURIComponent(b[0])}catch(c){return!1}return/^(http|https|ftp|mailto):(\/\/)?(([-가-힣]|\w)+(?:[\/\.:@]([-가-힣]|\w)+)+)\/?(.*)?\s*$/i.test(a);
},irToDb:function(a){if(!this._bDisabled){var b="@"+(new Date).getTime()+"@",c=new RegExp(b,"g");if(document.createTreeWalker){
for(var d,e=function(a){var b=a.parentNode;if(b){if("A"===b.tagName)return NodeFilter.FILTER_SKIP;if(b.parentNode){
if("A"===b.parentNode.tagName)return NodeFilter.FILTER_SKIP;if(b.parentNode.parentNode&&"A"===b.parentNode.parentNode.tagName)return NodeFilter.FILTER_SKIP;
}}return NodeFilter.FILTER_ACCEPT},f=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,e,!1),g=[];d=f.nextNode();)g.push(d);
f=null;for(var h=0;h<g.length;h++)if(d=g[h],"string"==typeof d.nodeValue)if(/(&nbsp|\s)?(((?!http[s]?:\/\/)www\.(?:(?!\&nbsp;|\s|\(|\)|"|').)+)|(http[s]?:\/\/(?:(?!&nbsp;|\s|\(|\)|"|').)+))/.test(d.nodeValue)){
var i=d.parentNode;if(!i)continue;for(var j=i.childNodes,k="",l=0;l<j.length;l++)k+=j[l]===d?j[l].textContent.replace(/</g,"&lt;").replace(/(&nbsp|\s)?(((?!http[s]?:\/\/)www\.(?:(?!\&nbsp;|\s|\(|\)|"|').)+)|(http[s]?:\/\/(?:(?!&nbsp;|\s|\(|\)|"|').)+))/gi,this._generateAutoLink):8===j[l].nodeType?"<!--"+j[l].textContent+"-->":j[l].outerHTML?j[l].outerHTML:j[l].textContent?j[l].textContent.replace(/</g,"&lt;"):j[l].nodeValue.replace(/</g,"&lt;");
i.innerHTML&&(i.innerHTML=k)}else c.test(d.nodeValue)&&(d.nodeValue=d.nodeValue.replace(c,""))}else{
var m=a.cloneNode(!0);try{m.innerHTML}catch(n){m=jindo.$(a.outerHTML)}for(var o,p,q=this.oApp.getEmptySelection(),r=q._getFirstRealChild(m),s=q._getLastRealChild(m),t=jindo.$A(q._getNodesBetween(r,s)),u=t.filter(function(a){
return a&&3===a.nodeType}).$value(),v=u,w=u,x=this.oApp.getWYSIWYGDocument().createElement("DIV"),l=0,y=u.length;y>l;l++){
for(o=v[l].parentNode,p=!1;o;){if("A"===o.tagName||"PRE"===o.tagName){p=!0;break}o=o.parentNode}if(!p){
x.innerHTML="";try{x.appendChild(v[l].cloneNode(!0)),x.innerHTML=(b+x.innerHTML).replace(/(&nbsp|\s)?(((?!http[s]?:\/\/)www\.(?:(?!\&nbsp;|\s|\(|\)|"|').)+)|(http[s]?:\/\/(?:(?!&nbsp;|\s|\(|\)|"|').)+))/gi,this._generateAutoLink),
v[l].parentNode.insertBefore(x,v[l]),v[l].parentNode.removeChild(v[l])}catch(z){}for(;x.firstChild;)x.parentNode.insertBefore(x.firstChild,x);
x.parentNode.removeChild(x)}}x=q=r=s=t=u=v=w=o=null,m.innerHTML=m.innerHTML.replace(c,""),a.innerHTML=m.innerHTML,
m=null}}}}).extend(nhn.husky.SE2M_Hyperlink),nhn.husky.SE2M_SCharacter=jindo.$Class({sLocale:"ko_KR",
$init:function(a,b,c){this.sLocale=b,this.sEditorType=c},_assignHTMLObjects:function(a){a=jindo.$(a)||document,
this.elDropdownLayer=jindo.$$.getSingle("DIV.husky_seditor_sCharacter_layer",a),this.oTextField=jindo.$$.getSingle("INPUT",this.elDropdownLayer),
this.oInsertButton=jindo.$$.getSingle("BUTTON.se2_confirm",this.elDropdownLayer),this.aCloseButton=jindo.$$("BUTTON.husky_se2m_sCharacter_close",this.elDropdownLayer);
var b=jindo.$$.getSingle("UL.se2_char_tab",this.elDropdownLayer);this.aSCharList=jindo.$$("UL.husky_se2m_sCharacter_list",b),
this.aLabel=jindo.$$(">LI",b),this.oRecentSCharDiv=jindo.$$.getSingle("DIV.se2_recent_character",this.elDropdownLayer),
this.aRecentSCharList=jindo.$$.getSingle("UL.husky_se2m_sCharacter_list",this.oRecentSCharDiv)},$LOCAL_BEFORE_FIRST:function(){
this.bIE=jindo.$Agent().navigator().ie,this._assignHTMLObjects(this.oApp.htOptions.elAppContainer),this.charSet=[],
"ko_KR"===this.sLocale?(this.charSet[0]=unescape("FF5B FF5D 3014 3015 3008 3009 300A 300B 300C 300D 300E 300F 3010 3011 2018 2019 201C 201D 3001 3002 %B7 2025 2026 %A7 203B 2606 2605 25CB 25CF 25CE 25C7 25C6 25A1 25A0 25B3 25B2 25BD 25BC 25C1 25C0 25B7 25B6 2664 2660 2661 2665 2667 2663 2299 25C8 25A3 25D0 25D1 2592 25A4 25A5 25A8 25A7 25A6 25A9 %B1 %D7 %F7 2260 2264 2265 221E 2234 %B0 2032 2033 2220 22A5 2312 2202 2261 2252 226A 226B 221A 223D 221D 2235 222B 222C 2208 220B 2286 2287 2282 2283 222A 2229 2227 2228 FFE2 21D2 21D4 2200 2203 %B4 FF5E 02C7 02D8 02DD 02DA 02D9 %B8 02DB %A1 %BF 02D0 222E 2211 220F 266D 2669 266A 266C 327F 2192 2190 2191 2193 2194 2195 2197 2199 2196 2198 321C 2116 33C7 2122 33C2 33D8 2121 2668 260F 260E 261C 261E %B6 2020 2021 %AE %AA %BA 2642 2640").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[1]=unescape("%BD 2153 2154 %BC %BE 215B 215C 215D 215E %B9 %B2 %B3 2074 207F 2081 2082 2083 2084 2160 2161 2162 2163 2164 2165 2166 2167 2168 2169 2170 2171 2172 2173 2174 2175 2176 2177 2178 2179 FFE6 %24 FFE5 FFE1 20AC 2103 212B 2109 FFE0 %A4 2030 3395 3396 3397 2113 3398 33C4 33A3 33A4 33A5 33A6 3399 339A 339B 339C 339D 339E 339F 33A0 33A1 33A2 33CA 338D 338E 338F 33CF 3388 3389 33C8 33A7 33A8 33B0 33B1 33B2 33B3 33B4 33B5 33B6 33B7 33B8 33B9 3380 3381 3382 3383 3384 33BA 33BB 33BC 33BD 33BE 33BF 3390 3391 3392 3393 3394 2126 33C0 33C1 338A 338B 338C 33D6 33C5 33AD 33AE 33AF 33DB 33A9 33AA 33AB 33AC 33DD 33D0 33D3 33C3 33C9 33DC 33C6").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[2]=unescape("3260 3261 3262 3263 3264 3265 3266 3267 3268 3269 326A 326B 326C 326D 326E 326F 3270 3271 3272 3273 3274 3275 3276 3277 3278 3279 327A 327B 24D0 24D1 24D2 24D3 24D4 24D5 24D6 24D7 24D8 24D9 24DA 24DB 24DC 24DD 24DE 24DF 24E0 24E1 24E2 24E3 24E4 24E5 24E6 24E7 24E8 24E9 2460 2461 2462 2463 2464 2465 2466 2467 2468 2469 246A 246B 246C 246D 246E 3200 3201 3202 3203 3204 3205 3206 3207 3208 3209 320A 320B 320C 320D 320E 320F 3210 3211 3212 3213 3214 3215 3216 3217 3218 3219 321A 321B 249C 249D 249E 249F 24A0 24A1 24A2 24A3 24A4 24A5 24A6 24A7 24A8 24A9 24AA 24AB 24AC 24AD 24AE 24AF 24B0 24B1 24B2 24B3 24B4 24B5 2474 2475 2476 2477 2478 2479 247A 247B 247C 247D 247E 247F 2480 2481 2482").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[3]=unescape("3131 3132 3133 3134 3135 3136 3137 3138 3139 313A 313B 313C 313D 313E 313F 3140 3141 3142 3143 3144 3145 3146 3147 3148 3149 314A 314B 314C 314D 314E 314F 3150 3151 3152 3153 3154 3155 3156 3157 3158 3159 315A 315B 315C 315D 315E 315F 3160 3161 3162 3163 3165 3166 3167 3168 3169 316A 316B 316C 316D 316E 316F 3170 3171 3172 3173 3174 3175 3176 3177 3178 3179 317A 317B 317C 317D 317E 317F 3180 3181 3182 3183 3184 3185 3186 3187 3188 3189 318A 318B 318C 318D 318E").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[4]=unescape("0391 0392 0393 0394 0395 0396 0397 0398 0399 039A 039B 039C 039D 039E 039F 03A0 03A1 03A3 03A4 03A5 03A6 03A7 03A8 03A9 03B1 03B2 03B3 03B4 03B5 03B6 03B7 03B8 03B9 03BA 03BB 03BC 03BD 03BE 03BF 03C0 03C1 03C3 03C4 03C5 03C6 03C7 03C8 03C9 %C6 %D0 0126 0132 013F 0141 %D8 0152 %DE 0166 014A %E6 0111 %F0 0127 I 0133 0138 0140 0142 0142 0153 %DF %FE 0167 014B 0149 0411 0413 0414 0401 0416 0417 0418 0419 041B 041F 0426 0427 0428 0429 042A 042B 042C 042D 042E 042F 0431 0432 0433 0434 0451 0436 0437 0438 0439 043B 043F 0444 0446 0447 0448 0449 044A 044B 044C 044D 044E 044F").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[5]=unescape("3041 3042 3043 3044 3045 3046 3047 3048 3049 304A 304B 304C 304D 304E 304F 3050 3051 3052 3053 3054 3055 3056 3057 3058 3059 305A 305B 305C 305D 305E 305F 3060 3061 3062 3063 3064 3065 3066 3067 3068 3069 306A 306B 306C 306D 306E 306F 3070 3071 3072 3073 3074 3075 3076 3077 3078 3079 307A 307B 307C 307D 307E 307F 3080 3081 3082 3083 3084 3085 3086 3087 3088 3089 308A 308B 308C 308D 308E 308F 3090 3091 3092 3093 30A1 30A2 30A3 30A4 30A5 30A6 30A7 30A8 30A9 30AA 30AB 30AC 30AD 30AE 30AF 30B0 30B1 30B2 30B3 30B4 30B5 30B6 30B7 30B8 30B9 30BA 30BB 30BC 30BD 30BE 30BF 30C0 30C1 30C2 30C3 30C4 30C5 30C6 30C7 30C8 30C9 30CA 30CB 30CC 30CD 30CE 30CF 30D0 30D1 30D2 30D3 30D4 30D5 30D6 30D7 30D8 30D9 30DA 30DB 30DC 30DD 30DE 30DF 30E0 30E1 30E2 30E3 30E4 30E5 30E6 30E7 30E8 30E9 30EA 30EB 30EC 30ED 30EE 30EF 30F0 30F1 30F2 30F3 30F4 30F5 30F6").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" ")):"ja_JP"===this.sLocale?(this.charSet[0]=unescape("FF5B FF5D 3014 3015 3008 3009 300A 300B 300C 300D 300E 300F 3010 3011 2018 2019 201C 201D 3001 3002 %B7 2025 2026 %A7 203B 2606 2605 25CB 25CF 25CE 25C7 25C6 25A1 25A0 25B3 25B2 25BD 25BC 25C1 25C0 25B7 25B6 2664 2660 2661 2665 2667 2663 2299 25C8 25A3 25D0 25D1 2592 25A4 25A5 25A8 25A7 25A6 25A9 %B1 %D7 %F7 2260 2264 2265 221E 2234 %B0 2032 2033 2220 22A5 2312 2202 2261 2252 226A 226B 221A 223D 221D 2235 222B 222C 2208 220B 2286 2287 2282 2283 222A 2229 2227 2228 FFE2 21D2 21D4 2200 2203 %B4 FF5E 02C7 02D8 02DD 02DA 02D9 %B8 02DB %A1 %BF 02D0 222E 2211 220F 266D 2669 266A 266C 327F 2192 2190 2191 2193 2194 2195 2197 2199 2196 2198 321C 2116 33C7 2122 33C2 33D8 2121 2668 260F 260E 261C 261E %B6 2020 2021 %AE %AA %BA 2642 2640").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[1]=unescape("%BD 2153 2154 %BC %BE 215B 215C 215D 215E %B9 %B2 %B3 2074 207F 2081 2082 2083 2084 2160 2161 2162 2163 2164 2165 2166 2167 2168 2169 2170 2171 2172 2173 2174 2175 2176 2177 2178 2179 FFE6 %24 FFE5 FFE1 20AC 2103 212B 2109 FFE0 %A4 2030 3395 3396 3397 2113 3398 33C4 33A3 33A4 33A5 33A6 3399 339A 339B 339C 339D 339E 339F 33A0 33A1 33A2 33CA 338D 338E 338F 33CF 3388 3389 33C8 33A7 33A8 33B0 33B1 33B2 33B3 33B4 33B5 33B6 33B7 33B8 33B9 3380 3381 3382 3383 3384 33BA 33BB 33BC 33BD 33BE 33BF 3390 3391 3392 3393 3394 2126 33C0 33C1 338A 338B 338C 33D6 33C5 33AD 33AE 33AF 33DB 33A9 33AA 33AB 33AC 33DD 33D0 33D3 33C3 33C9 33DC 33C6").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[2]=unescape("24D0 24D1 24D2 24D3 24D4 24D5 24D6 24D7 24D8 24D9 24DA 24DB 24DC 24DD 24DE 24DF 24E0 24E1 24E2 24E3 24E4 24E5 24E6 24E7 24E8 24E9 2460 2461 2462 2463 2464 2465 2466 2467 2468 2469 246A 246B 246C 246D 246E 249C 249D 249E 249F 24A0 24A1 24A2 24A3 24A4 24A5 24A6 24A7 24A8 24A9 24AA 24AB 24AC 24AD 24AE 24AF 24B0 24B1 24B2 24B3 24B4 24B5 2474 2475 2476 2477 2478 2479 247A 247B 247C 247D 247E 247F 2480 2481 2482").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[3]=unescape("3041 3042 3043 3044 3045 3046 3047 3048 3049 304A 304B 304C 304D 304E 304F 3050 3051 3052 3053 3054 3055 3056 3057 3058 3059 305A 305B 305C 305D 305E 305F 3060 3061 3062 3063 3064 3065 3066 3067 3068 3069 306A 306B 306C 306D 306E 306F 3070 3071 3072 3073 3074 3075 3076 3077 3078 3079 307A 307B 307C 307D 307E 307F 3080 3081 3082 3083 3084 3085 3086 3087 3088 3089 308A 308B 308C 308D 308E 308F 3090 3091 3092 3093 30A1 30A2 30A3 30A4 30A5 30A6 30A7 30A8 30A9 30AA 30AB 30AC 30AD 30AE 30AF 30B0 30B1 30B2 30B3 30B4 30B5 30B6 30B7 30B8 30B9 30BA 30BB 30BC 30BD 30BE 30BF 30C0 30C1 30C2 30C3 30C4 30C5 30C6 30C7 30C8 30C9 30CA 30CB 30CC 30CD 30CE 30CF 30D0 30D1 30D2 30D3 30D4 30D5 30D6 30D7 30D8 30D9 30DA 30DB 30DC 30DD 30DE 30DF 30E0 30E1 30E2 30E3 30E4 30E5 30E6 30E7 30E8 30E9 30EA 30EB 30EC 30ED 30EE 30EF 30F0 30F1 30F2 30F3 30F4 30F5 30F6").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[4]=unescape("0391 0392 0393 0394 0395 0396 0397 0398 0399 039A 039B 039C 039D 039E 039F 03A0 03A1 03A3 03A4 03A5 03A6 03A7 03A8 03A9 03B1 03B2 03B3 03B4 03B5 03B6 03B7 03B8 03B9 03BA 03BB 03BC 03BD 03BE 03BF 03C0 03C1 03C3 03C4 03C5 03C6 03C7 03C8 03C9 %C6 %D0 0126 0132 013F 0141 %D8 0152 %DE 0166 014A %E6 0111 %F0 0127 I 0133 0138 0140 0142 0142 0153 %DF %FE 0167 014B 0149 0411 0413 0414 0401 0416 0417 0418 0419 041B 041F 0426 0427 0428 0429 042A 042B 042C 042D 042E 042F 0431 0432 0433 0434 0451 0436 0437 0438 0439 043B 043F 0444 0446 0447 0448 0449 044A 044B 044C 044D 044E 044F").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[5]=unescape("3131 3132 3133 3134 3135 3136 3137 3138 3139 313A 313B 313C 313D 313E 313F 3140 3141 3142 3143 3144 3145 3146 3147 3148 3149 314A 314B 314C 314D 314E 314F 3150 3151 3152 3153 3154 3155 3156 3157 3158 3159 315A 315B 315C 315D 315E 315F 3160 3161 3162 3163 3165 3166 3167 3168 3169 316A 316B 316C 316D 316E 316F 3170 3171 3172 3173 3174 3175 3176 3177 3178 3179 317A 317B 317C 317D 317E 317F 3180 3181 3182 3183 3184 3185 3186 3187 3188 3189 318A 318B 318C 318D 318E").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" ")):(this.charSet[0]=unescape("FF5B FF5D 3014 3015 3008 3009 300A 300B 300C 300D 300E 300F 3010 3011 2018 2019 201C 201D 3001 3002 %B7 2025 2026 %A7 203B 2606 2605 25CB 25CF 25CE 25C7 25C6 25A1 25A0 25B3 25B2 25BD 25BC 25C1 25C0 25B7 25B6 2664 2660 2661 2665 2667 2663 2299 25C8 25A3 25D0 25D1 2592 25A4 25A5 25A8 25A7 25A6 25A9 %B1 %D7 %F7 2260 2264 2265 221E 2234 %B0 2032 2033 2220 22A5 2312 2202 2261 2252 226A 226B 221A 223D 221D 2235 222B 222C 2208 220B 2286 2287 2282 2283 222A 2229 2227 2228 FFE2 21D2 21D4 2200 2203 %B4 FF5E 02C7 02D8 02DD 02DA 02D9 %B8 02DB %A1 %BF 02D0 222E 2211 220F 266D 2669 266A 266C 327F 2192 2190 2191 2193 2194 2195 2197 2199 2196 2198 321C 2116 33C7 2122 33C2 33D8 2121 2668 260F 260E 261C 261E %B6 2020 2021 %AE %AA %BA 2642 2640").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[1]=unescape("%BD 2153 2154 %BC %BE 215B 215C 215D 215E %B9 %B2 %B3 2074 207F 2081 2082 2083 2084 2160 2161 2162 2163 2164 2165 2166 2167 2168 2169 2170 2171 2172 2173 2174 2175 2176 2177 2178 2179 FFE6 %24 FFE5 FFE1 20AC 2103 212B 2109 FFE0 %A4 2030 3395 3396 3397 2113 3398 33C4 33A3 33A4 33A5 33A6 3399 339A 339B 339C 339D 339E 339F 33A0 33A1 33A2 33CA 338D 338E 338F 33CF 3388 3389 33C8 33A7 33A8 33B0 33B1 33B2 33B3 33B4 33B5 33B6 33B7 33B8 33B9 3380 3381 3382 3383 3384 33BA 33BB 33BC 33BD 33BE 33BF 3390 3391 3392 3393 3394 2126 33C0 33C1 338A 338B 338C 33D6 33C5 33AD 33AE 33AF 33DB 33A9 33AA 33AB 33AC 33DD 33D0 33D3 33C3 33C9 33DC 33C6").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[2]=unescape("24D0 24D1 24D2 24D3 24D4 24D5 24D6 24D7 24D8 24D9 24DA 24DB 24DC 24DD 24DE 24DF 24E0 24E1 24E2 24E3 24E4 24E5 24E6 24E7 24E8 24E9 2460 2461 2462 2463 2464 2465 2466 2467 2468 2469 246A 246B 246C 246D 246E 249C 249D 249E 249F 24A0 24A1 24A2 24A3 24A4 24A5 24A6 24A7 24A8 24A9 24AA 24AB 24AC 24AD 24AE 24AF 24B0 24B1 24B2 24B3 24B4 24B5 2474 2475 2476 2477 2478 2479 247A 247B 247C 247D 247E 247F 2480 2481 2482").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[3]=unescape("3131 3132 3133 3134 3135 3136 3137 3138 3139 313A 313B 313C 313D 313E 313F 3140 3141 3142 3143 3144 3145 3146 3147 3148 3149 314A 314B 314C 314D 314E 314F 3150 3151 3152 3153 3154 3155 3156 3157 3158 3159 315A 315B 315C 315D 315E 315F 3160 3161 3162 3163 3165 3166 3167 3168 3169 316A 316B 316C 316D 316E 316F 3170 3171 3172 3173 3174 3175 3176 3177 3178 3179 317A 317B 317C 317D 317E 317F 3180 3181 3182 3183 3184 3185 3186 3187 3188 3189 318A 318B 318C 318D 318E").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[4]=unescape("0391 0392 0393 0394 0395 0396 0397 0398 0399 039A 039B 039C 039D 039E 039F 03A0 03A1 03A3 03A4 03A5 03A6 03A7 03A8 03A9 03B1 03B2 03B3 03B4 03B5 03B6 03B7 03B8 03B9 03BA 03BB 03BC 03BD 03BE 03BF 03C0 03C1 03C3 03C4 03C5 03C6 03C7 03C8 03C9 %C6 %D0 0126 0132 013F 0141 %D8 0152 %DE 0166 014A %E6 0111 %F0 0127 I 0133 0138 0140 0142 0142 0153 %DF %FE 0167 014B 0149 0411 0413 0414 0401 0416 0417 0418 0419 041B 041F 0426 0427 0428 0429 042A 042B 042C 042D 042E 042F 0431 0432 0433 0434 0451 0436 0437 0438 0439 043B 043F 0444 0446 0447 0448 0449 044A 044B 044C 044D 044E 044F").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" "),this.charSet[5]=unescape("3041 3042 3043 3044 3045 3046 3047 3048 3049 304A 304B 304C 304D 304E 304F 3050 3051 3052 3053 3054 3055 3056 3057 3058 3059 305A 305B 305C 305D 305E 305F 3060 3061 3062 3063 3064 3065 3066 3067 3068 3069 306A 306B 306C 306D 306E 306F 3070 3071 3072 3073 3074 3075 3076 3077 3078 3079 307A 307B 307C 307D 307E 307F 3080 3081 3082 3083 3084 3085 3086 3087 3088 3089 308A 308B 308C 308D 308E 308F 3090 3091 3092 3093 30A1 30A2 30A3 30A4 30A5 30A6 30A7 30A8 30A9 30AA 30AB 30AC 30AD 30AE 30AF 30B0 30B1 30B2 30B3 30B4 30B5 30B6 30B7 30B8 30B9 30BA 30BB 30BC 30BD 30BE 30BF 30C0 30C1 30C2 30C3 30C4 30C5 30C6 30C7 30C8 30C9 30CA 30CB 30CC 30CD 30CE 30CF 30D0 30D1 30D2 30D3 30D4 30D5 30D6 30D7 30D8 30D9 30DA 30DB 30DC 30DD 30DE 30DF 30E0 30E1 30E2 30E3 30E4 30E5 30E6 30E7 30E8 30E9 30EA 30EB 30EC 30ED 30EE 30EF 30F0 30F1 30F2 30F3 30F4 30F5 30F6").replace(/(\S{4})/g,function(a){
return"%u"+a}).split(" ")),this.maxRecentChar=20;var a=jindo.$Fn(this.oApp.exec,this.oApp).bind("INSERT_SCHARACTERS",[this.oTextField.value]);
jindo.$Fn(a,this).attach(this.oInsertButton,"click"),this.oApp.exec("SET_SCHARACTER_LIST",[this.charSet]);
for(var b=0;b<this.aLabel.length;b++){var c=jindo.$Fn(this.oApp.exec,this.oApp).bind("CHANGE_SCHARACTER_SET",[b]);
jindo.$Fn(c,this).attach(this.aLabel[b].firstChild,"mousedown")}for(var b=0;b<this.aCloseButton.length;b++)this.oApp.registerBrowserEvent(this.aCloseButton[b],"click","HIDE_ACTIVE_LAYER",[]);
this.oApp.registerBrowserEvent(this.elDropdownLayer,"click","EVENT_SCHARACTER_CLICKED",[]),this.oApp.registerBrowserEvent(this.oTextField,"keydown","EVENT_SCHARACTER_KEYDOWN");
},$ON_MSG_SCHARACTER_LAYER_SHOWN:function(){this.oTextField.focus(),this.oApp.exec("SET_RECENT_SCHARACTER_SET"),
this.oApp.exec("SELECT_UI",["sCharacter"])},$ON_SELECT_SCHARACTER:function(a){if(this.oTextField.value+=a,
this.oTextField.createTextRange){var b=this.oTextField.createTextRange();b.collapse(!1),b.select()}else this.oTextField.selectionEnd&&(this.oTextField.selectionEnd=this.oTextField.value.length,
this.oTextField.focus());var c=this.recentCharSet.indexOf(a);c>=0&&this.recentCharSet.splice(c,1);var d=this.recentCharSet.unshift(a);
d>this.maxRecentChar&&this.recentCharSet.pop(),this._drawRecentSCharListCallback(),this._addRecentSCharacter(a);
},$ON_SET_RECENT_SCHARACTER_SET:function(){var a;"write"===this.sEditorType?a=mcCore.requestAjax:"sign"===this.sEditorType&&(a=mSign.requestAjax),
a&&a({fCallback:$Fn(this._drawRecentSCharListCallback,this).bind(),sUrl:"/json/option/recentSymbol/get"
})},_drawRecentSCharListCallback:function(a){var b,c="";this.recentCharSet=a?jindo.$A(a.recentSymbol.split("")):this.recentCharSet;
for(var d=0;d<this.maxRecentChar;d++)b=this.recentCharSet.get(d)||"",c+="<li><button type='button'><span>"+b+"</span></button></li>";
this.aRecentSCharList.innerHTML=c},_addRecentSCharacter:function(a){var b,c={symbol:a};"write"===this.sEditorType?b=mcCore.requestAjax:"sign"===this.sEditorType&&(b=mSign.requestAjax),
b&&b({sUrl:"/json/option/recentSymbol/add",oParameter:c,fCallback:function(){}})}}).extend(nhn.husky.SE2M_SCharacter),
nhn.husky.SE2M_TableCreator=jindo.$Class({$ON_REGISTER_CONVERTERS:function(){this.elSimpleLayer=jindo.$$.getSingle("DIV.generate_table"),
this.elBtn_detail=jindo.$$.getSingle("a.btn_table_set",this.elSimpleLayer),this.elSimpleTable=jindo.$$.getSingle("TABLE.generate_grid",this.elSimpleLayer),
this.welGrid=jindo.$Element(jindo.$$.getSingle("DIV.generate_grid_selection")),this.elColCount=jindo.$$.getSingle(".table_col_cnt",this.elSimpleLayer),
this.elRowCount=jindo.$$.getSingle(".table_row_cnt",this.elSimpleLayer),this.oApp.exec("ADD_CONVERTER_DOM",["IR_TO_DB",jindo.$Fn(this.irToDbDOM,this).bind()]),
this.oApp.exec("ADD_CONVERTER_DOM",["DB_TO_IR",jindo.$Fn(this.dbToIrDOM,this).bind()]),this.oApp.bMobile||(this.oApp.registerBrowserEvent(this.elSimpleTable,"mouseover","EVENT_MOUSEOVER_SIMPLE_TABLE"),
this.oApp.registerBrowserEvent(this.elSimpleTable,"click","EVENT_CLICK_SIMPLE_TABLE")),this.oApp.registerBrowserEvent(this.elBtn_detail,"click","OPEN_CREATE_TABLE_DETAIL");
},$ON_TOGGLE_TABLE_LAYER:function(){this.welDropdownLayer.visible()?this.oApp.exec("TOGGLE_TOOLBAR_ACTIVE_LAYER",[this.elDropdownLayer,null,"SELECT_UI",["table"],"TABLE_CLOSE",[]]):(this._initDefaultTable(),
this.oApp.exec("TOGGLE_TOOLBAR_ACTIVE_LAYER",[this.elSimpleLayer,null,"SELECT_UI",["table"],"TABLE_CLOSE",[]])),
this.oApp.exec("MSG_NOTIFY_CLICKCR",["table"])},$ON_OPEN_CREATE_TABLE_DETAIL:function(a){a.stop(),this._showNewTable(),
this.oApp.exec("TOGGLE_TOOLBAR_ACTIVE_LAYER",[this.elDropdownLayer,null,"SELECT_UI",["table"],"TABLE_CLOSE",[]]);
},$ON_EVENT_MOUSEOVER_SIMPLE_TABLE:function(a){a&&a.stop();var b=a.element,c=b.cellIndex+1,d=b.parentNode.rowIndex+1;
isNaN(c)||isNaN(d)||(this.welGrid.css("width",16*c+"px").css("height",16*d+"px"),this.elColCount.innerHTML=c,
this.elRowCount.innerHTML=d)},$ON_EVENT_CLICK_SIMPLE_TABLE:function(a){a&&a.stop();var b=a.element,c=b.cellIndex+1,d=b.parentNode.rowIndex+1;
this.elText_col.value=parseInt(c,10)||this.elColCount.innerHTML,this.elText_row.value=parseInt(d,10)||this.elRowCount.innerHTML,
this.oApp.exec("TABLE_ENABLE_TEMPLATE_STYLE"),this._selectTableStyle(1),this.oApp.exec("TABLE_INSERT");
},_initDefaultTable:function(){this.welGrid.css("width","16px").css("height","16px"),this.elColCount.innerHTML=1,
this.elRowCount.innerHTML=1}}).extend(nhn.husky.SE2M_TableCreator),nhn.husky.SE_PasteHandler=jindo.$Class({
_filterPastedContents:function(a,b){this._isPastedMultiParagraph=!1,this._aGoesPreviousParagraph=[];var c,d,e,f,g,h,i,j,k=[],l=-1,m="",n=["BLOCKQUOTE","DD","DIV","DL","FORM","H1","H2","H3","H4","H5","H6","HR","OL","P","TABLE","UL","IFRAME"],o=new RegExp("^("+n.join("|")+")$","i"),p=!1,q=0,r=0,s=[],t=0,u=0,v=[],w=/^<[^!?\/\s>]+(([\s]{0})|([\s]+[^>]+))>/,x=/^<[\/]?([^\s]+)(([\s]{0})|([\s]+[^>]+))>/,y=/^<\/[A-Za-z]+>/,z=/^<[^>]+\/>/,A=/^[\s]+/,B=/^[^<\n]+/,C=/^<[^<>]+>/,D=/(style[\s]*=[\s]*)(["'])([^"']*)(["'])/i,E=/class[\s]*=[\s]*(?:(?:["']([^"']*)["'])|([^\s>]+))/i,F=/(^<table)/gi,G=/&quot;/gi,H="",I=[],J="",K="",L=/(class[\s]*=[\s]*["'])([^"']*)(["'])/i,M=/(class[\s]*=[\s]*)([^"'\s>]+)/i,N=0,O=/(border)([-]?[^:]*)(:[\s]*)([^;'"]+)/gi,P=/([^:\d])([0]?\.[0-5][0-9]*pt)/gi,Q=/(:)([\s]*([0]?\.[0-5][0-9]*pt))/gi,R="",S="",T="",U="",V="",W="",X=!1,Y=!1,Z=/(["';\s])(width[\s]*:[\s]*)([A-Za-z0-9.]+[%]?)([;]?)/i,$=/(["';\s])(height[\s]*:[\s]*)([A-Za-z0-9.]+[%]?)([;]?)/i,_=/([\s]*)(>)/g,ab=/span[\s]*=[\s]*"([\d]+)"/i,bb=/colspan[\s]*=[\s]*"([\d]+)"/i;
this._doFilter=jindo.$Fn(function(a){var b=a;this._isPastedMultiParagraph=!1,this._aGoesPreviousParagraph=[];
var n=!1,cb=!1,db=0,eb=0,fb=!1;if(k=[],l=-1,m="",p=!1,q=0,r=0,s=[],t=0,u=0,v=[],H="",I=[],J="",K="",
N=0,R="",S="",T="",U="",V="",W="",X=!1,Y=!1,this.htBrowser.ie){var gb=document.createElement("DIV");gb.innerHTML=a;
for(var hb=gb.getElementsByTagName("TABLE"),ib=hb.length,jb=0;ib>jb;jb++){var kb=hb[jb];kb.className=kb.className+" __se_tbl_ext";
}for(var lb=gb.getElementsByTagName("*"),mb=null,nb=0;mb=lb[nb++];)if(mb.style){var ob=mb.style.cssText;
O.test(ob)&&(mb.style.cssText=ob.replace(O,function(){return arguments[0].replace(Q,"$11px").replace(P," 1px");
}))}return gb.innerHTML}for(;""!=a;){if(d="",c="",z.test(a))c=a.match(z)[0],d=c,f=z;else if(w.test(a)){
if(c=a.match(w)[0],e=c.match(x)[1].toUpperCase(),H="",E.test(c)&&(H=c.match(E)[1]||c.match(E)[2]),c=c.replace(G,"'"),
(this.htBrowser.chrome||this.htBrowser.firefox||this.htBrowser.safari&&this.htBrowser.version>=6)&&(I=[],
H&&-1===H.indexOf("mso")&&(I=H.split(" ")),I&&I.length>0))for(var jb=0,pb=I.length;pb>jb;jb++)g="",h="",
i=null,J="",g=I[jb],h=g+"[\\n\\r\\t\\s]*{([^}]*)}",i=new RegExp(h),i.test(this._sStyleFromClipboard)&&(J=this._sStyleFromClipboard.match(i)[1]),
J&&(c=D.test(c)?c.replace(D,"$1$2"+J+" $3$4"):c.replace(_,' style="'+J+'"$2'));if(c=c.replace(O,function(){
return arguments[0].replace(Q,"$11px").replace(P," 1px")}),e=c.match(x)[1].toUpperCase(),"TABLE"===e)0===u&&(H?-1===H.indexOf("__se_tbl")&&(L.test(c)?c=c.replace(L,"$1$2 __se_tbl_ext$3"):M.test(c)&&(c=c.replace(M,'$1"$2 __se_tbl_ext"'))):c=c.replace(F,'$1 class="__se_tbl_ext"')),
p=!0,u++;else if(this.htBrowser.ie||"COL"!==e)this.htBrowser.ie||"TR"!==e?("TD"===e||"TH"===e)&&(j=void 0,
s=void 0,N=void 0,this.htBrowser.ie||(s=v[u],s&&s.length>0&&(bb.test(c)&&(N=c.match(bb)[1],N=parseInt(N,10)),
j=s[q],!Z.test(c)&&j&&(N&&(-1!=j.indexOf("pt")?j=parseFloat(j,10)*N+"pt":-1!=j.indexOf("px")&&(j=parseFloat(j,10)*N+"px")),
c=D.test(c)?c.replace(D,"$1$2width:"+j+"; $3$4"):c.replace(_,' style="width:'+j+';"$2'))),!$.test(c)&&t&&(c=D.test(c)?c.replace(D,"$1$2height:"+t+"; $3$4"):c.replace(_,' style="height:'+t+';"$2'))),
N?q+=N:q++):$.test(c)?(U=c.match($)[3],t=U):t=null;else{if(T=Z.test(c)?c.match(Z)[3]:"",N=0,ab.test(c)&&(N=c.match(ab)[1]),
s=v[u]&&"number"==typeof v[u].length?v[u]:[],N){N=parseInt(N,10);for(var jb=0;N>jb;jb++)s.push(T),r++;
}else r++,s.push(T);v[u]=s}o.test(e)&&(this._isPastedMultiParagraph=!0,n=!0),d+=c,f=w}else if(A.test(a))c=a.match(A)[0],
d=c,f=A;else if(B.test(a))c=a.match(B)[0],d=c,f=B;else if(y.test(a))c=a.match(y)[0],e=c.match(x)[1].toUpperCase(),
"TABLE"===e?(v[u]=null,u--,p=!1,r=0,q=0):"TR"===e&&(q=0),o.test(e)&&(cb=!0),d+=c,f=y;else{if(!C.test(a))return b;
c=a.match(C)[0],d=c,f=C}if(""!=d){m=d,l++;var qb="";this._isPastedMultiParagraph||(qb=d),n?(fb&&(this.htBrowser.ie||(d="</"+this.sParagraphContainer+">"+d),
fb=!1),eb++,db++):fb||0!=db||(this.htBrowser.ie||(d="<"+this.sParagraphContainer+">"+d),fb=!0),cb&&(n=!1,
cb=!1,db--),this._isPastedMultiParagraph||this._aGoesPreviousParagraph.push(qb),k.push(d)}a=a.replace(f,"");
}if(!this.htBrowser.ie&&0==eb){var rb=new RegExp("^<"+this.sParagraphContainer+">");k[0]&&(k[0]=k[0].replace(rb,""));
}return k.join("")},this).bind();var cb=b?this._filterTableContents(a):this._doFilter(a);return cb}}).extend(nhn.husky.SE_PasteHandler),
nhn.husky.SE_EditingArea_TEXT=jindo.$Class({irToText:function(a){var b=a,c=0,d=b.match(new RegExp(this.sRxConverter));
return null!==d&&(b=b.replace(new RegExp(this.sRxConverter),"")),b=b.replace(/\r/g,""),b=b.replace(/[\n|\t]/g,""),
b=b.replace(/[\v|\f]/g,""),b=b.replace(/<p><br><\/p>/gi,"\n"),b=b.replace(/<P>&nbsp;<\/P>/gi,"\n"),b=b.replace(/<br(\s)*\/?>/gi,"\n"),
b=b.replace(/<br(\s[^\/]*)?>/gi,"\n"),b=b.replace(/<\/p(\s[^\/]*)?>/gi,"\n"),b=b.replace(/<\/div(\s[^\/]*)?>/gi,"\n"),
b=b.replace(/<\/li(\s[^\/]*)?>/gi,"\n"),b=b.replace(/<\/tr(\s[^\/]*)?>/gi,"\n"),b=b.replace(/<!--sign Area start-->/g,"").replace(/<!--sign Area end-->/g,""),
c=b.lastIndexOf("\n"),c>-1&&"\n"==b.substring(c)&&(b=b.substring(0,c)),b=jindo.$S(b).stripTags().toString(),
b=this.unhtmlSpecialChars(b),null!==d&&(b=d[0]+b),b}}).extend(nhn.husky.SE_EditingArea_TEXT),oMessageMap&&(oMessageMap["SE_FindReplace.keywordNotFoundSearch"]="메일 내용을 끝까지 찾았습니다.",
oMessageMap["SE_FindReplace.keywordNotFoundReplace"]="메일 내용을 끝까지 찾았습니다.",oMessageMap_en_US["SE_FindReplace.keywordNotFoundSearch"]="Searched the mail contents to the end.",
oMessageMap_en_US["SE_FindReplace.keywordNotFoundReplace"]="Searched the mail contents to the end.",
oMessageMap_ja_JP["SE_FindReplace.keywordNotFoundSearch"]="メールの本文を最後まで検索しました。",oMessageMap_ja_JP["SE_FindReplace.keywordNotFoundReplace"]="メールの本文を最後まで検索しました。",
oMessageMap_zh_CN["SE_FindReplace.keywordNotFoundSearch"]="已彻底查找邮件内容。",oMessageMap_zh_CN["SE_FindReplace.keywordNotFoundReplace"]="已彻底查找邮件内容。",
oMessageMap_zh_TW["SE_FindReplace.keywordNotFoundSearch"]="已搜尋至郵件末端。",oMessageMap_zh_TW["SE_FindReplace.keywordNotFoundReplace"]="已搜尋至郵件末端。");