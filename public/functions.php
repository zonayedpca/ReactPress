<?php
require_once('inc/tgm.php');

// Featured Image
function react_press_post_thumbnail() {
    add_theme_support( 'post-thumbnails' );
}

add_action( 'after_setup_theme', 'react_press_post_thumbnail' );
