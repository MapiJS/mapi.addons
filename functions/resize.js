resize: function () {
	var center = this.map.getCenter();

	google.maps.event.trigger(this.map, 'resize');

	this.map.setCenter(center);
}
