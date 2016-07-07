// Depends of markerclusterer.js on your project
require('markerClusterer');

cluster: function (objectClass, options) {
	var Mapi = this,
		map = Mapi.map;

	if (Mapi.objects && Mapi.objects[objectClass]) {
		var objects = [];

		_.each(Mapi.objects[objectClass], function (obj) {
			objects.push(obj);
		});

		if (Mapi.objects.cluster && Mapi.objects.cluster.clusterer) {
			Mapi.objects.cluster.clusterer.clearMarkers();
			delete Mapi.objects.cluster.clusterer;
		}

		var clusterer = new MarkerClusterer(map, objects, {
			gridSize: options.gridSize || 100,
			maxZoom: options.maxZoom || 20
		});

		this.addObject('cluster', 'clusterer', clusterer);
	}
}
