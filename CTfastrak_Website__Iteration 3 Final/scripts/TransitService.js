var _tripUpdateUrl = "http://65.213.12.244/realtimefeed/tripupdate/tripupdates.json";
var _vehiclePositionUrl = "http://65.213.12.244/realtimefeed/vehicle/vehiclepositions.json";
var _alertsUrl = "http://65.213.12.244/realtimefeed/alert/alerts.json";
var _realTimeFeedUrl = "http://65.213.12.244/realtimefeed/externalfeed/trapezerealtimefeed.json";


function GetTripUpdate() {
	$.getJSON(_tripUpdateUrl).done(function (response) {
		return response;
	}).fail(function(){
		return null;
	});
}

function GetVehiclePositionUpdate() {
	$.getJSON(_tripUpdateUrl).done(function (response) {
		return response;
	}).fail(function(){
		return null;
	});
}
