System.register(['angular2/core', '../servicios/peliculas.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, peliculas_service_1, router_1;
    var PeliculasListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (peliculas_service_1_1) {
                peliculas_service_1 = peliculas_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            PeliculasListComponent = (function () {
                function PeliculasListComponent(_servicioPelicula) {
                    this._servicioPelicula = _servicioPelicula;
                    this.cargarInformacion();
                    this.llenarPeliculas(_servicioPelicula);
                    this.pelicula = this.peliculas[0];
                }
                PeliculasListComponent.prototype.cargarInformacion = function () {
                    this.mostrarDatos = false;
                    this.mensajeBoton = "Mostrar Datos";
                };
                PeliculasListComponent.prototype.ocultarInformacion = function () {
                    this.mostrarDatos = true;
                    this.mensajeBoton = "Ocultar Datos";
                };
                PeliculasListComponent.prototype.depurar = function () {
                    console.log(this.pelicula);
                };
                PeliculasListComponent.prototype.cambiarEstado = function () {
                    if (this.mostrarDatos === true) {
                        this.cargarInformacion();
                    }
                    else {
                        this.ocultarInformacion();
                    }
                };
                PeliculasListComponent.prototype.llenarPeliculas = function (_servicioPelicula) {
                    this.peliculas = this._servicioPelicula.getPeliculas();
                };
                PeliculasListComponent.prototype.cambiarPelicula = function (pelicula) {
                    this.pelicula = pelicula;
                };
                PeliculasListComponent = __decorate([
                    core_1.Component({
                        selector: 'peliculas-list',
                        templateUrl: "app/plantillas/peliculas-list.html",
                        providers: [peliculas_service_1.PeliculasService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [peliculas_service_1.PeliculasService])
                ], PeliculasListComponent);
                return PeliculasListComponent;
            }());
            exports_1("PeliculasListComponent", PeliculasListComponent);
        }
    }
});
//# sourceMappingURL=peliculas_list.component.js.map