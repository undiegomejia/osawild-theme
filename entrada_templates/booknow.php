<?php 
/*
Template Name: BookNow
*/
get_header();
while ( have_posts() ) : the_post(); 
	get_template_part( 'template-parts/banner', 'section' ); ?>
    <main id="main" class="contacto container">
		<div class="row">
			<section class="formulario">
				<?php the_content(); ?>
			</section>
			<hr>
			<p>If you have a short quick question you can also <strong>chat</strong> with us:</p>
			<div class="social-chat">
				<div class="social-chat--boton">
					<a class="boton-social"target="_blank" href="http://m.me/osawildtravel" title="Chat with Facebook"><img class="boton-social--icono" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/facebook.svg"/></a> 
				</div>
				<div class="social-chat--boton">
					<a class="boton-social"target="_blank" href="https://www.instagram.com/osawild/" title="Chat with Instagram"><img class="boton-social--icono" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/instagram.svg"/></a>		
				</div>
				<div class="social-chat--boton">
					<a class="boton-social"target="_blank" href="https://api.whatsapp.com/send?phone=50687165775" title="Chat with WhatsApp"><img class="boton-social--icono" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/whatsapp.svg"/></a>	
				</div>
			</div>
			<hr>
			<h4>For urgent communication call us:</h4>
			<a href="tel:+5068716-5775" class="boton-contact telefono primario"><img src="/wp-content/uploads/2020/11/costa-rica.png" class="cr-flag">+506 8716-5775</a><br>
			<p>- or -</p>
			<a href="tel:+50627355848" class="boton-contact telefono"><img src="/wp-content/uploads/2020/11/costa-rica.png" class="cr-flag">+506 2735-5848</a>
			<h5>Our preferred communication channel is our main email</h5>
			<a href="mailto:osawild@gmail.com" class="boton-contact telefono boton-contact--email">osawild@gmail.com </a>
			<!--<hr>
			<p>If you would prefer to have a more personal first contact you can schedule an introduction meeting via <a href="https://calendly.com/">Calendly</a></p>-->
		</div>
	</main>
   
<?php endwhile;
get_footer(); ?>