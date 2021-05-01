<?php
/**
 * Osa Wild Custom Gutenberg Slider
 */
function osawild_slider(){
    add_theme_support('editor-color-pallete',
        array(
            array(
                'name' => 'Orange',
                'slug' => 'orange',
                'color' => '#f39300'
            )
        )
    );
}