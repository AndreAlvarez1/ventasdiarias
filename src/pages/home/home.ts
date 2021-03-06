import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConectorProvider} from '../../providers/conector/conector';
import { Chart } from 'chart.js';
import { MemoriaProvider} from '../../providers/memoria/memoria';
import { AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  //public ventaEmpresa: any;
  barChart: any;
  lineChart: any;
  tabla: any;
  fecha: Date;
  fechaSelect: any;
  fechaChile: any = new Date();
  local: any;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public conector: ConectorProvider,
              private callNumber: CallNumber,
              public memoria: MemoriaProvider) {
              this.tabla = this.memoria.empresa.Tabla;
              this.local = this.memoria.locales[0].Id;

    }

ngOnInit(){

  this.formatoFecha(this.fechaChile);
  console.log("La Fecha de Chile es: ", this.fechaChile);
  this.cargaDatos();
  console.log("esta es la empresa", this.memoria.empresa);

}


ionViewDidLoad() {
}


mesAnumero(mesAbreviado){
  let mesNum: any;
  switch (mesAbreviado) {
  case "Jan":
    mesNum = "01";
    break;
  case "Feb":
    mesNum = "02";
    break;
  case "Mar":
    mesNum = "03";
    break;
  case "Apr":
    mesNum = "04";
    break;
  case "May":
    mesNum = "05";
    break;
  case "Jun":
    mesNum = "06";
    break;
  case  "Jul":
    mesNum = "07";
    break;
  case  "Aug":
    mesNum = "08";
    break;
  case  "Sep":
    mesNum = "09";
    break;
  case  "Oct":
    mesNum = "10";
    break;
  case  "Nov":
    mesNum = "11";
    break;
  case  "Dec":
    mesNum = "12";
}
  return mesNum;
}


formatoFecha(fecha){
      const anno = fecha.toString().substring(11,15);
      const dia = fecha.toString().substring(8,10);
      const mesPalabra = fecha.toString().substring(4,7);
      const mes = this.mesAnumero(mesPalabra);
      this.fechaSelect = dia+"-"+mes+"-"+anno;
}



recargarDatos(local){
  //comentado porque solo se muestran informes del dia actual//
  //this.formatoFecha(this.fecha);
      this.formatoFecha(this.fechaChile)
      this.local = local;
      if (this.barChart && this.lineChart){
        this.removeData(this.barChart);
        this.removeData(this.lineChart);
      }
      this.cargaDatos();
}



cargaDatos(){
      console.log("Traigo las ventas de", `ventasdiarias/empresa/tabla/${this.tabla}/local/${this.local}/fecha/${this.fechaSelect}` )
      this.conector.traedatosGet(`ventasdiarias/empresa/tabla/${this.tabla}/local/${this.local}/fecha/${this.fechaSelect}`)
          .subscribe(ventaEmpresa => {    if (ventaEmpresa.Data.length > 0){
                                          const ventas = ventaEmpresa.Data[0]
                                          this.dibujarBarras(ventas.Vtadiaant,ventas.Vtadiaact);
                                          this.dibujarLineas([
                                                             ventas.H_00,
                                                             ventas.H_01,
                                                             ventas.H_02,
                                                             ventas.H_03,
                                                             ventas.H_04,
                                                             ventas.H_05,
                                                             ventas.H_06,
                                                             ventas.H_07,
                                                             ventas.H_08,
                                                             ventas.H_09,
                                                             ventas.H_10,
                                                             ventas.H_11,
                                                             ventas.H_12,
                                                             ventas.H_13,
                                                             ventas.H_14,
                                                             ventas.H_15,
                                                             ventas.H_16,
                                                             ventas.H_17,
                                                             ventas.H_18,
                                                             ventas.H_19,
                                                             ventas.H_20,
                                                             ventas.H_21,
                                                             ventas.H_22,
                                                             ventas.H_23
                                                           ]);
                                          this.dibujarVentas(ventas.Vtadiaact);
                                  }else{
                                    this.showAlert();
                                  }
                            });
}



dibujarVentas(ventas){
      document.getElementById("ventas").innerHTML = "$"+ventas.toLocaleString()
}


dibujarBarras(ayer,hoy){
        this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'bar',
          data: {
              labels: ["Promedio", "Hoy"],
              datasets: [{
                  label: 'Ventas',
                  data: [ayer,hoy],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 159, 64, 0.9)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,0)',
                      'rgba(54, 162, 235, 0)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }

      });
}

dibujarLineas(ventas){
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
      labels: ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
      datasets: [{
          data: ventas,
          label: "Ventas x Hora",
          borderColor: "#3e95cd",
          fill: true
        },
      ]
      },
      options: {
      title: {
        display: false,
        text: 'Ventas por hora'
      }
      }
      });
}

removeData(chart) {
     chart.data.labels.pop();
     chart.data.datasets.pop();
     chart.update();
}


showAlert() {
   const alert = this.alertCtrl.create({
     title: 'Lo Sentimos',
     subTitle: 'El local no tiene ventas aún',
     buttons: ['OK']
   });
   alert.present()
}


call(numero){
  this.callNumber.callNumber(numero, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
}




}
