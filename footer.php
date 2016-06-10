<?php if ( 'on' == et_get_option( 'divi_back_to_top', 'false' ) ) : ?>

	<span class="et_pb_scroll_top et-pb-icon"></span>

<?php endif;

if ( ! is_page_template( 'page-template-blank.php' ) ) : ?>

			<footer id="main-footer">
				<?php get_sidebar( 'footer' ); ?>


		<?php
			if ( has_nav_menu( 'footer-menu' ) ) : ?>

				<div id="et-footer-nav">
					<div class="container">
						<?php
							wp_nav_menu( array(
								'theme_location' => 'footer-menu',
								'depth'          => '1',
								'menu_class'     => 'bottom-nav',
								'container'      => '',
								'fallback_cb'    => '',
							) );
						?>
					</div>
				</div> <!-- #et-footer-nav -->

			<?php endif; ?>

				<div id="footer-bottom">
					<div class="container clearfix">
				<?php
					if ( false !== et_get_option( 'show_footer_social_icons', true ) ) {
						get_template_part( 'includes/social_icons', 'footer' );
					}
				?>

						<p id="footer-info"><?php printf( et_get_safe_localization( __( 'Made with %1$s and %2$s from Bandung, Indonesia', 'Divi' ) ), '<span class="fa fa-heart text-danger" aria-hidden="true"></span>', '<span class="fa fa-headphones text-danger" aria-hidden="true"></span>'); ?>
                        <br>&copy; <?php
                                    $fromYear = 2013;
                                    $thisYear = (int)date('Y');
                                    echo $fromYear . (($fromYear != $thisYear) ? '-' . $thisYear : '');?>
                        <?php printf( et_get_safe_localization( __( ' PT. Pawitra Media Nuswantara' ) ), '<span class="fa fa-heart text-danger" aria-hidden="true"></span>', '<span class="fa fa-headphones text-danger" aria-hidden="true"></span>'); ?>
                        </p>
					</div>	<!-- .container -->
				</div>
			</footer> <!-- #main-footer -->
		</div> <!-- #et-main-area -->

<?php endif; // ! is_page_template( 'page-template-blank.php' ) ?>

	</div> <!-- #page-container -->

	<?php wp_footer(); ?>
</body>
</html>
