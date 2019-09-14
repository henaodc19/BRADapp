import { NegociosService } from './../../app/servicios/negocios.service';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AddNegocioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-negocio',
  templateUrl: 'add-negocio.html',
})
export class AddNegocioPage {

  negocio:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public NegociosService: NegociosService,public alertCtrl: AlertController) {
    this.negocio = navParams.data.negocio || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNegocioPage');
  }

  //Esta funcion realiza la navegacion raiz y evita a si un boton
  //de back en el home.
  navegarAtras(){
    this.navCtrl.setRoot(TabsPage);
  }

  guardarNegocio(){
    this.negocio.id = Date.now();
    this.NegociosService.crearNegocio(this.negocio);
    console.log(this.negocio);
    const alert = this.alertCtrl.create({
      title: 'Listo!',
      subTitle: 'Negocio guardado correctamente',
      buttons: ['OK']
    });
    alert.present();
    this.negocio = {};
  }
}
