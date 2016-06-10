<?php
add_action( 'wp_enqueue_scripts', 'divi_enqueue_styles' );
function divi_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_register_style ( 'fontawesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' );
  	wp_enqueue_style  ( 'fontawesome' );
    wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/js/scripts.js', array('jquery') );
}
?>
