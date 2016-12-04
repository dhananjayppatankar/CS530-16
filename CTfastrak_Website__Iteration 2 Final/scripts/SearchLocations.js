var _map;
var _displayDirections;
var _directionService;
var _fastrakBusStops = [{
		id: "12283",
		name: "East Main St Station Platform A",
		stopLat: "41.6714820",
		stopLan: "-72.766231"
	}, {
		id: "12284",
		name: "East St. Station Platform A",
		stopLat: "41.6879390",
		stopLan: "-72.758109"
	}, {
		id: "12285",
		name: "Cedar St Station Platform A",
		stopLat: "41.6963630",
		stopLan: "-72.753477"
	}, {
		id: "12286",
		name: "Newington Junction Station Platform A",
		stopLat: "41.7164150",
		stopLan: "-72.736083"
	}, {
		id: "12288",
		name: "Flatbush Ave Station Platform A",
		stopLat: "41.7417090",
		stopLan: "-72.716480"
	}, {
		id: "12289",
		name: "Kane St Station Platform A",
		stopLat: "41.7504160",
		stopLan: "-72.708981"
	}, {
		id: "12290",
		name: "Park St Station Platform A",
		stopLat: "41.7570960",
		stopLan: "-72.703676"
	}, {
		id: "12296",
		name: "Parkville Station Platform B",
		stopLat: "41.7570870",
		stopLan: "-72.703906"
	}, {
		id: "12297",
		name: "Kane St Station Platform B",
		stopLat: "41.7504610",
		stopLan: "-72.709077"
	}, {
		id: "12298",
		name: "Flatbush Ave Station Platform B",
		stopLat: "41.7411910",
		stopLan: "-72.716347"
	}, {
		id: "12299",
		name: "Elmwood Station Platform B",
		stopLat: "41.7305090",
		stopLan: "-72.724864"
	}, {
		id: "12300",
		name: "Newington Junction Station Platform B",
		stopLat: "41.7162100",
		stopLan: "-72.736410"
	}, {
		id: "12301",
		name: "Cedar St Station Platform B",
		stopLat: "41.6958540",
		stopLan: "-72.753853"
	}, {
		id: "12302",
		name: "East St. Station Platform B",
		stopLat: "41.6876170",
		stopLan: "-72.758666"
	}, {
		id: "12303",
		name: "East Main St Station Platform B",
		stopLat: "41.6715000",
		stopLan: "-72.766279"
	}, {
		id: "12305",
		name: "New Britain Station G",
		stopLat: "41.6684040",
		stopLan: "-72.779130"
	}, {
		id: "12383",
		name: "Sigourant St Lot",
		stopLat: "41.7647200",
		stopLan: "-72.694831"
	}, {
		id: "12482",
		name: "Cedar St Lot",
		stopLat: "41.6961490",
		stopLan: "-72.753925"
	}, {
		id: "12483",
		name: "Cedar St. Lot",
		stopLat: "41.6961580",
		stopLan: "-72.754615"
	}, {
		id: "12562",
		name: "New Britain Station Bay L",
		stopLat: "41.6686730",
		stopLan: "-72.780340"
	}, {
		id: "12563",
		name: "New Britain Station Bay B",
		stopLat: "41.6687530",
		stopLan: "-72.779529"
	}, {
		id: "12586",
		name: "New Britain Bay R Express",
		stopLat: "41.6682970",
		stopLan: "-72.778852"
	}, {
		id: "12587",
		name: "New Britain Station S Express",
		stopLat: "41.6689230",
		stopLan: "-72.780049"
	}, {
		id: "12589",
		name: "New Britain Station J",
		stopLat: "41.6685390",
		stopLan: "-72.779735"
	}, {
		id: "12618",
		name: "New Britain Station D",
		stopLat: "41.6686190",
		stopLan: "-72.778948"
	},
];

var _fromLocationAutoComplete;
var _toLocationAutoComplete;
var _usersCurrentLocation;
var _findLocationAutoComplete;

function fillInAddress() {
	// Get the place details from the autocomplete object.
	var place = _fromLocationAutoComplete.getPlace();
	console.log(place);
}

function initGoogleAutoComplete() {
	_fromLocationAutoComplete = new google.maps.places.Autocomplete((document.getElementById('inputFromLocation')), {
			types: ['geocode']
		});
	_toLocationAutoComplete = new google.maps.places.Autocomplete((document.getElementById('inputToLocation')), {
			types: ['geocode']
		});

	_findLocationAutoComplete = new google.maps.places.Autocomplete((document.getElementById('inputFindLocation')), {
			types: ['geocode']
		});
		
	_fromLocationAutoComplete.addListener('place_changed', fillInAddress);
	_toLocationAutoComplete.addListener('place_changed', fillInAddress);
	_findLocationAutoComplete.addListener('place_changed', fillInAddress);
	
	
	 var input = document.getElementById('inputFindLocation');
	 var searchBox = new google.maps.places.SearchBox(input);
     //_map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	
	
	        // Bias the SearchBox results towards current map's viewport.
        _map.addListener('bounds_changed', function() {
          searchBox.setBounds(_map.getBounds());
        });
	        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
         searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();
			
          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
		  
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(50, 50)
            };


			
            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: _map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          _map.fitBounds(bounds);
        });
	
	 
	
}

