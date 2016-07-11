/*
	version: 1.0.0
*/
hasGeoJson: function () {
	var Mapi = this,
		map = Mapi.map;

	var data = [];

	map.data.forEach(function (feature) {
		data.push(feature);
	});

	return data.length > 0;
}
