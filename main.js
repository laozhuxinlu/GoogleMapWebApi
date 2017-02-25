//country list
var countries = {
  'cn': {
    center: {lat: 32.1, lng: 105.5},
    zoom: 5
  },
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

var countryRestrict;
var placeBoundsRestrict;
var restaurantRestrict;

var autocomplete_city;
var autocomplete_place;

var showDetails;

function setAutocompleteCountry() {
  // body...
  var country = document.getElementById('countryChoice').value;
  countryRestrict = {'country': country };
  showDetails.innerHTML = document.getElementById('countryChoice').value;
  autocomplete_city.setComponentRestrictions(countryRestrict);
  autocomplete_place.setComponentRestrictions(countryRestrict);
  document.getElementById('cityChoice').value='';
  document.getElementById('placeChoice').value='';
}

function cityChoiceChanged() {
  // body...
  var cityPlace = autocomplete_city.getPlace();
  placeBoundsRestrict = cityPlace.geometry.viewport;
  autocomplete_place.setBounds(placeBoundsRestrict);
  document.getElementById('placeChoice').value='';
}

function placeChoiceChanged() {
  // body...
  var suggestPlace = autocomplete_place.getPlace();
  var myLimitLatLng = String(suggestPlace.geometry.location);
  var regex="\\((.+?)\\)";
  var arr=myLimitLatLng.match(regex);
  var LaLn = arr[1];
  var myLat = parseFloat(LaLn.split(',')[0]);
  var myLng = parseFloat(LaLn.split(',')[1]);
  restaurantRestrict = {lat: myLat, lng: myLng};
  findNearRestaurant();
}

function findNearRestaurant() {
  // body...
  var map = new google.maps.Map(document.getElementById('map'), {
    center: restaurantRestrict
        });

  var service = new google.maps.places.PlacesService(map);
  
  //more requice details from: service.nearbySearch.makefile
  var request = {
      location: restaurantRestrict,
          radius: 5000,
          type: ['food']
  };
    service.nearbySearch(request, findRestaurantCallback);
}

function findRestaurantCallback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        showDetails.innerHTML = '';
        for (var i = 0; i < results.length; i++) {
          showRestaurMessage(i+1 + ': ' + results[i].name + '  [' + results[i].vicinity + ']');
          }
        }
}

function showRestaurMessage(msg) {
  // body...
  showDetails.innerHTML = showDetails.innerHTML + '<br />' + msg;
}

function bodyInit() {

  console.log('Clay:: bodyInit');
  document.getElementById('cityChoice').value='';
  document.getElementById('placeChoice').value='';

  countryRestrict = {'country': 'cn'};  //china
  placeBoundsRestrict = new google.maps.LatLngBounds(
    new google.maps.LatLng(30.7798012, 120.83970669999997),
    new google.maps.LatLng(31.6688967, 122.1137989)); //shanghai

  restaurantRestrict = {lat: 31.202, lng: 121.587}; //zhangjianggaoke

  showDetails = document.getElementById('placeDetail');

//city
  autocomplete_city = new google.maps.places.Autocomplete((
      document.getElementById('cityChoice')), {
      types: ['(cities)'],
      componentRestrictions: countryRestrict
    });
  autocomplete_city.addListener('place_changed', cityChoiceChanged);

//place
  var searchObj = {
    bounds: placeBoundsRestrict,
    componentRestrictions: countryRestrict,
    types: ['geocode']
  }
  autocomplete_place = new google.maps.places.Autocomplete((
      document.getElementById('placeChoice')), searchObj);
  autocomplete_place.addListener('place_changed', placeChoiceChanged);

// API TEST
//#####################################################################
	searchID = document.getElementById("searchInput1");
	messageShow = document.getElementById("showInput");
	mapInit_Autocomplete();
  mapInit_SearchBox();
}


var searchID;
var messageShow;

function focusInput() {
if (searchID.value == "Please input a please")
	searchID.value = "";
}

