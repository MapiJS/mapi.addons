setGeoJsonEvents: function (ev) {
	var Mapi = this,
		map = Mapi.map;

	// Mouseover
	map.data.addListener('mouseover', function (ev) {
		$('#region-name').html('Region ' + ev.feature.getId());
	});

	// Mouseout
	map.data.addListener('mouseout', function (ev) {
		$('#region-name').html('');
	});

	// Click
	map.data.addListener('click', function (ev) {
		Mapi.editFeature('regions', ev.feature.getId());
	});
}
