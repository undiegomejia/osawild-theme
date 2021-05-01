<?php
	global $product;
	$comment_per_page 	= 5;
	$comments 			= get_comments( array( 'number' => $comment_per_page,'status' => 'approve', 'post_id' => get_the_ID() ) ); 
	$comments_count 	= wp_count_comments( get_the_ID() );
	$average_rating 	=  entrada_post_average_rating( get_the_ID() ); ?>   
  
    <div class="header-box text-right">
        <span class="rate-left pull-left">
            <strong class="title"><?php _e( 'Overall Rating', 'entrada'); ?></strong>
        </span>
        <div class="rate-left pull-right">
            <div class="star-rating">
				<div class="average_rateYo"></div>
			</div>
            <span class="value"><?php echo $average_rating; ?>/5</span>
        </div>
    </div>
<?php if($comments) : ?>
<div class="comments reviews-body">
    <div class="comment-holder">
	<?php 
		$count_comments = 0;
		foreach($comments as $comment) {			
			$count_comments++ ;
			$rating = get_comment_meta( $comment->comment_ID, 'rating', true ); ?>
			<div class="comment-slot">
				<div class="thumb">
					<a href="#"><?php echo get_avatar( $comment->comment_author_email, 64 ); ?></a>
				</div>
				<div class="text">
					<header class="comment-head">
						<div class="left">
							<strong class="name">
								<a href="#"><?php echo $comment->comment_author; ?></a>
							</strong>
							<div class="meta"><?php _e( 'Reviewed On', 'entrada'); ?> <?php echo date('d/m/Y', strtotime($comment->comment_date)); ?></div>
						</div>
						<?php  if(!empty( $rating )) : ?>
						<div class="right">
							<input class="personal_rating" type="hidden" value="<?php echo $rating; ?>">
							<div class="star-rating">
								<div class="personal_rateYo"></div>
							</div>
							<span class="value"><?php echo $rating; ?>/5</span>
						</div>
						<?php endif; ?>
					</header>
					<div class="des">
						<p><?php echo $comment->comment_content; ?></p>
					</div>
				</div>
			</div>	
	<?php } ?>
    </div>
	<?php if( $count_comments < $comments_count->approved ){ ?>
    <div class="link-more text-center" id="comment_load_more"> 
    	<input type="hidden" id="comment_page" value="1">
        <input type="hidden" id="comment_per_page" value="<?php echo esc_attr( $comment_per_page ); ?>">
        <input type="hidden" id="comment_post_ID" value="<?php echo esc_attr( get_the_ID() ); ?>">
        <a href="javascript:void(null);" id="load_more_reviews"><?php _e( 'Show More Reviews', 'entrada'); ?> - <?php printf( esc_html( _n( '%d Review', '%d Reviews', $comment_per_page, 'entrada' ) ), $comment_per_page ); ?></a>
    </div>
	<?php } ?>
</div>
<?php endif; ?>