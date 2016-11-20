var busArray = [];

function getBusLocations(){

var markers = [];
var directionsDisplay;
var map;
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://65.213.12.244/realtimefeed/vehicle/vehiclepositions.json", true);
xhr.onload = function () {
	var feed = eval("("+ xhr.response +")");
	var coords = "";
	var i;
  for (var i = 0; i < busArray.length; i++) {
    busArray[i].setMap(null);
  }
  
  busArray = [];

	for(i=0; i < Object.keys(feed["entity"]).length;i++){
		
		var marker = new google.maps.Marker({
				position: {lat: feed["entity"][i].vehicle.position.latitude, lng: feed["entity"][i].vehicle.position.longitude},
				map: _map,
				title: feed["entity"][i].id,
				icon: 'Bus_Postion_Icon.png'});

		busArray.push(marker);
		}
}
xhr.send()
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
