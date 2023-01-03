<?php get_header(); ?>

<?php
$current = get_query_var( 'projects-category' ); ?>
	<section class="site_container page_projects_archive">
		<div class="page_heading">
			<h2 class="page_title"><?php echo single_term_title() ?></h2>
		</div>
		<div class="blog_cats">
			<div class="wrapper">
				<ul class="categories font_two">
					<li><a href="<?php  echo home_url("/projects")?>"><?php echo esc_html_e('All','gardener'); ?></a></li>
					<?php
					$categories = get_terms( array(
						'taxonomy' => 'projects-category',
						'hide_empty' => true,
						'orderby' => 'name',
						'order'   => 'ASC'
					) );

					foreach( $categories as $category ) {
						if($category->slug ==  $current) {
							$active = ' class="current_item" ';
						} else {
							$active = '';
						}

						$category_link = sprintf(
							'<li %4$s><a href="%1$s" alt="%2$s">%3$s</a></li>',
							esc_url( get_category_link( $category->term_id ) ),
							esc_attr( $category->name),
							esc_html( $category->name ),
							$active
						);
						echo ale_wp_kses($category_link);
					}
					?>
				</ul>
			</div>
		</div>
		<!-- Content -->
		<div class="story projects_list cf">
			<div class="projects_grid_container cf">
				<div class="grid_projects">
					<div class="grid-sizer"></div>
					<div class="gutter-sizer"></div>

					<?php
					$i = 0;
					if (have_posts()) : while (have_posts()) : the_post(); $i++;


						if($i == 1){?>
							<div <?php post_class('grid-projects-item'); ?> id="post-<?php the_ID()?>" data-post-id="<?php the_ID()?>">
								<a href="<?php the_permalink(); ?>"><?php
									echo get_the_post_thumbnail(get_the_ID(), 'projects-img1');
									?>
									<span class="hover_icon"></span>
								</a>
							</div>
						<?php } else if($i == 2) { ?>
							<div <?php post_class('grid-projects-item grid-projects-item-two'); ?> id="post-<?php the_ID()?>" data-post-id="<?php the_ID()?>">
								<a href="<?php the_permalink(); ?>"><?php
									echo get_the_post_thumbnail(get_the_ID(), 'projects-img2');
									?>
									<span class="hover_icon"></span>
								</a>

							</div>
						<?php } else if($i == 3) { ?>
							<div <?php post_class('grid-projects-item'); ?> id="post-<?php the_ID()?>" data-post-id="<?php the_ID()?>">
								<a href="<?php the_permalink(); ?>"><?php
									echo get_the_post_thumbnail(get_the_ID(), 'projects-img3');
									?>
									<span class="hover_icon"></span>
								</a>
							</div>
						<?php } else if($i == 4) { ?>
							<article <?php post_class('grid-projects-item'); ?> id="post-<?php the_ID()?>" data-post-id="<?php the_ID()?>">
								<a href="<?php the_permalink(); ?>"><?php
									echo get_the_post_thumbnail(get_the_ID(), 'projects-img4');
									?>
									<span class="hover_icon"></span>
								</a>
							</div>
						<?php } else if($i == 5) { ?>
							<div <?php post_class('grid-projects-item'); ?> id="post-<?php the_ID()?>" data-post-id="<?php the_ID()?>">
								<a href="<?php the_permalink(); ?>"><?php
									echo get_the_post_thumbnail(get_the_ID(), 'projects-img5');
									?>
									<span class="hover_icon"></span>
								</a>
							</div>
						<?php } else if($i == 6) { ?>
							<div <?php post_class('grid-projects-item'); ?> id="post-<?php the_ID()?>" data-post-id="<?php the_ID()?>">
								<a href="<?php the_permalink(); ?>"><?php
									echo get_the_post_thumbnail(get_the_ID(), 'projects-img6');
									?>
									<span class="hover_icon"></span>
								</a>
							</div>
						<?php } else if($i == 7) {?>
							<div <?php post_class('grid-projects-item'); ?> id="post-<?php the_ID()?>" data-post-id="<?php the_ID()?>">
								<a href="<?php the_permalink(); ?>"><?php
									echo get_the_post_thumbnail(get_the_ID(), 'projects-img7');
									?>
									<span class="hover_icon"></span>
								</a>
							</div>
						<?php } else if($i == 8) {?>

							<div <?php post_class('grid-projects-item grid-projects-item-two'); ?> id="post-<?php the_ID()?>" data-post-id="<?php the_ID()?>">
								<a href="<?php the_permalink(); ?>"><?php
									echo get_the_post_thumbnail(get_the_ID(), 'projects-img10');
									?>
									<span class="hover_icon"></span>
								</a>
							</div>
						<?php } else if($i == 9) {?>
							<div <?php post_class('grid-projects-item'); ?> id="post-<?php the_ID()?>" data-post-id="<?php the_ID()?>">
								<a href="<?php the_permalink(); ?>"><?php
									echo get_the_post_thumbnail(get_the_ID(), 'projects-img9');
									?>
									<span class="hover_icon"></span>
								</a>
							</div>
						<?php } else if($i == 10) {?>
							<div <?php post_class('grid-projects-item'); ?> id="post-<?php the_ID()?>" data-post-id="<?php the_ID()?>">
								<a href="<?php the_permalink(); ?>"><?php
									echo get_the_post_thumbnail(get_the_ID(), 'projects-img8');
									?>
									<span class="hover_icon"></span>
								</a>
							</div>
						<?php } ?>





					<?php endwhile; else: ?>
						<?php get_template_part('partials/notfound')?>
					<?php endif; ?>
				</div>
			</div>

			<?php get_template_part('partials/pagination'); ?>
		</div>
	</section>
<?php get_footer(); ?>