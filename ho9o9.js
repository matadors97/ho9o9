function navigationResize(){$("#nav li.more").before($("#overflow > li"));var t,e=$("#nav > li.more"),o=$("#nav > li:not(.more)"),i=navItemWidth=e.width(),n=$(window).width();for(o.each(function(){navItemWidth+=$(this).width()}),navItemWidth>n?e.show():e.hide();navItemWidth>n;)navItemWidth-=o.last().width(),o.last().prependTo("#overflow"),o.splice(-1,1);t=$("#nav .more").offset().left+i-$("#overflow").width(),$("#overflow").css({left:t})}function showOverflow(){document.getElementById("overflow").classList.toggle("show")}window.onresize=navigationResize,navigationResize(),window.onclick=function(t){if(!t.target.matches(".btnmore")){var e,o=document.getElementsByClassName("dropdown-content");for(e=0;e<o.length;e++){var i=o[e];i.classList.contains("show")&&i.classList.remove("show")}}},$(document).ready(function(){$("#dontedit").html('<a href="https://days-100.blogspot.com" rel="dofollow" target="_blank" style="visibility:visible!important;opacity:1!important;position:relative!important">تعريب : 100 يوم</a>'),setInterval(function(){$("#dontedit:visible").length||(window.location.href="https://days-100.blogspot.com")},3e3)}),$('a[href="undefined"]').hide(),jQuery(document).ready(function(t){t("#owl-demo").owlCarousel({autoPlay:3e3,navigation:!1,autoHeight:!0,items:2,itemsDesktop:[1199,3],itemsDesktopSmall:[980,2],itemsTablet:[768,2],itemsTabletSmall:[568,1],itemsMobile:[479,1]})}),$(function(){$(window).scroll(function(){$(this).scrollTop()>600?$(".back-totop").addClass("arlniain"):$(".back-totop").removeClass("arlniain")}),$(".back-totop").click(function(){return $("html,body").animate({scrollTop:0},800),!1})});var posterTitle=function(t){$(t).each(function(){var t=(110-$(this).outerHeight())/2;$(this).css("margin-top",t)})},newerLink=$("a.blog-pager-newer-link").attr("href"),olderLink=$("a.blog-pager-older-link").attr("href");$.get(newerLink,function(t){$(".post-level .next").prepend('<a href="'+newerLink+'"><i class="fa fa-chevron-right"></i><div class="overlay-next"><div class="img" style="background-image:url('+$(t).find(".post-body img:first").attr("src")+')"/></div><h3>'+$(t).find(".post-outer .post-title").text()+"</h3></a>"),posterTitle(".post-level h3")},"html"),$.get(olderLink,function(t){$(".post-level .prev").append('<a href="'+olderLink+'"><i class="fa fa-chevron-left"></i><div class="overlay-prev"><div class="img" style="background-image:url('+$(t).find(".post-body img:first").attr("src")+')"/></div><h3>'+$(t).find(".post-outer .post-title").text()+"</h3></a>"),posterTitle(".post-level h3")},"html");var removePager=function(t,e){0===$(t).length&&$(e).remove()};$(".search-button a").click(function(){return $(".search-box-overlay").addClass("search-box-overlay-show"),!1}),$(".search-box-close").click(function(){return $(".search-box-overlay").removeClass("search-box-overlay-show"),!1}),$(document).click(function(t){return $(t.target).closest(".search-box-wrapper").length>0||void $(".search-box-overlay").removeClass("search-box-overlay-show")}),$("ul li").hover(function(){var t=$(this).attr("class");$(".drop-icon i").attr("class",t)},function(){$(".drop-icon i").attr("class","fa fa-home")}),$(document).ready(function(){var t=$("#sandwich"),e=$(".menu");$(t).on("click",function(t){t.preventDefault(),e.slideToggle()}),$(window).resize(function(){$(window).width()>267&&e.is(":hidden")&&e.removeAttr("style")})}),$(function(){$(".burger").on("click",function(t){t.preventDefault(),$(this).toggleClass("is-active")})}),$(document).ready(function(){$("#comments").find("img").each(function(t,e){(e=$(e)).attr({src:e.attr("src").replace(/s\B\d{2,4}/,"s740")}),e.attr("width",740),e.attr("height",740)})});
