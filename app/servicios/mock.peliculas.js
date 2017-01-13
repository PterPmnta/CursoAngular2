System.register(['../modelos/pelicula'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pelicula_1;
    var PELICULAS;
    return {
        setters:[
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            exports_1("PELICULAS", PELICULAS = [
                new pelicula_1.Pelicula("Horrible Bosses", "Uno", 1999),
                new pelicula_1.Pelicula("Kun-Fusion", "Dos", 1999),
                new pelicula_1.Pelicula("El Aviador", "Tres", 1999),
                new pelicula_1.Pelicula("El Cubo", "Cuatro", 1999)
            ]);
        }
    }
});
//# sourceMappingURL=mock.peliculas.js.map