triggerEvent: function (obj, event) {
	event = event || 'click';

	new google.maps.event.trigger(obj, event);
}
