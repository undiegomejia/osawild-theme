<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you (the theme developer).
 * will need to copy the new files to your theme to maintain compatibility. We try to do this.
 * as little as possible, but it does happen. When this occurs the version of the template file will.
 * be bumped and the readme will list any important changes.
 *
 * @see 	    http://docs.woothemes.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
	/**
	 * woocommerce_before_single_product hook.
	 *
	 * @hooked wc_print_notices - 10
	 */
	do_action( 'woocommerce_before_single_product' );

	if ( post_password_required() ) {
	 	echo get_the_password_form();
	 	return;
	}

	$social_media__share_image_url = '';
	$average_rating =  entrada_post_average_rating( get_the_ID() );
	update_post_meta(  get_the_ID() , '_last_viewed', current_time('mysql') );

	entrada_set_post_views(get_the_ID());
	$variations = entrada_product_variations(get_the_ID());
	
	$entrada_product_type = get_post_meta( get_the_ID(),'entrada_product_type', true);
	
	/* Product image gallery */
	global $post, $product, $woocommerce;
	$gallery_image_urls = array();

	if (has_post_thumbnail( get_the_ID() )) :
		$featured_img = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'single-post-thumbnail' );
		$thumb = wp_get_attachment_image_src( get_post_thumbnail_id(get_the_ID()), 'medium');
		
		$gallery_image_urls[] = $featured_img[0]; 
		$social_media__share_image_url = $thumb[0];
	endif;

	$attachment_ids = $product->get_gallery_attachment_ids();
	if($attachment_ids) {
		foreach( $attachment_ids as $attachment_id ){
			$gallery_image_urls[] =  wp_get_attachment_url( $attachment_id, 'large');
		}
	}
	
	if($entrada_product_type == 'shop_item') :
	?>
		<div class="common-spacing product-detail-container">
			<div class="container woocommerce">
				<div class="row">
					<div class="col-md-6">
	                <?php if(count($gallery_image_urls) > 0 ) { ?>
						<div class="col-wrapper">
							<!-- Nav tabs -->
							<ul class="nav nav-tabs nav-v col" role="tablist">
	                        <?php 
							$entrada_item_image_gal_cnt = 0;
							foreach($gallery_image_urls as $entrada_img_url ) {
									$entrada_item_image_gal_cnt++;
									$active_class = ($entrada_item_image_gal_cnt < 2 ? 'active' : '');
								 ?>
								<li role="presentation" class="<?php echo $active_class; ?>">
									<a href="#item-<?php echo $entrada_item_image_gal_cnt; ?>" aria-controls="item-<?php echo $entrada_item_image_gal_cnt; ?>" role="tab" data-toggle="tab"><img src="<?php echo $entrada_img_url; ?>" alt="images"></a>
								</li>
	                            
	                            <?php } ?>
	                            
								
							</ul>
							<!-- Tab panes -->
							<div class="tab-content col">
	                        <?php
							 $entrada_item_image_gal_cnt = 0;
							 foreach($gallery_image_urls as $entrada_img_url ) {
									$entrada_item_image_gal_cnt++;
									$active_class = ($entrada_item_image_gal_cnt < 2 ? 'active' : '');
								 ?>
								<div role="tabpanel" class="tab-pane <?php echo $active_class; ?>" id="item-<?php echo $entrada_item_image_gal_cnt; ?>">
									<div class="img-container">
										<img src="<?php echo $entrada_img_url; ?>" alt="images">
									</div>
								</div>
								
								<?php } ?>
							</div>
						</div>
	                    <?php } ?>
					</div>
					<div class="col-md-6">
						<h2><?php the_title();?></h2>
						<div id="rateYo1"></div>
						<div class="des">
							<?php the_content();?>
						</div>
	                    <form method="post" enctype="multipart/form-data">
							<div class="slot num-action">
								<span class="lbltext">Quantity</span>
								<div class="slot-hold">
									<div class="num-hold">
										<a href="javascript:void(null);" class="minus control"><span class="icon-minus-normal"></span></a>
										<a href="javascript:void(null);" class="plus control"><span class="icon-plus-normal"></span></a>
		                                <div class="input-count-hold">
		                	 				<input name="quantity" class="qty_val input-count-field" type="text" value="1" />
		             				   	</div>
									</div>
								</div>
							</div>
							
							<div class="slot text-right">
								<div class="price" <?php echo entrada_price_schema_micro_data_link(get_the_ID()); ?>>
									<?php entrada_product_price(get_the_ID(), true); ?>
								</div>
							</div>
							<div class="slot pro-detail-frame">
								<div class="left-pos">
									&nbsp;
								</div>
								<div class="right-pos">
									<input name="add-to-cart" type="hidden" value="<?php echo get_the_ID(); ?>" />
									<input name="submit" type="submit" class="btn btn-md btn-default" value="Add to cart" />
								</div>
							</div>
	                    </form>
					</div>
				</div>
			</div>
		</div>
	<?php else :
	if( entrada_is_plugin_active('wc-vendors/class-wc-vendors.php') ) {
		$auth = get_post( get_the_ID() );
		$vendor_id = $auth->post_author;
	} ?>
	<!-- main tour information -->
	<div  itemscope itemtype="http://schema.org/Product">
		<section class="container-fluid trip-info">
	        <div class="two-columns row">
	            <div class="col col-md-6">
	            <!-- top image slideshow -->
	        <?php
				if($gallery_image_urls) { ?>
					<div id="tour-slide">
				<?php 
					foreach( $gallery_image_urls as $slider_img ){
						$image = matthewruddy_image_resize( $slider_img, 960, 1149, true, false);            
	                    if (array_key_exists('url', $image) && $image['url'] != '' ){ ?>
							<div class="slide">
								<div class="bg-stretch">
									<img src="<?php echo $image['url']; ?>" itemprop="image" alt="image descriprion" height="1149" width="960">
								</div>
							</div>
	                <?php }
	                } ?>
					</div>
				<?php if ( $vendor_id && !is_super_admin( $vendor_id ) ) { ?>
						<span class="wc_vendor_shop"><?php _e( 'Vendor', 'entrada' ); ?></span>
				<?php } ?>
			<?php } ?>
	            </div>
				<div class="col col-md-6 text-col">
					<div class="holder">
						<h1 class="small-size" itemprop="name"><?php the_title();?></h1>
						<div class="price">
							from <strong <?php echo entrada_price_schema_micro_data_link(get_the_ID()); ?>><?php entrada_product_price(get_the_ID(), true); ?></strong>
						</div>
						<div class="description" itemprop="description">
							<?php the_content(); ?>
						</div>
						<ul class="reviews-info">
						
							<li>
								<div class="info-left">
									<strong class="title"><?php _e('Activity Level', 'entrada'); ?></strong>
									<span class="value"><?php echo entrada_product_activity_level( get_the_ID(), 'title', false ); ?></span>
								</div>
							<?php 
								$activity_level = entrada_product_activity_level( get_the_ID(), 'level', false );
								if(!empty($activity_level)) { ?>
									<div class="info-right">
										<ul class="ico-list">
											<li><span class="icon-level<?php entrada_product_activity_level( get_the_ID(), 'level', true ); ?>"></span></li>
										</ul>
										<span class="value"><?php echo $activity_level.'/8'; ?></span>
									</div>
							<?php } ?>
							</li>
							<li>
							<?php
								$trip_group_size = get_post_meta(get_the_ID(), "trip_group_size", true);
								$trip_group_size_capacity = get_post_meta(get_the_ID(), "trip_group_size_capacity", true);
								if(!empty($trip_group_size)) { ?>
									<div class="info-left">
										<strong class="title"><?php _e('Group Size', 'entrada'); ?></strong>
										<span class="value"><?php echo $trip_group_size; ?></span>
									</div>
							<?php } ?>
									<div class="info-right">
									<?php
										$group_size_icon = entrada_product_group_size_icon(get_the_ID());
										if(!empty($group_size_icon)){
											echo '<ul class="ico-list"><li>'.$group_size_icon.'</li></ul>';
											} ?>
									<?php 
										if(!empty($trip_group_size_capacity)){
											echo '<span class="value">'.$trip_group_size_capacity.'</span>'; 
										} ?>
									</div>
							</li>
						</ul>
						<div class="btn-holder">
							<form class="cart" method="post" enctype="multipart/form-data">
								<input type="hidden" name="quantity" value="1" title="Qty" class="input-text qty text">
								<input type="hidden" name="add-to-cart" value="<?php echo get_the_ID(); ?>">
							<?php if($variations){
								$attr = entrada_product_attributes(get_the_ID()); ?>							
								<input type="hidden" name="variation_id" value="<?php echo entrada_product_variation_id( get_the_ID() ); ?>" />
								<input type="hidden" name="attribute_<?php echo $attr['attr_slug']; ?>" value="" />
							<?php } ?>
                            <?php	
								$booknow_btn_txt = get_theme_mod( 'booknow_btn_text', 'BOOK NOW' );
														
                            	if( empty( get_theme_mod( 'booknow_btn_url' ) ) ){ ?>
									<button type="submit" class="btn btn-lg btn-info"><?php echo $booknow_btn_txt; ?></button>		
							<?php } else { ?>
									<a href="<?php echo get_theme_mod( 'booknow_btn_url' ); ?>" class="btn btn-lg btn-info"> <?php echo $booknow_btn_txt; ?></a>
							<?php }
							?>
							</form>
						</div>
					
					</div>
				</div>
	        </div>
	    </section>
		<div class="tab-container">
			<div class="nav-wrap" id="sticky-tab">
				<div class="container">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs text-center tab-add" role="tablist">
						<li role="presentation" class="active"><a href="#tab01" aria-controls="tab01" role="tab" data-toggle="tab"><?php _e('Overview', 'entrada'); ?></a></li>
						<li role="presentation"><a href="#tab02" aria-controls="tab02" role="tab" data-toggle="tab"><?php _e('Itinerary', 'entrada'); ?></a></li>
						<li role="presentation"><a href="#tab03" aria-controls="tab03" role="tab" data-toggle="tab"><?php _e('Accommodation', 'entrada'); ?></a></li>
						<!-- <li role="presentation"><a href="#tab04" aria-controls="tab04" role="tab" data-toggle="tab"><?php //_e('Faqs &amp; Reviews', 'entrada'); ?></a></li>
						<li role="presentation"><a href="#tab05" aria-controls="tab05" role="tab" data-toggle="tab"><?php //_e('Gallery', 'entrada'); ?></a></li> -->
						<?php if( $variations ){ ?><li role="presentation"><a href="#tab06" aria-controls="tab06" role="tab" data-toggle="tab"><?php _e('Dates &amp; Prices', 'entrada'); ?></a></li> <?php } ?>
					</ul>
				</div>
			</div>
			<!-- Tab panes -->
			<div class="container tab-content trip-detail">
				<!-- Overview tab content -->
				<div role="tabpanel" class="tab-pane active" id="tab01">
					<div class="row">
						<div class="col-md-6">                            
						<?php 
							$product_overview_detail = get_post_meta(get_the_ID(), 'product_overview_detail', true);						
							if(!empty( $product_overview_detail )) {
								$title = get_the_title();
								echo '<strong class="header-box">'. sprintf( __( 'All about the %s.', 'entrada' ), $title ) .'</strong>';
								echo '<div class="detail">'. wpautop($product_overview_detail).'</div>';
							}  ?>
						</div>
						<div class="col-md-6">
						<?php 
							$product_overview_included_feature = get_post_meta(get_the_ID(), 'product_overview_included_feature', true);
							$product_overview_not_included_feature = get_post_meta(get_the_ID(), 'product_overview_not_included_feature', true);

							if(!empty( $product_overview_included_feature ) || !empty( $product_overview_not_included_feature )) { 
								echo '<strong class="header-box">'. __('The tour package inclusions and exclusions at a glance', 'entrada') .'</strong>';
							}
							
							echo '<div>';

							if(!empty( $product_overview_included_feature )) { 
								echo '<div class="text-box"><div class="holder">';
								echo '<strong class="title">'.__('What is included in this tour?', 'entrada').'</strong>';
								echo '<span class="sub-title">'. __('Items that are included in the cost of tour price.', 'entrada') .'</span>';
								echo wpautop($product_overview_included_feature);
								echo '</div></div>';
							}   

							if(!empty( $product_overview_not_included_feature )) {
								echo '<div class="text-box not-included"><div class="holder">';
								echo '<strong class="title">'. __('What\'s not included in this tour.', 'entrada') .'</strong>';
								echo '<span class="sub-title">'. __('Items that are not included in the price. These can be added as an extra.', 'entrada') .'</span>'; 
								echo wpautop($product_overview_not_included_feature);
								echo '</div></div>';
							} 
							echo '</div>';
							?>
						</div>
					</div>
				</div>
				<!-- itinerary tab content -->
				<div role="tabpanel" class="tab-pane" id="tab02">
					<div class="row">
						<div class="col-md-6">
					<?php 					
						$product_itinerary = get_post_meta(get_the_ID(), 'product_itinerary', true);					
						if(isset($product_itinerary) && !empty($product_itinerary)){
							$product_itinerary_arr = maybe_unserialize($product_itinerary);
						}
						else{
							$product_itinerary_arr = array(); 
						}
						if(count($product_itinerary_arr) > 0 ) {
							$cnt = 0; ?>
							<ol class="detail-accordion">
							<?php
								foreach($product_itinerary_arr as $itinerary){
									$cnt++;							
									if(!empty($itinerary['itinerary_title']) ) { ?>
									<li <?php echo ( $cnt == 1 ) ? ' class="active"' : ''; ?> >
										<a href="#">
											<strong class="title">Day <?php echo $cnt; ?></strong>
											<span><?php echo stripslashes( $itinerary['itinerary_title'] ); ?></span>
										</a>
										<div class="slide">
											<div class="slide-holder">
												<p><?php echo stripslashes( $itinerary['itinerary_desc'] ); ?></p>
											</div>
										</div>
									</li>
							<?php
									}
								} ?>							
							</ol>
					<?php } ?>  
						</div>
						<div class="col-md-6">
						<?php 
							$itinerary_gallery_images_arr = array();
							$itinerary_gallery_img = get_post_meta(get_the_ID(), 'itinerary_gallery_img', true);
							if(isset($itinerary_gallery_img) && !empty($itinerary_gallery_img)) {
								$itinerary_gallery_images_arr = maybe_unserialize($itinerary_gallery_img);
							}
							
							if(count( $itinerary_gallery_images_arr ) > 0 ) {
								foreach($itinerary_gallery_images_arr as $itinerary_gal_img_id ) {
									$itinerary_gal_img = wp_get_attachment_url( $itinerary_gal_img_id );
									$image = matthewruddy_image_resize( $itinerary_gal_img, 570, 319, true, false);
									if (array_key_exists('url', $image) && $image['url'] != '' ){ ?>
										<article class="img-article article-light">
											<div class="img-wrap">
												<img src="<?php echo $image['url'];?>" alt="image description">
											</div>
											<div class="text-block">
										<?php										
											$attach_metadata = entrada_image_attributes($itinerary_gal_img_id);
											
											if( !empty($attach_metadata['caption']) ){
												echo '<h3><a href="#">'.$attach_metadata['caption'].'</a></h3>';	
											}
											
											if( !empty($attach_metadata['desc']) ){
												echo '<p>'.$attach_metadata['desc'].'</p>';	
											}
											
											?>
											</div>
										</article>
							<?php
									}
								}
							} ?>
						</div>
					</div>
				</div>
				<!-- accomodation tab content -->
				<div role="tabpanel" class="tab-pane" id="tab03">
					<div class="row">
						<div class="col-md-6">
						<?php
							$hotel_name = get_post_meta(get_the_ID(),'hotel_name', true);
							if(isset($hotel_name) && $hotel_name != ''){
								echo '<strong class="header-box">'.$hotel_name.'</strong>';
							}							
							$product_accommodation = get_post_meta(get_the_ID(),'product_accommodation', true);	
							if(isset($product_accommodation) && $product_accommodation != ''){							
								echo '<div class="detail">'.wpautop( $product_accommodation ).'</div>';
							} ?>
						</div>
						<div class="col-md-6 accomodation-block">
						<?php
							$product_shared_room_included_feature = get_post_meta(get_the_ID(),'product_shared_room_included_feature', true);
							$included_title = get_post_meta(get_the_ID(),'included_title', true);
							$included_sub_title = get_post_meta(get_the_ID(),'included_sub_title', true);
							
							$product_individual_room_not_included_feature = get_post_meta(get_the_ID(),'product_individual_room_not_included_feature', true);
							$excluded_title = get_post_meta(get_the_ID(),'excluded_title', true);
							$excluded_sub_title = get_post_meta(get_the_ID(),'excluded_sub_title', true);
							if(!empty($product_shared_room_included_feature) && !empty($product_individual_room_not_included_feature )){
								echo '<strong class="header-box">'. __('The tour package inclusions and exclusions at a glance.', 'entrada') .'</strong>';
							}
							echo '<div>';
							if(isset($product_shared_room_included_feature) && $product_shared_room_included_feature != ''){
								echo '<div class="text-box"><div class="holder">';
								echo '<strong class="title">'. $included_title .'</strong>';
								echo '<span class="sub-title">'. $included_sub_title .'</span>';
								echo '<div class="img-holder">'.wpautop( $product_shared_room_included_feature ).'</div>';
								echo '</div>';
								echo '</div>';
							}
							if(isset($product_individual_room_not_included_feature) && $product_individual_room_not_included_feature != ''){
								echo '<div class="text-box not-included">';
								echo '<div class="holder">';
								echo '<strong class="title">'. $excluded_title .'</strong>';
								echo '<span class="sub-title">'. $excluded_sub_title .'</span>';
								echo '<div class="img-holder">'.wpautop( $product_individual_room_not_included_feature ).'</div>';
								echo '</div>';
								echo '</div>';
							} 
							echo '</div>'; ?>
						</div>
					</div>
				</div>
				<!-- faq and review tab content -->
				<div role="tabpanel" class="tab-pane" id="tab04">
					<div class="row">
						<div class="col-md-6">
						<?php
							$product_faq_arr = array();
							$product_faq = get_post_meta(get_the_ID(),'product_faq', true);
							if(isset( $product_faq ) && !empty( $product_faq ) ){
								$product_faq_arr = maybe_unserialize( $product_faq ); 
							}
							if(count( $product_faq_arr ) > 0) { ?>
								<div class="question-select">
									<select id="tabSelect" class="question">
									<?php 
										$faq_cnt = 0;
										foreach($product_faq_arr as $faq ) {  $faq_cnt++;
											$active_faq = ($faq_cnt == 1 ? ' selected="selected"' : '');
											echo '<option '.$active_faq.' value="#innerTab'.$faq_cnt.'">'.stripslashes( $faq['faq_question'] ).'</option>';
										} ?>
									</select>
									<ul class="nav nav-tabs" id="questionTab">
								<?php
									$faq_cnt = 0;
									foreach( $product_faq_arr as $faq ) {
										$faq_cnt++;
										$active_faq = ($faq_cnt == 1 ? ' class="active"' : '');									
										echo '<li'.$active_faq.'><a href="#innerTab'.$faq_cnt.'" data-toggle="tab">'.stripslashes( $faq['faq_question'] ).'</a></li>';
									} ?>
									</ul>
								</div>
								<div class="tab-wrapper">
								<?php
									$faq_cnt = 0;
									foreach($product_faq_arr as $faq ) { 
										$faq_cnt++; 
										$active_faq = ($faq_cnt == 1 ? ' active' : '');
										echo '<div role="tabpanel" class="tab-pane'.$active_faq.'" id="innerTab'.$faq_cnt.'"><div class="detail">'.wpautop( stripslashes( $faq['faq_answer'] ) ).'</div></div>';
									} ?>
								</div>
						<?php } ?>
						</div>
						<div class="col-md-6">
						<?php
							wc_get_template( 'product-reviews.php' );
							wc_get_template( 'write-a-review.php' ); ?>                        
						</div>
					</div>
				</div>
				<!-- gallery tab content -->
				<div role="tabpanel" class="tab-pane" id="tab05">
					<ul class="row gallery-list has-center">
				<?php
				
					$product_gallery_images_arr = array();
					$product_gallery_images = get_post_meta(get_the_ID(), 'product_gallery_img', true);
					if(isset($product_gallery_images) && !empty($product_gallery_images)) {
						$product_gallery_images_arr = maybe_unserialize($product_gallery_images);
					}
										
					if(count( $product_gallery_images_arr ) > 0 ) {
						foreach($product_gallery_images_arr as $product_gal_img_id ) {
							$product_gal_img = wp_get_attachment_url( $product_gal_img_id );
							$image = matthewruddy_image_resize( $product_gal_img, 370, 240, true, false);
							$attach_metadata = entrada_image_attributes($product_gal_img_id);
							 ?>
							<li class="col-sm-6">
								<a class="fancybox" data-fancybox-group="group" href="<?php echo $product_gal_img; ?>" title="<?php echo entrada_image_attributes_from_src($product_gal_img, 'title', true); ?>">
									<span class="img-holder">
										<img src="<?php echo $image['url'];?>" height="240" width="370" alt="image description">
									</span>
									<span class="caption">
										<span class="centered">
											<strong class="title"><?php echo $attach_metadata['title']; ?></strong>
											<span class="sub-text"><?php echo $attach_metadata['desc']; ?></span>
										</span>
									</span>
								</a>
							</li>					 
					<?php 
						}
					} ?>
					</ul>
				</div>
				<!-- dates and prices tab content -->
				<div role="tabpanel" class="tab-pane" id="tab06">
					<div class="table-container">
				<?php 
					if($variations) {
						$attr = entrada_product_attributes(get_the_ID());
						$attr_val =  explode(',',$attr['attr_val']); ?>
						<div class="table-responsive">
							<table class="table table-striped">
								<thead>
									<tr>
										<th>
											<strong class="date-text"><?php _e( 'Package', 'entrada'); ?></strong>
											<span class="sub-text"><?php _e( 'Confirmed Dates', 'entrada'); ?></span>
										</th>
										<th>
											<strong class="date-text"><?php _e( 'Trip Status', 'entrada'); ?></strong>
											<span class="sub-text"><?php _e( 'Trip Status', 'entrada'); ?></span>
										</th>
										<th>
											<strong class="date-text"><?php _e( 'Price', 'entrada'); ?> (PP)</strong>
											<span class="sub-text"><?php _e( 'Excluding Flights', 'entrada'); ?></span>
										</th>
										<th>
											<strong class="date-text"><?php _e( 'Price', 'entrada'); ?> (PP)</strong>
											<span class="sub-text"><?php _e( 'Including Flights', 'entrada'); ?></span>
										</th>
										<th>&nbsp;
											
										</th>
									</tr>
								</thead>
								<tbody>
								<?php 
								$attr_count = 0;
								foreach($variations as $v) { ?>
									<tr class="price" <?php echo entrada_price_schema_micro_data_link( $v ); ?>>
										<td><div class="cell"><div class="middle"> 
									
                                        <?php
										$var_confirmed_date = get_post_meta( $v, 'var_confirmed_date', true);
										$var_returning_date = get_post_meta( $v, 'var_returning_date', true);
										if(!empty($var_confirmed_date)) {
										 echo date_i18n( get_option( 'date_format' ), strtotime( $var_confirmed_date ) );
										}
										
										if(!empty($var_returning_date)) {
											echo ' - '. date_i18n( get_option( 'date_format' ), strtotime( $var_returning_date ) );
										} ?>
                                        
										</div></div></td>
										
										<td><div class="cell"><div class="middle">
									<?php 												
										$var_tour_status =  get_post_meta( $v, 'var_tour_status', true );
										echo ($var_tour_status) ?  $var_tour_status : 'N/A'; ?>
										</div></div></td>
										
										<td><div class="cell"><div class="middle">
									<?php 
										$price_exc_flights = get_post_meta( $v, '_price', true);
										echo ($price_exc_flights) ?  entrada_price($price_exc_flights, $args = array(), 'sale_price') : 'N/A'; ?>
										</div></div></td>
										
										<td><div class="cell"><div class="middle">
									<?php
										$var_price_inc_flight = get_post_meta( $v, 'var_price_inc_flight', true);
										echo ($var_price_inc_flight) ?  entrada_price( $var_price_inc_flight, $args, 'regular_price') : 'N/A'; ?>
										</div></div></td>
                                        <?php
                                        if( !empty( get_theme_mod( 'booknow_btn_url' ) ) ) {
											$booknow_btn_url = get_theme_mod( 'booknow_btn_url' );
										} else {
											
											$booknow_btn_url = '?add-to-cart='.get_the_ID().'&variation_id='.$v.'&attribute_'.$attr['attr_slug'];
										}
										
										?>
										<td><div class="cell"><div class="middle">
										<a href="<?php echo $booknow_btn_url; ?>" class="btn btn-default"><?php echo $booknow_btn_txt; ?></a>
										</div></div></td>
									</tr>								
							<?php
									$attr_count++; 
								} ?>								
								</tbody>
							</table>
						</div>
				<?php } ?>
					</div>
				</div>
			</div>
		</div>
	</div>
    
    <?php endif; ?>
	
	<aside class="recent-block recent-gray recent-wide-thumbnail">
		<div class="container">
			<div class="row db-3-col">
			<?php echo entrada_recently_viewed_product(get_the_ID()); ?>
			</div>
		</div>
	</aside>
<?php do_action( 'woocommerce_after_single_product' ); ?>
