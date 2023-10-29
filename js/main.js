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
// search 
$('.search-butt-om').on("click", function (e) {
    e.preventDefault();
    $(".search-st-abaya").toggleClass('active');
    $(this).toggleClass('colse-act-om');
});

// $('.colse-act-om').on("click" , function(e){
//     e.preventDefault();
    
// });

// overlay
$('.overlay-om , header nav .close-xs').on("click", function (e) {
    $(".search-om-form").removeClass("active");
    $(".overlay-om").removeClass("active");
    $(".search-st-omcot .close-om").removeClass("active");
    $('body').css('overflow', 'auto');
    $(".nav-xs-om").removeClass("active");
});

$(document).ready(function(){

  $('.slider-head').owlCarousel({
    autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    margin:25,
    items: 1,
    dots:true,
    navText: ['<i class="las la-arrow-right"></i>','<i class="las la-arrow-left"></i>'],

});
  $('.owl-select').owlCarousel({
    autoplay: true,
    rtl: true,
    margin:25,
    loop:true,
    nav: true,
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        767: {
            items: 2
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
    },
    navText: ['<i class="las la-arrow-right"></i>','<i class="las la-arrow-left"></i>'],

});
  $('.owl-arrived').owlCarousel({
    autoplay: true,
    rtl: true,
    margin:25,
    loop:true,
    nav: true,
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        767: {
            items: 2
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
    },
    navText: ['<i class="las la-arrow-right"></i>','<i class="las la-arrow-left"></i>'],

});
  $('.owl-products-home').owlCarousel({
    autoplay: true,
    rtl: true,
    margin:25,
    loop:true,
    nav: true,
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        767: {
            items: 2
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
    },
    navText: ['<i class="las la-arrow-right"></i>','<i class="las la-arrow-left"></i>'],

});
  $('.owl-related-book').owlCarousel({
    autoplay: true,
    rtl: true,
    margin:25,
    loop:true,
    nav: true,
    dots:true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        767: {
            items: 2
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
    },
    navText: ['<i class="las la-arrow-right"></i>','<i class="las la-arrow-left"></i>'],

});
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
$("h5[data-toggle='collapse']").on('click', function() {
  $(this).parent().children('.collapse').collapse('toggle');
  $(this).parent().parent().siblings().find('.collapse.in').collapse('hide');
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
  $(".advanced-search-btn").click(function () {
    $(".advanced-input").slideToggle("300");
  });
  $(".title").click(function () {
    $(".demo").slideToggle("300");
  });
  $('#contactForm button.close').on('click ', function(event) {
    $('#contactForm').fadeOut();
    $('.contact-over').fadeOut();
});
if ($(window).width() <= 425){ 
    $(".wow").removeClass("wow");
    }
    

    $('.formBtn').click(function(){
        $("#contactForm button.close").trigger('click');
    });