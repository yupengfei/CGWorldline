requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		nav_bar: '../nav_bar'
	}
});
requirejs(['nav_bar/nav_bar'], function(nav_bar) {
	test();
});