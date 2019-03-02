import { DatabaseConnectionComponent } from './../components/database-connection/database-connection';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {GoogleMapComponent} from '../components/google-map/google-map';
import {TripInformationComponent} from '../components/trip-information/trip-information';
import {CustomerInformationComponent} from '../components/customer-information/customer-information';


import {ImageUploaderComponent} from '../components/image-uploader/image-uploader';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { config } from '../class/FirebaseConfig';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DatabaseConnectionProvider } from '../providers/database-connection/database-connection';


export const firebaseConfig = {
  apiKey: "AIzaSyAG8lKW1y7-ntNd_H5ROM4iAA2HbZwJSPc",
  authDomain: "pickupdelivery-1545977043479.firebaseapp.com",
  databaseURL: "https://pickupdelivery-1545977043479.firebaseio.com",
  projectId: "pickupdelivery-1545977043479",
  storageBucket: "pickupdelivery-1545977043479.appspot.com",
  messagingSenderId: "1091378351887"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GoogleMapComponent,
    TripInformationComponent,
    ImageUploaderComponent,
    CustomerInformationComponent,
    DatabaseConnectionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAG8lKW1y7-ntNd_H5ROM4iAA2HbZwJSPc",
      authDomain: "pickupdelivery-1545977043479.firebaseapp.com",
      databaseURL: "https://pickupdelivery-1545977043479.firebaseio.com",
      projectId: "pickupdelivery-1545977043479",
      storageBucket: "pickupdelivery-1545977043479.appspot.com",
      messagingSenderId: "1091378351887"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseConnectionProvider
  ]
})
export class AppModule {}
