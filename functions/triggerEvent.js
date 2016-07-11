/*
	version: 1.0.0
*/
triggerEvent: function (obj, event, options) {
	event = event || 'click';

	options = options || {};

	new google.maps.event.trigger(obj, event, options);
}