function changeInput1() {
  // setShowmessage(searchID.value);
	setShowmessage(document.getElementById('searchInput1').innerHTML);
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
        	type: ['food','school']
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

//################################################################################
//Autocomplete
var autocomplete;
var autocomplete1;
//var countryLimited = {'country': 'us'};
var countryLimited = {'country': 'cn'};

function mapInit_Autocomplete() {
	// body...
  //((30.7798012, 120.83970669999997), (31.6688967, 122.1137989)); SHANGHAI
  	// var defaultBounds = new google.maps.LatLngBounds(
   //    new google.maps.LatLng(30.7798012, 120.83970669999997),
   //    new google.maps.LatLng(31.6688967, 122.1137989));  //shanghai
    var defaultBounds = new google.maps.LatLngBounds(
    	new google.maps.LatLng(31.7164494, 117.1183777),
    	new google.maps.LatLng(31.9945999, 117.45414729999993));   //hefei

	autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */ (
      document.getElementById('searchInput1')), {
      bounds: defaultBounds,
      // types: ['(cities)'],
      types: ['geocode'],
      componentRestrictions: countryLimited
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
//#############################################################################
//SearchBox
var input;
var searchBox;

function mapInit_SearchBox() {
  // body...
  var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(30.7798012, 120.83970669999997),
    new google.maps.LatLng(31.6688967, 122.1137989));

  input = document.getElementById('searchInput2');

  searchBox = new google.maps.places.SearchBox(input, {
    bounds: defaultBounds
  });

}
//############################################################################
//AutocompleteService
function mapInit_AutocompleteService(suggestMsg) {
  var displaySuggestions = function(predictions, status) {
    if (status != google.maps.places.PlacesServiceStatus.OK) {
      console.log(status);
      return;
    }
  var getall = '';
    predictions.forEach(function(prediction) {
      getall = getall + '<br />' +  prediction.description;
    });
    setShowmessage(getall);
  };

  var service = new google.maps.places.AutocompleteService();
  var myLatLng = new google.maps.LatLng({lat: 31.202, lng: 121.587}); 
  var searchObj = {
    input: suggestMsg,
  }
  service.getQueryPredictions(searchObj, displaySuggestions);
}

function mapInit_AutocompleteService2(suggestMsg) {
  var displaySuggestions = function(predictions, status) {
    if (status != google.maps.places.PlacesServiceStatus.OK) {
      console.log(status);
      return;
    }
  var getall = '';
    predictions.forEach(function(prediction) {
      getall = getall + '<br />' +  prediction.description;
    });
    setShowmessage(getall);
  };

  var service = new google.maps.places.AutocompleteService();
  var myLatLng = new google.maps.LatLng({lat: 31.230416, lng: 121.473701}); //zhangjianggaoke
  // var myLatLng = new google.maps.LatLng({lat: 31.202, lng: 121.587}); //zhangjianggaoke
  // var myLatLng = new google.maps.LatLng({lat: 31.52, lng: 117.17}); //hefei
  // var myLatLng = new google.maps.LatLng({lat: 28.47, lng: 117.97}); //shangrao
  var searchObj = {
    input: suggestMsg,
    // componentRestrictions: countryLimited,  //限制国家
    location: myLatLng,                      
    radius: 5000,
    // types: ["establishment"]
    // types: ["geocode"]
    // types: ['(cities)']
    // types: ['(regions)']
    types: ['establishment']
  }
  service.getPlacePredictions(searchObj, displaySuggestions);
}

function changeInput3() {
  // body...
  if(document.getElementById('searchInput3').value){
    //mapInit_AutocompleteService(document.getElementById('searchInput3').value);
  mapInit_AutocompleteService2(document.getElementById('searchInput3').value);
  }
}

function ShowTheObject(obj){  
    var des = "";  
        for(var name in obj){  
        des += name + ":" + obj[name] + ";";  
         }  
    console.log("Clay:: object --> " + des);
} 

function setShowmessage(msg) {
  // body...
  messageShow.innerHTML = msg;
}

function addShowmessage(msg) {
  // body...
  messageShow.innerHTML = messageShow.innerHTML + '<br />' + msg;
}







