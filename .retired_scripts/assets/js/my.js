
// Curser Pointer

// let cursor = document.querySelector(".cursor");
// let cursor2 = document.querySelector(".cursor2");
// let cursorScale = document.querySelectorAll(".cursor-scale");
// let mouseX = 0;
// let mouseY = 0;

// gsap.to({}, 0.016, {
//   repeat: -1,
//   onRepeat: function () {
//     gsap.set(cursor, {
//       css: {
//         left: mouseX,
//         top: mouseY,
//       },
//     });
//     gsap.set(cursor2, {
//       css: {
//         left: mouseX,
//         top: mouseY,
//       },
//     });
//   },
// });

// window.addEventListener("mousemove", (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// });

// cursorScale.forEach((link) => {
//   link.addEventListener("mousemove", () => {
//     cursor.classList.add("grow");
//     if (link.classList.contains("small")) {
//       cursor.classList.remove("grow");
//       cursor.classList.add("grow-small");
//     }
//   });

//   link.addEventListener("mouseleave", () => {
//     cursor.classList.remove("grow");
//     cursor.classList.remove("grow-small");
//   });
// });



// scroll up

let scrollPercentage = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  scrollProgress.style.background = `conic-gradient(#937a4b ${scrollValue}%, #c0c0ff ${scrollValue}%)`;
  progressValue.textContent = `${scrollValue}%`;

  if (pos > 20) {
    scrollProgress.classList.remove("hide");
    scrollProgress.classList.add("show");
  } else {
    scrollProgress.classList.remove("show");
    scrollProgress.classList.add("hide");
  }

  scrollProgress.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

window.onscroll = scrollPercentage;
window.onload = scrollPercentage;

/*======================================
	27. Smooth Scroll
	========================================*/
if ($("#smooth-wrapper").length > 0) {
  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    ignoreMobileResize: true,
    //preventDefault: true,
    smooth: 0.8,
    ease: "Power3.easeOut",
    effects: true,
    onUpdate: (self) => {
      progress = self.progress;
    },
  });
}


    //======< Custom Tab >======
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $(".tab ul.tabs li a").on("click", function (g) {
        var tab = $(this).closest('.tab'),
            index = $(this).closest('li').index();
    
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
    
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
    
        g.preventDefault();
    });


  /*======================================
	05. Data Background
	========================================*/
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});


  	// img hide //
	$(".option").click(function(){
		$(".option").removeClass("active");
		$(this).addClass("active");
		
	 });


       // testimonial Active
       $('.slider-thumb').owlCarousel({
        loop: true,
        autoplay:true,
		    smartSpeed: 1500,
        autoplayTimeout: 2800,
        dots: false,
        nav: false,
        center:true,
        margin: 30,
        navText: ["<i class='bi bi-chevron-left''></i>", "<i class='bi bi-chevron-right''></i>"],
        responsive: {
                320: {
                          items: 1
                      },
                480: {
                          items: 2
                      },
                      600: {
                          items: 2
                      },
                      768: {
                          items: 2
                      },
                      992: {
                          items: 3
                      },
                      1000: {
                          items: 3
                      },
                      1920: {
                          items: 3
                      }
        }
    })  


    