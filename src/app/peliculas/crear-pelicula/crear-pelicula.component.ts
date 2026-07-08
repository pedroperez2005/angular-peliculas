import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';
import { ActorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.scss'
})
export class CrearPeliculaComponent {
  generosSeleccionados: SelectorMultipleDTO[] = [];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Drama'},
    { llave: 2, valor: 'Acción'},
    { llave: 3, valor: 'Comedia'}
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [];
  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Pablo Livas'},
    { llave: 2, valor: 'San Roque'},
    { llave: 3, valor: 'Valle Soleado'}
  ];

  actoresSeleccionados: ActorAutoCompleteDTO[] = [];

  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log('Creando pelicula', pelicula)
  }
}
