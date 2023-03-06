$(document).ready(function () {

    $("#topBannerCarousel").owlCarousel({
        pagination: false,
        loop: true,
        margin: 20,
        nav: false,
        rtl: true,
        autoplay: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000,
        slideSpeed: 10000,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1050: {
                items: 1
            }
        }
    });
    $("#firstcar").owlCarousel({
        pagination: false,
        loop: true,
        margin: 20,
        nav: false,
        rtl: true,
        autoplay: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000,
        slideSpeed: 10000,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            500: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1050: {
                items: 6
            }
        }
    });




    $("#secondCar").owlCarousel({
        pagination: false,
        loop: true,
        margin: 10,
        nav: false,
        rtl: true,
        autoplay: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 2000,
        slideSpeed: 10000,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            500: {
                items: 3
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1050: {
                items: 6
            }
        }
    });

    $("#thirdCar").owlCarousel({
        pagination: false,
        loop: true,
        margin: 10,
        nav: false,
        rtl: true,
        autoplay: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000,
        slideSpeed: 10000,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            500: {
                items: 3
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1050: {
                items: 6
            }
        }
    });
    $("#fourthCar").owlCarousel({
        pagination: false,
        loop: true,
        margin: 10,
        nav: false,
        rtl: true,
        autoplay: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 4000,
        slideSpeed: 10000,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            500: {
                items: 3
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1050: {
                items: 6
            }
        }
    });
    $("#fifthCar").owlCarousel({
        pagination: false,
        loop: true,
        margin: 10,
        nav: false,
        rtl: true,
        autoplay: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 2000,
        slideSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            500: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1050: {
                items: 6
            }
        }
    });
    $("#related").owlCarousel({
        pagination: false,
        loop: true,
        margin: 10,
        nav: false,
        rtl: true,
        autoplay: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 2000,
        slideSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            500: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1050: {
                items: 6
            }
        }
    });
});