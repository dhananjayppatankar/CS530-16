// This function finds the distance between 2 points in miles.
// reference : http://www.geodatasource.com/developers/javascript
function getDistanceBetweenTwoPointsInMiles(fromLatitude, fromLongitude, toLatitude, toLongitude) {
	// ToDo: Check if latitudes, longitudes are valid.
	var radfromLatitude = Math.PI * fromLatitude / 180
		var radtoLatitude = Math.PI * toLatitude / 180
		var theta = fromLongitude - toLongitude
		var radtheta = Math.PI * theta / 180
		var distance = Math.sin(radfromLatitude) * Math.sin(radtoLatitude) + Math.cos(radfromLatitude) * Math.cos(radtoLatitude) * Math.cos(radtheta);
	distance = Math.acos(distance);
	distance = distance * 180 / Math.PI;
	distance = distance * 60 * 1.1515;
	return distance
}

function calculateClosestStop(fromLatittude, fromLongitude, busStops) {
	debugger;
	var closestStop;
	var currentDistance = 0;
	var previousDistance = 0;

	for (i = 0; i < busStops.length; i++) {
		currentDistance = 
		getDistanceBetweenTwoPointsInMiles(busStops[i].stopLat, busStops[i].stopLan, 
			fromLatittude, fromLongitude);

		/*console.log("BusStop : " + busStops[i].name);
		console.log("Distannce: " + currentDistance);*/

		if(i == 0){
			closestStop = busStops[i];
			previousDistance = currentDistance;
			continue;
		}	
		
		if (previousDistance > currentDistance){
			closestStop = busStops[i];
			previousDistance = currentDistance;
		}	
	}
	return closestStop;
}

function displayWalkRouteOnMap(fromLatitude, fromLongitude, toLatitude, toLongitude) {
	var start = new google.maps.LatLng(fromLatitude, fromLongitude);
	var end = new google.maps.LatLng(toLatitude, toLongitude);

	_displayDirections.setMap(_map);

	var directionServiceRequest = {
		origin: start,
		destination: end,
		travelMode: google.maps.TravelMode.WALKING
	};

	_directionService.route(directionServiceRequest, function (response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			_displayDirections.setDirections(response);
			$('#divDirections').html("");
			$('#divDirections').html(_displayDirections.setPanel(document.getElementById("divDirections")));
		}
	});
}