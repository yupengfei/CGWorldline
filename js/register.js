requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		nav_bar: '../nav_bar',
		cookie: '../cookie'
	}
});
requirejs(['jquery', 'nav_bar/nav_bar', 'cookie/cookie'], function($, nav_bar) {
	$(document).ready(function() {
		load_nav_bar();
	})
	//alert($("#screentype").attr("data-screentype"));
});
$.ajax('/register',
JSON.stringify({
		"Email": "xxx@test.com",
		"DisplayName": "xxxxx",
		"Picture": "头像的url"
		"Password": "32位长的md5加密"
	}),function(data){
	//do sth
	},"json");
jQuery(function(){
	$(".register-user-image-div").click() {
  		$(".user-select-image-url").click(){
  			var email = $(".register-user-email").val();
  			var displayName = $(".register-user-displayname").val();
  			var picture = $(".")
  			$.ajax('/register',JSON.stringify({
  				"Email": "",
				"DisplayName": "xxxxx",
				"Picture": "头像的url"
				"Password": "32位长的md5加密"

  			}));
  		}; 
 
	}
});
