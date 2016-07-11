/*
	version: 1.0.0
*/
traffic: function () {
	var Mapi = this,
		map = Mapi.map;

	var layer = Mapi.objects.layers ? Mapi.objects.layers.traffic : null;

	if (layer && layer.map) {
		layer.setMap(null);
	} else {
		layer = new google.maps.TrafficLayer();

		layer.setMap(map);
		this.addObject('layers', 'traffic', layer);
	}
}
