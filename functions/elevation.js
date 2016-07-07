elevation: function (lat, lng, callback) {
	var Mapi = this,
		map = Mapi.map;

	var elevator = new google.maps.ElevationService();

	elevator.getElevationForLocations({
		'locations': [{ lat: lat, lng: lng }],
	}, function (results, status) {
		if (status === google.maps.ElevationStatus.OK) {
			callback(results);
		} else {
			callback('Elevation service failed due to: ' + status);
		}
	});
}
