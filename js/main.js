$(window).on("load", function () {
  $(".preloader").fadeOut("500", function () {
    $(this).remove();
    $("body").removeClass("overflow");
  });


});
 // Sidemenu 

 $("#nav-icon").click( function() {
  $('#nav-icon').toggleClass('nav-icon_open');
  $('.sidenav').toggleClass('open');
  $(this).toggleClass('open');   
  $('body').toggleClass('ovh');
});
$("#openNav").click( function() {

     
});

$(".closebtn,.overlay").click( function() {
  $('.sidenav').removeClass('open');
  $('.overlay').fadeOut();
  $('body').removeClass('ovh');
});

// overlay
$('.overlay-om , header nav .close-xs').on("click", function (e) {
    $(".search-om-form").removeClass("active");
    $(".overlay-om").removeClass("active");
    $('body').css('overflow', 'auto');
    $(".nav-xs-om").removeClass("active");
});
$('.content-slider').owlCarousel({
  autoplay: true,
  rtl: true,
  loop: true,
  dots:true,
  nav: false,
  items: 1,
 
});
$('.partner_slider').owlCarousel({
  items:5,
  autoplay:true,
  rtl:true,
  loop: true,
  margin:18,
  nav:false,
     
  responsive:{
    0:{
      items:1
    },
    425:{
      items:2
    },
    768:{
      items:3
    },
    991:{
      items:4
    },
    1199:{
      items:4
    },
    1200:{
      items:5
    }
  }
}); 
$('.side-news').owlCarousel({
  autoplay: true,
  rtl: true,
  margin:15,
  loop:true,
  nav: false,
  dots:false,
  navText: ["<i class='fas fa-chevron-right'></i>","<i class='fas fa-chevron-left'></i>"],
  responsive: {
      0: {
          items: 1
      },
      480: {
          items: 2
      },
      767: {
          items: 3
      },
      991: {
          items: 3   
      },
      1199: {
          items: 4
      },
      1200: {
          items: 4
      }
  }
});
$('.services-slider').owlCarousel({
  items:4,
  autoplay:true,
  rtl:true,
  loop: true,
  margin:18,
  nav:false,
  dots:true,
  responsive:{
    0:{
      items:1
    },
    425:{
      items:2
    },
    768:{
      items:3
    },
    991:{
      items:3
    },
    1199:{
      items:4
    },
    1200:{
      items:4
    }
  }
}); 
//Special offers slider Transparency functions
function transp() {
  var xx = $('.gallerys .owl-item.active');
  xx.first().find('.part-item').addClass('transp');
  xx.last().find('.part-item').addClass('transp');
}

function untransp() {
  $('.gallerys .owl-item').each(function () {
      $(this).find('.part-item').removeClass('transp');
  });
}

function transplg() {
  var xx = $('.gallerys .owl-item.active');
  xx.first().find('.part-item').addClass('transp');
  xx.last().find('.part-item').addClass('transp');
}

$(".gallerys .owl-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  nav: false,
  dots: false,
  margin: 10,
 
  center: true,
  rtl: true,
  responsive: {
      0: {
          items: 1,
          dots: true
      },
      480: {
          items: 3,
          dots: true
      },
      768: {
          items: 4,
          dots: true
      },
      991: {
          items: 4,
          center: true,
          onInitialized: transp,
          onTranslate: untransp,
          onTranslated: transp,
          onDragged: untransp
      },
      1199: {
          items: 6,
          onInitialized: transp,
          onTranslate: untransp,
          onTranslated: transp,
          onDragged: untransp
      },
      1400: {
          items: 8,
          onInitialized: transplg,
          onTranslate: untransp,
          onTranslated: transplg,
          onDragged: untransp
      }
  }
});
   $('.testimonials_slider').owlCarousel({
  
  autoplay:false,
  rtl:true,
  loop: true,
  margin:18,
  nav:false,
     dots:true,
  responsive:{
    0:{
      items:1
    },
    768:{
      items:2
    },
    991:{
      items:2
    },
    1199:{
      items:3
    },
    1200:{
      items:3
    }
  }
}); 
$('.faq-title').click(function () {
  $(".faq-title").not(this).removeClass("active");
  $(this).toggleClass("active");
  if ($(this).siblings().css('display') == 'none') {
      $(this).siblings().slideDown(500);
  } else {
      $(this).siblings().slideUp(500);
  }
  $(".faq-title").not(this).siblings().slideUp(500);
})
$(document).ready(function(){
var a = 0;
$(window).scroll(function() {

    var oTop = $('.statistics-number,header').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.number').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                       {

                duration: 1000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });
        });
        a = 1;
    }

});


$(".down[data-toggle='collapse']").on('click', function() {
  $(this).parent().children('.collapse').collapse('toggle');
  $(this).parent().siblings().find('.collapse.in').collapse('hide');
});
$(".title[data-toggle='collapse']").on('click', function() {
    $(this).parent().children('.collapse').collapse('toggle');
    $(this).parent().siblings().find('.collapse.in').collapse('hide');
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    $('.top').addClass('fixedheader');
  } else {
    $('.top').removeClass('fixedheader');
  }
}

});
$(function() {
        
  // contact form animations 
  $('#contact').click(function() {
  $('#contactForm').fadeIn();
  $('.contact-over').fadeIn();
  
  })
  $(document).mouseup(function (e) {
  var container = $("#contactForm");

  if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
  {
      container.fadeOut();
      $('.contact-over').fadeOut();
  }
  });
  
});

$('#contactForm button.close').on('click ', function(event) {
  $('#contactForm').fadeOut();
  $('.contact-over').fadeOut();
});

if ($(window).width() <= 480){ 
    $(".wow").removeClass("wow");
    }
