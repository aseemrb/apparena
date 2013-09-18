function getLocation(){
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else
	{
		alert("Geolocation not supported!");
	}
}

function showPosition(pos){
	var map=new GMaps({
		div: '#map',
		lat: pos.coords.latitude,
		lng: pos.coords.longitude,
	});
	//alert(pos.coords.latitude);

	map.addMarker({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        title: 'You are Here',
		infoWindow: {
				content: '<p>Home</p>'
		}
	});
};

function submit(){
	localStorage.data="Hi! :D";
	document.getElementById("inp").innerHTML="Data (Experience): " + localStorage.data;
}

function view(){
	window.open('diary.html');
}
getLocation();