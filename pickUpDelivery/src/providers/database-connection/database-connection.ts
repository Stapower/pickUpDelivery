import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Events } from 'ionic-angular';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Order } from './../../class/Order';


/*
  Generated class for the DatabaseConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseConnectionProvider {

  constructor(public afDatabase: AngularFireDatabase, private events: Events) {
  }

  public orders = new Array<Order>();

  load(){
    this.afDatabase.list('/orders')
			.valueChanges()
			.subscribe((datas) => {

          console.log("data retrieved from DB", datas)
          this.orders = datas as Array<Order>;

          this.events.publish('listOfOrders', this.orders);
          console.log("event listOfOrders - published");

				}
				,(err) => {
					console.log("probleme : ", err)
				}
    );
  }



  text: string;
	email = "tomynfs2@gmail.com";
	pass = "QMYwVKsScXzS6eup";//"</uR\6D+7HhXc?+*";
	//public orders: FirebaseListObservable<Order[]>;
  init(){}



	inertOrderWithLogin(order) {
		return new Promise<any>((resolve, reject) => {
			firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
				.then(
					res => resolve(this.addOrder(this.afDatabase, order)),
					err => reject(err))
		})
	}

	doLogout() {
		return new Promise((resolve, reject) => {
			if (firebase.auth().currentUser) {
				firebase.auth().signOut()
					.then(() => {
						resolve();
					}).catch((error) => {
						reject();
					});
			}
		})
	}

	addOrder(afDatabase, order) {
		console.log("addOrder");
		try {
			/*const myRef = this.afDatabase.database.ref().child("orders");
			myRef.push({name: 'order'});
		    
			  firebase.auth().signInAnonymously().catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // ...
			});
			*/

			this.afDatabase.list('/orders')
				.push(order)
				.then((i) => {
					console.log("key", i.key);
				},
					(err) => {
						console.log("err ", err);
					}
        );
        
        this.afDatabase.database.ref('/orders').transaction( orders => {
          var numeroDeOrdenes = orders.size() + 1;
          
          console.log("orders ", orders);

          order.numero = numeroDeOrdenes;
          console.log("numeroDeOrdenes ", numeroDeOrdenes);

          this.afDatabase.list('/orders')
          .push(order)
          .then((i) => {
            console.log("key2", i.key);
          },
            (err) => {
              console.log("err2 ", err);
            }
          );

          return event;
        });
				
			/*handler : data => {
				const newSongRef = this.orders.push({});
				console.log("newSongRef: ", newSongRef);
				newSongRef.set({
				  id: newSongRef.key,
				  order: CustomerInformationComponent.order
			  });  
			}*/
		}
		catch (ex) {
			console.log("ex: ", ex);
		}
	}
}
