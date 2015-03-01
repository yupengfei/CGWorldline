function load_nav_bar() {
	var nav_bar = "";
	var device_type = getDeviceState();
	if (device_type == "desktop") {
		alert("desktop");
		var htmlObj = $.ajax({url: "/nav_bar_desktop.html", async: false});
		nav_bar = htmlObj.responseText;
		//alert(nav_bar);
		$("body").prepend(nav_bar);
		if (getCookie("Email") === "") {
			$(".nav-bar-desktop").append(getDesktopUnloginRight());
		} else {
			$(".nav-bar-desktop").append(getDesktopLoginRight());
		}
	} else if (device_type == "mobile") {
		var htmlObj = $.ajax({url: "/nav_bar_mobile.html", async: false});
		nav_bar = htmlObj.responseText;
	} else {
		alert("unkonwn device type");
	}
}
function getDeviceState() {
	var state = window.getComputedStyle(
    document.querySelector('#screen-type'), ':before'
		).getPropertyValue('content');
	if (state === "\"desktop\"") {
		return "desktop";
	} else if (state === "\"mobile\"") {
		return "mobile";
	}
}

function getDesktopUnloginRight() {
	var text = '<div class="nav-bar-desktop-right">\
			<input type="text" name="UserName" value="邮箱">\
	  		<input type="password" name="Password" value="密码">\
			<button type="button">登陆</button>\
			<button type="button">注册</button>\
		</div>';
	return text;
}

function getDesktopLoginRight() {
	var text = '<div class="nav-bar-desktop-right">\
			<img src="' + getCookie("Picture") + ' />\
			<a href="' + getCookie("UserUrl") + '">' + getCookie("DisplayName") + '</a>\
			<a href="'+ getCookie("MessageUrl") + '"><img src="" /></a>\
			<span>退出</span>\
			</div>';
	return text;
}