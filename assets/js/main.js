jQuery('#home-slider').slick({
    dots: true,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
jQuery('#solution-services').slick({
    dots: true,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
});
$(document).ready(function() {
    $(".togglebtn button").click(function() {
        $(".toggleContent").slideToggle();
        $(".togglebtn button").toggleClass("rotate");
    });
});


jQuery('.logo-sliderShow').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$(document).ready(function() {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        sidenav = $('.sidebar-nav'),
        isClosed = false;
    trigger.click(function() {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            sidenav.removeClass('open');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            sidenav.addClass('open');
            isClosed = true;
        }


    }

    $('[data-toggle="offcanvas"]').click(function() {
        $('#wrapper').toggleClass('toggled');
    });


    $(".services-drop").click(function() {
        $(".service-list").toggle()

    });
    $(".sector-drop").click(function() {
        $(".sector-list").toggle()
    });




});


$("button.hamburger").click(function() {
    $("body").toggleClass("openMainMenu");
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 100) {
        $(".header-area").addClass("fixed");
    } else {
        $('.header-area').removeClass('fixed')
    }
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 100) {
        $(".sidebar-nav").addClass("fixed");
    } else {
        $('.sidebar-nav').removeClass('fixed')
    }
});
// $(document).ready(function(){
//   $('.scroll .scroll-down-dude').on('click',function (e) {
//       e.preventDefault();

//       var target = this.hash;
//       var $target = $(target);

//       $('html, body').stop().animate({
//           'scrollTop': $target.offset().top
//       }, 900, 'swing', function () {
//           window.location.hash = target;
//       });
//   });
// });


// jQuery('.logo-sliderShow').slick({

//   });


if ($('.banner-area').length == 0) {
    $('body').addClass('No_Banner')
} else {
    $('body').addClass('Y_Banner')
}



$('ul.nav.sidebar-nav li.dropdown').click(function() {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    // event.stopPropagation();
});

$('ul.nav.sidebar-nav li.dropdown ul.dropdown-menu').click(function(event) {
    event.stopPropagation();
});

$('ul.nav.sidebar-nav li.dropdown').click(function(event) {
    event.stopPropagation();
});
$('body').click(function(event) {
    $('ul.nav.sidebar-nav li.dropdown').removeClass('active');
});


// $('.header-area #sidebar-wrapper ul.nav').on('click', 'li.dropdown', function(event) {
//   // Check if the clicked element has the 'dropdown' class
//   if ($(event.target).is('li.dropdown')) {
//     // Remove 'active' class from siblings
//     $(this).siblings().removeClass('active');
//     // Toggle 'active' class on the clicked element
//     $(this).toggleClass('active');
//   }
// });

jQuery(function($) {
    var path = window.location.href;
    // because the 'href' property of the DOM element is the absolute path
    $('ul.nav li a').each(function() {
        if (this.href === path) {
            $(this).addClass('active');
        }
    });
});


jQuery('.mainslider_wrap').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

jQuery('.mainslider_wrap2').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});