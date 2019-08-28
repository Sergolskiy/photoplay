var ts;
$(window).on('touchstart', function (e) {
    ts = $(document).scrollTop();
});

var flagScroll = false;
var flagTop = true;


if ($(document).scrollTop() > $(window).height() && $(window).width() > 1200) {
    $('header').addClass('fixed');
    $('body').removeClass('page--hidden');
}


$(window).on('touchmove mousewheel wheel', function (e) {

    let height = this.innerHeight;
    let scroll = this.pageYOffset;
    let scrollDelta = e.originalEvent.deltaY;
    var aboutTop = 0;

    if ($(window).width() < 1200 || $('header').hasClass('only-fixed')) {
        return;
    }

    if (scrollDelta > 0 || this.scrollY + 10 > ts) {


        flagScroll = true;
        setTimeout(function () {
            flagScroll = false;
            $('body').removeClass('page--hidden');
        }, 500);

        $('.full-block').addClass('hide-top');

        $('header').addClass('fixed');


        // }

    } else {
        if (scroll == 0) {
            flagScroll = true;
            setTimeout(function () {
                flagScroll = false;
            }, 500);

            $('.full-block').removeClass('hide-top');
            $('header').removeClass('fixed');
            $('body').addClass('page--hidden');
        }

    }


});


$(document).ready(function () {


    if ($(window).width() > 992) {
        $(".cources-block .col-md-3").mCustomScrollbar();
    } else {
        $(".cources-block .col-md-3").mCustomScrollbar({
            axis: "x"
        });
    }


    var $status = $('.pagingInfo');
    var $slickElement = $('.about__slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html('<span class="slide-count">' + i + '</span>' + '<span class="all-slides">/' + slick.slideCount + '</span>');
    });

    $slickElement.slick({
        autoplay: false
    });
    $('.teachers__slider').slick({
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.full-block__slider').slick({});
    $('.slider-screen').slick({

        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    if ($(window).width() < 700) {
        $('.programs__list').slick({});
        $('.similar-courses__inner').slick({
            slidesToShow: 2,
        });
    }

    if ($(window).width() < 996) {
        $('.about-features__list').slick({});
    }

    $('.about-page-slider__list').slick({
        slidesToShow: 1,
    });

    $('.graduates__list').slick({
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.graduates__works-list').slick({
        slidesToShow: 4,
        draggable: false,
        responsive: [
            {
                breakpoint: 772,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    $('.blog__instagram-slider').slick({
        slidesToShow: 1,
        dots: true,
    });

    $('.slick-next, .slick-prev').on('click', function () {
        setTimeout(function () {
            var bLazy = new Blazy({});
        }, 50);
    });
    $(window).resize(function () {
        var bLazy = new Blazy({
            // options
        });
    });
    var bLazy = new Blazy({
        // options
    });


    var $btn = $('.more');

    $btn.on('click', function () {
        $(this).addClass('load');

        setTimeout(function () {
            $('.more').removeClass('load');
        }, 4000);
    });




    $('.header__menu-btn').click(function () {
        $('.header__menu-wpap').toggleClass('open');
    });


    $('.questions__btn_toggle').click(function () {
        $(this).next().slideToggle();
    });


    $(".to-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    $(window).scroll(function () {
        var buttonToTop = $('.to-top');
        $(window).scrollTop() > 450 ? buttonToTop.addClass('show') : buttonToTop.removeClass('show');
    });

    $('.header__place-toggle').click(function () {
        $(this).closest('.header__place').toggleClass('open');
        $('.header__place-list').slideToggle().toggleClass('open');
    });

    $('.header__place-link').click(function () {
        $('.header__place-toggle').html($(this).html());
        $('.header__place').toggleClass('open');
        $('.header__place-list').slideToggle().toggleClass('open');
    });

    $('.about-us__tabs-item').click(function (e) {
        e.preventDefault();
        $('.about-us__tabs-item').removeClass('about-us__tabs-item--active');
        $(this).addClass('about-us__tabs-item--active');
        $('.about-us__item').removeClass('about-us__item--active');
        $('.about-us__item').eq($(this).index()).addClass('about-us__item--active');

        var bLazy = new Blazy();
    });


    $('.header__menu-button').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('open-menu');
        $(this).find('.menu-trigger').toggleClass('active-7');

    });


    if ($(window).width() > 1200 && $('#parallax-container').length > 0) {
        window.addEventListener('scroll', () => {
            let parent = document.getElementById('parallax-container');
            let children = parent.getElementsByClassName('parallax-div');
            // console.log(children);
            for (let i = 0; i < children.length; i++) {
                if (i == 0) {
                    children[i].style.transform = 'translateY(+' + ((window.pageYOffset - (children[i].offsetHeight * 2)) * 0.2) + 'px)';
                } else {
                    children[i].style.transform = 'scale(1.' + parseInt((((window.pageYOffset) / 3) - 200) / 2) + 50 + ')';
                }
            }
        }, false);

    }

    $('.header__top-right, .popup-search__close').click(function () {
        $('.popup-search').toggleClass('open');
        $('body').toggleClass('open-search');
    });

    $('.timetable__month-main').click(function () {
         $('.timetable__month-other').slideToggle();
         $('.timetable__month-other').toggleClass('open');
    });

    if($('.timetable').length > 0){
        $(document).click(function (e) {

            if($('.timetable__month-other').hasClass('open') && !e.target.closest('.timetable__month')){
                $('.timetable__month-main').click();
            }
        });
    }


    if($('.fixed-transparent').length > 0 && $(window).width() > 1200){
        $(window).scroll(function () {
            if(this.pageYOffset > 0){
                $('header.fixed').removeClass('fixed-transparent');
            } else {
                $('header.fixed').addClass('fixed-transparent');
            }
        });
    }


});
