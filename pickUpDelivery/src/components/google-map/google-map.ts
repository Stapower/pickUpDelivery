import { Component, ViewChild } from '@angular/core';
import { Viaje } from './../../class/Viaje';
import { } from '@types/googlemaps';

declare var google;
 
/**
 * Generated class for the GoogleMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: 'google-map',
	templateUrl: 'google-map.html'
})

export class GoogleMapComponent {

	@ViewChild("map") mapHtmlElement;
	map: any;
	text: string;
	
	static viaje : Viaje;

	startPositionLat = -34.6070355; //obelisco
	startPositionLon = -58.3842309; //obelisco
	
	static directionsService;
	static directionsDisplay;

	constructor() {
	}

	ngOnInit(){
		this.initMap();
	}

	initMap(){	
		if(GoogleMapComponent.directionsService == null || GoogleMapComponent.directionsService == undefined)
			GoogleMapComponent.directionsService = new google.maps.DirectionsService;
		if(GoogleMapComponent.directionsDisplay == null || GoogleMapComponent.directionsDisplay == undefined)
			GoogleMapComponent.directionsDisplay = new google.maps.DirectionsRenderer;
		this.setCurrentPosition(this);
		this.createMap(this.startPositionLat, this.startPositionLon);

		//var geocoder = new google.maps.Geocoder();
		//var address = "uspallata 309, claypole, buenos aires, argentina";

	/*     console.log("before geocode");
		geocoder.geocode( { 'address': address}, function(results, status) {
		console.log("after geocode");

		if (status == google.maps.GeocoderStatus.OK) {
		var latitude = results[0].geometry.location.lat();
		var longitude = results[0].geometry.location.lng();
			alert(latitude);
			} 
		});  */
	}
	
	//Uses the google object GeocoderResult:
	/* GeocoderResult:  
		results[]: {
			types[]: string,
			formatted_address: string,
			address_components[]: {
			short_name: string,
			long_name: string,
			postcode_localities[]: string,
			types[]: string
			},
			partial_match: boolean,
			place_id: string,
			postcode_localities[]: string,
			geometry: {
			location: LatLng,
			location_type: GeocoderLocationType
			viewport: LatLngBounds,
			bounds: LatLngBounds
			}
		}
		}
	*/
	setCurrentPosition(googleMapsComponent){
		navigator.geolocation.getCurrentPosition(function(position) {	
		var geocoder = new google.maps.Geocoder();
		console.log("position: " + position.coords.latitude	)

		geocoder.geocode({
			"location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
		},
		function(results, status) {
			if (status == google.maps.GeocoderStatus.OK){

				this.currentPositionGeocoderResult = results[0];
				(<HTMLInputElement>document.getElementById("start")).value = results[0].formatted_address;
				googleMapsComponent.createMap(position.coords.latitude, position.coords.longitude);

			}
			else
				console.log("error retrieving adress");
			//$("#error").append("Unable to retrieve your address<br />");
		});
		},
		function(positionError){
			console.log("internal error retrieving adress: " + positionError.message);
		},
		{
			enableHighAccuracy: true,
			timeout: 10 * 1000 // 10 seconds
		});

	}

	createMap(lat, lon){
		let coords = new google.maps.LatLng(lat,lon);
		
		let mapOptions = {
			center : coords,
			zoom : 14,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		}
		this.map = new google.maps.Map(this.mapHtmlElement.nativeElement, mapOptions)
		GoogleMapComponent.directionsDisplay.setMap(this.map);
	}

	calcRoute() {

		var start = (<HTMLInputElement>document.getElementById('start')).value;
		var end = (<HTMLInputElement>document.getElementById('end')).value;

		var request = {
		  origin: start,
		  destination: end,
		  travelMode: 'DRIVING'
		};
		GoogleMapComponent.directionsService.route(request, function(result, status) {
			//routes[0]. //most of the time there is only 1 element, unles "provideRouteAlternatives field is set to true"
			console.log("result: ", result);
			GoogleMapComponent.viaje = new Viaje();
			GoogleMapComponent.viaje.from = result.routes[0].legs[0].start_address;
			GoogleMapComponent.viaje.to = result.routes[0].legs[0].end_address;
			GoogleMapComponent.viaje.duration = result.routes[0].legs[0].duration.value;
			GoogleMapComponent.viaje.distance = result.routes[0].legs[0].distance.value;

		  if (status == 'OK' 
				  && result.geocoded_waypoints[0] != null 
				  && result.geocoded_waypoints[0] != undefined 
				  && result.geocoded_waypoints[0].geocoder_status == 'OK')
			{

				GoogleMapComponent.directionsDisplay.setDirections(result);
			}
			  
		});
	  }
	/*     var onChangeHandler = function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay);
		}

		function calculateAndDisplayRoute(directionsService, directionsDisplay) {
		directionsService.route({
			origin: document.getElementById('start').nodeValue,
			destination: document.getElementById('end').nodeValue,
			travelMode: 'DRIVING'
		}, function(response, status) {
			if (status === 'OK') {
			directionsDisplay.setDirections(response);
			} else {
			window.alert('Directions request failed due to ' + status);
			}
		});
		} */
}
