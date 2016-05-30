<?php
add_action( 'wp_enqueue_scripts', 'divi_enqueue_styles' );
function divi_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_register_style( 'glyphicons', get_stylesheet_directory_uri() . '/css/glyphicons.css' );
    wp_enqueue_style('glyphicons');
    wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/js/scripts.js' );

}

add_action ( 'et_header_top', 'divi_child_preloader' );
function divi_child_preloader() {
    ?>
    <div class="preloader">
        <div class="spinner">
            <div class="pre-bounce1"></div>
            <div class="pre-bounce2"></div>
        </div>
    </div>
    <?php
}

?>
