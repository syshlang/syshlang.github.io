// build time:Mon Aug 12 2019 13:38:06 GMT+0800 (GMT+08:00)
$(document).ready(function(){function a(){var a=".post-toc";var t=$(a);var e=".active-current";function s(){$(a+" "+e).removeClass(e.substring(1))}t.on("activate.bs.scrollspy",function(){var e=$(a+" .active").last();s();e.addClass("active-current");t.scrollTop(e.offset().top-t.offset().top+t.scrollTop()-t.height()/2)}).on("clear.bs.scrollspy",s);$("body").scrollspy({target:a})}a()});$(document).ready(function(){var a=200;$(".sidebar-nav li").on("click",function(){var t=$(this);var e="sidebar-nav-active";var s="sidebar-panel-active";if(t.hasClass(e)){return}var o=$("."+s);var i=$("."+t.data("target"));o.animate({opacity:0},a,function(){o.hide();i.stop().css({opacity:0,display:"block"}).animate({opacity:1},a,function(){o.removeClass(s);i.addClass(s)})});t.siblings().removeClass(e);t.addClass(e)});$(".post-toc a").on("click",function(a){a.preventDefault();var t=NexT.utils.escapeSelector(this.getAttribute("href"));var e=$(t).offset().top;$("html, body").stop().animate({scrollTop:e},500)});var t=$(".post-toc-content");var e=CONFIG.page.sidebar;if(typeof e!=="boolean"){var s=CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always";var o=t.length>0&&t.html().trim().length>0;e=s&&o}if(e){CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar()}});
//rebuild by neat 