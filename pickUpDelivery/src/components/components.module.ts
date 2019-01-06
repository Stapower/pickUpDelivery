import { NgModule } from '@angular/core';
import { GoogleMapComponent } from './google-map/google-map';
import { TripInformationComponent } from './trip-information/trip-information';
@NgModule({
	declarations: [GoogleMapComponent,
    TripInformationComponent],
	imports: [],
	exports: [GoogleMapComponent,
    TripInformationComponent]
})
export class ComponentsModule {}
