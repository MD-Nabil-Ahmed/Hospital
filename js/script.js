$(function () {
    'use strict';

    // fix menu start
    let menuOff = $('#main_menu').offset().top;

    $(window).scroll(function () {

        let scrolling = $(this).scrollTop()

        if (scrolling > menuOff) {
            $('#main_menu').addClass('fix_menu')
        } else {
            $('#main_menu').removeClass('fix_menu')
        }
    });
    // fix menu end




    // back to top button start
    $('#bc_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000)
    });

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $('#bc_top').fadeIn()
        } else {
            $('#bc_top').fadeOut()
        }
    });
    // back to top button end




});