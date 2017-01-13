import { PeliculasService } from './../servicios/peliculas.service';
import { Router } from 'angular2/router';
import { Pelicula } from './../modelos/pelicula';
import {Component} from 'angular2/core';

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    templateUrl: "app/plantillas/crear_pelicula.html",
    providers: [PeliculasService]
})

// Clase del componente donde iran los datos y funcionalidades
export class CrearPeliculaComponent {

    constructor(private _peliculasService: PeliculasService, private _router:Router){

    }

    agregarPelicula(titulo:string, director:string, anio:number){
        
        let nuevaPelicula: Pelicula = new Pelicula(titulo, director, anio);
        this._peliculasService.insertPelicula(nuevaPelicula);

        this._router.navigate(["Peliculas"]);
    }    

 }