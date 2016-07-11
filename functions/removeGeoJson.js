/*
	version: 1.0.0
*/
removeGeoJson: function () {
	var Mapi = this,
		map = Mapi.map;

	if (Mapi.objects.regions) {
		_.each(Mapi.objects.regions, function (feature) {
			map.data.remove(feature);
		});

		delete Mapi.objects.regions;
	}
}
