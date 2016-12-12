var _map;
var _displayDirections;
var _directionService;
var _fastrakBusStops = [
                {
                    "stop_id": 7984,
                    "stop_name": "Fenn Rd and CTFastrak",
                    "longitude": -72.756902,
                    "latitude": 41.696115
                },
                {
                    "stop_id": 12283,
                    "stop_name": "CTFastrak and East Main St Station",
                    "longitude": -72.766231,
                    "latitude": 41.671482
                },
                {
                    "stop_id": 12284,
                    "stop_name": "CTFastrak and East St Station",
                    "longitude": -72.758581,
                    "latitude": 41.687564
                },
                {
                    "stop_id": 12285,
                    "stop_name": "CTFastrak and Cedar St Station",
                    "longitude": -72.753671,
                    "latitude": 41.695952
                },
                {
                    "stop_id": 12286,
                    "stop_name": "CTFastrak and Newington Junction Station",
                    "longitude": -72.736253,
                    "latitude": 41.716183
                },
                {
                    "stop_id": 12287,
                    "stop_name": "CTFastrask and Elmwood Station",
                    "longitude": -72.724792,
                    "latitude": 41.730473
                },
                {
                    "stop_id": 12288,
                    "stop_name": "CTFastrak and Flatbush Ave Station",
                    "longitude": -72.71648,
                    "latitude": 41.741709
                },
                {
                    "stop_id": 12289,
                    "stop_name": "New Park Ave and Kane St Station",
                    "longitude": -72.708981,
                    "latitude": 41.750416
                },
                {
                    "stop_id": 12290,
                    "stop_name": "CTFastrak and Park St Station",
                    "longitude": -72.703676,
                    "latitude": 41.757096
                },
                {
                    "stop_id": 12291,
                    "stop_name": "CT Fastrak and Sigourney St Station",
                    "longitude": -72.694601,
                    "latitude": 41.764326
                },
                {
                    "stop_id": 12295,
                    "stop_name": "CT Fastrak and Sigourney St Station",
                    "longitude": -72.695062,
                    "latitude": 41.764211
                },
                {
                    "stop_id": 12296,
                    "stop_name": "CTFastrak and Parkville Station",
                    "longitude": -72.703906,
                    "latitude": 41.757087
                },
                {
                    "stop_id": 12297,
                    "stop_name": "CTFastrak and Kane St Station",
                    "longitude": -72.709077,
                    "latitude": 41.750461
                },
                {
                    "stop_id": 12298,
                    "stop_name": "CTFastrak and Flatbush Ave Station",
                    "longitude": -72.716347,
                    "latitude": 41.741191
                },
                {
                    "stop_id": 12299,
                    "stop_name": "CTFastrak and Elmwood Station",
                    "longitude": -72.724864,
                    "latitude": 41.730464
                },
                {
                    "stop_id": 12300,
                    "stop_name": "CTFastrak and Newington Junction Station",
                    "longitude": -72.736314,
                    "latitude": 41.716263
                },
                {
                    "stop_id": 12302,
                    "stop_name": "CTFastrak and East St Station",
                    "longitude": -72.758702,
                    "latitude": 41.687582
                },
                {
                    "stop_id": 12305,
                    "stop_name": "CTFastrak and New Britain Station G",
                    "longitude": -72.77913,
                    "latitude": 41.668404
                },
                {
                    "stop_id": 12320,
                    "stop_name": "Fenn Rd and Opp CTFastrak",
                    "longitude": -72.757302,
                    "latitude": 41.695338
                },
                {
                    "stop_id": 12383,
                    "stop_name": "CTFastrak and Sigourant St Lot",
                    "longitude": -72.694831,
                    "latitude": 41.76472
                },
                {
                    "stop_id": 12384,
                    "stop_name": "CT Fastrak and Sigourney Street Lot",
                    "longitude": -72.695134,
                    "latitude": 41.764434
                },
                {
                    "stop_id": 12385,
                    "stop_name": "Temple St and Grove St",
                    "longitude": -72.923996,
                    "latitude": 41.310826
                },
                {
                    "stop_id": 12441,
                    "stop_name": "New Park Ave and Opp CTFastrak",
                    "longitude": -72.724863,
                    "latitude": 41.731689
                },
                {
                    "stop_id": 12442,
                    "stop_name": "New Park Ave and CTFastrak",
                    "longitude": -72.724645,
                    "latitude": 41.731617
                },
                {
                    "stop_id": 12482,
                    "stop_name": "CTFastrak and Cedar St Lot",
                    "longitude": -72.753998,
                    "latitude": 41.69614
                },
                {
                    "stop_id": 12483,
                    "stop_name": "CTFastrak and Cedar St Lot",
                    "longitude": -72.754554,
                    "latitude": 41.696301
                },
                {
                    "stop_id": 12562,
                    "stop_name": "CTFastrak and New Britain Station L",
                    "longitude": -72.78034,
                    "latitude": 41.668673
                },
                {
                    "stop_id": 12563,
                    "stop_name": "CTFastrak and New Britain Station B",
                    "longitude": -72.779529,
                    "latitude": 41.668753
                },
                {
                    "stop_id": 12570,
                    "stop_name": "New Britain Ave and Hooker St",
                    "longitude": -72.85622,
                    "latitude": 41.675041
                },
                {
                    "stop_id": 12586,
                    "stop_name": "CTFastrak and New Britain Bay R Express",
                    "longitude": -72.778852,
                    "latitude": 41.668297
                },
                {
                    "stop_id": 12587,
                    "stop_name": "CTFastrak and New Britain Station S Express",
                    "longitude": -72.780049,
                    "latitude": 41.668923
                },
                {
                    "stop_id": 12589,
                    "stop_name": "CTFastrak and New Britain Station J",
                    "longitude": -72.779735,
                    "latitude": 41.668539
                },
                {
                    "stop_id": 12618,
                    "stop_name": "CTFastrak and New Britain Station D",
                    "longitude": -72.778948,
                    "latitude": 41.668619
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

		initGoogleAutoComplete();

		function showInContentWindow(text) {
		    var contentWindow = document.getElementById('divDirections')
		    contentWindow.innerHTML = text;
		};

		_map.data.setStyle(function (feature) {
		    return ({
		        icon: 'Bus_stop.png'
		    })
		});

    //Show approaching buses when a stop is clickedObject.keys
		_map.data.loadGeoJson('https://kvn-dly.github.io/fastrakStops.json');
		_map.data.addListener('click', function (event) {
		    document.getElementById('divDirections').innerHTML = ""
		    divtext = "";
		    var i;

		    for (i = 0; i < Object.keys(trips["entity"]).length; i++) {
		        var j;
		        for (j = 0; j < Object.keys(trips["entity"][i].trip_update.stop_time_update).length; j++) {
		            if (trips["entity"][i].trip_update.stop_time_update[j].stop_id == event.feature.getProperty('stop_id')) {
		                var d = new Date(1970, 0, 1);
		                var t;
		                d.setSeconds(trips["entity"][i].trip_update.stop_time_update[j].arrival.time)
		                d.setHours(d.getHours() - 5)
		                t = d.toLocaleTimeString()
		                divtext = divtext + '<br>' + trips["entity"][i].trip_update.vehicle.label + " : " + t
		            }
		        }
		    }

		    document.getElementById('content-header').innerHTML = event.feature.getProperty('stop_name');
		    document.getElementById('divDirections').innerHTML = divtext;
		    getTrips();
		    getBusLocations();
		    getAlerts();
		   
		});
		getTrips();

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

    function getTrips() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://65.213.12.244/realtimefeed/tripupdate/tripupdates.json", true);
        xhr.onload = function () { trips = eval("(" + xhr.response + ")") }
        xhr.send()
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

