import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { GoogleMapComponent } from './../google-map/google-map';
import { Order } from './../../class/Order';
import { Customer } from './../../class/Customer';
import {TripInformationComponent} from '../trip-information/trip-information';
import { Firebase } from '@ionic-native/firebase';
import { NavController, AlertController } from 'ionic-angular';
import { Observer } from 'rxjs';
import * as firebase from 'firebase/app';
import { Events } from 'ionic-angular';

/**
 * Generated class for the DatabaseConnectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'database-connection',
  templateUrl: 'database-connection.html'
})
export class DatabaseConnectionComponent {

  text: string;
   email = "tomynfs2@gmail.com";
   pass = "QMYwVKsScXzS6eup";//"</uR\6D+7HhXc?+*";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public afDatabase: AngularFireDatabase, private events: Events) {
    //DatabaseConnectionComponent.staticAfDatabase = this.afDatabase;
    console.log("subscripto");
    events.subscribe('user:inertOrderWithLogin', (order, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log("inertOrderWithLogin");

      //this.inertOrderWithLogin(order);
    });

    this.events.subscribe('myEvent',(object) => {
        console.log("myEvent", object);
        //this.inertOrderWithLogin(object);

      // do something with object
      
      });
      this.events.subscribe('asd',() => {
        console.log("asd");
        //this.inertOrderWithLogin(object);

      // do something with object
      
      });
  }

  

   inertOrderWithLogin(order){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(this.email,this.pass)
      .then(
        res => resolve(this.addOrder(this.afDatabase, order)),
        err => reject(err))
    })
   }

   retrieveOrdersWithLogin(){
      var ref = this.afDatabase.list('/orders').valueChanges();
      console.log(ref);
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

  addOrder(afDatabase, order){
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
      */
      const d = this.afDatabase.list('/orders');
      d.push(order)
      .then((i) => { console.log(i.key); }, (err) => {console.log(err); });
      /*handler : data => {
          const newSongRef = this.orders.push({});
          console.log("newSongRef: ", newSongRef);
          newSongRef.set({
            id: newSongRef.key,
            order: CustomerInformationComponent.order
        });  
      }*/
    }
    catch(ex){
      console.log("ex: ", ex);
    }
  }

}