$(function () {

	$("#clearFromLocation").click(function () {
		$("#inputFromLocation").val('');
	});

	$("#clearToLocation").click(function () {
		$("#inputToLocation").val('');
	});
	
	$("#clearFindLocation").click(function () {
		$("#inputFindLocation").val('');
	});

	$("#currentFromLocation, #currentToLocation").click(function () {
		//getCurrentLocation();
	});

	$("#btnSubmit").click(function(){
		/*var nearestBusStop = calculateClosestStop(_usersCurrentLocation.coords.latitude,
_usersCurrentLocation.coords.longitude,_fastrakBusStops);

		console.log(nearestBusStop);

		displayWalkRouteOnMap(_usersCurrentLocation.coords.latitude, 
			_usersCurrentLocation.coords.longitude,
			nearestBusStop.stopLat,
			nearestBusStop.stopLan);
		*/
		displayBusRouteOnMap(
		_fromLocationAutoComplete.getPlace().geometry.location.lat(),
		_fromLocationAutoComplete.getPlace().geometry.location.lng(),
		_toLocationAutoComplete.getPlace().geometry.location.lat(),
		_toLocationAutoComplete.getPlace().geometry.location.lng()
		);
		
	});
});

function loadKmlLayer(src, map) {
    var kmlLayer = new google.maps.KmlLayer(src, {
      suppressInfoWindows: false,
      preserveViewport: true,
      map: map
    });

    google.maps.event.addListener(kmlLayer, 'click', function(event) {
      var content = event.featureData.infoWindowHtml;
      var testimonial = document.getElementById('capture');
      testimonial.innerHTML = content;
    });
}

function initGoogleComponents() {
	_map = new google.maps.Map(document.getElementById('divTransitMap'), {
			// ToDo: Center must be users current location
			center: {
				lat: 41.731969,
				lng: -72.740894
			},
			zoom: 11
		});

	

	// Used to retrive direction from google map
	_directionService = new google.maps.DirectionsService();
	// Used to render direction
	_displayDirections = new google.maps.DirectionsRenderer();

	var fastTrackBoundryCoordinates = [{
			lat: 41.806523,
			lng: -72.751854
		}, {
			lat: 41.806523,
			lng: -72.586373
		}, {
			lat: 41.726378,
			lng: -72.590493
		}, {
			lat: 41.616617,
			lng: -72.754944
		}, {
			lat: 41.645357,
			lng: -72.869614
		}, {
			lat: 41.750716,
			lng: -72.853821
		}, {
			lat: 41.806523,
			lng: -72.751854
		}
	];

	var fastrakPolygon =
		new google.maps.Polygon({
			paths: fastTrackBoundryCoordinates
		});

	// ToDo: Change the URL
	var ctfastrak = new google.maps.KmlLayer({
			map: _map,
			url: 'https://drive.google.com/uc?export=download&id=0BzSh5RLL0GhUNHZ0ZFhKWU9yZWM',
			preserveViewport: true,
			suppressInfoWindows: false
		});

	  debugger;
		ctfastrak.addListener('click', function(kmlEvent){
									//document.getElementById('content-header').innerHTML = ""
									var text = kmlEvent.featureData.name + '<br>' + kmlEvent.featureData.description;
									//showInContentWindow(text);
									console.log(text);
									});
	//loadKmlLayer('https://drive.google.com/uc?export=download&id=0B23t31esDVFRcVBaUGk5N3dRbVU', _map);

	initGoogleAutoComplete();

	var mapView = new google.maps.InfoWindow({
			map: _map
		});

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			_usersCurrentLocation = position;
		
			
			var currentPosition = {
				lat: parseFloat(position.coords.latitude),
				lng: parseFloat(position.coords.longitude)
			};

			mapView.setPosition(currentPosition);
			mapView.setContent('You are here.');
		
			var circle = new google.maps.Circle({
					center: currentPosition,
					radius: position.coords.accuracy
				});

			_fromLocationAutoComplete.setBounds(circle.getBounds());
			_toLocationAutoComplete.setBounds(circle.getBounds());
			//_map.setCenter(position);

		}, function () {
			handleLocationError(true, mapView, map.getCenter());
		});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, mapView, map.getCenter());
	}

}

function findNearestBusStop(lattitude, longitude) {
	displayWalkRouteOnMap(lattitude, longitude, parseFloat(_fastrakBusStops[0].stopLat), parseFloat(_fastrakBusStops[0].stopLan));
}

function displayBusRouteOnMap(fromLatitude, fromLongitude, toLatitude, toLongitude){
	debugger;
	var start = new google.maps.LatLng(fromLatitude, fromLongitude);
	var end = new google.maps.LatLng(toLatitude, toLongitude);

	_displayDirections.setMap(_map);

	var directionServiceRequest = {
		origin: start,
		destination: end,
		travelMode: google.maps.TravelMode.TRANSIT
	};
	
	_directionService.route(directionServiceRequest, function (response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			_displayDirections.setDirections(response);
			$('#divDirections').html("");
			$('#divDirections').html(_displayDirections.setPanel(document.getElementById("divDirections")));
		}
	});
}
