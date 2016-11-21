var busArray = [];

function getBusLocations(){


var validBusArray = ['711','712','1432','1434','1435','1437','1438','1441','1443','1444','1447','1448','1449','1450','1454','1455','1457','1458','1463','1464','1465','1467','1471','1472','1473','1475','1476','A73','A77','A82']

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
		//if (validBusArray.indexOf(feed["entity"][i].id) > -1){
		
		var marker = new google.maps.Marker({
				position: {lat: feed["entity"][i].vehicle.position.latitude, lng: feed["entity"][i].vehicle.position.longitude},
				map: _map,
				title: feed["entity"][i].id,
				icon: 'Bus_Postion_Icon.png'});

		busArray.push(marker);
		}
	//}

}
//_displayDirections.setMap(map);

xhr.send()
}

//Reload realtime data every 30 seconds
setInterval(function(){clearTrip();getBusLocations()}, 3000);
//setInterval(function(){getTrips()}, 30000);
//setInterval(function(){getAlerts()}, 30000);



// Sets the map on all markers in the array.
function clearTrip() {

  for (var i = 0; i < busArray.length; i++) {
    busArray[i].setMap(null);
	_displayDirections.setMap(null);
  }
}
