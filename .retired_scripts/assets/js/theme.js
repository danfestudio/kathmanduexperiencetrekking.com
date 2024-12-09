
/*----------theme js-----------------*/

/*====================================
01. Header Search js
02. Mobile Menu js
03. header sticky js
04. Loder js
05. odometer js
06. venobox js
07. magnificPopup Js
08. Swiper Active
09. testi active js
10. testimonial active js
11. accordion js
12. barfiller script js

=====================================*/

(function ($) {
  "use strict";

  //Header Search js
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // Mobile Menu js
  $(".mobile-menu nav").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
    meanMenuOpen: "<span></span> <span></span> <span></span>",
    onePage: false,
  });

  // header sticky js
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });

    // Loder  //
    $(function () {
      $('body').addClass('loaded');
  });



  ///////////////////////////////
  //odometer js

  $(document).ready(function () {
    $(".odometer-wrapper").appear(function () {
      let count = $(this).attr("data-count");
      let odometer = $(this).closest(".odometer-wrapper").find(".odometer");

      setTimeout(function () {
        odometer.html(count);
      }, 500);
    });
  });

  // venobox js
  $(".venobox").venobox({
    numeratio: true,

    infinigall: true,
  });

	//magnificPopup Js
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

  // Swiper Active
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
      },

      1920: {
        slidesPerView: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // mediful-hero-active js
  var slider = new Swiper('.hikey-hero-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
    // autoplay: {
    //   speed: 3500,
    //   delay: 2000,
    // },
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

    // Navigation arrows
    navigation: {
      nextEl: ".hero-next",
      prevEl: ".hero-prev",
    },
	});

  // testi active js
  var slider = new Swiper('.testi-active', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      '1400': {
        slidesPerView: 1,
      },
      '1200': {
        slidesPerView: 1,
      },
      '992': {
        slidesPerView: 1,
      },
      '768': {
        slidesPerView: 1,
      },
      '576': {
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      }
    }
  });

    // testimonial active js
    var slider = new Swiper('.testimonial', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        '1400': {
          slidesPerView: 2,
        },
        '1200': {
          slidesPerView: 1,
        },
        '992': {
          slidesPerView: 1,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        }
      }
    });


  jQuery(document).ready(function ($) {
    "use strict";


    // =======< accordion js >========
    jQuery(document).ready(function ($) {
      "use strict";

      $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
      $(".accordion a").on("click", function (j) {
        let dropDown = $(this).closest("li").find("p");

        $(this).closest(".accordion").find("p").not(dropDown).slideUp();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(this).closest(".accordion").find("a.active").removeClass("active");
          $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
      });
    });

    jQuery(document).ready(function ($) {
      "use strict";

      $(".accordion2 > li:eq(0) a").addClass("active").next().slideDown();
      $(".accordion2 a").on("click", function (j) {
        let dropDown = $(this).closest("li").find("p");

        $(this).closest(".accordion2").find("p").not(dropDown).slideUp();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(this).closest(".accordion2").find("a.active").removeClass("active");
          $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
      });
    });

    //=====< barfiller script js>====
    $("#bar1").barfiller({
      duration: 7000,
    });
    $("#bar2").barfiller({
      duration: 7000,
    });
    $("#bar3").barfiller({
      duration: 7000,
    });
    $("#bar4").barfiller({
      duration: 7000,
    });
    $("#bar5").barfiller({
      duration: 7000,
    });




    
   
  });

  
})(jQuery);

