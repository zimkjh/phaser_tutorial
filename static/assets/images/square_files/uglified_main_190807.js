mrCore=function(){function makeQueryForWebMessenger(a){var b,c,d,e,f,g=a.from.email||"",h=[],i=[],j={},k=mEnv.mailAddress;
for(k!==g&&h.push(g),e=a.toList?a.toList.length:0,f=a.ccList?a.ccList.length:0,d=0;e>d;d++)b=a.toList[d].email,
k!==b&&i.push(b),j[b]=!0;for(d=0;f>d;d++)b=a.ccList[d].email,j[b]||(k!==b&&i.push(b),j[b]=!0);var l=a.subject;
""===l&&(l=nLang.l.no_title.replace(/\(/g,"").replace(/\)/g,"").replace(/\（/g,"").replace(/\）/g,""));
var m="&roomTitle="+encodeURIComponent(l).replace(/\(/g,"%28").replace(/\)/g,"%29")+"&requestService=mail";
return c="mailList="+encodeURIComponent(JSON.stringify(h))+"&ccList="+encodeURIComponent(JSON.stringify(i))+m;
}function inviteWebMessage(a,b){var c,d="https://talk."+mEnv.rootDomain+"/invite",e="https://talk.worksmobile.com/invite",f="width=742,height=530,scrollbars=yes,toolbar=no,location=no,resizable=yes,status=no,menubar=no";
return jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<10?void alert(nLang.e.unavailable_web_message):(mcCore.isNcs()?c=d:mcCore.isNwe()&&(c=e),
c=c+"?"+b+"&includeCC=false",void window.open(c,"invite",f))}var _bIsTranslate=!1,oDir={};_bIsReadEML=!1,
_nCurReadingMailBaseDate=null,_nCurReadingMailTempFilePostFix=null,_woThreadMailList=$A([]);var oPrevReadRequest,_mailEditorDefaultFontSizeList=[{
key:"verylarge",value:"32px"},{key:"large",value:"19px"},{key:"normal",value:"13px"},{key:"small",value:"12px"
},{key:"verysmall",value:"10px"}],ZWS=/\u200B/g,BLOCK_NODE_MAP={address:!0,article:!0,aside:!0,blockquote:!0,
details:!0,dialog:!0,dd:!0,div:!0,dl:!0,dt:!0,fieldset:!0,figcaption:!0,figure:!0,footer:!0,form:!0,
h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,li:!0,main:!0,nav:!0,ol:!0,p:!0,pre:!0,
section:!0,table:!0,ul:!0};cancelSpamMail=function(a,b,c){if(confirm(nLang.c.alert_cancel_spam_setting)){
var d={mailSN:b,from:mCom.isReading?"read":"list",spamType:c};mcCore.requestAjax({fCallback:$Fn(_cancelSpamMailCallback,this).bind(),
oParameter:d,sUrl:"/json/option/spam/cancel/"})}},_cancelSpamMailCallback=function(){myCore.hideAllLayer(),
mCom.isPopup?(opener&&opener.oMail&&opener.mlCore.refreshList(!0),window.close()):mlCore.refreshList(!0);
},rejectKeywordMail=function(a,b,c){if(confirm(nLang.c.alert_cancel_spam_keyword)){var d={mailSN:c,keywordType:b
};mcCore.requestAjax({fCallback:$Fn(_rejectKeywordMailCallback,this).bind(),oParameter:d,sUrl:"/json/option/rejectKeyword/cancel/"
})}},_rejectKeywordMailCallback=function(){myCore.hideAllLayer(),mCom.isPopup?(opener&&opener.oMail&&opener.mlCore.refreshList(!0),
window.close()):mlCore.refreshList(!0)},systemCancelSpam=function(a,b){if(confirm(nLang.l.move_inbox_add_receive_list)){
var c={mailSNList:b,from:mCom.isReading?"read":"list"};mcCore.requestAjax({fCallback:$Fn(_systemCancelSpamCallback,this).bind(),
oParameter:c,sUrl:"/json/spam/cancel/"})}},_systemCancelSpamCallback=function(){myCore.hideAllLayer(),
mCom.isPopup?(opener&&opener.oMail&&opener.mlCore.refreshList(!0),window.close()):mlCore.refreshList(!0);
},_oSystemAutoMove={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.spam_auto_move+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|cancelSpamMail|{mailSN}|{spamType}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|setspam_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_setting+"</a></p>"
},_oSystemDefine={sReason:"<strong>"+nLang.c.auto_naver_spam_filter+"</strong>",sGuide:""},_oUserReport={
sReason:"<strong>"+nLang.c.user_report+"</strong>",sGuide:"<p>"+nLang.c.fault_report_spam+"<a href='#' class='_c1(mrCore|systemCancelSpam|{mailSN}) _stopDefault'>"+nLang.c.clean_spam+"</a>"+nLang.c.please_click+"</p>"
},_oUserMove={sReason:"<strong>"+nLang.c.user_direct_move+"</strong>",sGuide:"<p>"+nLang.c.fault_move_spam+"<a href='#' class='_c1(mrCore|systemCancelSpam|{mailSN}) _stopDefault'>"+nLang.c.clean_spam+"</a>"+nLang.c.please_click+"</p>"
},_oNoAddressBook={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.sender_address+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|cancelSpamMail|{mailSN}|{spamType}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|setspam_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_setting+"</a></p>"
},_oNoToCc={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.not_include+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|cancelSpamMail|{mailSN}|{spamType}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|setspam_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_setting+"</a></p>"
},_oFalseMyId={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.my_naver_mail+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|cancelSpamMail|{mailSN}|{spamType}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|setspam_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_setting+"</a></p>"
},_oChinese={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.language_chinese+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|cancelSpamMail|{mailSN}|{spamType}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|setspam_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_setting+"</a></p>"
},_oEnglish={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.language_english+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|cancelSpamMail|{mailSN}|{spamType}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|setspam_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_setting+"</a></p>"
},_oJapanese={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.language_japanese+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|cancelSpamMail|{mailSN}|{spamType}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|setspam_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_setting+"</a></p>"
},_oRussian={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.language_russian+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|cancelSpamMail|{mailSN}|{spamType}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|setspam_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_setting+"</a></p>"
},_oForeignLanguage={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.language_all+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|cancelSpamMail|{mailSN}|{spamType}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|setspam_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_setting+"</a></p>"
},_oKeywordAd={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.block_spam_ad+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|rejectKeywordMail|{keyType}|{mailSN}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|rejectKeyword_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_keyword+"</a></p>"
},_oKeywordAdult={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.block_spam_adult+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|rejectKeywordMail|{keyType}|{mailSN}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|rejectKeyword_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_keyword+"</a></p>"
},_oKeywordPromotion={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.block_spam_promotion+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|rejectKeywordMail|{keyType}|{mailSN}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|rejectKeyword_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_keyword+"</a></p>"
},_oKeywordAgreement={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.block_spam_agreement+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|rejectKeywordMail|{keyType}|{mailSN}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|rejectKeyword_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_keyword+"</a></p>"
},_oKeywordShopping={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.block_spam_shopping+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|rejectKeywordMail|{keyType}|{mailSN}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|rejectKeyword_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_keyword+"</a></p>"
},_oKeywordLoan={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.block_spam_loan+"</span>",
sGuide:"<p>"+nLang.c.above_spam+"<a href='#' class='_c1(mrCore|rejectKeywordMail|{keyType}|{mailSN}) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"<a class='link_setup _c1(mrCore|showOptionPage|rejectKeyword_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_keyword+"</a></p>"
},_oKeywordUser={sReason:"<strong>"+nLang.c.spam_setting+"</strong>: <span>"+nLang.c.block_spam_user+"</span>",
sGuide:"<p><a class='link_setup _c1(mrCore|showOptionPage|rejectKeyword_option) _stopDefault' href='#'>"+nLang.c.shortcut_spam_keyword+"</a></p>"
},_oAutoCategory={sReason:"<strong>"+nLang.c.auto_sort_rule+"</strong><span>"+nLang.c.auto_sort_move+"</span>",
sGuide:"<p>"+nLang.c.change_regulation_rule+"<a href='#' class='_c1(mrCore|showOptionPage|filter_option) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"</p>"
},_oImportMail={sReason:"<strong>"+nLang.c.external_rule+"</strong><span>"+nLang.c.external_move+"</span>",
sGuide:"<p>"+nLang.c.change_export_rule+"<a href='#' class='_c1(mrCore|showOptionPage|externalMail_option) _stopDefault'>"+nLang.c.hear+"</a>"+nLang.c.please_click+"</p>"
},showOptionPage=function(a,b){try{mCom.isPopup?(opener&&opener.oMail&&opener.mInit.showOptionLayerAtInit(a,b),
window.close()):mInit.showOptionLayerAtInit(a,b)}catch(c){}},_arrangeMenu=function(a){var b=$$.getSingle("#readBtnMenu"),c=$$.getSingle(".do_backToList",b),d=$$.getSingle(".read_btn_up",b),e=$$.getSingle(".read_btn_down",b);
$Element("listBtnMenu").hide(),$Element("writeBtnMenu").hide(),mCom&&mCom.isPopup||"search"==mCom.nCurrentFolder||mCom.sCurFilterType?$Element("listHeadDiv").hide():($Element("listHeadDiv").show(),
mcCore.foldedWriteButton()),$Element("writeHeadDiv").hide(),$Element(b).show(),mCom.isPopup&&(mCom.nCurrentFolder=mCom.hasNoOpener||1!=a?a:opener.mCom.nCurrentFolder);
var f=$Element("li_add_addr"),g=$Element("li_view_mail"),h=$Element("li_show_sender"),i=$Element("li_show_receiver"),j=$Element("li_mail_down"),k=$Element("li_unmark"),l=$Element("li_cleanup"),m=$Element("li_show_memo"),n=$Element("li_scrap_calendar"),o=$Element("li_scrap_todo"),p=$Element("li_scrap_blog"),q=$Element("li_charset"),r=$Element("li_mime");
f.hide(),g.hide(),h&&h.show(),i&&i.hide(),j.show(),l.hide(),k&&k.hide(),m&&m.show(),p&&p.show(),q.show(),
r.show(),mcCore.useCalendar()?(n.show(),o&&o.show()):(n.hide(),o&&o.hide()),c&&$Element(c).show(),d&&($Element(d).removeClass("disabled"),
d.disabled=""),e&&($Element(e).removeClass("disabled"),e.disabled="");var s=$Element($$.getSingle(".do_spam",b));
/(ncs|nwe)/.test(mEnv.serviceType)&&s.hide(),1===a&&2!=mCom.nCurrentFolder||"1"==mCom.nCurrentFolder||"search"==mCom.nCurrentFolder&&$("slt_search_folder")&&1==$("slt_search_folder").value?(mcCore.isNaver()&&s.hide(),
$Element($$.getSingle(".do_read",b)).hide(),$Element($$.getSingle(".do_block",b)).hide(),$Element($$.getSingle(".do_reply",b)).show(),
$Element($$.getSingle(".do_replyall",b)).show(),$Element($$.getSingle(".do_forward",b)).removeClass("rgt").removeClass("lft").addClass("mdl").show(),
$Element($$.getSingle(".do_edit",b)).hide(),$Element($$.getSingle(".do_resend",b)).show(),$Element($$.getSingle(".do_delete_c",b)).hide(),
$Element($$.getSingle(".do_delete",b)).show(),$Element($$.getSingle(".do_move",b)).show(),$Element($$.getSingle(".do_mailAction",b)).show(),
h&&h.hide(),i&&i.show()):"2"==mCom.nCurrentFolder?(mcCore.isNaver()&&s.hide(),$Element($$.getSingle(".do_read",b)).hide(),
$Element($$.getSingle(".do_block",b)).hide(),$Element($$.getSingle(".do_reply",b)).show(),$Element($$.getSingle(".do_replyall",b)).show(),
$Element($$.getSingle(".do_forward",b)).removeClass("rgt").removeClass("lft").addClass("mdl").show(),
$Element($$.getSingle(".do_edit",b)).hide(),$Element($$.getSingle(".do_resend",b)).show(),$Element($$.getSingle(".do_delete_c",b)).hide(),
$Element($$.getSingle(".do_delete",b)).hide(),$Element($$.getSingle(".do_move",b)).hide(),$Element($$.getSingle(".do_mailAction",b)).show(),
h&&h.hide(),i&&i.show()):"4"==mCom.nCurrentFolder?(mcCore.isNaver()&&s.show(),$Element($$.getSingle(".do_read",b)).hide(),
$Element($$.getSingle(".do_block",b)).hide(),$Element($$.getSingle(".do_reply",b)).hide(),$Element($$.getSingle(".do_replyall",b)).hide(),
$Element($$.getSingle(".do_forward",b)).hide(),$Element($$.getSingle(".do_edit",b)).hide(),$Element($$.getSingle(".do_resend",b)).hide(),
$Element($$.getSingle(".do_delete_c",b)).show(),$Element($$.getSingle(".do_delete",b)).hide(),$Element($$.getSingle(".do_move",b)).show(),
mcCore.isNcs()||mcCore.isNwe()?($Element($$.getSingle(".do_mailAction",b)).show(),f.hide(),g.hide(),
h&&h.hide(),i&&i.hide(),j.hide(),n.hide(),m&&m.hide(),o&&o.hide(),p&&p.hide(),q.hide(),r.hide()):$Element($$.getSingle(".do_mailAction",b)).hide()):"5"==mCom.nCurrentFolder?(s.show(),
$Element($$.getSingle(".do_read",b)).hide(),$Element($$.getSingle(".do_reply",b)).hide(),$Element($$.getSingle(".do_replyall",b)).hide(),
$Element($$.getSingle(".do_forward",b)).hide(),$Element($$.getSingle(".do_edit",b)).hide(),$Element($$.getSingle(".do_resend",b)).hide(),
$Element($$.getSingle(".do_delete_c",b)).show(),$Element($$.getSingle(".do_delete",b)).hide(),$Element($$.getSingle(".do_move",b)).show(),
$Element($$.getSingle(".do_mailAction",b)).hide(),$Element($$.getSingle(".do_block",b)).show()):"6"==mCom.nCurrentFolder||parseInt(mCom.nCurrentFolder,10)>=1e7?(mcCore.isNaver()&&s.hide(),
$Element($$.getSingle(".do_read",b)).hide(),$Element($$.getSingle(".do_block",b)).hide(),$Element($$.getSingle(".do_reply",b)).hide(),
$Element($$.getSingle(".do_replyall",b)).hide(),$Element($$.getSingle(".do_forward",b)).removeClass("rgt").removeClass("mdl").addClass("lft").show(),
$Element($$.getSingle(".do_edit",b)).show(),$Element($$.getSingle(".do_resend",b)).hide(),$Element($$.getSingle(".do_delete_c",b)).hide(),
$Element($$.getSingle(".do_delete",b)).show(),$Element($$.getSingle(".do_move",b)).show(),$Element($$.getSingle(".do_mailAction",b)).show(),
f.hide(),g.hide(),h&&h.hide()):(mcCore.isNaver()&&s.show(),$Element($$.getSingle(".do_read",b)).className("b primary do_read _ccrf(mrd|.unread) _c1(mlCore|readMail|unread)").html(nLang.l.unread).show(),
$Element($$.getSingle(".do_block",b)).hide(),$Element($$.getSingle(".do_reply",b)).show(),$Element($$.getSingle(".do_replyall",b)).show(),
$Element($$.getSingle(".do_forward",b)).addClass("rgt").removeClass("mdl").removeClass("lft").show(),
$Element($$.getSingle(".do_edit",b)).hide(),$Element($$.getSingle(".do_resend",b)).hide(),$Element($$.getSingle(".do_delete_c",b)).hide(),
$Element($$.getSingle(".do_delete",b)).show(),$Element($$.getSingle(".do_move",b)).show(),$Element($$.getSingle(".do_mailAction",b)).show()),
"5"==mCom.nCurrentFolder?s.html(nLang.l.cancel_spam).className("b primary do_spam _ccrf(mrd|.unspam) _c1(mlCore|cancelSpam)"):s.html(nLang.l.assign_spam).className("b primary do_spam _ccrf(mrd|.spam) _c1(myCore|showSpamLayer)"),
mCom.hasNoOpener&&($Element($$.getSingle(".do_move",b)).hide(),$Element($$.getSingle(".shortcut_set")).hide()),
_bIsTranslate&&$Element($$.getSingle(".buttonSet",b)).child(function(a){a.hasClass("translate_show")?a.show():a.hide();
},1);var t=$Element($$.getSingle("#show_remind_btn",b)),a=mCom.nCurrentFolder;2!=Number(a)&&3!=Number(a)&&5!=Number(a)&&4!=Number(a)&&mcCore.envUseRemind?t&&t.show():t&&t.hide();
},clickTitleForThead=function(a,b){var c=!0;if(a){if(1==a._event.button)return;a.stopDefault()}"L"==mEnv.divideMode?clickTitle(a,b):popupRead(a,b,c);
};var middleClickTitle=function(a,b){if(a){var c=a._event;if(1==c.button){var d=$Element($$.getSingle("!li[mailsn]",a.element));
if(d.hasClass("notRead")&&!$Agent().navigator().ie){var e=$Element("headUnreadNum"),f=parseInt(e.html(),10);
!$Element("searchResultDiv").visible()&&"search"!=mCom.nCurrentFolder&&f>0&&e.html(f-1)}readSetting(a.element,b);
}else a.stopDefault()}};readMailFromCancelNoti=function(a){myCore.showSendCancelConfirmLayer("hide"),
mcCore.requestAjax({fCallback:function(a){mfCore.clickFolder(null,1,null,null,null,null,null,a.sentMailSN);
},oParameter:{sentMessageID:a},sUrl:"/json/readReceipt/sentMailSN"})},readMailFromCancelNotiCallback=function(a){
clickTitle(null,a,null)},clickTitle=function(a,b,c){if(a){if(1==a._event.button)return;a.stopDefault();
}var d=a&&a.$value()&&a.$value().shiftKey;if(d)return void popupRead(a,b);if(mCom.listCursor=_getSequenceOfMail(b),
mCom.listCursorMailSN=b,mCom.currentReadMailSN=b,"2"==mCom.nCurrentFolder){var e=mlCore.getParentMail(b);
if(e&&!e.isSaveSentMail)return void alert(nLang.e.mail_not_exist_readreceipt)}if(!mcCore.hideWriteArea()){
if(mCom.isPopup||"L"!==mEnv.divideMode||mcCore.isAttach()||(mCom.oCloudSaveData={}),mCom.elListWrap&&mCom.elReadWrap&&!mCom.elListWrap.visible()&&!mCom.elReadWrap.visible()&&"list"!=mCom.vDivideMode&&(mCom.elListWrap.show(),
mcCore.setDivideMode(mCom.vDivideMode),mlCore.arrangeListMenu(mCom.nCurrentFolder)),mcCore.hideSendResultDiv("readBtnMenu"),
myCore.hideAllLayer(),mCom.bMouseDropFlag=!1,mCom.bMouseDownFlag=!1,mCom.bLoadingMail=!0,mEnv.popupRead&&"L"==mEnv.divideMode&&"read"!=mCom.initAction){
var f=$$.getSingle("input#mailCheck_"+b);return f&&f.checked&&mlCore.toggleCheckMail({element:f},b,"forced"),
void popupRead(a,b)}mlCore.getMailList().forEach(function(a){return mcCore.getPureMailSN(a.mailSN)==mcCore.getPureMailSN(b)?void(a.isRead=!0):void 0;
}),mcCore.setMsg(nLang.r.getting_mail_page),!mCom.isPopup&&$Element("searchResultDiv").visible()&&mcCore.adjustTopOfFlexArea(),
mCom.elListWrap&&mCom.elListWrap.visible()?mlCore.unCheckAll(c):mlCore.emptyCurMailList();var g=$Element($$.getSingle("li."+b+"_li"));
if(mCom.elListWrap&&mCom.elListWrap.visible()&&g&&mlCore.checkMailUI(b,null,c),!a&&location.hash){var h={};
try{h=JSON.parse(decodeURIComponent(location.hash).replace("#",""))}catch(i){}var j=h.oParameter;j&&j.listScrollPosition&&(mCom.elList.scrollTop=mCom.nListWrapScrollTop=j.listScrollPosition);
}var k=mlCore.getListObject(b);if("list"==mCom.vDivideMode&&(k.mailSN=mcCore.getPureMailSN(b)),mlCore.pushToCurMailList(k),
mlCore.uniqueCurMailList(),c&&$$.getSingle("div.cv_card[data-mailsn="+b+"]",mCom.elRead)?toggleCard(null,$$.getSingle("div.cv_card[data-mailsn="+b+"]",mCom.elRead),!1,!0):"5"==mCom.nCurrentFolder?_readMailBo(b,null,mEnv.hideSpamImage?"false":"true",mCom.nListWrapScrollTop):_readMailBo(b,null,null,mCom.nListWrapScrollTop),
myContextMenu.isUseContextMenu()&&"list"!=mCom.vDivideMode)if($ElementList($$("li.context_hover")).removeClass("context_hover"),
c){var l=$Element($$.getSingle("li.cv_slave li."+b+"_li"));l&&l.addClass("context_hover")}else g&&g.addClass("context_hover");
return!1}},readSpamMail=function(a,b,c){myCore.hideAllLayer(),mcCore.setMsg(nLang.r.getting_mail_page),
_readMailBo(mCom.nCurReadingMailSN,void 0,c),mfCore.updateFolder()},retrieveMail=function(a,b){confirm(nLang.r.confirm_retrieve_mail)&&mcCore.requestAjax({
fCallback:$Fn(_retrieveMailCallback,this).bind(),oParameter:{sentMailSN:b},sUrl:"/json/readReceipt/reserve/cancel/"
})},_retrieveMailCallback=function(a){"OK"==a.Result&&($$.getSingle(".send_date em").innerHTML="",$Element("cancelDelaySendDate").leave(),
myCore.showSendCancelConfirmLayer("hide"))},readMail=function(a,b){if(myCore.hideAllLayer(),mcCore.setMsg(nLang.r.getting_mail_page),
"C"==mlCore.getCurrentViewType()&&$$.getSingle(".cv_card",mCom.elRead)){if("list"===mCom.vDivideMode&&_arrangeMenu(),
$$.getSingle(".cv_card.selected",mCom.elRead))var c=$$.getSingle(".cv_card.selected",mCom.elRead);else var c=$$.getSingle(".cv_card",mCom.elRead);
var d=$Element(c).attr("data-mailsn"),e={mailSN:d,charset:b,threadMail:!1,prevNextMail:!1,previewMode:2
};mcCore.requestAjax({fCallback:$Fn(function(a,b){c.innerHTML=makeCardHtmlForMain(b),$$.getSingle("div.img_preview_area",c)?$Element($$.getSingle("div.img_preview_area",c)).addClass("_c1(mrCore|selectCard)"):null,
-1==b.mailInfo.htmlBodyContentSN&&_linkify($$.getSingle("div.readFrame",c)),mcCore.isCorrespondFlag(b.mailInfo.status,"0x400000")&&mcCore.useCalendar()?_getSchedule(b.mailInfo.mailSN):mcCore.checkApprovalStatus(b.mailInfo.status)&&_getApproval(b.mailInfo.mailSN,b.mailInfo.messageId,b.mailInfo.from),
_drawFakeNotiArea(b.mailInfo),_drawWorkflowArea(b.mailInfo),makeToggleOriginalMsgBtn(c),$$.getSingle("div.readFrame",c).style.display="";
},this).bind(e),oParameter:e,sUrl:"/json/read/"})}else{var f=-1==mCom.nCurReadingMailSN?$Element($$.getSingle("li.selected .mail_title")).attr("mailsn"):mCom.nCurReadingMailSN;
_readMailBo(f,b),mfCore.updateFolder()}return!1},_readMailBo=function(a,b,c,d){var e={charset:b||"",
prevNextMail:mCom.isPopup||"list"==mCom.vDivideMode?!0:!1,threadMail:mCom.isPopup?!1:!0};switch(e.listScrollPosition=d?d:mCom.elList?mCom.elList.scrollTop:0,
mCom.nListWrapScrollTop=e.listScrollPosition,$Element("cont_flex_area").removeClass("list_remind"),1!=mCom.isPopup&&("list"==mCom.vDivideMode?(mlCore.setListDisplayStopScroll("hide"),
mCom.elRead.innerHTML="",mCom.isReading=!1,mCom.elReadWrap.show(),$Element("cont_flex_area").removeClass("list_normal").addClass("read_normal"),
$Element("text_promotion").hide(),mcCore.adjustTopOfFlexArea()):($Element("cont_flex_area").removeClass("read_normal"),
"remind"==mCom.nCurrentFolder&&$Element("cont_flex_area").addClass("list_remind"))),mCom.charset=b||"",
mCom.isPopup=mCom.isPopup||!1,e.mailSN=String(a),"C"==mlCore.getCurrentViewType()&&(e.threadMail=!0,
e.threadMailSize=400,e.previewMode=2,e.threadMailSortOrder=0),e.previewMode=2,mCom.nCurrentFolder){case"all":
case"unread":case"mark":case"attach":case"tome":e.type=mCom.nCurrentFolder;break;case"thread":"L"!==mEnv.divideMode&&(e.threadMail=!1);
}return c?(e.viewAll=c,mCom.bViewSpamImage="true"==c):mCom.bViewSpamImage="-1",_bIsReadEML=!1,oPrevReadRequest&&oPrevReadRequest.abort(),
oPrevReadRequest=mcCore.requestAjax({fClass:"read",fCallback:$Fn(_makeReadHtml,this).bind(),oParameter:e,
sUrl:"/json/read/"}),!0},readMailAtPopup=function(){mcCore.setMsg(nLang.r.getting_mail_page);var a=mCom.print,b=mCom.nMailId,c=mCom.mimeSN,d="Y"===mCom.translate;
switch(cCode){case"zh_CN":case"zh_TW":moment.locale(cCode.toLowerCase());break;case"ko_KR":case"ja_JP":
case"en_US":moment.locale(cCode.split("_")[0]);break;default:moment.locale("en")}jindo.$Agent().navigator().firefox||jindo.$Agent().navigator().safari||$Element(window).attach("copy",copyReadBody),
"en_US"===cCode&&(mCom.sDefaultDateFormat="MMM D, YYYY");try{mCom.hasNoOpener=!1;var e=e||window.opener;
e&&e.m?(mCom.nCurrentFolder=e.mCom.nCurrentFolder,mCom.aFolderInfo=e.mCom.aFolderInfo,mEnv.idomainInfos=e.mEnv.idomainInfos,
mEnv.mailDomain=e.mEnv.mailDomain,mEnv.useMultidepth=e.mEnv.useMultidepth,mEnv.hideSpamImage=e.mEnv.hideSpamImage,
mEnv.useDrive=e.mEnv.useDrive,mEnv.useCalendar=e.mEnv.useCalendar,mEnv.billUse=e.mEnv.billUse,mEnv.cafeUse=e.mEnv.cafeUse,
mEnv.snsUse=e.mEnv.snsUse,mEnv.promotionUse=e.mEnv.promotionUse,mCom.parentWindow=e.mCom.parentWindow):mCom.hasNoOpener=!0;
}catch(f){mCom.hasNoOpener=!0}try{var g=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice;
}catch(f){var g=!1}"function"==typeof g?(mrTemplate.sFileListTemplateDirectLink=mrTemplate.sFileListTemplateDirectLink.replace(/{DragFunction}/g,"_d2(mcDragndrop|attachDragStart|{AttachSize})").replace(/{UseDraggable}/g,"true"),
mrTemplate.sEMLTemplate=mrTemplate.sEMLTemplate.replace(/{DragFunction}/g,"_d2(mcDragndrop|attachDragStart|{AttachSize})").replace(/{UseDraggable}/g,"true")):(mrTemplate.sFileListTemplateDirectLink=mrTemplate.sFileListTemplateDirectLink.replace(/{DragFunction}/g,"_m1(mcDragndrop|attachDragStart|{AttachSize})").replace(/{UseDraggable}/g,"false"),
mrTemplate.sEMLTemplate=mrTemplate.sEMLTemplate.replace(/{DragFunction}/g,"_m1(mcDragndrop|attachDragStart|{AttachSize})").replace(/{UseDraggable}/g,"false"));
try{var h="checkVirusArea";window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)&&(h="_blank");
}catch(f){h="checkVirusArea"}return mrTemplate.sFileListTemplateDirectLink=mrTemplate.sFileListTemplateDirectLink.replace(/{DownloadTargetArea}/g,h),
mrTemplate.sFileListTemplateDirectButton=mrTemplate.sFileListTemplateDirectButton.replace(/{DownloadTargetArea}/g,h),
mrTemplate.sFileListAtEMLTemplateDirectLink=mrTemplate.sFileListAtEMLTemplateDirectLink.replace(/{DownloadTargetArea}/g,h),
mrTemplate.sFileListAtEMLTemplateDirectButton=mrTemplate.sFileListAtEMLTemplateDirectButton.replace(/{DownloadTargetArea}/g,h),
mrTemplate.sEMLTemplateDirectButton=mrTemplate.sEMLTemplateDirectButton.replace(/{DownloadTargetArea}/g,h),
mrTemplate.sEMLAtEMLTemplateDirectButton=mrTemplate.sEMLAtEMLTemplateDirectButton.replace(/{DownloadTargetArea}/g,h),
mrTemplate.sFileListTemplateForPrint=mrTemplate.sFileListTemplateForPrint.replace(/{DownloadTargetArea}/g,h),
"true"==a&&b?printMail(mCom.nMailId,mCom.charset):""!=c?_readEML(mCom.mimeSN,mCom.offset,mCom.size,mCom.encoding,mCom.tempFilePostfix,mCom.baseDate):d?_readTranslate(mCom.nMailId):("5"==mCom.nCurrentFolder?_readMailBo(b,null,mEnv.hideSpamImage?"false":"true"):_readMailBo(b),
mCom.hasNoOpener||e.mfCore.updateFolder({notUpdateMoveLayer:!0},function(){setTimeout($Fn(mfCore.makeMoveLayerBo,this).bind(!0),0);
})),!0};var _readTranslate=function(a){_bIsTranslate=!0;var b={mailSN:String(a),charset:mCom.charset||"",
prevNextMail:!1,threadMail:!1};mcCore.requestAjax({fClass:"read",fCallback:$Fn(_makeReadHtml,this).bind(),
oParameter:b,sUrl:"/json/read/"})};_readEML=function(a,b,c,d,e,f){var g={mimeSN:a,offset:b,size:c,encoding:d,
tempFilePostfix:e,baseDate:f};return _bIsReadEML=!0,_bIsTranslate="Y"===mCom.translate,mcCore.requestAjax({
fClass:"read",fCallback:$Fn(_makeReadHtml,this).bind(),oParameter:g,sUrl:"/json/eml/"}),g=null,!0};var readSetting=function(a,b,c){
if(!a)return!1;if("boolean"!=typeof c&&(c=!1),mlCore.getMailList().forEach(function(a,c){return a.mailSN==b?(mCom.listCursor=c,
mCom.listCursorMailSN=b,void(a.isRead=!0)):void 0},this),"2"==mCom.nCurrentFolder){var d=mlCore.getParentMail(b);
if(d&&!d.isSaveSentMail)return alert(nLang.e.mail_not_exist_readreceipt),!1}for(;a;){if(!a.tagName){
a=null;break}if("LI"==a.tagName.toUpperCase())break;a=a.parentNode}var e=$Element($$.getSingle(".icoRead",a)),f=$$.getSingle("li."+b+"_li .mCheck");
if(f&&a&&(f.checked?$Element(a).addClass("li_blue_bg"):$Element(a).removeClass("li_blue_bg"),$Element(a).addClass("true"),
$Element(a).removeClass("false")),e){mlCore.toggleReadButton(),a&&$Element(a).removeClass("notRead"),
e.attr("title",nLang.r.read_mail);var g=e.className();g=g.replace("|read_conversation","|unread_conversation"),
g.indexOf(" no")>0&&(g=g.indexOf(" nofw")>0||g.indexOf(" nore")>0?g.replace(" no"," "):g.replace(" no"," yes")),
e.className(g),g=null,"C"==mlCore.getCurrentViewType()&&mlCore.checkConversationReadStatus()}return c||setTimeout($Fn(function(){
mfCore.updateFolder()},this).bind(),500),!0};popupRead=function(a,b,c){var b=mcCore.getPureMailSN(b),d=$$.getSingle("li."+b+"_li",mCom.elList);
if(!d||readSetting(d,b,!0)){var e="",f="_blank";if(c=c||"","translate"===c){var g=mCom.charset?"&charset="+mCom.charset:"";
e="&translate=Y"+g}var h="?nMailId="+b;if(mCom.mimeSN){var i=location.href;h=i.substr(i.indexOf("?"));
}var j=mcCore.getPopupWindowWidthWith(900);mCom.popupReadFolderSN=mcCore.getFolderSNByMailSN(b),window.open("/read/popup/"+h+e,f,"width="+j+",height=650,resizable=yes,scrollbars=yes");
}},toggleExpand=function(a){var b=$Element(a.element),c=$Element($$.getSingle(".viewTitle .to_dt")),d=$Element($$.getSingle(".viewTitle .to_dd")),e=$Element($$.getSingle(".viewTitle .cc_dt")),f=$Element($$.getSingle(".viewTitle .cc_dd")),g=$Element($$.getSingle(".viewTitle .bcc_dt")),h=$Element($$.getSingle(".viewTitle .bcc_dd")),i={
showRcpt:b.hasClass("viewMoreOn")?!1:!0};return i.showRcpt?(b.addClass("viewMoreOn"),b.addClass("_ccr(rdh.close)"),
b.removeClass("viewMoreOff"),b.removeClass("_ccr(rdh.more)"),c.show(),d.show(),e&&(e.show(),f.show()),
g&&(g.show(),h.show())):(b.removeClass("viewMoreOn"),b.removeClass("_ccr(rdh.close)"),b.addClass("viewMoreOff"),
b.addClass("_ccr(rdh.more)"),c.hide(),d.hide(),e&&(e.hide(),f.hide()),g&&(g.hide(),h.hide())),mcCore.requestAjax({
fCallback:$Fn(function(a){mEnv.showRcpt=a.showRcpt;try{mCom.isPopup&&opener&&opener.mEnv&&(opener.mEnv.showRcpt=a.showRcpt);
}catch(b){}},this).bind(i),oParameter:i,sUrl:"/json/option/showRcpt/set"}),!0},toggleExpandForConversation=function(a){
if("BUTTON"==a.element.tagName)var b=a.element.parentNode,c=$Element(a.element);else var b=a.element,c=$Element($$.getSingle("button",a.element));
var d=b.parentNode,e={showRcpt:c.hasClass("viewMoreOn")?!1:!0};e.showRcpt?($Element(b).className("first-child toggleExpand _ccr(rdh.more) _c1(mrCore|toggleExpandForConversation) _stopDefault"),
c.className("viewMoreOn"),$ElementList($$(".rcpt_list",d)).show()):($Element(b).className("first-child toggleExpand _ccr(rdh.close) _c1(mrCore|toggleExpandForConversation) _stopDefault"),
c.className("viewMoreOff"),$ElementList($$(".rcpt_list",d)).hide()),mcCore.requestAjax({fCallback:$Fn(function(a){
mEnv.showRcpt=a.showRcpt;try{mCom.isPopup&&opener&&opener.mEnv&&(opener.mEnv.showRcpt=a.showRcpt)}catch(b){}
},this).bind(e),oParameter:e,sUrl:"/json/option/showRcpt/set"})};var onClickCalendarResponse=function(a,b){
var c=$Element("calendar_response_layer"),d=$Element("crl_message"),e=d.text(),f=c.data("active-mailsn");
switch(b){case"tentative":case"reject":_callScehduleReply({mailSN:f,reply:b,message:e});break;case"cancel":
default:hideAllLayer()}},setSchedule=function(a,b){var c,d=$Element(a.element),e=d.parent(function(a){
return!!a.data("mailsn")})[0],f=e?e.data("mailsn"):mCom.nCurReadingMailSN;if("button"!==d.tag&&(d=d.parent(function(a){
return"button"===a.tag})[0]),c=d.offset(),mcCore.isNaver())return void _callScehduleReply({mailSN:f,
reply:b});if("tentative"===b||"reject"===b){var g=$Element("calendar_response_layer"),h=$Element("crl_title"),i=$Element("crl_content_multiline"),j=$Element("crl_content_single"),k=$Element("crl_notice1"),l=$Element("crl_notice2"),m=$Element("crl_confirm"),n=$Element("crl_message"),o={
tentative:"_c1(mrCore|onClickCalendarResponse|tentative)",reject:"_c1(mrCore|onClickCalendarResponse|reject)"
};"tentative"===b?(i.show(),j.hide(),h.text(nLang.r.cal_response_title_tentative),k.text(nLang.r.cal_response_notice1_tentative),
l.text(nLang.r.cal_response_notice2_tentative),m.removeClass(o.reject)):("true"===d.data("repetitive")?(i.hide(),
j.show(),h.text(nLang.r.cal_response_title_repetitive_reject)):(i.show(),j.hide(),h.text(nLang.r.cal_response_title_reject),
k.text(nLang.r.cal_response_notice1_reject),l.text(nLang.r.cal_response_notice2_reject)),m.removeClass(o.tentative)),
m.addClass(o[b]),n.text(""),h.show(),hideAllLayer();var p=g.parent(),q=p.offset(),r=p.$value().scrollTop,s=p.$value().scrollLeft;
g.data("active-mailsn",f),g.css({top:c.top+d.height()-q.top+r+"px",left:c.left-q.left+s+"px"}),g.show(),
mCom.aVisibleLayerList.push(g)}else _callScehduleReply({mailSN:f,reply:b})},_callScehduleReply=function(a){
mcCore.requestAjax({fCallback:$Fn(_setScheduleCallBack,this).bind(a),oParameter:a,sUrl:"/json/schedule/reply/"
})},_setScheduleCallBack=function(a){var b=a.reply,c=a.mailSN,d=$$.getSingle("#CalArea_"+c),e=$$.getSingle("button[name=accept]",d),f=$$.getSingle("button[name=tentative]",d),g=$$.getSingle("button[name=reject]",d);
if(hideAllLayer(),"accept"==b)myCore.showConfirmLayer(null,nLang.r.send_accept_mail),f.removeAttribute("disabled"),
g.removeAttribute("disabled"),e.disabled=!0,mcCore.isNaver()?(e.setAttribute("disabled","disabled"),
e.className="",f.className="_c1(mrCore|setSchedule|tentative)",g.className="_c1(mrCore|setSchedule|reject)"):(e.className="accept selected _stopDefault",
f.className="pending _c1(mrCore|setSchedule|tentative)",g.className="reject _c1(mrCore|setSchedule|reject)");else if("tentative"==b)myCore.showConfirmLayer(null,nLang.r.send_tentative_mail),
e.removeAttribute("disabled"),g.removeAttribute("disabled"),f.disabled=!0,mcCore.isNaver()?(e.className="_c1(mrCore|setSchedule|accept)",
f.setAttribute("disabled","disabled"),f.className="",g.className="_c1(mrCore|setSchedule|reject)"):(e.className="accept _c1(mrCore|setSchedule|accept)",
f.className="pending selected _stopDefault",g.className="reject _c1(mrCore|setSchedule|reject)");else{
if("reject"==b)return myCore.showConfirmLayer(null,nLang.r.send_reject_mail),void _getSchedule(c);"wait"==b&&(e.removeAttribute("disabled"),
f.removeAttribute("disabled"),g.removeAttribute("disabled"),e.className="_c1(mrCore|setSchedule|accept)",
f.className="_c1(mrCore|setSchedule|tentative)",g.className="_c1(mrCore|setSchedule|reject)")}};toggleAttachArea=function(a){
if("BUTTON"==a.element.tagName)var b=a.element;else var b=a.element.parentNode;for(var c=b.parentNode;c&&!$Element(c).hasClass("attfile_area");)c=c.parentNode;
var d=$Element($$.getSingle(".file_list",c));return d.visible()?(d.hide(),$Element(b).addClass("open")):(d.show(),
$Element(b).removeClass("open")),c=b=null,!0},readWithNHNViewer=function(a,b,c){var d=new Array("sourceId","url","language");
if(mcCore.isNcs())var e=new Array("ncsmail",window.location.protocol+"//"+mEnv.downloadServerInfo+"/file/download/each/?attachType=normal&mailSN="+b+"&attachIndex="+c+"&virus=1&domain="+window.location.hostname+"&u="+mEnv.mailId,cCode),f=mCom.sNdriveViewerPrefixForNCS+mEnv.rootDomain+"/viewer.nhn";else if(mcCore.isNwe())var e=new Array("mail",window.location.protocol+"//"+mEnv.downloadServerInfo+"/file/download/each/?attachType=normal&mailSN="+b+"&attachIndex="+c+"&virus=1&domain="+location.host+"&u="+mEnv.mailId,cCode),f=mCom.sNdriveViewerPrefixForNWE+mEnv.rootDomain+"/viewer.nhn";else var e=new Array("mail",window.location.protocol+"//"+mEnv.downloadServerInfo+"/file/download/each/?attachType=normal&mailSN="+b+"&attachIndex="+c+"&virus=1&domain=mail.naver.com&u="+mEnv.mailId,cCode),f=mCom.sNdriveViewerPrefix+mEnv.rootDomain+"/viewer.nhn";
popup=mcCore.openWindowWithPost(f,"NHNviewer",d,e,"top=10,left=10,width=1024,height=800,resizable=yes,scrollbars=no"),
d=e=f=null},toTop=function(){$$.getSingle(".viewTitle").scrollIntoView()},virusDetected=function(a){
if(_bIsReadEML){var b=mrTemplate.sVirusLayerAtEMLTemplate;b=b.replace(/\{VIRUSNAME\}/g,a.virusName||null),
b=b.replace(/\{VIRUSFILE\}/g,a.fileName||null),b=b.replace(/\{OFFSET\}/g,a.offset||null),b=b.replace(/\{SIZE\}/g,a.size||null),
b=b.replace(/\{ENCODE\}/g,a.encoding||null),b=b.replace(/\{CHARSET\}/g,a.charset||null),b=b.replace(/\{MIMESN\}/g,a.mimeSN),
b=b.replace(/\{TEMPFILEPOSTFIX\}/g,_nCurReadingMailTempFilePostFix),b=b.replace(/\{BASEDATE\}/g,_nCurReadingMailBaseDate);
}else{var b=mrTemplate.sVirusLayerTemplate;b=b.replace(/\{VIRUSNAME\}/g,a.virusName||null),b=b.replace(/\{VIRUSFILE\}/g,a.fileName||null),
b=b.replace(/\{MAILID\}/g,a.mailSN||null),b=b.replace(/\{ATTACHINDEX\}/g,a.attachSN||null)}$$.getSingle("#virusViewContent").innerHTML=b,
myCore.showLayer(null,$Element("virusView"),{direction:"screen-center",align:"absolute-center"})},hideVirusLayer=function(){
$Element("virusView").hide()};var isVirtualMailbox=function(a){var b=$A(["unread","all","mark","attach","tome","thread","search","fromAddr","2","remind","vip"]);
return b.has(a.toString().split("$")[0])};readPrev=function(a){if(!mCom.bLoadingMail&&2!=mCom.clickPrevNextMail&&-1!=mCom.nCurReadingMailSN&&!$Element(a.element).hasClass("disabled")){
if(!mCom.isPopup&&"list"!=mCom.vDivideMode||isVirtualMailbox(mCom.nCurrentFolder)||mCom.bIsUnread)var b=mlCore.findMailSN(mCom.nCurReadingMailSN,"prev");else var b=mCom.nCurPrevMailSN;
if(null==b&&(1==mCom.nCurrentPage||mCom.isPopup))return void alert(mcCore.getMemoboxString("no_prev_mail",mCom.nCurrentFolder,"r"));
mCom.isPopup?clickTitle(a,b):0===mCom.listCursor||_woMailList.get(0)&&_woMailList.get(0).mailSN==mCom.nCurReadingMailSN?"list"==mCom.vDivideMode?mlCore.updateListObject(mCom.bIsUnread?mCom.nCurrentPage:--mCom.nCurrentPage,"prev"):(mCom.clickPrevNextMail=2,
mlCore.movePage(a,"prev"),mCom.elList.scrollTop=1e4):(mlCore.getListObject(b).parentMailSN?clickTitle(a,b,!0):clickTitle(a,b),
"list"!=mCom.vDivideMode&&moveScrollByCursorNum("up")),$$.getSingle(".divContent").focus()}},readNext=function(a){
if(!mCom.bLoadingMail&&1!=mCom.clickPrevNextMail&&-1!=mCom.nCurReadingMailSN&&!$Element(a.element).hasClass("disabled")){
if(!mCom.isPopup&&"list"!=mCom.vDivideMode||isVirtualMailbox(mCom.nCurrentFolder)||mCom.bIsUnread)var b=mlCore.findMailSN(mCom.nCurReadingMailSN,"next");else var b=mCom.nCurNextMailSN;
if(null==b&&(mCom.nLastPage==mCom.nCurrentPage||mCom.isPopup))return void alert(mcCore.getMemoboxString("no_next_mail",mCom.nCurrentFolder,"r"));
mCom.isPopup?clickTitle(a,b):mCom.listCursor==$$("li[mailsn][@display!=none]",mCom.elList).length-1?"list"==mCom.vDivideMode?mlCore.updateListObject(mCom.bIsUnread?mCom.nCurrentPage:++mCom.nCurrentPage,"next"):(mCom.clickPrevNextMail=1,
mlCore.movePage(a,mCom.bIsUnread?"current":"next"),mCom.elList.scrollTop=0):(mlCore.getListObject(b).parentMailSN?clickTitle(a,b,!0):clickTitle(a,b),
"list"!=mCom.vDivideMode&&moveScrollByCursorNum("down")),$$.getSingle(".divContent").focus()}},readPrev_old=function(a){
if(mCom.nCurPrevMailSN)if(mCom.isPopup||0!=mCom.listCursor)clickTitle(a,mCom.nCurPrevMailSN);else{"list"==mCom.vDivideMode?mCom.nCurrentPage-=1:(mlCore.movePage(a,"prev"),
mCom.elList.scrollTop=1e4);var b=mCom.nCurPrevMailSN;clickTitle(a,mCom.nCurPrevMailSN),setTimeout($Fn(mlCore.checkMailUI,this).bind(b),500),
mCom.listCursor=mEnv.listNum-1}else alert(mcCore.getMemoboxString("no_prev_mail",mCom.nCurrentFolder,"r"));
"list"!=mCom.vDivideMode&&moveScrollByCursorNum("up"),$$.getSingle(".divContent").focus()},readNext_old=function(a){
if(mCom.nCurNextMailSN)if(mCom.isPopup||mCom.listCursor!=mEnv.listNum-1)clickTitle(a,mCom.nCurNextMailSN);else{
"list"==mCom.vDivideMode?mCom.nCurrentPage+=1:(mlCore.movePage(a,"next"),mCom.elList.scrollTop=0);var b=mCom.nCurNextMailSN;
clickTitle(a,mCom.nCurNextMailSN),setTimeout($Fn(mlCore.checkMailUI,this).bind(b),500),mCom.listCursor=0;
}else alert(mcCore.getMemoboxString("no_next_mail",mCom.nCurrentFolder,"r"));"list"!=mCom.vDivideMode&&moveScrollByCursorNum("down"),
$$.getSingle(".divContent").focus()},moveScrollByCursorNum=function(a){var b=$Element($$("li[mailsn][@display!=none]",mCom.elList)[mCom.listCursor]).attr("mailsn"),c=$Element($$.getSingle("."+b+"_li")),d=$Agent().navigator();
if(d.chrome){document.body}else{document.documentElement}"down"==a?$Element("normalPagingNav").offset().top<c.offset().top+c.height()&&(mCom.elList.scrollTop+=c.height()):"up"==a&&0>c.offset().top-c.height()&&(mCom.elList.scrollTop-=c.height());
},popupToReadEML=function(a,b,c,d,e,f,g,h){return a&&a.stopDefault(),h&&"removed"==h?!1:void window.open("/read/popup/?mimeSN="+b+"&offset="+c+"&size="+d+"&encoding="+e+"&tempFilePostfix="+f+"&baseDate="+g,"_blank","width=900,height=650,resizable=yes,scrollbars=yes");
},useBillMailBox=function(a){$Element("useBillForRead").hide(),myCore.useBillMailBox(a)},downloadVirus=function(a,b,c,d){
"original"==d?location.href=window.location.protocol+"//"+mEnv.downloadServerInfo+"/file/download/each/?attachType=normal&mailSN="+b+"&attachIndex="+c+"&virus=0&domain="+document.location.host:"cured"==d&&(location.href=window.location.protocol+"//"+mEnv.downloadServerInfo+"/file/download/each/?attachType=normal&mailSN="+b+"&attachIndex="+c+"&virus=2&domain="+document.location.host);
},downloadVirusAtEML=function(a,b,c,d,e,f,g,h,i,j){""==f&&(sFilleName=nLang.l.no_title),"original"==j?location.href=window.location.protocol+"//"+mEnv.downloadServerInfo+"/eml/download/?mimeSN="+b+"&offset="+c+"&size="+d+"&encoding="+e+"&fileName="+f+"&charset="+g+"&tempFilePostfix="+h+"&baseDate="+i+"&virus=0&domain="+document.location.host:"cured"==j&&(location.href=window.location.protocol+"//"+mEnv.downloadServerInfo+"/eml/download/?mimeSN="+b+"&offset="+c+"&size="+d+"&encoding="+e+"&fileName="+f+"&charset="+g+"&tempFilePostfix="+h+"&baseDate="+i+"&virus=2&domain="+document.location.host);
},deleteFile=function(a,b,c,d,e){if(b&&confirm(nLang.r.confirm_delete_attach)){var f={mailSN:b,contentSN:c,
contentOffset:d,contentSize:e};mcCore.requestAjax({fCallback:$Fn(_deleteFileCallback,this).bind(),oParameter:f,
sUrl:"/json/read/file/delete/"})}},_deleteFileCallback=function(){if(mCom.isPopup){location.reload(),
opener.mcCore.isAttach()&&opener.mlCore.refreshList(!0);try{opener&&opener.mCom.isReading&&mCom.nMailId==opener.mCom.nCurReadingMailSN&&opener.mrCore.clickTitle(null,opener.mCom.nCurReadingMailSN);
}catch(a){}}else clickTitle(null,mCom.nCurReadingMailSN)},moveScroll=function(a,b){var c=$$.getSingle("."+b);
c&&($$.getSingle("#previewContent").scrollTop=c.offsetTop)},printMail=function(a,b){$Element("listHeadDiv")&&$Element("listHeadDiv").hide();
var c={mailSN:String(a),viewAll:mEnv.hideSpamImage,threadMail:!1,prevNextMail:!1,charset:b||""};return!mCom.hasNoOpener&&opener&&opener.m&&null!=opener.mCom.bViewSpamImage&&"-1"!=opener.mCom.bViewSpamImage&&(c.viewAll=opener.mCom.bViewSpamImage),
_bIsReadEML=!1,mcCore.requestAjax({fCallback:$Fn(_makeReadHtmlForPrint,this).bind(),oParameter:c,sUrl:"/json/read/"
}),c=null,!0},attachDownloadFile=function(a,b,c){if(b=b.replace(/@le@0928/g,"("),b=b.replace(/@ri@0928/g,")"),
"undefined"!=typeof c&&"true"==c){if(!confirm(nLang.r.warning_file_ncs))return;$("checkVirusArea").contentWindow.location.href=b;
}},_makeAttachAreaHtml=function(a){var b="";if(a.hasAttachWithdraw&&(b=mrTemplate.sAttachWithdrawTemplate.replace(/\{MailSN\}/g,a.mailInfo.mailSN)),
!a.attachList.attachCount)return a.hasAttachWithdraw?"<div class='attfile_area'>"+b+"</div>":"";for(var c=mrTemplate.sAttachTemplate,d="",e="",f="",g="",h=0,i=a.attachList.attachInfo.length;i>h;h++){
"undefined"!=typeof a.attachList.attachInfo[h].showAlert&&1==a.attachList.attachInfo[h].showAlert?(_isShowWarning=!0,
_bShowWaringStr=!0):_isShowWarning=!1;var j=a.attachList.attachInfo[h].filename,k=mcCore.isBlockedExtension(j);
if(_htFileTpl.IsBlocked=k?"blocked":"",a.attachList.attachInfo[h].filename.match(/\.eml$/i)||"message/rfc822"==a.attachList.attachInfo[h].contentType){
if(_bIsReadEML){var l=mrTemplate.sEMLAtEMLTemplate;mcCore.isNcs()&&_isShowWarning?(e=mrTemplate.sEMLAtEMLTemplateInDirectLink,
f=mrTemplate.sEMLAtEMLTemplateInDirectButton):(e=mrTemplate.sEMLAtEMLTemplateDirectLink,f=mrTemplate.sEMLAtEMLTemplateDirectButton);
}else{var l=mrTemplate.sEMLTemplate;mcCore.isNcs()&&_isShowWarning?(e=mrTemplate.sEMLTemplateInDirectLink,
f=mrTemplate.sEMLTemplateInDirectButton):(e=mrTemplate.sEMLTemplateDirectLink,f=mrTemplate.sEMLTemplateDirectButton);
}_htFileTpl.Offset=a.attachList.attachInfo[h].contentOffset,_htFileTpl.Size=a.attachList.attachInfo[h].contentSize,
_htFileTpl.Encoding=a.attachList.attachInfo[h].encoding,_htFileTpl.TempFilePostfix=a.attachList.tempFilePostfix,
_htFileTpl.BaseDate=a.attachList.baseDate,_htFileTpl.Domain=document.location.host}else if(_bIsReadEML){
var l=mrTemplate.sFileListAtEMLTemplate;mcCore.isNcs()&&_isShowWarning?(e=mrTemplate.sFileListAtEMLTemplateInDirectLink,
f=mrTemplate.sFileListAtEMLTemplateInDirectButton):(e=mrTemplate.sFileListAtEMLTemplateDirectLink,f=mrTemplate.sFileListAtEMLTemplateDirectButton);
}else{var l=mrTemplate.sFileListTemplate;mcCore.isNcs()&&_isShowWarning?(e=mrTemplate.sFileListTemplateInDirectLink,
f=mrTemplate.sFileListTemplateInDirectButton):(e=mrTemplate.sFileListTemplateDirectLink,f=mrTemplate.sFileListTemplateDirectButton),
a.attachList.attachInfo[h].filename.match(/\.(ndoc|nxls|nppt|nfrm)$/i)&&(e=mrTemplate.sFileListTemplateViewerDirectLink);
}mcCore.isDisplayDrive()?k?(e=mrTemplate.sFileListTemplateBlockedLink,f=mrTemplate.sFileListTemplateBlockedButton,
g=mrTemplate.sFileListTemplateCloudBlockButton):g=mrTemplate.sFileListTemplateCloudButton:g=mrTemplate.sFileListTemplateCloudDisabledButton;
var m=a.attachList.attachInfo[h].showImage;if(m){var n=k?mrTemplate.sBlockedImageListTemplate:mrTemplate.sImageListTemplate;
_nImageCount++}if(""==a.attachList.attachInfo[h].realFilename)var o=nLang.l.no_title;else var o=a.attachList.attachInfo[h].realFilename||nLang.l.no_title;
""==a.attachList.attachInfo[h].filename&&(j=nLang.l.no_title);var p="<a class='btn_preview' href='javascript:return false;' title='"+nLang.l.preview_in_web+"'><span class='blind'>"+nLang.l.preview+"</span></a>",q="<a class='btn_preview _c1(myCore|downloadBlocked|preview) _stopDefault' href='javascript:;' title='"+nLang.l.preview_in_web+"'><span class='blind'>"+nLang.l.preview+"</span></a>";
if(l=a.attachList.attachInfo[h].showHtmlLink?k?l.replace(/\{ShowHtmlLinkE\}/g,q):Number(a.attachList.attachInfo[h].flag)%8>>2==1?l.replace(/\{ShowHtmlLinkE\}/g,p):l.replace(/\{ShowHtmlLinkE\}/g,mrTemplate.sHtmlLinkTemplate):l.replace(/\{ShowHtmlLinkE\}/g,""),
l=l.replace(/\{AttachFileLink\}/g,e),l=l.replace(/\{AttachFileButton\}/g,f),l=l.replace(/\{SaveCloudButton\}/g,g),
l=_isShowWarning?l.replace(/\{showAlert\}/g,"true"):l.replace(/\{showAlert\}/g,"false"),_bIsReadEML){
_htFileTpl.MimeSN=a.mailInfo.mimeSN,_htFileTpl.Offset=a.attachList.attachInfo[h].contentOffset,_htFileTpl.Size=a.attachList.attachInfo[h].contentSize,
_htFileTpl.Encoding=a.attachList.attachInfo[h].encoding,_htFileTpl.FileName=encodeURIComponent(o),mcCore.isNcs()&&(_htFileTpl.FileName=_htFileTpl.FileName.replace(/\(/g,"@le@0928"),
_htFileTpl.FileName=_htFileTpl.FileName.replace(/\)/g,"@ri@0928")),_htFileTpl.Charset=a.attachList.attachInfo[h].charset,
_htFileTpl.TempFilePostfix=a.attachList.tempFilePostfix,_htFileTpl.BaseDate=a.attachList.baseDate,_htFileTpl.Domain=document.location.host;
var r=[window.location.protocol+"//",mEnv.downloadServerInfo,"/eml/download","?mimeSN=",a.mailInfo.mimeSN,"&offset=",a.attachList.attachInfo[h].contentOffset,"&size=",a.attachList.attachInfo[h].contentSize,"&fileName=",encodeURIComponent(encodeURIComponent(o)),"&charset=","&tempFilePostfix=",a.attachList.tempFilePostfix,"&basedate=",a.attachList.baseDate,"&encoding=",a.attachList.attachInfo[h].encoding,"&domain=",document.location.host].join("");
}else{_htFileTpl.MailSN=a.mailInfo.mailSN,_htFileTpl.AttachSN=a.attachList.attachInfo[h].contentSN,_htFileTpl.Domain=document.location.host,
Number(a.attachList.attachInfo[h].flag)%8>>2==1?(_htFileTpl.DeleteFileInfo="",_htFileTpl.IsRemoved="removed",
_nDeletedFile++):(_htFileTpl.DeleteFileInfo=a.mailInfo.mailSN+"|"+a.attachList.attachInfo[h].contentSN+"|"+a.attachList.attachInfo[h].contentOffset+"|"+a.attachList.attachInfo[h].contentSize,
_htFileTpl.IsRemoved="");var r=[window.location.protocol+"//",mEnv.downloadServerInfo,"/file/download/each/","?attachType=normal","&mailSN=",a.mailInfo.mailSN,"&attachIndex=",a.attachList.attachInfo[h].contentSN,"&mimefilename=","&offset=","&size=",a.attachList.attachInfo[h].decodedContentSize,"&encode=","&attFN=","&charset=",a.attachList.attachInfo[h].charset,"&filetype=","&basedate=","&domain=",document.location.host].join("");
}var s="",t="";a.ndriveServer?s=a.ndriveServer:mInfo&&mInfo.ndrive.sNdriveUrl&&(s=mInfo.ndrive.sNdriveUrl),
s&&(t=mcCore.isNaver()&&mcCore.isMobile()?window.location.protocol+"//m."+s+"/mobile":window.location.protocol+"//"+s,
l=l.replace(/\{NdriveServer\}/g,t));var u={key:"",name:mcCore.restoreSpecialChar(o),size:a.attachList.attachInfo[h].decodedContentSize,
downloadUrl:r};l=l.replace(/\{NdriveResource\}/,encodeURIComponent(JSON.stringify(u))),l="removed"==_htFileTpl.IsRemoved?l.replace(/{DeletedFile}/,"return false;"):l.replace(/{DeletedFile}/,"");
var v=$Agent().navigator().safari&&$Agent().os().mac&&!isNcs();_htFileTpl.ListTitle=o,_htFileTpl.SaveAttachListName=j,
_htFileTpl.HumanReadSize=a.attachList.attachInfo[h].humanReadSize,_htFileTpl.AttachSize=a.attachList.attachInfo[h].decodedContentSize,
_htFileTpl.EncodedFilename=v?encodeURIComponent(o):"",m&&(_htImageTpl.MailSN=a.mailInfo.mailSN,_htImageTpl.AttachSN=a.attachList.attachInfo[h].contentSN,
_htImageTpl.ContentType=a.attachList.attachInfo[h].contentType,_htImageTpl.ContentOffset=a.attachList.attachInfo[h].contentOffset,
_htImageTpl.ContentSize=a.attachList.attachInfo[h].contentSize,_htImageTpl.MimeSN=a.mailInfo.mimeSN,
_htImageTpl.Filename=o,_htImageTpl.DownloadServer=mEnv.downloadServerInfo,_htImageTpl.MailDomain=document.URL.split("//")[1].split("/")[0],
_htImageTpl.EncodedFilename=v?encodeURIComponent(o):"",_htImageTpl.ImageWidth=parseInt(a.attachList.attachInfo[h].contentSize,10)>2097152?"style='width:200px;max-width:200px;max-height:200px'":"style='max-width:200px;max-height:200px'",
_sImageFiles+=_nImageCount%3==0?mcCore.template(n,_htImageTpl)+"</tr><tr>":mcCore.template(n,_htImageTpl)+"<td></td>"),
_htFileTpl.DownloadServer=mEnv.downloadServerInfo,_htFileTpl.MimeSN=a.mailInfo.mimeSN,d+=mcCore.template(l,_htFileTpl);
}return c=_bShowWaringStr?c.replace(/\{warning_string\}/g,"block"):c.replace(/\{warning_string\}/g,"none"),
_bIsReadEML||_nDeletedFile>=a.attachList.attachCount?_htAttachTpl.DownloadAll="":mcCore.isDisplayDrive()?(c=c.replace(/\{DownloadAll\}/g,"<a id='save_all' href='#' class='_c1(myCore|showDownloadAllLayer|"+a.mailInfo.mailSN+") _stopDefault' >"+nLang.r.download_all+"</a>"),
sDownloadAllPCLink=window.location.protocol+"//{DownloadServer}/file/download/all/?mailSN={MailSN}&domain={Domain}&u="+mEnv.mailId):c=c.replace(/\{DownloadAll\}/g,"<a href='"+window.location.protocol+"//{DownloadServer}/file/download/all/?mailSN={MailSN}&domain={Domain}&u="+mEnv.mailId+"' onclick='ccr(this, \"rda.saveall\", event)' target='checkVirusArea'>"+nLang.r.download_all+"</a>"),
_htAttachTpl.AttachCount=a.attachList.attachCount,_htAttachTpl.AttachSizeAll=a.attachList.attachsizeAll,
_htAttachTpl.AttachListHTML=d,_htAttachTpl.MailSN=a.mailInfo.mailSN,_htAttachTpl.DownloadServer=mEnv.downloadServerInfo,
_htAttachTpl.Domain=document.location.host,_htAttachTpl.AttachWithdrawHTML=b,c=mcCore.template(c,_htAttachTpl);
},_setBrowserTitle=function(a,b){try{if(mCom.isPopup&&window.opener&&window.opener.m)var c=opener.document;else var c=document;
var d=$Element(document.createElement("textarea")),e=a?d.html(a).html():nLang.l.no_title;e=e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">");
var f=$$.getSingle("#headUnreadNum",c.body),g=f?Number($Element(f).html()):0,h=g>0?"("+g+")":"",i=$Element($$.getSingle("#headFolderName",c.body)),j=i?i.text():"";
mCom.nCurReadMailSubject=e,mCom.nCurFolderTotalUnreadCount=g,j=mcCore.restoreSpecialChar(j),document.title="list"==mCom.vDivideMode?e+(b&&!mCom.isPopup?h:""):j+h+" : "+mcCore.getServiceTitle();
}catch(k){}},getCreteriaEl=function(elCard){var elReadFrame=$$.getSingle("div.readFrame",elCard);elReadFrame||(elReadFrame=elCard);
for(var aElChild=$$("*",elReadFrame),aPatternMsg=["-----Original Message-----","----- Original Message -----","---------- Forwarded message ----------","----- 원문 메시지 -----"],oRegExp2=/(^<b>(<[^><]+>)?From:(<\/[^><]+>)?<\/b>$|^<blockquote type="cite">)/,sRegExp="/^[\\s\\n\\t]*("+aPatternMsg.join("|")+")/",oRegExp=new RegExp(eval(sRegExp)),elCreteria=null,i=1,nLength=aElChild.length;nLength>i;i++){
var elChild=aElChild[i];if(oRegExp.test(elChild.innerText||elChild.textContent||"")){elCreteria=elChild;
break}if(oRegExp2.test(elChild.outerHTML||"")){elCreteria=elChild;break}}return elCreteria},makeConversationView=function(a){
var b=a.mailInfo.mailSN,c=b,d=0,e=[],f=-1,g=a.threadData,h="selected";if(_woConversationMailList=$A([]),
"list"!=mCom.vDivideMode&&_woCurMailList&&1==_woCurMailList.length()){var i=_woCurMailList.get(0).mailSN+"";
i.match(/^c/)&&mcCore.getPureMailSN(i)==b&&(h="",c="c"+c)}e[++f]='<div class="coverWrap">';for(var j=0,k=g.length;k>j;j++){
var l=g[j];if(l.mailSN==b){if(e[++f]='<div class="cv_card '+h+'" data-mailsn="'+b+'">',e[++f]=makeCardHtmlForMain(a),
e[++f]="</div>",!mcCore.isCorrespondFlag(a.mailInfo.status,"0x4")){mcCore.setUnreadThreadCount(g[0].mailSN,"add",-1);
var m=$$.getSingle("li."+l.mailSN+"_li",mCom.elList);m&&readSetting(m,l.mailSN)}a.mailInfo.parentMailSN=g[0].mailSN,
a.mailInfo.isRead=!0,a.mailInfo.isMarked=mcCore.isCorrespondFlag(a.mailInfo.status,"0x20")?!0:!1,a.mailInfo.fromName=a.mailInfo.from.name,
a.mailInfo.fromAddr=a.mailInfo.from.email,a.mailInfo.body&&delete a.mailInfo.body,_woConversationMailList.push(a.mailInfo);
}else e[++f]='<div class="cv_card fold '+(mcCore.isCorrespondFlag(l.status,"0x4")?"":"notRead")+'" data-mailsn="'+l.mailSN+'">',
e[++f]=makeCardHtmlForSub(l,a.currentTime),e[++f]="</div>",l.parentMailSN=g[0].mailSN,mcCore.isCorrespondFlag(l.status,"0x4")?l.isRead=!0:(l.isRead=!1,
d++),l.isMarked=mcCore.isCorrespondFlag(l.status,"0x20")?!0:!1,l.fromName=l.from.name,l.fromAddr=l.from.email,
_woConversationMailList.push(l)}mlCore.setThreadCount(b,a.threadTotalCount,d),e[++f]='<p class="toTop"><a href="#" class="_c1(mrCore|toTop) _ccr(rdr.go) _stopDefault">'+nLang.r.go_top+"</a></p>",
e[++f]="</div>",mCom.elRead.innerHTML=e.join("");var n=$$.getSingle("div.cv_card:not(.fold)",mCom.elRead);
$$.getSingle("div.img_preview_area",n)?$Element($$.getSingle("div.img_preview_area",n)).addClass("_c1(mrCore|selectCard)"):null,
-1==a.mailInfo.htmlBodyContentSN&&_linkify($$.getSingle("div.readFrame",n)),mcCore.isCorrespondFlag(a.mailInfo.status,"0x400000")&&mcCore.useCalendar()&&_getSchedule(a.mailInfo.mailSN),
mcCore.checkApprovalStatus(a.mailInfo.status)&&_getApproval(a.mailInfo.mailSN,a.mailInfo.messageId,a.mailInfo.from),
_drawFakeNotiArea(a.mailInfo),_drawWorkflowArea(a.mailInfo),makeToggleOriginalMsgBtn(n),isUseQuickReply(a.mailInfo.folderSN)&&addQuickReplyUI($$.getSingle("div.readFrame",n),a.mailInfo.mailSN),
$$.getSingle("div.readFrame",n).style.display="",applyConversationRead(),setScrollFocusToCard(n),(mCom.isPopup||""==mlCore.getCurMailList().$value()[0])&&(mlCore.emptyCurMailList(),
mlCore.pushToCurMailList(a.mailInfo)),mCom.isReading=!0,mCom.nCurReadingMailSN=c,mcCore.getElapsedTime(nLang.r.end_read_mail),
mCom.bRunningShorcut=!1,mCom.bLoadingMail=!1,mCom.nCurPrevMailSN=a.prevMailData?a.prevMailData.mailSN:null,
mCom.nCurNextMailSN=a.nextMailData?a.nextMailData.mailSN:null,mlCore.checkConversationReadStatus(),mcCore.testPeriodEnd("대화형 메일 본창 읽기 끝");
},fnUnfoldCheck=function(){if(mCom.bCheckToggleCard){for(var a=$$(".cv_card.fold",mCom.elRead),b=null,c=mCom.elRead.scrollTop,d=c+mCom.elRead.offsetHeight,e=0,f=a.length;f>e;e++){
var g=a[e];if(c<=g.offsetTop&&g.offsetTop+g.offsetHeight<=d&&$$.getSingle(".icoRead.no",g)&&!$$.getSingle("div.readFrame",g)&&!$Element(g).attr("data-check")){
$Element(g).attr("data-check","true"),b=g;break}}b&&toggleCard(null,g,!0,!1,!0,!0)}},setScrollFocusToCard=function(a){
var b=a.offsetTop-30,c=$$("div.cv_card",mCom.elRead),b=c[c.length-1].offsetTop-30,d=$$.getSingle("p.toTop").offsetTop+$$.getSingle("p.toTop").offsetHeight,e=0;
d<mCom.elRead.offsetHeight&&(e=mCom.elRead.offsetHeight-d);var f=d+e;f-mCom.elRead.offsetHeight<b&&(e+=b-(f-mCom.elRead.offsetHeight)),
$$.getSingle("div.coverWrap",mCom.elRead).style.paddingBottom=e+"px",mCom.elRead.scrollTop=a.offsetTop-30;
},makeToggleOriginalMsgBtn=function(a){var b=getCreteriaEl(a);if(b){$Element(b).addClass("toggle_creteria"),
$ElementList($$(".toggle_creteria ~ *",a)).addClass("toggle_creteria");for(var c=b;;){if(c.parentNode==a){
$ElementList($$(".temp_creteria",a)).removeClass("temp_creteria");break}c=c.parentNode,$Element(c).addClass("temp_creteria");
}var d=$('<p style="margin-top:10px;"><button class="toggle_oldermail _c1(mrCore|toggleOriginalMsg|show) _ccr(rdr.threadfold) _stopDefault">'+nLang.c.prev_mail2+'<i class="ico_arrow_down"><span class="blind">'+nLang.c.unfold+"</span></i></button></p>");
$Element(b).before(d);for(var e=d.parentNode,f=e.childNodes,g=nLength=f.length,h=0;nLength>h;h++){var i=f[h];
i==d&&(g=h);var j=Node?Node.TEXT_NODE:3;if(h>g&&i.nodeType===j&&""!=$S(i.textContent).trim()._str){var k=$('<div class="toggle_creteria">'+mcCore.replaceSpecialChar(i.textContent)+"</div>");
$Element(i).after(k),e.removeChild(i)}}var l=$$(".toggle_creteria",a);$ElementList(l).hide()}},toggleOriginalMsg=function(a,b){
var c=a.element;"BUTTON"!=c.tagName.toUpperCase()&&(c=a.element.parentNode);var d=$$.getSingle("! div.readFrame",c),e=$$(".toggle_creteria",d);
"show"==b?($ElementList(e).show(),$Element(c).className("toggle_oldermail _c1(mrCore|toggleOriginalMsg|hide) _ccr(rdr.threadunfold) _stopDefault"),
c.innerHTML=nLang.c.prev_mail2+'<i class="ico_arrow_up"><span class="blind">'+nLang.c.hide+"</span></i>"):($ElementList(e).hide(),
$Element(c).className("toggle_oldermail _c1(mrCore|toggleOriginalMsg|show) _ccr(rdr.threadfold) _stopDefault"),
c.innerHTML=nLang.c.prev_mail2+'<i class="ico_arrow_down"><span class="blind">'+nLang.c.unfold+"</span></i>");
},selectCard=function(a,b){if(a&&a.element&&ccr(a.element,"rdr.threadselect",a),!(window.getSelection&&window.getSelection().toString().length>0)){
if(!b)for(b=a.element;b&&!$Element(b).hasClass("cv_card");)b=b.parentNode;if(b){var c=$Element(b),d=c.attr("data-mailsn");
$$.getSingle(".cv_card.selected",mCom.elRead)?$Element($$.getSingle(".cv_card.selected",mCom.elRead)).removeClass("selected"):null,
c.addClass("selected"),unCheckAll(!0);var e=$$.getSingle("li."+d+"_li");if(mCom.nCurReadingMailSN=d,
mCom.elListWrap&&mCom.elListWrap.visible()&&e){var f=$$.getSingle("li.cv_slave li."+d+"_li"),g=!(!f||!$Element(f).visible());
mlCore.checkMailUI(d,!1,g)}_woConversationMailList.forEach(function(a){if(a.mailSN==d){_woCurMailList.empty(),
_woCurMailList.push(a);var c=$$.getSingle("#listBtnMenu .do_read"),e=$$.getSingle("#readBtnMenu .do_read"),f=$$.getSingle("span.icoRead.yes",b)?"read":"unread";
"read"!=f?(e.innerHTML=nLang.l.read,$Element(e).className("b do_read primary_ccrf(mrd|.read) _c1(mlCore|readMail|read) _stopDefault"),
c&&($$.getSingle("em",c).innerHTML=nLang.l.read,$Element(c).className("b do_read primary _ccrf(clt|.read) _c1(mlCore|readMail|read) _stopDefault"))):(e.innerHTML=nLang.l.unread,
$Element(e).className("b do_read primary _ccrf(mrd|.unread) _c1(mlCore|readMail|unread) _stopDefault"),
c&&($$.getSingle("em",c).innerHTML=nLang.l.unread,$Element(c).className("b do_read primary _ccrf(clt|.unread) _c1(mlCore|readMail|unread) _stopDefault")));
}},this)}}},toggleCard=function(a,b,c,d,e,f,g){if(!(window.getSelection&&window.getSelection().toString().length>0)){
if(!b)for(b=a.element;b&&!$Element(b).hasClass("cv_card");)b=b.parentNode;if(document.body.contains(b)&&("boolean"!=typeof e&&(e=!0),
"boolean"!=typeof g&&(g=!1),b)){var h=$Element(b);if(h.hasClass("fold")||d)if(a&&a.element&&ccr(a.element,"rdh.threadcardfold",a),
"boolean"==typeof c&&c||selectCard(a,b),$$.getSingle("div.readFrame",b)){if($Element(b).removeClass("fold").removeClass("autoSpread"),
$$.getSingle("div.attfile_area",b)?$Element($$.getSingle("div.attfile_area",b)).show():null,$$.getSingle("div.img_preview_area",b)?$Element($$.getSingle("div.img_preview_area",b)).show():null,
$$.getSingle("span.icoRead.no",b)){var i={mailSNList:$Element(b).attr("data-mailsn")+";",status:"read"
};mcCore.requestAjax({fCallback:$Fn(_readMailCallBack,this).bind(i),async:e,oParameter:i,sUrl:"/json/select/setStatus/read/"
})}mCom.bLoadingMail=!1}else{var i={mailSN:$Element(b).attr("data-mailsn"),threadMail:!1,prevNextMail:!1,
previewMode:2};mcCore.requestAjax({fCallback:$Fn(function(a,c){if(b.innerHTML=makeCardHtmlForMain(c),
$Element(b).removeClass("fold").removeClass("notRead"),$$.getSingle("div.attfile_area",b)?$Element($$.getSingle("div.attfile_area",b)).show():null,
$$.getSingle("div.img_preview_area",b)?$Element($$.getSingle("div.img_preview_area",b)).show():null,
$$.getSingle("div.img_preview_area",b)?$Element($$.getSingle("div.img_preview_area",b)).addClass("_c1(mrCore|selectCard)"):null,
$Element(b).attr("data-mailsn",a.mailSN),makeToggleOriginalMsgBtn(b),-1==c.mailInfo.htmlBodyContentSN&&_linkify($$.getSingle("div.readFrame",b)),
mcCore.isCorrespondFlag(c.mailInfo.status,"0x400000")&&mcCore.useCalendar()?_getSchedule(c.mailInfo.mailSN):mcCore.checkApprovalStatus(c.mailInfo.status)&&_getApproval(c.mailInfo.mailSN,c.mailInfo.messageId,c.mailInfo.from),
_drawFakeNotiArea(c.mailInfo),_drawWorkflowArea(c.mailInfo),$$.getSingle("div.readFrame",b).style.display="",
!mcCore.isCorrespondFlag(c.mailInfo.status,"0x4")&&(f&&$Element(b).addClass("autoSpread"),$$.getSingle("div.cv_card",mCom.elRead))){
var d=$Element($$.getSingle("div.cv_card",mCom.elRead)).attr("data-mailsn");mcCore.setUnreadThreadCount(d,"add",-1),
mlCore.checkConversationReadStatus()}if(!g){var e=$$.getSingle("li."+c.mailInfo.mailSN+"_li",mCom.elList);
e?readSetting(e,a.mailSN,g):g||mfCore.updateFolder()}mCom.bLoadingMail=!1},this).bind(i),async:e,oParameter:i,
sUrl:"/json/read/"})}else a&&a.element&&ccr(a.element,"rdh.threadcardunfold",a),$Element(b).addClass("fold"),
$Element($$.getSingle("span.folderName",b)).show(),$$.getSingle("div.attfile_area",b)?$Element($$.getSingle("div.attfile_area",b)).hide():null,
$$.getSingle("div.img_preview_area",b)?$Element($$.getSingle("div.img_preview_area",b)).hide():null;if(d){
var j=10,k=(b.offsetTop-30-mCom.elRead.scrollTop)/55,l=k,m=$Fn(function(){j>0?(mCom.elRead.scrollTop+=l,
l+=k,j--,setTimeout(m,10)):(mCom.elRead.scrollTop=b.offsetTop-30,setTimeout(function(){mCom.bCheckToggleCard=!0;
},10))},this).bind();mCom.bCheckToggleCard=!1,setTimeout(m,10)}}}},makeCardHtmlForSub=function(a,b){
var c='<div class="viewTitle _c1(mrCore|toggleCard) _stopDefault"><h4><a href="#" class="vip {importantMailAction}">{importantMailIco}</a> <span class="read {readAction}">{readIco}</span>{attachIco}<div class="name"><a href="#" title="{fromName}">{fromName}</a></div><div class="subject"><span class="folderName">{folderName}</span>\n<span class="blind">'+nLang.l.title+'</span>{subject}\n{popupReadIco}<span class="mailListBtn"><span class="group_btn"><button type="button" class="lft _c1(mfCore|popupWrite|reply|{mailSN})">'+nLang.c.reply+'</button><button type="button" class="mdl _c1(mfCore|popupWrite|replyAll|{mailSN})">'+nLang.c.reply_all+'</button><button type="button" class="rgt _c1(mfCore|popupWrite|forward|{mailSN})">'+nLang.c.forward+'</button></span><button type="button" class="btn_txt _c1(myCore|showConversationLayer) _stopDefault">'+nLang.c.add_func+'<span class="blind">,'+nLang.c.open_layer+'</span><span class="bu_exp"></span></button></span></div></h4><div class="date_cover"><div class="align_cover"><p class="send_date"><span class="blind">'+nLang.l.receipt_date+'</span>{SendDate}</p>{RemindDate}</div><span class="v_basis"></span></div></div>',d='<p class="cv_preview _c1(mrCore|toggleCard) _stopDefault">{readMsg}</p>',e={};
e.mailSN=a.mailSN,mcCore.isCorrespondFlag(a.status,"0x20")?(e.importantMailAction="_ccr(rdh.mark)  _c1(mlCore|markMailSelf|"+a.mailSN+"|unmark) _stopDefault",
e.importantMailIco="<span class='spr icoImportantOn'><em class='blind'>"+nLang.c.unmark_inportant_mail+"</em></span>"):(e.importantMailAction="_ccr(rdh.mark) _c1(mlCore|markMailSelf|"+a.mailSN+"|mark) _stopDefault",
e.importantMailIco="<span class='spr icoImportantOff'><em class='blind'>"+nLang.c.mark_inportant_mail+"</em></span>"),
mcCore.isCorrespondFlag(a.status,"0x4")?(e.readAction="_c1(mlCore|readMail|unread_conversation|"+a.mailSN+") _stopDefault",
e.readIco='<span class="spr icoRead yes"><span class="blind">'+nLang.r.read_mail+"</span></span>"):(e.readAction="_c1(mlCore|readMail|read_conversation|"+a.mailSN+") _stopDefault",
e.readIco='<span class="spr icoRead no"><span class="blind">'+nLang.r.not_read_mail+"</span></span>"),
(parseInt(a.attachCount,10)>0||mcCore.isCorrespondFlag(a.status,"0x1000"))&&(e.attachIco='<span class="file"><span class="spr icoFile"><span class="blind">'+nLang.l.have_attach+"</span></span></span>"),
e.fromName=a.from.name?a.from.name:a.from.email?a.from.email:"",e.folderName=a.folderName?"["+mcCore.replaceSpecialChar(a.folderName)+"]":"",
e.subject=a.subject.match(/^\s*$/)?nLang.l.no_title:a.subject,e.popupReadIco=mCom.isPopup?"":' <a href="#" class="newWindow _ccr(rdh.new) _c1(mrCore|popupRead|'+a.mailSN+') _stopDefault" title="'+mcCore.getMemoboxString("popup_window",mCom.nCurrentFolder,"r")+'"><span class="spr"><em class="blind">'+nLang.r.popup_window+"</em></span></a>",
e.SendDate=1==a.folderSN?mcCore.isCorrespondFlag(a.status,"0x4000")?"<em>"+nLang.c.reserve+"</em> "+mcCore.getHumanTime(a.sentTime,b,"read")+" <a id='editReservedDate' class='btn_modify _c1(mlCore|editReserveMail|"+a.mailSN+"|false) _ccr(rdh.editrsv) _stopDefault' href='#'><i class='ico'></i>"+nLang.c.edit+"</a>":mcCore.isCorrespondFlag(a.status,"0x10000")?"<em>"+nLang.c.wait+"</em> "+mcCore.getHumanTime(a.sentTime,b,"read")+" <a id='cancelDelaySendDate' class='btn_cancel _c1(mrCore|retrieveMail|"+a.mailSN+") _ccr(rdh.cancelrsv) _stopDefault' href='#'><i class='ico'></i>"+nLang.c.cancel+"</a>":mcCore.getHumanTime(a.sentTime,b,"read"):mcCore.getHumanTime(a.receivedTime,b,"read"),
e.RemindDate=_getRemindDateHtml(a,b);var f={};f.readMsg=a.preview?a.preview:"...";var g=mcCore.improvedTemplate(c,e),h=mcCore.improvedTemplate(d,f);
return[g,h].join("")};var makeCardHtmlForMain=function(a){var b=a.mailInfo,c=a.currentTime,d=(a.securityLeftDay,
a.securityDeleteDate),e="",f='<div class="viewTitle _c1(mrCore|toggleCard) _stopDefault"><h4><a href="#" class="vip {importantMailAction}">{importantMailIco}</a> <span class="read {readAction}">{readIco}</span>{attachIco}<div class="name"><a href="#" title="{fromName}">{fromName}</a></div><div class="subject">{securityLevel}<span class="folderName">{folderName}</span>\n<span class="blind">'+nLang.l.title+'</span>{subject}\n{popupReadIco}<span class="mailListBtn" style="display:none"><span class="group_btn"><button type="button" class="lft _c1(mfCore|popupWrite|reply|{mailSN})">'+nLang.c.reply+'</button><button type="button" class="mdl _c1(mfCore|popupWrite|replyAll|{mailSN})">'+nLang.c.reply_all+'</button><button type="button" class="rgt _c1(mfCore|popupWrite|forward|{mailSN})">'+nLang.c.forward+'</button></span><button type="button" class="btn_txt _c1(myCore|showConversationLayer) _stopDefault">'+nLang.c.add_func+'<span class="blind">,'+nLang.c.open_layer+'</span><span class="bu_exp"></span></button></span></div></h4><div class="date_cover"><div class="align_cover"><p class="send_date"><span class="blind">'+nLang.l.receipt_date+'</span>{SendDate}</p>{RemindDate}</div><span class="v_basis"></span></div><dl><dt class="first-child {viewMoreAction}"><button type="button" class="{viewMoreClass}"><span class="blind">{viewMoreAlt}</span></button>'+nLang.c.sender+'</dt><dd><a href="#" class="{importantAction}" title="{importantText}" style="display:{ShowImportance};" data-senderaddress="{senderAddress}" data-sendername="{fromName}"><span class="spr {importantClass}"><em class="blind">{importantText}</em></span></a> <a href="#" class="{senderAction} _stopDefault">{sender}</a> <span class="s">{inviteWebMessage}{InviteEvent}</span></dd><div id="fake_noti_area" style="display:none"></div>{rcptList}</dl>{CalArea}</div>{translateArea}{attachArea}',g='<div class="readFrame _c1(mrCore|selectCard)" style="display:none">{readMsg}</div><p class="cv_preview _c1(mrCore|toggleCard) _stopDefault">{previewMsg}</p>';
a.hideImage&&(f+='<div class="noImgs">'+nLang.r.unuse_external_link_image+' <a class="spamMsg _c1(mrCore|readSpamMail|'+a.mailInfo.folderSN+'|true) _stopDefault" href="javascript:;">'+nLang.r.show_link_image+"</a>",
f+=a.mailInfo.from.email?'<span class="bar">|</span><a class="normal_text _c1(mrCore|addTrustAddress|'+a.mailInfo.from.email+') _stopDefault" href="javascript:;">'+nLang.r.trust_external_address.replace(/{Address}/,a.mailInfo.from.email)+"</a></div>":"</div>");
var h={};h.mailSN=b.mailSN,mcCore.isCorrespondFlag(b.status,"0x20")?(h.importantMailAction="_ccr(rdh.mark)  _c1(mlCore|markMailSelf|"+b.mailSN+"|unmark) _stopDefault",
h.importantMailIco="<span class='spr icoImportantOn'><em class='blind'>"+nLang.c.unmark_inportant_mail+"</em></span>"):(h.importantMailAction="_ccr(rdh.mark) _c1(mlCore|markMailSelf|"+b.mailSN+"|mark) _stopDefault",
h.importantMailIco="<span class='spr icoImportantOff'><em class='blind'>"+nLang.c.mark_inportant_mail+"</em></span>"),
h.readAction="_c1(mlCore|readMail|unread_conversation|"+b.mailSN+") _stopDefault",h.readIco=mcCore.isCorrespondFlag(b.status,"0x400000")?'<span class="spr icoRead cal"><span class="blind">'+nLang.r.schedule+"</span></span>":'<span class="spr icoRead yes"><span class="blind">'+nLang.r.read_mail+"</span></span>",
mcCore.isCorrespondFlag(b.status,"0x400000")&&(h.CalIco='<a href="#" title="'+nLang.r.schedule+'" class="spr icoRead cal"></a>'),
(parseInt(b.attachCount,10)>0||mcCore.isCorrespondFlag(b.status,"0x1000"))&&(h.attachIco='<span class="file"><span class="spr icoFile"><span class="blind">'+nLang.l.have_attach+"</span></span></span>");
var i=null;for(var j in a.emailListFromMail)if(j==b.from.email){i=a.emailListFromMail[j];break}if(i&&"N"!=i.importantContactYn?(h.importantText=nLang.l.clear_important_address,
h.importantClass="icoVipOn",h.importantAction="_c1(mlCore|setImportance||N) _stopDefault"):(h.importantText=nLang.l.set_important_address,
h.importantClass="icoVipOff",h.importantAction="_c1(mlCore|setImportance||Y) _stopDefault"),h.senderAddress=b.from.email,
h.ShowImportance="inline",h.fromName=b.from.name?b.from.name:b.from.email?b.from.email:"",myContextMenu.isUseContextMenu("read")?h.senderAction="_c1(myContextMenu|showSenderContextLayer|read)":mcCore.isNcs()||mcCore.isNwe()?h.senderAction="_c1(myCore|showSenderInfo|"+b.from.email+")>":t+='_c1(mfCore|popupWrite|new||"'+b.from.name.replace(/\"/g,"").replace(/\'/g,"").replace(/\(/g,"%28").replace(/\)/g,"%29")+'"&lt;'+b.toList[p].email+"&gt;)",
mcCore.isNcs()||mcCore.isNwe()){var k="";null==d||void 0==d||"undefined"==typeof d?k="":(d=mCom.sDefaultDateFormat?moment(d,"YY-MM-DD").format(mCom.sDefaultDateFormat):d,
k="("+d+" "+nLang.r.security_after_delete+")");var l="";0==b.reSend&&(l="<strong id='stopResend'>"+nLang.r.security_no_resend+"</strong>");
var m="";(""!=k||""!=l)&&(m="<span class='sc_msg'>"+l+" "+k+"</span>"),"SECRET"==b.securityLevel?h.securityLevel="<span class='sc_level3'><span class='lb_sclevel3'><strong>"+nLang.l.security_secret+"</strong></span>"+m+"</span>":"IN_HOUSE"==b.securityLevel&&(h.securityLevel="<span class='sc_level2'><span class='lb_sclevel2'><strong>"+nLang.l.security_in_house+"</strong></span>"+m+"</span>");
}h.folderName="["+(b.folderName?mcCore.replaceSpecialChar(b.folderName):mcCore.findFolderName(b.folderSN,!0))+"]",
h.subject=b.subject.match(/^\s*$/)?nLang.l.no_title:b.subject,h.popupReadIco=mCom.isPopup?"":' <a href="#" class="newWindow _ccr(rdh.new) _c1(mrCore|popupRead|'+b.mailSN+') _stopDefault" title="'+mcCore.getMemoboxString("popup_window",mCom.nCurrentFolder,"r")+'"><span class="spr"><em class="blind">'+nLang.r.popup_window+"</em></span></a>",
h.SendDate=1==b.folderSN?mcCore.isCorrespondFlag(b.status,"0x4000")?"<em>"+nLang.c.reserve+"</em> "+mcCore.getHumanTime(b.sentTime,c,"read")+" <a id='editReservedDate' class='btn_modify _c1(mlCore|editReserveMail|"+b.mailSN+"|false) _ccr(rdh.editrsv) _stopDefault' href='#'><i class='ico'></i>"+nLang.c.edit+"</a>":mcCore.isCorrespondFlag(b.status,"0x10000")?"<em>"+nLang.c.wait+"</em> "+mcCore.getHumanTime(b.sentTime,c,"read")+" <a id='cancelDelaySendDate' class='btn_cancel _c1(mrCore|retrieveMail|"+b.mailSN+") _ccr(rdh.cancelrsv) _stopDefault' href='#'><i class='ico'></i>"+nLang.c.cancel+"</a>":mcCore.getHumanTime(b.sentTime,c,"read"):mcCore.getHumanTime(b.receivedTime,c,"read"),
h.RemindDate=_getRemindDateHtml(b,c),h.sender=mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(b.from.name))+"&lt;"+b.from.email+"&gt;",
h.inviteWebMessage=makeInviteWebMessage(b),e=makeQueryForWebMessenger(b);for(var n=[],o=[a.mailInfo.from,a.mailInfo.toList,a.mailInfo.ccList],p=0;p<o.length;p++){
var q=o[p];if(Array===q.constructor)for(var r=0;r<q.length;r++)n.push(q[r]);else n.push(q)}var s=$A(n).filter(function(a){
return a.email!==mEnv.mailAddress?!0:!1}).$value();h.InviteEvent=!mcCore.isNaver()&&mEnv.useCalendar&&s.length>0?'<a href="#" class="color_id _ccr(rdh.calendar) _c1(mlCore|scrapMailToCalendar) _stopDefault">'+nLang.r.invite_event+"</a>":"",
h.inviteWebMessage&&h.InviteEvent&&(h.inviteWebMessage+=" | ");var t="";if(b.toList&&b.toList.length>0){
t+='<dt class="rcpt_list" {diplayRcpt}>'+nLang.c.receiver+'</dt><dd class="rcpt_list" {diplayRcpt}> ';
for(var p=0,u=b.toList.length;u>p;p++)t+=myContextMenu.isUseContextMenu("read")?'<a href="#" class="_c1(myContextMenu|showSenderContextLayer|read) _stopDefault">'+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(b.toList[p].name))+"&lt;"+b.toList[p].email+"&gt;</a>":mcCore.isNcs()||mcCore.isNwe()?'<a href="#" class="_c1(myCore|showSenderInfo|'+b.toList[p].email+') _stopDefault">'+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(b.toList[p].name))+"&lt;"+b.toList[p].email+"&gt;</a>":"<a href='#' class='_c1(mfCore|popupWrite|new||\""+b.toList[p].name.replace(/\"/g,"").replace(/\'/g,"").replace(/\(/g,"%28").replace(/\)/g,"%29")+'"&lt;'+b.toList[p].email+"&gt;) _stopDefault'>"+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(b.toList[p].name))+"&lt;"+b.toList[p].email+"&gt;</a>",
p+1<b.toList.length&&(t+=", ");t+="</dd></dt>"}if(b.ccList&&b.ccList.length>0){t+='<dt class="rcpt_list" {diplayRcpt}>'+nLang.c.cc+'</dt><dd class="rcpt_list" {diplayRcpt}> ';
for(var p=0,u=b.ccList.length;u>p;p++)t+=myContextMenu.isUseContextMenu("read")?'<a href="#" class="_c1(myContextMenu|showSenderContextLayer|read) _stopDefault">'+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(b.ccList[p].name))+"&lt;"+b.ccList[p].email+"&gt;</a>":mcCore.isNcs()||mcCore.isNwe()?'<a href="#" class="_c1(myCore|showSenderInfo|'+b.ccList[p].email+') _stopDefault">'+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(b.ccList[p].name))+"&lt;"+b.ccList[p].email+"&gt;</a>":"<a href='#' class='_c1(mfCore|popupWrite|new||\""+b.ccList[p].name.replace(/\"/g,"").replace(/\'/g,"").replace(/\(/g,"%28").replace(/\)/g,"%29")+'"&lt;'+b.ccList[p].email+"&gt;) _stopDefault'>"+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(b.ccList[p].name))+"&lt;"+b.ccList[p].email+"&gt;</a>",
p+1<b.ccList.length&&(t+=", ");t+="</dd></dt>"}if(b.bccList&&b.bccList.length>0){t+="<dt {diplayRcpt}>"+nLang.c.bcc+"</dt><dd {diplayRcpt}>: ";
for(var p=0,u=b.bccList.length;u>p;p++)t+=myContextMenu.isUseContextMenu("read")?'<a href="#" class="_c1(myContextMenu|showSenderContextLayer|read) _stopDefault">'+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(b.bccList[p].name))+"&lt;"+b.bccList[p].email+"&gt;</a>":mcCore.isNcs()||mcCore.isNwe()?'<a href="#" class="_c1(myCore|showSenderInfo|'+b.bccList[p].email+') _stopDefault">'+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(b.bccList[p].name))+"&lt;"+b.bccList[p].email+"&gt;</a>":"<a href='#' class='_c1(mfCore|popupWrite|new||\""+b.bccList[p].name.replace(/\"/g,"").replace(/\'/g,"").replace(/\(/g,"%28").replace(/\)/g,"%29")+'"&lt;'+b.bccList[p].email+"&gt;) _stopDefault'>"+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(b.bccList[p].name))+"&lt;"+b.bccList[p].email+"&gt;</a>",
p+1<b.bccList.length&&(t+=", ");t+="</dd></dt>"}mEnv&&!mEnv.showRcpt?(h.viewMoreAction="toggleExpand _ccr(rdh.close) _c1(mrCore|toggleExpandForConversation) _stopDefault",
h.viewMoreClass="viewMoreOff",h.viewMoreAlt=nLang.r.show_more_info,h.rcptList=t.replace(/{diplayRcpt}/g,'style="display:none"')):(h.viewMoreAction="toggleExpand _ccr(rdh.more) _c1(mrCore|toggleExpandForConversation) _stopDefault",
h.viewMoreClass="viewMoreOn",h.viewMoreAlt=nLang.r.hide_more_info,h.rcptList=t.replace(/{diplayRcpt}/g,"")),
h.translateArea=getTranslateNotiTemplate(b),h.CalArea=mcCore.isCorrespondFlag(b.status,"0x400000")&&mcCore.useCalendar()?'<div id="CalArea_'+b.mailSN+'" class="CalArea" style="display:none"></div>':mcCore.checkApprovalStatus(b.status)||mcCore.isCorrespondFlag(b.status,"0x1000000000")?'<div id="ApproveArea_'+b.mailSN+'" class="ApproveArea" style="display:none"></div>':"",
_nImageCount=0,_sImageArea="",a.attachList.attachCount&&(_nCurReadingMailBaseDate=a.attachList.baseDate,
_nCurReadingMailTempFilePostFix=a.attachList.tempFilePostfix,_sImageArea=mrTemplate.sImageTemplate,_sImageFiles="",
_nDeletedFile=0,_htFileTpl={},_htAttachTpl={},_htImageTpl={},_isShowWarning=!1,_bShowWaringStr=!1,h.attachArea=_makeAttachAreaHtml(a),
_nImageCount>0?(_sImageArea=_sImageArea.replace(/\{DisplayPhotoViewerLink\}/g,mcCore.isNaver()?"inline-block":"none"),
_sImageArea="en_US"===cCode&&2>_nImageCount?_sImageArea.split("("+nLang.r.locate_number_of_image+")").join(""):_sImageArea.replace(/\{ImageCount\}/g,_nImageCount),
_sImageArea=_sImageArea.replace(/\{ImageListHTML\}/g,_sImageFiles+"</tr>")):_sImageArea="",_htAttachTpl=_htFileTpl=_htImageTpl=null,
setCloudSaveAllData(a));var v={};-1==b.htmlBodyContentSN&&(b.body=b.body.replace(/\http:&gt;/g,"http:").replace(/\https:&gt;/g,"https:"),
b.body=b.body.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),b.body=b.body.replace(/<((?!br>))/gi,"&lt;$1")),
v.readMsg=b.body,v.previewMsg=b.preview?b.preview:b.body.substr(0,400).replace(/[\s]+/g," ").replace(/<[^<>]+>/g,"").substr(0,150).replace(/<[^>]+$/,"");
var w=mcCore.improvedTemplate(f,h),x=mcCore.improvedTemplate(g,v);return[w,x,_sImageArea].join("")};getCardListMailSN=function(a){
var b=[];if(mCom.elRead){if("read"==a)var c=$$("span.icoRead.yes ! div.cv_card",mCom.elRead);else if("unread"==a)var c=$$("span.icoRead.no ! div.cv_card",mCom.elRead);else var c=$$("div.cv_card",mCom.elRead);
for(var d=0,e=c.length;e>d;d++){var f=$Element(c[d]);f.attr("data-mailsn")&&b.push(f.attr("data-mailsn"));
}}return b},_makeReadHtml=function(a){if(oPrevReadRequest=null,!mcCore.hideWriteArea()){mUtil.addHotkey("read"),
(mCom.isPopup||"list"===mCom.vDivideMode)&&_arrangeMenu(a.mailInfo.folderSN);var b=mEnv,c=a.mailInfo,d=!0,e=!0;
if(a.threadData)var f=a.threadTotalCount;else var f=0;1!==c.folderSN&&(b.receiveByBcc=c.receiveByBcc);
var g=$$.getSingle("#readBtnMenu .read_btn_up"),h=$$.getSingle("#readBtnMenu .read_btn_down");if(g&&($Element(g).removeClass("disabled"),
g.disabled=""),h&&($Element(h).removeClass("disabled"),h.disabled=""),mcCore.isCorrespondFlag(c.status,"0x4"))_setBrowserTitle(c.subject,!1);else{
if(mCom.isPopup)try{if(window.opener&&window.opener.m)if("C"==opener.mlCore.getCurrentViewType())opener.mcCore.setUnreadThreadCount(c.mailSN,"add",-1),
opener.mlCore.checkConversationReadStatus();else{var i=$Element($$.getSingle("#headUnreadNum",opener.document.body)),j=parseInt(i.html(),10);
i&&!opener.$Element("searchResultDiv").visible()&&"search"!=mCom.nCurrentFolder&&j>0&&i.html(j-1)}}catch(k){}else if("T"==mlCore.getCurrentViewType()){
var i=$Element("headUnreadNum"),j=parseInt(i.html(),10);!$Element("searchResultDiv").visible()&&"search"!=mCom.nCurrentFolder&&j>0&&i.html(j-1);
}else if("S"==mlCore.getCurrentViewType()){var l=$$.getSingle("ul[data-address="+c.from.email+"]");if(l){
var n=Number($$.getSingle("a[data-unreadcount]",l).innerHTML);n>0&&($$.getSingle("a[data-unreadcount]",l).innerHTML=n-1,
n-1==0&&$Element(l).removeClass("has_unread"))}}_setBrowserTitle(c.subject,!0)}if("C"==mlCore.getCurrentViewType()&&a.threadData&&a.threadData.length>0)return $Element(mCom.elRead).addClass("conversation_cover"),
$Element("read_conversation_btn")?$Element("read_conversation_btn").show():null,makeConversationView(a),
void $Element(mCom.elRead).appendHTML(mrTemplate.calendarRejectTemplate);$Element(mCom.elRead).removeClass("conversation_cover"),
$Element("read_conversation_btn")?$Element("read_conversation_btn").hide():null,mCom.waElListBtnGroupAtReadLeft.show();
var o="";_bIsTranslate?o="":mcCore.isCorrespondFlag(c.status,"0x8")?(o=mrTemplate.sNoticeTemplate,o=o.replace(/\{Notice\}/g,nLang.r.notice_reply_time.replace("{ReplyTime}",mcCore.getHumanTime(c.statusTime,a.currentTime,"read")))):mcCore.isCorrespondFlag(c.status,"0x10")&&(o=mrTemplate.sNoticeTemplate,
o=o.replace(/\{Notice\}/g,nLang.r.notice_forward_time.replace("{ForwardTime}",mcCore.getHumanTime(c.statusTime,a.currentTime,"read"))));
var p=mrTemplate.sViewTitleTemplate,q={},r="";if(mcCore.isCorrespondFlag(c.status,"0x400000")&&(r='<span title="'+nLang.r.schedule+'" class="spr iCal"></span>'),
_bIsReadEML||_bIsTranslate?(q.Important="",p=p.replace(/\{Important\}/g,"")):(mcCore.isCorrespondFlag(c.status,"0x20")?q.Important="<a href='javascript:;' title='"+nLang.c.mark_mail+"'><span class='spr icoImportantAtRead _ccr(rdh.mark) _c1(mlCore|markMailSelf|"+c.mailSN+"|unmark) _stopDefault icoImportantOn'><em class='blind'>"+nLang.c.unmark_inportant_mail+"</em></span></a> "+r+" ":(q.Important="<a href='javascript:;' title='"+nLang.c.normal_mail+"' onfocus=\"$Element(this).addClass('_starFocus')\" onblur=\"$Element(this).removeClass('_starFocus')\"><span class='spr icoImportantAtRead _ccr(rdh.mark) _c1(mlCore|markMailSelf|"+c.mailSN+"|mark) _stopDefault icoImportantOff' mailsn="+c.mailSN+"><em class='blind'>"+nLang.c.mark_inportant_mail+"</em></span></a> "+r+" ",
e=!1),!mcCore.isNaver()&&(6==mCom.nCurrentFolder||parseInt(mCom.nCurrentFolder,10)>=1e7)&&(q.Important=q.Important.replace(nLang.m.mail,nLang.m.memo))),
mcCore.isNcs()||mcCore.isNwe()){var s=a.securityDeleteDate,t="";null==s||void 0==s||"undefined"==typeof s?t="":(s=mCom.sDefaultDateFormat?moment(s,"YY-MM-DD").format(mCom.sDefaultDateFormat):s,
t="("+s+" "+nLang.r.security_after_delete+")");var u="";0==c.reSend&&(u="<strong id='stopResend'>"+nLang.r.security_no_resend+"</strong>");
var v="";(""!=t||""!=u)&&(v="<span class='sc_msg'>"+u+" "+t+"</span>"),q.SecurityLevel="SECRET"==c.securityLevel?"<span class='sc_level3'><span class='lb_sclevel3'><strong>"+nLang.l.security_secret+"</strong></span>"+v+"</span>":"IN_HOUSE"==c.securityLevel?"<span class='sc_level2'><span class='lb_sclevel2'><strong>"+nLang.l.security_in_house+"</strong></span>"+v+"</span>":"";
}else q.SecurityLevel="";if(mCom.isPopup)var w="";else var w=' <a href="#" class="newWindow _ccr(rdh.new) _c1(mrCore|popupRead|'+c.mailSN+') _stopDefault" title="'+mcCore.getMemoboxString("popup_window",mCom.nCurrentFolder,"r")+'"><span class="spr"><em class="blind">'+nLang.r.popup_window+"</em></span></a>";
q.PopupRead=w,c.subject.match(/^\s*$/)?(q.Title=nLang.l.no_title,mCom.readTitle=nLang.l.no_title):(q.Title=c.subject,
mCom.readTitle=c.subject),q.SendDate=1==c.folderSN||_bIsReadEML||_bIsTranslate?mcCore.isCorrespondFlag(c.status,"0x4000")?"<em>"+nLang.c.reserve+"</em> "+mcCore.getHumanTime(c.sentTime,a.currentTime,"read")+" <a id='editReservedDate' class='btn_modify _c1(mlCore|editReserveMail|"+c.mailSN+"|false) _ccr(rdh.editrsv) _stopDefault' href='#'><i class='ico'></i>"+nLang.c.edit+"</a>":mcCore.isCorrespondFlag(c.status,"0x10000")?"<em>"+nLang.c.wait+"</em> "+mcCore.getHumanTime(c.sentTime,a.currentTime,"read")+" <a id='cancelDelaySendDate' class='btn_cancel _c1(mrCore|retrieveMail|"+c.mailSN+") _ccr(rdh.cancelrsv) _stopDefault' href='#'><i class='ico'></i>"+nLang.c.cancel+"</a>":mcCore.getHumanTime(c.sentTime,a.currentTime,"read"):mcCore.getHumanTime(c.receivedTime,a.currentTime,"read"),
q.RemindDate=_getRemindDateHtml(c,a.currentTime),q.UseBillMail=mcCore.isNaver()&&("N"==b.billUse||"B"==b.billUse)&&c.showBillLayer?' | <a href="#" class="_c1(mrCore|useBillMailBox) _stopDefault">'+nLang.o.use_bill_folder+"</a>":"",
c.from||(c.from={},c.from.email="",c.from.name=""),""!=m.info&&b.showRcpt?(q.ViewMoreAlt=nLang.r.hide_more_info,
q.ViewMoreAction="toggleExpand  viewMoreOn _ccr(rdh.close) _c1(mrCore|toggleExpand) _stopDefault",q.Show="block"):(q.ViewMoreAlt=nLang.r.show_more_info,
q.ViewMoreAction="toggleExpand  viewMoreOff _ccr(rdh.more) _c1(mrCore|toggleExpand) _stopDefault",q.Show="none"),
q.senderAddress=c.from.email,q.fromName=c.from.name,q.Sender=mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(c.from.name))+"&lt;"+c.from.email+"&gt;";
var x=null;for(var y in a.emailListFromMail)if(y==c.from.email){x=a.emailListFromMail[y];break}x&&"N"!=x.importantContactYn?(q.importantText=nLang.l.clear_important_address,
q.importantClass="icoVipOn",q.importantAction="_c1(mlCore|setImportance||N|conversation) _stopDefault"):(q.importantText=nLang.l.set_important_address,
q.importantClass="icoVipOff",q.importantAction="_c1(mlCore|setImportance||Y|conversation) _stopDefault"),
q.ShowImportance="inline",q.SenderAction=myContextMenu.isUseContextMenu("read")?"_c1(myContextMenu|showSenderContextLayer|read) _stopDefault":mcCore.isNcs()||mcCore.isNwe()?"_c1(myCore|showSenderInfo|"+c.from.email+") _stopDefault":"_c1(mfCore|popupWrite|new||&quot;"+mcCore.restoreSpecialChar(c.from.name).replace(/\"/g,"").replace(/\'/g,"").replace(/\(/g,"%28").replace(/\)/g,"%29")+"&quot;&lt;"+c.from.email+"&gt;) _stopDefault",
sQueryForWebMessenger=makeQueryForWebMessenger(c),q.inviteWebMessage=makeInviteWebMessage(c),q.AddAddressToContact="",
q.InviteEvent="",q.AddAddressToRejectList="",q.ShowAddrAction="inline";for(var z=[],A=[c.from,c.toList,c.ccList||[]],B=0;B<A.length;B++){
var C=A[B];if(Array===C.constructor)for(var D=0;D<C.length;D++)z.push(C[D]);else z.push(C)}var E=$A(z).filter(function(a){
return a.email!==mEnv.mailAddress?!0:!1}).$value();if(!mcCore.isNaver()&&mEnv.useCalendar&&E.length>0&&(q.InviteEvent='<a href="#" class="color_id _ccr(rdh.calendar) _c1(mlCore|scrapMailToCalendar) _stopDefault">'+nLang.r.invite_event+"</a>"),
3===a.mailInfo.folderSN||6===a.mailInfo.folderSN||a.mailInfo.folderSN>1e7)q.ShowAddrAction="none";else if(1!==a.mailInfo.folderSN&&myContextMenu.isUseContextMenu("read")===!1){
{a.mailInfo.from.name+"<"+a.mailInfo.from.email+">"}q.AddAddressToContact='<a href="#" class="_ccr(rdh.address) _c1(myAddAddress|initAddAddressLayer|read) _stopDefault">'+nLang.r.add_address+"</a>"+(q.inviteWebMessage&&" | "),
mEnv.useWebMessage||(q.AddAddressToRejectList='<a href="#" class="refuse _ccr(rdh.refusal) _c1(myCore|showAddRejectLayer) _stopDefault">'+nLang.r.reject_address+"</a>");
}q.inviteWebMessage&&q.InviteEvent&&(q.inviteWebMessage+=" | ");var F="";if(c.toList)for(var B=0,G=c.toList.length;G>B;B++){
if(myContextMenu.isUseContextMenu("read")){var H="a",I="_c1(myContextMenu|showSenderContextLayer|read) _stopDefault",y="&lt;"+c.toList[B].email+"&gt;";
c.toList[B].name==nLang.l.no_email_address&&""==c.toList[B].email&&(H="span",I="_c1(myContextMenu|noReceiver) _stopDefault",
y=""),F+="<"+H+' href="#" class="'+I+'">'+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(c.toList[B].name))+y+"</"+H+">";
}else F+=mcCore.isNcs()||mcCore.isNwe()?'<a href="#" class="_c1(myCore|showSenderInfo|'+c.toList[B].email+') _stopDefault">'+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(c.toList[B].name))+(c.toList[B].email?"&lt;"+c.toList[B].email+"&gt;":"")+"</a>":"<a href='#' class='_c1(mfCore|popupWrite|new||\""+c.toList[B].name.replace(/\"/g,"").replace(/\'/g,"").replace(/\(/g,"%28").replace(/\)/g,"%29")+'"&lt;'+c.toList[B].email+"&gt;) _stopDefault'>"+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(c.toList[B].name))+"&lt;"+c.toList[B].email+"&gt;</a>";
B+1<c.toList.length&&(F+=", ")}q.ToList=F,F=null;var J="";if(c.ccList&&c.ccList.length>0){J+=""!=m.info&&b.showRcpt?'<dt class="cc_dt" style="display:block">'+nLang.c.cc+'</dt><dd class="cc_dd" style="display:block">':'<dt class="cc_dt" style="display:none">'+nLang.c.cc+'</dt><dd class="cc_dd" style="display:none">';
for(var B=0,G=c.ccList.length;G>B;B++)J+=myContextMenu.isUseContextMenu("read")?'<a href="#" class="_c1(myContextMenu|showSenderContextLayer|read) _stopDefault">'+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(c.ccList[B].name))+"&lt;"+c.ccList[B].email+"&gt;</a>":mcCore.isNcs()||mcCore.isNwe()?'<a href="#" class="_c1(myCore|showSenderInfo|'+c.ccList[B].email+') _stopDefault">'+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(c.ccList[B].name))+"&lt;"+c.ccList[B].email+"&gt;</a>":"<a href='#' class='_c1(mfCore|popupWrite|new||\""+c.ccList[B].name.replace(/\"/g,"").replace(/\'/g,"").replace(/\(/g,"%28").replace(/\)/g,"%29")+'"&lt;'+c.ccList[B].email+"&gt;) _stopDefault'>"+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(c.ccList[B].name))+"&lt;"+c.ccList[B].email+"&gt;</a>",
B+1<c.ccList.length&&(J+=", ");J+="</dd>"}q.CcList=J,J=null;var K="";if(c.bccList&&c.bccList.length>0){
K+=1===c.folderSN?'<dt class="bcc_dt" style="display:{Show}">'+nLang.c.bcc+'</dt><dd class="bcc_dd" style="display:{Show}">':'<dt style="display:{Show}">'+nLang.c.bcc+'</dt><dd style="display:{Show}">';
for(var B=0,G=c.bccList.length;G>B;B++)K+=myContextMenu.isUseContextMenu("read")?'<a href="#" class="_c1(myContextMenu|showSenderContextLayer|read) _stopDefault">'+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(c.bccList[B].name))+"&lt;"+c.bccList[B].email+"&gt;</a>":mcCore.isNcs()||mcCore.isNwe()?'<a href="#" class="_c1(myCore|showSenderInfo|'+c.bccList[B].email+') _stopDefault">'+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(c.bccList[B].name))+"&lt;"+c.bccList[B].email+"&gt;</a>":"<a href='#' class='_c1(mfCore|popupWrite|new||\""+c.bccList[B].name.replace(/\"/g,"").replace(/\'/g,"").replace(/\(/g,"%28").replace(/\)/g,"%29")+'"&lt;'+c.bccList[B].email+"&gt;) _stopDefault'>"+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(c.bccList[B].name))+"&lt;"+c.bccList[B].email+"&gt;</a>",
B+1<c.bccList.length&&(K+=", ");K+="</dd>"}q.BccList=K,p=""!=m.info&&b.showRcpt?p.replace(/\{Show\}/g,"block"):p.replace(/\{Show\}/g,"none"),
K=null,p=mcCore.isCorrespondFlag(c.status,"0x400000")&&mcCore.useCalendar()?p.replace(/\{CalArea\}/g,'<div id="CalArea_'+c.mailSN+'" class="CalArea" style="display:none"></div>'):mcCore.checkApprovalStatus(c.status)||mcCore.isCorrespondFlag(c.status,"0x1000000000")?p.replace(/\{CalArea\}/g,'<div id="ApproveArea_'+c.mailSN+'" class="ApproveArea" style="display:none"></div>'):p.replace(/\{CalArea\}/g,""),
p=c.from.email==mcCore.getNaverEmailAddress()&&(6==c.folderSN||c.folderSN>=1e7)?p.replace(/\{TomeView\}/,"none"):p.replace(/\{TomeView\}/,""),
p=mcCore.template(p,q),q=null;var L=!0;if(5==a.mailInfo.folderSN){var M=null,N="";switch(a.mailInfo.spamType){
case"AUTO_MOVE":L=!0,M=_oSystemAutoMove,N=a.mailInfo.spamType;break;case"SYSTEM_DEFINE":L=!0,M=_oSystemDefine,
N=a.mailInfo.spamType;break;case"USER_REPORT":L=!0,M=_oUserReport,N=a.mailInfo.spamType;break;case"USER_MOVE":
L=!0,M=_oUserMove,N=a.mailInfo.spamType;break;case"USER_DEFINE":switch(L=!0,a.mailInfo.spamTypeDetail){
case"NO_ADDRESS_BOOK":M=_oNoAddressBook,N=a.mailInfo.spamTypeDetail;break;case"NO_TO_CC":M=_oNoToCc,
N=a.mailInfo.spamTypeDetail;break;case"FALSE_MY_ID":M=_oFalseMyId,N=a.mailInfo.spamTypeDetail;break;case"CHINESE":
M=_oChinese,N=a.mailInfo.spamTypeDetail;break;case"ENGLISH":M=_oEnglish,N=a.mailInfo.spamTypeDetail;break;
case"JAPANESE":M=_oJapanese,N=a.mailInfo.spamTypeDetail;break;case"RUSSIAN":M=_oRussian,N=a.mailInfo.spamTypeDetail;
break;case"FOREIGN_LANGUAGE":M=_oForeignLanguage,N=a.mailInfo.spamTypeDetail;break;case"KEYWORD_AD":
M=_oKeywordAd,N=a.mailInfo.spamTypeDetail;break;case"KEYWORD_ADULT":M=_oKeywordAdult,N=a.mailInfo.spamTypeDetail;
break;case"KEYWORD_PROMOTION":M=_oKeywordPromotion,N=a.mailInfo.spamTypeDetail;break;case"KEYWORD_AGREEMENT":
M=_oKeywordAgreement,N=a.mailInfo.spamTypeDetail;break;case"KEYWORD_SHOPPING":M=_oKeywordShopping,N=a.mailInfo.spamTypeDetail;
break;case"KEYWORD_LOAN":M=_oKeywordLoan,N=a.mailInfo.spamTypeDetail;break;case"KEYWORD_USER":M=_oKeywordUser,
N=a.mailInfo.spamTypeDetail;break;case"AUTO_CATEGORY":M=_oAutoCategory,N=a.mailInfo.spamTypeDetail;break;
case"IMPORT_MAIL":M=_oImportMail,N=a.mailInfo.spamTypeDetail}break;default:L=!1}1==L&&(p+="<div class='spam_reason'><dl><dt>"+nLang.c.reason_spam_folder+"</dt><dd>"+M.sReason+"</dd></dl>"+M.sGuide+"</div>",
p=p.replace(/\{mailSN\}/g,a.mailInfo.mailSN),p=p.replace(/\{keyType\}/g,a.mailInfo.spamTypeDetail),p=p.replace(/\{spamType\}/g,N));
}if(a.hideImage?(p+='<div class="noImgs">'+nLang.r.unuse_external_link_image+' <a class="spamMsg _c1(mrCore|readSpamMail|'+a.mailInfo.folderSN+'|true) _stopDefault" href="javascript:;">'+nLang.r.show_link_image+"</a>",
p+=a.mailInfo.from.email?'<span class="bar">|</span><a class="normal_text _c1(mrCore|addTrustAddress|'+a.mailInfo.from.email+') _stopDefault" href="javascript:;">'+nLang.r.trust_external_address.replace(/{Address}/,a.mailInfo.from.email)+"</a></div>":"</div>"):5==a.mailInfo.folderSN?p+="-1"==mCom.bViewSpamImage?mEnv.hideSpamImage?'<div class="noImgs"><span class="ico_caution">['+nLang.c.caution+"]</span> "+nLang.r.unuse_spam_link_image+' <a class="spamMsg _c1(mrCore|readSpamMail|'+a.mailInfo.folderSN+'|true) _stopDefault" href="javascript:;">'+nLang.r.show_link_image+"</a></div>":'<div class="noImgs"><span class="ico_caution">['+nLang.c.caution+"]</span> "+nLang.r.use_spam_link_image+' <a class="spamMsg _c1(mrCore|readSpamMail|'+a.mailInfo.folderSN+'|false) _stopDefault" href="javascript:;">'+nLang.r.hide_link_image+"</a></div>":mCom.bViewSpamImage?'<div class="noImgs"><span class="ico_caution">['+nLang.c.caution+"]</span> "+nLang.r.use_spam_link_image+' <a class="spamMsg _c1(mrCore|readSpamMail|'+a.mailInfo.folderSN+'|false) _stopDefault" href="javascript:;">'+nLang.r.hide_link_image+"</a></div>":'<div class="noImgs"><span class="ico_caution">['+nLang.c.caution+"]</span> "+nLang.r.unuse_spam_link_image+' <a class="spamMsg _c1(mrCore|readSpamMail|'+a.mailInfo.folderSN+'|true) _stopDefault" href="javascript:;">'+nLang.r.show_link_image+"</a></div>":("SYSTEM_DEFINE"==a.mailInfo.spamType||"AUTO_MOVE"==a.mailInfo.spamType)&&(p+='<div id="doubt_spam" class="noImgs"><span class="ico_caution">['+nLang.c.caution+"]</span> "+nLang.c.hide_doubt_spam+' <a class="spamMsg _ccr(rdh.expose) _c1(mrCore|toggleReadBodyForDoubtSpam) _stopDefault" href="javascript:;">'+nLang.c.display_spam_body+'</a><span class="bar">|</span><a class="normal_text _ccr(rdh.setautomove) _c1(mlCore|submitDeleteSpamDirect|'+a.mailInfo.mailSN+') _stopDefault" href="javascript:;">'+nLang.c.set_spam_auto_move+"</a></div>"),
!mcCore.isNaver()&&1==a.mailInfo.folderSN&&mcCore.isCorrespondFlag(c.status,"0x1000")){var O=new Date(1e3*a.mailInfo.sentTime);
O.setHours(0),O.setMinutes(0),O.setSeconds(0),new Date(1e3*a.currentTime)-O<6912e5&&(a.hasAttachWithdraw=!0);
}if(_nImageCount=0,a.attachList.attachCount||a.hasAttachWithdraw){_nCurReadingMailBaseDate=a.attachList.baseDate,
_nCurReadingMailTempFilePostFix=a.attachList.tempFilePostfix,_sImageArea=mrTemplate.sImageTemplate,_sImageFiles="",
_nDeletedFile=0,_htFileTpl={},_htAttachTpl={},_htImageTpl={},_isShowWarning=!1,_bShowWaringStr=!1;var P=_makeAttachAreaHtml(a);
_htAttachTpl=_htFileTpl=_htImageTpl=null,_sImageArea=_sImageArea.replace(/\{DisplayPhotoViewerLink\}/g,mcCore.isNaver()?"inline-block":"none"),
_sImageArea="en_US"===cCode&&2>_nImageCount?_sImageArea.split("("+nLang.r.locate_number_of_image+")").join(""):_sImageArea.replace(/\{ImageCount\}/g,_nImageCount),
_sImageArea=_sImageArea.replace(/\{ImageListHTML\}/g,_sImageFiles+"</tr>"),setCloudSaveAllData(a)}else var P="";
if(-1==a.mailInfo.htmlBodyContentSN&&(c.body=c.body.replace(/\http:&gt;/g,"http:").replace(/\https:&gt;/g,"https:"),
c.body=c.body.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),c.body=c.body.replace(/<((?!br>))/gi,"&lt;$1")),
5==a.mailInfo.folderSN||"SYSTEM_DEFINE"!=a.mailInfo.spamType&&"AUTO_MOVE"!=a.mailInfo.spamType)var Q='<div id="readFrame">'+c.body+"</div>";else var Q='<div id="readFrame" style="display:none">'+c.body+"</div>";
mCom.bViewSpamImage&&("undefined"!=typeof _nImageCount?_nImageCount:0)>0&&(Q+=_sImageArea),Q+='<p class="toTop"><a href="#" class="_c1(mrCore|toTop) _ccr(rdr.go) _stopDefault">'+nLang.r.go_top+"</a></p>";
var R="";if(_woThreadMailList=$A([]),f&&("L"==mEnv.divideMode||"thread"!=mCom.nCurrentFolder)){var S=mrTemplate.oListTemplate.head;
S=S.replace(/\{RelNumber\}/g,f),f>=2?(S=S.replace(/\{ShowAll\}/g,'<span class="guideTxt"><a href="#" class="_c1(mlCore|showThread|'+a.mailInfo.mailSN+'|1|1|0|false) _ccr(rdr.relatedlist) _stopDefault"><span class="blind">'+nLang.r.relative_mail+"</span>"+nLang.r.view_all+"</a></span>"),
f>5&&(f=5)):S=S.replace(/\{ShowAll\}/g,"");for(var T=[],U=-1,B=0;f>B;B++){_woThreadMailList.push(a.threadData[B]);
var V=mrTemplate.oListTemplate.body,q={},W='"'+a.threadData[B].from.name.replace(/\"/g,"")+'" <'+a.threadData[B].from.email+">",X=a.threadData[B].from.name.replace(/\"/g,"");
""==X&&(X=a.threadData[B].from.email.replace(/\"/g,"").replace(/\$/g,"&#36;")),q.ReadAction="clickTitleForThead",
q.SenderAction="_c1(mfCore|popupWrite|new||&quot;"+mcCore.restoreSpecialChar(a.threadData[B].from.name).replace(/\"/g,"").replace(/\'/g,"").replace(/\(/g,"%28").replace(/\)/g,"%29")+"&quot;&lt;"+a.threadData[B].from.email+"&gt;) _stopDefault",
q.FromTitle=W,q.FromName=X,q.MailSN=a.threadData[B].mailSN,q.MailSNOnly=a.threadData[B].mailSN,q.NotRead="",
a.threadData[B].mailSN==a.mailInfo.mailSN&&(q.NotRead="selected "),q.IsEmergency=mlCore.makeEmergencyMark(a.threadData[B]),
q.sendMail=mlCore.makeSendmailIcon(a.threadData[B]),q.SubjectString=a.threadData[B].subject.match(/^\s*$/)?nLang.l.no_title:a.threadData[B].subject.replace(/\$/g,"&#36;"),
q.ReceivedDate=1==a.threadData[B].folderSN||0==a.threadData[B].receivedTime?mcCore.getHumanTime(a.threadData[B].sentTime,a.currentTime):mcCore.getHumanTime(a.threadData[B].receivedTime,a.currentTime),
mcCore.isCorrespondFlag(a.threadData[B].status,"0x4")?(q.IsRead="yes",q.NotRead+="",q.ReadIcon='<span class="blind">'+nLang.r.read_mail+"</span>"):(q.IsRead="no",
q.NotRead+="notRead",q.ReadIcon='<span class="blind">'+nLang.r.unread_mail+"</span>"),q.hasFile=Number(a.threadData[B].attachCount)>0?"icoFile":"",
q.FolderName="<span class='folderName'>["+mcCore.replaceSpecialChar(a.threadData[B].folderName)+"]</span> ",
q.PrevNext="",q.ccrf="_ccr(rdr.relatedlist)",V=V.replace(nLang.r.popup_window,mcCore.getMemoboxString("popup_window",mCom.nCurrentFolder,"r")),
T[++U]=mcCore.template(V,q),q=null,V=null}R=S+T.join("")+mrTemplate.oListTemplate.tail,S=null,T=null;
}var Y="";if(mCom.nCurPrevMailSN=a.prevMailData?a.prevMailData.mailSN:null,mCom.nCurNextMailSN=a.nextMailData?a.nextMailData.mailSN:null,
1!=mCom.isPopup&&"list"==mCom.vDivideMode&&(a.prevMailData||a.nextMailData)&&"thread"!=mCom.nCurrentFolder){
if(Y+='<div style="display: block;" id="prevNextList"><ul class="mailList readUnder">',a.prevMailData){
var V=_makePrevNextMailRow("prev",a.prevMailData,a.currentTime);Y+=V,V=null}if(a.nextMailData){var V=_makePrevNextMailRow("next",a.nextMailData,a.currentTime);
Y+=V,V=null}Y+="</ul></div>"}var Z=getTranslateNotiTemplate(c),$=mrTemplate.sReadBodyTemplate.head;if($+=[o,p,Z,P,Q,R,Y].join(""),
$+=mrTemplate.sReadBodyTemplate.tail,o=p=P=Q=R=Y=null,mCom.elRead.innerHTML=$,isUseQuickReply(a.mailInfo.folderSN)&&!_bIsTranslate&&addQuickReplyUI($$.getSingle("#readFrame",mCom.elRead),a.mailInfo.mailSN),
$$("div[style*=nm-mobile-content]",mCom.elRead).length>0)for(var _=$$("div[style*=nm-mobile-content]",mCom.elRead),B=0;B<_.length;B++)_[B].style.display="none";
if($$("div[style*=nm-pc-content]",mCom.elRead).length>0)for(var ab=$$("div[style*=nm-pc-content]",mCom.elRead),B=0;B<ab.length;B++)ab[B].style.display="";
if(mCom.elRead.scrollTop=1,mCom.isReading=!0,(_bIsReadEML||_bIsTranslate)&&($Element($$.getSingle(".viewTitle .s")).hide(),
$$.getSingle("a[data-senderaddress]",mCom.elRead)?$Element($$.getSingle("a[data-senderaddress]",mCom.elRead)).hide():null,
!_bIsTranslate&&_bIsReadEML&&$Element("readBtnMenu").hide(),mcCore.adjustTopOfFlexArea()),-1==a.mailInfo.htmlBodyContentSN&&5!=a.mailInfo.folderSN){
var bb=$$.getSingle("#readFrame",mCom.elRead);bb.parentNode.replaceChild(_linkify(bb),bb)}if(mcCore.isCorrespondFlag(c.status,"0x8")||mcCore.isCorrespondFlag(c.status,"0x10")?$$.getSingle(".rellist")&&$$.getSingle(".rellist").focus():$$.getSingle(".viewTitle")&&$Element($$.getSingle(".viewTitle")).visible()&&($$.getSingle(".viewTitle").focus(),
$$.getSingle("#previewContent").scrollLeft=0),mCom.isPopup||""==mlCore.getCurMailList().$value()[0]){
mlCore.emptyCurMailList();var cb={};cb.mailSN=a.mailInfo.mailSN,cb.subject=a.mailInfo.subject,cb.isRead=d,
cb.isMarked=e,cb.folderSN=a.mailInfo.folderSN,cb.fromAddr=a.mailInfo.from.email,cb.fromName=a.mailInfo.from.name,
cb.toAddress=a.mailInfo.toList[0],cb.status=a.mailInfo.status,cb.securityLevel=a.mailInfo.securityLevel,
cb.category=a.mailInfo.category,mlCore.pushToCurMailList(cb),cb=null}if(mCom.nCurReadingMailSN=a.mailInfo.mailSN,
mCom.sCurReadingMailCharset=a.mailInfo.charset||"",mcCore.getElapsedTime(nLang.r.end_read_mail),mCom.bRunningShorcut=!1,
mCom.bLoadingMail=!1,mcCore.isCorrespondFlag(c.status,"0x400000")&&mcCore.useCalendar()?_getSchedule(a.mailInfo.mailSN):mcCore.checkApprovalStatus(c.status)&&_getApproval(a.mailInfo.mailSN,a.mailInfo.messageId,a.mailInfo.from),
_drawFakeNotiArea(a.mailInfo),_drawWorkflowArea(a.mailInfo),"read"==mCom.initAction||"-2"===mCom.nCurrentFolder){
if(mCom.initAction="",mCom.nCurrentFolder!=c.folderSN){var db=mCom.nCurrentFolder;mCom.nCurrentFolder=c.folderSN,
_arrangeMenu(c.folderSN,"readBtnMenu"),mCom.nCurrentFolder=db}$Element("headUnreadNumWrap").className("newMail _c1(mfCore|clickFolder|"+c.folderSN+"|unread) _ccr(ltp.unread) _stopDefault"),
$Element("headTotalNum").className("allMail _c1(mfCore|clickFolder|"+c.folderSN+") _ccr(ltp.eall) _stopDefault");
var eb=mcCore.getFolderObject(c.folderSN),fb=eb.unreadMailCount,gb=eb.mailCount,hb=mcCore.findFolderName(c.folderSN,!1);
$$.getSingle("#headFolderName").innerHTML=$S(hb).escapeHTML().$value()+'<span class="bar"></span>',$$.getSingle("#headUnreadNum").innerHTML=0>fb?0:fb,
$Element($$.getSingle("#titleSplitBar")).css("display","inline-block"),$$.getSingle("#headTotalNum").innerHTML=gb,
hb=null}if(mcCore.isNaver()&&mcKoreanclick.getRead(c.mailSN),mCom.isPopup?setLcs("/read/popup",mcCore.isNwe()?"readPopup":null):setLcs("","read"),
jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<=8&&$$.getSingle(".btn_read_translate")&&$Element($$.getSingle(".btn_read_translate")).hide(),
_bIsTranslate&&loadTranlsateReadPopup(),mcCore.isNcs()||mcCore.isNwe()){if(!mCom.isPopup&&"list"!=mCom.vDivideMode||isVirtualMailbox(mCom.nCurrentFolder)||mCom.bIsUnread)var ib=mlCore.findMailSN(mCom.nCurReadingMailSN,"prev");else var ib=mCom.nCurPrevMailSN;
if(null==ib&&(1==mCom.nCurrentPage||mCom.isPopup||"remind"===mCom.nCurrentFolder&&-1===mCom.nCurrentPage)&&g&&($Element(g).addClass("disabled"),
g.disabled="disabled"),!mCom.isPopup&&"list"!=mCom.vDivideMode||isVirtualMailbox(mCom.nCurrentFolder)||mCom.bIsUnread)var jb=mlCore.findMailSN(mCom.nCurReadingMailSN,"next");else var jb=mCom.nCurNextMailSN;
null!=jb||mCom.nLastPage!=mCom.nCurrentPage&&!mCom.isPopup&&mCom.isRemindTruncated||!h||($Element(h).addClass("disabled"),
h.disabled="disabled")}return"read"==mCom.initAction||mCom.isPopup||setTimeout($Fn(function(){mfCore.updateFolder();
},this).bind(),500),mcCore.testPeriodEnd("본창 읽기 끝"),$Agent().navigator().ie&&(mCom.elRead.scrollTop=0),
mCom.showImageAddress=a.showImageAddress,$Element(mCom.elRead).appendHTML(mrTemplate.calendarRejectTemplate),
!0}},_makePrevNextMailRow=function(a,b,c){var d=mrTemplate.oListTemplate.body,e=(mcCore.getNaverEmailAddress(),
'"'+mcCore.restoreSpecialChar(b.from.name).replace(/\"/g,"").replace(/\$/g,"&#36;")+'" <'+b.from.email+">"),f=b.from.name.replace(/\"/g,"").replace(/\$/g,"&#36;");
return""==f&&(f=b.from.email.replace(/\"/g,"").replace(/\$/g,"&#36;")),d=d.replace(/\{ReadAction\}/g,"clickTitle"),
d=d.replace(/\{FromTitle\}/g,e),d=d.replace(/\{FromName\}/g,f),d=d.replace(/\{SenderAction\}/g,"_c1(mfCore|popupWrite|new||&quot;"+mcCore.restoreSpecialChar(b.from.name).replace(/\"/g,"").replace(/\'/g,"").replace(/\$/g,"&#36;")+"&quot;&lt;"+b.from.email+"&gt;) _stopDefault"),
d=d.replace(nLang.r.popup_window,mcCore.getMemoboxString("popup_window",mCom.nCurrentFolder,"r")),d=d.replace(/\{MailSN\}/g,b.mailSN),
d=d.replace(/\{MailSNOnly\}/g,b.mailSN),d=d.replace(/\{IsEmergency\}/g,mlCore.makeEmergencyMark(b)),
d=d.replace(/\{sendMail\}/g,""),d=b.subject.match(/^\s*$/)?d.replace(/\{SubjectString\}/g,nLang.l.no_title):d.replace(/\{SubjectString\}/g,b.subject.replace(/\$/g,"&#36;")),
d=1!=b.folderSN&&2!=b.folderSN||0==b.receivedTime?d.replace(/\{ReceivedDate\}/g,mcCore.getHumanTime(b.receivedTime,c)):d.replace(/\{ReceivedDate\}/g,mcCore.getHumanTime(b.sentTime,c)),
mcCore.isCorrespondFlag(b.status,"0x4")?(d=d.replace(/\{IsRead\}/g," yes"),d=d.replace(/\{NotRead\}/g,""),
d=d.replace(/\{ReadIcon\}/g,"<span class='blind'>"+nLang.r.read_mail+"</span>")):(d=d.replace(/\{IsRead\}/g," no"),
d=d.replace(/\{NotRead\}/g,"notRead"),d=d.replace(/\{ReadIcon\}/g,"<span class='blind'>"+nLang.r.unread_mail+"</span>")),
d=Number(b.attachCount)>0?d.replace(/\{hasFile\}/g,"icoFile"):d.replace(/\{hasFile\}/g,""),d=d.replace(/\{FolderName\}/g,""),
"prev"==a?(d=d.replace(/\{ccrf\}/g,"_ccr(mrd.priormail)"),d=d.replace(/\{PrevNext\}/g,'<li class="icon_rel"><a href="#" class="list_nav"><img src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif" width="9" height="6" alt="'+nLang.c.prev+'" class="mPrev"></a></li>')):"next"==a&&(d=d.replace(/\{ccrf\}/g,"_ccr(mrd.nextmail)"),
d=d.replace(/\{PrevNext\}/g,'<li class="icon_rel"><a href="#" class="list_nav"><img src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif" width="9" height="6" alt="'+nLang.c.next+'" class="mNext"></a></li>')),
d},_makeReadHtmlForPrint=function(a){var b=[],c=-1,d=a.mailInfo,e=!0,f="icoImportantOn",g=nLang.c.mark_mail;
mcCore.isCorrespondFlag(d.status,"0x20")||(f="icoImportantOff",e=!1,g=nLang.c.normal_mail),b[++c]=d.subject.match(/^\s*$/)?'<div class="viewTitle"><h4><a title="'+g+'" href="#"><span class="spr icoImportantAtRead '+f+' _stopDefault" style="cursor:default"></span></a> '+nLang.l.no_title+"</h4>":'<div class="viewTitle"><h4><a title="'+g+'" href="#"><span class="spr icoImportantAtRead '+f+' _stopDefaul" style="cursor:default"><em class="blind">'+(e?nLang.c.unmark_inportant_mail:nLang.c.mark_inportant_mail)+"</em></span></a> "+d.subject+"</h4>";
var h='<div class="date_cover"><div class="align_cover"><p class="send_date">{SendDate}</p>{RemindDate}</div><span class="v_basis"></span></div>';
h=(1==d.folderSN||2==d.folderSN||_bIsReadEML||_bIsTranslate)&&0!=d.receivedTime?h.replace("{SendDate}",mcCore.getHumanTime(d.sentTime,a.currentTime,"read")):h.replace("{SendDate}",mcCore.getHumanTime(d.receivedTime,a.currentTime,"read")),
h=h.replace("{RemindDate}",_getRemindDateHtml(d,a.currentTime)),b[++c]=h,b[++c]='<dl><dt class="first-child">',
b[++c]=" "+nLang.c.sender+" </dt><dd> "+mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(d.from.name))+"&lt;"+d.from.email+"&gt;",
b[++c]='<div id="expand"><dt>'+nLang.c.receiver+"</dt><dd>";for(var i=0,j=d.toList.length;j>i;i++)b[++c]=mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(d.toList[i].name))+"&lt;"+d.toList[i].email+"&gt;",
i+1<d.toList.length&&(b[++c]=", ");if(d.ccList&&d.ccList.length>0){b[++c]="</dd><dt>"+nLang.c.cc+"&nbsp;&nbsp;&nbsp;&nbsp;</dt><dd>: ";
for(var i=0,j=d.ccList.length;j>i;i++)b[++c]=mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(d.ccList[i].name))+"&lt;"+d.ccList[i].email+"&gt;",
i+1<d.ccList.length&&(b[++c]=", ")}if(b[++c]='<dt class="none"></dt></dl>',mcCore.isCorrespondFlag(d.status,"0x400000")&&mcCore.useCalendar()?b[++c]='<div id="CalArea_'+d.mailSN+'" class="CalArea" style="display:none"></div>':mcCore.checkApprovalStatus(d.status)&&(b[++c]='<div id="ApproveArea_'+d.mailSN+'" class="ApproveArea" style="display:none"></div>'),
b[++c]="</div>",_nImageCount=0,a.attachList.attachCount){_nCurReadingMailBaseDate=a.attachList.baseDate,
_nCurReadingMailTempFilePostFix=a.attachList.tempFilePostfix,_sImageArea=mrTemplate.sImageTemplate,_sImageFiles="",
_nDeletedFile=0,_htFileTpl={},_htAttachTpl={},_htImageTpl={},_isShowWarning=!1,_bShowWaringStr=!1;var k=_makeAttachAreaHtml(a);
_htAttachTpl=_htFileTpl=_htImageTpl=null,_sImageArea=_sImageArea.replace(/\{DisplayPhotoViewerLink\}/g,mcCore.isNaver()?"inline-block":"none"),
_sImageArea="en_US"===cCode&&2>_nImageCount?_sImageArea.split("("+nLang.r.locate_number_of_image+")").join(""):_sImageArea.replace(/\{ImageCount\}/g,_nImageCount),
_sImageArea=_sImageArea.replace(/\{ImageListHTML\}/g,_sImageFiles+"</tr>")}else var k="";if(b[++c]=k,
b[++c]='<div id="readFrame">',b[++c]=d.body,b[++c]="</div>",_nImageCount>0&&(b[++c]=_sImageArea),mCom.elRead.innerHTML=b.join(""),
$$.getSingle("#previewContent div.attfile_area")){var l=$A($$("#previewContent div.attfile_area ul li a.btn_del"));
l.forEach(function(a,b,c){$Element(c[b]).hide()})}return mcCore.adjustTopOfFlexArea(),setTimeout($Fn(function(){
self.print()},this).bind(),1e3),!0};var _getSchedule=function(a){mcCore.requestAjax(mcCore.isNaver()?{
fCallback:$Fn(_getScheduleCallBack,this).bind(a),oParameter:{mailSN:a},sUrl:"/json/schedule/get/"}:{
fCallback:$Fn(_getScheduleInfoCallBack,this).bind(a),oParameter:{mailSN:a},sUrl:"/json/schedule/info/"
})},_getScheduleInfoCallBack=function(a,b){var c,d,e,f,g=mrTemplate.sScheduleTemplate,h=b.methodWithStatus,i=b.summary||"",j=b.date||"",k="",l=b.location||"",m=b.url||"",n=b.knownSenderEmail,o=b.nearByScheduleList||[],p=b.nearByScheduleDate||"",q=b.repetitive,r=[],s=[];
if(mCom.sDefaultDateFormat?(j&&(c=/GMT(\+\d+|\-\d+)\:/.exec(j)[1],d=moment(b.startEpochMilliSecond).utcOffset(c),
e=moment(b.endEpochMilliSecond).utcOffset(c),f=e.format(d.isSame(e,"day")?"A hh:mm":"MMM D, YYYY (ddd) A hh:mm"),
j=[d.format("MMM D, YYYY (ddd) A hh:mm")," - ",f," ",j.split(" ").pop()].join(""),k=d.format("MM.DD")),
p&&(p=moment(p,"YYYY.MM.DD(ddd)").format("MMM D, YYYY (ddd)"))):k=j?j.slice(5,10):"",g=g.replace(/\{scheduleDate\}/g,k).replace(/\{scheduleTitle\}/g,i||"").replace(/\{schedulePeriod\}/g,j||"").replace(/\{schedulePlace\}/g,l||"").replace(/\{scheduleDetail\}/g,n&&m&&"REQUEST_NOT_ATTENDEE"!==h?"enabled":'style="display:none"').replace(/\{scheduleURL\}/g,m||"").replace(/\{scheduleInfo\}/g,n&&"PUBLISH"!==h?'style="display:none"':"enabled").replace(/\{scheduleInfoParagraph1\}/g,"PUBLISH"!==h?nLang.r.refer_accept_schedule1:nLang.r.publish_schedule_noti1).replace(/\{scheduleInfoParagraph2\}/g,"PUBLISH"!==h?nLang.r.refer_accept_schedule2:nLang.r.publish_schedule_noti2).replace(/\{scheduleList\}/g,o.length>0&&-1===h.indexOf("EXPIRE")&&"REQUEST_SELF"!==h?_makeScheduleList(o,p):"").replace(/\{repetitive\}/g,q),
b.startDateTime&&b.endDateTime){var t='<a id="icalMailto" class="_c1(mfCore|popupWrite|new||'+b.senderEmail+') _stopDefault" href="#">'+b.senderEmail+"</a>";
r=['<p class="txt">',"<strong>",nLang.r.schedule_time,"</strong> : ",j,"<br>","{replyMessage}","</p>"].join(""),
s=['<p class="txt">',"<strong>",nLang.r.schedule_time,"</strong> : ",j,"<br>",nLang.r.reply_accept_not_invited,"</p>"].join("");
}switch(h){case"REQUEST_NEEDS_ACTION":g=g.replace(/\{buttonGroup\}/g,mrTemplate.sScheduleTemplateWorksButtonGroup).replace(/\{Accept\}/g,"enabled").replace(/\{Tentative\}/g,"enabled").replace(/\{Reject\}/g,"enabled").replace(/\{AcceptAction\}/g,"_c1(mrCore|setSchedule|accept)").replace(/\{TentativeAction\}/g,"_c1(mrCore|setSchedule|tentative)").replace(/\{RejectAction\}/g,"_c1(mrCore|setSchedule|reject)");
break;case"REQUEST_ACCEPTED":g=g.replace(/\{buttonGroup\}/g,mrTemplate.sScheduleTemplateWorksButtonGroup).replace(/\{Accept\}/g,"disabled").replace(/\{Tentative\}/g,"enabled").replace(/\{Reject\}/g,"enabled").replace(/\{AcceptAction\}/g,"selected _stopDefault").replace(/\{TentativeAction\}/g,"_c1(mrCore|setSchedule|tentative)").replace(/\{RejectAction\}/g,"_c1(mrCore|setSchedule|reject)");
break;case"REQUEST_TENTATIVE":g=g.replace(/\{buttonGroup\}/g,mrTemplate.sScheduleTemplateWorksButtonGroup).replace(/\{Accept\}/g,"").replace(/\{Tentative\}/g,"").replace(/\{Reject\}/g,"").replace(/\{AcceptAction\}/g,"_c1(mrCore|setSchedule|accept)").replace(/\{TentativeAction\}/g,"selected _stopDefault").replace(/\{RejectAction\}/g,"_c1(mrCore|setSchedule|reject)");
break;case"REQUEST_DECLINED":g=g.replace(/\{buttonGroup\}/g,mrTemplate.sScheduleTemplateWorksButtonGroup).replace(/\{Accept\}/g,"").replace(/\{Tentative\}/g,"").replace(/\{Reject\}/g,"").replace(/\{AcceptAction\}/g,"_c1(mrCore|setSchedule|accept)").replace(/\{TentativeAction\}/g,"_c1(mrCore|setSchedule|tentative)").replace(/\{RejectAction\}/g,"selected _stopDefault");
break;case"REQUEST_EXPIRE":g=g.replace(/\{buttonGroup\}/g,mrTemplate.sScheduleTemplateWorksButtonGroup).replace(/\{Accept\}/g,"").replace(/\{Tentative\}/g,"").replace(/\{Reject\}/g,"").replace(/\{AcceptAction\}/g,"disabled _stopDefault").replace(/\{TentativeAction\}/g,"disabled _stopDefault").replace(/\{RejectAction\}/g,"disabled _stopDefault"),
g='<p class="prefix">'+nLang.r.reply_changed_schedule+"</p>"+g;break;case"REQUEST_SELF":g=g.replace(/\{buttonGroup\}/g,mrTemplate.sScheduleTemplateWorksButtonGroup).replace(/\{Accept\}/g,"").replace(/\{Tentative\}/g,"").replace(/\{Reject\}/g,"").replace(/\{AcceptAction\}/g,"disabled _stopDefault").replace(/\{TentativeAction\}/g,"disabled _stopDefault").replace(/\{RejectAction\}/g,"disabled _stopDefault"),
g='<p class="prefix">'+nLang.r.cannot_accept_my_schedule+"</p>"+g;break;case"REQUEST_NOT_ATTENDEE":g=g.replace(/\{buttonGroup\}/g,mrTemplate.scheduleTemplateAddScehdule).replace(/\{mailSN\}/g,a).replace(/\{actionType\}/g,h);
break;case"REPLY_ACCEPTED":g=r.replace(/\{replyMessage\}/g,nLang.r.new_accept_schedule).replace(/\{EmailLink\}/g,t);
break;case"REPLY_TENTATIVE":g=r.replace(/\{replyMessage\}/g,nLang.r.new_tentative_schedule).replace(/\{EmailLink\}/g,t);
break;case"REPLY_DECLINED":g=r.replace(/\{replyMessage\}/g,nLang.r.new_reject_schedule).replace(/\{EmailLink\}/g,t);
break;case"REPLY_EXPIRE":g='<p class="prefix">'+nLang.r.expire_reply+"</p>";break;case"REPLY_ACCEPTED_NOT_INVITED":
g=s.replace(/\{SenderLink\}/g,t).replace(/\{ReplyType\}/g,nLang.r.accept);break;case"REPLY_TENTATIVE_NOT_INVITED":
g=s.replace(/\{SenderLink\}/g,t).replace(/\{ReplyType\}/g,nLang.r.tentative);break;case"REPLY_DECLINED_NOT_INVITED":
g=s.replace(/\{SenderLink\}/g,t).replace(/\{ReplyType\}/g,nLang.r.reject);break;case"CANCEL_VALID":g='<p class="txt"><span class="noti">'+nLang.r.cancel_schedule+"</span></p>";
break;case"CANCEL_EXPIRE":g=g.replace(/\{Accept\}/g,"").replace(/\{Tentative\}/g,"").replace(/\{Reject\}/g,"").replace(/\{AcceptAction\}/g,"disabled _stopDefault").replace(/\{TentativeAction\}/g,"disabled _stopDefault").replace(/\{RejectAction\}/g,"disabled _stopDefault"),
g='<p class="prefix">'+nLang.r.reply_changed_schedule+"</p>"+g;break;case"PUBLISH":g=g.replace(/\{buttonGroup\}/g,mrTemplate.scheduleTemplateAddScehdule).replace(/\{mailSN\}/g,a).replace(/\{actionType\}/g,h).replace(/\{scheduleInfoParagraph1\}/g,h).replace(/\{scheduleInfoParagraph2\}/g,h);
break;default:g='<p class="txt"><span class="noti">'+nLang.r.cancel_schedule+"</span></p>"}$Element("CalArea_"+a)&&($Element("CalArea_"+a).html(g),
$Element("CalArea_"+a).show())},addEventToCalendar=function(a,b,c){mcCore.requestAjax({fCallback:function(a){
var b=a.url;if("PUBLISH"===c)window.open(b,"_blank");else{var d=mrTemplate.sScheduleTemplateWorksButtonGroup,e=$Element("addEventToCalendarBtn"),f=$Element("scheduleDetailBtn"),g=$Element("scheduleDetailAnchor");
d=d.replace(/\{Accept\}/g,"enabled").replace(/\{Tentative\}/g,"enabled").replace(/\{Reject\}/g,"enabled").replace(/\{AcceptAction\}/g,"_c1(mrCore|setSchedule|accept)").replace(/\{TentativeAction\}/g,"_c1(mrCore|setSchedule|tentative)").replace(/\{RejectAction\}/g,"_c1(mrCore|setSchedule|reject)"),
e.hide(),g.attr("onclick","window.open('"+b+"', '_blank'); return false;"),f.show(),e.parent().appendHTML(d);
}},oParameter:{mailSN:b},sUrl:"/json/schedule/apply/"})},_getScheduleTime=function(a,b){var c=$Date(a),d=$Date(b),e=[nLang.c.sunday,nLang.c.monday,nLang.c.tuesday,nLang.c.wednesday,nLang.c.thursday,nLang.c.friday,nLang.c.saturday],f=c.format("G")>11?nLang.r.pm+" "+c.format("g")+c.format(":i"):nLang.r.am+" "+c.format("H:i"),g=d.format("G")>11?nLang.r.pm+" "+d.format("g")+d.format(":i"):nLang.r.am+" "+d.format("H:i");
return"ja_JP"===cCode?(f=f.replace(/(\s)(12)(:\d+)/,"$100$3"),g=g.replace(/(\s)(12)(:\d+)/,"$100$3")):(f=f.replace(/(\s)(00)(:\d+)/,"$112$3"),
g=g.replace(/(\s)(00)(:\d+)/,"$112$3")),[c.format("Y.m.d"),"(",e[c.day()],") ",f," ~ ",d.format("Y.m.d"),"(",e[d.day()],") ",g].join("");
},_getScheduleCallBack=function(a,b){var c,d,e,f,g=mrTemplate.sScheduleTemplate,h=b.status,i=b.method,j=(b.isCreated||"",
b.content||""),k=b.date||"",l="",m=b.place||"",n=b.url||"",o=b.isKnownOrganizerEmail,p="",q="",r='disabled="disabled"',s=b.nearByScheduleList||[],t=b.nearByScheduleDate||"",u=b.repetitive;
switch(mCom.sDefaultDateFormat?(k&&(c=/GMT(\+\d+|\-\d+)\:/.exec(k)[1],d=moment(b.startUnixtime).utcOffset(c),
e=moment(b.endUnixtime).utcOffset(c),f=e.format(d.isSame(e,"day")?"A hh:mm":"MMM D, YYYY (ddd) A hh:mm"),
k=[d.format("MMM D, YYYY (ddd) A hh:mm")," - ",f," ",b.date.split(" ").pop()].join(""),l=d.format("MM.DD")),
t&&(t=moment(t,"YYYY.MM.DD(ddd)").format("MMM D, YYYY (ddd)"))):l=k?k.slice(5,10):"",g=g.replace(/\{scheduleDate\}/g,l).replace(/\{scheduleTitle\}/g,j||"").replace(/\{schedulePeriod\}/g,k||"").replace(/\{schedulePlace\}/g,m||"").replace(/\{buttonGroup\}/g,mrTemplate.sScheduleTemplateNaverButtonGroup).replace(/\{scheduleDetail\}/g,o?"enabled":'style="display:none"').replace(/\{scheduleURL\}/g,n||"").replace(/\{scheduleInfo\}/g,o?'style="display:none"':"enabled").replace(/\{scheduleInfoParagraph1\}/g,nLang.r.refer_accept_schedule1).replace(/\{scheduleInfoParagraph2\}/g,nLang.r.refer_accept_schedule2).replace(/\{scheduleList\}/g,s.length>0&&"expire"!==h&&"invalid"!==h?_makeScheduleList(s,t):"").replace(/\{isRepetitive\}/g,u),
i){case"request":switch(h){case"wait":g=g.replace(/\{Accept\}/g,"enabled").replace(/\{Tentative\}/g,"enabled").replace(/\{Reject\}/g,"enabled").replace(/\{AcceptAction\}/g,"_c1(mrCore|setSchedule|accept)").replace(/\{TentativeAction\}/g,"_c1(mrCore|setSchedule|tentative)").replace(/\{RejectAction\}/g,"_c1(mrCore|setSchedule|reject)");
break;case"accept":g=g.replace(/\{Accept\}/g,r).replace(/\{Tentative\}/g,"enabled").replace(/\{Reject\}/g,"enabled").replace(/\{AcceptAction\}/g,p).replace(/\{TentativeAction\}/g,"_c1(mrCore|setSchedule|tentative)").replace(/\{RejectAction\}/g,"_c1(mrCore|setSchedule|reject)");
break;case"tentative":g=g.replace(/\{Accept\}/g,"").replace(/\{Tentative\}/g,r).replace(/\{Reject\}/g,"").replace(/\{AcceptAction\}/g,"_c1(mrCore|setSchedule|accept)").replace(/\{TentativeAction\}/g,p).replace(/\{RejectAction\}/g,"_c1(mrCore|setSchedule|reject)");
break;case"reject":g=g.replace(/\{Accept\}/g,"").replace(/\{Tentative\}/g,"").replace(/\{Reject\}/g,r).replace(/\{AcceptAction\}/g,"_c1(mrCore|setSchedule|accept)").replace(/\{TentativeAction\}/g,"_c1(mrCore|setSchedule|tentative)").replace(/\{RejectAction\}/g,p);
break;case"expire":g=g.replace(/\{Accept\}/g,r).replace(/\{Tentative\}/g,r).replace(/\{Reject\}/g,r).replace(/\{AcceptAction\}/g,q).replace(/\{TentativeAction\}/g,q).replace(/\{RejectAction\}/g,q),
g='<p class="prefix">'+nLang.r.reply_changed_schedule+"</p>"+g;break;case"invalid":g=g.replace(/\{Accept\}/g,r).replace(/\{Tentative\}/g,r).replace(/\{Reject\}/g,r).replace(/\{AcceptAction\}/g,q).replace(/\{TentativeAction\}/g,q).replace(/\{RejectAction\}/g,q),
g='<p class="prefix">'+nLang.r.cannot_accept_my_schedule+"</p>"+g;break;default:alert(nLang.e.not_handled_case+" method='"+b.method+"', status='"+b.status+"'");
}break;case"reply":var v=['<p class="txt">',"<strong>",nLang.r.schedule_time,"</strong> : ",_getScheduleTime(b.start,b.end),"<br>",'<a id="icalMailto" class="_c1(mfCore|popupWrite|new||',b.sender,') _stopDefault" href="#">',b.sender,"</a>",nLang.r.schedule_from,"{replyMessage}"].join("");
switch(h){case"wait":g=g.replace(/\{Accept\}/g,"enabled").replace(/\{Tentative\}/g,"enabled").replace(/\{Reject\}/g,"enabled").replace(/\{AcceptAction\}/g,"_c1(mrCore|setSchedule|accept)").replace(/\{TentativeAction\}/g,"_c1(mrCore|setSchedule|tentative)").replace(/\{RejectAction\}/g,"_c1(mrCore|setSchedule|reject)");
break;case"accept":g=v.replace(/\{replyMessage\}/g,nLang.r.accept_schedule);break;case"tentative":g=v.replace(/\{replyMessage\}/g,nLang.r.tentative_schedule);
break;case"reject":g=v.replace(/\{replyMessage\}/g,nLang.r.reject_schedule);break;case"expire":g='<p class="prefix">'+nLang.r.expire_reply+"</p>";
break;default:alert(nLang.e.not_handled_case+" method='"+b.method+"', status='"+b.status+"'")}break;case"cancel":
switch(h){case"cancel":g='<p class="txt"><span class="noti">'+nLang.r.cancel_schedule+"</span></p>";break;
case"expire":g=g.replace(/\{Accept\}/g,r).replace(/\{Tentative\}/g,r).replace(/\{Reject\}/g,r).replace(/\{AcceptAction\}/g,q).replace(/\{TentativeAction\}/g,q).replace(/\{RejectAction\}/g,q),
g='<p class="prefix">'+nLang.r.reply_changed_schedule+"</p>"+g;break;default:g='<p class="txt"><span class="noti">'+nLang.r.no_invitation+"</span></p>";
}break;default:g='<p class="txt"><span class="noti">'+nLang.r.no_invitation+"</span></p>"}$Element("CalArea_"+a)&&($Element("CalArea_"+a).html(g),
$Element("CalArea_"+a).show())},_makeScheduleList=function(a,b){var c,d,e,f,g=5,h=Math.floor(g/2),i=[],j=[],k=0,l=0,m=['<div class="invite_cal_cover">','<div class="schedule_list_cover">','<strong class="schedule_date">',b,"</strong>",'<ul class="schedule_list">',"{List}","</ul>","</div>","</div>"].join(""),n=['<li class="{currentSchedule}">','<span class="schedule_time">{startTimeText} {scheduleTerm}</span>','<span class="schedule_title">{scheduleName}</span>',"</li>"].join("");
for(c=0,d=a.length;d>c;c++)a[c]&&(a[c].isInvitedSchedule&&(e=c),j.push(a[c]));for(k=h-e,k===h&&j.unshift({
startTimeText:nLang.r.noPreviousSchedule}),l=g-(k+a.length),l===h&&j.push({startTimeText:nLang.r.noNextSchedule
}),c=0,d=j.length;d>c;c++)f=j[c],i.push(n.replace(/\{currentSchedule\}/g,f.isInvitedSchedule?"current_schedule":"").replace(/\{startTimeText\}/g,_getScheduleTimeText(f.startTimeDisplayFlag,f.startTimeText)).replace(/\{scheduleTerm\}/g,_getScheduleTermText(f.scheduleTerm,f.startTimeDisplayFlag)).replace(/\{scheduleName\}/g,f.scheduleName||""));
return m=m.replace(/\{List\}/g,i.join(""))},_getScheduleTimeText=function(a,b){return b?b:"FROM_PAST"===a?nLang.r.previousDay:"ALL_DAY"===a?nLang.r.allDay:"";
},_getScheduleTermText=function(a,b){if("FROM_PAST"===b)return"";if("ALL_DAY"===b)return"";if(!a)return"";
var c=parseInt(a),d=Math.floor(c/60),e=c%60,f="",g="",h="";return d>0&&(f=d+nLang.r.hour),e>0&&(g=e+nLang.r.minute),
d>0&&e>0&&(h=" "),"("+f+h+g+")"};_linkify=function(a){var b,c,d,e,f,g,h,i,j,k,l=a;if(a.hasChildNodes())for(c=a.childNodes,
d=0;d<c.length;d++)b=c[d],"A"!=b.nodeName&&a.replaceChild(_linkify(b),b);else if(3===a.nodeType){for(h=document.createDocumentFragment(),
e=a.nodeValue||"";e&&(j=/(?![^<]*>)((https?:\/\/[^\s"'<>]{2,1500})|(www\.[^\s"'<>]{2,1500}\.[^\s"'<>]{2,1500}))/gi.exec(e),
j&&(f=j[0],g=document.createTextNode(f),k=j.index,i=document.createElement("a"),i.href=/https?:\/\//i.test(f)?f:"http://"+f,
i.target="_blank",i.appendChild(g)),i);)h.appendChild(document.createTextNode(e.substr(0,k))),h.appendChild(i),
e=e.slice(k+f.length),i=null;e&&h.appendChild(document.createTextNode(e)),h.childNodes.length>0&&(l=h);
}return l};var toggleReadBodyForDoubtSpam=function(){var a=$$.getSingle("#doubt_spam").innerHTML;$Element("readFrame").visible()?($Element("readFrame").hide(),
$$.getSingle("#doubt_spam").innerHTML=a.replace(nLang.c.display_doubt_spam,nLang.c.hide_doubt_spam).replace(nLang.c.hide_spam_body,nLang.c.display_spam_body).replace(/rdh.hide/,"rdh.expose")):($Element("readFrame").show(),
$$.getSingle("#doubt_spam").innerHTML=a.replace(nLang.c.hide_doubt_spam,nLang.c.display_doubt_spam).replace(nLang.c.display_spam_body,nLang.c.hide_spam_body).replace(/rdh.expose/,"rdh.hide"));
},openCalenderOptionPage=function(){if(mEnv.rootDomain.match(/naver.com/))var a="https:";else var a="http:";
var b=a+"//calendar."+mEnv.rootDomain+"/main.nhn#%7B%22sSection%22%3A%22config%22%2C%22oParameter%22%3A%7B%22oOption%22%3A%7B%22selectTab%22%3A%22SCHEDULE%22%7D%7D%7D";
window.open(b,"calendar")},addTrustAddress=function(a,b){if(b){var c={showImageAddress:b};mcCore.requestAjax({
fCallback:$Fn(function(){readSpamMail(null,mCom.nCurrentFolder,!0)},this).bind(),oParameter:c,sUrl:"/json/option/showImageAddress/add/"
})}},toggleConversationReadOptionLayer=function(a){if(a&&a.element){var b="all"==mCom.nCurrentFolder?"mrd_all":0==mCom.nCurrentFolder?"mrd_got":"mrd_els";
ccr(a.element,b+".viewmode",a)}"BUTTON"!=a.element.tagName&&(a.element=$$.getSingle("! button",a.element));
var c=a.element,d=$$.getSingle("#conversationReadOptionLayer"),e=$Element(d);e.visible()?myCore.showLayer(c,d):($$.getSingle("li.selected",d)?$Element($$.getSingle("li.selected",d)).removeClass("selected"):null,
$Element($$.getSingle("li[data-conversationread="+mEnv.conversationUnfoldType+"]",d)).addClass("selected"),
myCore.showLayer(c,d,{direction:"downward",align:"right"},$$.getSingle("li.selected a",d)))},setConversationReadOption=function(a,b){
return hideAllLayer(),mEnv.conversationUnfoldType==b?void applyConversationRead():void mcCore.requestAjax({
fCallback:$Fn(function(){mEnv.conversationUnfoldType=b,applyConversationRead()},this).bind(),oParameter:{
unfoldType:b},sUrl:"/json/option/conversationView/set/"})},applyConversationRead=function(){clearInterval(mCom.oUnfoldCheck),
mCom.oUnfoldCheck=null;var a=$Element($$.getSingle("div.coverWrap",mCom.elRead)),b=a.indexOf($Element($$.getSingle("div.cv_card.selected",mCom.elRead))),c=$$(".icoRead.no",a).length;
switch(mEnv.conversationUnfoldType){case"auto":mCom.bCheckToggleCard=!0,mCom.oUnfoldCheck=setInterval(fnUnfoldCheck,100),
!c&&mfCore.updateFolder();break;case"unread":for(var d=$$(".cv_card.fold",mCom.elRead),e=0,f=0,g=d.length;g>f;f++){
var h=d[f];if($$.getSingle(".icoRead.no",h)){var i=++e!=c,j=$Element(h);if(j.attr("data-check","true"),
a.indexOf(j)<b)toggleCard(null,h,!0,!1,!1,!0,i);else{var k=parseInt(f/5,10);k>0?setTimeout($Fn(function(a,b){
toggleCard(null,a,!0,!1,!0,!0,b)},this).bind(h,i),1e3*k*2):toggleCard(null,h,!0,!1,!0,!0,i)}}}!c&&mfCore.updateFolder();
break;case"all":for(var d=$$(".cv_card.fold",mCom.elRead),f=0,g=d.length;g>f;f++){var h=d[f],j=$Element(h),i=f!=g-1;
if(j.attr("data-check","true"),a.indexOf(j)<b)toggleCard(null,h,!0,!1,!1,!0,i);else{var k=parseInt(f/5,10);
k>0?setTimeout($Fn(function(a,b){toggleCard(null,a,!0,!1,!0,!0,b)},this).bind(h,i),1e3*k*2):toggleCard(null,h,!0,!1,!0,!0,i);
}}}$$.getSingle(".icoRead.no",mCom.elRead)?$Element("converstaionReadAllBtn").className("_c1(mlCore|readMail|read_conversation|all)").html(nLang.l.read_all):$Element("converstaionReadAllBtn").className("_c1(mlCore|readMail|unread_conversation|all)").html(nLang.l.unread_all);
},isUseQuickReply=function(a){if(_bIsReadEML)return!1;if(a){a+="";var b=$A(["1","2","4","5","6"]);if(b.has(a)||Number(a)>=1e7)return!1;
}return mEnv.useQuickReply},getQuickReplyList=function(){for(var a=" ("+nLang.r.sticker+")",b=[],c=mEnv.quickReplyList||[],d=0,e=c.length;e>d;d++){
var f=c[d];b.push({sn:f.sn,content:f.content.replace(/<img[^<]+>/gi,a).replace(/(<\/p>|<br>|<\/br>)/gi," ").replace(/<[^<]+>/gi,"")
})}return b},addQuickReplyUI=function(a,b){$$.getSingle("div.quick_reply",a)&&$Element($$.getSingle("div.quick_reply",a)).leave();
for(var c='<div class="quick_reply _c1(mrCore|openQuickReplyUI) _stopDefault"><div class="presentation"><a href="#" class="choose_text _c1(mrCore|toggleQuickReplyListLayer) _ccr(rdq.select) _stopDefault"><span class="ico_qreply"></span>'+nLang.r.select_quickReply+'<span class="cnt"> {quickReplyListSize}</span></a> <a href="#" class="ico_win _c1(mrCore|openQuickReplyWritePopup|replyAll|{mailSN}) _ccr(rdq.newwindow) _stopDefault"><i class="blind">'+nLang.c.mail_write+'</i></a><div class="dh_layer" style="right:100%;top:0;display:none;"><div class="type_a autotext"><ul class="send_name">{quickReplyList}</ul><div class="setting"><a href="#" class="_c1(mcCore|showOptionLayer|quickReply_option) _ccr(rdq.quickresponse) _stopDefault">'+nLang.o.quickReply_option+'<span class="ico_setup"></span></a></div></div><!--[if IE]><iframe class="ie6fix" title="빈프레임" ></iframe><![endif]--></div></div><div class="reply_cover" style="font-family:{quickReplyFontFamily}"><span class="edit_placeholder">'+nLang.r.click_quickReply+'</span><div contenteditable="true" class="edit_area" style="font-size:{quickReplyFontSize}"></div></div><div class="btns"><button class="_c1(mrCore|sendQuickReply|reply|{mailSN}) _ccr(rdq.reply) _stopDefault">'+nLang.r.respond+'</button> <button class="_c1(mrCore|sendQuickReply|replyAll|{mailSN}) _ccr(rdq.replyall) _stopDefault"><strong>'+nLang.r.respond_all+"</strong></button></div></div>",d={},e="",f=getQuickReplyList(),g=0,h=f.length;h>g;g++)e+='<li><a href="#" class="_c1(mrCore|selectQuickReply|'+f[g].sn+') _stopDefault">'+f[g].content+"</a></li>";
if(d.quickReplyList=e,d.quickReplyListSize=f.length,d.mailSN=b,mEnv.isUseNewEditor){d.quickReplyFontFamily=mEnv.fontName;
var g,i,j;for(g=0,i=_mailEditorDefaultFontSizeList.length;i>g;g++)if(_mailEditorDefaultFontSizeList[g].key===mEnv.fontSize){
j=_mailEditorDefaultFontSizeList[g].value;break}j=j||_mailEditorDefaultFontSizeList[2],d.quickReplyFontSize=j;
}else d.quickReplyFontFamily=mEnv.fontName,d.quickReplyFontSize=mEnv.fontSize+"pt";if($$.getSingle("div.cv_card",mCom.elRead))$Element(a).appendHTML("<br>"+mcCore.improvedTemplate(c,d));else{
var k=getCreteriaEl(a);k?$Element(k).beforeHTML("<br>"+mcCore.improvedTemplate(c,d)):$Element(a).appendHTML("<br>"+mcCore.improvedTemplate(c,d));
}var l=$Element(a).query(".edit_area");l.attach({focus:function(){$Element(a).query(".quick_reply").addClass("infocus");
},blur:function(){$Element(a).query(".quick_reply").removeClass("infocus")}})},openQuickReplyUI=function(a){
var b,c,d,e=$$.getSingle("! div.quick_reply",a.element);if(mEnv.isUseNewEditor){for(b=0,c=_mailEditorDefaultFontSizeList.length;c>b;b++)if(_mailEditorDefaultFontSizeList[b].key===mEnv.fontSize){
d=_mailEditorDefaultFontSizeList[b].value;break}d=d||_mailEditorDefaultFontSizeList[2]}else d=mEnv.fontSize+"pt";
if(e){var f=$Element(e);f.hasClass("active")||mcCore.requestAjax({fCallback:$Fn(function(a){var b="",c=null,g=0;
if(mcCore.isNcs()||mcCore.isNwe()?(c=a.signList[0],"true"==c.useDefaultSignForRefw&&parseInt(c.defaultSignForRefw,10)>-1&&(g=c.defaultSignForRefw)):mcCore.isNaver()&&(c=a.signList[0],
g=c.defaultSign),c)for(var h=0,i=c.signInfoList.length;i>h;h++)g==c.signInfoList[h].keyNum&&c.signInfoList[h].contents&&(b=c.signInfoList[h].contents);
var j=$$.getSingle("div.quick_reply .edit_area"),k="undefined"!=typeof j.style.webkitTransition||"undefined"!=typeof j.style.transition;
if(k&&(j.style.height="10px",j.style.webkitTransition="all ease 0.2s",j.style.transition="all ease 0.2s",
j.style.overflowY="hidden"),f.addClass("active"),$$.getSingle(".edit_placeholder",e).innerHTML=nLang.r.click_quickReply,
$$.getSingle("div.quick_reply .edit_area").innerHTML=refineTag('<div style="font-size:'+d+"; font-family:"+mEnv.fontName+';"><br>'+b+"</div>").replace(/\n/g,"<br>"),
k){var l=j.scrollHeight;j.style.height=l+"px",setTimeout($Fn(function(){j.style.transition="",j.style.webkitTransition="",
j.style.overflowY="",j.style.height=""},this).bind(),200)}},this).bind(),oParameter:{},sUrl:"/json/option/sign/get"
})}},toggleQuickReplyListLayer=function(){var a=$$.getSingle("div.quick_reply .dh_layer"),b=$Element(a);
b.visible()?hideAllLayer():(mCom.hasNoOpener&&$Element($$.getSingle("div.setting",a)).hide(),hideAllLayer(),
b.show(),mCom.aVisibleLayerList.push(b))},selectQuickReply=function(a,b){function c(a,b){for(var c=b;c;){
if(c===a)return!0;c=c.parentNode}return!1}function d(a,b){var d,e,f;window.getSelection?(d=window.getSelection(),
d.getRangeAt&&d.rangeCount&&(e=d.getRangeAt(0),c(b,e.commonAncestorContainer)?(e.deleteContents(),e.insertNode(a)):b.appendChild(a))):document.selection&&document.selection.createRange&&(e=document.selection.createRange(),
c(b,e.parentElement())?(f=3==a.nodeType?a.data:a.outerHTML,e.pasteHTML(f)):b.appendChild(a))}hideAllLayer();
var e,f,g;if(mEnv.isUseNewEditor){for(var e=0,f=_mailEditorDefaultFontSizeList.length;f>e;e++)if(_mailEditorDefaultFontSizeList[e].key===mEnv.fontSize){
g=_mailEditorDefaultFontSizeList[e].value;break}g=g||_mailEditorDefaultFontSizeList[2]}else g=mEnv.fontSize+"pt";
var h=mEnv.quickReplyList;for(e=0,nLen=h.length;nLen>e;e++){var i=h[e];if(b==i.sn){var j=$$.getSingle("div.quick_reply .edit_area").innerHTML;
j?(resultNode=$(refineTag('<div style="font-size:'+g+"; font-family:"+mEnv.fontName+';">'+i.content)),
d(resultNode,$$.getSingle("div.quick_reply .edit_area"))):(resultNode=refineTag('<div style="font-size:'+g+"; font-family:"+mEnv.fontName+';">'+i.content),
$$.getSingle("div.quick_reply .edit_area").innerHTML=resultNode);var k,l;window.getSelection&&document.createRange?(l=document.createRange(),
l.selectNodeContents(resultNode),k=window.getSelection(),k.removeAllRanges(),k.addRange(l)):document.body.createTextRange&&(l=document.body.createTextRange(),
l.moveToElementText(resultNode),l.select());break}}},openQuickReplyWritePopup=function(a,b,c){if("replyAll"!==b||!mEnv.receiveByBcc||confirm(nLang.w.bcc_reply_all)){
if(!mEnv.fontSize)try{mEnv.fontSize=opener.mEnv.fontSize,mEnv.fontName=opener.mEnv.fontName}catch(d){}
var e,f,g;if(mEnv.isUseNewEditor){for(e=0,f=_mailEditorDefaultFontSizeList.length;f>e;e++)if(_mailEditorDefaultFontSizeList[e].key===mEnv.fontSize){
g=_mailEditorDefaultFontSizeList[e].value;break}g=g||_mailEditorDefaultFontSizeList[2]}else g=mEnv.fontSize+"pt";
var h="";h+='<div style="font-size:'+g+"; font-family:"+mEnv.fontName+';">',h+=$$.getSingle("div.quick_reply .edit_area").innerHTML,
h+="</div>",h=encodeURIComponent(h);var i="/write/popup/?orderType="+b;if(c&&(i+="&lists="+c),mEnv.useStandardHeight)var j=mCom.nEditorHeight+321;else var j=mCom.nEditorExtHeight+321;
(mcCore.isNcs()||mcCore.isNwe())&&(j+=62);var k=mcCore.getPopupWindowWidthWith(900),l="width="+k+",height="+j+",top=50,left=50,resizable=yes,scrollbars=yes";
openWindowWithPost(i,"",["body"],[h],l)}},cleanQuickReplyUI=function(a){var b=$$.getSingle("div.quick_reply",mCom.elRead);
if(b){var c=$$.getSingle(".edit_area",b);$Element(b).removeClass("active"),c.innerHTML="",a&&($$.getSingle(".edit_placeholder",b).innerHTML=a,
setTimeout($Fn(function(){var a=$$.getSingle(".edit_placeholder",b);a&&(a.innerHTML=nLang.r.click_quickReply);
},this).bind(),2e3))}},sendmail=function(a,b){var c={orderType:a,lists:b};mcCore.requestAjax({fCallback:$Fn(function(a){
var b,c,d,e=a.writeBody,f="",g="",h="";if(mEnv.isUseNewEditor){for(b=0,c=_mailEditorDefaultFontSizeList.length;c>b;b++)if(_mailEditorDefaultFontSizeList[b].key===mEnv.fontSize){
d=_mailEditorDefaultFontSizeList[b].value;break}d=d||_mailEditorDefaultFontSizeList[2]}else d=mEnv.fontSize+"pt";
if(e.toList)for(var b=0;b<e.toList.length;b++)f+=(e.toList[b].name?e.toList[b].name:"")+"<"+e.toList[b].email+">;";
if(e.ccList)for(var b=0;b<e.ccList.length;b++)g+=(e.ccList[b].name?e.ccList[b].name:"")+"<"+e.ccList[b].email+">;";
h+='<div style="font-size:'+d+"; font-family:"+mEnv.fontName+';">',h+=$$.getSingle("div.quick_reply .edit_area").innerHTML,
h+="<br>",h+="</div>",h+=refineTag(e.mailContents);var i={senderName:e.selectedFromName,to:f,cc:g,subject:e.subject,
body:h,saveSentBox:mEnv.saveSentMail,type:e.orderType,attachID:e.attachId,lists:e.orderParam,threadId:e.threadId||""
};mcCore.requestAjax({fCallback:$Fn(function(a){cleanQuickReplyUI(a.ResultMessage)},this).bind(),oParameter:i,
sUrl:"/json/write/send"})},this).bind(),oParameter:c,sUrl:"/json/write/"})},sendQuickReply=function(a,b,c){
if("replyAll"!==b||!mEnv.receiveByBcc||confirm(nLang.w.bcc_reply_all)){var d="reply"==b?nLang.r.confirm_quickReply1:nLang.r.confirm_quickReply2;
confirm(d)&&(mcCore.isNcs()?sendmail(b,c):mrCaptcha.showCaptcha(a,$Fn(mrCore.sendmail,mrCore).bind(b,c)));
}},getTranslateNotiTemplate=function(a){var b=$Agent().navigator();if(_bIsTranslate||b.ie&&b.version<=8)return"";
var c,d,e=a.mailSN,f=a.preview||"",g=a.subject||"",h=countKorean(f.substr(0,30))+countKorean(g),i=countJapanese(f.substr(0,50))+countJapanese(g),j="";
return oDir.target=cCode.substr(0,2),"ko_KR"===cCode&&i>1?(c="일본어",d="한국어",oDir.source="ja"):"ja_JP"===cCode&&h>1&&(c="韓国語",
d="日本語",oDir.source="ko"),c&&(j=mrTemplate.sTranslateNotiTemplate.replace(/\{MailSN}/,e),j=j.replace(/\{Source}/,c).replace(/\{Target}/,d)),
j},countChinese=function(a){if(countJapanese(a))return 0;var b=a.match(/[\u4E00-\u9FFF]/g);return b?b.length:0;
},countJapanese=function(a){var b=a.match(/[\u3040-\u30FF]/g);return b?b.length:0},countKorean=function(a){
var b=a.match(/[\uAC00-\uD7AF]/g);return b?b.length:0},countEnglishWord=function(a){var b=a.match(/(\s*[a-zA-Z.,?]+\s){3}/g);
return b?b.length:0},loadTranlsateReadPopup=function(){function a(){var a=setInterval(function(){"undefined"!=typeof mrTranslate&&"undefined"!=typeof Translator&&(clearInterval(a),
mrTranslate.init())},30)}var b,c=mCom.buildVersion,d=mCom.serverEnv,e="local"===d;b=e?["/js_lib/translator/translator.js","/js_src/com/nhncorp/mail/translate/translate.read.js"]:["/js/translator_"+c+".min.js","/js/uglified_translate_read_"+c+".js"],
jindo.$A(b).forEach(function(a){var b=document.createElement("script"),c=document.getElementsByTagName("script")[0];
b.src=a,c.parentNode.insertBefore(b,c)}),a()},oLanguageDetect={ko:[countJapanese,countEnglishWord,countChinese],
en:[countKorean],ja:[countKorean],zh_CN:[countChinese],zh_TW:[countChinese]},oLanguagePair={ko:["ja","en","zh_CN"],
en:["ko"],ja:["ko"],zh_CN:["ko"],zh_TW:["ko"]},getTranslateDir=function(a){if(a){var b=cCode.substr(0,2)||"ko";
"zh"===b&&(b=cCode);for(var c=oLanguageDetect[b],d=[],e=0,f=c.length;f>e;e++)d.push(c[e](a));var g=Math.max.apply(Math,d);
if(0===g)oDir.source=getDefaultTranslateSource();else{var h=$A(d).indexOf(g);oDir.source=oLanguagePair[b][h];
}oDir.target=b}return"undefined"==typeof oDir.source&&(oDir.source=getDefaultTranslateSource()),"undefined"==typeof oDir.target&&(oDir.target=cCode.substr(0,2)||"ko"),
oDir},getDefaultTranslateSource=function(){var a,b=cCode.substr(0,2);return a="ko"===b?"ja":/(ja|en|zh)/.test(b)?"ko":b||"ko";
},_drawFakeNotiArea=function(a){var b=$Element("fake_noti_area");if(b)if(mcCore.isCorrespondFlag(a.status,"0x4000000000")){
var c=mrTemplate.sFakeAlertTemplate;c=mcCore.isCorrespondFlag(a.status,"0x80000000000")?c.replace("{FakeDesc}",nLang.r.fake_mail_noti_desc_no_sender):a.from.email&&a.from.email.split("@").length>1?c.replace("{FakeDesc}",nLang.r.fake_mail_noti_desc).replace("{DOMAINSTRING}",a.from.email.split("@")[1]):c.replace("{FakeDesc}",nLang.r.fake_mail_noti_desc).replace("{DOMAINSTRING}",""),
b.html(c),b.show()}else if(mcCore.isCorrespondFlag(a.status,"0x00800000")){var c=mrTemplate.sFakeAlertTemplate;
c=c.replace("{FakeDesc}",nLang.r.fake_mail_noti_desc_suspicious_sender),b.html(c),b.show()}else b.html(""),
b.hide()},_drawWorkflowArea=function(a){var b=a.mailSN,c=a.workflow;if(mcCore.isNcs()&&c&&mcCore.checkWorkflowStatus&&mcCore.checkWorkflowStatus(a.status)){
var d=c.url;if(!$$.getSingle("#ApproveArea_"+b)){var e=$Element($$.getSingle(".cv_card[data-mailsn='"+b+"'] .viewTitle"));
e&&e.appendHTML("<div id='ApproveArea_"+b+"' class='ApproveArea' style='display:none'></div>")}var f=mrTemplate.sApproveTemplate,g=c.status||"before",h=" ",i="",j="",k=c.subject||"";
switch(g){case"accept":i="selected",j="disabled";break;case"reject":i="disabled",j="selected";break;case"before":
i="_c1(mrCore|setWorkflow|approval|"+b+"|"+encodeURIComponent(d)+"|"+a.messageId+")",j="_c1(mrCore|setWorkflow|disapproval|"+b+"|"+encodeURIComponent(d)+"|"+a.messageId+")";
}f=f.replace(/\{Approval\}/g,i).replace(/\{Disapproval\}/g,j).replace(/\{Sender\}/g,k).replace(/\{RejectReason\}/g,h).replace(/\{MailSN\}/g,b),
f=f.replace(nLang.c.sender,"제목").replace(nLang.r.request_authorize,"Workflow Action").replace(new RegExp(nLang.r.rejection_reason,"g"),"Comment").replace(/disabled="" readonly=""/,"");
var l="ApproveArea_"+b;$Element(l)&&($Element(l).html(f).show(),h&&$Element("disapproval_reason2_"+b).show());
}},setWorkflow=function(a,b,c,d,e){var f,g=$$.getSingle("#ApproveArea_"+c);if("approval"==b?(myCore.showConfirmLayer(null,nLang.r.already_authorized),
$$.getSingle(".btn_approval",g).className="btn_approval selected",$$.getSingle(".btn_disapproval",g).className="btn_disapproval disabled",
f="accept"):"disapproval"==b&&(myCore.showConfirmLayer(null,nLang.r.already_rejected),$$.getSingle(".btn_approval",g).className="btn_approval disabled",
$$.getSingle(".btn_disapproval",g).className="btn_disapproval selected",f="reject"),b){d=decodeURIComponent(d);
var h=$Element("disap_reason2_"+c).text();mcCore.requestAjax({oParameter:{url:d,comment:h,response:f,
mailSN:c,messageId:e},sUrl:"/workflow/respond",fCallback:function(a){a.tokenResult}})}},_getApproval=function(a,b,c){
if(!$$.getSingle("#ApproveArea_"+a)){var d=$Element($$.getSingle(".cv_card[data-mailsn='"+a+"'] .viewTitle"));
d&&d.appendHTML("<div id='ApproveArea_"+a+"' class='ApproveArea' style='display:none'></div>")}return mcCore.requestAjax({
fCallback:$Fn(_getApprovalCallBack,this).bind(c,a),oParameter:{mailSN:a,messageId:b},sUrl:"/json/approve/get/"
}),mCom.oMessageId||(mCom.oMessageId={}),mCom.oMessageId[a]=b,!0},_getApprovalCallBack=function(a,b,c){
var d=mrTemplate.sApproveTemplate,e=c.status,f=c.rejectMsg||"",g="",h="",i=a.name?a.name+"("+a.email+")":a.email||"";
switch(e){case"accept":g="selected",h="disabled";break;case"reject":g="disabled",h="selected";break;case"before":
g="_c1(mrCore|setApproval|approval|"+b+")",h="_c1(mrCore|toggleRejectReason|show|"+b+")"}d=d.replace(/\{Approval\}/g,g).replace(/\{Disapproval\}/g,h).replace(/\{Sender\}/g,i).replace(/\{RejectReason\}/g,f).replace(/\{MailSN\}/g,b);
var j="ApproveArea_"+b;$Element(j)&&($Element(j).html(d).show(),f&&$Element("disapproval_reason2_"+b).show());
},setApproval=function(a,b,c){var d={mailSN:c,messageId:mCom.oMessageId[c]},e="/json/approve/";return"approval"==b?e+="accept":"disapproval"==b&&(e+="reject",
d.rejectMessage=$Element("disap_reason_"+c).text()),mcCore.requestAjax({fCallback:$Fn(_setApprovalCallback,this).bind(b,d),
oParameter:d,sUrl:e}),!0},_setApprovalCallback=function(a,b,c){var d=c.status,e=$$.getSingle("#ApproveArea_"+b.mailSN);
"approval"==a&&"success"==d||"alreadyAccept"==d?(myCore.showConfirmLayer(null,nLang.r.already_authorized),
$$.getSingle(".btn_approval",e).className="btn_approval selected",$$.getSingle(".btn_disapproval",e).className="btn_disapproval disabled"):("disapproval"==a&&"success"==d||"alreadyReject"==d)&&(myCore.showConfirmLayer(null,nLang.r.already_rejected),
$$.getSingle(".btn_approval",e).className="btn_approval disabled",$$.getSingle(".btn_disapproval",e).className="btn_disapproval selected",
toggleRejectReason(null,"hide",b.mailSN),"disapproval"==a&&($Element("disap_reason2_"+b.mailSN).text(b.rejectMessage),
$Element("disapproval_reason2_"+b.mailSN).show()))},toggleRejectReason=function(a,b,c){"show"==b?$Element("disapproval_reason_"+c).show():$Element("disapproval_reason_"+c).hide();
},withdrawAttach=function(a,b){b&&confirm(nLang.r.attach_withdraw_desc2)&&mcCore.requestAjax({sUrl:"/json/bigfile/delete",
oParameter:{mailSN:b},fCallback:wtihdrawAttachCallback})},wtihdrawAttachCallback=function(a){""===a.Message&&$Element($$.getSingle(".attach_withdraw")).hide();
},setCloudSaveAllData=function(a){for(var b,c,d=["service"],e=["mail"],f=[],g=a.attachList.attachInfo.length,h=0;g>h;h++)b=a.attachList.attachInfo[h],
mcCore.isBlockedExtension(b.realFilename)?f.push(b.realFilename):(c=[window.location.protocol+"//",mEnv.downloadServerInfo,"/file/download/each/","?attachType=normal","&mailSN=",a.mailInfo.mailSN,"&attachIndex=",b.contentSN,"&mimefilename=","&offset=","&size=",b.decodedContentSize,"&encode=","&attFN=","&charset=",b.charset,"&filetype=","&basedate=","&domain=",document.location.host].join(""),
d.push("resource"),e.push(JSON.stringify({key:"",name:mcCore.restoreSpecialChar(b.realFilename)||nLang.l.no_title,
size:b.decodedContentSize,downloadUrl:c})));mCom.oCloudSaveData[a.mailInfo.mailSN]={keys:d,values:e,
blockFileList:f,attachCount:g}},_getRemindDateHtml=function(a,b){if(mcCore.envUseRemind()&&(mcCore.isCorrespondFlag(a.status,"0x20000000000")||mcCore.isCorrespondFlag(a.status,"0x40000000000"))){
var c,d;return mcCore.isCorrespondFlag(a.status,"0x40000000000")?(c="remind_date remind_complete",d=nLang.l.remind_complete):(c="remind_date",
d=nLang.l.remind_scheduled),'<p class="read_remind_date '+c+'">'+myRemind.getRemindDateForRead(d,a.remindAt,b)+"</p>";
}return mcCore.envUseRemind()?'<p class="read_remind_date"></p>':""},makeInviteWebMessage=function(a){
var b=a.toList||[],c=a.ccList||[],d=!1,e=mEnv.mailAddress,f="",g=makeQueryForWebMessenger(a);if(b.length<2&&c.length<2){
var h=b[0],i=c[0];e!==a.from.email||h&&e!==h.email||i&&e!==i.email||(d=!0)}return mEnv.useWebMessage&&!d&&(f='<a href="#" class="color_id _c1(mrCore|inviteWebMessage|'+g+') _ccr(rdh.message) _stopDefault">'+nLang.w.join_web_message+"</a>"),
f},preventBubble=function(){},copyRange=null,copyReadBody=function(a){var b=window.getSelection();if(!copyRange&&!b.isCollapsed&&(copyRange=b.getRangeAt(0),
copyRange.startContainer&&$Element(copyRange.startContainer).parent(function(a){return"readFrame"===a.attr("id")||a.hasClass("readFrame");
}).length&&!$Element(copyRange.startContainer).parent(function(a){return"table"===a.$value().tagName.toLowerCase();
}).length)){a.stopDefault();var c=copyRange.cloneContents(),d=document.createElement("div");d.appendChild(c),
d.setAttribute("style","position:absolute;top:-9999px;"),document.body.appendChild(d),removeZWSInInlineText(d),
b.removeAllRanges();var e=document.createRange();e.selectNode(d),b.addRange(e);try{d.setAttribute("style",""),
document.execCommand("copy")}catch(f){}document.body.removeChild(d),b.removeAllRanges(),b.addRange(copyRange),
copyRange=null}},removeZWSInInlineText=function(a){for(var b,c=document.createNodeIterator(a,NodeFilter.SHOW_TEXT,null,!1),d=0,e=(new Date).getTime();b=c.nextNode();)if(d++,
ZWS.test(b.nodeValue)){var f=getBlockAncestor(b).textContent;if(hasNoContentExceptZWS(f))continue;b.nodeValue=b.nodeValue.replace(ZWS,"");
}"function"==typeof __nvl_error&&__nvl_error("Copy Mail Body - number of text nodes: "+d+", elapsed time: "+((new Date).getTime()-e));
},isBlockElement=function(a){return BLOCK_NODE_MAP[a.tagName.toLowerCase()]},isDisplayBlockElement=function(a){
return"block"===a.style.display||"inline-block"===a.style.display},hasNoContentExceptZWS=function(a){
return""===a.replace(ZWS,"")},getBlockAncestor=function(a){for(var b=a.parentNode;;){if(isBlockElement(b)||isDisplayBlockElement(b))break;
b=b.parentNode}return b},scrapMailToMemo=function(a){var b=mlCore.getCurMailList();if(myCore.hideAllLayer(),
1!==b.length())return void alert(nLang.c.select_only_one);var c=b.get(0);if(mCom.translatedSubject=void 0,
mCom.translatedBody=void 0,_bIsTranslate){var d=$$(".translateTarget");mCom.translatedSubject=d[0].textContent,
mCom.translatedBody=d[1].innerHTML}mfCore.popupWrite(a,"readToMe",c.mailSN)};return{middleClickTitle:middleClickTitle,
readMailFromCancelNoti:readMailFromCancelNoti,readMailFromCancelNotiCallback:readMailFromCancelNotiCallback,
clickTitle:clickTitle,clickTitleForThead:clickTitleForThead,readSpamMail:readSpamMail,retrieveMail:retrieveMail,
readMail:readMail,readMailAtPopup:readMailAtPopup,popupRead:popupRead,toggleExpand:toggleExpand,setSchedule:setSchedule,
toggleAttachArea:toggleAttachArea,readWithNHNViewer:readWithNHNViewer,toTop:toTop,virusDetected:virusDetected,
hideVirusLayer:hideVirusLayer,readPrev:readPrev,readNext:readNext,popupToReadEML:popupToReadEML,useBillMailBox:useBillMailBox,
inviteWebMessage:inviteWebMessage,downloadVirus:downloadVirus,downloadVirusAtEML:downloadVirusAtEML,
deleteFile:deleteFile,moveScroll:moveScroll,printMail:printMail,moveScrollByCursorNum:moveScrollByCursorNum,
attachDownloadFile:attachDownloadFile,cancelSpamMail:cancelSpamMail,rejectKeywordMail:rejectKeywordMail,
systemCancelSpam:systemCancelSpam,showOptionPage:showOptionPage,toggleReadBodyForDoubtSpam:toggleReadBodyForDoubtSpam,
openCalenderOptionPage:openCalenderOptionPage,addTrustAddress:addTrustAddress,_setBrowserTitle:_setBrowserTitle,
toggleExpandForConversation:toggleExpandForConversation,getCreteriaEl:getCreteriaEl,toggleOriginalMsg:toggleOriginalMsg,
toggleCard:toggleCard,selectCard:selectCard,getCardListMailSN:getCardListMailSN,toggleConversationReadOptionLayer:toggleConversationReadOptionLayer,
setConversationReadOption:setConversationReadOption,applyConversationRead:applyConversationRead,isUseQuickReply:isUseQuickReply,
getQuickReplyList:getQuickReplyList,addQuickReplyUI:addQuickReplyUI,openQuickReplyUI:openQuickReplyUI,
cleanQuickReplyUI:cleanQuickReplyUI,toggleQuickReplyListLayer:toggleQuickReplyListLayer,selectQuickReply:selectQuickReply,
openQuickReplyWritePopup:openQuickReplyWritePopup,sendQuickReply:sendQuickReply,sendmail:sendmail,getTranslateDir:getTranslateDir,
setApproval:setApproval,toggleRejectReason:toggleRejectReason,withdrawAttach:withdrawAttach,setWorkflow:setWorkflow,
onClickCalendarResponse:onClickCalendarResponse,addEventToCalendar:addEventToCalendar,preventBubble:preventBubble,
copyReadBody:copyReadBody,scrapMailToMemo:scrapMailToMemo}}(),mrCaptcha=function(){var a=$Element("captchaDivQReply"),b=$Element("sendAfterReviewBg"),c=$Element("capchaImgForRead"),d=$$.getSingle("#capchaKeyForRead"),e=mrCore.sendQuickReply,f="",g="",h=function(a,b){
if($Element("capchaFaultMsgForRead").hide(),e=b,"undefined"!=typeof mEnv)var c=mEnv.mailId;else if(opener&&opener.m&&opener.m.info&&opener.mEnv)var c=opener.mEnv.mailId;else var c="test";
mcCore.requestAjax({fCallback:$Fn(i,this).bind(),oParameter:{u:c},sUrl:"/captcha/check/"})},i=function(a){
a.isCaptcha||a.key?(m("SHOW"),f=a.key,g=a.mode,c.attr("src",a.imgUrl+"&key="+f),d.value="",d.focus()):e();
},j=function(){var a=d.value;return a?void mcCore.requestAjax({fCallback:$Fn(k,this).bind(),oParameter:{
key:f,value:a},sUrl:"/captcha/confirm/"}):($Element("capchaFaultMsgForRead").show(),void $Element("capchaFaultMsgForRead").html(nLang.w.type_capcha));
},k=function(a){"OK"==a.Result?a.isSuccess?(m("HIDE"),e()):($Element("capchaFaultMsgForRead").show(),
$Element("capchaFaultMsgForRead").html(nLang.w.invalid_capcha),l()):alert(a.Message)},l=function(){mcCore.requestAjax({
fCallback:$Fn(i,this).bind(),oParameter:{mode:g},sUrl:"/captcha/create/"})},m=function(c){"SHOW"==c?(a.show(),
b.show()):"HIDE"==c&&(a.hide(),b.hide())};return{showCaptcha:h,submitCaptcha:j,refreshCaptcha:l,toggleCaptchaLayer:m
}}(),mrTemplate=function(){oListTemplate={head:'<div class="relMails"><div class="relBox"><span class="tit">'+nLang.r.relative_mail+'</span> <strong>{RelNumber}</strong> <a href="javascript:;" title="'+nLang.c.show_help_page+'" onclick="ccr(this, \'rdr.relatedhelp\', event)" class="_c1(myCore|showRelHelp)"><img src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif" width="14" height="14" alt="'+nLang.c.help_topic+'" class="help"></a>{ShowAll}<div class="relativeList"><ul class="mailList readUnder">',
body:'<li class="{NotRead} _c1(mrCore|{ReadAction}|{MailSN}) {ccrf} _d2(mcDragndrop|html5DragStart|thread|{MailSN})" draggable="true"><div class="mTitle"><div class=\'name\'><a href=\'#\' class=\'{SenderAction}\'>{FromName}</a></div><div class="subject">{sendMail}<a href="/read/popup/?nMailId={MailSNOnly}" class="_d2(mcDragndrop|html5DragStart|thread|{MailSN}) _m2(mrCore|middleClickTitle|{MailSNOnly})" draggable="true">{FolderName}{IsEmergency}{SubjectString}</a><a href="#" class="newWindow _c1(mrCore|popupRead|{MailSN}) {ccrf} _stopDefault" title="'+nLang.r.popup_window+'"><span class="spr"><em class="blind">'+nLang.r.popup_window+'</em></span></a></div></div><ul class="mInfo">{PrevNext}<li class="read"><a href="#" class="spr icoRead {IsRead}">{ReadIcon}</a></li><li class="file"><span class="spr {hasFile}"></span></li><li class="iDate" title="'+nLang.r.send_date+'">{ReceivedDate}</li></ul></li>',
tail:"</ul></div></div></div>"},sTranslateNotiTemplate='<div class="translate" id="translateNoti"><span class="ico_translate"></span> <span data-type="source">{Source}</span> <span>→</span> <span data-type="target">{Target}</span> <a href="#" class="_ccr(rdr.translation) _c1(mrCore|popupRead|{MailSN}|translate) _stopDefault">'+nLang.r.open_translate_popup+"</a></div>",
sNoticeTemplate='<table class="relativeView" cellspacing="0"><tbody><tr><td><a id="relationTitleTo" class="to _c1(mrCore|moveScroll|relMails) _stopDefault" href="#rellist">{Notice}</a></td></tr></tbody></table>',
sReadBodyTemplate={head:'<div class="coverWrap">',tail:"</div>"},sViewTitleTemplate='<div class="viewTitle"><h4>{Important} {SecurityLevel} {Title} {PopupRead}</h4><div class="date_cover"><div class="align_cover"><p class="send_date"><span class="blind">'+nLang.l.receipt_date+'</span>{SendDate}</p>{RemindDate}</div><span class="v_basis"></span></div><dl style="display:{TomeView}"><dt class="first-child"><button type="button" class="{ViewMoreAction}"><span class="blind">'+nLang.r.more_view_reciever_toggle+"</span></button> "+nLang.c.sender+'</dt><dd><a href="#" class="{importantAction}" title="{importantText}" style="display:{ShowImportance};" data-senderaddress="{senderAddress}" data-sendername="{fromName}"><span class="spr {importantClass}"><em class="blind">{importantText}</em></span></a><a href="#" class="{SenderAction}">{Sender}</a> <span class="s" style="display:{ShowAddrAction};">{AddAddressToContact}{inviteWebMessage}{InviteEvent}{AddAddressToRejectList}{UseBillMail}</span></dd><div id="fake_noti_area" style="display:none"></div><dt class="to_dt" style="display:{Show};">'+nLang.c.receiver+'</dt><dd class="to_dd" style="display:{Show};">{ToList}</dd>{CcList}{BccList}</dl>{CalArea}</div>',
sFakeAlertTemplate=['<dt class="blind">'+nLang.r.fake_mail_noti+"</dt>",'<dd class="noImgs">{FakeDesc}</dd>'].join(""),
sAttachTemplate=["<div class='attfile_area'>","<h5>","<i class='ico_attach'></i>",nLang.r.normal_attach_file,"<span class='num'><em> {AttachCount}"+nLang.c.unit+"</em>({AttachSizeAll})</span> ","{DownloadAll}","<button type='button' class='attfile_toggle _ccr(rda.fold) _c1(mrCore|toggleAttachArea)'><span class='blind'>"+nLang.c.fold+"</span></button>","</h5>","<p class='virus'> "+nLang.r.auto_virus_check+"</p>","<div id='warning_file' class='noImgs' style='display:{warning_string}'>","<span class='ico_caution'>"+nLang.r.warning_file_string+"</span></div>","<div class='file_list'><ul>{AttachListHTML}</ul></div>{AttachWithdrawHTML}</div>"].join(""),
sAttachWithdrawTemplate=["<div class='attach_withdraw'>","<a href='#' class='btn_withdrawal'>","<span class='ico_withdraw _c1(mrCore|withdrawAttach) _stopDefault' style='cursor:default'></span><span class='label _c1(mrCore|withdrawAttach|{MailSN}) _stopDefault'>"+nLang.r.attach_withdraw+"</span></a>","<span class='description'>"+nLang.r.attach_withdraw_desc1+"</span>","</div>"].join(""),
sFileListTemplate=["<li class='{IsRemoved} {IsBlocked}'>","<span class='el_ct'>","{AttachFileLink}","</a>"," <span class='st'>{HumanReadSize} {ShowHtmlLinkE}</span>","</span>","{AttachFileButton}","<span class='blind'>"+nLang.r.download_pc+"</span></a>","{SaveCloudButton}","<span class='blind'>"+(mcCore.isNaver()?nLang.r.ndrive:nLang.r.officedrive)+"</span></a>","<a class='DeleteAttachList btn_del _c1(mrCore|deleteFile|{DeleteFileInfo}) _ccr(rda.filedel) _stopDefault' href='#'><span class='blind'>"+nLang.r.delete_attach_file+"</span></a> ","<div class='dimmed'></div></li>"].join(""),
sFileListTemplateDirectLink="<a draggable='{UseDraggable}' class='{DragFunction}' target='{DownloadTargetArea}' href='"+window.location.protocol+"//{DownloadServer}/file/download/each/{EncodedFilename}?attachType=normal&mailSN={MailSN}&attachIndex={AttachSN}&virus=1&domain={Domain}&u="+mEnv.mailId+"' title='{ListTitle}'>{SaveAttachListName}",
sFileListTemplateInDirectLink="<a class='_c1(mrCore|attachDownloadFile|"+window.location.protocol+"//{DownloadServer}/file/download/each/{EncodedFilename}?attachType=normal&mailSN={MailSN}&attachIndex={AttachSN}&virus=1&domain={Domain}&u="+mEnv.mailId+"|{showAlert}) _stopDefault' href='javascript:;' title='{ListTitle}'>{SaveAttachListName}",
sFileListTemplateViewerDirectLink="<a class='_c1(mrCore|readWithNHNViewer|{MailSN}|{AttachSN}) _stopDefault' href='javascript:;' title='{ListTitle}' target='_blank'>{SaveAttachListName}",
sFileListTemplateDirectButton="<a class='btn_savepc' title='"+nLang.r.download_pc+"' target='{DownloadTargetArea}' onclick='ccr(this, \"rda.filesave\", event)' href='"+window.location.protocol+"//{DownloadServer}/file/download/each/{EncodedFilename}?attachType=normal&mailSN={MailSN}&attachIndex={AttachSN}&virus=1&domain={Domain}&u="+mEnv.mailId+"'>",
sFileListTemplateInDirectButton="<a class='btn_savepc _ccr(rda.filesave) _c1(mrCore|attachDownloadFile|"+window.location.protocol+"//{DownloadServer}/file/download/each/{EncodedFilename}?attachType=normal&mailSN={MailSN}&attachIndex={AttachSN}&virus=1&domain={Domain}&u="+mEnv.mailId+"|{showAlert}) _stopDefault' title='"+nLang.r.download_pc+"' href='javascript:;'>",
sFileListTemplateBlockedLink="<a class='f_name _c1(myCore|downloadBlocked) _stopDefault' href='javascript:;' title='{ListTitle}'>{SaveAttachListName}",
sFileListTemplateBlockedButton="<a class='btn_savepc _ccr(rda.filesave) _c1(myCore|downloadBlocked) _stopDefault' title='"+nLang.r.download_pc+"' href='javascript:;'>",
sFileListAtEMLTemplate=["<li class='{IsBlocked}'>","<span class='el_ct'>","{AttachFileLink}","</a>"," <span class='st'>{HumanReadSize} {ShowHtmlLinkE}</span></span>","</span>","{AttachFileButton}","<span class='blind'>"+nLang.r.download_pc+"</span></a>","{SaveCloudButton}","<span class='blind'>"+(mcCore.isNaver()?nLang.r.ndrive:nLang.r.officedrive)+"</span></a>","<div class='dimmed'></div>","</li>"].join(""),
sFileListAtEMLTemplateDirectLink="<a target='{DownloadTargetArea}' href='"+window.location.protocol+"//{DownloadServer}/eml/download/?mimeSN={MimeSN}&offset={Offset}&size={Size}&encoding={Encoding}&fileName={FileName}&charset={Charset}&tempFilePostfix={TempFilePostfix}&baseDate={BaseDate}&virus=1&domain={Domain}&u="+mEnv.mailId+"' title='{ListTitle}'>{SaveAttachListName}",
sFileListAtEMLTemplateInDirectLink="<a class='_c1(mrCore|attachDownloadFile|"+window.location.protocol+"//{DownloadServer}/eml/download/?mimeSN={MimeSN}&offset={Offset}&size={Size}&encoding={Encoding}&fileName={FileName}&charset={Charset}&tempFilePostfix={TempFilePostfix}&baseDate={BaseDate}&virus=1&domain={Domain}&u="+mEnv.mailId+"|{showAlert}) _stopDefault' href='javascript:;' title='{ListTitle}'>{SaveAttachListName}",
sFileListAtEMLTemplateDirectButton="<a class='btn_savepc' title='"+nLang.r.download_pc+"' target='{DownloadTargetArea}' onclick='ccr(this, \"rda.filesave\", event)' href='"+window.location.protocol+"//{DownloadServer}/eml/download/?mimeSN={MimeSN}&offset={Offset}&size={Size}&encoding={Encoding}&fileName={FileName}&charset={Charset}&tempFilePostfix={TempFilePostfix}&baseDate={BaseDate}&virus=1&domain={Domain}&u="+mEnv.mailId+"'>",
sFileListAtEMLTemplateInDirectButton="<a class='btn_savepc _ccr(rda.filesave) _c1(mrCore|attachDownloadFile|"+window.location.protocol+"//{DownloadServer}/eml/download/?mimeSN={MimeSN}&offset={Offset}&size={Size}&encoding={Encoding}&fileName={FileName}&charset={Charset}&tempFilePostfix={TempFilePostfix}&baseDate={BaseDate}&virus=1&domain={Domain}&u="+mEnv.mailId+"|{showAlert}) _stopDefault' title='"+nLang.r.download_pc+"' href='javascript:;'>",
sEMLTemplate=["<li class='{IsRemoved} {IsBlocked}'>","<span class='el_ct'>","<a href='#' draggable='{UseDraggable}' class='emlbody f_name {DragFunction} _c1(mrCore|popupToReadEML|{MimeSN}|{Offset}|{Size}|{Encoding}|{TempFilePostfix}|{BaseDate}|{IsRemoved})' title='{ListTitle}'>{SaveAttachListName}","</a>"," <span class='st'>{HumanReadSize} {ShowHtmlLinkE}</span>","</span>","{AttachFileButton}","<span class='blind'>"+nLang.r.download_pc+"</span></a>","{SaveCloudButton}","<span class='blind'>"+(mcCore.isNaver()?nLang.r.ndrive:nLang.r.officedrive)+"</span></a>","<a class='DeleteAttachList btn_del _c1(mrCore|deleteFile|{DeleteFileInfo}) _ccr(rda.filedel) _stopDefault' href='#'>","<span class='blind'>"+nLang.r.delete_attach_file+"</span></a>","<div class='dimmed'></div>","</li>"].join(""),
sEMLTemplateDirectButton="<a class='btn_savepc' title='"+nLang.r.download_pc+"' target='{DownloadTargetArea}' onclick='ccr(this, \"rda.filesave\", event)' href='"+window.location.protocol+"//{DownloadServer}/file/download/each/{EncodedFilename}?mailSN={MailSN}&attachIndex={AttachSN}&virus=1&domain={Domain}'>",
sEMLTemplateInDirectButton="<a class='btn_savepc _ccr(rda.filesave) _c1(mrCore|attachDownloadFile|"+window.location.protocol+"//{DownloadServer}/file/download/each/{EncodedFilename}?mailSN={MailSN}&attachIndex={AttachSN}&virus=1&domain={Domain}|{showAlert}) _stopDefault' href='javascript:;' title='"+nLang.r.download_pc+"'>",
sEMLAtEMLTemplate=["<li>","<span class='el_ct'>","<a href='#' class='emlbody _c1(mrCore|popupToReadEML|{MimeSN}|{Offset}|{Size}|{Encoding}|{TempFilePostfix}|{BaseDate}) _stopDefault' title='{ListTitle}'>{SaveAttachListName}","{ShowHtmlLinkE}","</a>"," <span class='st'>{HumanReadSize}</span>","</span>","{AttachFileButton}","<span class='blind'>"+nLang.r.download_pc+"</span></a>","{SaveCloudButton}","<span class='blind'>"+(mcCore.isNaver()?nLang.r.ndrive:nLang.r.officedrive)+"</span></a>","<div class='dimmed'></div>","</li>"].join(""),
sEMLAtEMLTemplateDirectButton="<a class='btn_savepc' title='"+nLang.r.download_pc+"' target='{DownloadTargetArea}' onclick='ccr(this, \"rda.filesave\", event)' href='"+window.location.protocol+"//{DownloadServer}/eml/download/?mimeSN={MimeSN}&offset={Offset}&size={Size}&encoding={Encoding}&fileName={FileName}&charset={Charset}&tempFilePostfix={TempFilePostfix}&baseDate={BaseDate}&virus=1&domain={Domain}&u="+mEnv.mailId+"'>",
sEMLAtEMLTemplateInDirectButton="<a class='btn_savepc _ccr(rda.filesave) _c1(mrCore|attachDownloadFile|"+window.location.protocol+"//{DownloadServer}/eml/download/?mimeSN={MimeSN}&offset={Offset}&size={Size}&encoding={Encoding}&fileName={FileName}&charset={Charset}&tempFilePostfix={TempFilePostfix}&baseDate={BaseDate}&virus=1&domain={Domain}&u="+mEnv.mailId+"|{showAlert}) _stopDefault' title='"+nLang.r.download_pc+"' href='javascript:;'>",
sAttachTemplateForPrint=["<div class='attfile_area'><h5>"+nLang.r.normal_attach_file+" ","<span class='num'><em>{AttachCount}"+nLang.c.unit+"</em>({AttachSizeAll})</span></h5>","<div class='file_list'><ul>{AttachListHTML}</ul></div></div>"].join(""),
sFileListTemplateForPrint=["<li>","<span class='ellipsis'>","<a target='{DownloadTargetArea}' href='javascript:;'>{SaveAttachListName}</a> <span class='size'>{HumanReadSize}</span></span>","<div class='dimmed'></div></li>"].join(""),
sFileListTemplateCloudButton='<a class=\'btn_savendr\' onclick=\'{DeletedFile}window.open("{NdriveServer}/saveFile.nhn?service=mail&resource={NdriveResource}","ndriveUploadPopup", "scrollbars=no,toolbar=no,location=no,resizable=no,status=no,menubar=no,width=476,height=360");ccr(this, "rda.ndrive", event);\' href=\'javascript:;\' title=\''+(mcCore.isNaver()?nLang.r.save_file_ndrive_tooltip:mcCore.isNcs()?nLang.r.save_file_ncsdrive_tooltip:nLang.r.save_file_drive_tooltip)+"'>",
sFileListTemplateCloudBlockButton="<a class='btn_savendr _c1(myCore|downloadBlocked) _stopDefault' href='javascript:;' title='"+(mcCore.isNaver()?nLang.r.save_file_ndrive_tooltip:mcCore.isNcs()?nLang.r.save_file_ncsdrive_tooltip:nLang.r.save_file_drive_tooltip)+"'>",
sFileListTemplateCloudDisabledButton="<a class='btn_savendr disabled' style='cursor:default;' title='"+(mcCore.isNaver()?nLang.r.save_file_ndrive_tooltip:mcCore.isNcs()?nLang.r.save_file_ncsdrive_tooltip:nLang.r.save_file_drive_tooltip)+"'>",
sImageTemplate=['<div class="img_preview_area">',"<h5>"+nLang.r.preview_image+" <span>("+nLang.r.locate_number_of_image+")</span></h5>",'<table cellpadding="0" cellspacing="0" class="list_att_img">','<caption class="blind">'+nLang.r.preview_attach_image_list+"</caption>",'<colgroup><col><col width="50"><col><col width="50"><col></colgroup><tbody><tr>',"{ImageListHTML}","</tbody></table></div>"].join(""),
sImageListTemplate=["<td>","<div class='img_area'><div class='vert_align'>","<table role='presentation' cellspacing='0' cellpadding='0'><tr><td><a target='_blank' href='/read/image/?mailSN={MailSN}&attachIndex={AttachSN}&contentType={ContentType}&offset={ContentOffset}&size={ContentSize}&mimeSN={MimeSN}&org=1&u=",mEnv.mailId,"' target='_blank'><img src='/read/image/?mailSN={MailSN}&attachIndex={AttachSN}&contentType={ContentType}&offset={ContentOffset}&size={ContentSize}&maxSize=200&mimeSN={MimeSN}&u=",mEnv.mailId,"' {ImageWidth} alt='"+nLang.r.preview_attach_file_image+"'></a></td></tr></table>","</div><div class='img_tit'><a href='"+window.location.protocol+"//{DownloadServer}/file/download/each/{EncodedFilename}?attachType=normal&mailSN={MailSN}&attachIndex={AttachSN}&virus=1&domain={MailDomain}&u=",mEnv.mailId,"'>{Filename}</a></div></div>","</td>"].join(""),
sBlockedImageListTemplate=["<td>","<div class='img_area blocked'><div class='vert_align'>","<table role='presentation' cellspacing='0' cellpadding='0'><tr><td><a class='_c1(myCore|downloadBlocked) _stopDefault'><img src='/read/image/?mailSN={MailSN}&attachIndex={AttachSN}&contentType={ContentType}&offset={ContentOffset}&size={ContentSize}&maxSize=200&mimeSN={MimeSN}&u=",mEnv.mailId,"' {ImageWidth} alt='"+nLang.r.preview_attach_file_image+"'></a></td></tr></table>","</div><div class='img_tit'><a class='_c1(myCore|downloadBlocked) _stopDefault'>{Filename}</a></div></div>","</td>"].join(""),
sHtmlLinkTemplate=["<a href='#' class='btn_preview _ccr(rda.preview) _c1(mrCore|readWithNHNViewer|{MailSN}|{AttachSN}) _stopDefault' title='"+nLang.l.preview_in_web+"' target='_blank'>","<span class='blind'>"+nLang.l.preview+"</span></a>"].join("");
var a=['<button name="accept" {Accept} class="{AcceptAction}" onclick="ccr(this,\'rdc.accept\',event)" type="button"><span class="ico1 _c1()"></span>'+nLang.r.accept+"</button>",'<button name="tentative" {Tentative} class="{TentativeAction}" onclick="ccr(this,\'rdc.undecide\',event)" type="button"><span class="ico2"></span>'+nLang.r.tentative+"</button>",'<button name="reject" {Reject} data-repetitive={isRepetitive} class="{RejectAction}" onclick="ccr(this,\'rdc.refuse\',event)" type="button"><span class="ico3"></span>'+nLang.r.reject+"</button>"].join(""),b=['<button name="accept" {Accept} class="accept {AcceptAction}" onclick="ccr(this,\'rdc.accept\',event)" type="button"><span class="ico _c1()"></span>'+nLang.r.accept+"</button>",'<button name="tentative" {Tentative} class="pending {TentativeAction}" onclick="ccr(this,\'rdc.undecide\',event)" type="button"><span class="ico"></span>'+nLang.r.tentative+"</button>",'<button name="reject" {Reject} data-repetitive={isRepetitive} class="reject {RejectAction}" onclick="ccr(this,\'rdc.refuse\',event)" type="button"><span class="ico"></span>'+nLang.r.reject+"</button>"].join(""),c='<a id="addEventToCalendarBtn" href="javascript:;" class="view_schedule _c1(mrCore|addEventToCalendar|{mailSN}|{actionType})">'+nLang.r.add_event_to_calendar+"</a>",d=["{scheduleList}",'<div class="invite_cal">','<span class="date">',"{scheduleDate}","</span>",'<p class="invite_title">',"{scheduleTitle}","</p>",'<p class="period">',"{schedulePeriod}","</p>",'<p class="place">',"{schedulePlace}","</p>",'<div class="btn_task  _c1(mrCore|preventBubble) _stopBubble">',"{buttonGroup}",'<span id="scheduleDetailBtn" class="detail_cover" {scheduleDetail} >','<span class="bar"></span>','<a id="scheduleDetailAnchor" href="javascript:;" onclick="window.open(\'{scheduleURL}\',\'_blank\'); return false;" class="view_schedule">'+nLang.r.schedule_detail+"</a>","</span>","</div>","</div>",'<div {scheduleInfo} class="apply_info_cover">','<div class="apply_info">',"<p>{scheduleInfoParagraph1}</p>","<p>{scheduleInfoParagraph2}</p>","</div>","</div>"].join("");
return sVirusLayerTemplate=['<div class="hTitle">'+nLang.r.end_virus_check+"<a href='#' class='_c1(mrCore|hideVirusLayer) _stopDefault' title=\""+nLang.c.close+'"><img src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif" width="18" height="17" alt="'+nLang.c.close+'" class="lClose _c1(mrCore|hideVirusLayer) _stopDefault"></a></div>','<div><div class="info1">'+nLang.r.detected_virus+'</div><div class="virus_table"><table cellspacing="0" summary="'+nLang.r.detected_virus_cured_file_list+'"><tr><th scope="row">'+nLang.r.virus_type+'</th><td class="virus">{VIRUSNAME}</td></tr></table></div>','</div><div class="addButton nb">',mcCore.isNwe()?"":'<span><button name="" class="b _c1(mrCore|downloadVirus|{MAILID}|{ATTACHINDEX}|original)">'+nLang.r.download_original_file+"</button></span> ","<span><button class='_c1(mrCore|hideVirusLayer)'>"+nLang.c.close+"</button></span>","</div>"].join(""),
sVirusLayerAtEMLTemplate=['<div class="hTitle">'+nLang.r.end_virus_check+"<a href='#' class='_c1(mrCore|hideVirusLayer) _stopDefault' title=\""+nLang.c.close+'"><img src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif" width="18" height="17" alt="'+nLang.c.close+'" class="lClose _c1(mrCore|hideVirusLayer) _stopDefault"></a></div>','<div><div class="info1">'+nLang.r.detected_virus+'</div><div class="virus_table"><table cellspacing="0" summary="'+nLang.r.detected_virus_cured_file_list+'"><tr><th scope="row">'+nLang.r.virus_type+'</th><td class="virus">{VIRUSNAME}</td></tr></table></div>','</div><div class="addButton nb">',mcCore.isNwe()?"":'<span><button name="" class="b _c1(mrCore|downloadVirusAtEML|{MIMESN}|{OFFSET}|{SIZE}|{ENCODE}|{VIRUSFILE}|{CHARSET}|{TEMPFILEPOSTFIX}|{BASEDATE}|original)">'+nLang.r.download_original_file+"</button></span> ","<span><button class='_c1(mrCore|hideVirusLayer)'>"+nLang.c.close+"</button></span>","</div>"].join(""),
sApproveTemplate=['<div class="approve_request">','<div class="approve_info">','<span class="symbol"></span>','<p class="approve_title">'+nLang.r.request_authorize+"</p>",'<p class="approve_contents">'+nLang.c.sender+" : {Sender}</p>",'<div class="btn_task _c1(mrCore|preventBubble) _stopBubble"><button type="button" class="btn_approval {Approval}"><span class="ico"></span>'+nLang.r.approve_authorize+'</button> <button type="button" class="btn_disapproval {Disapproval}"><span class="ico"></span>'+nLang.r.approve_reject+"</button></div>",'<div id = "disapproval_reason_{MailSN}" class="disapproval_reason" style="display:none"><label class="reason_title" for="disap_reason">'+nLang.r.enter_rejection+"</label>",'<div class="textarea_cover"><textarea id="disap_reason_{MailSN}"></textarea></div>','<div class="btn_task"><p class="desc">'+nLang.r.enter_rejection_optional+'</p><button class="_c1(mrCore|setApproval|disapproval|{MailSN})">'+nLang.r.rejection_confirm+'</button> <button class="_c1(mrCore|toggleRejectReason|hide|{MailSN})">'+nLang.c.cancel+"</button></div>","</div>",'<div id="disapproval_reason2_{MailSN}" class="disapproval_reason" style="display:none"><label class="reason_title" for="disap_reason2">'+nLang.r.rejection_reason+"</label>",'<div class="textarea_cover">	<textarea id="disap_reason2_{MailSN}" disabled="" readonly="">{RejectReason}</textarea></div>',"</div>","</div>","</div>"].join(""),
calendarRejectTemplate='<div id="calendar_response_layer" class="dh_layer" style ="display:none"><div class="layer_content type_cal_res"><span class="ico_caution"></span><h4 id="crl_title" style="display:none">'+nLang.r.cal_response_title_tentative+'</h4><p id="crl_content_multiline" class="desc" style="display:none"><span id="crl_notice1"></span><br><span id="crl_notice2"></span></p><h4 id="crl_content_single" class="desc" style="display:none">'+nLang.r.cal_response_notice_repetitive_reject+'</h4><div class="msg_cover"><label for="crl_message" class="blind">'+nLang.r.cal_response_message+'</label><textarea id="crl_message" class="txtbox" placeholder="'+nLang.r.cal_response_placeholder+'"/>"></textarea></div><div class="btn_area"><button id="crl_confirm" class="b" type="button">'+nLang.r.rejection_confirm+'</button><button id="crl_cancel" type="button" class="_c1(mrCore|onClickCalendarResponse|cancel)">'+nLang.c.cancel+'</button></div><button id="crl_close" type="button" class="btn_close _c1(mrCore|onClickCalendarResponse|cancel)"><span class="blind">레이어 닫기</span></button></div><span class="va_basis"></span></div >',
{oListTemplate:oListTemplate,sTranslateNotiTemplate:sTranslateNotiTemplate,sNoticeTemplate:sNoticeTemplate,
sReadBodyTemplate:sReadBodyTemplate,sViewTitleTemplate:sViewTitleTemplate,sFakeAlertTemplate:sFakeAlertTemplate,
sAttachTemplate:sAttachTemplate,sAttachWithdrawTemplate:sAttachWithdrawTemplate,sFileListTemplate:sFileListTemplate,
sFileListAtEMLTemplate:sFileListAtEMLTemplate,sEMLTemplate:sEMLTemplate,sEMLAtEMLTemplate:sEMLAtEMLTemplate,
sAttachTemplateForPrint:sAttachTemplateForPrint,sFileListTemplateForPrint:sFileListTemplateForPrint,
sImageTemplate:sImageTemplate,sImageListTemplate:sImageListTemplate,sBlockedImageListTemplate:sBlockedImageListTemplate,
sHtmlLinkTemplate:sHtmlLinkTemplate,sScheduleTemplate:d,sScheduleTemplateNaverButtonGroup:a,sScheduleTemplateWorksButtonGroup:b,
scheduleTemplateAddScehdule:c,sVirusLayerTemplate:sVirusLayerTemplate,sVirusLayerAtEMLTemplate:sVirusLayerAtEMLTemplate,
sFileListTemplateDirectLink:sFileListTemplateDirectLink,sFileListTemplateInDirectLink:sFileListTemplateInDirectLink,
sFileListTemplateDirectButton:sFileListTemplateDirectButton,sFileListTemplateInDirectButton:sFileListTemplateInDirectButton,
sFileListTemplateViewerDirectLink:sFileListTemplateViewerDirectLink,sFileListAtEMLTemplateDirectLink:sFileListAtEMLTemplateDirectLink,
sFileListAtEMLTemplateInDirectLink:sFileListAtEMLTemplateInDirectLink,sFileListAtEMLTemplateDirectButton:sFileListAtEMLTemplateDirectButton,
sFileListAtEMLTemplateInDirectButton:sFileListAtEMLTemplateInDirectButton,sFileListTemplateBlockedLink:sFileListTemplateBlockedLink,
sFileListTemplateBlockedButton:sFileListTemplateBlockedButton,sEMLTemplateDirectButton:sEMLTemplateDirectButton,
sEMLTemplateInDirectButton:sEMLTemplateInDirectButton,sEMLAtEMLTemplateDirectButton:sEMLAtEMLTemplateDirectButton,
sEMLAtEMLTemplateInDirectButton:sEMLAtEMLTemplateInDirectButton,sFileListTemplateCloudButton:sFileListTemplateCloudButton,
sFileListTemplateCloudBlockButton:sFileListTemplateCloudBlockButton,sFileListTemplateCloudDisabledButton:sFileListTemplateCloudDisabledButton,
sApproveTemplate:sApproveTemplate,calendarRejectTemplate:calendarRejectTemplate}}(),mlCore=function(){
function a(a,e,h,i){var j=$Element("previewMailLayer"),k=$$.getSingle(".pFile"),l=$Element(i.element).parent(function(a){
return"LI"===a.tag.toUpperCase()},4)[0].attr("email");mcCore.isNcs()||mcCore.isNwe()?$Element($$.getSingle("#previewMailLayer .hl_noti")).hide():$Element($$.getSingle("#previewMailLayer .hl_noti")).show(),
b(h.mailInfo.body,e),c(a,e,l),d(a,h.attachInfo),j.show(),f(i.element),k.scrollTop=0,g(),mCom.aVisibleLayerList.push(j);
}function b(a,b){var c,d=149,e=6===Number(b)||Number(b)>=1e7,f=$Element($$.getSingle("#previewMailLayer .pText"));
c=(mcCore.isNcs()||mcCore.isNwe())&&e?nLang.l.there_is_no_memo:nLang.l.there_is_no_content,a.length<"&nbsp;".length&&(a=a.replace(/^\&n?b?s?p?;?/g," ")),
a=a.replace(/\u200B/g,""),""===a?a="<span class='empty_contents'>"+c+"</span>":a.length>=d&&(a+=" ..."),
f.html(a)}function c(a,b,c){var d="5",e="3",f="2",g=$Element("previewDelete"),h=$Element("previewSpam"),i="button_s _c1(mlCore|deleteMail|"+a+"|"+b+")",j=!1;
b===f&&"child"===getListObject(a,c).isChild&&(i+=" disabled",j=!0),g.className(i),g.attr("disabled",j),
b===e?h.hide():b==d?h.show().className("button_s _c1(mlCore|cancelSpam|"+a+")").html(nLang.l.cancel_spam):h.show().className("button_s _c1(myCore|showSpamLayer|"+a+"|"+getMailAddress(a)+")").html(nLang.l.assign_spam);
}function d(a,b){var c,d,f="",g=b.length,h=$Element($$.getSingle("#previewMailLayer .pFile")),i=$Element($$.getSingle("#previewMailLayer .attach_file_head")),j=$Element($$.getSingle("#previewMailLayer .attach_file_head .cnt"));
if(0===g)return h.hide(),void i.hide();j.html(g),h.show(),i.show();try{c="checkVirusArea",window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)&&(c="_blank");
}catch(k){c="checkVirusArea"}for(d=0;g>d;d++)f+=e(b[d],a,c);h.html(f)}function e(a,b,c){var d,e,f=i?encodeURIComponent(a.filename):"",g="attachType=normal&mailSN="+b+"&attachIndex="+a.contentSN+"&virus=1&domain="+document.location.host,h="/file/download/each/"+f+"?"+g,j="",k=h,l=c,m="",n=h,o=c,p="",q=a.filename,r=mcCore.isBlockedExtension(q),s=200,t="display:inline-block;width:"+s+"px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;";
return d=r?"<a href='javascript:;' class='_c1(myCore|downloadBlocked|preview) _stopDefault' title='"+nLang.l.preview_in_web+"'>"+nLang.l.preview+"</a><span class='bar'>|</span>":a.showHtmlLink?"<a style='cursor:pointer;'class='_c1(mrCore|readWithNHNViewer|"+b+"|"+a.contentSN+") _stopDefault' title='"+nLang.l.preview_in_web+"'>"+nLang.l.preview_in_web+"</a><span class='bar'>|</span>":"",
mcCore.isNcs()&&a.showAlert&&(m=j="_c1(mrCore|attachDownloadFile|+"+h+"|true) _stopDefault",n=k="javascript:",
o=l=""),a.filename.match(/\.(ndoc|nxls|nppt|nfrm)$/i)&&(j="_c1(mrCore|readWithNHNViewer|"+b+"|"+a.contentSN+") _stopDefault",
k="javascript:",l=""),a.deleted&&(p="removed",m=j="",n=k="javascript:",o=l="",d=""),r&&(m=j="_c1(myCore|downloadBlocked) _stopDefault",
n=k="javascript:",o=l=""),e="<li class='"+p+"'><a class='file "+j+"' href='"+k+"' target='"+l+"' title='"+q+"' style='"+t+"'>"+q+"</a><div class='menu'>"+d+"<a class='"+m+"' href='"+n+"' target='"+o+"' title='"+nLang.c.save+"'>"+nLang.c.save+"</a></div></li>";
}function f(a){var b,c,d,e,f=$Element("previewMailLayer"),g=$Element($$.getSingle("!div.subject .mail_title",a)),h=$Element("header");
"undefined"==typeof window.innerHeight&&(window.innerHeight=document.documentElement.clientHeight),b=parseInt(g.offset().top,10)+g.height(),
c=g.parent().parent().offset().left,d=g.offset().top+f.height(),e=window.innerHeight-$Element("normalPagingNav").height()-$Element("footer").height(),
d>e&&(b-=f.height()+g.height()),b<h.height()&&(b=h.height()),f.offset(b,c)}function g(){for(var a,b=200,c=$$("#previewMailLayer .pFile li .file"),d=c.length,e=0;d>e;e++){
a=c[e];var f=a.innerHTML;if(a.scrollWidth>b&&f.indexOf(".")>-1){var g=h(f.split(".").pop());g&&$Element(a).afterHTML("<a class='file' style='pointer-events:none;cursor:default;'>."+g+"</a>");
}}}function h(a){var b=["htm","html","exe","gul","one","pub","epub","jpg","jpeg","png","gif","doc","docx","ppt","pptx","xls","xlsx","hwp","txt","pdf","fla","swf","flv","k3g","mov","avi","wmv","mkv","mp4","mp3","mid","ra","wav","psd","bmp","ing","zip"];
return b.indexOf(a)>-1&&a}_bScrollToTop=!0,_elCurMail="",_nMailListLength="",_woMailList=$A([]),_woCurMailList=$A([]),
_woParentMailList=$A([]),_woCurParentMailList=$A([]),_woConversationMailList=$A([]),prevTerms=null;var i=$Agent().navigator().safari&&$Agent().os().mac&&!isNcs(),j=null,k=null,l=/^all|mark|attach|tome|fromAddr|unread|thread$|vip/,o=/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/,p={
C:nLang.l.view_type_conversation,T:nLang.l.view_type_time,S:nLang.l.view_type_sender},q={L:nLang.l.display_type_list,
H:nLang.l.display_type_horizontal,V:nLang.l.display_type_vertical},r=100,s=1496242800;arrangeListMenu=function(a){
jb();var b;if(!mcCore.hideWriteArea()){mcCore.hideSendResultDiv("listBtnMenu"),mcCore.foldedWriteButton(),
mCom.elOptionWrap&&mCom.elOptionWrap.visible()&&(mcCore.toggleEl(mCom.elOptionWrap,!1),mCom.elFixArea.hide().show(),
mCom.elFlexArea.hide().show(),mcCore.adjustTopOfFlexArea()),mcCore.toggleEl(mCom.elListBtnMenu,!0),mcCore.toggleEl(mCom.elReadBtnMenu,!1),
mcCore.toggleEl(mCom.elWriteBtnMEnu,!1),"search"==a||mCom.sCurFilterType&&2!=a?mcCore.toggleEl(mCom.elListHeadDiv,!1):mcCore.toggleEl(mCom.elListHeadDiv,!0),
mcCore.toggleEl(mCom.elWriteHeadDiv,!1);var c=mCom.elDoRead,d=mCom.elDoSpam,e=mCom.elDoArrange,f=mCom.elDoBlock,g=mCom.elViewBlockList,h=mCom.elDoReply,i=mCom.elDoReplyAll,j=mCom.elDoForward,k=mCom.elDoResend,m=mCom.elDoMove,n=mCom.elDoEdit,p=mCom.elDoMailAction,q=mCom.elDoFilterRcpt,r=mCom.elDoDeleteC,s=mCom.elDoDelete,t=mCom.elFolderDeleteUnreadMails,u=mCom.elFolderReadUnreadMails,v=mCom.elPrintAtList,w=mCom.elSetLayout;
/(ncs|nwe)/.test(mEnv.serviceType)&&(b=$Element($$.getSingle(".do_spam",mCom.elListBtnMenuSingle)));var x=mCom.elHeadReceiveTip,y=$Element("li_add_addr"),z=$Element("li_view_mail"),A=$Element("li_show_sender"),B=$Element("li_show_receiver"),C=$Element("li_mail_down"),D=$Element("li_cleanup"),E=$Element("li_unmark"),F=$Element("li_show_memo"),G=$Element("li_scrap_calendar"),H=$Element("li_scrap_todo"),I=$Element("li_scrap_blog"),J=$Element("li_charset"),K=$Element("li_mime"),L=$Element($$.getSingle("#li_cleanup a"));
L.attr("tab-action","first");var M;M=mcCore.isNaver()?t:u,y.show(),z.show(),A&&A.show(),B&&B.hide(),
C.show(),D.show(),E.show(),F&&F.show(),E&&E.show(),I&&I.show(),J.show(),K.show(),mcCore.useCalendar()?(G.show(),
H&&H.show()):(G.hide(),H&&H.hide()),e.css("display","block"),b&&mcCore.toggleEl(b,!1),3==a||6==a||a>=1e7?($$.getSingle("#mailCheckAll").checked=!1,
mcCore.toggleEl(x,!1),mcCore.toggleEl(M,!0),mcCore.toggleEl(c,!0),mcCore.toggleEl(d,!1),mcCore.toggleEl(f,!1),
mcCore.toggleEl(h,!1),mcCore.toggleEl(i,!1),6==a||a>=1e7?(j.removeClass("rgt").removeClass("mdl").addClass("lft").show(),
mcCore.toggleEl(m,!0),mcCore.toggleEl(n,!0),mcCore.toggleEl(mCom.elDoTranslate,!0),mcCore.toggleEl(mCom.elSplitBar4,!0),
mcCore.toggleEl(e,!1),A&&A.hide()):(j.removeClass("rgt").removeClass("mdl").removeClass("lft").show(),
mcCore.toggleEl(m,!1),mcCore.toggleEl(n,!1),mcCore.toggleEl(mCom.elDoTranslate,!1),mcCore.toggleEl(mCom.elSplitBar4,!1)),
3==a?(mcCore.toggleEl(p,!1),mcCore.toggleEl(e,!1)):(mcCore.toggleEl(p,!0),y.hide(),z.hide()),mcCore.toggleEl(q,!1)):2==a?(mcCore.toggleEl(x,mEnv.useReadReceipt),
mcCore.toggleEl(M,!1),mcCore.toggleEl(c,!1),mcCore.toggleEl(d,!1),mcCore.toggleEl(f,!1),h.addClass("lft").show(),
i.addClass("mdl").show(),mcCore.toggleEl(m,!1),mcCore.toggleEl(n,!1),mcCore.toggleEl(p,!0),mcCore.toggleEl(e,!1),
mcCore.toggleEl(mCom.elDoTranslate,!1),mcCore.toggleEl(mCom.elSplitBar4,!1),mcCore.toggleEl(E,!1)):($$.getSingle("#mailCheckAll").checked=!1,
mcCore.toggleEl(x,!1),mcCore.toggleEl(M,!0),mcCore.toggleEl(c,!0),d.css("display",""),mcCore.toggleEl(f,!1),
h.addClass("lft").show(),i.addClass("mdl").show(),mcCore.toggleEl(m,!0),mcCore.toggleEl(n,!1),mcCore.toggleEl(p,!0),
mcCore.toggleEl(q,!1),mcCore.toggleEl(mCom.elDoTranslate,!0),mcCore.toggleEl(mCom.elSplitBar4,!0)),mcCore.isAttach()&&!(3==a||6==a||a>=1e7)&&(mcCore.toggleEl(c,!0),
mcCore.toggleEl(h,!0),mcCore.toggleEl(i,!0),mcCore.toggleEl(j,!0),mcCore.toggleEl(m,!0),mcCore.toggleEl(d,!0),
mcCore.toggleEl(e,!1),mcCore.toggleEl(p,!1),mcCore.toggleEl(n,!1),mcCore.toggleEl(q,!1)),"search"==a&&mcCore.toggleEl(M,!1),
mcCore.isNaver()||!l.test(a)&&!o.test(a)||mcCore.toggleEl(M,!1),0==mcCore.isNaver()&&(6==a||a>=1e7)?M.html(nLang.m.read_all_unread_memo):0==mcCore.isNaver()&&M.html(nLang.m.read_all_unread),
mCom.welList.css("top","0px"),1==a?(mcCore.toggleEl(d,!1),mcCore.toggleEl(k,!0),j.addClass("mdl").removeClass("rgt").removeClass("lft").show(),
mcCore.toggleEl(p,!0),y.hide(),z.hide(),D.hide(),A&&A.hide(),B&&B.show()):2==a?(mcCore.toggleEl(d,!1),
mcCore.toggleEl(k,!0),j.addClass("mdl").removeClass("rgt").removeClass("lft").show(),y.hide(),z.hide(),
A&&A.hide(),B&&B.show()):3==a?(mcCore.toggleEl(k,!1),mcCore.toggleEl(p,!1)):6==a||a>=1e7?(mcCore.toggleEl(k,!1),
y.hide(),z.hide()):"search"==a&&$("slt_search_folder")&&1==$("slt_search_folder").value?(mcCore.toggleEl(k,!0),
j.addClass("mdl").removeClass("rgt").removeClass("lft").show()):(mcCore.toggleEl(k,!1),j.addClass("rgt").removeClass("mdl").removeClass("lft").show()),
"list"!=mCom.vDivideMode?3==a?v.hide():v.css("display",""):(v.hide(),mcCore.toggleEl(mCom.elDoTranslate,!1),
mcCore.toggleEl(mCom.elSplitBar4,!1)),3==a||2==a?mcCore.toggleEl(w,!1):w.css("display",""),4==a||5==a?(mcCore.toggleEl(r,!0),
mcCore.toggleEl(s,!1),mcCore.toggleEl(h,!1),mcCore.toggleEl(i,!1),mcCore.toggleEl(j,!1),mcCore.toggleEl(p,!mcCore.isAttach()),
y.hide(),z.hide(),A&&A.hide(),B&&B.hide(),C.hide(),D.show(),G.hide(),F&&F.hide(),H&&H.hide(),I&&I.hide(),
J.hide(),K.hide(),L.attr("tab-action","last")):(mcCore.toggleEl(r,!1),mcCore.toggleEl(s,!0)),(6==a||a>=1e7)&&mcCore.toggleEl(p,!0);
var N=mcCore.isNaver()?"b primary ":"";if(5==a?(b?(b.html(nLang.l.cancel_spam),b.className(N+"do_spam b primary _ccrf(clt|.unspam) _c1(mlCore|cancelSpam)"),
mcCore.toggleEl(d,!1),mcCore.toggleEl(b,!0)):(d.html(nLang.l.cancel_spam),d.className(N+"do_spam _ccrf(clt|.unspam) _c1(mlCore|cancelSpam)")),
mcCore.toggleEl(f,!0),mcCore.toggleEl(g,!0)):(d.html(nLang.l.assign_spam),d.className(N+"do_spam _ccrf(clt|.spam) _c1(myCore|showSpamLayer) _stopDefault"),
mcCore.toggleEl(g,!1),mcCore.toggleEl(f,!1)),$$("a.btn_change_type"))if(gb()){var O="T"==mlCore.getCurrentViewType()?"view_timeline":"C"==mlCore.getCurrentViewType()?"view_conversation":"view_sender";
$ElementList($$("a.btn_change_type")).css("display","").className(O+" btn_change_type _c1(myCore|showViewTypeLayer) _ccr(clt.viewType) _stopDefault");
}else $ElementList($$("a.btn_change_type")).hide();if($$.getSingle("button.btn_change_filter")){var P,Q=!1,R=!1,S=[],T=[],U=nLang.l.filter_time+'<i class="ico_sort"><span class="blind">'+(0===mCom.nCurSortType?nLang.c.descend_sort:nLang.c.ascend_sort)+"</span></i>";
if(P=$$.getSingle("#changeViewFilterLayer ul.list_filtering li"),P&&(P.style.display="none"),P=$$.getSingle("#changeViewFilterLayer ul.list_sorting li[data-viewfilter=1] a"),
P&&(P.innerHTML=U),$$.getSingle("#changeViewFilterLayer ul.list_filtering li").style.display="none",
$$.getSingle("#changeViewFilterLayer ul.list_sorting li").style.display="none","thread"===a||/^bil\$/.test(mCom.nCurrentFolder))$ElementList($$("button.btn_change_filter")).hide();else{
$ElementList($$("button.btn_change_filter")).show(),"T"!=mlCore.getCurrentViewType()?$$.getSingle("#changeViewFilterLayer ul.list_sorting").style.display="none":($$.getSingle("#changeViewFilterLayer ul.list_sorting").style.display="",
Q=!0);var V=$A(["mark","attach","tome","idomain","remind"]);"all"==mCom.nCurrentFolder&&mCom.bIsUnread||V.has(mCom.nCurrentFolder)?$$.getSingle("#changeViewFilterLayer ul.list_filtering").style.display="none":($$.getSingle("#changeViewFilterLayer ul.list_filtering").style.display="",
R=!0),2==mCom.nCurrentFolder&&(Q=!1,$$.getSingle("#changeViewFilterLayer ul.list_sorting").style.display="none");
var W=$$.getSingle(".btn_change_filter"),X=W.innerHTML;R&&Q?(W.innerHTML=X.replace(nLang.l.sort,nLang.l.filter),
$$.getSingle("#changeViewFilterLayer ul.list_filtering li").style.display="",$$.getSingle("#changeViewFilterLayer ul.list_sorting li").style.display=""):R&&!Q?W.innerHTML=X.replace(nLang.l.sort,nLang.l.filter):!R&&Q&&(W.innerHTML=X.replace(nLang.l.filter,nLang.l.sort)),
S=3==a?["all","mark","attach"]:2==a?["rcpt_all","rcpt_unread","rcpt_read"]:"search"==a||6==a||/^vip\$/.test(mCom.nCurrentFolder)||a>=1e7?["all","unread","mark","attach"]:["all","unread","mark","attach","tome"],
3==a?T=["11","4","5","6"]:2==a?T=[]:"remind"==mCom.nCurrentFolder?(T=["1","13"],P=$$.getSingle("#changeViewFilterLayer ul.list_sorting li[data-viewfilter=1] a"),
P&&(P.innerHTML=nLang.l.remind_filter_time+'<span class="blind"></span>')):T="4"==mCom.nCurrentFolder?["1","3","5","6","14"]:6==a||a>=1e7?["1","5","6"]:["1","3","5","6"],
_toggleFilterLayerMenu("filtering",S),_toggleFilterLayerMenu("sorting",T);var Y=$Element($$.getSingle("#changeViewFilterLayer ul.list_filtering li[data-viewfilter=tome]"));
Y.visible()?$Element($$.getSingle("#changeViewFilterLayer ul.list_filtering li[data-viewfilter=attach]")).removeClass("border"):$Element($$.getSingle("#changeViewFilterLayer ul.list_filtering li[data-viewfilter=attach]")).addClass("border");
}}mlRemind.arrangeRemindBtn(a),mb(a);var Z=$$.getSingle("#trash_list_notice_msg");4===Number(a)&&Number(mEnv.trashPeriod)>0?(Z.innerHTML=nLang.l.trash_notice_msg.replace("{trashPeriod}",mEnv.trashPeriod),
Z.style.display=""):Z.style.display="none",_checkSelection(),jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<=8&&mcCore.toggleEl(mCom.elDoTranslate,!1);
}},_toggleFilterLayerMenu=function(a,b){var c=$$("#changeViewFilterLayer ul.list_"+a+" li[data-viewfilter]"),d={};
b.forEach(function(a){d[a]=!0}),c.forEach(function(a){a.style.display=d[a.getAttribute("data-viewfilter")]?"":"none";
})},_arrangeDivideMode=function(){"V"==mEnv.divideMode?mcCore.toggleDivideMode("vertical"):"H"==mEnv.divideMode?mcCore.toggleDivideMode("horizontal"):(mcCore.toggleDivideMode("list"),
$Element("cont_flex_area").removeClass("list_horizontal").removeClass("list_vertical").addClass("list_normal")),
mlCore.arrangeListMenu(mCom.nCurrentFolder),$Element("cont_flex_area").removeClass("read_normal")},updateListStopScroll=function(a,b,c,d,e,f,g,h,i){
_bScrollToTop=!1,u(a,b,c,d,e,f,g,h,i)},_showListAreaForListMode=function(){if("list"==mCom.vDivideMode?(clearReadArea(),
mcCore.toggleEl(mCom.elReadWrap,!1)):mcCore.toggleEl(mCom.elReadWrap,!0),"S"==fb()?(mCom.elListWrap.addClass("grp_sender"),
mCom.welList.removeClass("listWrap"),$Element("cont_flex_area").removeClass("receipt_list")):2==mCom.nCurrentFolder?(mCom.elListWrap.removeClass("grp_sender"),
mCom.welList.addClass("listWrap"),$Element("cont_flex_area").addClass("receipt_list")):(mCom.elListWrap.removeClass("grp_sender"),
mCom.welList.addClass("listWrap"),$Element("cont_flex_area").removeClass("receipt_list")),U()?setListDisplayStopScroll("show"):mcCore.toggleEl(mCom.elListWrap,!0),
"search"==mCom.nCurrentFolder||$Element("detail_search").visible())mcCore.toggleEl($Element("text_promotion"),!1);else{
var a="undefined"==typeof m.info?!1:m.info.promotionText;a&&mcCore.getCookie(a.cookieKey)!=a.modifyTime&&mcPromotion.showPromotionText(a),
a=null}},clearReadArea=function(){mCom.isUpdatingForNewMail||($Element(mCom.elRead).removeClass("conversation_cover"),
$Element("read_conversation_btn").hide(),mCom.nCurReadingMailSN=-1,mCom.sCurReadingCharset="",mCom.elRead.innerHTML=mcCore.isNcs()||"list"==mCom.vDivideMode||3==mCom.nCurrentFolder?"":mlTemplate.emptyReadArea,
mCom.isReading=!1,$Element("backToList")&&$Element("backToList").css("display","none"))},beforeUpdateList=function(a,b,c){
var d=b.toString().concat("");n=parseInt(d);try{c.close()}catch(e){}setTimeout($Fn(u,this).bind(null,n),100);
};var t=function(){for(var a=_woCurMailList.$value(),b=[],c=$ElementList($$("li.cv_master",mCom.elList)),d=0,e=c.length();e>d;d++)b.push(c.get(d).attr("mailsn"));
mcCore.saveListScrollTop(),mCom.bUpdateListForConversation=!0,refreshList(!0,!1);for(var d=0,e=b.length;e>d;d++)$$.getSingle("li."+b[d]+"_li",mCom.elList)&&V(null,b[d],!1);
for(var d=0,e=a.length;e>d;d++)$$.getSingle("li."+a[d].mailSN+"_li",mCom.elList)&&L(null,a[d].mailSN,"forced");
},u=function(a,b,c,d,e,f,g,h,i,j){if(mCom.bUpdateListForNewMail||mCom.bUpdateListForConversation||(hb("disable"),
mEnv.bForceListView=!1),a&&a.stopDefault(),"boolean"!=typeof h&&(h=!0),mEnv.receiveByBcc&&(mEnv.receiveByBcc=null),
mCom.sCurFilterType=i,mCom.nCurSortField=e,mCom.nCurrentPage=d,I(),!mcCore.hideWriteArea()){if(mCom.cancelUpdateList=!1,
mCom.lastChecked=null,"-2"==b&&(b="0"),b!=mCom.nCurrentFolder?(mCom.nCurrentFolder=b,mCom.isFolderChanged=!0,
mCom.elList.innerHTML="",$Element("detail_search").visible()&&_initDetailSearchText()):mCom.isFolderChanged=!1,
U()&&mCom.bShowListLodaingImage){var k='<div class="list_autoload"><p class="al_msg"><span class="ico_loading"></span>'+nLang.l.loading_list+"</p></div>";
mCom.elList.innerHTML=k}if(_bScrollToTop&&(mCom.listCursor=0),("unread"==c||"unread"==b)&&(g=!0),mCom.bIsUnread=g?!0:!1,
mCom.bUpdateListForNewMail||mCom.bUpdateListForConversation||(clearReadArea(),mCom.elListWrap.visible()&&(_woCurMailList=$A([]))),
mlCore.arrangeListMenu(b),g?(mCom.elSelectBtnReadMail.hide(),mCom.elSelectBtnUnReadMail.hide(),mCom.elSelectBtnMarkMail.show(),
mCom.elSelectBtnUnMarkMail.show()):"mark"==b?(mCom.elSelectBtnReadMail.show(),mCom.elSelectBtnUnReadMail.show(),
mCom.elSelectBtnMarkMail.hide(),mCom.elSelectBtnUnMarkMail.hide()):(mCom.elSelectBtnReadMail.show(),
mCom.elSelectBtnUnReadMail.show(),mCom.elSelectBtnMarkMail.show(),mCom.elSelectBtnUnMarkMail.show()),
"search"!=b&&(mCom.nSimpleSearchCount=0,$Element("search_with_result").hide()),"search"!=b&&$Element("searchResultDiv").visible()&&($Element("searchResultDiv").hide(),
mcCore.adjustTopOfFlexArea()),_arrangeDivideMode(),"thread"==b)return void showThread(null,mCom.nCurThreadMailSN,d);
if("fromAddr"==b)return void listSender(null,1);if(mCom.bUpdateListForConversation=!1,mCom.isUpdatingForNewMail||myCore.hideAllLayer(),
e||(mCom.nCurSortField="3"==mCom.nCurrentFolder?11:1,mCom.nCurSortType=0),mcCore.setMsg(nLang.c.getting_list_from_folder.replace("{Name}",mcCore.findFolderName(b,!0))),
2==b){mcCore.toggleDivideMode("list",!0),clearReadArea(),_selectReceiveFilter(c);var l=_makeObjectForReadReceipt(d,c);
mcCore.requestAjax({fClass:"readReceipt",async:h,fCallback:$Fn(_fParseListForReadReceipt,this).bind(mlTemplate.oReadReceiptListTemplate,l.page,c,e,f),
oParameter:l,sUrl:"/json/list/readReceipt/"})}else if(3!=b||mcCore.isAttachView())if("search"==b)doSearch_new(null,null,d,null,null,null,mCom.oCurRequest);else if("remind"==b){
var l=_makeObjectForUpdateList(b,d,e,f,g);mcCore.requestAjax({fClass:"list",async:h,fCallback:$Fn(_fParseList,this).bind(mlTemplate.oListTemplate,l.type,l.page,b,e,f,g,null),
oParameter:l,sUrl:"/json/list/reminder/"})}else{var m;m=1==b?mlTemplate.oSenderListTemplate:mlTemplate.oListTemplate,
mcCore.isAttachView()&&(m=mlTemplate.oAttachListTemplate);var n=b&&/^vip\$/.test(b),o=b&&/^bil\$/.test(b);
if(o)v(b,d,h);else{var p,l=_makeObjectForUpdateList(b,d,e,f,g),q=n?"/json/search/?clicklog=2":"S"!=fb()||mCom.sCurFilterType?"/json/list/":"/json/list/sender/";
p="S"!=fb()||mCom.sCurFilterType?mcCore.isAttachView()?$Fn(_fParseListForAttachView,this).bind(m,l.type,l.page,b,e,f,g):$Fn(_fParseList,this).bind(m,l.type,l.page,b,e,f,g,j):$Fn(_fParseListForSenderView,this).bind(l.page,b,h),
mcCore.requestAjax({fClass:n?"vip":"list",async:h,fCallback:p,oParameter:l,sUrl:q})}l=m=null}else{mcCore.toggleDivideMode("list",!0);
var l=_makeObjectForUpdateList(b,d,e,f,g);mcCore.requestAjax({fClass:"list",async:h,fCallback:$Fn(_fParseList,this).bind(mlTemplate.oDraftListTemplate,l.type,l.page,b,e,f,g,null),
oParameter:l,sUrl:"/json/list/"})}return mcCore.isAttachView()?mCom.welList&&mCom.welList.addClass("collapse_margin"):mCom.welList&&mCom.welList.removeClass("collapse_margin"),
elWrite=elOption=elMailUseTip=null,!0}},v=function(a,b,c){b&&1!=b||(mCom.oBilateral={1:{offset:0,receivedTime:null,
mailSN:null}},b=1);var d=x(a,b);mcCore.requestAjax({fClass:"bilateral",async:c,fCallback:$Fn(z,this).bind(b,a,c,d),
oParameter:d,sUrl:"/json/list/specificSender"})};_makeObjectForUpdateList=function(a,b,c,d,e){b=b?b:"remind"==a&&0==b?b:1,
c=c||mCom.nCurSortField,d=d||mCom.nCurSortType,e=e||mCom.bIsUnread;var f="";if(("all"==a||"mark"==a||"attach"==a||"tome"==a||"unread"==a)&&(f="unread"==a?"all":a,
a="-1"),a&&/^vip\$/.test(a))var g=a.replace(/^vip\$/,""),h={from:g,page:b,sortField:c,sortType:d,type:e?"unread":"all",
useSearchHistory:!1};else if("remind"==a)var h=mlRemind.makeRequestObject(a,b,c);else var h={page:b,
sortField:c,sortType:d,folderSN:a,type:f,isUnread:e};return"C"==fb()&&(h.viewMode="conversation",h.startOffset=_(b)),
"S"==fb()&&(h.useVip=!1,h.useFoldAddress=!0),U()&&("S"==fb()?h.pageSize=20:h.pageSize4SeeMore="C"==fb()?100:400),
mCom.sCurFilterType&&(h.type="unread"===mCom.sCurFilterType?/^vip\$/.test(a)?mCom.sCurFilterType:"all":mCom.sCurFilterType,
h.viewMode="",h.isUnread="unread"===mCom.sCurFilterType?!0:!1,"S"===fb()&&U()&&(h.pageSize4SeeMore=100)),
mcCore.isAttach()&&(h.previewMode="2"),mCom.oCurRequest=h,f=null,h};var w=function(a){var b=$Element($$.getSingle("#list_for_view .current"));
b&&b.removeClass("current");var c=$Element($$.getSingle("li[mailsn="+a+"]"));c&&c.addClass("current");
},x=function(a,b){if(b>1&&mCom.oBilateral){var c=mCom.oBilateral[b];if(c)var d=c.offset,e=c.receivedTime,f=c.mailSN;else var d=0,e=null,f=null;
}else var d=0,e=null,f=null;var g=a.replace(/bil\$/g,"").replace(/[^<]+</,"").replace(/>/,"");return{
startOffset:d,startReceivedTime:e||"",startMailSN:f||"",sender:g,previewMode:0,pageSize:r,includeResponse:"Y",
page:b}};_makeObjectForReadReceipt=function(a,b){a=a||1,void 0==b&&(b="");var c={page:a,sortField:"1",
sortType:"0",type:b};return U()&&(c.pageSize4SeeMore=400),c},_selectReceiveFilter=function(a){mCom.curRCPTType=a,
mCom.sCurFilterType=void 0!=a&&""!=a?"rcpt_"+a:"rcpt_all"},initSimpleSearchText=function(){var a=$$.getSingle("#srch_with_rslt").checked;
a&&($$.getSingle("#searchKeyWord").value="",$$.getSingle("#searchKeyWord").focus()),mCom.nSimpleSearchCount>4&&(alert(nLang.c.reSearch_count_limit),
$$.getSingle("#srch_with_rslt").checked=!1)},_initDetailSearchText=function(){$$.getSingle("#ipt_start_date").value="",
$$.getSingle("#ipt_end_date").value="",$$.getSingle("#chk_trash").checked=!1,$$.getSingle("#ipt_receiver_range").value=0,
mUtil.setSelectedOption($$.getSingle("#ipt_receiver_range")),$$.getSingle("#ipt_body_range").value=5,
mUtil.setSelectedOption($$.getSingle("#ipt_body_range")),mfCore.makeSearchLayerBo()},doSearch_new=function(a,b,c,d,e,f,g){
if(U()&&(mCom.nListWrapScrollTop=0,mCom.nExpectedShowMailCount=100,mCom.bShowListLodaingImage)){var h='<div class="list_autoload"><p class="al_msg"><span class="ico_loading"></span>'+nLang.l.loading_list+"</p></div>";
mCom.elList.innerHTML=h}if(myCore.hideAllLayer(),"simple"==b){$Element("detail_search").visible()&&_initDetailSearchText();
var i=$$.getSingle("#searchKeyWord").value,j=$A(['"',"&","^","|","~","*","!"]);if(""==i||j.has(i)||i==nLang.c.search_mail&&0==mUtil.bInitSimleSearchFocus)return alert(nLang.c.type_search_keyword),
$("searchKeyWord").focus(),!1}else if("detail"==b){var k=$$.getSingle("#ipt_start_date").value,l=$$.getSingle("#ipt_end_date").value;
if("all"==$$.getSingle("#slt_srch_period").value);else{if(""==k)return void alert(nLang.c.input_start_date_format);
if(null!=k.match(/\D/g))return void alert(nLang.c.invalid_start_date_format);if(null!=l.match(/\D/g))return void alert(nLang.c.invalid_end_date_format);
if(""==l){var m=new $Date;$$.getSingle("#ipt_end_date").value=m.format("Ymd")}}var n=$$.getSingle("#ipt_sender").value.length,o=$$.getSingle("#ipt_receiver").value.length,p=$$.getSingle("#ipt_query").value.length,q=n+o+p;
if(q>100)return alert(nLang.c.input_limit_100),!1;if(0===q)return alert(nLang.c.type_search_keyword),
!1;mCom.nSimpleSearchCount=0}if(!mcCore.hideWriteArea()){mlCore.arrangeListMenu("search"),mCom.nCurrentFolder="search";
var g=_makeObjectForDoSearch_new(b,c,d,e,f,g);mcCore.requestAjax({fClass:"search",fCallback:$Fn(_fParseSearchList,this).bind(mlTemplate.oSearchListTemplate,g.type,g.page,e,f,g.keyword?"simple":"detail"),
oParameter:g,sUrl:"/json/search/"}),"detail"==b&&mcCore.isNaver()?$Element("search_with_result").hide():("simple"==b||"history"==b)&&(mySimpleSearch.setSearchText(""),
0==mCom.nSimpleSearchCount||g.reQuery?mCom.nSimpleSearchCount++:g.reQuery||(mCom.nSimpleSearchCount=1)),
b&&(mCom.sCurFilterType=null),k=l=g=null}},doSearchWithOption=function(a,b){doSearch_new(void 0,b,void 0,void 0,void 0,void 0,a);
},_makeObjectForDoSearch_new=function(a,b,c,d,e,f){function g(a){var b=a.getMonth()+1;b=b>=10?""+b:"0"+b;
var c=a.getDate();return c=c>=10?""+c:"0"+c,a.getFullYear()+b+c}function h(a){var b=new Date;return[g(a),g(b)];
}if(f)return f.page=b||f.page||1,f.sortField="undefined"!=typeof d&&null!=d?d:f.sortField,f.sortField="11"==f.sortField||"14"==f.sortField?"1":f.sortField,
f.sortType="undefined"!=typeof e&&null!=e?e:f.sortType,f.type=c||f.type||mCom.curSearchType,f.reQuery=$$.getSingle("#srch_with_rslt").checked,
f.reQuery&&(f.from+=mCom.oPervSearchTerm.from?" "+mCom.oPervSearchTerm.from:"",f.to+=mCom.oPervSearchTerm.to?" "+mCom.oPervSearchTerm.to:"",
f.content+=mCom.oPervSearchTerm.content?" "+mCom.oPervSearchTerm.content:"",f.body+=mCom.oPervSearchTerm.body?" "+mCom.oPervSearchTerm.body:"",
encodeURI(f.from+f.to+f.content+f.body).length>1080+3*mCom.nSimpleSearchCount)?(alert(nLang.c.search_length_limit_120),
!1):(U()&&(f.pageSize4SeeMore=400),mCom.oCurRequest=f,mCom.curSearchType=f.type,f);var f={};if("detail"==a){
f.exceptTrash=$$.getSingle("#chk_trash").checked?!1:!0,f.from=encodeURI($$.getSingle("#ipt_sender").value),
f.to=encodeURI($$.getSingle("#ipt_receiver").value),f.body=encodeURI($$.getSingle("#ipt_query").value),
f.folderSN=encodeURI($$.getSingle("#slt_search_folder").value),f.period=encodeURI($$.getSingle("#slt_srch_period").value),
f.periodStart=encodeURI($$.getSingle("#ipt_start_date").value),f.periodEnd=encodeURI($$.getSingle("#ipt_end_date").value),
f.toCond=encodeURI($$.getSingle("#ipt_receiver_range").value),f.bodyCond=encodeURI($$.getSingle("#ipt_body_range").value),
f.reQuery=!1,f.type=Boolean($$.getSingle("#chk_attach").checked)?"attach":"all";var i=$A(["%22","&","%5E","%7C","~","*","!"]);
f.from=i.has(f.from)?"":f.from,f.to=i.has(f.to)?"":f.to,f.body=i.has(f.body)?"":f.body}else if("simple"==a){
f.folderSN="-1",f.reQuery=$$.getSingle("#srch_with_rslt").checked,f.type="all";var j=$$.getSingle("#searchKeyWord").value;
if($Element("search_with_result").visible()&&$$.getSingle("#srch_with_rslt").checked&&encodeURI(j+_prevTerms).length>1080+3*mCom.nSimpleSearchCount)return alert(nLang.c.search_length_limit_120),
!1;j=j.replace(/^\s+|\s+$/g,"");var k=j.split(",");f.reQuery?(f.from=mCom.oPervSearchTerm.from?mCom.oPervSearchTerm.from:"",
f.to=mCom.oPervSearchTerm.to?mCom.oPervSearchTerm.to:"",f.content=mCom.oPervSearchTerm.content?mCom.oPervSearchTerm.content:"",
f.body=mCom.oPervSearchTerm.body?mCom.oPervSearchTerm.body:""):(f.from="",f.to="",f.content="",f.body="");
for(var k=j.split(","),l=nLang.c.re_sender_simple_search,m=nLang.c.re_receiver_simple_serach,n=nLang.c.re_content_simple_search,o=0;o<k.length;o++)if(k[o].match(l)){
var p=encodeURI(k[o].replace(l,""));f.from+=f.from?" "+p:p}else if(k[o].match(m)){var p=encodeURI(k[o].replace(m,""));
f.to+=f.to?" "+p:p,f.toCond=0}else if(k[o].match(n)){var p=encodeURI(mcCore.replaceSpecialChar(k[o].replace(n,"")));
f.content+=f.content?" "+p:p}else if(k[o].match(/^\"/)){var p=encodeURI(k[o]);f.body+=f.body?" "+p:p,
f.bodyCond=0}else{var p=encodeURI(k[o]);f.body+=f.body?" "+p:p,f.bodyCond=0}if(mcCore.isNcs()){f.exceptTrash=!0;
var q=new Date,r=h(new Date(q.setUTCMonth(q.getUTCMonth()-12))),s=r[1],t=r[0];f.period=encodeURI("1year"),
f.periodStart=encodeURI(t),f.periodEnd=encodeURI(s),r=q=s=t=null}}return f.page=b||1,f.sortField="11"==mCom.nCurSortField||"13"==mCom.nCurSortField||"14"==mCom.nCurSortField?"1":mCom.nCurSortField,
f.sortType=mCom.nCurSortType,f.useSearchHistory=mEnv.useSearchHistory,U()&&(f.pageSize4SeeMore=400),
mCom.isDetailSearch="detail"==a?!0:!1,mCom.curSearchType=f.type,mCom.oCurRequest=f,f},showThread=function(a,b,c,d,e,f){
mCom.cancelUpdateList=!1,mCom.nCurrentFolder="thread",mCom.nCurThreadMailSN=b,"L"==mEnv.divideMode&&$Element("cont_flex_area").removeClass("list_horizontal").removeClass("list_vertical").addClass("list_normal");
var g=_makeObjectForShowThread(b,c,d,e,f);mcCore.requestAjax({fClass:"showThread",fCallback:$Fn(_fParseList,this).bind(mlTemplate.oListTemplate,"thread",g.page,"-1",g.sortField,g.sortType,f,null),
oParameter:g,sUrl:"/json/list/thread/"}),mfCore.updateFolder(),mlCore.arrangeListMenu("thread"),$Element("folder_deleteUnreadMails")&&$Element("folder_deleteUnreadMails").hide(),
mCom.bUpdateListForNewMail||(clearReadArea(),mCom.isReading=!1),g=null},_makeObjectForShowThread=function(a,b,c,d,e){
b=b||1,c=c||mCom.nCurSortField||1,d=d||mCom.nCurSortType,mCom.nCurSortField=c,mCom.nCurSortType=d,"undefined"==typeof e&&(e=mCom.bIsUnread);
var f={mailSN:a,page:b,sortField:c.toString(),sortType:d.toString(),isUnread:e.toString()};return U()&&(f.pageSize4SeeMore=400),
f},listSender=function(a,b){if(b&&"init"!=b)sFromAddr=mCom.nCurFromAddr;else{var c=_woCurMailList.length();
if(0==c)return myCore.hideAllLayer(),alert(nLang.c.select_mail),!1;if(c>1)return myCore.hideAllLayer(),
alert(nLang.c.select_only_one),!1;c=null,mCom.nCurFromAddr=sFromAddr=_woCurMailList.$value()[0].fromAddr;
}if(!sFromAddr)return alert(nLang.l.no_sender_receiver_address),void myCore.hideAllLayer();mCom.cancelUpdateList=!1,
mCom.nCurrentFolder="fromAddr","init"==b&&(mCom.nCurSortField="3"==mCom.nCurrentFolder?11:1,b="",mCom.nCurSortType=0),
myCore.hideAllLayer();var d=_makeObjectForListSender(b,sFromAddr);d&&doSearch_new(null,"simple",null,null,null,null,d),
d=null},_makeObjectForListSender=function(a,b){$$.getSingle("#searchKeyWord").value=b;var c={page:1,
sortField:"11"==mCom.nCurSortField?"1":mCom.nCurSortField,sortType:mCom.nCurSortType,from:b};return c;
},_fParseList=function(a,b,c,d,e,f,g,h,i){if(i.mailData&&!i.mailData.length&&c>1)return void(c>i.lastPage?u(null,d,b,i.lastPage,e,f,g):u(null,d,b,c-1,e,f,g));
mCom.bUpdateListForNewMail&&(mCom.nListWrapScrollTop=mCom.elList.scrollTop),U()&&$Element("cont_flex_area")?($Element("cont_flex_area").addClass("nav_endless"),
mCom.elBtnIcoViewTop&&(mCom.elBtnIcoViewTop.style.display=""),mlCore.setNoScroll()):($Element("cont_flex_area").removeClass("nav_endless"),
mCom.elBtnIcoViewTop&&(mCom.elBtnIcoViewTop.style.display="none"),mCom.elList.onscroll=null);var j=fParseListBo(a,b,c,d,i);
if("remind"!=d&&U()?_adjustListButton():("remind"==d&&(mCom.isRemindTruncated=i.isTruncated,mlRemind.makePagesForRemind(c,i.isTruncated)),
mCom.elList.scrollTop=_bScrollToTop?0:mCom.nListWrapScrollTop,_bScrollToTop=!0),mfCore.updateFolder(),
j){if(3==mCom.nCurrentFolder)return;if(null!=mCom.mailSNAfterDelete)("list"==mCom.vDivideMode||"list"!=mCom.vDivideMode&&!mCom.isReading)&&(mrCore.clickTitle(null,mCom.mailSNAfterDelete),
mCom.mailSNAfterDelete=null);else if(!mEnv.openFirstMail||"list"==mCom.vDivideMode||mCom.isReading||mCom.clickPrevNextMail){
if("list"!=mCom.vDivideMode&&mCom.clickPrevNextMail){var k=1==mCom.clickPrevNextMail?_woMailList.$value()[0].mailSN:_woMailList.$value()[_woMailList.length()-1].mailSN;
mrCore.clickTitle(null,k),mCom.clickPrevNextMail=!1}}else mrCore.clickTitle(null,_woMailList.$value()[0].mailSN);
mCom.bUpdateListForNewMail&&(mCom.bUpdateListForNewMail=!1),mCom.isUpdatingForNewMail&&(mCom.isUpdatingForNewMail=!1);
}h&&mrCore.readMailFromCancelNotiCallback(h),pb(),mcCore.testPeriodEnd("본창 목록 받아오기")},_fParseListForSenderView=function(a,b,c,d){
if(mCom.cancelUpdateList)return mCom.cancelUpdateList=!1,-1;"boolean"!=typeof c&&(c=!0),_woCurMailList.empty(),
_woMailList.empty(),mCom.nCurrentPage=a,mCom.bUpdateListForNewMail||_prepareToParseList(b),mCom.nCurFolderTotalMailCount=d.senderInfoList.length,
$Element($$.getSingle("#titleSplitBar")).css("display","inline-block");var e=!0,f={};if(e){for(var g=$$("div.listWrap[data-address]"),h=0;h<g.length;h++){
var i=$$("li[mailsn][@display!=none]",g[h]).length;i>5&&(f[$Element(g[h]).attr("data-address")]="more");
}c=!1}if(d.senderInfoList.length<1)mCom.elList.innerHTML=["<p class='nom'>",nLang.l.nomail,"</p>"].join("");else{
for(var j=[],k=-1,l=mlTemplate.oListForSenderViewTemplate.body,m=d.currentTime,n=$A([]),h=0,o=d.senderInfoList.length;o>h;h++){
var p=d.senderInfoList[h],q={Name:p.from.name?p.from.name.replace(/\\&quot;|&quot;|"|'/g,""):p.from.email,
UnreadCount:p.unreadCount+"",TotalCount:p.totalCount+"",UnreadClass:p.unreadCount>0?"has_unread":"",
ReceivedTime:mcCore.getHumanTime(p.lastReceivedTime,m),Email:p.from.email};j[++k]=mcCore.improvedTemplate(l,q),
!p.foldAddress&&p.unreadCount>0&&n.push(p.from.email)}mCom.elList.innerHTML=j.join(""),n.forEach(function(a){
var b=$$.getSingle("ul.fold[data-address="+a+"]");b&&_makeSubListForSenderView(a,c,f)}),mcCore.isNwe()&&(sFolderCode="all"===b||0==b?b:"mybox",
setLcs("","list"+sFolderCode+"S"+mCom.vDivideMode))}return mCom.elBtnIcoViewTop&&(mCom.elBtnIcoViewTop.style.display=""),
$Element("cont_flex_area").addClass("nav_endless"),mlCore.setNoScroll(),_adjustListButton(),null!=mCom.mailSNAfterDelete?("list"==mCom.vDivideMode||"list"!=mCom.vDivideMode&&!mCom.isReading)&&(mrCore.clickTitle(null,mCom.mailSNAfterDelete),
mCom.mailSNAfterDelete=null):(!mEnv.openFirstMail||"list"==mCom.vDivideMode||mCom.isReading||mCom.clickPrevNextMail)&&"list"!=mCom.vDivideMode&&mCom.clickPrevNextMail&&(mCom.clickPrevNextMail=!1),
mCom.bUpdateListForNewMail&&(mCom.bUpdateListForNewMail=!1),mCom.isUpdatingForNewMail&&(mCom.isUpdatingForNewMail=!1),
mfCore.updateFolder(),pb(),d.senderInfoList.length},_fParseListForAttachView=function(a,b,c,d,e,f,g,h){
if(h.mailData&&!h.mailData.length&&c>1)return void(c>h.lastPage?u(null,d,b,h.lastPage,e,f,g):u(null,d,b,c-1,e,f,g));
mCom.nListWrapScrollTop=mCom.elList.scrollTop,U()&&$Element("cont_flex_area")?($Element("cont_flex_area").addClass("nav_endless"),
mCom.elBtnIcoViewTop&&(mCom.elBtnIcoViewTop.style.display=""),mlCore.setNoScroll()):($Element("cont_flex_area").removeClass("nav_endless"),
mCom.elBtnIcoViewTop&&(mCom.elBtnIcoViewTop.style.display="none"),mCom.elList.onscroll=function(){mcCore.isAttachView()&&_attachCallShowBodies();
});var i=fParseListBo(a,b,c,d,h);if(U()?_adjustListButton():(mCom.elList.scrollTop=_bScrollToTop?0:mCom.nListWrapScrollTop,
_bScrollToTop=!0),y(),window.addEventListener?window.addEventListener("resize",function(){mcCore.isAttachView()&&y();
},!1):window.attachEvent&&window.attachEvent("onresize",function(){mcCore.isAttachView()&&y()}),i){if(null!=mCom.mailSNAfterDelete)("list"==mCom.vDivideMode||"list"!=mCom.vDivideMode&&!mCom.isReading)&&(mrCore.clickTitle(null,mCom.mailSNAfterDelete),
mCom.mailSNAfterDelete=null);else if(!mEnv.openFirstMail||"list"==mCom.vDivideMode||mCom.isReading||mCom.clickPrevNextMail){
if("list"!=mCom.vDivideMode&&mCom.clickPrevNextMail){var j=1==mCom.clickPrevNextMail?_woMailList.$value()[0].mailSN:_woMailList.$value()[_woMailList.length()-1].mailSN;
mrCore.clickTitle(null,j),mCom.clickPrevNextMail=!1}}else mrCore.clickTitle(null,_woMailList.$value()[0].mailSN);
mCom.bUpdateListForNewMail&&(mCom.bUpdateListForNewMail=!1),mCom.isUpdatingForNewMail&&(mCom.isUpdatingForNewMail=!1);
}pb(),mfCore.updateFolder()};var y=function(){var a=$$(".list_by_attachfile  li"),b=Math.floor(mCom.elList.scrollTop/286),c=Math.ceil(mCom.elList.clientHeight/286);
mCom.nStartLine=Math.max(0,b-2),mCom.nEndLine=Math.min(b+c+2,a.length),_attachShowBodies()},z=function(a,b,c,d,e){
var f=0;if(mCom.cancelUpdateList)return mCom.cancelUpdateList=!1,-1;var g="string"==typeof e.isTruncated?"true"==e.isTruncated:e.isTruncated;
if(g&&(mCom.oBilateral[parseInt(a,10)+1]={offset:e.nextStartOffset,receivedTime:e.lastReceivedTime,mailSN:e.lastMailSN
}),mCom.nCurrentPage=a,mCom.bUpdateListForNewMail||_prepareToParseList(b),$Element("cont_flex_area")&&$Element("cont_flex_area").addClass("nav_endless"),
mCom.elBtnIcoViewTop&&(mCom.elBtnIcoViewTop.style.display="none"),mCom.bAppendigList=!1,mCom.elList.onscroll=T,
"undefined"!=typeof mCom.nCurrentFolder&&/^vip\$/.test(mCom.nCurrentFolder)){var h=mCom.nCurrentFolder.replace(/^vip\$/,""),i=$$.getSingle(".section_mymail.vip_mail li[data-vipemail="+h+"]");
e.folderName=i?$Element(i).attr("data-vipname"):mCom.nCurrentFolder.replace(/^vip\$/,"")}else"undefined"!=typeof mCom.nCurrentFolder&&/^bil\$/.test(mCom.nCurrentFolder)&&(e.folderName=nLang.l.show_bilateral,
mcCore.isNwe()&&setLcs("","listthreadtlist"));var j=[],k=-1,l=e.mailData;_nMailListLength=l?l.length:0,
mCom.nCurFolderName=e.folderName,_setBrowserTitleForList();var m=mlTemplate.oListTemplate,n=m.head;n=mEnv.omitSubject?n.replace(/\{OmitSubject\}/g,"single"):n.replace(/\{OmitSubject\}/g,""),
n=mEnv.preview?n.replace(/\{PreviewNone\}/g,""):n.replace(/\{PreviewNone\}/g,"preview_none"),n=myContextMenu.isUseContextMenu()?n.replace(/\{ShowSenderContext\}/g,"sender_context"):n.replace(/\{ShowSenderContext\}/g,""),
n=mcCore.isNaver()||12!=b?n.replace(/\{Approve\}/g,""):n.replace(/\{Approve\}/g,"mailList_approve"),
j[++k]=n,n=null,nNewLastMailSN=mCom.nCurLastMailSN;var o=0,p=Math.min(l.length,r);for(U()&&(mCom.oRecentListData=e,
p>mCom.nExpectedShowMailCount&&(p=mCom.nExpectedShowMailCount));p>o;){var q=m.body,s=l[o],t=parseInt(s.status,10);
q=_makeRow(q,b,s,e.currentTime,""),j[++k]=q,0==o&&(_elCurMail=s.mailSN);var u={};if(u.mailSN=s.mailSN,
u.folderSN=s.folderSN,u.status=s.status,u.attachCount=s.attachCount,u.size=s.size,u.subject=s.subject,
u.fromAddr=s.from.email,u.fromName=s.from.name,u.toAddr=s.toList?s.toList[0].email:"",u.iconType=s.iconType,
u.highlight=s.highlight,u.importantAddress=s.importantAddress,u.securityLevel=s.securityLevel,u.category=s.category,
"undefined"!=typeof s.reSend&&(u.reSend=s.reSend),u.isRead=mcCore.isCorrespondFlag(t,"0x4"),u.isMarked=mcCore.isCorrespondFlag(t,"0x20"),
mCom.bUpdateListForNewMail){if(!(mCom.nCurLastMailSN<s.mailSN)){_woMailList.forEach(function(a){if(u.mailSN==a.mailSN&&u.isRead!=a.isRead){
a.isRead=u.isRead;var b=$$.getSingle("li[mailsn="+u.mailSN+"]",mCom.elList);if(b){$Element(b).toggleClass("notRead");
var c=$Element($$.getSingle("li.read a.icoRead",b));c&&c.toggleClass("no","yes")}b=null}}),s=u=q=null,
o++;continue}f++,s.mailSN>=nNewLastMailSN&&(nNewLastMailSN=s.mailSN),_woMailList.unshift(u)}else mCom.nCurLastMailSN<s.mailSN&&(mCom.nCurLastMailSN=s.mailSN),
_woMailList.push(u);s=u=q=null,o++}if(mCom.bUpdateListForNewMail){if(mCom.nCurLastMailSN=nNewLastMailSN,
f>0){var v=$Element($$.getSingle(".mailList",mCom.elList));if(!v){var w="mailList";mEnv.omitSubject&&(w+=" single"),
mEnv.preview||(w+=" preview_none"),$Element(mCom.elList).html("<h4 class='blind'>"+mcCore.replaceSpecialChar(sFolderName)+" "+nLang.c.list+"</h4><ol class='"+w+"'></ol>"),
v=$Element($$.getSingle(".mailList",mCom.elList)),w=null}var x=$Element($$.getSingle(".mailList",mCom.elList)),y=_woMailList.length();
if(1!=mCom.nCurSortField||1!=mCom.nCurSortType){var z=y+f-mEnv.listNum;for(z>0&&_woMailList.splice(y-f,f),
o=f;o>0;o--)x.prependHTML(j[o]),z>0&&(x.last().hide(),setTimeout("$Element($$.getSingle('.mailList', mCom.elList)).last().leave()",1));
}else for(o=0,p=f;p>o;o++)x.child().length<mEnv.listNum&&x.appendHTML(j[o]);x=y=z=null}}else j[++k]=m.tail,
mCom.elList.innerHTML="",mCom.elList.innerHTML=e.mailData.length>0?["<h4 class='blind'>",mcCore.replaceSpecialChar(e.folderName)," ",nLang.c.list,"</h4>"].join("")+j.join(""):["<p class='nom'>",nLang.l.nomail,"</p>"].join(""),
$$.getSingle("#mailCheckAll").checked=!1,toggleReadButton(),g?A(a,r+1):A(a,l.length);if(U()?_adjustListButton():(mCom.elList.scrollTop=_bScrollToTop?0:mCom.nListWrapScrollTop,
_bScrollToTop=!0),null!=mCom.mailSNAfterDelete)("list"==mCom.vDivideMode||"list"!=mCom.vDivideMode&&!mCom.isReading)&&(mrCore.clickTitle(null,mCom.mailSNAfterDelete),
mCom.mailSNAfterDelete=null);else if(!mEnv.openFirstMail||"list"==mCom.vDivideMode||mCom.isReading||mCom.clickPrevNextMail){
if("list"!=mCom.vDivideMode&&mCom.clickPrevNextMail){var B=1==mCom.clickPrevNextMail?_woMailList.$value()[0].mailSN:_woMailList.$value()[_woMailList.length()-1].mailSN;
mrCore.clickTitle(null,B),mCom.clickPrevNextMail=!1}}else mrCore.clickTitle(null,_woMailList.$value()[0].mailSN);
_replaceHeadUnreadNum($$.getSingle("#headUnreadNumWrap"),b),$Element("headTotalNum").className("allMail _c1(mfCore|clickFolder|"+b+") _ccr(ltp.eall) _stopDefault"),
$$.getSingle("#headFolderName").innerHTML=$S(e.folderName).escapeHTML().$value()+'<span class="bar"></span>',
$$.getSingle("#headUnreadNum").innerHTML=e.unreadCount<0?0:e.unreadCount,$Element($$.getSingle("#titleSplitBar")).css("display","none"),
$$.getSingle("#headUnreadNum").innerHTML="",$$.getSingle("#headTotalNum").innerHTML="",$$.getSingle(".mailList",mCom.elList)&&$Element($$.getSingle(".mailList",mCom.elList)).removeClass("send_viewSender"),
mfCore.updateFolder(),mCom.bUpdateListForNewMail=!1,mCom.isUpdatingForNewMail=!1,pb()},A=function(a,b){
var c='<div class="list_autoload"><p class="al_msg">',d=r+1;a=parseInt(a,10);var e=a+1,f=a-1,g=!1;a>1&&(c+='<button class="_ccr(als.prev) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+f+'||true)"><span class="bu_prev"></span>'+nLang.l.prev_list+"</button>",
g=!0),b===d&&(c+='<button class="_ccr(als.next) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+e+')">'+nLang.l.next_list+'<span class="bu_next"></span></button>',
g=!0),c+="</p></div>",g&&!$$.getSingle(".list_autoload",mCom.elList)&&$Element(mCom.elList).append(c);
};toggleSubListForSenderView=function(a,b){hideAllLayer();var c=$$.getSingle("ul[data-address="+b+"]");
if(c)if($Element(c).hasClass("fold"))_makeSubListForSenderView(b),a&&mcCore.requestAjax({sUrl:"/json/option/senderViewAddress/remove/",
oParameter:{foldAddress:b},fCallback:function(){w(mCom.currentReadMailSN)}});else{var d=$$.getSingle("div.listWrap[data-address="+b+"]");
$Element(c).addClass("fold"),$Element(d).addClass("fold"),$Element($$.getSingle("li.sender em",c)).removeClass("ic_unfold").addClass("ic_fold");
for(var e=$$("li[mailsn]",d),f=$A([]),g=0;g<e.length;g++)f.push($Element(e[g]).attr("mailsn"));_woCurMailList=_woCurMailList.filter(function(a){
return!f.has(a.mailSN+"")}),_woMailList=_woMailList.filter(function(a){return!f.has(a.mailSN+"")}),mCom.listCursor=_getSequenceOfMail(mCom.listCursorMailSN),
d.innerHTML="",mcCore.requestAjax({sUrl:"/json/option/senderViewAddress/add/",oParameter:{foldAddress:b
},fCallback:function(){}}),w(mCom.currentReadMailSN)}},_makeSubListForSenderView=function(a,b,c){"boolean"!=typeof b&&(b=!0),
"object"!=typeof c&&(c={});var d=mCom.nCurrentFolder,e=mlTemplate.oListTemplate,f=$$.getSingle("div.listWrap[data-address="+a+"]");
f&&mcCore.requestAjax({async:b,oParameter:{sender:a,folderSN:"all"==mCom.nCurrentFolder?-1:mCom.nCurrentFolder,
startOffset:0,pageSize:20},sUrl:"/json/list/specificSender/",fCallback:$Fn(function(b){if(f){if(b.mailData.length<1)return $Element(f).leave(),
void $Element($$.getSingle("ul.infor_sender[data-address="+a+"]")).leave();var g=[],h=-1,i=b.mailData,j=e.head;
j=mEnv.omitSubject?j.replace(/\{OmitSubject\}/g,"single"):j.replace(/\{OmitSubject\}/g,""),j=mEnv.preview?j.replace(/\{PreviewNone\}/g,""):j.replace(/\{PreviewNone\}/g,"preview_none"),
j=myContextMenu.isUseContextMenu()?j.replace(/\{ShowSenderContext\}/g,"sender_context"):j.replace(/\{ShowSenderContext\}/g,""),
j=mcCore.isNaver()||12!=d?j.replace(/\{Approve\}/g,""):j.replace(/\{Approve\}/g,"mailList_approve"),
g[++h]=j;for(var k=0,l=i.length>20?20:i.length,m="all"==d?"all":"";l>k;){var n=e.body,o=i[k];if(c[a])var p=!0;else var p=!1;
k>=5&&!p&&(o.hideMail=!0),n=_makeRow(n,d,o,b.currentTime,m),g[++h]=n;var q={};q.mailSN=o.mailSN,q.folderSN=o.folderSN,
q.status=o.status,q.attachCount=o.attachCount,q.size=o.size,q.subject=o.subject,1==d||3==d?(q.fromAddr=o.toList[0].email,
q.fromName=o.toList[0].name):(q.fromAddr=o.from.email,q.fromName=o.from.name),q.toAddr=o.toList?o.toList[0].email:"",
q.iconType=o.iconType,q.highlight=o.highlight,q.importantAddress=o.importantAddress,q.securityLevel=o.securityLevel,
q.receiveByBcc=o.receiveByBcc,q.category=o.category,"undefined"!=typeof o.reSend&&(q.reSend=o.reSend);
var r=parseInt(o.status,10);q.isRead=mcCore.isCorrespondFlag(r,"0x4")?!0:!1,q.isMarked=mcCore.isCorrespondFlag(r,"0x20")?!0:!1,
_woMailList.push(q),k++}if(g[++h]=e.tail,i.length>5)if(p){var s=$$.getSingle("a[data-totalcount]",$$.getSingle("ul[data-address="+a+"]"));
s&&Number(s.innerHTML)>20&&(g[++h]='<p class="more _ccr(lst.senderall) _c1(mlCore|showMoreSubListForSenderView|'+a+') _stopDefault"><a href="#">'+nLang.c.all_by_sender_view+'</a><em class="ic">▼</em></p>');
}else g[++h]='<p class="more _ccr(lst.sendermore) _c1(mlCore|showMoreSubListForSenderView|'+a+') _stopDefault"><a href="#">'+nLang.c.more_by_sender_view+'</a><em class="ic">▼</em></p>';
f.innerHTML=g.join(""),$Element(f).removeClass("fold"),elUlList=$$.getSingle("ul[data-address="+a+"]"),
$Element(elUlList).removeClass("fold"),$Element($$.getSingle("li.sender em",elUlList)).removeClass("ic_fold").addClass("ic_unfold"),
mCom.listCursor=_getSequenceOfMail(mCom.listCursorMailSN),w(mCom.currentReadMailSN)}},this).bind()});
};var B=function(a){if(!mCom.sCurFilterType){mcCore.requestAjax({fCallback:$Fn(function(a){for(var b=a.senderInfoList,c=$A([]),d=0,e=b.length;e>d;d++){
var f=b[d];c.push(f.from.email);var g=$$.getSingle("ul[data-address="+f.from.email+"]");g&&($$.getSingle("a[data-unreadcount]",g).innerHTML=f.unreadCount,
$$.getSingle("a[data-totalcount]",g).innerHTML=f.totalCount,f.unreadCount>0?$Element(g).addClass("has_unread"):$Element(g).removeClass("has_unread"));
}var h=$A($$("ul[data-address]"));h.forEach(function(a){var b=$Element(a).attr("data-address");c.has(b)||($Element(a).leave(),
$Element($$.getSingle("div.listWrap[data-address="+b+"]")).leave())}),h=$A($$("ul[data-address]")),h.length()<1&&(mCom.elList.innerHTML=["<p class='nom'>",nLang.l.nomail,"</p>"].join(""));
},this).bind(),oParameter:mCom.oCurRequest,sUrl:"/json/list/sender/"});var b={};a=a||[],$A(a).forEach(function(a){
var c=$$.getSingle("li[mailsn="+a+"]");if(c){var d=$Element($$.getSingle("! div.listWrap",c)).attr("data-address");
b[d]=!0}});for(var c={},d=$$("div.listWrap[data-address]"),e=0;e<d.length;e++){var f=$$("li[mailsn][@display!=none]",d[e]).length;
f>5&&(c[$Element(d[e]).attr("data-address")]=!0)}for(var g in b)_makeSubListForSenderView(g,!1,c)}},C=function(a,b){
var c=$$.getSingle("div.listWrap[data-address="+b+"]");if(c){var d=$$("li[@display=none]",c);if(d.length>0){
if($ElementList(d).show(),a&&a.element){"P"!=a.element.tagName&&(a.element=a.element.parentNode);var e=$$.getSingle("a[data-totalcount]",$$.getSingle("ul[data-address="+b+"]"));
e&&Number(e.innerHTML)>20?$$.getSingle("a",a.element).innerHTML=nLang.c.all_by_sender_view:$Element(a.element).hide();
}}else D(null,b,"all")}},D=function(a,b,c){if(!(a&&a.element&&Number(a.element.innerHTML)<1)){$$.getSingle("#searchKeyWord").value=b;
var d={folderSN:"all"==mCom.nCurrentFolder?-1:mCom.nCurrentFolder,page:1,from:b,sortField:"11"==mCom.nCurSortField?"1":mCom.nCurSortField,
sortType:mCom.nCurSortType,useSearchHistory:!1};doSearch_new(null,"simple",null,c,null,null,d)}};fParseListBo=function(a,b,c,d,e){
if(mCom.cancelUpdateList)return void(mCom.cancelUpdateList=!1);var f=fb();"C"==f&&e.lastOffset&&ab(Number(c)+1,Number(e.lastOffset)+1),
mCom.nCurFolderTotalMailCount=e.totalCount,mCom.nCurFolderTotalUnreadCount=e.unreadCount,mCom.bUpdateListForNewMail||_prepareToParseList(d);
var g=[],h=-1,i=e.mailData;if(_nMailListLength=i?i.length:0,"undefined"!=typeof mCom.nCurrentFolder&&/^vip\$/.test(mCom.nCurrentFolder)){
var j=mCom.nCurrentFolder.replace(/^vip\$/,""),k=$$.getSingle(".section_mymail.vip_mail li[data-vipemail="+j+"]");
e.folderName=k?$Element(k).attr("data-vipname"):mCom.nCurrentFolder.replace(/^vip\$/,"")}var l=e.folderName.split("/"),m=l[l.length-1];
if(mCom.nCurFolderName=e.folderName,_setBrowserTitleForList(),mCom.bUpdateListForNewMail)var n=0,o=mCom.nCurLastMailSN;else{
var p=a.head;p=mEnv.omitSubject?p.replace(/\{OmitSubject\}/g,"single"):p.replace(/\{OmitSubject\}/g,""),
p=mEnv.preview?p.replace(/\{PreviewNone\}/g,""):p.replace(/\{PreviewNone\}/g,"preview_none"),p=myContextMenu.isUseContextMenu()?p.replace(/\{ShowSenderContext\}/g,"sender_context"):p.replace(/\{ShowSenderContext\}/g,""),
p=mcCore.isNaver()||12!=d?p.replace(/\{Approve\}/g,""):p.replace(/\{Approve\}/g,"mailList_approve"),
g[++h]=p,p=null,mCom.nCurLastMailSN=0}var q=0,r=i.length;for(U()&&(mCom.oRecentListData=e,r>mCom.nExpectedShowMailCount&&(r=mCom.nExpectedShowMailCount));r>q;){
var s=i[q],t=parseInt(s.status,10),u=a.body;3===s.folderSN&&(u=mcCore.isAttachView()?mlTemplate.oDraftAttachListTemplate.body:mlTemplate.oDraftListTemplate.body),
u=_makeRow(u,d,s,e.currentTime,b),g[++h]=u,0==q&&(_elCurMail=s.mailSN);var v={};if(s.threadCount&&s.threadCount>1?(v.threadCount=s.threadCount,
v.unreadThreadCount=s.unreadThreadCount,v.mailSN="c"+s.mailSN):v.mailSN=s.mailSN,v.folderSN=s.folderSN,
v.status=s.status,v.attachCount=s.attachCount,v.size=s.size,v.subjectOrg=s.subjectOrg,v.subject=s.subject,
1==d||3==d||"remind"==d&&1==s.folderSN?(v.fromAddr=s.toList[0].email,v.fromName=s.toList[0].name):(v.fromAddr=s.from.email,
v.fromName=s.from.name),v.toAddr=s.toList?s.toList[0].email:"",v.iconType=s.iconType,v.highlight=s.highlight,
v.importantAddress=s.importantAddress,v.securityLevel=s.securityLevel,v.receiveByBcc=s.receiveByBcc,
v.category=s.category,"undefined"!=typeof s.reSend&&(v.reSend=s.reSend),v.isRead=mcCore.isCorrespondFlag(t,"0x4")?!0:!1,
v.isMarked=mcCore.isCorrespondFlag(t,"0x20")?!0:!1,mCom.bUpdateListForNewMail){if(!(mCom.nCurLastMailSN<s.mailSN)){
_woMailList.forEach(function(a){if(v.mailSN==a.mailSN&&v.isRead!=a.isRead){a.isRead=v.isRead;var b=$$.getSingle("li[mailsn="+v.mailSN+"]",mCom.elList);
if(b){$Element(b).toggleClass("notRead");var c=$Element($$.getSingle("li.read a.icoRead",b));c&&c.toggleClass("no","yes");
}b=null}}),s=v=u=null,q++;continue}n++,s.mailSN>=o&&(o=s.mailSN),_woMailList.unshift(v)}else mCom.nCurLastMailSN<s.mailSN&&(mCom.nCurLastMailSN=s.mailSN),
_woMailList.push(v);s=v=u=null,q++}if(mCom.bUpdateListForNewMail){if(mCom.nCurLastMailSN=o,n>0){var x=$Element($$.getSingle(".mailList",mCom.elList));
if(!x){var y="mailList";mEnv.omitSubject&&(y+=" single"),mEnv.preview||(y+=" preview_none"),$Element(mCom.elList).html("<h4 class='blind'>"+mcCore.replaceSpecialChar(m)+" "+nLang.c.list+"</h4><ol class='"+y+"'></ol>"),
x=$Element($$.getSingle(".mailList",mCom.elList)),y=null}var z=$Element($$.getSingle(".mailList",mCom.elList)),A=_woMailList.length();
if(1!=mCom.nCurSortField||1!=mCom.nCurSortType){var B=A+n-mEnv.listNum;B>0&&_woMailList.splice(A-n,n);
for(var q=n;q--;)z.prependHTML(g[q]),B>0&&(z.last().hide(),setTimeout("$Element($$.getSingle('.mailList', mCom.elList)).last().leave()",1));
}else for(var q=0,r=n;r>q;q++)z.child().length<mEnv.listNum&&z.appendHTML(g[q]);z=A=B=null}}else{if(g[++h]=a.tail,
mCom.elList.innerHTML="",e.mailData.length>0)mCom.elList.innerHTML=["<h4 class='blind'>",mcCore.replaceSpecialChar(m)," ",nLang.c.list,"</h4>"].join("")+g.join("");else{
var C=!mcCore.isNaver()&&(d>=1e7||6==d)?nLang.m.nomemo:nLang.l.nomail;mCom.elList.innerHTML=["<p class='nom'>",C,"</p>"].join("");
}$$.getSingle("#mailCheckAll").checked=!1,toggleReadButton(),_makePages(c,e.lastPage,d,b)}if("thread"==b)_replaceHeadUnreadNum($$.getSingle("#headUnreadNumWrap"),d),
$Element("headTotalNum").className("allMail _c1(mfCore|clickFolder|thread) _ccr(ltp.eall) _stopDefault");else{
var D=$$.getSingle("#headUnreadNumWrap");_replaceHeadUnreadNum(D,d),$Element("headTotalNum").className("allMail _c1(mfCore|clickFolder|"+d+") _ccr(ltp.eall) _stopDefault");
}$$.getSingle("#listName").innerHTML=$S(m).escapeHTML().$value()+" "+nLang.c.list,$$.getSingle("#headFolderName").innerHTML=$S(m).escapeHTML().$value()+'<span class="bar"></span>',
$$.getSingle("#headUnreadNum").innerHTML=e.unreadCount<0?0:e.unreadCount,"unread"==d||"all"==d&&mCom.bIsUnread?($Element($$.getSingle("#titleSplitBar")).css("display","none"),
$$.getSingle("#headTotalNum").innerHTML=""):d&&/^vip\$/.test(d)?($Element($$.getSingle("#titleSplitBar")).css("display","none"),
mCom.bIsUnread?($$.getSingle("#headUnreadNum").innerHTML=e.totalCount<0?0:e.totalCount,$$.getSingle("#headTotalNum").innerHTML=""):($$.getSingle("#headUnreadNum").innerHTML="",
$$.getSingle("#headTotalNum").innerHTML=e.totalCount<0?0:e.totalCount)):($Element($$.getSingle("#titleSplitBar")).css("display","inline-block"),
$$.getSingle("#headTotalNum").innerHTML=e.totalCount<0?0:e.totalCount),$$.getSingle(".mailList",mCom.elList)&&$Element($$.getSingle(".mailList",mCom.elList)).removeClass("send_viewSender"),
r=g=l=m=h=null,mcCore.isNaver()&&mcKoreanclick.getList(d,c);var E,F=mCom.vDivideMode;switch(d){case"all":
mCom.bIsUnread?(E="unread",F="list"):E=d;break;case"attach":E=mcCore.isNwe()?d:"attach";break;case"0":
case"4":case"5":case"7":case"8":E=d;break;case"1":case"3":case"6":E=d,f="T";break;case"mark":case"tome":
case"remind":E=d,F="list";break;case"fromAddr":E="from";break;default:"thread"==b?(E="thread",F="list"):E="mybox";
}return E=mcCore.isNwe()?"list"+E+f+F:"list_"+E,setLcs("",E),mCom.bUpdateListForNewMail||_finishParseList(d),
"remind"==d?mlRemind.listCallback(d,e,c):$Element("cont_flex_area").removeClass("list_remind"),mcCore.getElapsedTime(nLang.c.finish_list_loading),
w(mCom.currentReadMailSN),J(),i.length},_replaceHeadUnreadNum=function(a,b){var c=$Element(a),d=c.html();
c.replace($('<a href="#" id="headUnreadNumWrap" class="newMail _c1(mfCore|clickFolder|'+b+'|unread) _ccr(ltp.unread) _stopDefault">'+d+"</a>"));
},_fParseListForReadReceipt=function(a,b,c,d,e,f){if(!f.mailData.length&&b>1)return void(b>f.lastPage?u(null,"2",mCom.curRCPTType,f.lastPage,d,e):u(null,"2",mCom.curRCPTType,b-1,d,e));
mCom.nCurFolderTotalUnreadCount=0,mCom.nCurFolderName=f.folderName,_setBrowserTitleForList(),U()&&$Element("cont_flex_area")?($Element("cont_flex_area").addClass("nav_endless"),
mCom.elBtnIcoViewTop&&(mCom.elBtnIcoViewTop.style.display=""),mlCore.setNoScroll()):($Element("cont_flex_area").removeClass("nav_endless"),
mCom.elBtnIcoViewTop&&(mCom.elBtnIcoViewTop.style.display="none"),mCom.elList.onscroll=null);fParseListForReadReceiptBo(a,b,c,f);
U()&&_adjustListButton(),"horizontal"==mCom.vDivideMode&&mcCore.toggleDivideMode("horizontal",!0),mfCore.updateFolder(),
pb()},fParseListForReadReceiptBo=function(a,b,c,d){_prepareToParseList(2);var e=[],f=-1,g=d.mailData;
e[++f]="<h4 class='blind'>"+nLang.f.read_receipt+" "+nLang.c.list+"</h4>"+a.head,_nMailListLength=g?g.length:0,
mCom.nCurFolderTotalMailCount=d.totalCount;var h=d.folderName.split("/"),i=h[h.length-1];$$.getSingle("#listName").innerHTML=i+" "+nLang.c.list,
$$.getSingle("#headFolderName").innerHTML=i+'<span class="bar"></span>',$$.getSingle("#headUnreadNum").innerHTML="",
$Element($$.getSingle("#titleSplitBar")).css("display","none"),$Element("headTotalNum").className("allMail _c1(mfCore|clickFolder|2) _stopDefault"),
$$.getSingle("#headTotalNum").innerHTML=d.totalCount;var j=0,k=g.length;U()&&(mCom.oRecentListData=d,
k>mCom.nExpectedShowMailCount&&(k=mCom.nExpectedShowMailCount));for(var j=0;k>j;j++){var l=a.body;if(0==j&&(_elCurMail=g[j].mailSN),
1==g[j].receiverCount){var m=g[j];l=_makeRowAtReadReceipt(l,m,m,d.currentTime,!1,d.dlGroupEmailListMap[m.rcptAddress]?"detail":null);
var n={};n.mailSN=m.mailSN,n.isChild="orphan",n.email=m.rcptAddress,n.isReserved=m.isReserved,n.isDelayDelivery=m.isDelayDelivery,
n.isSaveSentMail=m.isSaveSentMail,n.size=m.size,n.subject=m.subject,n.fromAddr=mEnv.mailAddress,"undefined"!=typeof m.reSend&&(n.reSend=m.reSend),
_woMailList.push(n),_woParentMailList.push(n),n=null}else{var m=g[j],o={};o.TogglePlus=mlTemplate.sPlusButton.replace("{MailSN}",m.mailSN),
o.MailSN=m.mailSN,o.FolderSN=2,o.Email="parent",o.CheckCcr="lst.selectcheck";var n={};n.mailSN=m.mailSN,
n.isChild="parent",n.email="parent",n.childNum=m.receiverCount,n.subject=m.subject,n.sentTime=m.sentTime,
n.isDelayDelivery=m.isDelayDelivery,n.iconType=m.iconType,n.isReserved=m.isReserved,n.isSaveSentMail=m.isSaveSentMail,
n.size=m.size,n.subject=m.subject,"undefined"!=typeof m.reSend&&(n.reSend=m.reSend),_woMailList.push(n),
_woParentMailList.push(n),o.IsEmergency=makeEmergencyMark(m),o.SubjectString=m.subject.match(/^\s*$/)?nLang.l.no_title:m.subject.replace(/\$/g,"&#36;"),
o.SentDate=mcCore.getHumanTime(m.sentTime,d.currentTime,"sentTime"),o.reserve=m.isReserved?" <span class='reserve'>"+nLang.c.reserve+"<span class='blind'>"+nLang.c.mail+"</span></span>":m.isDelayDelivery?" <span class='suspend'>"+nLang.c.wait+"<span class='blind'>"+nLang.c.mail+"</span></span>":"",
o.FromName=0!=m.readCount&&mEnv.useReadReceipt?"en_US"===cCode?nLang.l.count_read_receiver+" "+m.readCount+" "+nLang.l.during_receiver+" "+m.receiverCount:m.receiverCount+nLang.l.during_receiver+m.readCount+nLang.l.count_read_receiver:m.receiverCount+nLang.l.count_receiver,
o.ReceiverTag="span",o.ReceiverAttr="class='_c1() _stopDefault'",o.ReceiptStatus="<span class=''><span class='blind'>"+nLang.l.receipt_date+"</span></span>",
o.CancelPost=m.isReserved||m.isDelayDelivery?_makeReserveString(m.messageID,m.rcptAddress,m.mailSN,m.sentTime,m.isSaveSentMail,m.isDelayDelivery):"Y"==m.availableCancel&&"SENDING"!=m.status?_makeRetrieveString("",m.rcptAddress,m.mailSN,m.receiverCount):"",
l=mcCore.template(l,o),sSubBody=o=oStatus=null}e[++f]=l,m=l=null}return e[++f]=a.tail,mCom.elList.innerHTML=d.mailData.length>0?e.join(""):"read"==c?"<h4 class='blind'>"+nLang.f.read_receipt+" "+nLang.c.list+"</h4><p class='nom'>"+nLang.l.no_read_mail_in_receipt+"</p>":"unread"==c?"<h4 class='blind'>"+nLang.f.read_receipt+" "+nLang.c.list+"</h4><p class='nom'>"+nLang.l.no_unread_mail_in_receipt+"</p>":"<h4 class='blind'>"+nLang.f.read_receipt+" "+nLang.c.list+"</h4><p class='nom'>"+nLang.l.no_mail_in_receipt+"</p>",
e=null,$$.getSingle("#mailCheckAll").checked=!1,toggleReadButton(),_makePages(b,d.lastPage,"2"),_finishParseList(2),
mcCore.isNaver()&&mcKoreanclick.getList(2,b),setLcs("",mcCore.isNwe()?"listreadreceipttlist":"list_readReceipt"),
mcCore.getElapsedTime(nLang.c.finish_list_loading),g.length},_makeRowAtReadReceipt=function(a,b,c,d,e,f){
var g={},h={NOT_READ:["",nLang.l.unread_2],SENDING:["",nLang.l.sending],READ:["",'<em class="read_mark">✓</em>'+mcCore.getHumanTime(c.readTime,d)],
SEND_FAIL:["",nLang.l.send_fail],BEFORE_SEND:["",nLang.l.before_send],CANCEL_RESERVATION:["",nLang.l.cancelled_reservation],
CANCEL_DELAY:["",nLang.l.cancelled_sending],CANCEL_SEND:["",nLang.l.cancelled_sending],CANCEL_SEND_FAIL:["",nLang.l.unread_2],
TEXT:["",nLang.l.unable_to_check],RECEIVE_BLOCKED:["",nLang.l.block_receive],EXCEED_QUOTA:["",nLang.l.exceed_quota],
NOT_AVAILABLE:["",nLang.l.unable_to_check],SEND_SUCCESS:["",nLang.l.send_success]};if(c.rcptName)var i=c.rcptName.replace(/&quot;/g,"").replace(/\"/g,""),j='"'+i+'" <'+c.rcptAddress+">";else var i=c.rcptAddress,j="<"+i+">";
g.FromName=i.replace(/\$/g,"&#36;"),g.ReceiverTag="a",g.ReceiverAttr="href='#' class='_c1(mfCore|popupWrite|new||"+j.replace(/\(/g,"%28").replace(/\)/g,"%29")+") _ccr(lst.from) _stopDefault'",
g.MailSN=b.mailSN,g.Email=c.rcptAddress,g.CheckCcr="lst.selectcheck";var k=(mcCore.getNaverEmailAddress(),
b.iDomainEmail&&/^.+@.+$/.test(b.iDomainEmail)?b.iDomainEmail:"");g.iDomainEmail="naver"!==mEnv.serviceType&&k&&mEnv.mailAddress!==k?'<em title="'+k+'" class="dependenceMail">'+k.substring(k.indexOf("@"))+'<span class="blind">'+nLang.l.works_tag+"</span></em>":"",
g.IsEmergency=makeEmergencyMark(b),g.SubjectString=b.subject.match(/^\s*$/)?nLang.l.no_title:b.subject.replace(/\$/g,"&#36;"),
g.SentDate=mcCore.getHumanTime(b.sentTime,d,"sentTime");var l=c.status||c.readStatus,m={BEFORE_SEND:"status",
CANCEL_RESERVATION:"status",SENDING:"status",CANCEL_SEND:"statCancel _ccr(lst.dlcancel)",count:"_ccr(lst.dlread)",
detail:"_ccr(lst.dldetail)"};if(!mEnv.useReadReceipt){m.count="_ccr(lst.dldetail)";var n=$A(["NOT_READ","READ","CANCEL_SEND_FAIL","TEXT","PARTIAL_READ","TOTAL_UNREAD","TOTAL_READ"]);
n.has(l)&&(l="SEND_SUCCESS")}if(f){var o=m[l]||m[f];if("status"===o)g.ReceiptStatus="<span class='"+h[l][0]+"'>"+h[l][1]+"</span>";else{
var p="";"_ccr(lst.dlread)"===o?p=nLang.l.read_receiver_count.replace(/{ReadCount}/,c.readCount).replace(/{ReceiverCount}/,c.receiverCount||c.rcptInfoCount):"_ccr(lst.dldetail)"===o?p=nLang.l.view_detail:"statCancel _ccr(lst.dlcancel)"===o&&(p=nLang.l.cancelled_sending),
g.ReceiptStatus="<a href='#' class='"+o+" _c1(mlCore|popupReceiptList|"+b.mailSN+"|"+c.rcptAddress+") _stopDefault'>"+p+"</a>";
}}else g.ReceiptStatus="<span class='"+h[l][0]+"'><span class='blind'>"+nLang.l.receipt_date+"</span>"+h[l][1]+"</span>";
return g.reserve=b.isReserved?" <span class='reserve'>"+nLang.c.reserve+"<span class='blind'>"+nLang.c.mail+"</span></span>":b.isDelayDelivery?" <span class='suspend'>"+nLang.c.wait+"<span class='blind'>"+nLang.c.mail+"</span></span>":"",
g.CancelPost=b.isReserved||b.isDelayDelivery?e?"":_makeReserveString(c.messageID,c.rcptAddress,b.mailSN,b.sentTime,b.isSaveSentMail,b.isDelayDelivery):"Y"==c.availableCancel&&"SENDING"!=c.status?_makeRetrieveString(c.messageID,c.rcptAddress,b.mailSN):"CANCEL_SEND_FAIL"!=l||f?"":"<a class='_c1(myCore|showCancelSentFailLayer) _stopDefault' href='#'>"+nLang.l.cancel_fail+"</a>",
g.TogglePlus="",g.FolderSN=2,l=h=null,mcCore.template(a,g)};var E=function(a,b,c){var d=$$.getSingle("!.rcpt_line",a.element),e=$Element($$.getSingle(".name a",d)).attr("data-name"),f=$Element($$.getSingle(".mail_title",d)).attr("data-subject"),g=["mailSN","dlEmail","dlName","subject"],h=[b,c,e,f];
mcCore.openWindowWithPost("/receipt/recipientPopup","",g,h,"width=510,height=474,resizable=yes,scrollbars=yes");
};_prepareToParseList=function(){_showListAreaForListMode(),mCom.bRunningShorcut=!1,_woMailList=$A([]),
_woParentMailList=$A([]),_elCurMail="",_woCurMailList=$A([]),_woCurParentMailList=$A([]),_checkSelection();
},_finishParseList=function(){mCom.clickPrevNextMail||mUtil.addHotkey("list"),mCom.bActiveWindow&&($$.getSingle("#mailCheckAll").focus(),
$$.getSingle("#mailCheckAll").blur())},_fParseSearchList=function(a,b,c,d,e,f,g){if(mCom.bUpdateListForConversation?mCom.bUpdateListForConversation=!0:clearReadArea(),
_arrangeDivideMode(),mfCore.updateFolder(),mCom.nCurFolderTotalMailCount=g.totalCount,$$.getSingle("#chk_attach").checked="attach"===b?!0:!1,
oPervSearchTerm={from:encodeURI(g.from),to:encodeURI(g.to),body:encodeURI(g.body),content:encodeURI(g.content)
},mCom.oPervSearchTerm=oPervSearchTerm,$$.getSingle("#srch_with_rslt").checked=!1,displayReSearchCheckbox(f),
!g.mailData.length&&c>1)return void(c>g.lastPage?u(null,"search",b,g.lastPage,d,e):u(null,"search",b,c-1,d,e));
U()&&$Element("cont_flex_area")?($Element("cont_flex_area").addClass("nav_endless"),mCom.elBtnIcoViewTop&&(mCom.elBtnIcoViewTop.style.display=""),
mlCore.setNoScroll()):($Element("cont_flex_area").removeClass("nav_endless"),mCom.elBtnIcoViewTop&&(mCom.elBtnIcoViewTop.style.display="none"),
mCom.elList.onscroll=null);var h=_fParseSearchListBo(a,b,c,g);if(U()&&_adjustListButton(),h)if(null!=mCom.mailSNAfterDelete)"list"==mCom.vDivideMode||mCom.isReading||(mrCore.clickTitle(null,mCom.mailSNAfterDelete),
mCom.mailSNAfterDelete=null);else if(!mEnv.openFirstMail||"list"==mCom.vDivideMode||mCom.isReading||mCom.clickPrevNextMail){
if("list"!=mCom.vDivideMode&&mCom.clickPrevNextMail){var i=1==mCom.clickPrevNextMail?_woMailList.$value()[0].mailSN:_woMailList.$value()[_woMailList.length()-1].mailSN;
mrCore.clickTitle(null,i),mCom.clickPrevNextMail=!1}}else mrCore.clickTitle(null,_woMailList.$value()[0].mailSN);
if(_bScrollToTop?mCom.elList.scrollTop=0:_bScrollToTop=!0,pb(),!mCom.isDetailSearch){_initDetailSearchText();
var j=$A(_prevTerms.split(/[,:]/)),k=$A([nLang.c.search_to_term,nLang.c.search_from_term,nLang.c.search_content_term]);
j.forEach(function(a,b){var c=$S(a).trim()._str;k.has(c)&&j.get(b+1)&&F(c,j.get(b+1))})}};var F=function(a,b){
var c=null;switch(a){case nLang.c.search_to_term:$$.getSingle("#ipt_receiver_range").selectedIndex=0,
mUtil.changeSearchReceiverRange($$.getSingle("#ipt_receiver_range option[value=0]"),null),c=$$.getSingle("#ipt_receiver");
break;case nLang.c.search_from_term:c=$$.getSingle("#ipt_sender");break;case nLang.c.search_content_term:
default:$$.getSingle("#ipt_body_range").selectedIndex=0,mUtil.changeSearchBodyRange($$.getSingle("#ipt_body_range option[value=5]"),null),
c=$$.getSingle("#ipt_query")}c.value=mcCore.restoreSpecialChar($S(b).trim()._str)};_fParseSearchListBo=function(a,b,c,d){
_prepareToParseList("search");var e=[],f=-1,g=d.mailData,h=a.head;h=mEnv.omitSubject?h.replace(/\{OmitSubject\}/g,"single"):h.replace(/\{OmitSubject\}/g,""),
h=mEnv.preview?h.replace(/\{PreviewNone\}/g,""):h.replace(/\{PreviewNone\}/g,"preview_none"),h=myContextMenu.isUseContextMenu()?h.replace(/\{ShowSenderContext\}/g,"sender_context"):h.replace(/\{ShowSenderContext\}/g,""),
h=h.replace(/\{Approve\}/g,""),e[++f]=h,h=null,_nMailListLength=g?g.length:0,_prevTerms=d.terms;var j={
from:'<span class="search_keyword"><i class="bar"></i><span class="condition">'+nLang.c.sender_simple_search+':</span><span class="key">{FROM}</span></span>',
to:'<span class="search_keyword"><i class="bar"></i><span class="condition">'+nLang.c.receiver_simple_serach+':</span><span class="key">{TO}</span></span>',
content:'<span class="search_keyword"><i class="bar"></i><span class="condition">'+nLang.c.content_simple_search+':</span><span class="key">{CONTENT}</span></span>',
body:'<span class="search_keyword"><i class="bar"></i><span class="key">{BODY}</span></span>'},k="";d.body&&(k+=j.body.replace(/\{BODY}/,mcCore.replaceSpecialChar(d.body))),
d.from&&(k+=j.from.replace(/\{FROM}/,mcCore.replaceSpecialChar(d.from))),d.to&&(k+=j.to.replace(/\{TO}/,mcCore.replaceSpecialChar(d.to))),
d.content&&(k+=j.content.replace(/\{CONTENT}/,mcCore.replaceSpecialChar(d.content))),$Element("headFolderName").html(nLang.c.search_result),
$Element("headUnreadNum").html(""),$Element("folder_deleteUnreadMails")&&$Element("folder_deleteUnreadMails").hide(),
$Element("listHeadDiv").hide(),$$.getSingle("#searchResultDiv .keyword strong").innerHTML=nLang.c.search_result+" <a title='"+nLang.c.btn_refresh+"' href='#' class='btn_refresh refreshAtList _ccr(clt.refresh) _c1(mlCore|refreshList) _stopDefault'><span class='spr l7'><span class='blind'>"+nLang.c.btn_list_refresh+"</span></span></a> <span class='schMail'>("+d.totalCount+")</span><span class='keyword_cover'>"+k+"</span></span>",
$Element("searchResultDiv").show(),mcCore.adjustTopOfFlexArea();var l=0;for(U()&&(mCom.oRecentListData=d,
_nMailListLength>mCom.nExpectedShowMailCount&&(_nMailListLength=mCom.nExpectedShowMailCount));_nMailListLength>l;){
var m=g[l],n=parseInt(m.status,10),o=3===m.folderSN?mlTemplate.oDraftListTemplate.body:a.body;0==l&&(_elCurMail=m.mailSN);
var p={};if(p.mailSN=m.mailSN,p.folderSN=m.folderSN,p.status=m.status,p.attachCount=m.attachCount,p.size=m.size,
p.subject=m.subject,p.receiveByBcc=m.receiveByBcc,p.category=m.category,"undefined"!=typeof m.reSend&&(p.reSend=m.reSend),
1==m.folderSN||3==m.folderSN?(p.fromAddr=m.replyTo.email,p.fromName=m.replyTo.name):(p.fromAddr=m.from.email,
p.fromName=m.from.name),p.toAddr=m.replyTo?m.replyTo.email:"",p.isRead=mcCore.isCorrespondFlag(n,"0x4")?!0:!1,
p.isMarked=mcCore.isCorrespondFlag(n,"0x20")?!0:!1,_woMailList.push(p),o=_makeRow(o,"search",m,d.currentTime,b),
e[++f]=o,o=null,""!=m.body||m.attachList.length>0){if(mEnv.subjectOnly)var q="<li class='search_preview "+m.mailSN+"_preview {li_horizon}' style='display:none'><p class='{horizontal}'>";else var q="<li class='search_preview "+m.mailSN+"_preview {li_horizon}'><p class='{horizontal}'>";
"horizontal"==mCom.vDivideMode?(q=q.replace(/\{li_horizon\}/g,"li_h"),q=q.replace(/\{horizontal\}/g,"preview_h")):(q=q.replace(/\{li_horizon\}/g,""),
q=q.replace(/\{horizontal\}/g,""));var r=[],s=-1;if(m.body&&(r[++s]=m.body),m.attachList)for(var t=0,u=m.attachList.length;u>t;){
var v=m.attachList[t],w=i?encodeURIComponent(v.filename):"",x=mcCore.isBlockedExtension(v.attachName.replace(/<b class='_search'>/g,"").replace(/<\/b>/g,""));
r[++s]=x?"<a href='javascript:;' class='attachfile _c1(myCore|downloadBlocked) _stopDefault'><span class='icoFile'></span>"+v.attachName+"</a> "+v.attachBody:"<a class='attachfile' target='checkVirusArea' href='/file/download/each/"+w+"?attachType=normal&flag=download&mailSN="+m.mailSN+"&attachIndex="+v.partSN+"'><span class='icoFile'></span>"+v.attachName+"</a> "+v.attachBody,
v=null,t++}q+=r.join("<br><br>"),q+="</p></li>",e[++f]=q,q=null}m=o=null,l++}return e[++f]=a.tail,mCom.elList.innerHTML="",
mCom.listCursor=0,$$.getSingle("#searchTitle").checked=mEnv.subjectOnly,mCom.elList.innerHTML=_nMailListLength>0?e.join(""):'<p class="nom">'+nLang.l.no_search_result+"</p>",
document.title=nLang.c.search_result_title+" : "+mcCore.getServiceTitle(),$Element($$.getSingle("#titleSplitBar")).hide(),
$$.getSingle("#headTotalNum").innerHTML=d.totalCount+nLang.c.case_num,mCom.elSelectBtnReadMail.show(),
mCom.elSelectBtnUnReadMail.show(),mCom.elSelectBtnMarkMail.show(),mCom.elSelectBtnUnMarkMail.show(),
$$.getSingle("#mailCheckAll").checked=!1,toggleReadButton(),_makePages(c,d.lastPage,"search"),_finishParseList("search"),
mcCore.isNaver()&&mcKoreanclick.getList("search",c),setLcs("","search"),e=f=k=null,mcCore.getElapsedTime(nLang.c.finish_list_loading),
g.length},_makeRow=function(a,b,c,d,e){var f=parseInt(c.status,10),g={};switch("horizontal"===mCom.vDivideMode?(g.SenderClass="sender_h",
g.SubjectClass="subject_h",g.PaddingRight="li_h"):(g.SenderClass="",g.SubjectClass="",g.PaddingRight=""),
b){case"4":g.CheckCcr="lst.selecttrash";break;case"5":g.CheckCcr="lst.selectspam";break;case"1":g.CheckCcr="lst.selectsent";
break;case"0":g.CheckCcr="lst.selectgot";break;default:g.CheckCcr="lst.selectelse"}mcCore.isNcs()||mcCore.isNwe()?("SECRET"===c.securityLevel?(g.SecurityLevel="<span class='lb_sclevel3 security_mail' level='SECRET' resend='"+c.reSend+"'><strong>"+nLang.l.security_secret+"</strong></span>",
g.SecurityLevelType="SECRET"):"IN_HOUSE"===c.securityLevel?(g.SecurityLevel="<span class='lb_sclevel2 security_mail' level='IN_HOUSE' resend='"+c.reSend+"'><strong>"+nLang.l.security_in_house+"</strong></span>",
g.SecurityLevelType="IN_HOUSE"):(g.SecurityLevel="",g.SecurityLevelType="NORMAL"),g.Resend=c.reSend===!1||c.reSend===!0?c.reSend.toString():""):(g.SecurityLevel="",
g.SecurityLevelType="NORMAL",g.Resend="");var h=c.iDomainEmail&&/^.+@.+$/.test(c.iDomainEmail)?c.iDomainEmail:"";
if(g.iDomainEmail="naver"!==mEnv.serviceType&&h&&mEnv.mailAddress!==h?'<em title="'+h+'" class="dependenceMail">'+h.substring(h.indexOf("@"))+'<span class="blind">'+nLang.l.works_tag+"</span></em>":"",
g.Preview=mEnv.preview?"<span class='spr _m1(mlCore|previewMail|"+c.mailSN+"|"+c.folderSN+") _c1(mlCore|doStop) _stopDefault'><em class='blind'>"+nLang.l.open_preview_mail_layer+"</em></span></a>":"<span class='blind'>"+nLang.l.preview_mail+"</span>",
g.Reserve=mcCore.isCorrespondFlag(f,"0x20000")&&c.sentTime<s?" <a class='ico_reserve'><img width='12' height='12' src='https://"+wm.staticDomain+"/static/pwe/nm/b.gif' alt='"+nLang.l.read_reserve_mail+"'></a>":"",
g.ToMe=c.toMe&&mEnv.useToTag?"<span class='spr ico_recipient _c1(mfCore|clickFolder|tome) _ccr(lst.tome) _stopDefault'><span class='blind'>"+nLang.l.tome_mail+"</span></span>":"",
"5"===b){var i="",j="",k=!1,l="";switch(c.spamType){case"AUTO_MOVE":i="spam_cause_2",j=nLang.c.system_move,
l=nLang.c.tooltip_user,k=!0;break;case"SYSTEM_DEFINE":i="spam_cause_2",j=nLang.c.system_define,l=nLang.c.tooltip_system,
k=!0;break;case"USER_DEFINE":i="spam_cause_2",j=nLang.c.user_define,l=nLang.c.tooltip_user,k=!0;break;
case"USER_REPORT":i="spam_cause_1",j=nLang.c.user_report,l=nLang.c.tooltip_report,k=!0;break;case"USER_MOVE":
i="spam_cause_1",j=nLang.c.user_move,l=nLang.c.tooltip_move,k=!0;break;default:k=!1}g.SpamReason=k===!0?'<em title="'+l+"\" class='spam_cause'><span class='"+i+"'><span class='ico_cause'></span>"+j+"</span></em>":"";
}else g.SpamReason="";c.highlight?(g.IsImportantSender="emphasis",a=a.replace(/\_ccr\(lst.title\)/,"_ccr(lst.highlight)")):g.IsImportantSender="";
var m=c.from.name.replace(/\\&quot;|&quot;|"|'/g,""),n=c.from.email;"1"===b||"3"===b?(m=c.toList[0].name.replace(/\\&quot;|&quot;|"|'/g,""),
n=c.toList[0].email,m=""===m&&""===n?nLang.l.no_email_address:m):"fromAddr"===b||"attach"===b||"tome"===b||"mark"===b?(m=c.from.name.replace(/\\&quot;|&quot;|"|'/g,""),
n=c.from.email):1===c.folderSN||3===c.folderSN?"search"===b?(m=c.replyTo.name.replace(/\\&quot;|&quot;|"|'/g,""),
n=c.replyTo.email,m=""===m&&""===n?nLang.l.no_email_address:m):"thread"===e?(m=c.toList[0].name.replace(/\\&quot;|&quot;|"|'/g,""),
n=c.toList[0].email):"conversation"===e?(m=c.from.name.replace(/\\&quot;|&quot;|"|'/g,""),n=c.from.email):"remind"===b?(m=c.from.name.replace(/\\&quot;|&quot;|"|'/g,""),
n=c.from.email):(m=c.from.name.replace(/\\&quot;|&quot;|"|'/g,""),n=c.from.email):(m=c.from.name.replace(/\\&quot;|&quot;|"|'/g,""),
n=c.from.email);var o="";if(""===m?(m=n,o="<"+m+">"):o='"'+m+'" <'+n+">","12"!==b||mcCore.isNaver())g.ApproveStat="";else{
var p,q;switch(mcCore.checkApprovalStatus(f)){case"hold":p="stat_hold",q=nLang.l.approve_hold;break;case"approved":
p="stat_approval",q=nLang.l.approve_authorize;break;case"rejected":p="stat_disapproval",q=nLang.l.approve_reject;
break;default:p="",q=""}g.ApproveStat="<li class='approve_status'><span class='"+p+"'>"+q+"</span></li>";
}if(m.replace(/\$/g,"&#36;"),o.replace(/\$/g,"&#36;"),myContextMenu.isUseContextMenu()){var r="a",t="_c1(myContextMenu|showSenderContextLayer|list|{MailSN}) _stopDefault";
m===nLang.l.no_email_address&&""===n&&(r="span",t="_c1(myContextMenu|noReceiver) _stopDefault"),g.FromName="horizontal"!==mCom.vDivideMode?["<",r," title='",o,"' class='",t,"' href='#'>",mcCore.cutStringByWidth(m,130),"</",r,">"].join(""):["<",r," title='",o,"' class='",t,"' href='#'>",m,"</",r,">"].join("");
}else g.FromName="horizontal"!==mCom.vDivideMode?["<a title='",o,"' class='_c1(mfCore|popupWrite|new||{MailSN}) _stopDefault' href='#'>",mcCore.cutStringByWidth(m,130),"</a>"].join(""):["<a title='",o,"' class='_c1(mfCore|popupWrite|new||{MailSN}) _stopDefault' href='#'>",m,"</a>"].join("");
if("search"!==b||""===c.body&&0===c.attachList.length?(g.PlusButton="",g.hasPreview="",a=a.replace(/\{PlusButton\}/,"")):(g.hasPreview="has_preview",
a=a.replace(/\{PlusButton\}/,mlTemplate.sPlusButtonForSearch),g.viewMore=mEnv.subjectOnly?"open":"close"),
!mcCore.isNaver()&&("6"===b||Number(b)>=1e7)){var u=new RegExp(nLang.l.preview_mail,"g"),v=new RegExp(nLang.l.view_popup,"g");
a=a.replace(u,nLang.m.preview_mail).replace(v,nLang.m.view_popup)}g.IsEmergency=makeEmergencyMark(c),
g.Style="",c.color&&"#000000"!==c.color&&"#ffffff"!==c.color?(g.BackgroundColor='bgColor ="'+c.color+'"',
g.Style+="background-color:"+c.color+";"):g.BackgroundColor="",c.hideMail&&(g.Style+="display:none;");
var w="";w=1!==c.folderSN&&2!==c.folderSN||0===c.receivedTime?mcCore.getHumanTime(c.receivedTime,d):mcCore.getHumanTime(c.sentTime,d);
var x="",y="",z="",A="";if(!mcCore.isCorrespondFlag(f,"0x4")||c.unreadThreadCount?(x="no",y="notRead",
z=mcCore.getMemoboxString("not_read_mail",b,"r"),g.readStatus="read"):(x="yes",y="",z=mcCore.getMemoboxString("read_mail",b,"r"),
g.readStatus="unread"),mcCore.isCorrespondFlag(f,"0x8000")?x="admin":mcCore.isCorrespondFlag(f,"0x10")?"yes"===x?(x="fw",
z=mcCore.getMemoboxString("forward_read_mail",b,"l")):(x="nofw",z=mcCore.getMemoboxString("forward_no_read_mail",b,"l")):mcCore.isCorrespondFlag(f,"0x8")?"yes"===x?(x="re",
z=mcCore.getMemoboxString("reply_read_mail",b,"l")):(x="nore",z=mcCore.getMemoboxString("reply_no_read_mail",b,"l")):c.iconType>0&&(A="ext"+c.iconType),
mcCore.isCorrespondFlag(f,"0x400000")?(x="cal",z=nLang.l.calendar_mail):mcCore.checkApprovalStatus(f)?(x="ico_approve",
z=nLang.l.approve_mail):mcCore.checkWorkflowStatus&&mcCore.checkWorkflowStatus(f)&&(x="ico_approve",
z="Workflow 메일"),mcCore.isCorrespondFlag(f,"0x200")&&(x="npay",z=nLang.l.npay_mail),mcCore.isCorrespondFlag(f,"0x0000100000000000")&&(x="nsign",
z=nLang.l.nsign_mail),g.IsRead=x,g.bIsRead=y,g.ReadMsg=g.readStatusText=z,g.externIcon=A,c.subject.match(/^\s*$/)&&(c.subject=nLang.l.no_title),
c.threadCount&&c.threadCount>1?(g.threadCount=c.threadCount>99?"99+":c.threadCount,g.threadIcoDisplay="",
g.titleClickTag="lst.threadtitle",g.readIcoDisplay="style='display:none;'",g.MailSN="c"+c.mailSN,c.subjectOrg=c.subject.replace(/[\s\n\t]+$/g,""),
c.subject=c.subjectOrg+(c.unreadThreadCount>0?" <span>("+c.unreadThreadCount+")</span>":" <span></span>")):(g.threadIcoDisplay="style='display:none;'",
g.titleClickTag="lst.title",g.readIcoDisplay="",g.MailSN=c.mailSN),g.FromName=g.FromName.replace(/{MailSN}/g,g.MailSN),
g.SubjectString=c.subject.replace(/\$/g,"&#36;"),"conversation"===e&&(g.isConversationList="|true"),
g.FolderSN=c.folderSN,g.ReceivedDate=mcCore.isCorrespondFlag(f,"0x4000")?w+" <span class='reserve'>"+nLang.c.reserve+"<span class='blind'>"+nLang.c.mail+"</span></span>":mcCore.isCorrespondFlag(f,"0x10000")?w+" <span class='suspend'>"+nLang.c.wait+"<span class='blind'>"+nLang.c.mail+"</span></span>":"remind"!==b&&mlRemind.isRemindMail(c)?w+mlRemind.makeRemindTimeForList(c,d):mcCore.isCorrespondFlag(f,"0x8000000000")?w+"<span class='reserve canceled'>"+nLang.c.reserve+"<span class='blind'>"+nLang.c.mail+"</span></span>":mcCore.isCorrespondFlag(f,"0x10000000000")?w+"<span class='reserve canceled'>"+nLang.c.wait+"<span class='blind'>"+nLang.c.mail+"</span></span>":mcCore.isCorrespondFlag(f,"0x20000")&&c.sentTime>=s?w+"<span class='reserve canceled'>"+nLang.c.sending+"<span class='blind'>"+nLang.c.mail+"</span></span>":w,
parseInt(c.attachCount,10)>0||mcCore.isCorrespondFlag(f,"0x1000")?(g.hasFile="icoFile",g.FileMsg=nLang.l.have_attach,
g.FileBlindMsg=nLang.l.have_attach_mail):(g.hasFile="",g.FileMsg="",g.FileBlindMsg=""),mcCore.isCorrespondFlag(f,"0x20")?(g.Mark="unmark",
g.IsImportant="icoImportantOn",g.bIsImportant="true",g.ImportantMsg=nLang.c.unmark_inportant_mail,g.isMarked="mark"):(g.Mark="mark",
g.IsImportant="icoImportantOff",g.bIsImportant="false",g.ImportantMsg=nLang.c.mark_inportant_mail,g.isMarked="unmark"),
g.sendMail=makeSendmailIcon(c),mCom.bIsUnread&&"all"!==b&&"mark"!==b&&"attach"!==b&&"tome"!==b&&"thread"!==b&&"fromAddr"!==b&&!/^vip\$/.test(b)||mCom.sCurFilterType)g.FolderName="";else if(null!==e&&""!==e){
var B=mcCore.findFolderName(c.folderSN,!0)||nLang.f.no_folder;g.FolderName="["+B+"] ",B=null}else g.FolderName="";
var C=c.size,D='<li class="iSize"><span class="blind">'+nLang.c.size_2+":</span>{MailSize}</li>",E=" MB";
return C>1048576?(C=C/1048576+"",E=" MB"):C>1024?(C=C/1024+"",E=" KB"):(C+="",E=" B"),-1!==C.indexOf(".")&&(C=C.substring(0,C.indexOf(".")+2)),
C+=E,D=D.replace("{MailSize}",C),g.MailSize=C,g.SizeInfo="remind"===b?mlRemind.makeReimindTimeForRemindBox(c,d):D,
mcCore.isAttachView()&&(g.AttachBody=_getAttachBody(c),g.AttachNav=_getAttachNav(c)),("3"===b||"3"==c.folderSN&&mcCore.isAttach())&&(g.DraftMemo=mcCore.isCorrespondFlag(f,"0x2000000000")?"1":"0"),
g.Category=c.category,mcCore.improvedTemplate(a,g)},_getAttachBody=function(a){var b="",c=a.attachInfo.length;
a.bigFile&&c++;var d=c>2;d&&(mCom.oCloudSaveData[a.mailSN]={keys:["service"],values:["mail"],blockFileList:[],
attachCount:a.attachInfo.length});for(var e=0,f=a.attachInfo.length;f>e;e++){var g=!1;b+=_makeAttachBodyElement(a,e,g,d);
}return a.bigFile&&(b+=_makeAttachBigFileBodyElement(a)),""==b&&(b+=_makeAllDeletedBodyElement()),b};
var G='<p class="attach_card_nav"><a id="save_all" href="javascript:;" class="_ccr(mrd_att.allsave) _c1(myCore|showDownloadAllLayer|{MailSN}) _stopDefault">{DownAllDesc}</a><span class="nav_cnt"><em class="current_page">1</em><span class="slash">/</span><span class="total">{AttachTotal}</span></span><button class="btn_prev _ccr(mrd_att.navi) _c1(mlCore|attachNavClicked|prev) _stopDefault"><span class="blind">{AttachPrevDesc}</span></button><button class="btn_next _ccr(mrd_att.navi) _c1(mlCore|attachNavClicked|next) _stopDefault"><span class="blind">{AttachNextDesc}</span></button></p>';
_getAttachNav=function(a){var b=a.attachInfo.length;if(a.bigFile&&b++,a.attachInfo&&b>2){var c={};return c.MailSN=a.mailSN,
c.DownAllDesc=nLang.r.download_all,c.AttachTotal=Math.ceil(b/2),c.AttachPrevDesc=nLang.l.prev_attach_desc,
c.AttachNextDesc=nLang.l.next_attach_desc,mcCore.improvedTemplate(G,c)}return""},_makeAttachBodyElement=function(a,b,c,d){
var e=mlTemplate.oAttachThumnailTemplate.body,f=a.attachInfo[b],g={},h=f.filename.replace(/\</g,"&lt;").replace(/\>/g,"&gt;"),j=i?encodeURIComponent(h):"",k=document.location.host,l=mcCore.isBlockedExtension(h),n="checkVirusArea";
try{window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)&&(n="_blank");
}catch(o){n="checkVirusArea"}var p=[window.location.protocol+"//"+mEnv.downloadServerInfo+"/file/download/each/",j,"?attachType=normal&","mailSN=",a.mailSN,"&attachIndex=",f.contentSN,"&virus=1&domain=",k,"&u=",mEnv.mailId].join(""),q=[window.location.protocol+"//",mEnv.downloadServerInfo,"/file/download/each/","?attachType=normal","&mailSN=",a.mailSN,"&attachIndex=",f.contentSN,"&mimefilename=","&offset=","&size=",f.contentSize,"&filekey=","&encode=","&attFN=","&charset=","&filetype=","&basedate=","&domain=",k].join(""),r=l?"_c1(myCore|downloadBlocked)":" _c1(mlCore|attachDownloadFileDirect)",s='<a class="btn_savepc  _ccr(mrd_att.download)'+r+' _stopDefault" title="{AttachDownDesc}" target="{AttachDownTarget}" href="" data-url="{DirectDownUrl}">';
if(g.AttachPCDownClass=!l&&h.match(/\.(ndoc|nxls|nppt|nfrm)$/i)?"_c1(mrCore|readWithNHNViewer|"+a.mailSN+"|"+f.contentSN+")":r,
d){var t=mCom.oCloudSaveData[a.mailSN];l?t.blockFileList.push(f.filename):(t.keys.push("resource"),t.values.push(JSON.stringify({
key:"",name:mcCore.restoreSpecialChar(f.filename)||nLang.l.no_title,size:f.decodedSize,downloadUrl:q
})))}g.AttachThumbClass=l?"_c1(myCore|downloadBlocked|preview)":r,g.AttachDownDesc=nLang.r.download_pc,
g.AttachDownTarget=n,g.DirectDownUrl=p,s=mcCore.improvedTemplate(s,g);var u={key:"",name:mcCore.restoreSpecialChar(h),
size:f.contentSize,downloadUrl:q},v="'"+window.location.protocol+"//"+m.info.ndrive.sNdriveUrl+"/saveFile.nhn?service=mail&resource="+encodeURIComponent(JSON.stringify(u))+"'",w=",'ndriveUploadPopup','scrollbars=no,toolbar=no,location=no,resizable=no,status=no,menubar=no,width=476,height=360'",x="";
x=mcCore.isDisplayDrive()?l?'<a class="btn_savendr _c1(myCore|downloadBlocked) _stopDefault" href="javascript:;" title="{AttachNdrTooltip}"></a>':'<a class="btn_savendr" onclick="window.open({AttachNdrOpenUrl}{AttachNdrOption}); ccr(this, &quot;mrd_att.ndrive&quot;, event);" href="javascript:;" title="{AttachNdrTooltip}"></a>':'<a class="btn_savendr disabled" href="javascript:;" title="{AttachNdrTooltip}" style="cursor:default;"></a>',
g.AttachNdrOpenUrl=v,g.AttachNdrOption=w,g.AttachNdrTooltip=mcCore.isNaver()?nLang.r.save_file_ndrive_tooltip:mcCore.isNcs()?nLang.r.save_file_ncsdrive_tooltip:nLang.r.save_file_drive_tooltip,
x=mcCore.improvedTemplate(x,g);var y=l?"_c1(myCore|downloadBlocked|preview)":"_ccr(mrd_att.preview) _c1(mrCore|readWithNHNViewer|"+a.mailSN+"|"+a.attachInfo[b].contentSN+")",z='<a href="javascript:;" class="btn_open_viewer '+y+'_stopDefault"><span class="blind">'+nLang.l.see_in_office_viewer+"</span></a>";
g.AttachFileName=h,g.AttachFileSize=_getHumanFileSize(a.attachInfo[b].decodedSize),g.AttachBodyStyle=c?"":'style="display:none"',
g.IsBlocked=l?"blocked":"";var A=c?"src":"src2",B=h.slice(h.lastIndexOf(".")+1).toLowerCase();if("image"==f.contentType.split("/")[0]){
var C=[window.location.protocol+"//",mEnv.downloadServerInfo+"/read/image/","?attachType=normal","&mailSN=",a.mailSN,"&attachIndex=",f.contentSN,"&contentType=",f.contentType,"&offset=",f.contentOffset,"&size=",f.contentSize,"&maxSize=",200,"&mimeSN=",a.mimeSN,"&u=",mEnv.mailId].join("");
g.AttachImage='<img style="max-width: 100%; max-height: 100%;" class="" '+A+'="'+C+'"  alt="'+h+'">',
g.AttachTaskMenu=s+x}else{var D=l?"etc":_getKnownExtension(B);if(_isThumnailFile(D)){var E='<span class="ext ext_'+D+'"><i>'+D.toUpperCase()+"</i></span>",F=mcCore.isNaver()?"naverMail":mcCore.isNcs()?"ncsMail":mcCore.isNwe()?"worksMail":"",G=encodeURIComponent([window.location.protocol+"//"+mEnv.downloadServerInfo+"/file/download/each/","?attachType=normal","&mailSN=",a.mailSN,"&attachIndex=",f.contentSN,"&virus=1","&domain=",k].join("")),H=[window.location.protocol+"//"+mEnv.docThumbServer+"/doc/thumbnail","?sourceId=",F,"&maxWidth=","159","&maxHeight=","120","&type=","box","&url=",G].join(""),I="<img style=\"display:none; max-width: 100%; max-height: 100%;\"  onload=\"$Element(this).prev().css('display', 'none'); $Element(this).css('display', 'block');\" "+A+'="'+H+'"  alt="'+h+'">';
g.AttachImage=E+I,g.AttachTaskMenu=s+x+z,g.AttachThumbClass=y}else g.AttachImage='<span class="ext ext_'+D+'"><i>'+D.toUpperCase()+"</i></span>",
g.AttachTaskMenu=s+x}return mcCore.improvedTemplate(e,g)},_makeAttachBigFileBodyElement=function(a){
var b=mlTemplate.oAttachBigFileThumnailTemplate.body,c={};return a.attachInfo.length+1>2&&(c.AttachBigVisible="display:none"),
c.AttachReadClass=" _c1(mrCore|clickTitle|"+a.mailSN+")",c.AttachTooltipDesc=nLang.l.attach_bigfile_desc,
c.AttachImage='<span class="ext ext_bigsize"><i>BIG</i></span>',c.AttachFileName=nLang.l.big_attach_file,
mcCore.improvedTemplate(b,c)},_makeAllDeletedBodyElement=function(){var a=mlTemplate.oAttachDeletedFileThumnailTemplate.body,b={};
return b.AttachTooltipDesc=nLang.l.all_file_delete_desc,b.AttachImage='<span class="ext ext_ing"><i>FILE</i></span>',
b.AttachFileName=nLang.l.all_file_delete_desc,mcCore.improvedTemplate(a,b)},attachDownloadFileDirect=function(a){
var b=a.element.getAttribute("data-url");b||(b=$$.getSingle("!a",a.element).getAttribute("data-url")),
$$.getSingle("#checkVirusArea").contentWindow.location.href=b},_getKnownExtension=function(a){var b=$A(["htm","html","exe","gul","one","pub","epub","jpg","jpeg","png","gif","doc","docx","ppt","pptx","xls","xlsx","hwp","txt","pdf","fla","swf","flv","k3g","mov","avi","wmv","mkv","mp4","mp3","mid","ra","wav","psd","bmp","ing","zip"]);
return-1!=b.indexOf(a)?a:0<a.length&&a.length<5?a:"etc"},_getHumanFileSize=function(a){var b=-1,c=["KB","MB","GB","TB","PB","EB","ZB","YB"];
do a/=1024,b++;while(a>1024);return Math.max(a,.1).toFixed(1)+c[b]},_isThumnailFile=function(a){var b=$A(["txt","doc","docx","xls","xlsx","ppt","pptx","pdf","hwp","nxls","nppt","ndoc","nfrm"]);
return-1!=b.indexOf(a)?!0:!1},attachNavClicked=function(a,b){var c=parseInt($Element($$.getSingle(".current_page",a.element.parentNode)).text(),10),d=$$(".thumbnail",a.element.parentNode.parentNode),e="next"==b?1:-1;
d[2*(c+1*e)-2]&&(_toggleThumnail($Element(d[2*c-2]),!1),d[2*c-1]&&_toggleThumnail($Element(d[2*c-1]),!1),
c+=e,d[2*c-2]&&_toggleThumnail($Element(d[2*c-2]),!0),d[2*c-1]&&_toggleThumnail($Element(d[2*c-1]),!0),
$Element($$.getSingle(".current_page",a.element.parentNode)).text(c))},_toggleThumnail=function(a,b){
b&&!a.visible()?_showThumnailImage(a):!b&&a.visible()&&a.hide()},_showThumnailImage=function(a){if(a){
a.css("display","");var b=$Element($$.getSingle(" img",a));b&&b.parent()&&!b.attr("src")&&H(b)}};var H=function(a){
mCom.waThumbnailQueue.push(a),mCom.oThumbnailQueue||(mCom.oThumbnailQueue=setInterval(function(){var a=mCom.waThumbnailQueue.length();
if(a){var b=mCom.waThumbnailQueue.slice(0,mCom.nSizePerThumbnailAtOnce);mCom.waThumbnailQueue=mCom.waThumbnailQueue.slice(mCom.nSizePerThumbnailAtOnce,a),
b.forEach(function(a){a&&a.parent()&&!a.attr("src")&&a.attr("src",a.attr("src2"))})}else I()},mCom.nTimePerThumbnailAtOnce));
},I=function(){mCom.waThumbnailQueue=$A([]),clearInterval(mCom.oThumbnailQueue),mCom.oThumbnailQueue=null;
},J=function(){var a=$Element($$.getSingle("#list_for_view .blind"));if(a){var b=a.text().split("-")[0],c=fb(),d=mEnv.divideMode;
a.text(b+" - "+p[c]+" - "+q[d])}};_attachCallShowBodies=function(){var a=$$(".list_by_attachfile  li"),b=Math.floor(mCom.elList.scrollTop/286),c=Math.ceil(mCom.elList.clientHeight/286),d=Math.max(0,b-2),e=Math.min(b+c+2,a.length);
(d<mCom.nStartLine||e>mCom.nEndLine)&&(_attachShowBodies(),mCom.nStartLine=d,mCom.nEndLine=e)},_attachShowBodies=function(){
for(var a=$$(".list_by_attachfile  li"),b=Math.floor(mCom.elList.scrollTop/286),c=Math.max(1,Math.floor($Element(mCom.elList).width()/378)),d=Math.ceil(mCom.elList.clientHeight/276),e=c*d,f=c*b,g=Math.max(0,f-2*c),h=Math.min(f+e+2*c,a.length),a=$$(".list_by_attachfile  li"),i=g;h>i;i++)if(a[i]){
var j=$Element($$.getSingle(".current_page",a[i])),k=$$(".thumbnail",a[i]);if(j){if(parseInt(j.text(),10)<2)for(var l=0;2>l;l++)_showThumnailImage($Element(k[l]));
}else for(var l=0;2>l;l++)_showThumnailImage($Element(k[l]))}},displayReSearchCheckbox=function(){mCom.nSimpleSearchCount>0&&!$Element("detail_search").visible()?$("search_with_result").style.display="inline-block":$Element("search_with_result").hide();
},toggleCheckAll=function(a){if(myContextMenu.isUseContextMenu()&&$ElementList($$("li.context_hover")).removeClass("context_hover"),
!a||"keydown"!=a.type)switch(mCom.nCurrentFolder){case"0":ccr(a.element,"lsm.selectallgot",a);break;case"1":
ccr(a.element,"lsm.selectallsent",a);break;case"4":ccr(a.element,"lsm.selectalltrash",a);break;case"5":
ccr(a.element,"lsm.selectallspam",a);break;default:ccr(a.element,"lsm.selectallelse",a)}a.element.focus(),
_checkCurListArray();var b=mCom.elList;if(_woMailList=_woMailList.filter(function(a){return"child"!=a.isChild;
}),_woMailList.length()<=_woCurMailList.length()){_woCurMailList.empty();for(var c=$$("input[type=checkbox][checked=true]",b),d=$$("li[mailsn][class~=selected]",b),e=0,f=c.length;f>e;e++){
c[e].checked=!1,d[e].className=d[e].className.replace(/ selected/gi,"");var g=d[e].getAttribute("bgcolor");
g&&($Element(d[e]).css("backgroundColor",g),$Element($$.getSingle(".mTitle",d[e])).css("backgroundColor",g));
}for(var h=$$("li.sub",b),e=0,i=h.length;i>e;e++)$Element(h[e]).removeClass("selected");mCom.lastChecked=null,
$$.getSingle("#mailCheckAll").checked=!1}else{_woCurMailList=$A(_woMailList.$value());for(var c=$$("input[type=checkbox][checked=false]",b),d=$$("li[mailsn]:not([class~=selected])",b),e=0,f=c.length;f>e;e++){
c[e].checked=!0;var j=d[e];j.className+=" selected";var g=j.getAttribute("bgcolor");g&&($Element(j).css("backgroundColor",""),
$Element($$.getSingle(".mTitle",j)).css("backgroundColor",""))}for(var h=$$("li.sub",b),e=0,i=h.length;i>e;e++)$Element(h[e]).addClass("selected");
mCom.lastChecked=$Element($$("li[mailsn]",b).pop()).attr("mailsn"),$$.getSingle("#mailCheckAll").checked=!0;
}return toggleReadButton(),_woCurMailList=_woCurMailList.unique(),mcNotice.notifySelectMailCount(),_checkSelection(),
myCore.hideAllLayer(),K(),!0};var K=function(){$$.getSingle("#mailCheckAll").focus()};unCheckAll=function(a){
var b=mCom.elList;if(0!=_woCurMailList.length()){_woCurMailList.empty();for(var c=$$("input[type=checkbox][checked=true]",b),d=$$("li[mailsn][class~=selected]",b),e=0,f=c.length;f>e;e++){
c[e].checked=!1,d[e].className=d[e].className.replace(/ selected/gi,"");var g=d[e].getAttribute("bgcolor");
g&&($Element(d[e]).css("backgroundColor",g),$Element($$.getSingle(".mTitle",d[e])).css("backgroundColor",g));
}}for(var h=$$("li.sub"),e=0,i=h.length;i>e;e++)$Element(h[e]).removeClass("selected");return mCom.lastChecked=null,
$$.getSingle("#mailCheckAll").checked=!1,mcNotice.notifySelectMailCount(0),a||_checkSelection(),myCore.hideAllLayer(),
K(),!0},selectMail=function(a,b,c){myContextMenu.isUseContextMenu()&&$ElementList($$("li.context_hover")).removeClass("context_hover"),
_checkCurListArray();var d=mCom.elList;if(c==String(!0))var e=$$("li[mailsn][class~="+b+"]",d);else var e=$$("li[mailsn]:not([class~="+b+"])",d);
for(var f=$$("input[type=checkbox][checked=true]",d),g=$$("li[mailsn][class~=selected]",d),h=0,i=f.length;i>h;h++){
f[h].checked=!1,g[h].className=g[h].className.replace(/ selected/gi,"");var j=g[h].getAttribute("bgcolor");
j&&($Element(g[h]).css("backgroundColor",j),$Element($$.getSingle(".mTitle",g[h])).css("backgroundColor",j));
}_woCurMailList.empty();for(var h=0,i=e.length;i>h;h++){var k=e[h],l=$Element(k).attr("mailsn"),m=getListObject(l);
_woCurMailList.push(m),$$.getSingle("input[type=checkbox]",k).checked=!0,k.className+=" selected",$Element(k).css("backgroundColor",""),
$Element($$.getSingle(".mTitle",k)).css("backgroundColor",""),mCom.lastChecked=l}return $$.getSingle("#mailCheckAll").checked=_nMailListLength==_woCurMailList.length()?!0:!1,
toggleReadButton(),mcNotice.notifySelectMailCount(),_checkSelection(),myCore.hideAllLayer(),K(),!0},
_checkSelection=function(){var a=_woCurMailList.length();return 0==a?hb("disable"):hb(),1!=a?void clearReadArea():void _woCurMailList.forEach(function(a){
a.nMailSN==mCom.nCurReadingMailSN&&clearReadArea()},this)};var L=function(a,b,c){if("click"==c)a.stopDefault();else if("over"==c&&mCom.bCheckedMailFlag)_toggleCheckMailBo(a,b);else if("down"==c)_toggleCheckMailBo(a,b),
mCom.bCheckedMailFlag=!0;else if("forced"==c){var d={element:a?a.element:$$.getSingle("input#mailCheck_"+b),
type:"forced",_event:{}};_toggleCheckMailBo(d,b)}else"keydown"==c&&32==a._event.keyCode&&_toggleCheckMailBo(a,b);
return!1},M=function(a,b,c){L(a,b,c)};_toggleCheckMailBo=function(a,b){myContextMenu.isUseContextMenu()&&$ElementList($$("li.context_hover")).removeClass("context_hover"),
_checkCurListArray(),_woMailList=_woMailList.filter(function(a){return"child"!=a.isChild});var c=mCom.elList,d=$Element($$.getSingle("li."+b+"_li")),e=getListObject(b),f=_getSequenceOfMail(b);
if(mCom.listCursorMailSN=b,mCom.listCursor=f,a.element)if($Element(a.element).hasClass("mCheck"))var g=a.element;else var g=$$.getSingle(".mCheck",a.element);else var g=$$.getSingle("."+b+"_li");
if("forced"!=a.type&&g.focus(),a._event.shiftKey&&null!=mCom.lastChecked)return mCom.lastChecked<f?(_woMailList.forEach(function(a,b){
if(b>mCom.lastChecked&&f>=b){var c=$Element($$.getSingle("li."+a.mailSN+"_li")),d=getListObject(a.mailSN);
c.addClass("selected"),c.css("backgroundColor",""),$Element($$.getSingle(".mTitle",c.$value())).css("backgroundColor",""),
_woCurMailList.push(d),$$.getSingle(".mCheck",$$.getSingle("li."+a.mailSN+"_li")).checked=!0}else if(b>f){
var c=$Element($$.getSingle("li."+a.mailSN+"_li")),d=getListObject(a.mailSN);c.removeClass("selected");
var e=c.attr("bgcolor");e&&(c.css("backgroundColor",e),$Element($$.getSingle(".mTitle",c.$value())).css("backgroundColor",e)),
_woCurMailList=_woCurMailList.filter(function(a){return a.mailSN!=d.mailSN}),$$.getSingle(".mCheck",$$.getSingle("li."+a.mailSN+"_li")).checked=!1;
}},this),_woMailList.length()==_woCurMailList.length()&&($$.getSingle("#mailCheckAll").checked=!0),_woCurMailList=_woCurMailList.unique(),
mcNotice.notifySelectMailCount(),_checkSelection(),void toggleReadButton()):(_woMailList.forEach(function(a,b){
if(b<mCom.lastChecked&&b>=f){var c=$Element($$.getSingle("li."+a.mailSN+"_li")),d=getListObject(a.mailSN);
c.addClass("selected"),c.css("backgroundColor",""),$Element($$.getSingle(".mTitle",c.$value())).css("backgroundColor",""),
_woCurMailList.push(d),$$.getSingle(".mCheck",$$.getSingle("li."+a.mailSN+"_li")).checked=!0}else if(f>b){
var c=$Element($$.getSingle("li."+a.mailSN+"_li")),d=getListObject(a.mailSN);c.removeClass("selected");
var e=c.attr("bgcolor");e&&(c.css("backgroundColor",e),$Element($$.getSingle(".mTitle",c.$value())).css("backgroundColor",e)),
_woCurMailList=_woCurMailList.filter(function(a){return a.mailSN!=d.mailSN}),$$.getSingle(".mCheck",$$.getSingle("li."+a.mailSN+"_li")).checked=!1;
}},this),_woMailList.length()==_woCurMailList.length()&&($$.getSingle("#mailCheckAll").checked=!0),_woCurMailList=_woCurMailList.unique(),
mcNotice.notifySelectMailCount(),_checkSelection(),void toggleReadButton());if(g.checked){g.checked=!1,
d.removeClass("selected");var h=d.attr("bgcolor");if(h&&(d.css("backgroundColor",h),$Element($$.getSingle(".mTitle",d.$value())).css("backgroundColor",h)),
_woCurMailList=_woCurMailList.filter(function(a){return a.mailSN!=e.mailSN}),e.threadCount){if(d.next()&&d.next().hasClass("cv_slave"))for(var i=$$("li[mailsn]",d.next().$value()),j=0,k=i.length;k>j;j++){
var d=$Element(i[j]),l=$$.getSingle("input[type=checkbox]",i[j]),m=getListObject(d.attr("mailsn"));l.checked=!1,
d.removeClass("selected");var h=d.attr("bgcolor");h&&(d.css("backgroundColor",h),$Element($$.getSingle(".mTitle",d.$value())).css("backgroundColor",h)),
_woCurMailList=_woCurMailList.filter(function(a){return a.mailSN!=m.mailSN})}}else if(e.parentMailSN){
var n=d.parent().parent();if(n&&n.hasClass("cv_slave")&&n.prev()){var o=n.prev(),p=$$.getSingle("input[type=checkbox]",o.$value());
if(p.checked){var q=o.attr("mailsn");p.checked=!1,o.removeClass("selected");var h=o.attr("bgcolor");h&&(o.css("backgroundColor",h),
$Element($$.getSingle(".mTitle",o.$value())).css("backgroundColor",h)),_woCurMailList=_woCurMailList.filter(function(a){
return a.mailSN!=q})}}}_woMailList.length()!=_woCurMailList.length()&&($$.getSingle("#mailCheckAll").checked=!1),
mCom.lastChecked==f&&(mCom.lastChecked=null);for(var r=$$("li."+b+"_sub",c),j=0,k=r.length;k>j;j++)$Element(r[j]).removeClass("selected");
b!=mCom.nCurReadingMailSN||mCom.bUpdateListForNewMail||clearReadArea()}else{g.checked=!0,d.addClass("selected"),
d.css("backgroundColor",""),$Element($$.getSingle(".mTitle",d.$value())).css("backgroundColor",""),_woCurMailList.push(e),
mCom.lastChecked=f,_elCurMail=b;for(var r=$$("li."+b+"_sub",c),j=0,k=r.length;k>j;j++)$Element(r[j]).addClass("selected");
if("forced"!=a.type)if(e.threadCount){if(d.next()&&d.next().hasClass("cv_slave"))for(var i=$$("li[mailsn]",d.next().$value()),j=0,k=i.length;k>j;j++){
var d=$Element(i[j]),l=$$.getSingle("input[type=checkbox]",i[j]),m=getListObject(d.attr("mailsn"));if(1!=m.folderSN)l.checked||(l.checked=!0,
d.addClass("selected"),d.css("backgroundColor",""),$Element($$.getSingle(".mTitle",d.$value())).css("backgroundColor",""),
_woCurMailList.push(m));else if(l.checked){l.checked=!1,d.removeClass("selected");var h=d.attr("bgcolor");
h&&(d.css("backgroundColor",h),$Element($$.getSingle(".mTitle",d.$value())).css("backgroundColor",h)),
_woCurMailList=_woCurMailList.filter(function(a){return a.mailSN!=m.mailSN})}}}else if(e.parentMailSN){
var n=d.parent().parent();if(n&&n.hasClass("cv_slave")){for(var s=$$("li[mailsn] input[type=checkbox]",n.$value()),t=!0,j=0,k=s.length;k>j;j++)if(!s[j].checked){
t=!1;var o=n.prev(),p=$$.getSingle("input[type=checkbox]",o.$value());if(p.checked){var q=o.attr("mailsn");
p.checked=!1,o.removeClass("selected");var h=o.attr("bgcolor");h&&(o.css("backgroundColor",h),$Element($$.getSingle(".mTitle",o.$value())).css("backgroundColor",h)),
_woCurMailList=_woCurMailList.filter(function(a){return a.mailSN!=q})}break}if(t&&n.prev()){var o=n.prev(),p=$$.getSingle("input[type=checkbox]",o.$value());
if(!p.checked){var q=o.attr("mailsn");p.checked=!0,o.addClass("selected"),o.css("backgroundColor",""),
$Element($$.getSingle(".mTitle",o.$value())).css("backgroundColor",""),_woCurMailList.push(getListObject(q));
}}}}_woMailList.length()==_woCurMailList.length()&&($$.getSingle("#mailCheckAll").checked=!0)}toggleReadButton(),
_woCurMailList=_woCurMailList.unique(),mcNotice.notifySelectMailCount(),_checkSelection(),mEnv.receiveByBcc=1!==e.folderSN&&1===_woCurMailList.length()?getListObject(_woCurMailList.get(0).mailSN).receiveByBcc:null;
},movePage=function(a,b,c,d,e){if(U()&&(mCom.nListWrapScrollTop=0,mCom.bShowListLodaingImage=!0,mCom.nExpectedShowMailCount=e?"C"==mlCore.getCurrentViewType()?100:400:100),
a&&"keydown"==a.type){switch(b){case"prev":c=Number(mCom.nCurrentPage)-1,c=1>c?1:c;break;case"next":
c=Number(mCom.nCurrentPage)+1,c=c>mCom.nLastPage?mCom.nLastPage:c;break;case"first":c=1;break;case"last":
c=mCom.nLastPage;break;case"current":c=Number(mCom.nCurrentPage)}b=mCom.nCurrentFolder||"0"}return mCom.nCurrentPage!=c||mCom.bIsUnread?(mCom.bUpdateListForNewMail||clearReadArea(),
mCom.isFolderChanged=!1,mcCore.setMsg(c+nLang.l.move_page),mCom.oCloudSaveData={},2==b?u(a,b,mCom.curRCPTType,c):"search"==b?doSearch_new(a,null,c,null,null,null,mCom.oCurRequest):"fromAddr"==b?listSender(a,c):"remind"==b?mlRemind.movePage(c,d):u(a,b,null,c,mCom.nCurSortField,mCom.nCurSortType,mCom.bIsUnread,void 0,mCom.sCurFilterType),
!0):void 0},deleteMail=function(a,b,c){var d="conversation"==b&&"all"==c;if(a&&a.element&&d){var e="all"==mCom.nCurrentFolder?"mrd_all":0==mCom.nCurrentFolder?"mrd_got":"mrd_els";
ccr(a.element,e+".allthreaddelete",a)}var b=b||"",c=c||"";if("2"==mCom.nCurrentFolder)return void _deleteMailRcpt(b);
var f=_makeObjectForDeleteMail(b,c);if(0!=f){if("4"==mCom.nCurrentFolder){if(!confirm(nLang.l.delete_mail))return;
}else if("5"==mCom.nCurrentFolder){if(!confirm(nLang.l.delete_spam_mail))return}else if(_checkDeleteImportantMail(d))if(d||_woCurMailList.length()>1||_woCurMailList.get(0).threadCount>0){
if(!confirm(mcCore.getMemoboxString("delete_include_mark_mail",mCom.nCurrentFolder,"l")))return}else if(!confirm(mcCore.getMemoboxString("delete_mark_mail",mCom.nCurrentFolder,"l")))return;
mcCore.saveListScrollTop(),mcCore.requestAjax({fCallback:$Fn(deleteMailCallBack,this).bind(f),oParameter:f,
sUrl:"/json/select/delete/"})}return!0},_makeObjectForDeleteMail=function(a,b){if("conversation"==a){
var c="",d="",e=$A([]);if("all"==b){if(!confirm(nLang.l.delete_conversation))return!1;e=_woConversationMailList;
}else e=_woCurConversationMail;e.forEach(function(a){c+=a.mailSN+";",d+=a.folderSN+";"});var f="etc";
if("4"==mCom.nCurrentFolder)f="trash";else if("5"==mCom.nCurrentFolder){f="spam";var g="1"}else"search"==mCom.nCurrentFolder&&(f="search");
var h={mailSNList:c,deleteSpamDirect:g||"-1",currentFolderType:f,folderSNList:d,deleteType:"conversationAll"
};return h}if(0==_woCurMailList.length()&&""==a)return alert(nLang.c.select_mail),!1;var c="",i="",j=!1,k=!1,l=!1;
if(""==a){var m=_woCurMailList.length()-1;_woCurMailList.forEach(function(a,b){c+=a.mailSN,i+=a.folderSN,
m>b&&(c+=";",i+=";"),mcCore.isCorrespondFlag(a.status,"0x4000")&&(j=!0),mcCore.isCorrespondFlag(a.status,"0x10000")&&(k=!0);
var d=a.mailSN+"";d.match(/^c/)&&(l=!0)})}else c+=a,i+=b,_woMailList.forEach(function(b){String(a).replace(";","")==b.mailSN&&(mcCore.isCorrespondFlag(b.status,"0x4000")?j=!0:mcCore.isCorrespondFlag(b.status,"0x10000")&&(k=!0));
});if(";"==c[c.length-1]&&(c=c.substr(0,c.length-1)),";"==i[i.length-1]&&(i=i.substr(0,i.length-1)),
"3"!=mCom.nCurrentFolder&&j&&alert(nLang.l.cannot_delete_reserved_mail),"3"!=mCom.nCurrentFolder&&k&&alert(nLang.l.cannot_delete_delayed_mail),
l&&!confirm(nLang.l.delete_conversation))return!1;var f="etc";if("4"==mCom.nCurrentFolder)f="trash";else if("5"==mCom.nCurrentFolder){
f="spam";var g="1"}else"search"==mCom.nCurrentFolder&&(f="search");var h={mailSNList:c,deleteSpamDirect:g||"-1",
currentFolderType:f};return i&&""!=i&&(h.folderSNList=i),h},deleteMailCallBack=function(a){var b=null,c=c||window.opener;
if(mCom.isPopup){try{if(c&&c.oMail)c.mlCore.updateListStopScroll(null,c.mCom.nCurrentFolder,null,c.mCom.nCurrentPage,c.mCom.nCurSortField,c.mCom.nCurSortType,c.mCom.bIsUnread),
c.mfCore.updateFolder(),"0"!=c.mEnv.completelyDelete||"4"==c.mCom.nCurrentFolder||"5"==c.mCom.nCurrentFolder?c.myCore.showConfirmLayer(null,nLang.l.deleted_mail_permanently):"true"==c.mcCore.getCookie("DELETE_OPTION_CHECKED").toString()||30!=Number(c.mEnv.trashPeriod)?c.myCore.showDeleteMoveCancelConfirmLayer(null,c.mcCore.getMemoboxString("moved_mail_trash_undo",c.mCom.nCurrentFolder,"l"),a):c.myCore.showDeleteMoveCancelConfirmLayer(null,c.mcCore.getMemoboxString("moved_mail_trash_undo_delete30",c.mCom.nCurrentFolder,"l"),a),
c.mCom.prevDeleteCount=1;else if("naverme"==mCom.svrid)return void(location="http://me.naver.com/mail/callback.nhn?actType=del&mailid="+b);
}catch(d){}top.close()}else{var e=a.mailSNList.replace(/;$/,"").split(";"),f=a.folderSNList.replace(/;$/,"").split(";"),g=_findPrevNextMail(mEnv.actionAfterDelete),h=!1;
a&&"conversationAll"==a.deleteType&&(h=!0);for(var i=0,j=e.length;j>i;i++)e[i].match(/^c/)&&(h=!0),""==mcCore.getParentMailSN(e[i])&&(h=!0),
_woMailList=_woMailList.filter(function(a){return a.mailSN==e[i]?!1:!0},this);if(1==e.length&&$$.getSingle("div.cv_card[data-mailsn="+e[0]+"]",mCom.elRead)&&!h){
for(var e=a.mailSNList.split(";"),f=a.folderSNList.split(";"),i=0,j=e.length;j>i;i++){var k=function(a,b){
$$.getSingle("li."+b+"_li",mCom.elList)||_woMailList.forEach(function(c){c.mailSN==mcCore.getParentMailSN(b)&&(c.threadCount--,
$$.getSingle("spr.icoRead.no",a)&&c.unreadThreadCount--,$A.Break())},this),_woConversationMailList=_woConversationMailList.filter(function(a){
return a.mailSN==b?!1:!0},this)},l=$$.getSingle("div.cv_card[data-mailsn="+e[i]+"]",mCom.elRead);l&&k(l,e[i],f[i]);
}var m=mcCore.getCSSName("transform"),n=mcCore.getCSSName("transition"),o=$$.getSingle(".cv_card.selected",mCom.elRead),p=$$(".cv_card.selected ~ .cv_card",mCom.elRead);
if(m&&n&&o&&p.length>0){var q=m.match(/webkit/i)?"-webkit-transform":"transform",r=m.match(/webkit/i)?"webkitTransitionEnd":"transitionend",s=$Element(o).offset().top-$Element(p[0]).offset().top;
o.style.visibility="hidden";for(var t=0;t<p.length;t++)p[t].style[n]=q+" 0.5s",p[t].style[m]="translateY("+s+"px)",
p[t].addEventListener(r,$Fn(function(a){$Element(a).attr("style",""),$$.getSingle(".cv_card.selected",mCom.elRead)?$Element($$.getSingle(".cv_card.selected",mCom.elRead)).leave():null;
},this).bind(p[t]))}else $Element(o).leave();"list"==mCom.vDivideMode&&mCom.elReadWrap.visible()?_woConversationMailList.length()<1?refreshList(!0):(emptyCurMailList(),
setTimeout(updateFolder,500)):setTimeout(function(){"C"==mlCore.getCurrentViewType()?X():(mCom.bUpdateListForConversation=!0,
refreshList(!0))},500)}else{for(var i=0,j=e.length;j>i;i++)_woConversationMailList=_woConversationMailList.filter(function(a){
return a.mailSN==e[i]?!1:!0},this);$Element("previewMailLayer")&&$Element("previewMailLayer").hide(),
parseInt(mEnv.actionAfterDelete)>0&&(mCom.mailSNAfterDelete="list"!=mCom.vDivideMode||mCom.elReadWrap.visible()?-1==mCom.nCurReadingMailSN?null:g:null),
"thread"==mCom.nCurrentFolder?showThread(null,mCom.nCurThreadMailSN,mCom.nCurrentPage):"C"!=fb()||h?"S"==fb()?refreshList(!0,!1):refreshList(!0):X();
}"0"!=mEnv.completelyDelete||"4"==mCom.nCurrentFolder||"5"==mCom.nCurrentFolder?myCore.showConfirmLayer(null,nLang.l.deleted_mail_permanently):"true"==mcCore.getCookie("DELETE_OPTION_CHECKED").toString()||30!=Number(mEnv.trashPeriod)?myCore.showDeleteMoveCancelConfirmLayer(null,mcCore.getMemoboxString("moved_mail_trash_undo",mCom.nCurrentFolder,"l"),a):myCore.showDeleteMoveCancelConfirmLayer(null,mcCore.getMemoboxString("moved_mail_trash_undo_delete30",mCom.nCurrentFolder,"l"),a),
mCom.prevDeleteCount=e.length}return!0},_deleteMailRcpt=function(a){var b={};return b=_makeObjectForDeleteMailRcpt(a),
0!=b&&mcCore.requestAjax({fCallback:$Fn(_deleteMailRcptCallBack,this).bind(),oParameter:b,sUrl:"/json/readReceipt/delete/"
}),!0},_deleteMailRcptCallBack=function(){var a=null,b=null;return updateListStopScroll(a,mCom.nCurrentFolder,b,mCom.nCurrentPage),
mfCore.updateFolder(),!0},_makeObjectForDeleteMailRcpt=function(a){var b={},c="",d=!1,e=!1,f=$A();if(a){
var g;for(g=0;g<_woMailList._array.length;g++){var h=_woMailList.get(g);h.mailSN+""===a&&(h.isReserved&&(d=!0),
h.isDelayDelivery&&(e=!0))}b={lists:a+"|all;"}}else{if(0==_woCurMailList.length())return alert(nLang.c.select_mail),
!1;_woCurMailList.forEach(function(a){"parent"==a.isChild&&f.push(a.mailSN)}),_woCurMailList.forEach(function(a){
a.email?"child"==a.isChild?f.has(a.mailSN)||(c+=-1!=a.email.indexOf("<")?a.mailSN+"|"+a.email.split("<")[1].split(">")[0]+";":a.mailSN+"|"+a.email+";"):("orphan"==a.isChild||"parent"==a.isChild)&&(c+=a.mailSN+"|all;"):c+=-1!=a.fromAddr.indexOf("<")?a.mailSN+"|"+a.fromAddr.split("<")[1].split(">")[0]+";":a.mailSN+"|"+a.fromAddr+";",
a.isReserved&&(d=!0),a.isDelayDelivery&&(e=!0)}),";"==c[c.length-1]&&(c=c.substr(0,c.length-1)),b={lists:c
}}return d?(alert(nLang.l.cannot_delete_reserved_mail_rcpt),!1):e?(alert(nLang.l.cannot_delete_delayed_mail_rcpt),
!1):b},readMail=function(a,b,c){if(hideAllLayer(),a&&a.element)if("all"==c){var d="all"==mCom.nCurrentFolder?"mrd_all":0==mCom.nCurrentFolder?"mrd_got":"mrd_els";
"read_conversation"==b?ccr(a.element,d+".allthreadread",a):"unread_conversation"==b&&ccr(a.element,d+".allthreadunread",a);
}else"read_conversation"==b?$Element(mCom.elList).isParentOf(a.element)?ccr(a.element,"lst.read",a):ccr(a.element,"rdh.read",a):"unread_conversation"==b&&($Element(mCom.elList).isParentOf(a.element)?ccr(a.element,"lst.unread",a):ccr(a.element,"rdh.unread",a));
if("2"!=mCom.nCurrentFolder&&!mCom.bWaitingAjaxRequestForSetRead){if("shortcut"==b){var e=$$.getSingle(mCom.isReading?"#readBtnMenu .do_read":"#listBtnMenu .do_read");
b=$Element(e).hasClass("_c1(mlCore|readMail|read)")?"read":"unread"}var f=_makeObjectForReadMail(b,c);
return 0!=f&&(mCom.bWaitingAjaxRequestForSetRead=!0,mcCore.requestAjax({fCallback:$Fn(_readMailCallBack,this).bind(f),
oParameter:f,sUrl:"/json/select/setStatus/read/"})),!0}},_makeObjectForReadMail=function(a,b){if("read_conversation"==a){
var c={mailSNList:"all"==b?mrCore.getCardListMailSN("unread").join(";"):b,status:"read",type:"conversation"
};return c}if("unread_conversation"==a){var c={mailSNList:"all"==b?mrCore.getCardListMailSN("read").join(";"):b,
status:"unread",type:"conversation"};return c}if(0==_woCurMailList.length())return alert(nLang.c.select_mail),
!1;if(1==_woCurMailList.length()){var c={mailSNList:_woCurMailList.get(0).mailSN+";",status:a};return c;
}var d="",e=!0;_woCurMailList.forEach(function(b){(void 0==a||"read"==a^b.isRead)&&(d+=b.mailSN+";",
e=e&&b.isRead,b.isRead=!b.isRead,_woMailList.forEach(function(a){return a.mailSN==b.mailSN?void(a.isRead=b.isRead):void 0;
},this))},this);var c={mailSNList:d,status:a|"0"==e?"read":"unread"};return d=e=null,c},getMailSNExcludeSent=function(a){
for(var b=[],c=0,d=a.length;d>c;c++)if(""!=a[c])if(a[c].match(/^c/)){var e=mcCore.getThreadMailSNList(a[c]);
if(e.length>0)for(var f=0,g=e.length;g>f;f++)1!=mlCore.getListObject(e[f]).folderSN&&b.push(e[f]+"");else b.push(a[c]+"");
}else b.push(a[c]+"");return $A(b).unique().$value()};var N=function(a,b,c){var d=mcCore.getParentMailSN(a);
_woMailList.forEach(function(a){if(a.mailSN==d){a.threadCount=b,a.unreadThreadCount=c;var e=$$.getSingle("li."+a.mailSN+"_li button.btn_view_slave",mCom.elList);
if(e){var f=a.threadCount>99?"99+":a.threadCount;e.innerHTML=nLang.l.number_of_relative_mail2.replace("{Number}",f);
}var g=$$.getSingle("li."+a.mailSN+"_li strong.mail_title span:not(.blind)",mCom.elList);g&&(g.innerHTML=0==a.unreadThreadCount?"":"("+a.unreadThreadCount+")"),
$A.Break()}},this)};_readMailCallBack=function(a){var b=a.mailSNList,c=a.status,d=b.split(";");d=getMailSNExcludeSent(d);
for(var e=0,f=d.length;f>e;e++)if(""!=d[e]){if(d[e].match(/^c/)){"read"==c?mcCore.setUnreadThreadCount(d[e],"set",0):mcCore.setUnreadThreadCount(d[e],"full");
var g=mcCore.getPureMailSN(d[e]);_woMailList.forEach(function(a){a.parentMailSN==g&&d.push(a.mailSN);
},this);var h=$A(mrCore.getCardListMailSN());h.has(g)&&h.forEach(function(a){d.push(a)},this)}mlCore.checkConversationReadStatus(),
d=$A(d).unique().$value()}for(var e=0,i=d.length;i>e;e++)if(!d[e].match(/^c/)){mcCore.getParentMailSN(d[e])&&("read"==c?mcCore.setUnreadThreadCount(d[e],"add",-1):mcCore.setUnreadThreadCount(d[e],"add",1));
var j=$$.getSingle("div.cv_card[data-mailsn="+d[e]+"]",mCom.elRead),k=$$.getSingle("div.cv_card[data-mailsn="+d[e]+"] span.read",mCom.elRead);
j&&k&&($Element(j).attr("data-check","true"),"read"==c?($Element(j).removeClass("notRead").removeClass("autoSpread"),
$Element(k).className("read _c1(mlCore|readMail|unread_conversation|"+d[e]+") _stopDefault"),$Element($$.getSingle("span.icoRead",k)).removeClass("no").addClass("yes")):($Element(j).addClass("notRead"),
$Element(k).className("read _c1(mlCore|readMail|read_conversation|"+d[e]+") _stopDefault"),$Element($$.getSingle("span.icoRead",k)).removeClass("yes").addClass("no")));
}var l=$$.getSingle("#listBtnMenu .do_read"),m=$$.getSingle("#readBtnMenu .do_read"),n="yes",o=!0;if("conversation"==a.type&&1==d.length){
var p=d[0];o=!1,_woCurMailList.forEach(function(a){a.mailSN==p&&(o=!0)},this)}var q,r;if("read"!=c?(n="no",
toRemove="yes",o&&(m.innerHTML=nLang.l.read,q="primary b do_read _ccrf({CLICKTAG}|.read) _c1(mlCore|readMail|read) _stopDefault",
r=q.replace(/\{CLICKTAG}/,"mrd"),$Element(m).className(r),l&&(r=q.replace(/\{CLICKTAG}/,"clt"),$$.getSingle("em",l).innerHTML=nLang.l.read,
$Element(l).className(r)))):o&&(m.innerHTML=nLang.l.unread,q="primary b do_read _ccrf({CLICKTAG}|.unread) _c1(mlCore|readMail|unread) _stopDefault",
r=q.replace(/\{CLICKTAG}/,"mrd"),$Element(m).className(r),l&&(r=q.replace(/\{CLICKTAG}/,"clt"),$$.getSingle("em",l).innerHTML=nLang.l.unread,
$Element(l).className(r))),!mCom.isPopup){for(var s=!("read"!=c),e=0,f=d.length;f>e;e++)if(""!=d[e])for(var t=$$("li."+d[e]+"_li, .c"+d[e]+"_li"),u=0;u<t.length;u++){
var v=t[u],w=$Element($$.getSingle(".icoRead",v)),x=$Element($$.getSingle(".blind",w)),r=w.className(),y="";
y=w.hasClass("cal")?mcCore.getMemoboxString("calendar_mail",mCom.nCurrentFolder,"l"):"yes"===n?mcCore.getMemoboxString("read_mail",mCom.nCurrentFolder,"r"):mcCore.getMemoboxString("not_read_mail",mCom.nCurrentFolder,"r"),
"yes"==n?($Element(v).removeClass("notRead"),r=r.replace("|read_conversation","|unread_conversation"),
r.indexOf(" no")>0&&(r.indexOf(" nofw")>0?(r=r.replace(" no"," "),y=mcCore.getMemoboxString("forward_read_mail",mCom.nCurrentFolder,"l")):r.indexOf(" nore")>0?(r=r.replace(" no"," "),
y=mcCore.getMemoboxString("reply_read_mail",mCom.nCurrentFolder,"l")):r=r.replace(" no"," yes"))):($Element(v).addClass("notRead"),
r=r.replace("|unread_conversation","|read_conversation"),r.indexOf(" yes")>0?r=r.replace(" yes"," no"):r.indexOf(" fw")>0?(r=r.replace(" fw"," nofw"),
y=mcCore.getMemoboxString("forward_no_read_mail",mCom.nCurrentFolder,"l")):r.indexOf(" re")>0&&(r=r.replace(" re"," nore"),
y=mcCore.getMemoboxString("reply_no_read_mail",mCom.nCurrentFolder,"l"))),w.className(r),w.attr("title",y),
x&&x.text(y),r=null,_woMailList.forEach(function(a){a.mailSN==d[e]&&(a.isRead=s)},this),_woCurMailList.forEach(function(a){
a.mailSN==d[e]&&(a.isRead=s)},this)}Y(),"S"==fb()&&B()}b=c=null;var z=mCom.nCurrentFolder,A=A||window.opener;
if(mCom.isPopup)try{A&&A.oMail&&(A.mCom.elListWrap.visible()?A.mlCore.updateListStopScroll(null,A.mCom.nCurrentFolder,null,A.mCom.nCurrentPage,A.mCom.nCurSortField,A.mCom.nCurSortType,A.mCom.bIsUnread):A.mfCore.updateFolder());
}catch(C){}else mfCore.updateFolder();if(mcCore.saveListScrollTop(),(mCom.bIsUnread||"unread"==z)&&mCom.elListWrap.visible())updateListStopScroll(null,z,"unread",mCom.nCurrentPage);else if("unread"==mCom.sCurFilterType&&mCom.elListWrap.visible())updateListStopScroll(null,z,null,mCom.nCurrentPage,void 0,void 0,void 0,void 0,mCom.sCurFilterType);else if("number"==typeof mCom.nCurFolderTotalUnreadCount&&$Element("headUnreadNum")&&""!=$Element("headUnreadNum").html()&&"T"==mlCore.getCurrentViewType()){
var D=a.mailSNList.replace(/;$/,"").split(";").length;nCurNum="read"==a.status?mCom.nCurFolderTotalUnreadCount-D:mCom.nCurFolderTotalUnreadCount+D,
nCurNum=0>nCurNum?0:nCurNum,$Element("headUnreadNum").html(nCurNum),mCom.nCurFolderTotalUnreadCount=nCurNum,
_setBrowserTitleForList()}return mcCore.isNaver()&&mcKoreanclick.getRead(a.mailSNList,a.status),mCom.bWaitingAjaxRequestForSetRead=!1,
!0},markMail=function(a,b){var c=_makeObjectForMarkMail(b);return 0!=c&&mcCore.requestAjax({fCallback:$Fn(_markMailCallBack,this).bind(c),
oParameter:c,sUrl:"/json/select/setStatus/mark/"}),!0},_markMailCallBack=function(a,b){if(("mark"===mCom.nCurrentFolder||"mark"===mCom.sCurFilterType)&&$Element($$.getSingle(".divList")).visible())return void refreshList(!0);
if("OK"!=b.result){var c=a.mailSNList,d=a.status;if(aMailSN=c.split(";"),"C"==mlCore.getCurrentViewType()){
for(var e=0,f=aMailSN.length;f>e;e++)if(aMailSN[e].match(/^c/)){var g=mcCore.getPureMailSN(aMailSN[e]);
_woMailList.forEach(function(a){a.parentMailSN==g&&aMailSN.push(a.mailSN)},this)}aMailSN=$A(aMailSN).unique().$value();
}var h="icoImportantOn",i="icoImportantOff",j="",k="";if("mark"!=d&&(h="icoImportantOff",i="icoImportantOn"),
mCom.isPopup)_woCurMailList.$value()[0].isMarked=!_woCurMailList.$value()[0].isMarked;else for(var l="mark"==d?!0:!1,e=0,f=aMailSN.length-1;f>e;e++){
var m=aMailSN[e],n=$$.getSingle("li."+m+"_li");if(n){var o=$$.getSingle(".icoImportant",$$.getSingle("li."+m+"_li")),p=$Element(o);
p.addClass(h),p.removeClass(i),$$.getSingle("span.blind",o).innerHTML="mark"!=d?nLang.c.mark_inportant_mail:nLang.c.unmark_inportant_mail,
l?(k="_c1(mlCore|markMailSelf|"+m+"|mark)",j="_c1(mlCore|markMailSelf|"+m+"|unmark)"):(j="_c1(mlCore|markMailSelf|"+m+"|mark)",
k="_c1(mlCore|markMailSelf|"+m+"|unmark)"),$Element($$.getSingle(".important",n)).removeClass(k).addClass(j);
}if(_woMailList.forEach(function(a){a.mailSN==m&&(a.isMarked=l)},this),_woCurMailList.forEach(function(a){
a.mailSN==m&&(a.isMarked=l)},this),$$.getSingle("div.cv_card"),mCom.elRead){var q=$$.getSingle("div.cv_card[data-mailsn="+m+"]",mCom.elRead);
if(q){var r=$$.getSingle("a.vip",q),s=$$.getSingle("span.spr",r);"mark"==d?($Element(r).className("vip _ccr(rdh.mark) _c1(mlCore|markMailSelf|"+m+"|unmark) _stopDefault"),
$Element(s).className("spr icoImportantOn")):($Element(r).className("vip _ccr(rdh.mark) _c1(mlCore|markMailSelf|"+m+"|mark) _stopDefault"),
$Element(s).className("spr icoImportantOff"))}}}var o=$Element($$.getSingle(".icoImportantAtRead"));o&&(o.addClass(h+" "+j),
o.removeClass(i+" "+k),$$.getSingle("em.blind",o.$value()).innerHTML="mark"==d?nLang.c.mark_inportant_mail:nLang.c.unmark_inportant_mail),
mCom.isPopup||mfCore.updateFolder()}return!0},_makeObjectForMarkMail=function(a){if(0===getCurMailListLength())return alert(nLang.c.select_mail),
!1;var b="",c=!0;_woCurMailList.forEach(function(a){b+=a.mailSN+";",c=c&&a.isMarked}),c=c?"unmark":"mark";
var d={mailSNList:b,status:a||c};return b=c=null,d},unmarkMail=function(){var a="";if(_woCurMailList.forEach(function(b){
b.isMarked&&(a+=b.mailSN+";")}),myCore.hideAllLayer(),!a)return void alert(nLang.c.select_marked_mail);
var b={mailSNList:a,status:"unmark"};mcCore.requestAjax({fCallback:$Fn(_markMailCallBack,this).bind(b),
oParameter:b,sUrl:"/json/select/setStatus/mark/"})},markMailSelf=function(a,b,c){var d={mailSNList:b,
status:c};mcCore.requestAjax({fCallback:$Fn(_markMailSelfCallback,this).bind(a.element,b,c),oParameter:d,
sUrl:"/json/select/setStatus/mark/"})},_markMailSelfCallback=function(a,b,c){if("mark"==mCom.nCurrentFolder||"mark"===mCom.sCurFilterType)return mcCore.saveListScrollTop(),
void refreshList(!0);var d=[b];if("C"==mlCore.getCurrentViewType()){if(b.match(/^c/)){var e=mcCore.getPureMailSN(b);
_woMailList.forEach(function(a){a.parentMailSN==e&&1!=a.folderSN&&d.push(a.mailSN)},this),$Element($$.getSingle("div.cv_card",mCom.elRead))&&$Element($$.getSingle("div.cv_card",mCom.elRead)).attr("data-mailsn")==e&&_woConversationMailList.forEach(function(a){
1!=a.folderSN&&d.push(a.mailSN)},this)}d=$A(d).unique().$value()}for(var f=0,g=d.length;g>f;f++){var b=d[f];
if(_woMailList.forEach(function(a,d){a.mailSN==b&&(_woMailList.$value()[d].isMarked="mark"==c?!0:!1);
},this),$$.getSingle("div.cv_card"),mCom.elRead){var h=$$.getSingle("div.cv_card[data-mailsn="+b+"]",mCom.elRead);
if(h){var i=$$.getSingle("a.vip",h),j=$$.getSingle("span.spr",i);"mark"==c?($Element(i).className("vip _ccr(rdh.mark) _c1(mlCore|markMailSelf|"+b+"|unmark) _stopDefault"),
$Element(j).className("spr icoImportantOn")):($Element(i).className("vip _ccr(rdh.mark) _c1(mlCore|markMailSelf|"+b+"|mark) _stopDefault"),
$Element(j).className("spr icoImportantOff"))}}if(mCom.isPopup&&!mCom.hasNoOpener)try{var k=opener.$$.getSingle("li."+b+"_li");
if(opener&&opener.m&&k)var l=$Element(opener.$$.getSingle(".icoImportant",k)),m=$Element(opener.$$.getSingle(".important",k));
}catch(n){}else{var k=$$.getSingle("li."+b+"_li");if(k)var l=$Element($$.getSingle(".icoImportant",k)),m=$Element($$.getSingle(".important",k));
}var o="mark"==c;if(o)var p="icoImportantOff",q="icoImportantOn",r="_c1(mlCore|markMailSelf|"+b+"|mark)",s="_c1(mlCore|markMailSelf|"+b+"|unmark)",t=nLang.c.unmark_inportant_mail,u="unmark",v="mark";else var q="icoImportantOff",p="icoImportantOn",r="_c1(mlCore|markMailSelf|"+b+"|unmark)",s="_c1(mlCore|markMailSelf|"+b+"|mark)",t=nLang.c.mark_inportant_mail,u="mark",v="unmark";
if(l&&(l.removeClass(p),l.addClass(q),$$.getSingle("span.blind",l.$value()).innerHTML=t,m.removeClass(r),
m.addClass(s),k&&($Element(k).removeClass(u),$Element(k).addClass(v))),mCom.elReadWrap.visible()&&mCom.nCurReadingMailSN==b&&$$.getSingle("span.icoImportantAtRead")){
var w=$Element($$.getSingle("span.icoImportantAtRead"));$$.getSingle("em.blind",w.$value()).innerHTML="mark"==u?nLang.c.mark_inportant_mail:nLang.c.unmark_inportant_mail,
w.removeClass(p+" "+r),w.addClass(q+" "+s);var x="mark"==u?nLang.c.normal_mail:nLang.c.mark_mail;!mcCore.isNaver()&&(6==mCom.nCurrentFolder||parseInt(mCom.nCurrentFolder,10)>=1e7)&&(x=x.replace(nLang.m.mail,nLang.m.memo)),
w.parent().attr("title",x)}try{if(mCom.isPopup&&!mCom.hasNoOpener&&opener&&opener.m&&opener.$$.getSingle("span.icoImportantAtRead")&&opener.mCom.elReadWrap.visible()&&opener.mCom.nCurReadingMailSN==b){
var w=$Element(opener.$$.getSingle("span.icoImportantAtRead"));w.removeClass(p),w.addClass(q)}for(var y=opener.mlCore.getCurMailList().$value(),z=0,A=y.length;A>z;z++){
var B=y[z];B.mailSN==b&&(B.isMarked=o)}for(var C=opener.mlCore.getMailList().$value(),z=0,A=C.length;A>z;z++){
var B=C[z];B.mailSN==b&&(B.isMarked=o)}}catch(n){}_woCurMailList.forEach(function(a){a.mailSN==b&&(a.isMarked="mark"==c?!0:!1);
})}"C"==mlCore.getCurrentViewType()&&mlCore.checkConversationMarkStatus()},moveMail=function(a,b,c,d,e){
var f=makeObjectForMoveMail(b,c);return 0!=f&&(mcCore.saveListScrollTop(),d&&(f.retroactivity="Y"),mcCore.requestAjax({
fCallback:$Fn(O,this).bind(f,b,d,e),oParameter:f,sUrl:"/json/select/move/"})),!0};var O=function(a,b,c,d){
moveMailCallBack(a,b,c),d&&d()};makeObjectForMoveMail=function(a,b){if(mCom.conversationCallType&&$$.getSingle("div.cv_card",mCom.elRead)){
{var c="",d="",e="";$A([])}if("all"==mCom.conversationCallType?_woConversationMailList.forEach($$.getSingle("#moveMailLayer #except_sendmail").checked?function(a){
mcCore.isCorrespondFlag(a.status,"0x100")||(c+=a.mailSN+";",d+=a.fromAddr+";",e+=a.folderSN+";")}:function(a){
c+=a.mailSN+";",d+=a.fromAddr+";",e+=a.folderSN+";"}):_woCurConversationMail.forEach(function(a){c+=a.mailSN+";",
d+=a.fromAddr+";",e+=a.folderSN+";"}),""==c)return!1;var f={mailSNList:c,autoMove:b||0,targetFolderSN:a,
emails:d,folderSN:e};return f}if(0==_woCurMailList.length())return alert(nLang.c.select_mail),!1;var c="",d="",e="",g=!1,h=!1,i=!1;
if(_woCurMailList.forEach("1"==a?function(a){return mcCore.isCorrespondFlag(a.status,"0x100")?(h=!0,
c+=a.mailSN+";",d+=a.fromAddr+";",void(e+=a.folderSN+";")):(i=!0,!1)}:function(a){return 3!=a.folderSN||g?(c+=a.mailSN+";",
d+=a.fromAddr+";",void(e+=a.folderSN+";")):(alert(nLang.l.cannot_move_temp_mail),g=!0,!1)}),"1"==a&&!h)return alert(nLang.l.no_selected_sent_mail),
!1;if("1"==a&&h&&i&&!confirm(nLang.l.confirm_include_sent_mail))return!1;if(g)return!1;b||(d="");var f={
mailSNList:c,autoMove:b||0,targetFolderSN:a,emails:d,folderSN:e};return f},moveMailCallBack=function(a,b,c){
var d=d||window.opener;mCom.isDuplicateMove?(myCore.showConfirmLayer(null,nLang.l.move_mail.replace("{FolderName}",mcCore.findFolderName(b,!1))),
mCom.isDuplicateMove=!1):mCom.isPopup&&d?d.myCore.showDeleteMoveCancelConfirmLayer(null,nLang.l.move_mail_undo.replace("{FolderName}",d.mcCore.findFolderName(b,!1)),a):myCore.showDeleteMoveCancelConfirmLayer(null,nLang.l.move_mail_undo.replace("{FolderName}",mcCore.findFolderName(b,!1)),a);
for(var e=a.mailSNList.replace(/;$/,"").split(";"),f=(a.folderSN?a.folderSN.replace(/;$/,"").split(";"):[],
_findPrevNextMail(mEnv.actionAfterDelete)),g=!1,h=0,i=e.length;i>h;h++)_woMailList.forEach(function(a){
a.mailSN==e[h]&&(a.folderSN=Number(b),$A.Break())},this),_woConversationMailList.forEach(function(a){
a.mailSN==e[h]&&(a.folderSN=Number(b),$A.Break())},this),""==mcCore.getParentMailSN(e[h])&&(g=!0);if("C"==mlCore.getCurrentViewType()&&(_woMailList.forEach(function(a){
if(a.threadCount){for(var b=0,c=mcCore.getThreadMailSNList(a.mailSN),d=0,e=c.length;e>d;d++){var f=mcCore.getFolderSNByMailSN(c[d]);
mcCore.avaliableFolderIncludeMail(mCom.nCurrentFolder,f)||b++}a.threadCount<=b&&(g=!0)}},this),(elTargetCard=$$.getSingle("div.cv_card.selected",mCom.elRead))&&$Element(elTargetCard).attr("data-mailsn")==e[0]&&1==e.length)){
var j=$Element(elTargetCard).attr("data-mailsn");if(4==b||5==b){_woConversationMailList=_woConversationMailList.filter(function(a){
return a.mailSN==j?!1:!0},this);var k=mcCore.getCSSName("transform"),l=mcCore.getCSSName("transition"),m=$$(".cv_card.selected ~ .cv_card",mCom.elRead);
if(k&&l&&elTargetCard&&m.length>0){var n=k.match(/webkit/i)?"-webkit-transform":"transform",o=k.match(/webkit/i)?"webkitTransitionEnd":"transitionend",p=$Element(elTargetCard).offset().top-$Element(m[0]).offset().top;
elTargetCard.style.visibility="hidden";for(var q=0;q<m.length;q++)m[q].style[l]=n+" 0.5s",m[q].style[k]="translateY("+p+"px)",
m[q].addEventListener(o,$Fn(function(a){$Element(a).attr("style",""),$$.getSingle(".cv_card.selected",mCom.elRead)?$Element($$.getSingle(".cv_card.selected",mCom.elRead)).leave():null;
},this).bind(m[q]))}else $Element(elTargetCard).leave()}else _woConversationMailList.forEach(function(a){
if(a.mailSN==j){a.folderSN=b;var c=$$.getSingle("div.cv_card[data-mailsn="+j+"]",mCom.elRead),d="["+mcCore.findFolderName(b,!0)+"]",e=function(a,b,c){
setTimeout($Fn(function(a,b,c){var d=a.style.opacity?Number(a.style.opacity):1;"hide"==c&&d>.6?(a.style.opacity=d-.1,
e(a,b,"hide")):.9>d?($Element(a).hasClass("selected")&&($Element(a).removeClass("selected"),$$.getSingle("span.folderName",a).innerHTML=b),
a.style.opacity=d+.1,e(a,b,"show")):a.style.opacity=1},this).bind(a,b,c),50)};e(c,d,"hide")}},this);return void("list"==mCom.vDivideMode&&mCom.elReadWrap.visible()?(emptyCurMailList(),
setTimeout(updateFolder,500)):X())}if(c){var r=$A();_woCurMailList.forEach(function(a){mcCore.trim(a.fromAddr)&&r.push(a.fromAddr);
}),r.unique();var a={targetFolderSN:_nFolderToMoveMail,moveType:"all",fromEmail:r.toString()};cleanupMail.doCleanupMove(a);
}var s=null;return mCom.isPopup?(d&&d.m&&(d.mlCore.updateListStopScroll(null,d.mCom.nCurrentFolder,s,d.mCom.nCurrentPage,d.mCom.nCurSortField,d.mCom.nCurSortType,d.mCom.bIsUnread),
d.mfCore.updateFolder()),top.close()):parseInt(mEnv.actionAfterDelete)>0?(mCom.mailSNAfterDelete="list"!=mCom.vDivideMode||mCom.elReadWrap.visible()?-1==mCom.nCurReadingMailSN?null:f:null,
"thread"==mCom.nCurrentFolder?showThread(null,mCom.nCurThreadMailSN,mCom.nCurrentPage):"C"!=fb()||g?"S"==fb()?refreshList(!0,!1):refreshList(!0):X()):(null!=$Element("previewMailLayer")&&$Element("previewMailLayer").visible()&&$Element("previewMailLayer").hide(),
"C"!=fb()||g?"S"==fb()?refreshList(!0,!1):refreshList(!0):X()),s=null,!0},checkMailUI=function(a,b,c){
null==b&&(b=!0);var d=mCom.elList;if(c)var e=$$.getSingle("li.cv_slave li."+a+"_li",d);else var e=$$.getSingle("li."+a+"_li",d);
var f=$Element($$.getSingle(".icoRead",e));if(e){var g=getListObject(a);if(w(a),$Element(e).addClass("selected"),
$Element(e).css("backgroundColor",""),$Element($$.getSingle(".mTitle",e)).css("backgroundColor",""),
b){if($Element(e).removeClass("notRead"),f){f.attr("title",nLang.r.read_mail);var h=f.className();h=h.replace("|read_conversation","|unread_conversation"),
h.indexOf(" no")>0&&(h=h.indexOf(" nofw")>0||h.indexOf(" nore")>0?h.replace(" no"," "):h.replace(" no"," yes")),
f.className(h)}"C"==mlCore.getCurrentViewType()&&Y()}_woCurMailList.push(g),mCom.lastChecked=_getSequenceOfMail(a);
}_elCurMail=a,1==_nMailListLength&&($$.getSingle("#mailCheckAll").checked=!0),$$.getSingle("input",e).checked=!0,
mcNotice.notifySelectMailCount(),toggleReadButton();var i=_woCurMailList.length();0==i?hb("disable"):hb();
},toggleReadButton=function(){if("2"!=mCom.nCurrentFolder&&!mCom.isPopup){var a=0;if(0==_woCurMailList.length())return mCom.elDoReadText.html(nLang.l.read),
mCom.elDoRead.className("primary b do_read _c1(mlCore|readMail|read) _stopDefault"),void(a=null);_woCurMailList.forEach(function(b){
0==b.isRead&&a++},this),a>0?(mCom.elDoReadText.html(nLang.l.read),mCom.elDoRead.className("primary b do_read _ccrf(clt|.read) _c1(mlCore|readMail|read) _stopDefault ")):(mCom.elDoReadText.html(nLang.l.unread),
mCom.elDoRead.className("primary b do_read _ccrf(clt|.unread) _c1(mlCore|readMail|unread) _stopDefault")),
$$.getSingle(".icoRead.no",mCom.elRead)?$Element("converstaionReadAllBtn").className("_c1(mlCore|readMail|read_conversation|all)").html(nLang.l.read_all):$Element("converstaionReadAllBtn").className("_c1(mlCore|readMail|unread_conversation|all)").html(nLang.l.unread_all);
}},_checkDeleteImportantMail=function(a){var b=!1,c=a?_woConversationMailList:_woCurMailList;return c.forEach(function(a){
a.isMarked&&(b=!0)}),b},getSelectedMailList=function(){if("C"==mlCore.getCurrentViewType()&&"list"!=mCom.vDivideMode&&0==_woCurMailList.length()&&mCom.isReading&&-1!=mCom.nCurReadingMailSN){
var a=getListObject(mCom.nCurReadingMailSN)||getListObject(mCom.nCurReadingMailSN.replace(/\D/g,""));
_woCurMailList.push(a)}if(0==_woCurMailList.length())return alert(nLang.c.select_mail),!1;var b="";return _woCurMailList.forEach(function(a){
b+=a.mailSN+";"}),b},_findPrevNextMail=function(a){if(0==_woCurMailList.length())return null;var b=_woMailList.$value();
if("1"==a)var c=_woCurMailList.$value()[0].mailSN;else var c=_woCurMailList.$value()[_woCurMailList.length()-1].mailSN;
for(var d=0,e=b.length;e>d;d++)if(b[d].mailSN==c){if(0==d&&"1"==a)return null;if("1"==a)return b[d-1].mailSN;
if("2"==a&&d==b.length-1)return null;if("2"==a)return b[d+1].mailSN}return null},setSortField=function(a,b){
return clearReadArea(),mcCore.setMsg(nLang.c.getting_list_from_folder.replace("{Name}",mcCore.findFolderName(mCom.nCurrentFolder,!0))),
U()&&(mCom.nListWrapScrollTop=0,mCom.bShowListLodaingImage=!0),mCom.nCurSortField==b&&8!=b&&9!=b&&14!=b?mCom.nCurSortType=parseInt(mCom.nCurSortType,10)?0:1:(mCom.nCurSortField=b,
mCom.nCurSortType=0),14==b&&(mCom.sCurFilterType=void 0,mCom.bIsUnread=!1),"search"==mCom.nCurrentFolder?doSearch_new(a,null,mCom.nCurrentPage,mCom.sCurFilterType,mCom.nCurSortField,mCom.nCurSortType,mCom.oCurRequest):"remind"==mCom.nCurrentFolder?u(a,mCom.nCurrentFolder,null,-1,mCom.nCurSortField,mCom.nCurSortType,mCom.bIsUnread,void 0,mCom.sCurFilterType):u(a,mCom.nCurrentFolder,null,mCom.nCurrentPage,mCom.nCurSortField,mCom.nCurSortType,mCom.bIsUnread,void 0,mCom.sCurFilterType),
!0},setViewFilter=function(a,b){return $Element(a.element.parentNode).hasClass("disabled")?void 0:(mCom.sCurFilterType="all"!==b?b:null,
clearReadArea(),mcCore.setMsg(nLang.c.getting_list_from_folder.replace("{Name}",mcCore.findFolderName(mCom.nCurrentFolder,!0))),
U()&&(mCom.nListWrapScrollTop=0,mCom.bShowListLodaingImage=!0),"search"==mCom.nCurrentFolder?doSearch_new(a,null,1,b,mCom.nCurSortField,mCom.nCurSortType,mCom.oCurRequest):u(a,mCom.nCurrentFolder,null,1,mCom.nCurSortField,mCom.nCurSortType,!1,void 0,mCom.sCurFilterType),
!0)},getParentMail=function(a){var b=null;return _woMailList.forEach(function(c){return c.mailSN==a&&"child"!=c.isChild?void(b=c):void 0;
}),b},scrapMailToCalendar=function(){myCore.hideAllLayer();var a=_woCurMailList.length();if(j=null,0==a)return alert(nLang.c.select_mail),
!1;if(a>1)return alert(nLang.c.select_only_one),!1;if("2"==mCom.nCurrentFolder){var b=getParentMail(_woCurMailList.$value()[0].mailSN);
if(null==b||!b.isSaveSentMail)return void alert(nLang.e.mail_not_exist_readreceipt)}var c={viewall:"1",
mailSN:_woCurMailList.$value()[0].mailSN,threadMail:!1,prevNextMail:!1};return mcCore.requestAjax({fCallback:$Fn(_scrapMailToCalendarCallBack,this).bind(),
oParameter:c,sUrl:"/json/read/"}),j=window.open("","addCal","width=1041,height=707,top=10,left=10,resizable=yes,scrollbars=no"),
!0},_scrapMailToCalendarCallBack=function(a){if(j){var b={quot:'"',nbsp:" ",amp:"&",lt:"<",gt:">"},c=a.mailInfo.subject;
c||(c=nLang.l.no_title),c=c.replace(/&#61;/g,"="),c=encodeURIComponent(c).replace(/'/g,"%27");var d=a.mailInfo.body;
d.length>0&&(d=d.replace(/<br>/gi,"\n").replace(/<p>/gi,"\n"),d=d.replace(/[<][^>]*[>]/gi,""),d=d.replace(/\r/gi,"\n").replace(/\n \n/gi,"\n").replace(/\n{1,}/gi,"\r\n"),
d=d.replace(/&([a-z]+);/g,function(a,c){return b[c]?b[c]:a}),d=encodeURIComponent(d));for(var e=[],f=[a.mailInfo.from,a.mailInfo.toList,a.mailInfo.ccList],g=0;g<f.length;g++){
var h=f[g];if(Array===h.constructor)for(var i=0;i<h.length;i++)h[i].name=mcCore.restoreSpecialChar(h[i].name),
e.push(h[i]);else h.name=mcCore.restoreSpecialChar(h.name),e.push(h)}var k=mCom.sCalendarURLPrefix+mEnv.rootDomain+"/writeSchedule.nhn",l=P(e,mEnv.mailAddress),m=encodeURIComponent(JSON.stringify(l.reverse()));
j.location.href=k+"?content="+c+"&inviteeList="+m}else setTimeout($Fn(_scrapMailToCalendarCallBack,this).bind(a),100);
};var P=function(a,b){var c={};return $A(a).filter(function(a){return a.email!==b?!0:!1}).filter(function(a){
return c.hasOwnProperty(a.email)?!1:c[a.email]=!0}).$value()},Q=function(){var a,b=_woCurMailList.length();
if(k=null,myCore.hideAllLayer(),0==b)return alert(nLang.c.select_mail),!1;if(b>1)return alert(nLang.c.select_only_one),
!1;if("2"==mCom.nCurrentFolder){var c=getParentMail(_woCurMailList.$value()[0].mailSN);if(null==c||!c.isSaveSentMail)return void alert(nLang.e.mail_not_exist_readreceipt);
}a=_woCurMailList.$value()[0].mailSN,mcCore.requestAjax({sUrl:"/json/deskhome/mailInfo/get",fCallback:R,
oParameter:{mailSN:"c"==a[0]?a.slice(1):a}}),k=window.open("","wToDoWritePopup","width=568,height=453,resizable=yes,scrollbars=no");
},R=function(a){if(k){var b=a.linkDisplayText,c="?content="+b+"&scrapUrl="+a.linkUrl+"&scrapTitle="+encodeURIComponent("["+nLang.c.mail+"]")+b,d=location.protocol+"//calendar."+mEnv.rootDomain+"/writeTask.nhn";
k.location.href=d+(c?c:"")}else setTimeout($Fn(R,this).bind(a),100)};toggleRcptExpand=function(a,b){
var c=$$.getSingle("li."+b+"_li"),d=$Element($$.getSingle(".expand button",c));if(d.hasClass("open"))mcCore.requestAjax({
fCallback:$Fn(_toggleRcptExpandCallback,this).bind(b),oParameter:{mailSN:b,type:mCom.curRCPTType||"all"
},sUrl:"/json/list/receiptReceiversList/"});else{for(var e=$$("li."+b+"_sub"),f=$$("."+b+"_sub"),g=0,h=e.length;h>g;g++)$Element(f[g]).toggle();
e=f=null}c=null,$Element(d).toggleClass("close","open")},_toggleRcptExpandCallback=function(a,b){var c=mlTemplate.oReadReceiptListTemplate,d=$$.getSingle("li."+a+"_li"),e=$Element(d),f=b.RcptList,g=document.activeElement,h=$ElementList($$("li."+a+"_sub",$("cont_flex_area")));
h&&h.leave();for(var i=0,j=f.length;j--;){var k=f[j],l=c.sub;l=k.rcptInfoCount&&0!==k.rcptInfoCount?_makeRowAtReadReceipt(l,getParentListObject(b.MailSN),k,b.currentTime,!0,"count"):_makeRowAtReadReceipt(l,getParentListObject(b.MailSN),k,b.currentTime,!0);
var m=mcCore.isNaver()?mEnv.mailDomain:mEnv.mailDomainList,n=m.split(",");n=$A(n),"READ"==k.readStatus&&i++;
var o={};o.mailSN=b.MailSN,o.isChild="child",o.isReserved=k.isReserved,o.isDelayDelivery=k.isDelayDelivery,
o.email=k.rcptAddress,o.size=k.size,o.subject=k.subject,"undefined"!=typeof k.reSend&&(o.reSend=k.reSend),
_woMailList.push(o),o=null,l=l.replace(/\{FolderSN\}/g,2),e.after($Element(l)),l=null}for(var p=$$("."+a+"_sub"),q=$$("li."+a+"_sub"),r=0,s=q.length;s>r;r++)$$.getSingle(".mCheck",d).checked?$Element(q[r]).addClass("selected").show():$Element(q[r]).removeClass("selected").show();
q=p=null,g&&g.focus()},toggleSearchExpand=function(a,b){$Element($$.getSingle("."+b+"_preview"))&&$Element($$.getSingle("."+b+"_preview")).toggle(),
$Element(a.element).toggleClass("open","close")},toggleSearchTitle=function(a){mEnv.subjectOnly=$$.getSingle("#searchTitle").checked?!0:!1,
_setSearchResult(),doSearch_new(a,null,mCom.nCurrentPage,mCom.sCurFilterType,mCom.nCurSortField,mCom.nCurSortType,mCom.oCurRequest);
},_setSearchResult=function(){var a={subjectOnly:mEnv.subjectOnly};mcCore.requestAjax({fCallback:$Fn(_setSearchResultCallback,this).bind(),
oParameter:a,sUrl:"/json/option/searchResult/set/"})},_setSearchResultCallback=function(){},setImportance=function(a,b,c){
var d,e,f;a&&a.element&&("Y"==c?ccr(a.element,"rdh.vipcheck",a):ccr(a.element,"rdh.vipuncheck",a)),b=unescape(b).replace(",",""),
""==b?(d="a"===a.element.nodeType?a.element:a.element.parentElement,f=d.getAttribute("data-senderaddress"),
e=d.getAttribute("data-sendername"),e=mcCore.restoreSpecialChar(e.replace(/^[\s"'\\]+|[\s"'\\]+$/g,"")),
b=""==e?b:'"'+e+'"<'+f+">"):(f=b,e="");var g={address:b,name:e,addressOrigin:f,status:c};mcCore.requestAjax({
fCallback:$Fn(_setImportanceCallback,this).bind(g),oParameter:g,sUrl:"/json/address/important/"})},_setImportanceCallback=function(a){
var b=a.addressOrigin,c=a.name,d=$$("a[data-senderaddress="+b+"]",mCom.elRead);if("Y"==a.status)var e='<a href="#" class="_c1(mlCore|setImportance|'+b+'|N) _stopDefault" title="'+nLang.l.clear_important_address+'" data-senderaddress="'+b+'" data-sendername="'+c+'"><span class="spr icoVipOn"><em class="blind">'+nLang.l.clear_important_address+"</em></span></a>";else var e='<a href="#" class="_c1(mlCore|setImportance|'+b+'|Y) _stopDefault" title="'+nLang.l.set_important_address+'" data-senderaddress="'+b+'" data-sendername="'+c+'"><span class="spr icoVipOff"><em class="blind">'+nLang.l.set_important_address+"</em></span></a>";
for(var f=0,g=d.length;g>f;f++)d[f].outerHTML=e;a&&"Y"==a.status&&alert(nLang.l.vip_saved_desc),mCom.isPopup||"undefined"!=typeof mCom.nCurrentFolder&&mEnv.useVipMailBox&&mcCore.requestAjax({
fCallback:$Fn(drawVipFolderCallback,this).bind(),oParameter:{},async:!1,sUrl:"/json/folder/vipMailBox/list"
})},previewMail=function(a,b,c,d){var e=150;if(myCore.hideAllLayer(),"close"==d)return void $Element("previewMailLayer").hide();
if("2"==mCom.nCurrentFolder){var f=mlCore.getParentMail(b);if(null==f||!f.isSaveSentMail)return void alert(nLang.e.mail_not_exist_readreceipt);
}mcCore.requestAjax({fCallback:$Fn(_previewMailCallback,this).bind(a,b,c),oParameter:{mailSN:b,length:e
},sUrl:"/json/read/preview/"}),ccr(a.element,"lst.preview",a)},_previewMailCallback=function(b,c,d,e){
a(c,d,e,b),mcCore.isNaver()&&mcKoreanclick.getRead(c,"preview")},getMailAddress=function(a,b){if(1*a!="NaN"){
var c,d;return _woMailList.forEach(function(b){a==b.mailSN&&(c=b.fromAddr,d=b.fromName)}),b&&(""!=d&&""==c?c=d:""!=d&&""!=c&&(c='"'+d+'" <'+c+">")),
d=null,c}};var S=function(a){var b,c=-1,d=_woMailList.length(),e=parseInt(a,10);for(b=0;d>b;b++)if(_woMailList.get(b).mailSN===e){
c=_woMailList.get(b).category;break}return c};refreshList=function(a,b){if("search"==mCom.nCurrentFolder)_arrangeDivideMode(),
doSearchWithOption(mCom.oCurRequest);else if(a)updateListStopScroll(null,mCom.nCurrentFolder,null,mCom.nCurrentPage,mCom.nCurSortField,mCom.nCurSortType,mCom.bIsUnread,b,mCom.sCurFilterType);else{
var c=mcCore.isNaver()&&"S"===mlCore.getCurrentViewType()&&Number(mCom.nCurrentFolder)>=7&&Number(mCom.nCurrentFolder)<=10;
c&&(mCom.bHidePopup=!0),u(null,mCom.nCurrentFolder,null,mCom.nCurrentPage,mCom.nCurSortField,mCom.nCurSortType,mCom.bIsUnread,b,mCom.sCurFilterType);
}},retrieveMail=function(a,b,c,d){if(confirm(mcCore.isNaver()?nLang.l.cancel_retrieve_mail_naver:nLang.l.cancel_retrieve_mail)){
var e={messageID:b||"",receiver:c||"",mailSN:d||""};mcCore.requestAjax({fCallback:$Fn(_retrieveMailCallbackAtList,this).bind(),
oParameter:e,sUrl:"/json/readReceipt/retrieve/"})}},_retrieveMailCallbackAtList=function(){var a=mCom.nCurrentFolder;
return mcCore.setMsg(nLang.c.getting_list_from_folder.replace("{Name}",mcCore.findFolderName(a,!0))),
u(null,"2",mCom.curRCPTType,mCom.nCurrentPage),mfCore.updateFolder(),!0},editReserveMail=function(a,b,c){
if(!mCom.isReading){var d=mlCore.getParentMail(b);if(null==d||!d.isSaveSentMail)return void alert(nLang.e.mail_not_exist_readreceipt);
}if(0==c||"false"==c){var e=nLang.l.cancel_reserve_mail_rcpt;if(!confirm(e))return}if(mUtil.popupWrite(a,"sent",b),
!mCom.isReading&&(mEnv.popupWrite||a.$value().shiftKey))var f=!0;setTimeout($Fn(_editReserveMailCallback,this).bind(f,b,c),5e3);
},_editReserveMailCallback=function(a,b,c){var d={sentMailSN:b};c&&myCore.showSendCancelConfirmLayer("hide"),
mcCore.requestAjax({fCallback:$Fn(function(){a&&mlCore.refreshList(!0)},this).bind(),oParameter:d,sUrl:"/json/readReceipt/reserve/cancel/"
})},cancelReserveMail=function(a,b,c){var d="true"==c?nLang.l.cancel_delivery_mail:nLang.l.cancel_reserved_mail;
if(confirm(d)){var e={sentMailSN:b};mcCore.requestAjax({fCallback:$Fn(_cancelMailCallback,this).bind(c),
oParameter:e,sUrl:"/json/readReceipt/reserve/cancel"})}},_cancelMailCallback=function(a){var b=mCom.nCurrentFolder;
return myCore.hideAllLayer(),mcCore.setMsg(nLang.c.getting_list_from_folder.replace("{Name}",mcCore.findFolderName(b,!0))),
a&&myCore.showSendCancelConfirmLayer("hide"),mlCore.refreshList(!0),!0},cancelReserveMailFromNoti=function(a,b){
"2"==mCom.nCurrentFolder&&mCom.isPopup&&opener&&opener.mlCore.updateList(null,"2");var c={sentMessageID:b
};mcCore.requestAjax({fCallback:$Fn(_cancelMailFromNotiCallback,this).bind(),oParameter:c,sUrl:"/json/readReceipt/reserve/cancel"
})},_cancelMailFromNotiCallback=function(a){alert(nLang.w.cancel_complete),myCore.showSendCancelConfirmLayer("hide"),
a&&a.sentMailSN&&mfCore.popupWrite(null,"sent",a.sentMailSN,void 0,void 0,!0)},cancelDeleteMoveMailFromNoti=function(){
var a,b=[],c=[],d={},e="",f=0;if(mCom.sDeleteMoveCancelInfo){for(mCom.oDeleteMoveCancelInfo=JSON.parse(mCom.sDeleteMoveCancelInfo),
mCom.oDeleteMoveCancelInfo.mailSNList?c=mCom.oDeleteMoveCancelInfo.mailSNList.split(";"):mCom.oDeleteMoveCancelInfo.mailSN&&(c=mCom.oDeleteMoveCancelInfo.mailSN.split(";")),
mCom.oDeleteMoveCancelInfo.folderSNList?b=mCom.oDeleteMoveCancelInfo.folderSNList.split(";"):mCom.oDeleteMoveCancelInfo.folderSN&&(b=mCom.oDeleteMoveCancelInfo.folderSN.split(";")),
f=0,a=b.length;a>f;f++)d[b[f]]?d[b[f]]+=";"+c[f]:d[b[f]]=""+c[f];for(f in d)e?e+=","+f+"_"+d[f]:e=""+f+"_"+d[f];
var g={mailSNFolderList:e};mcCore.requestAjax({fCallback:$Fn(_cancelDeleteMoveMailFromNotiCallback,this).bind(),
oParameter:g,sUrl:"/json/select/move_undo"})}},_cancelDeleteMoveMailFromNotiCallback=function(){mCom.isPopup&&opener&&(mlCore=opener.mlCore,
myCore=opener.myCore),myCore.showDeleteMoveCancelConfirmLayer("hide"),mlCore.refreshList()},optionConfirmFromNoti=function(a){
mcCore.setCookie("DELETE_OPTION_CHECKED","true"),myCore.showDeleteMoveCancelConfirmLayer("hide"),mInit.showOptionLayerAtInit(a,"folder_option"),
setTimeout(_focusOptionDelEl,20)},_focusOptionDelEl=function(){$$("#folder_list tr").length>7?($$.getSingle("#setup_pos_wrap").scrollTop=$$.getSingle("#setup_pos_wrap").scrollHeight,
$$.getSingle("#trash_period").focus()):setTimeout(_focusOptionDelEl,20)},backToList=function(){return mCom.isPopup?void top.close():"list"!=mCom.vDivideMode?(clearReadArea(),
mUtil.addHotkey("list"),$$.getSingle("#startElement").focus(),void $$.getSingle("#startElement").blur()):void("thread"!=mCom.nCurrentFolder||mCom.sCurFilterType?updateListStopScroll(null,mCom.nCurrentFolder,null,mCom.nCurrentPage,mCom.nCurSortField,mCom.nCurSortType,mCom.bIsUnread,null,mCom.sCurFilterType):showThread(null,mCom.nCurThreadMailSN,mCom.nCurrentPage));
},submitDeleteSpam=function(a,b){var c=$$.getSingle("#chk_later").checked;if(c)if(mCom.isPopup)try{opener.mEnv.spamLayerView="N";
}catch(d){}else mEnv.spamLayerView="N";if(b){if("N"==mEnv.spamLayerView)var e=mEnv.spamMoveType||"0",f=mEnv.receiveBlock?"Y":"N",g=mEnv.spamAutoMove;else var e=$$.getSingle("#spam_radio1").checked?"0":"1",f=$$.getSingle("#checkReject")&&$$.getSingle("#checkReject").checked?"Y":"N",g=$$.getSingle("#chk_automove2").checked?"Y":"N";
var h={mailSNList:b,from:"list",spamMoveType:e,autoMove:g,rejectCheck:f,spamLayerView:null}}else var h=_makeObjectForSubmitDeleteSpam();
h.spamLayerView=c?"N":"Y",mcCore.requestAjax({fCallback:$Fn(_submitDeleteSpamCallback,this).bind(h),
oParameter:h,sUrl:"/json/spam/report/"})},submitDeleteSpamDirect=function(a,b){var c=mEnv.spamMoveType||"0",d=mEnv.receiveBlock?"Y":"N",e=mEnv.spamLayerView,f={
mailSNList:b,from:"read",spamMoveType:c,autoMove:"Y",setAutoMove:!0,rejectCheck:d,spamLayerView:e};mcCore.requestAjax({
fCallback:$Fn(_submitDeleteSpamCallback,this).bind(f),oParameter:f,sUrl:"/json/spam/report/"})},_submitDeleteSpamCallback=function(a){
if(myCore.hideAllLayer(),"Y"==a.rejectCheck)var b=nLang.l.assign_spam_mail;else if("0"==a.spamMoveType)var b=nLang.l.moved_mail_spam;else if("1"==a.spamMoveType)var b=nLang.l.deleted_mail_permanently;
if(mCom.isPopup){try{a.setAutoMove&&(b=nLang.c.set_spam_auto_move_report),alert(b),opener&&opener.oMail&&(opener.mEnv.spamAutoMove=a.autoMove,
opener.mlCore.refreshList(!0))}catch(c){}top.close()}else{a.setAutoMove&&alert(nLang.c.set_spam_auto_move_report),
mEnv.spamAutoMove=a.autoMove,myCore.showConfirmLayer(null,b);var d=a.mailSNList.replace(/;$/,"").split(";");
if((elTargetCard=$$.getSingle("div.cv_card.selected",mCom.elRead))&&$Element(elTargetCard).attr("data-mailsn")==d[0]&&1==d.length){
var e=d[0];_woConversationMailList=_woConversationMailList.filter(function(a){return a.mailSN==e?!1:!0;
},this);var f=mcCore.getCSSName("transform"),g=mcCore.getCSSName("transition"),h=$$(".cv_card.selected ~ .cv_card",mCom.elRead);
if(f&&g&&elTargetCard&&h.length>0){var i=f.match(/webkit/i)?"-webkit-transform":"transform",j=f.match(/webkit/i)?"webkitTransitionEnd":"transitionend",k=$Element(elTargetCard).offset().top-$Element(h[0]).offset().top;
elTargetCard.style.visibility="hidden";for(var l=0;l<h.length;l++)h[l].style[g]=i+" 0.5s",h[l].style[f]="translateY("+k+"px)",
h[l].addEventListener(j,$Fn(function(a){$Element(a).attr("style",""),$$.getSingle(".cv_card.selected",mCom.elRead)?$Element($$.getSingle(".cv_card.selected",mCom.elRead)).leave():null;
},this).bind(h[l]))}else $Element(elTargetCard).leave();"list"==mCom.vDivideMode&&mCom.elReadWrap.visible()?(emptyCurMailList(),
setTimeout(updateFolder,500)):setTimeout(function(){mCom.bUpdateListForConversation=!0,refreshList(!0);
},500)}else refreshList(!0)}b=null},_makeObjectForSubmitDeleteSpam=function(){var a="",b="";_woCurMailList.forEach(function(c){
a+=c.mailSN+";",b+=c.fromAddr+";"}),";"==a[a.length-1]&&(a=a.slice(0,a.length-1)),";"==b[b.length-1]&&(b=b.slice(0,b.length-1));
var c=mCom.isReading?"read":"list";if("N"==mEnv.spamLayerView)var d=mEnv.spamMoveType||"0",e=mEnv.receiveBlock?"Y":"N",f=mEnv.spamAutoMove;else var d=$$.getSingle("#spam_radio1").checked?"0":"1",e=$$.getSingle("#checkReject")&&$$.getSingle("#checkReject").checked?"Y":"N",f=$$.getSingle("#chk_automove2").checked?"Y":"N";
var g={mailSNList:a,from:c,spamMoveType:d,autoMove:f,rejectCheck:e};return a=b=c=null,g},cancelSpam=function(a,b){
if(b){if(!confirm(nLang.l.move_inbox_add_receive_list))return!1;var c={mailSNList:b,from:mCom.isReading?"read":"list"
}}else var c=_makeObjectForCancelSpam(b);c&&mcCore.requestAjax({fCallback:$Fn(_cancelSpamCallback,this).bind(),
oParameter:c,sUrl:"/json/spam/cancel/"})},_cancelSpamCallback=function(){myCore.hideAllLayer(),mCom.isPopup?(opener&&opener.oMail&&opener.mlCore.refreshList(!0),
top.close()):refreshList(!0)},_makeObjectForCancelSpam=function(){if(0==_woCurMailList.length())return alert(nLang.c.select_mail),
!1;if(confirm(nLang.l.move_inbox_add_receive_list)){var a="";_woCurMailList.forEach(function(b){a+=b.mailSN+";";
}),";"==a[a.length-1]&&(a=a.slice(0,a.length-1));var b=mCom.isReading?"read":"list",c={mailSNList:a,
from:b};return a=b=null,c}return!1},doCursorDown=function(a){if(!mCom.isWriting){a.stopDefault();var b=$Agent().navigator();
if(b.chrome){document.body}else{document.documentElement}var c=$$("li[mailsn][@display!=none]",mCom.elList);
if(mCom.elListWrap&&mCom.elListWrap.visible()&&mCom.listCursor<c.length-1){mCom.prevDeleteCount&&(mCom.listCursor=Math.max(0,mCom.listCursor-mCom.prevDeleteCount),
mCom.prevDeleteCount=void 0);var d=$Element($$("li[mailsn][@display!=none]",mCom.elList)[mCom.listCursor]).attr("mailsn"),e=$Element($$.getSingle("."+d+"_li")),f=$Element($$("li[mailsn][@display!=none]",mCom.elList)[++mCom.listCursor]).attr("mailsn"),g=$Element($$.getSingle("."+f+"_li"));
if(1!=mCom.listCursor||0!=$$.getSingle("#mailCheck_"+d).checked||a._event.shiftKey||(f=d,g=e,--mCom.listCursor),
mCom.listCursorMailSN=f,$Element("normalPagingNav").offset().top<g.offset().top+g.height()&&(mCom.elList.scrollTop+=g.height()),
a._event.shiftKey){if(mCom.lastChecked||0==mCom.lastChecked||(mCom.lastChecked=0,e.addClass("selected"),
$$.getSingle("#mailCheck_"+d).checked=!0,$$.getSingle("#mailCheck_"+d).focus(),_woCurMailList.push(getListObject(d))),
mCom.listCursor<=mCom.lastChecked){$Element($$.getSingle("li."+d+"_li")).removeClass("selected");var h=getListObject(d);
_woCurMailList=_woCurMailList.filter(function(a){return a!=h}),$$.getSingle(".mCheck",$$.getSingle("li."+d+"_li")).checked=!1,
h=null}}else _woCurMailList.forEach(function(a){$Element($$.getSingle("li."+a.mailSN+"_li")).removeClass("selected");
var b=getListObject(a.mailSN);_woCurMailList=_woCurMailList.filter(function(a){return a!=b}),$$.getSingle(".mCheck",$$.getSingle("li."+a.mailSN+"_li")).checked=!1,
b=null},this),$$.getSingle("#mailCheckAll").checked=!1;mCom.listCursor!=mCom.lastChecked&&(a._event.shiftKey||(mCom.lastChecked=mCom.listCursor),
g.addClass("selected"),$$.getSingle("#mailCheck_"+f).checked||_woCurMailList.push(getListObject(f)),
$$.getSingle("#mailCheck_"+f).checked=!0,$$.getSingle("#mailCheck_"+f).focus()),$$.getSingle("#mailCheckAll").checked=_woMailList.length()==_woCurMailList.length()?!0:!1,
d=f=e=g=null}else{if(0!==mCom.listCursor||1!==c.length)return;var f=$Element($$("li[mailsn][@display!=none]",mCom.elList)[mCom.listCursor]).attr("mailsn"),g=$Element($$.getSingle("."+f+"_li"));
!g.hasClass("selected")&&g.addClass("selected"),$$.getSingle("#mailCheck_"+f).checked||_woCurMailList.push(getListObject(f)),
$$.getSingle("#mailCheck_"+f).checked=!0,$$.getSingle("#mailCheckAll").checked=!0}toggleReadButton(),
mcNotice.notifySelectMailCount(),_checkSelection(),myCore.hideAllLayer()}},doCursorUp=function(a){if(!mCom.isWriting){
a.stopDefault();var b=$Agent().navigator();if(b.chrome){document.body}else{document.documentElement}
if(mCom.elListWrap&&mCom.elListWrap.visible()&&mCom.listCursor>0){mCom.prevDeleteCount&&(mCom.prevDeleteCount=void 0);
var c=$Element($$("li[mailsn][@display!=none]",mCom.elList)[mCom.listCursor]).attr("mailsn"),d=$Element($$.getSingle("."+c+"_li")),e=$Element($$("li[mailsn][@display!=none]",mCom.elList)[--mCom.listCursor]).attr("mailsn"),f=$Element($$.getSingle("."+e+"_li"));
if(0>f.offset().top-f.height()&&(mCom.elList.scrollTop-=f.height()),mCom.listCursorMailSN=e,a._event.shiftKey){
if(mCom.listCursor>=mCom.lastChecked){$Element($$.getSingle("li."+c+"_li")).removeClass("selected");var g=getListObject(c);
_woCurMailList=_woCurMailList.filter(function(a){return a!=g}),$$.getSingle(".mCheck",$$.getSingle("li."+c+"_li")).checked=!1,
g=null}}else _woCurMailList.forEach(function(a){$Element($$.getSingle("li."+a.mailSN+"_li")).removeClass("selected");
var b=getListObject(a.mailSN);_woCurMailList=_woCurMailList.filter(function(a){return a!=b}),$$.getSingle(".mCheck",$$.getSingle("li."+a.mailSN+"_li")).checked=!1;
},this),$$.getSingle("#mailCheckAll").checked=!1;mCom.listCursor!=mCom.lastChecked&&(a._event.shiftKey||(mCom.lastChecked=mCom.listCursor),
f.addClass("selected"),$$.getSingle("#mailCheck_"+e).checked||_woCurMailList.push(getListObject(e)),
$$.getSingle("#mailCheck_"+e).checked=!0,$$.getSingle("#mailCheck_"+e).focus()),$$.getSingle("#mailCheckAll").checked=_woMailList.length()==_woCurMailList.length()?!0:!1,
c=e=d=f=null,toggleReadButton(),mcNotice.notifySelectMailCount(),_checkSelection(),myCore.hideAllLayer();
}}},doCursorLeft=function(){mCom.elReadWrap.visible()?$$.getSingle("#previewContent").scrollLeft-=30:mCom.elList.scrollLeft-=30;
},doCursorRight=function(){mCom.elReadWrap.visible()?$$.getSingle("#previewContent").scrollLeft+=30:mCom.elList.scrollLeft+=30;
},doReadMail=function(a,b){mCom.elListWrap.visible()&&(1==_woCurMailList.length()&&"popup"!=b?mrCore.clickTitle(a,_woCurMailList.get(0).mailSN):_woCurMailList.length()>5?alert(nLang.r.popup_read_limit_5):(_woCurMailList.length()>1||"popup"==b)&&_woCurMailList.forEach(function(b){
mrCore.popupRead(a,b.mailSN)},this))},getListObject=function(a,b){var c="";return null==b?(_woMailList.forEach(function(b){
return b.mailSN==a?void(c=b):void 0},this),""==c&&_woConversationMailList.forEach(function(b){return b.mailSN==a?void(c=b):void 0;
},this)):"parent"==b?_woMailList.forEach(function(b){return b.mailSN!=a||"parent"!=b.isChild&&"orphan"!=b.isChild?void 0:void(c=b);
},this):_woMailList.forEach(function(d){return d.mailSN==a&&mcCore.restoreSpecialChar(d.email)==mcCore.restoreSpecialChar(b)?void(c=d):void 0;
},this),c},getParentListObject=function(a){var b="";return _woParentMailList.forEach(function(c){return c.mailSN==a?void(b=c):void 0;
},this),b},_checkCurListArray=function(){var a=_woCurMailList.$value();if(1==a.length){var b=a[0].mailSN;
$$.getSingle("li."+b+"_li")||(_woCurMailList=$A([])),b=null}a=null},_getSequenceOfMail=function(a){var b="",c=$$("li[mailsn][@display!=none]",mCom.elList),d=$$.getSingle("li[mailsn="+a+"][@display!=none]",mCom.elList);
return d&&c&&$A(c).forEach(function(a,c){a==d&&(b=c,$A.Break())}),b},makeEmergencyMark=function(a){return"undefined"==typeof a||"undefined"==typeof a.priority?" ":1==a.priority?' <img width="2" height="9" class="ico_sendimp" alt="'+nLang.l.more_important+'" title="'+nLang.l.more_important+'" src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif">':"";
},makeSendmailIcon=function(a){return 1!=a.folderSN&&mcCore.isCorrespondFlag(a.status,"0x100")?['<span class="sendmailico"><span class="blind">',nLang.l.send_mail,"</span></span>"].join(""):"";
},_makeRetrieveString=function(a,b,c,d){return void 0==a?['<a title="',nLang.l.do_cancel_send,'" href="#" class="_ccr(lst.mailcancel) _c1(mlCore|retrieveMail|',"","|",b,"|",c,"|",d,') _stopDefault"><img class="ico_cancel" width="7" height="6" alt="',nLang.l.cancel_send,'" src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif">',nLang.l.cancel_send,"</a>"].join(""):['<a title="',nLang.l.do_cancel_send,'" href="#" class="_ccr(lst.mailcancel) _c1(mlCore|retrieveMail|',a,"|",b,"|",c,') _stopDefault"><img class="ico_cancel" width="7" height="6" alt="',nLang.l.cancel_send,'" src="https://'+wm.staticDomain+'/static/pwe/nm/b.gif">',nLang.l.cancel_send,"</a>"].join("");
},_makeReserveString=function(a,b,c,d,e,f){return['<a href="#" class="_ccr(lst*r.rsvedit) _c1(mlCore|editReserveMail|',c,"|",f,') _stopDefault">',nLang.c.edit,"</a>",' <a href="#" class="_ccr(lst*r.rsvcancel) _c1(mlCore|cancelReserveMail|',c,"|",f,') _stopDefault">',nLang.c.cancel,"</a>"].join("");
},_makePages=function(a,b,c,d){var e=[],f=-1;if(a=parseInt(a,10),b=b||1,b=parseInt(b,10),mCom.nPagingSize=parseInt(mCom.nPagingSize,10),
mCom.nFirstPage=1,"-1"==c&&(c=d),"H"==mEnv.divideMode)var g=a-1;else var g=a-(a-1)%mCom.nPagingSize-mCom.nPagingSize;
if(1>g?mCom.elBtnPrePage.className("pre_n _stopDefault"):(mCom.elBtnPrePage.className("pre _c1(mlCore|movePage|"+c+"|"+g+") _stopDefault"),
mCom.elBtnPrePage.addClass("list"!=mCom.vDivideMode?"_ccr(dvd.prev)":"_ccr(pag.prev)")),"H"==mEnv.divideMode)var h=a+1;else var h=a-(a-1)%mCom.nPagingSize+mCom.nPagingSize;
if(h>b?mCom.elBtnNextPage.className("next_n _stopDefault"):(mCom.elBtnNextPage.className("next _c1(mlCore|movePage|"+c+"|"+h+") _stopDefault"),
mCom.elBtnNextPage.addClass("list"!=mCom.vDivideMode?"_ccr(dvd.next)":"_ccr(pag.next)")),mCom.nLastPage=b,
mCom.nCurFirstPage=mCom.nFirstPage,mCom.nCurLastPage=mCom.nPagingSize,mCom.nCurLastPage>b&&(mCom.nCurLastPage=b),
mCom.isFolderChanged){var i=mlTemplate.pageSelector,j=$$.getSingle("span#pageSelect");j.outerHTML=i.replace("{CurPage}",1).replace(/{LastPage}/g,b);
for(var k=mCom.nCurFirstPage,l=mCom.nCurLastPage+1;l>k;k++)if(k==a)e[++f]="<strong>"+k+"</strong>";else{
if("list"!=mCom.vDivideMode)var m="_ccr(dvd.num)";else var m="_ccr(pag.num)";e[++f]="<a href='#' id='"+k+"' class='num _c1(mlCore|movePage|"+c+"|"+k+") "+m+" _stopDefault'>"+k+"</a>";
}$$.getSingle(".paging_numbers").innerHTML=e.join(""),e=j=i=null}else{var j=$$.getSingle("span#pageSelect"),i=mlTemplate.pageSelector;
if(j.outerHTML=i.replace(/{CurPage}/,a).replace(/{LastPage}/g,b),j=i=null,mCom.nCurFirstPage<a&&a<=mCom.nCurLastPage){
for(var k=mCom.nCurFirstPage,n=mCom.nCurLastPage+1;n>k;){if(k==a)e[++f]="<strong>"+k+"</strong>";else{
if("list"!=mCom.vDivideMode)var m="_ccr(dvd.num)";else var m="_ccr(pag.num)";e[++f]="<a href='#' id='"+k+"' class='num _c1(mlCore|movePage|"+c+"|"+k+") "+m+" _stopDefault'>"+k+"</a>";
}k++}$$.getSingle(".paging_numbers").innerHTML=e.join(""),k=n=e=null}else{mCom.nCurFirstPage=parseInt((a-1)/mCom.nPagingSize,10)*mCom.nPagingSize+1,
mCom.nCurLastPage=mCom.nCurFirstPage+mCom.nPagingSize-1,mCom.nCurLastPage>b&&(mCom.nCurLastPage=b);for(var k=mCom.nCurFirstPage,l=mCom.nCurLastPage+1;l>k;k++)if(k==a)e[++f]="<strong><span class='blind'>"+nLang.l.current_page+":</span>"+k+"</strong>";else{
if("list"!=mCom.vDivideMode)var m="_ccr(dvd.num)";else var m="_ccr(pag.num)";e[++f]="<a href='#' id='"+k+"' class='num _c1(mlCore|movePage|"+c+"|"+k+") "+m+" _stopDefault'>"+k+"<span class='blind'>"+nLang.l.do_move_page+"</span></a>";
}$$.getSingle(".paging_numbers").innerHTML=e.join(""),e=null}}a>1?(mCom.elBtnFirstPage.className("pre_end _c1(mlCore|movePage|"+c+"|"+mCom.nFirstPage+") _stopDefault"),
mCom.elBtnFirstPage.addClass("list"!=mCom.vDivideMode?"_ccr(dvd.first)":"_ccr(pag.first)")):mCom.elBtnFirstPage.className("pre_end_n _stopDefault"),
b>a?(mCom.elBtnLastPage.className("next_end _c1(mlCore|movePage|"+c+"|"+mCom.nLastPage+") _stopDefault"),
mCom.elBtnLastPage.addClass("list"!=mCom.vDivideMode?"_ccr(dvd.last)":"_ccr(pag.last)")):mCom.elBtnLastPage.className("next_end_n _stopDefault"),
mCom.nCurrentPage=a},getMailList=function(){return _woMailList},getCurMailList=function(){return _woCurMailList;
},emptyCurMailList=function(){_woCurMailList.empty()},getCurMailListLength=function(){return _woCurMailList.length();
},pushToCurMailList=function(a){_woCurMailList.push(a)},uniqueCurMailList=function(){_woCurMailList.unique();
},blurSelectPage=function(){$$.getSingle("span#pageSelect input").value=mCom.nCurrentPage},focusSelectPage=function(){
$$.getSingle("span#pageSelect input").value=""},doStop=function(){},updateListObject=function(a,b){var c={};
mCom.oCurRequest?(c=mCom.oCurRequest,c.page=a):(c={folderSN:mCom.nCurrentFolder,isUnread:mCom.bIsUnread,
page:a,sortField:mCom.nCurSortField,sortType:mCom.nCurSortType,type:""},("all"==mCom.nCurrentFolder||"mark"==mCom.nCurrentFolder||"attach"==mCom.nCurrentFolder||"tome"==mCom.nCurrentFolder)&&c.type==mCom.nCurrentFolder);
var d="/json/list/",e="list";"search"==mCom.nCurrentFolder?(e="search",d="/json/search/"):"2"==mCom.nCurrentFolder&&(e="readReceipt",
d="/json/list/readReceipt/"),mcCore.requestAjax({fClass:e,fCallback:$Fn(_updateListObjectCallback,this).bind(c,b),
oParameter:c,sUrl:d})},_updateListObjectCallback=function(a,b,c){mCom.oCurRequest=a;var d=0,e=c.mailData.length;
for(_woMailList.empty();e>d;){var f={};f.mailSN=c.mailData[d].mailSN,_woMailList.push(f),d++}return 0==e?void alert("next"==b?nLang.r.no_next_mail:nLang.r.no_prev_mail):void("next"==b?clickTitle(null,_woMailList.get(0).mailSN):"prev"==b&&clickTitle(null,_woMailList.get(_woMailList.length()-1).mailSN));
},setListDisplayStopScroll=function(a){mCom.nListWrapScrollTop=mCom.nListWrapScrollTop||0,"hide"==a?(_bScrollToTop=!1,
mCom.elListWrap.hide()):(_bScrollToTop=!0,mCom.elListWrap.show(),mCom.elList.scrollTop=mCom.nListWrapScrollTop,
mCom.nListWrapScrollTop=0)},findMailSN=function(a,b){var c="prev"==b?-1:1,d=null;if(mCom.isPopup||"list"==mCom.vDivideMode){
var e=_woMailList.filter(function(a){return!a.parentMailSN});try{e.forEach(function(b,e,f){a==b.mailSN&&(d=f[e+c].mailSN);
})}catch(f){return null}return d}var g=$$("li[mailsn][@display!=none]",mCom.elList),h=_getSequenceOfMail(a);
return g[h+c]?$Element(g[h+c]).attr("mailsn"):null};var T=function(){mCom.elBtnIcoViewTop.style.display=0===mCom.elList.scrollTop||mCom.elList.scrollHeight-mCom.elList.clientHeight<=0?"none":"";
};setNoScroll=function(){"S"==fb()&&mlCore.appendList(),mCom.bAppendigList=!1,mCom.elList.onscroll=function(){
return 0==mCom.elList.scrollTop||mCom.elList.scrollHeight-mCom.elList.clientHeight<=0?void(mCom.elBtnIcoViewTop.style.display="none"):(mCom.elBtnIcoViewTop.style.display="",
!mCom.bAppendigList&&!mCom.bShowListLodaingImage&&mCom.elList.scrollHeight-5<mCom.elList.scrollTop+mCom.welList.height()&&(mCom.bAppendigList=!0,
mlCore.appendList()),void(mcCore.isAttachView()&&_attachCallShowBodies()))}},appendList=function(){if(U()){
if($$.getSingle(".list_autoload",mCom.elList))return;if("S"==mlCore.getCurrentViewType()&&mCom.nCurrentPage>1&&mCom.nCurFolderTotalMailCount<1){
var a=parseInt(mCom.nCurrentPage,10)-1;if(!$$.getSingle(".list_autoload",mCom.elList)){var b='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.prev) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+a+'||true)"><span class="bu_prev"></span>'+nLang.l.prev_list+"</button></div>";
$Element(mCom.elList).append(b)}return void(mCom.bAppendigList=!1)}if(mCom.nCurFolderTotalMailCount<1)return void(mCom.bAppendigList=!1);
var c=2==mCom.nCurrentFolder?_woParentMailList.length():"search"==mCom.nCurrentFolder?_woMailList.length():$$("> li",$$.getSingle(" ol",mCom.elList)).length;
if("C"==mlCore.getCurrentViewType()||mCom.sCurFilterType&&"S"==mlCore.getCurrentViewType())var d=100;else if("S"==mlCore.getCurrentViewType()){
var d=20;c=$$("ul.infor_sender").length}else var d=400;var e=(mCom.nCurrentPage-1)*d+c;if(0==c)return void(mCom.bAppendigList=!1);
if("C"==mlCore.getCurrentViewType()||"S"==mlCore.getCurrentViewType())if(mCom.bAppendigList=!1,1==mCom.nCurrentPage)if(d>c);else{
var f=parseInt(mCom.nCurrentPage,10)+1;if(!$$.getSingle(".list_autoload",mCom.elList)){var b='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.next) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+f+')">'+nLang.l.next_list+'<span class="bu_next"></span></button></div>';
$Element(mCom.elList).append(b)}}else if(d>c){var a=parseInt(mCom.nCurrentPage,10)-1;if(!$$.getSingle(".list_autoload",mCom.elList)){
var b='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.prev) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+a+'||true)"><span class="bu_prev"></span>'+nLang.l.prev_list+"</button></div>";
$Element(mCom.elList).append(b)}}else{var a=parseInt(mCom.nCurrentPage,10)-1,f=parseInt(mCom.nCurrentPage,10)+1;
if(!$$.getSingle(".list_autoload",mCom.elList)){var b='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.prev) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+a+'||true)"><span class="bu_prev"></span>'+nLang.l.prev_list+'</button> <button class="_ccr(als.next) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+f+')">'+nLang.l.next_list+'<span class="bu_next"></span></button></div>';
$Element(mCom.elList).append(b)}}else if(c==mCom.nCurFolderTotalMailCount)mCom.bAppendigList=!1;else{
if(e<mCom.nCurFolderTotalMailCount&&d>c){if(!$$.getSingle(".list_autoload",mCom.elList)){var b='<div class="list_autoload"><p class="al_msg"><span class="ico_loading"></span>'+nLang.l.loading_list+"</p></div>";
$Element(mCom.elList).append(b)}return _attachMailList(c),void(mCom.nExpectedShowMailCount=c+30)}if(e==mCom.nCurFolderTotalMailCount){
var a=parseInt(mCom.nCurrentPage,10)-1;if(!$$.getSingle(".list_autoload",mCom.elList)){var b='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.prev) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+a+'||true)"><span class="bu_prev"></span>'+nLang.l.prev_list+"</button></div>";
$Element(mCom.elList).append(b)}mCom.bAppendigList=!1}else if(e<mCom.nCurFolderTotalMailCount&&c>=d&&1==mCom.nCurrentPage){
var f=parseInt(mCom.nCurrentPage,10)+1;if(!$$.getSingle(".list_autoload",mCom.elList)){var b='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.next) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+f+')">'+nLang.l.next_list+'<span class="bu_next"></span></button></div>';
$Element(mCom.elList).append(b)}mCom.bAppendigList=!1}else{var a=parseInt(mCom.nCurrentPage,10)-1,f=parseInt(mCom.nCurrentPage,10)+1;
if(!$$.getSingle(".list_autoload",mCom.elList)){var b='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.prev) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+a+'||true)"><span class="bu_prev"></span>'+nLang.l.prev_list+'</button> <button class="_ccr(als.next) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+f+')">'+nLang.l.next_list+'<span class="bu_next"></span></button></div>';
$Element(mCom.elList).append(b)}mCom.bAppendigList=!1}}}else mCom.elList.onscroll=null,mcCore.isAttachView()&&(mCom.elList.onscroll=function(){
mcCore.isAttachView()&&_attachCallShowBodies()})},_attachMailList=function(a){for(var b=[],c=-1,d=mCom.oRecentListData,e=mCom.oRecentListRequestParam,f=d.mailData,g=a+30,h=a;g>h&&h<f.length;h++){
var j=f[h];if("2"!=mCom.nCurrentFolder){if("fromAddr"==mCom.nCurrentFolder)b[++c]=_makeRow(mlTemplate.oListTemplate.body,"fromAddr",j,d.currentTime,e.type);else if("search"==mCom.nCurrentFolder){
if(b[++c]=_makeRow(mlTemplate.oSearchListTemplate.body,"search",j,d.currentTime,e.type),""!=j.body||j.attachList.length>0){
if(mEnv.subjectOnly)var k="<li class='search_preview "+j.mailSN+"_preview {li_horizon}' style='display:none'><p class='{horizontal}'>";else var k="<li class='search_preview "+j.mailSN+"_preview {li_horizon}'><p class='{horizontal}'>";
"horizontal"==mCom.vDivideMode?(k=k.replace(/\{li_horizon\}/g,"li_h"),k=k.replace(/\{horizontal\}/g,"preview_h")):(k=k.replace(/\{li_horizon\}/g,""),
k=k.replace(/\{horizontal\}/g,""));var l=[],m=-1;if(j.body&&(l[++m]=j.body),j.attachList)for(var n=0,o=j.attachList.length;o>n;){
var p=j.attachList[n],q=i?encodeURIComponent(p.filename):"",r=mcCore.isBlockedExtension(p.attachName.replace(/<b class='_search'>/g,"").replace(/<\/b>/g,""));
l[++m]=r?"<a href='javascript:;' class='attachfile _c1(myCore|downloadBlocked) _stopDefault'><span class='icoFile'></span>"+p.attachName+"</a> "+p.attachBody:"<a class='attachfile' target='checkVirusArea' href='/file/download/each/"+q+"?flag=download&attachType=normal&mailSN="+j.mailSN+"&attachIndex="+p.partSN+"'><span class='icoFile'></span>"+p.attachName+"</a> "+p.attachBody,
p=null,n++}k+=l.join("<br><br>"),k+="</p></li>",b[++c]=k,k=null}}else if(mcCore.isAttachView())b[++c]=_makeRow(mlTemplate.oAttachListTemplate.body,"attach",j,d.currentTime,"attach");else{
if(!e)var e={folderSN:mEnv.firstFolderSN,type:mEnv.firstFolderSN};oTemplate=1==mCom.nCurrentFolder?mlTemplate.oSenderListTemplate:mlTemplate.oListTemplate,
b[++c]=_makeRow(oTemplate.body,e.folderSN,j,d.currentTime,e.type)}var s={};s.mailSN=j.mailSN,s.folderSN=j.folderSN,
s.status=j.status,s.size=j.size,s.attachCount=j.attachCount,s.subject=j.subject,1==mCom.nCurrentFolder||3==mCom.nCurrentFolder?(s.fromAddr=j.toList[0].email,
s.fromName=j.toList[0].name):"search"!=mCom.nCurrentFolder||1!=j.folderSN&&3!=j.folderSN?(s.fromAddr=j.from.email,
s.fromName=j.from.name):(s.fromAddr=j.replyTo.email,s.fromName=j.replyTo.name),s.toAddr=j.toList?j.toList[0].email:"",
s.iconType=j.iconType,s.highlight=j.highlight,s.importantAddress=j.importantAddress,s.securityLevel=j.securityLevel,
s.category=j.category,"undefined"!=typeof j.reSend&&(s.reSend=j.reSend),s.isRead=mcCore.isCorrespondFlag(s.status,"0x4")?!0:!1,
s.isMarked=mcCore.isCorrespondFlag(s.status,"0x20")?!0:!1,_woMailList.push(s)}else{if(1==j.receiverCount){
var t=_makeRowAtReadReceipt(mlTemplate.oReadReceiptListTemplate.body,j,j,d.currentTime,!1,d.dlGroupEmailListMap[j.rcptAddress]?"detail":null),s={};
s.mailSN=j.mailSN,s.isChild="orphan",s.email=j.rcptAddress,s.isReserved=j.isReserved,s.isDelayDelivery=j.isDelayDelivery,
s.isSaveSentMail=j.isSaveSentMail,s.size=j.size,s.subject=j.subject,"undefined"!=typeof j.reSend&&(s.reSend=j.reSend),
_woMailList.push(s),_woParentMailList.push(s),s=null}else{var t=mlTemplate.oReadReceiptListTemplate.body,u={};
u.TogglePlus=mlTemplate.sPlusButton.replace("{MailSN}",j.mailSN),u.MailSN=j.mailSN,u.FolderSN=2,u.Email="parent",
u.CheckCcr="lst.selectcheck";var s={};s.mailSN=j.mailSN,s.isChild="parent",s.email="parent",s.childNum=j.receiverCount,
s.subject=j.subject,s.sentTime=j.sentTime,s.isDelayDelivery=j.isDelayDelivery,s.iconType=j.iconType,
s.isReserved=j.isReserved,s.isSaveSentMail=j.isSaveSentMail,s.size=j.size,s.subject=j.subject,"undefined"!=typeof j.reSend&&(s.reSend=j.reSend),
_woMailList.push(s),_woParentMailList.push(s),u.IsEmergency=makeEmergencyMark(j),u.SubjectString=j.subject.match(/^\s*$/)?nLang.l.no_title:j.subject.replace(/\$/g,"&#36;"),
u.SentDate=mcCore.getHumanTime(j.sentTime,d.currentTime,"sentTime"),u.reserve=j.isReserved?" <span class='reserve'>"+nLang.c.reserve+"<span class='blind'>"+nLang.c.mail+"</span></span>":j.isDelayDelivery?" <span class='suspend'>"+nLang.c.wait+"<span class='blind'>"+nLang.c.mail+"</span></span>":"",
u.FromName=0!=j.readCount&&mEnv.useReadReceipt?j.receiverCount+nLang.l.during_receiver+j.readCount+nLang.l.count_read_receiver:j.receiverCount+nLang.l.count_receiver,
u.ReceiverTag="span",u.ReceiverAttr="",u.ReceiptStatus="<span class=''><span class='blind'>"+nLang.l.receipt_date+"</span></span>",
u.CancelPost=j.isReserved||j.isDelayDelivery?_makeReserveString(j.messageID,j.rcptAddress,j.mailSN,j.sentTime,j.isSaveSentMail,j.isDelayDelivery):"Y"==j.availableCancel&&"SENDING"!=j.status?_makeRetrieveString("",j.rcptAddress,j.mailSN,j.receiverCount):"",
t=mcCore.template(t,u),sSubBody=u=oStatus=null}b[++c]=t}}var v=$Element($$.getSingle("ol",mCom.elList));
v&&v.appendHTML(b.join("")),$$.getSingle(".list_autoload",mCom.elList)&&$Element($$.getSingle(".list_autoload",mCom.elList)).leave(),
mCom.bAppendigList=!1},_adjustListButton=function(){if(mCom.bUpdateListForNewMail&&(mCom.elList.scrollTop=mCom.nListWrapScrollTop,
mCom.nListWrapScrollTop=0),mCom.bShowListLodaingImage=!1,mCom.bAppendigList=!1,"C"==mlCore.getCurrentViewType()||"S"==mlCore.getCurrentViewType()&&mCom.sCurFilterType)var a=100;else var a=400;
var b=2==mCom.nCurrentFolder?_woParentMailList.length():"search"==mCom.nCurrentFolder?_woMailList.length():$$("> li",$$.getSingle("> ol",mCom.elList)).length,c=(mCom.nCurrentPage-1)*a+b;
if("C"==mlCore.getCurrentViewType()||"S"==mlCore.getCurrentViewType()&&mCom.sCurFilterType)if(1==mCom.nCurrentPage)if(a>b);else{
var d=parseInt(mCom.nCurrentPage,10)+1;if(!$$.getSingle(".list_autoload",mCom.elList)){var e='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.next) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+d+')">'+nLang.l.next_list+'<span class="bu_next"></span></button></div>';
$Element(mCom.elList).append(e)}}else if(a>b){var f=parseInt(mCom.nCurrentPage,10)-1;if(!$$.getSingle(".list_autoload",mCom.elList)){
var e='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.prev) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+f+'||true)"><span class="bu_prev"></span>'+nLang.l.prev_list+"</button></div>";
$Element(mCom.elList).append(e)}}else{var f=parseInt(mCom.nCurrentPage,10)-1,d=parseInt(mCom.nCurrentPage,10)+1;
if(!$$.getSingle(".list_autoload",mCom.elList)){var e='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.prev) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+f+'||true)"><span class="bu_prev"></span>'+nLang.l.prev_list+'</button> <button class="_ccr(als.next) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+d+')">'+nLang.l.next_list+'<span class="bu_next"></span></button></div>';
$Element(mCom.elList).append(e)}}else if(1!=mCom.nCurrentPage&&c==mCom.nCurFolderTotalMailCount){var f=parseInt(mCom.nCurrentPage,10)-1;
if(!$$.getSingle(".list_autoload",mCom.elList)){var e='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.prev) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+f+'||true)"><span class="bu_prev"></span>'+nLang.l.prev_list+"</button></div>";
$Element(mCom.elList).append(e)}}else if(c<mCom.nCurFolderTotalMailCount&&b>=a&&1==mCom.nCurrentPage){
var d=parseInt(mCom.nCurrentPage,10)+1;if(!$$.getSingle(".list_autoload",mCom.elList)){var e='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.next) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+d+')">'+nLang.l.next_list+'<span class="bu_next"></span></button></div>';
$Element(mCom.elList).append(e)}}else if(b>=a){var f=parseInt(mCom.nCurrentPage,10)-1,d=parseInt(mCom.nCurrentPage,10)+1;
if(!$$.getSingle(".list_autoload",mCom.elList)){var e='<div class="list_autoload"><p class="al_msg"><button class="_ccr(als.prev) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+f+'||true)"><span class="bu_prev"></span>'+nLang.l.prev_list+'</button> <button class="_ccr(als.next) _c1(mlCore|movePage|'+mCom.nCurrentFolder+"|"+d+')">'+nLang.l.next_list+'<span class="bu_next"></span></button></div>';
$Element(mCom.elList).append(e)}}mCom.elBtnIcoViewTop.style.display=0==mCom.elList.scrollTop||mCom.elList.scrollHeight-mCom.elList.clientHeight<=0?"none":"";
},_setBrowserTitleForList=function(){var a=mCom.nCurFolderTotalUnreadCount>0?"("+mCom.nCurFolderTotalUnreadCount+")":"",b=mCom.nCurReadMailSubject,c=mCom.nCurFolderName,d="";
d=mCom.isReading&&"list"==mCom.vDivideMode?b+a:c+a+" : "+getServiceTitle(),document.title=$S(d).unescapeHTML();
};var U=function(){return"S"==mEnv.pagingMode||"C"==fb()||"S"==fb()?!0:!1},V=function(a,b,c){if("boolean"!=typeof c&&(c=!0),
a){var d=$$.getSingle("! li[mailsn]",a.element),e=$Element(d),b=mcCore.getPureMailSN(e.attr("mailsn"));
a.element=$$.getSingle("button.btn_view_slave",d),$Element(a.element).hasClass("active")?ccr(a.element,"lst.threadunfold",a):ccr(a.element,"lst.threadfold",a);
}else if(b)var d=$$.getSingle("li."+b+"_li",mCom.elList),e=$Element(d),a={element:$$.getSingle("button.btn_view_slave",d)
};if(b)if($Element(a.element).hasClass("active")){e.removeClass("cv_master"),$Element(a.element).removeClass("active");
var f=e.next(),g=f?!!f.query(".current"):!1;f&&f.hasClass("cv_slave")&&f.leave();var h=_getSequenceOfMail("c"+b),i=0;
_woMailList=_woMailList.filter(function(a){return a.parentMailSN==b?(i++,!1):!0}),mCom.listCursor>h+i?mCom.listCursor-=i:mCom.listCursor>h&&(mCom.listCursor=h),
_woCurMailList=_woCurMailList.filter(function(a){return a.parentMailSN!=b});var j=e.attr("mailsn");g&&w(j);
}else{var f=e.next(),g=f?!!f.query(".current"):!1;if($Element(a.element).addClass("active"),f&&f.hasClass("cv_slave"))f.show();else{
var k={mailSN:b,pageSize4SeeMore:400};mcCore.requestAjax({fCallback:$Fn(function(a,b){N(a,b.totalCount,b.unreadCount),
e.addClass("cv_master"),e.afterHTML(W(b,a)),e.hasClass("current"),(g||e.hasClass("current"))&&w(null);
},this).bind(b),async:c,oParameter:k,sUrl:"/json/list/thread/"})}}},W=function(a,b){var c=[],d=-1;if(1==mCom.nCurrentFolder)var e=mlTemplate.oSenderListTemplate;else var e=mlTemplate.oListTemplate;
var f=[];c[++d]='<li class="cv_slave"><ol class="mailList single">';for(var g=0,h=a.mailData.length;h>g;g++){
var i=a.mailData[g];c[++d]=_makeRow(e.body,mCom.nCurrentFolder,i,a.currentTime,"conversation"),i.parentMailSN=mcCore.getPureMailSN(b),
i.isRead=mcCore.isCorrespondFlag(i.status,"0x4")?!0:!1,i.isMarked=mcCore.isCorrespondFlag(i.status,"0x20")?!0:!1,
i.fromName=i.from.name,i.fromAddr=i.from.email,f.push(i)}var j=_getSequenceOfMail("c"+b),k=_woMailList.slice(0,j+1).$value(),l=_woMailList.slice(j+1,_woMailList.length()+1).$value();
return _woMailList=$A(k.concat(f).concat(l)),mCom.listCursor>j&&(mCom.listCursor+=a.mailData.length),
c[++d]="</ol></li>",c.join("")},X=function(){for(var a=$$("li[mailsn]",mCom.elList),b={},c=0,d=a.length;d>c;c++){
var e=a[c];b[$Element(e).attr("mailsn")]={el:e,folderSN:$Element(e).attr("foldersn"),isRemove:!0,isUnread:$Element(e).hasClass("notRead"),
changeFolder:!1,isSlave:!1}}_woMailList.forEach(function(a){b[a.mailSN]&&(b[a.mailSN].isRemove=!1,b[a.mailSN].folderSN!=a.folderSN&&(4==a.folderSN||5==a.folderSN?b[a.mailSN].isRemove=!0:(b[a.mailSN].folderSN=a.folderSN,
b[a.mailSN].changeFolder=!0)),b[a.mailSN].status=a.status,a.parentMailSN&&(b[a.mailSN].isSlave=!0))});
for(var f in b){if(b[f].changeFolder)if(mcCore.avaliableFolderIncludeMail(mCom.nCurrentFolder,b[f].folderSN))for(var g=$$("li."+f+"_li,.c"+f+"_li",mCom.elList),c=0;c<g.length;c++){
var h=$$.getSingle("span.folderName",g[c]);h&&h.innerHTML.match(/^\[/)&&(h.innerHTML="["+mcCore.findFolderName(b[f].folderSN)+"] "),
$Element(g[c]).attr("foldersn",b[f].folderSN);var i=$$.getSingle("span.sendmailico",g[c]);i&&$Element(i).leave();
var j=makeSendmailIcon(b[f]);j&&$Element(h).before(j)}else{if(f.match(/^c/))return void refreshList(!0);
if(b[f].isSlave)for(var g=$$("li."+f+"_li,.c"+f+"_li",mCom.elList),c=0;c<g.length;c++){var h=$$.getSingle("span.folderName",g[c]);
h&&h.innerHTML.match(/^\[/)&&(h.innerHTML="["+mcCore.findFolderName(b[f].folderSN)+"] "),$Element(g[c]).attr("foldersn",b[f].folderSN);
var i=$$.getSingle("span.sendmailico",g[c]);i&&$Element(i).leave();var j=makeSendmailIcon(b[f]);j&&$Element(h).before(j);
}else b[f].isRemove=!0}if(b[f].isRemove){if(mcCore.getParentMailSN(f)){var k=mcCore.getParentMailSN(f);
_woMailList.forEach(function(a){a.mailSN==k&&(a.threadCount--,b[f].isUnread&&a.unreadThreadCount--,$A.Break());
},this)}$Element(b[f].el).leave()}}_woMailList.forEach(function(a){if(a.threadCount){a.threadCount<2&&refreshList(!0);
var b=$$.getSingle("li."+a.mailSN+"_li button.btn_view_slave",mCom.elList);if(b){var c=a.threadCount>99?"99+":a.threadCount;
b.innerHTML=nLang.l.number_of_relative_mail2.replace("{Number}",c)}}},this),setTimeout(updateFolder,500);
},Y=function(){var a={};_woMailList.forEach(function(b){if(b.threadCount){var c=mcCore.getPureMailSN(b.mailSN);
"undefined"==typeof a[c]&&(a[c]=b.unreadThreadCount)}},this);for(var b in a){var c="c"+b,d=$$.getSingle("li."+c+"_li");
if(d){var e=$Element($$.getSingle(".icoRead",d)),f=e.className(),g=$$.getSingle("strong.mail_title span:not(.blind)",d);
0==a[b]?(g.innerHTML="",$Element(d).removeClass("notRead"),e.attr("title",nLang.r.read_mail),f=f.replace("|read_conversation","|unread_conversation"),
f.indexOf(" no")>0&&(f=f.indexOf(" nofw")>0||f.indexOf(" nore")>0?f.replace(" no"," "):f.replace(" no"," yes"))):(g.innerHTML="("+a[b]+")",
$Element(d).addClass("notRead"),e.attr("title",nLang.r.not_read_mail),f=f.replace("|unread_conversation","|read_conversation"),
f.indexOf(" yes")>0?f=f.replace(" yes"," no"):f.indexOf(" fw")>0?f=f.replace(" fw"," nofw"):f.indexOf(" re")>0&&(f=f.replace(" re"," nore"))),
e.className(f),_woMailList.forEach(function(d){d.mailSN==c&&(d.isRead=!a[b])},this),_woCurMailList.forEach(function(d){
d.mailSN==c&&(d.isRead=!a[b])},this)}}toggleReadButton()},Z=function(){var a={};_woMailList.forEach(function(b){
b.parentMailSN&&("undefined"==typeof a[b.parentMailSN]&&(a[b.parentMailSN]=0),b.isMarked&&a[b.parentMailSN]++);
},this);for(var b in a){var c="c"+b,d=$$.getSingle("li."+c+"_li");if(d){var e=$$.getSingle(".icoImportant",d),f=$Element(e);
0==a[b]?(f.addClass("icoImportantOff"),f.removeClass("icoImportantOn"),$$.getSingle("span.blind",e).innerHTML=nLang.c.mark_inportant_mail):(f.addClass("icoImportantOn"),
f.removeClass("icoImportantOff"),$$.getSingle("span.blind",e).innerHTML=nLang.c.unmark_inportant_mail),
_woMailList.forEach(function(d){d.mailSN==c&&(d.isMarked=a[b])},this),_woCurMailList.forEach(function(d){
d.mailSN==c&&(d.isMarked=a[b])},this)}}},_=function(a){return"undefined"==typeof _oListStartOffset||_oListStartOffset.folderSN!=mCom.nCurrentFolder?(bb(),
0):_oListStartOffset.startOffset[a]||0},ab=function(a,b){("undefined"==typeof _oListStartOffset||_oListStartOffset.folderSN!=mCom.nCurrentFolder)&&bb(),
_oListStartOffset.startOffset[a]=b},bb=function(){_oListStartOffset={folderSN:mCom.nCurrentFolder,startOffset:[0,0]
}},cb=function(a){var b=$$.getSingle("! ul",a);$$.getSingle("li.selected",b)?$Element($$.getSingle("li.selected",b)).removeClass("selected"):null,
$Element($$.getSingle("! li",a)).addClass("selected"),a.focus()},db=function(a,b){hideAllLayer(),fb()!=b&&mcCore.requestAjax({
fCallback:$Fn(eb,null).bind(b),oParameter:{folderSN:mCom.nCurrentFolder,viewType:b},sUrl:"/json/option/folderView/set/"
})},eb=function(a){mEnv.folderView[mCom.nCurrentFolder+""]=a,mCom.nCurrentPage=1,$Element($$.getSingle("#listBtnMenu .layoutSelect .btn_change_type .blind")).text(p[a]),
refreshList()},fb=function(){if(!gb())return"T";var a=$A(["T","C","S"]),b=mEnv.folderView;return b&&b[mCom.nCurrentFolder+""]&&a.has(b[mCom.nCurrentFolder+""])?b[mCom.nCurrentFolder+""]:"T";
},gb=function(){var a=$A(["1","2","3","4","5","6","mark","attach","tome","idomain","search","unread","remind","thread"]);
return"boolean"==typeof mCom.isPopup&&mCom.isPopup||a.has(mCom.nCurrentFolder+"")||/^(vip|bil)\$/.test(mCom.nCurrentFolder)||mCom.bIsUnread||parseInt(mCom.nCurrentFolder,10)>=1e7?!1:!0;
},hb=function(a){var b=/ disabled/g;if("disable"==a)mCom.waElListBtnGroupAtDiabled.forEach(function(a){
a.setAttribute("disabled","disabled"),a.className+=" disabled"});else for(var c=$ElementList(mCom.waElListBtnGroupAtDiabled),d=0,e=c.length();e>d;d++){
var f=c.get(d);f.visible()&&(f.attr("disabled",!1),f.className(f.className().replace(b,"")))}},ib=function(a){
"hide"===a?mCom.waElListBtnGroupAtToggle.forEach(function(a){a.hide()}):"show"===a&&mCom.waElListBtnGroupAtToggle.forEach(function(a){
a.show()})},jb=function(){"S"==mlCore.getCurrentViewType()?mCom.wElCheckAllBox.hide():(mCom.wElCheckAllBox.css("display",""),
"2"==mCom.nCurrentFolder?mCom.wElArrowInCheckAllBox.hide():mCom.wElArrowInCheckAllBox.css("display",""));
},kb=function(){if(1!==mlCore.getCurMailListLength())return void alert(nLang.c.select_only_one);var a=mlCore.getCurMailList().get(0).mailSN;
mcCore.requestAjax({sUrl:"/json/read/preview/",fCallback:$Fn(lb,this).bind(a),oParameter:{mailSN:a,length:3e3
}})},lb=function(a,b){var c=b.mailInfo.body;mrCore.getTranslateDir(c),setTimeout(function(){mrCore.popupRead(null,a,"translate");
},1)},mb=function(a){mcCore.isNaver()||(6==a||a>=1e7?($Element("folder_deleteUnreadMails")&&$Element("folder_deleteUnreadMails").html(nLang.m.del_unread_memo),
$$.getSingle("#changeViewLayoutLayer li[data-viewlayout=list] a")&&$Element($$.getSingle("#changeViewLayoutLayer li[data-viewlayout=list] a")).html(nLang.m.list_no_split_memo),
$$.getSingle("#changeViewFilterLayer li[data-viewfilter=all] a")&&$Element($$.getSingle("#changeViewFilterLayer li[data-viewfilter=all] a")).html(nLang.m.all_memo),
$$.getSingle("#changeViewFilterLayer li[data-viewfilter=unread] a")&&$Element($$.getSingle("#changeViewFilterLayer li[data-viewfilter=unread] a")).html(nLang.m.menu_unread_memo),
$$.getSingle("#changeViewFilterLayer li[data-viewfilter=mark] a")&&$Element($$.getSingle("#changeViewFilterLayer li[data-viewfilter=mark] a")).html(nLang.m.mark_memo),
$$.getSingle("#changeViewFilterLayer li[data-viewfilter=attach] a")&&$Element($$.getSingle("#changeViewFilterLayer li[data-viewfilter=attach] a")).html(nLang.m.attach_memo2)):($Element("folder_deleteUnreadMails")&&$Element("folder_deleteUnreadMails").html(nLang.m.del_unread),
$$.getSingle("#changeViewLayoutLayer li[data-viewlayout=list] a")&&$Element($$.getSingle("#changeViewLayoutLayer li[data-viewlayout=list] a")).html(nLang.m.list_no_split),
$$.getSingle("#changeViewFilterLayer li[data-viewfilter=all] a")&&$Element($$.getSingle("#changeViewFilterLayer li[data-viewfilter=all] a")).html(nLang.m.all_mail),
$$.getSingle("#changeViewFilterLayer li[data-viewfilter=unread] a")&&$Element($$.getSingle("#changeViewFilterLayer li[data-viewfilter=unread] a")).html(nLang.m.menu_unread),
$$.getSingle("#changeViewFilterLayer li[data-viewfilter=mark] a")&&$Element($$.getSingle("#changeViewFilterLayer li[data-viewfilter=mark] a")).html(nLang.m.mark_mail),
$$.getSingle("#changeViewFilterLayer li[data-viewfilter=attach] a")&&$Element($$.getSingle("#changeViewFilterLayer li[data-viewfilter=attach] a")).html(nLang.m.attach_mail2)));
},nb=!1,ob=function(){nb||(nb=!0,window.requestAnimationFrame?window.requestAnimationFrame(pb):setTimeout(pb,66));
},pb=function(){if(mCom.elListWrap.visible()){var a="horizontal"===mCom.vDivideMode?600:800;mCom.elListWrap.width()>=a?mCom.elListWrap.removeClass("hidesize"):mCom.elListWrap.addClass("hidesize"),
nb=!1}};return{PAGE_SIZE_FOR_SPECIFICSENDER:r,arrangeListMenu:arrangeListMenu,updateListStopScroll:updateListStopScroll,
updateList:u,clearReadArea:clearReadArea,initSimpleSearchText:initSimpleSearchText,showThread:showThread,
listSender:listSender,fParseListBo:fParseListBo,fParseListForReadReceiptBo:fParseListForReadReceiptBo,
displayReSearchCheckbox:displayReSearchCheckbox,toggleCheckAll:toggleCheckAll,unCheckAll:unCheckAll,
selectMail:selectMail,toggleCheckMail:L,toggleCheckMailRcpt:M,deleteMail:deleteMail,readMail:readMail,
markMail:markMail,unmarkMail:unmarkMail,markMailSelf:markMailSelf,moveMail:moveMail,movePage:movePage,
makeObjectForMoveMail:makeObjectForMoveMail,moveMailCallBack:moveMailCallBack,checkMailUI:checkMailUI,
toggleReadButton:toggleReadButton,getSelectedMailList:getSelectedMailList,setSortField:setSortField,
setViewFilter:setViewFilter,scrapMailToCalendar:scrapMailToCalendar,scrapMailToTodo:Q,toggleRcptExpand:toggleRcptExpand,
toggleSearchExpand:toggleSearchExpand,toggleSearchTitle:toggleSearchTitle,setImportance:setImportance,
previewMail:previewMail,getMailAddress:getMailAddress,getParentMail:getParentMail,refreshList:refreshList,
retrieveMail:retrieveMail,editReserveMail:editReserveMail,cancelReserveMail:cancelReserveMail,cancelReserveMailFromNoti:cancelReserveMailFromNoti,
cancelDeleteMoveMailFromNoti:cancelDeleteMoveMailFromNoti,optionConfirmFromNoti:optionConfirmFromNoti,
backToList:backToList,submitDeleteSpam:submitDeleteSpam,submitDeleteSpamDirect:submitDeleteSpamDirect,
cancelSpam:cancelSpam,doCursorDown:doCursorDown,doCursorUp:doCursorUp,doCursorLeft:doCursorLeft,doCursorRight:doCursorRight,
doReadMail:doReadMail,getListObject:getListObject,getParentListObject:getParentListObject,makeEmergencyMark:makeEmergencyMark,
makeSendmailIcon:makeSendmailIcon,getMailList:getMailList,getCurMailList:getCurMailList,emptyCurMailList:emptyCurMailList,
getCurMailListLength:getCurMailListLength,pushToCurMailList:pushToCurMailList,uniqueCurMailList:uniqueCurMailList,
doStop:doStop,blurSelectPage:blurSelectPage,focusSelectPage:focusSelectPage,beforeUpdateList:beforeUpdateList,
doSearchWithOption:doSearchWithOption,doSearch_new:doSearch_new,setListDisplayStopScroll:setListDisplayStopScroll,
findMailSN:findMailSN,updateListObject:updateListObject,setNoScroll:setNoScroll,appendList:appendList,
isUseViewMore:U,toggleConversationList:V,arrangeConversation:X,checkConversationReadStatus:Y,checkConversationMarkStatus:Z,
updateConversationListForNewMail:t,getListStartOffset:_,setListStartOffset:ab,clearListStartOffset:bb,
setThreadCount:N,highlightView:cb,setViewType:db,getCurrentViewType:fb,setListButtonDisabled:hb,setCheckAllBoxDisplay:jb,
toggleSubListForSenderView:toggleSubListForSenderView,showMoreSubListForSenderView:C,showDetailListForSenderView:D,
setListButtonToggle:ib,attachNavClicked:attachNavClicked,attachDownloadFileDirect:attachDownloadFileDirect,
initAttachShow:y,pushThumbnailQueue:H,clearThumbnailQueue:I,guessLanguage:kb,popupReceiptList:E,resizeListArea:ob,
toggleSize:pb,getMailCategory:S}}(),mlReceipt=function(){var a,b,c,d=$("#ly_fail_cancel_send"),e="<li><span class='receipt_name' title='{ReceiverAddress}'><span class='blind'>"+nLang.c.receiver+"</span>{ReceiverName}</span><span class='receipt_date'><span class='{StatClass}'><span class='blind'>"+nLang.l.receipt_date+" </span>{ReceivedDate}</span></span></li>",f={
NOT_READ:["statNo",nLang.l.unread_2],READ:["date"],SEND_FAIL:["statX",nLang.l.send_fail],CANCEL_SEND:["statCancel",nLang.l.cancelled_sending],
CANCEL_SEND_FAIL:["date","<a href='#' class='cancel_fail' onclick='mlReceipt.toggleCancelFailLayer(this);'>"+nLang.l.cancel_fail+"</a>"],
TEXT:["statTxt",nLang.l.unable_to_check],RECEIVE_BLOCKED:["statReject",nLang.l.block_receive],SENDING:["statGo",nLang.l.sending],
BEFORE_SEND:["statReserve",nLang.l.before_send],CANCEL_RESERVATION:["statReserveCancel",nLang.l.cancelled_reservation],
CANCEL_DELAY:["statCancel",nLang.l.cancelled_sending],EXCEED_QUOTA:["statOver",nLang.l.exceed_quota],
NOT_AVAILABLE:["statUnconfirm",nLang.l.unable_to_check],SEND_SUCCESS:["",nLang.l.send_success]},g=function(a){
b=a.language,c=a.useReadReceipt;for(var d=$.parseJSON(a.recipientList).recipientList,g=[],h="en_US"===b?"MMM D, YYYY HH:mm":"YY-MM-DD HH:mm",j=0,k=d.length;k>j;j++){
var l=d[j],m=l.readStatus||l.status;if("false"==c)for(var n=["NOT_READ","READ","TEXT"],o=0;o<n.length;o++)n[o]==m&&(m="SEND_SUCCESS");
var p;p=f[m][1]?f[m][1]:"<span class='read_mark'>✓</span>"+moment(l.readTimeString,"YY-MM-DD HH:mm").format(h),
g[j]=e.replace(/{ReceiverName}/,l.rcptName||l.rcptAddress).replace(/{ReceivedDate}/,p).replace(/{StatClass}/,f[m][0]).replace(/{ReceiverAddress}/,l.rcptAddress);
}$("#dl_receipt_list").html(g.join("")),i()},h=function(b,c){if(a!=b&&d.is(":visible")&&"close"!=c)return void(a=b);
if(d.toggle(),a=b,d.is(":visible")){var e=$("body"),f=(e.height()-d.height())/2,g=(e.width()-d.width())/2;
d.offset({top:f,left:g}),d.find("button").focus()}},i=function(){$("body").click(function(a){!$(a.target).is("a.cancel_fail")&&0==$(a.target).parents("#ly_fail_cancel_send").length&&d.is(":visible")&&d.hide();
})};return{init:g,toggleCancelFailLayer:h}}(),mlRemind=function(){return makeRequestObject=function(a,b,c){
if(b=Number(b),-1!=b&&mCom.remindRequestInfo&&mCom.remindRequestInfo[b])var d=mCom.remindRequestInfo[b].mailSN,e=mCom.remindRequestInfo[b].remindTime,f=mCom.remindRequestInfo[b].firstLocatedTime;else var d=0,e=0,f=0;
var g={page:b,pageSize:100,previewMode:"2",sortField:c,folderSN:a,mailSN:d,remindTime:e,firstLocatedTime:f,
type:"remind"};return g},arrangeRemindBtn=function(a){var b=mCom.elShowRemindBtn;2!=Number(a)&&3!=Number(a)&&5!=Number(a)&&4!=Number(a)&&mcCore.envUseRemind()?$Element(b)&&$Element(b).show():$Element(b)&&$Element(b).hide();
},makePagesForRemind=function(a,b){var c='<div class="list_autoload"><p class="al_msg">',d=!1;a>=0&&(c+='<button class="_ccr(als.prev) _c1(mlCore|movePage|remind|'+(a+1)+'|prev)"><span class="bu_prev"></span>'+nLang.l.prev_list+"</button>",
d=!0),b&&(c+='<button class="_ccr(als.next) _c1(mlCore|movePage|remind|'+(a+1)+'|next)">'+nLang.l.next_list+'<span class="bu_next"></span></button>',
d=!0),c+="</p></div>",d&&!$$.getSingle(".list_autoload",mCom.elList)&&$Element(mCom.elList).append(c);
},listCallback=function(a,b,c){(!mCom.remindRequestInfo||mCom.remindRequestInfo.length<=0)&&(mCom.remindRequestInfo=[]),
mCom.remindRequestInfo[c+1]={},mCom.remindRequestInfo[c+1].mailSN=b.lastMailSN,mCom.remindRequestInfo[c+1].remindTime=b.lastRemindTime,
mCom.remindRequestInfo[c+1].firstLocatedTime=b.lastFirstLocatedTime,$Element("cont_flex_area").addClass("nav_endless"),
$Element("cont_flex_area").addClass("list_remind"),$$.getSingle("#headUnreadNum").innerHTML="",$Element($$.getSingle("#titleSplitBar")).css("display","none"),
$$.getSingle("#headTotalNum").innerHTML=""},isRemindMail=function(a){var b=_getRemindFlag(a);return mcCore.isCorrespondFlag(b,"0x40000000000")||mcCore.isCorrespondFlag(b,"0x20000000000")?!0:!1;
},_getRemindFlag=function(a){var b=parseInt(a.status,10);return a.threadRemindFlag&&(b=parseInt(a.threadRemindFlag,10)),
b},makeRemindTimeForList=function(a,b){var c,d,e,f=_getRemindFlag(a),g=_getRemindTime(a,b),h='<span class="{{Class}}" title="{{DateTitle}}"><span class="blind">{{DateSpan}}</span></span>';
return mcCore.isCorrespondFlag(f,"0x40000000000")?(c=nLang.l.remind_complete,d="ico_remind_complete"):(c=nLang.l.remind_scheduled,
d="ico_remind"),e=g+" "+c,h.replace("{{Class}}",d).replace("{{DateTitle}}",e).replace("{{DateSpan}}",c);
},_getRemindTime=function(a,b){var c=a.remindAt;return a.threadRemindAt&&(c=a.threadRemindAt),mcCore.getHumanTime(c,b);
},makeReimindTimeForRemindBox=function(a,b){var c='<li class="remind_date {RemindComplete}"><span class="{RemindIco}" title="{RemindTitle}"></span><span class="blind">{RemindDesc}</span>{RemindDate}</li>',d=mcCore.getHumanTime(a.remindAt,b),e=parseInt(a.status,10);
return mcCore.isCorrespondFlag(e,"0x40000000000")?(c=c.replace("{RemindIco}","ico_remind_complete"),
c=c.replace("{RemindDesc}",nLang.l.remind_complete),c=c.replace("{RemindTitle}",d+" "+nLang.l.remind_complete),
c=c.replace("{RemindComplete}","complete")):(c=c.replace("{RemindIco}","ico_remind"),c=c.replace("{RemindDesc}",nLang.l.remind_scheduled),
c=c.replace("{RemindTitle}",d+" "+nLang.l.remind_scheduled),c=c.replace("{RemindComplete}","")),c=c.replace("{RemindDate}",d);
},movePage=function(a,b){"prev"==b&&(a-=2),mlCore.updateList(null,"remind",null,a,mCom.nCurSortField,mCom.nCurSortType,mCom.bIsUnread,void 0,mCom.sCurFilterType);
},{makeRequestObject:makeRequestObject,arrangeRemindBtn:arrangeRemindBtn,makePagesForRemind:makePagesForRemind,
listCallback:listCallback,isRemindMail:isRemindMail,makeRemindTimeForList:makeRemindTimeForList,makeReimindTimeForRemindBox:makeReimindTimeForRemindBox,
movePage:movePage}}(),mlTemplate=function(){return oListTemplate={head:"<ol class='mailList {OmitSubject} {PreviewNone} {ShowSenderContext} {Approve}' style='min-width:600px'>",
body:"<li class='{MailSN}_li {PaddingRight} {bIsRead} {isMarked} {IsImportantSender} _c1(mrCore|clickTitle|{MailSN}{isConversationList}) {DragFunction}' foldersn='{FolderSN}' mailsn='{MailSN}' draggable='{UseDraggable}' data-category='{Category}' {BackgroundColor} style='{Style}'><span class='ico_current_flag'><i class='blind'>마지막에 읽은 메일</i></span><ul class='mInfo'><li class='_m1(mlCore|toggleCheckMail|{MailSN}|down) _c1(mlCore|toggleCheckMail|{MailSN}|click) _stopDefault'><input id='mailCheck_{MailSN}' securitylevelType='{SecurityLevelType}' resend='{Resend}' type='checkbox' name='' value='' class='mCheck _checkList _m3(mlCore|toggleCheckMail|{MailSN}|over) _m1(mlCore|toggleCheckMail|{MailSN}|down) _k1(mlCore|toggleCheckMail|{MailSN}|keydown) _stopDefault' onclick='ccr(this, \"{CheckCcr}\", event)'><label for='mailCheck_{MailSN}' class='blind'>\"{SubjectString}\" "+nLang.l.select_mail+"</label></li><li class=\"important _m1(mlCore|doStop) _c1(mlCore|markMailSelf|{MailSN}|{Mark}) _ccr(lst.mark) _stopDefault\"><a href='#' onfocus=\"$Element(this).addClass('_starFocus')\" onblur=\"$Element(this).removeClass('_starFocus')\"><span mailsn='{MailSN}' class=\"spr icoImportant {IsImportant}\"><span class='blind'>{ImportantMsg}</span></span></a></li><li class='read'><a href='#' {readIcoDisplay} class='spr icoRead {IsRead}{externIcon} _c1(mlCore|readMail|{readStatus}_conversation|{MailSN}) _stopDefault' title='{ReadMsg}'><span class='blind'>{readStatusText}</span></a><span {threadIcoDisplay} class='btn_cover _m1(mlCore|doStop) _c1(mlCore|toggleConversationList) _stopDefault'><button class='btn_view_slave'>"+nLang.l.number_of_relative_mail+"</button></span></li><li class='file'><span class='spr {hasFile}' style='cursor:default;' title='{FileMsg}'><span class='blind'>{FileBlindMsg}</span></span></li>{ApproveStat}</ul><div class='mTitle' {BackgroundColor}><div class='name _ccr(lst.from) {SenderClass}'><span class='blind'>"+nLang.c.sender_2+":</span>{FromName}</div><div class='subject {SubjectClass}'><a href='/read/popup/?nMailId={MailSN}' class='{DragFunction}' draggable='{UseDraggable}'><span class='text _ccr({titleClickTag}) _c1(mrCore|clickTitle|{MailSN}{isConversationList}) _m2(mrCore|middleClickTitle|{MailSN})' foldersn='{FolderSN}' mailsn='{MailSN}'>{PlusButton}{SecurityLevel}{sendMail}{ToMe}{SpamReason}<span class='folderName _ccr({titleClickTag}) _c1(mrCore|clickTitle|{MailSN}{isConversationList}) _m2(mrCore|middleClickTitle|{MailSN})' foldersn='{FolderSN}' mailsn='{MailSN}'>{FolderName}<span class='blind'>"+nLang.l.infolder+"</span></span>{iDomainEmail}<strong class='mail_title _ccr({titleClickTag}) _c1(mrCore|clickTitle|{MailSN}{isConversationList}) _m2(mrCore|middleClickTitle|{MailSN})' foldersn='{FolderSN}' mailsn='{MailSN}'>{IsEmergency}<span class='blind'>"+nLang.l.title+"</span>{SubjectString}</strong></span></a>{Reserve}<a href='#' class='icon_previewMail' title='"+nLang.l.preview_mail+"'>{Preview}<a href='#' class='newWindow _ccr(lst.newwindow) _c1(mrCore|popupRead|{MailSN}) _m1(mlCore|doStop) _stopDefault' title='"+nLang.l.view_popup+"'><span class='spr'><em class='blind'>"+nLang.l.view_popup+'</em></span></a></div></div><ul class="mInfo split_cell"><li class="iDate"><span class="blind">'+nLang.r.send_date+":</span>{ReceivedDate}</li>{SizeInfo}</ul></li>",
tail:"</ol>"},oListForSenderViewTemplate={body:"<ul class='infor_sender fold {UnreadClass} _ccr(lst.senderfold) _c1(mlCore|toggleSubListForSenderView|{Email}) _stopDefault' data-address='{Email}'><li class='chk'></li><li class='sender'><em class='ic_fold'>"+nLang.c.unfold+"</em><span class='blind'>"+nLang.c.sender+"</span><a href='#' class='_c1(myContextMenu|showSenderContextLayer|senderView) _stopDefault'>{Name}</a></li><li class='count'><strong><span class='blind'>"+nLang.o.view_unread_mail+"</span><a href='#' class='_ccr(lst.senderunreadmail) _c1(mlCore|showDetailListForSenderView|{Email}|unread) _stopDefault' data-unreadcount>{UnreadCount}</a></strong>/<span class='blind'>"+nLang.o.view_whole_mail+"</span><a href='#' class='_ccr(lst.senderallmail) _c1(mlCore|showDetailListForSenderView|{Email}|all) _stopDefault' data-totalcount>{TotalCount}</a></li><li class='date'>{ReceivedTime}</li></ul><div class='listWrap fold' data-address='{Email}'></div>"
},oAttachListTemplate={head:'<div class="listWrap_attach"><ol class="list_by_attachfile">',body:'<li class="{MailSN}_li {PaddingRight} {bIsRead} {isMarked} {IsImportantSender} {DragFunction}" foldersn="{FolderSN}" mailsn="{MailSN}" draggable="{UseDraggable}" {BackgroundColor} style="{AttachStyle}" ><div class="attach_card_head _c1(mrCore|clickTitle|{MailSN}{isConversationList})"><span class="check _m1(mlCore|toggleCheckMail|2791|down) _c1(mlCore|toggleCheckMail|2791|click) _stopDefault"><input id="mailCheck_{MailSN}" type="checkbox" class="mCheck _checkList _m3(mlCore|toggleCheckMail|{MailSN}|over) _m1(mlCore|toggleCheckMail|{MailSN}|down) _k1(mlCore|toggleCheckMail|{MailSN}|keydown) _stopDefault" onclick="ccr(this, \'{CheckCcr}\', event)"><label for="mailCheck_{MailSN}" class="blind">&quot;{SubjectString}&quot;'+nLang.l.select_mail+'</label></span><span class="important _m1(mlCore|doStop) _c1(mlCore|markMailSelf|{MailSN}|{Mark}) _ccr(lst.mark) _stopDefault"><a href="#" onfocus="$Element(this).addClass(\'_starFocus\')" onblur="$Element(this).removeClass(\'_starFocus\')"><span mailsn="{MailSN}" class="spr icoImportant {IsImportant}"><span class="blind">{ImportantMsg}</span></span></a></span><span class="read"><a href="#" {readIcoDisplay} class="spr icoRead {IsRead} {externIcon} _c1(mlCore|readMail|{readStatus}_conversation|{MailSN}) _stopDefault" title="{ReadMsg}"><span  class="blind">{ReadMsg}</a></span></span><span class="date"><span class="blind">'+nLang.l.receipt_date+'</span>{ReceivedDate}</span><span class="name _ccr(lst.from) {SenderClass}"><span class="blind">'+nLang.c.sender_2+'</span>{FromName}</span><div class="mTitle" {BackgroundColor}><div class="subject {SubjectClass}"><a href="/read/popup/?nMailId={MailSN}" class="{DragFunction}" draggable="{UseDraggable}" title="{SubjectString}" ><span class="text _ccr({titleClickTag}) _c1(mrCore|clickTitle|{MailSN}{isConversationList}) _m2(mrCore|middleClickTitle|{MailSN})" foldersn="{FolderSN}" mailsn="{MailSN}">{PlusButton}{SecurityLevel}{sendMail}{ToMe}{SpamReason}<span class="folderName _ccr({titleClickTag}) _c1(mrCore|clickTitle|{MailSN}{isConversationList}) _m2(mrCore|middleClickTitle|{MailSN})" foldersn="{FolderSN}" mailsn="{MailSN}">{FolderName}<span class="blind">'+nLang.l.infolder+'</span></span>{iDomainEmail}<strong class="mail_title _ccr({titleClickTag}) _c1(mrCore|clickTitle|{MailSN}{isConversationList}) _m2(mrCore|middleClickTitle|{MailSN})" foldersn="{FolderSN}" mailsn="{MailSN}">{IsEmergency}<span class="blind">'+nLang.l.title+'</span>{SubjectString}</strong></span></a>{Reserve}<a href="#" class="newWindow _ccr(lst.newwindow) _c1(mrCore|popupRead|{MailSN}) _m1(mlCore|doStop) _stopDefault" title="'+nLang.l.view_popup+'"><span class="spr"><em class="blind">'+nLang.l.view_popup+'</em></span></a></div></div>	</div><div class="attach_card_body">{AttachBody}</div>{AttachNav}</li>',
tail:"</ol></div>"},oDraftAttachListTemplate={head:'<div class="listWrap_attach"><ol class="list_by_attachfile">',
body:'<li class="{MailSN}_li {PaddingRight} {bIsRead} {isMarked} {IsImportantSender} {DragFunction}" foldersn="{FolderSN}" mailsn="{MailSN}" draggable="{UseDraggable}" {BackgroundColor} style="{AttachStyle}" ><div class="attach_card_head _c1(mfCore|popupWrite|draft|{MailSN}||{DraftMemo})"><span class="check _m1(mlCore|toggleCheckMail|2791|down) _c1(mlCore|toggleCheckMail|2791|click) _stopDefault"><input id="mailCheck_{MailSN}" type="checkbox" class="mCheck _checkList _m3(mlCore|toggleCheckMail|{MailSN}|over) _m1(mlCore|toggleCheckMail|{MailSN}|down) _k1(mlCore|toggleCheckMail|{MailSN}|keydown) _stopDefault" onclick="ccr(this, \'{CheckCcr}\', event)"><label for="mailCheck_{MailSN}" class="blind">&quot;{SubjectString}&quot;'+nLang.l.select_mail+'</label></span><span class="important _m1(mlCore|doStop) _c1(mlCore|markMailSelf|{MailSN}|{Mark}) _ccr(lst.mark) _stopDefault"><a href="#" onfocus="$Element(this).addClass(\'_starFocus\')" onblur="$Element(this).removeClass(\'_starFocus\')"><span mailsn="{MailSN}" class="spr icoImportant {IsImportant}"><span class="blind">{ImportantMsg}</span></span></a></span><span class="read"><a href="#" {readIcoDisplay} class="spr icoRead {IsRead} {externIcon} _c1(mlCore|readMail|{readStatus}_conversation|{MailSN}) _stopDefault" title="{ReadMsg}"><span  class="blind">{ReadMsg}</a></span></span><span class="date"><span class="blind">'+nLang.l.receipt_date+'</span>{ReceivedDate}</span><span class="name _ccr(lst.from) {SenderClass}"><span class="blind">'+nLang.c.sender_2+'</span>{FromName}</span><div class="mTitle" {BackgroundColor}><div class="subject {SubjectClass}"><a href="/read/popup/?nMailId={MailSN}" class="{DragFunction}" draggable="{UseDraggable}" title="{SubjectString}" ><span class="text _ccr({titleClickTag}) _c1(mfCore|popupWrite|draft|{MailSN}||{DraftMemo})" foldersn="{FolderSN}" mailsn="{MailSN}">{PlusButton}{SecurityLevel}{sendMail}{ToMe}{SpamReason}<span class="folderName _ccr({titleClickTag}) _c1(mfCore|popupWrite|draft|{MailSN}||{DraftMemo})" foldersn="{FolderSN}" mailsn="{MailSN}">{FolderName}<span class="blind">'+nLang.l.infolder+'</span></span>{iDomainEmail}<strong class="mail_title _ccr({titleClickTag}) _c1(mfCore|popupWrite|draft|{MailSN}||{DraftMemo})" foldersn="{FolderSN}" mailsn="{MailSN}">{IsEmergency}<span class="blind">'+nLang.l.title+'</span>{SubjectString}</strong></span></a>{Reserve}</div></div>	</div><div class="attach_card_body">{AttachBody}</div>{AttachNav}</li>',
tail:"</ol></div>"},oAttachThumnailTemplate={body:'<div class="thumbnail {IsBlocked}" {AttachBodyStyle}><a href="javascript:;"  class="thumb_img _ccr(mrd_att.thumbnail) {AttachThumbClass} _stopDefault" title="{AttachFileName}" data-url="{DirectDownUrl}">{AttachImage}<span class="deco_over"><i class="ico"></i><span class="bg"></span></span></a><div class="attach_task">{AttachTaskMenu}</div><div class="file_info"><a class="file_name f_name _ccr(mrd_att.subject) {AttachPCDownClass} _stopDefault" href="javascript:;" title="{AttachFileName}" data-url="{DirectDownUrl}">{AttachFileName}</a><span class="file_size">{AttachFileSize}</span></div></div>'
},oAttachBigFileThumnailTemplate={body:'<div class="thumbnail" style="{AttachBigVisible}"><a href="javascript:;"  class="thumb_img _ccr(mrd_att.thumbnail) {AttachReadClass} _stopDefault" title="{AttachTooltipDesc}">{AttachImage}<span class="deco_over"><i class="ico"></i><span class="bg"></span></span></a><div class="attach_task"></div><div class="file_info"><a class="file_name f_name {AttachReadClass} _stopDefault" href="javascript:;" title="{AttachTooltipDesc}">{AttachFileName}</a><span class="file_size"></span></div></div>'
},oAttachDeletedFileThumnailTemplate={body:'<div class="thumbnail" ><a href="javascript:;"  class="thumb_img   _stopDefault" title="{AttachTooltipDesc}">{AttachImage}<span class="deco_over"><i class="ico"></i><span class="bg"></span></span></a><div class="attach_task"></div><div class="file_info"><span class="file_name  _stopDefault" href="javascript:;" title="{AttachTooltipDesc}">{AttachFileName}</span><span class="file_size"></span></div></div>'
},oSenderListTemplate={head:"<ol class='mailList {OmitSubject} {PreviewNone} {ShowSenderContext}'  style='min-width:600px'>",
body:"<li class='{MailSN}_li {PaddingRight} {bIsRead} {isMarked} _c1(mrCore|clickTitle|{MailSN}) {DragFunction}' foldersn='{FolderSN}' mailsn='{MailSN}' draggable='{UseDraggable}' isRead='{bIsRead}' isMarked='{bIsImportant}' {BackgroundColor}><span class='ico_current_flag'><i class='blind'>마지막에 읽은 메일</i></span><ul class='mInfo'><li class='_m1(mlCore|toggleCheckMail|{MailSN}|down) _c1(mlCore|toggleCheckMail|{MailSN}|click) _stopDefault'><input id='mailCheck_{MailSN}' securitylevelType='{SecurityLevelType}' resend='{Resend}' type='checkbox' name='' value='' class='mCheck _checkList _m3(mlCore|toggleCheckMail|{MailSN}|over) _m1(mlCore|toggleCheckMail|{MailSN}|down) _k1(mlCore|toggleCheckMail|{MailSN}|keydown) _stopDefault' onclick='ccr(this, \"{CheckCcr}\", event)'><label for='mailCheck_{MailSN}' class='blind'>\"{SubjectString}\" "+nLang.l.select_mail+"</label></li><li class=\"important _m1(mlCore|doStop) _c1(mlCore|markMailSelf|{MailSN}|{Mark}) _ccr(lst.mark) _stopDefault\"><a href='#' onfocus=\"$Element(this).addClass('_starFocus')\" onblur=\"$Element(this).removeClass('_starFocus')\"><span mailsn='{MailSN}' class=\"spr icoImportant {IsImportant}\"><span class='blind'>{ImportantMsg}</span></span></a></li><li class='read'><a href='#' class='spr icoRead {IsRead}{externIcon} _c1(mlCore|readMail|{readStatus}_conversation|{MailSN}) _stopDefault' title='{ReadMsg}'><span class='blind'>{readStatusText}</span></a></li><li class='file'><span class='spr {hasFile}' style='cursor:default;' title='{FileMsg}'><span class='blind'>"+nLang.l.have_attach_mail+"</span></span></li></ul><div class='mTitle' {BackgroundColor}><div class='name _ccr(lst.from) {SenderClass}'><span class='blind'>"+nLang.c.sender_2+"</span>{FromName}</div><div class='subject {SubjectClass}'><a href='/read/popup/?nMailId={MailSN}' class='{DragFunction}' draggable='{UseDraggable}'><span class='text _ccr(lst.title) _c1(mrCore|clickTitle|{MailSN}) _m2(mrCore|middleClickTitle|{MailSN})' foldersn='{FolderSN}' mailsn='{MailSN}'>{PlusButton}{SecurityLevel}{sendMail}{ToMe}<span class='folderName _ccr(lst.title) _c1(mrCore|clickTitle|{MailSN}) _m2(mrCore|middleClickTitle|{MailSN}) {DragFunction}' foldersn='{FolderSN}' mailsn='{MailSN}' draggable='{UseDraggable}'>{FolderName}<span class='blind'>"+nLang.l.infolder+"</span></span>{iDomainEmail}<strong class='mail_title _ccr(lst.title) _c1(mrCore|clickTitle|{MailSN}) _m2(mrCore|middleClickTitle|{MailSN})' foldersn='{FolderSN}' mailsn='{MailSN}'>{IsEmergency}<span class='blind'>"+nLang.l.title+"</span>{SubjectString}</strong></span></a><a href='#' class='icon_previewMail' title='"+nLang.l.preview_mail+"'>{Preview}<a href='#' class='newWindow _ccr(lst.newwindow) _c1(mrCore|popupRead|{MailSN}) _m1(mlCore|doStop) _stopDefault' title='"+nLang.l.view_popup+"'><span class='spr'><em class='blind'>"+nLang.l.view_popup+'</em></span></a></div></div><ul class="mInfo split_cell"><li class="iDate"><span class="blind">'+nLang.r.send_date+':</span>{ReceivedDate}</li><li class="iSize"><span class="blind">'+nLang.c.size_2+":</span>{MailSize}</li></ul></li>",
tail:"</ol>"},oReadReceiptListTemplate={head:"<ol class='mailList single' style='min-width:600px'>",
body:"<li class='rcpt_line {MailSN}_li _c1(mrCore|clickTitle|{MailSN}) _stopDefault' email='{Email}' mailsn='{MailSN}' {BackgroundColor}><div class='mTitle' {BackgroundColor}><div class='name'><{ReceiverTag} {ReceiverAttr} data-name='{FromName}'><span class='blind'>"+nLang.c.receiver+"</span>{FromName}</{ReceiverTag}></div><div class='subject _stopDefault'><a href='/read/popup/?nMailId={MailSN}' class='_c1(mrCore|clickTitle|{MailSN}) _m2(mrCore|middleClickTitle|{MailSN}) _ccr(lst.title)' foldersn='{FolderSN}' mailsn='{MailSN}'><strong class='text mail_title' mailsn='{MailSN}' data-subject='{SubjectString}'>{IsEmergency}<span class='blind'>"+nLang.l.title+"</span>{SubjectString}</strong></a><a href='#' class='icon_previewMail' title='"+nLang.l.preview_mail+"'><span class='spr _c1(mlCore|previewMail|{MailSN}|2) _stopDefault'><em class='blind'>"+nLang.l.open_preview_mail_layer+"</em></span></a><a href='#' class='newWindow _ccr(lst.newwindow) _c1(mrCore|popupRead|{MailSN}) _stopDefault' title='"+nLang.l.view_popup+"'><span class='spr'><em class='blind'>"+nLang.l.view_popup+"</em></span></a></div></div><span class='ico_current_flag'><i class='blind'>마지막에 읽은 메일</i></span><ul class='mInfo'><li class='_m1(mlCore|toggleCheckMailRcpt|{MailSN}|down) _c1(mlCore|toggleCheckMailRcpt|{MailSN}|click) _stopDefault'><input type='checkbox' id='mailCheck_{MailSN}' name='' value='' class='mCheck _checkList _m3(mlCore|toggleCheckMailRcpt|{MailSN}|over) _m1(mlCore|toggleCheckMailRcpt|{MailSN}|down) _c1(mlCore|toggleCheckMailRcpt|{MailSN}|click) _k1(mlCore|toggleCheckMail|{MailSN}|keydown) _stopDefault' onclick='ccr(this, \"{CheckCcr}\", event)'><label for='mailCheck_{MailSN}' class='blind'>{SubjectString}</label></li>{TogglePlus}<li class='receipt_date'>{ReceiptStatus}</li><li class='action'>{CancelPost}</li></ul><ul class=\"mInfo split_cell\"><li class=\"send_date\"><span class=\"blind\">"+nLang.r.send_date+":</span>{SentDate}{reserve}</li></ul></li>",
sub:"<li class='rcpt_line {MailSN}_sub sub _c1(mrCore|clickTitle|{MailSN})' email='{Email}' style='display:none;' ><div class='mTitle'><div class='name'><{ReceiverTag} {ReceiverAttr} data-name='{FromName}'><span class='blind'>"+nLang.c.receiver+"</span>{FromName}</a></div><div class='subject  _stopDefault'><a href='/read/MailSN' class='_c1(mrCore|clickTitle|{MailSN}) _m2(mrCore|middleClickTitle|{MailSN}) _ccr(lst.title)' foldersn='{FolderSN}' mailsn='{MailSN}'><strong class='text mail_title' mailsn='{MailSN}' data-subject='{SubjectString}'>{IsEmergency}<span class='blind'>"+nLang.l.title+"</span>{SubjectString}</strong></a><a href='#' class='icon_previewMail' title='"+nLang.l.preview_mail+"'><span class='spr _ccr(lst.preview) _c1(mlCore|previewMail|{MailSN}|2) _stopDefault'></span></a><a herf='#' class='newWindow' title='"+nLang.l.view_popup+"'><span class='spr _ccr(lst.newwindow) _c1(mrCore|popupRead|{MailSN}) _stopDefault'><em class='blind'>"+nLang.l.view_popup+"</em></span></a></div></div><ul class='mInfo'><li class='receipt_date'>{ReceiptStatus}</li><li class='action'>{CancelPost}</li></ul><ul class=\"mInfo split_cell\"><li class=\"send_date\"><span class=\"blind\">"+nLang.r.send_date+":</span>{SentDate}{reserve}</li></ul></li>",
tail:"</ol>"},oDraftListTemplate={head:"<ol class='mailList {OmitSubject} {PreviewNone}' style='min-width:600px'>",
body:"<li class='{MailSN}_li {bIsRead} {isMarked} _c1(mfCore|popupWrite|draft|{MailSN}||{DraftMemo}) {DragFunction}' mailsn='{MailSN}' draggable='{UseDraggable}' {BackgroundColor}><div class='mTitle' {BackgroundColor}><div class='name _ccr(lst.from)'><span class='blind'>"+nLang.c.receiver+"</span>{FromName}</div><div class='subject'><a href='#' class='{DragFunction}' draggable='{UseDraggable}'><span class='text _ccr(lst.title)_c1(mfCore|popupWrite|draft|{MailSN}||{DraftMemo}) _stopDefault'><span class='folderName _ccr(lst.title)'>{FolderName}</span><strong class='mail_title'><span class='blind'>"+nLang.l.title+"</span>{SubjectString}</strong></span></a><a href='#' class='icon_previewMail' title='"+nLang.l.preview_mail+"'>{Preview}</a></div></div><span class='ico_current_flag'><i class='blind'>마지막에 읽은 메일</i></span><ul class='mInfo'><li class='_m1(mlCore|toggleCheckMail|{MailSN}|down) _c1(mlCore|toggleCheckMail|{MailSN}|click) _stopDefault'><input id='mailCheck_{MailSN}' type='checkbox' name='' value='' class='mCheck _checkList _m3(mlCore|toggleCheckMail|{MailSN}|over) _m1(mlCore|toggleCheckMail|{MailSN}|down) _k1(mlCore|toggleCheckMail|{MailSN}|keydown) _stopDefault' onclick='ccr(this, \"{CheckCcr}\", event)'><label for='{MailSN}' class='blind'>\"{SubjectString}\" "+nLang.l.select_mail+"</label></li><li class=\"important _m1(mlCore|doStop) _c1(mlCore|markMailSelf|{MailSN}|{Mark}) _ccr(lst.mark) _stopDefault\"><a href='#' onfocus=\"$Element(this).addClass('_starFocus')\" onblur=\"$Element(this).removeClass('_starFocus')\"><span mailsn='{MailSN}' class=\"spr icoImportant {IsImportant}\"><span class='blind'>{ImportantMsg}</span></span></a></li><li class='read'><a href='#' class='spr icoRead {IsRead} _c1(mlCore|readMail|{readStatus}_conversation|{MailSN}) _stopDefault' title='{ReadMsg}'><span class='blind'>{readStatusText}</span></a></li><li class='file'><span class='spr {hasFile}' style='cursor:default;' title='{FileMsg}'><span class='blind'>"+nLang.l.have_attach_mail+'</span></span></li></ul><ul class="mInfo split_cell"><li class="iDate"><span class="blind">'+nLang.l.save_date+':</span>{ReceivedDate}</li><li class="iSize"><span class="blind">'+nLang.c.size_2+":</span>{MailSize}</li></ul></li>",
tail:"</ol>"},oSearchListTemplate={head:"<ol class='mailList {OmitSubject} {PreviewNone} {ShowSenderContext}' style='min-width:600px'>",
body:"<li class='{MailSN}_li {hasPreview} {PaddingRight} {bIsRead} {isMarked} {IsImportantSender} _c1(mrCore|clickTitle|{MailSN}) {DragFunction}' foldersn='{FolderSN}' mailsn='{MailSN}' draggable='{UseDraggable}' {BackgroundColor} style='{Style}' data-category='{Category}'><span class='ico_current_flag'><i class='blind'>마지막에 읽은 메일</i></span><ul class='mInfo'><li class='_m1(mlCore|toggleCheckMail|{MailSN}|down) _c1(mlCore|toggleCheckMail|{MailSN}|click) _stopDefault'><input id='mailCheck_{MailSN}' securitylevelType='{SecurityLevelType}' resend='{Resend}' type='checkbox' name='' value='' class='mCheck _checkList _m3(mlCore|toggleCheckMail|{MailSN}|over) _m1(mlCore|toggleCheckMail|{MailSN}|down) _k1(mlCore|toggleCheckMail|{MailSN}|keydown) _stopDefault' onclick='ccr(this, \"{CheckCcr}\", event)'><label for='{MailSN}' class='blind'>\"{SubjectString}\" "+nLang.l.select_mail+"</label></li><li class=\"important _m1(mlCore|doStop) _c1(mlCore|markMailSelf|{MailSN}|{Mark}) _ccr(lst.mark) _stopDefault\"><a href='#' onfocus=\"$Element(this).addClass('_starFocus')\" onblur=\"$Element(this).removeClass('_starFocus')\"><span mailsn='{MailSN}' class=\"spr icoImportant {IsImportant}\"><span class='blind'>{ImportantMsg}</span></span></a></li><li class='read'><a href='#' class='spr icoRead {IsRead}{externIcon} _c1(mlCore|readMail|{readStatus}_conversation|{MailSN}) _stopDefault' title='{ReadMsg}'><span class='blind'>{readStatusText}</span></a></li><li class='file'><span class='spr {hasFile}' style='cursor:default;' title='{FileMsg}'><span class='blind'>"+nLang.l.have_attach_mail+"</span></span></li></ul><div class='mTitle' {BackgroundColor}><div class='name _ccr(lst.from) {SenderClass}'><span class='blind'>"+nLang.c.sender_2+"</span>{FromName}</div><div class='subject {SubjectClass}'><a href='/read/popup/?nMailId={MailSN}' class='{DragFunction}' draggable='{UseDraggable}'><span class='text _ccr(lst.title) _c1(mrCore|clickTitle|{MailSN}) _m2(mrCore|middleClickTitle|{MailSN})' foldersn='{FolderSN}' mailsn='{MailSN}'>{SecurityLevel}{sendMail}{ToMe}<span class='folderName _ccr(lst.title) _c1(mrCore|clickTitle|{MailSN}) _m2(mrCore|middleClickTitle|{MailSN})' foldersn='{FolderSN}' mailsn='{MailSN}'>{FolderName}</span>{iDomainEmail}<strong class='mail_title _ccr(lst.title) _c1(mrCore|clickTitle|{MailSN})' foldersn='{FolderSN}' mailsn='{MailSN}'>{IsEmergency}<span class='blind'>"+nLang.l.title+"</span>{SubjectString}</strong></span></a><a href='#' class='icon_previewMail' title='"+nLang.l.preview_mail+"'>{Preview}<a href='#' class='newWindow _ccr(lst.newwindow) _c1(mrCore|popupRead|{MailSN}) _m1(mlCore|doStop) _stopDefault' title='"+nLang.l.view_popup+"'><span class='spr'><em class='blind'>"+nLang.l.view_popup+'</em></span></a></div>{PlusButton}</div><ul class="mInfo split_cell"><li class="iDate"><span class="blind">'+nLang.l.receipt_date+':</span>{ReceivedDate}</li><li class="iSize"><span class="blind">'+nLang.c.size_2+":</span>{MailSize}</li></ul></li>",
tail:"</ol>"},sPlusButton=["<li class='expand'><button type='button' class='open _c1(mlCore|toggleRcptExpand|{MailSN}) _stopDefault'><span class='blind'>",nLang.l.toggle_receiver_view,"</span></button></li>"].join(""),
sPlusButtonForSearch=[" <span class='expand'>","<button class='{viewMore} _c1(mlCore|toggleSearchExpand|{MailSN}) _stopDefault' type='button'><span class='blind'>",nLang.l.toggle_receiver_view,"</span></button>","</span>"].join(""),
emptyReadArea=["<div class='subMsg2'><strong>",nLang.l.refer_mail_option,"</strong>","<ul>","<li>",nLang.l.refer_divide_mode,"<a class='_c1(mInit|showOptionLayerAtInit|view_option) _stopDefault' href='javascript:;'>",nLang.l.go_option,"</a>","</li>","<li>",nLang.l.refer_mail_action,"<a class='_c1(mInit|showOptionLayerAtInit|read_option) _stopDefault' href='javascript:;'>",nLang.l.go_option,"</a>","</li></ul></div></div>"].join(""),
pageSelector=["<span class='pageSelector' id='pageSelect' lastpage='{LastPage}'>","<label class='blind' for='pageSelect'>"+nLang.l.move_page_list+"</label>","<label class='blind' for='select_page_num'>"+nLang.l.move_page_num+"</label>","<input type='text' onblur='mlCore.blurSelectPage();' onfocus='mlCore.focusSelectPage();' id='select_page_num' value='{CurPage}'>","<span class='blind'>"+nLang.l.totalPage+"</span>/ {LastPage}</span>"].join(""),
sReceiptRow="<li><span class='recipt_name'><span class='blind'>"+nLang.c.sender+" : </span>{SenderName}</span><span class='recipt_date'><span class='date'><span class='blind'>"+nLang.c.receipt_date+" </span>{ReceivedDate}</span></span></li>",
{oListTemplate:oListTemplate,oListForSenderViewTemplate:oListForSenderViewTemplate,oSenderListTemplate:oSenderListTemplate,
oReadReceiptListTemplate:oReadReceiptListTemplate,oDraftListTemplate:oDraftListTemplate,oSearchListTemplate:oSearchListTemplate,
sPlusButton:sPlusButton,sPlusButtonForSearch:sPlusButtonForSearch,emptyReadArea:emptyReadArea,pageSelector:pageSelector,
oAttachListTemplate:oAttachListTemplate,oDraftAttachListTemplate:oDraftAttachListTemplate,oAttachThumnailTemplate:oAttachThumnailTemplate,
oAttachBigFileThumnailTemplate:oAttachBigFileThumnailTemplate,oAttachDeletedFileThumnailTemplate:oAttachDeletedFileThumnailTemplate
}}(),mfCore=function(){folderNameLength=40,nMaxFolderCount=1e3,nCurFolderCount=null,bDragOver=null,nCreatedFolderSN=-1;
var a,b='<li class="drop_order_bottom memo _m2(mcDragndrop|handleDrop) _m3(mcDragndrop|handleDragEnter) _m4(mcDragndrop|handleDragLeave)" foldersn="0"></li>',c='<li class="drop_order_bottom mail _m2(mcDragndrop|handleDrop) _m3(mcDragndrop|handleDragEnter) _m4(mcDragndrop|handleDragLeave)" foldersn="0"></li>';
toggleMyMailSection=function(){var a,b=$Element("section_mymail"),c=$$.getSingle("#section_mymail  > .h_lft_menu .blind");
b.hasClass("foldup")?(b.removeClass("foldup"),a=!1,c.innerHTML=nLang.f.mybox_fold):(b.addClass("foldup"),
a=!0,c.innerHTML=nLang.f.mybox_unfold),mcCore.requestAjax({fCallback:$Fn(function(){}).bind(),oParameter:{
foldFolder:a},sUrl:"/json/option/useFoldFolder/"})},updateFolder=function(a,b){var c={};if(c.vipMailBox=!!mEnv.useVipMailBox,
"undefined"!=typeof mCom.nCurrentFolder&&mEnv.useVipMailBox&&$$.getSingle(".section_mymail.vip_mail")){
mcCore.requestAjax({fCallback:$Fn(d,this).bind(a,b),oParameter:c,sUrl:"/json/folder/list/"});var e=mCom.nCurrentFolder.toString().replace(/^vip\$/,""),f=null;
if(f=$$.getSingle(".section_mymail.vip_mail .list_menu li._folder[data-vipemail="+e+"]")){var g=$Element($$.getSingle(".list_menu .click"));
g&&g.removeClass("click"),$Element(f).addClass("click")}}else mcCore.requestAjax({fCallback:$Fn(d,this).bind(a,b),
oParameter:c,sUrl:"/json/folder/list/"});return!0};var d=function(a,b,c){fParseFolderBo(c,a),b&&b()};
setFolderLocation=function(a,b,c,d,e){var f=mcCore.findFolderName(c,!0),g=mcCore.findFolderName(c,!1),h=mcCore.findFolderName(d,!0);
if(4==Number(d))return void deleteFolder(a,c);if(Number(d)>100||0==Number(d)||6==Number(d)){var i=1,j=f.split("/").length,k=h.split("/").length;
if(0==Number(d)||6==Number(d))var l=g;else var l=h+"/"+g;for(var m=0;m<mCom.aFolderInfo.length;m++){
if(Number(d)!==Number(b.nParentFolderSN)&&mCom.aFolderInfo[m][1]==l)return void alert(mcCore.getMemoboxString("already_exist",c));
if(0==mCom.aFolderInfo[m][1].indexOf(f))for(var n=mCom.aFolderInfo[m][1].split("/"),o=0;o<n.length;o++)n[o]==g&&mCom.aFolderInfo[m][1].split("/").length-j+1>i&&(i=mCom.aFolderInfo[m][1].split("/").length-j+1);
}if(_fCheckTargetsParentBo(c,d))return void alert(mcCore.getMemoboxString("cannot_be_in_child_folder",d));
0==Number(d)?k=0:6==Number(d)?k=1:Number(d)>1e7&&k++;var p=k+i;if(p>5)return void alert(mcCore.getMemoboxString("depth_limit_5",c));
var q=_makeObjectForFolderLocation(c,d,e);mcCore.requestAjax({fCallback:$Fn(_moveFolderCallback,this).bind(),
oParameter:q,sUrl:"/json/folder/move/"})}},_makeObjectForFolderLocation=function(a,b,c){return 0==Number(b)&&(b=-1),
{folderSN:a,newParentFolderSN:b,precedingFolderSN:c}},moveFolder=function(a,b,c,d){var e=mcCore.findFolderName(c,!0),f=mcCore.findFolderName(c,!1),g=mcCore.findFolderName(d,!0);
if("4"==d)return void deleteFolder(a,c);if(Number(d)>100||"0"==d||"6"==d){var h=1,i=e.split("/").length,j=g.split("/").length;
if("0"==d||"6"==d)var k=f;else var k=g+"/"+f;for(var l=0;l<mCom.aFolderInfo.length;l++){if(mCom.aFolderInfo[l][1]==k)return void alert(mcCore.getMemoboxString("already_exist",c));
if(0==mCom.aFolderInfo[l][1].indexOf(e))for(var m=mCom.aFolderInfo[l][1].split("/"),n=0;n<m.length;n++)m[n]==f&&mCom.aFolderInfo[l][1].split("/").length-i+1>h&&(h=mCom.aFolderInfo[l][1].split("/").length-i+1);
}if(_findParentFolderSNBo(c)!=d){if(_fCheckTargetsParentBo(c,d))return void alert(mcCore.getMemoboxString("cannot_be_in_child_folder",d));
Number(c)>=1e7&&j++;var o=j+h;if(o>5)return void alert(mcCore.getMemoboxString("depth_limit_5",c));"0"!=d&&"6"!=d&&(f=g+"/"+f);
var p=_makeObjectForMoveFolder(c,f,d);mcCore.requestAjax({fCallback:$Fn(_moveFolderCallback,this).bind(),
oParameter:p,sUrl:"/json/folder/rename/"})}}},_moveFolderCallback=function(a){mCom.elOptionWrap.visible()?moCore.refreshOptionLayer(a):$Element("detail_search").visible()&&_makeFolderSelectBoxBo(a),
updateFolder()},setFolderOrder=function(a,b,c,d){if(0==d||Number(d)>100){var e=0==d?0:mcCore.getFolderOrder(d),f=mcCore.getFolderOrder(c);
e>f&&e--;var g={folderSN:c,folderOrder:e};mcCore.requestAjax({fCallback:$Fn(_setFolderOrderCallback,this).bind(),
oParameter:g,sUrl:"/json/folder/setOrder/"}),g=null}},_setFolderOrderCallback=function(a){mCom.elOptionWrap.visible()?moCore.refreshOptionLayer(a):$Element("detail_search").visible()&&_makeFolderSelectBoxBo(a),
updateFolder()},addFolder=function(a){if(nCurFolderCount>nMaxFolderCount)return void alert(nLang.f.count_limit_1000);
var a=a||$$.getSingle("#new_folder_name").value;if(a=a.replace(/(^\s*)|(\s*$)/g,""),""==a)return void alert(nLang.f.noname);
if(-1!=a.indexOf("/")){if("/"==a[0]||"/"==a[a.length-1])return void alert(nLang.f.slash_limit_position);
if(-1!=a.indexOf("//"))return void alert(nLang.f.slash_limit_continuous);if(aFolderName=a.split("/"),
sRealFolderName=aFolderName[aFolderName.length-1],aFolderName[aFolderName.length-1]="",sParentFolderName=aFolderName.join("/"),
sParentFolderName=sParentFolderName.substring(0,sParentFolderName.length-1),sRealFolderName.length>20)return void alert(nLang.f.length_limit_20);
if(isSystemFolderName(sParentFolderName))return;for(var b=mCom.aFolderInfo,c=mcCore.replaceSpecialChar(a),d=0;d<b.length;d++)if(c==b[d][1])return void alert(nLang.f.already_exist);
var e=_makeObjectForCheckExistFolder(sParentFolderName);mcCore.requestAjax({fCallback:$Fn(_fCheckExistFolderCallback,this).bind(a),
oParameter:e,sUrl:"/json/folder/exist/"})}else{if(a.length>20)return void alert(nLang.f.length_limit_20);
if(isSystemFolderName(a))return;for(var b=mCom.aFolderInfo,c=mcCore.replaceSpecialChar(a),d=0;d<b.length;d++)if(c==b[d][1])return void alert(nLang.f.already_exist);
var e={folderName:a};mcCore.requestAjax({fCallback:$Fn(_addFolderCallback,this).bind(),oParameter:e,
sUrl:"/json/folder/add/"})}},renameFolder=function(){var a,b=$$.getSingle("#layer_folder_edit #foldersn").value,c=$Element($$.getSingle("#layer_folder_edit .nob")),d=$$.getSingle("#layer_folder_edit .nob").value,e=c.attr("data-parentname"),f=$$.getSingle("#layer_folder_edit #foldername").value.replace(/(^\s*)|(\s*$)/g,"");
if(f===d)return $Element("layer_folder_edit").hide(),void myCore.focusTriggerElem();if(a=e?mcCore.restoreSpecialChar(e)+"/"+f:f,
f){if(-1!=f.indexOf("/"))return void alert(mcCore.getMemoboxString("cannot_use_slash_foldername",b));
a=mcCore.replaceSpecialChar(a),a=a.replace(nLang.f.tome+"/","");var g=_chkRenameFolderCondBo(b,a);if(-1!=g){
var h=_makeObjectForRenameFolder(b,g,a);mcCore.requestAjax({fCallback:$Fn(_renameFolderCallback,this).bind(h),
oParameter:h,sUrl:"/json/folder/rename"}),b=a=g=h=null}}},_renameFolderCallback=function(a,b){moFolder.getFolderOptionCallback("list",b),
updateFolder()},cleanTrash=function(){var a=nLang.f.try_to_clear_trash,b=mEnv.completelyDelete;if(confirm(a)){
var c={folderSN:4,deleteType:b};mcCore.requestAjax({fCallback:$Fn(_cleanTrashCallBack,this).bind(),oParameter:c,
sUrl:"/json/folder/empty/all/"})}a=b=c=null},_cleanTrashCallBack=function(){-1==location.hash.indexOf("#emptyFolder")&&(location.hash+="#emptyFolder"),
updateFolder(),4==mCom.nCurrentFolder&&mlCore.updateList(null,mCom.nCurrentFolder)},emptyFolderAtList=function(){
myCore.hideAllLayer(),cleanFolder(null,mCom.nFolderSNforLayer,!0)},cleanFolder=function(a,b,c){if(null==b)var d=mcCore.findFolderName(mCom.nCurrentFolder,!1),b=mCom.nCurrentFolder,e=!1;else if(c)var d=mcCore.findFolderName(b,!1),e=!1;else var d=mcCore.findFolderName(b,!1),e=!0;
var f=mEnv.completelyDelete;if("4"==b)var g=nLang.f.try_to_clear_trash;else{if("5"==b)return void _cleanSpamMail(a);
if("2"==b)var g=nLang.f.clear_folder_receipt_noti;else if("0"==f)var g=mcCore.getMemoboxString("clear_folder_type_trash",b).replace(/{Name}/g,mcCore.restoreSpecialChar(d));else var g=mcCore.getMemoboxString("clear_folder_type_delete",b).replace("{Name}",mcCore.restoreSpecialChar(d));
}if(confirm(g)){var h={folderSN:b,deleteType:f};mcCore.requestAjax({fCallback:$Fn(_cleanFolderCallback,this).bind(e,h),
oParameter:h,sUrl:"/json/folder/empty/all/"})}g=null,f=null,e=null,h=null},_cleanSpamMail=function(a){
"0"==mEnv.spamDeleteType?_showCleanSpamLayer(a):confirm(nLang.f.clear_spam_folder)&&_sendCleanSpam("1");
},okCleanSpam=function(){var a=1==$("chk_spamDelete").checked?"1":"0";mEnv.spamDeleteType=a,_sendCleanSpam(a);
},_sendCleanSpam=function(a){var b={folderSN:"5",deleteType:a},c=$Element("setup_container").visible();
mcCore.requestAjax({fCallback:$Fn(_cleanFolderCallback,this).bind(c),oParameter:b,sUrl:"/json/folder/empty/all/"
}),hideCleanSpamLayer()},_showCleanSpamLayer=function(a){var b,c,d=$Element("cleanSpamLayer"),e=$Document().clientSize();
null==a?(b=300,c=e.height/2):"BUTTON"==a.element.tagName?(b=e.width/2,c=e.height/2):(b=300,c=e.height/2),
d.css({left:b+"px",top:c+"px"}),d.show(),$$.getSingle("#cleanSpamLayer button").focus(),mCom.aVisibleLayerList.push(d);
},hideCleanSpamLayer=function(){$Element("cleanSpamLayer").hide()},_cleanFolderCallback=function(a,b){
-1==location.hash.indexOf("#emptyFolder")&&(location.hash+="#emptyFolder"),a?mCom.bOptionMarkUpLoaded&&mcCore.requestAjax({
fCallback:$Fn(moFolder.getFolderOptionCallback,this).bind("list"),oParameter:{},sUrl:"/json/folder/list/"
}):("0"!=mEnv.completelyDelete||"4"==b.folderSN||"5"==b.folderSN?myCore.showConfirmLayer(null,nLang.l.deleted_mail_permanently):myCore.showConfirmLayer(null,mcCore.getMemoboxString("moved_mail_trash",b.folderSN)),
mlCore.updateList(null,mCom.nCurrentFolder),myCore.hideAllLayer()),updateFolder()},initFolder=function(a,b){
var c={folderSN:b};mcCore.requestAjax({fCallback:$Fn(_initFolderCallback,this).bind(b),oParameter:c,
sUrl:"/json/folder/initName/"})},_initFolderCallback=function(a,b){if("Duplicated FolderName"==b.Message)return void alert(mcCore.getMemoboxString("duplicate_folder_name",a).replace("{FolderName}",b.folderName));
myCore.hideAllLayer(),updateFolder();var c={};mcCore.requestAjax({fCallback:$Fn(moFolder.getFolderOptionCallback,this).bind("list"),
oParameter:c,sUrl:"/json/folder/list/"})},_fCheckExistFolderCallback=function(a,b){if(0==b.isFolderExist)return void alert(nLang.f.no_parent_folder);
var c={folderName:a};mcCore.requestAjax({fCallback:$Fn(_addFolderCallback,this).bind(),oParameter:c,
sUrl:"/json/folder/add/"})},_addFolderCallback=function(){$$.getSingle("#setup_pos_wrap .folder_option #new_folder_name").value="",
updateFolder();var a={};mcCore.requestAjax({fCallback:$Fn(moFolder.getFolderOptionCallback,this).bind("list"),
oParameter:a,sUrl:"/json/folder/list/"}),mcCore.isNaver()&&mcKoreanclick.getOption("folder_option","addFolder");
},deleteFolderAtList=function(){myCore.hideAllLayer(),deleteFolder(null,mCom.nFolderSNforLayer)},deleteFolder=function(a,b){
var c=mcCore.findFolderName(b,!1),d=mEnv.completelyDelete;if("0"==_isHasChildFolderBo(b))if("0"==d)var e=mcCore.getMemoboxString("delete_folder_no_child_trash",b).replace(/{Name}/g,mcCore.restoreSpecialChar(c));else var e=mcCore.getMemoboxString("delete_folder_no_child_delete",b).replace(/{Name}/g,mcCore.restoreSpecialChar(c));else if("0"==d)var e=mcCore.getMemoboxString("delete_folder_has_child_trash",b).replace(/{Name}/g,mcCore.restoreSpecialChar(c));else var e=mcCore.getMemoboxString("delete_folder_has_child_delete",b).replace(/{Name}/g,mcCore.restoreSpecialChar(c));
if(confirm(e)){var f={folderSN:b,deleteType:d};mcCore.requestAjax({fCallback:$Fn(_deleteFolderCallback,this).bind(c,f),
oParameter:f,sUrl:"/json/folder/delete/"})}},_deleteFolderCallback=function(a,b,c){if(updateFolder(),
mCom.elOptionWrap.visible())return void moCore.refreshOptionLayer(c);$Element("detail_search").visible()&&_makeFolderSelectBoxBo(c),
"0"!=mEnv.completelyDelete||"4"==b.folderSN||"5"==b.folderSN?myCore.showConfirmLayer(null,nLang.l.deleted_mail_permanently):myCore.showConfirmLayer(null,mcCore.getMemoboxString("moved_mail_trash",b.folderSN));
var d=mcCore.findFolderName(mCom.nCurrentFolder,!1);d==a?mlCore.updateList(null,0):mlCore.refreshList();
},backupFolderFail=function(){alert(nLang.f.nomail_to_backup)},toggleChildFolder=function(a,b,c){if(b.indexOf("_")>-1)var d=b.split("_"),e=d[d.length-1];else{
var e=b;b="pSN_"+e}for(var f=0;f<mCom.aFolderInfo.length;f++)if(mCom.aFolderInfo[f][0]==e){mCom.aFolderInfo[f][4]="show"===c?!1:!mCom.aFolderInfo[f][4];
break}if($Element(b)){if("show"===c?$Element(b).show():$Element(b).toggle(),a)var g=$Element(a.element.parentNode);else var g=$Element($$.getSingle("[foldersn="+e+"]"));
"show"!==c&&g.hasClass("spread_folder")?(g.removeClass("spread_folder"),g.addClass("fold_folder"),_setChildToggleStatus("fold",e)):(g.addClass("spread_folder"),
g.removeClass("fold_folder"),"show"===c&&(mEnv.foldedFolder+=","+e),_setChildToggleStatus("unfold",e));
}return!0},stopDrag=function(a){a.stopDefault()},_setChildToggleStatus=function(a,b){var c="";if("fold"===a)c="/json/option/foldedFolder/add";else{
if("unfold"!==a||!$A(mEnv.foldedFolder.split(",")).has(""+b))return;c="/json/option/foldedFolder/remove";
}mcCore.requestAjax({fCallback:$Fn(function(a){a&&a.foldedFolder&&(mEnv.foldedFolder=a.foldedFolder);
}).bind(),oParameter:{folderSN:b},sUrl:c})},_toggleSystemFolder=function(){var a=$Element($$.getSingle(".system_folder_fold")),b=$Element($$.getSingle(".system_folder_unfold"));
return a.visible()?(mcCore.toggleEl(a,!1),mcCore.toggleEl(b,!0),$Element("nav").css("top","297px")):b.visible()&&(mcCore.toggleEl(b,!1),
mcCore.toggleEl(a,!0),$Element("nav").css("top","154px")),!0},editFolderNameAtLayer=function(){myCore.hideAllLayer(),
editFolderName($$.getSingle("#"+mCom.nFolderSNforLayer+"_fol"))},editFolderName=function(a){if(a.element)var b=a.element,c=$$.getSingle("!li",b);else var b=a,c=a;
var d=mcCore.findFolderName(c.attributes.foldersn.value,!1),e='<i class="ico_mbox"></i><span class="ipt_modify"> <input type="text" id="folderNameInputBox" class="input_txt" value="'+d+'"><label for="folderNameInputBox" class="blind">'+d+"</label></span>";
mCom.editingFolderClass=$Element(c).className(),mCom.editingCurFolderName=mcCore.restoreSpecialChar(d),
mCom.editingFolderHtml=c.innerHTML,$Element(c).className($Element(c).hasClass("fold_folder")?"new_folder fold_folder _m4(mcDragndrop|handleDragLeave)":$Element(c).hasClass("spread_folder")?"new_folder spread_folder _m4(mcDragndrop|handleDragLeave)":"new_folder _m4(mcDragndrop|handleDragLeave)"),
$Element(c).attr("draggable",!1),$$.getSingle("span.item_wrap",c).innerHTML=e;var f=$$.getSingle("#folderNameInputBox");
f.focus(),f.select(),mCom.isEditingFolderName=c.attributes.foldersn.value,f=b=d=e=null},renameFolderAtList=function(){
if(mCom.isEditingFolderName&&$$.getSingle("#folderNameInputBox")){var a=mCom.isEditingFolderName;if(-1!=$$.getSingle("#folderNameInputBox").value.indexOf("/"))return alert(mcCore.getMemoboxString("cannot_use_slash_foldername",a)),
$$.getSingle("#folderNameInputBox").focus(),$$.getSingle("#folderNameInputBox").value=mCom.editingCurFolderName,
"stop";var b=$$.getSingle("#folderNameInputBox").value.replace(/(^\s*)|(\s*$)/g,""),c=mcCore.findFolderName(a,!0).split("/");
c[c.length-1]=b;var d=c.join("/");if(c=null,mCom.editingCurFolderName==b||""==b)return void cancelRenameFolderAtList();
d=mcCore.replaceSpecialChar(mcCore.restoreSpecialChar(d)),d=d.replace(nLang.f.tome+"/","");var e=_chkRenameFolderCondBo(a,d);
if(-1==e){var f=$$.getSingle("#folderNameInputBox");return f.focus(),$$.getSingle("#folderNameInputBox").value=mCom.editingCurFolderName,
f=null,"stop"}var g={folderSN:a,folderName:mcCore.restoreSpecialChar(d),parentFolderSN:e};mcCore.requestAjax({
fCallback:$Fn(_renameFolderAtListCallback,this).bind(g),oParameter:g,sUrl:"/json/folder/rename"}),$$.getSingle("#folderNameInputBox").blur(),
a=null,b=null,e=null}},_renameFolderAtListCallback=function(a,b){if(fParseFolderBo(b),mCom.nCurrentFolder==mCom.isEditingFolderName){
var c=a.folderName.split("/"),d=mcCore.replaceSpecialChar(c[c.length-1]);$$.getSingle("#headFolderName").innerHTML=d+'<span class="bar"></span>',
d=null}var e="#"+a.folderSN+"_fol",f=$Element($$.getSingle(e));if(f){var g=f.child(function(a){return a.hasClass("directory_name");
})[0];g&&g.$value().focus()}mCom.isEditingFolderName=null,mCom.editingFolderClass=null,mCom.editingFolderHtml=null;
},cancelRenameFolderAtList=function(){var a=$$.getSingle("!li",$$.getSingle("#folderNameInputBox"));$Element(a).className(mCom.editingFolderClass),
$Element(a).html(mCom.editingFolderHtml),mCom.nCurOverFolder!=mCom.isEditingFolderName&&$Element(a).removeClass("ovr");
var b=$Element(a).child(function(a){return $Element(a).hasClass("directory_name")})[0];b&&b.$value().focus(),
mCom.isEditingFolderName=null,mCom.editingFolderClass=null,mCom.editingFolderHtml=null},addChildFolderAtList=function(){
myCore.hideAllLayer();var a=Number(mCom.nFolderSNforLayer),b=mcCore.findFolderName(a,!0),c=b.split("/").length,d="";
if(a>1e6&&c>=4||c>=5)return void alert(mcCore.getMemoboxString("depth_limit_5",a));a>1e6&&(d="memobox");
var e=_getNewFolderName(d);b=mcCore.restoreSpecialChar(b)+"/"+e;var f={folderName:b};d&&(f.toMeSubFolder=!0),
mcCore.requestAjax({fCallback:$Fn(_addFolderAtListCallback,this).bind(b),oParameter:f,sUrl:"/json/folder/add/"
})},addFolderAtList=function(a,b){return nCurFolderCount>=nMaxFolderCount?void alert(mcCore.getMemoboxString("count_limit_1000",b)):(b&&!$Element("pSN_6").visible()?toggleChildFolder({
element:$$.getSingle("#6_fol BUTTON")},"pSN_6"):!b&&$Element("section_mymail").hasClass("foldup")&&toggleMyMailSection(),
void setTimeout($Fn(_requestAddFolderAtList,this).bind(b),100))},_requestAddFolderAtList=function(a){
var b={folderName:_getNewFolderName(a)};a&&(b.toMeSubFolder=!0),mcCore.requestAjax({fCallback:$Fn(_addFolderAtListCallback,this).bind(b.folderName),
oParameter:b,sUrl:"/json/folder/add/"})},_addFolderAtListCallback=function(a,b){var c=fParseFolderBo(b);
if(c){var d=mcCore.findFolderSN(mcCore.replaceSpecialChar(a)),e=$$.getSingle(".svc_menu_area"),f=$$.getSingle("#"+d+"_fol"),g=$Element(f).offset().top-$Element(e).offset().top,h=e.clientHeight+e.scrollTop;
g>h&&(e.scrollTop=e.scrollHeight-g);var i=$Element(f).attr("parentfoldersn");i&&mfCore.toggleChildFolder(null,i,"show"),
setTimeout(function(){editFolderName($$.getSingle("#"+d+"_fol")),d=null,c=null},200)}},_getNewFolderName=function(a){
for(var b=0,c=new RegExp(""+mcCore.getMemoboxString("new_folder",a)+"\\s\\((\\d+)\\)$"),d=0;d<mCom.aFolderInfo.length;d++){
var e=c.exec(mCom.aFolderInfo[d][1]);null!==e&&(b=Math.max(b,e[1]))}return _getValidFolderName(b+1,a);
},_getValidFolderName=function(a,b){var c=mcCore.getMemoboxString("new_folder",b)+" ("+a+")";if(c.length>20){
var d=a.toString(),e=parseInt(d.substr(0,d.length-1),10);for(c=nLang.f.new_folder+" ("+e+")";getSameFolder(c);)e++,
c=nLang.f.new_folder+" ("+e+")"}return c},isExistFolderName=function(a){a=a.toUpperCase();for(var b=0;b<mCom.aFolderInfo.length;b++)if(mCom.aFolderInfo[b][1]==a)return!0;
return!1},beforePopupWrite=function(a,b,c){var d=b.concat("");try{c.close()}catch(e){}setTimeout($Fn(popupWrite,this).bind(null,d),100);
},popupWrite=function(a,b,c,d,e,f){if(a&&a.stopDefault(),jindo.$Agent().navigator().firefox||-1==location.hash.indexOf("#sendResult")||(location.hash=location.hash.replace("#sendResult","")),
!(("reply"==b||"replyAll"==b)&&Number(mCom.nCurrentFolder)>=3&&Number(mCom.nCurrentFolder)<=6)&&("forward"!=b||"4"!=mCom.nCurrentFolder&&"5"!=mCom.nCurrentFolder)){
if("forward"==b&&_woCurMailList.length()>80)return void alert(nLang.l.disable_forward_mail_over_count);
if(("reply"==b||"replyAll"==b||"edit"==b||"sent"==b)&&mlCore.getCurMailListLength()>1)return void alert(nLang.c.select_only_one);
if("replyAll"!==b||!mEnv.receiveByBcc||confirm(nLang.w.bcc_reply_all)){try{"undefined"==typeof mEnv.validReplyTo&&mCom.isPopup&&opener&&opener.mEnv&&(mEnv.validReplyTo=opener.mEnv.validReplyTo);
}catch(g){}if("boolean"==typeof mEnv.validReplyTo&&!mEnv.validReplyTo&&("new"===b||"reply"===b||"replyAll"===b||"forward"===b||"sent"===b||"forward"===b||"force"===b||"draft"===b&&"1"!=e))return void myCore.showInvalidReplyToLayer();
if(mcCore.isNcs()||mcCore.isNwe())if("forward"==b&&0==mCom.isReading){for(var h=$$("ol.mailList>li input"),i=$$("ol.mailList>li"),j=[],k=[],l=0;l<h.length;l++)h[l].checked&&(j.push(h[l]),
k.push(i[l]));sMessage=j.length>1?nLang.l.security_include_no_delivery:nLang.l.security_no_delivery;for(var l=0;l<j.length;l++){
var m=$Element(j[l]),n=m.attr("securityleveltype"),o=m.attr("resend");if(("SECRET"==n||"IN_HOUSE"==n)&&"false"==o)return alert(sMessage),
void _clearSelected(k,j)}}else if("forward"==b&&1==mCom.isReading&&$("stopResend"))return void alert(nLang.l.security_no_delivery);
if("2"==mCom.nCurrentFolder&&mCom.elListWrap&&mCom.elListWrap.visible())if("reply"==b||"replyAll"==b||"sent"==b){
var p="";if("sent"==b&&c)p=c;else{if(!mlCore.getSelectedMailList())return;p=mlCore.getCurMailList().get(0).mailSN;
}var q=mlCore.getParentMail(p);if(null==q||!q.isSaveSentMail)return void alert(nLang.e.mail_not_exist_readreceipt);
}else if("forward"==b){var r=mlCore.getCurMailList(),s=!1;if(r.forEach(function(a){var b=mlCore.getParentMail(a.mailSN);
return null!=b&&b.isSaveSentMail?void 0:void(s=!0)}),s)return void alert(nLang.e.mail_not_exist_readreceipt);
}if(d&&-1==d.indexOf("@")&&(d=mlCore.getMailAddress(d,!0),d='"" <>'==d?"":d,d=-1!=d.search(/\<undefined\>/)?"":d),
a&&a.$value()&&a.$value().shiftKey);else if("force"==b)b="new";else if(!mEnv.popupWrite&&!mCom.isPopup){
$Element("setup_container").hide(),$Element("detail_search").hide(),$Element("searchHelp").removeClass("selected"),
mcCore.adjustTopOfFlexArea(),mCom.isWriting=!0,mCom.isDraftMemo=e;var t=$Element($$.getSingle(".list_menu .click"));
return t&&t.removeClass("click"),t=null,void doWrite(b,c,d)}if("undefined"!=typeof d&&(d=unescape(d)),
"new"==b&&d)_popupWriteBo({type:b,sendTo:d});else if("new"==b||"toMe"==b)_popupWriteBo({type:b});else if("draft"==b)_popupWriteBo({
type:b,mailSNList:c,isDraftMemo:e});else if("template"==b)_popupWriteBo({type:b,mailSNList:c});else if("promise"==b)_popupWriteBo({
type:b});else if("readToMe"==b){var u=!(!mCom.translatedBody&&!mCom.translatedSubject);_popupWriteBo({
type:b,mailSNList:c,isTranslated:u})}else if("write"==mCom.initAction)_popupWriteBo({type:b,mailSNList:c
});else{var v=c||mlCore.getSelectedMailList();if(0==v)return!1;if(mCom.isPopup&&"edit"==b){var w,x="/write/popup/?orderType="+b,y=mcCore.getPopupWindowWidthWith(1e3);
x+="&lists="+v;try{mEnv.useStandardHeight=mEnv.useStandardHeight||opener.mEnv.useStandardHeight}catch(g){}
w=mEnv.useStandardHeight?mCom.nEditorHeight+321:mCom.nEditorExtHeight+321,(mcCore.isNcs()||mcCore.isNwe())&&(w+=62);
var z=w-window.innerHeight,A=y-window.innerWidth;return window.resizeBy(A,z),void(location.href=location.protocol+"//"+location.hostname+x);
}_popupWriteBo({type:b,mailSNList:v})}return f&&mCom.isPopup&&setTimeout(function(){window.close()},300),
!0}}},_clearSelected=function(a,b){for(var c=0;c<b.length;c++)b[c].checked=!1,$Element(a[c]).removeClass("selected");
mCom.lastChecked=null;var d=mlCore.getCurMailList();d.empty(),$("mailCheckAll").checked=!1},doWrite=function(a,b,c){
if(mCom.cancelUpdateList=!0,!mcCore.hideWriteArea())if("undefined"!=typeof mwEditor&&mwEditor.isLoaded()&&mwEditor.setContent(""),
mCom.isWriting=!0,myCore.hideAllLayer(),$Element("cont_flex_area").show(),$Element("cont_fix_area").show(),
mCom.bWriteLoaded){if("new"!=a&&"promise"!=a&&"toMe"!=a&&"template"!=a&&"draft"!=a&&"write"!=mCom.initAction&&("sent"!=a||null==b)){
var d;if(d=b?b:mlCore.getSelectedMailList(),0==d)return mCom.isWriting=!1,$Element("loading_bg").hide(),
$Element("loading_write_layer").hide(),!1;mCom.sMailList=d}var e=$Element($$.getSingle("#setup_container"));
if(e&&e.visible()&&e.hide(),e=null,mCom.sendBlockInfo){if("Y"==mCom.sendBlockInfo.result)return void mwCore.showSendBlockPopup();
$Element($$.getSingle(".divList")).show().hide(),$Element($$.getSingle(".divContent")).show().hide(),
$Element("writeWrap").hide().show(),$Element("listBtnMenu").hide(),$Element("readBtnMenu").hide(),$Element("writeBtnMenu").show(),
$Element("listHeadDiv").hide(),$Element("writeHeadDiv").show(),$Element("sendresultDivContent").hide(),
$Element("searchResultDiv")&&$Element("searchResultDiv").visible()&&($Element("searchResultDiv").hide(),
mcCore.adjustTopOfFlexArea())}if(mCom.orderType=a,mCom.sMailList=b||mCom.sMailList,mCom.sSendTo=c,mCom.oHistory)if("write"!=mCom.initAction){
var f={orderType:a,sMailList:b||mCom.sMailList,sSendTo:c},g={fClass:"write",oParameter:f};mCom.oHistory.addHistory(g);
}else mCom.initAction="";$Element("text_promotion").hide(),mcCore.adjustTopOfFlexArea(),("toMe"==a||"readToMe"===a||"1"==mCom.isDraftMemo)&&($Element("prevBtn")&&$Element("prevBtn").hide(),
$Element("cont_flex_area")&&!$Element("cont_flex_area").hasClass("write_tome")&&$Element("cont_flex_area").addClass("write_tome"),
$Element("sendBtn")&&!$Element("sendBtn").hasClass("save_mail")&&$Element("sendBtn").addClass("save_mail").text(nLang.c.save),
$Element("noteBtn")&&$Element("noteBtn").text(nLang.w.write_mail)),mwCore.initWrite()}else mCom.writeLoadingStarted||mInit.getWriteBody(),
setTimeout($Fn(doWrite,this).bind(a,b,c),10)},foldAllFolder=function(){updateFolder()},deleteUnreadMails=function(){
if(confirm(mcCore.getMemoboxString("confirm_delete_all",mCom.nCurrentFolder))){var a=_deleteUnreadMailsBo();
mcCore.requestAjax({fCallback:$Fn(_deleteUnreadMailsCallback,this).bind(),oParameter:a,sUrl:"/json/folder/empty/unread/"
})}},_deleteUnreadMailsCallback=function(){i()};var e=function(){g(a)},f=function(){g(mCom.nCurrentFolder);
},g=function(a){myCore.hideAllLayer(),confirm(h(a))&&mcCore.requestAjax({fCallback:i,oParameter:{folderSN:a,
status:"read"},sUrl:"/json/folder/setRead/"})},h=function(a){return 0==mcCore.isNaver()&&(6==a||a>=1e7)?nLang.f.confirm_read_all_memo:nLang.f.confirm_read_all;
},i=function(){mlCore.updateList(null,mCom.nCurrentFolder,null,mCom.nCurrentPage),updateFolder()},j=function(b){
var c=a=k(b);b&&b.stopDefault(),c&&(welLayer=$Element("ly_select_folderaction"),l(b,c),m(b.pos()),n(c));
},k=function(a){var b;return $Element(a.element).attr("foldersn")?b=a.element.attributes.foldersn.value:a.element.parentNode.attributes.foldersn?b=a.element.parentNode.attributes.foldersn.value:a.element.parentNode.parentNode&&a.element.parentNode.parentNode.attributes.foldersn&&(b=a.element.parentNode.parentNode.attributes.foldersn.value),
b},l=function(a,b){var c=$Element($$.getSingle(".do_backup",welLayer._element)),d=$Element($$.getSingle(".do_rename",welLayer._element)),e=$Element($$.getSingle(".do_delete",welLayer._element)),f=$Element($$.getSingle(".do_addfolder a",welLayer._element));
c.removeClass("border"),100>b?(mcCore.toggleEl(d,!1),mcCore.toggleEl(e,!1),mcCore.toggleEl(f,!1)):(d.css("display","block"),
e.css("display","block"),f.css("display","block")),f.text(mcCore.getMemoboxString("add_childfolder",b));
},m=function(a){welLayer.show();var b=welLayer.height(),c=document.body.clientHeight-$Element("footer").height()-(b+a.clientY);
0>c&&(a.clientY+=c,a.pageY+=c),welLayer.offset(a.clientY,a.clientX)},n=function(a){mCom.aVisibleLayerList.push(welLayer),
mCom.nFolderSNforLayer=a};backupFolderAtList=function(a,b){return myCore.hideAllLayer(),b||(b=mCom.nFolderSNforLayer),
0==_getFolderMailCountBo(b)?void alert(mcCore.getMemoboxString("nomail_to_backup",b)):void myCore.showBackupFolderLayer(a,b);
},downloadBackupFolder=function(a,b,c,d,e,f){var g=$Element($$.getSingle("!li",a.element));g.hasClass("download_started")||($$.getSingle("#checkVirusArea").src=_getFolderMailCountBo(b)>=65e3||_getFolderMailUsage(b)>=2147483648?window.location.protocol+"//"+mEnv.downloadServerInfo+"/folder/backupfile/?folderSN="+b+"&start="+c+"&end="+d+"&fileName="+encodeURI(unescape(e))+"&mailCount="+f:window.location.protocol+"//"+mEnv.downloadServerInfo+"/folder/backup/?folderSN="+b,
g.addClass("download_started"))},_cutFolderNameByDepth=function(a,b,c,d){if(a=mcCore.restoreSpecialChar(a),
"Nanumgothic"==mEnv.listFontName)var e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,5,9,7,11,8,3,4,4,7,7,3,7,3,7,8,8,8,8,8,8,8,8,8,8,3,4,7,7,7,7,10,9,8,9,8,8,7,9,8,3,7,8,8,11,8,9,8,9,8,8,8,8,9,11,9,9,8,4,12,5,7,5,3,8,7,7,7,7,5,7,7,3,3,7,3,9,7,7,7,7,5,7,5,7,7,10,7,7,7,6,3,6,9,0,0];else var e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,5,9,7,11,8,3,4,4,7,7,3,7,3,7,7,7,7,7,7,7,7,6,7,7,3,4,7,7,7,7,10,9,8,9,8,8,7,9,8,3,7,8,8,11,8,9,8,9,8,8,8,8,9,11,9,9,8,4,12,5,7,5,3,8,7,7,7,7,5,7,7,3,3,7,3,9,7,7,7,7,5,7,5,7,7,10,7,7,7,6,3,6,9,0,0];
var f=0,g=13,h=0,i=7,j=123;if("undefined"!=typeof d&&(j=d),c){var k=String(c).length;k=k>2?(k-2)*i:0;
}else var k=0;var l=j-b*g-k;if(1>l)return mcCore.replaceSpecialChar(a);for(var m=0;m<a.length;m++){var n=a.charCodeAt(m);
if(f+=n>=128?g:e[n],h++,f>l)return a=a.substring(0,m)+"..",mcCore.replaceSpecialChar(a)}return a=mcCore.replaceSpecialChar(a);
},fParseFolderBo=function(a,d){a.vipMailBox&&drawVipFolderCallback(a.vipMailBox);var e=[],f=[],g=-1,h=a.folderList;
if(mCom.isPopup||$Element("6_sub_fol").html(""),$Element("5_fol")&&(0==mEnv.hideSpamFolder?mcCore.toggleEl($Element("5_fol"),!0):mcCore.toggleEl($Element("5_fol"),!1)),
mCom.isPopup){for(var i=[],j=h.length,k=0;j>k;k++){for(var l=h[k],m=!1,n=mCom.aFolderInfo.length,q=0;n>q;q++)if(l.folderSN==mCom.aFolderInfo[q][0]){
m=mCom.aFolderInfo[q][4];break}i.push([l.folderSN,l.folderName,l.parentFolderSN,l.hasChildFolder,m,l.unreadMailCount,l.mailCount,l.idomain,l.usage]);
}return mCom.aFolderInfo=i,shouldLazyDrawFolderList()||makeMoveLayerBo(),!0}"undefined"!=typeof a.lastMailSN&&(mCom.nLastMailSN=a.lastMailSN),
f[++g]=mfTemplate.oFolderTemplate.head;var r=$$.getSingle("#totalUsage"),s=a.totalSizeMB;if(s||0===s){
var t=parseInt(s,10),u=t;"undefined"!=typeof a.humanReadable?u=0===t?"0MB":a.humanReadable:"undefined"!=typeof s&&(u=String(t>999?(t/1024).toFixed(1)+"GB":t+"MB")),
r.innerHTML=u,mEnv.totalUsage=t,mtCore.showMailboxTooltip(t)}var v,i=[],w=0,x=!1,y=!1,z=!1,A=!1,B=null,C=null,D=null,E=null,F=$A(mEnv.foldedFolder.split(","));
nCurFolderCount=h.length;for(var k=0;nCurFolderCount>k;k++){for(var G={},H=h[k],m=F.has(""+H.folderSN),n=mCom.aFolderInfo.length,q=0;n>q;q++)if(H.folderSN==mCom.aFolderInfo[q][0]){
m=mCom.aFolderInfo[q][4];break}if(i.push([H.folderSN,H.folderName,H.parentFolderSN,H.hasChildFolder,m,H.unreadMailCount,H.mailCount,H.idomain,H.usage]),
m=n=null,H.folderSN<7||H.folderSN>10&&H.folderSN<100){switch(H.folderSN){case 0:w=H.unreadMailCount;break;
case 4:case 5:0==H.mailCount?mcCore.toggleEl($Element($$.getSingle("#"+H.folderSN+"_fol .btn_clean")),!1):mcCore.toggleEl($Element($$.getSingle("#"+H.folderSN+"_fol .btn_clean")),!0);
break;case 6:i[k][4]&&$Element("6_fol").hasClass("spread_folder")?mfCore.toggleChildFolder({element:$$.getSingle("#6_fol .btn_folder")
},"pSN_6"):!i[k][4]&&$Element("6_fol").hasClass("fold_folder")&&mfCore.toggleChildFolder({element:$$.getSingle("#6_fol .btn_folder")
},"pSN_6")}if(12!=H.folderSN||mcCore.isNaver()||mcCore.toggleEl($Element("12_fol"),!0),$(H.folderSN+"_fol")){
var I=$Element($$.getSingle(".article",$(H.folderSN+"_fol")));I&&(I=I.replace(p(H.unreadMailCount,H.folderSN)));
}}else{if(H.folderSN>=7&&H.folderSN<=10){var v=mfTemplate.oFolderTemplate.bodyForSystem;if(G.toggleButton="",
"7"==H.folderSN&&"Y"==mEnv.billUse)y=!0,G.SystemFolderMenu='<a class="btn_setup _ccr(lfx.setbill) _c1(mInit|showOptionLayerAtInit|smart_option) _stopDefault" href="javascript:;"><span class="blind">'+nLang.f.bill+"</span><span>"+nLang.c.set+"</span></a>",
G.SystemFolderClass="bu8",G.UnusedClass="";else if("8"==H.folderSN&&"Y"==mEnv.cafeUse)x=!0,G.SystemFolderMenu="",
G.SystemFolderClass="bu9",G.UnusedClass="";else if(9==H.folderSN&&"Y"==mEnv.snsUse)z=!0,G.SystemFolderMenu="",
G.SystemFolderClass="bu16",G.UnusedClass="";else{if("10"!=H.folderSN||"Y"!=mEnv.promotionUse)continue;
A=!0,G.SystemFolderMenu="",G.SystemFolderClass="bu15",G.UnusedClass=""}}else if(12!=H.folderSN||mcCore.isNaver()){
if(H.folderSN>=1e7){var v=mfTemplate.oFolderTemplate.bodyForMemoForList;G.FolderSN=H.folderSN,G.ParentFolderSN=H.parentFolderSN,
G.FolderIconType="",G.FolderStyleIcon="";var J=$Element(H.parentFolderSN+"_sub_fol");G.FolderName=H.folderName.split("/")[H.folderDepth],
G.FolderNameTitle=H.folderName.split("/")[H.folderDepth];var K=mcCore.template(v,G);if(J.append(K),"1"==H.hasChildFolder){
var L="<button type='button' class='btn_folder _m1(mfCore|stopDrag) _m2(mfCore|stopDrag) _c1(mfCore|toggleChildFolder|pSN_"+H.folderSN+") _stopDefault'><span class='blind'>"+H.folderName+" "+(mcCore.isNaver()?nLang.f.fold_folder:nLang.m.fold_folder)+"</span></button>",M="<li style='"+(i[k][4]?"display:none":"")+"' class='child_folder depth"+(Number(H.folderDepth)+1)+"' id='pSN_"+H.folderSN+"'><ul id='"+H.folderSN+"_sub_fol'></ul></li>",N=i[k][4]?"fold_folder":"spread_folder";
$Element(H.folderSN+"_fol")&&$Element(H.folderSN+"_fol").prependHTML(L).addClass(N).afterHTML(M)}if($(H.folderSN+"_fol")){
var I=$Element($$.getSingle(".article",$(H.folderSN+"_fol")));I&&(I=I.replace(p(H.unreadMailCount,H.folderSN)));
}continue}var v=mfTemplate.oFolderTemplate.body;G.SystemFolderMenu="",G.SystemFolderClass="",G.UnusedClass="";
}else mcCore.toggleEl($Element("12_fol"),!0);G.FolderSN=H.folderSN,G.ParentFolderSN=H.parentFolderSN,
G.FolderId=H.folderSN+"_fol",G.selected=mCom.nCurrentFolder==H.folderSN?"click":"",G.FolderFullName=H.folderName;
var O=H.folderName.split("/")[H.folderDepth];G.FolderName=O,G.UnreadMail=p(H.unreadMailCount,G.FolderSN);
var P=e.length;if(H.folderSN>=7&&H.folderSN<=10)if(H.folderSN>=7&&H.folderSN<=10)switch(G.toggleButton="",
H.folderSN){case 7:G.bFolded="_ccr(lfx.bill)",C=mcCore.template(v,G);break;case 8:G.bFolded="_ccr(lfx.cafemailbox)",
B=mcCore.template(v,G);break;case 9:G.bFolded="_ccr(lfx.snsbox)",D=mcCore.template(v,G);break;case 10:
G.bFolded="_ccr(lfx.shopnews)",E=mcCore.template(v,G)}else G.toggleButton="",G.bFolded="",f[++g]=mcCore.template(v,G);else if(0==H.parentFolderSN){
if(e.length>0){for(var q=0;P>q;q++)f[++g]="</ul></li>";e=[]}"1"==H.hasChildFolder?(G.toggleButton="<button type='button' class='btn_folder _m1(mfCore|stopDrag) _m2(mfCore|stopDrag) _c1(mfCore|toggleChildFolder|pSN_"+H.folderSN+") _stopDefault'><span class='blind'>"+H.folderName+" "+nLang.f.fold_folder+"</span></button>",
i[k][4]?(G.bFolded="fold_folder",f[++g]=mcCore.template(v,G),e.push(H.folderSN),f[++g]="<li style='display:none' class='child_folder depth"+(Number(H.folderDepth)+1)+"' id='pSN_"+H.folderSN+"'><ul>"):(G.bFolded="spread_folder",
f[++g]=mcCore.template(v,G),e.push(H.folderSN),f[++g]="<li class='child_folder depth"+(Number(H.folderDepth)+1)+"' id='pSN_"+H.folderSN+"'><ul>")):(G.toggleButton="",
G.bFolded="",f[++g]=mcCore.template(v,G))}else{for(;H.parentFolderSN!=e[e.length-1]&&e.length>0;)e.pop(),
f[++g]="</ul></li>";"1"==H.hasChildFolder?(G.toggleButton="<button type='button' class='btn_folder _m1(mfCore|stopDrag) _m2(mfCore|stopDrag) _c1(mfCore|toggleChildFolder|pSN_"+H.folderSN+") _stopDefault'><span class='blind'>"+H.folderName+" "+nLang.f.fold_folder+"</span></button>",
i[k][4]?(G.bFolded="fold_folder",f[++g]=mcCore.template(v,G),e.push(H.folderSN),f[++g]="<li style='display:none' class='child_folder depth"+(Number(H.folderDepth)+1)+"' id='pSN_"+H.folderSN+"'><ul>"):(G.bFolded="spread_folder",
f[++g]=mcCore.template(v,G),e.push(H.folderSN),f[++g]="<li class='child_folder depth"+(Number(H.folderDepth)+1)+"' id='pSN_"+H.folderSN+"'><ul>")):(G.toggleButton="",
G.bFolded="",f[++g]=mcCore.template(v,G))}G=null}}if(0!=P){for(var q=0;P>q;q++)f[++g]="</ul></li>";e=[];
}if(f[++g]=mfTemplate.oFolderTemplate.tail,$$.getSingle("ul#user_folder").innerHTML=f.join(""),f=null,
mcCore.isNaver()){var Q=[],R=-1,S=mfTemplate.oFolderTemplate.bodyForUnusedSystem;if(E)Q[++R]=E;else{
var T={FolderId:"10_fol",SystemFolderClass:"bu15",SystemFolderMenu:'<a class="btn_use _ccr(lfx.useshopnews) _c1(myCore|useSmartMailbox|10)  _stopDefault" href="#"><span class="blind">'+nLang.f.shop+"</span><span>"+nLang.c.use+"</span></a>",
FolderSN:10,FolderFullName:nLang.f.shop,FolderName:nLang.f.shop};Q[++R]=mcCore.template(S,T)}if(C)Q[++R]=C;else{
var T={FolderId:"7_fol",SystemFolderClass:"bu8",SystemFolderMenu:'<a class="btn_use _ccr(lfx.usebill) _c1(myCore|useSmartMailbox|7) _stopDefault" href="#"><span class="blind">'+nLang.f.bill+"</span><span>"+nLang.c.use+"</span></a>",
FolderSN:7,FolderFullName:nLang.f.bill,FolderName:nLang.f.bill};Q[++R]=mcCore.template(S,T)}if(D)Q[++R]=D;else{
var T={FolderId:"9_fol",SystemFolderClass:"bu16",SystemFolderMenu:'<a class="btn_use _ccr(lfx.usesns)  _c1(myCore|useSmartMailbox|9) _stopDefault" href="#"><span class="blind">'+nLang.f.sns+"</span><span>"+nLang.c.use+"</span></a>",
FolderSN:9,FolderFullName:nLang.f.sns,FolderName:nLang.f.sns};Q[++R]=mcCore.template(S,T)}if(B)Q[++R]=B;else{
var T={FolderId:"8_fol",SystemFolderClass:"bu9",SystemFolderMenu:'<a class="btn_use _ccr(lfx.usecafe) _c1(myCore|useSmartMailbox|8) _stopDefault" href="#"><span class="blind">'+nLang.f.cafe+"</span><span>"+nLang.c.use+"</span></a>",
FolderSN:8,FolderFullName:nLang.f.cafe,FolderName:nLang.f.cafe};Q[++R]=mcCore.template(S,T),T=null}$$.getSingle("#smart_mailbox ul").innerHTML=Q.join(""),
Q=null}a.totalUnreadMail>-1&&($$.getSingle("#unreadMailCount").innerHTML=o(a.totalUnreadMail));var U;
U="all"==mCom.nCurrentFolder||"unread"==mCom.nCurrentFolder?"-1":"2"==mCom.nCurrentFolder?"1":mCom.nCurrentFolder;
for(var V=$$(".list_menu ul li"),k=V.length;k--;){var l=V[k],W=$Element(l);W.attr("folderSN")===U?W.hasClass("click")||W.addClass("click"):W.removeClass("click"),
l=null}if(mCom.aFolderInfo=i,"C"==mlCore.getCurrentViewType()||"S"==mlCore.getCurrentViewType()){var k,X,Y=0,Z=0,_="";
if("all"==mCom.nCurrentFolder){for(k=0,X=mCom.aFolderInfo.length;X>k;k++)1!=mCom.aFolderInfo[k][0]&&2!=mCom.aFolderInfo[k][0]&&3!=mCom.aFolderInfo[k][0]&&4!=mCom.aFolderInfo[k][0]&&5!=mCom.aFolderInfo[k][0]&&(Y+=mCom.aFolderInfo[k][5],
Z+=mCom.aFolderInfo[k][6]);_=nLang.f.all_for_title}else for(k=0,X=mCom.aFolderInfo.length;X>k;k++)if(mCom.aFolderInfo[k][0]==mCom.nCurrentFolder){
Y=mCom.aFolderInfo[k][5],Z=mCom.aFolderInfo[k][6],_=mCom.aFolderInfo[k][1];break}if(Y=Y>0?Y:0,$Element("headUnreadNum")){
if($Element("headUnreadNum").html(Y),mCom.nCurFolderTotalUnreadCount=Y,_){var ab=_.split("/");mCom.nCurFolderName=ab[ab.length-1],
$$.getSingle("#headFolderName").innerHTML=$S(mCom.nCurFolderName).$value()+'<span class="bar"></span>';
}_setBrowserTitleForList()}$Element("headTotalNum")&&$Element("headTotalNum").html(Z)}return d&&d.notUpdateMoveLayer||makeMoveLayerBo(),
"undefined"==typeof Blob?(mCom.elBtnQuickAttach&&mCom.elBtnQuickAttach.hide(),mCom.elBtnQuickAttach=null):mCom.elBtnQuickAttach&&(mCom.elBtnQuickAttach.$value().style.display=""),
$$.getSingle("#6_fol .btn_folder").style.display=""==$Element("6_sub_fol").html()?"none":"",$Element($$.getSingle("#6_sub_fol")).append(b),
$Element($$.getSingle("#user_folder")).append(c),!0};var o=function(a){return parseInt(a)>999?"999+":a;
},p=function(a,b,c){var d="",e="";return"undefined"!=typeof c&&(e=c.classes),parseInt(a)>0?(nUnreadMailCount=parseInt(a)>99&&6==b?"99+":parseInt(a)>999?7>b||b>10&&100>b?0!=b&&4!=b&&5!=b?"999+":a:"999+":a,
d="<a href='#' class='article'><span class='blind'>"+nLang.r.not_read_count+"</span><em class='_c1(mfCore|clickFolder|"+b+"|unread) _m1(mfCore|stopDrag) _m2(mfCore|stopDrag)"+e+" _stopDefault'>"+nUnreadMailCount+"</em></a>"):d="<span class='article blind'>"+nLang.r.not_read_count+" : 0</span>",
d};_makeObjectForRenameFolder=function(a,b,c){return{folderSN:a,folderName:mcCore.restoreSpecialChar(c),
parentFolderSN:b}},_chkRenameFolderCondBo=function(a,b){if("/"==b.substr(0,1)||"/"==b.substr(b.length-1,1))return alert(mcCore.getMemoboxString("slash_limit_position",a)),
-1;if(-1!=b.indexOf("//"))return alert(nLang.f.slash_limit_continuous),-1;var c=b.split("/"),d=c.length,e=c[c.length-1];
c[c.length-1]="";var f=c.join("/");if(f=f.substring(0,f.length-1),b.length==f.length&&(f=""),Number(a)>=1e7&&d++,
""==e)return alert(mcCore.getMemoboxString("noname",a)),-1;if(mcCore.restoreSpecialChar(e).length>20)return alert(mcCore.getMemoboxString("length_limit_20",a)),
-1;if(isSystemFolderName(e))return-1;for(var g="0",h=mCom.aFolderInfo,i=mcCore.findFolderName(a,!0),j=i.split("/").length,k=0,l=0,m=h.length;m>l;l++){
var n=h[l];if(mCom.aFolderInfo[l][1]==i)for(var o=mCom.aFolderInfo[l][1].split("/"),p=mcCore.findFolderName(a,!1),q=0,r=o.length;r>q;q++)o[q]==p&&mCom.aFolderInfo[l][1].split("/").length-j>k&&(k=mCom.aFolderInfo[l][1].split("/").length-j);
if(n[1]==f&&"6"!=n[0]&&(g=n[0]),b==mcCore.findFolderName(n[0],!0)&&a!=n[0])return alert(mcCore.getMemoboxString("already_exist",a)),
-1;n=null}if(_fCheckTargetsParentBo(a,g))return alert(mcCore.getMemoboxString("cannot_be_in_child_folder",g)),
-1;var s=i.replace("/"+mcCore.findFolderName(a,!1),"");if("0"==g&&""!=f)return alert(mcCore.getMemoboxString("no_parent_folder",a)),
-1;if(Number(a)>=1e7&&Number(g)>100&&Number(g)<1e7)return alert(mcCore.getMemoboxString("no_parent_folder","memobox")),
-1;switch(f){case nLang.f.sent:case nLang.f.inbox:case nLang.f.read_receipt:case nLang.f.draft:case nLang.f.trash:
case nLang.f.spam:case nLang.f.bill:case nLang.f.cafe:return alert(mcCore.getMemoboxString("cannot_be_in_system_folder",g)),
-1}var t=k+d;if(t>5)return alert(mcCore.getMemoboxString("depth_limit_5",nFolderSN)),-1;try{return g;
}finally{c=null,e=null,f=null,g=null,h=null,i=null,s=null,j=null,k=null,d=null,t=null}},_makeObjectForMoveFolder=function(a,b,c){
return{folderSN:a,folderName:mcCore.restoreSpecialChar(b),parentFolderSN:c}},_popupWriteBo=function(a){
var b=a.type,c=mcCore.getPureMailSN(a.mailSNList),d=a.sendTo,e="/write/popup/?orderType="+b;if("new"==b?d&&(-1!=d.indexOf("(")&&-1!=d.indexOf(")")?mCom.sSendTo=d:e+="&to="+encodeURIComponent(d)):"toMe"==b||(e+="&lists="+c),
a.body&&(e+="&body="+a.body),"1"==a.isDraftMemo&&(e+="&memo=1"),a.isTranslated&&(e+="&isTranslated=true"),
mEnv.useStandardHeight)var f=mCom.nEditorHeight+321;else var f=mCom.nEditorExtHeight+321;(mcCore.isNcs()||mcCore.isNwe())&&(f+=62);
var g;g=mcCore.getPopupWindowWidthWith(1e3),window.open(e,"","width="+g+",height="+f+",top=50,left=50,resizable=yes,scrollbars=yes");
},shouldLazyDrawFolderList=function(){return mCom.aFolderInfo.length>100&&($Agent().navigator().ie||$Agent().navigator().edge);
},makeMoveLayerBo=function(a){var b,c,d,e=mCom.aFolderInfo,f=e.length,g=$Element($$.getSingle("#moveBox_list",$("moveMailLayer")));
if(!a||!shouldLazyDrawFolderList()){var h,i="",j=r(1,nLang.f.sent,"sent"),k=r(6,nLang.f.tome,"tome"),l="",m=r("5",nLang.f.spam,"spam"),n=r("4",nLang.f.trash,"trash"),o=/[^/]+\//g,p=/([^.]+$)/;
for(h=r(0,nLang.f.inbox,"inbox"),b=0;f>b;b++)if(d=parseInt(e[b][0]),"Y"!=e[b][7]){if(!(7>d))if(11!=d){
var q;if(q=-1!=e[b][1].indexOf("/")?e[b][1].replace(o,"..").replace(p,"/$&"):6==e[b][2]?"../"+e[b][1]:e[b][1],
d>=1e7)k+=r(d,q,"");else{var s;s="7"==d?"bill":"8"==d?"b.cafe":"9"==d?"b.snsbox":"10"==d?"shopnews":"myinbox",
l+=r(d,q,s)}}else i=r(d,e[b][1],"hr")}else h+=r(e[b][0],e[b][1],"inboxdomain");c=[h,i,j,k,l,m,n],g.html(c.join(""));
}},addFolderToMoveLayer=function(a,b){var c=r(a,b,"");$Element($$.getSingle("#moveBox_list",$("moveMailLayer"))).append(c);
};var q="<li onmouseout='$Element(this).removeClass(\"hover\")' onmouseover='$Element(this).addClass(\"hover\")' class='fSN_{foldersn} _ccrf(|*b.{ccrf}) _c1(myCore|onClickFolderList|{foldersn}) _stopDefault'><a href='#' sn='{foldersn}' class='chk _k2(myCore|onKeydownFolderList|{foldersn}) _stopDefault' onblur='$Element($$.getSingle(\"!li\", this)).removeClass(\"hover\")' onfocus='$Element($$.getSingle(\"!li\", this)).addClass(\"hover\")' style='display:block;'><input type='checkbox' id='moveLayer_{foldersn}'><label for='moveLayer_{foldersn}'>{foldername}</label></a></li>",r=function(a,b,c){
return q.replace(/\{foldersn}/g,a).replace(/\{foldername}/g,b).replace(/\{ccrf}/g,c||"myinbox")};_makeFolderSelectBoxBo=function(a){
if(null!=a){for(var b=[],c=a.folderList,d=0;d<c.length;d++)b.push([c[d].folderSN,c[d].folderName,c[d].parentFolderSN,c[d].hasChildFolder,null,c[d].unreadMailCount,c[d].mailCount,c[d].idomain,c[d].usage]);
mCom.aFolderInfo=b}var e=mCom.aFolderInfo.length,f=[],g=-1,h=$Element($$.getSingle("#slt_search_folder",$("detail_search"))),i=$$.getSingle("#slt_search_folder").value,j="<option value = '{foldersn}'>{foldername}</option>",k=j;
k=k.replace(/\{foldersn\}/g,"-1"),k=k.replace(/\{foldername\}/g,nLang.f.whole_mail_folder),f[++g]=k;for(var d=0;e>d;d++)if(2!=mCom.aFolderInfo[d][0]){
var k=j;k=k.replace(/\{foldersn\}/g,mCom.aFolderInfo[d][0]);var l=mCom.aFolderInfo[d][1].split("/");if(l.length>1){
for(var m="",n=1;n<l.length;n++)m+="..";m+="/",k=k.replace(/\{foldername\}/g,m+l[l.length-1])}else k=k.replace(/\{foldername\}/g,l[0]);
f[++g]=k}h.html(f.join("")),$$.getSingle("#slt_search_folder").value=i},makeSearchLayerBo=function(){
mcCore.setFolderSelectBox("slt_search_folder");var a="#slt_search_folder option[value="+mCom.nCurrentFolder+"]";
$$.getSingle("#slt_search_folder").value=$$.getSingle(a)?mCom.nCurrentFolder:"-1",mUtil.changeSearchFolder(),
$$.getSingle("#chk_attach ").checked=!1,$$.getSingle("#ipt_sender").value="",$$.getSingle("#ipt_receiver").value="",
$$.getSingle("#ipt_query").value="",$$.getSingle("#slt_srch_period").value=mcCore.isNcs()?"1year":"all",
mUtil.changePeriod()},addNewFolderBo=function(a){var b={folderName:a};return b},clickFolderDragging=function(a,b){
var c=mcDragndrop.getDragging().nFolderSN;c&&b==c?clickFolder(a,b):mcDragndrop.handleDrop(a)},clickFolder=function(a,b,c,d,e,f,g,h){
if(mcCore.testPeriodStart("메일함 목록 측정"),a&&a.stopDefault(),!("8"==b&&"Y"!=mEnv.cafeUse||"7"==b&&"Y"!=mEnv.billUse||"9"==b&&"Y"!=mEnv.snsUse||"10"==b&&"Y"!=mEnv.promotionUse)){
if(mcCore.hideWriteArea())return void a.stopDefault();mlCore.isUseViewMore()&&(mCom.elListWrap.show(),
mCom.nExpectedShowMailCount=100,mCom.bShowListLodaingImage=!0,mCom.elBtnIcoViewTop.style.display="none"),
mCom.elList.scrollTop=0,mCom.nListWrapScrollTop=0,mCom.oCloudSaveData={},"remind"==b?mlCore.updateList(a,b,c,-1,13,f,g,null,null,h):mlCore.updateList(a,b,c,d,e,f,g,null,null,h);
var i=$$.getSingle(".list_menu ul li.click");if(i=i||$$.getSingle(".list_menu ul h3.click"),i&&$Element(i).removeClass("click"),
a){var j=$Element(a.element),k="li",l=j.tag!=k?j.query("!"+k):j;l&&(l.hasClass("click")?null:l.addClass("click"));
}}},_fCheckTargetsParentBo=function(a,b){if(0==b)return!1;for(var c=mcCore.findFolderName(a,!0),d=mcCore.findFolderName(b,!0),e=0;e<c.length;e++)if(c.charAt(e)!=d.charAt(e))return!1;
return c.length>=d.length?!0:"/"==d.charAt(c.length)?!0:!1},_makeObjectForCheckExistFolder=function(a){
var b={m:"folder",a:"exist",folderName:a};return b},_isHasChildFolderBo=function(a){for(var b=0;b<mCom.aFolderInfo.length;b++)if(mCom.aFolderInfo[b][0]==a)return mCom.aFolderInfo[b][3];
return!1},_findParentFolderNameBo=function(a){for(var b=0;b<mCom.aFolderInfo.length;b++)if(mCom.aFolderInfo[b][0]==a)return mcCore.findFolderName(mCom.aFolderInfo[b][2],!0);
return""},_findParentFolderSNBo=function(a){for(var b=0;b<mCom.aFolderInfo.length;b++)if(mCom.aFolderInfo[b][0]==a)return mCom.aFolderInfo[b][2];
return""},_getFolderMailCountBo=function(a){for(var b=0;b<mCom.aFolderInfo.length;b++)if(mCom.aFolderInfo[b][0]==a)return mCom.aFolderInfo[b][6];
return!1},_getFolderMailUsage=function(a){for(var b=0;b<mCom.aFolderInfo.length;b++)if(mCom.aFolderInfo[b][0]==a)return mCom.aFolderInfo[b][8];
return!1},_deleteUnreadMailsBo=function(){var a={folderSN:mCom.nCurrentFolder};switch(mCom.nCurrentFolder){
case"fromAddr":a.from=mCom.nCurFromAddr,a.folderSN="";break;case"unread":a.type="all",a.folderSN=-1;break;
case"thread":a.mailSN=mCom.nCurThreadMailSN;case"mark":case"attach":case"tome":case"all":a.type=mCom.nCurrentFolder,
a.folderSN=-1}return a},checkFolderCount=function(){return nMaxFolderCount>nCurFolderCount},setMaxFolderCount=function(a){
nMaxFolderCount=a},initVipFolder=function(){var a=['<div class="section_mymail vip_mail">','<h3 class="h_lft_menu _c1(mfCore|toggleVipMailSection) _stopDefault">',"VIP ",'<span class="article"><span class="blind">'+nLang.r.not_read_count+"</span></span>",'<a href="#" class="btn_fd_up">','<span class="ico_fold"></span>','<span class="blind">'+nLang.f.vip_folder_toggle+"</span>","</a>","</h3>",'<div class="list_menu">',"<ul> ","</ul>",'<p class="more _c1(mfCore|seeMoreVipMailSection) _stopDefault" style="display:none;"><a href="#">'+nLang.c.more+'<em class="ico"></em></a></p>',"</div>","</div>"].join(""),b=$$.getSingle(".section_mymail.vip_mail");
b||($Element("section_mymail").beforeHTML(a),b=$$.getSingle(".section_mymail.vip_mail")),mEnv.foldVipMailBox&&$Element(b).addClass("foldup"),
mInfo.folder.vipMailBox?drawVipFolderCallback(mInfo.folder.vipMailBox):mcCore.requestAjax({sUrl:"/json/folder/vipMailBox/list",
fCallback:drawVipFolderCallback})},drawVipFolderCallback=function(a){var b=$$.getSingle(".section_mymail.vip_mail");
if(!b)return void initVipFolder();var c=a&&a.vipList,d=c.length;if(c&&d>0){5>=d?$Element($$.getSingle(".list_menu p.more",b)).hide():$Element($$.getSingle(".list_menu p.more",b)).show();
var e=0,f=$$(".list_menu li._folder",b),g=$$(".list_menu li._folder[@display=none]",b),h=g.length>0||0==f.length;
$$.getSingle(".list_menu p.more a",b).innerHTML=h?nLang.c.more+'<em class="ico"></em>':nLang.c.fold+'<em class="ico fold"></em>';
for(var i=mfTemplate.oFolderTemplate.bodyForVip,j="",k=0;d>k;k++){var l=c[k];l.folderName=""!=l.name?mcCore.replaceSpecialChar(l.name):l.email,
e+=l.unreadMailCount,l.unreadMail=p(l.unreadMailCount,"vip$"+l.email,{classes:"_ccr(lfx.vipunreadcnt)"
}),h&&k>4&&(l.display='style="display:none"'),j+=mcCore.improvedTemplate(i,l)}var m=e>999?" 999+":1>e?"":e;
$$.getSingle(".h_lft_menu span.article",b).innerHTML='<span class="blind">'+nLang.r.not_read_count+"</span>"+m,
$$.getSingle("ul",b).innerHTML=j}else $$.getSingle("ul",b).innerHTML=['<li class="add_vip _folder _c1(mfCore|openContacts) _ccr(lfx.addvip) _stopDefault">','<span class="item_wrap">','<a href="#">'+nLang.f.vip_move_contact+'<span class="blind">'+nLang.f.vip_folder+"</span></a>","</span>","</li>"].join(""),
$$.getSingle(".h_lft_menu span.article",b).innerHTML='<span class="blind">'+nLang.r.not_read_count+"</span>";
$Element(b).show()},toggleVipMailSection=function(a){var b=$Element($$.getSingle(".section_mymail.vip_mail"));
b.hasClass("foldup")?(a&&a.element&&ccr(a.element,"lfx.vipunfold",a),b.removeClass("foldup"),mEnv.foldVipMailBox=!1):(a&&a.element&&ccr(a.element,"lfx.vipfold",a),
b.addClass("foldup"),mEnv.foldVipMailBox=!0),mcCore.requestAjax({fCallback:$Fn(function(){}).bind(),
oParameter:{foldVipMailBox:mEnv.foldVipMailBox},sUrl:"/json/option/vipMailBox/set/"})},seeMoreVipMailSection=function(a){
var b=$$.getSingle(".section_mymail.vip_mail"),c=$$(".list_menu li._folder[@display=none]",b);if(c.length>0)a&&a.element&&ccr(a.element,"lfx.vipmore",a),
$ElementList(c).show(),$$.getSingle(".list_menu p.more a",b).innerHTML=nLang.c.fold+'<em class="ico fold"></em>';else{
a&&a.element&&ccr(a.element,"lfx.vipmfold",a);var d=$$(".list_menu li._folder",$$.getSingle(".section_mymail.vip_mail")),e=d.length;
if(e>5)for(var f=5;e>f;f++)$Element(d[f]).hide();$$.getSingle(".list_menu p.more a",b).innerHTML=nLang.c.more+'<em class="ico"></em>';
}},openContacts=function(){window.open(location.protocol+"//contact."+mEnv.rootDomain)};var s=function(){
if(!$Element($$.getSingle("#6_fol .btn_wr2me")).hasClass("disabled"))try{if(mcCore.isNcs()&&mCom.isVDIUser)return alert(nLang.w.upload_fail_vdi),
!1;$("tomeFile").click()}catch(a){alert(nLang.e.ndrive_file_upload_fail)}},t=function(){return mCom.bWriteLoaded?void mcCore.requestAjax({
fCallback:function(a){mwCore.oWriteForm.attachID=a.attachId,mwAttach.clearFileArea(),mwAttach.initUploaderHtml5(),
window.onbeforeunload=function(){try{if($Element("html5Uploader").visible())return mwAttach.pauseUploadHtml5(null),
mwCore.oUploadTimer=setTimeout('mwAttach.addFiles("quickAttach")',300),nLang.o.alert_leaving_upload}catch(a){}
},window.unload=function(){mwCore.oUploadTimer=null},maCore.init(),mwCalendar.initDefaultCal(),mwCore.initSecuritySetting(),
mwAttach.addFiles("quickAttach")},sUrl:"/json/write/getAttachId"}):(mCom.writeLoadingStarted||mInit.getWriteBody(),
void setTimeout(t,10))};return{toggleMyMailSection:toggleMyMailSection,updateFolder:updateFolder,setFolderLocation:setFolderLocation,
moveFolder:moveFolder,setFolderOrder:setFolderOrder,addFolder:addFolder,renameFolder:renameFolder,cleanTrash:cleanTrash,
emptyFolderAtList:emptyFolderAtList,cleanFolder:cleanFolder,okCleanSpam:okCleanSpam,hideCleanSpamLayer:hideCleanSpamLayer,
initFolder:initFolder,deleteFolderAtList:deleteFolderAtList,deleteFolder:deleteFolder,backupFolderFail:backupFolderFail,
toggleChildFolder:toggleChildFolder,stopDrag:stopDrag,editFolderNameAtLayer:editFolderNameAtLayer,editFolderName:editFolderName,
renameFolderAtList:renameFolderAtList,cancelRenameFolderAtList:cancelRenameFolderAtList,addChildFolderAtList:addChildFolderAtList,
addFolderAtList:addFolderAtList,isExistFolderName:isExistFolderName,popupWrite:popupWrite,doWrite:doWrite,
foldAllFolder:foldAllFolder,deleteUnreadMails:deleteUnreadMails,showFolderActionLayer:j,backupFolderAtList:backupFolderAtList,
downloadBackupFolder:downloadBackupFolder,fParseFolderBo:fParseFolderBo,makeMoveLayerBo:makeMoveLayerBo,
makeSearchLayerBo:makeSearchLayerBo,addNewFolderBo:addNewFolderBo,checkFolderCount:checkFolderCount,
setMaxFolderCount:setMaxFolderCount,beforePopupWrite:beforePopupWrite,clickFolderDragging:clickFolderDragging,
clickFolder:clickFolder,toggleVipMailSection:toggleVipMailSection,initVipFolder:initVipFolder,seeMoreVipMailSection:seeMoreVipMailSection,
openContacts:openContacts,clickQuickAttach:s,getQuickAttachId:t,readFolderAtList:e,readFolderAtCurrentList:f,
popupWriteBo:_popupWriteBo,addFolderToMoveLayer:addFolderToMoveLayer,shouldLazyDrawFolderList:shouldLazyDrawFolderList
}}(),mfSkin=function(){var a="",b=function(){var a=$Element("shortcut_layer");a&&a.visible()&&myCore.showShortcutLayer();
var b=$$.getSingle("#skin_set_layer"),c=$Element("skin_set_layer");if(c.visible())return void myCore.hideAllLayer();
c.show(),document.body.scrollTop=0,document.documentElement.scrollTop=0,"undefined"==typeof window.innerWidth&&(window.innerWidth=document.documentElement.clientWidth,
window.innerHeight=document.documentElement.clientHeight);var d=(window.innerWidth-c.width())/2,e=$Element("header")?$Element("header").height():(window.innerHeight-c.height())/2;
if(c.offset(e,d),mCom.aVisibleLayerList.push(c),!isNaN(Number(mEnv.folderSkin)))switch(Number(mEnv.folderSkin)){
case 1:mEnv.folderSkin="blue";break;case 2:mEnv.folderSkin="white";break;case 3:mEnv.folderSkin="pblue";
break;case 4:mEnv.folderSkin="ppink";break;default:mEnv.folderSkin="black"}mfSkin.selectedSkin=mEnv.folderSkin,
$Element($$.getSingle("li.on",b))&&$Element($$.getSingle("li.on",b)).removeClass("on"),$Element($$.getSingle("a[class*=|"+mEnv.folderSkin+")] !li",b)).addClass("on"),
$$.getSingle(".skin_title",b).focus()},c=function(a,b){$Element("wrap").removeClass("skin_"+mEnv.folderSkin),
$Element("wrap").removeClass("skin_"+mfSkin.selectedSkin),$Element("wrap").addClass("skin_"+b),mfSkin.selectedSkin=b;
var c=$$.getSingle("#skin_set_layer");$Element($$.getSingle("li.on",c))&&$Element($$.getSingle("li.on",c)).removeClass("on"),
$Element($$.getSingle("!li",a.element)).addClass("on")},d=function(){$Element("wrap").removeClass("skin_"+mEnv.folderSkin),
$Element("wrap").addClass("skin_"+mfSkin.selectedSkin);var a=$$.getSingle("#toggleSkinLayerBtn");a&&a.focus(),
mEnv.folderSkin=mfSkin.selectedSkin,mcCore.isNaver()&&nhn.deskhome_menu.setSkinType(mEnv.folderSkin),
mcCore.requestAjax({fCallback:$Fn(myCore.hideAllLayer,this).bind(),oParameter:{skinColor:mEnv.folderSkin
},sUrl:"/json/option/folderSkin/set/"})},e=function(){var a=$$.getSingle("#toggleSkinLayerBtn");a&&a.focus(),
$Element("wrap").removeClass("skin_"+mfSkin.selectedSkin),$Element("wrap").addClass("skin_"+mEnv.folderSkin),
myCore.hideAllLayer()};return{selectedSkin:a,toggleSkinLayer_new:b,selectSkinColor:c,setSkinColor:d,
cancelSkinColor:e}}(),mfTemplate=function(){return oFolderTemplate={head:"",body:"<li id='{FolderId}' class='{bFolded} _ccr(lfx.mybox) folder_name drop pointer {selected} _c3(mfCore|showFolderActionLayer) _m1(mcDragndrop|folderDragStart) _m2(mcDragndrop|handleDrop) _m3(mcDragndrop|handleDragEnter) _m4(mcDragndrop|handleDragLeave) _d5(mcDragndrop|html5DragLeave) _d6(mcDragndrop|html5DragOver) _d7(mcDragndrop|html5Drop)' ondragover='return false;' foldersn='{FolderSN}' parentfoldersn='{ParentFolderSN}' title='{FolderFullName}'>{toggleButton}<span class='item_wrap {SystemFolderClass} _d5(mcDragndrop|html5DragLeave) _d6(mcDragndrop|html5DragOver) _d7(mcDragndrop|html5Drop)'><i class='ico_mbox'></i><a {Href} class='{UnusedClass} directory_name _d5(mcDragndrop|html5DragLeave) _d6(mcDragndrop|html5DragOver) _d7(mcDragndrop|html5Drop) _stopDefault' draggable='false'>{FolderName}</a>{UnreadMail}<a href='javascript:;' class='btn_modify _ccr(lfx.rename) _m1(mfCore|editFolderName) _m2(mfCore|stopDrag) _c1(mfCore|stopDrag) _stopDefault' ><span>{FolderName} "+nLang.f.rename_folder+"</span></a>{SystemFolderMenu}</span><span foldersn='{FolderSN}' parentfoldersn='{ParentFolderSN}' class='drop_into _m2(mfCore|clickFolderDragging|{FolderSN}) _m3(mcDragndrop|handleDragEnter) _m4(mcDragndrop|handleDragLeave) _stopDefault'></span><span foldersn='{FolderSN}' parentfoldersn='{ParentFolderSN}' class='drop_order _m2(mfCore|clickFolderDragging|{FolderSN}) _m3(mcDragndrop|handleDragEnter) _m4(mcDragndrop|handleDragLeave) _stopDefault'></span></li>",
bodyForSystem:"<li id='{FolderId}' class='{bFolded} folder_name drop pointer _c1(mfCore|clickFolder|{FolderSN}) {selected} _c3(mfCore|showFolderActionLayer) _m2(mcDragndrop|handleDrop) _m3(mcDragndrop|handleDragEnter) _m4(mcDragndrop|handleDragLeave) _d6(mcDragndrop|html5DragOver) _d7(mcDragndrop|html5Drop)'foldersn='{FolderSN}' title='{FolderFullName}'>{toggleButton}<span class='item_wrap {SystemFolderClass} _d5(mcDragndrop|html5DragLeave) _d6(mcDragndrop|html5DragOver) _d7(mcDragndrop|html5Drop)'><i class='ico_mbox'></i><a href='javascript:;' class='_c1(mfCore|clickFolder|{FolderSN}) _d5(mcDragndrop|html5DragLeave) _d6(mcDragndrop|html5DragOver) _d7(mcDragndrop|html5Drop)' draggable='false'>{FolderName}</a>{UnreadMail}{SystemFolderMenu}</span></li>",
bodyForUnusedSystem:"<li id='{FolderId}' class='folder_name drop pointer _m3(mcDragndrop|handleDragEnter) _m4(mcDragndrop|handleDragLeave) _d6(mcDragndrop|html5DragOver) _d7(mcDragndrop|html5Drop)'foldersn='{FolderSN}' title='{FolderFullName}'><span class='item_wrap {SystemFolderClass} _d5(mcDragndrop|html5DragLeave) _d6(mcDragndrop|html5DragOver) _d7(mcDragndrop|html5Drop)'><i class='ico_mbox'></i><a href='javascript:;' class='unused _c1(mfCore|clickFolder|{FolderSN}) _d5(mcDragndrop|html5DragLeave) _d6(mcDragndrop|html5DragOver) _d7(mcDragndrop|html5Drop)' draggable='false'>{FolderName}</a><span class='article blind'>"+nLang.r.not_read_count+" : 0</span>{SystemFolderMenu}</span></li>",
bodyForMemoForList:"<li id='{FolderSN}_fol' foldersn='{FolderSN}' parentfoldersn='{ParentFolderSN}' class='_c3(mfCore|showFolderActionLayer) _folder _system _m1(mcDragndrop|folderDragStart) _m2(mcDragndrop|handleDrop) _m3(mcDragndrop|handleDragEnter) _m4(mcDragndrop|handleDragLeave) _d5(mcDragndrop|html5DragLeave) _d6(mcDragndrop|html5DragOver) _d7(mcDragndrop|html5Drop)'> <span {FolderStyleIcon} class='item_wrap system_folder {FolderIconType} _d5(mcDragndrop|html5DragLeave) _d6(mcDragndrop|html5DragOver) _d7(mcDragndrop|html5Drop)'><i class='ico_mbox'></i><a href='javascript:;' title='{FolderNameTitle}' class='directory_name _m2(mcDragndrop|handleDrop) _m3(mcDragndrop|handleDragEnter) _m4(mcDragndrop|handleDragLeave) _d5(mcDragndrop|html5DragLeave) _d6(mcDragndrop|html5DragOver) _d7(mcDragndrop|html5Drop) ' foldersn='{FolderSN}'>{FolderName}<span class='blind'> "+nLang.f.idomain_mail_folder+"</span></a><a href='javascript:;' class='article' draggable='false'><span class='blind'>"+nLang.r.not_read_count+"</span><em class='_c1(mfCore|clickFolder|{FolderSN}|unread) _m1(mfCore|stopDrag) _m2(mfCore|stopDrag)'>{UnreadMail}</em></a></span><span foldersn='{FolderSN}' parentfoldersn='{ParentFolderSN}' class='drop_into _m2(mfCore|clickFolderDragging|{FolderSN}) _m3(mcDragndrop|handleDragEnter) _m4(mcDragndrop|handleDragLeave) _stopDefault'></span><span foldersn='{FolderSN}' parentfoldersn='{ParentFolderSN}' class='drop_order _m2(mfCore|clickFolderDragging|{FolderSN}) _m3(mcDragndrop|handleDragEnter) _m4(mcDragndrop|handleDragLeave) _stopDefault'></span><a href='javascript:;' class='btn_modify _ccr(lfx.rename) _m1(mfCore|editFolderName) _m2(mfCore|stopDrag) _c1(mfCore|stopDrag) _stopDefault'><span>{FolderName} "+nLang.f.rename_folder+"</span></a></li>",
tail:"",headForVip:"<div class='section_mymail vip_mail'><h3 class='h_lft_menu _c1(mfCore|toggleVipMailSection) _stopDefault'>VIP "+nLang.r.not_read_count+"<a href='#' class='btn_fd_up'><span class='ico_fold'></span><span class='blind'>"+nLang.f.vip_folder_toggle+"</span></a></h3><div class='list_menu'><ul></ul><p class='more _c1(mfCore|seeMoreVipMailSection) _stopDefault' style='display:none;'><a href='#'>"+nLang.c.more+"<em class='ico'></em></a></p></div></div>",
bodyForVip:"<li class='_folder _m3(mcDragndrop|handleDragEnter) _m4(mcDragndrop|handleDragLeave) _c1(mfCore|clickFolder|vip${email}) _ccr(lfx.vip)' data-vipname='{folderName}' data-vipemail='{email}' foldersn='vip${email}' {display}><span class='item_wrap'><i class='ico_mbox'></i><a href='#'>{folderName}<span class='blind'>"+nLang.f.vip_folder+"</span></a>{unreadMail}<a href='#' class='btn_remove _c1(mlCore|setImportance|{email}|N) _ccr(lfx.vipuncheck) _stopDefault'><span class='blind'>VIP 해제하기</span></a></span></li>"
},{oFolderTemplate:oFolderTemplate}}(),eofMain={},mtCore=function(){var a={OVER_CAPACITY_TOOLTIP_NOT_SHOW:"over_mail_capacity_tooltip",
LESS_CAPACITY_TOOLTIP_NOT_SHOW:"less_mail_capacity_tooltip"},b=[],c=function(b){var c,f,g,h,i,j,k=$Element("totalSize");
if(!mcCore.isNcs()&&k)if(c=k.data("quota"),f=1024*c,b>f){if("true"===mcCore.getCookie(a.OVER_CAPACITY_TOOLTIP_NOT_SHOW))return;
mcCore.isNwe()&&mCom.isWorksJP&&(g=$Element("omct_relative_help"),g&&g.hide()),h=$Element("over_mail_capacity_tooltip"),
j=$Element("totalUsage"),e(),h.show(),h.css({top:-(h.height()+10)+"px",left:j.offset().left+j.width()-39+"px",
zIndex:10}),d(h)}else if(b>f-100){if("true"===mcCore.getCookie(a.LESS_CAPACITY_TOOLTIP_NOT_SHOW))return;
mcCore.isNwe()&&mCom.isWorksJP&&(g=$Element("lmct_relative_help"),g&&g.hide()),i=$Element("less_mail_capacity_tooltip"),
j=$Element("totalUsage"),e(),i.show(),i.css({top:-(i.height()+10)+"px",left:j.offset().left+j.width()-39+"px",
zIndex:10}),d(i)}else e()},d=function(a){b.push(a)},e=function(){var a,c,d=b.length;for(a=0;d>a;a++)c=b.pop(),
c.hide()},f=function(a,b,c){mcCore.setCookie(b,"true",c),$Element(b).hide()},g=function(a,b){$Element(b).hide();
};return{showMailboxTooltip:c,addTooltip:d,hideAllTooltip:e,setMailboxCookie:f,closeTooltip:g}}();