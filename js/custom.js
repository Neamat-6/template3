/* global $, console, window*/
/* eslint no-console:'off'*/

$(function () {
    'use strict';
    $('.carousel').carousel({
        interval: 3000
    });
    
    //start color-theme//
    var colorLi = $('.theme .gear .color-option ul li');
    colorLi
        .eq(0).css('backgroundColor', '#95355d').end()
        .eq(1).css('backgroundColor', '#357a95').end()
        .eq(2).css('backgroundColor', '#d5ac18').end();
    
    $('.theme .gear i ').click(function () {
        $('.theme .gear .color-option ').toggle();
    });
    
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr('data-value'));
    });
     //end color-theme//
    
    // start arrow-top//
    var arrowTop = $('.arrow-top i');
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            arrowTop.show();
        } else {
            arrowTop.hide();  
        }
    });
    
    arrowTop.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });
     // add class active to nav bar li which hover it//
    $('.navbar-inverse .navbar-nav li').hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
        
    });
   
    
    
    //end arrow-top//
   
    
});


// loading screen//

$(window).on("load", function () {
    'use strict';
     
    $('.loading-overlay .spinner').fadeOut(1000, function () {
        $('body').css("overflow", "auto");
       
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();   // to prevent any one to modify on it when loading so remove it from DOM tree//
            
        });
    });
});

//$(window).on('load', function () {
//    'use strict';
//    $('.loading-overlay .spinner, .loading-overlay').fadeOut(9000);
//});

