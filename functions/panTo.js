/*
	version: 1.0.0
*/
panTo: function (lat, lng) {
	var Mapi = this,
		map = Mapi.map;

	map.panTo({ lat: lat, lng: lng });
}
