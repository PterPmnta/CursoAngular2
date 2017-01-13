import {Component} from 'angular2/core';
import {Pelicula} from '../modelos/pelicula';
import {PeliculasService} from '../servicios/peliculas.service';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-list',
    templateUrl: "app/plantillas/peliculas-list.html",
    providers: [PeliculasService]
})

export class PeliculasListComponent{

    public pelicula:Pelicula;  
    public mostrarDatos:boolean;  
    public mensajeBoton:string;
    public peliculas;
    
    constructor(private _servicioPelicula: PeliculasService) {  
        
        this.cargarInformacion();     
        this.llenarPeliculas(_servicioPelicula); 
        this.pelicula = this.peliculas[0];

    }

    cargarInformacion(){
        this.mostrarDatos = false;  
        this.mensajeBoton = "Mostrar Datos";
    }

    ocultarInformacion(){
        this.mostrarDatos = true;
        this.mensajeBoton = "Ocultar Datos";
    } 

    depurar(){
        console.log(this.pelicula);
    }

    cambiarEstado(){
        
        if(this.mostrarDatos === true){
            this.cargarInformacion();
        }else{
            this.ocultarInformacion();
        }
    } 

    llenarPeliculas(_servicioPelicula){
        this.peliculas = this._servicioPelicula.getPeliculas();
    } 

    cambiarPelicula(pelicula){
        this.pelicula = pelicula;
    }

}