/*
	version: 1.0.0
*/
panAndZoom: function (groupId, id, zoom) {
	var Mapi = this,
		map = Mapi.map;

	var obj = Mapi.objects[groupId][id];

	if (obj) {

		// Allows ignore zoom passing "Null" value
		if (zoom) {
			zoom = zoom || 18;
		}

		map.panTo(obj.getPosition());

		// Zoom
		if (zoom) {
			setTimeout(function () {
				map.setZoom(zoom);
			}, 500);
		}
	}
}
