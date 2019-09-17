import { LoginPage } from './../pages/login/login';

import { TabsPage } from './../pages/tabs/tabs';

import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;
  
  pages: Array<{title: string, component: any}>;  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Cerrar sesion', component: LoginPage },
    ];
  }
  
  navegarAContacto(page){
    this.nav.setRoot(page.component)
  }
}




