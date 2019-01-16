import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MemoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemoriaProvider {

empresa: any;
locales: any;



  constructor(public http: Http) {
    console.log('Hello MemoriaProvider Provider');
  }

  limpiar(){
    this.empresa = undefined;
    this.locales = undefined;
  }
}
