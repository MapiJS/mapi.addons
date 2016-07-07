panAndZoom: function (groupId, id, zoom) {
	var Mapi = this,
		map = Mapi.map;

	if (Mapi.objects[groupId][id]) {

		// Allows ignore zoom passing "Null" value
		if (zoom) {
			zoom = zoom || 18;
		}

		// For simple Markers
		var position = Mapi.objects[groupId][id].position;

		// For Polygons
		if (!position) {
			// Source: http://stackoverflow.com/questions/3081021/how-to-get-the-center-of-a-polygon-in-google-maps-v3
			google.maps.Polygon.prototype.getBoundsCustom = function () {
				var bounds = new google.maps.LatLngBounds();
				this.getPath().forEach(function (element, index) {
					bounds.extend(element);
				});
				return bounds;
			};
			position = Mapi.objects[groupId][id].getBoundsCustom().getCenter();
		}

		// Pan
		if (position) {
			map.panTo(position);

			// Zoom
			if (zoom) {
				setTimeout(function () {
					map.setZoom(zoom);
				}, 500);
			}
		}
	}
}
