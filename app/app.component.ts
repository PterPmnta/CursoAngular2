
// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {PeliculasListComponent} from './componentes/peliculas_list.component';
import {PeliculasFooterComponent} from './componentes/peliculas_footer.component';
import {ContactoComponent} from './componentes/contacto.component';
import { CrearPeliculaComponent } from './componentes/crear_pelicula.component'; 

import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
 
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: "app/plantillas/inicio.html",
    directives: [PeliculasListComponent, PeliculasFooterComponent, ContactoComponent, CrearPeliculaComponent, ROUTER_DIRECTIVES],
    styleUrls: ["../app/assets/css/estilos.css"]
})

@RouteConfig([
    {path: "/peliculas", name: "Peliculas", component: PeliculasListComponent, useAsDefault: true},
    {path: "/contacto", name: "Contacto", component: ContactoComponent},
    {path: "/agregar", name: "Agregar", component: CrearPeliculaComponent},
    {path: "/agregar/:titulo/:director/:anio", name: "AgregarBasada", component: CrearPeliculaComponent}
])

 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {

    public Titulo:string = "Peliculas Principal";    

 }