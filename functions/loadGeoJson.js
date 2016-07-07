loadGeoJson: function (URL) {
	var map = this.map,
		Mapi = this;

	$.getJSON(URL, function (response) {
		var featureCollection = map.data.addGeoJson(response);

		_.each(featureCollection, function (feature) {
			// Add each GeoJson feature to the 'regions' collection
			Mapi.addObject('regions', feature.getId(), feature);
		});

		// Uses style properties of GeoJson features
		map.data.setStyle(function (feature) {
			return ({
				fillColor: feature.getProperty('fill'),
				strokeWeight: feature.getProperty('stroke-width')
			});
		});
	});
}
