<?php
/*
 * Aspect Color
 * */

/** ############################################################################
 *  Сustomizer WordPress.
 ** ########################################################################### */



function gardener_customize_register( $wp_customize ) {

    // ### СЕКЦИЯ Custom Colors ###
    $wp_customize->add_section('gardener_custom_colors', array(
        'title' => esc_html__('Custom Colors', 'gardener'),
        'priority' => 30,
    ));

    // --- Опция Текстового поля
    $wp_customize->add_setting('gardener_phone', array(
        'default' => '',
        'transport' => 'refresh', // Сохранять через кнопку 'Сохранить', не через Ajax
        'sanitize_callback'	=> 'esc_attr', // функция 'санитизации'
    ));

    // --- Опция Выбора цвета
    $wp_customize->add_setting('gardener_aspect_color', array(
        'default' => '',
        'transport' => 'refresh',
        'sanitize_callback'	=> 'esc_attr',
    ));

    // --- Контрол Выбора цвета
    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'gardener_aspect_color_control', array(
        'label' => esc_html__('Aspect Color', 'gardener'),
        'section' => 'gardener_custom_colors',
        'settings' => 'gardener_aspect_color',
    ) ) );

    // --- Контрол Текстового поля
    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'gardener_phone_control', array(
        'label' => esc_html__('Phone Number', 'gardener'),
        'section' => 'gardener_custom_colors',
        'settings' => 'gardener_phone',
        'type' => 'text' // тип
    ) ) );

}

add_action('customize_register', 'gardener_customize_register');



// Output Customize CSS
// ### Выход на ФРОНТЕНД (в нужном месте) ###
// Пример. Если есть значение, создаём "инлайн" CSS, далее его задают нужным опциям.
function gardener_customize_css() { ?>

    <?php if(get_theme_mod('gardener_aspect_color')){ ?>

    <style type="text/css">

        .container_gree {
            color:<?php echo esc_attr(get_theme_mod('gardener_aspect_color')); ?>
        }

    </style>

    <?php } ?>

<?php }

add_action('wp_head', 'gardener_customize_css');