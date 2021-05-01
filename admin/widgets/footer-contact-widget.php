<?php
class Entrada_Footer_Contact_Widget extends WP_Widget { 
    public function __construct() {     
        parent::__construct(
            'entrada_footercontact_widget',
            __( 'Entrada Footer Contact', 'entrada' ),
            array(
                'classname'   => 'entrada_footercontact_widget',
                'description' => __( 'Entrada footer contact widget.', 'entrada' )
                )
        );
    }
 
    /**  
     * Front-end display of widget.
     *
     * @see WP_Widget::widget()
     *
     * @param array $args     Widget arguments.
     * @param array $instance Saved values from database.
     */
    public function widget( $args, $instance ) {    
        extract( $args );
        $title            = apply_filters( 'widget_title', $instance['title'] );
        $entrada_phone    = $instance['entrada_phone'];
		$entrada_fax      = $instance['entrada_fax'];
		$entrada_email    = $instance['entrada_email'];
		$entrada_address  = $instance['entrada_address'];
    $entrada_facebook  = $instance['entrada_facebook'];	
        echo $before_widget;
        if ( $title ) {
            echo $before_title . $title . $after_title;
        }
		echo '<ul class="menu address-block">';
		if( $entrada_phone ) {	
			$entrada_phone_filtered = preg_replace( '/[^0-9]/', '', $entrada_phone );
			echo '<li class="wrap-text"><span class="icon-tel"></span> <a href="tel:'.$entrada_phone_filtered.'">'.$entrada_phone.'</a></li>';
		}			
		if( $entrada_fax ){
			echo '<li class="wrap-text"><span class="icon-fax"></span> <a href="#">'.$entrada_fax.'</a></li>';	
		}			
		if( $entrada_email ){
			echo '<li class="wrap-text"><span class="icon-email"></span> <a href="mailto:'.$entrada_email.'">'.$entrada_email.'</a></li>';
		}		
		if( $entrada_address ){
			echo '<li><span class="icon-home"></span> <address>'.$entrada_address.'</address></li>';
		}		
    if( $entrada_facebook ){
      echo '<li><span class="icon-facebook"></span> <a href="'.$entrada_facebook.'">'.$entrada_facebook.'</a></li>';
    }   
		echo '</ul>';
        echo $after_widget;
    } 
  
    /**
      * Sanitize widget form values as they are saved.
      *
      * @see WP_Widget::update()
      *
      * @param array $new_instance Values just sent to be saved.
      * @param array $old_instance Previously saved values from database.
      *
      * @return array Updated safe values to be saved.
      */
    public function update( $new_instance, $old_instance ) {        
        $instance                     = $old_instance;
        $instance['title']            = strip_tags( $new_instance['title'] );
		$instance['entrada_phone']    = strip_tags( $new_instance['entrada_phone'] );
		$instance['entrada_fax']      = strip_tags( $new_instance['entrada_fax'] );
		$instance['entrada_email']    = strip_tags( $new_instance['entrada_email'] );		
        $instance['entrada_address']  = strip_tags( $new_instance['entrada_address'] );
        return $instance;
    }
  
    /**
      * Back-end widget form.
      *
      * @see WP_Widget::form()
      *
      * @param array $instance Previously saved values from database.
      */
    public function form( $instance ) {
		
		$title            = isset($instance['title']) ? esc_attr( $instance['title'] ) : '';
		$entrada_phone    = isset($instance['entrada_phone']) ? esc_attr( $instance['entrada_phone'] ) : '';
		$entrada_fax      = isset($instance['entrada_fax']) ? esc_attr( $instance['entrada_fax'] ) : '';
		$entrada_email    = isset($instance['entrada_email']) ? esc_attr( $instance['entrada_email'] ) : '';
		$entrada_address  = isset($instance['entrada_address']) ? esc_attr( $instance['entrada_address'] ) : ''; ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e( 'Title *', 'entrada' ); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" />
        </p>        
        <p>
            <label for="<?php echo $this->get_field_id('entrada_phone'); ?>"><?php _e( 'Phone', 'entrada' ); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('entrada_phone'); ?>" name="<?php echo $this->get_field_name('entrada_phone'); ?>" type="text" value="<?php echo $entrada_phone; ?>" />
        </p>        
        <p>
            <label for="<?php echo $this->get_field_id('entrada_fax'); ?>"><?php _e( 'Fax', 'entrada' ); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('entrada_fax'); ?>" name="<?php echo $this->get_field_name('entrada_fax'); ?>" type="text" value="<?php echo $entrada_fax; ?>" />
        </p>        
        <p>
            <label for="<?php echo $this->get_field_id('entrada_email'); ?>"><?php _e( 'Email', 'entrada' ); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('entrada_email'); ?>" name="<?php echo $this->get_field_name('entrada_email'); ?>" type="text" value="<?php echo $entrada_email; ?>" />
        </p>        
        <p>
            <label for="<?php echo $this->get_field_id('entrada_address'); ?>"><?php _e( 'Address', 'entrada' ); ?></label> 
            <textarea class="widefat" rows="4" cols="20" id="<?php echo $this->get_field_id('entrada_address'); ?>" name="<?php echo $this->get_field_name('entrada_address'); ?>"><?php echo $entrada_address; ?></textarea>
        </p>     
<?php 
    }     
}
 
/* Register the widget */
add_action( 'widgets_init', function(){
    register_widget( 'Entrada_Footer_Contact_Widget' );
});
?>