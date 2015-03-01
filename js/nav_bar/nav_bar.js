function load_nav_bar() {
	var nav_bar = "";
	var device_type = getDeviceState();
	if (device_type == "desktop") {
		alert("desktop");
		var htmlObj = $.ajax({url: "/nav_bar_desktop.html", async: false});
		nav_bar = htmlObj.responseText;
		alert(nav_bar);
		//if (document.)
	} else if (device_type == "mobile") {
		var htmlObj = $.ajax({url: "/nav_bar_mobile.html", async: false});
		nav_bar = htmlObj.responseText;
	} else {
		alert("unkonwn device type");
	}
	$("body").prepend(nav_bar);
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