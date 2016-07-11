/*
	version: 1.0.0
*/
resize: function () {
	var center = this.map.getCenter();

	google.maps.event.trigger(this.map, 'resize');

	this.map.setCenter(center);
}
