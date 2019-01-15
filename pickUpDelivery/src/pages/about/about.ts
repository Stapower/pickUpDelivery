import { Order } from './../../class/Order';
import { DatabaseConnectionComponent } from './../../components/database-connection/database-connection';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
    this.orders = new Array();
  }

  orders : Array<Order>;
  cosa : any;
  ngOnInit(){
    //this.cosa = this.databaseConnectionComponent.retrieveOrdersWithLogin();
  }

}
