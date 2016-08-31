/*
	version: 1.0.2
*/
loadGeoJson: function (args) {
	var map = this.map,
		Mapi = this;

	args = {
		URL: args.URL || null,
		geoJson: args.geoJson || null,
		collection: args.collection || 'geojsons'
	};

	if (args.URL) {
		$.getJSON(URL, function (response) {
			setGeoJson(response);
		});
	}

	if (args.geoJson) {
		setGeoJson(args.geoJson);
	}

	function setGeoJson(obj) {
		if (!obj.type) {
			throw ('Your GeoJson must have a Type node');
		}

		var newObj = {};

		if (obj.type !== 'FeatureCollection') {
			newObj.type = 'FeatureCollection';
			newObj.features = [];
			newObj.features.push(obj);
		}
		else {
			newObj = obj;
		}

		var featureCollection = map.data.addGeoJson(newObj);

		_.each(featureCollection, function (feature) {
			// Add each GeoJson feature to defined collection
			Mapi.addObject({
				groupId: args.collection,
				id: feature.getId(),
				object: feature
			});
		});

		// Uses some style properties of GeoJson features
		map.data.setStyle(function (feature) {
			return ({
				fillColor: feature.getProperty('fill'),
				strokeWeight: feature.getProperty('stroke-width')
			});
		});
	}
}
