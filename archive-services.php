<?php get_header(); ?>
<section class="site_container page_services_archive">
	<div class="page_heading services_page_heading">
		<h2 class="page_title"><?php esc_html_e('Services','gardener'); ?></h2>
	</div>
	<div class="story services_list">

		<?php
		$args = array(
			'post_type' => 'services',
			'posts_per_page' => -1,

		);

		$services = new WP_Query($args);
		$icon_image = '';

		if ($services->have_posts()) : while ( $services->have_posts()) : $services->the_post();



			?>

			<div class="service_item" <?php
			if(ale_get_meta('service_bigicon')){ ?>
				style="background-image:url(<?php echo esc_url(ale_get_meta('service_bigicon'));?>); "
			<?php } ?>>
				<div class="service_data">
					<h3 class="service_title"><?php the_title(); ?></h3>
					<div class="content">
						<?php echo ale_limit_excerpt(53); ?>
					</div>
					<div class="details_buttons">
						<a class="service_show_details details font_two venobox_service_popup" data-vbtype="inline" href="#service-popup" data-id="<?php echo get_the_ID(); ?>"><?php echo esc_html_e('Details','gardener'); ?> </a> <i class="fa fa-arrow-right" aria-hidden="true"></i>
						<a href="<?php echo home_url("/order/")."?servicetype=".get_the_ID(); ?>" class="order_form_link font_two"><?php echo esc_html_e('Order','gardener'); ?></a>
					</div>
				</div>

			</div>

		<?php endwhile; endif; wp_reset_query(); ?>
	</div>
</section>
	<div id="service-popup" style="display: none;">
		<div class="sk-three-bounce">
			<div class="sk-child sk-bounce1"></div>
			<div class="sk-child sk-bounce2"></div>
			<div class="sk-child sk-bounce3"></div>
		</div>
	</div>
<?php get_footer(); ?>