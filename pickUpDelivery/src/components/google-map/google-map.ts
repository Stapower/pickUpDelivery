import { Component, ViewChild } from '@angular/core';

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

  constructor() {
  }

  ngOnInit(){
    this.initMap();
  }

  initMap(){
    
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    this.setCurrentPosition();

    let coords = new google.maps.LatLng(45,100);
    let mapOptions: google.maps.MapOptions = {
      center : coords,
      zoom : 14,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapHtmlElement.nativeElement, mapOptions)

    directionsDisplay.setMap(this.map);
    
    var geocoder = new google.maps.Geocoder();
    var address = "uspallata 309, claypole, buenos aires, argentina";

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
  setCurrentPosition(){
    //currentPosition : any; this should be object geocoderRESULT and i should return this object.
    navigator.geolocation.getCurrentPosition(function(position) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        "location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
      },
      function(results, status) {
        alert(results[0].formatted_address);
        if (status == google.maps.GeocoderStatus.OK)
        (<HTMLInputElement>document.getElementById("start")).value = results[0].formatted_address;
        results[0].
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
