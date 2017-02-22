
var searchID;
var messageShow;

function bodyInit() {
	searchID = document.getElementById("searchInput");
	messageShow = document.getElementById("showInput");
}


function focusInput() {
if (searchID.value == "Please input a please")
	searchID.value = "";
}

function changeInput() {

messageShow.innerHTML = searchID.value;

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
	map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 15
        });

	var service = new google.maps.places.PlacesService(map);
	
	var request = {
			location: pyrmont,
        	radius: 1000,
        	type: ['food']
	};
        service.nearbySearch(request, findPlaceCallback);

        //more details from: service.nearbySearch.makefile
}

function findPlaceCallback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
        	//more details form: results[i].makefile
        	console.log("Clay:: " + results[i].name);
        	//console.log("Clay:: " + results[i]);
            //ShowTheObject(results[i]);
          }
        }
    }

function ShowTheObject(obj){  
    var des = "";  
        for(var name in obj){  
        des += name + ":" + obj[name] + ";";  
         }  
    console.log("Clay:: object --> " + des);
}  








