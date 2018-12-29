import { Component, ViewChild } from '@angular/core';

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
    console.log("constructor: " + this.map);

  }

  ngOnInit(){
    console.log("ionViewDidLoad: " + this.map);

    this.initMap();
  }

  initMap(){
    console.log("initMap: " + this.map);

    let coords = new google.maps.LatLng(45,100);
    let mapOptions: google.maps.MapOptions = {
      center : coords,
      zoom : 14,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapHtmlElement.nativeElement, mapOptions)
    console.log("map: " + this.map);
  }

}
