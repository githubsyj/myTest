$(function(){var i=$(".swiper-container-c").find(".swiper-slide"),e=$(".t-unit");1==i.length&&i.addClass("swiper-no-swiping");var n,t,o,r=document.location.href,a=r.substring(r.lastIndexOf("#"));a.split(""),o=a.split("-"),n=o.pop()-0,t=o.toString().split("").splice("1").join("")-1;var p=!0;p=1!=i.length;var l=(new Swiper(".photoBox .swiper-container-c",{initialSlide:t,preloadImages:!p,lazyLoading:p,onSlideNextStart:function(i){l++,e.html(n+l)},onSlidePrevStart:function(i){l--,e.html(n+l)}}),$(".photo-c .swiper-wrapper").find(".item"),0);e.html(n),l=0;new Swiper(".photo-b .swiper-container-p",{pagination:".swiper-pagination",slidesPerView:3.5,paginationClickable:!0,freeMode:!0})});