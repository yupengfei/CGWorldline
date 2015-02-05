requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		nav_bar: '../nav_bar'
	}
});
requirejs(['jquery', 'nav_bar/nav_bar'], function($, nav_bar) {
	$(document).ready(function() {
		load_nav_bar();
	})
	//alert($("#screentype").attr("data-screentype"));
});