transit: function () {
	var Mapi = this,
		map = Mapi.map;

	var layer = Mapi.objects.layers ? Mapi.objects.layers.transit : null;

	if (layer && layer.map) {
		layer.setMap(null);
	} else {
		layer = new google.maps.TransitLayer();

		layer.setMap(map);
		this.addObject('layers', 'transit', layer);
	}
}
