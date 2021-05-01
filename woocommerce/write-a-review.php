<div class="comments reviews-body">
	<div id="comment_message_box"></div>
	<form action="#" id="write_a_review" class="comment-form">
		<fieldset>
			<h3><?php _e( 'LEAVE YOUR COMMENT', 'entrada' ); ?></h3>
			<div class="row">
				<div class="col-md-6 form-group">
					<input placeholder='<?php _e( 'Full Name', 'entrada' ); ?>' name="comment_author" id="comment_author" type="text" class="form-control"><input class="product_rating" name="product_rating" type="hidden" value="">
				</div>
				<div class="col-md-6 form-group">
					<input placeholder='<?php _e( 'Email Address', 'entrada' ); ?>' type="email" name="comment_author_email" id="comment_author_email" class="form-control"> 
				</div>
				<div class="col-md-6 form-group form-rate">
					<input placeholder='<?php _e( 'Rate Tour', 'entrada' ); ?>' type="text" class="form-control">
					<div class="star-rating">
						<div class="rateYo" id="rate"></div>
					</div>
				</div>
				<div class="col-md-6 form-group">
					<input placeholder='<?php _e( 'Website', 'entrada' ); ?>' name="comment_author_url" id="comment_author_url" type="text" class="form-control">
				</div>
				<div class="col-sm-12 form-group">
					<textarea placeholder='<?php _e( 'Your Comment', 'entrada' ); ?>' id="comment_content" name="
					comment_content" class="form-control"></textarea>
					<input type="hidden" value="<?php echo get_the_ID();?>" id="comment_post_id">
				</div>
				<div class="col-sm-12 btn-holder">
					<input type="submit" id="write_a_review_validate" class="btn btn-default" value="<?php _e( 'POST YOUR COMMENT', 'entrada' ); ?>">
				</div>
			</div>
		</fieldset>
	</form>
		
</div>