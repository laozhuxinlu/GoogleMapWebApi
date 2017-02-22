
var searchID;
var messageShow;

function bodyInit() {
	searchID = document.getElementById("searchInput");
	messageShow = document.getElementById("showInput");
	mapInit();
}


function focusInput() {
if (searchID.value == "Please input a please")
	searchID.value = "";
}

function changeInput() {
	setShowmessage(searchID.value);
}

function setShowmessage(msg) {
	// body...
	messageShow.innerHTML = msg;
}

function addShowmessage(msg) {
	// body...
	messageShow.innerHTML = messageShow.innerHTML + '<br />' + msg;
}

function buttonClick(){
	console.log("CLay:: buttonClick");
	getPossion();
	findNearPlace();
}

function getPossion() {
	// body...
	if(navigator.geolocation){
		console.log("Clay:: navigation.geolocation");
		var opt = {
			enableHighAccurary: true,
			timeout: 5000,
			maxmumAge: 0		
		};
		navigator.geolocation.getCurrentPosition(successPos,errorPos,opt);
	
	}else{
		console.log("Clay NO support");	
	}
}

function successPos(pos){
	console.log("Clay:: Lat " + pos.coords.latitude);
	console.log("Clay:: Log " + pos.coords.longitude);
	messageShow.innerHTML = 'Lat: ' + pos.coords.latitude + '; Log: ' + pos.coords.longitude;
}

function errorPos(err){
	console.log("Clay:: Error --> " + err.message);
}

function findNearPlace() {
	// body...
	var pyrmont = {lat: 31.202, lng: 121.587}; //zhangjianggaoke
	var map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 15
        });

	var service = new google.maps.places.PlacesService(map);
	
	//more requice details from: service.nearbySearch.makefile
	var request = {
			location: pyrmont,
        	radius: 1000,
        	type: ['food']
	};
    service.nearbySearch(request, findPlaceCallback);
}

function findPlaceCallback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
        	//more details form: results[i].makefile
        	//createMarker(results[i]);  // create the marker on map
        	console.log("Clay:: " + results[i].name);
        	addShowmessage(results[i].name);
            //ShowTheObject(results[i]);
          }
        }
    }

function createMarker(place) {
    var placeLoc = place.geometry.location;
    console.log("Clay:: placeName --> " + place.name);
    var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
    	});

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

function ShowTheObject(obj){  
    var des = "";  
        for(var name in obj){  
        des += name + ":" + obj[name] + ";";  
         }  
    console.log("Clay:: object --> " + des);
}  

//search box by Autocomplete

//choice counrty:
var countries = {
  'au': {
    center: {lat: -25.3, lng: 133.8},
    zoom: 4
  },
  'br': {
    center: {lat: -14.2, lng: -51.9},
    zoom: 3
  },
  'ca': {
    center: {lat: 62, lng: -110.0},
    zoom: 3
  },
  'fr': {
    center: {lat: 46.2, lng: 2.2},
    zoom: 5
  },
  'de': {
    center: {lat: 51.2, lng: 10.4},
    zoom: 5
  },
  'mx': {
    center: {lat: 23.6, lng: -102.5},
    zoom: 4
  },
  'nz': {
    center: {lat: -40.9, lng: 174.9},
    zoom: 5
  },
  'it': {
    center: {lat: 41.9, lng: 12.6},
    zoom: 5
  },
  'za': {
    center: {lat: -30.6, lng: 22.9},
    zoom: 5
  },
  'es': {
    center: {lat: 40.5, lng: -3.7},
    zoom: 5
  },
  'pt': {
    center: {lat: 39.4, lng: -8.2},
    zoom: 6
  },
  'us': {
    center: {lat: 37.1, lng: -95.7},
    zoom: 3
  },
  'uk': {
    center: {lat: 54.8, lng: -4.6},
    zoom: 5
  }
};

function setAutocompleteCountry(argument) {
	// body...
	var country = document.getElementById('countryChoice').value;
	var aCenter = countries[country].center;
	var aZoom = countries[country].zoom;

}

//Autocomplete
var autocomplete;
//var countryRestrict = {'country': 'us'};
var countryRestrict = {'country': 'cn'};
function mapInit() {
	// body...
	var defaultBounds = new google.maps.LatLngBounds(
  	new google.maps.LatLng(-33.8902, 151.1759),
  	new google.maps.LatLng(-33.8474, 151.2631));

	autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */ (
      document.getElementById('searchInput')), {
      bounds: defaultBounds,
      types: ['(cities)'],
      componentRestrictions: countryRestrict
    });
	//if you choice a please, will run onPlaceChanged()
    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
	// body...
	var place = autocomplete.getPlace();
	ShowTheObject(place);
	//setShowmessage(place);
	console.log("Clay:: onPlaceChanged");

}







