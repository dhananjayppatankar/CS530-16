var busArray = [];
var fastrakRoutes = [8336, 8473, 8337, 8474, 8339, 8476, 8340, 8477, 8341, 8478, 8342, 8479, 8343, 8480, 8344, 8481]; 

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
			var marker = new google.maps.Marker({
				position: {lat: feed["entity"][i].vehicle.position.latitude, lng: feed["entity"][i].vehicle.position.longitude},
				map: _map,
				title: feed["entity"][i].id,
				icon: 'Bus_Postion_Icon.png'});

			busArray.push(marker);
			}
		}
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