import { Pelicula } from './../modelos/pelicula';
import {Injectable} from 'angular2/core';
import {PELICULAS} from './mock.peliculas';

@Injectable()

export class PeliculasService{

    getPeliculas(){
        return PELICULAS;
    }

    insertPelicula(nuevaPelicula: Pelicula){
        Promise.resolve(PELICULAS).then((peliculas: Pelicula[]) => peliculas.push(nuevaPelicula));
    }

}

