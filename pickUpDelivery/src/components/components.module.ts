import { NgModule } from '@angular/core';
import { GoogleMapComponent } from './google-map/google-map';
import { TripInformationComponent } from './trip-information/trip-information';
import { ImageUploaderComponent } from './image-uploader/image-uploader';
import { CustomerInformationComponent } from './customer-information/customer-information';
import { DatabaseConnectionComponent } from './database-connection/database-connection';

@NgModule({
	declarations: [GoogleMapComponent,
	TripInformationComponent,
	ImageUploaderComponent,
    CustomerInformationComponent,
    DatabaseConnectionComponent],
	imports: [],
	exports: [GoogleMapComponent,
	TripInformationComponent,
	ImageUploaderComponent,
    CustomerInformationComponent,
    DatabaseConnectionComponent]
})
export class ComponentsModule {}
