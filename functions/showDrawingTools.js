showDrawingTools: function (options) {
	options.place = options.place || 'TOP_CENTER';

	var drawingModes = [];
	_.each(options.modes, function (item) {
		drawingModes.push(google.maps.drawing.OverlayType[item]);
	});

	if (this.drawingManager) {
		this.drawingManager.setMap(null);
		this.drawingManager = null;
	}

	this.drawingManager = new google.maps.drawing.DrawingManager({
		drawingControlOptions: {
			position: google.maps.ControlPosition[options.place],
			drawingModes: drawingModes
		},
		markerOptions: this.map.defaults,
		polygonOptions: this.map.defaults,
		polylineOptions: this.map.defaults,
		rectangleOptions: this.map.defaults
	});

	this.drawingManager.setMap(this.map);

	google.maps.event.addListener(this.drawingManager, 'overlaycomplete', function (ev, overlay) {
		return options.onComplete(this, ev, overlay);
	}.bind(this));
}
