<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 *
 * @package _themename 
 */
?>
			</div>
			<footer id="footer-wild">
				<div class="container">
					<div class="row footer-holder">
						  <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer_widget') ) : endif; ?>
					</div>		
					<!-- social wrap -->
				 <?php 
					if( '' != get_theme_mod( 'footer_social_onoff', 'on' ) ) :
						echo '<ul class="social-wrap">';
						if( '' != get_theme_mod( 'footer_facebook_url' ) ) {
							echo '<li><a href="'.get_theme_mod( 'footer_facebook_url' ).'"><span class="icon-facebook"></span><strong class="txt">'.__("Like us", "_themename").'</strong></a></li>';
						}
						if( '' != get_theme_mod( 'footer_twitter_url' ) ) {
							echo '<li><a href="'.get_theme_mod( 'footer_twitter_url' ).'"><span class="icon-twitter"></span><strong class="txt">'.__("Follow On", "_themename").'</strong></a></li>';
						}		  
						if( '' != get_theme_mod( 'footer_gplus_url' ) ) {
							echo '<li><a href="'.get_theme_mod( 'footer_gplus_url' ).'"><span class="icon-google-plus"></span><strong class="txt">+'.__("1 On Google", "_themename").'</strong></a></li>';
						}		  
						if( '' != get_theme_mod( 'footer_vimeo_url' ) ) {
							echo '<li><a href="'.get_theme_mod( 'footer_vimeo_url' ).'"><span class="icon-vimeo"></span><strong class="txt">'.__("Share At", "_themename").'</strong></a></li>';
						}		  
						if( '' != get_theme_mod( 'footer_pinterest_url' ) ) {
							echo '<li><a href="'.get_theme_mod( 'footer_pinterest_url' ).'"><span class="icon-pin"></span><strong class="txt">'.__("Pin It", "_themename").'</strong></a></li>';
						}			
						if( '' != get_theme_mod( 'footer_dribble_url' ) ) {
							echo '<li><a href="'.get_theme_mod( 'footer_dribble_url' ).'"><span class="icon-dribble"></span><strong class="txt">'.__("Like us", "_themename").'</strong></a></li>';
						}
						echo '</ul>';
					endif; ?>		
				</div>
			<?php
				$bottom_footer_class = '';
				$bottom_footer = get_theme_mod( 'footer_bottom_onoff', 'yes' );
				if( empty( $bottom_footer ) ){
					$bottom_footer_class = 'hide';
				} ?>
				<div class="footer-bottom <?php echo $bottom_footer_class; ?>">
					<div class="container">
						<div class="row">
							<div class="col-lg-12">
								<!-- copyright -->
								<strong class="copyright"><i class="fa fa-copyright"></i> <span class="copyright_text">
								<?php echo get_theme_mod( "copyright_text", "Copyright 2021 - _themename - An Adventure Theme - by Waituk" ); ?>
								</span></strong>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
		<!-- scroll to top -->
		<div class="scroll-holder text-center">
			<a href="javascript:" id="scroll-to-top"><i class="icon-arrow-down"></i></a>
		</div>
		<div id='fb-root'></div>
		<?php wp_footer();?>
	</body>
</html>