/*
	version: 1.0.0
	Google Maps library: visualization
*/
heatmap: function (options) {
	var Mapi = this,
		map = Mapi.map;

	options = options || {};

	if (!options.groupId) {
		throw ('You have to pass a groupId property to create a heatmap');
	}

	var points = [];

	_(Mapi.objects[options.groupId]).each(function (obj) {
		if (options.ponderationKey) {
			poderation = obj[options.ponderationKey] || 1;

			for (var i = 0; i < poderation; i++) {
				points.push(new google.maps.LatLng(obj.position.lat(), obj.position.lng()));
			}
		} else {
			points.push(new google.maps.LatLng(obj.position.lat(), obj.position.lng()));
		}
	});

	if (points.length === 0) {
		throw ('The group ID ' + options.groupId + ' have no objects inside');
	}

	// Source: https://developers.google.com/maps/documentation/javascript/examples/layer-heatmap?hl=pt-br

	Mapi.addObject({
		groupId: 'heatmap',
		id: 'heatmap',
		object: new google.maps.visualization.HeatmapLayer({
			data: points,
			map: map
		})
	});

	var heatmap = Mapi.objects.heatmap.heatmap;

	var gradient = options.gradient || [
			'rgba(255, 255, 255, 0)',
			'rgba(255, 255, 0, 0.8)',

			'rgba(255, 180, 0, 1)',
			'rgba(255, 150, 0, 1)',
			'rgba(255, 120, 0, 1)',

			'rgba(255, 80, 0, 1)',
			'rgba(255, 50, 0, 1)',
			'rgba(255, 45, 0, 1)',
			'rgba(255, 40, 0, 1)',
			'rgba(255, 20, 0, 1)',
			'rgba(255, 10, 0, 1)',

			'rgba(255, 0, 0, 1)',
			'rgba(240, 0, 0, 1)',
			'rgba(230, 0, 0, 1)',
			'rgba(215, 0, 0, 1)',
			'rgba(200, 0, 0, 1)',
			'rgba(190, 0, 0, 1)',
			'rgba(180, 0, 0, 1)'
		];

	heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
	heatmap.set('radius', heatmap.get('radius') ? null : options.radius || 40);
	heatmap.set('opacity', heatmap.get('opacity') ? null : options.opacity || 0.5);
}
