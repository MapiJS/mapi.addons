/*
	version: 1.0.0
*/
infoWindow: function (marker, options) {
	var Mapi = this,
		map = Mapi.map;

	options.content = options.content || marker.id;

	var infowindow = new google.maps.InfoWindow(options);

	if (marker) {
		marker.addListener('click', function () {
			infowindow.open(map, marker);
		});
	}
}
