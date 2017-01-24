import { PeliculasService } from './../servicios/peliculas.service';
import { Router, RouteParams } from 'angular2/router';
import { Pelicula } from './../modelos/pelicula';
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    templateUrl: "app/plantillas/crear_pelicula.html",
    providers: [PeliculasService]
})

// Clase del componente donde iran los datos y funcionalidades
export class CrearPeliculaComponent implements OnInit {

    public tituloPelicula = "";
    public nuevaPelicula: Pelicula;

    constructor(private _peliculasService: PeliculasService, private _router:Router, private _routeParams:RouteParams){

    }

    onSubmit(){
        this._peliculasService.insertPelicula(this.nuevaPelicula);
        this._router.navigate(["Peliculas"]);
    }    

    ngOnInit():any{
        this.tituloPelicula = this._routeParams.get('titulo');
        this.nuevaPelicula = new Pelicula(
            this._routeParams.get('titulo'),
            this._routeParams.get('director'),
            parseInt(this._routeParams.get('anio'))
        );
    }

 }