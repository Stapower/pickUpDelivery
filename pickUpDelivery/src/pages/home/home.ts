import { DatabaseConnectionComponent } from './../../components/database-connection/database-connection';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	currentTab;
	genericStepId = "step-";
	minimunStep = 1;
	maximunStep = 3;

	constructor(public navCtrl: NavController) {
		console.log("*** home ***");
		this.currentTab = 1;
	}

	ngOnInit(){
		this.hideAlmostEverything();
	}

	hideAlmostEverything(){
		for(var i = 2; i <= this.maximunStep; i++){
			this.hideTab(i);
		}
	}

	next(){
		if(!this.validateNext())
			return;
		
		console.log("Next");
		this.hideTab(this.currentTab);

		this.currentTab ++;
		this.showTab(this.currentTab);
	}

	validateNext(){
		if(this.canGoNext()){
			return true;
		}
		else{
			alert("No se puede pasar de etapa.");
			return false;
		}
	}

	validatePrev(){
		if(this.canGoPrev()){
			return true;
		}
		else{
			alert("No se puede pasar de etapa.");
			return false;
		}
	}

	canGoNext(){
		if(this.currentTab == this.maximunStep)
			return false;

		return true;
	}

	canGoPrev(){
		if(this.currentTab <= this.minimunStep)
			return false;

		return true;
	}

	prev(){
		if(!this.validatePrev())
			return;
		console.log("Next");
		this.hideTab(this.currentTab);

		this.currentTab --;
		this.showTab(this.currentTab);
	}

	hideTab(tabToHide){
		console.log("hide tab: " + this.genericStepId+tabToHide);
		(<HTMLInputElement>document.getElementById(this.genericStepId+tabToHide)).style.display = "none";
	}

	showTab(tabToShow){
		console.log("show tab: " + tabToShow);
		(<HTMLInputElement>document.getElementById(this.genericStepId+tabToShow)).style.display = "block";
	}
}
