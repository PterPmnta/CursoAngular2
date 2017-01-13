import {Component} from 'angular2/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'contacto',
    templateUrl: "app/plantillas/contacto.html",
})

// Clase del componente donde iran los datos y funcionalidades
export class ContactoComponent {

    public tituloContacto:string = "Informacion de contacto";    

 }