$(document).on('ready', function () {
    $('.testimonial_slider').slick({
        infinite: true,
        dots: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000
    });
    $('.blog_banner_slider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 3000
    });
    $('.studies_divider_slider').slick({
        vertical: true, // Set the slider to vertical mode
        verticalSwiping: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000
    });
    $('.video_banner_slider').slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000
    });
    $('.company_about_slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500
    });
    $(".selling_slider").slick({
        slidesToShow: 4, // default desktop values
        slidesToScroll: 1,
        rows: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".our_partner_slider").slick({
        slidesToShow: 6, // default desktop values
        // slidesToScroll: 1, 
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 6,
                    // slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".popular_slider").slick({
        slidesToShow: 3, // default desktop values
        slidesToScroll: 1,
        rows: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".arrival_slider").slick({
        slidesToShow: 4, // default desktop values
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.marque-block').slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 10,
        speed: 3000,
        arrows: false,
        cssEase: 'linear',
        autoplay: true,
        // centerPadding: '200px',
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});