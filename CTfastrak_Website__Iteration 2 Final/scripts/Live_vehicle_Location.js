var busArray = [];
var fastrakRoutes = ["8641", "8641", "8642", "8642", "8645", "8645", "8646", "8646", "8647", "8647", "8648", "8648", "8649", "8649", "8650", "8650"]; 
var routshortname = ["101-Hartford/New Britain", "101-Hartford/New Britain", "102-Hartford/New Britain/Bristol", "102-Hartford/New Britain/Bristol", "121-MCC/Hartford/UConn Health", "121-MCC/Hartford/UConn Health", "128-Hartford/Westfarms/New Britain via Stanley Street", "128-Hartford/Westfarms/New Britain via Stanley Street", "140-CCSU Shuttle", "140-CCSU Shuttle", "144-Wethersfield/Westfarms via Newington Center and Brittany Farms", "144-Wethersfield/Westfarms via Newington Center and Brittany Farms", "153-Flatbush/Copaco via West Hartford Center", "153-Flatbush/Copaco via West Hartford Center", "161-St. Francis Hospital/Hartford Hospital via Capitol Avenue", "161-St. Francis Hospital/Hartford Hospital via Capitol Avenue"]; 

function getBusLocations(){

var markers = [];
var directionsDisplay;
var map;
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://65.213.12.244/realtimefeed/vehicle/vehiclepositions.json", true);
xhr.onload = function () {
	//var feed = eval("("+ xhr.response +")");
	var feed = JSON.parse(xhr.responseText);	
	var coords = "";
	var i;
  for (var i = 0; i < busArray.length; i++) {
    busArray[i].setMap(null);
  }
  
  busArray = [];

	for(i=0; i < Object.keys(feed["entity"]).length;i++){

		var isfastrakroutes = isInArray(feed["entity"][i].vehicle.trip.route_id, fastrakRoutes);		
		if (isfastrakroutes) {
			var routeindex = fastrakRoutes.indexOf(feed["entity"][i].vehicle.trip.route_id);
			var marker = new google.maps.Marker({
				position: {lat: feed["entity"][i].vehicle.position.latitude, lng: feed["entity"][i].vehicle.position.longitude},
				map: _map,
				title: routshortname[routeindex],
				icon: 'Bus_Postion_Icon.png'});

			busArray.push(marker);
			}
		}
displayBusRouteOnMap(
		_fromLocationAutoComplete.getPlace().geometry.location.lat(),
		_fromLocationAutoComplete.getPlace().geometry.location.lng(),
		_toLocationAutoComplete.getPlace().geometry.location.lat(),
		_toLocationAutoComplete.getPlace().geometry.location.lng()
		);
}
xhr.send()
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

//Reload realtime data every 9 seconds
setInterval(function(){clearTrip();getBusLocations()}, 9000);

// Sets the map on all markers in the array.
function clearTrip() {

  for (var i = 0; i < busArray.length; i++) {
    busArray[i].setMap(null);
	_displayDirections.setMap(null);
  }
}
