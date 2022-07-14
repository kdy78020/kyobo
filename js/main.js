$(document).ready(function () {
    $(".btn-open button").on("click", function () {
        $("nav").stop().animate({
            "left": 0
        }, 250);
    });
    $(".btn-close").on("click", function () {
        $("nav").stop().animate({
            "left": "-100%"
        }, 250, function () {
            $("nav .gnb").css("left", 0);
        });
    });
    
    $("nav .gnb-depth-1 li a").on("click", function (e) {
        e.preventDefault();
        var i = $(this).parent().index();
        var winWidth = $(window).width();

        if (winWidth < 1200) {
            $("nav .gnb").stop().animate({
                "left": "-100%"
            }, 200);
        }

        $(this).addClass("on");
        $(this).parent().siblings().find("a").removeClass("on");
        $("nav .gnb .gnb-depth-2 ul").eq(i).show().siblings().hide();
        $("nav .gnb .gnb-depth-3 ul").hide();
    })

    $("nav .gnb-depth-2 li.sub-category a").on("click", function (e) {
        e.preventDefault();
        var dataIdx = $(this).parent().attr("data-subcategory-index");
        var winWidth = $(window).width();

        if (winWidth < 1200) {
            $("nav .gnb").stop().animate({
                "left": "-200%"
            }, 200);
        }
        $("nav .gnb .gnb-depth-3 ul").eq(dataIdx).show().siblings().hide();
        $(this).addClass("on");
        $(this).parent().siblings().find("a").removeClass("on");
    });

    var swiperMainVisual = new Swiper(".first", {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        }
    });

    var swiperQuickMenu = new Swiper(".second", {
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            1200: {
                slidesPerView: 6,
                spaceBetween: 30,
            }
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });

    $(".best-news .contents-wrap .title-wrap").find("h3 a").on("click", function (e) {
        e.preventDefault()
        var i = $(this).parent().index()
        $(this).parent().css("color","#000").siblings().css("color","#ccc");
        $(".best-news .contents-wrap .content").children().eq(i).show().siblings().hide()
    })

    var swiperGift = new Swiper(".third .boxes-wrap", {
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        },
    });

    $(".best-new-booknews .tit-tab button").on("click", function() {
        var i = $(this).parent().index();
        $(".content-tab > div").eq(i).show().siblings().hide();
        $(this).addClass("on").parent().siblings().find("button").removeClass("on");
    })
});