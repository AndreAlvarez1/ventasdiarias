webpackJsonp([2],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_memoria_memoria__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, alertCtrl, navParams, conector, renderer, memoria) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.conector = conector;
        this.renderer = renderer;
        this.memoria = memoria;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.rut = this.memoria.leerDato("miRut")
            .then(function (dato) { return _this.rut = dato; });
        this.memoria.leerDato("miToken")
            .then(function (dato) { return _this.token = dato; });
        /*
          this.rutOk = false;
          this.conector.traedatosGet("ventasdiarias/empresas")
          .subscribe(datos => {console.log(datos.Data);
                               this.empresas = datos.Data;
                              })
        */
    };
    LoginPage.prototype.esconderBoton = function () {
        this.renderer.setElementStyle(this.cajaRut.nativeElement, 'display', 'none');
        this.renderer.setElementStyle(this.datosUsuario.nativeElement, 'left', '0');
    };
    ;
    LoginPage.prototype.izquierda = function () {
        this.renderer.setElementStyle(this.cajaRut.nativeElement, 'left', '-1000px');
    };
    LoginPage.prototype.validarRut = function (rut) {
        var _this = this;
        console.log(rut);
        this.conector.traedatosGet("ventasdiarias/empresa/" + rut)
            .subscribe(function (datoEmpresa) {
            console.log(datoEmpresa.Data);
            _this.memoria.empresa = datoEmpresa.Data;
            _this.traerLocales(_this.memoria.empresa.Tabla);
            _this.izquierda();
            setTimeout(_this.esconderBoton(), 10000);
        }, function (error) {
            _this.errorRut();
        });
    };
    ;
    LoginPage.prototype.validarToken = function (token) {
        console.log(token);
        var rut = this.memoria.empresa.Rut;
        if (token == this.memoria.empresa.Token) {
            console.log("match!");
            this.memoria.guardarDato("miRut", rut);
            this.memoria.guardarDato("miToken", token);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            this.errorToken();
        }
    };
    LoginPage.prototype.traerLocales = function (tabla) {
        var _this = this;
        this.conector.traedatosGet("ventasdiarias/empresa/tabla/" + tabla + "/locales")
            .subscribe(function (locales) {
            console.log(locales.Data);
            _this.memoria.locales = locales.Data;
        });
    };
    LoginPage.prototype.irVista = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ;
    LoginPage.prototype.errorRut = function () {
        var alert = this.alertCtrl.create({
            title: 'Error en el rut',
            subTitle: 'El rut no existe o fue mal digitado. Recuerda poner los puntos (.) y el guión (-) ',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.errorToken = function () {
        var alert = this.alertCtrl.create({
            title: 'Error en el Token',
            subTitle: 'El token no coincide, intentalo de nuevo o ponte en contacto con Gour-net para que podamos ayudarte',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.refrescar = function () {
        location.reload();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('botonRut', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "botonRut", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('cajaRut', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "cajaRut", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('datosUsuario', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "datosUsuario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('botonDesaparecer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "botonDesaparecer", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/andre/Desktop/Programando/ventasdiarias/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding class="contenedor">\n\n  <ion-grid>\n\n      <ion-row class="caja-logo">\n        <ion-col col-12 col-md-4 offset-md-4>\n          <img src="../../assets/imgs/logo2.svg">\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row #cajaRut  class="esconder">\n          <ion-col col-12 col-md-4 offset-md-4>\n            <div>\n            <ion-item >\n              <ion-input type="text" [(ngModel)]="rut" placeholder="Rut Empresa"></ion-input>\n            </ion-item>\n              <button ion-button block outline color="light"(click)="validarRut(rut)" >Validar</button>\n            </div>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row #datosUsuario class="datos">\n          <ion-col col-12 col-md-4 offset-md-4>\n              <ion-item>\n                <ion-input type="password" [(ngModel)]="token" placeholder="Password" ></ion-input>\n              </ion-item>\n          </ion-col>\n\n          <ion-col col-6 col-md-2 offset-md-4>\n            <button ion-button block outline color="light" (click)="refrescar()">Volver</button>\n          </ion-col>\n          <ion-col col-6 col-md-2>\n            <button ion-button block outline color="light" (click)="validarToken(token)" >Entrar</button>\n          </ion-col>\n\n\n          <ion-col col-8 offset-4>\n            <a href="http://www.gour-net.cl">Olvidé mi contraseña</a>\n          </ion-col>\n      </ion-row>\n\n\n\n\n\n\n      <ion-row class="pie">\n          <ion-col col-12>\n            <p>Versión 0.0.1</p>\n        </ion-col>\n      </ion-row>\n\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/andre/Desktop/Programando/ventasdiarias/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__["a" /* ConectorProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_4__providers_memoria_memoria__["a" /* MemoriaProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		465,
		1
	],
	"../pages/soporte/soporte.module": [
		466,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_memoria_memoria__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, conector, callNumber, memoria) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.conector = conector;
        this.callNumber = callNumber;
        this.memoria = memoria;
        this.fechaChile = new Date();
        this.tabla = this.memoria.empresa.Tabla;
        this.local = this.memoria.locales[0].Id;
    }
    HomePage.prototype.ngOnInit = function () {
        this.formatoFecha(this.fechaChile);
        console.log("La Fecha de Chile es: ", this.fechaChile);
        this.cargaDatos();
        console.log("esta es la empresa", this.memoria.empresa);
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.mesAnumero = function (mesAbreviado) {
        var mesNum;
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
            case "Jul":
                mesNum = "07";
                break;
            case "Aug":
                mesNum = "08";
                break;
            case "Sep":
                mesNum = "09";
                break;
            case "Oct":
                mesNum = "10";
                break;
            case "Nov":
                mesNum = "11";
                break;
            case "Dec":
                mesNum = "12";
        }
        return mesNum;
        console.log(mesNum);
    };
    HomePage.prototype.formatoFecha = function (fecha) {
        var anno = fecha.toString().substring(11, 15);
        var dia = fecha.toString().substring(8, 10);
        var mesPalabra = fecha.toString().substring(4, 7);
        var mes = this.mesAnumero(mesPalabra);
        this.fechaSelect = dia + "-" + mes + "-" + anno;
    };
    HomePage.prototype.recargarDatos = function (local) {
        //comentado porque solo se muestran informes del dia actual//
        //this.formatoFecha(this.fecha);
        this.formatoFecha(this.fechaChile);
        this.local = local;
        if (this.barChart && this.lineChart) {
            this.removeData(this.barChart);
            this.removeData(this.lineChart);
        }
        this.cargaDatos();
    };
    HomePage.prototype.cargaDatos = function () {
        var _this = this;
        console.log("Traigo las ventas de", "ventasdiarias/empresa/tabla/" + this.tabla + "/local/" + this.local + "/fecha/" + this.fechaSelect);
        this.conector.traedatosGet("ventasdiarias/empresa/tabla/" + this.tabla + "/local/" + this.local + "/fecha/" + this.fechaSelect)
            .subscribe(function (ventaEmpresa) {
            if (ventaEmpresa.Data.length > 0) {
                var ventas = ventaEmpresa.Data[0];
                _this.dibujarBarras(ventas.Vtadiaant, ventas.Vtadiaact);
                _this.dibujarLineas([
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
                _this.dibujarVentas(ventas.Vtadiaact);
            }
            else {
                _this.showAlert();
            }
        });
    };
    HomePage.prototype.dibujarVentas = function (ventas) {
        document.getElementById("ventas").innerHTML = "$" + ventas.toLocaleString();
    };
    HomePage.prototype.dibujarBarras = function (ayer, hoy) {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Promedio", "Hoy"],
                datasets: [{
                        label: 'Ventas',
                        data: [ayer, hoy],
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
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    HomePage.prototype.dibujarLineas = function (ventas) {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
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
    };
    HomePage.prototype.removeData = function (chart) {
        chart.data.labels.pop();
        chart.data.datasets.pop();
        chart.update();
    };
    HomePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Lo Sentimos',
            subTitle: 'El local no tiene ventas aún',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.call = function (numero) {
        this.callNumber.callNumber(numero, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "lineCanvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/andre/Desktop/Programando/ventasdiarias/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n\n    <ion-grid>\n        <ion-row>\n          <ion-col col-10>\n            <ion-title>\n                Ventas Diarias\n            </ion-title>\n          </ion-col>\n          <ion-col col-2>\n            <ion-buttons>\n              <button ion-button icon-only menuToggle >\n                <ion-icon name="menu"></ion-icon>\n              </button>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <div class="encabezado">\n    <h1>Informe</h1><br>\n    <h2>Ventas del día</h2>\n    <p>Razón Social: {{this.memoria.empresa.Razon}}</p>\n\n<!--\n    <ion-item>\n        <ion-label>Start Time</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="fecha"></ion-datetime>\n    </ion-item>\n-->\n    <ion-item>\n       <ion-label>Locales</ion-label>\n       <ion-select [(ngModel)]="local" interface="localAlertOpts">\n         <ion-option *ngFor="let local of memoria.locales" [value]="local.Id" multiple="false">{{local.Descripcion}}</ion-option>\n       </ion-select>\n     </ion-item>\n    <button ion-button block outline color="light"(click)="recargarDatos(local)">Cargar Datos</button>\n\n  </div>\n\n<div class="graficos">\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n        <h2>Ventas</h2>\n        <h5>Total ventas del día hasta el momento</h5>\n        <h1 id="ventas" class="ventas">0</h1>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <h2>Ventas Diarias</h2>\n        <h5>Ventas actuales vs ventas mismo dia semana anterior</h5>\n        <canvas #barCanvas ></canvas>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <h2>Ventas por Hora</h2>\n        <h5>Ventas actuales vs promedio de ventas del dia durante el año</h5>\n        <canvas #lineCanvas ></canvas>\n\n      </ion-col>\n    </ion-row>\n</ion-grid>\n\n\n<ion-grid style="padding:0">\n\n  <ion-row>\n    <ion-col col-12 style="padding:0">\n      <iframe width="100%" height="400px" src="http://www.gour-net.cl/carrusel/"></iframe>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="club naranjo">\n    <ion-col col-12 >\n\n      <h1><ion-icon name="cloud"></ion-icon> Club Gour-net</h1>\n      <p>Puedes tener muchos informes más contratando Club Gour-net. </p>\n      <p>En esta plataforma no solo tendrás acceso a interesantes informes si no también tendrás respaldada tu base de datos completa en nuetro Data Center.</p>\n      <a href="http://gour-net.cl/#club">Saber más</a>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="footer">\n    <ion-col col-12 >\n      <img src="../../assets/imgs/logo2.svg" width="50%">\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n\n</div>\n\n<!--\n  <button ion-button (click)="call(224490070)">Llamar Oficina Gour-net</button>\n  <button ion-button (click)="call(56999189588)">Llamar Emergencias</button>\n-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/andre/Desktop/Programando/ventasdiarias/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__["a" /* ConectorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_conector_conector__["a" /* ConectorProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_memoria_memoria__["a" /* MemoriaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_memoria_memoria__["a" /* MemoriaProvider */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoportePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SoportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SoportePage = /** @class */ (function () {
    function SoportePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SoportePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SoportePage');
    };
    SoportePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-soporte',template:/*ion-inline-start:"/Users/andre/Desktop/Programando/ventasdiarias/src/pages/soporte/soporte.html"*/'<!--\n  Generated template for the SoportePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>soporte</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andre/Desktop/Programando/ventasdiarias/src/pages/soporte/soporte.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SoportePage);
    return SoportePage;
}());

//# sourceMappingURL=soporte.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_conector_conector__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_memoria_memoria__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/soporte/soporte.module#SoportePageModule', name: 'SoportePage', segment: 'soporte', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_conector_conector__["a" /* ConectorProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_memoria_memoria__["a" /* MemoriaProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 176,
	"./af.js": 176,
	"./ar": 177,
	"./ar-dz": 178,
	"./ar-dz.js": 178,
	"./ar-kw": 179,
	"./ar-kw.js": 179,
	"./ar-ly": 180,
	"./ar-ly.js": 180,
	"./ar-ma": 181,
	"./ar-ma.js": 181,
	"./ar-sa": 182,
	"./ar-sa.js": 182,
	"./ar-tn": 183,
	"./ar-tn.js": 183,
	"./ar.js": 177,
	"./az": 184,
	"./az.js": 184,
	"./be": 185,
	"./be.js": 185,
	"./bg": 186,
	"./bg.js": 186,
	"./bm": 187,
	"./bm.js": 187,
	"./bn": 188,
	"./bn.js": 188,
	"./bo": 189,
	"./bo.js": 189,
	"./br": 190,
	"./br.js": 190,
	"./bs": 191,
	"./bs.js": 191,
	"./ca": 192,
	"./ca.js": 192,
	"./cs": 193,
	"./cs.js": 193,
	"./cv": 194,
	"./cv.js": 194,
	"./cy": 195,
	"./cy.js": 195,
	"./da": 196,
	"./da.js": 196,
	"./de": 197,
	"./de-at": 198,
	"./de-at.js": 198,
	"./de-ch": 199,
	"./de-ch.js": 199,
	"./de.js": 197,
	"./dv": 200,
	"./dv.js": 200,
	"./el": 201,
	"./el.js": 201,
	"./en-au": 202,
	"./en-au.js": 202,
	"./en-ca": 203,
	"./en-ca.js": 203,
	"./en-gb": 204,
	"./en-gb.js": 204,
	"./en-ie": 205,
	"./en-ie.js": 205,
	"./en-il": 206,
	"./en-il.js": 206,
	"./en-nz": 207,
	"./en-nz.js": 207,
	"./eo": 208,
	"./eo.js": 208,
	"./es": 209,
	"./es-do": 210,
	"./es-do.js": 210,
	"./es-us": 211,
	"./es-us.js": 211,
	"./es.js": 209,
	"./et": 212,
	"./et.js": 212,
	"./eu": 213,
	"./eu.js": 213,
	"./fa": 214,
	"./fa.js": 214,
	"./fi": 215,
	"./fi.js": 215,
	"./fo": 216,
	"./fo.js": 216,
	"./fr": 217,
	"./fr-ca": 218,
	"./fr-ca.js": 218,
	"./fr-ch": 219,
	"./fr-ch.js": 219,
	"./fr.js": 217,
	"./fy": 220,
	"./fy.js": 220,
	"./gd": 221,
	"./gd.js": 221,
	"./gl": 222,
	"./gl.js": 222,
	"./gom-latn": 223,
	"./gom-latn.js": 223,
	"./gu": 224,
	"./gu.js": 224,
	"./he": 225,
	"./he.js": 225,
	"./hi": 226,
	"./hi.js": 226,
	"./hr": 227,
	"./hr.js": 227,
	"./hu": 228,
	"./hu.js": 228,
	"./hy-am": 229,
	"./hy-am.js": 229,
	"./id": 230,
	"./id.js": 230,
	"./is": 231,
	"./is.js": 231,
	"./it": 232,
	"./it.js": 232,
	"./ja": 233,
	"./ja.js": 233,
	"./jv": 234,
	"./jv.js": 234,
	"./ka": 235,
	"./ka.js": 235,
	"./kk": 236,
	"./kk.js": 236,
	"./km": 237,
	"./km.js": 237,
	"./kn": 238,
	"./kn.js": 238,
	"./ko": 239,
	"./ko.js": 239,
	"./ku": 240,
	"./ku.js": 240,
	"./ky": 241,
	"./ky.js": 241,
	"./lb": 242,
	"./lb.js": 242,
	"./lo": 243,
	"./lo.js": 243,
	"./lt": 244,
	"./lt.js": 244,
	"./lv": 245,
	"./lv.js": 245,
	"./me": 246,
	"./me.js": 246,
	"./mi": 247,
	"./mi.js": 247,
	"./mk": 248,
	"./mk.js": 248,
	"./ml": 249,
	"./ml.js": 249,
	"./mn": 250,
	"./mn.js": 250,
	"./mr": 251,
	"./mr.js": 251,
	"./ms": 252,
	"./ms-my": 253,
	"./ms-my.js": 253,
	"./ms.js": 252,
	"./mt": 254,
	"./mt.js": 254,
	"./my": 255,
	"./my.js": 255,
	"./nb": 256,
	"./nb.js": 256,
	"./ne": 257,
	"./ne.js": 257,
	"./nl": 258,
	"./nl-be": 259,
	"./nl-be.js": 259,
	"./nl.js": 258,
	"./nn": 260,
	"./nn.js": 260,
	"./pa-in": 261,
	"./pa-in.js": 261,
	"./pl": 262,
	"./pl.js": 262,
	"./pt": 263,
	"./pt-br": 264,
	"./pt-br.js": 264,
	"./pt.js": 263,
	"./ro": 265,
	"./ro.js": 265,
	"./ru": 266,
	"./ru.js": 266,
	"./sd": 267,
	"./sd.js": 267,
	"./se": 268,
	"./se.js": 268,
	"./si": 269,
	"./si.js": 269,
	"./sk": 270,
	"./sk.js": 270,
	"./sl": 271,
	"./sl.js": 271,
	"./sq": 272,
	"./sq.js": 272,
	"./sr": 273,
	"./sr-cyrl": 274,
	"./sr-cyrl.js": 274,
	"./sr.js": 273,
	"./ss": 275,
	"./ss.js": 275,
	"./sv": 276,
	"./sv.js": 276,
	"./sw": 277,
	"./sw.js": 277,
	"./ta": 278,
	"./ta.js": 278,
	"./te": 279,
	"./te.js": 279,
	"./tet": 280,
	"./tet.js": 280,
	"./tg": 281,
	"./tg.js": 281,
	"./th": 282,
	"./th.js": 282,
	"./tl-ph": 283,
	"./tl-ph.js": 283,
	"./tlh": 284,
	"./tlh.js": 284,
	"./tr": 285,
	"./tr.js": 285,
	"./tzl": 286,
	"./tzl.js": 286,
	"./tzm": 287,
	"./tzm-latn": 288,
	"./tzm-latn.js": 288,
	"./tzm.js": 287,
	"./ug-cn": 289,
	"./ug-cn.js": 289,
	"./uk": 290,
	"./uk.js": 290,
	"./ur": 291,
	"./ur.js": 291,
	"./uz": 292,
	"./uz-latn": 293,
	"./uz-latn.js": 293,
	"./uz.js": 292,
	"./vi": 294,
	"./vi.js": 294,
	"./x-pseudo": 295,
	"./x-pseudo.js": 295,
	"./yo": 296,
	"./yo.js": 296,
	"./zh-cn": 297,
	"./zh-cn.js": 297,
	"./zh-hk": 298,
	"./zh-hk.js": 298,
	"./zh-tw": 299,
	"./zh-tw.js": 299
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 420;

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_soporte_soporte__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_soporte_soporte__["a" /* SoportePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andre/Desktop/Programando/ventasdiarias/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar class="naranjo">\n      <ion-title>Gour-net</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openPage(\'HomePage\')">\n        Ventas del Día\n      </button>\n      <button ion-item (click)="openPage(\'SoportePage\')">\n        Soporte\n      </button>\n\n\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/andre/Desktop/Programando/ventasdiarias/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConectorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConectorProvider = /** @class */ (function () {
    function ConectorProvider(http) {
        this.http = http;
        this.url = "http://test.apipdv.clubgournet.cl/api/v1/";
        this.port = "3080";
        console.log('Hello ConectorProvider Provider');
    }
    ConectorProvider.prototype.traedatosGet = function (ruta) {
        var url = this.url + ruta;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ConectorProvider.prototype.traedatosPost = function () {
        var url = this.url + ":" + this.port + "/ws/bodegas";
        var body = { x: "soy el body" };
        return this.http.post(url, body).map(function (res) { return res.json(); });
    };
    ConectorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], ConectorProvider);
    return ConectorProvider;
}());

//# sourceMappingURL=conector.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MemoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MemoriaProvider = /** @class */ (function () {
    function MemoriaProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello MemoriaProvider Provider');
    }
    MemoriaProvider.prototype.limpiar = function () {
        this.empresa = undefined;
        this.locales = undefined;
    };
    MemoriaProvider.prototype.guardarDato = function (campo, valor) {
        this.storage.set(campo, valor);
    };
    MemoriaProvider.prototype.leerDato = function (campo) {
        return this.storage.get(campo).then(function (val) {
            return val;
        });
    };
    MemoriaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], MemoriaProvider);
    return MemoriaProvider;
}());

//# sourceMappingURL=memoria.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map