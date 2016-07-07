// Google Maps library: visualization
heatmap: function (className, options) {
	var Mapi = this,
		map = Mapi.map;

	options = options || {};

	if (!className) {
		throw ('You have to pass a class to create a heatmap');
	}

	var objs = Mapi.objects[className];

	var points = [];

	_.each(objs, function (obj) {
		if (options.ponderationKey) {
			poderation = obj[ponderationKey] || 1;

			for (var i = 0; i < poderation; i++) {
				points.push(new google.maps.LatLng(obj.position.lat(), obj.position.lng()));
			}
		} else {
			points.push(new google.maps.LatLng(obj.position.lat(), obj.position.lng()));
		}
	});

	if (!points) {
		throw ('The class ' + className + ' have no points');
	}

	// Source: https://developers.google.com/maps/documentation/javascript/examples/layer-heatmap?hl=pt-br

	Mapi.objects.heatmap = new google.maps.visualization.HeatmapLayer({
		data: points,
		map: map
	});

	var heatmap = Mapi.objects.heatmap;

	var gradient = options.gradient || [
			'rgba(0, 255, 0, 0)',
			'rgba(255, 50, 45, 1)',
			'rgba(255, 80, 45, 1)',
			'rgba(255, 0, 0, 1)'
		];

	heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
	heatmap.set('radius', heatmap.get('radius') ? null : options.radius || 40);
	heatmap.set('opacity', heatmap.get('opacity') ? null : options.opacity || 0.5);
}
