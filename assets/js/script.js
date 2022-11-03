/*=========================================

Author: Mike
Version: 1.0
Design and Developed by: Mike

NOTE: This is main stylesheet of the template.

=========================================*/

(function ($) {
"use strict";
 
 /*=============================
        Sticky header
==============================*/

    $(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
      if (scroll < 10) {
        $(".header-top-area").removeClass("sticky");
      }else{
        $(".header-top-area").addClass("sticky");
      }
    });


/*=============================
        Preloader
==============================*/

document.body.onload = function(){
  setTimeout(function(){
    var preloader = document.getElementById('page-preloader');
    if(!preloader.classList.contains('done'))
    {
      preloader.classList.add('done');
    } }, 1000);
}
 
 
$(document).ready(function(){



/*=============================
        WOW.js
==============================*/
new WOW().init();



    $('.skillbar').each(function(){
      $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
      },5000);
    });


/*=============================
        Touch menu
==============================*/
   
    var touch = $('.touch-menu');
    var menu = $('.nav');
    var manu_a = $('.nav li a');
    touch.click(function() {
      menu.toggleClass('nav_active');
    });
    $(manu_a).on('click', function() {
      menu.removeClass('nav_active');
    });
    $('.slider-area , section').on('click', function() {
      menu.removeClass('nav_active');
    });

/*=============================
        Smoothscroll
==============================*/

     $('.nav li a, .main-down').on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });


/*=============================
    Gallery magnific-popup
==============================*/

        $('.test-popup-link').magnificPopup({
          type: 'image',
          gallery:{
          enabled: true
          },
          removalDelay: 300,
          mainClass: 'mfp-fade'
          // other options
        });


/*=============================
 Animated focus contact form   
==============================*/


$('.input').focus(function(){
  $(this).parent().addClass("focus");
}).blur(function(){
  if($(this).val() === ''){
    $(this).parent().removeClass("focus");
  }
});

/*=============================
 Change progres bar position  
==============================*/

if(matchMedia){
  var screen = window.matchMedia("(max-width: 1199px) and (min-width: 767px) ");
  screen.addListener(changes);
  changes(screen);
}
function changes(screen){
if(screen.matches)
{
  $('.media-skill').addClass('row');
}
else{
   $('.media-skill').removeClass('row');
 }
}



});

})(jQuery); 


  