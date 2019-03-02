import { Order } from './../../class/Order';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseConnectionProvider } from './../../providers/database-connection/database-connection'; 
import { Events } from 'ionic-angular';
import { providerDef } from '@angular/core/src/view';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  orders : Array<Order>;

  constructor(public navCtrl: NavController, public databaseProvider :  DatabaseConnectionProvider, private events: Events) {
    this.orders = new Array<Order>();  
  }

  ngOnInit(){
    this.events.subscribe('listOfOrders', (orders) => {
      console.log("listOfOrders");
      for(let order of orders){
        console.log('order', order);
      }
      this.orders = orders as Array<Order>;
    });

    //this.cosa = this.databaseConnectionComponent.retrieveOrdersWithLogin();
    //console.log(this.cosa);
  }

  ionViewDidLoad(){
    this.databaseProvider.load();
  }



}
