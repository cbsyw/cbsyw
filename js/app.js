'use strict'

jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 991) {
        $('.menu').removeClass('active-desktop');
      } else if (ww >= 991) {
        $('.menu').addClass('active-desktop');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });
                      
  var navToggle = document.querySelector(".nav-toggler")
  var menu = document.querySelector(".menu")
  navToggle.addEventListener("click", function() {
      menu.classList.toggle('active')
  })
  
  
  