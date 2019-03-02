import { Viaje } from './../../class/Viaje';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { GoogleMapComponent } from './../google-map/google-map';
import { Order } from './../../class/Order';
import { Customer } from './../../class/Customer';
import { Component } from '@angular/core';
import {TripInformationComponent} from '../trip-information/trip-information';
import { Firebase } from '@ionic-native/firebase';
import { NavController, AlertController } from 'ionic-angular';
import { Observer } from 'rxjs';
import * as firebase from 'firebase/app';
import { Events } from 'ionic-angular';
import { DatabaseConnectionProvider } from './../../providers/database-connection/database-connection'; 

/**
 * Generated class for the CustomerInformationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'customer-information',
  templateUrl: 'customer-information.html'
})
export class CustomerInformationComponent {

  customer = new Customer();
  //email = "tomynfs2@gmail.com";
  //pass = "QMYwVKsScXzS6eup";//"</uR\6D+7HhXc?+*";
  order : Order;
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public afDatabase: AngularFireDatabase, private events: Events, private databaseConnectionProvider : DatabaseConnectionProvider) {}
  
  orders: any;
  
  // save the token server-side and use it to push notifications to this device

  
  enviarSolicitud(){
    //afDatabase.list('/songs').valueChanges();
    this.orders = this.afDatabase.list('/orders').valueChanges();
    this.order = new Order();
    this.order.customer = this.customer;
    this.order.animales = TripInformationComponent.animales;
    this.order.viaje = GoogleMapComponent.viaje;
    this.order.numero = this.databaseConnectionProvider != null ? this.databaseConnectionProvider.orders.length+1 : 0;
    console.log("orders: ", this.orders);
    this.events.publish('myEvent', this.order);
    this.events.publish('asd');

    this.events.publish('user:inertOrderWithLogin', this.order, Date.now());   
    //this.databaseConnectionComponent.inertOrderWithLogin(this.order);
    //this.events.publish('user:inertOrderWithLogin', this.order);
    //this.doLogin(this.email, this.pass);
    //this.addOrder();
    /*this.firebase.getToken()
      .then(token => console.log(`The token is ${token}`))
      .catch(error => console.error('Error getting token', error)); 
    
    this.firebase.onNotificationOpen()
      .subscribe(data => console.log(`User opened a notification ${data}`));
    
      this.firebase.onTokenRefresh()
      .subscribe((token: string) => console.log(`Got a new token ${token}`));
    */
  }

  /*doLogin(email, pass){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email,pass)
      .then(
        res => resolve(CustomerInformationComponent.addOrder(this.afDatabase)),
        err => reject(err))
    })
   }
   
   doLogout(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }

  static addOrder(afDatabase){
    console.log("addOrder");
    try{
      /*const myRef = this.afDatabase.database.ref().child("orders");
      myRef.push({name: 'order'});
      
        firebase.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      
      const d = afDatabase.list('/orders');
      d.push(CustomerInformationComponent.order)
      .then((i) => { console.log(i.key); }, (err) => {console.log(err); });
      /*handler : data => {
          const newSongRef = this.orders.push({});
          console.log("newSongRef: ", newSongRef);
          newSongRef.set({
            id: newSongRef.key,
            order: CustomerInformationComponent.order
        });  
      }
    }
    catch(ex){
      console.log("ex: ", ex);
    }
  }*/
  
}
