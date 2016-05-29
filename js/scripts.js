jQuery(document).ready(function($) {

    // Map overlay switch

    $('.contact-map .map-toggle .switch').click(function() {
        $(this).closest('.contact-map').toggleClass('toggle-active');
        $(this).toggleClass('toggle-active');
    });
});
