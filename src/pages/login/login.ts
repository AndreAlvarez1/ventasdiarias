import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ConectorProvider} from '../../providers/conector/conector';
import { HomePage } from '../home/home';
import { MemoriaProvider} from '../../providers/memoria/memoria';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  @ViewChild('botonRut', {read: ElementRef}) botonRut;
  @ViewChild('cajaRut', {read: ElementRef}) cajaRut;
  @ViewChild('datosUsuario', {read: ElementRef}) datosUsuario;
  @ViewChild('botonDesaparecer', {read: ElementRef}) botonDesaparecer;


  public rut: any;
  public token: any;
  public rutOk: boolean;
  public mail: string;
  public password :string;
  public empresas: any;
  public empresa: any;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public navParams: NavParams,
              public conector: ConectorProvider,
              public renderer: Renderer,
              public memoria: MemoriaProvider
             ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


ngOnInit(){
    this.rut = this.memoria.leerDato("miRut")
    .then(dato => this.rut = dato);

    this.memoria.leerDato("miToken")
    .then(dato => this.token = dato);

    /*
      this.rutOk = false;
      this.conector.traedatosGet("ventasdiarias/empresas")
      .subscribe(datos => {console.log(datos.Data);
                           this.empresas = datos.Data;
                          })
    */
}

  esconderBoton(){
    this.renderer.setElementStyle(this.cajaRut.nativeElement, 'display', 'none');
    this.renderer.setElementStyle(this.datosUsuario.nativeElement, 'left', '0');

  };

  izquierda(){
    this.renderer.setElementStyle(this.cajaRut.nativeElement, 'left', '-1000px');
  }


validarRut(rut){
    console.log(rut);
    this.conector.traedatosGet(`ventasdiarias/empresa/${rut}`)
    .subscribe(datoEmpresa => {
                                console.log(datoEmpresa.Data);
                                this.memoria.empresa = datoEmpresa.Data;
                                this.traerLocales(this.memoria.empresa.Tabla)
                                this.izquierda();
                                setTimeout(this.esconderBoton(), 10000);

                              },
                              error => {
                                            this.errorRut();
                                          }
                              );
};


validarToken(token){
  console.log(token);
  const rut = this.memoria.empresa.Rut;
  if (token == this.memoria.empresa.Token){
      console.log("match!");
      this.memoria.guardarDato("miRut",rut);
      this.memoria.guardarDato("miToken",token);
            this.navCtrl.push(HomePage);
    }else{
      this.errorToken();
    }
}

traerLocales(tabla){
      this.conector.traedatosGet(`ventasdiarias/empresa/tabla/${tabla}/locales`)
      .subscribe(locales => {console.log(locales.Data);
                           this.memoria.locales = locales.Data;
                         });
}


irVista(){
    this.navCtrl.push(HomePage);
};

errorRut() {
     const alert = this.alertCtrl.create({
       title: 'Error en el rut',
       subTitle: 'El rut no existe o fue mal digitado. Recuerda poner los puntos (.) y el guión (-) ',
       buttons: ['OK']
     });
     alert.present()
}

errorToken() {
     const alert = this.alertCtrl.create({
       title: 'Error en el Token',
       subTitle: 'El token no coincide, intentalo de nuevo o ponte en contacto con Gour-net para que podamos ayudarte',
       buttons: ['OK']
     });
     alert.present()
}

refrescar(){
    location.reload();
}


}
