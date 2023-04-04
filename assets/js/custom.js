(function($) {

    /* main-nav slide-bar function */

    $('.nav-hide').click(function() {
        $(".main-nav").addClass('active');
        $("body").addClass('fixed-scroll');
    });
    $('.close').click(function() {
        $(this).parent().parent().parent().removeClass('active');
        $("body").removeClass('fixed-scroll');
    });



    /* features-slider */
    var swiper = new Swiper(".Featuresswiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        centeredSlides: false,
        loop: true,
        slideToClickedSlide: true,
        speed: 1000,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }
    });

    /* video slider */
    var swiper = new Swiper(".galleryswiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        centeredSlides: false,
        loop: true,
        slideToClickedSlide: true,
        speed: 1000,
        navigation: {
            nextEl: ".video-slider-wrap.custom-swiper.next",
            prevEl: ".video-slider-wrap.custom-swiper.prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });

    /* feedback slider */
    var swiper = new Swiper(".feedbackswiper", {
        slidesPerView: 1,
        loop: true,
        autoHeight: true,
        speed: 1000,
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    /* window load + scroll function */
    $(window).on("load scroll", function() {

        /* Sticky Nav */
        var scrollTop = $(window).scrollTop();
        var h = $("header").innerHeight();
        if (scrollTop > 100) {
            $('header').addClass('fixed-nav');
            $('header .row').addClass('header-pd');
            $("body").css("padding-top", h)
        } else {
            $('header').removeClass('fixed-nav');
            $('header .row').removeClass('header-pd');
            $("body").css("padding-top", "0")
        }
    })


    jQuery(".scroll-arrow").on('click', function() {
        jQuery(window).scrollTop(550)
    })

})(jQuery);

(function($) {
    $('.team-box .team-detail .img-box > img').on('click', function(e) {
        e.preventDefault();
        var modalID = $(this).parent(".img-box").parent(".team-detail").attr('data-id');
        console.log("modalID")
        $(`.custom-model-main`).removeClass('model-open');
        $(`.custom-model-main#${modalID}`).toggleClass('model-open');
    });
    $('.team-box .team-detail .heading-text').on('click', function(e) {
        e.preventDefault();
        var modalID = $(this).parent(".team-detail").attr('data-id');
        $(`.custom-model-main`).removeClass('model-open');
        $(`.custom-model-main#${modalID}`).toggleClass('model-open');
    });
})(jQuery);