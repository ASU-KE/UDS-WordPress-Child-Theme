<?php
/**
 * Additional functions for Advanced Custom Fields.
 * 
 * Contents:
 *   - Load path for ACF groups from the parent.
 *   - Register custom blocks for the theme.
 *
 * @package uds-wordpress-child-theme
 */

/**
 * Add additional loading point for the parent theme's ACF groups.
 *
 * @return $paths
 */
function uds_wordpress_parent_theme_field_groups( $paths ) {
	$path = get_template_directory() . '/acf-json';
	$paths[] = $path;
	return $paths;
}
add_filter( 'acf/settings/load_json', 'uds_wordpress_parent_theme_field_groups' );

/**
 * Create save point for the child theme's ACF groups.
 *
 * @return $path
 */
function uds_wordpress_child_theme_field_groups( $path ) {
	$path = get_stylesheet_directory() . '/acf-json';
	return $path;
}
add_filter( 'acf/settings/save_json', 'uds_wordpress_child_theme_field_groups' );

/**
 * Register additional custom blocks for the theme.
 */
function uds_wordpress_child_theme_acf_init_block_types() {
	// The sky is the limit.
}
add_action( 'acf/init', 'uds_wordpress_child_theme_acf_init_block_types' );
