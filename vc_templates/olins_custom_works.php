<?php
/** ############################################################################
 *  ФРОНТЕНД. WpBakery (Visual Composer) - кастомные шорткоды.
 *  вёрстка  - вывод данных
 *
 *  WPBakeryShortCode_Olins_Custom_Works
 *
 ** ########################################################################### */

// ID полей
$args = array(
    'box_title' => '',
    'ids'       => '',
);

// Парсинг из шорткода WpBakery
$atts = vc_map_get_attributes( $this->getShortcode(), $atts );
extract( $atts );

// Вывод на ФРОНТЕНД (по вёрстке)
echo $box_title;
echo '<br>';
print_r($ids);



