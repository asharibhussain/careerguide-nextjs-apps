// utils.js

// export function setupSeeMoreLess(buttonId, contentClass) {
//     $(document).ready(function () {
//         $(`#${buttonId}`).on('click', function () {
//             $(`.${contentClass}`).show('slow');
//             $(`#${buttonId}`).hide('slow');
//         });

//         $(`#${buttonId.replace('Btn', 'LessBtn')}`).on('click', function () {
//             $(`.${contentClass}`).hide('slow');
//             $(`#${buttonId}`).show('slow');
//         });
//     });
// }

// export function setupViewAllLess(viewAllClass, viewAllBtnClass) {
//     $(document).ready(function () {
//         $(`.${viewAllBtnClass}`).on('click', function () {
//             $(`.${viewAllClass}`).show('slow');
//             $(`.${viewAllBtnClass}`).hide('slow');
//         });

//         $(`.${viewAllBtnClass.replace('Benfits', 'BenfitsLess')}`).on('click', function () {
//             $(`.${viewAllClass}`).hide('slow');
//             $(`.${viewAllBtnClass}`).show('slow');
//         });
//     });
// }

// $(document).ready(function () {
//     $('#seeMoreBtn').on('click', function () {
//         $('.seeMore').show('slow');
//         $('#seeMoreBtn').hide('slow');
//     });

//     $('#seeLessBtn').on('click', function () {
//         $('.seeMore').hide('slow');
//         $('#seeMoreBtn').show('slow');
//     });
//     $('#seeMoreBtnOne').on('click', function () {
//         $('.seeMoreOne').show('slow');
//         $('#seeMoreBtnOne').hide('slow');
//     });

//     $('#seeLessBtnOne').on('click', function () {
//         $('.seeMoreOne').hide('slow');
//         $('#seeMoreBtnOne').show('slow');
//     });
//     $('.viewAllBenfits').on('click', function () {
//         $('.viewAll').show('slow');
//         $('.viewAllBenfits').hide('slow');
//     });

//     $('.SeeLessBenfits').on('click', function () {
//         $('.viewAll').hide('slow');
//         $('.viewAllBenfits').show('slow');
//     });
//     $('.viewAllBenfitsOne').on('click', function () {
//         $('.viewAllOne').show('slow');
//         $('.viewAllBenfitsOne').hide('slow');
//     });

//     $('.SeeLessBenfitsOne').on('click', function () {
//         $('.viewAllOne').hide('slow');
//         $('.viewAllBenfitsOne').show('slow');
//     });
    
// });

// export function setupTooltips() {
//     $(function () {
//         $('[data-toggle="tooltip"]').tooltip();
//     });
// }

// Asharib Hussain

// export function setupSeeMoreAndLess() {
//     $(document).ready(function () {
//         // See More/Less Button 1
//         $('#seeMoreBtn').on('click', function () {
//             $('.seeMore').show('slow');
//             $('#seeMoreBtn').hide('slow');
//         });

//         $('#seeLessBtn').on('click', function () {
//             $('.seeMore').hide('slow');
//             $('#seeMoreBtn').show('slow');
//         });

//         // See More/Less Button 2
//         $('#seeMoreBtnOne').on('click', function () {
//             $('.seeMoreOne').show('slow');
//             $('#seeMoreBtnOne').hide('slow');
//         });

//         $('#seeLessBtnOne').on('click', function () {
//             $('.seeMoreOne').hide('slow');
//             $('#seeMoreBtnOne').show('slow');
//         });
//     });
// }

// export function setupViewAllAndLess() {
//     $(document).ready(function () {
//         // View All/Less Button 1
//         $('.viewAllBenfits').on('click', function () {
//             $('.viewAll').show('slow');
//             $('.viewAllBenfits').hide('slow');
//         });

//         $('.SeeLessBenfits').on('click', function () {
//             $('.viewAll').hide('slow');
//             $('.viewAllBenfits').show('slow');
//         });

//         // View All/Less Button 2
//         $('.viewAllBenfitsOne').on('click', function () {
//             $('.viewAllOne').show('slow');
//             $('.viewAllBenfitsOne').hide('slow');
//         });

//         $('.SeeLessBenfitsOne').on('click', function () {
//             $('.viewAllOne').hide('slow');
//             $('.viewAllBenfitsOne').show('slow');
//         });
//     });
// }

// export function setupTooltips() {
//     $(function () {
//         $('[data-toggle="tooltip"]').tooltip();
//     });
// }
// utils.js

export function setupSeeMoreAndLess() {
    $(document).ready(function () {
        // See More/Less Button 1
        $('#seeMoreBtn').on('click', function () {
            $('.seeMore').show('slow');
            $('#seeMoreBtn').hide('slow');
        });

        $('#seeLessBtn').on('click', function () {
            $('.seeMore').hide('slow');
            $('#seeMoreBtn').show('slow');
        });

        // See More/Less Button 2
        $('#seeMoreBtnOne').on('click', function () {
            $('.seeMoreOne').show('slow');
            $('#seeMoreBtnOne').hide('slow');
        });

        $('#seeLessBtnOne').on('click', function () {
            $('.seeMoreOne').hide('slow');
            $('#seeMoreBtnOne').show('slow');
        });
    });
}

export function setupViewAllAndLess() {
    $(document).ready(function () {
        // View All/Less Button 1
        $('.viewAllBenfits').on('click', function () {
            $('.viewAll').show('slow');
            $('.viewAllBenfits').hide('slow');
        });

        $('.SeeLessBenfits').on('click', function () {
            $('.viewAll').hide('slow');
            $('.viewAllBenfits').show('slow');
        });

        // View All/Less Button 2
        $('.viewAllBenfitsOne').on('click', function () {
            $('.viewAllOne').show('slow');
            $('.viewAllBenfitsOne').hide('slow');
        });

        $('.SeeLessBenfitsOne').on('click', function () {
            $('.viewAllOne').hide('slow');
            $('.viewAllBenfitsOne').show('slow');
        });
    });
}

export function setupTooltips() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
}

export function initializeSlickSlider() {
    $('.company_about_slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500
    });
    
}
    
