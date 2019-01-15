import { TipoDeAnimal } from './../../enum/tipoDeAnimal';
import { Component } from '@angular/core';
import { Animal } from "../../class/animal";

/**
 * Generated class for the TripInformationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'trip-information',
  templateUrl: 'trip-information.html'
})
export class TripInformationComponent {

  cantidadDeAnimalesATransportar : number;
  static animales : Array<Animal>;
  animalesClass : Array<Animal>;
  tiposDeAnimales = TipoDeAnimal;

  constructor() {
    TripInformationComponent.animales = new Array();
    //this.tiposDeAnimales = new Array();
  
    console.log("tipo de animales: " , TipoDeAnimal);
  }

  setCantidadDeAnimales(numeroDeAnimales){
    this.cantidadDeAnimalesATransportar = numeroDeAnimales;
    console.log(numeroDeAnimales);
    for(var i= 0 ; i < numeroDeAnimales ; i++){
        TripInformationComponent.animales[i] = new Animal();
    }
    this.animalesClass = TripInformationComponent.animales;
  }



}
