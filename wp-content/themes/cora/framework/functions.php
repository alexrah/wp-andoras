<?php

class Theme {
	

	function init($options) {
		

		$this->constants($options);

		$this->types();

		$this->functions();
	    
		$this->plugins();
		
		$this->shortcodes();

		$this->widgets();

		
		
		add_action('after_setup_theme', array(&$this, 'supports'));
		
		$this->admin();
		


	}
	
	function supports() {
			
		add_theme_support('menus');
		
		add_theme_support('post-thumbnails', array('post', 'page', 'portfolio', 'slideshow'));
		
		register_nav_menus(array(
				'primary-menu' => THEME_NAME . ' Navigation', 
				'footer-menu' => THEME_NAME . ' Footer Menu'
		));
		
		add_theme_support('automatic-feed-links');
		add_theme_support('editor-style');
		
	
	
	}
	
	function constants($options) {
		define('THEME_NAME', $options['theme_name']);
		define('THEME_SLUG', $options['theme_slug']);
		
		define('THEME_DIR', get_template_directory());
		define('THEME_URI', get_template_directory_uri());
		
		define('THEME_FRAMEWORK', THEME_DIR . '/framework');
		
		define('THEME_PLUGINS', THEME_FRAMEWORK . '/plugins');
		
		define('THEME_GLOBAL', THEME_FRAMEWORK . '/global');
		
		define('THEME_FUNCTIONS', THEME_FRAMEWORK . '/functions');
		define('THEME_TYPES', THEME_FRAMEWORK . '/types');
		define('THEME_WIDGETS', THEME_FRAMEWORK . '/widgets');
		define('THEME_SHORTCODES', THEME_FRAMEWORK . '/shortcodes');
		
		define('THEME_SCRIPTS', THEME_URI . '/scripts');
		define('THEME_IMAGES', THEME_URI . '/images');
		define('THEME_CSS', THEME_URI . '/css');
		define('THEME_JS', THEME_URI . '/js');
		
		
		define('THEME_ADMIN', THEME_FRAMEWORK . '/admin');
		define('THEME_ADMIN_JS', THEME_FRAMEWORK . '/admin/js');
		define('THEME_ADMIN_ASSETS_URI', THEME_URI . '/framework/admin/assets');
		define('THEME_ADMIN_OPTIONS', THEME_ADMIN . '/options');
		define('THEME_ADMIN_METABOXES', THEME_ADMIN . '/metaboxes');
	}
	
	function functions() {		
		require_once (THEME_GLOBAL . '/head.php');
		require_once (THEME_GLOBAL . '/sidebar.php');
		require_once (THEME_GLOBAL . '/themefunctions.php');	
	}
	
	function plugins() {
		require_once (THEME_PLUGINS . '/navi/navi.php');
		require_once (THEME_PLUGINS . '/excerpt/excerpt.php');
		require_once (THEME_PLUGINS . '/filters/filters.php');
		require_once (THEME_PLUGINS . '/imageresize/imageresize.php');
		require_once (THEME_PLUGINS . '/breadcrumbs/breadcrumbs.php');
	}
	
	function types() {
		require_once (THEME_TYPES . '/slideshow.php');
		require_once (THEME_TYPES . '/portfolio.php');
	}
	
	function widgets() {
		
		/* Load each widget file. */
		require_once (THEME_WIDGETS . '/recent.php');
		require_once (THEME_WIDGETS . '/popular.php');
		require_once (THEME_WIDGETS . '/related.php');
		require_once (THEME_WIDGETS . '/social.php');
		require_once (THEME_WIDGETS . '/subnavigation.php');
		require_once (THEME_WIDGETS . '/contactdetails.php');
		require_once (THEME_WIDGETS . '/contactform.php');
		require_once (THEME_WIDGETS . '/ads.php');
		require_once (THEME_WIDGETS . '/twitter.php');
		require_once (THEME_WIDGETS . '/flickr.php');
		require_once (THEME_WIDGETS . '/video.php');
		
		require_once (THEME_WIDGETS . '/portfolio.php');

		/* Register each widget. */
		register_widget('Theme_Widget_Recent_Posts');
		register_widget('Theme_Widget_Popular_Posts');
		register_widget('Theme_Widget_Related_Posts');
		register_widget('Theme_Widget_Social');
		register_widget('Theme_Widget_SubNav');
		register_widget('Theme_Widget_Contact_Info');
		register_widget('Theme_Widget_Contact_Form');
		register_widget('Theme_Widget_Ads');
		register_widget('Theme_Widget_Twitter');
		register_widget('Theme_Widget_Flickr');
		register_widget('Theme_Widget_Video');
		
		register_widget('Theme_Widget_Portfolio');
    register_sidebar(array('name'=>'Post Widget Right',));
    register_sidebar(array('name'=>'Post Widget Left',));
		
		if(get_option('enable_gmap')){
			require_once (THEME_WIDGETS . '/gmap.php');
			register_widget('Theme_Widget_Gmap');
		}
		
		/* Unregister some widgets. */
		



	}
	
	function shortcodes() {
		
		require_once (THEME_SHORTCODES . '/raw.php');
		require_once (THEME_SHORTCODES . '/columns.php');
		require_once (THEME_SHORTCODES . '/buttons.php');
		require_once (THEME_SHORTCODES . '/typography.php');
		require_once (THEME_SHORTCODES . '/boxes.php');
		require_once (THEME_SHORTCODES . '/tables.php');
		require_once (THEME_SHORTCODES . '/tabs.php');
		require_once (THEME_SHORTCODES . '/dividers.php');
		require_once (THEME_SHORTCODES . '/images.php');
		require_once (THEME_SHORTCODES . '/videos.php');
		require_once (THEME_SHORTCODES . '/widgets.php');
		require_once (THEME_SHORTCODES . '/portfolio.php');
		
		require_once (THEME_SHORTCODES . '/portfoliojquery.php');
		require_once (THEME_SHORTCODES . '/blog.php');
	}
	
	function admin() {
		
		define('OF_FILEPATH', TEMPLATEPATH.'/framework');
		define('OF_DIRECTORY', THEME_URI.'/framework');
		
		require_once (THEME_ADMIN . '/testers.php');
		require_once (THEME_ADMIN . '/head.php');
		
		require_once (THEME_ADMIN . '/shortcodeGenerator.php');
		
		require_once (THEME_ADMIN_METABOXES . '/post.php');
		require_once (THEME_ADMIN_METABOXES . '/page.php');
		require_once (THEME_ADMIN_METABOXES . '/portfolio.php');
		require_once (THEME_ADMIN_METABOXES . '/slider.php');
		
		// Custom functions and plugins
		require_once (THEME_ADMIN . '/admin-functions.php');
		
		// Admin Interfaces (options,framework, seo)		
		require_once (THEME_ADMIN . '/admin-interface.php');		

		// Options panel settings and custom settings
		require_once (THEME_ADMIN . '/theme-options.php'); 



	}
	

}
?>
