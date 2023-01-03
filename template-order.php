<?php
/*
  * Template name: Order Template
  * */

get_header();

if(isset($_GET['servicetype'])){
	$post_service_id = $_GET['servicetype'];
} else {
	$post_service_id = '';
}


?>
<section class="site_container">
	<div class="page_heading">
		<h2 class="page_title"><?php the_title(); ?></h2>
	</div>
	<!-- Content -->
	<div class="story order_template cf">

		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

			<div class="top_desription_order">
				<div class="wrapper">
					<?php the_content(); ?>
				</div>
			</div>
			<div class="order_contaner">
				<div class="ordering_form">
					<div class="the_form_container">
						<h3 class="form_service_title">
							<?php echo esc_html_e('For Home','gardener'); ?></h3>

						<form method="post" action="<?php the_permalink();?>">
							<div class="field">
								<input name="contact[name]" type="text" placeholder="<?php esc_html_e('Name','gardener'); ?>" value="<?php echo isset($_POST['contact']['name']) ? $_POST['contact']['name'] : ''?>" required="required" id="contact-form-name" />
							</div>
							<div class="field field_extra cf">
								<input name="contact[phone]" type="text" placeholder="<?php esc_html_e('Phone','gardener'); ?>" value="<?php echo isset($_POST['contact']['phone']) ? $_POST['contact']['phone'] : ''?>" required="required" id="contact-form-phone" />
								<input name="contact[email]" type="email" placeholder="<?php esc_html_e('E-mail','gardener'); ?>" value="<?php echo isset($_POST['contact']['email']) ? $_POST['contact']['email'] : ''?>" required="required" id="contact-form-email" />
							</div>
							<div class="field">
								<input name="contact[address]" type="text" placeholder="<?php esc_html_e('Address','gardener'); ?>" value="<?php echo isset($_POST['contact']['address']) ? $_POST['contact']['address'] : ''?>" required="required" id="contact-form-address" />
							</div>
							<div class="field">
								<input name="contact[area]" type="text" placeholder="<?php esc_html_e('Area','gardener'); ?>" value="<?php echo isset($_POST['contact']['area']) ? $_POST['contact']['area'] : ''?>" required="required" id="contact-form-area" />
							</div>
							<div class="field">
								<input name="contact[date]" type="date" value="<?php echo isset($_POST['contact']['date']) ? $_POST['contact']['date'] : ''?>" required="required" id="contact-form-date" />
							</div>
							<div class="field">
								<textarea name="contact[message]"  placeholder="<?php esc_html_e('Message...','gardener'); ?>" id="contact-form-message" required="required"><?php echo isset($_POST['contact']['message']) ? $_POST['contact']['message'] : ''?></textarea>
							</div>

							<input type="submit" class="submit" value="<?php esc_html_e('Order', 'gardener')?>"/>
							<?php wp_nonce_field() ?>
							<input name="contact[service]" class="label_form_service_title" type="hidden" value=""/>
						</form>
					</div>

				</div>
				<div class="services_pricing">
					<div class="services_list">
						<?php
						$args = array(
							'post_type' => 'services',
							'posts_per_page' => -1
						);

						$services = new WP_Query($args);
						$selected = "";

						if ($services->have_posts()) : while ( $services->have_posts()) : $services->the_post();
							if($post_service_id == get_the_ID()){
								$selected = " selected ";
							} else {
								$selected = "";
							}
							?>
							<div class="service_price_item <?php echo esc_attr($selected); ?>" data-title="<?php echo get_the_title(); ?>">
								<div class="before"></div>
								<div class="left_part">
									<h4 class="service_title"><?php the_title(); ?></h4>
									<?php if(ale_get_meta('service_subtitle')){ ?>
										<span class="subtitle">
											<?php echo esc_attr(ale_get_meta('service_subtitle')); ?>
										</span>
									<?php } ?>
								</div>
								<div class="right_part">
									<?php if(ale_get_meta('service_currency')){ ?>
										<span class="currency font_two"><?php echo esc_attr(ale_get_meta('service_currency')); ?></span><?php } ?><?php if(ale_get_meta('service_price')){ ?><span class="the-price font_two"><?php echo esc_attr(ale_get_meta('service_price')); ?></span>
									<?php } ?>
									<?php if(ale_get_meta('service_price_type')){ ?>
										<span class="type-price font_two"><?php echo esc_attr(ale_get_meta('service_price_type')); ?></span>
									<?php } ?>
								</div>

							</div>

						<?php endwhile; endif; wp_reset_query(); ?>
					</div>

				</div>
			</div>

		<?php endwhile; endif; ?>


	</div>
</section>
<?php get_footer(); ?>