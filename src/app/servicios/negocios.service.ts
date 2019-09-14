import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable()
export class NegociosService{
    constructor(public afDB: AngularFireDatabase){

    }
    public getNegocios(){
        return this.afDB.list('/Negocios/');
    }

    public getNegocio(id){
        return this.afDB.object('/Negocios/'+ id);
    }

    public crearNegocio(Negocio){
        return this.afDB.database.ref('/Negocios/' + Negocio.id).set(Negocio);
    }
}