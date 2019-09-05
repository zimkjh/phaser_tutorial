function EventManager(a){return EventManager.helper.setCurrentObj(a),EventManager.action}function attachImageFileByAir(a,b){
var c=a.split('"|"'),d=c[0],e=c[1],f=c[2];mwAttach.imageUploaded({realIndex:d,name:e,size:b,cid:f})}
function hidePromotion(){$Element("signTooltip")&&$Element("signTooltip").hide(),$Element("bigfileNoticeLayer")&&$Element("bigfileNoticeLayer").hide();
}function isUseMultiDomain(){return oWriteResponse&&oWriteResponse.writeBody&&oWriteResponse.writeBody.idomainInUse;
}function useDlSenderList(){return oWriteResponse&&oWriteResponse.writeBody&&oWriteResponse.writeBody.dlSenderList&&!!oWriteResponse.writeBody.dlSenderList.length;
}EventManager.helper={currentKey:"",currentObj:"",setCurrentObj:function(a){this.currentObj=EventManager.data[a]||(EventManager.data[a]=[]);
},attachAll:function(a){if(a.constructor==Array)for(var b=a.length,c=0;b>c;c++)this.attach(a[c]);else a.constructor==Object&&this.attach(a);
},attach:function(a){this.currentObj.push(a);var b=a.funcObj,c=a.param||(a.param=[]);b=$Fn(b.bindForEvent.apply(b,c)),
a.funcObj=b,b.attach(a.ele,a.event)},detachAll:function(){for(var a=this.currentObj.length,b=0;a>b;b++)this.detach(this.currentObj.pop());
},detach:function(a){a.funcObj.detach(a.ele,a.event)}},EventManager.data={},EventManager.action={attach:function(a){
return EventManager.helper.attachAll(a),this},detach:function(){return EventManager.helper.detachAll(),
this},_remove:function(){var a=EventManager.data;for(var b in a)EventManager(b).detach()}};var eventManager=EventManager;
jindo.Component=jindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){var a=this.constructor.getInstance();
a.push(this),this._htEventHandler={},this._htOption={},this._htOption._htSetter={}},option:function(a,b){
switch(typeof a){case"undefined":return this._htOption;case"string":if("undefined"==typeof b)return this._htOption[a];
if("htCustomEventHandler"==a){if("undefined"!=typeof this._htOption[a])return this;this.attach(b)}this._htOption[a]=b,
"function"==typeof this._htOption._htSetter[a]&&this._htOption._htSetter[a](b);break;case"object":for(var c in a){
if("htCustomEventHandler"==c){if("undefined"!=typeof this._htOption[c])continue;this.attach(a[c])}this._htOption[c]=a[c],
"function"==typeof this._htOption._htSetter[c]&&this._htOption._htSetter[c](a[c])}}return this},optionSetter:function(a,b){
switch(typeof a){case"undefined":return this._htOption._htSetter;case"string":if("undefined"==typeof b)return this._htOption._htSetter[a];
this._htOption._htSetter[a]=jindo.$Fn(b,this).bind();break;case"object":for(var c in a)this._htOption._htSetter[c]=jindo.$Fn(a[c],this).bind();
}return this},fireEvent:function(a,b){b=b||{};var c=this["on"+a],d=this._htEventHandler[a]||[],e="function"==typeof c,f=d.length>0;
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
this):this}}).extend(jindo.Component),jindo.DragArea=jindo.$Class({$init:function(a,b){this.option({
sClassName:"draggable",bFlowOut:!0,bSetCapture:!0,nThreshold:0}),this.option(b||{}),this._el=a,this._bIE=jindo.$Agent().navigator().ie,
this._htDragInfo={bPrepare:!1},this._bHandleDown=!1,this._bIsDragging=!1,this._wfOnMouseDown=jindo.$Fn(this._onMouseDown,this),
this._wfOnMouseMove=jindo.$Fn(this._onMouseMove,this),this._wfOnMouseUp=jindo.$Fn(this._onMouseUp,this),
this._wfOnDragStart=jindo.$Fn(this._onDragStart,this),this._wfOnSelectStart=jindo.$Fn(this._onSelectStart,this),
this.activate()},_findDraggableElement:function(a){if(jindo.$$.test(a,"input[type=text], textarea, select"))return null;
var b=this,c="."+this.option("sClassName"),d=function(a){return null===a?!1:b._el===document||b._el===a?!0:jindo.$Element(b._el).isParentOf(a);
},e=jindo.$$.test(a,c)?a:jindo.$$.getSingle("! "+c,a);return d(e)||(e=null),e},isDragging:function(){
return this._bIsDragging&&!this._htDragInfo.bPrepare},stopDragging:function(){return this._stopDragging(!0),
this},_stopDragging:function(a){this._wfOnMouseMove.detach(document,"mousemove"),this._wfOnMouseUp.detach(document,"mouseup");
var b=this._htDragInfo;if(this.isDragging()){var c=jindo.$Element(b.elDrag);this.fireEvent("dragEnd",{
elArea:this._el,elHandle:b.elHandle,elDrag:b.elDrag,nX:parseInt(c.css("left"),10)||0,nY:parseInt(c.css("top"),10)||0,
bInterupted:a})}this._bIsDragging=!1,this._bForceDrag=!1,b.bPrepare=!1,this._bIE&&this._elSetCapture&&(this._elSetCapture.releaseCapture(),
this._elSetCapture=null)},_onActivate:function(){this._wfOnMouseDown.attach(this._el,"mousedown"),this._wfOnDragStart.attach(this._el,"dragstart"),
this._wfOnSelectStart.attach(this._el,"selectstart")},_onDeactivate:function(){this._wfOnMouseDown.detach(this._el,"mousedown"),
this._wfOnDragStart.detach(this._el,"dragstart"),this._wfOnSelectStart.detach(this._el,"selectstart");
},attachEvent:function(){this.activate()},detachEvent:function(){this.deactivate()},isEventAttached:function(){
return this.isActivating()},startDragging:function(a){var a=this._findDraggableElement(a);return a?(this._bForceDrag=!0,
this._htDragInfo={bPrepare:!0,elHandle:a,elDrag:a},this._wfOnMouseMove.attach(document,"mousemove"),
this._wfOnMouseUp.attach(document,"mouseup"),!0):!1},_onMouseDown:function(a){if(!a.mouse().left||a.mouse().right)return void this._stopDragging(!0);
var b=this._findDraggableElement(a.element);if(b){var c=a.pos();this._htDragInfo={bPrepare:!0,nButton:a._event.button,
elHandle:b,elDrag:b,nPageX:c.pageX,nPageY:c.pageY},this._bHandleDown=!0,this.fireEvent("handleDown",{
elHandle:b,elDrag:b,weEvent:a})&&this._wfOnMouseMove.attach(document,"mousemove"),this._wfOnMouseUp.attach(document,"mouseup"),
a.stop(jindo.$Event.CANCEL_DEFAULT)}},_onMouseMove:function(a){this._bIsDragging=!0;var b,c,d=this._htDragInfo,e=a.pos();
if(d.bPrepare){var f=this.option("nThreshold"),g={};if(!this._bForceDrag&&f){g.nPageX=e.pageX-d.nPageX,
g.nPageY=e.pageY-d.nPageY;var h=Math.sqrt(g.nPageX*g.nPageX+g.nPageY*g.nPageY);if(f>h)return}if(this._bIE&&this.option("bSetCapture")&&(this._elSetCapture=this._el===document?document.body:this._findDraggableElement(a.element),
this._elSetCapture&&this._elSetCapture.setCapture(!1)),b={elArea:this._el,elHandle:d.elHandle,elDrag:d.elDrag,
htDiff:g,weEvent:a},!this.fireEvent("dragStart",b))return void(this._bIsDragging=!1);var i=jindo.$Element(b.elDrag);
d.bPrepare=!1,d.elHandle=b.elHandle,d.elDrag=b.elDrag,d.nX=parseInt(i.css("left"),10)||0,d.nY=parseInt(i.css("top"),10)||0;
var j=i.offset();d.nClientX=j.left+i.width()/2,d.nClientY=j.top+i.height()/2}var k={nX:e.pageX-d.nPageX,
nY:e.pageY-d.nPageY};if(this._bForceDrag&&(k.nX=e.clientX-d.nClientX,k.nY=e.clientY-d.nClientY),b={elArea:this._el,
elFlowOut:d.elDrag.parentNode,elHandle:d.elHandle,elDrag:d.elDrag,weEvent:a,nX:d.nX+k.nX,nY:d.nY+k.nY,
nGapX:k.nX,nGapY:k.nY},this.fireEvent("beforeDrag",b)){var l=d.elDrag;if(this.option("bFlowOut")===!1){
var m=b.elFlowOut,n=[l.offsetWidth,l.offsetHeight],o=0,p=0;if(m==document.body&&(m=null),m&&n[0]<=m.scrollWidth&&n[1]<=m.scrollHeight)c={
nWidth:m.clientWidth,nHeight:m.clientHeight},o=m.scrollLeft,p=m.scrollTop;else{var q=jindo.$Document().clientSize();
c={nWidth:q.width,nHeight:q.height}}null!==b.nX&&(b.nX=Math.max(b.nX,o),b.nX=Math.min(b.nX,c.nWidth-n[0]+o)),
null!==b.nY&&(b.nY=Math.max(b.nY,p),b.nY=Math.min(b.nY,c.nHeight-n[1]+p))}null!==b.nX&&(l.style.left=b.nX+"px"),
null!==b.nY&&(l.style.top=b.nY+"px"),this.fireEvent("drag",b)}},_onMouseUp:function(a){this._stopDragging(!1);
var b=this._htDragInfo;this._bHandleDown&&(this._bHandleDown=!1,this.fireEvent("handleUp",{weEvent:a,
elHandle:b.elHandle,elDrag:b.elDrag}))},_onDragStart:function(a){this._findDraggableElement(a.element)&&a.stop(jindo.$Event.CANCEL_DEFAULT);
},_onSelectStart:function(a){(this._bIsDragging||this._findDraggableElement(a.element))&&a.stop(jindo.$Event.CANCEL_DEFAULT);
}}).extend(jindo.UIComponent),jindo.LayerManager=jindo.$Class({_bIsActivating:!1,_bIsLayerVisible:!1,
_bIsHiding:!1,_bIsShowing:!1,_aLink:null,$init:function(a,b){this.option({sCheckEvent:"click",nCheckDelay:100,
nShowDelay:0,nHideDelay:100,sMethod:"show",nDuration:200,Transition:{fFadeIn:jindo.Effect.cubicEaseOut,
fFadeOut:jindo.Effect.cubicEaseIn,fSlideDown:jindo.Effect.cubicEaseOut,fSlideUp:jindo.Effect.cubicEaseIn
}}),this.option(b||{}),this.setLayer(a),this._aLink=[],this._oShowTimer=new jindo.Timer,this._oHideTimer=new jindo.Timer,
this._oEventTimer=new jindo.Timer,this._wfOnEvent=jindo.$Fn(this._onEvent,this),this.getVisible(),this.activate();
},_onActivate:function(){this._wfOnEvent.attach(document,this.option("sCheckEvent"))},_onDeactivate:function(){
this._wfOnEvent.detach(document,this.option("sCheckEvent"))},getVisible:function(){return this._bIsLayerVisible=this._wel.visible()&&this._wel.opacity()>0;
},_check:function(a){for(var b,c,d=jindo.$Element(a),e=0;b=this._aLink[e];e++)if(c=jindo.$Element(b),
c&&(b=c.$value(),b&&(a==b||d.isChildOf(b))))return!0;return!1},_find:function(a){for(var b,c=0;b=this._aLink[c];c++)if(b==a)return c;
return-1},getLayer:function(){return this._el},setLayer:function(a){this._el=jindo.$(a),this._wel=jindo.$Element(a);
var b=this._el.cloneNode(!0),c=jindo.$Element(b);return c.css({position:"absolute",left:"-5000px"}).appendTo(this._el.parentNode),
c.show(),this._nLayerHeight=c.height(),c.height(this._nLayerHeight),this._sLayerCSSHeight=c.css("height"),
this._sLayerCSSOverflowX=this._wel.css("overflowX"),this._sLayerCSSOverflowY=this._wel.css("overflowY"),
c.css("overflow","hidden").height(0),this._nSlideMinHeight=c.height()+1,c.leave(),this},_transform:function(){
this._wel.css({overflowX:"hidden",overflowY:"hidden"})},_restore:function(){this._wel.css({overflowX:this._sLayerCSSOverflowX,
overflowY:this._sLayerCSSOverflowY})},getLinks:function(){return this._aLink},setLinks:function(a){return this._aLink=jindo.$A(a).unique().$value(),
this},link:function(a){if(arguments.length>1){for(var b=0,c=arguments.length;c>b;b++)this.link(arguments[b]);
return this}return-1!=this._find(a)?this:(this._aLink.push(a),this)},unlink:function(a){if(arguments.length>1){
for(var b=0,c=arguments.length;c>b;b++)this.unlink(arguments[b]);return this}var d=this._find(a);return d>-1&&this._aLink.splice(d,1),
this},_fireEventBeforeShow:function(){return this._transform(),this.fireEvent("beforeShow",{elLayer:this.getLayer(),
aLinkedElement:this.getLinks(),sMethod:this.option("sMethod")})},_fireEventAppear:function(){this.fireEvent("appear",{
elLayer:this.getLayer(),aLinkedElement:this.getLinks(),sMethod:this.option("sMethod")})},_fireEventShow:function(){
this._bIsShowing=!1,this._restore(),this.fireEvent("show",{elLayer:this.getLayer(),aLinkedElement:this.getLinks(),
sMethod:this.option("sMethod")})},_fireEventBeforeHide:function(){return this._transform(),this.fireEvent("beforeHide",{
elLayer:this.getLayer(),aLinkedElement:this.getLinks(),sMethod:this.option("sMethod")})},_fireEventHide:function(){
this._bIsHiding=!1,this._restore(),this.fireEvent("hide",{elLayer:this.getLayer(),aLinkedElement:this.getLinks(),
sMethod:this.option("sMethod")})},_show:function(a,b){this._oEventTimer.abort(),this._bIsShowing=!0,
this._bIsHiding=!1,b>0?this._oShowTimer.start(a,b):(this._oHideTimer.abort(),a())},_hide:function(a,b){
this._bIsShowing=!1,this._bIsHiding=!0,b>0?this._oHideTimer.start(a,b):(this._oShowTimer.abort(),a());
},_getShowMethod:function(){switch(this.option("sMethod")){case"show":return"showIn";case"fade":return"fadeIn";
case"slide":return"slideDown"}},_getHideMethod:function(){switch(this.option("sMethod")){case"show":
return"hideOut";case"fade":return"fadeOut";case"slide":return"slideUp"}},show:function(a){return"undefined"==typeof a&&(a=this.option("nShowDelay")),
this[this._getShowMethod()](a),this},hide:function(a){return"undefined"==typeof a&&(a=this.option("nHideDelay")),
this[this._getHideMethod()](a),this},showIn:function(a){"undefined"==typeof a&&(a=this.option("nShowDelay"));
var b=this;return this._show(function(){b._sAppliedMethod="show",b.getVisible()||b._fireEventBeforeShow()&&(b._wel.show(),
b._fireEventAppear(),b._fireEventShow())},a),this},hideOut:function(a){"undefined"==typeof a&&(a=this.option("nHideDelay"));
var b=this;return this._hide(function(){b._sAppliedMethod="show",b.getVisible()&&b._fireEventBeforeHide()&&(b._wel.hide(),
b._fireEventHide())},a),this},_getTransition:function(){return this._oTransition?this._oTransition:this._oTransition=(new jindo.Transition).fps(30);
},fadeIn:function(a){var b=this._getTransition();b.detachAll().abort(),"undefined"==typeof a&&(a=this.option("nShowDelay"));
var c=this.option("nDuration"),d=this;return this._show(function(){d._sAppliedMethod="fade";var a=d.getLayer();
d._wel.visible()&&1==d._wel.opacity()||d._fireEventBeforeShow()&&(d._wel.visible()||(d._wel.opacity(0),
d._wel.show()),c*=1-d._wel.opacity(),b.attach({playing:function(a){1===a.nStep&&(this.detach("playing",arguments.callee),
d._fireEventAppear())},end:function(){this.detach("end",arguments.callee),d._fireEventShow()}}).start(c,a,{
"@opacity":d.option("Transition").fFadeIn.apply(null,[1])}))},a),this},fadeOut:function(a){var b=this._getTransition();
b.detachAll().abort(),"undefined"==typeof a&&(a=this.option("nHideDelay"));var c=this.option("nDuration"),d=this;
return this._hide(function(){if(d._sAppliedMethod="fade",d.getVisible()){var a=d.getLayer();d._fireEventBeforeHide()&&(c*=d._wel.opacity(),
b.attach({end:function(){this.detach("end",arguments.callee),d._wel.hide(),d._wel.opacity(1),d._fireEventHide();
}}).start(c,a,{"@opacity":d.option("Transition").fFadeOut.apply(null,[0])}))}},a),this},slideDown:function(a){
var b=this._getTransition();b.detachAll().abort(),"undefined"==typeof a&&(a=this.option("nShowDelay"));
var c=this.option("nDuration"),d=this;return this._show(function(){d._sAppliedMethod="slide";var a=d.getLayer();
Math.ceil(d._wel.height())<d._nLayerHeight&&d._fireEventBeforeShow()&&(d.getVisible()?c=Math.ceil(c*((d._nLayerHeight-d._wel.height())/(d._nLayerHeight-d._nSlideMinHeight))):d._wel.height(0).show(),
b.attach({playing:function(a){1===a.nStep&&(this.detach("playing",arguments.callee),d._fireEventAppear());
},end:function(){this.detach("end",arguments.callee),d._fireEventShow()}}).start(c,{getter:function(b){
return jindo.$Element(a)[b]()+1},setter:function(b,c){jindo.$Element(a)[b](parseFloat(c))}},{height:d.option("Transition").fSlideDown.apply(null,[d._nLayerHeight])
}))},a),this},slideUp:function(a){var b=this._getTransition();b.detachAll().abort(),"undefined"==typeof a&&(a=this.option("nHideDelay"));
var c=this.option("nDuration"),d=this;return this._hide(function(){d._sAppliedMethod="slide";var a=d.getLayer();
d.getVisible()&&d._fireEventBeforeHide()&&(c=Math.ceil(c*(d._wel.height()/d._nLayerHeight)),b.attach({
end:function(){d._wel.hide().css({height:d._sLayerCSSHeight}),this.detach("end",arguments.callee),d._fireEventHide();
}}).start(c,{getter:function(b){return jindo.$Element(a)[b]()},setter:function(b,c){jindo.$Element(a)[b](Math.ceil(c));
}},{height:d.option("Transition").fSlideUp.apply(null,[d._nSlideMinHeight])}))},a),this},toggle:function(a){
return!this.getVisible()||this._bIsHiding?this.show(a||this.option("nShowDelay")):this.hide(a||this.option("nHideDelay")),
this},_onEvent:function(a){var b=a.element,c=this;this._oEventTimer.start(function(){!c._bIsHiding&&c.getVisible()&&(c._check(b)?c._bIsShowing||(c.fireEvent("ignore",{
sCheckEvent:c.option("sCheckEvent")}),c._oHideTimer.abort(),c._bIsHiding=!1):"undefined"!=typeof b.tagName&&c.hide());
},this.option("nCheckDelay"))}}).extend(jindo.UIComponent),jindo.Timer=jindo.$Class({$init:function(){
this._nTimer=null,this._nLatest=null,this._nRemained=0,this._nDelay=null,this._fRun=null,this._bIsRunning=!1;
},start:function(a,b){return this.abort(),this._nRemained=0,this._nDelay=b,this._fRun=a,this._bIsRunning=!0,
this._nLatest=this._getTime(),this.fireEvent("wait"),this._excute(this._nDelay,!1),!0},isRunning:function(){
return this._bIsRunning},_getTime:function(){return(new Date).getTime()},_clearTimer:function(){var a=!1;
return this._nTimer&&(clearInterval(this._nTimer),this._bIsRunning=!1,a=!0),this._nTimer=null,a},abort:function(){
var a=this._clearTimer();return a&&(this.fireEvent("abort"),this._fRun=null),a},pause:function(){var a=this._getTime()-this._nLatest;
return this._nRemained=Math.max(this._nDelay-a,0),this._clearTimer()},_excute:function(a,b){var c=this;
this._clearTimer(),this._bIsRunning=!0,this._nTimer=setInterval(function(){if(c._nTimer){c.fireEvent("run");
var a=c._fRun();if(c._nLatest=c._getTime(),!a)return clearInterval(c._nTimer),c._nTimer=null,c._bIsRunning=!1,
void c.fireEvent("end");c.fireEvent("wait"),b&&c._excute(c._nDelay,!1)}},a)},resume:function(){return!this._fRun||this.isRunning()?!1:(this._bIsRunning=!0,
this.fireEvent("wait"),this._excute(this._nRemained,!0),this._nRemained=0,!0)}}).extend(jindo.Component),
function(){var a=jindo.$Element.prototype.css;jindo.$Element.prototype.css=function(b,c){return"opacity"==b?"undefined"!=typeof c?this.opacity(parseFloat(c)):this.opacity():"undefined"!=typeof c?a.call(this,b,c):a.call(this,b);
}}(),jindo.Effect=function(a){if(this instanceof arguments.callee)throw new Error("You can't create a instance of this");
var b=/^(\-?[0-9\.]+)(%|px|pt|em)?$/,c=/^rgb\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+)\)$/i,d=/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,e=/^#([0-9A-F])([0-9A-F])([0-9A-F])$/i,f=function(a){
var f,g=a;return b.test(a)?(g=parseFloat(a),f=RegExp.$2||""):c.test(a)?(g=[parseInt(RegExp.$1,10),parseInt(RegExp.$2,10),parseInt(RegExp.$3,10)],
f="color"):d.test(a=a.replace(e,"#$1$1$2$2$3$3"))&&(g=[parseInt(RegExp.$1,16),parseInt(RegExp.$2,16),parseInt(RegExp.$3,16)],
f="color"),{nValue:g,sUnit:f}};return function(b,c){var d;if(arguments.length>1?(b=f(b),c=f(c),d=c.sUnit):(c=f(b),
b=null,d=c.sUnit),b&&c&&b.sUnit!=c.sUnit)throw new Error("unit error");b=b&&b.nValue,c=c&&c.nValue;var e=function(e){
var f=a(e),g=function(a,b){return(b-a)*f+a+d};if("color"==d){var h=parseInt(g(b[0],c[0]),10)<<16;h|=parseInt(g(b[1],c[1]),10)<<8,
h|=parseInt(g(b[2],c[2]),10),h=h.toString(16).toUpperCase();for(var i=0;6-h.length;i++)h="0"+h;return"#"+h;
}return g(b,c)};return null===b&&(e.setStart=function(a){if(a=f(a),a.sUnit!=d)throw new Error("unit eror");
b=a.nValue}),e}},jindo.Effect.linear=jindo.Effect(function(a){return a}),jindo.Effect.easeIn=jindo.Effect(function(a){
return 1-Math.sqrt(1-a*a)}),jindo.Effect.easeOut=jindo.Effect(function(a){return Math.sqrt((2-a)*a)}),
jindo.Effect.bounce=jindo.Effect(function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375;
}),jindo.Effect._cubicBezier=function(a,b,c,d){return function(e){function f(a){return((k*a+j)*a+i)*a;
}function g(a){return((n*a+m)*a+l)*a}function h(a,b){for(var c,d,e=0,g=1,h=a,l=0;8>l;l++){if(c=f(h)-a,
Math.abs(c)<b)return h;if(d=(3*k*h+2*j)*h+i,Math.abs(d)<1e-6)break;h-=c/d}if(e>h)return e;if(h>g)return g;
for(;g>e;){if(c=f(h),Math.abs(c-a)<b)return h;a>c?e=h:g=h,h=.5*(g-e)+e}return h}var i=3*a,j=3*(c-a)-i,k=1-i-j,l=3*b,m=3*(d-b)-l,n=1-l-m;
return g(h(e,.001))}},jindo.Effect.cubicBezier=function(a,b,c,d){return jindo.Effect(jindo.Effect._cubicBezier(a,b,c,d));
},jindo.Effect.overphase=jindo.Effect.cubicBezier(.25,.75,.8,1.3),jindo.Effect.easeInOut=jindo.Effect.cubicBezier(.75,0,.25,1),
jindo.Effect.easeOutIn=jindo.Effect.cubicBezier(.25,.75,.75,.25),jindo.Effect.cubicEase=jindo.Effect.cubicBezier(.25,.1,.25,1),
jindo.Effect.cubicEaseIn=jindo.Effect.cubicBezier(.42,0,1,1),jindo.Effect.cubicEaseOut=jindo.Effect.cubicBezier(0,0,.58,1),
jindo.Effect.cubicEaseInOut=jindo.Effect.cubicBezier(.42,0,.58,1),jindo.Effect.cubicEaseOutIn=jindo.Effect.cubicBezier(0,.42,1,.58),
jindo.Effect.pulse=function(a){return jindo.Effect(function(b){return-Math.cos(b*(a-.5)*2*Math.PI)/2+.5;
})},jindo.DropArea=jindo.$Class({$init:function(a,b){this._el=jindo.$(a),this._wel=jindo.$Element(this._el),
this.option({sClassName:"droppable",oDragInstance:null}),this.option(b||{}),this._waOveredDroppableElement=jindo.$A([]),
this._elHandle=null,this._elDragging=null,this._wfMouseMove=jindo.$Fn(this._onMouseMove,this),this._wfMouseOver=jindo.$Fn(this._onMouseOver,this),
this._wfMouseOut=jindo.$Fn(this._onMouseOut,this);var c=this.option("oDragInstance");if(c){var d=this;
c.attach({handleDown:function(a){d._elHandle=a.elHandle,d._waOveredDroppableElement.empty()},dragStart:function(a){
d._reCalculate(),d.fireEvent(a.sType,a),d._wfMouseMove.attach(document,"mousemove"),d._wfMouseOver.attach(d._el,"mouseover"),
d._wfMouseOut.attach(d._el,"mouseout")},beforeDrag:function(a){d._elDragging=a.elDrag},dragEnd:function(a){
var b={};for(var c in a)b[c]=a[c];b.aDrop=d.getOveredLists().concat(),d._clearOveredDroppableElement(a.weEvent,a.bInterupted),
d.fireEvent(a.sType,b),d._wfMouseMove.detach(document,"mousemove"),d._wfMouseOver.detach(d._el,"mouseover"),
d._wfMouseOut.detach(d._el,"mouseout")},handleUp:function(){d._elDragging=null,d._elHandle=null}})}},
_addOveredDroppableElement:function(a){-1==this._waOveredDroppableElement.indexOf(a)&&(this._waOveredDroppableElement.push(a),
this.fireEvent("over",{elHandle:this._elHandle,elDrag:this._elDragging,elDrop:a}))},_fireMoveEvent:function(a,b,c,d){
var e=(c.pageX-b.nLeft)/(b.nRight-b.nLeft),f=(c.pageY-b.nTop)/(b.nBottom-b.nTop);this.fireEvent("move",{
weEvent:d,elHandle:this._elHandle,elDrag:this._elDragging,elDrop:a,nRatioX:e,nRatioY:f})},_removeOveredDroppableElement:function(a){
var b=this._waOveredDroppableElement.indexOf(a);-1!=b&&(this._waOveredDroppableElement.splice(b,1),this.fireEvent("out",{
elHandle:this._elHandle,elDrag:this._elDragging,elDrop:a}))},_clearOveredDroppableElement:function(a,b){
if(b)return void this._waOveredDroppableElement.empty();for(var c;c=this._waOveredDroppableElement.$value()[0];)this._waOveredDroppableElement.splice(0,1),
this.fireEvent("drop",{weEvent:a,elHandle:this._elHandle,elDrag:this._elDragging,elDrop:c})},getOveredLists:function(){
return this._waOveredDroppableElement?this._waOveredDroppableElement.$value():[]},_isChildOfDropArea:function(a){
return this._el===document||this._el===a?!0:this._wel.isParentOf(a)},_findDroppableElement:function(a){
var b="."+this.option("sClassName"),c=jindo.$$.test(a,b)?a:jindo.$$.getSingle("! "+b,a);return this._isChildOfDropArea(a)||(c=null),
c},_onMouseMove:function(a){var b=this.option("oDragInstance");if(b&&b.isDragging()){var c=a.pos();if(a.element==this._elDragging)for(var d,e,f=this._aItem,g=this._aItemRect,h=0;(d=g[h])&&(e=f[h]);h++)d.nLeft<=c.pageX&&c.pageX<=d.nRight&&d.nTop<=c.pageY&&c.pageY<=d.nBottom?(this._addOveredDroppableElement(e),
this._fireMoveEvent(e,d,c,a)):this._removeOveredDroppableElement(e);else{var i=this._findDroppableElement(a.element);
if(!i)return;this._addOveredDroppableElement(i);var j=jindo.$Element(i).offset(),k={nLeft:j.left,nTop:j.top,
nRight:j.left+i.offsetWidth,nBottom:j.top+i.offsetHeight};k.nLeft<=c.pageX&&c.pageX<=k.nRight&&k.nTop<=c.pageY&&c.pageY<=k.nBottom&&this._fireMoveEvent(i,k,c,a);
}}},_onMouseOver:function(a){var b=this._findDroppableElement(a.element);b&&this._addOveredDroppableElement(b);
},_onMouseOut:function(a){var b=this._findDroppableElement(a.element);b&&a.relatedElement&&!jindo.$Element(a.relatedElement).isChildOf(a.element)&&this._removeOveredDroppableElement(b);
},_getRectInfo:function(a){var b=jindo.$Element(a).offset();return{nLeft:b.left,nTop:b.top,nRight:b.left+a.offsetWidth,
nBottom:b.top+a.offsetHeight}},_reCalculate:function(){var a=jindo.$$("."+this.option("sClassName"),this._el);
this._el.tagName&&jindo.$$.test(this._el,"."+this.option("sClassName"))&&a.push(this._el),this._aItem=a,
this._aItemRect=[];for(var b,c=0;b=a[c];c++)this._aItemRect.push(this._getRectInfo(b))}}).extend(jindo.Component),
jindo.WatchInput=jindo.$Class({_bTimerRunning:!1,_bFocused:!1,_sPrevValue:"",$init:function(a,b){var c={
nInterval:100,bUseTimerOnIE:!1,sKeyEvent:"keyup",bPermanent:!1,bActivateOnload:!0};this.option(c),this.option(b||{}),
this._elInput=jindo.$(a),this._oTimer=new jindo.Timer,this._bIE=jindo.$Agent().navigator().ie,this._wfFocus=jindo.$Fn(this._onFocus,this),
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
this}}).extend(jindo.UIComponent),jindo.LazyLoading={_waLoading:jindo.$A([]),_waLoaded:jindo.$A([]),
_whtScript:jindo.$H({}),_whtCallback:jindo.$H({})},jindo.LazyLoading.load=function(a,b,c){if("function"!=typeof b&&(b=function(){}),
this._queueCallback(a,b),this._checkIsLoading(a))return!1;if(this._checkAlreadyLoaded(a))return this._doCallback(a),
!0;this._waLoading.push(a);var d=this,e=document.getElementsByTagName("head")[0],f=document.createElement("script");
return f.type="text/javascript",f.charset=c||"utf-8",f.src=a,this._whtScript.add(a,f),"onload"in f?f.onload=function(){
d._waLoaded.push(a),d._waLoading=d._waLoading.refuse(a),d._doCallback(a)}:f.onreadystatechange=function(){
("complete"==this.readyState||"loaded"==this.readyState)&&(d._waLoaded.push(a),d._waLoading=d._waLoading.refuse(a),
d._doCallback(a),this.onreadystatechange=null)},e.appendChild(f),!0},jindo.LazyLoading._queueCallback=function(a,b){
var c=this._whtCallback.$(a);c?c.push(b):this._whtCallback.$(a,[b])},jindo.LazyLoading._doCallback=function(a){
for(var b=this._whtCallback.$(a).concat(),c=0;c<b.length;c++)this._whtCallback.$(a).splice(c,1),b[c]();
},jindo.LazyLoading.abort=function(a){if(this._checkIsLoading(a)){var b=this.getScriptElement(a);return this._waLoading=this._waLoading.refuse(a),
"onload"in b?b.onload=null:b.onreadystatechange=null,jindo.$Element(b).leave(),this._whtScript.remove(a),
this._whtCallback.remove(a),!0}return!1},jindo.LazyLoading._checkAlreadyLoaded=function(a){return this._waLoaded.has(a);
},jindo.LazyLoading._checkIsLoading=function(a){return this._waLoading.has(a)},jindo.LazyLoading.getLoaded=function(){
return this._waLoaded.$value()},jindo.LazyLoading.getLoading=function(){return this._waLoading.$value();
},jindo.LazyLoading.getScriptElement=function(a){return this._whtScript.$(a)||null},mwCore=function(){
function a(){jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<=8&&($Element($$.getSingle("#date_input")).attach("keydown",mcCore.keydownHandlerForIE8Input(mwReservation.changeDate)),
$Element($$.getSingle("#dday_date_input")).attach("keydown",mcCore.keydownHandlerForIE8Input(mwReservation.changeDate)),
$Element($$.getSingle("#calStartDate")).attach("keydown",mcCore.keydownHandlerForIE8Input(mwCalendar.changeAppointmentDate)),
$Element($$.getSingle("#calEndDate")).attach("keydown",mcCore.keydownHandlerForIE8Input(mwCalendar.changeAppointmentDate)));
}var b={SEND_URL:"/json/write/send/"},c=null;WRITE_AREA_BOTTOM_MARGIN=20,_sSendType=null,oEditor=null,
oSelectLetter=null,sServerTime=null,nAutoSavedMailSN="",oWriteResponse=null,nAttachSize=0,nAttachCount=0,
aAttachSize=[],sOrderType="",sMailList="",isSending=!1,oCurrentWriteInfo={body:"",subject:"",to:"",cc:"",
bcc:"",reserve:"",schedule:""};var d={attachID:"",ndriveFileInfos:"",sessionID:"",seqNums:"",bigfile:0,
uploaderType:"html5",bigfileCount:0,attachCount:0};oAddrCnt={intAddrCnt:0,extAddrCnt:0,maxExtAddrCnt:0
},sCalTemplate='{"place":"{Location}","startDate":"{StartDate}","endDate":"{EndDate}","timeZone":"{TimeZone}"}',
$("BigFileSize")&&($("BigFileSize").innerHTML="0KB",$("AttachFileSizeActiveX").innerHTML="0KB"),elPrevFocus=null;
var e,f,g,h=[],i=null,j=function(){mwCore.oWriteForm={attachID:"",ndriveFileInfos:"",sessionID:"",seqNums:"",
bigfile:0,uploaderType:"html5",bigfileCount:0,attachCount:0,threadId:"",savedType:void 0,savedLists:void 0
},mwCore.aTomeFolders=[]},k=function(){return mCom.sendStatus="",j(),_initVariables(),_initAddressObject(),
l(),_getWrite(),mwAttach.initUploaderHtml5(),mwReservation.setupGMTSelectArea(),mCom.bScheduleConfirmed=!1,
mUtil.addHotkey("write"),mCom.hasNoOpener&&$Element($$.getSingle(".shortcut_set")).hide(),!0};initExternalWrite=function(){
mCom.sendStatus="",_initAddressObject(),l();var a=$$.getSingle("#contents");a||($Element($$.getSingle("#contents2")).attr("id","contents"),
a=$$.getSingle("#contents")),a&&""==a.innerHTML&&alert(nLang.e.write_no_content),mCom.hasDefaultMsg=!0;
var b=a.innerHTML;b=b.replace("(NAVERMAIL_USERID)",mEnv.mailId),b=b.replace("(NAVERMAIL_CONTENTS)","<textarea noresize class='external_write_body' rows='7' style='width:99%;resize:none;' onfocus='mUtil.clearDefaultMsgForExternalWrite();'>"+nLang.c.type_message_desc+"</textarea>"),
$$.getSingle("#contents").innerHTML=b;var c=$Element($$.getSingle(".external_write_body"));return c&&(c=c.parent()),
c&&c.css("height","auto"),_getWriteForExternal(),!0};var l=function(){e=B(),f=B(),g=B()};sendMail=function(a,b,c){
if(a&&"keydown"==a.type&&(elPrevFocus=a.element),"preview"!=b&&!$Element("sar").visible()&&!mCom.bWriteTome&&("1"==mEnv.sendAfterReview||"2"==mEnv.sendAfterReview&&$$.getSingle("#priority").checked))return void mwPreview.showPreview();
if(mwPreview.hidePreview(),myCore.hideAllLayer(),isNcs()&&("undefined"==typeof c||!c)){var d=n();if(d)return;
}mwCapcha.mailSendClicked(this)};var n=function(){var a=parseInt(oAddrCnt.extAddrCnt,10);if(a>0&&mwAttach.getTotalFileCount()>0){
if(mcCore.isNcs()){var b=$$.getSingle("#security_level_normal");if(b&&!b.checked)return!1}var c=$$.getSingle("#confidential_alert_layer");
return mCom.isPopup||document.body.appendChild(c),$Element("loading_bg").show(),c.style.display="block",
!0}return!1},o=function(){$Element("confidential_alert_layer").hide(),$Element("loading_bg").hide()},p=function(){
o(),sendMail(null,"preview",!0)};sendMailOk=function(a){if($Agent().navigator().safari&&mwEditor.isLoaded()&&mEnv.isUseNewEditor===!1)for(var d=$$.getSingle("#se2_iframe").contentDocument.body,e=d.getElementsByTagName("img"),f=0;f<e.length;f++){
var g=e[f];g.src&&x(g)}if(mwEditor.isLoaded()&&mEnv.isUseNewEditor&&mwEditor.getEditorMode()===mwEditor.WYSIWYG_MODE)try{
mwEditor.replaceNodeInEditorContent(function(a){var b="";try{b=a.src}catch(c){return}return"IMG"===a.tagName&&b?(x(a),
a):void 0})}catch(h){}mCom.oAutoSaveInterval&&clearInterval(mCom.oAutoSaveInterval);var i=_sendMailBo(a);
try{1===i.fromMe&&window.opener&&/translate=Y/.test(window.opener.document.location.search)&&window.opener.close();
}catch(h){}if("object"==typeof i){var j=mCom.nLoadingAPIs;mcCore.requestAjax({fCallback:$Fn(sendResult,this).bind(i),
fFailCallback:$Fn(q,this).bind(i),oParameter:i,sUrl:b.SEND_URL}),c=setTimeout(function(){!mCom.isPopup&&j<mCom.nLoadingAPIs&&--mCom.nLoadingAPIs<=0&&mcNotice.notifyLoadingEnd(),
q()},12e4)}else"undefined"!=typeof elPrevFocus&&null!=elPrevFocus&&elPrevFocus.focus();return i=null,
finishEditor(),!0},sendMailAtExternal=function(){mwPreview.hidePreviewBo(),mwCapcha.mailSendClicked(this,"extern");
},finishEditor=function(){window.onbeforeunload=null,mwEditor.finish(),mCom.elBtnQuickAttach&&mCom.elBtnQuickAttach.removeClass("disabled");
},sendResult=function(a,b){if(mCom.isPopup){window.onbeforeunload=null;try{opener&&""===m.info.svrid;
}catch(d){}}if(j(),$$.getSingle("ul#html5_filelist")&&($$.getSingle("ul#html5_filelist").innerHTML=""),
$Element("sar").hide(),mUtil.cancelSendMail(),mCom.isSending=!1,void 0===m.info.svrid,maCore.resetAddressObjectAll(),
"string"==typeof a){var e=50===b.SendMode?nLang.w.saved_tome:b.ResultMessage;return myCore.showConfirmLayer(null,e),
void mfCore.clickFolder(null,6)}msCore.getSendresult(b),clearTimeout(c)};var q=function(a,d){var e={};
if(d){try{e=d.json()}catch(f){}("FAIL"===e.Result||"FAIL"===e.result)&&mcCore.errorCallback(d,a,b.SEND_URL);
}else alert(nLang.e.temporary_error),mcCore.showLoginLayer();mCom.isSending=!1,$Element("sar").hide(),
mUtil.cancelSendMail(),clearTimeout(c)};popAddress=function(){if(mCom.bWriteTome)return void alert(nLang.w.alert_cannot_use_address_book_tome);
if(mcCore.isNwe()||mcCore.isNcs()){var a=$Agent().navigator().safari?640:620,b=window.open("/address/worksPopup","addresspopup","width=920,height="+a+",resizable=yes,status=no,toolbar=no,menubar=no,scrollbars=no");
b.focus()}else{var c=window.open("/address/popup","addresspopup","width=740,height=620,resizable=yes,status=no,toolbar=no,menubar=no,scrollbars=no");
c.focus()}},toggleBcc=function(a,b){var c=$Element("bccview"),d=$Element("icon_bccview");if(b?(c.css("display",""),
d.removeClass("sClose"),d.addClass("sOpen"),d.attr("alt",nLang.w.hide_bcc),d.parent().attr("title",nLang.w.hide_bcc)):(c.visible()?(c.hide(),
d.attr("alt",nLang.w.show_bcc),d.parent().attr("title",nLang.w.show_bcc)):(c.css("display",""),d.attr("alt",nLang.w.hide_bcc),
d.parent().attr("title",nLang.w.hide_bcc)),d.toggleClass("sClose","sOpen")),!O()&&!P()){var e=$Element("sendernameview");
e&&(b?(e.css("display",""),e.className("mail_write_only foldable on"),$Element("bccview").className("mail_write_only foldable on"),
$Element("senderNameDiv").className("mInput_holder on"),$Element("bccDiv").className("mInput_holder mInput_over on")):e.visible()?(e.hide(),
e.className("mail_write_only foldable none"),$Element("bccview").className("mail_write_only foldable none"),
$Element("senderNameDiv").className("mInput_holder none"),$Element("bccDiv").className("mInput_holder mInput_over none")):(e.css("display",""),
e.className("mail_write_only foldable on"),$Element("bccview").className("mail_write_only foldable on"),
$Element("senderNameDiv").className("mInput_holder on"),$Element("bccDiv").className("mInput_holder mInput_over on")));
}G()},clearAutoSave=function(){mCom.oAutoSaveInterval&&clearInterval(mCom.oAutoSaveInterval)},setAutoSaveTimer=function(){
clearAutoSave(),0!=mEnv.autoSavePeriod&&(mCom.oAutoSaveInterval=setInterval($Fn(saveContents,this).bind(),mEnv.autoSavePeriod));
},saveContents=function(a,b){if(mwEditor.isLoaded()){_sSendType="",_type="";var c="save",d=$Element($$.getSingle("#writeWrap"));
if(d&&!d.visible())return void clearAutoSave();if(b){var e=mwUploader.hasAttachedFile(c);if((e&&e.bigFile||mCom.bScheduleConfirmed)&&!confirm(nLang.w.attach_not_saved))return;
if(e&&e.normalFile)return void mwAttach.uploadFileManager(c)}var f=getCurContents("",!0);return f.type="draft",
mCom.bWriteTome&&$$.getSingle("#divWrite .notes_folder .folder_name")&&(f.folderSN=$Element($$.getSingle("#divWrite .notes_folder .folder_name")).attr("data-foldersn")),
u(f)?!1:(t(f,b),mcCore.requestAjax({fCallback:$Fn(_saveContentsCallBack,this).bind(),oParameter:f,sUrl:"/json/write/save/"
}),!0)}};var r=function(){var a=getCurContents("",!0);a.type="draft",mCom.bWriteTome&&$$.getSingle("#divWrite .notes_folder .folder_name")&&(a.folderSN=$Element($$.getSingle("#divWrite .notes_folder .folder_name")).attr("data-foldersn")),
t(a),mcCore.requestAjax({fCallback:$Fn(_saveContentsCallBack,this).bind(),oParameter:a,sUrl:"/json/write/save/"
})},s=function(){mCom.bAutoSaveFailed=!0,$$.getSingle("#displayInform").innerHTML=-1!=$$.getSingle("#displayInform").innerHTML.indexOf(". ")?nLang.e.fail_to_save+" "+nLang.e.last_save_time+": "+$$.getSingle("#displayInform").innerHTML.split(". ")[1]:nLang.e.fail_to_save;
};saveContentsForMac=function(a){a.$value().metaKey&&saveContents(a,!0)},focusToEditor=function(){mwEditor.focus();
},focusOnEditor=function(){oAutoComplete.to._setCurrentInputValue(),oAutoComplete.cc._setCurrentInputValue(),
oAutoComplete.bcc._setCurrentInputValue()},showSignTooltip=function(){if("TRUE"===$Cookie().get("SIGN_HIDE_TOOLTIP"));else{
var a=$Element("signTooltip"),b=$Element($$.getSingle("#smart_editor2 .husky_seditor_ui_composer_sign"));
a.show(),a.offset(b.offset().top-a.height(),b.offset().left-a.width()/2+30),mCom.aVisibleLayerList.push(a);
}},hideSignTooltip=function(){$("tt_chk_layer1").checked&&$Cookie().set("SIGN_HIDE_TOOLTIP","TRUE",365),
$Element("signTooltip").hide()};var t=function(a){a=a||getCurContents("",!0),oCurrentWriteInfo.attachCount=a.attachCount,
oCurrentWriteInfo.body=a.body,oCurrentWriteInfo.subject=a.subject,oCurrentWriteInfo.to=a.to,oCurrentWriteInfo.cc=a.cc,
oCurrentWriteInfo.bcc=a.bcc,oCurrentWriteInfo.schedule=a.calendarVal,oCurrentWriteInfo.marked=a.marked,
oCurrentWriteInfo.priority=a.priority,oCurrentWriteInfo.reserve=a.reserveDate+a.reserveGMT+a.reserveTime,
oCurrentWriteInfo.senderName=a.senderName,oCurrentWriteInfo.senderAddress=a.senderAddress},u=function(a){
a=a||getCurContents("",!0);var b=0;a.body!=oCurrentWriteInfo.body&&b++,a.subject!=oCurrentWriteInfo.subject&&b++,
a.to!=oCurrentWriteInfo.to&&b++,a.cc!=oCurrentWriteInfo.cc&&b++,a.bcc!=oCurrentWriteInfo.bcc&&b++,a.senderName!=oCurrentWriteInfo.senderName&&b++,
a.senderAddress!=oCurrentWriteInfo.senderAddress&&b++,a.calendarVal!=oCurrentWriteInfo.schedule&&b++,
a.attachCount!==oCurrentWriteInfo.attachCount&&b++,a.marked!==oCurrentWriteInfo.marked&&b++,a.priority!==oCurrentWriteInfo.priority&&b++;
var c=a.reserveDate+a.reserveGMT+a.reserveTime;return c!=oCurrentWriteInfo.reserve&&b++,!mCom.bAutoSaveFailed&&0===b;
};onClickChangeSetting=function(){var a="ncs"==mEnv.serviceType?location.protocol:"http:";window.open(a+"//contact."+mEnv.rootDomain+"/main.nhn?filterMenu=env_myContact");
},setFolderOption=function(a){hideAvailLayer(),mcCore.showOptionLayer(a,"folder_option")},hideAvailLayer=function(){
$Element("sendAfterReviewBg").hide(),$Element("ly_available").hide()},_initVariables=function(){oSelectLetter=null,
sServerTime=null,nAutoSavedMailSN="",oWriteResponse=null,nAttachSize=0,nAttachCount=0,aAttachSize=[],
sOrderType="",sMailList="",isSending=!1,oCurrentWriteInfo={body:"",subject:"",to:"",cc:"",bcc:"",reserve:"",
schedule:""},sCalTemplate='{"place":"{Location}","startDate":"{StartDate}","endDate":"{EndDate}","timeZone":"{TimeZone}"}',
$("BigFileSize")&&($("BigFileSize").innerHTML="0KB",$("AttachFileSizeActiveX").innerHTML="0KB"),(isNcs()||isNwe())&&(oAddrCnt.extAddrCnt=0,
oAddrCnt.intAddrCnt=0,oAddrCnt.maxExtAddrCnt=mEnv.maxExternalRecipientCount||500),mwCore.oWriteForm.ndriveFileInfos="";
},_getWriteCallback=function(a){var b=!1;if(mCom&&!mCom.isPopup&&"boolean"==typeof mCom.isWriting&&!mCom.isWriting)return $Element("loading_bg")&&$Element("loading_bg").hide(),
void($Element("loading_write_layer")&&$Element("loading_write_layer").hide());if(a.sendBlock)return mCom.sendBlockInfo=a.sendBlock,
void N();if(mCom.sendBlockInfo={result:"N"},mCom&&!mCom.isPopup&&($Element($$.getSingle(".divList")).show().hide(),
$Element($$.getSingle(".divContent")).show().hide(),$Element("writeWrap").hide().show(),$Element("listBtnMenu").hide(),
$Element("readBtnMenu").hide(),$Element("writeBtnMenu").show(),$Element("listHeadDiv").hide(),$Element("writeHeadDiv").show(),
$Element("sendresultDivContent").hide(),$Element("searchResultDiv")&&$Element("searchResultDiv").visible()&&($Element("searchResultDiv").hide(),
mcCore.adjustTopOfFlexArea())),a.writeBody&&a.writeBody.uploadBlock&&a.writeBody.uploadBlockFileList){
var c,d=[];b=!0;for(var e=0,f=a.writeBody.uploadBlockFileList.length;f>e;e++)c=a.writeBody.uploadBlockFileList[e],
d.push({fileName:c.name,type:c.Message,virusName:c.virusName});mwAttach.showUploadBlockListLayer(a.writeBody.attachCount,d);
}a.writeBody&&a.writeBody.uploadFull&&"forward"===a.writeBody.orderType&&alert(nLang.w.limit_upload_size_forward),
mwEditor.setup(a,function(){mEnv.isUseNewEditor===!1&&w(),_setWrite(a),$Element("loading_bg")&&!b&&$Element("loading_bg").hide(),
$Element("loading_write_layer")&&$Element("loading_write_layer").hide()})};var v=function(){return $$.getSingle("tr td li.invalid",$Element("divWrite"));
},w=function(){function a(a){if(!a||!a.tagName)return"";var b,c=document.createElement("div");return c.appendChild(a.cloneNode(!0)),
b=c.innerHTML,c=null,b}var b,c=$$.getSingle("#se2_iframe"),d=c.contentDocument||c.contentWindow.document,e=d.body,f=$Agent().navigator();
f.firefox||f.ie&&f.nativeVersion>=10||f.edge?e.onpaste=function(){setTimeout(function(){for(var a=e.getElementsByTagName("img"),b=0,c=a.length;c>b;b++){
var d=a[b],f=parseInt(d.getAttribute("data-imageIndex"),10),g=!isNaN(f);!g&&d.src.indexOf("data:image")>-1?mwAttach.uploadImageFromDataURIImageElement(d):x(d);
}},1)}:f.ie&&f.nativeVersion<10?e.onpaste=function(){setTimeout(function(){var c=e.getElementsByTagName("p");
b=e.getElementsByTagName("img");for(var d=[],f=0;f<c.length;f++){var g=c[f],h=g.innerHTML.toUpperCase(),i=g.textContent||g.innerText,j=a(g);
-1==j.indexOf("&nbsp;")&&-1==h.indexOf("<IMG")&&-1==h.indexOf("BACKGROUND-COLOR")&&(i.length<1?d.push(g):""==i.replace(/(^\s*)|(\s*$)/g,"")&&(-1!=h.indexOf("<")&&-1==h.indexOf("<SPAN")||(g.textContent=" "))),
g=h=j=null}for(f=0;f<d.length;f++)d[f].parentNode.removeChild(d[f]);for(f=0;f<b.length;f++){var k=b[f];
k.src&&x(k)}},1)}:f.chrome&&(e.onpaste=function(a){var c,d=a.clipboardData;d&&d.items&&(c=d.items.length);
var e=!(1!==c||-1==d.items[0].type.indexOf("html")),f=!(2!==c||-1==d.items[1].type.indexOf("html"));if("undefined"!=typeof d&&c>0){
var g=d.items[0];-1!=g.type.indexOf("image")?mwAttach.uploadImageFromBlob(g.getAsFile(),function(a){
mwEditor.insertHTML('<img class="NHN_MAIL_IMAGE" src="'+a+'" >')}):(e||f)&&(g=e?d.items[0]:d.items[1],
g.getAsString(function(a){for(var c=$Element(a),d=c?c.$value():[],e=0,f=d.length;f>e;e++){var g=d[e];
if("IMG"===g.tagName)x(g);else if("function"==typeof g.querySelectorAll){b=g.querySelectorAll("img");
for(var h=0,i=b.length;i>h;h++)x(b[h])}}}))}})},x=function(a){if(/write\/image\/path/.test(a.src)){var b=a.src.match(/attachID=([^&]+)/)[1]===mwCore.oWriteForm.attachID;
!b&&h.indexOf(a.src)<0&&h.push(a.src)}},y=function(a){for(var b=atob(a.split(",")[1]),c=new ArrayBuffer(b.length),d=new Uint8Array(c),e=0;e<b.length;e++)d[e]=b.charCodeAt(e);
return new Blob([c],{type:"image/png"})};_initAddressObject=function(){maCore.init()},getCurContents=function(a,b){
var c,d,e,f,g=mwSenderName.getSelectedItem(),h=mwSenderAddress.getSelectedItem();c=$("to").value,d=$("cc").value,
e=$("bcc").value;var i=$$.getSingle("#subject").value,j="",k="",l="";if("quickAttach"==a)c=mcCore.getNaverEmailAddress()+";",
i=$Element("tomeFile").attr("data-title")||"",l="html",mCom.orderType="toMe",nAutoSavedMailSN="";else if("extern"!==a){
var m=mwEditor.getEditorMode();k=b?mwEditor.getContent():mwEditor.getRawContent(),j=mwEditor.makeMailBody(b),
l=m===mwEditor.TEXT_MODE?"text":"html"}else{var n,o,p=document.createDocumentFragment();p.appendChild($$.getSingle("#contents").cloneNode(!0)),
n=p.querySelector(".external_write_body"),n&&(o=$Element(n).parent(),o&&o.html(n.value.replace(/\n/g,"<br>"))),
j+=p.querySelector("#contents").innerHTML}var q="",r="",s="",t="",u=mCom.sDefaultDateFormat||"YYYY.MM.DD";
(mCom.bScheduleConfirmed||$Element("addCalInfoDiv")&&$Element("addCalInfoDiv").visible())&&(r+=moment($$.getSingle("#calStartDate").value,u).format("YYYY-MM-DD")+" ",
r+=$$.getSingle("#calStartHour").value+":",r+=$$.getSingle("#calStartMin").value+":00",s+=moment($$.getSingle("#calEndDate").value,u).format("YYYY-MM-DD")+" ",
s+=$$.getSingle("#calEndHour").value+":",s+=$$.getSingle("#calEndMin").value+":00",t+=$$.getSingle("#calLocation").value.replace(/\"/g,'\\"'),
q=sCalTemplate,q=q.replace(/\{Location\}/g,t),q=q.replace(/\{StartDate\}/g,r),q=q.replace(/\{EndDate\}/g,s),
q=q.replace(/\{TimeZone\}/g,mEnv.timeZone));var v=mCom.bWriteTome||"quickAttach"==a?1:0,w=$$.getSingle("#checkSeveral").checked?!0:!1,x=mwCore.oWriteForm.bigfile,y=mwCore.oWriteForm.sessionID,z=mwCore.oWriteForm.seqNums,A=$$.getSingle("#priority"),B=0;
!mCom.bWriteTome&&void 0!==A&&A.checked&&(B=1);var C=!1;if(mCom.bWriteTome){var D=$Element("starMark");
C=D?D.hasClass("on"):!1}var E={senderName:g,senderAddress:h,to:c,cc:d,bcc:e,subject:i,body:j,rawBody:k,
contentType:l,sendSeparately:w,saveSentBox:mEnv.saveSentMail,type:mCom.orderType,fromMe:v,attachID:mwCore.oWriteForm.attachID,
reserveDate:"",reserveGMT:"",reserveTime:"",calendarVal:q,autoSaveMailSN:nAutoSavedMailSN,attachCount:nAttachCount,
attachSize:nAttachSize,bigfile:x,sessionID:y,seqNums:z,priority:B,ndriveFileInfos:mwCore.oWriteForm.ndriveFileInfos,
threadId:mwCore.oWriteForm.threadId,savedType:mwCore.oWriteForm.savedType,savedLists:mwCore.oWriteForm.savedLists,
marked:C};if(mwReservation.isReservationDateSaved()&&(f=mwReservation.getReservationInfo(),E.reserveDate=f.date,
E.reserveGMT=f.gmt,E.reserveTime=f.time),"extern"==a&&(E.senderName=mEnv.fromName),(O()||P())&&$("senderAddress")&&!mCom.bWriteTome&&(E.senderAddress=mwSenderAddress.getSelectedItem()),
(mcCore.isNcs()||mcCore.isNwe())&&$("security_level_area")){var F="",G="",H="";F=$("security_level_secret").checked?"SECRET":$("security_level_in_house").checked?"IN_HOUSE":"NORMAL";
var I=$$.getSingle("#security_period_area input[name=expire_date]:checked");G=I?I.value:G,H=1==$("check_resend").checked?!1:!0,
E.securityLevel=F,E.securityPeriod=G,E.reSend=H}return q=r=s=t=null,E},_sendMailBo=function(a){var b=mwEditor.isLoaded()?mwEditor.getEditorMode():"",c=getCurContents(a),d=mcCore.getNaverEmailAddress()+";",e=mwSenderName.getSelectedItem();
if("quickAttach"===a)e=mEnv.userName;else{var f=$("originSenderName").value;""==e&&(e=f)}if(c.lists="quickAttach"!==a?mcCore.getPureMailSN(sMailList):"",
c.senderName=e,"quickAttach"!==a&&v())return myCore.showInvalidMailLayer(),!1;if(z(c,a)===!1)return!1;
if(_sSendType=a,mwAttach.aFileList.length()>0)return mwAttach.uploadFileManager("send"),!1;if(c.body=c.body.replace(/<!--sign Area start-->/g,"").replace(/<!--sign Area end-->/g,""),
c.rawBody=c.rawBody.replace(/<!--sign Area start-->/g,"").replace(/<!--sign Area end-->/g,""),m&&m.info&&void 0!==m.info.svcID&&""!=m.info.svcID)c.serviceID=m.info.svcID;else{
c.serviceID="";try{"extern"==a||!mCom.isPopup||"undefined"!=typeof opener&&"unknown"!=typeof opener.oMail&&"undefined"!=typeof opener.oMail||(c.serviceID="external");
}catch(g){c.serviceID="external"}}c.fromMe&&(c.to!=d||""!=c.cc||""!=c.bcc)&&(alert(nLang.w.change_tome_to_normal),
c.fromMe=!1);var i=$$.getSingle("#imageCaptureAirArea");if(i&&$Element(i).hide(),Z(a),$Element("sendAfterReviewBg").show(),
$Element("sending_layer").show(),c.attachCount=nAttachCount,c.bigfile=mwCore.oWriteForm.bigfile,c.sessionID=mwCore.oWriteForm.sessionID,
c.seqNums=mwCore.oWriteForm.seqNums,c.bigfileCount=mwCore.oWriteForm.bigfileCount,c.uploaderType=mwCore.oWriteForm.uploaderType,
c.bigfileNotice=!1,"html5"!=c.uploaderType&&null!=m.info.ndrive.aNdriveFileInfo&&m.info.ndrive.aNdriveFileInfo.length>0){
if(c.sNormaluploadurl=m.info.ndrive.sNormaluploadurl,m.info.ndrive.isOldNdriveApi){for(var j=0;j<m.info.ndrive.aNdriveFileInfo.length;j++)""==m.info.ndrive.aNdriveFileInfo[j]&&(m.info.ndrive.aNdriveFileInfo.splice(j,1),
j--);c.ndriveFileInfos=$Json(m.info.ndrive.aNdriveFileInfo).toString()}c.isHtml5Upload=!1,m.info.ndrive.aNdriveFileInfo="";
}if(c.bigfileHost=mEnv.bigfileHost||"","quickAttach"==a)return c.body="<html><head></head><body></body></html>",
c;c.body=D(c.body),c.replaceImageUrl=h.join(",");var k=oWriteResponse.writeBody;if("undefined"!=typeof k.footerUse&&"Y"==k.footerUse&&k.footerContent)if(b==mwEditor.TEXT_MODE){
var l=k.footerContent;l=$S(l).stripTags().$value().replace(/&nbsp;/g," "),c.body+=l}else c.body+="<br>"+k.footerContent+"<br>";
return b!==mwEditor.TEXT_MODE&&""!=c.rawBody&&(c.body="<html><head><style>p{margin-top:0px;margin-bottom:0px;}</style></head><body>"+c.body+"</body></html>"),
delete c.rawBody,c.fromMe&&(c.folderSN=$Element($$.getSingle("#divWrite .notes_folder .folder_name")).attr("data-foldersn"),
c.subject.match(/^\s*$/)&&(c.subject=Y())),c};var z=function(a,b){var c,d=$$.getSingle("#toInput"),h=$Element("upLoad"),i=$Element("addCalInfoDiv"),j=$("security_level_area"),k=$$.getSingle("#security_level_secret"),l=$$.getSingle("#security_level_in_house");
if(mwReservation.validateReservationInfo()===!1)return!1;if(mCom.isSending)return alert(nLang.w.sending_mail),
!1;if(h.visible())return!1;if(""==a.to)return alert(nLang.w.type_receiver_address),d.focus(),!1;if(!a.fromMe&&(mcCore.isNwe()||mcCore.isNcs())){
if(c=!1,j&&(c=k.checked||l.checked),c&&oAddrCnt.extAddrCnt)return alert(nLang.w.include_exteranl_address),
!1;if(mEnv.maxExternalRecipientCount<oAddrCnt.extAddrCnt)return alert(nLang.w.over_address_count.replace(/\{limit_address_count\}/g,mEnv.maxExternalRecipientCount).replace(/\{current_address_count\}/g,oAddrCnt.extAddrCnt)),
!1}if(!mCom.bScheduleConfirmed&&i&&i.visible()){if(f(nLang.w.confirm_send_appointment_mail)===!1)return!1;
f(null,!0)}if(a.subject.match(/^\s*$/)&&!a.fromMe){if(e(nLang.w.type_title_send_no_title)===!1)return!1;
e(null,!0)}if("quickAttach"!==b&&A()){if(mCom.bScheduleConfirmed||$Element("addCalInfoDiv")&&$Element("addCalInfoDiv").visible())return alert(nLang.w.alert_dl_address_sending_with_schedule),
!1;if(!a.fromMe&&g(nLang.w.alert_dl_to_address)===!1)return!1;g(null,!0)}return!0},A=function(){var a=oWriteResponse.writeBody.dlSenderList;
if(a&&a.length>0&&$("senderAddress"))for(var b=mwSenderAddress.getSelectedItem(),c=0;c<a.length;c++){
var d=a[c];if(b===d.email)return!0}return!1},B=function(){var a=!1,b=!1;return function(c,d){var e;return c||"boolean"!=typeof d?(b?e=a:(e=confirm(c),
a=e),b=d,e):void(b=d)}},C=function(a,b){return mwAttach.oUploadedImages["img"+parseInt(b,10)]},D=function(a){
var b=a;return mwAttach.oUploadedImages.length>0&&(b=a.replace(/<img [\S]*[\s]?(?:data\-image[iI]ndex=)\"(\d+)\"[^>]*>/g,C),
mwAttach.oUploadedImages={length:0},$$.getSingle("#attachPhoto").src="/iframe/upload/html/attachPhoto.html?2"),
b};_saveContentsCallBack=function(a){nAutoSavedMailSN=a.mailSN,$$.getSingle("#displayInform").innerHTML=nLang.w.save_temporary_folder.replace("{Time}",moment().format("HH:mm:ss")),
oDate=null,mCom.bAutoSaveFailed=!1,mcCore.isNaver()&&mcKoreanclick.getWriteSave(mCom.orderType,mwCore.oWriteForm.attachID),
setLcs("","write_save")},_getWrite=function(){_initVariables(),"toMe"==mCom.orderType?(mCom.sMailList="",
sMailList=""):sMailList=mCom.sMailList,$Element("atcp").hide(),maCore.resetAddressObjectAll(),$$.getSingle(".sguide .mInput").value="",
$Element($$.getSingle(".sguide .mInput")).attr("style","width: 100%"),mwAttach.clearFileArea(),mwCalendar.initDefaultCal(),
mwReservation.clearReservation(),mwReservation.hideReservationArea(),mcCore.foldedWriteButton(),mCom.orderType=mCom.orderType||"new";
var a={orderType:mCom.orderType,lists:mCom.sMailList,charset:mCom.sCurReadingMailCharset||""};mCom.isTranslated&&opener&&opener.mCom&&(a.translatedSubject=opener.mCom.translatedSubject,
a.translatedBody=opener.mCom.translatedBody),"promise"==a.orderType&&(a.orderType="new"),m.info.attachID&&(a.attachID=m.info.attachID,
a.hasAttachcontent=!0),mEnv.isUseNewEditor===!1&&oEditor&&oEditor.setContents(""),mwEditor.isLoaded()&&mwEditor.clear();
var b=!mcCore.isNaver()&&("toMe"==mCom.orderType||"edit"==mCom.orderType||"readToMe"===mCom.orderType);
$$.getSingle("#loading_write_layer .load_inner SPAN").innerHTML=b?$$.getSingle("#loading_write_layer .load_inner SPAN").innerHTML.replace(nLang.m.write_loading_mail,nLang.m.write_loading_memo):$$.getSingle("#loading_write_layer .load_inner SPAN").innerHTML.replace(nLang.m.write_loading_memo,nLang.m.write_loading_mail),
_setupEditorSelectionOptionView(),$Element("loading_write_layer").show(),$Element("loading_bg").show(),
mcCore.requestAjax({fCallback:$Fn(_getWriteCallback,this).bind(),oParameter:a,sUrl:"/json/write/"}),
mEnv.isUseNewEditor===!1&&($("se2_iframe").tabIndex=5),(O()||P())&&mwSenderAddress.setSelectedItem("");
};var E=function(){mCom&&mCom.isPopup?confirm(nLang.e.write_timeout)&&window.close():(alert(nLang.e.write_timeout),
history.go(-1))};activeSecurityLevelArea=function(){$("security_level_area")&&($Element("security_level_area").removeClass("disabled"),
$("security_level_secret").removeAttribute("disabled"),$("security_level_in_house").removeAttribute("disabled"),
$("security_level_normal").removeAttribute("disabled"),$("check_resend").removeAttribute("disabled"),
$Element("resend_span").removeClass("disabled"))},activeSecurityPeriodArea=function(){$("security_period_area")&&($Element("security_period_area").removeClass("disabled").show(),
$ElementList("#security_period_area input[name=expire_date]").attr("disabled",!1))},disableSecurityLevelArea=function(){
$("security_level_area")&&($Element("security_level_area").addClass("disabled"),$("security_level_secret").setAttribute("disabled","disabled"),
$("security_level_in_house").setAttribute("disabled","disabled"),$("security_level_normal").setAttribute("disabled","disabled"),
$("check_resend").setAttribute("disabled","disabled"),$Element("resend_span").addClass("disabled"))},
disableSecurityPeriodArea=function(){$("security_period_area")&&($Element("security_period_area").addClass("disabled").hide(),
$ElementList("#security_period_area input[name=expire_date]").attr("disabled","disabled"))},_getWriteForExternal=function(){
sMailList=mCom.sMailList,$Element("atcp").hide(),$$.getSingle(".external_write_body")&&($$.getSingle(".external_write_body").tabIndex=5),
nAttachCount=0,nAttachSize=0,mCom.orderType=mCom.orderType||"new";var a={orderType:mCom.orderType,lists:mCom.sMailList,
charset:mCom.sCurReadingMailCharset||""};mcCore.requestAjax({fCallback:$Fn(_setWriteForExternal,this).bind(),
oParameter:a,sUrl:"/json/write/"})},_tarnsSEShortcutKeyStr=function(a){return a.replace(/</g,"").replace(/>/g,"").replace(/\//g,"slash").toLowerCase();
},_setWrite=function(a){oWriteResponse=a;var b={};maCore.init(),$Element("displayInform").html(""),mwTome._toggleTome(null,"off"),
initSecuritySetting(),mEnv.bigfileHost=a.writeBody.bigfileHost||"",mEnv.activexExpireDay=a.writeBody.activexExpireDay||"";
var c=a.writeBody;mwCore.oWriteForm.attachID=c.attachId,mwCore.oWriteForm.threadId=c.threadId||"",mwCore.oWriteForm.savedType=c.savedType,
mwCore.oWriteForm.savedLists=c.savedLists,mwCore.aTomeFolders=c.toMeFolders,mwCore.nLastTomeFolder=c.lastToMeFolderSN||6,
mcCore.isNaver()&&mCom.isPopup&&mcKoreanclick.getWrite(mCom.orderType,mwCore.oWriteForm.attachID),mwUploader.writeAPIResponsed(a,this),
$$.getSingle("#writeHeadDiv .newMail")&&($$.getSingle("#writeHeadDiv .newMail").innerHTML=a.writeBody.countDraftMail);
var d=$$.getSingle("#checkSeveral");if(d.checked=mEnv.sendSeparately,d.disabled=!1,nAutoSavedMailSN=c.autoSaveMailSN?c.autoSaveMailSN:"",
(1==c.sendSeparately||"true"===mCom.isSendSeparately)&&($$.getSingle("#checkSeveral").checked=!0),mcCore.isNcs()||mcCore.isNwe()){
if(mCom.isVDIUser=1==c.VDInetwork,0==c.securityLock&&(activeSecurityLevelArea(),activeSecurityPeriodArea(),
mCom.initStatusSecurityLevel="open"),$("security_level_area"))if(c.securityLevel&&""!=c.securityLevel&&"undefined"!=typeof c.securityLevel){
var e=c.securityLevel,f=$Element("security_period_area");switch(e){case"SECRET":$("security_level_secret").checked=!0,
f.show();break;case"IN_HOUSE":$("security_level_in_house").checked=!0,f.show();break;case"NORMAL":$("security_level_normal").checked=!0,
$("expire_date_no").checked=!0,$("check_resend").setAttribute("disabled","disabled"),$Element("resend_span").addClass("disabled"),
disableSecurityPeriodArea()}$$.getSingle("input[value="+c.securityPeriod+"]",f).checked=!0,$("check_resend").checked=1!=c.reSend;
}else activeSecurityLevelArea(),$("security_level_normal").checked=!0,changeSecurityLevel("NORMAL");("new"==mCom.orderType||"promise"==mCom.orderType)&&$("security_level_area")&&(activeSecurityLevelArea(),
$("security_level_normal").checked=!0,changeSecurityLevel("NORMAL"),mCom.initStatusSecurityLevel="open");
}if($("priority").checked="undefined"==typeof c.priority||1!=c.priority?!1:!0,c.marked?$Element("starMark").addClass("on"):$Element("starMark").removeClass("on"),
mCom.sSendSubject||($$.getSingle(".sguide .mInput").value=mcCore.restoreSpecialChar(c.subject)),c.bccList&&c.bccList.length>0&&toggleBcc(null,!0),
"toMe"===mCom.orderType||"edit"===mCom.orderType||"readToMe"===mCom.orderType||"1"==mCom.isDraftMemo?(mwTome._setSelectedFromEmail(null,mwSenderAddress.initSelectedAddress(c)),
mwTome._toggleTome(null,"on")):"reply"==mCom.orderType?_insertAddressObjectToInput("reply","to",c.toList):"replyAll"==mCom.orderType?(_insertAddressObjectToInput("replyAll","to",c.toList),
_insertAddressObjectToInput("replyAll","cc",c.ccList)):"draft"==mCom.orderType||"template"==mCom.orderType||"sent"==mCom.orderType?(_insertAddressObjectToInput("draft","to",c.toList),
_insertAddressObjectToInput("draft","cc",c.ccList),_insertAddressObjectToInput("draft","bcc",c.bccList)):"forward"==mCom.orderType||"new"==mCom.orderType&&(mCom.sSendTo&&maCore.insertAddressObject("to",mcCore.restoreSpecialChar(mCom.sSendTo)),
mCom.sSendCc&&maCore.insertAddressObject("cc",mcCore.restoreSpecialChar(mCom.sSendCc)),mCom.sSendBcc&&maCore.insertAddressObject("bcc",mcCore.restoreSpecialChar(mCom.sSendBcc)),
mCom.sSendSubject&&($$.getSingle(".sguide .mInput").value=mcCore.restoreSpecialChar(mCom.sSendSubject))),
sServerTime=c.serverTime.time,mwAttach.setWriteUploader(),c.reserveDate?(b.date=c.reserveDate,b.gmt=c.reserveGMT,
b.time=c.reserveTime,mwReservation.setupReservationFromInfo(b),$Element("changeWriteMode").hide()):(mwReservation.setupReservationFromTimeZoneName(c.serverTime.timeZoneName),
$Element("changeWriteMode").show()),setAutoSaveTimer(),setTimeout(function(){var a="toMe"===mCom.orderType||"readToMe"===mCom.orderType||"edit"===mCom.orderType;
document.title=(a?nLang.w.write_tome:nLang.w.write_mail)+" : "+mcCore.getServiceTitle()},100),$Element("atcp").hide(),
"promise"==mCom.orderType&&mwCalendar.addDefaultCal(),!mCom.isPopup&&mcCore.isNaver()&&mcKoreanclick.getWrite(mCom.orderType,mwCore.oWriteForm.attachID),
mwSenderName.init(c),mwSenderAddress.init(c),$("originSenderName").value=c.fromName,mCom.isPopup?setLcs("/write/popup",mcCore.isNwe()?"writePopup":null):setLcs("","write"),
mCom.isPopup||($Element($$.getSingle(".divList")).show().hide(),$Element($$.getSingle(".divContent")).show().hide(),
$Element("writeWrap").hide().show(),$Element("listBtnMenu").hide(),$Element("readBtnMenu").hide(),$Element("writeBtnMenu").show(),
$Element("listHeadDiv").hide(),$Element("writeHeadDiv").show(),$Element("sendresultDivContent").hide()),
"forward"==mCom.orderType||"new"==mCom.orderType?$Element("toInput").visible()&&setTimeout($Fn(function(){
$("toInput").focus()},this).bind(),100):"toMe"==mCom.orderType||"edit"==mCom.orderType||"readToMe"===mCom.orderType?$Element($$.getSingle(".sguide .mInput")).visible()&&setTimeout($Fn(function(){
$$.getSingle(".sguide .mInput").focus()},this).bind(),100):"reply"!==mCom.orderType&&"replyAll"!==mCom.orderType&&"draft"!==mCom.orderType&&"template"!==mCom.orderType&&"sent"!==mCom.orderType&&$Element("toInput").visible()&&setTimeout($Fn(function(){
$("toInput").focus()},this).bind(),100),window.addEventListener?window.addEventListener("resize",hidePromotion,!1):window.attachEvent&&window.attachEvent("onresize",hidePromotion),
"1"==c.informQuotaFull&&"Y"!=mcCore.getCookie("NVMAIL3AVAIL")){var g=$Element("ly_available");if(mcCore.isNwe()&&(mCom.isWorksJP||mCom.isPopup&&opener.mCom.isWorksJP)){
var h=$Element("nwe_jp_ly_available_related_faq");h&&h.hide()}mtCore.hideAllTooltip(),g.show(),setTimeout($Fn(function(){
$$.getSingle("#ly_available  a").focus()},this).bind(),100),$Element("sendAfterReviewBg").show();var i=(parseInt($Document().clientSize().height,10)-parseInt(g.height(),10))/2,j=(parseInt($Document().clientSize().width,10)-parseInt(g.width(),10))/2;
$Element("ly_available").offset(i,j)}mCom.sSendTo="";try{opener&&opener.mCom&&opener.mCom.sSendTo&&(opener.mCom.sSendTo="");
}catch(k){}setTimeout($Fn(function(){var a=getCurContents("",!0);a.type="draft",t(a)},this).bind(),1e3),
mCom.isPopup||mCom.elBtnQuickAttach&&mCom.elBtnQuickAttach.addClass("disabled");var l=$$.getSingle(".stat_fold",mCom.elWriteBtnMEnu);
l&&U(null),window.onbeforeunload||(window.onbeforeunload=function(){var a=$Element($$.getSingle("#writeWrap"));
return a&&a.visible()&&u()===!1?nLang.w.alert_leaving_write_page:void 0}),$$.getSingle("#write_template_btn")&&(mwTemplate.toggleTemplateBtn(mCom.orderType),
mwTemplate.setScrollLocation(0)),setTimeout(function(){var a=1e3;mCom.isPopup&&(I(a,null),H()&&!$Agent().navigator().firefox&&mwEditor.isLoaded()&&(window.onresize=V)),
W()})},initSecuritySetting=function(){(mcCore.isNcs()||mcCore.isNwe())&&$("security_level_area")&&(disableSecurityLevelArea(),
disableSecurityPeriodArea(),$("security_level_normal").checked=!0,$("expire_date_no").checked=!0,$("check_resend").checked=!1,
mCom.initStatusSecurityLevel="close")},_insertAddressObjectToInput=function(a,b,c){var d,e="",f=/^(".*"|'.*')/;
if("reply"==a||"replyAll"==a||"sent"==a)for(d=0;d<c.length;d++)e+=c[d].email&&"@"===c[d].email[0]?mcCore.restoreSpecialChar(c[d].email)+";":c[d].name&&c[d].name.match(f)?mcCore.restoreSpecialChar(c[d].name)+"<"+c[d].email+">;":'"'+mcCore.restoreSpecialChar(c[d].name)+'" <'+c[d].email+">;";else if("draft"==a||"template"==a)for(d=0;d<c.length;d++)c[d].email&&"@"===c[d].email[0]?e+=mcCore.restoreSpecialChar(c[d].email)+";":(c[d].name&&(e+=c[d].name.match(f)?mcCore.restoreSpecialChar(c[d].name):'"'+mcCore.restoreSpecialChar(c[d].name)+'"'),
e+=c[d].email?"<"+c[d].email+">;":";");maCore.insertAddressObject(b,e)},_setupEditorSelectionOptionView=function(){
var a=$Element($$.getSingle(".change_editor_version")),b=jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<=8;
(mcCore.isNcs()||mcCore.isNwe())&&b===!1?(mEnv.isUseNewEditor?$Element($$.getSingle(".link_to_new_editor")).hide():$Element($$.getSingle(".link_to_previous_editor")).hide(),
a.show()):a.hide()};var F=function(){var a=8,b=$Element($$.getSingle("#cont_fix_area")),c=6,d=14,e=$Element($$.getSingle(".division .mailWriteItem")),f=$Element($$.getSingle(".division .editorFrame")),g=$Element($$.getSingle(".division .section_sendopt"));
return b&&e&&f&&g?b.height()+e.height()+f.height()+g.height()+c+d+a:void 0},G=function(){var a;H()&&!mCom.bWriteTome&&mCom.isPopup&&(a=F(),
a>=550&&(I(null,a),K()))},H=function(){var a;try{a=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice;
}catch(b){}return"function"==typeof a},I=function(a,b){var c,d,e,f,g=document.documentElement.clientWidth;
window.outerWidth?(e=window.outerWidth-window.innerWidth,f=window.outerHeight-window.innerHeight):(c=document.documentElement.clientWidth,
d=document.documentElement.clientHeight,window.resizeTo(c,d),e=c-document.documentElement.clientWidth+40,
f=d-document.documentElement.clientHeight),a=a?a:g,b=b?b:J(),window.resizeTo(a+e,b+f+WRITE_AREA_BOTTOM_MARGIN);
},J=function(){var a;return function(){return"undefined"!=typeof a?a:(a=mEnv.useStandardHeight?mCom.nEditorHeight+321:mCom.nEditorExtHeight+321,
(mcCore.isNcs()||mcCore.isNwe())&&(a+=62),a)}}(),K=function(){var a="undefined"!=typeof window.screenY?window.screenY:window.screenTop||0;
window.outerHeight+a>screen.availHeight&&window.moveTo(window.screenLeft||window.screenX||0,0)};_setWriteForExternal=function(a){
oWriteResponse=a;var b=a.writeBody;mwCore.aTomeFolders=b.toMeFolders,mwCore.nLastTomeFolder=b.lastToMeFolderSN||6,
mCom.orderType=b.orderType,mwTome._toggleTome(null,"off");var c=$$.getSingle("#checkSeveral");c.checked=mEnv.sendSeparately,
$("outboxSave_change").checked=mEnv.saveSentMail,mwSenderName.init(b),mwSenderAddress.init(b),mwCore.oWriteForm.attachID=b.attachId,
$Element("toInput").visible()&&setTimeout($Fn(function(){$("toInput").focus()},this).bind(),100),mCom.sSendSubject&&($$.getSingle(".sguide .mInput").value=mcCore.restoreSpecialChar(mCom.sSendSubject)),
sServerTime=b.serverTime.time,$Element("atcp").hide(),!mCom.isPopup&&mcCore.isNaver()&&mcKoreanclick.getWrite(mCom.orderType,mwCore.oWriteForm.attachID),
$("originSenderName").value=b.fromName,setLcs("/write/tmpl/?svc="+m.info.svcID,null),setTimeout(function(){
var a=1e3;mCom.isPopup&&(I(a,null),H()&&!$Agent().navigator().firefox&&mwEditor.isLoaded()&&(window.onresize=V)),
W()})},focusToBcc=function(){$Element("bccview").visible()||$$.getSingle("#subject").focus()},initWritePage=function(){
if(aFontSet=[],htMainFontJson={},aFontView=[],a(),_setWorksMixedPlan(),mCom.isWrite=!0,mCom.isPopup){
mCom.eEventForUnload=function(){try{if(mCom.isPopup||$Element("writeWrap").visible()){if(!mwAttach.checkAllFilesUploaded())return nLang.w.alert_leaving_write_page;
if(!mwEditor.isLoaded())return nLang.w.alert_leaving_write_page;var a=getCurContents("",!0);if(a.type="draft",
u(a)===!1)return nLang.w.alert_leaving_write_page}mCom.isDownloadAttach&&(mCom.isDownloadAttach=!1);var b=b||window.opener;
mCom.isPopup&&b&&b.m&&(mCom.nCurrentFolder=b.mCom.nCurrentFolder,mCom.aFolderInfo=b.mCom.aFolderInfo,
mEnv.idomainInUse=b.mEnv.idomainInUse,mEnv.idomainInfos=b.mEnv.idomainInfos,mEnv.mailDomain=b.mEnv.mailDomain,
mEnv.useMultidepth=b.mEnv.useMultidepth,mEnv.hideSpamImage=b.mEnv.hideSpamImage,mEnv.useDrive=b.mEnv.useDrive);
}catch(c){}},window.onbeforeunload=mCom.eEventForUnload;try{mCom.isPopup&&opener&&opener.m&&(mCom.parentWindow=opener.mCom.parentWindow);
}catch(b){}switch(cCode){case"zh_CN":case"zh_TW":moment.locale(cCode.toLowerCase());break;case"ko_KR":
case"ja_JP":case"en_US":moment.locale(cCode.split("_")[0]);break;default:moment.locale("en")}"en_US"===cCode&&(mCom.sDefaultDateFormat="MMM D, YYYY");
}},show_help_encoding=function(){$Element("pop_encoding_help").show()},_setWorksMixedPlan=function(){
if(mcCore.isNwe()&&(mcCore.useCalendar()||($$.getSingle("#addCalBtn").className="utx_btn disabled"),
!mcCore.isDisplayDrive())){var a=$$.getSingle("#AddButton_ndrive");a.className="utx_btn_b disabled",
a.onClick=null}},changeSecurityLevel=function(a){if(!mcCore.isNaver()){var b=$Element("security_level_area");
if(!b.hasClass("disabled")){var c=$("check_resend"),d=$("expire_date_no");switch(a){case"SECRET":c.checked=mEnv.secretResendBan,
c.removeAttribute("disabled"),$Element("resend_span").removeClass("disabled"),$$.getSingle("#security_period_area input[value="+mEnv.secretSecurityPeriod+"]").checked=!0,
activeSecurityPeriodArea();break;case"IN_HOUSE":c.checked=mEnv.inHouseResendBan,c.removeAttribute("disabled"),
$Element("resend_span").removeClass("disabled"),$$.getSingle("#security_period_area input[value="+mEnv.inHouseSecurityPeriod+"]").checked=!0,
activeSecurityPeriodArea();break;case"NORMAL":c.checked=!1,c.disabled="disabled",$Element("resend_span").addClass("disabled"),
c.setAttribute("disabled","disabled"),d.checked=!0,disableSecurityPeriodArea()}}}};var L=function(){
var a=$Element("subject");("rgb(170, 170, 170)"==a.css("color")||"#aaa"==a.css("color"))&&(a.css("color","#000"),
a.$value().value="")},M=function(a){9!=a.key().keyCode||a.key().shift||(a.stop(),mwCore.focusToEditor());
},N=function(){$Element("loading_bg")&&$Element("loading_bg").hide(),$Element("loading_write_layer")&&$Element("loading_write_layer").hide(),
mCom.sendBlockInfo&&"Y"==mCom.sendBlockInfo.result&&mcCore.openWindowWithPost("/write/block","NMBlockWindow",["userID","blockReason","blockedTimeTo","blockedTimeFrom","blockType"],[mCom.sendBlockInfo.userID,mCom.sendBlockInfo.blockReason,mCom.sendBlockInfo.blockedTimeTo,mCom.sendBlockInfo.blockedTimeFrom,mCom.sendBlockInfo.blockType],"width=900,height=600,resizable=yes,toolbar=no,menubar=no,location=no,scrollbars=yes");
},O=function(){return oWriteResponse&&oWriteResponse.writeBody&&oWriteResponse.writeBody.idomainInUse;
},P=function(){return oWriteResponse&&oWriteResponse.writeBody&&oWriteResponse.writeBody.dlSenderList&&!!oWriteResponse.writeBody.dlSenderList.length;
},Q=function(){if(mwEditor.getEditorMode()===mwEditor.WYSIWYG_MODE){var a=900,b=670,c=(screen.availTop||0)+(screen.availHeight-b)/2-40,d=(screen.availLeft||0)+(screen.availWidth-a)/2,e="/write/imageCapture",f="image"+(new Date).getTime(),g="";
try{i&&i.top?alert(nLang.w.already_image_open):(g="top="+c+",left="+d+",width="+a+",height="+b+",toolbar=no, menubar=no, resizable=yes",
i=window.open(e,f,g))}catch(h){g="top="+c+", left="+d+", width="+a+", height="+b+", toolbar=no, menubar=no, resizable=yes",
i=window.open(e,f,g)}}},R=function(){var a="",b="";if(isNaver()){var c="auto",d="en",e=mwEditor.getSelectedText(),f=["source","target","text"],g=[c,d,e];
a="width=630,height=620,top=50,left=50,resizable=yes,scrollbars=yes",b="https://papago.naver.com",mcCore.openWindowWithPost(b,"translate",f,g,a);
}else b="/translate",a="width=630,height=500,top=50,left=50,resizable=yes,scrollbars=yes",window.open(b,"translate",a);
},S=function(){var a,b,c,d=cCode.substr(0,2);return"ko"===d?b="ja":"zh"===d?(d=cCode,b="ko"):b="ko",
c=mwEditor.getSelectedText(),a=mwEditor.getEditorMode()===mwEditor.WYSIWYG_MODE?mwEditor.getSelectedHTML():c,
{content:c,source:a,sourceLang:d,targetLang:b,isTextMode:mwEditor.getEditorMode()===mwEditor.TEXT_MODE
}},T=function(a){var b;!mwEditor.isLoaded()||0===jindo.$S(a.source).trim()._str.length||0===jindo.$S(a.content).trim()._str.length&&jindo.$Agent().navigator().ie&&8===jindo.$Agent().navigator().version||(lineBreak=mwEditor.getEditorMode()===mwEditor.TEXT_MODE?"\n\n":jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<=10?"<p>&nbsp;</p>":"<p>​</p>",
b=1===a.type?a.target+lineBreak+a.source:a.source+lineBreak+a.target,mwEditor.getEditorMode()===mwEditor.WYSIWYG_MODE?mwEditor.insertHTML(b):mwEditor.insertText(b));
},U=function(){var a=$Element($$.getSingle("table.mailWriteItem",$$.getSingle("#divWrite"))),b=$Element($$.getSingle(".mailListBtn .btn_fold_write"));
a&&b&&(b.hasClass("stat_fold")?(a.removeClass("fold_items"),b.removeClass("stat_fold"),$$.getSingle(".blind",b).innerHTML=nLang.w.hide_write_header):(a.addClass("fold_items"),
b.addClass("stat_fold"),$$.getSingle(".blind",b).innerHTML=nLang.w.show_write_header),W(),hideAllLayer());
},V=function(){var a;return function(){a&&clearTimeout(a),a=setTimeout(function(){W()})}}(),W=function(){
var a=$Element($$.getSingle("#cont_flex_area"));if(a){var b=a.query(".divWrite"),c=a.query(".mailWriteItem"),d=a.query(".section_sendopt"),e=a.query(".editorFrame");
if(c&&d&&b&&e){var f=8,g=f+WRITE_AREA_BOTTOM_MARGIN+parseInt(b.css("paddingTop"))+parseInt(b.css("paddingBottom"))+parseInt(e.css("marginTop")),h=a.height()-(c.height()+d.height()+g);
"number"==typeof h&&mwEditor.setEditorHeight(h)}}},X=function(a){var c=_sendMailBo(a);(c.bigfileCount||c.attachCount)&&("object"==typeof c?mcCore.requestAjax({
fCallback:$Fn(sendResult,this).bind(a),oParameter:c,sUrl:b.SEND_URL}):"undefined"!=typeof elPrevFocus&&null!=elPrevFocus&&elPrevFocus.focus(),
c=null)},Y=function(){if(mwEditor.isLoaded()===!1)return"";var a=mwEditor.getEditorMode(),b="",c="",d=$A(["</p>","<br>","</P>","<BR>","</h1>","</h2>","</h3>","</h4>","</h5>","</h6>"]),e=1e6,f=!1;
if(b=mwEditor.getContent(),a===mwEditor.TEXT_MODE&&(c="\n",b=b.replace(/<!--sign Area start-->/g,"").replace(/<!--sign Area end-->/g,""),
f=!0),f)e=b.indexOf(c);else{var g=0;d.forEach(function(a){g=-1!==b.indexOf(a)?Math.min(e,b.indexOf(a)):g,
e=0!==g?g:e})}var h=b.substring(0,e);return!f&&h&&(h=h.replace(/&nbsp;/gi," ").replace(/\u200b/g,"").replace(/\n/g," ").replace(/<!--[^-->]+-->/g,"").replace(/<style[^>]*>.*?<\/style>/,"").replace(/<head[^>]*>.*?<\/head>/,"").replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/gi,"")),
mcCore.restoreSpecialChar(h)},Z=function(a){mCom.bWriteTome||"quickAttach"===a?$$.getSingle("#sending_layer .load_inner span")&&$Element($$.getSingle("#sending_layer .load_inner span")).html(nLang.m.note_sending):$$.getSingle("#sending_layer .load_inner span")&&$Element($$.getSingle("#sending_layer .load_inner span")).html(nLang.m.write_sending);
},_=function(){mcCore.hideWriteArea()||mcCore.requestAjax({fCallback:$Fn(function(){document.location.reload();
},this).bind(),oParameter:{editType:"H"},sUrl:"/json/write/changeEditor"})},ab=function(){mcCore.hideWriteArea()||mcCore.requestAjax({
fCallback:$Fn(function(){document.location.reload()},this).bind(),oParameter:{editType:"H2"},sUrl:"/json/write/changeEditor"
})},bb=function(a){var b=$Element(a.element);b.hasClass("on")?b.removeClass("on"):b.addClass("on")},cb=function(){
var a=$Element("checkSeveralHelpLayer"),b=$$.getSingle("#checkSeveralHelpBtn"),c=$$.getSingle("#checkSeveralHelpLayer .btn_close");
return a.visible()?void a.hide():(hideAllLayer(),a.css("width","236px"),a.show(),_AdjustLayer(b,a,"downward"),
c.focus(),void mCom.aVisibleLayerList.push(a))},db=function(){var a=$Element("checkSeveralHelpLayer"),b=$$.getSingle("#checkSeveralHelpBtn");
a.hide(),b.focus()};return{oWriteForm:d,initWrite:k,initExternalWrite:initExternalWrite,getCurContents:getCurContents,
sendMail:sendMail,hideConfidentialLayer:o,checkConfidentail:p,sendMailOk:sendMailOk,sendMailAtExternal:sendMailAtExternal,
finishEditor:finishEditor,sendResult:sendResult,popAddress:popAddress,toggleBcc:toggleBcc,clearAutoSave:clearAutoSave,
setAutoSaveTimer:setAutoSaveTimer,saveContents:saveContents,saveContentsFail:s,saveContentsForMac:saveContentsForMac,
focusToEditor:focusToEditor,focusOnEditor:focusOnEditor,showSignTooltip:showSignTooltip,hideSignTooltip:hideSignTooltip,
saveCurrentWriteInfo:t,isWriteInfoSaved:u,onClickChangeSetting:onClickChangeSetting,hideAvailLayer:hideAvailLayer,
changeInlineImageTag:D,focusToBcc:focusToBcc,initWritePage:initWritePage,show_help_encoding:show_help_encoding,
changeSecurityLevel:changeSecurityLevel,setFolderOption:setFolderOption,checkSubject:L,moveFocusToSE:M,
fixWritePopupHeight:G,showSendBlockPopup:N,openImageCapture:Q,openTranslatePopup:R,getTranslationParam:S,
translateCallback:T,writeTimeout:E,toggleWriteHeader:U,resizeEditorHeight:W,sendQuickAttach:X,saveContentsOk:r,
linkToNewEditor:ab,linkToPreviousEditor:_,dataURItoBlob:y,isUseMultiDomain:O,useDlSenderList:P,checkStarMark:bb,
showCheckSeveralHelpLayer:cb,closeCheckSeveralHelpLayer:db,initSecuritySetting:initSecuritySetting}}(),
mwAttach=function(){var a={length:0};aFileList=$A(),aFileInfoList=$A(),aUploadedSize=[],oRequestInProgress={},
bSendMail=!0,_nRetryCount=0,_sBigFileServerDomain=null,_oUploadRetryTimeout=null,_debugMode=!1,_uploadTimer=null,
_nTotalFileCount=0,_nUploadedFileCount=0,_bHasBigFileConfig=!1,_nMaxConnection=0,_nCurrentConnection=0,
_lastBigFileUploadTime=0,_pauseAllUpload=!1;var b=!1,c=!1,d=$Agent().navigator().safari&&$Agent().os().mac,e=0,f=!1,g=0,h=[],i={
local:[],bigfile:[],ndrive:[],ndriveBigfile:[]},j={WAIT_TIME:5e3,PROGRESS_INTERVAL:200,MAX_CONNECTION:5
},k={progressTimer:null,prevUploadSize:0,shouldUpdate:!1},l={progressBar:null,uploadStatus:null,uploadList:null
},n={progressBar:'<span class="tit">'+nLang.w.total_upload+'</span><span class="total">{UploadPercent}%</span><span class="p_bar"><span class="p_bar_value" style="width:{UploadPercent}%"></span></span>',
uploadStatus:'<tr><th scope="row">'+nLang.w.upload_file+'</th><td id="filecount_html5">{FileCount}/{TotalFileCount}</td><th scope="row">'+nLang.w.upload_speed+'</th><td id="uploadspeed_html5">{UploadSpeed}/'+nLang.c.second+'</td></tr><tr><th scope="row">'+nLang.w.upload_size2+'</th><td id="uploadsize_html5">{UploadSize}/{TotalSize}</td><th scope="row">'+nLang.w.upload_time+'</th><td id="elapsedtime_html5">{ElapsedTime} / {TotalTime}</td></tr>',
uploadFile:'<li id="file_index_{FileSN}">{FileName}<span>{FileSize}<a onclick="ccr(this, \'wrh.filedel\', event)"><img width="8" height="7" border="0" alt="'+nLang.c.del+'" src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif" class="_c1(mwAttach|deleteFile|{FileSN})" onclick=""></a></span></li>',
uploadFileHtml5:'<li id="file_index_{FileSN}"><span class="file_select _d6(mwAttach|dragoverFileHtml5) _d7(mwAttach|dropFileHtml5)"><input type="checkbox" id="upld_file_{FileSN}" sn="{FileSN}" onclick="ccr(this, \'wh5.select\', event);"></span><span class="file_name _d6(mwAttach|dragoverFileHtml5) _d7(mwAttach|dropFileHtml5)"><label for="upld_file_{FileSN}" class="_d1(mwAttach|downloadUploadedFile) _d6(mwAttach|dragoverFileHtml5) _d7(mwAttach|dropFileHtml5)" data-index="{FileSN}" data-url="{DownloadURL}" title="'+nLang.w.dblclick_to_open_attach+'"><span class="fic fic_{FileType}"></span> {FileName} <span class="blind">'+nLang.w.select_file+'</span></label></span><span class="status {StatusClass}">{UploadStatus}</span><span class="file_size _d6(mwAttach|dragoverFileHtml5) _d7(mwAttach|dropFileHtml5)">{FileSize}</span><span class="attach_type _d6(mwAttach|dragoverFileHtml5) _d7(mwAttach|dropFileHtml5)">{UploadType}</span><span class="down_period _d6(mwAttach|dragoverFileHtml5) _d7(mwAttach|dropFileHtml5)">{DownPeriod}</span></li>',
uploadLayerHtml5:'<li id="upload_list_{FileSN}"><span class="file_name"><span class="fic fic_{FileType}"></span>{FileName}</span><span class="file_progress"><span class="st">{UploadedSize} / {FileSize}</span><span class="p_bar"><span class="p_bar_value" style="width:{UploadRatio};"></span></span><span class="transfer_status">{UploadStatus}</span></li>',
extensionBlock:'<tr><td><span class="file_name">{FileName}</span></td><td><a href="{SupportUrl}" {Attribute} class="reason">{Type}</a></td></tr>',
virusBlock:'<tr><td><span class="file_name">{FileName}</span></td><td><a href="javascript:;" style="text-decoration:none;cursor:default;" class="reason">'+nLang.e.virus_malware+"<br>( "+nLang.e.virus_result+': <span class="value">{VirusName}</span> )</a></td></tr>'
};shortcutUpload=function(a){var b=mwCore.oWriteForm.uploaderType;"html5"==b?clickHtml5Upload(a):clickUpload(a);
},clickUpload=function(){if(!$Element("upLoad").visible())try{var a=$$.getSingle("#uploadFile").contentWindow||$$.getSingle("#uploadFile").contentDocument;
if($$.getSingle("#formid",a))try{if(mcCore.isNcs()&&mCom.isVDIUser)return alert(nLang.w.upload_fail_vdi),
!1;$$.getSingle("#attachID",a.document).value=mwCore.oWriteForm.attachID,$$.getSingle("#fileContent",a.document).click();
}catch(b){uploadFailed()}else $$.getSingle("#uploadFile").src="/iframe/upload/html/uploadFile.html?2",
window.setTimeout(o,500)}catch(b){$$.getSingle("#uploadFile").src="/iframe/upload/html/uploadFile.html?2",
window.setTimeout(o,500)}};var o=function(){var a=$$.getSingle("#uploadFile").contentWindow||$$.getSingle("#uploadFile").contentDocument;
if($$.getSingle("#formid",a))try{if(mcCore.isNcs()&&mCom.isVDIUser)return alert(nLang.w.upload_fail_vdi),
!1;$$.getSingle("#attachID",a.document).value=mwCore.oWriteForm.attachID,$$.getSingle("#fileContent",a.document).click();
}catch(b){uploadFailed()}else window.setTimeout(o,500)};clickHtml5Upload=function(){try{if(mcCore.isNcs()&&mCom.isVDIUser)return alert(nLang.w.upload_fail_vdi),
!1;$$.getSingle("#fileContent").click()}catch(a){uploadFailed()}},_getBigFileConfig=function(a,b,c){
var d,e,f="bigfileHost="+mEnv.bigfileHost||"",g="post";switch(a){case"getserver":g="get",d=location.protocol+"//"+w()+"/bigfileupload/getserver.nhn",
e="getsession";break;case"getsession":_sBigFileServerDomain=c,f+="&domain="+c,d=location.protocol+"//"+w()+"/bigfileupload/getsession.nhn",
e="precheck";break;case"precheck":if(mwCore.oWriteForm.sessionID=c,_bHasBigFileConfig=!0,i.bigfile.length){
var h=i.bigfile.length;i.local=i.local.concat(i.bigfile),i.bigfile=null;var k=_nMaxConnection?_nMaxConnection-_nCurrentConnection:Math.min(j.MAX_CONNECTION,h);
if(k>0)for(var l=0;k>l;l++)r()}else uploadNdriveBigfileManager();return}var m=new XMLHttpRequest;m.open(g,d,!0),
m.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),m.withCredentials=!0,
m.onload=function(){var a=m.responseText;_getBigFileConfig(e,b,a)},m.send(f)},getNdriveFileInfo=function(a){
for(var b,c,d,f=0,g=a.length;g>f;f++)if(b=a[f],c=b.downloadUrl?{name:b.name,size:b.size,type:"application/octet-stream",
downloadUrl:b.downloadUrl}:{name:b.name,size:b.size,type:"application/octet-stream",mdsip:b.mdsip,ownerid:b.owfsOwnerId,
filepath:b.filepath,isShared:b.isShared,owfsOwnerId:b.owfsOwnerId,ownerIdcNo:b.ownerIdcNo,ownerIdx:b.ownerIdx,
shareNo:b.shareNo,additionalParam:b.additionalParam,bOldNdriveApi:!0},d={name:c.name,size:c.size,realIndex:aFileList.length(),
bBigFile:c.size+getTotalFileSizeHtml5(null,"normal")+e>mEnv.attachFileMaxSize?!0:!1,bNdrive:!0,bDeleted:!1,
bUploaded:!1,bCanceld:!1,bEml:!1},mEnv.bigFileUse||(d.bBigFile=!1),!s(d.name)){if(!_checkAddFile(d))break;
aFileList.push(c),aFileInfoList.push(d),updateUploadListHtml5(d)}h.length>0&&showUploadBlockListLayer(a.length);
},getNdriveFileInfos=function(){var a,b=m.info.ndrive.isOldNdriveApi?"/new/write/uploadNdrive.nhn":"/new/write/uploadCloud.nhn",c=m.info.ndrive.aNdriveFileInfo,d=[];
if(m.info.ndrive.isOldNdriveApi){for(var e=c.length-1;e>=0;e--)s(c[e].fileName)&&c.splice(e,1);a={servicefileuploadurl:m.info.ndrive.sServiceFileUploadUrl,
servicetype:"normal",fileinfos:decodeURI(JSON.stringify(c)),normaluploadurl:"",attachID:mwCore.oWriteForm.attachID
}}else{for(var e=c.length-1;e>=0;e--)s(c[e].name||c[e].fileName)||d.push(JSON.stringify(c[e]));a={additional:JSON.stringify({
attachId:mwCore.oWriteForm.attachID,servicetype:"normal",isHtml5Upload:!1}),resource:d}}mwUploader.loadUploader();
var f=$Ajax(b,{type:"xhr",method:"post"});f.request(a)},_emlUploadFile=function(a){var b,c,d,e=aFileInfoList.get(a);
return e.bCanceld?(b={actionParam:e.nRealIndex,attachID:mwCore.oWriteForm.attachID},c="/json/write/file/delete",
mCom.oAjax=$Ajax(c,{type:"xhr",method:"post",onload:$Fn(function(){e.bCanceld=!1,_emlUploadFile(a)}).bind(b)
}),void mCom.oAjax.request(b)):(b={lists:"c"==aFileList.get(a).mailSN[0]?aFileList.get(a).mailSN.slice(1):aFileList.get(a).mailSN,
attachID:mwCore.oWriteForm.attachID,totalSize:0,index:e.nRealIndex},c="/write/emlFileUpload/",d=$Ajax(c,{
type:"xhr",method:"post",onload:$Fn(_fileUploadedHtml5).bind(a)}),oRequestInProgress[a]=d,$$.getSingle("li#upload_list_"+a+" span.transfer_status").innerHTML=nLang.w.status_upload,
_updateProgress(a,0),void d.request(b))};var p=function(a){var b=aFileInfoList.get(a);if(b.bCanceld){
var c={actionParam:b.nRealIndex,attachID:mwCore.oWriteForm.attachID},d="/json/write/file/delete";return mCom.oAjax=$Ajax(d,{
type:"xhr",method:"post",onload:$Fn(function(){b.bCanceld=!1,p(a)}).bind(c)}),void mCom.oAjax.request(c);
}var e=aFileList.get(a),f=new XMLHttpRequest;oRequestInProgress[a]=f,f.open("post","/json/write/file/uploadByXHR",!0),
f.setRequestHeader("Cache-Control","no-cache"),f.setRequestHeader("attachID",mwCore.oWriteForm.attachID),
f.setRequestHeader("fileName",encodeURIComponent(e.name)),f.setRequestHeader("type",e.type.replace(/^"+|"+$/g,"")||"application/octet-stream"),
f.setRequestHeader("fileSize",e.size),f.setRequestHeader("indexNum",b.nRealIndex),f.onload=function(){
return delete oRequestInProgress[a],f.status&&200!=f.status?void K(nLang.e.ndrive_file_upload_fail):void _fileUploadedHtml5(a,$Json(f.responseText).toObject());
},f.upload.onprogress=function(b){_updateProgress(a,b.loaded)},f.onerror=function(){K(nLang.e.ndrive_file_upload_fail),
delete oRequestInProgress[a]},$$.getSingle("li#upload_list_"+a+" span.transfer_status").innerHTML=nLang.w.status_upload,
f.send(e)};_uploadNdriveNormalFile=function(a){var b=aFileList.get(a),c=aFileInfoList.get(a),d=b.bOldNdriveApi;
if(c.bCanceld){var e={actionParam:c.nRealIndex,attachID:mwCore.oWriteForm.attachID},f="/json/write/file/delete";
return mCom.oAjax=$Ajax(f,{type:"xhr",method:"post",onload:$Fn(function(){c.bCanceld=!1,_uploadNdriveNormalFile(a);
}).bind(e)}),void mCom.oAjax.request(e)}b.attachID=mwCore.oWriteForm.attachID,b.realIndex=c.nRealIndex,
d&&(b={serviceFileUploadURL:m.info.ndrive.sServiceFileUploadUrl,attachID:mwCore.oWriteForm.attachID,
filePath:b.filepath,fileSize:b.size,ownerIdx:b.ownerIdx,subPath:"",ownerId:b.owfsOwnerId,ownerIdcNo:b.ownerIdcNo,
owfsOwnerID:b.owfsOwnerId,isShared:b.isShared,shareNo:b.shareNo,additionalParam:b.additionalParam,realIndex:c.nRealIndex
});var f=d?"/write/file/ndriveUpload":"/write/file/cloudUpload",g=$Ajax(f,{type:"xhr",method:"post",
onload:function(){delete oRequestInProgress[a];var b=g._request.responseText.split("\n").pop(),d=$Json(b).toObject();
if("OK"===d.Result)_updateProgress(a,c.size),_fileUploadedHtml5(a);else{if("FAIL"!==d.Result||"FILE_UPLOAD_BLOCKED"!==d.Message&&"FILE_UPLOAD_REJECT_VIRUS"!==d.Message)return void K(nLang.e.ndrive_file_upload_fail);
c.bBlocked=!0,oBlockInfo={fileName:c.name,type:d.Message,index:a},d.virusName&&(oBlockInfo.virusName=d.virusName),
h.push(oBlockInfo),_fileUploadedHtml5(a)}}});g._request.onprogress=function(){var b=0,d=g._request.responseText.split("\n"),e=d.length;
if(b=parseInt(d[e-2],10),""!=b&&0!==b){if(-3===b)return c.bBlocked=!0,void h.push({fileName:c.name,type:"FILE_UPLOAD_BLOCKED",
index:a});if(0>b)return void K(nLang.e.ndrive_file_upload_fail);b>0&&_updateProgress(a,b)}},$$.getSingle("li#upload_list_"+a+" span.transfer_status").innerHTML=nLang.w.status_upload,
g.request(b),oRequestInProgress[a]=g},_setTotalProgress=function(){for(var a,b,c,d=0,e=0,f=($Date().time()-_nStartTime)/1e3,g=getTotalFileSizeHtml5(),h=bSendMail?"all":"normal",i=0,m=aFileInfoList.length();m>i;i++)d+=parseInt(aUploadedSize[i],10),
e+=aFileInfoList.get(i).bUploaded?1:0;a=(d-k.prevUploadSize)/j.PROGRESS_INTERVAL*1e3,b=(g-d)/a,c=parseInt(d/g*100,10),
k.prevUploadSize=d,0>=a||(l.progressBar.html(n.progressBar.replace(/\{UploadPercent\}/g,c)),l.uploadStatus.html(n.uploadStatus.replace(/\{FileCount\}/,e).replace(/\{TotalFileCount\}/,getTotalFileCount(h)).replace(/\{UploadSpeed\}/,makeFileString(a,1)).replace(/\{UploadSize\}/,makeFileString(d,1)).replace(/\{TotalSize\}/,makeFileString(g,1)).replace(/\{ElapsedTime\}/,getHHMMSS(f.toFixed(0))).replace(/\{TotalTime\}/,getHHMMSS((f+b).toFixed(0)))));
},_setProgress=function(){var a="";if(k.shouldUpdate){for(var b=0,c=aFileInfoList.length();c>b;b++)a+=_makeUploadLayerItemTemplate(aFileInfoList.get(b),aUploadedSize[b]);
k.shouldUpdate=!1,l.uploadList.html(a),_setTotalProgress()}},_updateProgress=function(a,b){isNaN(parseInt(b))||(k.shouldUpdate=!0,
aUploadedSize[a]=parseInt(b))},_printNextByte=function(a){return a.replace(/[^-?0-9]/g,"")},getHHMMSS=function(a){
a=Number(a);var b=a%60;a=Math.floor(a/60);var c=a%60;a=Math.floor(a/60);var d=a%60,e="";return d>0&&(e+=d+nLang.c.hour2),
c>0&&(""!=e&&(e+=" "),e+=c+nLang.c.minute),""==e?e+=b+nLang.c.second:b>0&&(e+=" "+b+nLang.c.second),
e},_uploadNdriveBigFile=function(a,b){if("-2"==b.data)return void K(nLang.w.bigfile_attach_limit_count_oneday.replace(/\{BigFileMaxNumber\}/,mcCore.isNwe()?20:10));
if(""==b.data||parseInt(b.data,10)<0)return void K(nLang.e.ndrive_file_upload_fail);_updateProgress(a,parseInt(b.data,10));
var c=aFileList.get(a),d=aFileInfoList.get(a),e=c.bOldNdriveApi;if(e){var f="/write/bigfile/ndriveUpload",g={
sessionID:mwCore.oWriteForm.sessionID,domain:_sBigFileServerDomain,contentType:c.type.replace(/^"+|"+$/g,"")||"application/octet-stream",
seqNo:a+1,fileName:c.name,fileSize:c.size,filePath:c.filepath,mdsip:c.mdsip,ownerID:c.ownerid,ownerIdcNo:c.ownerIdcNo,
ownerIdx:c.ownerIdx,owfsOwnerID:c.owfsOwnerId,isShared:c.isShared,shareNo:c.shareNo,additionalParam:c.additionalParam
},i=$Ajax(f,{type:"xhr",method:"post",onload:function(){var b=i._request.responseText.length,d=parseInt(_printNextByte(i._request.responseText.slice(b-8200)),10);
delete oRequestInProgress[a],-3===d?(h.push({fileName:c.name,type:"FILE_UPLOAD_BLOCKED",index:a}),_fileUploadedHtml5(a)):0>d?K(nLang.e.ndrive_file_upload_fail):_fileUploadedHtml5(a);
}});i._request.onprogress=function(){var b=i._request.responseText.length,c=parseInt(_printNextByte(i._request.responseText.slice(b-8192)),10);
""!=c&&_updateProgress(a,aUploadedSize[a]+c)},$$.getSingle("li#upload_list_"+a+" span.transfer_status").innerHTML=nLang.w.status_upload,
i.request(g),oRequestInProgress[a]=i}else{var f=location.protocol+"//"+w()+"/bigfileupload/shareGroupUpload.nhn",g={
sessionId:mwCore.oWriteForm.sessionID,contentType:c.type.replace(/^"+|"+$/g,"")||"application/octet-stream",
seqNo:a+1,filename:c.name,fileSize:c.size,url:encodeURIComponent(c.downloadUrl),isMailApp:!1,isDummyUse:!0
},j="";for(var k in g)j+=k+"="+g[k]+"&";j=j.replace(/&$/,"");var i=new XMLHttpRequest;i.open("post",f,!0),
i.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),i.withCredentials=!0,
i.onload=function(){var b=i.responseText.split("\n"),e=b.length,f=parseInt(b[e-1],10);delete oRequestInProgress[a],
-3===f?(h.push({fileName:c.name,type:"FILE_UPLOAD_BLOCKED",index:a}),_fileUploadedHtml5(a)):0>f?K(nLang.e.ndrive_file_upload_fail):(_updateProgress(a,d.size),
_fileUploadedHtml5(a))},i.onprogress=function(){var b=i.responseText.split("\n"),c=b.length,d=parseInt(b[c-2],10);
""!=d&&0!==d&&_updateProgress(a,d)},$$.getSingle("li#upload_list_"+a+" span.transfer_status").innerHTML=nLang.w.status_upload,
i.send(j),oRequestInProgress[a]=i}},getTotalFileCount=function(a){null==a&&(a="all");for(var b=0,c=0,d=aFileInfoList.length();d>c;c++){
var e=aFileInfoList.get(c);e.bDeleted||e.bBlocked||("all"==a||"bigfile"==a&&e.bBigFile||"normal"==a&&!e.bBigFile)&&b++;
}return b},getTotalFileSizeHtml5=function(a,b){null==a&&(a=aFileInfoList.length()-1),null==b&&(b=bSendMail?"all":"normal");
for(var c=0,d=0;a>=d;d++){var e=aFileInfoList.get(d);e.bDeleted||e.bBlocked||("all"==b||"bigfile"==b&&e.bBigFile||"normal"==b&&!e.bBigFile)&&(c+=aFileInfoList.get(d).size);
}return c},getTotalUploadedSizeHtml5=function(a,b){var c=0;0!==b&&(aUploadedSize[a]=b);for(var d=0,e=aUploadedSize.length;e>d;d++)c+=aUploadedSize[d];
return c},pauseUploadHtml5=function(a){_pauseAllUpload=!0;for(var b in oRequestInProgress)if(oRequestInProgress.hasOwnProperty(b)){
var c=oRequestInProgress[b];c.abort?c.abort():clearTimeout(c);var d=aFileInfoList.get(b);if(d.bBlocked)continue;
d.bCanceld=!0,$$.getSingle("li#upload_list_"+b+" span.transfer_status").innerHTML=nLang.w.status_wait;
var e=$$.getSingle("li#file_index_"+b+" span.status");e.innerHTML=nLang.c.pause,$Element(e).className("status stat_pause"),
$$.getSingle("#testFrame")&&($$.getSingle("#testFrame").src="/testForLogging?pausehtml5Upload&isBigfile="+d.bBigFile+"&isNdrive="+d.bNdrive+"&realIndex="+(b+1));
}"quickAttach"!==_sSendType||a&&"IMG"===a.tagName?($Element("html5Uploader").visible()&&($Element("loading_bg").hide(),
$Element("html5Uploader").hide(),$$.getSingle("#sendBtn").focus()),"quickAttach"!==_sSendType&&mCom.elBtnQuickAttach&&!mCom.elBtnQuickAttach.hasClass("disabled")&&mCom.elBtnQuickAttach.addClass("disabled")):$Element($$.getSingle("#html5Uploader .addButton BUTTON")).html(nLang.w.restart_uploader).attr("onclick","mwAttach.addFiles('quickAttach');"),
clearInterval(k.progressTimer),clearTimeout(_uploadTimer),k.progressTimer=null,_nTotalFileCount=0,oRequestInProgress={};
},initUploaderHtml5=function(){_bHasBigFileConfig=!1,_nRetryCount=0,aFileList.empty(),aFileInfoList.empty(),
aUploadedSize=[],oRequestInProgress={},_nTotalFileCount=0,_nUploadedFileCount=0,b=!1,e=0,f=!1,g=0,h=[],
k.prevUploadSize=0,updateIndicatorHtml5(),$Element("html5Uploader").hide(),$Element($$.getSingle("p.drag_here")).show(),
_initUploaderLayer()},_initUploaderLayer=function(){l.progressBar=$Element($$.getSingle("#html5Uploader .progress_bar")),
l.uploadStatus=$Element($$.getSingle("#html5Uploader .status tbody")),l.uploadList=$Element($$.getSingle("#write_upld_file_list ul")),
$$.getSingle("ul#html5_filelist").innerHTML="",l.uploadList.html(""),l.progressBar.html(n.progressBar.replace(/\{UploadPercent\}/g,0)),
l.uploadStatus.html(n.uploadStatus.replace(/\{FileCount\}/,0).replace(/\{TotalFileCount\}/,0).replace(/\{UploadSpeed\}/,"0KB").replace(/\{UploadSize\}/,"0KB").replace(/\{TotalSize\}/,"0KB").replace(/\{ElapsedTime\}/,0).replace(/\{TotalTime\}/,0));
};var q=function(a){if(!b)return void mcCore.requestAjax({sUrl:"/json/write/file/createFolder",oParameter:{
attachID:mwCore.oWriteForm.attachID},fCallback:function(){b=!0,q(a)}});bSendMail="save"===a||"template"===a?!1:!0;
var c=!1;_nStartTime=$Date().time(),_nUploadedFileCount=0,i={local:[],bigfile:[],ndrive:[],ndriveBigfile:[]
},_lastBigFileUploadTime=0,_pauseAllUpload=!1;for(var d=0,e=aFileInfoList.length();e>d;d++){var f=aFileInfoList.get(d);
if(!f.bDeleted&&0===aFileList.get(d).size)return void alert(nLang.w.cannot_upload_size_0.replace(/\{FileName\}/,f.name));
if(f.nRealIndex||(f.nRealIndex=++g),f.bBigFile){var h=$$.getSingle("#upload_list_"+d);h&&!bSendMail?h.style.display="none":h&&(h.style.display="");
}f.bDeleted||f.bUploaded||f.bBlocked||(f.bNdrive&&f.bBigFile&&bSendMail?i.ndriveBigfile.push(d):f.bNdrive&&!f.bBigFile?i.ndrive.push(d):!f.bNdrive&&f.bBigFile&&bSendMail?_bHasBigFileConfig?i.local.push(d):i.bigfile.push(d):f.bNdrive||f.bBigFile||i.local.push(d)),
f.size!==aFileList.get(d).size&&(f.size=aFileList.get(d).size,c=!0)}if((bSendMail||c)&&_refreshUploadLayerHtml5(),
c&&(updateIndicatorHtml5(),_refreshUploadListHtml5(),getTotalFileSizeHtml5(null,"normal")>mEnv.attachFileMaxSize))return void alert(nLang.w.limit_upload_size.replace("{FileSize}",makeFileString(mEnv.attachFileMaxSize,0)));
if(0===aUploadedSize.length){aUploadedSize=new Array(aFileInfoList.length());for(var l=0,e=aFileInfoList.length();e>l;l++)aUploadedSize[l]=0;
}else if(aUploadedSize.length<aFileInfoList.length())for(var l=0,e=aFileInfoList.length()-aUploadedSize.length;e>l;l++)aUploadedSize.push(0);
if(0===i.local.length&&0===i.bigfile.length&&0===i.ndrive.length&&0===i.ndriveBigfile.length)return void(bSendMail?uploadFileManagerCallback():"template"==a?mwTemplate.addNewTemplateSend():mwCore.saveContentsOk());
if(_nTotalFileCount=i.local.length+i.bigfile.length,_nCurrentConnection=_nMaxConnection=Math.min(j.MAX_CONNECTION,i.local.length),
k.progressTimer=setInterval(_setProgress,j.PROGRESS_INTERVAL),i.bigfile.length&&!_bHasBigFileConfig&&_getBigFileConfig("getserver"),
i.local.length)for(var l=0;_nMaxConnection>l;l++)r();else i.bigfile.length||uploadNdriveManager()},r=function(){
if(clearTimeout(_uploadTimer),!_pauseAllUpload){var a=i.local.shift();if("undefined"==typeof a)return void(i.bigfile&&i.bigfile.length&&_nCurrentConnection--);
var b=aFileInfoList.get(a);if(b.bCanceld||b.bUploaded||0===aUploadedSize[a])if(showHtml5UploaderLayer(),
$$.getSingle("li#file_index_"+a+" .attach_type").innerHTML=nLang.w.disable_attach_type,b.bBigFile)if(b.bCanceld)oRequestInProgress[a]=setTimeout(function(){
var b="bigfileHost="+mEnv.bigfileHost||"",c=location.protocol+"//"+w()+"/bigfileupload/getserver.nhn",d=_oReq=new XMLHttpRequest;
d.open("post",c,!0),d.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),
d.withCredentials=!0,d.onload=function(){var b=d.responseText;_sBigFileServerDomain=b,_precheckBigFile(a);
},d.send(b)},5e3);else{var c=$Date().time();100>c-_lastBigFileUploadTime?(setTimeout(function(){_precheckBigFile(a);
},100),_lastBigFileUploadTime=c):(_precheckBigFile(a),_lastBigFileUploadTime=c)}else b.bEml?_emlUploadFile(a):p(a);
}};uploadFileManagerCallback=function(){$Date().time()-_nStartTime;if(_nRetryCount>0&&($$.getSingle("#testFrame").src="/testForLogging?bigFileUploadToRetry&bigFileCount="+getTotalFileCount("bigfile")+"&bigFileSize="+getTotalFileSizeHtml5(null,"bigfile")+"&retryCount="+_nRetryCount),
clearInterval(k.progressTimer),k.progressTimer=null,_bHasBigFileConfig=!1,k.prevUploadSize=0,$Element("html5Uploader").hide(),
h.length>0){for(var a=0,b=0,c=aFileInfoList.length();c>b;b++)aFileInfoList.get(b).bDeleted||a++;return void showUploadBlockListLayer(a,null,!0);
}if($Element("loading_bg").hide(),bSendMail){if(window.onbeforeunload=null,window.unload=null,_makeBigFileInfo(),
aFileList.empty(),aFileInfoList.empty(),aUploadedSize=[],g=0,"quickAttach"===_sSendType)return void mwCore.sendQuickAttach(_sSendType);
mwCore.sendMailOk(_sSendType)}else{if("template"===_sSendType)return void mwTemplate.addNewTemplateSend();
mwCore.saveContentsOk()}},_makeBigFileInfo=function(){var a="";aFileInfoList.forEach(function(b,c){b.bBigFile&&!b.bDeleted&&(a+=c+1+",");
}),""==a?(mwCore.oWriteForm.bigfile=0,mwCore.oWriteForm.seqNums=""):(mwCore.oWriteForm.bigfile=1,mwCore.oWriteForm.seqNums=a.slice(0,a.length-1)),
mwCore.oWriteForm.bigfileCount=getTotalFileCount("bigfile")},_precheckBigFile=function(a){var b=aFileList.get(a),c=aFileInfoList.get(a),d=new XMLHttpRequest,e={
sessionid:mwCore.oWriteForm.sessionID,sessionID:encodeURIComponent(mwCore.oWriteForm.sessionID),domain:_sBigFileServerDomain,
filename:encodeURIComponent(b.name),fileName:encodeURIComponent(b.name),contentType:b.type.replace(/^"+|"+$/g,"")||"application/octet-stream",
content_type:b.type.replace(/^"+|"+$/g,"")||"application/octet-stream",filesize:b.size,fileSize:b.size,
seqno:a+1,seqNo:a+1,modify:"n"},f="";for(var g in e)f+=g+"="+e[g]+"&";f=f.replace(/&$/,"");var h=location.protocol+"//"+_sBigFileServerDomain+"/bigfileupload/precheck.nhn";
d.open("post",h,!0),d.withCredentials=!0,d.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),
d.onload=function(){var b={data:d.responseText};c.bNdrive?_uploadNdriveBigFile(a,b):_uploadBigFile(a,e,b);
},d.send(f)},_uploadBigFile=function(a,b,d){if("-2"==d.data){var e=$Element("html5Uploader");return void(e.visible()&&!c&&(c=!0,
alert(nLang.w.bigfile_attach_limit_count_oneday.replace(/\{BigFileMaxNumber\}/,mcCore.isNwe()?20:10)),
$Element("loading_bg").hide(),e.hide(),c=!1,pauseUploadHtml5()))}if(!d.data||""==d.data||parseInt(d.data,10)<0)return""==d.data&&$$.getSingle("#testFrame")&&($$.getSingle("#testFrame").src="/testForLogging?bigFilePrecheckError&paramDomain="+b.domain+"&globalDomain="+_sBigFileServerDomain+"&paramSession="+b.sessionID+"&globalSession="+mwCore.oWriteForm.sessionID),
void K(nLang.e.ndrive_file_upload_fail);_nStartByte=parseInt(d.data,10);var f=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice,g=aFileList.get(a),h=aFileInfoList.get(a),k=parseInt(d.data,10),l=f.call(g,k,g.size),m=new XMLHttpRequest;
oRequestInProgress[a]=m;var n=location.protocol+"//"+_sBigFileServerDomain+"/bigfileupload/uploadByXHR.nhn";
m.open("post",n,!0),m.withCredentials=!0,m.setRequestHeader("Cache-Control","no-cache"),m.setRequestHeader("sessionid",mwCore.oWriteForm.sessionID),
m.setRequestHeader("domain",_sBigFileServerDomain),m.setRequestHeader("chunkSize",l.size),m.setRequestHeader("filename",encodeURIComponent(g.name)),
m.setRequestHeader("content_type",g.type.replace(/^"+|"+$/g,"")||"application/octet-stream"),m.setRequestHeader("filesize",g.size),
m.setRequestHeader("seqno",a+1),m.onload=function(){delete oRequestInProgress[a],clearTimeout(_uploadTimer),
_debugMode&&mlog("upload end");var b='{"Result":"OK","Message":"","data":"'+m.responseText+'"}';_fileUploadedHtml5(a,$Json(b).toObject());
},m.upload.onprogress=function(b){clearTimeout(_uploadTimer),_debugMode&&mlog("upload progress : "+b.loaded);
var d=k+b.loaded;_updateProgress(a,d),d<h.size&&(_uploadTimer=setTimeout(function(){if(_debugMode&&mlog("upload timer : retry - "+_nRetryCount+1),
m.abort(),$Element("html5Uploader").visible())if(aUploadedSize[a]>0&&5>_nRetryCount){var b=aFileInfoList.get(a);
b.bCanceld=!0,_nRetryCount++,i.local.push(a),r()}else c||K(nLang.e.ndrive_file_upload_fail)},j.WAIT_TIME));
},m.onerror=function(b){if(clearTimeout(_uploadTimer),delete oRequestInProgress[a],_debugMode&&mlog("upload error : retry - "+_nRetryCount+1),
-1===parseInt(b.target.responseText,10))K(nLang.e.ndrive_file_upload_fail);else if(aUploadedSize[a]>0){
var c=aFileInfoList.get(a);c.bCanceld=!0,_nRetryCount++,i.local.push(a),r()}else K(nLang.e.ndrive_file_upload_fail);
},m.ontimeout=function(b){if(clearTimeout(_uploadTimer),delete oRequestInProgress[a],_debugMode&&mlog("upload timeout : retry - "+_nRetryCount+1),
-1===parseInt(b.target.responseText,10))K(nLang.e.ndrive_file_upload_fail);else if(aUploadedSize[a]>0){
var c=aFileInfoList.get(a);c.bCanceld=!0,_nRetryCount++,i.local.push(a),r()}else K(nLang.e.ndrive_file_upload_fail);
},$$.getSingle("li#upload_list_"+a+" span.transfer_status").innerHTML=nLang.w.status_upload,_debugMode&&mlog("upload start"),
clearTimeout(_uploadTimer),m.send(l)},selectAllHtml5=function(a){var b=$A($$.getSingle("#html5_filelist").getElementsByTagName("input")),c=a.checked;
b.forEach(function(a){a.checked=c})};var s=function(a){var b=a.slice(a.lastIndexOf(".")+1).toLowerCase();
return-1!==mEnv.aBlockedExtension.indexOf(b)?(h.push({fileName:a,type:"FILE_UPLOAD_BLOCKED"}),!0):!1;
},t=function(){$$.getSingle("#extensionBlockLayer").style.display="none",$$.getSingle("#virusBlockLayer").style.display="none",
$$.getSingle("#attachListBlockLayer").style.display="none",$Element("loading_bg").hide()};_checkAddFile=function(a){
if((0==a.size||4096==a.size)&&-1==a.name.indexOf("."))return alert(nLang.w.cannot_upload_folder),!1;if(a.bBigFile){
if(a.size>=mEnv.bigFileMaxSize)return alert(nLang.w.bigfile_attach_limit_size.replace("{BigFileMaxSize}",makeFileString(mEnv.bigFileMaxSize))),
!1;if(getTotalFileCount("bigfile")+1>mEnv.bigFileMaxCount)return alert(a.size<=mEnv.attachFileMaxSize?nLang.w.total_attach_alert.replace("{AttachFileMaxSize}",makeFileString(mEnv.attachFileMaxSize)).replace("{BigFileMaxCount}",mEnv.bigFileMaxCount):nLang.w.bigfile_attach_limit_count_onetime.replace("{BigFileMaxCount}",mEnv.bigFileMaxCount)),
!1}else{if(!mEnv.bigFileUse&&getTotalFileSizeHtml5(null,"normal")+a.size+e>mEnv.attachFileMaxSize)return alert(nLang.w.limit_upload_size.replace("{FileSize}",makeFileString(mEnv.attachFileMaxSize,0))),
!1;if(getTotalFileCount("normal")+1>100)return alert(nLang.w.normal_attach_limit_count_100_onetime),
!1}return!0},toggleToolTipHtml5=function(a,b){var c=$Element("tooltip_test"+b);c.visible()?c.hide():(c.show(),
mCom.aVisibleLayerList.push(c)),c=null},addFiles=function(a){for(var b="quickAttach"==a?$$.getSingle("#tomeFile").files:$$.getSingle("#fileContent").files,c=0;c<b.length;c++){
var d=b[c],g={name:d.name,size:d.size,realIndex:aFileList.length(),bBigFile:d.size+getTotalFileSizeHtml5(null,"normal")+e>mEnv.attachFileMaxSize?!0:!1,
bNdrive:!1,bDeleted:!1,bUploaded:!1,bCanceld:!1,bEml:!1};if(mEnv.bigFileUse||(g.bBigFile=!1),0!=g.size||-1==g.name.indexOf(".")){
if(!s(g.name)){if(!_checkAddFile(g))break;aFileList.push(d),aFileInfoList.push(g),updateUploadListHtml5(g),
d=g=null}}else alert(nLang.w.cannot_upload_size_0.replace("{FileName}",g.name))}return updateIndicatorHtml5(),
$Element($$.getSingle("#html5Uploader .addButton BUTTON")).html(nLang.w.pause_uploader).attr("onclick","ccr(this, 'wh5*u.pause', event);mwAttach.pauseUploadHtml5(this);"),
"quickAttach"===a?($$.getSingle("#tomeFile").outerHTML="<input type='file' name='tomefile' id='tomeFile' style='visibility:hidden;width:0px;height:0px;left: -9999px;top: -9999px;position: absolute;' multiple onChange='javascript:mfCore.getQuickAttachId();'/>",
h.length>0?void showUploadBlockListLayer(b.length):void(aFileInfoList.get(0)&&(f=!0,$Element("tomeFile").attr("data-title",aFileInfoList.get(0).name),
mwCapcha.mailSendClicked(this,"quickAttach")))):(h.length>0&&showUploadBlockListLayer(b.length),mEnv.bigFileUse&&$Element("AttachInfoNoti").show(),
u(),$$.getSingle("#fileContent").outerHTML="<input type='file' name='userfile' id='fileContent' style='visibility:hidden;width:0px;height:0px;left: -9999px;top: -9999px;position: absolute;' multiple onChange='javascript:mwAttach.addFiles();'/>",
void _createFolder())},_createFolder=function(){b||mcCore.requestAjax({sUrl:"/json/write/file/createFolder",
oParameter:{attachID:mwCore.oWriteForm.attachID},fCallback:function(){b=!0}})},showUploadBlockListLayer=function(a,b,c){
if(b&&(h=b),1===a&&"FILE_UPLOAD_BLOCKED"===h[0].type)uploadBlocked();else if(1===a&&"FILE_UPLOAD_REJECT_VIRUS"===h[0].type)uploadBlockedVirus(h[0].virusName);else{
var d="",e=120,f=$$.getSingle("#attachListBlockLayer");mCom.isPopup||document.body.appendChild(f);for(var g=0,i=Math.min(h.length,e);i>g;g++)d+="FILE_UPLOAD_BLOCKED"===h[g].type?_makeExtensionBlockRowHtml(h[g]):_makeVirusBlockRowHtml(h[g]);
$Element($$.getSingle("tbody",f)).html(d),f.style.display="block",$$.getSingle(".btn_area button",f).focus(),
$Element("loading_bg").show()}if(c){for(var g=0,i=h.length;i>g;g++){var j=h[g].index;$$.getSingle("#html5_filelist").removeChild($$.getSingle("li#file_index_"+j)),
$$.getSingle("li#upload_list_"+j)&&$$.getSingle("#write_upld_file_list ul").removeChild($$.getSingle("li#upload_list_"+j)),
_updateProgress(j,0)}_setTotalProgress()}h=[]},_makeExtensionBlockRowHtml=function(a){var b=mcCore.getCookie("WORKS_LOC"),c='style="text-decoration:none;cursor:default;"',d="javascript:;",e=mcCore.isNaver()?nLang.e.upload_blocked_extension_naver:nLang.e.upload_blocked_extension;
return mcCore.isNwe()?("kr1"===b&&"ko_KR"===cCode||"jp1"===b&&"ja_JP"===cCode)&&(d=nLang.e.help_upload_block_url,
c='target="_blank"'):mcCore.isNaver()&&(d=nLang.e.help_upload_block_url_naver,c='target="_blank"'),n.extensionBlock.replace(/\{FileName\}/g,a.fileName).replace(/\{Type\}/,e).replace(/\{SupportUrl\}/,d).replace(/\{Attribute\}/,c);
},_makeVirusBlockRowHtml=function(a){return n.virusBlock.replace(/\{FileName\}/g,a.fileName).replace(/\{VirusName\}/,a.virusName);
},_getFileType=function(a){var b=a.split(".");return 1==b.length?"etc":b[b.length-1].toLowerCase()},
updateIndicatorHtml5=function(){var a=0==getTotalFileSizeHtml5(null,"normal")?"0KB":makeFileString(getTotalFileSizeHtml5(null,"normal"));
if($$.getSingle(".divWrite .indicator #AttachFileSizeActiveX").innerHTML=a,$$.getSingle(".divWrite .indicator #attachFileMaxSize").innerHTML=makeFileString(mEnv.attachFileMaxSize,0),
mEnv.bigFileUse){var b=0==getTotalFileSizeHtml5(null,"bigfile")?"0KB":makeFileString(getTotalFileSizeHtml5(null,"bigfile"));
$$.getSingle(".divWrite .indicator #BigFileSize").innerHTML=b,$$.getSingle(".divWrite .indicator #bigFileMaxSize").innerHTML=makeFileString(mEnv.bigFileMaxSize),
$$.getSingle(".divWrite .indicator #bigFileMaxCount").innerHTML=mEnv.bigFileMaxCount,$$.getSingle(".divWrite #AttachInfoNoti #bigFilePeriod").innerHTML=mEnv.bigFilePeriod;
}},updateUploadLayerHtml5=function(a){var b=_makeUploadLayerItemTemplate(a);b&&$Element($$.getSingle("#write_upld_file_list ul")).append(b);
},_refreshUploadLayerHtml5=function(){for(var a="",b=0,c=aFileInfoList.length();c>b;b++)a+=_makeUploadLayerItemTemplate(aFileInfoList.get(b));
$$.getSingle("#write_upld_file_list ul").innerHTML=a},_makeUploadLayerItemTemplate=function(a,b){if(a.bDeleted||a.bBlocked||!bSendMail&&a.bBigFile)return"";
var c,d=n.uploadLayerHtml5.replace(/\{FileName\}/g,mcCore.replaceSpecialChar(a.name)).replace(/\{FileType\}/g,_getFileType(a.name)).replace(/\{FileSN\}/g,a.realIndex);
return b&&b!==a.size?d=d.replace(/\{UploadedSize\}/g,makeFileString(b)).replace(/\{FileSize\}/g,makeFileString(a.size)).replace(/\{UploadRatio\}/g,parseInt(b/a.size*100,10)+"%").replace(/\{UploadStatus\}/g,nLang.w.status_upload):a.bUploaded||b===a.size?(c=makeFileString(a.size,1),
d=d.replace(/\{UploadedSize\}/g,c).replace(/\{FileSize\}/g,c).replace(/\{UploadRatio\}/g,"100%").replace(/\{UploadStatus\}/g,nLang.w.upload_complete2)):(c=makeFileString(a.size),
d=d.replace(/\{UploadedSize\}/g,"0KB").replace(/\{FileSize\}/g,c).replace(/\{UploadRatio\}/g,"0%").replace(/\{UploadStatus\}/g,nLang.w.status_wait)),
d},updateUploadListHtml5=function(a){var b=_makeUploadListItemTemplate(a);$Element($$.getSingle("#write_drag_here")).visible()&&$Element($$.getSingle("#write_drag_here")).hide(),
$Element($$.getSingle("#writeUploader5 div.upld_flist ul")).append(b),mUtil.checkSubject(mcCore.replaceSpecialChar(a.name)),
updateUploadLayerHtml5(a)},_refreshUploadListHtml5=function(){for(var a="",b=0,c=aFileInfoList.length();c>b;b++)a+=_makeUploadListItemTemplate(aFileInfoList.get(b));
$$.getSingle("#writeUploader5 div.upld_flist ul").innerHTML=a},_makeUploadListItemTemplate=function(a){
var b,c,e="",f="",g="";if(a.bUploaded){var h=d?encodeURIComponent(a.name):"";g=[window.location.protocol+"//",window.location.host,"/file/download/write/",h,"?attachID="+mwCore.oWriteForm.attachID,"&attachIndex="+a.nRealIndex].join("");
}if(a.bBigFile){b=a.size>mEnv.attachFileMaxSize||a.bNdrive?nLang.w.bigfile_attach+" <button class='chg_type' disabled='disabled'>"+nLang.w.change+"</button>":nLang.w.bigfile_attach+" <button class='chg_type' onclick='ccr(this, \"wh5.convert\", event);mwAttach.changeUploadType(this, {FileSN}, \"normal\");'>"+nLang.w.change+"</button>";
var i=moment();i.add(mEnv.bigFilePeriod,"days"),c=i.format("~ "+(mCom.sDefaultDateFormat||"YY/MM/DD"))+" ("+mEnv.bigFilePeriod+nLang.w.days+")",
i=null}else a.bUploaded?(b=nLang.w.disable_attach_type,e=nLang.c.complete,f="stat_complete"):b=a.bEml?nLang.w.disable_attach_type:nLang.w.normal_attach+" <button class='chg_type' onclick='ccr(this, \"wh5.convertbig\", event);mwAttach.changeUploadType(this, {FileSN}, \"bigfile\");'>"+nLang.w.change+"</button>",
c=nLang.w.unlimit,aAttachSize[a.realIndex]=Number(a.size),nAttachSize+=Number(a.size),nAttachCount++;
var j=n.uploadFileHtml5;return j=j.replace(/\{FileName\}/g,mcCore.replaceSpecialChar(a.name)),j=j.replace(/\{UploadStatus\}/g,e),
j=j.replace(/\{StatusClass\}/g,f),j=j.replace(/\{FileSize\}/g,makeFileString(a.size)),j=j.replace(/\{FileType\}/g,_getFileType(a.name)),
j=j.replace(/\{UploadType\}/g,b),j=j.replace(/\{DownPeriod\}/g,c),j=j.replace(/\{FileSN\}/g,a.realIndex),
j=j.replace(/\{DownloadURL\}/g,g)},changeUploadType=function(a,b,c){if("bigfile"==c){if(getTotalFileCount("bigfile")+1>mEnv.bigFileMaxCount)return void alert(nLang.w.bigfile_attach_limit_count_onetime.replace("{BigFileMaxCount}",mEnv.bigFileMaxCount));
a.parentNode.innerHTML=nLang.w.bigfile_attach+" <button class='chg_type' onclick='ccr(this, \"wh5.convert\", event);mwAttach.changeUploadType(this,"+b+', "normal");\'>'+nLang.w.change+"</button>";
var d=moment();d.add(mEnv.bigFilePeriod,"days");var f=d.format("~ "+(mCom.sDefaultDateFormat||"YY/MM/DD"))+"("+mEnv.bigFilePeriod+nLang.w.days+")";
d=null,$$.getSingle("#file_index_"+b+" .down_period").innerHTML=f;var g=aFileInfoList.get(b);g.bBigFile=!0,
nAttachSize-=Number(g.size),nAttachCount--}else{if(getTotalFileCount("normal")+1>100)return void alert(nLang.w.normal_attach_limit_count_100_onetime);
var h=getTotalFileSizeHtml5(null,"normal")+e;if(h+aFileInfoList.get(b).size>mEnv.attachFileMaxSize)return void alert(nLang.w.normal_attach_limit_size.replace("{TotalSize}",makeFileString(h)).replace("{FileSize}",makeFileString(mEnv.attachFileMaxSize)));
a.parentNode.innerHTML=nLang.w.normal_attach+" <button class='chg_type' onclick='ccr(this, \"wh5.convertbig\", event);mwAttach.changeUploadType(this,"+b+', "bigfile");\'>'+nLang.w.change+"</button>",
$$.getSingle("#file_index_"+b+" .down_period").innerHTML=nLang.w.unlimit;var g=aFileInfoList.get(b);g.bBigFile=!1,
aAttachSize[g.realIndex]=Number(g.size),nAttachSize+=Number(g.size),nAttachCount++}updateIndicatorHtml5();
},deleteFileHtml5=function(){var a=$A($$.getSingle("#html5_filelist").getElementsByTagName("input")),b=!1,c="",d="";
if(a.forEach(function(a){if(a.checked){var e=parseInt($Element(a).attr("sn"),10);aFileInfoList.get(e).bUploaded||aFileInfoList.get(e).bCanceld?(aUploadedSize[e]&&(aUploadedSize[e]=0),
aFileInfoList.get(e).bBigFile?c+=e+1+",":(d+=aFileInfoList.get(e).nRealIndex+";",b=!0)):aFileInfoList.get(e).bBigFile||(nAttachSize-=aAttachSize[e],
nAttachCount--),$Element("file_index_"+e).leave(),$Element("upload_list_"+e).leave(),aFileInfoList.get(e).bDeleted=!0,
b=!0}}),""!=c){c=c.slice(0,c.length-1);var e={sessionID:mwCore.oWriteForm.sessionID,domain:_sBigFileServerDomain,
seqList:c};mcCore.requestAjax({fCallback:$Fn(function(a,b){"FAIL"==b.Result?alert(nLang.w.file_delete_fail_desc):nAttachCount--;
}).bind(e),oParameter:e,sUrl:"/json/write/bigfile/delete"})}if(""!=d){d=d.slice(0,d.length-1);var e={
actionParam:d,attachID:mwCore.oWriteForm.attachID},f="/json/write/file/delete";mCom.oAjax=$Ajax(f,{type:"xhr",
method:"post",onload:$Fn(function(a,b){var c=b.json();"FAIL"==c.Result?alert(nLang.w.file_delete_fail_desc):nAttachCount--;
}).bind(e)}),mCom.oAjax.request(e)}b||alert(nLang.w.select_delete_file),0==$$.getSingle("#html5_filelist").getElementsByTagName("input").length&&($$.getSingle("#writeUploader5 .upld_header input").checked=!1,
$Element($$.getSingle("p.drag_here")).show()),updateIndicatorHtml5(),a=b=null},showHtml5UploaderLayer=function(){
var a=$Element("html5Uploader");if(!a.visible()){$Element("loading_bg").show(),a.show();var b=-parseInt(a.width(),10)/2+"px",c=-parseInt(a.height(),10)/2+"px";
a.css("marginLeft",b),a.css("marginTop",c),$$.getSingle(".addButton button",a).focus()}},showUploadingLayer=function(a,b){
if(s(a.value))return uploadBlocked(),void($$.getSingle("#uploadFile").src="/iframe/upload/html/uploadFile.html?2");
b.submit();var c=$$.getSingle("#uploadFile").contentWindow||$$.getSingle("#uploadFile").contentDocument;
$$.getSingle("#attachID",c.document).value=mwCore.oWriteForm.attachID;var d=$Element("upLoad"),e=$Element($$.getSingle("#upLoad .inner"));
d.show();var f=-parseInt(e.width(),10)/2+"px";d.css("marginLeft",f),elIframe=f=null},_fileUploadedHtml5=function(a,b){
var c,d=aFileInfoList.get(a);if(!d.bNdrive){b=d.bEml?b.json():$Json(b).toObject();var e=$Element("html5Uploader");
if(e.visible()&&("FAIL"==b.Result||d.bBigFile&&"0"!=b.data||!d.bBigFile&&!d.bEml&&0===parseInt(b.size,10))){
if("FILE_UPLOAD_BLOCKED"!==b.Message&&"FILE_UPLOAD_REJECT_VIRUS"!==b.Message){var f="";return f="FILE_UPLOAD_FULL"===b.Message?nLang.w.limit_upload_size.replace(/\{FileSize\}/,makeFileString(mEnv.attachFileMaxSize,0)):d.bBigFile||d.bEml||0!==parseInt(b.size,10)?nLang.e.ndrive_file_upload_fail:nLang.w.upload_fail_zero_byte,
alert(f),$Element("loading_bg").hide(),$Element("html5Uploader").hide(),aUploadedSize[a]=0,void __nvl_error("File Upload Failed (message: "+b.Message+", name: "+b.name+", size: "+b.size+", localSize: "+d.size+")");
}d.bBlocked=!0,c={fileName:d.name,type:b.Message,index:a},b.virusName&&(c.virusName=b.virusName),h.push(c),
aUploadedSize[a]=0}}_nUploadedFileCount++,updateUploadedFileHtml5(d,a,b,d.bBlocked),_nTotalFileCount===_nUploadedFileCount?i.ndrive.length>0||i.ndriveBigfile.length>0?uploadNdriveManager():uploadFileManagerCallback():d.bNdrive?uploadNdriveManager():r();
},updateUploadedFileHtml5=function(a,b,c,e){var f=e?nLang.c.fail:nLang.c.complete,g=e?nLang.c.fail:nLang.w.upload_complete2;
if($$.getSingle("li#file_index_"+b)){if(a.bBigFile||(a.bEml?(_updateProgress(b,a.size),a.nRealIndex=c.list[0].realIndex):a.bNdrive||(a.nRealIndex=c.realIndex)),
e)nAttachCount--;else{a.bUploaded=!0;var h=d?encodeURIComponent(a.name):"",i=[window.location.protocol+"//",window.location.host,"/file/download/write/",h,"?attachID="+mwCore.oWriteForm.attachID,"&attachIndex="+a.nRealIndex].join("");
$$.getSingle("li#file_index_"+b+" label").setAttribute("data-url",i)}var j=$$.getSingle("li#file_index_"+b+" span.status");
j.innerHTML=f,$Element(j).className("status stat_complete"),$$.getSingle("li#file_index_"+b+" .attach_type").innerHTML=nLang.w.disable_attach_type;
var k=makeFileString(a.size,1);$$.getSingle("li#upload_list_"+b)&&($Element($$.getSingle("li#upload_list_"+b+" span.p_bar_value")).css("width","100%"),
$$.getSingle("li#upload_list_"+b+" span.st").innerHTML=k+" / "+k,$$.getSingle("li#upload_list_"+b+" span.transfer_status").innerHTML=g);
}},uploadNdriveManager=function(){var a=i.ndrive.shift();if("undefined"==typeof a)return void uploadNdriveBigfileManager();
var b=aFileInfoList.get(a);b.nRealIndex||(b.nRealIndex=++g),showHtml5UploaderLayer(),$$.getSingle("li#file_index_"+a+" .attach_type").innerHTML=nLang.w.disable_attach_type,
_uploadNdriveNormalFile(a)},uploadNdriveBigfileManager=function(){_oUploadRetryTimeout&&clearTimeout(_oUploadRetryTimeout);
var a=i.ndriveBigfile.shift();if("undefined"==typeof a)return void uploadFileManagerCallback();if(!_bHasBigFileConfig)return i.ndriveBigfile.push(a),
void _getBigFileConfig("getserver");var b=aFileInfoList.get(a);b.nRealIndex||(b.nRealIndex=++g),showHtml5UploaderLayer(),
$$.getSingle("li#file_index_"+a+" .attach_type").innerHTML=nLang.w.disable_attach_type,b.bCanceld?_oUploadRetryTimeout=setTimeout(function(){
var b="bigfileHost="+mEnv.bigfileHost||"",c=location.protocol+"//"+w()+"/bigfileupload/getserver.nhn",d=_oReq=new XMLHttpRequest;
d.open("post",c,!0),d.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),
d.withCredentials=!0,d.onload=function(){var b=d.responseText;_sBigFileServerDomain=b,_precheckBigFile(a);
},d.send(b)},5e3):_precheckBigFile(a)},dropFileHtml5=function(a){if(ccr(a.element,"wh5.drag",a._event),
a._event.stopPropagation(),a._event.preventDefault(),mcCore.isNcs()&&mCom.isVDIUser)return alert(nLang.w.upload_fail_vdi),
!1;var b,c;try{if(a._event.dataTransfer.getData("text")&&$Json(a._event.dataTransfer.getData("text")).toObject()&&$Json(a._event.dataTransfer.getData("text")).toObject().mailId){
if(b=$Json(a._event.dataTransfer.getData("text")).toObject(),"ndrive"==b.type)return b.bEnableAttach?b.isBlockedExt?(alert(mcCore.isNaver()?nLang.ndrive.blockExtMsg_naver:nLang.ndrive.blockExtMsg),
!1):(b.name=mcCore.restoreSpecialChar(b.name),mwAttach.getNdriveFileInfo([b]),mwAttach.updateIndicatorHtml5(),
!1):(alert("Y"==b.virusStatus||"R"==b.virusStatus?nLang.ndrive.virusMsg:nLang.ndrive.copyrightMsg),!1);
if(b.mailId&&b.mailId!=mEnv.mailId)return alert(nLang.e.login_info_changed),window.location.reload(!0),
!1;if((mcCore.isNcs()||mcCore.isNwe())&&!b.enableResend){var d=nLang.l.security_no_delivery;return b.mailData.length>1&&(d=nLang.l.security_include_no_delivery),
alert(d),!1}for(var f=0;f<b.mailData.length;f++)b.mailData[f].name=mcCore.restoreSpecialChar(b.mailData[f].name);
c=b.mailData}else c=a._event.dataTransfer.files}catch(g){c=a._event.dataTransfer.files}for(var f=0;f<c.length;f++){
var i=c[f],j=i.size+getTotalFileSizeHtml5(null,"normal")+e>mEnv.attachFileMaxSize,k=!!i.mailSN;if(k&&j)return void alert(nLang.w.bigfile_not_supported);
var l={name:i.name,size:i.size,realIndex:aFileList.length(),bBigFile:j,bNdrive:!1,bDeleted:!1,bUploaded:!1,
bCanceld:!1,bEml:k};if(mEnv.bigFileUse||(l.bBigFile=!1),0!=l.size){if(!s(l.name)){if(!_checkAddFile(l))return void updateIndicatorHtml5();
aFileList.push(i),aFileInfoList.push(l),updateUploadListHtml5(l),i=l=null}}else alert(nLang.w.cannot_upload_size_0.replace("{FileName}",l.name));
}updateIndicatorHtml5(),h.length>0&&showUploadBlockListLayer(c.length),mEnv.bigFileUse&&$Element("AttachInfoNoti").show(),
u(),$$.getSingle("#fileContent").outerHTML="<input type='file' name='userfile' id='fileContent' style='visibility:hidden;width:0px;height:0px;left: -9999px;top: -9999px;position: absolute;' multiple onChange='javascript:mwAttach.addFiles();'/>",
_createFolder()};var u=function(){$Element("writeUploader5").show(),$Element("btn_filedelete_html5")&&$Element("btn_filedelete_html5").show(),
$Element("icon_attachview").removeClass("sClose"),$Element("icon_attachview").addClass("sOpen"),$("icon_attachview").alt=nLang.c.close,
$Element("viewAttWin")&&$Element("viewAttWin").attr("title",nLang.w.close_attach)};dragoverFileHtml5=function(a){
a._event.stopPropagation(),a._event.preventDefault()},downloadUploadedFile=function(a){a.stopDefault();
var b="SPAN"===a.element.tagName?a.element.parentElement:a.element,c=b.getAttribute("data-url");if(!c){
var d=parseInt(b.getAttribute("data-index"),10);return aFileInfoList.get(d).bBigFile?void alert(nLang.w.cannot_open_bigfile):void(confirm(nLang.w.open_attach_after_save)&&mwCore.saveContents(null,!0));
}mCom.isDownloadAttach=!0;var e=$$.getSingle("#checkVirusArea");e||(e=document.createElement("iframe"),
e.id="checkVirusArea",e.style.display="none",document.body.appendChild(e)),e.contentWindow.location.href=c;
},uploadFailed=function(){$Element("upLoad").hide(),alert(nLang.e.ndrive_file_upload_fail),$$.getSingle("#uploadFile").src="/iframe/upload/html/uploadFile.html?2",
$$.getSingle("#attachPhoto").src="/iframe/upload/html/attachPhoto.html?2"},fileUploaded=function(a,b){
$Element("upLoad").hide(),"multi"!=b&&($Element("upLoad").hide(),"image"!=b&&$Element("AttachFileSizeInfo").show()),
"image"!=b?($Element("AttachTbl").show(),mwUploader.mailFileUploaded()):e+=parseInt(a.size,10);var c="image"==b?!0:!1;
updateUploadedFileOne(a,c),mcCore.isNcs()&&nAttachSize>mEnv.attachFileMaxSize&&(deleteFile(null,a.realIndex),
alert(nLang.w.limit_upload_size.replace("{FileSize}",makeFileString(mEnv.attachFileMaxSize,0)))),$$.getSingle("#uploadFile").src="/iframe/upload/html/uploadFile.html?2";
},uploadFull=function(a){alert(nLang.w.limit_upload_size.replace("{FileSize}",makeFileString(mEnv.attachFileMaxSize,0))),
"multi"!=a&&$Element("upLoad").hide(),$$.getSingle("#uploadFile").src="/iframe/upload/html/uploadFile.html?2";
},uploadBlocked=function(a){var b=$$.getSingle("#extensionBlockLayer"),c=$$.getSingle("#attachBlockUrl",b),d=mcCore.getCookie("WORKS_LOC");
mCom.isPopup||document.body.appendChild(b),a||(a=mcCore.isNaver()?nLang.e.block_exe_file_naver:nLang.e.block_exe_file),
mcCore.isNwe()&&("kr1"===d&&"ko_KR"===cCode||"jp1"===d&&"ja_JP"===cCode)?c.href=nLang.e.help_upload_block_url:mcCore.isNaver()?c.href=nLang.e.help_upload_block_url_naver:c&&(c.style.display="none"),
$Element("upLoad").hide(),$$.getSingle("p.desc",b).innerHTML=a,$Element("loading_bg").show(),b.style.display="block",
$$.getSingle(".btn_area button",b).focus()},uploadBlockedVirus=function(a){var b=$$.getSingle("#virusBlockLayer");
$Element("upLoad").hide(),$$.getSingle("span.value",b).innerHTML=a,$Element("loading_bg").show(),myCore.showLayer(null,b,{
direction:"screen-center",align:"absolute-center"},$$.getSingle(".addButton button",b),!0)},deleteFile=function(a,b){
if(mcCore.isNcs()&&b>100){var c=b-101;return m.info.ndrive.aNdriveFileInfo[c]="",void _deleteFileCallBack(b);
}var d={attachID:mwCore.oWriteForm.attachID,actionParam:b};mcCore.requestAjax({fCallback:$Fn(_deleteFileCallBack,this).bind(b),
oParameter:d,sUrl:"/json/write/file/delete/"})},clearFileArea=function(){if(mcCore.isNcs()&&aAttachSize.length>100)for(var a=0;100>a;a++)"undefined"!=typeof aAttachSize[a]&&_deleteFileCallBack(a);else{
nAttachSize=0,nAttachCount=0,$Element("file_list").html(""),$Element("AttachTbl").hide();var b=makeFileString(nAttachSize),c=mcCore.isNcs()?20:10;
$Element("AttachFileSizeFlash").html(b),$Element("AttachFileSizeBar").css({width:(nAttachSize/(1024*c*1024)*100).toFixed(0)+"%",
height:"7px"}),b=null}},getAttachID=function(){return mwCore.oWriteForm.attachID},setWriteUploader=function(){
mwUploader.uploaderEnabled()},updateUploadedFileOne=function(a,b){var c=[window.location.protocol+"//",window.location.host,"/file/download/write/","?attachID="+mwCore.oWriteForm.attachID,"&attachIndex="+a.realIndex].join(""),d=n.uploadFile;
d=d.replace(/\{FileSN\}/g,a.realIndex),d=d.replace(/\{FileName\}/g,a.name),d=d.replace(/\{FileSize\}/g,makeFileString(a.size)),
d=d.replace(/\{DownloadURL\}/g,c),aAttachSize[a.realIndex]=Number(a.size),b||(nAttachSize+=Number(a.size),
nAttachCount++);var e=makeFileString(nAttachSize),f=mEnv.attachFileMaxSize;$Element("AttachFileSizeFlash").html(e),
$Element("AttachFileSizeBar").css({width:(nAttachSize/f*100).toFixed(0)+"%",height:"7px"}),b||($Element($$.getSingle("#AttachTbl #file_list")).append(d),
mUtil.checkSubject(a.name))},attachFileSizeZero=function(){nAttachSize=0};var v=function(){};insertButton=function(){
var a,b=$Agent().navigator();if(!mEnv.tabletUser&&!b.safari){if(b.chrome||b.firefox||b.ie&&b.version>10)a='<div class="capture_btn_cover"><button class="utx_btn_se _c1(mwCore|openImageCapture) _stopDefault" onclick="ccr(this, \'SE2.imgeditor\', event);" title="'+nLang.c.open_new_window+'"><span class="utx_inrbtn">'+nLang.w.image_capture+"</span></button></div>";else if(!isNaver()&&!b.safari)return;
if(a){var c=$$.getSingle("#smart_editor2_content ul.se2_multy li.image_capture");c.innerHTML=a,c.style.display="";
}}},makeFileString=function(a,b){return null==b&&(b=2),a>=1073741824?Number(a/1073741824).toFixed(b)+"GB":a>=1048576?Number(a/1048576).toFixed(b)+"MB":Number(a/1024).toFixed(b)+"KB";
},_deleteFileCallBack=function(a){$Element("file_index_"+a).leave(),""==$$.getSingle("#AttachTbl #file_list").innerHTML&&$Element("AttachTbl").hide(),
nAttachSize-=aAttachSize[a],nAttachCount--;var b=makeFileString(nAttachSize),c=mEnv.attachFileMaxSize;
$Element("AttachFileSizeFlash").html(b),$Element("AttachFileSizeBar").css({width:(nAttachSize/c*100).toFixed(0)+"%",
height:"7px"}),b=null},_writeAttachCallback=function(a,b,c){if("OK"!=c.Result)return"uploadFull"==c.Message?(a+1<b.length?uploadFull("multi"):uploadFull(),
void $Element("upLoad").hide()):void $Element("upLoad").hide();var d={realIndex:c.realIndex,name:c.name,
size:c.size};a+1<b.length?fileUploaded(d,"multi"):fileUploaded(d),d=null,b[a]=null,a<b.length&&_html5ManageUpload(b,a+1);
};var w=function(){return mEnv.bigfileHost||"bigfile.mail.naver.com"};attachImage=function(){var a,b,c=$$.getSingle("#attachPhoto");
try{a=c.contentDocument||c.contentWindow.document,b=$$.getSingle("#editor_upimage",a)}catch(d){}b||B();
var e=0;setTimeout(function f(){var a=$$.getSingle("#attachPhoto"),b=a.contentDocument||a.contentWindow.document,c=$$.getSingle("#editor_upimage",b);
e+=1,c?($$.getSingle("#attachID",b).value=mwCore.oWriteForm.attachID,$$.getSingle("#fileContent",b).click()):e>=10?uploadFailed():setTimeout(f,500);
},0)};var x=30,y=2e7,z=function(){var a,b=$Element("loading_bg"),c=$Element("loading_write_upload_layer"),d=c.query(".upload_total_count"),e=c.query(".upload_success_count"),f=c.query(".file_name"),g=c.query(".file_size"),h=c.query(".percentage"),i=c.query("progress"),j=c.query("button"),k=$$.getSingle("#imageFileContent"),l=!1,m=function(){
l=!0,o()},n=function(){c.show(),b.show(),d.html(0),e.html(0),h.html("0%"),i.attr("value",0),f.html(""),
g.html(""),j.attach("click",m)},o=function(){j.detach("click",m),c.hide(),b.hide()},p=function(b,c,d){
var j;if(!l){if(c>x)return o(),void setTimeout(function(){alert(nLang.w.limit_upload_image_count.replace("{count}",x));
},50);f.html(b.name),g.html(makeFileString(b.size,0)),F(b,function(b){var f,g;return b===D?void o():l?(g=$Ajax("/json/write/file/delete",{
type:"xhr",method:"post"}),void g.request({actionParam:b.realIndex,attachID:mwCore.oWriteForm.attachID
})):b===E?(alert(nLang.w.limit_upload_image_size.replace("{size}",makeFileString(mEnv.attachFileMaxSize,0))),
void o()):(b&&(f=C(b),mwEditor.insertHTML('<img class="NHN_MAIL_IMAGE" src="'+f+'" >'+(a>1?"<br>":""))),
void(d&&(j=Math.floor(c/a*100),e.html(c),h.html(j+"%"),i.attr("value",j),d())))})}},q=function(){k.onchange=null,
jindo.$Agent().navigator().ie&&10===jindo.$Agent().navigator().version?(k.type="radio",k.type="file"):k.value="";
};k.onchange=function(){var b,c,e,f=k.files,g=f.length;for(e=function(){o()},b=0;g>b;b++){if(c=f[b],
!A(c))return alert(nLang.w.select_only_img),void q();if(c.size>=y)return alert(nLang.w.limit_upload_image_size.replace("{size}",makeFileString(mEnv.attachFileMaxSize,0))),
void q();e=$Fn(p,this).bind(c,g-b,e)}a=g>=x?x:g,n(),d.html(a),e(),q()},k.click()},A=function(a){return-1!==(a.type||"").indexOf("image/");
},B=function(){var a=$$.getSingle("#attachPhoto");a.src="/iframe/upload/html/attachPhoto.html?2"};imageUploaded=function(a){
var b=C(a);mwEditor.insertHTML('<img class="NHN_MAIL_IMAGE" src="'+b+'" >'),g=Math.max(g,a.realIndex),
B()};var C=function(a){var b=window.location.protocol+"//"+document.URL.split("//")[1].split("/")[0],c="/write/image/path/?attachID="+mwCore.oWriteForm.attachID+"&cid="+a.cid;
return b+c},D=1,E=2,F=function(a,b){var c=4,d=new FormData,e=new XMLHttpRequest;e.open("post","/json/write/image/upload",!0),
e.onreadystatechange=function(){if(e.readyState==c){if(200!==e.status)return void b(D);var a=JSON.parse(e.responseText),d=a.attachInfo;
if(!d)return void b(D);if("true"==d.uploadFull)return void b(E);fileUploaded(d,"image"),g=Math.max(g,d.realIndex),
b(d)}},d.enctype="multipart/form-data",d.append("attachID",mwCore.oWriteForm.attachID),d.append("attachFileSize",getTotalFileSizeHtml5(null,"normal")),
d.append("file",a,Date.now()+"."+a.type.split("/")[1]),e.send(d)},G=function(a){for(var b=atob(a.split(",")[1]),c=new ArrayBuffer(b.length),d=new Uint8Array(c),e=0;e<b.length;e++)d[e]=b.charCodeAt(e);
return new Blob([c],{type:"image/png"})},H=function(a,b){F(a,function(a){if(a!==D){if(a===E)return void alert(nLang.w.limit_upload_image_size.replace("{size}",makeFileString(mEnv.attachFileMaxSize,0)));
var c=C(a);b(c,a)}})},I=function(a,b){var c=G(a);F(c,function(a){if(a!==D){if(a===E)return void alert(nLang.w.limit_upload_image_size.replace("{size}",makeFileString(mEnv.attachFileMaxSize,0)));
var c=C(a);b(c,a)}})},J=function(b){var c=G(b.src),d=a.length;b.setAttribute("data-imageindex",d),a.length+=1,
F(c,function(a){if(a!==D&&a!==E){var b=C(a).replace(/&/g,"&amp;");mwAttach.oUploadedImages["img"+d]='<img class="NHN_MAIL_IMAGE" src="'+b+'" >';
}})},K=function(a){var b=$Element("html5Uploader");b.visible()&&!c&&(c=!0,alert(a),$Element("loading_bg").hide(),
b.hide(),c=!1)},L=function(a){g=a},M=function(){return h.length>0},N=function(){var a=!0;return aFileInfoList.forEach(function(b){
b.bUploaded||(a=!1)}),a};return{oUploadedImages:a,aFileList:aFileList,aFileInfoList:aFileInfoList,attachImage:attachImage,
attachImages:z,getAttachID:getAttachID,clickUpload:clickUpload,clickHtml5Upload:clickHtml5Upload,makeFileString:makeFileString,
getTotalFileCount:getTotalFileCount,getTotalFileSizeHtml5:getTotalFileSizeHtml5,getNdriveFileInfo:getNdriveFileInfo,
getNdriveFileInfos:getNdriveFileInfos,addFiles:addFiles,showUploadingLayer:showUploadingLayer,uploadFailed:uploadFailed,
fileUploaded:fileUploaded,imageUploaded:imageUploaded,uploadFull:uploadFull,uploadBlocked:uploadBlocked,
uploadBlockedVirus:uploadBlockedVirus,changeUploadType:changeUploadType,deleteFile:deleteFile,initUploaderHtml5:initUploaderHtml5,
pauseUploadHtml5:pauseUploadHtml5,deleteFileHtml5:deleteFileHtml5,dropFileHtml5:dropFileHtml5,dragoverFileHtml5:dragoverFileHtml5,
selectAllHtml5:selectAllHtml5,toggleToolTipHtml5:toggleToolTipHtml5,clearFileArea:clearFileArea,setWriteUploader:setWriteUploader,
updateUploadedFileOne:updateUploadedFileOne,updateUploadListHtml5:updateUploadListHtml5,updateIndicatorHtml5:updateIndicatorHtml5,
attachFileSizeZero:attachFileSizeZero,resetEditorToolbarSize:v,insertButton:insertButton,shortcutUpload:shortcutUpload,
getHHMMSS:getHHMMSS,uploadImageFromBlob:H,uploadImageFromDataURI:I,uploadImageFromDataURIImageElement:J,
uploadFileManager:q,downloadUploadedFile:downloadUploadedFile,closeAttachBlockLayer:t,checkExeFile:s,
setLastRealIndex:L,showUploadBlockListLayer:showUploadBlockListLayer,hasBlockedFile:M,checkAllFilesUploaded:N
}}(),mwCalendar=function(){function a(a){var b=new RegExp(/^\d{4}\.(0?[1-9]|1[012])\.(0?[1-9]|[12][0-9]|3[01])$/),c=a.element,d=$Element(c),e=moment(c.value,"YYYY.MM.DD");
e.isValid()&&b.test(c.value)?(mCalendar._drawCalendar(e.format(mCom.sDefaultDateFormat||"YYYYMMDD"),c.id),
checkCalReserve(d.text().replace(/\./g,""),null,c.id)):(alert(nLang.w.calendar_invalid_format),mCalendar._changeInput(moment().format(mCom.sDefaultDateFormat||"YYYYMMDD"),c.id),
checkCalReserve(d.text().replace(/\./g,""),null,c.id,!0))}return addDefaultCal=function(a){if(mcCore.useCalendar()){
a&&($Element("addCalBtn").hasClass("on")?ccr(a.element,"wrh.promiseon",a):ccr(a.element,"wrh.promiseoff",a)),
mCom.bScheduleConfirmed=!1;var b=$Element("addCalBtn").hasClass("on");if(!b){var c=moment(sServerTime),d=mCom.sDefaultDateFormat||"YYYY.MM.DD";
if(!mEnv.timeZone)try{if(opener&&opener.mEnv&&opener.mEnv.timeZone)mEnv.timeZone=opener.mEnv.timeZone;else{
var e=oWriteResponse.writeBody.serverTime.timeZoneName.replace(/[^-+0-9]/g,"").replace("+0","+").replace("-0","-");
mEnv.timeZone="30"==e.substring(e.length-2)?e.substring(0,e.length-2)+".5":"45"==e.substring(e.length-2)?e.substring(0,e.length-2)+".75":e.substring(0,e.length-2);
}}catch(f){mEnv.timeZone="+9"}c.valueOf(c.valueOf()+3600*(Number(mEnv.timeZone)-9)*1e3),c.minute(10*parseInt(c.minute()/10,10)),
c.add(10,"minute"),$$.getSingle("#calStartDate").value=c.format(d),$$.getSingle("#calStartHour").value=c.format("HH"),
$$.getSingle("#calStartMin").value=c.format("mm"),c.add(1,"hour"),$$.getSingle("#calEndDate").value=c.format(d),
$$.getSingle("#calEndHour").value=c.format("HH"),$$.getSingle("#calEndMin").value=c.format("mm"),$$.getSingle("#calLocation").value="",
$Element("addCalBtn").addClass("on")}return $Element("addCalInfoDiv").show(),$Element("calPreview").hide(),
b||mwCore.fixWritePopupHeight(),!0}},delCal=function(a,b){var c=$$.getSingle("#calLocation"),d=$Element("addCalBtn"),e=$Element("addCalInfoDiv"),f=$Element("calPreview");
return c?"undefined"!=typeof b&&b?(c.value="",d.removeClass("on"),e.hide(),f.hide(),mCom.bScheduleConfirmed=!1):confirm(nLang.w.delete_appointment)&&(c.value="",
d.removeClass("on"),e.hide(),f.hide(),mCom.bScheduleConfirmed=!1):mCom.bScheduleConfirmed=!1,mwCore.fixWritePopupHeight(),
!0},confirmCal=function(){if(mcCore.useCalendar()){var a=[nLang.c.sunday,nLang.c.monday,nLang.c.tuesday,nLang.c.wednesday,nLang.c.thursday,nLang.c.friday,nLang.c.saturday],b=mCom.sDefaultDateFormat||"YYYY/MM/DD",c=$$.getSingle("#calStartDate").value,d=moment(c,b),e=d.format(b+" (ddd) ")+$$.getSingle("#calStartHour").value+":"+$$.getSingle("#calStartMin").value;
c=$$.getSingle("#calEndDate").value,d=moment(c,b);var f=d.format(b+" (ddd) ")+$$.getSingle("#calEndHour").value+":"+$$.getSingle("#calEndMin").value,g=mcCore.replaceSpecialChar($$.getSingle("#calLocation").value);
return $Element("calPreviewContent").html(g?e+" ~ "+f+" . "+g:e+" ~ "+f+" "),$Element("addCalInfoDiv").hide(),
$Element("calPreview").show(),mCom.bScheduleConfirmed=!0,a=c=d=e=f=g=null,mwCore.fixWritePopupHeight(),
!0}},setTime=function(a){checkCalReserve(null,null,a)},checkCalReserve=function(a,b,c,d){var e=$$.getSingle("#calStartDate").value,f=$$.getSingle("#calEndDate").value;
a&&"calStartDate"==c?e=a:a&&"calEndDate"==c&&(f=a),b||(b=mCom.sDefaultDateFormat||"YYYY.MM.DD");var g=moment(e,b).hour(parseInt($$.getSingle("#calStartHour").value,10)).minute(parseInt($$.getSingle("#calStartMin").value,10)),h=moment(f,b).hour(parseInt($$.getSingle("#calEndHour").value,10)).minute(parseInt($$.getSingle("#calEndMin").value,10));
if(mcCore.isNaver())var i=g.isAfter.bind(g);else var i=g.isSameOrAfter.bind(g);"calStartDate"===c||"calStartHour"==c||"calStartMin"==c?(h=g.clone().add(1,"hour"),
$$.getSingle("#calStartDate").value=g.format(b),$$.getSingle("#calStartHour").value=g.format("HH"),$$.getSingle("#calStartMin").value=g.format("mm"),
$$.getSingle("#calEndDate").value=h.format(b),$$.getSingle("#calEndHour").value=h.format("HH"),$$.getSingle("#calEndMin").value=h.format("mm")):("calEndDate"===c||"calEndHour"==c||"calEndMin"==c)&&((i(h)||d)&&(d||alert(nLang.w.calendar_invalid_format),
h=g.clone().add(1,"hour")),$$.getSingle("#calEndDate").value=h.format(b),$$.getSingle("#calEndHour").value=h.format("HH"),
$$.getSingle("#calEndMin").value=h.format("mm")),$Element("ly_calendar").hide()},initDefaultCal=function(){
return mCom.bScheduleConfirmed=!1,$$.getSingle("#calLocation").value="",$Element("addCalBtn").removeClass("on"),
$Element("addCalInfoDiv").hide(),$Element("calPreview").hide(),!0},useCal=function(){return $Element("addCalInfoDiv").visible()?!0:!1;
},{addDefaultCal:addDefaultCal,delCal:delCal,confirmCal:confirmCal,checkCalReserve:checkCalReserve,initDefaultCal:initDefaultCal,
useCal:useCal,changeAppointmentDate:a,setTime:setTime}}(),mwCapcha=function(){return _type=null,_sCapchaKey=null,
_nCapchaMode=null,_sCapchaType="image",mailSendClicked=function(a,b){return _type=b,mcCore.isNcs()?_sendMail():(_setCapchaKey(""),
_sendNow()),!0},mailCapchaKeyPressed=function(a){return 13==a.keyCode&&(_sendAfterConfirm(),$Event(a).stop()),
!0},_sendNow=function(){mcCore.requestAjax({fCallback:$Fn(_sendNowCallback,this).bind(),oParameter:{},
sUrl:"/captcha/check/"})},_sendNowCallback=function(a){"OK"==a.Result?1==a.isCaptcha?(_showCapchaLayer(),
_hideCapchaFaultMsg(),_updateCapcha(a)):_sendMail(_type):_showError(a.Message)},_sendAfterConfirm=function(){
if(""!=_getCapchaKeyInput()){var a="/captcha/confirm/";"sound"===_getCapchaType()&&(a="/soundCaptcha/confirm/"),
mcCore.requestAjax({fCallback:$Fn(_sendAfterConfirmCallback,this).bind(),oParameter:{key:_getCapchaKey(),
value:_getCapchaKeyInput()},sUrl:a})}else _showCapchaFaultMsg(nLang.w.type_capcha),_setFocusCapchaInput();
},_sendAfterConfirmCallback=function(a){"OK"==a.Result?1==a.isSuccess?(_setCapchaType("image"),_hideCapchaLayer(),
_sendMail(_type)):(_showCapchaFaultMsg(nLang.w.invalid_capcha),_clearCapchaKeyInput(),"image"===_getCapchaType()?_refreshCapchaImage():_refreshSoundCapcha()):_showError(a.Message);
},_refreshCapchaImage=function(){mcCore.requestAjax({fCallback:$Fn(_refreshCapchaImageCallback,this).bind(),
oParameter:{mode:_getCapchaMode()},sUrl:"/captcha/create/"})},_refreshCapchaImageCallback=function(a){
"OK"==a.Result?_updateCapcha(a):_showError(a.Message)},_updateCapcha=function(a){_setCapchaKey(a.key),
a.mode&&_setCapchaMode(a.mode),_updateCapchaImage([a.imgUrl,,"&key=",_getCapchaKey()].join("")),_clearCapchaKeyInput(),
_setFocusCapchaInput(),/naver/.test(mEnv.serviceType)&&($("changeButton").innerHTML='<span class="utx_icon"></span>'+nLang.w.captcha_sound,
$("captchaMessage").innerHTML=nLang.w.captcha_message_image)},_sendMail=function(){return"quickAttach"===_type?void mwCore.sendQuickAttach(_type):void mwCore.sendMailOk(_type);
},_setCapchaKey=function(a){_sCapchaKey=a},_getCapchaKey=function(){return _sCapchaKey},_setCapchaMode=function(a){
_nCapchaMode=a},_getCapchaMode=function(){return _nCapchaMode},_setCapchaType=function(a){_sCapchaType=a;
},_getCapchaType=function(){return _sCapchaType},_showError=function(a){alert(""!=a?oResponse.Message:m.info.altermsg.RETRY);
},_showCapchaLayer=function(){$Element("capchaDiv").show(),$Element("sendAfterReviewBg").show(),$Element("sar").hide();
},_hideCapchaLayer=function(){$Element("capchaDiv").hide(),$Element("sendAfterReviewBg").hide()},_showCapchaFaultMsg=function(a){
$Element("capchaFaultMsg").show(),$Element("capchaFaultMsg").html(a)},_hideCapchaFaultMsg=function(){
$Element("capchaFaultMsg").hide()},_updateCapchaImage=function(a){$Element("capchaImg").attr("src",a);
},_getCapchaKeyInput=function(){return $("capchaKey").value},_clearCapchaKeyInput=function(){$("capchaKey").value="";
},_setFocusCapchaInput=function(){$("capchaKey").focus()},onClickSend=function(){_sendAfterConfirm();
},onClickRefreshImage=function(){"image"===_getCapchaType()?(_refreshCapchaImage(),_clearCapchaKeyInput(),
_clearAudio($("play_audio"))):_refreshSoundCapcha()},onClickToggle=function(){"image"===_getCapchaType()?_setCapchaType("sound"):(_clearAudio($("play_audio")),
_setCapchaType("image")),_clearCapchaKeyInput(),"image"===_getCapchaType()?(_refreshCapchaImage(),$("changeButton").innerHTML='<span class="utx_icon"></span>'+nLang.w.captcha_sound,
$("captchaMessage").innerHTML=nLang.w.captcha_message_image):(_playSoundCaptcha(),$("changeButton").innerHTML='<span class="utx_icon"></span>'+nLang.w.captcha_image,
$("captchaMessage").innerHTML=nLang.w.captcha_message_sound)},onClickClose=function(){_setCapchaType("image"),
_hideCapchaLayer(),_clearAudio($("play_audio"))},_playSoundCaptcha=function(){_updateCapchaImage("https://ssl.pstatic.net/static/pwe/nm/@captcha2.gif");
var a=_getCapchaKey(),b="https://soundcaptcha.nid.naver.com/soundCaptcha.wav?key="+a+"&replay="+(new Date).valueOf(),c=$("play_audio");
_clearAudio(c),_clearCapchaKeyInput(),_setFocusCapchaInput();try{var d=new Audio;if(!d.canPlayType("audio/wav"))throw new Error("");
d=new Audio(b),c.appendChild(d),d.play()}catch(e){var d=document.createElement("EMBED");d.setAttribute("src",b),
d.setAttribute("hidden",!0),d.setAttribute("autostart",!0),c.appendChild(d)}},_refreshSoundCapcha=function(){
mcCore.requestAjax({fCallback:$Fn(_refreshSoundCapchaCallback,this).bind(),oParameter:{},sUrl:"/soundCaptcha/key/"
})},_refreshSoundCapchaCallback=function(a){"OK"==a.Result?(_setCapchaKey(a.key),_playSoundCaptcha()):_showError(a.Message);
},_clearAudio=function(a){if(a){var b=a.getElementsByTagName("EMBED");if(null!=b&&b.length>0){try{b[0].stop();
}catch(c){}return void a.removeChild(b[0])}b=a.getElementsByTagName("AUDIO"),null!=b&&b.length>0&&a.removeChild(b[0]);
}},{mailSendClicked:mailSendClicked,mailCapchaKeyPressed:mailCapchaKeyPressed,onClickSend:onClickSend,
onClickRefreshImage:onClickRefreshImage,onClickToggle:onClickToggle,onClickClose:onClickClose}}(),mwUploader=function(){
var a=null,b=null,c=0,d="",e=null,f=function(){try{var a=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice;
}catch(b){var a=!1}d="function"==typeof a?"html5":"html",mcCore.isNaver()&&"html"===d&&$Agent().navigator().ie&&($$.getSingle("#bigFileNotice").style.display="");
},g=function(c,d){return a=c.writeBody,b=d,!0},h=function(){return f(),mcCore.isNaver()&&$Agent().navigator().ie&&"html"===d&&"ndrive"===m.info.svcID?(mEnv.bigFileUse=!1,
null!=m.info.ndrive.aNdriveFileInfo&&m.info.ndrive.aNdriveFileInfo.length>0&&mwAttach.getNdriveFileInfos()):n(),
!0},i=function(){var a=$Element("btn_filedelete_html5");return $Element("icon_attachview").hasClass("sOpen")?(mcCore.setCookie("NMUPOPEN",null,-900,"/","."+mEnv.rootDomain),
s(),$Element("viewAttWin")&&$Element("viewAttWin").attr("title",nLang.w.open_attach),a&&a.hide()):(mcCore.setCookie("NMUPOPEN","Y",30,"/","."+mEnv.rootDomain),
t(!0),$Element("viewAttWin")&&$Element("viewAttWin").attr("title",nLang.w.close_attach),a&&a.show()),
!0},j=function(){return u(),!0},k=function(){if(mcCore.isDisplayDrive()){var a=m.info.ndrive,b="html5"==d?"activex":"normal",c="html5"===d?"true":"false",f=mEnv.serviceType+"CloudPopup",g={
attachId:mwCore.oWriteForm.attachID,servicetype:b,isHtml5Upload:c},h="";h=mcCore.isNaver()&&mcCore.isMobile()?"https://m."+m.info.ndrive.sNdriveUrl+"/mobile/selectFile.nhn":"https://"+m.info.ndrive.sNdriveUrl+"/selectFile.nhn";
var i=[h,"?service=mail","&callback=",encodeURIComponent(a.sServiceReturnUrl),"&additional="+encodeURIComponent(JSON.stringify(g))].join("");
!e||e&&e.closed?e=window.open(i,f,"scrollbars=no,toolbar=no,location=no,resizable=no,status=no,menubar=no,width=476,height=360"):e.location.href=i,
setLcs("/drive/popup","popup_drive")}},l=function(){return z(),!0},n=function(){switch(d){case"html5":
o();break;case"html":default:p()}mwCore.oWriteForm.uploaderType=d},o=function(){$Element("viewAttWin").attr("onclick","if(!$Element('icon_attachview').hasClass('sOpen')){ccr(this,'wh5.morefile',event);}else{ccr(this,'wh5.closefile', event);}"),
r("html"),t(!1),w()},p=function(){t(!1),w(),q()},q=function(){$Agent().os().ipad&&$Element("AddButton_fla").hide();
},r=function(a){switch(a){case"html5":$Element("AddButton_html5").hide(),$Element("btn_filedelete_html5").hide(),
$Element("BigFileSizeInfo").hide(),s();break;case"html":default:$Element("AddButton_fla").hide(),$Element("AttachFileSizeInfo").hide(),
$Element("dndFile")&&$Element("dndFile").hide(),s()}},s=function(){$Element("AttachIframe").hide(),$Element("AttachTblDiv").hide();
try{$("AttachIframe").contentWindow&&$("AttachIframe").contentWindow.document&&$("AttachIframe").contentWindow.document.getElementById("BigFileListObj2")&&($("AttachIframe").contentWindow.document.getElementById("BigFileListObj2").style.display="none");
}catch(a){}$Element("file_list").hide(),$Element("AttachTbl").hide(),$Element("AttachInfoNoti").hide(),
$Element($$.getSingle("div.uploader5")).hide(),$Element("btn_filedelete_html5")&&$Element("btn_filedelete_html5").hide(),
v("fold")},t=function(a){switch(d){case"html5":$Element("AddButton_html5").css("display","inline-block"),
$Element("BigFileSizeInfo").show(),$Element($$.getSingle("div.uploader5")).visible()&&$Element("btn_filedelete_html5").show();
break;case"html":default:$Element("AddButton_fla").css("display","inline-block"),$Element("AttachFileSizeInfo").show(),
mEnv.bigFileUse&&($Agent().navigator().firefox||$Agent().navigator().chrome?$Element("html5_tooltip1").css("display",""):$Agent().navigator().safari&&$Element("html5_tooltip2").css("display",""));
}!mcCore.isNaver()||"toolbar"!=m.info.svcID&&"directmail"!=m.info.svcID&&"ndrive"!=m.info.svcID||(a=!0),
"Y"==mcCore.getCookie("NMUPOPEN")&&"html5"===d||a?u():s()},u=function(){switch(d){case"html5":$Element($$.getSingle("div.uploader5")).show(),
$Element("btn_filedelete_html5")&&$Element("btn_filedelete_html5").show(),mEnv.bigFileUse?$Element("AttachInfoNoti").show():$$.getSingle("div.uploader5 p.drag_here").innerHTML='<span class="icon_attach"></span>'+nLang.w.upload_desc_ncs;
break;case"html":default:$Element("AttachTbl").show(),$Element("file_list").show()}v("unfold")},v=function(a){
switch(a){case"fold":$Element("icon_attachview").removeClass("sOpen"),$Element("icon_attachview").addClass("sClose"),
$("icon_attachview").alt=nLang.c.open,$Element("viewAttWin")&&$Element("viewAttWin").attr("title",nLang.w.open_attach);
break;case"unfold":default:$Element("icon_attachview").removeClass("sClose"),$Element("icon_attachview").addClass("sOpen"),
$("icon_attachview").alt=nLang.c.close,$Element("viewAttWin")&&$Element("viewAttWin").attr("title",nLang.w.close_attach);
}},w=function(){switch(d){case"html5":$Element("icon_attachview")&&$Element("icon_attachview").show(),
x();break;case"html":default:$("file_list").innerHTML="",$Element("icon_attachview")&&$Element("icon_attachview").hide(),
x()}},x=function(){if(c=0,"new"==mCom.orderType&&oWriteResponse.writeBody.attachCount||"reply"==mCom.orderType||"replyAll"==mCom.orderType||"forward"==mCom.orderType||"sent"==mCom.orderType||"edit"==mCom.orderType||"draft"==mCom.orderType||"template"==mCom.orderType||"readToMe"===mCom.orderType)mcCore.requestAjax({
fCallback:y,oParameter:{attachID:mwCore.oWriteForm.attachID,type:mCom.orderType},sUrl:"/json/write/attachInfo/"
});else if("html5"==d){if("undefined"!=typeof m.info.ndrive&&m.info.ndrive.aNdriveFileInfo.length>0){
if(""==m.info.ndrive.aNdriveFileInfo[0])return!1;for(var a=m.info.ndrive.aNdriveFileInfo,b=0;b<a.length;b++){
var e,f=a[b],g=m.info.ndrive.isOldNdriveApi;e=g?{name:f.fileName,size:f.fileSize,type:"application/octet-stream",
mdsip:f.owfsMds,ownerid:f.owfsOwnerId,filepath:f.filePath,isShared:f.shared,owfsOwnerId:f.owfsOwnerId,
ownerIdcNo:f.ownerIdcNo,ownerIdx:f.ownerIdx,shareNo:f.shareNo,additionalParam:f.additionalParam,bOldNdriveApi:!0
}:{name:f.name,size:f.size,type:"application/octet-stream",downloadUrl:f.downloadUrl};var h={name:e.name,
size:e.size,realIndex:aFileList.length(),bBigFile:e.size+getTotalFileSizeHtml5(null,"normal")>mEnv.attachFileMaxSize?!0:!1,
bNdrive:!0,bDeleted:!1,bUploaded:!1,bCanceld:!1};if(mEnv.bigFileUse||(h.bBigFile=!1),!mwAttach.checkExeFile(h.name)){
if(!_checkAddFile(h))break;aFileList.push(e),aFileInfoList.push(h),updateUploadListHtml5(h),f=e=h=null;
}}updateIndicatorHtml5(),mEnv.bigFileUse&&$Element("AttachInfoNoti").show(),mwAttach.hasBlockedFile()&&showUploadBlockListLayer(a.length),
$Element($$.getSingle("div.uploader5")).show(),$Element("btn_filedelete_html5")&&$Element("btn_filedelete_html5").show(),
$Element("icon_attachview").removeClass("sClose"),$Element("icon_attachview").addClass("sOpen"),$("icon_attachview").alt=nLang.c.close,
$Element("viewAttWin")&&$Element("viewAttWin").attr("title",nLang.w.close_attach)}}else{if((mcCore.isNcs()||mcCore.isNwe())&&"undefined"!=typeof m.info.ndrive&&m.info.ndrive.aNdriveFileInfo.length>0)return""==m.info.ndrive.aNdriveFileInfo[0]?!1:void alert(nLang.w.cannot_upload_by_drive);
if(!mEnv.bigFileUse&&"undefined"!=typeof m.info.ndrive&&m.info.ndrive.aNdriveFileInfo.length>0){if(""==m.info.ndrive.aNdriveFileInfo[0])return!1;
mwAttach.clearFileArea();for(var i=mEnv.attachFileMaxSize,j=!1,b=0;b<m.info.ndrive.aNdriveFileInfo.length;b++){
var e=m.info.ndrive.aNdriveFileInfo[b],k=e.size||e.fileSize,l=e.name||e.fileName;nAttachSize+k>i?(m.info.ndrive.aNdriveFileInfo.splice(b,1),
b--,j=!0):mwAttach.fileUploaded({index:0,realIndex:101+b,name:l,size:k})}j&&alert(nLang.w.limit_upload_size.replace("{FileSize}",makeFileString(mEnv.attachFileMaxSize,0)));
}}},y=function(a){var b=a.attachInfo.attachList;switch("undefined"==typeof b&&(b=[]),b.length>0&&u(),
d){case"html5":a.attachInfo.nextRealIndex&&mwAttach.setLastRealIndex(a.attachInfo.nextRealIndex-1);for(var c=0;c<b.length;c++){
var e=b[c],f={name:e.name,size:parseInt(e.size,10),type:"application/octet-stream",realIndex:mwAttach.aFileList.length(),
nRealIndex:e.realIndex,bBigFile:!1,bDeleted:!1,bUploaded:!0};mwAttach.aFileList.push(f),mwAttach.aFileInfoList.push(f),
mwAttach.updateUploadListHtml5(f),mwAttach.updateIndicatorHtml5()}break;case"html":default:nAttachCount=0,
mwAttach.attachFileSizeZero();for(var c=0;c<b.length;c++){var f=b[c];mwAttach.updateUploadedFileOne(f,!1);
}}mwCore.fixWritePopupHeight()},z=function(){if("html5"==d){var a=mwAttach.getTotalFileCount("normal"),b=mwAttach.getTotalFileCount("bigfile"),c=mwAttach.makeFileString(mwAttach.getTotalFileSizeHtml5(null,"normal")),e=mwAttach.makeFileString(mwAttach.getTotalFileSizeHtml5(null,"bigfile"));
A(a,b),B(c,e),"0"==a&&"0"==b?D():"0"==a?E():"0"==b?F():C()}else{var f=nAttachCount;A(f,0),B($("AttachFileSizeFlash").innerHTML,"0KB"),
0==f?D():F()}},A=function(a,b){var c=$Element("writePreviewFileCount"),d=$Element("writePreviewBigFileCount");
c.html(a),d.html(b)},B=function(a,b){var c=$Element("writePreviewFileSize"),d=$Element("writePreviewBigFileSize");
c.html(a),d.html(b)},C=function(){G(),L(),H(),N(),K()},D=function(){G(),M(),I(),O(),J()},E=function(){
C(),I(),M()},F=function(){C(),I(),O()},G=function(){$Element("writePreviewAttachArea").show()},H=function(){
$Element("writePreviewAttachAreaBar").show()},I=function(){$Element("writePreviewAttachAreaBar").hide();
},J=function(){$Element("writePreviewAttachAreaNone").show()},K=function(){$Element("writePreviewAttachAreaNone").hide();
},L=function(){$Element("writePreviewAttachAreaNormal").show()},M=function(){$Element("writePreviewAttachAreaNormal").hide();
},N=function(){$Element("writePreviewAttachAreaBig").show()},O=function(){$Element("writePreviewAttachAreaBig").hide();
},P=function(){i(),mwCore.fixWritePopupHeight()},Q=function(){k()},R=function(a){if("save"!==a&&mCom.orderType&&"forward"==mCom.orderType)return!1;
var b=0,c=0,e=0;return"html5"==d&&(c=mwAttach.getTotalFileCount("normal"),e=mwAttach.getTotalFileCount("bigfile")),
b=c+e,b>0?{normalFile:c,bigFile:e}:!1};return{writeAPIResponsed:g,uploaderEnabled:h,uploaderToggleClicked:i,
mailFileUploaded:j,nDriveButtonClicked:k,previewClicked:l,hasAttachedFile:R,loadUploader:n,onClickToggleUploader:P,
onClickNdriveAttachButton:Q}}();var mwReservation=function(){function a(){var a,c,d=$$(".timeZoneWrapper");
for(a=0,c=d.length;c>a;a++)d[a].innerHTML=b(a)}function b(a){var b,c,d,e,f="";b="<label for='timeZone_"+a+"' class='blind'>"+nLang.w.select_std_time+"</label><select id='timeZone_"+a+"' onclick='ccr(this, \"tsp.gmt\", event)' onchange='mwReservation.changeGMT(event)' onkeyup='mwReservation.changeGMT(event)' name='timeZone' value='+8' style='width:265px'>";
for(e in R.GMT)R.GMT.hasOwnProperty(e)&&(f+="<option value='"+e+"'>"+R.GMT[e][0]+"</option>");return c="</select>",
d=b+f+c}function c(a){S.serverGMT=d(a),S.isInitialized=!1}function d(a){var b=a.replace(/[^-+0-9]/g,"").replace("+0","+").replace("-0","-"),c=b.substring(0,b.length-2),d=b.substring(b.length-2);
return d="30"===d?".5":"45"===d?".75":"",c+d}function e(a){var b=new Date,c=b.getTimezoneOffset();return moment(b.getTime()-60*(60*Number(a)*-1-c)*1e3);
}function f(a){var b=a.minutes();return 15>b?a.minutes(15):30>b?a.minutes(30):45>b?a.minutes(45):(a.minutes(0),
a.hours(a.hours()+1)),a}function g(){var a=$$.getSingle("#"+S.activeReservationType+" .timeZoneWrapper select").value;
h(a)}function h(a){j(a),i(R.GMT[a][1],function(b){var c,d;S.isDaylightZone=b,b&&(c=Number(a)+1,a=String(c>0?"+"+c:c)),
d=f(e(a)),k(d),l()})}function i(a,b){var c;c=$Ajax("/json/write/checkDaylightTimeZone",{type:"xhr",method:"post",
async:!0,timeout:3,onerror:function(){b(!1)},ontimeout:function(){b(!1)},onload:function(a){var c,d;try{
c=a.json()}catch(e){c=!1}d=c&&c.daylight,b(d)}}).request({timezoneIds:a})}function j(a){var b=$$.getSingle("#directReserve .timeZoneWrapper select"),c=$$.getSingle("#ddayReserve   .timeZoneWrapper select");
b&&(b.value=a),c&&(c.value=a)}function k(a){$$.getSingle("#date_input").value=a.format(S.dateFormat),
$$.getSingle("#direct_hour").value=a.format("HH"),$$.getSingle("#direct_minute").value=a.format("mm"),
$$.getSingle("#dday_date_input").value=a.format(S.dateFormat),$$.getSingle("#dday_hour").value=a.format("HH"),
$$.getSingle("#dday_minute").value=a.format("mm")}function l(){$Element("dday_send_date_text").html("<strong>"+o(n(),m(),"short")+"</strong>");
}function m(){var a,b=$$.getSingle("#directReserve .timeZoneWrapper select"),c=$$.getSingle("#ddayReserve   .timeZoneWrapper select"),d=S.activeReservationType;
return d===R.DIRECT_RESERVATION?a=b:d===R.DDAY_RESERVATION&&(a=c),a[a.selectedIndex].innerHTML}function n(){
var a,b,c,d,e=S.activeReservationType;return e===R.DIRECT_RESERVATION?(b=$$.getSingle("#date_input").value,
c=$$.getSingle("#direct_hour").value,d=$$.getSingle("#direct_minute").value,a=moment(b+" "+c+":"+d,S.dateFormat+" HH:mm")):e===R.DDAY_RESERVATION&&(b=$$.getSingle("#dday_date_input").value,
c=$$.getSingle("#dday_hour").value,d=$$.getSingle("#dday_minute").value,a=moment(b+" "+c+":"+d,S.dateFormat+" HH:mm"),
a.add(Number($$.getSingle("#dday_input").value),"days")),a}function o(a,b,c){var d;return"full"===c?(d=a.format(S.dateFormat+" (ddd) HH:mm"),
d+=" ("+b.substr(0,10)+")"):"withoutGMT"===c?d=a.format(S.dateFormat+" (ddd) HH:mm"):"short"===c&&(d=a.format("lll")),
d}function p(a){var b,c,d=q(a);S.isInitialized=!0,S.isDaylightZone=!1,S.reservationInfo=a,j(a.gmt),k(d),
l(),c=R.GMT[a.gmt][0],b=o(d,c,"withoutGMT"),$Element("addReserve").html(Q.addReserve.replace(/\{GMT_Date\}/g,b));
}function q(a){return moment(a.date+" "+a.time,"YYYY-MM-DD HH:mm")}function r(){return hideAllLayer(),
$Element("directReserve").visible()?void $Element("directReserve").hide():$Element("ddayReserve").visible()?void $Element("ddayReserve").hide():void mcCore.requestAjax({
fCallback:s,sUrl:"/json/write/reservedMailCount"})}function s(a){var b=$Element("directReserve"),c=$Element("ddayReserve"),d=parseInt(a.reservedMaxCount,10)||30;
a.allow!==!0?alert(nLang.e.reserveMail_limit1+d+nLang.e.reserveMail_limit2):(S.isInitialized||(S.isInitialized=!0,
h(S.serverGMT)),b.queryAll("span.maxReservedCount")[0].html(d),c.queryAll("span.maxReservedCount")[0].html(d),
t(S.activeReservationType))}function t(a){var b=w(a);b.show(),mCom.aVisibleLayerList.push(a==R.DIRECT_RESERVATION?$Element("directReserve"):$Element("ddayReserve")),
u(b)}function u(a){var b,c,d,e=$Element($$.getSingle("#addReserve .tit"));b=e.offset().top,c=e.offset().left,
d=parseInt(a.height(),10),a.offset(b-d,c)}function v(a){var b=w(a);myCore.hideAllLayer(),b.hide()}function w(a){
var b,c=$Element("directReserve"),d=$Element("ddayReserve");return a===R.DIRECT_RESERVATION?b=c:a===R.DDAY_RESERVATION&&(b=d),
b}function x(){S.activeReservationType=R.DIRECT_RESERVATION,v(R.DDAY_RESERVATION),t(R.DIRECT_RESERVATION);
}function y(){S.activeReservationType=R.DDAY_RESERVATION,v(R.DIRECT_RESERVATION),t(R.DDAY_RESERVATION);
}function z(){l()}function A(a){var b=!a.shiftKey&&(a.keyCode>95&&a.keyCode<106||a.keyCode>47&&a.keyCode<58||8==a.keyCode||9==a.keyCode||46==a.keyCode||37==a.keyCode||39==a.keyCode);
b||("function"==typeof a.preventDefault?a.preventDefault():a.returnValue=!1)}function B(){var a=$Element("addReserve");
a&&a.html(Q.addReserveDefault),$$.getSingle("#dday_input").value=0,S.reservationInfo.date="",S.reservationInfo.gmt="",
S.reservationInfo.time=""}function C(){v(S.activeReservationType)}function D(){var a,b,c=n(),d=E();S.isDaylightZone&&(d=Number(d)+1,
d=String(d>0?"+"+d:d)),F(c,d)&&(b=w(S.activeReservationType),b.hide(),a=o(c,m(),"full"),$Element("addReserve").html(Q.addReserve.replace(/\{GMT_Date\}/g,a)),
H(),I(c,d))}function E(){var a;return S.activeReservationType===R.DIRECT_RESERVATION?a=$$.getSingle("#directReserve .timeZoneWrapper select").value:S.activeReservationType===R.DDAY_RESERVATION&&(a=$$.getSingle("#ddayReserve .timeZoneWrapper select").value),
a}function F(a,b){var c=6e4,d=e(b),f=d.clone().add(5,"year"),g=G();return a.valueOf()-d.valueOf()<c?(alert(nLang.w.appointment_time_late_current_time),
!1):a.valueOf()>f.valueOf()?(alert(nLang.w.appointment_mail_due_limit_5),!1):g&&a.valueOf()>g.valueOf()?(alert(nLang.w.appointment_time_late_invite_time),
!1):!0}function G(){var a,b,c,d,e,f=$Element("addCalInfoDiv"),g=$Element("calPreview");return f&&f.visible()?(a=$$.getSingle("#calStartDate"),
b=$$.getSingle("#calStartHour"),c=$$.getSingle("#calStartMin"),d=moment(a.value,S.dateFormat),d.hours(Number(b.value)),
d.minutes(Number(c.value))):g&&g.visible()&&(a=$$.getSingle("#calPreviewContent"),e=a.innerHTML,d=moment(e.split(" ~ ")[0],S.dateFormat)),
d}function H(){var a=$("to").value;mCom.bWriteTome&&(mwTome._toggleTome("off"),maCore.insertAddressObject("to",a));
}function I(a,b){var c=a.year(),d=a.month()+1,e=a.date(),f=a.hours(),g=a.minutes();d=10>d?"0"+d:d,e=10>e?"0"+e:e,
f=10>f?"0"+f:f,g=10>g?"0"+g:g,S.reservationInfo.date=c+"-"+d+"-"+e,S.reservationInfo.gmt=b,S.reservationInfo.time=f+":"+g+":00";
}function J(a,b,c){var d,e,f,g=moment();"string"==typeof a?(e=$$.getSingle("#"+c),d=moment(a,S.dateFormat)):(e=K(),
d=moment(e.value,S.dateFormat)),f=d.isValid()?d:g,e.value=f.format(S.dateFormat),mCalendar._drawCalendar(f.format("YYYYMMDD"),c),
l()}function K(){var a,b=S.activeReservationType;return b===R.DIRECT_RESERVATION?a=$$.getSingle("#date_input"):b===R.DDAY_RESERVATION&&(a=$$.getSingle("#dday_date_input")),
a}function L(){return""!==S.reservationInfo.date}function M(){var a=moment(S.reservationInfo.date+" "+S.reservationInfo.time,"YYYY-MM-DD HH:mm");
$Element("writePreviewReserve").html(a.format("lll"))}function N(){return S.reservationInfo}function O(){
return L()?F(q(S.reservationInfo),S.reservationInfo.gmt):!0}function P(a,b){var c,d,e;"direct"==b?(c=$("date_input").value,
d="ly_calendar_direct_reserve",e="date_input"):(c=$("dday_date_input").value,d="ly_calendar_direct_dday",
e="dday_date_input"),mCalendar.setCalendar({calendarId:d,inputId:e,date:c,dateFormat:S.dateFormat,showSetTodayButton:!0,
setDateCallback:mwReservation.changeDate})}var Q={addReserve:'<a id="reservedLayer" class="tit _c1(mwReservation|showReservationArea)  _ccr(tsp.rsnew) _stopDefault">'+nLang.w.send_reserve+'</a><span class="bar">|</span><a href="#" class="_c1(mwReservation|showReservationArea)  _ccr(tsp.rsvedit) _stopDefault">{GMT_Date}</a><a class="btn_del _c1(mwReservation|clearReservation) _stopDefault" href="#" onclick="ccr(this, \'wrb.rsvdelete\', event)"><img width="6" height="5" alt="'+nLang.c.del+'" src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif"></a>',
addReserveDefault:'<a href="#" class="tit _c1(mwReservation|showReservationArea) _ccr(wrb.rsnew) _stopDefault">'+nLang.w.send_reserve+'</a> <span class="bar">|</span> '
},R={DIRECT_RESERVATION:"directReserve",DDAY_RESERVATION:"ddayReserve",GMT:{"-12":["GMT -12:00 "+nLang.c.date_line_west,"Etc/GMT+12"],
"-11":["GMT -11:00 "+nLang.c.midway_islands_samoa,"Pacific/Midway"],"-10":["GMT -10:00 "+nLang.c.hawai,"Pacific/Honolulu"],
"-9.5":["GMT -09:30 "+nLang.c.marquesas,"Pacific/Marquesas"],"-9":["GMT -09:00 "+nLang.c.alaska,"America/Anchorage"],
"-8.5":["GMT -08:30 "+nLang.c.pecan,"America/Los_Angeles"],"-8":["GMT -08:00 "+nLang.c.pacific_time,"America/Los_Angeles"],
"-7":["GMT -07:00 "+nLang.c.mountain_time,"America/Denver"],"-6":["GMT -06:00 "+nLang.c.central_time,"America/Chicago"],
"-5":["GMT -05:00 "+nLang.c.east_time,"America/New_York"],"-4.5":["GMT -04:30 "+nLang.c.caracas,"America/Caracas"],
"-4":["GMT -04:00 "+nLang.c.atlantic_time,"America/Santiago"],"-3.5":["GMT -03:30 "+nLang.c.newfoundland,"America/St_Johns"],
"-3":["GMT -03:00 "+nLang.c.buenos_aires,"America/Sao_Paulo"],"-2":["GMT -02:00 "+nLang.c.central_atlantic,"America/Noronha"],
"-1":["GMT -01:00 "+nLang.c.azores,"Atlantic/Azores"],"+0":["GMT +00:00 "+nLang.c.greenwich_mean_time,"Europe/London"],
"+1":["GMT +01:00 "+nLang.c.amsterdam,"Europe/Berlin"],"+2":["GMT +02:00 "+nLang.c.athens,"Europe/Athens"],
"+3":["GMT +03:00 "+nLang.c.moscow,"Asia/Baghdad"],"+3.5":["GMT +03:30 "+nLang.c.teheran,"Asia/Tehran"],
"+4":["GMT +04:00 "+nLang.c.baku,"Asia/Baku"],"+4.5":["GMT +04:30 "+nLang.c.kabul,"Asia/Kabul"],"+5":["GMT +05:00 "+nLang.c.karachi,"Asia/Karachi"],
"+5.5":["GMT +05:30 "+nLang.c.new_delhi,"Asia/Colombo"],"+5.75":["GMT +05:45 "+nLang.c.kathmandu,"Asia/Katmandu"],
"+6":["GMT +06:00 "+nLang.c.astana,"Asia/Dhaka"],"+6.5":["GMT +06:30 "+nLang.c.yangon,"Asia/Rangoon"],
"+7":["GMT +07:00 "+nLang.c.bangkok,"Asia/Bangkok"],"+8":["GMT +08:00 "+nLang.c.beijing,"Asia/Shanghai"],
"+9":["GMT +09:00 "+nLang.c.seoul,"Asia/Seoul"],"+9.5":["GMT +09:30 "+nLang.c.darwin,"Australia/Darwin"],
"+10":["GMT +10:00 "+nLang.c.guam,"Australia/Sydney"],"+10.5":["GMT +10:30 "+nLang.c.rhode_island,"Australia/Lord_Howe"],
"+11":["GMT +11:00 "+nLang.c.new_caledonia,"Pacific/Noumea"],"+11.5":["GMT +11:30 "+nLang.c.norfolk_island,"Pacific/Norfolk"],
"+12":["GMT +12:00 "+nLang.c.auckland,"Pacific/Auckland"]},WEEK:[nLang.c.sunday,nLang.c.monday,nLang.c.tuesday,nLang.c.wednesday,nLang.c.thursday,nLang.c.friday,nLang.c.saturday]
},S={activeReservationType:R.DIRECT_RESERVATION,reservationInfo:{date:"",gmt:"",time:""},isDaylightZone:!1,
serverGMT:"",isInitialized:!1,dateFormat:"en_US"===cCode?"MMM D, YYYY":"YYYY-MM-DD"};return{showReservationArea:r,
hideReservationArea:C,changeToDirectReservation:x,changeToDdayReservation:y,changeDdayDateText:z,changeDday:A,
changeGMT:g,clearReservation:B,adjustReservationTime:D,showCalendar:P,setupGMTSelectArea:a,setupReservationFromTimeZoneName:c,
setupReservationFromInfo:p,isReservationDateSaved:L,showReservationTimeInPreview:M,getReservationInfo:N,
validateReservationInfo:O,changeDate:J}}();mwTemplate=function(){var a='<li mailsn="{MailSN}" class="_m3(mwTemplate|listMouseOver) _m4(mwTemplate|listMouseOut) _stopDefault"><a href="javascript:;" class="_c1(mwTemplate|templateSubjectClick|{MailSN}) _stopDefault">{Title}</a><button type="button" class="btn_remove _c1(mwTemplate|removeTemplateMail|{MailSN})"><i class="blind">'+nLang.w.template_delete+"</i></button></li>",b=0,c=function(a){
"new"==a||"template"==a?(d(oWriteResponse.writeBody.templateCount),j("show")):j("hide"),t()},d=function(a){
var b=$Element($$.getSingle("#write_template_btn .cnt"));b.html(0==a?"":""+a)},e=function(){mcCore.requestAjax({
fCallback:h,oParameter:{},sUrl:"/json/list/template/"})},f=function(){mcCore.requestAjax({fCallback:g,
oParameter:{},sUrl:"/json/list/template/"})},g=function(a){var b=a.listCount;d(b)},h=function(a){var c=$Element($$.getSingle("#write_template_btn")),d=$Element($$.getSingle("#template_layer_list")),e=$Element($$.getSingle("#write_template_btn .cnt")),f=$Element($$.getSingle("#template_layer_ul")),g=a.listCount,h=i(a);
f.html(h),e.html(0==g?"":""+g),$$.getSingle("#template_layer_ul").parentElement.scrollTop=b,myCore.adjustLayer(c,d,"upward","left");
},i=function(b){for(var c=b.mailData,d="",e=0;e<c.length;e++){var f=c[e];d+=a.replace("{Title}",f.subject).replace(/\{MailSN\}/g,f.mailSN);
}return d},j=function(a){var b=$Element($$.getSingle("#write_template_btn"));"show"==a?b.css("display","inline-block"):b.css("display","none");
},k=function(){var a=$Element($$.getSingle("#write_template_btn")),b=$Element($$.getSingle("#template_layer_list")),c=b.visible();
hideAllLayer(),setTimeout(function(){c||(e(),v(b),myCore.adjustLayer(a,b,"upward","left"))},150)},l=function(a,b){
var c=$Element($$.getSingle("#tempate_layer_save")),d=$Element($$.getSingle("#AddButton_ndrive")),e=$Element($$.getSingle("#save_template_name")),f=$$.getSingle("#subject")?$$.getSingle("#subject").value:"";
return"hide"===b||c.visible()?void t():(e.attr("value",f),v(c),void myCore.adjustLayer(d,c,"screen-center","screen-center"));
},m=function(){if(mwEditor.isLoaded()){if(!$$.getSingle("#save_template_name"))return;var a=$S($$.getSingle("#save_template_name").value),b=a.trim().$value();
$$.getSingle("#save_template_name").value=b,_type="",_sSendType="template",mcCore.requestAjax({fCallback:$Fn(n,this).bind(),
oParameter:{subject:b},sUrl:"/json/list/template/exists/"})}},n=function(a){var b=a.exists.toString();
if("true"===b&&!confirm(nLang.w.template_subject_duplicate))return t(),!1;if(o(b)){var c=mwUploader.hasAttachedFile(_sSendType);
return c&&c.normalFile?void mwAttach.uploadFileManager(_sSendType):void p()}},o=function(a){var b=mwUploader.hasAttachedFile(_sSendType);
return $("security_level_normal")&&!$("security_level_normal").checked||mwReservation.isReservationDateSaved()||mCom.bScheduleConfirmed?(alert(mcCore.isNaver()?nLang.w.template_security_reservation_naver:nLang.w.template_security_reservation),
t(),!1):$$("#template_layer_ul li").length>=20&&"true"!=a?(alert(nLang.w.template_exceed_20),t(),!1):""==$Element($$.getSingle("#save_template_name")).attr("value")?(alert(nLang.w.template_no_subject),
!1):b&&b.bigFile&&!confirm(nLang.w.template_bigfile_save)?(t(),!1):!0},p=function(){var a=$Element($$.getSingle("#save_template_name")),b=mwCore.getCurContents("",!0);
return b.type="template",b.folderSN=13,b.folderName="TemplateMailFolder",b.subject=a.attr("value"),b.calendarVal="",
t(),mcCore.requestAjax({fCallback:$Fn(q,this).bind(),oParameter:b,sUrl:"/json/write/save/"}),!0},q=function(){
f()},r=function(a,b){if(confirm(nLang.w.template_delete_desc)){var c={mailSNList:b,deleteSpamDirect:"-1",
currentFolderType:"trash",folderSNList:"13"};mcCore.requestAjax({fCallback:$Fn(s,this).bind(c),oParameter:c,
sUrl:"/json/select/delete/"})}},s=function(){e()},t=function(){var a=$Element($$.getSingle("#template_layer_list")),b=$Element($$.getSingle("#tempate_layer_save"));
u(a),u(b)},u=function(a){a.hide(),myCore.removeFromVisibleLayer(a)},v=function(a){a.show(),myCore.addToVisibleLayer(a);
},w=function(a){if(a.element){var b=a.element.value;b.length>100&&(b=b.slice(0,100),a.element.value=b);
}},x=function(a,b){mfCore.popupWrite(null,"template",b,void 0,void 0,0),t()},y=function(a){var b,c=$$("#template_layer_ul li");
b="LI"==a.element.nodeType?a.element:a.element.parentElement;for(var d=0;d<c.length;d++){var e=c[d];b!=e&&$Element(e).removeClass("ovr");
}$Element(b).addClass("ovr")},z=function(a){var b=$Element($$.getSingle("#template_layer_ul li.ovr")),c=$$("#template_layer_ul li");
if(b&&!b.isParentOf(a.relatedElement)&&a.relatedElement!=$$.getSingle("#template_layer_ul"))for(var d=0;d<c.length;d++){
var e=c[d];$Element(e).removeClass("ovr")}},A=function(){B($$.getSingle("#template_layer_ul").parentElement.scrollTop);
},B=function(a){b=a};return{toggleTemplateBtn:c,toggleTemplateArea:k,toggleTemplateSaveLayer:l,addNewTemplate:m,
addNewTemplateSend:p,removeTemplateMail:r,subjectOnChange:w,templateSubjectClick:x,listMouseOver:y,listMouseOut:z,
onListScroll:A,setScrollLocation:B}}();var mwEditor=function(){var a="NanumGothic,"+nLang.w.naumgothic,b="sans-serif",c="NanumMyeongjo,"+nLang.w.nanumcourier,d="serif",e="NanumSquare,"+nLang.w.nanumsquare,f="serif",g=jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<=10,h=jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<=9,i=jindo.$Class({
$autoBind:!0,$init:function(){this.shortcutKey={},this.defaultLocale="",this.defaultFontFamily="",this.defaultFontFamilyList=[],
this.domainSignInfos=[],this.domainAddress="",this.domainSigns=[],this.lastSelectedSignSn=void 0,this._initDefaultShortCut()._initDefaultLocale(cCode)._initDefaultFontFamilyList();
},_initDefaultShortCut:function(){var a;try{mEnv&&mEnv.shortCut?a=mEnv.shortCut:opener&&opener.m&&opener.m.info&&opener.mEnv&&opener.mEnv.shortCut?a=opener.mEnv.shortCut:parent.opener&&parent.opener.m&&parent.opener.m.info&&parent.opener.mEnv&&parent.opener.mEnv.shortCut&&(a=parent.opener.mEnv.shortCut);
}catch(b){a=void 0}return this.shortcutKey=a,this},_initDefaultLocale:function(a){var b="";switch(a){
case"ko_KR":case"ja_JP":case"en_US":case"zh_CN":case"zh_TW":b=a;break;default:b="ko_KR"}return this.defaultLocale=b,
this},_getDefaulMinimumtHeight:function(){var a=-1;return function(){var b,c,d,e;return-1!==a?a:(b=jindo.$Element("cont_flex_area"),
c=b.query(".mailWriteItem"),d=b.query(".section_sendopt"),(this.isLoaded()&&b&&d&&c)!==!1?(e=b.$value().clientHeight-c.height()-d.height()-(jindo.$Agent().navigator().ie?80:75),
("toMe"===mCom.orderType||"readToMe"===mCom.orderType)&&(e-=101),a=e):void 0)}}(),_isFontInstalled:function(a){
var b,c,d="Comic Sans MS"===a?"Courier New":"Comic Sans MS",e="position:absolute !important; font-size:200px !important; left:-9999px !important; top:-9999px !important;",f=document.body||document.documentElement,g=document.createElement("div");
return g.innerHTML="mmmmiiiii"+unescape("%uD55C%uAE00"),g.style.cssText=e+'font-family:"'+d+'" !important',
f.firstChild?f.insertBefore(g,f.firstChild):document.body.appendChild(g),c=g.offsetWidth+"-"+g.offsetHeight,
g.style.cssText=e+'font-family:"'+a.replace(/,/gi,'","')+'", "'+d+'" !important',b=c!==g.offsetWidth+"-"+g.offsetHeight,
document.body.removeChild(g),b},_initMailSignListDomain:function(a){var b,c,d,e=this._makeMainDomainSignInfo(a),f=a.iDomainEmail||a.primaryEmailAddr;
for(this.domainSignInfos=a.signListDomain||[],this.domainSignInfos.push(e),b=this._makeSubDomainSignInfos(a,e),
c=0,d=b.length;d>c;c++)this.domainSignInfos.push(b[c]);return this.domainAddress=f,this.domainSigns=this._getSignsFrom(this.domainAddress),
this.lastSelectedSignSn=this._getDefaultSignSnFrom(this.domainAddress),this},_makeMainDomainSignInfo:function(a){
var b,c=a.selectedSign||"",d=a.signList||[],e=mEnv.mailAddress||"";return a.blogtag&&d.push({name:"블로그서명",
signContent:a.blogtag,signSN:"blogtag"}),b={domainAddr:e,signInfoList:d,defaultSignSn:c}},_makeSubDomainSignInfos:function(a,b){
var c,d,e=a.dlSenderList||[],f=a.idomainInfos||[],g=[];for(c=0,d=e.length;d>c;c++)g.push({domainAddr:e[c].email,
signInfoList:b.signInfoList,defaultSignSn:b.defaultSignSn});for(c=0,d=f.length;d>c;c++)g.push({domainAddr:f[c].emailAddress,
signInfoList:b.signInfoList,defaultSignSn:b.defaultSignSn});return g},_getDefaultSignSnFrom:function(a){
var b,c;for(b=0,c=this.domainSignInfos.length;c>b;b++)if(this.domainSignInfos[b].domainAddr===a)return this.domainSignInfos[b].defaultSignSn?this.domainSignInfos[b].defaultSignSn.toString():"";
return""},_getSignContentFrom:function(a,b){var c,d,e,f,g=[],h="";for(e=0,f=this.domainSignInfos.length;f>e;e++)if(this.domainSignInfos[e].domainAddr===a){
g=this.domainSignInfos[e].signInfoList,c=b||(this.domainSignInfos[e].defaultSignSn?this.domainSignInfos[e].defaultSignSn.toString():"");
break}for(e=0,f=g.length;f>e;e++)if(d=g[e].signSN?g[e].signSN.toString():"",d===c){h=g[e].signContent;
break}return h},_getSignsFrom:function(a){var b,c;for(b=0,c=this.domainSignInfos.length;c>b;b++)if(this.domainSignInfos[b].domainAddr===a)return this.domainSignInfos[b].signInfoList;
return[]},insertImageFromImageEditor:function(a){mwAttach.uploadImageFromDataURI(a,jindo.$Fn(function(a){
var b;this.selectedImage?(b=this.selectedImage.cloneNode(),b.src=a,b.removeAttribute("width"),b.removeAttribute("height"),
b.style.width="",b.style.height="",b.removeAttribute("data-image-original-width"),b.removeAttribute("data-image-border"),
b.removeAttribute("data-image-scale"),b.removeAttribute("data-image-ratio"),this.replaceNodeInEditorContent(jindo.$Fn(function(a){
return a===this.selectedImage?b:void 0},this).bind())):this.insertHTML('<img class="NHN_MAIL_IMAGE" src="'+a+'" >');
},this).bind())}}),j=jindo.$Class({$autoBind:!0,REGEX_URL:/(?![^<]*>)(https?:\/\/[^\s"'<>()\u3000]{2,256}\.[^\s"'<>()\u3000]{2,1500}|www\.[^\s"'<>()\u3000]{2,256}\.[^\s"'<>()\u3000]{2,1500})([^<>]*<\/a>)?/gi,
TEXT_MODE:"TEXT",HTML_MODE:"HTML",WYSIWYG_MODE:"EDITOR",SIGN_CONTENT:"sign-content",BLANK_TAG:"<div>​</div>",
MAIL_THREAD_DELIMITER:"<br>",$init:function(){this.defaultFontSizeList=[{key:"verylarge",value:"32px"
},{key:"large",value:"19px"},{key:"normal",value:"13px"},{key:"small",value:"12px"},{key:"verysmall",
value:"10px"}],this.defaultFontSize="13px",this.isEditorLoaded=!1,this.editor=null,this.lastSelectedSignContent="",
this.selectedImage=null},_initDefaultFontFamilyList:function(){var g=[];switch(this.defaultLocale){case"ja_JP":
g=[{value:"Meiryo,sans-serif",label:"Meiryo"},{value:"MS 明朝,sans-serif",label:"MS 明朝"},{value:"MS P明朝,sans-serif",
label:"MS P明朝"},{value:"SimSun,serif",label:"SimSun"},{value:"sans-serif",label:"Sans Serif"},{value:"MS ゴシック,sans-serif",
label:"MS ゴシック"},{value:"MS Pゴシック,sans-serif",label:"MS Pゴシック"},{value:"MS UI ゴシック,sans-serif",label:"MS UI ゴシック"
},{value:"Arial,sans-serif",label:"Arial"},{value:"Comic Sans MS,sans-serif",label:"Comic Sans MS"},{
value:"Courier New,serif",label:"Courier New"},{value:"Tahoma,sans-serif",label:"Tahoma"},{value:"Verdana,sans-serif",
label:"Verdana"}];break;case"en_US":g=[{value:"sans-serif",label:"Sans Serif"},{value:"MS Gothic,sans-serif",
label:"MS Gothic"},{value:"MS PGothic,sans-serif",label:"MS PGothic"},{value:"MS UI Gothic,sans-serif",
label:"MS UI Gothic"},{value:"Arial,sans-serif",label:"Arial"},{value:"Comic Sans MS,sans-serif",label:"Comic Sans MS"
},{value:"Courier New,serif",label:"Courier New"},{value:"Tahoma,sans-serif",label:"Tahoma"},{value:"Verdana,sans-serif",
label:"Verdana"},{value:"Meiryo,sans-serif",label:"Meiryo"},{value:"SimSun,serif",label:"SimSun"},{value:"Gulim,sans-serif",
label:"Gulim"},{value:"Dotum,sans-serif",label:"Dotum"},{value:"Malgun Gothic,sans-serif",label:"Malgun Gothic"
},{value:"Batang,serif",label:"Batang"},{value:"Gungsuh,serif",label:"Gungsuh"}];break;case"zh_CN":case"zh_TW":
g=[{value:"SimSun,serif",label:"SimSun"},{value:"黑体,sans-serif",label:"黑体"},{value:"仿宋,sans-serif",label:"仿宋"
},{value:"sans-serif",label:"Sans Serif"},{value:"Meiryo,sans-serif",label:"Meiryo"},{value:"MS Gothic,sans-serif",
label:"MS Gothic"},{value:"MS PGothic,sans-serif",label:"MS PGothic"},{value:"MS UI Gothic,sans-serif",
label:"MS UI Gothic"},{value:"Arial,sans-serif",label:"Arial"},{value:"Comic Sans MS,sans-serif",label:"Comic Sans MS"
},{value:"Courier New,serif",label:"Courier New"},{value:"Tahoma,sans-serif",label:"Tahoma"},{value:"Verdana,sans-serif",
label:"Verdana"}];break;case"ko_KR":default:g=[{value:"Gulim,굴림,sans-serif",label:"굴림"},{value:"Dotum,돋움,sans-serif",
label:"돋움"},{value:"Malgun Gothic,맑은 고딕,sans-serif",label:"맑은 고딕"},{value:"Batang,바탕,serif",label:"바탕"
},{value:"Gungsuh,궁서,serif",label:"궁서"},{value:"Meiryo,sans-serif",label:"Meiryo"},{value:"SimSun,serif",
label:"SimSun"},{value:"sans-serif",label:"Sans Serif"},{value:"MS Gothic,sans-serif",label:"MS Gothic"
},{value:"MS PGothic,sans-serif",label:"MS PGothic"},{value:"MS UI Gothic,sans-serif",label:"MS UI Gothic"
},{value:"Arial,sans-serif",label:"Arial"},{value:"Comic Sans MS,sans-serif",label:"Comic Sans MS"},{
value:"Courier New,serif",label:"Courier New"},{value:"Tahoma,sans-serif",label:"Tahoma"},{value:"Verdana,sans-serif",
label:"Verdana"}]}return this._isFontInstalled(a)&&g.push({value:a+","+b,label:nLang.w.naumgothic}),
this._isFontInstalled(c)&&g.push({value:c+","+d,label:nLang.w.nanumcourier}),this._isFontInstalled(e)&&g.push({
value:e+","+f,label:nLang.w.nanumsquare}),this.defaultFontFamilyList=g,this},_setupDefaultFontFamily:function(g){
var h,i=g||"",j=!1;for("나눔고딕"===g||"NanumGothic"===g?i=a+","+b:"나눔명조"===g||"NanumMyeongjo"===g?i=c+","+d:"나눔스퀘어"===g||"NanumSquare"===g?i=e+","+f:"SANS-SERIF"===g.toUpperCase()&&(i="sans-serif"),
h=0;h<this.defaultFontFamilyList.length;h++)if(this.defaultFontFamilyList[h].value.split(",")[0]===i.split(",")[0]){
i=this.defaultFontFamilyList[h].value,j=!0;break}return j===!1&&(i=this.defaultFontFamilyList[0].value),
this.defaultFontFamily=i,this},setup:function(a,b){var c;return this.isLoaded()===!1?this._load(jindo.$Fn(this.setup,this).bind(a,b)):(c=a.writeBody,
this._initMailSignListDomain(c)._setupDefaultFontSize(mEnv.fontSize)._setupDefaultFontFamily(mEnv.fontName),
this._makeEditor(c,jindo.$Fn(function(a){var c=a.getElement(),d=a.editArea.editorElm,e={'.editor_footer button[value="EDITOR"]':"LWE.editmode",
'.editor_footer button[value="HTML"]':"LWE.htmlmode",'.editor_footer button[value="TEXT"]':"LWE.textmode",
".align button.align_left":"LWE.justify",".align .dropdown_layer a.align_left":"LWE.justifyleft",".align .dropdown_layer a.align_center":"LWE.justifycenter",
".align .dropdown_layer a.align_right":"LWE.justifyright",".align .dropdown_layer a.align_justify":"LWE.justifyfull",
".ft_bgcolor button.btn_tool":"LWE.bgcolor",".deco_bold button.btn_tool":"LWE.bold",".ft_color button.btn_tool":"LWE.fontcolor",
".ft_size button.btn_tool":"LWE.size",".capture_editor button.btn_tool":"LWE.imgeditor",".attach_image button.btn_tool":"LWE.imginsert",
".text_indent button.outdent":"LWE.outdent",".text_indent button.indent":"LWE.indent",".deco_italic button.btn_tool":"LWE.italic",
".line_height button.btn_tool":"LWE.lineheight",".attach_sticker button.btn_tool":"LWE.sticker",".fn_hyperlink button.btn_tool":"LWE.hyperlink",
".list_style button.btn_tool":"LWE.list",".fn_clearformat button.btn_tool":"LWE.removeformatting",".fn_signature button.btn_tool":"LWE.sign",
".deco_strike button.btn_tool":"LWE.strikethrough",".fn_symbols button.btn_tool":"LWE.symbol",".fn_table button.btn_tool":"LWE.table",
".fn_translate button.btn_tool":"LWE.translator",".deco_underline button.btn_tool":"LWE.underline"},f={
".ly_image_toolbar button.scale_small":"LWE*i.small",".ly_image_toolbar button.scale_fit":"LWE*i.bestfit",
".ly_image_toolbar button.scale_origin":"LWE*i.original",".ly_image_toolbar button.image_outline":"LWE*i.border",
".ly_image_toolbar button.image_edit":"LWE*i.imgeditor",".ly_image_toolbar button.image_remove":"LWE*i.delete",
".ly_image_select_area button.btn_image_size":"LWE*i.sizecontrol"};c.addEventListener("mousedown",jindo.$Fn(this._editorFocusHandler,this).bind()),
Object.getOwnPropertyNames(e).forEach(function(a){var b=e[a],d=c.querySelector(a);d&&d.addEventListener("click",function(a){
ccr(this,b,a)})}),Object.getOwnPropertyNames(f).forEach(function(a){var b=f[a],c=d.querySelector(a);c&&c.addEventListener("click",function(a){
ccr(this,b,a)})}),this._setupSignList()._setupTabIndex()._updateSignToolbarButton()._updateLasteSelectedSignContent().focus(),
b(),setTimeout(jindo.$Fn(function(){("reply"===mCom.orderType||"replyAll"===mCom.orderType||"draft"===mCom.orderType||"template"===mCom.orderType||"sent"===mCom.orderType)&&this.focus();
},this).bind())},this).bind()),!0)},_load:function(a){return"undefined"!=typeof workseditor&&workseditor?(this.isEditorLoaded=!0,
a(),!0):(setTimeout($Fn(this._load,this).bind(a),10),!1)},_makeEditor:function(a,b){var c,d,e,f,i=a.foldOrgMsgWhenReply&&a.mailContents&&("reply"===mCom.orderType||"replyAll"===mCom.orderType),j=0,k=0;
for(this.WYSIWYG_MODE=workseditor.classic.EditMode.EDITOR,this.HTML_MODE=workseditor.classic.EditMode.HTML,
this.TEXT_MODE=workseditor.classic.EditMode.TEXT,c=mcCore.isMobile()||a.textMode?this.TEXT_MODE:-1!==mEnv.editorMode.indexOf("H")||!a.textMode&&-1!==mEnv.editorMode.indexOf("T")?this.WYSIWYG_MODE:this.HTML_MODE,
e=this.editor?jindo.$$.getSingle(".workseditor-classic"):document.getElementById("ir1"),f=0;f<this.defaultFontFamilyList.length;f++)if(this.defaultFontFamilyList[f].value.split(",")[0]===this.defaultFontFamily.split(",")[0]){
j=f;break}for(f=0;f<this.defaultFontSizeList.length;f++)if(this.defaultFontSizeList[f].value===this.defaultFontSize){
k=f;break}return d={localeId:this.defaultLocale,editMode:c,height:225,content:this._getInitialMailContent(a,i),
shortcut:this._createShortcut(),tools:{fontFamily:{list:this.defaultFontFamilyList,defaultIndex:j},fontSize:{
defaultIndex:k},lineHeight:{defaultValue:1.5},translation:{onClick:mwCore.openTranslatePopup},lineSticker:{
loadStickerPackages:mwSticker.loadPackages,loadStickers:mwSticker.loadElementsByUid},sign:{selected:this._selectSignHandler
},imageEditor:{onClick:jindo.$Fn(function(){this.selectedImage=null,mwCore.openImageCapture()},this).bind()
},imageUploader:{onClick:jindo.$Fn(function(){h?mwAttach.attachImage():mwAttach.attachImages()},this).bind()
}},loaded:b,focused:jindo.$Fn(this._editorFocusHandler,this).bind(),contentChanged:jindo.$Fn(this._editorModeChangeHandler,this).bind(),
fileInserted:jindo.$Fn(this._fileHandler,this).bind(),dataURIImageInserted:jindo.$Fn(this._dataUriIamgeHandler,this).bind(),
dropped:jindo.$Fn(this._dropHandler,this).bind()},g||(d.imageSelection={onEditClick:jindo.$Fn(function(a){
this.selectedImage=a,mwCore.openImageCapture()},this).bind()}),i&&(d.moreContent={contentToExpand:this.BLANK_TAG+this.MAIL_THREAD_DELIMITER+this._removeSignAttribute(refineTag(a.mailContents)),
buttonLabel:nLang.c.prev_mail2}),this.editor=new workseditor.classic.ClassicEditor(e,d),g&&$Element($$.getSingle(".workseditor-classic .capture_editor")).css("display","none"),
this.editor},_selectSignHandler:function(a){var b,c=a.toString();return this._isCurrentSignContentEdited()&&confirm(nLang.c.change_sign_desc)===!1?(this.focus(),
!1):(b=this._getSignContentFrom(this.domainAddress,c),this.lastSelectedSignSn=c,this._changeSignContent(b),
!0)},_editorModeChangeHandler:function(a){a===this.TEXT_MODE&&(this.lastSelectedSignContent="")},_editorFocusHandler:function(){
myCore.hideAllLayer(),maCore.hideAutocompleteAddrSuggestLayer()},_setupDefaultFontSize:function(a){var b,c;
for(b=0,c=this.defaultFontSizeList.length;c>b;b++)if(this.defaultFontSizeList[b].key===a)return this.defaultFontSize=this.defaultFontSizeList[b].value,
this;return this.defaultFontSize="13px",this},_getInitialMailContent:function(a,b){var c=a.mailContents||"",d=this._getSignContentFrom(a.primaryEmailAddr),e="",f=mCom.sSendBody;
return d&&"toMe"!==mCom.orderType&&"readToMe"!==mCom.orderType&&"draft"!==mCom.orderType&&"sent"!==mCom.orderType&&"template"!==mCom.orderType&&(e+=this.BLANK_TAG+this.BLANK_TAG+(a.textMode||mcCore.isMobile()?d:this._makeSignContent(d))),
b?f||e:(c&&(c=this._removeSignAttribute(refineTag(c))),f?"reply"===mCom.orderType||"replyAll"===mCom.orderType?f+c:f:(c&&(e+="draft"===mCom.orderType||"template"===mCom.orderType||"sent"===mCom.orderType||"edit"===mCom.orderType?c:d?this.MAIL_THREAD_DELIMITER+c:this.BLANK_TAG+this.MAIL_THREAD_DELIMITER+c),
e))},_setupSignList:function(){return this.editor.updateSigns(this.domainSigns,this.lastSelectedSignSn),
this},_createShortcut:function(){var a={};return void 0===this.shortcutKey||"false"===this.shortcutKey.useShortCut||this.shortcutKey.useShortCut===!1||void 0===this.shortcutKey.useShortCut?(oMail.emptyHotkey(),
a.Control_S=jindo.$Fn(function(a){var b=jindo.$Event(a);mwCore.saveContents(b,!0),this._afterShortcutHandle(b,"sct.mailsave");
},this).bind()):(a[this._convertShortcutKey(this.shortcutKey.sendKey)]=jindo.$Fn(function(a){var b=jindo.$Event(a);
mwCore.sendMail(b),this._afterShortcutHandle(b,"sct.send")},this).bind(),a[this._convertShortcutKey(this.shortcutKey.saveKey)]=jindo.$Fn(function(a){
var b=jindo.$Event(a);mwCore.saveContents(b,!0),this._afterShortcutHandle(b,"sct.mailsave")},this).bind(),
a[this._convertShortcutKey(this.shortcutKey.toMeSelectOptionKey)]=jindo.$Fn(function(a){var b=jindo.$Event(a);
mwTome._toggleTome(b),this._afterShortcutHandle(b,"sct.myselfmode")},this).bind(),a[this._convertShortcutKey(this.shortcutKey.addressShowKey)]=jindo.$Fn(function(a){
var b=jindo.$Event(a);mwCore.popAddress(),this._afterShortcutHandle(b,"sct.openaddr")},this).bind(),
a[this._convertShortcutKey(this.shortcutKey.filePcAttachKey)]=jindo.$Fn(function(a){mwAttach.shortcutUpload(),
this._afterShortcutHandle(jindo.$Event(a),"sct.attachpc")},this).bind(),a[this._convertShortcutKey(this.shortcutKey.helpShowKey2)]=jindo.$Fn(function(a){
myCore.showShortcutLayer(),this._afterShortcutHandle(jindo.$Event(a),"sct.help2")},this).bind(),a[this._convertShortcutKey(this.shortcutKey.searchAreaMoveKey2)]=jindo.$Fn(function(a){
mySimpleSearch.focusToSearch(),this._afterShortcutHandle(jindo.$Event(a),"sct.search2")},this).bind(),
mCom.isPopup?a[this._convertShortcutKey(this.shortcutKey.popupCloseKey)]=jindo.$Fn(function(a){mcCore.closePopup(),
this._afterShortcutHandle(jindo.$Event(a),"sct.closewindow")},this).bind():(a[this._convertShortcutKey(this.shortcutKey.allMailShowKey)]=jindo.$Fn(function(a){
mlCore.updateList(null,"all"),this._afterShortcutHandle(jindo.$Event(a),"sct.allmail")},this).bind(),
a[this._convertShortcutKey(this.shortcutKey.unreadMailShowKey)]=jindo.$Fn(function(a){mlCore.updateList(null,"unread"),
this._afterShortcutHandle(jindo.$Event(a),"sct.unreadmail")},this).bind(),a[this._convertShortcutKey(this.shortcutKey.inboxShowKey)]=jindo.$Fn(function(a){
mlCore.updateList(null,"0"),this._afterShortcutHandle(jindo.$Event(a),"sct.inbox")},this).bind(),a[this._convertShortcutKey(this.shortcutKey.myboxShowKey)]=jindo.$Fn(function(a){
mlCore.updateList(null,"6"),this._afterShortcutHandle(jindo.$Event(a),"sct.mybox")},this).bind(),a[this._convertShortcutKey(this.shortcutKey.sentBoxShowKey)]=jindo.$Fn(function(a){
mlCore.updateList(null,"1"),this._afterShortcutHandle(jindo.$Event(a),"sct.sentmail")},this).bind(),
a[this._convertShortcutKey(this.shortcutKey.receiptBoxShowKey)]=jindo.$Fn(function(a){mlCore.updateList(null,"2"),
this._afterShortcutHandle(jindo.$Event(a),"sct.sentnotimail")},this).bind(),a[this._convertShortcutKey(this.shortcutKey.draftBoxShowKey)]=jindo.$Fn(function(a){
mlCore.updateList(null,"3"),this._afterShortcutHandle(jindo.$Event(a),"sct.draft")},this).bind(),a[this._convertShortcutKey(this.shortcutKey.spamBoxShowKey)]=jindo.$Fn(function(a){
mlCore.updateList(null,"5"),this._afterShortcutHandle(jindo.$Event(a),"sct.junkbox")},this).bind(),a[this._convertShortcutKey(this.shortcutKey.trashBoxShowKey)]=jindo.$Fn(function(a){
mlCore.updateList(null,"4"),this._afterShortcutHandle(jindo.$Event(a),"sct.trashbox")},this).bind(),
mcCore.isNaver()&&(a[this._convertShortcutKey(this.shortcutKey.billBoxShowKey)]=jindo.$Fn(function(a){
jindo.$Event(a).stop(),mlCore.updateList(null,"7")},this).bind(),a[this._convertShortcutKey(this.shortcutKey.cafeBoxShowKey)]=jindo.$Fn(function(a){
jindo.$Event(a).stop(),mlCore.updateList(null,"8")},this).bind()))),a},_convertShortcutKey:function(a){
var b=a.replace(/<|>/g,"").replace(/\s\+\s/g,"_").replace("CTRL","Control").replace("ALT","Alt").replace("SHIFT","Shift").replace("ENTER","Enter");
return/Shift/g.test(b)&&/\//g.test(b)&&(b=b.replace("/","?")),b},_afterShortcutHandle:function(a,b){
a.stop(),ccr(a.element,b,a)},_setupTabIndex:function(){var a=jindo.$$(".editor_body textarea"),b=jindo.$$.getSingle(".editor_body iframe");
return b.tabIndex=5,a[0].tabIndex=5,a[1].tabIndex=5,this},_dataUriIamgeHandler:function(a){var b,c,d,e=!1;
for(c=0,d=a.length;d>c;c++)b=a[c],e=isNaN(parseInt(b.getAttribute("data-imageIndex"),10)),e&&mwAttach.uploadImageFromDataURIImageElement(b);
},_dropHandler:function(a){a.preventDefault();var b=a.dataTransfer&&jindo.$Json(a.dataTransfer.getData("text")).toObject();
b&&b.mailId&&mwAttach.dropFileHtml5(jindo.$Event(a))},_fileHandler:function(a,b){var c,d,e=a.files||[],f=a.items||[],g=e.length,h=f.length;
g>0?(c=e[0]||{},1===g&&c.type&&c.type.match(/image.*/)?setTimeout(jindo.$Fn(function(){mwAttach.uploadImageFromBlob(c,jindo.$Fn(function(a){
this.insertHTML('<img class="NHN_MAIL_IMAGE" src="'+a+'" >')},this).bind())},this).bind()):mwAttach.dropFileHtml5(jindo.$Event(b))):h>0&&(d=f[0]||{},
d.type&&-1!==d.type.indexOf("image")&&setTimeout(jindo.$Fn(function(){mwAttach.uploadImageFromBlob(d.getAsFile(),jindo.$Fn(function(a){
this.insertHTML('<img class="NHN_MAIL_IMAGE" src="'+a+'" >')},this).bind())},this).bind())),b.preventDefault();
},finish:function(){return this},focus:function(){return this.editor.focus(),this},clear:function(){
return this},isLoaded:function(){return this.isEditorLoaded},makeMailBody:function(a){var b=a?this.getRawContent():this.getContent(),c=this.getEditorMode();
if(b=this._removeSignAttribute(b),c===this.WYSIWYG_MODE){b=this._makeLink(b),b=this._removeZeroWidthSpaceNodeInFrontAndRearOfAnchor(b);
var d=jindo.$Element(b);b=this._getBlockWrappedContent((!!d&&!d._element.length&&d._element.tagName&&"DIV"===d._element.tagName&&d._element.style.fontFamily&&d._element.style.fontSize)===!1?b:d.html());
}return b},_makeLink:function(a){var b,c="data-identification",d="",e=0,f=[];return a?(b=jindo.$Element("<div>"+a+"</div>"),
null===b?a:(jindo.$A(b.queryAll("img")).forEach(function(a){f.push(a.outerHTML()),a.replace("<img "+c+'="'+e+'">'),
e++}),e=0,d=b.html().replace(this.REGEX_URL,function(a,b,c){if(c)return a;var d,e=a.replace(/&nbsp;|\u200b/g,"");
return d=e.match(/https?/)?e:"http://"+e,'<a href="'+d+'" target="_blank">'+e+"</a>"}),f.length>0&&(b=jindo.$Element("<div>"+d+"</div>"),
jindo.$A(b.queryAll("img")).forEach(function(a){var b=a.attr(c);null!==b&&a.replace(f[b])}),d=b.html()),
d)):""},_removeZeroWidthSpaceNodeInFrontAndRearOfAnchor:function(a){var b=document.createElement("div"),c="​";
b.innerHTML=a;var d=b.querySelectorAll("a");if(0===d.length)return a;for(var e=!1,f=0;f<d.length;f++){
for(var g=d[f],h=g.previousSibling;h&&h.nodeType===Node.TEXT_NODE;){var i=h.previousSibling;if(0!==h.nodeValue.replace(c,"").length)break;
e=!0,h.parentNode.removeChild(h),h=i}for(h=g.nextSibling;h&&h.nodeType===Node.TEXT_NODE;){var j=h.nextSibling;
if(0!==h.nodeValue.replace(c,"").length)break;e=!0,h.parentNode.removeChild(h),h=j}}return e?b.innerHTML:a;
},_getBlockWrappedContent:function(a){var b='<div style="font-size:'+this.defaultFontSize+"; font-family:"+this.defaultFontFamily+';">'+(a||"")+"</div>";
return b},getContent:function(){return this.editor.getContent()},setContent:function(a){return this.editor?(this.editor.setContent(a),
this):this},getRawContent:function(){return this.editor.getContent()},getEditorMode:function(){return this.editor.getEditMode();
},setEditorMode:function(a){return this.editor.setMode(a!==this.TEXT_MODE&&a!==this.HTML_MODE&&a!==this.WYSIWYG_MODE?this.WYSIWYG_MODE:a),
this},getSelectedText:function(a){return this.editor.getSelectedText(a)},getSelectedHTML:function(){
return this.editor.getSelectedHTML()},getContentAreaHeight:function(){},setContentAreaHeight:function(){
return this},setEditorHeight:function(a){return this.editor.setHeight(a),this},insertHTML:function(a,b){
return this.editor.insertHTML(a,b),this},insertText:function(a){return this.editor.insertText(a),this;
},replaceNodeInEditorContent:function(a){return this.editor.replaceNodeInContent(a),this},changeSenderAddress:function(a){
var b="";return this._isCurrentSignContentEdited()&&confirm(nLang.c.change_sign_desc)===!1?void this.focus():(this.domainAddress=a,
this.domainSigns=this._getSignsFrom(this.domainAddress),this.lastSelectedSignSn=this._getDefaultSignSnFrom(this.domainAddress),
this.editor.updateSigns(this.domainSigns,this.lastSelectedSignSn),b=this._getSignContentFrom(this.domainAddress),
this._changeSignContent(b),void this._updateSignToolbarButton())},_isCurrentSignContentEdited:function(){
return this._getCurrentSignContentFromEditor()===this.lastSelectedSignContent?!1:!0},_changeSignContent:function(a){
var b=!1,c=this._makeSignContent(a),d=jindo.$Element(c)._element;this.replaceNodeInEditorContent(jindo.$Fn(function(a){
var c;return a.nodeType===Node.ELEMENT_NODE&&(c=jindo.$Element(a).data("workseditor"),c===this.SIGN_CONTENT)?(b=!0,
d):void 0},this).bind()),b===!1&&a&&this.insertHTML(this.BLANK_TAG+this.BLANK_TAG+c),this._updateLasteSelectedSignContent(),
this.focus()},_updateLasteSelectedSignContent:function(){return this.lastSelectedSignContent=this._getCurrentSignContentFromEditor(),
this},_updateSignToolbarButton:function(){return this.domainSigns.length>0?jindo.$Element(jindo.$$.getSingle(".workseditor-classic .fn_signature")).css("display",""):jindo.$Element(jindo.$$.getSingle(".workseditor-classic .fn_signature")).css("display","none"),
this},_getCurrentSignContentFromEditor:function(){var a=this.getContent(),b="",c=jindo.$Element("<div>"+a+"</div>"),d=c.query('div[data-workseditor="'+this.SIGN_CONTENT+'"]');
return d&&(b=d.html()),b},_makeSignContent:function(a){return a?'<div data-workseditor="'+this.SIGN_CONTENT+'">'+a+"</div>":'<div style="display:none" data-workseditor="'+this.SIGN_CONTENT+'">&#8203;</div>';
},_removeSignAttribute:function(a){return a.replace(/<[^>]*(data-workseditor="sign-content")[^>]*>/g,function(a,b){
return a.replace(b,"")})},saveCurrentSignContent:function(){this._updateLasteSelectedSignContent()}}).extend(i),k=jindo.$Class({
$autoBind:!0,TEXT_MODE:"TEXT",HTML_MODE:"HTMLSrc",WYSIWYG_MODE:"WYSIWYG",BLANK_TAG:mCom.isIE9||mCom.isIE8?"<p>&nbsp;</p>":"<p><br></p>",
$init:function(){this.isEditorLoaded=!1,this.editor=null,this.defaultFontSize="10"},_initDefaultFontFamilyList:function(){
var a=[];switch(this.defaultLocale){case"ja_JP":a=[["MS Gothic,sans-serif","MS ゴシック"],["MS PGothic,sans-serif","MS Pゴシック"],["MS UI Gothic,sans-serif","MS UIゴシック"],["Meiryo,sans-serif","Meiryo"],["MS PMincho,sans-serif","MS P明朝"],["MS Mincho,sans-serif","MS 明朝"],["Arial,sans-serif","Arial"],["Arial Black,sans-serif","Arial Black"],["Comic Sans MS,sans-serif","Comic Sans MS"],["Courier New,serif","Courier New"],["SimSun,sans-serif","SimSun"],["Times New Roman,serif","Times New Roman"],["Verdana,sans-serif","Verdana"]];
break;case"en_US":a=[["Gulim,serif","Gulim"],["Gulimche,serif","Gulimche"],["Dotum,serif","Dotum"],["Dotumche,serif","Dotumche"],["Batang,serif","Batang"],["Batangche,serif","Batangche"],["Gungsuh,serif","Gungsuh"],["Gungsuhche,serif","Gungsuhche"],["Arial,serif","Arial"],["Courier New,serif","Courier New"],["Tahoma,sans-serif","Tahoma"],["Times New Roman,serif","Times New Roman"],["Verdana,sans-serif","Verdana"],["Sans Serif","Sans Serif"],["MS Gothic,sans-serif","MS Gothic"],["MS PGothic,sans-serif","MS PGothic"],["MS UI Gothic,sans-serif","MS UI Gothic"],["Meiryo,sans-serif","Meiryo"],["SimSun,serif","SimSun"]];
break;case"zh_CN":case"zh_TW":a=[["Simsun,serif","Simsun"],["黑体,sans-serif","黑体"],["仿宋,sans-serif","仿宋"],["Meiryo,sans-serif","Meiryo"],["MS Gothic,sans-serif","MS Gothic"],["MS PGothic,sans-serif","MS PGothic"],["MS UI Gothic,sans-serif","MS UI Gothic"]];
break;case"ko_KR":default:a=[["Gulim,sans-serif","굴림"],["Gulimche,sans-serif","굴림체"],["Dotum,sans-serif","돋움"],["Dotumche,sans-serif","돋움체"],["Batang,serif","바탕"],["Batangche,serif","바탕체"],["Gungsuh,serif","궁서"],["Gungsuhche,serif","궁서체"],["Arial,sans-serif","Arial"],["Courier New,serif","Courier New"],["Tahoma,sans-serif","Tahoma"],["Times New Roman,serif,sans-serif","Times New Roman"],["Verdana,sans-serif","Verdana"],["Sans Serif","Sans Serif"],["MS Gothic,sans-serif","MS Gothic"],["MS PGothic,sans-serif","MS PGothic"],["MS UI Gothic,sans-serif","MS UI Gothic"],["Meiryo,sans-serif","Meiryo"],["SimSun,serif","SimSun"]];
}return this.defaultFontFamilyList=a,this},_setupDefaultFontFamily:function(g){var h,i=g||"",j=!1;if("나눔고딕"===g||"NanumGothic"===g)i=this._isFontInstalled(a)?a+","+b:this.defaultFontFamilyList[0][0];else if("나눔명조"===g||"NanumMyeongjo"===g)i=this._isFontInstalled(c)?c+","+d:this.defaultFontFamilyList[0][0];else if("나눔스퀘어"===g||"NanumSquare"===g)i=this._isFontInstalled(e)?e+","+f:this.defaultFontFamilyList[0][0];else{
for(h=0;h<this.defaultFontFamilyList.length;h++)if(this.defaultFontFamilyList[h][0].split(",")[0]===i.split(",")[0]){
i=this.defaultFontFamilyList[h][0],j=!0;break}j===!1&&(i=this.defaultFontFamilyList[0][0])}return this.defaultFontFamily=i,
this},setup:function(a,b){var c=a.writeBody;return this.isLoaded()===!1?this._load(jindo.$Fn(this.setup,this).bind(a,b)):(this._initMailSignListDomain(c)._setupDefaultFontSize(mEnv.fontSize)._setupDefaultFontFamily(mEnv.fontName),
this._makeEditor(jindo.$Fn(function(){this.isEditorLoaded=!0,this.editor.exec("MAIL_WRITE_API_RESPONSED",[a]),
this.editor.setDefaultFont(this.defaultFontFamily,this.defaultFontSize),this.clear()._setupEditorMode(c.textMode)._setupShortcut()._setupHeight()._setupContent(c)._setupDMMail()._setupTabIndex(),
this.focus(),b(),this.editor.exec("ENABLE_WYSIWYG"),this.editor.setInitialStateIndex&&this.editor.setInitialStateIndex(),
mwAttach.insertButton(),this._setupCursor(),setTimeout(jindo.$Fn(function(){this.editor.exec("RESET_STYLE_STATUS"),
this.editor.exec("CHECK_STYLE_CHANGE"),jindo.$("se2_iframe").contentWindow.scroll(0,0)},this).bind(),10),
setTimeout(jindo.$Fn(function(){this.saveCurrentSignContent(this.editor.getWYSIWYGDocument().body.innerHTML);
},this).bind(),500),this.editor.exec("HIDE_ALL_DIALOG_LAYER"),this.editor.exec("HIDE_ACTIVE_LAYER")},this).bind()),
!0)},_load:function(a){return"undefined"!=typeof createSEditor2&&createSEditor2?(this.isEditorLoaded=!0,
a(),!0):(setTimeout($Fn(this._load,this).bind(a),10),!1)},_makeEditor:function(a){return this.editor?(a(),
this.editor):(window.elAppContainer=jindo.$("smart_editor2"),window._$dl=[window.elAppContainer],window._$hE0DIV=[],
window._$hE0LI=[],window._$hE0SPAN=[],window._$hE0BUTTON=[],window._$hE0UL=[],window._$hM=function(a,b){
var c="_$hE"+a+b;window[c]=window._$dl[a].getElementsByTagName(b)},_$hM(0,"DIV"),_$hM(0,"LI"),_$hM(0,"SPAN"),
_$hM(0,"BUTTON"),_$hM(0,"UL"),this.editor=createSEditor2(jindo.$("ir1"),{SE2M_FontName:{aFontList:[],
htMainFont:{},aFontInUse:[],aDefaultFontList:this.defaultFontFamilyList},I18N_LOCALE:this.defaultLocale,
UserInfo:{sUserId:null,bAdultAllow:!0},ExternalInfo:{sBlogId:null},type:"write"}),this.editor.run({fnOnAppReady:a
}),window.oEditor=this.editor,this.editor)},_setupDefaultFontSize:function(a){return this.defaultFontSize=a,
this},_setupEditorMode:function(a){return mcCore.isMobile()?this.editor.exec("CHANGE_EDITING_MODE",["TEXT"]):a?this.editor.exec("CHANGE_EDITING_MODE",["TEXT",!0,!0]):(-1!==mEnv.editorMode.indexOf("H")||!a&&-1!==mEnv.editorMode.indexOf("T"))&&(this.editor.exec("CHANGE_EDITING_MODE",["WYSIWYG",!0,!0]),
this.editor.exec("RESET_TOOLBAR")),this},_setupShortcut:function(){return void 0===this.shortcutKey||"false"===this.shortcutKey.useShortCut||this.shortcutKey.useShortCut===!1||void 0===this.shortcutKey.useShortCut?(oMail.emptyHotkey(),
this.editor.exec("REGISTER_HOTKEY",["ctrl+s","MSG_SAVE_HOTKEY"])):(this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.sendKey),"MSG_SEND_HOTKEY"]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.saveKey),"MSG_SAVE_HOTKEY"]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.toMeSelectOptionKey),"MSG_SEND_TOME_HOTKEY"]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.addressShowKey),"MSG_POP_ADDRESS_HOTKEY"]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.filePcAttachKey),"MSG_ADD_FILE_PC_HOTKEY"]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.helpShowKey2),"MSG_SHOW_SHORTCUT_TOOLTIP_HOTKEY"]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.searchAreaMoveKey2),"MSG_ONFOCUS_SHEARCH_HOTKEY"]),
mCom.isPopup?this.editor.exec("REGISTER_HOTKEY",[this.shortcutKey.popupCloseKey.replace(/</g,"").replace(/>/g,"").toLowerCase(),"MSG_CLOSE_WINDOW_HOTKEY"]):(this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.allMailShowKey),"MSG_GOTO_MAILBOX_HOTKEY",["all"]]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.unreadMailShowKey),"MSG_GOTO_MAILBOX_HOTKEY",["unread"]]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.inboxShowKey),"MSG_GOTO_MAILBOX_HOTKEY",["0"]]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.myboxShowKey),"MSG_GOTO_MAILBOX_HOTKEY",["6"]]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.sentBoxShowKey),"MSG_GOTO_MAILBOX_HOTKEY",["1"]]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.receiptBoxShowKey),"MSG_GOTO_MAILBOX_HOTKEY",["2"]]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.draftBoxShowKey),"MSG_GOTO_MAILBOX_HOTKEY",["3"]]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.spamBoxShowKey),"MSG_GOTO_MAILBOX_HOTKEY",["5"]]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.trashBoxShowKey),"MSG_GOTO_MAILBOX_HOTKEY",["4"]]),
mcCore.isNaver()&&(this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.billBoxShowKey),"MSG_GOTO_MAILBOX_HOTKEY",["7"]]),
this.editor.exec("REGISTER_HOTKEY",[this._tarnsSEShortcutKeyStr(this.shortcutKey.cafeBoxShowKey),"MSG_GOTO_MAILBOX_HOTKEY",["8"]])))),
this},_tarnsSEShortcutKeyStr:function(a){return a.replace(/</g,"").replace(/>/g,"").replace(/\//g,"slash").toLowerCase();
},_setupHeight:function(){try{opener&&opener.mEnv&&!opener.mEnv.useStandardHeight||!mCom.isPopup&&!mEnv.useStandardHeight?(jindo.$Element("ir1").css("height",mCom.nEditorExtHeight+"px"),
jindo.$Element(jindo.$$.getSingle(".se2_input_area")).css("height",mCom.nEditorExtHeight+"px"),jindo.$Element("se2_iframe").css("height","100%")):(jindo.$Element("ir1").css("height",mCom.nEditorHeight+"px"),
jindo.$Element(jindo.$$.getSingle(".se2_input_area")).css("height",mCom.nEditorHeight+"px"),jindo.$Element("se2_iframe").css("height","100%"));
}catch(a){jindo.$Element("ir1").css("height",mCom.nEditorHeight+"px"),jindo.$Element(jindo.$$.getSingle(".se2_input_area")).css("height",mCom.nEditorHeight+"px"),
jindo.$Element("se2_iframe").css("height","100%")}return this},_setupContent:function(a){var b=this._getSignContentFrom(a.primaryEmailAddr),c="",d="";
return("new"===mCom.orderType||"toMe"===mCom.orderType||"reply"===mCom.orderType||"replyAll"===mCom.orderType||"forward"===mCom.orderType||"promise"===mCom.orderType)&&(d=this.BLANK_TAG+this.BLANK_TAG),
"toMe"!==mCom.orderType&&"readToMe"!==mCom.orderType&&"draft"!==mCom.orderType&&"template"!==mCom.orderType&&"sent"!==mCom.orderType&&b&&(c+=a.textMode||mcCore.isMobile()?d+b:d+"<!--sign Area start-->"+b+"<!--sign Area end-->"),
a.mailContents&&(a.mailContents=refineTag(a.mailContents),c+="draft"===mCom.orderType||"template"===mCom.orderType||"sent"===mCom.orderType||"edit"===mCom.orderType?a.mailContents:b?this.BLANK_TAG+a.mailContents:this.BLANK_TAG+a.mailContents),
this.setContent(mCom.sSendBody?"reply"===mCom.orderType||"replyAll"===mCom.orderType?mCom.sSendBody+a.mailContents:mCom.sSendBody:c),
this},_setupDMMail:function(){var a,b,c,d;if("forward"===mCom.orderType||"reply"===mCom.orderType||"replyAll"===mCom.orderType)try{
if(this.editor.getWYSIWYGDocument().body)for(a=this.editor.getWYSIWYGDocument().body,b=a.getElementsByTagName("div"),
c=0;c<b.length;c++)d=b[c].getAttribute("style"),d&&d.match("nm-pc-content")?(b[c].setAttribute("style",d.replace(/nm-pc-content(\s)*:(\s)*true;/gi,"")),
b[c].style.display=""):d&&d.match("nm-mobile-content")&&(b[c].setAttribute("style",d.replace(/nm-mobile-content(\s)*:(\s)*true;/gi,"")),
b[c].style.display="none")}catch(e){mlog(e)}return this},_setupTabIndex:function(){return this},_setupCursor:function(){
var a,b,c,d,e;return("reply"===mCom.orderType||"replyAll"===mCom.orderType||"draft"===mCom.orderType||"template"===mCom.orderType||"sent"===mCom.orderType)&&(a=this.editor.getSelection(),
a.selectNode(this.editor.getWYSIWYGDocument().body.firstChild&&this.editor.getWYSIWYGDocument().body.firstChild.firstChild?this.editor.getWYSIWYGDocument().body.firstChild.firstChild:this.editor.getWYSIWYGDocument().body),
a.collapseToStart(),a.select(),this.getEditorMode()===this.TEXT_MODE&&(b=jindo.$$.getSingle(".se2_input_text",jindo.$("smart_editor2")),
c=0,b&&(b.focus(),b.setSelectionRange?b.setSelectionRange(c,c):b.createTextRange&&(d=b.createTextRange(),
d.collapse(!0),d.moveEnd("character",c),d.moveStart("character",c),d.select())),e=jindo.$$.getSingle(".se2_input_text"),
e&&(e.scrollTop=0)),setTimeout(jindo.$Fn(function(){this.focus()},this).bind())),this},finish:function(){
return this},focus:function(){return this.editor.exec("FOCUS"),this},clear:function(){return this.editor.setContents(""),
this},isLoaded:function(){return this.isEditorLoaded},makeMailBody:function(a){var b,c=a?this.getRawContent():this.getContent(),d=this.getEditorMode();
return d===this.TEXT_MODE?c=c.replace(/<!--sign Area start-->/g,"").replace(/<!--sign Area end-->/g,""):d===this.WYSIWYG_MODE&&(b=jindo.$Element(c),
(b&&!b._element.length&&b._element.tagName&&"DIV"===b._element.tagName&&b._element.style.fontFamily&&b._element.style.fontSize)===!1&&(c=this._getBlockWrappedContent(c))),
c},_getBlockWrappedContent:function(a){var b='<div style="font-size:'+this.defaultFontSize+"pt; font-family:"+jindo.$Element(this.editor.getWYSIWYGDocument().body).css("fontFamily").replace(/"/g,"'")+';">'+a+"</div>";
return b},getContent:function(){var a,b=this.getEditorMode();switch(b){case this.TEXT_MODE:a=this.editor.getTextAreaContents();
break;case this.HTML_MODE:a=this.editor.getRawContents();break;case this.WYSIWYG_MODE:default:a=this.editor.getContents();
}return a},setContent:function(a){return this.editor?(this.editor.setContents("string"!=typeof a?"":a),
this):this},getRawContent:function(){var a,b=this.getEditorMode();return a=b===this.WYSIWYG_MODE?this.editor.getWYSIWYGDocument().body.innerHTML:this.getContent();
},getEditorMode:function(){return this.editor.getEditingMode()},setEditorMode:function(){return this;
},getSelectedText:function(){var a,b,c,d,e,f,g=this.editor.getWYSIWYGWindow();if(this.getEditorMode()===this.WYSIWYG_MODE)if(g.getSelection){
if(a=g.getSelection(),0===a.rangeCount)return"";b=a.getRangeAt(0),c=b.cloneContents(),d=g.document.createElement("div"),
d.appendChild(c),f=$Agent().navigator().ie?d.innerText.replace(/\r\n\r\n/g,"\r\n"):a.toString()}else g.document.selection&&(f=g.document.selection.createRange().text);else e=jindo.$$.getSingle(this.getEditorMode()===this.TEXT_MODE?"#smart_editor2_content textarea.se2_input_text":"#smart_editor2_content textarea.se2_input_htmlsrc"),
f="undefined"!=typeof e.selectionStart?e.value.substring(e.selectionStart,e.selectionEnd):document.selection.createRange().text;
return f},getSelectedHTML:function(){var a,b,c,d,e,f;if(this.getEditorMode()!==this.WYSIWYG_MODE)return"";
if(a=this.editor.getWYSIWYGWindow(),a.getSelection){if(b=a.getSelection(),0===b.rangeCount)return"";c=b.getRangeAt(0),
d=c.cloneContents(),e=a.document.createElement("div"),e.appendChild(d),f=e.innerHTML}else a.document.selection&&(f=a.document.selection.createRange().htmlText);
return f},getContentAreaHeight:function(){return jindo.$Element(jindo.$$.getSingle("div.husky_seditor_editing_area_container")).height();
},setContentAreaHeight:function(a){return this.editor.exec("MSG_EDITING_AREA_RESIZE_STARTED"),this.editor.exec("RESIZE_EDITING_AREA",[0,a]),
this.editor.exec("MSG_EDITING_AREA_RESIZE_ENDED"),this},setEditorHeight:function(a){var b=jindo.$Element(jindo.$$.getSingle("#smart_editor2")).height(),c=this.getContentAreaHeight(),d=b-c;
return this.setContentAreaHeight(a-d),this},insertHTML:function(a){return this.editor.exec("PASTE_HTML",[a]),
this},insertText:function(a){var b,c,d=this.getEditorMode();return d===this.WYSIWYG_MODE?this:(b=jindo.$$.getSingle(d===this.TEXT_MODE?"#smart_editor2_content textarea.se2_input_text":"#smart_editor2_content textarea.se2_input_htmlsrc"),
c=b.value,"undefined"!=typeof b.selectionStart&&(b.value=c.substring(0,b.selectionStart)+a+c.substring(b.selectionEnd)),
this)},changeSenderAddress:function(a){return this.editor.exec("MAIL_SIGN_LIST_UPDATE",[a]),this.editor.exec("HIDE_ACTIVE_LAYER"),
this},saveCurrentSignContent:function(a){var b=a||this.getContent();return b=b.split("<!--sign Area start-->")[1],
b=b&&b.split("<!--sign Area end-->")[0],b&&(mCom.sCurSignContents=b),this}}).extend(i);return mEnv.isUseNewEditor?new j:new k;
}();mwOption=function(){var a="",b=function(){var b=$Element($$.getSingle("#pop_write_setting"));a=mwSenderAddress.getFirstFromName(),
b.visible()?myCore.hideAllLayer():(myCore.hideAllLayer(),mcCore.requestAjax({fCallback:$Fn(d,this).bind(),
oParameter:{},sUrl:"/json/option/write/get/"}))},c=function(){var a=$Element($$.getSingle("#pop_write_setting"));
a.hide()},d=function(b){var c,d,e=$$.getSingle("#sender_name"),f=$Element($$.getSingle("#delay_sending")),g=$$.getSingle("#delay_time"),h=($Element(g),
b.sendAfterReview),i="#preview_before_sending_0"+h,j=$Element($$.getSingle("#pop_write_setting")),k=$Element($$.getSingle("#writeOptionBtn")),l=k.offset(),m=mwSenderName.getSelectedItem(),n=e.length;
for(c=0;n>c;c++)e.remove(0);if(mCom.setDlSender)$Element("sender_name_in_pop_write_setting").hide();else for($Element("sender_name_in_pop_write_setting").show(),
c=0;c<b.FromNameListSize;c++)d=document.createElement("option"),d.value=b.FromNameList[c].fromName,d.text=b.FromNameList[c].fromName,
e.add(d),d.text===m&&(e.selectedIndex=c,a=m);for(b.popupWrite?$Element($$.getSingle("#write_window_01")).attr("checked",!0):$Element($$.getSingle("#write_window_02")).attr("checked",!0),
$Element($$.getSingle(i)).attr("checked",!0),b.delayDelivery?(g.disabled=!1,f.attr("checked",!0)):(g.disabled=!0,
f.attr("checked",!1)),n=g.length,c=0;n>c;c++)g[c].value===b.delayTime&&(g.selectedIndex=c);j.show(),
mCom.aVisibleLayerList.push(j),j.offset(l.top+k.height()-1,l.left+k.width()-j.width())},e=function(a){
var b=a.element;"true"===b.value?ccr(b,"wrt*s.newwinon",a._event):ccr(b,"wrt*s.newwinoff",a._event)},f=function(a){
var b=a.element;switch(b.value){case"1":ccr(b,"wrt*s.reviewall",a._event);break;case"2":ccr(b,"wrt*s.reviewsome",a._event);
break;case"3":ccr(b,"wrt*s.reviewoff",a._event)}},g=function(a){{var b=a.element,c=$$.getSingle("#delay_time");
$Element(c)}b.checked?(c.disabled=!1,ccr(b,"wrt*s.delayon",a._event)):(c.disabled=!0,ccr(b,"wrt*s.delayoff",a._event));
},h=function(){var b=$$.getSingle("#sender_name"),c=$$.getSingle("#delay_time"),d={selectedFromName:mCom.setDlSender?a:b.options[b.selectedIndex].value,
popupWrite:$$.getSingle('input[name="write_window"]:checked').value,sendAfterReview:$$.getSingle('input[name="preview_before_sending"]:checked').value,
delayDelivery:$$.getSingle("#delay_sending").checked+"",delayTime:c.options[c.selectedIndex].value};mcCore.requestAjax({
fCallback:$Fn(i,this).bind(d),oParameter:d,sUrl:"/json/option/writeForm/set2"}),myCore.hideAllLayer();
},i=function(a){var b=b||window.opener;mEnv.popupWrite="true"===a.popupWrite,mEnv.sendAfterReview=a.sendAfterReview,
mCom.isPopup&&mCom.parentWindow&&(mCom.parentWindow.mEnv.popupWrite=mEnv.popupWrite,mCom.parentWindow.mEnv.sendAfterReview=mEnv.sendAfterReview,
mCom.parentWindow.mwSenderName&&!mCom.setDlSender&&mCom.parentWindow.mwSenderName.setSelectedItem(a.selectedFromName)),
mwSenderName&&!mCom.setDlSender&&mwSenderName.setSelectedItem(a.selectedFromName)};return{showWriteOptionLayer:b,
hideWriteOptionLayer:c,changeNewWindowRadio:e,changePreviewRadio:f,changeDelayTimeCheckbox:g,setWriteOptions:h
}}(),mwPreview=function(){function a(){var a=mwEditor.getEditorMode(),c=mwEditor.makeMailBody(),d={mailBody:c
};return a===mwEditor.TEXT_MODE&&(d.type="text"),myCore.hideAllLayer(),mwUploader.previewClicked(),mcCore.requestAjax({
fCallback:$Fn(b,this).bind(a),oParameter:d,sUrl:"/json/write/preview/"}),!0}function b(a,b){var c=$$.getSingle("#imageCaptureAirArea"),d=$Element("sar"),e=$Element("sendAfterReviewBg"),f=b.cleanBody,h=oWriteResponse.writeBody,i="";
if(c&&$Element(c).hide(),d.show(),e.show(),void 0!==h.footerUse&&"Y"===h.footerUse&&h.footerContent)if(a===mwEditor.TEXT_MODE){
var j=h.footerContent;j=$S(j).stripTags().$value(),i+=j}else i+="<br>"+h.footerContent+"<br>";$$.getSingle("#sar .pre_body").innerHTML=f+i,
g();var k=$Element($$.getSingle("#writePreviewSendOption")),l=$Element("writePreviewSendOptionReserve"),m=$Element("writePreviewSendOptionAddCal");
if(k.hide(),$Element("addCalBtn").hasClass("on")){k.show(),m.show();var n="",o="",p="";n+=$$.getSingle("#calStartDate").value+" ",
n+=$$.getSingle("#calStartHour").value+":",n+=$$.getSingle("#calStartMin").value+":00",o+=$$.getSingle("#calEndDate").value+" ",
o+=$$.getSingle("#calEndHour").value+":",o+=$$.getSingle("#calEndMin").value+":00",p+=$$.getSingle("#calLocation").value,
sCalendarVal=mcCore.replaceSpecialChar(n+" ~ "+o+" "+p),$Element("writePreviewAddCal").html(sCalendarVal);
}else m.hide();return mwReservation.isReservationDateSaved()?(k.show(),l.show(),mwReservation.showReservationTimeInPreview()):l.hide(),
$$.getSingle("#chk_preview"+mEnv.sendAfterReview).checked=!0,mcCore.isNaver()&&mcKoreanclick.getPreview(mwCore.oWriteForm.attachID),
setLcs("","write_preview"),setTimeout($Fn(function(){$("sendAfterReviewAnchor").focus()},this).bind(),300),
!0}function c(){if(myCore.hideAllLayer(),$Element("sendAfterReviewBg").show(),$$.getSingle("#readFrame").innerHTML=$$.getSingle("#contents").innerHTML,
$$.getSingle(".external_write_body")){var a=$$.getSingle(".external_write_body").value.replace(/\n/g,"<br>"),b=$Element($$.getSingle("#readFrame .external_write_body")).parent();
b&&b.html(a)}g();var c=$Element("sar");return c.show(),$Element($$.getSingle("#writePreviewAttachArea")).hide(),
$Element($$.getSingle("#writePreviewSendOption")).hide(),setLcs("","write_preview"),!0}function d(){
f();var a=$$.getSingle(".do_preview",$("writeBtnMenu"));return a&&$Element(a).visible()&&a.focus(),!0;
}function e(){f()}function f(){$Element($$.getSingle("#sar")).hide(),$Element("sendAfterReviewBg").hide();
var a=$$.getSingle("#imageCaptureAirArea");return a&&$Element(a).show(),!0}function g(){var a=$("priority").checked?'<img src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif" width="2" height="9" alt=""'+nLang.c.mark_mail+' class="ico_sendimp">':"",b=$$.getSingle("#writePreviewTitle"),c=$$.getSingle("#subject").value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;");
""===c?(c=nLang.c.type_the_subject,$Element(b).addClass("notitle")):$Element(b).removeClass("notitle"),
b.innerHTML=[a,c].join(""),b=null;var d;d=(isUseMultiDomain()||useDlSenderList())&&$("senderAddress")?mwSenderAddress.getSelectedItem():mcCore.getNaverEmailAddress(),
$$.getSingle("#writePreviewSender").innerHTML=mwSenderName.getSelectedItem()+" &lt"+d+"&gt";var e,f=$$("#toUL li._draggable ._addresObjViewText"),g=$$("#ccUL li._draggable ._addresObjViewText"),h=$$("#bccUL li._draggable ._addresObjViewText"),i="",j="",k="";
if($$.getSingle("#checkSeveral").checked&&(i="<span class='individual_mail'><strong>"+nLang.w.write_each+"</strong></span>",
i+=" "),f.length>0)for(e=0;e<f.length;e++)i+=f[e].innerHTML+";";if(g.length>0)for(e=0;e<g.length;e++)j+=g[e].innerHTML+";";
if(h.length>0)for(e=0;e<h.length;e++)k+=h[e].innerHTML+";";$$.getSingle("#writePreviewTo").innerHTML=i,
$$.getSingle("#writePreviewCc").innerHTML=j,$$.getSingle("#writePreviewBcc").innerHTML=k}function h(a){
var b={sendAfterReview:a};mcCore.requestAjax({fCallback:$Fn(i,this).bind(a),oParameter:b,sUrl:"/json/option/sendAfterReview/set/"
})}function i(a){mEnv.sendAfterReview=String(a)}return{showPreview:a,showPreviewAtExternal:c,setPreviewBeforeSend:h,
hidePreview:d,hidePreviewBo:e}}(),SenderNameClass=$Class({$autoBind:!0,$init:function(){this.$layer=$Element("senderNameSuggestLayer"),
this.$arrow=$Element("senderNameSuggestLayerShowLnk"),this.$listContainer=$Element($("senderNameSuggestLayerList")),
this.$listScroll=$Element($("senderNameSuggestLayerList")),this.itemTemplate="<li class='{senderSelected}'><a class='{defaultName} _c1(mwSenderName|_setFromName|{transFromName}) _ccr(wrh.{idomain}selectsender) _stopDefault' href='javascript:;'>{fromName}</a><a onclick='ccr(this, \"wrh.{idomain}delsender\", event)' class='{deleteKey} _stopDefault' href='javascript:;'><img class='deleteBtn' width='8' height='7' alt='"+nLang.c.del+"' src='https://"+wm.staticDomain+"/static/pwe/nm/b.gif'></a></li>",
this.$select=$Element("senderNameSelected"),this.$input=$Element("senderNameInput"),this.list=[]},init:function(a){
this.refreshListCallback(a)},refreshList:function(){var a={};mcCore.requestAjax({fCallback:$Fn(this.refreshListCallback,this).bind(),
oParameter:a,sUrl:"/json/option/write/get/"}),a=null},refreshListCallback:function(a){this.list=a.FromNameList,
mCom.setDlSender||this.setSelectedItem(a.selectedFromName),this.render()},render:function(){this.$super.render(this.getSelectedItem());
},makeItemHtml:function(a,b){var c=this.itemTemplate,d={};return c="N"===a.deleteKey||a.fromName===b?"<li class='{senderSelected}' data-value='{fromName}'><div><a class='{defaultName} _c1(mwSenderName|_setFromName|{transFromName}) _stopDefault' href='javascript:;'>{fromName}</a></div></li>":c.replace(/\{deleteKey\}/g,"btn_del _c1(mwSenderName|_deleteFromName|{fromSN}) pointer"),
d.senderSelected=a.fromName===b?"selected":"",d.defaultName="naverMailaddress"===a.fromSN?"username ":"",
d.fromSN=a.fromSN,d.deleteKey=a.deleteKey,d.fromName=mcCore.replaceSpecialChar(a.fromName),d.transFromName=escape(a.fromName),
d.idomain=useDlSenderList()?"domain":"",mcCore.template(c,d)},isSelectedItem:function(a){return a.fromName==this.getSelectedItem()?!0:!1;
},_toggleSenderNameSuggestLayer:function(){this.$layer.visible()?this.close():this.open()},open:function(){
mCom.setDlSender||this.$super.open("hide")},adjustLayer:function(){if(!mwCore.isUseMultiDomain()&&!mwCore.useDlSenderList()){
var a=$("senderNameDiv"),b=a.offsetLeft,c=a.offsetTop,d=a.offsetHeight;this.$layer.css(1==mCom.isPopup?{
left:b+20+"px",top:c+d+8+"px"}:{left:b+15+"px",top:c+d+8+"px"})}this.$super.adjustLayer()},_senderNameBlurHandler:function(a){
var b=a.value;if(b=mcCore.trim(b),""==b)return alert(nLang.w.type_fromname),!1;var c=/<|>|\\|"/;if(b&&c.test(b)){
var d=b.replace(/<|>|\\|"/g,"");return a.value=d,a.value=d,alert(nLang.w.cannot_use_special_char_fromname),
!1}for(var e=!1,f=this.list,g=0;g<f.length;g++)f[g].fromName==b&&(e=!0);if(e)return this.setSelectedItem(b),
!1;var h={fromName:b,deleteKey:!0};mcCore.requestAjax({fCallback:$Fn(this.blurAddSenderNameCallback,this).bind(b),
oParameter:h,sUrl:"/json/option/senderName/add/"}),h=null},blurAddSenderNameCallback:function(a,b){var c=b.FromNameList;
c.push({fromName:b.FromName}),this.list=c,this.setSelectedItem(a),$("displayInform").innerHTML=nLang.w.edit_fromname.replace("{Name}",a);
},_senderNameKeyDownHandler:function(a){var b=$Event(a);b.key().enter&&this._senderNameBlurHandler(b.element);
},_setFromName:function(a,b){this.close(),b=unescape(b),this.setSelectedItem(b)},_addFromName:function(){
var a=this.$input.$value(),b=a.value;b=mcCore.trim(b);for(var c=this.list,d=0;d<c.length;d++)if(c[d].fromName==b)return alert(nLang.o.already_exist_fromname),
b=null,void(c=null);var e=/<|>|\\|"/;if(""==b||b==nLang.c.directly_type)alert(nLang.o.type_fromname);else{
if(b&&e.test(b)){alert(nLang.w.cannot_use_special_char_fromname);var f=b.replace(/<|>|\\|"/g,"");return a.value=f,
!1}var g={fromName:b,deleteKey:!0};mcCore.requestAjax({fCallback:$Fn(this.addFromNameCallback,this).bind(b),
oParameter:g,sUrl:"/json/option/senderName/add/"}),g=null}b=null,c=null,a.value=""},addFromNameCallback:function(a){
var b=this.list;a=mcCore.trim(a);for(var c=0;c<b.length;c++)b[c].deleteKey="Y";b[b.length]={fromName:a,
deleteKey:"N"},this.setSelectedItem(a),this.close(),$("displayInform").innerHTML=nLang.w.edit_fromname.replace("{Name}",a);
},_deleteFromName:function(a,b){this.deleteFromList(b);var c={fromSN:b};mcCore.requestAjax({fCallback:$Fn(this.deleteFromNameCallback,this).bind(),
oParameter:c,sUrl:"/json/option/senderName/delete/"})},deleteFromList:function(a){for(var b=this.list,c=this.list.length,d=0;c>d;d++){
var e=b[d];if(a===e.fromSN)return void b.splice(d,1)}},deleteFromNameCallback:function(){this.render();
},close:function(){this.$super.close("hide")}}).extend(mSelect),mwSenderName=new SenderNameClass,SenderAddressClass=$Class({
$autoBind:!0,firstFromName:"",$init:function(){this.$layer=$Element("senderAddressSuggestLayer"),this.$arrow=$Element("senderAddressSuggestLayerShowLnk"),
this.$listContainer=$Element($("senderAddressList")),this.$listScroll=$Element($("senderAddressList")),
this.$div=$Element("senderAddressDiv"),this.itemTemplate='<li class="{Selected} {Dormancy}" {RollOverOut} data-value=\'{Value}\'><a class="{Click} {Ccr} _stopDefault" href="">{Value}</a></li>',
this.$select=$Element("senderAddress"),this.list=[]},init:function(a){this.list=[],this.firstFromName="",
this.$select&&(mwCore.useDlSenderList()||mwCore.isUseMultiDomain())&&(this.firstFromName=a.fromName,
this.initList(a),this.initSelectedAddress(a))},initList:function(a){var b=[],c={};a.idomainInfos&&(b=this._decodeIdomainInfos(a.idomainInfos)),
a.dlSenderList&&a.dlSenderList.length>0&&(b.length<1&&(c.email=mcCore.getNaverEmailAddress(),c.name="",
c.type="",b.push(c)),b=b.concat(a.dlSenderList)),this.list=b},_decodeIdomainInfos:function(a){for(var b=[],c=0;c<a.length;c++){
var d={},e=a[c];d.email=e.emailAddress,d.name="",d.type="",d.dormancy=e.dormancy,b.push(d)}return b},
initSelectedAddress:function(a){var b;"undefined"!=typeof a.primaryEmailAddr&&a.primaryEmailAddr&&(b=this.procDormacy(a.primaryEmailAddr)?mcCore.getNaverEmailAddress():a.iDomainEmail||a.primaryEmailAddr),
this.setSelectedAddress(b)},procDormacy:function(a){return a.dormancy?(alert(nLang.w.cannot_use_dormancy_idomain),
!0):void 0},_toggleSenderAddressSuggestLayer:function(){this.$layer.visible()?this.close():this.open();
},render:function(){this.$super.render(this.getSelectedItem())},makeItemHtml:function(a,b){var c=this.itemTemplate,d={};
return d.Value=a.email,d.Selected=b===a.email?"selected":"",d.Dormancy="",d.RollOverOut="onmouseout=\"$Element(this).removeClass('ovr');\" onmouseover=\"$Element(this).addClass('ovr');\"",
d.Click="_c1(mwSenderAddress|_selectSenderAddress|"+a.email+")",d.Ccr="",mcCore.template(c,d)},adjustLayer:function(){
{var a=this.$layer,b=this.$div,c=b.height()-1;b.offset().left}hideAllLayer(),a.css("left",0),a.css("top",c),
a.show(),mCom.aVisibleLayerList.push(a),this.$super.adjustLayer()},isSelectedItem:function(a){return a.email==this.getSelectedItem()?!0:!1;
},_selectSenderAddress:function(a,b){this.close(),b=decodeURIComponent(b),this.setSelectedAddress(b);
},setSelectedAddress:function(a){var b,c=this.getSelectedItem(),d=mwSenderName.getSelectedItem(),e=this.getType(c),f=this.getType(a);
a!==c&&(this.procDormacy(a)||("D"===f||"G"===f?(b=this.getDlName(a),mCom.setDlSender=!0):(b="D"===e||"G"===e?this.firstFromName:d,
mCom.setDlSender=!1),""!==b&&mwSenderName.setSelectedItem(b),this.setSelectedItem(a),mCom.sCurSignContents&&mwEditor.changeSenderAddress(a)));
},getType:function(a){for(var b=this.list,c=this.list.length,d=0;c>d;d++){var e=b[d];if(e.email===a)return e.typeCode;
}},getDlName:function(a){for(var b=this.list,c=this.list.length,d=0;c>d;d++){var e=b[d];if(e.email===a)return e.name;
}},getFirstFromName:function(){return this.firstFromName},open:function(){this.$super.open("hide")},
close:function(){this.$super.close("hide")}}).extend(mSelect),mwSenderAddress=new SenderAddressClass,
ToMeClass=$Class({$autoBind:!0,$init:function(){this.$writeContainer=$Element("cont_flex_area"),this.$tome=$Element($$.getSingle("#divWrite .notes_folder")),
this.$layer=$Element($$.getSingle("#noteFolder")),this.$listContainer=$Element($$.getSingle(".send_name",this.$layer)),
this.$listScroll=$Element($$.getSingle(".ly_notefolder",this.$layer)),this.$div=$Element($$.getSingle(".notes_folder .mInput_holder")),
this.$arrow=$Element($$.getSingle("#divWrite .notes_folder .btn_dropdown")),this.itemTemplate='<li class="_c1(mwTome|_selectTomeFolder|{folderSN}|\'{folderName}\') {Selected} _stopDefault" data-foldersn="{folderSN}" data-value="{folderSN}">   <a href="#">{folderName}</a></li>',
this.$select=$Element($$.getSingle(".notes_folder .folder_name")),this.list=[],this.selectedFromEmail="";
},_setSelectedFromEmail:function(a,b){this.selectedFromEmail=b},_toggleTome:function(a,b){var c=$$.getSingle("#checkSeveral"),d=$Element("sendBtn"),e=$Element("prevBtn"),f=$Element("noteBtn");
if(b||(b=mCom.bWriteTome?"off":"on"),"on"===b){if(!this.headerChangedConfirm())return;e.hide(),!this.$writeContainer.hasClass("write_tome")&&this.$writeContainer.addClass("write_tome"),
!d.hasClass("save_mail")&&d.addClass("save_mail"),d.text(nLang.c.save),f.text(nLang.w.write_mail),mCom.bWriteTome=!0,
c.checked=!1,c.disabled=!0,mwCalendar.delCal(null,!0),mwReservation.clearReservation(),this.selectedFromEmail=$$.getSingle("#senderAddress")?$$.getSingle("#senderAddress").value:"",
mwSenderAddress.setSelectedAddress(mcCore.getNaverEmailAddress()),(mcCore.isNcs()||mcCore.isNwe())&&$("security_level_area")&&(disableSecurityLevelArea(),
disableSecurityPeriodArea()),a&&$Element("changeWriteMode").removeClass("_ccr(wrt.memo)").removeClass("_ccr(wrt.writemail)").addClass("_ccr(wrt.writemail)"),
mcCore.isNaver()?$$.getSingle("#writeHeadDiv strong")&&$Element($$.getSingle("#writeHeadDiv strong")).html(nLang.m.btn_write2_tome):($$.getSingle("#cont_flex_area legend")&&$Element($$.getSingle("#cont_flex_area legend")).html(nLang.m.btn_write2_memo),
$$.getSingle("#writeHeadDiv strong")&&$Element($$.getSingle("#writeHeadDiv strong")).html(nLang.m.btn_write2_memo)),
this.init()}else{if(a&&!mEnv.validReplyTo&&!mCom.isWriteExternal&&!m.info.svcID)return void myCore.showInvalidReplyToLayer();
e.show(),this.$writeContainer.removeClass("write_tome"),d.removeClass("save_mail").html('<span class="buSend"></span>'+nLang.c.send),
f.text(nLang.w.write_tome),mCom.bWriteTome=!1,mwSenderAddress.setSelectedAddress(this.selectedFromEmail),
c.disabled=!1,(mcCore.isNcs()||mcCore.isNwe())&&("open"==mCom.initStatusSecurityLevel||"toMe"==mCom.orderType)&&($("security_level_normal")&&$("security_level_normal").checked?($Element("security_level_area").removeClass("disabled"),
$("security_level_secret").removeAttribute("disabled"),$("security_level_in_house").removeAttribute("disabled"),
$("security_level_normal").removeAttribute("disabled")):(activeSecurityLevelArea(),activeSecurityPeriodArea())),
a&&$Element("changeWriteMode").removeClass("_ccr(wrt.memo)").removeClass("_ccr(wrt.writemail)").addClass("_ccr(wrt.memo)"),
mcCore.isNaver()?$$.getSingle("#writeHeadDiv strong")&&$Element($$.getSingle("#writeHeadDiv strong")).html(nLang.m.btn_write2):($$.getSingle("#cont_flex_area legend")&&$Element($$.getSingle("#cont_flex_area legend")).html(nLang.m.btn_write2),
$$.getSingle("#writeHeadDiv strong")&&$Element($$.getSingle("#writeHeadDiv strong")).html(nLang.m.btn_write2));
}"on"===b&&this.list&&this.list.length>1?this.$tome.show():this.$tome.hide(),$$.getSingle("#write_template_btn")&&mwTemplate.toggleTemplateBtn("off"!==b||"new"!=oWriteResponse.writeBody.orderType&&"toMe"!=oWriteResponse.writeBody.orderType?"toMe":"new"),
maCore.clickSendMe(),mwCore.resizeEditorHeight(),setTimeout(function(){document.title=(mCom.bWriteTome?nLang.w.write_tome:nLang.w.write_mail)+" : "+mcCore.getServiceTitle();
},50)},headerChangedConfirm:function(){var a=!1;return a=!($("to").value+$("cc").value+$("bcc").value==""),
!a&&$Element("security_level_normal")&&(a=!$Element("security_level_normal").attr("checked")),!a&&$Element("calPreview")&&(a=$Element("calPreview").visible()),
!a&&$Element("reservedLayer")&&(a=$Element("reservedLayer").visible()),a&&!confirm(nLang.w.change_normal_to_tome)?!1:!0;
},init:function(){this.list=mwCore.aTomeFolders,this.getFolderNameWithPath(this.list);try{mCom.isPopup&&opener&&opener.mCom&&(mCom.nCurrentFolder=opener.mCom.nCurrentFolder,
"edit"==mCom.orderType&&isNaN(mCom.nCurrentFolder)&&(mCom.nCurrentFolder=opener.mCom.popupReadFolderSN));
}catch(a){}this.setSelectedFolder(6!==mCom.nCurrentFolder&&parseInt(mCom.nCurrentFolder,10)<1e7&&"edit"!=mCom.orderType?mwCore.nLastTomeFolder:mCom.nCurrentFolder);
},getFolderNameWithPath:function(a){for(var b,c=a.length,d=0;c>d;d++){var e=a[d];if(-1!=e.folderName.indexOf("/")){
var f=e.folderName.split("/");b=f[f.length-1];for(var g="",h=0;h<f.length;h++)g+="..";b=g+"/"+b}else b=6==e.parentFolderSN?"../"+e.folderName:e.folderName;
e.folderNameWithPath=b}},_toggleTomeLayer:function(){this.$layer.visible()?this.close():this.open()},
render:function(){this.$super.render(this.getSelectedItem())},makeItemHtml:function(a,b){var c=this.itemTemplate,d={};
return d.folderSN=a.folderSN,d.folderName=a.folderNameWithPath,d.Selected=Number(a.folderSN)===Number(b)?"selected":"",
mcCore.template(c,d)},adjustLayer:function(){myCore.adjustLayer($$.getSingle("#divWrite .notes_folder .mInput_holder"),this.$layer,"downward","left"),
this.$super.adjustLayer()},isSelectedItem:function(a){return Number(a.folderSN)===Number(this.getSelectedItem())?!0:!1;
},_selectTomeFolder:function(a,b){this.close(),this.setSelectedFolder(b)},setSelectedFolder:function(a){
for(var b=this.list,c=this.list.length,d=0;c>d;d++){var e=b[d];Number(e.folderSN)===Number(a)&&this.$select&&this.$select.html(e.folderNameWithPath).attr("data-foldersn",e.folderSN);
}this.setSelectedItem(a)},open:function(){this.$super.open("hide")},close:function(){this.$super.close("hide");
}}).extend(mSelect),mwTome=new ToMeClass,msCore=function(){_htResponse={ResultMessage:"",DelayDeliveryMessageInDetail:"",
ReserveMessageInDetail:"","SenderCalendarUrlMessage ":"",MessageInDetail:"",DraftSavedMessage:"",OptionalLink:"",
Shortcut:"",AddresAddValidate:"",AddressListSuccessJSON:null,SuccessList:null,UserName:"",UserId:"",
SmsList:"",toMeFolderSN:"",toMeFolderName:"",iconType:""},_oAddressComponent=null,_htSendresultTemplate={
directMsgView:['<a href="javascript:;" class="_c1(msCore|forwardList|{FolderSN}) {ClickCrGoinBox} _stopDefault">{FolderName}</a>','<span class="bar"> | </span>','<a href="javascript:;" class="_c1(msCore|forwardWrite|{WriteType}) {ClickCrGoWrite} _stopDefault">{WriteName}</a>'],
svrMsgView:['<div id="hbeanLeverageLayer" style="z-index:101; position:absolute; top:0px; right:50%; overflow:hidden; display:block;"></div>','<div class="svrMsg">',"{SendResultIcon}","<h4>{ResultMessage}</h4>","<p class='desc'>","{DetailMessagesWithNewLine}","</p>","{OptionalLink} {AddresAddValidate}","{Shortcut}","</div>"],
addressComponentView:['<div id="addressComponentView" style="margin:0 auto;width:330px;display:{DisplayAddressComponentView}"></div>'],
mailOkView:['<table cellspacing="0" class="mailOk" summary="'+nLang.w.send_mail_end+'">',"<tr>",'<td class="AD"><iframe id="mailSendAd" name="mailSendAd" src="https://veta.naver.com/fxshow?su=SU10074" data-veta-preview="mail_end" width="280" height="240" title="'+nLang.c.ad+'" border="0" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">'+nLang.w.cannot_support_iframe+"</iframe></td>","</tr>","</table>"],
mailOkView4fromMeForNCS:['<table cellspacing="0" class="mailOk" summary="'+nLang.w.send_mail_end+'">',"<tr>","<td></td>","</tr>","</table>"]
},_aSmsTemplate=["<tr>",'<input type="hidden" name="repEmailAddress" value="{repEmailAddress}" />','<td><div class="tf_name" style="width:140px;"><input type="text" name="email" value="{UserName}"></div></td>','<td><div class="tf_phone" style="width:99px;"><input type="text" name="phoneNumber"  onkeyup="this.value=this.value.replace(/[^0-9]+/g,\'\');" value="{repTelephoneNo}" maxlength=13  style="ime-mode:disabled"><a href="javascript:;" onclick="ccr(this, \'wrc.delnum\', event);" class="rm_btn"><img src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif" alt="'+nLang.c.del_3+'" width="6" height="5" onclick="$Element(this).parent().parent().child()[0].$value().value = \'\';return false;"></a></div></td>',"</tr>"],
_fpUtilTemplate=mcCore.template,_ahtReceiver="",_sReceiverList="",getSendresult=function(a){-1==location.hash.indexOf("#sendResult")&&(location.hash+="#sendResult");
var b;mwCore.clearAutoSave();var c=_htResponse;if(c.ResultMessage="",c.DelayDeliveryMessageInDetail="",
c.ReserveMessageInDetail="",c.SenderCalendarUrlMessage="",c.MessageInDetail="",c.DraftSavedMessage="",
c.OptionalLink="",c.Shortcut="",c.AddresAddValidate="",c.AddressListSuccessJSON=null,c.SuccessList=null,
c.UserName="",c.UserId="",c.SmsList="",c.toMeFolderName="",c.toMeFolderSN="",c.iconType="",_setResponseData(a),
_hideWriteAreaForSendResult(),mCom.oAutoSaveInterval&&clearInterval(mCom.oAutoSaveInterval),mCom.isWriting=!1,
b=_makeSendResultHtml(),_showSendresult(b,a),mcCore.isNaver()&&a.AddressListSuccessJSON){var d=_refineAddressList(a.AddressListSuccessJSON);
_oAddressComponent.exec(d)}if(mUtil.addHotkey("sendResult"),m.info.callbackUrl&&(20==a.SendMode||30==a.SendMode||50==a.SendMode)&&($$.getSingle("#uploadFile").src=m.info.callbackUrl),
b=null,a.messageID){try{mCom.isPopup&&opener&&opener.myCore?opener.myCore.showSendCancelConfirmLayer(null,a.messageID,a.sentboxSaved,a.delayTime):myCore.showSendCancelConfirmLayer(null,a.messageID,a.sentboxSaved,a.delayTime);
}catch(e){}var f=$Element("sendresult_cancellink");isNaver()&&f&&setTimeout(function(){f.hide()},1e3*(a.delayTime-1));
}},_refineAddressList=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e={contactNo:0,content:d.email,
name:d.name,type:"EMAIL"};b.push(e),e=null}return b},forwardList=function(b,c){if(mCom.isPopup)try{var d=a();
d&&d.mlCore&&d.mlCore.beforeUpdateList(b,c,window),self.close()}catch(e){window.open("/list/"+c,"MAIL","width=1024,height=768,resizable=yes,scrollbars=yes"),
self.close()}else mlCore.updateList(b,c)},forwardWrite=function(b,c){if(mCom.isPopup)try{var d=a();d&&d.mfCore&&d.mfCore.beforePopupWrite(b,c,window);
}catch(e){}else mfCore.popupWrite(b,c)},forwardOption=function(b,c){if(mCom.isPopup)try{var d=a();d&&d.moCore&&d.moCore.showOptionLayer(b,c),
self.close()}catch(e){}else mUtil.showMeOptionPage(b.element,c)},_checkValidation=function(){var a,b=_getResponseData();
if(50!=b.SendMode)if(mcCore.isNaver()&&"undefined"!=typeof b.AddressListSuccessJSON&&null!=b.AddressListSuccessJSON){
b.DisplayAddressComponentView="block",_ahtReceiver=b.AddressListSuccessJSON;var c=b.AddressListSuccessJSON.length;
for(_sReceiverList="",a=0;c>a;a++)0!=a&&(_sReceiverList+=","),""!=b.AddressListSuccessJSON[a].name?(_sReceiverList+='"'+b.AddressListSuccessJSON[a].name+'"',
_sReceiverList+="<"+b.AddressListSuccessJSON[a].email+">"):_sReceiverList+=b.AddressListSuccessJSON[a].email;
}else b.DisplayAddressComponentView="none";else b.DisplayAddressComponentView="none";""==b.UserName&&(b.UserName=b.UserEmail),
_setResponseData(b)},_getAttachID=function(){return mwCore.oWriteForm.attachID.value},_getResponseData=function(){
return _htResponse},_setResponseData=function(a){for(var b in a)_htResponse[b]=a[b]},_hideWriteAreaForSendResult=function(){
mCom.isPopup?($Element($$.getSingle(".mailListBtn")).hide(),$Element("cont_flex_area").hide()):($Element("writeWrap").hide(),
$Element("writeBtnMenu").hide(),mcCore.adjustTopOfFlexArea())},_makeButtonHtml=function(){if("toolbar"==m.info.svcID||"directmail"==m.info.svcID||"ndrive"==m.info.svcID||"map"==m.info.svcID)return"";
try{if("undefined"!=typeof curPageName&&"index"==curPageName);else if(mCom.isPopup){if("undefined"==typeof opener)return"";
if("undefined"!=typeof opener.curPageName&&"index"==opener.curPageName);else{if("undefined"==typeof opener.opener)return"";
if("undefined"==typeof opener.opener.curPageName||"index"!=opener.opener.curPageName)return""}}}catch(a){
return""}var b=_getResponseData(),c=_htSendresultTemplate.directMsgView.join("");if("inbox"==b.shortcut_1)b.FolderSN="0",
b.FolderName=nLang.w.go_inbox,b.ClickCrGoinBox="_ccr(wrc.goinbox)";else if("draft"==b.shortcut_1)b.FolderSN="3",
b.FolderName=nLang.w.go_draft,b.ClickCrGoinBox="_ccr(wrc.goinbox)";else{if("tome"!=b.shortcut_1)return"";
b.FolderSN=b.toMeFolderSN||"6",b.FolderName=nLang.w.go_tome,b.ClickCrGoinBox="_ccr(wrc.goinboxme)"}"write"==b.shortcut_2?(b.WriteType="new",
b.WriteName=nLang.w.write_mail,b.ClickCrGoWrite="_ccr(wrc.gowrite)"):"tome_write"==b.shortcut_2&&(b.WriteType="toMe",
b.WriteName=nLang.w.write_tome,b.ClickCrGoWrite="_ccr(wrc.gowritetome)");var d=_fpUtilTemplate(c,b);return d;
},_makeSendResultHtml=function(){var a,b;_checkValidation();var c=_getResponseData(),d=c.DelayDeliveryMessageInDetail+c.ReserveMessageInDetail+c.SenderCalendarUrlMessage+c.OptionalLink+c.AddresAddValidate+c.SenderCalendarUrlMessage+c.DraftSavedMessage;
""===d&&(c.Shortcut="<p id='srShortcut' class='link_cover'></p>"),c.MessageInDetail.indexOf('<span class="email_type"')>-1&&(c.DraftSavedMessage="");
var e="";return c.iconType&&(e="complete_"+c.iconType,"fail"===c.iconType&&(c.ResultMessage="<strong>"+c.ResultMessage+"</strong>")),
c.SendResultIcon=e?'<span class="'+e+'"></span>':"",c.DetailMessagesWithNewLine=[c.ReserveMessageInDetail?c.ReserveMessageInDetail:"",c.SenderCalendarUrlMessage?c.SenderCalendarUrlMessage:"",c.MessageInDetail?c.MessageInDetail:"",c.DraftSavedMessage?c.DraftSavedMessage:"",c.DelayDeliveryMessageInDetail?c.DelayDeliveryMessageInDetail:""],
c.DetailMessagesWithNewLine=$A(c.DetailMessagesWithNewLine).filter(function(a){return a}).$value().join("<br> "),
a=_htSendresultTemplate.svrMsgView.join(""),b=_fpUtilTemplate(a,c),a=_htSendresultTemplate.addressComponentView.join(""),
b+=_fpUtilTemplate(a,c),40!=c.SendMode&&(a=mcCore.isNaver()?_htSendresultTemplate.mailOkView.join(""):50==c.SendMode?_htSendresultTemplate.mailOkView4fromMeForNCS.join(""):"",
b+=_fpUtilTemplate(a,c)),a=sTmpHtml=c=i=nLen=null,b},_showSendresult=function(b,c){var d=c.SendMode,e=c.iconType;
mCom.isPopup&&$Element("sendresultDivContent").css("borderTop","0"),$Element("sendresultDivContent").show();
var f=$Element("sendresultDivContent").html(b).query("#srShortcut"),g=$Element("sendresultDivContent").query(".email_type");
if(f&&!g){var h=_makeButtonHtml();f.html(h)}else g&&g.text(g.text().replace(/[\[\]]/g,""));if(mcCore.isNaver()&&(_oAddressComponent=new nhn.contact.Save("addressComponentView",{
serviceType:"MAIL",domain:"/addressComponent",groupListHeight:200})),mcCore.isNaver()){var i=_getAttachID();
mcKoreanclick.getSendresult(i),i=null}(20==d||50==d)&&setTimeout($Fn(function(){if(mcCore.isNcs()||mcCore.isNwe())if(mCom.isPopup)try{
var b=a();if(b&&opener.mfCore){if(50==d){var c=_getResponseData();b.mfCore.clickFolder(null,c.toMeFolderSN);
}b.mfCore.updateFolder()}top.close()}catch(e){top.close()}else $Element("sendresultDivContent").visible()&&mlCore.refreshList();else if(mCom.isPopup)try{
var b=a();b&&b.mfCore&&b.mfCore.updateFolder()}catch(e){}else mfCore.updateFolder()},this).bind(),"reserve"==e||"delay"==e?3e3:2e3),
setLcs("","write_send")};var a=function(){return mCom.isPopup?opener.mCom.isPopup?opener.opener:opener:void 0;
};return{getSendresult:getSendresult,forwardList:forwardList,forwardWrite:forwardWrite,forwardOption:forwardOption
}}(),jindo.Component_contact=jindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){var a=this.constructor.getInstance();
a.push(this),this._htEventHandler={},this._htOption={},this._htOption._htSetter={}},option:function(a,b){
switch(typeof a){case"undefined":return this._htOption;case"string":if("undefined"==typeof b)return this._htOption[a];
if("htCustomEventHandler"==a){if("undefined"!=typeof this._htOption[a])return this;this.attach(b)}this._htOption[a]=b,
"function"==typeof this._htOption._htSetter[a]&&this._htOption._htSetter[a](b);break;case"object":for(var c in a){
if("htCustomEventHandler"==c){if("undefined"!=typeof this._htOption[c])continue;this.attach(a[c])}this._htOption[c]=a[c],
"function"==typeof this._htOption._htSetter[c]&&this._htOption._htSetter[c](a[c])}}return this},optionSetter:function(a,b){
switch(typeof a){case"undefined":return this._htOption._htSetter;case"string":if("undefined"==typeof b)return this._htOption._htSetter[a];
this._htOption._htSetter[a]=jindo.$Fn(b,this).bind();break;case"object":for(var c in a)this._htOption._htSetter[c]=jindo.$Fn(a[c],this).bind();
}return this},fireEvent:function(a,b){b=b||{};var c=this["on"+a],d=this._htEventHandler[a]||[],e="function"==typeof c,f=d.length>0;
if(!e&&!f)return!0;d=d.concat(),b.sType=a,"undefined"==typeof b._aExtend&&(b._aExtend=[],b.stop=function(){
b._aExtend.length>0&&(b._aExtend[b._aExtend.length-1].bCanceled=!0)}),b._aExtend.push({sType:a,bCanceled:!1
});var g,h,i=[b];for(g=2,h=arguments.length;h>g;g++)i.push(arguments[g]);if(e&&c.apply(this,i),f){var j;
for(g=0,j;j=d[g];g++)j.apply(this,i)}return!b._aExtend.pop().bCanceled},attach:function(a,b){if(1==arguments.length)return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(a,b){
this.attach(b,a)},this).bind()),this;var c=this._htEventHandler[a];return"undefined"==typeof c&&(c=this._htEventHandler[a]=[]),
c.push(b),this},detach:function(a,b){if(1==arguments.length)return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(a,b){
this.detach(b,a)},this).bind()),this;var c=this._htEventHandler[a];if(c)for(var d,e=0;d=c[e];e++)if(d===b){
c=c.splice(e,1);break}return this},detachAll:function(a){var b=this._htEventHandler;if(arguments.length)return"undefined"==typeof b[a]?this:(delete b[a],
this);for(var c in b)delete b[c];return this}}),jindo.Component_contact.factory=function(a,b){var c,d=[];
"undefined"==typeof b&&(b={});for(var e,f=0;e=a[f];f++)c=new this(e,b),d[d.length]=c;return d},jindo.Component_contact.getInstance=function(){
return"undefined"==typeof this._aInstance&&(this._aInstance=[]),this._aInstance},jindo.UIComponent_contact=jindo.$Class({
$init:function(){this._bIsActivating=!1},isActivating:function(){return this._bIsActivating},activate:function(){
return this.isActivating()?this:(this._bIsActivating=!0,arguments.length>0?this._onActivate.apply(this,arguments):this._onActivate(),
this)},deactivate:function(){return this.isActivating()?(this._bIsActivating=!1,arguments.length>0?this._onDeactivate.apply(this,arguments):this._onDeactivate(),
this):this}}).extend(jindo.Component_contact),jindo.Timer_contact=jindo.$Class({$init:function(){this._nTimer=null,
this._nLatest=null,this._nRemained=0,this._nDelay=null,this._fRun=null,this._bIsRunning=!1},start:function(a,b){
return this.abort(),this._nRemained=0,this._nDelay=b,this._fRun=a,this._bIsRunning=!0,this._nLatest=this._getTime(),
this.fireEvent("wait"),this._excute(this._nDelay,!1),!0},isRunning:function(){return this._bIsRunning;
},_getTime:function(){return(new Date).getTime()},_clearTimer:function(){var a=!1;return this._nTimer&&(clearInterval(this._nTimer),
this._bIsRunning=!1,a=!0),this._nTimer=null,a},abort:function(){var a=this._clearTimer();return a&&(this.fireEvent("abort"),
this._fRun=null),a},pause:function(){var a=this._getTime()-this._nLatest;return this._nRemained=Math.max(this._nDelay-a,0),
this._clearTimer()},_excute:function(a,b){var c=this;this._clearTimer(),this._bIsRunning=!0,this._nTimer=setInterval(function(){
if(c._nTimer){c.fireEvent("run");var a=c._fRun();if(c._nLatest=c._getTime(),!a)return clearInterval(c._nTimer),
c._nTimer=null,c._bIsRunning=!1,void c.fireEvent("end");c.fireEvent("wait"),b&&c._excute(c._nDelay,!1);
}},a)},resume:function(){return!this._fRun||this.isRunning()?!1:(this._bIsRunning=!0,this.fireEvent("wait"),
this._excute(this._nRemained,!0),this._nRemained=0,!0)}}).extend(jindo.Component_contact),jindo.WatchInput_contact=jindo.$Class({
_bTimerRunning:!1,_bFocused:!1,_sPrevValue:"",$init:function(a,b){var c={nInterval:100,bUseTimerOnIE:!1,
sKeyEvent:"keyup",bPermanent:!1,bActivateOnload:!0};this.option(c),this.option(b||{}),this._elInput=jindo.$(a),
this._oTimer=new jindo.Timer_contact,this._bIE=jindo.$Agent().navigator().ie,this._wfFocus=jindo.$Fn(this._onFocus,this),
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
this}}).extend(jindo.UIComponent_contact),jindo.LayerManager_contact=jindo.$Class({_bIsActivating:!1,
_bIsHiding:!1,_bIsShowing:!1,_aLink:null,$init:function(a,b){this.option({sCheckEvent:"click",nCheckDelay:100,
nShowDelay:0,nHideDelay:100}),this.option(b||{}),this.setLayer(a),this._aLink=[],this._oShowTimer=new jindo.Timer_contact,
this._oHideTimer=new jindo.Timer_contact,this._oEventTimer=new jindo.Timer_contact,this._wfOnEvent=jindo.$Fn(this._onEvent,this),
this.getVisible(),this.activate()},_onActivate:function(){this._wfOnEvent.attach(document,this.option("sCheckEvent"));
},_onDeactivate:function(){this._wfOnEvent.detach(document,this.option("sCheckEvent"))},getVisible:function(){
return this._wel.visible()},_check:function(a){for(var b,c,d=jindo.$Element(a),e=0;b=this._aLink[e];e++)if(c=jindo.$Element(b),
c&&(b=c.$value(),b&&(a==b||d.isChildOf(b))))return!0;return!1},_find:function(a){for(var b,c=0;b=this._aLink[c];c++)if(b==a)return c;
return-1},getLayer:function(){return this._el},setLayer:function(a){return this._el=jindo.$(a),this._wel=jindo.$Element(a),
this},getLinks:function(){return this._aLink},setLinks:function(a){return this._aLink=jindo.$A(a).unique().$value(),
this},link:function(a){if(arguments.length>1){for(var b=0,c=arguments.length;c>b;b++)this.link(arguments[b]);
return this}return-1!=this._find(a)?this:(this._aLink.push(a),this)},unlink:function(a){if(arguments.length>1){
for(var b=0,c=arguments.length;c>b;b++)this.unlink(arguments[b]);return this}var d=this._find(a);return d>-1&&this._aLink.splice(d,1),
this},_fireEventBeforeShow:function(){return this.fireEvent("beforeShow",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()
})},_fireEventShow:function(){this._bIsShowing=!1,this.fireEvent("show",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()
})},_fireEventBeforeHide:function(){var a=this.fireEvent("beforeHide",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()
});return a||(this._bIsHiding=!1),a},_fireEventHide:function(){this._bIsHiding=!1,this.fireEvent("hide",{
elLayer:this.getLayer(),aLinkedElement:this.getLinks()})},_show:function(a,b){this._oEventTimer.abort(),
this._bIsShowing=!0,this._bIsHiding=!1,b>0?this._oShowTimer.start(a,b):(this._oHideTimer.abort(),a());
},_hide:function(a,b){this._bIsShowing=!1,this._bIsHiding=!0,b>0?this._oHideTimer.start(a,b):(this._oShowTimer.abort(),
a())},show:function(a){"undefined"==typeof a&&(a=this.option("nShowDelay"));var b=this;return this._show(function(){
b.getVisible()||b._fireEventBeforeShow()&&(b._wel.show(),b._fireEventShow())},a),this},hide:function(a){
"undefined"==typeof a&&(a=this.option("nHideDelay"));var b=this;return this._hide(function(){b.getVisible()&&b._fireEventBeforeHide()&&(b._wel.hide(),
b._fireEventHide())},a),this},toggle:function(a){return!this.getVisible()||this._bIsHiding?this.show(a||this.option("nShowDelay")):this.hide(a||this.option("nHideDelay")),
this},_onEvent:function(a){var b=a.element,c=this;this._oEventTimer.start(function(){!c._bIsHiding&&c.getVisible()&&(c._check(b)?c._bIsShowing||(c.fireEvent("ignore",{
sCheckEvent:c.option("sCheckEvent")}),c._oHideTimer.abort(),c._bIsHiding=!1):"undefined"!=typeof b.tagName&&c.hide());
},this.option("nCheckDelay"))}}).extend(jindo.UIComponent_contact),"undefined"==typeof nhn&&(nhn={}),
"undefined"==typeof nhn.contact&&(nhn.contact={}),"undefined"==typeof nhn.contact.language&&(nhn.contact.language={}),
"undefined"==typeof nhn.contact.markup&&(nhn.contact.markup={}),"undefined"==typeof nhn.contact.option&&(nhn.contact.option={}),
nhn.contact.version={query:function(a,b){return this.query=this._isJindo2()?function(a,b){return $Element(a).query(b);
}:function(a,b){return $Element($Element(a).query(b))},this.query(a,b)},attach:function(a,b,c){this.attach=this._isJindo2()?function(a,b,c){
return $Element(a).attach(b,c)}:function(a,b,c){return $Fn(c).attach(a,b)},this.attach(a,b,c)},mouseEnter:function(){
return!this._isJindo2()||("2.0.0"==$Jindo().version||"2.0.1"==$Jindo().version)&&$Agent().navigator().ie===!0&&$Agent().navigator().version>=9?"mouseover":"mouseenter";
},mouseLeave:function(){return!this._isJindo2()||("2.0.0"==$Jindo().version||"2.0.1"==$Jindo().version)&&$Agent().navigator().ie===!0&&$Agent().navigator().version>=9?"mouseout":"mouseleave";
},_isJindo2:function(){var a=$Jindo().version;return 1*a.substring(0,a.indexOf("."))>=2},preventTapHighlight:function(a){
if(a){var b=$Element(a);if(this._isJindo2())b.preventTapHighlight(!0);else if(this.isMobileDevice()){
var c="no_tap_highlight"+(new Date).getTime(),d=document.createElement("style"),e=document.getElementsByTagName("html")[0];
d.type="text/css",e.insertBefore(d,e.firstChild);var f=d.sheet||d.styleSheet;f.insertRule("."+c+" { -webkit-tap-highlight-color: rgba(0,0,0,0); }",0),
f.insertRule("."+c+" * { -webkit-tap-highlight-color: rgba(0,0,0,.25); }",0)}}},isMobileDevice:function(){
var a=$Agent().navigator().userAgent,b=/(iPad|Mobile|Android|Nokia|webOS|BlackBerry|Opera Mini)/.test(a);
return b}},nhn.contact.utils={_versioin:"5.0",_oAjax:{},setLanguage:function(a){this._oLanguage=a},setServiceType:function(a){
if(this.isEmpty(a))throw alert("서비스명이 정의되지 않았습니다."),{};this._sServiceType=a},ajaxCall:function(a,b){
a.oParam=a.oParam||{};var c=a.fCallback,d=a.fErrorCallback;"function"!=typeof d&&(d=$Fn(function(){alert(this._oLanguage.connectError);
},this).bind()),b&&(c=$Fn(c,b).bind(),d=$Fn(d,b).bind());try{this._oAjax[a.sTicket].abort()}catch(e){}
a.oParam.version=this._versioin,a.oParam.serviceTypeCode=this._sServiceType,this._oAjax[a.sTicket]=new $Ajax(a.sUrl,{
type:"xhr",method:"post",timeout:a.nTimeout||0,onload:$Fn(function(b){if(200==b.status())if(a.bJson===!1)c(b.text());else{
var e=b.json();"success"==e.code.toLowerCase()?c(e.data):this._errorAjax(e.message,d)}else this._errorAjax(this._oLanguage.connectError,d);
},this).bind(),onerror:$Fn(function(){this._errorAjax(this._oLanguage.connectError,d)},this).bind(),
ontimeout:$Fn(function(){this._errorAjax(this._oLanguage.connectError,d)},this).bind()}),this._oAjax[a.sTicket].request(a.oParam);
},_errorAjax:function(a,b){"function"==typeof b?b():alert(a)},loadLanguage:function(a){var b=nhn.contact.language[a];
return void 0===b&&alert(a+" 언어 파일이 없습니다."),b},attachDefaultTextEvent:function(a,b){if(!this.isEmpty(b)){
var c=$Element(a);c.attr("data-default",b),nhn.contact.version.attach(a,"focus",function(a){var b=$Element(a.element);
b.hasClass("nodata")&&(b.text(""),b.removeClass("nodata"))}),nhn.contact.version.attach(a,"blur",function(a){
var b=$Element(a.element);nhn.contact.utils.isEmpty(b.text())&&(b.text(b.attr("data-default")),b.addClass("nodata"));
}),c.fireEvent("blur")}},parentByClass:function(a,b){for(var c=$Element(a);null!==c;){if(c.hasClass(b))return c;
c=c.parent()}},isEmpty:function(a){switch(typeof a){case"string":return""==$S(a).trim().toString();case"object":
return null===a?!0:a instanceof Array?0===$A(a).length():"[object Object]"!=Object.prototype.toString.call(a)||a.nodeType||a!=window&&a!=window.top?!1:0===$H(a).length();
case"undefined":return!0;case"number":return!1;default:throw"사용할 수 없는 타입 입니다"}},isNotEmpty:function(a){
return!this.isEmpty(a)}},nhn.contact.Contact=$Class({nIndex:0,TYPE:{NAME:"NAME",EMAIL:"EMAIL",CELLPHONE:"CELLPHONE",
NAVERID:"NAVERID",NCSID:"NCSID"},NAVER_EMAIL_DOMAIN:"@naver.com",$init:function(a,b,c,d,e,f){this._nNo=nhn.contact.Contact.prototype.nIndex++,
this._nContactNo=a||0,this._sName=b||"",this._sContent=c||"",this._sType=this._findType(c),this._bImportant=e===!0,
this._sType==this.TYPE.NAVERID&&d===!0&&(this._sType=this.TYPE.EMAIL,this._sContent=this._sContent+this.NAVER_EMAIL_DOMAIN),
this._bNaverId=!1,(this._sType==this.TYPE.NAVERID||this._sType==this.TYPE.EMAIL&&this._sContent.indexOf(this.NAVER_EMAIL_DOMAIN)>-1&&-1==this._sContent.indexOf("+"))&&(this._sContent=this._sContent.toLowerCase(),
this._bNaverId=!0,this._sNaverId=this._sContent.replace(this.NAVER_EMAIL_DOMAIN,"")),this._bLock=f||!1;
},_findType:function(a){var b=this.TYPE,c=b.NAVERID;a=a.replace(/\s/g,"");var d=/^(([0-9])|(-)|(\+))+$/;
return d.test(a)?c=b.CELLPHONE:a.indexOf("@")>-1&&(c=b.EMAIL),c},values:function(){var a={};return a.contactNo=this._nContactNo,
a.name=this._sName,a.content=this._sContent,a.type=this._sType,a.no=this._nNo,a},getContactNo:function(){
return this._nContactNo},setContactNo:function(a){this._nContactNo=a},getName:function(){return this._sName;
},setName:function(a){this._sName=a},getContent:function(){return this._sContent},setContent:function(a){
this._sContent=a},getType:function(){return this._sType},setType:function(a){this._sType=a},isNaverId:function(){
return this._bNaverId},getNaverId:function(){return this._sNaverId},getNo:function(){return this._nNo;
},isImportant:function(){return this._bImportant},setLock:function(a){this._bLock=a},isLock:function(){
return this._bLock}}),nhn.contact.language.ko_KR={mainTitle:"주소록 입력",mainInputLabel:"이름, 연락처 입력",contact:"주소록",
connectError:"일시적으로 접속이 원활하지 않습니다.\n잠시 후에 다시 시도해주세요.",invalidCellphone:"잘못된 휴대폰 형식입니다.\n다시 한번 확인하세요.",
invalidEmail:"잘못된 이메일 형식입니다.\n다시 한번 확인하세요.",invalidNaverId:"네이버아이디는 3~12자의 영문과 숫자, _만 사용할 수 있습니다.",noPhone:"전화번호는 입력하실 수 없습니다.",
noNaverId:"네이버 아이디는 입력하실 수 없습니다.",noEmail:"이메일은 입력하실 수 없습니다.",duplication:"동일한 연락처가 존재합니다.",overCount:"받는 사람은 {=count}명을 초과 할 수 없습니다.",
unlimited:"무제한",noname:"이름없음",menuRecent:"최근 사용한 연락처",menuImportant:"중요 연락처",menuGroup:"그룹",menuBlogGroup:"이웃블로그",
menuAll:"전체 연락처",overCountGroupInsert:"추가할 수 있는 연락처 {=count}개를 초과하여\n그룹을 추가할 수 없습니다.",duplicationExcept:"동일한 연락처를 제외하고 목록에 추가했습니다.",
invalidExcept:"유효하지 않은 연락처를 제외하고 목록에 추가했습니다.",bothExcept:"동일한 연락처와 유효하지 않은 연락처를 제외하고\n목록에 추가했습니다.",notExistNaverId:"존재하지 않는 네이버ID입니다.",
mainLoadingMessage:"<strong>연락처를</strong>&nbsp;추가하는 중입니다.",notEmptyInput:"입력창에 추가되지 않은 연락처가 있습니다.\n연락처를 추가하려면 + 버튼을 눌러주세요.",
nocontact:"연락처없음",overInputLenth:"입력가능한 글자수({=length}자)를 초과하였습니다.",insertName:"이름입력",checkSendContact:"<strong>보낸 연락처</strong> 확인 중 입니다.",
addNewGroup:"새 그룹 추가",noUpdateName:"주소록에 저장할 이름을 입력해 주세요.",noUpdateNameGroup:"이름있는 연락처만 그룹으로 지정할 수 있습니다.\n",
partUpdateName:"이름없는 연락처 {=noname}개를 제외한\n{=update}개의 연락처만 주소록에 저장하시겠습니까?",partUpdateGroup:"이름없는 연락처 {=noname}개를 제외한\n{=update}개의 연락처만 그룹으로 지정하시겠습니까?",
partUpdateNameGroup:"이름있는 연락처만 그룹으로 지정할 수 있습니다.\n",nogroup:"그룹을 선택해 주세요.",saveContact:"<strong>연락처 이름</strong>&nbsp;저장 중입니다.",
overLengthGroupName:"그룹명은 최대 25자까지 입력할 수 있습니다."},nhn.contact.option.autocomplete={autoCompleteDelay:100,
targets:["NAVERID","CELLPHONE","EMAIL"],domain:"/component",searchType:"CONTAIN",searchLength:30,includeDomainContacts:!1
},nhn.contact.AutoComplete=$Class({$init:function(a,b){this.option(nhn.contact.option.autocomplete),
this.option(b||{}),this._elInput=a,this._loadComponent(a)},_loadComponent:function(a){var b=new jindo.WatchInput_contact(a);
b.attach({change:$Fn(this._changeInput,this).bind()})},_changeInput:function(a){$Element(a.elInput).hasClass("nodata")||(clearTimeout(this._oInputTimeout),
this._oInputTimeout=setTimeout($Fn(this._load,this).bind(a.sText),this.option("autoCompleteDelay")));
},_load:function(a){if(this._u.isEmpty(a))return void this.fireEvent("load",{aContacts:[]});var b=this.option("targets"),c=$A(b).slice(0,b.length).$value();
$A(c).has("NAME")||c.push("NAME"),this._u.ajaxCall({sUrl:this.option("domain")+"/autoCompleteList.nhn",
sTicket:"output",oParam:{keyword:$S(a).trim().toString(),searchTargets:c,searchType:this.option("searchType"),
notEmptyTargets:b,notEmptyTargetCondition:"OR",pageLength:this.option("searchLength"),includeDomainContacts:this.option("includeDomainContacts")
},fCallback:function(b){$Element(this._elInput).text()==a&&this.fireEvent("load",{aContacts:b,sSearchText:a
})},fErrorCallback:function(){this.fireEvent("load",{aContacts:[]})}},this)},_u:nhn.contact.utils}).extend(jindo.Component_contact),
nhn.contact.option.inputController={},nhn.contact.markup.outputContact={},nhn.contact.markup.outputContact.deleteButton='<a class="del _delete" href="#"><em>삭제</em></a>',
nhn.contact.markup.outputContact.main='<li class="_contact {=sNoLineClass} {=domain}" data-no="{=no}" data-name="{=name}" data-content="{=content}" data-important="{=important}">	<span class="name"><span class="ellip_area"><span class="text_ellip">{=displayName}</span>{=newMark}</span></span>	<span class="aso"><span class="ellip_area"><span class="text_ellip">{=displayContent}</span></span></span>{=sDeleteButtonMarkup}</li>',
nhn.contact.InputController=$Class({KEY_CODE:{ENTER:13,DOWN:40,UP:38,COMMA:188,SEMICOLON:59,IE_SEMICOLON:186,
TAB:9},attachedLayers:[],$init:function(a,b,c,d){this.option(nhn.contact.option.inputController),this.option(d||{}),
$Agent().navigator().ie&&(this.KEY_CODE.SEMICOLON=this.KEY_CODE.IE_SEMICOLON),this._elInput=a,this._elInputArea=c,
this._elOutputLayer=b;var e=this._elOutputList=this._v.query(b,"._list").$value();this._oLanguage=this._u.loadLanguage(this.option("language")),
this._attachEvent(a,b,e,c),this._loadComponent(a,b,c)},_attachEvent:function(a,b,c,d){this._u.attachDefaultTextEvent(a,this.option("defaultText")),
this._attachInputEvent(a,d,b,c),$A(nhn.contact.InputController.prototype.attachedLayers).has(b)||(this._attachOutputLayerEvent(b),
nhn.contact.InputController.prototype.attachedLayers.push(b)),$Element(d).delegate("click","._btn_add",$Fn(function(b){
b.stop(),this._directInputContact(a)},this).bind()),$Element(d).delegate("mousedown","._clear_text",$Fn(function(b){
b.stop(),$Element(a).text(""),a.focus(),this.hideOutputLayer()},this).bind()),this._v.preventTapHighlight(d);
},_attachInputEvent:function(a,b,c,d){var e=this._v;e.attach(a,"focus",$Fn(function(a){$Element(b).addClass("on"),
this.fireEvent("focusInput",{elInput:a.element})},this).bind()),e.attach(a,"blur",$Fn(function(a){$Element(b).removeClass("on"),
this.fireEvent("blurInput",{elInput:a.element})},this).bind()),e.attach(a,"keydown",$Fn(function(b){
var e=$Element(this._getSelectedElement(c)),f=b.key(),g=f.keyCode;if(this._isInsertKey(f))if(b.stop(),
$Element(c).visible()&&null!==e){var h=$Element(d).attr("data-search");if(h!==$Element(b.element).text())return void setTimeout($Fn(function(){
var b=$Element(this._getSelectedElement(c));$Element(c).visible()&&null!==b?this._listSelectContact(b):this._directInputContact(a);
},this).bind(),200);this._listSelectContact(e)}else this._directInputContact(a);else g==this.KEY_CODE.TAB?this.hideOutputLayer():$Element(c).visible()&&this._moveSelectContact(e,b);
},this).bind())},_isInsertKey:function(a){var b=a.keyCode,c=this.KEY_CODE;return this.option("onlyUseEnterKey")===!0?a.enter:a.enter||!a.shift&&(b==c.SEMICOLON||b==c.COMMA);
},_autoScroll:function(a,b){var c=this._v.query(this._elOutputLayer,"._scroll");if(null!==c){var d=c.$value(),e=1,f=$Element(b).height()-e,g=b.offsetTop+f,h=d.scrollTop,i=this.KEY_CODE;
a==i.DOWN?g>c.height()+h&&(d.scrollTop=h+f):a==i.UP&&h+f>g+e&&(d.scrollTop=h-f)}},_attachOutputLayerEvent:function(a){
var b=$Element(a);b.delegate(this._v.mouseEnter(),"._contact",$Fn(function(b){if(this._bOutputLayerMouseLock)return void(this._bOutputLayerMouseLock=!1);
var c=$Element(b.element);if(!c.hasClass("over")){try{$Element(this._getSelectedElement(a)).removeClass("over");
}catch(d){}c.addClass("over")}},this).bind()),b.delegate("PC"==this.option("device")?"click":"mousedown","._contact",$Fn(function(a){
a.stop(),this._listSelectContact(a.element)},this).bind()),this._v.preventTapHighlight(a)},_loadComponent:function(a,b,c){
var d=this._v,e=d.query(b,"._scroll"),f=this._oOutputLayerManger=new jindo.LayerManager_contact(b,{sCheckEvent:"mousedown",
nHideDelay:0,nCheckDelay:0}).link(b).link(a).attach({show:function(){null!==e&&(e.$value().scrollTop=0);
}});this.option("closeOnlyButton")===!0&&f.attach(document);var g=d.query(c,"._btn_add"),h=new jindo.WatchInput_contact(a);
h.attach({change:$Fn(function(a){var b=$S(a.sText).trim().toString();null!==g&&(""!=b?g.addClass("on"):g.removeClass("on"));
},this).bind()})},_moveSelectContact:function(a,b){var c=b.key(),d=$Element(a),e=this.KEY_CODE,f=null,g=c.keyCode;
switch(g){case e.UP:b.stop(),f=d.prev();break;case e.DOWN:b.stop(),f=d.next()}null!==f&&(d.removeClass("over"),
f.addClass("over"),this._autoScroll(g,f.$value()))},_directInputContact:function(a){var b=$Element(a).text();
if(!$Element(a).hasClass("nodata")&&!this._u.isEmpty(b)){if(b.indexOf(",")>-1||b.indexOf(";")>-1){b=b.replace(/\,/g,";");
var c=[];return $A(b.split(";")).forEach(function(a){c.push({content:a})},this),void this.fireEvent("inputList",{
aContacts:c})}this.fireEvent("input",{oContact:new nhn.contact.Contact(0,"",b,this.option("naverIdToEmail"))
})}},_listSelectContact:function(a){var b=$Element(a);this.fireEvent("input",{oContact:new nhn.contact.Contact(1*b.attr("data-no"),b.attr("data-name"),b.attr("data-content"),this.option("naverIdToEmail"),"true"==b.attr("data-important"))
})},_getSelectedElement:function(a){try{return this._v.query(a,".over").$value()}catch(b){return null;
}},_boldSearchText:function(a,b){if(this._u.isEmpty(b))return $S(a).escapeHTML();b=$S(b).trim().toString();
var c=a.toLowerCase().indexOf(b.toLowerCase());if(c>-1){var d=c+b.length,e=a.length;return $S(a.substring(0,c)).escapeHTML()+'<em class="s_t">'+$S(a.substring(c,d)).escapeHTML()+"</em>"+$S(a.substring(d,e)).escapeHTML();
}return $S(a).escapeHTML()},printOutputContact:function(a,b){var c=this._oLanguage;b=b||"";var d=$A(this.option("targets")).has(nhn.contact.Contact.prototype.TYPE.NAME),e=[];
if(this.option("viewNewName")===!0&&""!=$S(b).trim().toString()&&e.push($Template(nhn.contact.markup.outputContact.main).process({
no:0,name:$S(b).escapeHTML(),displayName:$S(b).escapeHTML(),newMark:'<span class="new">new</span>'})),
$A(a).forEach(function(a){var f=a.contents;d&&0===f.length&&f.push(""),$A(f).forEach(function(f,g){var h=a.name,i="";
i=d?f:this._boldSearchText(f,b).toString();var j=0===g?this._boldSearchText(h,b).toString()||c.noname:"";
e.push($Template(nhn.contact.markup.outputContact.main).process({no:a.contactNo,name:$S(h).escapeHTML(),
content:$S(f).escapeHTML(),important:"Y"===a.importantContactYn,domain:a.domainContact?"dmn":"",displayName:j,
sNoLineClass:""==j?"no_line":"",displayContent:i||c.nocontact,sDeleteButtonMarkup:"PC"==this.option("device")?nhn.contact.markup.outputContact.deleteButton:""
}))},this)},this),e.length>0){var f=$Element(this._elOutputList);f.attr("data-search",b),f.html(e.join("")),
f.first().addClass("over")}return e.length},showOutputLayer:function(a){var b=this._v,c=this._oOutputLayerManger;
c.sOwner=a,c.show(),this.option("repositionOutput")===!0&&this._position(this._elInputArea,b.query(c.getLayer(),"._position").$value());
},_position:function(a,b){var c=$Element(a),d=c.offset();$Element(b).offset(d.top+c.height()-1,d.left-1);
},hideOutputLayer:function(a){(this._u.isEmpty(a)||this._oOutputLayerManger.sOwner==a)&&this._oOutputLayerManger.hide();
},activeOutputLayerMouseLock:function(){this._bOutputLayerMouseLock=!0},clear:function(){var a=this._elInput;
a.blur(),$Element(a).text("").fireEvent("blur"),this._oOutputLayerManger.hide()},_v:nhn.contact.version,
_u:nhn.contact.utils}).extend(jindo.Component_contact),nhn.contact.option.selectionFilter={domain:"/component"
},nhn.contact.SelectionFilter=$Class({EXCEPTION:{DUPLICATION:"DUPLICATION",INVALID:"INVALID"},CONTACT_TYPE:nhn.contact.Contact.prototype.TYPE,
CONTENT_MAX_LENGTH:100,$init:function(a){this.option(nhn.contact.option.selectionFilter),this.option(a||{}),
(this._u.isEmpty(this.option("maxInputLength"))||this.option("maxInputLength")<=0)&&this.option({maxInputLength:this.CONTENT_MAX_LENGTH
}),this._oLanguage=this._u.loadLanguage(this.option("language"))},filter:function(a,b){return a.isNaverId()&&this._u.isNotEmpty(b)&&this._checkValidNaverId(a.getNaverId(),b),
this._check(a),this._modify(a),this.option("duplicable")!==!0&&this._checkDuplication(a),a},_check:function(a){
var b=a.getType();this._checkAllowType(b,this.option("targets")),this._checkValidType(b,a.getContent());
},_checkDuplication:function(a){if(this.fireEvent("duplication",{oContact:a}))throw{sCode:this.EXCEPTION.DUPLICATION,
sMessage:this._oLanguage.duplication}},_modify:function(a){var b=this.CONTACT_TYPE,c=a.getContent().replace(/\s/g,""),d=a.getType();
switch(d){case b.CELLPHONE:c=this._addCellphoneHypen(c);break;case b.NAVERID:c=c.toLowerCase()}a.setType(d),
a.setContent(c)},_addCellphoneHypen:function(a){var b=a;a=a.replace(/-/g,"");var c=a.length;if(10!=c&&11!=c||0!==a.indexOf("01"))return b;
var d=a.substring(0,3),e=10==c?a.substr(3,3):a.substr(3,4),f=10==c?a.substr(6,4):a.substr(7,4);return d+"-"+e+"-"+f;
},_checkAllowType:function(a,b){var c=this._oLanguage,d=this.CONTACT_TYPE,e=$A(b).has(a);if(!e){var f="";
switch(a){case d.CELLPHONE:f=c.noCellphone;break;case d.NAVERID:f=c.noNaverId;break;case d.EMAIL:f=c.noEmail;
}throw{sCode:this.EXCEPTION.INVALID,sMessage:f}}},_checkValidType:function(a,b){var c=this._oLanguage,d=this.CONTACT_TYPE,e=this.EXCEPTION.INVALID;
b=b.replace(/\s/g,"");var f=this.option("maxInputLength");if(b.length>f)throw{sCode:e,sMessage:$Template(c.overInputLenth).process({
length:f})};switch(a){case d.CELLPHONE:var g=/^(\+82|82|082|0)1(0|1|6|7|8|9)[0-9]{7,8}$/;if(!g.test(b.replace(/-/g,"")))throw{
sCode:e,sMessage:c.invalidCellphone};break;case d.NAVERID:var h=/^\w{3,12}$/;if(!h.test(b))throw{sCode:e,
sMessage:c.invalidNaverId};break;case d.EMAIL:var i=/^[!a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;
if(!i.test(b)||"@"==b)throw{sCode:e,sMessage:c.invalidEmail}}},getNaverIdCheckList:function(a,b){var c=Math.ceil(.1*a.length);
this._u.ajaxCall({sTicket:"checkNaverId",nTimeout:c,sUrl:this.option("domain")+"/naverIdCheck.nhn?m=bundle",
oParam:{naverIds:a},fCallback:function(a){b(a)},fErrorCallback:function(){b(null)}},this)},_checkValidNaverId:function(a,b){
if(0===b[a])throw{sCode:this.EXCEPTION.INVALID,sMessage:this._oLanguage.notExistNaverId}},_u:nhn.contact.utils,
_v:nhn.contact.version}).extend(jindo.Component_contact),nhn.contact.option.save={language:"ko_KR",device:"PC",
domain:"/component",repositionOutput:!0,targets:["NAME"],viewNewName:!0,onlyUseEnterKey:!0},nhn.contact.markup.save={},
nhn.contact.markup.save.essential='<div class="cp_body _body">	<div class="cp_layer_pd _dummy"></div>	<fieldset class="cp_address_save _save_area" style="display:none;">	<legend>주소록에 저장</legend>	<div class="_contact_area"></div>	<div class="_group_area"></div>	<div class="btn_c"><button type="button" class="_save"><span class="ico">&nbsp;</span><span class="tx">주소록에 저장</span></button></div>	</fieldset>	<div style="margin-left:-104px" class="cp_loading_area _loading">		<span class="cp_loading">			<span class="cp_loading_txt">				<span class="ico">&nbsp;</span> <span class="txt _loading_message"><strong>보낸 연락처</strong>&nbsp;확인 중입니다.</span>			</span>			<span class="cp_loading_bg bg_l">&nbsp;</span><span class="cp_loading_bg bg_r">&nbsp;</span>		</span>	</div>	<span style="display: block;" class="cp_dimmed _dimmed">&nbsp;</span></div>',
nhn.contact.markup.save.contactArea='<p class="cp_tit">발송한 <span>{=total}</span>개의 연락처 중 이름이 없는 연락처가 <span>{=count}</span>개 있습니다.<br> <strong>네이버 주소록</strong>에 저장할 <strong>이름</strong>을 입력해주세요.</p><div class="cp_save_bor">	<div class="cp_save_area _view_scroll">		<div class="cp_zoom">			<ul class="cp_save_list">{=list}</ul>		</div>	</div></div><div class="cp_address_save_layer">	<div style="display:none" class="address_layer_area _output">		<div style="top:-82px" class="address_bor _position">			<div class="address_layer _scroll">				<div class="cp_zoom">					<ul class="cp_list _list"></ul>				</div>			</div>		</div>	</div></div><p class="cp_txt">이름을 입력하면 주소록 자동완성으로 편하게 연락처를 찾을 수 있습니다.</p>',
nhn.contact.markup.save.contact='<li class="_contact" data-no="{=no}">	<span class="name">		<a class="imp _important {=important}" href="#">{=sImportantLabel}</a>		<span class="_input_area">			<label class="blind" for="cp_entry{=no}">이름입력</label>			<input type="text" class="_input" value="{=name}" id="cp_entry{=no}" autocomplete="off">		</span>		<span class="_lock_area" style="display:none">			<span class="ellip_area"><span class="text_ellip _name"></span></span>			<a class="del _delete" href="#"><em>삭제</em></a>		</span>	</span>	<span class="aso"><span class="ellip_area"><span class="text_ellip">{=content}</span></span></span></li>',
nhn.contact.markup.save.groupArea='<p class="cp_tit">발송한 연락처를 <strong>그룹</strong>으로 지정할 수 있습니다.</p><div class="wrp_option">	<div class="cp_slt_tit dim _group_select">		<span class="tit _group_name">그룹 선택</span>		<a class="grp_view" href="#"><span><span class="blind _select_blind">연락처 그룹 목록 열기</span></span></a>		<div class="ly_cp_slt _group_layer">			<h4 class="blind">그룹 선택 리스트</h4>			<ul class="_group_scroll _list" style="{=height}"></ul>			<a class="grp_add _new" href="#"><span class="ico_add"></span>&nbsp;새 그룹 추가</a>		</div>	</div>	<div class="cp_save_bor3 _group_input_area" style="display:none;">		<label class="blind" for="cp_entry_group">그룹명 입력</label><input type="text" class="_group_input" value="" id="cp_entry_group" autocomplete="off">	</div></div><p class="cp_txt">그룹을 지정한 다음부터는 그룹명만 입력하여 쉽게 선택할 수 있습니다.</p>',
nhn.contact.markup.save.group='<li class="_group" data-name="{=groupName}"><a href="#">{=groupName}</a></li>',
nhn.contact.markup.save.noaction='<div class="cp_layer_pd">	<div class="cp_load_alim">		<span class="cp_load_txt"><strong>네이버 주소록</strong>에서 보낸 연락처를 확인할 수 있습니다.</span><span class="quick_add"><a href="https://contact.naver.com/main.nhn?filterMenu=registerDate" target="_blank">주소록 바로가기</a><span class="arrow">&nbsp;</span></span>	</div></div>',
nhn.contact.markup.save.complete={},nhn.contact.markup.save.complete.main='<div class="cp_body"><fieldset class="cp_address_save">	<legend>주소록에 저장</legend>{=result}	<p class="cp_txt"><span class="cp_tl">네이버 주소록에서 상세정보를 수정할 수 있습니다.</span><span class="cp_tr"><a href="https://contact.naver.com/main.nhn?filterMenu=registerDate" target="_blank">주소록 확인하기</a><span class="arrow">&nbsp;</span></span></p></fieldset></div>',
nhn.contact.markup.save.complete.result='<p class="cp_tit">{=title}</p><div class="cp_save_bor"><div class="cp_save_ok">{=content}</div></div>',
nhn.contact.markup.save.complete.contactTitle="<span>{=count}</span>개의 연락처를 <strong>주소록에 저장</strong>했습니다.",
nhn.contact.markup.save.complete.groupTitle="<span>{=count}</span>개의 연락처를 <strong>'<em>{=groupName}</em>' 그룹에 추가</strong>하였습니다.",
nhn.contact.markup.save.complete.groupContent="{=name}",nhn.contact.Save=$Class({GROUP_MIN_CONTACT_COUNT:2,
GROUP_NAME_MAX_LENGTH:25,NAME_MAX_LENGTH:100,$init:function(a,b){var c=this._elComponent=$(a),d=$Element(c);
this.option(nhn.contact.option.save),"MOBILE"==b.device&&this.option({visible:!1}),this.option(b||{});
var e=this._oLanguage=this._u.loadLanguage(this.option("language"));this._u.setLanguage(e),this._u.setServiceType(this.option("serviceType")),
this.option("visible")!==!1&&(d.html(this._loadEssentialMarkup(e)),d.delegate("click","._save",$Fn(this._save,this).bind()),
this._v.preventTapHighlight(c),this._aNamedContacts=[],this._aNonameContacts=[])},_loadEssentialMarkup:function(){
return $Template(nhn.contact.markup.save.essential).process()},_visibleLoadProgress:function(a,b){var c=this._elComponent,d=this._v;
d.query(c,"._dimmed").visible(a),d.query(c,"._loading_message").html(b||"");var e=d.query(c,"._loading").visible(a);
e.css("marginLeft",e.width()/-2+"px")},_findNomameContact:function(a,b){this._u.ajaxCall({sUrl:this.option("domain")+"/useContact.nhn",
oParam:{useContactListJsonString:$Json(a).toString()},fCallback:function(a){if(this.option("visible")!==!1){
var c=[],d=[];$A(a).forEach(function(a){a.display===!0?d.push(a):c.push(a)}),this._aNamedContacts=c,
this._aNonameContacts=d,d.length>0&&this._printContactArea(d,a.length),b(d)}},fErrorCallback:function(){
this.option("visible")!==!1&&b([])}},this)},_printContactArea:function(a,b){var c=this._v,d=this._elComponent,e=c.query(d,"._contact_area");
e.html($Template(nhn.contact.markup.save.contactArea).process({total:b,count:a.length,list:this._makeContactMarkup(a)
}));var f=e.$value();this._attachImportantEvent(f);var g=c.query(f,"._output").$value();this._attachInputEvent(f,g),
$Element(f).delegate("click","._delete",$Fn(function(a){a.stop();var b=this._u.parentByClass(a.element,"_contact"),d=c.query(b,"._input_area"),e=this._aNonameContacts[b.attr("data-no")];
e.name="";var f=c.query(d,"._input").text("");e.importantYn="N",this._applyImportantUI(c.query(b,"._important"),!1),
e.mergeTargetContactNo=0,c.query(b,"._lock_area").hide(),d.show(),f.$value().focus()},this).bind());var h=c.query(f,"._view_scroll").$value();
c.attach(h,"scroll",function(){$Element(g).hide()}),h.scrollTop=0,this._v.preventTapHighlight(f)},_makeContactMarkup:function(a){
var b=[];return $A(a).forEach(function(a,c){b.push($Template(nhn.contact.markup.save.contact).process({
no:c,name:a.name,content:$S(a.content).escapeHTML(),important:"Y"==a.importantYn?"on":"",sImportantLabel:"Y"==a.importantYn?"중요연락처를 해제하기":"중요연락처로 표시하기"
}))},this),b.join("")},_attachImportantEvent:function(a){$Element(a).delegate("click","._important",$Fn(function(a){
a.stop();var b=a.element,c=this._u.parentByClass(b,"_contact"),d=c.attr("data-no"),e=$Element(b);e.hasClass("on")?(this._applyImportantUI(b,!1),
this._aNonameContacts[d].importantYn="N"):(this._applyImportantUI(b,!0),this._aNonameContacts[d].importantYn="Y");
},this).bind())},_attachInputEvent:function(a,b){var c=this._v,d=this._oLanguage,e=this.option();e.defaultText=d.insertName,
$A($Element(a).queryAll("._input")).forEach(function(a){var f=$Element(a);a=f.$value(),c.attach(a,"blur",$Fn(function(a){
var b=a.element,c=$Element(b),e=c.text();if(c.hasClass("nodata")||""==$S(e).trim().toString())e="";else if(e.length>this.NAME_MAX_LENGTH)return alert($Template(d.overInputLenth).process({
length:this.NAME_MAX_LENGTH})),void setTimeout(function(){b.focus(),b.select()},100);var f=this._u.parentByClass(b,"_contact");
this._aNonameContacts[f.attr("data-no")].name=e},this).bind());var g=this._u.parentByClass(a,"_contact").$value(),h=new nhn.contact.InputController(a,b,g,e).attach({
focusInput:$Fn(function(a){this._elSelectInput=a.elInput},this).bind(),input:$Fn(function(a){var d=a.oContact;
if($Element(b).hide(),0!==d.getContactNo()){var e=this._u.parentByClass(this._elSelectInput,"_contact"),f=c.query(e,"._lock_area"),g=this._aNonameContacts[e.attr("data-no")];
g.name=d.getName(),c.query(f,"._name").text(d.getName()),d.isImportant()?(g.importantYn="Y",this._applyImportantUI(c.query(e,"._important"),!0)):(g.importantYn="N",
this._applyImportantUI(c.query(e,"._important"),!1)),g.mergeTargetContactNo=d.getContactNo(),c.query(e,"._input_area").hide(),
f.show()}},this).bind()}),i=new nhn.contact.AutoComplete(a,e);i.attach({load:$Fn(function(b){if($Element(g).hasClass("on")){
var c=b.aContacts;this._u.isNotEmpty(c)?(h.activeOutputLayerMouseLock(),h.printOutputContact(c,b.sSearchText),
h.showOutputLayer("autocomplete")):h.hideOutputLayer(this._u.isEmpty($Element(a).text())?"autocomplete":"");
}},this).bind()})},this)},_printGroupArea:function(a){var b=this.option("groupListHeight");$Element(a).html($Template(nhn.contact.markup.save.groupArea).process({
height:b>0?"max-height:"+b+"px;":""}))},_attachGroupInputEvent:function(a){var b=this._v;this._u.attachDefaultTextEvent(a,"그룹명 입력"),
b.attach(a,"focus",$Fn(function(a){this._u.parentByClass(a.element,"_group_input_area").addClass("focus");
},this).bind()),b.attach(a,"blur",$Fn(function(a){this._u.parentByClass(a.element,"_group_input_area").removeClass("focus");
},this).bind())},_attachGroupSelectEvent:function(a,b,c){$Element(a).delegate("click","._group_select",$Fn(function(a){
a.stop();var d=this._v;if(c.getVisible())return void c.hide();var e=this.option("domain");this._u.ajaxCall({
sUrl:e+"/groupList.nhn",fCallback:$Fn(function(a){this._u.ajaxCall({sUrl:e+"/groupMaxCountCheck.nhn",
fCallback:$Fn(function(e){this._printGroup(b,a,e),d.query(b,"._new").visible(e,"block"),c.show()},this).bind()
},this)},this).bind()},this)},this).bind())},_attachGroupEvent:function(a){var b=this._v,c=this._oLanguage,d=b.query(a,"._group_input").$value();
this._attachGroupInputEvent(d);var e=b.query(a,"._group_layer"),f=b.query(a,"._group_select"),g=e.$value(),h=f.$value(),i=new jindo.LayerManager_contact(g,{
sCheckEvent:"mousedown",nHideDelay:0,nCheckDelay:0}).link(g).link(h).attach({show:$Fn(function(){f.addClass("on"),
b.query(g,"._group_scroll").$value().scrollTop=0,b.query(f,"._select_blind").text("연락처 그룹 목록 닫기")},this).bind(),
hide:function(){f.removeClass("on"),b.query(f,"._select_blind").text("연락처 그룹 목록 열기")}});this._attachGroupSelectEvent(a,g,i);
var j=b.query(a,"._group_input_area"),k=b.query(h,"._group_name"),l=$Element(a);l.delegate("click","._group",$Fn(function(a){
a.stop(),j.hide();var b=$Element(a.element).attr("data-name");$Element(d).text(b).removeClass("nodata"),
f.removeClass("dim"),k.text(b)},this).bind()),l.delegate("click","._new",$Fn(function(a){a.stop(),j.show(),
$Element(d).text(""),d.focus(),f.addClass("dim"),k.text(c.addNewGroup)},this).bind()),this._v.preventTapHighlight(a);
},_printGroup:function(a,b){var c=this._v,d=[];$A(b).forEach(function(a){d.push($Template(nhn.contact.markup.save.group).process({
groupName:$S(a.name).escapeHTML()}))},this),c.query(a,"._list").html(d.join(""))},_showBody:function(){
var a=this._elComponent;this._visibleLoadProgress(!1),this._v.query(a,"._dummy").leave(),this._v.query(a,"._save_area").show(),
this._resize()},_checkValid:function(a,b,c){var d=this._oLanguage;if(a>0&&0===b)throw{sCode:"invalid",
sMessage:(""!=c?d.noUpdateNameGroup:"")+d.noUpdateName};if(0===a&&""==c)throw{sCode:"invalid",sMessage:d.nogroup
};if(c.length>this.GROUP_NAME_MAX_LENGTH)throw{sCode:"invalid",sMessage:d.overLengthGroupName};var e="";
if(a>0&&a!=b&&(e=""!=c?$Template(d.partUpdateNameGroup+"\n"+d.partUpdateGroup).process({noname:a-b,update:b
}):$Template(d.partUpdateName).process({noname:a-b,update:b}),!confirm(e)))throw{sCode:""}},_save:function(){
var a=this._oLanguage,b=this._v,c=this._aNonameContacts,d=[];$A(this._aNonameContacts).forEach(function(a){
this._u.isNotEmpty(a.name)&&d.push(a)},this);var e=b.query(this._elComponent,"._group_input"),f="";null!==e&&(f=e.text(),
(e.hasClass("nodata")||""==$S(f).trim().toString())&&(f=""));try{this._checkValid(c.length,d.length,f);
}catch(g){if(void 0===g.sCode)throw g;return void("invalid"==g.sCode&&alert(g.sMessage))}this._visibleLoadProgress(!0,a.saveContact);
var h=this._aNamedContacts;0===c.length?this._updateGroup(f,h,$Fn(function(a){this._printComplete(null,a,f);
},this).bind()):this._u.ajaxCall({sUrl:this.option("domain")+"/updateContact.nhn",oParam:{useContactListJsonString:$Json(d).toString()
},fCallback:function(a){this._updateGroup(f,a.concat(h),$Fn(function(b){this._printComplete(a,b,f)},this).bind());
},fErrorCallback:function(){this._updateGroup(f,h,$Fn(function(a){this._printComplete(null,a,f)},this).bind());
}},this)},_updateGroup:function(a,b,c){return""==a?void c(null):void this._u.ajaxCall({sUrl:this.option("domain")+"/newGroup.nhn",
oParam:{groupName:a,useContactListJsonString:$Json(b).toString()},fCallback:function(){c(b)},fErrorCallback:function(){
c(null)}},this)},_printNoaction:function(){this._v.query(this._elComponent,"._body").html(nhn.contact.markup.save.noaction),
this._resize()},_printComplete:function(a,b,c){null===a&&null===b&&this._printNoaction();var d=[],e=nhn.contact.markup.save.complete,f=$Template(e.result);
if(null!==a){var g=[];$A(a).forEach(function(a){g.push($S(a.name).escapeHTML())},this),d.push(f.process({
title:$Template(e.contactTitle).process({count:a.length}),content:g.join(", ")}))}if(null!==b){var h=b.length-1;
d.push(f.process({title:$Template(e.groupTitle).process({count:b.length,groupName:$S(c).escapeHTML()
}),content:$Template(e.groupContent).process({count:h,name:$S(b[0].name).escapeHTML()+(h>0?" 외 "+h+"개의 연락처":"")
})}))}$Element(this._elComponent).html($Template(e.main).process({result:d.join("")})),this._resize();
},_applyImportantUI:function(a,b){var c=$Element(a);b?(c.addClass("on"),c.text("중요연락처를 해제하기")):(c.removeClass("on"),
c.text("중요연락처로 표시하기"))},_resize:function(){var a=this.option("resizeEvent");"function"==typeof a&&a();
},exec:function(a){var b=this._oLanguage,c=this._v;a=$A(a).$value(),this.option("visible")!==!1&&(this._visibleLoadProgress(!0,b.checkSendContact),
this._resize()),this._findNomameContact(a,$Fn(function(){if(a.length>=this.GROUP_MIN_CONTACT_COUNT){
var b=c.query(this._elComponent,"._group_area");this._printGroupArea(b),this._attachGroupEvent(b)}else if(0===this._aNonameContacts.length)return void this._printNoaction();
this._showBody()},this).bind())},_u:nhn.contact.utils,_v:nhn.contact.version}).extend(jindo.Component_contact),
jindo.AutoCompleteSE=function(a,b,c,d,e){var f=null,g=null,h=null,i=null,j=null,k=null,l=null,m="",n=!1,o=null,p=0,q=null,r=null,s={},t=null,u=!1,v="",w=!1,x=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],y={
"ㄱ":"ㄱ","ㄲ":"ㄱㄱ","ㄴ":"ㄴ","ㄷ":"ㄷ","ㄸ":"ㄷㄷ","ㄹ":"ㄹ","ㅁ":"ㅁ","ㅂ":"ㅂ","ㅃ":"ㅂㅂ","ㅅ":"ㅅ","ㅆ":"ㅅㅅ","ㅇ":"ㅇ",
"ㅈ":"ㅈ","ㅉ":"ㅈㅈ","ㅊ":"ㅊ","ㅋ":"ㅋ","ㅌ":"ㅌ","ㅍ":"ㅍ","ㅎ":"ㅎ"},z=["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅗㅏ","ㅗㅐ","ㅗㅣ","ㅛ","ㅜ","ㅜㅓ","ㅜㅔ","ㅜㅣ","ㅠ","ㅡ","ㅡㅣ","ㅣ"],A=[" ","ㄱ","ㄱㄱ","ㄱㅅ","ㄴ","ㄴㅈ","ㄴㅎ","ㄷ","ㄹ","ㄹㄱ","ㄹㅁ","ㄹㅂ","ㄹㅅ","ㄹㅌ","ㄹㅍ","ㄹㅎ","ㅁ","ㅂ","ㅂㅅ","ㅅ","ㅅㅅ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],B={
bDataFromAjax:!0,sRequestType:"xhr",sRequestMethod:"post",sQueryFormat:"@query@",htRequestFormat:{q:"@query@",
limit:"50"},sEmTagName:"strong",sListTagName:"ul",sFocusClassName:"selected",nMaxListCount:100,nListMaxLength:99,
bDisabled:!1,htLocalData:null},C=null,D=[],E=null,F=null,G={},H=function(a,b){b=b||{};var c=this["on"+a],d=G[a]||[],e="function"==typeof c,f=d.length>0;
if(!e&&!f)return!0;d=d.concat(),b.sType=a,"undefined"==typeof b._aExtend&&(b._aExtend=[],b.stop=function(){
b._aExtend.length>0&&(b._aExtend[b._aExtend.length-1].bCanceled=!0)}),b._aExtend.push({sType:a,bCanceled:!1
});var g,h,i=[b];for(g=2,h=arguments.length;h>g;g++)i.push(arguments[g]);if(e&&c.apply(this,i),f){var j;
for(g=0,j;j=d[g];g++)j.apply(this,i)}return!b._aExtend.pop().bCanceled},I=function(a,b){if(1==arguments.length)return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(a,b){
I(b,a)},this).bind()),this;var c=G[a];return"undefined"==typeof c&&(c=G[a]=[]),c.push(b),this},J=function(a,b){
if(1==arguments.length)return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(a,b){J(b,a)},this).bind()),
this;var c=G[a];if(c)for(var d,e=0;d=c[e];e++)if(d===b){c=c.splice(e,1);break}return this},K=function(a,b){
switch(typeof a){case"undefined":var c={};for(var d in F)"htCustomEventHandler"!=d&&"_htSetter"!=d&&(c[d]=F[d]);
return c;case"string":if("undefined"==typeof b)return F[a];if("htCustomEventHandler"==a){if("undefined"!=typeof F[a])return this;
I(b)}F[a]=b,"function"==typeof F._htSetter[a]&&F._htSetter[a](b);break;case"object":for(var e in a){
if("htCustomEventHandler"==e){if("undefined"!=typeof F[e])continue;I(a[e])}"_htSetter"!==e&&(F[e]=a[e]),
"function"==typeof F._htSetter[e]&&F._htSetter[e](a[e])}}return this},L=function(){return null!=t?void N():(o.stop(),
D.focus.detach(i.$value(),"focus"),D.click.detach(document,"click"),D.keydown.detach(i,"keydown"),jindo.$Agent().navigator().opera&&(D.blur.detach(i,"blur"),
D.focus.detach(i,"focus")),K(null),g=null,C=null,i=null,j=null,void(o=null))},M=function(a){var b=K("sFocusClassName");
t&&t.removeClass(b);var c=jindo.$Element(a).parent(null,2)[1];c.addClass(b),t=c},N=function(){O()},O=function(){
if(t){var a=Bb(t.first()),b=a.text(),c=a.attr("sn"),d=a.attr("grouptype"),e=a.attr("officer");Q(b,c,e,d);
}},P=function(){var a=i.text();Q(a)},Q=function(a,b,c,d){return a=$S(a).trim().$value(),""==a||" "===a||"@"==a||";"==a||","==a?(i.$value().value="",
!1):(i.$value().value=a,"undefined"!=typeof b?i.attr("sn",b):i.attr("sn",""),"undefined"!=typeof c?i.attr("officer",c):i.attr("officer",""),
"undefined"!=typeof d?i.attr("grouptype",d):i.attr("grouptype",""),w=!1,g=[],t=null,W(),H("setInput",i.$value()),
void(f=null))},R=function(){n||S(),H("onFocus")},S=function(){var a=jindo.$$.getSingle(K("sListTagName"),j.$value());
if(k=a?jindo.$Element(a):null){var b=jindo.$$.getSingle(K("sListTagName"),l.$value());m=$Element(b).html().replace(/^\s+|\s+$/g,""),
n=!0}},T=function(a){var b=fb(a);delete a,w=!0,U(b)},U=function(a){w&&(w=!1,g=a,W())},V=function(a){
K("bDataFromAjax")?delete g[a]:h&&delete h[a]},W=function(){if(K("bDisabled"))return!1;if(k||S(),!k)return!1;
var a=[],b=K("nMaxListCount"),c=g.length>b?b:g.length;if($Element("atcp_suggest_layer_show_recent").className("_click(maCore|showRecentAddressLayer|"+v+") _stopDefault"),
$Element("atcp_suggest_layer_show_important").className("_click(maCore|showImportantAddressLayer|"+v+") _stopDefault"),
$Element($$.getSingle("#atcp .page .btn_prev")).className("btn_prev _click(maCore|changeImportantAddressLayerPrev|"+v+") _stopDefault"),
$Element($$.getSingle("#atcp .page .btn_next")).className("btn_next _click(maCore|changeImportantAddressLayerNext|"+v+") _stopDefault"),
p=c,c>0){k.show();for(var d=0;c>d;d++)a.push(cb(g[d],d));k.html(a.join(""))}else k.hide(),k.html("");
return p>0?(j.show(),Z(),t=Ab(k),t.addClass(K("sFocusClassName")),k.$value().scrollTop=0):Y(),this},X=function(){
W()},Y=function(){return K("bDisabled")?!1:(g=[],t=null,H("acHide"),j.hide(),this)},Z=function(){return K("bDisabled")?(j.hide(),
!1):($(),this)},$=function(){_(),j.show(),H("acShow")},_=function(){var a=i.parent(null,5)[4],b=a.height()-1,c=parseInt(a.offset().top),d=c+b,e=a.offset().left;
j.parent().offset(d,null!=e?e:365)},ab=function(a){return K("bDisabled")?!1:(w=!0,void(K("bDataFromAjax")?bb(a,function(a){
U(a)}):(h||(h=K("htLocalData"),rb()),u=a,U(qb(a)))))},bb=function(a,b){var c=K(),d=c.sUrl,e=jindo.$H(c.htRequestFormat);
return g=[],!a||a.length>50?b([]):-1!=a.indexOf("\n")||-1!=a.indexOf("\r")?b([]):(mcCore.isNcs()||(s={}),
"undefined"!=typeof s[a]&&a.toLowerCase()==s[a].sQuery?(u=s[a].sQuery,g=s[a].data,b(g,a,"Cache")):(e=e.map(function(b){
return"string"==typeof b?b.replace(r,a):b},this),q=new jindo.$Ajax(d,{type:c.sRequestType,method:c.sRequestMethod,
onload:jindo.$Fn(function(c){try{var d=c.json(),e=d.query.length>0?d.query:"";if(u!==e)return;if(d.type){
var h=d.itemList;g=fb(h)}else{var h=d.contact;g=db(d)}""!=e&&a.toLowerCase()==e&&(s[a]={sQuery:u,data:g
}),b(g,a,"Ajax"),f=!0,""===i.text()&&(f=null)}catch(j){f=!0}},this)}),u=a,void q.request(e.$value())));
},cb=function(a){var b=!1,c="",d=a.nickName,e=[],f=$Element("atcp"),g=$Element("autocomplete_type");if(d=""==d||null==d||"undefined"==typeof d?"":mcCore.isNwe()?"["+vb(d,u,b)+"]":"["+mcCore.replaceSpecialChar(d)+"]",
a.name&&""!==$S(a.name).trim()&&(c=vb(a.name,u,b),e.name="<span class='name'>"+c+d+" </span>"),a.i18nName&&""!==$S(a.i18nName).trim()&&(c=vb(a.i18nName,u,b),
e.i18nName="<span class='name_en'>"+c+" </span>"),a.jobTitle&&""!==$S(a.jobTitle).trim()&&(c=a.jobTitle&&10===a.excutiveStatus?"<strong>"+a.jobTitle.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</strong>":a.jobTitle.replace(/</g,"&lt;").replace(/>/g,"&gt;")||"",
e.jobTitle="<span class='title'>"+c+" </span>"),a.company&&""!==$S(a.company).trim()&&(c=a.company?a.company.replace(/</g,"&lt;").replace(/>/g,"&gt;"):"",
e.company="<span class='corp'>"+c+" </span>"),a.department&&""!==$S(a.department).trim()&&(c=a.department?a.department.replace(/</g,"&lt;").replace(/>/g,"&gt;"):"",
e.department="<span class='team'>"+c+" </span>"),a.sAddressType&&"E"===a.sAddressType&&(e.sAddressType="<span class='cmn_contact'>"+nLang.w.common_address+" </span>"),
a.sGroupType&&"E"===a.sGroupType&&(e.sGroupType="<span class='cmn_contact'>"+nLang.w.common_address+" </span>"),
a.email&&""!==$S(a.email).trim()){var h="<"+K("sEmTagName")+">";c=a.name.indexOf(h)?ub(a.email,u,b):a.email,
e.email="<span class='email'>"+c+" </span>"}var i,j=a.group||"",k=a.excutiveStatus||"",l=a.sGroupType||"",m=mEnv.autoCompletePhoto&&void 0!==a.photoUrl,n="";
return g.$value().checked=m,mcCore.isNaver()||void 0===a.photoUrl||(n="("+nLang.c.namelessness+")",$Element("autocomplete_type_wrapper").show(),
g.data("target",v)),m?f.addClass("thumb_type"):f.removeClass("thumb_type"),i="<li><div><a title='"+a.name+"' onclick='maCore.onMouseClick(this, \""+v+"\");return false;' onmousemove='maCore.onMouseMove(this, \""+v+"\");return false;'>"+(m?'<span class="thumb_img"><img src="'+a.photoUrl+'" alt="'+a.name+'" data-type="'+a.sAddressType+'" onerror="maCore.onThumbnailError(this); return false" style="text-indent:-9999px;"></span>':"")+'<span class="name_cover">'+(e.name?e.name:'<span class="name">'+n+" </span>")+(e.i18nName?e.i18nName:"<span></span>")+(e.sAddressType?e.sAddressType:"<span></span>")+(e.sGroupType?e.sGroupType:"<span></span>")+'</span><span class="info_cover">'+(e.jobTitle?e.jobTitle:"<span></span>")+(e.company?e.company:"<span></span>")+(e.department?e.department:"<span></span>")+(e.email?e.email:'<span style="margin-right:1px;"></span>')+'</span></a><input type="hidden" officer="'+k+'" sn="'+j+'" grouptype="'+l+'" value="'+a.in_txt+'"/></div>'+a.in_delele_button_html+"</li>";
},db=function(a){var b=a.contact,c=a.group,d=a.query,e=[],f=0;if(d&&0==d.indexOf("@")){for(var g=0;g<c.length;g++)e.push(eb(c[g],f++));
for(var g=0;g<b.length;g++)e.push(eb(b[g],f++))}else{for(var g=0;g<b.length;g++)e.push(eb(b[g],f++));
for(var g=0;g<c.length;g++)e.push(eb(c[g],f++))}return e},eb=function(a,b){var c=a.Key||a.groupNo;(""==c||null==c||"undefined"==typeof c)&&(c="");
var d=a.groupNo||"",e=a.Name||a.name||"("+nLang.c.namelessness+")",f=a.Company||"",g=a.Email||"",h=a.JobTitle||"",i=a.excutiveStatus||"",j=a.Department||"",k=a.type||"",l=a.NickName||"",m=a.Type||"",n=a.groupTypeCode||"",o=a.i18nName||"",p=a.photoUrl||"";
if(d)var q=zb(sb(e));else var q=e?"&quot;"+zb(sb(e))+"&quot;&lt;"+sb(g)+"&gt;":sb(g);var r=K("nListMaxLength");
return{key:c,group:d,name:r>0&&e.length>r?e.substring(0,r)+"...":e,email:g,company:f,jobTitle:h,excutiveStatus:i,
department:j,nickName:l,in_txt:q.replace(/ /gi,"&#32;"),parsed:tb(e),in_delele_button_html:ib(k,b,c),
clickcr_msg:hb(k),sAddressType:m,sGroupType:n,i18nName:o,photoUrl:p}},fb=function(a,b,c){var d=[],e=0;
if(c&&0==c.indexOf("@"))var f=b,g=a;else var f=a,g=b;for(var h=0,i=f.length;i>h;h++)"function"!=typeof f[h]&&d.push(c&&0==c.indexOf("@")?gb(f[h].groupNo,f[h].name,f[h].Email,f.type,e++):gb(f[h].Key,f[h].Name,f[h].Email,f.type,e++));
if(c)for(var h=0,i=g.length;i>h;h++)"function"!=typeof g[h]&&d.push(c&&0==c.indexOf("@")?gb(g[h].Key,g[h].Name,g[h].Email,g.type,e++):gb(g[h].groupNo,g[h].name,g[h].Email,g.type,e++));
return f=g=null,d},gb=function(a,b,c,d,e){if(c=c||"",b=b||"",b&&""!=b&&0==b.indexOf("@")&&b.length>1)var f=zb(sb(b));else if(mcCore.isNcs())var f=b?"&quot;"+zb(sb(b.split("/")[0]))+"&quot;&lt;"+sb(c)+"&gt;":sb(c);else var f=b?"&quot;"+zb(sb(b))+"&quot;&lt;"+sb(c)+"&gt;":sb(c);
var g=K("nListMaxLength");return{key:a,name:g>0&&b.length>g?b.substring(0,g)+"...":b,email:c,in_txt:f.replace(/ /gi,"&#32;"),
parsed:tb(b),in_delele_button_html:ib(d,e,a),clickcr_msg:hb(d)}},hb=function(a){return"recentaddr"==a?"wrh*l.recentaddr":"myaddrbook"==a?"wrh*l.oftenaddr":"wrh*l.addr";
},ib=function(a,b,c){var d="recentaddr"==a?nLang.c.del:nLang.c.cannot_delete_saved_address;return"recentaddr"==a?['<a class="btn_del _click(maCore|deleteRecentAddress|',v,"|",b,"|",c,'|true) _stopDefault" title="',d,"\" href='#'>","<img src='https://",wm.staticDomain,"/static/pwe/nm/b.gif' width='8' height='7' title='",d,"' class='deleteBtn'>","</a>"].join(""):["<img src='https://",wm.staticDomain,"/static/pwe/nm/b.gif' width='8' height='7' title='",d,"' class='deleteBtn2' style='display:none;'>"].join("");
},jb=function(a){return"undefined"==typeof a?K("sQueryFormat"):(K("sQueryFormat",a),r=new RegExp(a.replace(/([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\])/g,"\\$1"),"g"),
this)},kb=function(a){if("@"==i.text()&&(i.$value().value=""),!$Element(a.element))return Y(),H("onBlur"),
!1;var b=$Element(a.element);b.attr("id")==i.attr("id")?i.$value().value&&(j.visible()?Y():mb()):(bNotMoveFocus=$Element("toUL").isParentOf(a.element)&&"to"!=v||$Element("ccUL").isParentOf(a.element)&&"cc"!=v||$Element("bccUL").isParentOf(a.element)&&"bcc"!=v?!0:!1,
j.isParentOf(a.element)||C.isParentOf(a.element)||(i.$value().value?(null!=t,P()):Y()))},lb=function(a){
var b=K("sFocusClassName");o._isTimerRunning()||n||(S(),o._onFocus());var c,d=a.key(),e=0;if(jindo.$Agent().navigator().opera&&pb(a),
13==d.keyCode&&d.enter?(a.stop(jindo.$Event.CANCEL_DEFAULT),null!=t?O():P()):9==d.keyCode&&null===t&&P(),
d.down||d.up||9==d.keyCode){if(K("bDisabled"))return!1;if(i&&i.$value().value){if(!(p>0))return!0;Z(),
jindo.$Agent().os().mac,t&&!t.$value().parentNode&&(t=null);try{e=k.$value().childNodes.length}catch(f){
return!1}if(!t)return d.down||9==d.keyCode&&!d.shift?(e&&(t=Ab(k)),t&&(jindo.$Element(t._element).addClass(b),
Z()),void a.stop()):void Y();jindo.$Element(t._element).removeClass(b),c=Ab(t).removeClass(b).parent().$value();
var g=$$.getSingle("#autocomplete_type").checked,h=g?168:184,j=g?54:25;$$.getSingle(".autoAddr li")&&(j=$Element($$.getSingle(".autoAddr li")).height()),
d.down||9==d.keyCode&&!d.shift?(c.nextSibling&&(t=t.next(),t._element.offsetTop>h&&(t.parent().$value().scrollTop+=j)),
a.stop()):(c.previousSibling&&(t=t.prev(),t._element.offsetTop-t.parent().$value().scrollTop<h&&(t.parent().$value().scrollTop-=j)),
a.stop()),t?jindo.$Element(t._element).addClass(b):Y()}}},mb=function(){var a=i.$value().value,b=a.charAt(a.length-1),c=encodeURI(b);
if(a.length>0&&";"!=b&&","!=b&&(g=[],ab(a)),a.length<1&&Y(),H("changeInput"),null!=t||null===f)";"==b&&P();else if(";"==b||","==b||" "===b||"%0A"==c||"%0D"==c){
if(/^\s*@.*/.test(a)&&" "==b)return;P()}},nb=function(){E=null},ob=function(){9==E&&i.$value().focus();
},pb=function(a){E=a.key().keyCode},qb=function(a){if(""==a)return[];var b=tb(a);if("undefined"==typeof h)return"";
var c=[];return jindo.$A(h).forEach(function(a){"undefined"!=typeof a&&(a.parsed.substr(0,b.length)==b||a.email.toUpperCase().substr(0,b.length)==b)&&c.push(a);
}),c},rb=function(){var a=fb(h);delete h,h=a},sb=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},tb=function(a){
for(var b=a,c="",d=0;d<b.length;d++){var e=b.charCodeAt(d),f=[];if(e>=32&&47>=e||e>=58&&64>=e||e>=91&&96>=e||e>=123&&126>=e)f.push(String.fromCharCode(e));else if(e>=65&&122>=e)f.push(String.fromCharCode(e).toUpperCase());else if(e>=48&&57>=e)f.push(String.fromCharCode(e).toUpperCase());else if(e>=12593&&12686>=e){
var g=String.fromCharCode(e);f.push(y[g])}else if(e>=44032&&55203>=e){var h,i=e-44032,j=[];j[0]=parseInt(i/588,10),
h=i%588,j[1]=parseInt(h/28,10),j[2]=h%28;var k=y[x[j[0]]],l=z[j[1]],m=A[j[2]];""!=k&&f.push(k),""!=l&&f.push(l),
""!=m&&f.push(m)}c+=f.join("")}return c.replace(/\s/g,"")},ub=function(a,b,c){var d=c?xb(a,b):wb(a,b);
return""==d?zb(a):d},vb=function(a,b,c){var d=c?xb(a,b):wb(a,b),e=""==d?yb(b,a):yb(b,d);return mcCore.replaceSpecialChar(e).replace(/(&lt;strong&gt;)/g,"<strong>").replace(/(&lt;\/strong&gt;)/g,"</strong>");
},wb=function(a,b){a=a?a:"",b=b?b:"";var c="",d=a.toUpperCase(),e=b.toUpperCase(),f=K("sEmTagName"),g=d.indexOf(e);
return-1!=g&&(0==g?(c="<"+f+">",c+=a.substr(0,b.length),c+="</"+f+">",c+=a.substr(b.length)):(c=a.substr(0,g),
c+="<"+f+">",c+=a.substr(g,b.length),c+="</"+f+">",g+b.length<a.length&&(c+=a.substr(g+b.length)))),
c},xb=function(a,b){var c="",d=a.replace(/ /g,""),e=b.replace(/ /g,""),f=K("sEmTagName");if(e==d.substring(d.length-e.length)){
for(var g=0,h=0;h<d.length-e.length;g++)" "!==a.substring(g,g+1)&&h++,c+=a.substring(g,g+1);c+="<"+f+">";
for(var i=g,j=0;j<e.length;i++)" "!==a.substring(i,i+1)&&j++,c+=a.substring(i,i+1);c+="</"+f+">"}return c;
},yb=function(a,b){var c,d,e,f={"ㄱ":"[가-낗]","ㄴ":"[나-닣]","ㄷ":"[다-띻]","ㄹ":"[라-맇]","ㅁ":"[마-밓]","ㅂ":"[바-삫]",
"ㅅ":"[사-앃]","ㅇ":"[아-잏]","ㅈ":"[자-찧]","ㅊ":"[차-칳]","ㅋ":"[카-킿]","ㅌ":"[타-팋]","ㅍ":"[파-핗]","ㅎ":"[하-힣]"},g=K("sEmTagName"),h="";
if(/^[ㄱ-ㅎ]*$/.test(a)){for(c=0,d=a.length;d>c;c++)h+=f[a[c]];if(e=b.match(new RegExp(h,"g")))for(c=0,
d=e.length;d>c;c++)b=b.replace(e[c],"<"+g+">"+e[c]+"</"+g+">")}return b},zb=function(a){return a.replace(/(<)/gi,"&lt;").replace(/(>)/gi,"&gt;");
},Ab=function(a){var b=a.$value().firstElementChild||a.$value().firstChild;if(!b)return null;for(;b&&1!=b.nodeType;)b=b.nextSibling;
return b?jindo.$Element(b):null},Bb=function(a){var b=a.$value().lastElementChild||a.$value().lastChild;
if(!b)return null;for(;b&&1!=b.nodeType;)b=b.previousSibling;return b?jindo.$Element(b):null},Cb=function(){
return i.$value()};return function(a,b,c,d,e){F={},F._htSetter={},v=a,K(B),K(e),g=[],C=$Element(a),i=$Element(c).attr("autocomplete","false"),
j=$Element(d),l=$Element("atcp_"+a.split("$")[0]),D=[],D.focus=jindo.$Fn(R,this).attach(i.$value(),"focus"),
D.click=jindo.$Fn(kb,this).attach(window.document,"click"),D.keydown=jindo.$Fn(lb,this).attach(i,jindo.$Agent().os().mac&&jindo.$Agent().navigator().firefox?"keypress":"keydown"),
jindo.$Agent().navigator().opera&&(D.blur=jindo.$Fn(ob,this).attach(i,"blur"),D.focus=jindo.$Fn(nb,this).attach(i,"focus")),
jb(K("sQueryFormat"));var f=null;f=$Agent().navigator().ie&&6==$Agent().navigator().version?{activateOnload:!1
}:{nInterval:100,bUseTimerOnIE:!0,activateOnload:!1},o=new jindo.WatchInput(c,f),o.attach({change:jindo.$Fn(mb,this).bind()
}),o.start()}(a,b,c,d,e),{getInputElement:Cb,deleteDataByIndex:V,_setCurrentInputValue:P,deactivate:L,
setValue:N,setSelected:M,showSuggestLayer:$,refreshSuggestLayer:T,attach:I,fireEvent:H,detach:J,repaint:X
}};var DragAndDropComponent=jindo.$Class({$init:function(a){this._setOption(a),this._assignObject(),
this._attachDragEventHandler(),this._attachDropEventHandler()},getDraggingArea:function(){return jindo.$(this.oOption.sDraggingAreaId);
},_setOption:function(a){this.oOption=a,this.oOption.bUseEventObject="undefined"!=typeof a.bUseEventObject||a.bUseEventObject===!0?!0:!1;
},_assignObject:function(){this.sDragAreaId=this.oOption.sDragAreaId,this.sDraggingAreaId=this.oOption.sDraggingAreaId,
this.sDragAreaClassName=this.oOption.sDragAreaClassName,this.aDropAreaClassName=this.oOption.aDropAreaClassName,
this.sCursorSyleOfOpenhand="url('https://"+wm.staticDomain+"/static/pwe/common/deskhome/openhand8.cur'),auto",
this.sCursorStyleOfClosedhand="url('https://"+wm.staticDomain+"/static/pwe/common/deskhome/closedhand8.cur'),auto",
this.nThreshold="undefined"==typeof this.oOption.nThreshold?2:this.oOption.nThreshold,this.oDragArea=new jindo.DragArea($(this.sDragAreaId),{
sClassName:this.sDragAreaClassName,nThreshold:this.nThreshold,bFlowOut:!0}),this.aoDropArea=[];for(var a=0;a<this.aDropAreaClassName.length;a++){
var b=this.aDropAreaClassName[a];this.aoDropArea[a]=new jindo.DropArea(document,{sClassName:b,oDragInstance:this.oDragArea
})}},_changeCursor:function(){var a=jindo.$$("."+this.sDragAreaClassName);jindo.$A(a).forEach(function(a){
this._changeCursorStyle(a,this.sCursorStyleOfOpenhand)},this),this.getDraggingArea().style.cursor=this.sCursorStyleOfClosedhand;
},_changeCursorStyle:function(){},_showDraggingLayer:function(){jindo.$Element(this.getDraggingArea()).show();
},_hideDraggingLayer:function(){jindo.$Element(this.getDraggingArea()).hide()},_fixDraggingLayerPosittion:function(a){
var b=a.weEvent.pos(),c=jindo.$Element(this.getDraggingArea());c.show().offset(b.pageY+10,b.pageX+5).hide();
},_attachDragEventHandler:function(){var a=this;this.oDragArea.attach({handleDown:function(b){this._welTarget=jindo.$Element(b.elDrag),
a.oOption.bUseEventObject?a.fHandelDownEffect(this._welTarget,b.weEvent):a.fHandelDownEffect(this._welTarget),
a._fixDraggingLayerPosittion(b)},handleUp:function(b){a.oOption.bUseEventObject?a.fHandelUpEffect(this._welTarget,b.weEvent):a.fHandelUpEffect(this._welTarget);
},dragStart:function(b){jindo.$Element(document.body).addClass("dragging"),b.elDrag=a.getDraggingArea(),
a._showDraggingLayer(b),a.oOption.bUseEventObject?a.fDragStartEffect(this._welTarget,b.weEvent):a.fDragStartEffect(this._welTarget);
},dragEnd:function(b){jindo.$Element(document.body).removeClass("dragging"),a._hideDraggingLayer(b),
a.oOption.bUseEventObject?a.fDragEndEffect(this._welTarget,b.weEvent):a.fDragEndEffect(this._welTarget);
}})},_attachDropEventHandler:function(){for(var a=this,b=0;b<this.aoDropArea.length;b++)this.aoDropArea[b].attach({
over:function(b){a.fDropAreaOver(jindo.$Element(b.elDrop))},out:function(b){a.fDropAreaOut(jindo.$Element(b.elDrop));
},move:function(b){a.oOption.bUseEventObject?a.fDropAreaMove(jindo.$Element(b.elDrop),b.weEvent):a.fDropAreaMove(jindo.$Element(b.elDrop));
},drop:function(b){a.oOption.bUseEventObject?a.fDropAreaDrop(jindo.$Element(b.elDrop),b.weEvent):a.fDropAreaDrop(jindo.$Element(b.elDrop));
}})},_showDragCover:function(){var a=$Element("dimmedForWriteDrag"),b=$Element("dimmedForWriteDragBg"),c=$Element("dimmedForWriteDragBgIframe"),d=Number(mCom.nWidthOfPnb)+Number(mCom.nWidthOfSnb),e=$Agent().navigator().ie&&8==$Agent().navigator().version?41:29,f=$Element("subject").offset().top+23,g=$Element("cont_flex_area").offset().top;
f=g>f?g:f,a.offset(f,d),b.offset(f,d);var h=$Document().clientSize(),i=h.width-d,j=h.height-f-e;a.css({
_width:i+"px",_height:j+"px",width:i+"px",height:j+"px"}),b.css({_width:i+"px",_height:j+"px",width:i+"px",
height:j+"px"}),c.css({_width:i+"px",_height:j+"px",width:i+"px",height:j+"px"}),a.show(),b.show()},
_hideDragCover:function(){var a=$Element("dimmedForWriteDrag"),b=$Element("dimmedForWriteDragBg");a.offset(0,0),
b.offset(0,0),a.hide(),b.hide()}});maRule=function(){var a="}7}m{29{",b="}7}m{29{E",c=function(c){if(c=c.replace(/[;,]$/g,""),
"string"!=typeof c||""==c)return null;var d,e=[];c=$S(c).trim().$value();var f=c.split(b);if(f.length<=1&&(f=c.split(a)),
c.indexOf(b)>-1?d="E":c.indexOf(a)>-1&&(d="P"),c=f[0],c&&0!=c.indexOf("@")&&(f[1]=""),e=c.match(/^(.*)\s*<(.+@.+\..+)>/),
e&&""!=$S(e[1]).trim().$value().replace(/^("|')/g,"").replace(/("|')$/g,"")){for(var g=$S(e[1]).trim().$value(),h=$S(e[1]).trim().$value().replace(/^("|')/g,"").replace(/("|')$/g,"").replace(/\\+$/g,"");g!=h;)g=h,
h=h.replace(/^("|')/g,"").replace(/("|')$/g,"").replace(/\\+$/g,"");return{sName:g,sEmail:$S(e[2]).trim().$value(),
bGroup:!1,bSelected:!1,bPass:!1,bDomainPass:!1,bGroupPass:!1,sGroupSN:"undefined"!=typeof f[1]?f[1]:""
}}return c.match(/^<(.+@.+\..+)>$/)?c=c.replace(/(>$)/,"").replace(/(^<)/,""):c.match(/^(.*)\s*<(.+@.+\..+)>/)&&(c=c.match(/^(.*)\s*<(.+@.+\..+)>/)[2]),
{sName:c,sEmail:c,bGroup:o(c),bSelected:!1,bPass:!1,bDomainPass:!1,bGroupPass:!1,sGroupSN:"undefined"!=typeof f[1]?f[1]:"",
sGroupType:d}},d=function(a){return i(a,0)},e=function(a){return g(a,"All")},f=function(a){return g(a,"Selected");
},g=function(c,e){for(var f="",g=c.keys(),h=0;h<g.length;h++)if("All"==e||c.$(g[h]).bSelected){var i=c.$(g[h]).sGroupSN,j=c.$(g[h]).sGroupType;
f=null!=i&&""!=i&&0!=i?"E"==j?[f,d(c.$(g[h]))+b+c.$(g[h]).sGroupSN,";"].join(""):[f,d(c.$(g[h]))+a+c.$(g[h]).sGroupSN,";"].join(""):[f,d(c.$(g[h])),";"].join("");
}return f},h=function(a){return $S(i(a,1)).escapeHTML()},i=function(a,b){var c=a.sName,d=a.sEmail,e=a.bGroup;
switch(b){case 0:return e?c:""==c?d:c==d?d:['"',c,'"',"<",d,">"].join("");case 1:return e?c.substr(1):d==c?d:""!=c?[c," <",d,">"].join(""):d;
}},j=function(a,b,d){var e=c(b);return e?(d.add(a,e),d.$(a)):null},k=function(a,b,d){var e=c(b);return e?(d.$(a,e),
d.$(a)):null},l=function(a,b){b.remove(a);var c=a.split("$")[0];maCore.setTotalRecipientCount(c)},m=function(a,b){
return[a,"$",b].join("")},n=function(a){return""!=a&&" "!==a&&"@"!=a&&'"'!=a&&";"!=a&&","!=a},o=function(a){
return"string"!=typeof a?!1:0===a.indexOf("@")?!0:!1},p=function(a,b){return oAddrTable[a].$(b).sEmail;
},q=function(a,b){return oAddrTable[a].$(b).bGroup},r=function(a,b){return oAddrTable[a].$(b).bSelected;
},s=function(a,b){return oAddrTable[a].$(b).bPass},t=function(a,b,c,d){oAddrTable[a].$(b).bPass=c,(mcCore.isNwe()||mcCore.isNcs())&&d&&(oAddrTable[a].$(b).nInternalAddrCnt=d?d.internalCount:0,
oAddrTable[a].$(b).nExternalAddrCnt=d?d.externalCount:1)},u=function(a,b,c,d){oAddrTable[a].$(b)&&(oAddrTable[a].$(b).bDomainPass=c,
(mcCore.isNwe()||mcCore.isNcs())&&d&&(oAddrTable[a].$(b).nInternalAddrCnt=d.internalCount,oAddrTable[a].$(b).nExternalAddrCnt=d.externalCount));
},v=function(a,b,c,d,e,f,g,h){if(oAddrTable[a].$(b).bGroupPass=c,oAddrTable[a].$(b).sGroupSN=d,oAddrTable[a].$(b).cType=e,
oAddrTable[a].$(b).sDomainId=f,oAddrTable[a].$(b).sAccessible=h,g){oAddrTable[a].$(b).nInternalAddrCnt=g.internalCount,
oAddrTable[a].$(b).nExternalAddrCnt=g.externalCount;var i=$$.getSingle("div.addr_obj span.addr_cnt",$Element(b).$value());
if(i)i.innerHTML=g.totalCount;else{var j='<span class="addr_cnt" internal="'+g.internalCount+'" external="'+g.externalCount+'">'+g.totalCount+"</span>";
$Element($$.getSingle("div.addr_obj span._addresObjViewText",$Element(b).$value())).afterHTML(j)}}"Y"!=h||maTemplate.getAddressObjGroupLinkElement($Element(b))||$Element($$.getSingle("div.addr_obj",$Element(b).$value())).prependHTML(maTemplate.makeAddressObjGroupLinkHtml()+" ");
},w=function(a,b,c,d,e,f,g,h,i){"domain"==d?"D"==f||"G"==f||"E"==f?v(a,b,c,e,f,g,h,i):u(a,b,c,h):"group"==d?v(a,b,c,e,f,g,h,i):"email"==d&&t(a,b,c,h);
},x=function(a){var b,c,d=!1,e=a.length,f=[],g=[];for(b=0;e>b;b++){switch(c=a.charAt(b)){case"\n":case"	":
if(0==g.length)continue;c=";";break;case" ":if(0==g.length)continue;maRule.inculdeEmail(g.join(""))&&(c=";");
break;case",":d||(c=";");break;case'"':d=!d;break;case"<":d=!1}";"==c||","==c?g=[]:g.push(c),(b!=e-1||";"!=a.charAt(b)&&","!=a.charAt(b))&&(f[b]=c);
}return f.join("").match(/"[^;]+;[^"]+"\s?<[^\>]+>[^;]*|[^;]+/g)},y=function(a){return a.match(/^[~`!#$%\^&*_\-+={}\|'\.\?\/\w]+@[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)+/)?!0:!1;
};return{toAddressObject:c,toAddressString:d,toAddressStringAll:e,toAddressStringSelected:f,toAddressDisplayString:h,
addAddressObject:j,updateAddressObject:k,deleteAddressObject:l,generateAddressObjectElementId:m,isAllowString:n,
isGroupName:o,getAddressObjectEmail:p,isGroupAddressObject:q,isSelectedAddressObject:r,setAddressObjectEmailValidation:t,
setAddressObjectValidation:w,setAddressObjectDomainValidation:u,setAddressObjectGroupValidation:v,isPassAddressObjectEmail:s,
toAddressArray:x,inculdeEmail:y}}(),maTemplate=function(){var a=function(b){return b.hasClass("_addressObj")?b:a(b.parent());
},b=function(a){return $Element($$.getSingle(">div",$(a)))},c=function(a){return a?$$(">div>div",a.$value()):[];
},d=function(a){var b=c(a),d=b[0];return d},e=function(a){var b=d(a);return $$.getSingle(">span._addresObjViewText",b);
},f=function(a){var b=c(a),d=b[1];return d},g=function(a){var b=f(a);return $$.getSingle(">input",b);
},h=function(a){return $$.getSingle(">div>div>span.addr_cnt",a.$value())},i=function(a){return $$.getSingle(">div>div>a._addressObjGroup",a.$value());
},j=function(){return'<a href="#" class="btn_group _addressObjGroup _click(maCore|expandGroupAddressObject) _stopDefault"><img class="_addressObjGroup" src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif" width="12" height="12" alt="'+nLang.c.unfold+'"></a> ';
},k=function(a,b){var c=a.split("$")[0],d=maRule.toAddressDisplayString(b),e=b.bGroup?j():"",f="10"==b.sExcutiveStatus?"officer":"";
return["<li id='",a,"' class='_addressObj _draggable invalid ",f,"'>","<div class='_addressObjView'>","<div class='addr_obj'>",e,"<span class='_addresObjViewText _click(maCore|addressObjSelect|"+c+")'>",d,"</span>","<a href='#' class='btn_edit _addressObjEdit _click(maCore|addressObjEdit|"+c+") _stopDefault'><img class='_addressObjEdit' src='https://"+wm.staticDomain+"/static/pwe/nm/b.gif' width='8' height='8' alt='",nLang.c.edit,"' /></a>","<a href='#' class='btn_del _addressObjDelete _click(maCore|addressObjDelete|"+c+") _stopDefault'><img class='_addressObjDelete' src='https://"+wm.staticDomain+"/static/pwe/nm/b.gif' width='8' height='8' alt='",nLang.c.del,"' /></a>","</div>","<div class='addr_input'>","<input id='",a,"_editInput' type='text' title='",nLang.o.address,"' value='' style='width:110px' />","</div>","<span class='drag_guide'></span>","</div>","</li>"].join("");
},l=function(){return["<li class='no_addr'>",nLang.w.no_use_recent_mail_address,"</li>"].join("")},m=function(){
return["<li class='no_addr'>",nLang.w.no_often_used_mail_address,nLang.w.auto_save_often_used_mail_address,"</li>"].join("");
};return{findAddressTopObjElement:a,getAddressObjTopDivByElementId:b,_getAddressObjElements:c,getAddressObjViewDivElement:d,
getAddressObjViewElement:e,getAddressObjEditDivElement:f,getAddressObjEditElement:g,getAddressObjGroupLinkElement:i,
getAddressObjGroupCountElement:h,makeAddressObjGroupLinkHtml:j,makeAddressObjHtml:k,getRecentAddressEmptyHtml:l,
getImportantAddressEmptyHtml:m}}(),maCore=function(){var a=!1;oAutoComplete={},oEditAutoComplete={},
oAddrIndex={to:0,cc:0,bcc:0},oAddrLastSelectedIndex={to:"",cc:"",bcc:""},oAddrEnabled={to:!1,cc:!1,bcc:!1
},oAddrTable={to:$H(),cc:$H(),bcc:$H()},oAddrCountTable={to:{internal:0,external:0},cc:{internal:0,external:0
},bcc:{internal:0,external:0}};var b={};bMouseDragMultiSelect={to:!1,cc:!1,bcc:!1},bMouseDragMoveMode={
to:!1,cc:!1,bcc:!1},bMouseDragMoveModes=!1,bNotMoveFocus=null,htMouseDragMoveInsertAction={to:"",cc:"",
bcc:""};var c={sAddressObjectId:"",sInsertDirection:""},d={to:$Element($$.getSingle("#toUL .new_addr")),
cc:$Element($$.getSingle("#ccUL .new_addr")),bcc:$Element($$.getSingle("#bccUL .new_addr"))},e=function(){
$Element("toInput")&&($Element("toInput").show(),$Element("ccInput").show(),$Element("bccInput").show()),
a?(g(),oAddrIndex={to:0,cc:0,bcc:0},oAddrTable={to:$H(),cc:$H(),bcc:$H()},oAddrCountTable={to:{internal:0,
external:0},cc:{internal:0,external:0},bcc:{internal:0,external:0}},htMouseDragMoveInsertAction={to:"",
cc:"",bcc:""}):(oAutoComplete={to:h("to","toInput"),cc:h("cc","ccInput"),bcc:h("bcc","bccInput")},m("to"),
m("cc"),m("bcc"),hb("to"),hb("cc"),hb("bcc"),ib("to"),ib("cc"),ib("bcc"),f("to"),$Element("clipboardCache").attach("keydown",$Fn(Vb,this).bind()),
a=!0)},f=function(a){("undefined"==typeof b[a]||null===b[a])&&(b[a]=new DragAndDropAddressObject({sDragAreaId:"divWrite",
sDraggingAreaId:"draggingDiv3",sDragAreaClassName:"_draggable",aDropAreaClassName:["_droppable","_droppableAll"],
bUseEventObject:!0,sTarget:a,nThreshold:3}))},g=function(){w("to"),w("cc"),w("bcc"),Pb(),A("to"),A("cc"),
A("bcc")},h=function(a,b){var c={bDataFromAjax:!0,htLocalData:null,sUrl:"/json/address/autoComplete/"
};return new jindo.AutoCompleteSE(a,a+"UL",b,"atcp",c)},i=function(a,b){("undefined"==typeof oAutoComplete[b]||null===oAutoComplete[b])&&(oAutoComplete[b]=h(b,b+"_editInput"),
m(b)),oAutoComplete.temp=oAutoComplete[a],oAutoComplete[a]=oAutoComplete[b]},j=function(a,b){oAutoComplete[b]&&(oAutoComplete[b].deactivate(),
oAutoComplete[b]=null),oAutoComplete[a]=oAutoComplete.temp},k=function(a,b){b=b.split("$")[0],oAutoComplete[b].setValue(a),
$(b+"Input").focus()},l=function(a,b){oAutoComplete[b].setSelected(a)},m=function(a){var b=oAutoComplete[a];
b.attach({changeInput:$Fn(n).bind(a),setInput:$Fn(o).bind(a),onFocus:$Fn(p).bind(a),acShow:$Fn(q).bind(a),
acHide:$Fn(r).bind(a)})},n=function(a){var b=oAutoComplete[a].getInputElement(),c=$S(b.value).escapeHTML();
$Element("toInputMeasure").html(c);var d=$Element("toInputMeasure").width()+35,e=b.clientWidth;730>e&&730>d&&d>e&&$Element(b).width(d);
},o=function(a,b){maCore.currentInput=b,b==$(a+"Input")?s(a,b.value):(a=a.split("$")[0],cb(a,b)),$Element(a+"Input").width(60);
},p=function(a){a=a.split("$")[0],Nb($(a+"Input"))},q=function(a){a=a.split("$")[0],$Element("atcp_suggest_layer_show_"+a).addClass("on");
},r=function(a){a=a.split("$")[0],$Element("atcp_suggest_layer_show_"+a).removeClass("on"),Sb()},s=function(a,b){
var c=maRule.toAddressArray(b);if(!c||""==b||"@"==b)return void w(a);if("bcc"==a){var d="/bccAttach/?showBcc="+$Element("bccview").visible()+"&bccList="+b;
$$.getSingle("#testFrame").src="/testForLogging"+d}for(var e=0;e<c.length;e++)c[e]&&t(a,c[e]);x(a),w(a),
R(a)},t=function(a,b){var c=a,d=oAddrIndex[a]++,e=maRule.generateAddressObjectElementId(c,d),f=oAddrTable[a];
return maRule.addAddressObject(e,b,f),u(e,a),e},u=function(a,b){var c=$Element(b+"Input"),d=oAddrTable[b],e=d.$(a);
if(""==e.sGroupSN||null==e.sGroupSN){var f=c.attr("sn");""!=f&&(e.sGroupSN=f)}if(""==e.sGroupType||null==e.sGroupType){
var g=c.attr("grouptype");""!=g&&(e.sGroupType=g)}if(""==e.sExcutiveStatus||null==e.sExcutiveStatus){
var h,i="";(h=$Element(maCore.currentInput))&&(i=h.attr("officer"),h.attr("officer","")),e.sExcutiveStatus=i;
}var j=maTemplate.makeAddressObjHtml(a,e);maTemplate.findAddressTopObjElement(c).before($(j))},v=function(a){
if("undefind"!=typeof bNotMoveFocus&&1==bNotMoveFocus)bNotMoveFocus=!1;else{var b=$(a+"Input");$Element(b).visible()&&b.focus();
}},w=function(a){var b=$(a+"Input"),c=$Element(b);b.value="",c.attr("sn",""),c.width(60)},x=function(a){
var b=oAddrTable[a],c=$(a);c.value=maRule.toAddressStringAll(b)},y=function(a){if(mCom.bWriteTome)return!1;
var b="B"==a.element.tagName.toUpperCase()?a.element.parentNode:a.element,c=$Element(b),d=null;if(c.hasClass("_addressObjGroup")){
d=maTemplate.findAddressTopObjElement(c);var e=d.attr("id"),f=e.split("$")[0],g=oAddrTable[f],h=g.$(e),i=h.sGroupSN,j=h.sEmail,k=h.cType,l=h.sDomainId,m=$Fn(z).bind(f,d);
"D"==k||"G"==k||"E"==k?X("/json/address/contactGroup/get",m,{domainId:l,type:k,addr:j,groupNo:i}):X("/json/address/group/get",m,{
groupNo:i})}},z=function(a,b,c){for(var d="",e=c.addrList,f=0;f<e.length;f++)d=[d,e[f].addrValue,";"].join("");
D(a,b),s(a,d)},A=function(a){C(a,"all")},B=function(a){C(a,"selected")},C=function(a,b){for(var c=oAddrTable[a],d=c.keys(),e=0;e<d.length;e++)if("all"==b||c.$(d[e]).bSelected){
var f=$Element(d[e]),g=f.attr("id");G(g,a),E(c,g),F(f)}x(a)},D=function(a,b){var c=oAddrTable[a],d=b.attr("id");
G(d,a),E(c,d),F(b),v(a),x(a)},E=function(a,b){maRule.deleteAddressObject(b,a)},F=function(a){a.leave();
},G=function(a){oAutoComplete[a]&&(oAutoComplete[a].deactivate(),oAutoComplete[a]=null)},H=function(a,b){
I(a,b),L(a,b),O(a,b)},I=function(a,b){maRule.isGroupAddressObject(a,b)||(J(a,b),K(a,b))},J=function(a,b){
var c=maRule.getAddressObjectEmail(a,b),d=mcCore.isEmail(c);maRule.setAddressObjectEmailValidation(a,b,d);
},K=function(a,b){var c=$Element(b),d=maRule.isPassAddressObjectEmail(a,b);Z(c,d,null,null)},L=function(a,b){
M(a,b)},M=function(a,b){var c=$Fn(N,this).bind(a,b),d=V(a,b,"domain");W(c,d)},N=function(a,b,c){var d=c.itemList[0];
U(a,d),Y(a,d)},O=function(a,b){maRule.isGroupAddressObject(a,b)&&P(a,b)},P=function(a,b){var c=$Fn(Q,this).bind(a,b),d=V(a,b,"group");
W(c,d)},Q=function(a,b,c){var d=c.itemList[0];U(a,d),Y(a,d)},R=function(a){for(var b=oAddrTable[a],c=b.keys(),d=0;d<c.length;d++)I(a,c[d]);
for(var e="",f=0;f<c.length;f++){var g=c[f],h=maRule.isPassAddressObjectEmail(a,g),i=maRule.isGroupAddressObject(a,g);
if(h||!h||i){var j=i?"group":"domain",k=V(a,g,j);e=e+k+";"}}e=e.substr(0,e.length-1),""!==e&&S(a,e)},S=function(a,b){
var c=$Fn(T,this).bind(a);W(c,b)},T=function(a,b){oAddrCountTable[a].internal=b.internalCount,oAddrCountTable[a].external=b.externalCount,
U();for(var c=b.itemList,d=0;d<c.length;d++){var e=c[d];Y(a,e)}},U=function(a,b){if(mcCore.isNwe()||mcCore.isNcs()){
if(b){var c=b.sIndex;oAddrTable[a].$(c).nInternalAddrCnt=b.internalCount,oAddrTable[a].$(c).nExternalAddrCnt=b.externalCount;
}a&&(oAddrCountTable[a].internal=0,oAddrCountTable[a].external=0,oAddrTable[a].forEach(function(b){oAddrCountTable[a].internal+=Number(b.nInternalAddrCnt),
oAddrCountTable[a].external+=Number(b.nExternalAddrCnt)}));var d=Number(oAddrCountTable.to.internal)+Number(oAddrCountTable.cc.internal)+Number(oAddrCountTable.bcc.internal),e=Number(oAddrCountTable.to.external)+Number(oAddrCountTable.cc.external)+Number(oAddrCountTable.bcc.external);
if(!isNaN(d)&&!isNaN(e)){oAddrCnt.intAddrCnt=d,oAddrCnt.extAddrCnt=e;var f=$Element("security_external_cnt");
f&&(f.text(oAddrCnt.extAddrCnt),oAddrCnt.extAddrCnt>mEnv.maxExternalRecipientCount?$Element("security_external_cnt").parent().addClass("exceed"):$Element("security_external_cnt").parent().removeClass("exceed"));
}}},V=function(a,b,c){var d=oAddrTable[a],e=d.$(b);return null!=e.sGroupSN&&""!=e.sGroupSN?[b,",",c,",",e.sEmail,",",e.sGroupSN].join(""):[b,",",c,",",e.sEmail,",",e.sExcutiveStatus].join("");
},W=function(a,b){var c="/json/address/validate/";X(c,a,{addr:b})},X=function(a,b,c){var d=a,e=new $Ajax(d,{
type:"xhr",method:"post",onload:function(a){var d=a.json();"OK"==d.Result?b(d):c.Pass?b(d):alert(nLang.e.not_defined_acp_error+d.Message);
}});e.request(c)},Y=function(a,b){var c=b.sIndex,d=b.sType,e="Pass"==b.sValidationResult,f=b.groupSN,g=b.accessible?b.accessible:"Y",h=$Element(c),i=(b.cType||"").toUpperCase(),j=b.domainId||"",k=b.excutiveStatus&&10==b.excutiveStatus;
if((mcCore.isNwe()||mcCore.isNcs())&&(b.internalCount||b.externalCount))var l={internalCount:Number(b.internalCount),
externalCount:Number(b.externalCount),totalCount:Number(b.externalCount)+Number(b.internalCount)};maRule.setAddressObjectValidation(a,c,e,d,f,i,j,l,g),
Z(h,e,k,b)},Z=function(a,b,c,d){if(a){var e=$Element(maTemplate.getAddressObjViewElement(a)),f=a.text(),g=f.match(/(.*)\s*<(.+@.+\..+)>/),h=d?d.sType:"domain",i=d?Number(d.internalCount):0,j=d?Number(d.externalCount):0,k=d?d.cType:null,l=!1;
g&&(f=$S(g[2]).trim().$value()),!k||"D"!==k&&"G"!==k||(l=!0),h&&"group"===h&&(l=!0),l||mcCore.isEmail(f)||(a.removeClass("officer"),
a.addClass("invalid"),e.attr("title",nLang.e.invalid_mail_form_desc)),l&&0===i&&0===j&&(a.removeClass("officer"),
a.addClass("invalid"),e.attr("title",nLang.e.invalid_mail_form_desc)),b?!mcCore.isNcs()&&!mcCore.isNwe()||oc(f)?((l||mcCore.isEmail(f))&&(a.removeClass("invalid"),
e.attr("title","")),a.removeClass("caution"),a.removeClass("officer"),c&&a.addClass("officer")):(a.removeClass("invalid"),
e.attr("title",""),a.removeClass("officer"),a.addClass("caution")):"domain"===h?a.hasClass("invalid")||(a.addClass("caution"),
e.attr("title","")):(a.addClass("invalid"),e.attr("title",nLang.e.invalid_mail_form_desc))}},_=function(a,b){
if(mCom.bWriteTome)return!1;var c="B"==a.element.tagName.toUpperCase()?a.element.parentNode:a.element,d=$Element(c),e=null;
d.hasClass("_addresObjViewText")&&(e=maTemplate.findAddressTopObjElement(d),sb(b,a,e))},ab=function(a,b){
if(mCom.bWriteTome)return!1;var c="B"==a.element.tagName.toUpperCase()?a.element.parentNode:a.element,d=$Element(c),e=null;
d.hasClass("_addressObjDelete")&&(e=maTemplate.findAddressTopObjElement(d),D(b,e))},bb=function(a,b){
if(mCom.bWriteTome)return!1;var c="B"==a.element.tagName.toUpperCase()?a.element.parentNode:a.element,d=$Element(c),e=null;
d.hasClass("_addressObjEdit")&&(e=maTemplate.findAddressTopObjElement(d),fb(b,e))},cb=function(a,b){
var c=maTemplate.findAddressTopObjElement($Element(b)),d=c.attr("id"),e=b.value,f=oAddrTable[a],g=f.$(d).sEmail,h=e.match(/^(.*)\s*<(.+@.+\..+)>/);
h&&(e=$S(h[2]).trim().$value()),e!=g?(maRule.updateAddressObject(d,e,f),db(a,c),v(a),x(a),H(a,d)):(c.removeClass("edit"),
j(a,d),v(a))},db=function(a,b){var c=b.attr("id"),d=oAddrTable[a].$(c),e=maRule.toAddressDisplayString(d),f=maTemplate.getAddressObjViewElement(b);
$Element(f).html(e),b.removeClass("edit"),eb(a,b),j(a,c)},eb=function(a,b){var c=b.attr("id"),d=maRule.isGroupAddressObject(a,c),e=maTemplate.getAddressObjGroupLinkElement(b),f=maTemplate.getAddressObjGroupCountElement(b);
if(d){if(null===e){var g=maTemplate.makeAddressObjGroupLinkHtml(),h=maTemplate.getAddressObjViewElement(b);
$Element(h).before($(g))}}else null!==e&&$Element(e).leave(),null!==f&&$Element(f).leave()},fb=function(a,b){
var c=oAddrTable[a],d=b.attr("id"),e=c.$(d),f=maTemplate.getAddressObjEditElement(b),g=$Element(maTemplate.getAddressObjViewDivElement(b)).width();
b.addClass("edit"),i(a,d),$Element(f).width(g-10),f.value=e.sEmail,f.focus(),gb(f)},gb=function(a){if(a.setSelectionRange){
var b=2*a.value.length;a.setSelectionRange(b,b)}else a.value=a.value;a.scrollTop=999999},hb=function(a){
var b=$Element(a+"Div");b.attach("dblclick",$Fn(lb,this).bind(a)),b.attach("keydown",$Fn(jb,this).bind(a)),
b.attach("selectstart",$Fn(kb,this).bind()),$Element("atcp_suggest_layer_show_"+a).attach("click",$Fn(cc,this).bind(a));
},ib=function(a){var b=$Element(a+"Div");b.attach("mousedown",$Fn(mb,this).bind(a)),b.delegate("mousemove",function(a,b){
return"LI"===b.tagName||"UL"===b.tagName},$Fn(ob,this).bind(a))},jb=function(a,b){var c=b.element,d=b.key();
8==d.keyCode&&""==c.value?c==$(a+"Input")&&(b.stop(),Hb(a)):37==d.keyCode&&""==c.value?c==$(a+"Input")&&(b.stop(),
Hb(a)):d.ctrl&&65==d.keyCode?(b.stop(),Eb(a)):d.ctrl&&86==d.keyCode&&Wb(a)},kb=function(a){},lb=function(a,b){
b.stop();var c="B"==b.element.tagName.toUpperCase()?b.element.parentNode:b.element,d=$Element(c),e=null;
if(d.hasClass("_addresObjViewText")&&!mCom.bWriteTome){e=maTemplate.findAddressTopObjElement(d);var f=oAddrTable[a],g=e.attr("id"),h=f.$(g),i=h.cType;
if(mcCore.isNaver())if("D"==i||"G"==i){var j=h.sDomainId,k=h.sEmail;nc(j,k,i)}else fb(a,e);else{var l=d.query("!li");
if(l.hasClass("invalid"))fb(a,l);else{var m=h.sEmail;myCore.showSenderInfo(null,m)}}}},mb=function(a,b){
if(!mCom.bWriteTome){if(b.key().ctrl||"SPAN"!=b.element.tagName.toUpperCase())Nb(b.element),bMouseDragMultiSelect[a]=!0;else if(bMouseDragMultiSelect[a]=!1,
!b.key().ctrl&&$Element(b.element).hasClass("_addresObjViewText")){var c=maTemplate.findAddressTopObjElement($Element(b.element)),d=c.attr("id");
maRule.isSelectedAddressObject(a,d)||sb(a,b,c)}b.key().shift&&$Agent().navigator().ie&&11!==$Agent().navigator().version&&document.selection.empty(),
bMouseDragMultiSelect[a]&&!b.key().ctrl&&wb(a),maCore.fn_onMouseup=$Fn(nb,this).bind(a),$Element(document).attach("mouseup",maCore.fn_onMouseup);
}},nb=function(a,b){oAddrEnabled[a]?b.element===$(a+"UL")||b.element===$(a+"Input")?(wb(a),$(a+"Input").focus()):bMouseDragMultiSelect[a]?Lb(a):$Element(a+"UL").isParentOf(b.element)||wb(a):$Element(a+"UL").isParentOf(b.element)||wb(a),
oAddrEnabled[a]&&(bMouseDragMultiSelect[a]=!1),$Element(document).detach("mouseup",maCore.fn_onMouseup),
bMouseDragMoveModes=!1},ob=function(a,b){if(b.mouse().left&&oAddrEnabled[a]){var d=$Element(b.element);
if(d.hasClass("_addressObj")){var e=null,f="";if(bMouseDragMultiSelect[a]){if(e=maTemplate.findAddressTopObjElement(d),
f=e.attr("id"),b.key().ctrl)maRule.isSelectedAddressObject(a,f)||sb(a,b,e);else{var g=mCom.mousePos;if(g){
var h=b.pos();(Math.abs(g.pageX-h.pageX)>8||Math.abs(g.pageY-h.pageY)>8)&&ac(a,f)}}$Agent().navigator().firefox&&window.getSelection().removeAllRanges();
}if(bMouseDragMoveModes){if(bMouseDragMoveModes=!1,e=maTemplate.findAddressTopObjElement(d),f=e.attr("id"),
!f)return void qb(a);var i=e.width(),j=d.offset().left-e.offset().left+b.pos(!0).offsetX,k=Math.floor(100*j/i),l=k>50?"after":"before";
if(htMouseDragMoveInsertAction[a]={sAddressObjectId:f,sInsertDirection:l},c.sAddressObjectId===f&&c.sInsertDirection===l)return void(bMouseDragMoveModes=!0);
rb(),e.addClass("after"===l?"drop_behind":"drop_ahead"),c.sAddressObjectId=f,c.sInsertDirection="after"===l?"drop_behind":"drop_ahead",
bMouseDragMoveModes=!0}}else c.sAddressObjectId!==a+"LiTag"&&bMouseDragMoveModes&&qb(a)}},pb=function(){
rb(),c={sAddressObjectId:"",sInsertDirection:""}},qb=function(a){return c&&c.sAddressObjectId&&c.sAddressObjectId.indexOf(a+"LiTag")>-1?void(bMouseDragMoveModes=!0):(bMouseDragMoveModes=!1,
rb(),d[a].addClass("drop_ahead"),htMouseDragMoveInsertAction[a]={sAddressObjectId:a+"LiTag",sInsertDirection:"before"
},c.sAddressObjectId=a+"LiTag",c.sInsertDirection="drop_ahead",void(bMouseDragMoveModes=!0))},rb=function(){
if(c&&c.sAddressObjectId){var a=c.sAddressObjectId.match(/(.+)LiTag/),b=null;b=a?d[a[1]]:$Element(c.sAddressObjectId),
b&&b.removeClass(c.sInsertDirection)}},sb=function(a,b,c){Nb($(a+"Input"));var d=c.attr("id");b.key().ctrl||bMouseDragMultiSelect[a]?ub(oAddrTable[a],d):b.key().shift?vb(oAddrTable[a],d,oAddrLastSelectedIndex[a]):yb(oAddrTable[a],d),
!b.key().shift&&maRule.isSelectedAddressObject(a,d)&&xb(a,d),tb(a),Jb(a)},tb=function(a){for(var b=oAddrTable[a].keys(),c=0;c<b.length;c++){
var d=b[c],e=oAutoComplete[d];if("undefined"!=typeof e&&null!==e){var f=e.getInputElement();o(a,f)}}
},ub=function(a,b){Db(a,b)},vb=function(a,b,c){zb(a,b);for(var d=a.keys(),e=!1,f=0;f<d.length;f++)(d[f]==b||d[f]==c)&&(e=!e),
(e||!e&&(d[f]==b||d[f]==c))&&Cb(a,d[f])},wb=function(a){zb(oAddrTable[a],"-1"),xb(a,null),oAddrEnabled[a]&&tb(a);
},xb=function(a,b){oAddrLastSelectedIndex[a]=b},yb=function(a,b){Cb(a,b),zb(a,b)},zb=function(a,b){for(var c=a.keys(),d=0;d<c.length;d++){
var e=c[d];e!=b&&Ab(a,e)}},Ab=function(a,b){var c=maTemplate.getAddressObjTopDivByElementId(b);c.removeClass("selected"),
a.$(b).bSelected=!1},Bb=function(a){for(var b=a.keys(),c=0;c<b.length;c++){var d=b[c];Cb(a,d)}},Cb=function(a,b){
var c=maTemplate.getAddressObjTopDivByElementId(b);c.addClass("selected"),a.$(b).bSelected=!0},Db=function(a,b){
a.$(b).bSelected?Ab(a,b):Cb(a,b)},Eb=function(a){var b=oAddrTable[a].keys();if(b.length>0){Bb(oAddrTable[a]);
var c=b[b.length-1];xb(a,c),Jb(a)}},Fb=function(a,b){var c=oAddrTable[a].keys(),d=oAddrLastSelectedIndex[a];
b.shift||c[c.length-1]!=d?Ib(a,b,c):(zb(oAddrTable[a],"-1"),$(a+"Input").focus())},Gb=function(a,b){
var c=oAddrTable[a].keys();Ib(a,b,c.reverse())},Hb=function(a){var b=oAddrTable[a].keys();if(b.length>0){
var c=b[b.length-1];yb(oAddrTable[a],c),xb(a,c),Jb(a)}},Ib=function(a,b,c){var d=oAddrTable[a],e=oAddrLastSelectedIndex[a],f=!1;
if(b.shift){for(var g=0;g<c.length;g++)if(c[g]==e&&(f=!0),f){if(!d.$(c[g]).bSelected){Cb(d,c[g]);break;
}}else if(d.$(c[g]).bSelected){Ab(d,c[g]);break}}else for(var h=0;h<c.length;h++){if(f&&!d.$(c[h]).bSelected){
yb(d,c[h]),xb(a,c[h]);break}c[h]==e&&(f=!0)}Jb(a)},Jb=function(a){var b=oAddrTable[a],c=maRule.toAddressStringSelected(b),d=Kb(b);
d=d?d:"0",$("clipboardCache").value=c,$Element($("clipboardCache")).attr("officer",d),Mb()},Kb=function(a){
for(var b="",c=a.keys(),d=0;d<c.length;d++)a.$(c[d]).bSelected&&(b=a.$(c[d]).sExcutiveStatus);return b;
},Lb=function(a){oAddrEnabled[a]&&Mb()},Mb=function(){var a=$("clipboardCache");a.focus(),a.select();
},Nb=function(a){Ob("to",a),Ob("cc",a),Ob("bcc",a)},Ob=function(a,b){oAddrEnabled[a]=$Element(a+"Div").isParentOf(b)?!0:!1,
oAddrEnabled[a]?$Element(a+"Div").addClass("mInput_over"):($Element(a+"Div").removeClass("mInput_over"),
$(a+"Input").value.length>0&&o(a,$(a+"Input")),Rb(a)),Ub(a)},Pb=function(){Qb("to"),Qb("cc"),Qb("bcc");
},Qb=function(a){oAddrEnabled[a]=!1,$Element(a+"Div").removeClass("mInput_over"),Tb(a)},Rb=function(a){
a?($Element("atcp_suggest_layer_show_"+a).removeClass("on"),Sb(),$Element("atcp").hide()):(Rb("to"),
Rb("cc"),Rb("bcc"))},Sb=function(){$Element($$.getSingle("#atcp >div>div.page")).hide(),$Element("atcp_suggest_layer_show_recent").removeClass("selected"),
$Element("atcp_suggest_layer_show_important").removeClass("selected")},Tb=function(a){"undefined"!=typeof oEnabledUI&&oEnabledUI==a&&(oEnabledUI=null);
},Ub=function(a){oAddrEnabled[a]&&(oEnabledUI=a)},Vb=function(a){var b=(a.element,a.key()),c=b.keyCode,d=b.ctrl,e=oEnabledUI;
if(d&&67==c||116==c);else if(d&&86==c)oAddrEnabled[e]&&($(e+"Input").focus(),Wb(e));else if(d&&88==c)oAddrEnabled[e]&&B(e);else if(d&&65==c){
if(a.stop(),oAddrEnabled[e]){var f=oAddrTable[e].keys();if(f.length>0){Bb(oAddrTable[e]);var g=f[f.length-1];
xb(e,g),Jb(e)}}}else 46==c||8==c?oAddrEnabled[e]&&(B(e),$(e+"Input").focus()):37==c?(a.stop(),oAddrEnabled[e]&&Gb(e,b)):39==c?(a.stop(),
oAddrEnabled[e]&&Fb(e,b)):9==c?oAddrEnabled[e]&&$(e+"Input").focus():a.stop()},Wb=function(a){var b=$Element(a+"UL").width()-15,c=0,d=oAddrTable[a],e=d.keys();
if(e.length>1){var f=d.keys().pop(),g=$Element(f),h=g.$value().offsetLeft,i=g.$value().clientWidth;c=b-(h+i);
}else c=b;c=0>c?b:c,$Element(a+"Input").width(c)},Xb=function(a,b){if(""!=b){var c=htMouseDragMoveInsertAction[a].sAddressObjectId,d=htMouseDragMoveInsertAction[a].sInsertDirection,e=$Element(c);
e?"before"==d?Yb(a,b,e):"after"==d?Yb(a,b,e.next()):s(a,b):s(a,b),htMouseDragMoveInsertAction[a]="",
maCore.initPreviousCursorDirection()}},Yb=function(a,b,c){for(var d=maRule.toAddressArray(b),e=0;e<d.length;e++)d[e]&&Zb(a,d[e],c);
_b(a,c.parent().child()),x(a),w(a),R(a)},Zb=function(a,b,c){var d=a,e=oAddrIndex[a]++,f=maRule.generateAddressObjectElementId(d,e);
return maRule.addAddressObject(f,b,oAddrTable[a]),$b(f,a,c),f},$b=function(a,b,c){var d=oAddrTable[b],e=d.$(a),f=maTemplate.makeAddressObjHtml(a,e);
c.before($(f))},_b=function(a,b){for(var c=[],d=0;d<b.length;d++){var e=b[d].attr("id");"string"==typeof e&&""!=e&&c.push(b[d].attr("id"));
}for(var f={},g=0;g<c.length;g++){var h=c[g];f[h]=oAddrTable[a]._table[h]}oAddrTable[a]._table=f},ac=function(a,b){
wb(a),vb(oAddrTable[a],b,-1),Jb(a)},bc=function(){g(),mCom.bWriteTome?(s("to",mcCore.getNaverEmailAddress()),
$Element("toInput").hide(),$Element("ccInput").hide(),$Element("bccInput").hide()):($Element("toInput").show(),
$Element("ccInput").show(),$Element("bccInput").show())},cc=function(a,b){b.stop(),mCom.bWriteTome||(Nb($(a+"Input")),
$Element("atcp_suggest_layer_show_"+a).hasClass("on")?Rb(a):($Element("atcp_suggest_layer_show_recent").className("_click(maCore|showRecentAddressLayer|"+a+") _stopDefault"),
$Element("atcp_suggest_layer_show_important").className("_click(maCore|showImportantAddressLayer|"+a+") _stopDefault"),
$Element($$.getSingle("#atcp .page .btn_prev")).className("btn_prev _click(maCore|changeImportantAddressLayerPrev|"+a+") _stopDefault"),
$Element($$.getSingle("#atcp .page .btn_next")).className("btn_next _click(maCore|changeImportantAddressLayerNext|"+a+") _stopDefault"),
oAutoComplete[a].showSuggestLayer(),dc(null,a))),myCore.hideAllLayer()},dc=function(a,b){if(b=b.split("$")[0],
oAddrEnabled[b]){var c="/json/address/autotab/?cmd=getList&type=recentaddr",d=$Fn(ec).bind(b),e={Pass:!0
};X(c,d,e),$Element($$.getSingle("#atcp >div>div.page")).hide(),$Element("autocomplete_type_wrapper").hide(),
$Element("atcp_suggest_layer_show_recent").addClass("selected"),$Element("atcp_suggest_layer_show_important").removeClass("selected");
}},ec=function(a,b){var c=b.contact;if(c){var d=b.contact.length;if(c.type="recentaddr",d>0)oAutoComplete[a].refreshSuggestLayer(c),
$Element("atcp_suggest_layer_show_recent").addClass("selected");else{var e=maTemplate.getRecentAddressEmptyHtml();
$Element($$.getSingle("ul",$("atcp"))).html(e)}}},fc=function(a,b){gc(b,1)},gc=function(a,b){var c="/json/address/autotab/?cmd=getList&type=important",d=$Fn(hc).bind(a),e={
page:b,limit:100,Pass:!0};X(c,d,e),$Element("autocomplete_type_wrapper").hide()},hc=function(a,b){var c=b.contact,d=b.contact.length;
if(d>0)oAutoComplete[a].refreshSuggestLayer(c),ic(b);else{var e=maTemplate.getImportantAddressEmptyHtml();
$Element($$.getSingle("ul",$("atcp"))).html(e),ic(null)}},ic=function(a){$Element("atcp_suggest_layer_show_recent").removeClass("selected"),
$Element("atcp_suggest_layer_show_important").addClass("selected"),a&&a.pageTotalCount>1?($Element($$.getSingle("#atcp >div>div.page")).show(),
$Element("atcp_suggest_layer_page_num").text(a.page),$Element("atcp_suggest_layer_page_total").text(a.pageTotalCount)):$Element($$.getSingle("#atcp >div>div.page")).hide();
},jc=function(a){var b=1*$Element("atcp_suggest_layer_page_num").text();b>1&&gc(a,b-1)},kc=function(a){
var b=1*$Element("atcp_suggest_layer_page_num").text(),c=1*$Element("atcp_suggest_layer_page_total").text();
c>b&&gc(a,b+1)},lc=function(a,b,c,d,e){if(e){var f="LI"==a.element.parentNode.tagName.toUpperCase()?a.element:a.element.parentNode,g="/json/address/autotab/?cmd=delList&type=recentaddr",h=$Fn(mc).bind(b,f,c,d),i={
addrSN:d};X(g,h,i)}},mc=function(a,b,c){oAutoComplete[a].deleteDataByIndex(c),$Element(b).parent().hide();
},nc=function(a,b,c){var d=b.split("@")[1],e="";if("naver.com"==d||"qamail.naver.com"==d){var f=b.split("+");
f.length>1?(f[0]="",e=mEnv.mailId+f.join("+")):e=mEnv.mailId+"@"+d}else if(mEnv.idomainInfos)for(var g=0;g<mEnv.idomainInfos.length;g++){
var h=mEnv.idomainInfos[g].emailAddress;if(d==h.split("@")[1]){e=h;break}}""==e&&(e=mEnv.mailAddress);
var i=mCom.sContactURLPrefix+mEnv.rootDomain;if("D"==c)var j=i+"/domain/selectDlCompositionsPopUp.nhn?domainId="+a+"&dlEmail="+encodeURIComponent(b)+"&domainEmail="+encodeURIComponent(e);else var j=i+"/domain/groupCompositionPopup.nhn?domainId="+a+"&groupEmail="+encodeURIComponent(b)+"&domainEmail="+encodeURIComponent(e);
window.open(j,"","width=490,height=422")},oc=function(a){if(mEnv.mailDomainList)for(var b=mEnv.mailDomainList.split(","),c=0;c<b.length;c++)if(a.match("@"+b[c]))return!0;
return!1},pc=function(a){var b=a.element.checked,c=$Element(a.element),d=c.data("target");mcCore.requestAjax({
fCallback:function(){mEnv.autoCompletePhoto=!!b,oAutoComplete[d].repaint()},oParameter:{autoCompletePhoto:b?"Y":"N"
},sUrl:"/json/option/autoCompletePhoto/set"})},qc=function(a){var b=$Element(a).data("type");a.src="C"!==b&&b?"https://"+wm.staticDomain+"/static/pwe/nm/thumb_default_team.png":"https://"+wm.staticDomain+"/static/pwe/nm/thumb_default.png";
},rc=function(a){return oAddrTable&&oAddrTable[a]?oAddrTable[a].values():[]};return{bInit:a,init:e,resetAddressObjectAll:g,
onMouseClick:k,onMouseMove:l,addAddressObjWithHtmlAll:s,deleteAddressObjWithHtmlAll:A,deleteAddressObjWithHtmlSelectedAll:B,
enableAddressObjectPlugIn:Nb,disableAddressObjectPlugIn:Pb,insertAddressObject:Xb,addressObjDelete:ab,
addressObjEdit:bb,addressObjSelect:_,expandGroupAddressObject:y,clickSendMe:bc,hideAutocompleteAddrSuggestLayer:Rb,
showRecentAddressLayer:dc,showImportantAddressLayer:fc,changeImportantAddressLayerPrev:jc,changeImportantAddressLayerNext:kc,
deleteRecentAddress:lc,_openGroupPopup:nc,setTotalRecipientCount:U,initPreviousCursorDirection:pb,toggleProfilePhoto:pc,
onThumbnailError:qc,getAddressListFromTarget:rc}}();var DragAndDropAddressObject=jindo.$Class({$init:function(a){
this.welDraggingArea=jindo.$Element(this.oOption.sDraggingAreaId),this.welIconArea=this.welDraggingArea.child()[0],
this.welEmailArea=this.welDraggingArea.child()[1],this.welClipboard=$Element("clipboardCache"),this.bDropAllow=!0,
this._bDragging=!1,this._oApp=a.oApp},divider:"}7}m{29{",dividerShare:"}7}m{29{E",_setDraggingLaayerDisplayText:function(){
var a=this.welClipboard.$value().value,b=maRule.toAddressArray(a),c=b.length;if(c>1);else{var d=a.split(this.dividerShare);
d.length<=1&&(d=a.split(this.divider)),a=d[0]}var e=c>1?c:a;this.welEmailArea.html($S(e+"").escapeHTML().$value());
},_getInputAddressString:function(){return this.welClipboard.$value().value},_showDimmedLayerForWirteDrag:function(){
this.$super._showDragCover()},_hideDimmedLayerForWirteDrag:function(){this.$super._hideDragCover()},
fHandelDownEffect:function(a,b){var c=a.child(null,1)[0];this._bDragging=b.key().ctrl||!c.hasClass("selected")?!1:!0;
},fHandelUpEffect:function(){this._hideDimmedLayerForWirteDrag()},fDragStartEffect:function(){this._bDragging?(this._setDraggingLaayerDisplayText(),
oAddrEnabled[oEnabledUI]&&maCore.deleteAddressObjWithHtmlSelectedAll(oEnabledUI),bMouseDragMoveModes=!0,
this._showDimmedLayerForWirteDrag()):this.$super._hideDraggingLayer()},fDragEndEffect:function(a){if(this._bDragging&&a&&""!=$("clipboardCache").value){
var b=a.attr("id").split("$")[0];maCore.enableAddressObjectPlugIn($(b+"UL")),maCore.insertAddressObject(b,this._getInputAddressString()),
$("clipboardCache").value="",$Element($("clipboardCache")).attr("officer","")}},fDropAreaOver:function(a){
if(this._bDragging){var b=(a.attr("id"),a.$value());$Element("toDiv").isParentOf(b)?maCore.enableAddressObjectPlugIn($("toUL")):$Element("ccDiv").isParentOf(b)?maCore.enableAddressObjectPlugIn($("ccUL")):$Element("bccDiv").isParentOf(b)?maCore.enableAddressObjectPlugIn($("bccUL")):$Element("divWrite").isParentOf(b)&&this.bDropAllow&&maCore.enableAddressObjectPlugIn($("toUL"));
}},fDropAreaOut:function(){this._bDragging&&(this.bDropAllow=!0)},fDropAreaDrop:function(a){if(this._bDragging){
var b=this._getInputAddressString(),c=a.attr("id");if("toUL"==c||"ccUL"==c||"bccUL"==c)if(this.bDropAllow&&""!=b){
var d=c.split("UL")[0];"to"!=d&&"cc"!=d&&"bcc"!=d&&(d=oEnabledUI),oAddrEnabled[d]&&(mCom.bWriteTome||(maCore.insertAddressObject(d,b),
$("clipboardCache").value="",$Element($("clipboardCache")).attr("officer",""))),this.htMouseDragMoveInsertAction={
sAddressObjectId:"",sInsertDirection:""},maCore.initPreviousCursorDirection(),oAddrEnabled[d]&&$(d+"Input").focus();
}else this.bDropAllow=!0}},fDropAreaMove:function(){}}).extend(DragAndDropComponent);eofWrite={};