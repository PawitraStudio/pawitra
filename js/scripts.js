jQuery(document).ready(function($) {

    // Map overlay switch

    $('.contact-map .map-toggle .switch').click(function() {
        $(this).closest('.contact-map').toggleClass('toggle-active');
        $(this).toggleClass('toggle-active');
    });

    $('.preloader').css('opacity', 0);
    setTimeout(function () {
        $('.preloader').hide();
    }, 600);
});
