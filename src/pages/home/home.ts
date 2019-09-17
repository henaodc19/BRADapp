
import { AddNegocioPage } from './../add-negocio/add-negocio';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  location:any;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }

  prueba(){
    this.navCtrl.push(AddNegocioPage);
  }

  getLocation(){
    console.log("perris");
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.location = resp;
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error de localizacion', error);
     });
  }

}
