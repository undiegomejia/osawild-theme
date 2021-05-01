<?php 

function _themename_assets(){
    wp_enqueue_style('_themename-stylesheet', get_stylesheet_directory_uri() . '/dist/assets/css/bundle.css', array(),'1.0.0','all');
    wp_enqueue_script('_themename-scripts', get_stylesheet_directory_uri() . '/dist/assets/js/bundle.js', array('jquery'),'1.0.0',true);
}

add_action('wp_enqueue_scripts','_themename_assets', PHP_INT_MAX);

function _themename_admin_assets(){
    wp_enqueue_style('_themename-admin-stylesheet', get_stylesheet_directory_uri() . '/dist/assets/css/admin.css', array(),'1.0.0','all');
    wp_enqueue_script('_themename-admin-scripts', get_stylesheet_directory_uri() . '/dist/assets/js/admin.js', array(),'1.0.0',true);
}

add_action('admin_enqueue_scripts','_themename_admin_assets', PHP_INT_MAX);

?>