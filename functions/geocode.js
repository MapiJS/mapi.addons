geocode: function (lat, lng, callback) {
	var Mapi = this,
		map = Mapi.map;

	var geocoder = new google.maps.Geocoder();

	var latlng = { lat: lat, lng: lng };

	geocoder.geocode({ 'location': latlng }, function (results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			if (results[0]) {
				callback(results[0].formatted_address);
			} else {
				callback('[Address not found]');
				console.error('Geocoder not founded');
			}
		} else {
			callback('[Address not found]');
			console.error('Geocoder failed due to: ' + status);
		}
	});
}
