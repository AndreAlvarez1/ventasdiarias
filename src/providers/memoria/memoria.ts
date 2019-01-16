import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the MemoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemoriaProvider {

empresa: any;
locales: any;



  constructor(public http: Http,
              private storage: Storage) {
    console.log('Hello MemoriaProvider Provider');
  }

  limpiar(){
    this.empresa = undefined;
    this.locales = undefined;
  }

  guardarDato(campo,valor){
    this.storage.set(campo, valor);
  }

  leerDato(campo){
    return this.storage.get(campo).then((val) => {
      return val
  });
  }


}
