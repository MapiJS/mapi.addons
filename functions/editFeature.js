/*
	version: 1.0.0
*/
editFeature: function (objectClass, id) {
	var Mapi = this,
		map = Mapi.map;

	if (!Mapi.objects.regions) {
		return false;
	}

	var shape = [],
		editingShape = null,
		feature = Mapi.objects.regions[id];

	if (feature) {
		for (var i = 0; i < feature.getGeometry().getLength(); i++) {
			var shapeData = feature.getGeometry().getAt(i).getArray();
			shape.push(shapeData);
		}

		editingShape = new google.maps.Polygon({
			paths: shape,
			strokeColor: '#ff0000',
			strokeOpacity: 0.8,
			strokeWeight: 3,
			fillColor: '#fff',
			fillOpacity: 0.35,
			editable: true,
			map: map
		});

		map.data.remove(feature);

		Mapi.addObject('editingShapes', feature.getId(), editingShape);

		$('#map-edit-actions').show();
	}
}
