import { AddNegocioPage } from './../add-negocio/add-negocio';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }

  prueba(){
    this.navCtrl.push(AddNegocioPage);
  }

}
