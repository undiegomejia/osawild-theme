<?php
/**
 * The header for entrada theme.
 *
 * This is the template that displays all of the <head> section and everything up until content div
 *
 *
 * @package Entrada
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<!-- favion -->
    <?php wp_head(); ?>

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">


  <!--Preconect Third Parties Scripts-->
<link rel="preconnect" href="https://maps.googleapis.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="preconnect" href="https://www.google.com" crossorigin>
<link rel="preconnect" href="https://www.youtube.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

</head>
	<script type="text/javascript">
function downloadJSAtOnload() {
var element = document.createElement("script");
element.src = "/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp";
document.body.appendChild(element);
}
if (window.addEventListener)
window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
</script>

<body <?php body_class(); ?> >

<script>
</script>
	<div class="preloader" id="pageLoad">
		<div class="holder">
			<img style="max-width: 120px; height: auto;" src="/wp-content/uploads/2017/09/HUELLAS.gif" alt="">
		</div>
	</div>
	<!-- main wrapper of the page -->
	<div id="wrapper">
		<div class="page-wrapper">
			<!-- main header of the page -->
        <?php
			$user_ID 			= get_current_user_id();
			$nav_style 			= '';
			$right_nav_style 	= '';
			$header_class 		= '';
			$v_divider 			= 'v-divider';
			$navbar_property 	= get_theme_mod( 'navbar_property', 'white-header' );
			/* header background */
			if( 'dark-header' != $navbar_property ){
				$header_class = $navbar_property." ";
			}

			/* Top Bar Show */
			$navbar_top = get_theme_mod( 'navbar_top' );
			if( !empty( $navbar_top ) ){
				$header_class .= "top-header header-v1";
			}

			/* centralized navigation */
			$navbar = get_theme_mod( 'navbar_style', 'default_navbar' );
			if( 'centered_navbar' == $navbar && empty( $navbar_top ) ){
				$nav_style 			= 'nav-center';
				$right_nav_style 	= 'navbar-right';
				$header_class 	   .= 'header-v2';
				$v_divider 			= '';
			}

			/* Logo */
			$hide_logo = $hide_text = 'hide';
			$logo_src 		= get_theme_mod( 'header_darkbg_logo', get_template_directory_uri().'/img/logos/logo.svg' );
			$gray_logo_src 	= get_theme_mod( 'header_whitebg_logo', get_template_directory_uri().'/img/logos/logo-gray.svg' );
			$logo_option 	= get_theme_mod( 'logo_text_image', 'text' );
			if( "image" == $logo_option ){
				$hide_logo = '';
			}
			else if( "text" == $logo_option ){
				$hide_text = '';
				$hide_logo = 'hide';
			}

			/* Primary menu arguments */
			$defaults = array(
							'theme_location'  => 'primary',
							'menu'            => '',
							'container'       => '',
							'container_class' => '',
							'container_id'    => '',
							'menu_class'      => 'nav navbar-nav '.$nav_style,
							'menu_id'         => '',
							'echo'            => true,
							'fallback_cb'     => 'wp_bootstrap_navwalker::fallback',
							'before'          => '',
							'after'           => '',
							'link_before'     => '',
							'link_after'      => '',
							'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
							'depth'           => 0,
							'walker'          => new wp_bootstrap_navwalker(),
						); ?>
		<header id="header" class="<?php echo $header_class; ?>">
		<?php
			if( empty( $navbar_top ) ){ ?>
				<div class="container-fluid">
				<!-- logo -->
				<div class="logo">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logoanchor">
						<img class="normal <?php echo $hide_logo; ?>" src="<?php echo $logo_src; ?>" alt="<?php echo get_bloginfo( 'name' ); ?>">
						<img class="gray-logo <?php echo $hide_logo; ?>" src="<?php echo $gray_logo_src; ?>" alt="<?php echo get_bloginfo( 'name' ); ?>">
						<span class="header_logo_text <?php echo $hide_text; ?> "><?php echo esc_html( get_theme_mod( 'logo_text', get_bloginfo( 'name' ) ) ); ?></span>
					</a>
				</div>
				<!-- main navigation -->
				<nav class="navbar navbar-default">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle nav-opener" data-toggle="collapse" data-target="#nav">
							<span class="sr-only"><?php _e('Toggle Navigation', 'entrada'); ?></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<!-- main menu items and drop for mobile -->
					<div class="collapse navbar-collapse" id="nav">
						<!-- main navbar -->
					<?php
						if( 'centered_navbar' != $navbar ){
							echo '<div class="nav-right">';
						}
						wp_nav_menu( $defaults ); ?>
							<!-- <ul class="nav navbar-nav <?php echo $right_nav_style; ?>">
								<li class="visible-md visible-lg nav-visible <?php echo $v_divider; ?>"><a href="#" class="search-opener"><span class="icon icon-search"></span></a></li>
							</ul> -->
					<?php
						if( 'centered_navbar' != $navbar ){
							echo '</div>';
						} ?>
					</div>
				</nav>
			</div>
		<?php
			}
			else{ ?>
				<div class="header-top">
					<div class="container">
						<ul class="top-user-panel">
							<?php echo entrada_topbar_login_icon(); ?>
						</ul>
						<ul class="top-right-panel">
                        <?php
							$topbar_phone = get_theme_mod('topbar_phone');
							if( !empty( $topbar_phone ) ){
								$topbar_phone_filtered = preg_replace( '/[^0-9]/', '', $topbar_phone );
								echo '<li><a href="tel:'.$topbar_phone_filtered.'"><span class="icon-tel"></span> <span class="text hidden-xs">'.$topbar_phone.'</span></a></li>';
							} ?>
							<?php echo entrada_cart_info_block(); ?>
							<?php echo entrada_multilang_dropdown(); ?>
						</ul>
					</div>
				</div>
				<div class="header-bottom">
					<div class="container">
						<div class="nav-frame">
							<div class="logo">
								<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logoanchor">
									<img  class="normal <?php echo $hide_logo; ?>" src="<?php echo $logo_src; ?>" alt="<?php echo get_bloginfo( 'name' ); ?>">
									<img  class="gray-logo <?php echo $hide_logo; ?>" src="<?php echo $gray_logo_src; ?>" alt="<?php echo get_bloginfo( 'name' ); ?>">
									<span class="header_logo_text <?php echo $hide_text; ?> "><?php echo esc_html( get_theme_mod( 'logo_text' ) ); ?></span>
								</a>
							</div>
							<nav class="navbar navbar-default">
								<div class="navbar-header">
									<button type="button" class="navbar-toggle nav-opener" data-toggle="collapse" data-target="#nav">
										<span class="sr-only"><?php _e('Toggle Navigation', 'entrada'); ?></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
								</div>
								<!-- main menu items and drop for mobile -->
								<div class="collapse navbar-collapse" id="nav">
									<!-- main navbar -->
									<div class="nav-right">
										<?php wp_nav_menu( $defaults );  ?>
										<ul class="nav navbar-nav <?php echo $right_nav_style; ?>">
											<li class="visible-md visible-lg nav-visible"><a href="#" class="search-opener"><span class="icon icon-search"></span></a></li>
										</ul>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			<?php } ?>
			<!-- search form -->
			<form class="search-form" action="<?php echo home_url( '/find/tours/' ); ?>">
				<fieldset>
					<a href="#" class="search-opener hidden-md hidden-lg">
						<span class="icon-search"></span>
					</a>
					<div class="search-wrap">
						<a href="#" class="search-opener close">
							<span class="icon-cross"></span>
						</a>
						<div class="trip-form trip-form-v2 trip-search-main">
							<div class="trip-form-wrap">
								<div class="holder">
									<label><?php _e('Departing', 'entrada'); ?></label>
									<div class='select-holder'>
										<?php echo entrada_header_dateform_selector('start_date'); ?>
									</div>
								</div>
								<div class="holder">
									<label><?php _e('Returning', 'entrada'); ?></label>
									<div class='select-holder'>
										<?php echo entrada_header_dateform_selector('end_date'); ?>
									</div>
								</div>
								<div class="holder">
									<label><?php _e('Select Region', 'entrada'); ?></label>
									<div class='select-holder'>
										<select class="trip-select trip-select-v2 region" name="destination" id="select-region">
											<option value=""><?php _e('Select Regions', 'entrada'); ?></option>
											<option value=""><?php _e('Any Region', 'entrada'); ?></option>
										<?php
											$destinations = get_terms( 'destination', 'hide_empty=0&parent=0' );
											if ( $destinations ) {
												foreach ( $destinations as $destination ) { ?>
													<option value="<?php echo $destination->slug; ?>"><?php echo $destination->name; ?></option>
										<?php 	}
											} ?>
										</select>
									</div>
								</div>
								<div class="holder">
									<label><?php _e('Select Activity', 'entrada'); ?></label>
									<div class='select-holder'>
										<select class="trip-select trip-select-v2 acitvity" name="product_cat" id="select-activity">
											<option value=""><?php _e('Select Activity', 'entrada'); ?></option>
											<option value=""><?php _e('Any Activity', 'entrada'); ?></option>
										<?php
											$featured_cat_ids = entrada_product_featured_categories('prod_iconbar_cat_val' );
											$prod_cat_args = array(
																'type'         => 'product',
																'taxonomy'     => 'product_cat',
																'hide_empty'   => 0,
																'include'      => $featured_cat_ids
															);
									 		$activities = get_categories($prod_cat_args);
									  		if($activities){
										  		foreach($activities as $activity) { ?>
													<option value="<?php echo $activity->slug; ?>"><?php echo $activity->name; ?></option>
										<?php
											  	}
											} ?>
										</select>
									</div>
								</div>
								<div class="holder">
									<label><?php _e('Price Range', 'entrada'); ?></label>
									<div class='select-holder'>
										<select class="trip-select trip-select-v2 price" name="price_range" id="price-range">
											<option value=""><?php _e('Select Price Range', 'entrada'); ?></option>
											<option value=""><?php _e('Any Price Range', 'entrada'); ?></option>
											<?php entrada_product_price_range(true);?>
										</select>
									</div>
								</div>
								<div class="holder">
									<button class="btn btn-trip btn-trip-v2" type="submit"><?php _e('Find Tours', 'entrada'); ?></button>
								</div>
							</div>
						</div>
					</div>
				</fieldset>
			</form>
		</header>
