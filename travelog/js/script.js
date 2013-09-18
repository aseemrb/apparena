// Copyright (c) Aseem Raj 2013

var cur_lat = 0.0;
var cur_long = 0.0;

function getLocation(){
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else
	{
		alert("Sorry! Geolocation not supported by your device or browser!");
	}
}
function showPosition(pos){
	var map=new GMaps({
		div: '#map',
		lat: pos.coords.latitude,
		lng: pos.coords.longitude,
	});
	map.addMarker({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        title: 'I am Here',
		infoWindow: {
				content: '<p>My current position</p>'
		}
	});
	cur_lat = pos.coords.latitude;
	cur_long = pos.coords.longitude;
	
};

function submit(){

	var experia = localStorage.getItem("xperia");
	var latis = localStorage.getItem("latits");
	var longis = localStorage.getItem("longits");
	
	if(cur_lat==0){
		alert("Network Problem!");
	}
	else if(experia){
		var experience = JSON.parse(experia);
		var lats = JSON.parse(latis);
		var longs = JSON.parse(longis);
	}
	else{
		var experience = [];
		var lats = [];
		var longs = [];
		localStorage.setItem("xperia",  JSON.stringify(experience));
		localStorage.setItem("xperia",  JSON.stringify(lats));
		localStorage.setItem("xperia",  JSON.stringify(longs));
	}
	if($('#inp').val()!=""){
		experience.push($('#inp').val());
		lats.push(cur_lat);
		longs.push(cur_long);
		
		localStorage.setItem("xperia",  JSON.stringify(experience));
		localStorage.setItem("latits",  JSON.stringify(lats));
		localStorage.setItem("longits",  JSON.stringify(longs));
		alert("Data noted!");
	}
	else{
		alert("You did not write anything!");
	}
	
	
	var retrieve = localStorage.getItem("xperia");
	alert(retrieve);
	//document.getElementById("inp").innerHTML=localStorage.data+" hello";
}
function delete_all(){
	var lat = prompt("Latitude");
	var lng = prompt("Longitude");
	tell(lat, lng);
}
// function tell(lat, lng){
	// Geocoder gcd = new Geocoder(context, Locale.getDefault());
	// List<Address> addresses = gcd.getFromLocation(lat, lng, 1);
	// if (addresses.size() > 0) 
		// document.getElementById("inp").innerHTML=addresses.get(0).getLocality();
// }



getLocation();