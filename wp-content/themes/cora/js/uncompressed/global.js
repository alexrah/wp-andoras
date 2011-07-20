(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}if(g.start==undefined){g.start=b("white")}if(g.end==undefined){g.end=b("white")}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.curCSS(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);$.fn.preloader=function(l){var d={delay:200,preload_parent:"a",check_timer:300,ondone:function(){},oneachload:function(m){},fadein:500};var l=$.extend(d,l),j=$(this),g=j.find("img").css({visibility:"hidden",opacity:0}),c,a=0,e=0,b=[],f=l.delay,k=function(){c=setInterval(function(){if(a>=b.length){clearInterval(c);l.ondone();return}for(e=0;e<g.length;e++){if(g[e].complete==true){if(b[e]==false){b[e]=true;l.oneachload(g[e]);a++;f=f+l.delay}$(g[e]).css("visibility","visible").delay(f).animate({opacity:1},l.fadein,function(){$(this).parent().removeClass("preloader")})}}},l.check_timer)};g.each(function(){if($(this).parent(l.preload_parent).length==0){$(this).wrap("<a class='preloader' />")}else{$(this).parent().addClass("preloader")}b[e++]=false});g=$.makeArray(g);var h=jQuery("<img />",{id:"loadingicon",src:"css/i/89.gif"}).hide().appendTo("body");c=setInterval(function(){if(h[0].complete==true){clearInterval(c);k();h.remove();return}},100)};$(document).ready(function(){$("#menuwrap").animate({top:"60px"},1000,"easeOutCirc");Cufon.replace("#handwritten1, #handwritten2, .handwritten3, #about_the_author .about_heading",{fontFamily:"Pacifico"});Cufon.replace("h1, h2, h3, h4",{hover:true});Cufon.replace("#footer h3, .sidebar h3, .bold_title",{hover:true});Cufon.replace(".kwick_title span");Cufon.replace(".frame .caption");Cufon.replace(".dropcap1, .dropcap2, .dropcap3");Cufon.replace("#nav > li > a",{hover:true});Cufon.replace(".button",{hover:true});Cufon.replace(".bold_text");Cufon.replace(".toggle_title");Cufon.replace("#grid_slider .sub_grid li .caption .caption_title");Cufon.replace(".reply",{hover:true});Cufon.now();$("#nav li").append("<span></span>");$(" #nav ul ").css({display:"none"});$(" #nav li").hover(function(){$(this).find("ul:first").css({visibility:"visible",display:"none"}).slideDown(400)},function(){$(this).find("ul:first").css({visibility:"hidden"})});$("#nav li ul li").hover(function(){$(this).children("a").stop().css({color:"white"}).animate({textIndent:"7px"},200);$(this).children("span").stop().animate({width:"190px"},350)},function(){$(this).children("a").stop().css({color:"#707070"}).animate({textIndent:"0px"},200);$(this).children("span").stop().animate({width:"0px"},350)});$("#nav > li").hover(function(){$(this).children("span").stop().animate({width:"100%"},350);$(this).children("a").css({color:"white"})},function(){$(this).children("span").stop().animate({width:"0%"},350);$("#nav > li").children("a").css({color:"#707070"});Cufon.replace($(this).children("a"),{hover:true})});$(".tabs_container").each(function(){$("ul.tabs",this).tabs("div.panes > div",{tabs:"li",effect:"fade",fadeOutSpeed:-400})});$.tools.tabs.addEffect("slide",function(d,c){this.getPanes().slideUp();this.getPanes().eq(d).slideDown(function(){c.call()})});$(".accordion").tabs("div.pane",{tabs:".tab",effect:"slide"});$(".toggle_title").toggle(function(){$(this).addClass("toggle_active");$(this).siblings(".toggle_content").slideDown("fast")},function(){$(this).removeClass("toggle_active");$(this).siblings(".toggle_content").slideUp("fast")});$(".frame a.icon_zoom,.frame a.icon_play,.frame a.icon_doc").append("<span class='image_overlay'></span>");var a=function(c){$(".frame a.icon_zoom,.frame a.icon_play,.frame a.icon_doc").hover(function(){$(this).children(".image_overlay").stop().css("display","block").fadeTo(400,0.6)},function(){$(this).children(".image_overlay").stop().fadeTo(400,0)})};a(document);$(".frame, .thumbnail").hover(function(){$(this).children(".caption").stop(true,true).fadeIn(250)},function(){$(this).children(".caption").stop(true,true).fadeOut(250)});if(!$.browser.msie){$(".thumbnail",".recent_posts").hover(function(){$(this).children(".thumbnail_shadow").stop(true,true).fadeTo(400,0.5)},function(){$(this).children(".thumbnail_shadow").stop(true,true).fadeOut(250)})}$(".blogcol li","#main").hover(function(){var c=$(this).find(".teaser").children("a");if(!c.hasClass("preloader")){c.children("img").stop().animate({top:"-22"},200)}},function(){var c=$(this).find(".teaser").children("a");if(!c.hasClass("preloader")){c.children("img").stop().animate({top:"0"},200)}});$(".blogcol li .more").hover(function(){$(this).children("span").stop().animate({width:"190px"},500)},function(){$(this).children("span").stop().animate({width:"0px"},500)});$(".blogpost").hover(function(){$(this).find(".handwritten3").stop(true,true).fadeIn(300)},function(){$(this).find(".handwritten3").stop(true,true).fadeOut(300)});$(".metabox .subheading").hover(function(){$(this).children("a").css({color:"#ffffff"});$(this).children("span").stop().animate({width:"100%"},400,"easeOutQuint")},function(){$(this).children("a").css({color:"#999999"});$(this).children("span").stop().animate({width:"0%"},400)});$(".widget_social img").hover(function(){$(this).stop().animate({opacity:"0.7",top:"-4px"},200)},function(){$(this).stop().animate({opacity:"1",top:"0px"},200)});var b=function(c){$("a.lightbox[href*='http://www.vimeo.com/']").each(function(){$(this).attr("href",this.href.replace("www.vimeo.com/","player.vimeo.com/video/"))});$("a.lightbox[href*='http://vimeo.com/']").each(function(){$(this).attr("href",this.href.replace("vimeo.com/","player.vimeo.com/video/"))});$("a.lightbox[href*='http://www.youtube.com/watch?']").each(function(){$(this).attr("href",this.href.replace(new RegExp("watch\\?v=","i"),"v/"))});$("a.lightbox[href*='http://player.vimeo.com/']").each(function(){$(this).addClass("fancyVimeo").removeClass("lightbox")});$("a.lightbox[href*='http://www.youtube.com/v/']").each(function(){$(this).addClass("fancyVideo").removeClass("lightbox")});$("a.lightbox[href$='.swf']").each(function(){$(this).addClass("fancyVideo").removeClass("lightbox")});$(".fancyVimeo").each(function(){$(this).colorbox({opacity:0.7,innerWidth:700,innerHeight:450,iframe:true,scrolling:false,current:"{current} of {total}",onComplete:function(){$("#cboxClose").css("visibility","hidden");$("#colorbox").addClass("withVideo");Cufon.replace("#cboxTitle")}})});$(".fancyVideo").each(function(){var d=$.flash.create({swf:this.href,width:700,height:450,play:true});$(this).colorbox({opacity:0.7,innerWidth:700,innerHeight:450,html:d,scrolling:false,current:"{current} of {total}",onComplete:function(){$("#cboxClose").css("visibility","hidden");$("#colorbox").addClass("withVideo");Cufon.replace("#cboxTitle")}})});$(".lightbox").colorbox({opacity:0.7,maxWidth:"90%",maxHeight:"90%",current:"{current} of {total}",onComplete:function(){$("#cboxClose").css("visibility","visible");$("#colorbox").removeClass("withVideo");Cufon.replace("#cboxTitle")}})};b(document);$(".image_no_link").click(function(){return false});if(!$.browser.msie){$(".recent_posts li .thumbnail").hover(function(){$(this).stop(true,true).animate({width:"100"},200)},function(){$(this).stop(true,true).animate({width:"85"},200)})}$(".portfolios.sortable").each(function(){var f={name:"image",duration:500,easing:"linear",attribute:"data-id"};var d=$("ul",this);var c=d.clone();var e;if(d.is(".portfolio_one_column")){e=1}else{if(d.is(".portfolio_two_columns")){e=2}else{if(d.is(".portfolio_three_columns")){e=3}else{if(d.is(".portfolio_four_columns")){e=4}}}}$(".sortable_categories a",this).click(function(h){$(".sortable_categories a").css({backgroundColor:"white"});$(this).css({backgroundColor:"#ededed"});if($.browser.msie&&parseInt($.browser.version,10)<9){d.find(".image_shadow").css("visibility","hidden");c.find(".image_shadow").css("visibility","hidden")}if($(this).attr("data-value")=="all"){$sorted_data=c.find("li")}else{$sorted_data=c.find("li[data-type*="+$(this).attr("data-value")+"]")}$sorted_data.filter(".last").removeClass("last");$sorted_data.each(function(j){if(((j+1)%e)==0&&e!=1){$(this).addClass("last")}});var g=function(){if($.browser.msie&&parseInt($.browser.version,10)<9&&parseInt($.browser.version,10)>6){d.find(".image_shadow").css("visibility","visible")}b(d);a(d);if(typeof Cufon!=="undefined"){Cufon.replace(".portfolio_title h3")}};d.quicksand($sorted_data,f,g);if($.browser.msie&&parseInt($.browser.version,10)<7){g()}h.preventDefault()})});if(jQuery.tools.validator!=undefined){jQuery.tools.validator.addEffect("contact_form",function(d,c){$.each(d,function(g,f){var e=f.input;e.addClass("invalid")})},function(c){c.removeClass("invalid")});jQuery(".contact_form").validator({effect:"contact_form"}).submit(function(d){var c=jQuery(this);if(!d.isDefaultPrevented()){jQuery.post(this.action,{to:jQuery('input[name="contact_to"]').val(),name:jQuery('input[name="contact_name"]').val(),email:jQuery('input[name="contact_email"]').val(),content:jQuery('textarea[name="contact_content"]').val()},function(e){c.fadeOut("fast",function(){jQuery(this).siblings(".success").show()})});d.preventDefault()}})}$(".portfolio_list").each(function(){var c=this;$(".portfolio_item",c).hover(function(){$(".portfolio_item",c).not(".portfolio_item_"+$(this).attr("class").substr(30)).children(".frame").stop().animate({height:"0px"},500,"easeOutQuart");$(".portfolio_item_"+$(this).attr("class").substr(30),c).children(".frame").stop().animate({height:"152px"},500,"easeOutQuart")},function(){})})});(function(e){function b(p,c,g){var o=this,f=p.add(this),n=p.find(g.tabs),m=c.jquery?c:p.children(c),k;n.length||(n=p.children());m.length||(m=p.parent().find(c));m.length||(m=e(c));e.extend(this,{click:function(l,j){var h=n.eq(l);if(typeof l=="string"&&l.replace("#","")){h=n.filter("[href*="+l.replace("#","")+"]");l=Math.max(n.index(h),0)}if(g.rotate){var q=n.length-1;if(l<0){return o.click(q,j)}if(l>q){return o.click(0,j)}}if(!h.length){if(k>=0){return o}l=g.initialIndex;h=n.eq(l)}if(l===k){return o}j=j||e.Event();j.type="onBeforeClick";f.trigger(j,[l]);if(!j.isDefaultPrevented()){d[g.effect].call(o,l,function(){j.type="onClick";f.trigger(j,[l])});k=l;n.removeClass(g.current);h.addClass(g.current);return o}},getConf:function(){return g},getTabs:function(){return n},getPanes:function(){return m},getCurrentPane:function(){return m.eq(k)},getCurrentTab:function(){return n.eq(k)},getIndex:function(){return k},next:function(){return o.click(k+1)},prev:function(){return o.click(k-1)},destroy:function(){n.unbind(g.event).removeClass(g.current);m.find("a[href^=#]").unbind("click.T");return o}});e.each("onBeforeClick,onClick".split(","),function(j,h){e.isFunction(g[h])&&e(o).bind(h,g[h]);o[h]=function(l){l&&e(o).bind(h,l);return o}});if(g.history&&e.fn.history){e.tools.history.init(n);g.event="history"}n.each(function(h){e(this).bind(g.event,function(j){o.click(h,j);return j.preventDefault()})});m.find("a[href^=#]").bind("click.T",function(h){o.click(e(this).attr("href"),h)});if(location.hash&&g.tabs=="a"&&p.find("[href="+location.hash+"]").length){o.click(location.hash)}else{if(g.initialIndex===0||g.initialIndex>0){o.click(g.initialIndex)}}}e.tools=e.tools||{version:"1.2.5"};e.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(f,c){d[f]=c}};var d={"default":function(f,c){this.getPanes().hide().eq(f).show();c.call()},fade:function(j,c){var g=this.getConf(),h=g.fadeOutSpeed,f=this.getPanes();h?f.fadeOut(h):f.hide();f.eq(j).fadeIn(g.fadeInSpeed,c)},slide:function(f,c){this.getPanes().slideUp(200);this.getPanes().eq(f).slideDown(400,c)},ajax:function(f,c){this.getPanes().eq(0).load(this.getTabs().eq(f).attr("href"),c)}},a;e.tools.tabs.addEffect("horizontal",function(f,c){a||(a=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){e(this).hide()});this.getPanes().eq(f).animate({width:a},function(){e(this).show();c.call()})});e.fn.tabs=function(g,c){var f=this.data("tabs");if(f){f.destroy();this.removeData("tabs")}if(e.isFunction(c)){c={onBeforeClick:c}}c=e.extend({},e.tools.tabs.conf,c);this.each(function(){f=new b(e(this),g,c);e(this).data("tabs",f)});return c.api?f:this}})(jQuery);(function(a9,aK){var aR="none",aq="LoadedContent",a8=false,aP="resize.",aW="y",aU="auto",a6=true,ar="nofollow",aY="x";function a5(b,d){b=b?' id="'+a2+b+'"':"";d=d?' style="'+d+'"':"";return a9("<div"+b+d+"/>")}function aV(d,c){c=c===aY?aX.width():aX.height();return typeof d==="string"?Math.round(/%/.test(d)?c/100*parseInt(d,10):parseInt(d,10)):d}function ai(a){return ba.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(a)}function aI(b){for(var d in b){if(a9.isFunction(b[d])&&d.substring(0,2)!=="on"){b[d]=b[d].call(aZ)}}b.rel=b.rel||aZ.rel||ar;b.href=b.href||a9(aZ).attr("href");b.title=b.title||aZ.title;return b}function aO(d,b){b&&b.call(aZ);a9.event.trigger(d)}function aH(){var a,h=a2+"Slideshow_",j="click."+a2,g,d;if(ba.slideshow&&a3[1]){g=function(){ay.text(ba.slideshowStop).unbind(j).bind(ah,function(){if(a4<a3.length-1||ba.loop){a=setTimeout(a7.next,ba.slideshowSpeed)}}).bind(ag,function(){clearTimeout(a)}).one(j+" "+ap,d);a1.removeClass(h+"off").addClass(h+"on");a=setTimeout(a7.next,ba.slideshowSpeed)};d=function(){clearTimeout(a);ay.text(ba.slideshowStart).unbind([ah,ag,ap,j].join(" ")).one(j,g);a1.removeClass(h+"on").addClass(h+"off")};ba.slideshowAuto?g():d()}}function aF(b){if(!ao){aZ=b;ba=aI(a9.extend({},a9.data(aZ,aT)));a3=a9(aZ);a4=0;if(ba.rel!==ar){a3=a9("."+ax).filter(function(){return(a9.data(this,aT).rel||this.rel)===ba.rel});a4=a3.index(aZ);if(a4===-1){a3=a3.add(aZ);a4=a3.length-1}}if(!aQ){aQ=aA=a6;a1.show();if(ba.returnFocus){try{aZ.blur();a9(aZ).one(aa,function(){try{this.focus()}catch(c){}})}catch(a){}}aN.css({opacity:+ba.opacity,cursor:ba.overlayClose?"pointer":aU}).show();ba.w=aV(ba.initialWidth,aY);ba.h=aV(ba.initialHeight,aW);a7.position(0);af&&aX.bind(aP+an+" scroll."+an,function(){aN.css({width:aX.width(),height:aX.height(),top:aX.scrollTop(),left:aX.scrollLeft()})}).trigger("scroll."+an);aO(aJ,ba.onOpen);ae.add(aw).add(av).add(ay).add(ad).hide();aD.html(ba.close).show()}a7.load(a6)}}var aG={transition:"elastic",speed:300,width:a8,initialWidth:"600",innerWidth:a8,maxWidth:a8,height:a8,initialHeight:"450",innerHeight:a8,maxHeight:a8,scalePhotos:a6,scrolling:a6,inline:a8,html:a8,iframe:a8,photo:a8,href:a8,title:a8,rel:a8,opacity:0.9,preloading:a6,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:a8,returnFocus:a6,loop:a6,slideshow:a8,slideshowAuto:a6,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:a8,onLoad:a8,onComplete:a8,onCleanup:a8,onClosed:a8,overlayClose:a6,escKey:a6,arrowKey:a6},aT="colorbox",a2="cbox",aJ=a2+"_open",ag=a2+"_load",ah=a2+"_complete",ap=a2+"_cleanup",aa=a2+"_closed",am=a2+"_purge",ac=a2+"_loaded",az=a9.browser.msie&&!a9.support.opacity,af=az&&a9.browser.version<7,an=a2+"_IE6",aN,a1,aE,aS,bc,aj,al,ak,a3,aX,a0,au,at,ad,ae,ay,av,aw,aD,aC,aB,aM,aL,aZ,a4,ba,aQ,aA,ao=a8,a7,ax=a2+"Element";a7=a9.fn[aT]=a9[aT]=function(h,e){var b=this,g;if(!b[0]&&b.selector){return b}h=h||{};if(e){h.onComplete=e}if(!b[0]||b.selector===undefined){b=a9("<a/>");h.open=a6}b.each(function(){a9.data(this,aT,a9.extend({},a9.data(this,aT)||aG,h));a9(this).addClass(ax)});g=h.open;if(a9.isFunction(g)){g=g.call(b)}g&&aF(b[0]);return b};a7.init=function(){var b="hover",a="clear:left";aX=a9(aK);a1=a5().attr({id:aT,"class":az?a2+"IE":""});aN=a5("Overlay",af?"position:absolute":"").hide();aE=a5("Wrapper");aS=a5("Content").append(a0=a5(aq,"width:0; height:0; overflow:hidden"),at=a5("LoadingOverlay").add(a5("LoadingGraphic")),ad=a5("Title"),ae=a5("Current"),av=a5("Next"),aw=a5("Previous"),ay=a5("Slideshow").bind(aJ,aH),aD=a5("Close"));aE.append(a5().append(a5("TopLeft"),bc=a5("TopCenter"),a5("TopRight")),a5(a8,a).append(aj=a5("MiddleLeft"),aS,al=a5("MiddleRight")),a5(a8,a).append(a5("BottomLeft"),ak=a5("BottomCenter"),a5("BottomRight"))).children().children().css({"float":"left"});au=a5(a8,"position:absolute; width:9999px; visibility:hidden; display:none");a9("body").prepend(aN,a1.append(aE,au));aS.children().hover(function(){a9(this).addClass(b)},function(){a9(this).removeClass(b)}).addClass(b);aC=bc.height()+ak.height()+aS.outerHeight(a6)-aS.height();aB=aj.width()+al.width()+aS.outerWidth(a6)-aS.width();aM=a0.outerHeight(a6);aL=a0.outerWidth(a6);a1.css({"padding-bottom":aC,"padding-right":aB}).hide();av.click(a7.next);aw.click(a7.prev);aD.click(a7.close);aS.children().removeClass(b);a9("."+ax).live("click",function(c){if(!(c.button!==0&&typeof c.button!=="undefined"||c.ctrlKey||c.shiftKey||c.altKey)){c.preventDefault();aF(this)}});aN.click(function(){ba.overlayClose&&a7.close()});a9(document).bind("keydown",function(c){if(aQ&&ba.escKey&&c.keyCode===27){c.preventDefault();a7.close()}if(aQ&&ba.arrowKey&&!aA&&a3[1]){if(c.keyCode===37&&(a4||ba.loop)){c.preventDefault();aw.click()}else{if(c.keyCode===39&&(a4<a3.length-1||ba.loop)){c.preventDefault();av.click()}}}})};a7.remove=function(){a1.add(aN).remove();a9("."+ax).die("click").removeData(aT).removeClass(ax)};a7.position=function(k,m){function a(b){bc[0].style.width=ak[0].style.width=aS[0].style.width=b.style.width;at[0].style.height=at[1].style.height=aS[0].style.height=aj[0].style.height=al[0].style.height=b.style.height}var l,c=Math.max(document.documentElement.clientHeight-ba.h-aM-aC,0)/2+aX.scrollTop(),j=Math.max(aX.width()-ba.w-aL-aB,0)/2+aX.scrollLeft();l=a1.width()===ba.w+aL&&a1.height()===ba.h+aM?0:k;aE[0].style.width=aE[0].style.height="9999px";a1.dequeue().animate({width:ba.w+aL,height:ba.h+aM,top:c,left:j},{duration:l,complete:function(){a(this);aA=a8;aE[0].style.width=ba.w+aL+aB+"px";aE[0].style.height=ba.h+aM+aC+"px";m&&m()},step:function(){a(this)}})};a7.resize=function(a){if(aQ){a=a||{};if(a.width){ba.w=aV(a.width,aY)-aL-aB}if(a.innerWidth){ba.w=aV(a.innerWidth,aY)}a0.css({width:ba.w});if(a.height){ba.h=aV(a.height,aW)-aM-aC}if(a.innerHeight){ba.h=aV(a.innerHeight,aW)}if(!a.innerHeight&&!a.height){a=a0.wrapInner("<div style='overflow:auto'></div>").children();ba.h=a.height();a.replaceWith(a.children())}a0.css({height:ba.h});a7.position(ba.transition===aR?0:ba.speed)}};a7.prep=function(a){var g="hidden";function b(j){var o,n,e,r,h=a3.length,k=ba.loop;a7.position(j,function(){function c(){az&&a1[0].style.removeAttribute("filter")}if(aQ){az&&f&&a0.fadeIn(100);a0.show();aO(ac);ad.show().html(ba.title);if(h>1){typeof ba.current==="string"&&ae.html(ba.current.replace(/\{current\}/,a4+1).replace(/\{total\}/,h)).show();av[k||a4<h-1?"show":"hide"]().html(ba.next);aw[k||a4?"show":"hide"]().html(ba.previous);o=a4?a3[a4-1]:a3[h-1];e=a4<h-1?a3[a4+1]:a3[0];ba.slideshow&&ay.show();if(ba.preloading){r=a9.data(e,aT).href||e.href;n=a9.data(o,aT).href||o.href;r=a9.isFunction(r)?r.call(e):r;n=a9.isFunction(n)?n.call(o):n;if(ai(r)){a9("<img/>")[0].src=r}if(ai(n)){a9("<img/>")[0].src=n}}}at.hide();ba.transition==="fade"?a1.fadeTo(d,1,function(){c()}):c();aX.bind(aP+a2,function(){a7.position(0)});aO(ah,ba.onComplete)}})}if(aQ){var f,d=ba.transition===aR?0:ba.speed;aX.unbind(aP+a2);a0.remove();a0=a5(aq).html(a);a0.hide().appendTo(au.show()).css({width:function(){ba.w=ba.w||a0.width();ba.w=ba.mw&&ba.mw<ba.w?ba.mw:ba.w;return ba.w}(),overflow:ba.scrolling?aU:g}).css({height:function(){ba.h=ba.h||a0.height();ba.h=ba.mh&&ba.mh<ba.h?ba.mh:ba.h;return ba.h}()}).prependTo(aS);au.hide();a9("#"+a2+"Photo").css({cssFloat:aR,marginLeft:aU,marginRight:aU});af&&a9("select").not(a1.find("select")).filter(function(){return this.style.visibility!==g}).css({visibility:g}).one(ap,function(){this.style.visibility="inherit"});ba.transition==="fade"?a1.fadeTo(d,0,function(){b(0)}):b(d)}};a7.load=function(a){var f,e,b,d=a7.prep;aA=a6;aZ=a3[a4];a||(ba=aI(a9.extend({},a9.data(aZ,aT))));aO(am);aO(ag,ba.onLoad);ba.h=ba.height?aV(ba.height,aW)-aM-aC:ba.innerHeight&&aV(ba.innerHeight,aW);ba.w=ba.width?aV(ba.width,aY)-aL-aB:ba.innerWidth&&aV(ba.innerWidth,aY);ba.mw=ba.w;ba.mh=ba.h;if(ba.maxWidth){ba.mw=aV(ba.maxWidth,aY)-aL-aB;ba.mw=ba.w&&ba.w<ba.mw?ba.w:ba.mw}if(ba.maxHeight){ba.mh=aV(ba.maxHeight,aW)-aM-aC;ba.mh=ba.h&&ba.h<ba.mh?ba.h:ba.mh}f=ba.href;at.show();if(ba.inline){a5().hide().insertBefore(a9(f)[0]).one(am,function(){a9(this).replaceWith(a0.children())});d(a9(f))}else{if(ba.iframe){a1.one(ac,function(){var g=a9("<iframe frameborder='0' style='width:100%; height:100%; border:0; display:block'/>")[0];g.name=a2+ +new Date;g.src=ba.href;if(!ba.scrolling){g.scrolling="no"}if(az){g.allowtransparency="true"}a9(g).appendTo(a0).one(am,function(){g.src="//about:blank"})});d(" ")}else{if(ba.html){d(ba.html)}else{if(ai(f)){e=new Image;e.onload=function(){var c;e.onload=null;e.id=a2+"Photo";a9(e).css({border:aR,display:"block",cssFloat:"left"});if(ba.scalePhotos){b=function(){e.height-=e.height*c;e.width-=e.width*c};if(ba.mw&&e.width>ba.mw){c=(e.width-ba.mw)/e.width;b()}if(ba.mh&&e.height>ba.mh){c=(e.height-ba.mh)/e.height;b()}}if(ba.h){e.style.marginTop=Math.max(ba.h-e.height,0)/2+"px"}a3[1]&&(a4<a3.length-1||ba.loop)&&a9(e).css({cursor:"pointer"}).click(a7.next);if(az){e.style.msInterpolationMode="bicubic"}setTimeout(function(){d(e)},1)};setTimeout(function(){e.src=f},1)}else{f&&au.load(f,function(h,j,g){d(j==="error"?"Request unsuccessful: "+g.statusText:a9(this).children())})}}}}};a7.next=function(){if(!aA){a4=a4<a3.length-1?a4+1:0;a7.load()}};a7.prev=function(){if(!aA){a4=a4?a4-1:a3.length-1;a7.load()}};a7.close=function(){if(aQ&&!ao){ao=a6;aQ=a8;aO(ap,ba.onCleanup);aX.unbind("."+a2+" ."+an);aN.fadeTo("fast",0);a1.stop().fadeTo("fast",0,function(){aO(am);a0.remove();a1.add(aN).css({opacity:1,cursor:aU}).hide();setTimeout(function(){ao=a8;aO(aa,ba.onClosed)},1)})}};a7.element=function(){return a9(aZ)};a7.settings=aG;a9(a7.init)})(jQuery,this);(function(w,u,t){function r(f,g){var e=(f[0]||0)-(g[0]||0);return e>0||!e&&f.length>0&&r(f.slice(1),g.slice(1))}function q(f){if(typeof f!=v){return f}var h=[],e="";for(var g in f){e=typeof f[g]==v?q(f[g]):[g,d?encodeURI(f[g]):f[g]].join("=");h.push(e)}return h.join("&")}function c(f){var g=[];for(var e in f){f[e]&&g.push([e,'="',f[e],'"'].join(""))}return g.join(" ")}function b(f){var g=[];for(var e in f){g.push(['<param name="',e,'" value="',q(f[e]),'" />'].join(""))}return g.join("")}var v="object",d=true;try{var s=t.description||function(){return(new t("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}()}catch(a){s="Unavailable"}var x=s.match(/\d+/g)||[0];w[u]={available:x[0]>0,activeX:t&&!t.name,version:{original:s,array:x,string:x.join("."),major:parseInt(x[0],10)||0,minor:parseInt(x[1],10)||0,release:parseInt(x[2],10)||0},hasVersion:function(e){e=/string|number/.test(typeof e)?e.toString().split("."):/object/.test(typeof e)?[e.major,e.minor]:e||[0,0];return r(x,e)},encodeParams:true,expressInstall:"expressInstall.swf",expressInstallIsActive:false,create:function(e){if(!e.swf||this.expressInstallIsActive||!this.available&&!e.hasVersionFail){return false}if(!this.hasVersion(e.hasVersion||1)){this.expressInstallIsActive=true;if(typeof e.hasVersionFail=="function"){if(!e.hasVersionFail.apply(e)){return false}}e={swf:e.expressInstall||this.expressInstall,height:137,width:214,flashvars:{MMredirectURL:location.href,MMplayerType:this.activeX?"ActiveX":"PlugIn",MMdoctitle:document.title.slice(0,47)+" - Flash Player Installation"}}}attrs={data:e.swf,type:"application/x-shockwave-flash",id:e.id||"flash_"+Math.floor(Math.random()*999999999),width:e.width||320,height:e.height||180,style:e.style||""};d=typeof e.useEncode!=="undefined"?e.useEncode:this.encodeParams;e.movie=e.swf;e.wmode=e.wmode||"opaque";delete e.fallback;delete e.hasVersion;delete e.hasVersionFail;delete e.height;delete e.id;delete e.swf;delete e.useEncode;delete e.width;var f=document.createElement("div");f.innerHTML=["<object ",c(attrs),">",b(e),"</object>"].join("");return f.firstChild}};w.fn[u]=function(e){var f=this.find(v).andSelf().filter(v);/string|object/.test(typeof e)&&this.each(function(){var g=w(this),h;e=typeof e==v?e:{swf:e};e.fallback=this;if(h=w[u].create(e)){g.children().remove();g.html(h)}});typeof e=="function"&&f.each(function(){var g=this;g.jsInteractionTimeoutMs=g.jsInteractionTimeoutMs||0;if(g.jsInteractionTimeoutMs<660){g.clientWidth||g.clientHeight?e.call(g):setTimeout(function(){w(g)[u](e)},g.jsInteractionTimeoutMs+66)}});return f}})(jQuery,"flash",navigator.plugins["Shockwave Flash"]||window.ActiveXObject);(function(a){a.fn.slides=function(b){b=a.extend({},a.fn.slides.option,b);return this.each(function(){a("."+b.container,a(this)).children().wrapAll('<div class="slides_control"/>');var z=a(this),n=a(".slides_control",z),C=n.children().size(),u=n.children().outerWidth(),q=n.children().outerHeight(),g=b.start-1,p=b.effect.indexOf(",")<0?b.effect:b.effect.replace(" ","").split(",")[0],e=b.effect.indexOf(",")<0?p:b.effect.replace(" ","").split(",")[1],s=0,r=0,c=0,t=0,x,l,m,B,A,w,o,j;function h(f,d,D){if(!l&&x){l=true;b.animationStart(t+1);switch(f){case"next":r=t;s=t+1;s=C===s?0:s;B=u*2;f=-u*2;t=s;break;case"prev":r=t;s=t-1;s=s===-1?C-1:s;B=0;f=0;t=s;break;case"slider_pagination":s=parseInt(D,10);r=a("."+b.slider_paginationClass+" li.current a",z).attr("href").match("[^#/]+$");if(s>r){B=u*2;f=-u*2}else{B=0;f=0}t=s;break}if(d==="fade"){if(b.crossfade){n.children(":eq("+s+")",z).css({zIndex:10}).fadeIn(b.fadeSpeed,b.fadeEasing,function(){if(b.autoHeight){n.animate({height:n.children(":eq("+s+")",z).outerHeight()},b.autoHeightSpeed,function(){n.children(":eq("+r+")",z).css({display:"none",zIndex:0});n.children(":eq("+s+")",z).css({zIndex:0});b.animationComplete(s+1);l=false})}else{n.children(":eq("+r+")",z).css({display:"none",zIndex:0});n.children(":eq("+s+")",z).css({zIndex:0});b.animationComplete(s+1);l=false}})}else{n.children(":eq("+r+")",z).fadeOut(b.fadeSpeed,b.fadeEasing,function(){if(b.autoHeight){n.animate({height:n.children(":eq("+s+")",z).outerHeight()},b.autoHeightSpeed,function(){n.children(":eq("+s+")",z).fadeIn(b.fadeSpeed,b.fadeEasing)})}else{n.children(":eq("+s+")",z).fadeIn(b.fadeSpeed,b.fadeEasing,function(){if(a.browser.msie){a(this).get(0).style.removeAttribute("filter")}})}b.animationComplete(s+1);l=false})}}else{n.children(":eq("+s+")").css({left:B,display:"block"});if(b.autoHeight){n.animate({left:f,height:n.children(":eq("+s+")").outerHeight()},b.slideSpeed,b.slideEasing,function(){n.css({left:-u});n.children(":eq("+s+")").css({left:u,zIndex:5});n.children(":eq("+r+")").css({left:u,display:"none",zIndex:0});b.animationComplete(s+1);l=false})}else{n.animate({left:f},b.slideSpeed,b.slideEasing,function(){n.css({left:-u});n.children(":eq("+s+")").css({left:u,zIndex:5});n.children(":eq("+r+")").css({left:u,display:"none",zIndex:0});b.animationComplete(s+1);l=false})}}if(b.slider_pagination){a("."+b.slider_paginationClass+" li.current",z).removeClass("current");a("."+b.slider_paginationClass+" li:eq("+s+")",z).addClass("current")}}}function v(){clearInterval(z.data("interval"))}function k(){if(b.pause){clearTimeout(z.data("pause"));clearInterval(z.data("interval"));o=setTimeout(function(){clearTimeout(z.data("pause"));j=setInterval(function(){h("next",p)},b.play);z.data("interval",j)},b.pause);z.data("pause",o)}else{v()}}if(C<2){return}if(g<0){g=0}if(g>C){g=C-1}if(b.start){t=g}if(b.randomize){n.randomize()}a("."+b.container,z).css({overflow:"hidden",position:"relative"});n.children().css({position:"absolute",top:0,left:n.children().outerWidth(),zIndex:0,display:"none"});n.css({position:"relative",width:(u*3),height:q,left:-u});a("."+b.container,z).css({display:"block"});if(b.autoHeight){n.children().css({height:"auto"});n.animate({height:n.children(":eq("+g+")").outerHeight()},b.autoHeightSpeed)}if(b.preload&&n.find("img").length){a("."+b.container,z).css({background:"url("+b.preloadImage+") no-repeat 50% 50%"});var y=n.find("img:eq("+g+")").attr("src")+"?"+(new Date()).getTime();if(a("img",z).parent().attr("class")!="slides_control"){w=n.children(":eq(0)")[0].tagName.toLowerCase()}else{w=n.find("img:eq("+g+")")}n.find("img:eq("+g+")").attr("src",y).load(function(){n.find(w+":eq("+g+")").fadeIn(b.fadeSpeed,b.fadeEasing,function(){a(this).css({zIndex:5});a("."+b.container,z).css({background:""});x=true;b.slidesLoaded()})})}else{n.children(":eq("+g+")").fadeIn(b.fadeSpeed,b.fadeEasing,function(){x=true;b.slidesLoaded()})}if(b.bigTarget){n.children().css({cursor:"pointer"});n.children().click(function(){h("next",p);return false})}if(b.hoverPause&&b.play){n.bind("mouseover",function(){v()});n.bind("mouseleave",function(){k()})}if(b.generateNextPrev){a("."+b.container,z).after('<a href="#" class="'+b.prev+'">Prev</a>');a("."+b.prev,z).after('<a href="#" class="'+b.next+'">Next</a>')}a("."+b.next,z).click(function(d){d.preventDefault();if(b.play){k()}h("next",p)});a("."+b.prev,z).click(function(d){d.preventDefault();if(b.play){k()}h("prev",p)});if(b.generateslider_pagination){z.append("<ul class="+b.slider_paginationClass+"></ul>");n.children().each(function(){a("."+b.slider_paginationClass,z).append('<li><a href="#'+c+'">'+(c+1)+"</a></li>");c++})}else{a("."+b.slider_paginationClass+" li a",z).each(function(){a(this).attr("href","#"+c);c++})}a("."+b.slider_paginationClass+" li:eq("+g+")",z).addClass("current");a("."+b.slider_paginationClass+" li a",z).click(function(){if(b.play){k()}m=a(this).attr("href").match("[^#/]+$");if(t!=m){h("slider_pagination",e,m)}return false});a("a.link",z).click(function(){if(b.play){k()}m=a(this).attr("href").match("[^#/]+$")-1;if(t!=m){h("slider_pagination",e,m)}return false});if(b.play){j=setInterval(function(){h("next",p)},b.play);z.data("interval",j)}})};a.fn.slides.option={preload:false,preloadImage:"/img/loading.gif",container:"slides_container",generateNextPrev:false,next:"next",prev:"prev",slider_pagination:true,generateslider_pagination:true,slider_paginationClass:"slider_pagination",fadeSpeed:350,fadeEasing:"",slideSpeed:900,slideEasing:"",start:1,effect:"slide",crossfade:false,randomize:false,play:0,pause:0,hoverPause:false,autoHeight:false,autoHeightSpeed:350,bigTarget:false,animationStart:function(){},animationComplete:function(){},slidesLoaded:function(){}};a.fn.randomize=function(d){function b(){return(Math.round(Math.random())-0.5)}return(a(this).each(function(){var g=a(this);var f=g.children();var e=f.length;if(e>1){f.hide();var c=[];for(i=0;i<e;i++){c[c.length]=i}c=c.sort(b);a.each(c,function(l,h){var n=f.eq(h);var m=n.clone(true);m.show().appendTo(g);if(d!==undefined){d(n,m)}n.remove()})}}))}})(jQuery);jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,m,l){var j=1.70158;var k=0;var g=m;if(h==0){return e}if((h/=l)==1){return e+m}if(!k){k=l*0.3}if(g<Math.abs(m)){g=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*l-j)*(2*Math.PI)/k))+e},easeOutElastic:function(f,h,e,m,l){var j=1.70158;var k=0;var g=m;if(h==0){return e}if((h/=l)==1){return e+m}if(!k){k=l*0.3}if(g<Math.abs(m)){g=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/g)}return g*Math.pow(2,-10*h)*Math.sin((h*l-j)*(2*Math.PI)/k)+m+e},easeInOutElastic:function(f,h,e,m,l){var j=1.70158;var k=0;var g=m;if(h==0){return e}if((h/=l/2)==2){return e+m}if(!k){k=l*(0.3*1.5)}if(g<Math.abs(m)){g=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*l-j)*(2*Math.PI)/k))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*l-j)*(2*Math.PI)/k)*0.5+m+e},easeInBack:function(e,f,a,j,h,g){if(g==undefined){g=1.70158}return j*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,j,h,g){if(g==undefined){g=1.70158}return j*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,j,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return j/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return j/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});